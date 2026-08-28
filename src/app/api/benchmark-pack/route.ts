/**
 * Le pack de ressources : on note le téléchargement, puis on sert le fichier.
 *
 * Le bouton pointe ici plutôt que sur un fichier statique, pour trois raisons.
 *
 * 1. **Les archives ne sont pas dans le dépôt.** Elles vivent dans le bucket
 *    privé `benchmark-packs`, et seule cette route sait le signer. Un lien signé
 *    rendu dans la page aurait commencé à expirer avant le clic.
 * 2. **La mesure devient fiable.** L'ancienne version envoyait un `POST` en
 *    parallèle du téléchargement, sans attendre la réponse : un bloqueur, un
 *    onglet fermé trop vite, et la ligne était perdue. Ici, l'enregistrement est
 *    sur le chemin du fichier.
 * 3. **Le nom du fichier est décidé par nous**, via `?download=`, pas par le nom
 *    de l'objet dans le bucket.
 *
 * **Rien de ce que fait la mesure ne doit empêcher le téléchargement.** Si
 * l'écriture échoue, ou si le parcours n'existe pas en base, le lecteur a quand
 * même son pack et nous avons perdu une ligne de mesure. Le seul refus possible
 * est un track inconnu ou un code mal formé, c'est-à-dire une URL fabriquée.
 *
 * Le premier téléchargement horodate, les suivants ne déplacent rien : ce qui
 * compte est de savoir si le pack a été pris, pas combien de fois la même
 * personne a cliqué.
 */

import { NextResponse } from "next/server";
import { z } from "zod";
import {
  PACKS_BUCKET,
  PACKS_ENABLED,
  PACK_LINK_TTL_SECONDS,
  packFor,
} from "@/lib/benchmark/packs";

const SUPABASE_URL = process.env.SUPABASE_URL?.replace(/\/$/, "");
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const TIMEOUT_MS = 6000;

const query = z.object({
  track: z.enum(["growth", "eng", "ops", "fin"]),
  run: z.string().regex(/^[A-Z0-9]{4}$/),
});

/**
 * Note le téléchargement. Best effort, volontairement : on n'attend rien de la
 * réponse au-delà du journal, et aucune erreur ne remonte à l'appelant.
 */
async function record(runCode: string): Promise<void> {
  if (!SUPABASE_URL || !SERVICE_KEY) {
    console.error("[BENCHMARK] Supabase is not configured, download not recorded");
    return;
  }
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/benchmark_runs` +
        `?run_code=eq.${runCode}&pack_downloaded_at=is.null`,
      {
        method: "PATCH",
        headers: {
          apikey: SERVICE_KEY,
          Authorization: `Bearer ${SERVICE_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ pack_downloaded_at: new Date().toISOString() }),
        signal: AbortSignal.timeout(TIMEOUT_MS),
      },
    );
    if (!res.ok) console.error(`[BENCHMARK] Download record failed: ${res.status}`);
  } catch (error) {
    console.error("[BENCHMARK] Download record threw:", error);
  }
}

/** Signe l'accès à l'objet pour quelques minutes. `null` si le stockage refuse :
 *  l'appelant transforme ça en message, jamais en fichier vide. */
async function signedUrl(object: string, filename: string): Promise<string | null> {
  if (!SUPABASE_URL || !SERVICE_KEY) return null;
  try {
    const res = await fetch(
      `${SUPABASE_URL}/storage/v1/object/sign/${PACKS_BUCKET}/${object}`,
      {
        method: "POST",
        headers: {
          apikey: SERVICE_KEY,
          Authorization: `Bearer ${SERVICE_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ expiresIn: PACK_LINK_TTL_SECONDS }),
        signal: AbortSignal.timeout(TIMEOUT_MS),
      },
    );
    if (!res.ok) {
      console.error(`[BENCHMARK] Pack signing failed: ${res.status} ${object}`);
      return null;
    }
    const data = (await res.json()) as { signedURL?: string };
    if (!data.signedURL) return null;

    // `download` pose l'en-tête Content-Disposition côté stockage : le fichier
    // arrive sous le nom que nous avons choisi, pas sous celui de l'objet.
    return (
      `${SUPABASE_URL}/storage/v1${data.signedURL}` +
      `&download=${encodeURIComponent(filename)}`
    );
  } catch (error) {
    console.error("[BENCHMARK] Pack signing threw:", error);
    return null;
  }
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const parsed = query.safeParse({
    track: url.searchParams.get("track"),
    run: url.searchParams.get("run"),
  });

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (!PACKS_ENABLED) {
    return NextResponse.json({ error: "Packs disabled" }, { status: 404 });
  }

  const pack = packFor(parsed.data.track);
  if (!pack) {
    return NextResponse.json({ error: "Unknown pack" }, { status: 404 });
  }

  // La mesure d'abord, le fichier ensuite : c'est le seul ordre où une ligne
  // n'est pas perdue quand le navigateur suit la redirection immédiatement.
  await record(parsed.data.run);

  const href = await signedUrl(pack.object, pack.filename);
  if (!href) {
    return NextResponse.json(
      { error: "Pack temporarily unavailable" },
      { status: 503 },
    );
  }

  // 302 et non 307 : le lien signé est valable quelques minutes, il ne doit pas
  // être mis en cache comme une adresse permanente.
  return NextResponse.redirect(href, {
    status: 302,
    headers: { "Cache-Control": "no-store" },
  });
}

/**
 * Quelqu'un vient de prendre le pack de ressources. On le note, et c'est tout.
 *
 * Le fichier lui-même est servi par le site, pas par cette route : c'est un
 * lien de téléchargement ordinaire. Ici on ne fait qu'horodater, pour savoir si
 * le pack sert à quelque chose. Section 10.5 du PRD.
 *
 * **Rien de ce que fait cette route ne doit empêcher le téléchargement.** Le
 * navigateur suit le lien de son côté ; si l'écriture échoue, le lecteur a
 * quand même son fichier et nous avons juste perdu une ligne de mesure. La
 * réponse est donc toujours 200, sauf requête malformée.
 *
 * Le premier téléchargement horodate, les suivants ne déplacent rien : ce qui
 * compte est de savoir si le pack a été pris, pas combien de fois la même
 * personne a cliqué.
 */

import { NextResponse } from "next/server";
import { z } from "zod";

const SUPABASE_URL = process.env.SUPABASE_URL?.replace(/\/$/, "");
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const schema = z.object({ runCode: z.string().regex(/^[A-Z0-9]{4}$/) });

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (!SUPABASE_URL || !SERVICE_KEY) {
    console.error("[BENCHMARK] Supabase is not configured, download not recorded");
    return NextResponse.json({ recorded: false });
  }

  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/benchmark_runs` +
        `?run_code=eq.${parsed.data.runCode}&pack_downloaded_at=is.null`,
      {
        method: "PATCH",
        headers: {
          apikey: SERVICE_KEY,
          Authorization: `Bearer ${SERVICE_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ pack_downloaded_at: new Date().toISOString() }),
        signal: AbortSignal.timeout(4000),
      },
    );

    if (!res.ok) {
      console.error(`[BENCHMARK] Download record failed: ${res.status}`);
      return NextResponse.json({ recorded: false });
    }
  } catch (error) {
    console.error("[BENCHMARK] Download record threw:", error);
    return NextResponse.json({ recorded: false });
  }

  return NextResponse.json({ recorded: true });
}

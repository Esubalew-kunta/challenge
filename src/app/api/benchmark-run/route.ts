/**
 * Un parcours du Benchmark vient de se terminer. On l'écrit, et on renvoie le
 * classement.
 *
 * **Une seule écriture, à la fin d'un parcours terminé.** Les parcours
 * abandonnés ne laissent rien : le PRD ne persiste que l'agrégat, et le détail
 * juste ou faux vit en session le temps du corrigé puis disparaît.
 *
 * Trois choses sont calculées par la base et jamais envoyées par le
 * navigateur, parce que le navigateur n'a aucun droit de lecture sur la table :
 * `attempt`, `is_best`, et `public_name`. Cette dernière est la promesse faite
 * à l'étape 01, prénom plus initiale, et elle tient même si le front se trompe.
 *
 * **Un échec d'écriture ne coûte que la ligne.** Le lecteur voit sa carte de
 * score entière dans tous les cas : elle est calculée chez lui. On réessaie une
 * fois, puis on rend le classement d'amorçage sans son rang, ce qui vaut mieux
 * qu'une erreur en travers d'un résultat qu'il vient de gagner.
 *
 * La clé service_role est lue ici, sur le serveur, et nulle part ailleurs. Elle
 * contourne toutes les règles RLS, donc elle ne doit jamais être importée dans
 * un composant client ni préfixée NEXT_PUBLIC_.
 */

import { NextResponse } from "next/server";
import { benchmarkRunSchema } from "@/lib/schemas/benchmark-run";
import { buildBoard, type StoredRow } from "@/lib/benchmark/board";

const SUPABASE_URL = process.env.SUPABASE_URL?.replace(/\/$/, "");
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const TIMEOUT_MS = 6000;

type InsertedRow = { id: string };

function headers(extra: Record<string, string> = {}) {
  return {
    apikey: SERVICE_KEY as string,
    Authorization: `Bearer ${SERVICE_KEY}`,
    "Content-Type": "application/json",
    ...extra,
  };
}

async function insertRun(payload: unknown): Promise<string | null> {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/benchmark_runs`, {
    method: "POST",
    headers: headers({ Prefer: "return=representation" }),
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });

  if (!res.ok) {
    console.error(`[BENCHMARK] Insert failed: ${res.status} ${await res.text()}`);
    return null;
  }

  const rows = (await res.json()) as InsertedRow[];
  return rows[0]?.id ?? null;
}

/**
 * Les lignes éligibles au classement, une par adresse. La durée et la date
 * sont lues ici parce que le tri en a besoin, et elles ne repartent jamais
 * vers le navigateur : `buildBoard` ne les recopie pas dans ses lignes.
 */
async function readBoardRows(): Promise<StoredRow[]> {
  const columns =
    "id,public_name,company,track_id,final_tier,score,attempt,duration_seconds,created_at";

  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/benchmark_runs?select=${columns}&is_best=eq.true`,
    { headers: headers(), signal: AbortSignal.timeout(TIMEOUT_MS) },
  );

  if (!res.ok) {
    console.error(`[BENCHMARK] Board read failed: ${res.status} ${await res.text()}`);
    return [];
  }

  const rows = (await res.json()) as Record<string, unknown>[];
  return rows.map((r) => ({
    id: String(r.id),
    publicName: String(r.public_name),
    company: String(r.company),
    trackId: r.track_id as StoredRow["trackId"],
    finalTier: r.final_tier as StoredRow["finalTier"],
    score: Number(r.score),
    attempt: Number(r.attempt),
    durationSeconds: Number(r.duration_seconds),
    createdAt: String(r.created_at),
  }));
}

/**
 * L'identifiant de la ligne qui représente cette adresse au classement.
 *
 * Ce n'est pas forcément celle qu'on vient d'écrire : quelqu'un qui repasse le
 * test et fait moins bien reste au classement avec son meilleur parcours. Sans
 * cette requête, il verrait « aucun rang » juste après avoir joué, alors que sa
 * ligne est en haut du tableau.
 */
async function findBestRowId(email: string): Promise<string | null> {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/benchmark_runs?select=id&is_best=eq.true&email=eq.${encodeURIComponent(email)}`,
    { headers: headers(), signal: AbortSignal.timeout(TIMEOUT_MS) },
  );
  if (!res.ok) return null;
  const rows = (await res.json()) as InsertedRow[];
  return rows[0]?.id ?? null;
}

/** Le nombre de sessions réelles, reprises comprises. Le compteur du classement
 *  parle de parcours, pas de personnes. */
async function countRuns(): Promise<number> {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/benchmark_runs?select=id`, {
    headers: headers({ Prefer: "count=exact", Range: "0-0" }),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  const range = res.headers.get("content-range");
  const total = range?.split("/")[1];
  return total && total !== "*" ? Number(total) : 0;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const parsed = benchmarkRunSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid request" },
      { status: 400 },
    );
  }

  const d = parsed.data;

  if (!SUPABASE_URL || !SERVICE_KEY) {
    // Le dire fort dans le journal et continuer. Un 200 silencieux cacherait un
    // déploiement cassé pendant des semaines, et refuser le lecteur le
    // punirait pour ça.
    console.error("[BENCHMARK] Supabase is not configured, run not written");
    return NextResponse.json({ stored: false, board: buildBoard([]) });
  }

  const row = {
    run_code: d.runCode,
    display_name: d.displayName,
    // Recalculé par la base de toute façon. Envoyé pour que la colonne NOT NULL
    // soit satisfaite, jamais pour décider ce qui s'affiche.
    public_name: d.displayName,
    email: d.email.toLowerCase(),
    company: d.company,
    track_id: d.trackId,
    role: d.role,
    final_tier: d.finalTier,
    score: d.score,
    correct_count: d.correctCount,
    duration_seconds: d.durationSeconds,
    round_results: d.roundResults,
    locale: d.locale,
  };

  let id: string | null = null;
  for (let attempt = 0; attempt < 2 && id === null; attempt++) {
    try {
      id = await insertRun(row);
    } catch (error) {
      console.error(`[BENCHMARK] Insert threw (essai ${attempt + 1}):`, error);
    }
  }

  let stored: StoredRow[] = [];
  let youId: string | null = null;
  let totalRuns = 0;
  try {
    [stored, youId, totalRuns] = await Promise.all([
      readBoardRows(),
      findBestRowId(row.email),
      countRuns(),
    ]);
  } catch (error) {
    console.error("[BENCHMARK] Board read threw:", error);
  }

  return NextResponse.json({
    stored: id !== null,
    board: buildBoard(stored, youId, undefined, totalRuns),
  });
}

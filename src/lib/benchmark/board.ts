/**
 * Le classement : tri et rang.
 *
 * **Les quatorze parcours d'exemple ont été retirés le 31 août.** Ils
 * remplissaient le tableau pendant que personne n'avait encore joué, et ils ont
 * fait leur travail : il y a maintenant treize parcours réels. À partir de là
 * ils coûtent plus qu'ils ne rapportent. Un collègue qui reconnaît « Voltaire
 * Dynamics » comme une entreprise inventée cesse de croire au reste du tableau,
 * et le décor occupait neuf des dix premières places, ce qui repoussait les
 * vraies performances hors de l'écran.
 *
 * Ils n'ont jamais été en base : une table qui contient de vraies adresses
 * e-mail n'est pas l'endroit où poser des personnes inventées, sous peine que
 * la première personne qui exporte les leads récupère quatorze fantômes. Ils
 * étaient fusionnés ici, au rendu, et il a donc suffi de ne plus les fusionner.
 * Les données brutes restent dans `content/labels.ts`, qui est une copie du
 * pack, mais plus rien ne les lit.
 *
 * Le tri suit la section 10.1 du PRD : score, puis durée la plus courte, puis
 * soumission la plus ancienne.
 *
 * Le tri a besoin de la durée, que la vue publique n'expose volontairement pas.
 * C'est pourquoi cette fusion tourne côté serveur, dans la route API, avec la
 * clé service_role : la durée sert au classement et ne quitte jamais le
 * serveur.
 *
 * **L'entreprise ne sort plus du serveur non plus.** Décision du 31 août, avant
 * le partage du Benchmark à un groupe : le classement est public à qui possède
 * le lien, et le couple « prénom + employeur + niveau faible » désigne une
 * personne dans une petite structure. Le champ reste demandé et reste écrit en
 * base, où il sert à la qualification commerciale. Il n'est simplement plus
 * envoyé au navigateur : une colonne masquée en CSS reste lisible dans la
 * réponse réseau, ce qui n'est pas la même chose que ne pas l'envoyer.
 */

import type { TierKey, TrackId } from "./types.ts";

/** Une ligne telle qu'elle sort de la base, durée comprise. */
export type StoredRow = {
  id: string;
  publicName: string;
  trackId: TrackId;
  finalTier: TierKey;
  score: number;
  attempt: number;
  durationSeconds: number;
  createdAt: string;
};

/** Une ligne telle qu'elle s'affiche. Ni e-mail, ni entreprise, ni durée, ni
 *  date. */
export type BoardRow = {
  rank: number;
  name: string;
  trackId: TrackId;
  tier: TierKey;
  score: number;
  /** Vrai au-delà de la première tentative. Le badge est le mécanisme
   *  d'honnêteté du tableau, puisque les reprises sont illimitées. */
  isRetake: boolean;
  isYou: boolean;
};

export type Board = {
  /** Le top 10, plus la ligne du lecteur épinglée s'il est en dehors. */
  rows: BoardRow[];
  /** Le compteur « {n} parcours ». Il compte des **sessions** et non des
   *  personnes : quelqu'un qui repasse le test a fait deux parcours même s'il
   *  n'occupe qu'une ligne. */
  total: number;
  /** Le rang du lecteur dans le classement complet, ou null hors session. */
  yourRank: number | null;
};

export const BOARD_SIZE = 10;

type Sortable = {
  score: number;
  durationSeconds: number;
  createdAt: string;
  row: Omit<BoardRow, "rank">;
};

function toSortable(rows: StoredRow[], youId: string | null): Sortable[] {
  return rows.map((r) => ({
    score: r.score,
    durationSeconds: r.durationSeconds,
    createdAt: r.createdAt,
    row: {
      name: r.publicName,
      trackId: r.trackId,
      tier: r.finalTier,
      score: r.score,
      isRetake: r.attempt > 1,
      isYou: youId !== null && r.id === youId,
    },
  }));
}

export function buildBoard(
  stored: StoredRow[],
  youId: string | null = null,
  /** Le nombre total de sessions, reprises comprises. Sans lui, on compte les
   *  lignes du tableau, ce qui sous-estime dès la première reprise. */
  totalRuns: number = stored.length,
): Board {
  const all = toSortable(stored, youId);

  all.sort(
    (a, b) =>
      b.score - a.score ||
      a.durationSeconds - b.durationSeconds ||
      a.createdAt.localeCompare(b.createdAt),
  );

  const ranked: BoardRow[] = all.map((entry, i) => ({ rank: i + 1, ...entry.row }));
  const yourIndex = ranked.findIndex((r) => r.isYou);

  const rows = ranked.slice(0, BOARD_SIZE);
  if (yourIndex >= BOARD_SIZE) {
    rows.push(ranked[yourIndex]);
  }

  return {
    rows,
    total: totalRuns,
    yourRank: yourIndex === -1 ? null : yourIndex + 1,
  };
}

/**
 * Le classement : fusion, tri, rang.
 *
 * **Les quatorze parcours d'exemple ne sont pas en base.** Ce sont des
 * personnes inventées, et une table qui contient de vraies adresses e-mail
 * n'est pas l'endroit où les mettre : la première personne qui exporte les
 * leads récupère quatorze fantômes sans savoir lesquels. Ils sont donc fusionnés
 * ici, au rendu. Décision du 28 août.
 *
 * Le tri suit la section 10.1 du PRD : score, puis durée la plus courte, puis
 * soumission la plus ancienne. Deux règles s'y ajoutent, que le PRD ne couvre
 * pas parce qu'il n'avait pas prévu la fusion :
 *
 * - **À score égal, un vrai parcours passe devant un exemple.** Quelqu'un qui a
 *   réellement répondu à neuf questions ne se fait pas doubler par un décor.
 * - **Les exemples comptent dans le total affiché.** Le tableau montre quatorze
 *   lignes : annoncer « 3 parcours » à côté serait absurde.
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
import { SEED_BOARD, type SeedRow } from "./content/index.ts";

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

/** Une ligne telle qu'elle s'affiche. Ni e-mail, ni durée, ni date. */
export type BoardRow = {
  rank: number;
  name: string;
  trackId: TrackId;
  tier: TierKey;
  score: number;
  /** Vrai au-delà de la première tentative. Le badge est le mécanisme
   *  d'honnêteté du tableau, puisque les reprises sont illimitées. */
  isRetake: boolean;
  isSeed: boolean;
  isYou: boolean;
};

export type Board = {
  /** Le top 10, plus la ligne du lecteur épinglée s'il est en dehors. */
  rows: BoardRow[];
  /** Le compteur « {n} parcours ». Il compte des **sessions**, exemples
   *  compris, et non des personnes : quelqu'un qui repasse le test a fait deux
   *  parcours même s'il n'occupe qu'une ligne. */
  total: number;
  /** Le rang du lecteur dans le classement complet, ou null hors session. */
  yourRank: number | null;
};

export const BOARD_SIZE = 10;

type Sortable = {
  score: number;
  isSeed: boolean;
  durationSeconds: number;
  createdAt: string;
  row: Omit<BoardRow, "rank">;
};

function toSortable(rows: StoredRow[], youId: string | null): Sortable[] {
  return rows.map((r) => ({
    score: r.score,
    isSeed: false,
    durationSeconds: r.durationSeconds,
    createdAt: r.createdAt,
    row: {
      name: r.publicName,
      trackId: r.trackId,
      tier: r.finalTier,
      score: r.score,
      isRetake: r.attempt > 1,
      isSeed: false,
      isYou: youId !== null && r.id === youId,
    },
  }));
}

function seedsToSortable(seeds: SeedRow[]): Sortable[] {
  return seeds.map((s) => ({
    score: s.score,
    isSeed: true,
    // Aucun exemple n'a de durée. La valeur ne sert qu'à ne jamais gagner un
    // départage contre un vrai parcours.
    durationSeconds: Number.POSITIVE_INFINITY,
    createdAt: "",
    row: {
      name: s.name,
      trackId: s.track,
      tier: s.tier,
      score: s.score,
      isRetake: false,
      isSeed: true,
      isYou: false,
    },
  }));
}

export function buildBoard(
  stored: StoredRow[],
  youId: string | null = null,
  seeds: SeedRow[] = SEED_BOARD,
  /** Le nombre total de sessions réelles, reprises comprises. Sans lui, on
   *  compte les lignes du tableau, ce qui sous-estime dès la première reprise. */
  totalRuns: number = stored.length,
): Board {
  const all = [...toSortable(stored, youId), ...seedsToSortable(seeds)];

  all.sort(
    (a, b) =>
      b.score - a.score ||
      Number(a.isSeed) - Number(b.isSeed) ||
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
    total: totalRuns + seeds.length,
    yourRank: yourIndex === -1 ? null : yourIndex + 1,
  };
}

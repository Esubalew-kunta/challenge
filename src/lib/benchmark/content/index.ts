/**
 * Le contenu du Benchmark, typé.
 *
 * `tracks.ts`, `roles.ts` et `labels.ts` à côté sont des **copies exactes** de
 * ce que fournit le pack de contenu. Elles ne sont jamais annotées, jamais
 * reformatées et jamais retouchées : la seule opération autorisée dessus est
 * la copie de fichier. C'est ce qui permet de les rediffer contre le pack sans
 * discussion.
 *
 * Les types s'appliquent donc ici, à la frontière, et pas dans les données.
 */

import type { Track, TrackId, TierKey } from "../types.ts";

import { TRACKS as RAW_TRACKS } from "./tracks.ts";
import { ROLES as RAW_ROLES } from "./roles.ts";
import {
  TIER_LABEL as RAW_TIER_LABEL,
  HASHTAGS as RAW_HASHTAGS,
  POST_LINKEDIN,
  DEFI_COLLEGUE,
  SEED_BOARD as RAW_SEED_BOARD,
} from "./labels.ts";

/** Les quatre tracks du PRD. TRK-04 « fin » n'est pas encore livré, donc
 *  `TRACKS` en compte trois pour l'instant et le quatrième s'ajoutera au
 *  fichier de contenu sans toucher une ligne de code. */
export const TRACKS = RAW_TRACKS as Track[];

export const ROLES = RAW_ROLES as Record<TrackId, string[]>;

export const TIER_LABEL = RAW_TIER_LABEL as Record<TierKey, string>;

export const HASHTAGS = RAW_HASHTAGS as Record<TrackId, string>;

export { POST_LINKEDIN, DEFI_COLLEGUE };

/** Le classement d'amorçage. Ces lignes ne sont pas écrites en base : ce sont
 *  des personnes inventées, et une table de leads n'est pas l'endroit où les
 *  mettre. Elles sont fusionnées au rendu, décision prise le 28 août. */
export type SeedRow = {
  name: string;
  co: string;
  track: TrackId;
  tier: TierKey;
  score: number;
  seed: true;
};

export const SEED_BOARD = RAW_SEED_BOARD as SeedRow[];

/** Le track demandé, ou `undefined` s'il n'a pas encore de banque. */
export function trackById(id: string): Track | undefined {
  return TRACKS.find((track) => track.id === id);
}

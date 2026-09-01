/**
 * La récompense : un pack de trois skills d'agent par track.
 *
 * ── Ce que c'est, et ce que ce n'est pas ─────────────────────────────────────
 *
 * Des packs de ressources avaient existé sur cet écran et ont été retirés le
 * 31 août, l'idée étant abandonnée. Ceux-ci sont autre chose : trois skills
 * réelles, choisies pour le métier du track, qui s'installent dans Claude Code.
 * Les archives sont livrées par Youssef et vivent dans `public/benchmark-packs/`.
 *
 * ── Le poids est mesuré, jamais écrit ────────────────────────────────────────
 *
 * `content/packs.ts` est généré par `scripts/build-benchmark-packs.mjs`, qui
 * ouvre chaque archive et pèse le fichier. La maquette annonçait « 80 Ko » sous
 * le bouton : c'est le poids d'un seul des quatre packs, et il aurait été faux
 * pour les trois autres dès le premier jour.
 *
 * ── Kilo-octets binaires ─────────────────────────────────────────────────────
 *
 * Division par 1024, comme l'explorateur de fichiers de qui télécharge. Un
 * « 79 Ko » affiché ici et un « 79,2 Ko » dans la fenêtre de téléchargement se
 * répondent ; un « 81 Ko » calculé en base 1000 aurait l'air d'une erreur.
 */

import type { Locale } from "../i18n.ts";
import type { TrackId } from "./types.ts";
import { PACKS, type SkillPack } from "./content/packs.ts";

export type { SkillPack };
export { PACKS };

/** Où les archives sont servies. Un fichier statique, pas une route : rien à
 *  calculer, et le CDN de Vercel s'en occupe. */
export const PACK_DIR = "/benchmark-packs";

export function packFor(trackId: TrackId): SkillPack {
  return PACKS[trackId];
}

export function packDownloadPath(trackId: TrackId): string {
  return `${PACK_DIR}/${PACKS[trackId].file}`;
}

/**
 * Le poids, tel qu'il s'affiche sous le bouton.
 *
 * L'unité est le seul mot traduit ici, et elle est traitée comme une chaîne
 * d'interface : « Ko » en français, « KB » en anglais. Le nombre, lui, est
 * mesuré et ne dépend pas de la langue.
 */
const UNIT: Record<Locale, string> = { fr: "Ko", en: "KB" };

export function packSizeLabel(trackId: TrackId, locale: Locale): string {
  return `${Math.round(PACKS[trackId].bytes / 1024)} ${UNIT[locale]}`;
}

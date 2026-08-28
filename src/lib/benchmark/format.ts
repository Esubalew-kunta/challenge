/**
 * Les trois formats affichés que le moteur ne produit pas lui-même.
 *
 * Ils vivent hors des composants pour une seule raison : ils sont testables, et
 * deux d'entre eux corrigent une faute qui ne se verrait qu'une fois en ligne.
 */

import type { Locale } from "../i18n.ts";
import { sf } from "./strings.ts";

/** La durée, au format de l'artefact, repris tel quel. Les deux langues
 *  l'écrivent pareil : 1m 06s ne se traduit pas. */
export function formatTime(total: number): string {
  const m = Math.floor(total / 60);
  return `${m}m ${String(total % 60).padStart(2, "0")}s`;
}

/**
 * Le compteur du classement, avec le bon ordinal.
 *
 * Le gabarit du pack s'écrit « vous êtes {rang}e », ce qui donne 15e, 7e, 2e.
 * En français le premier est « 1er », pas « 1e », et c'est précisément la
 * personne en tête du classement qui le lit.
 *
 * La substitution se fait sur une marque plutôt que sur le texte rendu : sans
 * elle, remplacer « 1e » attraperait n'importe quel « 1e » ailleurs dans la
 * phrase. La chaîne validée n'est jamais modifiée.
 */
/** L'ordinal français. Le premier est « 1er », tous les autres prennent « e ». */
export function frenchOrdinal(rank: number): string {
  return rank === 1 ? "1er" : `${rank}e`;
}

/**
 * L'ordinal anglais : 1st, 2nd, 3rd, puis th. Avec la seule irrégularité qui
 * compte, celle qui fait écrire « 11st » à qui ne regarde que le dernier
 * chiffre : 11, 12 et 13 prennent th, et leurs multiples de cent aussi (111e,
 * 212e). Un classement de cent parcours y arrive.
 */
export function englishOrdinal(rank: number): string {
  const lastTwo = rank % 100;
  if (lastTwo >= 11 && lastTwo <= 13) return `${rank}th`;
  switch (rank % 10) {
    case 1:
      return `${rank}st`;
    case 2:
      return `${rank}nd`;
    case 3:
      return `${rank}rd`;
    default:
      return `${rank}th`;
  }
}

const ORDINAL: Record<Locale, (rank: number) => string> = {
  fr: frenchOrdinal,
  en: englishOrdinal,
};

export function rankCounter(total: number, rank: number, locale: Locale): string {
  const MARK = "@@RANG@@";
  const rendered = sf("leaderboard.counter", { n: total, rang: MARK }, locale);
  const ordinal = ORDINAL[locale](rank);

  // Le gabarit français porte le « e » hors du jeton : « vous êtes {rang}e ».
  if (rendered.includes(`${MARK}e`)) {
    return rendered.replace(`${MARK}e`, ordinal);
  }
  // Le gabarit ne porte plus le suffixe : on rend l'ordinal complet à sa place.
  // C'est le cas attendu en anglais, où « 1st » ne se découpe pas.
  return rendered.replace(MARK, ordinal);
}

/**
 * La ligne de round, coupée en deux colonnes.
 *
 * Le pack écrit la ligne entière — « Round 1 — intermédiaire, palier 1 : 3/3,
 * 60 pts » — et l'artefact la présente en deux colonnes. La coupe tombe donc
 * sur le tiret, et c'est le genre de détail qui survit mal à une traduction :
 * un tiret demi-cadratin ou un trait d'union à la place du cadratin, et toute
 * la ligne se retrouve dans la colonne de gauche, sans erreur nulle part.
 *
 * Les trois tirets sont donc acceptés, on ne coupe qu'à la première occurrence
 * (une seconde ailleurs dans la phrase perdrait la fin de la ligne), et une
 * ligne sans tiret rend la colonne de droite vide plutôt que de disparaître.
 */
const ROUND_LINE_SEPARATORS = [" — ", " – ", " - "];

export function splitRoundLine(line: string): [string, string] {
  for (const separator of ROUND_LINE_SEPARATORS) {
    const at = line.indexOf(separator);
    if (at !== -1) {
      return [line.slice(0, at), line.slice(at + separator.length)];
    }
  }
  return [line, ""];
}

/**
 * Les deux formats affichés que le moteur ne produit pas lui-même.
 *
 * Ils vivent hors des composants pour une seule raison : ils sont testables, et
 * l'un des deux corrige une faute de français que personne ne verrait avant
 * qu'elle soit en ligne.
 */

import { sf } from "./strings.fr.ts";

/** La durée, au format de l'artefact, repris tel quel. */
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

export function rankCounter(total: number, rank: number): string {
  const MARK = "@@RANG@@";
  const rendered = sf("leaderboard.counter", { n: total, rang: MARK });
  const ordinal = frenchOrdinal(rank);

  if (rendered.includes(`${MARK}e`)) {
    return rendered.replace(`${MARK}e`, ordinal);
  }
  // Le gabarit ne porte plus le « e » : on rend l'ordinal complet à sa place.
  return rendered.replace(MARK, ordinal);
}

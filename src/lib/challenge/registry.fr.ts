/**
 * Les faits partagés du challenge, côté français.
 *
 * Même principe que `registry.ts` : une phrase que plusieurs jours répètent
 * vit ici et n'est jamais retapée, pour que deux jours ne puissent pas se
 * contredire.
 *
 * Ce qui n'est PAS dupliqué ici : les commandes. `INSTALL`, `SETTINGS_PATHS`
 * et les chemins de fichiers viennent de `registry.ts` et sont les mêmes dans
 * les deux langues, parce qu'une commande ne se traduit pas. Traduire
 * `claude --version` serait une faute, pas une localisation.
 */

/**
 * Codes de sortie des garde-fous. Repris par les jours 8 et 11.
 * Version française de `EXIT_CODES`, même structure, mêmes valeurs.
 */
export const EXIT_CODES_FR = {
  head: ["Numéro", "Signification", "Ce qu'il faut savoir"],
  rows: [
    [
      "0",
      "Pas d'objection",
      "Ce n'est pas la même chose qu'« approuvé ». Les règles de permission habituelles de Claude s'appliquent quand même ensuite.",
    ],
    [
      "2",
      "Bloqué",
      "L'action est arrêtée. Ce que votre script a écrit en erreur repart vers Claude, qui peut donc tenter autre chose.",
    ],
  ],
} as const;

/**
 * La raison numéro un pour laquelle une première installation semble échouer :
 * elle se passe très bien, puis refuse la connexion. Dit au jour 1, repris au
 * jour 6.
 */
export const PLAN_REQUIREMENT_FR = {
  short: "Un compte Claude.ai gratuit n'inclut pas Claude Code.",
  long: "Il vous faut Pro, Max, Team ou Enterprise, ou un compte Claude Console avec du crédit dessus. Le jour 6 explique lequel vous convient, et comment savoir quand vous avez vraiment besoin de monter.",
} as const;

/** Machine minimum. Repris au jour 1. */
export const SYSTEM_REQUIREMENTS_FR =
  "macOS 13 ou plus récent, Windows 10 ou plus récent, ou un Linux récent, avec au moins 4 Go de mémoire.";

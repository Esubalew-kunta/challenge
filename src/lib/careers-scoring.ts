/**
 * Score de présélection automatique — /api/careers-apply.
 *
 * Calculé côté serveur. Jamais une décision : un `autoScreenScore` bas ne
 * rejette personne, il aide l'équipe à trier. Toute candidature est capturée,
 * quel que soit le score.
 *
 * Ne prend QUE des primitives, pas le type `JobRole` (`app/(fr)/carrieres/
 * postes.ts`) : `lib/` ne dépend pas de `app/`, même par un import de type —
 * même principe que la duplication volontaire de `ROLE_SLUGS` dans
 * `schemas/application.ts`. L'appelant (la route API) déstructure le rôle
 * avant d'appeler cette fonction.
 *
 * ---
 *
 * Le score ne repose plus que sur l'EXPÉRIENCE depuis le 2026-08-12.
 *
 * Il pesait auparavant trois réponses : expérience (50), question éliminatoire
 * du poste (40), français (10). Les deux dernières ont quitté le formulaire de
 * base pour le niveau suivant de la présélection, et il ne reste donc qu'un
 * seul signal mesurable à l'entrée.
 *
 * Les champs devenus obligatoires — LinkedIn, GitHub, CV, lettre — ne sont
 * délibérément PAS notés : tout le monde les fournit désormais, donc ils ne
 * séparent plus personne. Les noter reviendrait à distribuer les mêmes points
 * à tous et à faire passer pour une mesure ce qui n'est qu'une constante. La
 * longueur d'une lettre, elle, mesure la longueur d'une lettre — pas la
 * qualité d'un candidat.
 *
 * Le score d'entrée est donc étroit, et c'est assumé : le jugement se fait au
 * niveau 2, sur les questions qui viennent d'y être déplacées.
 */

export type ScoreInput = {
  yearsExperience: number;
  experienceMinValue: number;
};

export type ScoreResult = {
  autoScreenScore: number;
  flags: string[];
};

export function scoreApplication(input: ScoreInput): ScoreResult {
  const flags: string[] = [];

  // Sans seuil déclaré pour le poste, il n'y a rien à mesurer : toute
  // expérience vaut le score plein, plutôt qu'une division par zéro déguisée
  // en note.
  if (!(input.experienceMinValue > 0)) {
    return { autoScreenScore: 100, flags };
  }

  // Crédit plein au seuil ou au-dessus ; en dessous, crédit proportionnel
  // plutôt que zéro — un candidat à 1,5 an sur un seuil de 2 n'est pas nul.
  const ratio = Math.max(0, input.yearsExperience) / input.experienceMinValue;
  if (ratio < 1) flags.push("below_min_experience");

  const autoScreenScore = Math.min(100, Math.max(0, Math.round(ratio * 100)));
  return { autoScreenScore, flags };
}

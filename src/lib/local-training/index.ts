import type { LocalTrainingContent } from "./types";
import { lilleTraining } from "./lille";

/**
 * Registre des villes migrées sur le gabarit V2.
 *
 * Une ville absente de ce registre continue d'être rendue par le gabarit
 * historique de `(fr)/formation-ia/[ville]/page.tsx` — c'est ce qui garantit
 * qu'une migration ne modifie jamais le rendu des autres villes.
 *
 * Migrer une ville = ajouter son fichier de contenu ici. Rien d'autre.
 */
export const LOCAL_TRAINING_V2: Record<string, LocalTrainingContent> = {
  lille: lilleTraining,
};

export function getLocalTrainingV2(
  slug: string,
): LocalTrainingContent | undefined {
  return LOCAL_TRAINING_V2[slug];
}

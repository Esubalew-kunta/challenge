/**
 * La liste française des travaux de l'outil du jour 6.
 *
 * Mêmes identifiants que la version anglaise, mot pour mot. C'est ce qui fait
 * qu'un lecteur qui coche trois travaux en français puis passe à l'anglais
 * garde sa sélection : ce qui est enregistré, c'est `weeklyUpdate`, pas une
 * phrase. Renommer un identifiant déjà publié casserait ça en silence.
 *
 * Rien d'autre ici : les durées, les fréquences et les règles de calcul vivent
 * dans `cost-jobs.ts` et sont les mêmes dans les deux langues, parce qu'une
 * demi-heure ne se traduit pas.
 */

import type { CostJob, CostJobGroup } from "./cost-jobs";

export const COST_JOBS_FR: Record<CostJobGroup, CostJob[]> = {
  general: [
    { id: "weeklyUpdate", label: "Le point hebdomadaire que personne n'aime écrire" },
    { id: "explainAgain", label: "Réexpliquer la même chose à un collègue" },
    { id: "sameReport", label: "Le même rapport, avec de nouveaux chiffres" },
    { id: "newProject", label: "Mettre en place un nouveau projet de zéro" },
    { id: "findWhere", label: "Fouiller les fichiers pour trouver où une chose est gérée" },
    { id: "reviewWork", label: "Relire le travail de quelqu'un d'autre" },
    { id: "notesToDoc", label: "Transformer des notes en vrac en document propre" },
    { id: "moveData", label: "Recopier les mêmes données d'un endroit à un autre" },
  ],

  sales: [
    { id: "pipelineUpdate", label: "Le point hebdomadaire sur le pipeline" },
    { id: "followUp", label: "Réécrire le même email de relance" },
    { id: "callPrep", label: "Fouiller ses notes avant un rendez-vous" },
    { id: "proposal", label: "Refaire une proposition à partir d'une ancienne" },
    { id: "callSummary", label: "Transformer un rendez-vous en compte rendu écrit" },
    { id: "crmTidy", label: "Remettre le CRM au propre après coup" },
  ],

  marketing: [
    { id: "perfReport", label: "Le rapport de performance hebdomadaire" },
    { id: "rewriteChannel", label: "Réécrire le même texte pour un autre canal" },
    { id: "longToShort", label: "Découper un long document en publications courtes" },
    { id: "chaseNumbers", label: "Courir après les chiffres dans trois outils différents" },
    { id: "briefAgain", label: "Rebriefer la même chose à un prestataire" },
    { id: "checkPage", label: "Vérifier une page avant sa mise en ligne" },
  ],

  operations: [
    { id: "teamUpdate", label: "Le point hebdomadaire de l'équipe" },
    { id: "chaseStatus", label: "Relancer tout le monde pour un état avant une réunion" },
    { id: "monthlyReport", label: "Le même rapport mensuel, de nouveaux chiffres" },
    { id: "onboarding", label: "Faire passer un nouvel arrivant par les mêmes étapes" },
    { id: "meetingToActions", label: "Transformer une réunion en actions lisibles" },
    { id: "checkProcess", label: "Vérifier qu'un processus a bien été suivi" },
  ],

  technical: [
    { id: "explainBug", label: "Expliquer un bug à quelqu'un d'autre" },
    { id: "reviewChange", label: "Relire la modification de quelqu'un d'autre" },
    { id: "newProject", label: "Mettre en place un nouveau projet de zéro" },
    { id: "findWhere", label: "Fouiller les fichiers pour trouver où une chose est gérée" },
    { id: "sameTest", label: "Réécrire le même genre de test" },
    { id: "ticketToPlan", label: "Transformer un ticket en plan avant de toucher au code" },
  ],

  /* « Autre chose » retombe sur la liste générale. Voir `cost-jobs.ts`. */
  other: [],
};

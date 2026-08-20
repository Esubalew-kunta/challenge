/**
 * Scanner d'opportunités IA : données et scoring.
 *
 * Chaque opportunité repose sur un chiffre sourcé (étude publique ou
 * système AI Makers en production). Aucun chiffre inventé : la source
 * est affichée sous chaque carte de résultat.
 *
 * Scoring, volontairement simple et lisible :
 * - +2 points par irritant sélectionné qui correspond à l'opportunité
 * - +1 point si le secteur du visiteur fait partie des secteurs bonus
 * - une opportunité réservée aux structures plus grandes (minTeamSizeIndex)
 *   est exclue si la taille déclarée est en dessous
 */

export type SectorId =
  "agence" | "sante" | "industrie" | "services-b2b" | "commerce" | "autre";

export type TeamSizeId = "moins-20" | "20-50" | "50-250" | "plus-250";

export type PainId =
  | "factures"
  | "prospection"
  | "reunions"
  | "support"
  | "contenu"
  | "reporting"
  | "recrutement"
  | "appels-offres";

export interface ScannerOption<T extends string> {
  id: T;
  label: string;
}

export const SECTORS: ScannerOption<SectorId>[] = [
  { id: "agence", label: "Agence et communication" },
  { id: "sante", label: "Santé, biotech, medtech" },
  { id: "industrie", label: "Industrie et production" },
  { id: "services-b2b", label: "Services B2B" },
  { id: "commerce", label: "Commerce et distribution" },
  { id: "autre", label: "Autre secteur" },
];

/** L'ordre du tableau définit l'ordre croissant des tailles (index = seuil). */
export const TEAM_SIZES: ScannerOption<TeamSizeId>[] = [
  { id: "moins-20", label: "Moins de 20 personnes" },
  { id: "20-50", label: "20 à 50 personnes" },
  { id: "50-250", label: "50 à 250 personnes" },
  { id: "plus-250", label: "Plus de 250 personnes" },
];

export const PAINS: ScannerOption<PainId>[] = [
  { id: "factures", label: "Factures et administratif" },
  { id: "prospection", label: "Prospection et suivi commercial" },
  { id: "reunions", label: "Réunions et comptes rendus" },
  { id: "support", label: "Support et demandes clients" },
  { id: "contenu", label: "Production de contenu" },
  { id: "reporting", label: "Reporting et pilotage" },
  { id: "recrutement", label: "Recrutement" },
  { id: "appels-offres", label: "Appels d'offres et propositions" },
];

export const MIN_PAINS = 2;
export const MAX_PAINS = 4;

export interface OpportunityTool {
  name: string;
  logo: string;
}

export interface Opportunity {
  id: string;
  name: string;
  /** Ce que fait le système, en une phrase. */
  description: string;
  /** Le chiffre affiché en gros sur la carte. */
  stat: string;
  /** Ce que le chiffre mesure, en une phrase courte. */
  statNote: string;
  /** Source du chiffre, affichée discrètement. */
  source: string;
  tools: OpportunityTool[];
  /** Irritants auxquels ce système répond. */
  pains: PainId[];
  /** Secteurs pour lesquels ce système est particulièrement pertinent. */
  sectorBonus: SectorId[];
  /**
   * Index minimum dans TEAM_SIZES pour que l'opportunité soit proposée
   * (0 = toutes tailles). Exemple : 1 = à partir de 20 personnes.
   */
  minTeamSizeIndex: number;
}

const stack = (name: string, file: string): OpportunityTool => ({
  name,
  logo: `/images/stack/${file}`,
});

export const OPPORTUNITIES: Opportunity[] = [
  {
    id: "facturation-fournisseurs",
    name: "Traitement automatisé des factures fournisseurs",
    description:
      "Les factures reçues sont lues, extraites et rapprochées automatiquement, sans ressaisie manuelle.",
    stat: "-78 %",
    statNote:
      "de coût par facture : 12,88 $ en traitement manuel contre 2,78 $ automatisé",
    source: "Ardent Partners",
    tools: [
      stack("Gmail", "gmail-color.svg"),
      stack("n8n", "n8n-color.svg"),
      stack("Google Sheets", "googlesheets-color.svg"),
    ],
    pains: ["factures"],
    sectorBonus: ["sante", "industrie"],
    minTeamSizeIndex: 0,
  },
  {
    id: "appels-offres",
    name: "Réponse aux appels d'offres assistée",
    description:
      "L'IA prépare les premières versions de vos réponses à partir de vos références et de vos documents existants.",
    stat: "-40 à -60 %",
    statNote: "de temps de réponse, sur un RFP moyen de 33 heures de travail",
    source: "Loopio, 2025",
    tools: [
      stack("Claude", "claude-color.svg"),
      stack("Notion", "notion-color.svg"),
      stack("Microsoft 365", "microsoft-color.svg"),
    ],
    pains: ["appels-offres"],
    sectorBonus: ["services-b2b", "industrie"],
    minTeamSizeIndex: 0,
  },
  {
    id: "copilotes-m365",
    name: "Copilotes Microsoft 365 déployés et adoptés",
    description:
      "Vos équipes rédigent, synthétisent et préparent leurs réunions directement dans leurs outils de travail.",
    stat: "132 à 353 %",
    statNote: "de retour sur investissement sur 3 ans pour les PME équipées",
    source: "Forrester, Total Economic Impact",
    tools: [
      stack("Microsoft Copilot", "copilot-color.svg"),
      stack("Microsoft Teams", "microsoftteams-color.svg"),
      stack("Outlook", "outlook-color.svg"),
    ],
    pains: ["reunions", "contenu"],
    sectorBonus: [],
    minTeamSizeIndex: 1,
  },
  {
    id: "tableaux-de-bord",
    name: "Tableaux de bord self-service",
    description:
      "Vos indicateurs se mettent à jour seuls et chaque manager consulte ses chiffres sans solliciter personne.",
    stat: "366 %",
    statNote:
      "de retour sur investissement, et 125 heures gagnées par an et par utilisateur",
    source: "Forrester, étude Power BI",
    tools: [
      stack("Power BI", "powerbi-color.svg"),
      stack("n8n", "n8n-color.svg"),
      stack("Google Sheets", "googlesheets-color.svg"),
    ],
    pains: ["reporting"],
    sectorBonus: ["industrie", "commerce"],
    minTeamSizeIndex: 0,
  },
  {
    id: "intelligence-appels",
    name: "Intelligence d'appels commerciaux",
    description:
      "Chaque appel de vente est analysé : signaux d'achat, objections et prochaine étape inscrits dans le CRM.",
    stat: "100 %",
    statNote:
      "des appels analysés, avec signaux et prochaine étape poussés dans le CRM",
    source: "Système AI Makers en production",
    tools: [
      stack("Fireflies", "fireflies-color.png"),
      stack("HubSpot", "hubspot-color.svg"),
      stack("Slack", "slack-color.svg"),
    ],
    pains: ["prospection"],
    sectorBonus: ["services-b2b"],
    minTeamSizeIndex: 0,
  },
  {
    id: "syntheses-reunions",
    name: "Synthèses de réunions automatiques",
    description:
      "Compte rendu, décisions et actions sont générés et distribués à la fin de chaque réunion.",
    stat: "7 h",
    statNote: "récupérées par semaine et par collaborateur, en moyenne",
    source: "Chiffre AI Makers, plus de 200 missions",
    tools: [
      stack("Fireflies", "fireflies-color.png"),
      stack("Notion", "notion-color.svg"),
      stack("Slack", "slack-color.svg"),
    ],
    pains: ["reunions"],
    sectorBonus: [],
    minTeamSizeIndex: 0,
  },
  {
    id: "support-augmente",
    name: "Support client augmenté",
    description:
      "L'IA traite les demandes récurrentes et transmet les cas sensibles à vos équipes, avec tout le contexte.",
    stat: "2/3",
    statNote:
      "des demandes gérées par l'IA dès le premier mois, avec escalade humaine",
    source: "Cas public Klarna",
    tools: [
      stack("Zendesk", "zendesk-color.svg"),
      stack("Claude", "claude-color.svg"),
      stack("Slack", "slack-color.svg"),
    ],
    pains: ["support"],
    sectorBonus: ["commerce"],
    minTeamSizeIndex: 0,
  },
  {
    id: "preselection-candidatures",
    name: "Présélection de candidatures",
    description:
      "Les candidatures sont triées et qualifiées selon vos critères, vos recruteurs se concentrent sur les entretiens.",
    stat: "Mois → semaines",
    statNote:
      "un cycle de recrutement raccourci de plusieurs mois à quelques semaines",
    source: "Cas public Unilever",
    tools: [
      stack("LinkedIn", "linkedin-color.svg"),
      stack("n8n", "n8n-color.svg"),
      stack("Notion", "notion-color.svg"),
    ],
    pains: ["recrutement"],
    sectorBonus: [],
    minTeamSizeIndex: 2,
  },
  {
    id: "analyse-contrats",
    name: "Analyse et suivi des contrats",
    description:
      "Clauses, échéances et risques de vos contrats sont extraits et suivis automatiquement.",
    stat: "+36 %",
    statNote: "d'efficacité des équipes juridiques sur l'analyse et le suivi",
    source: "Deloitte, 2026",
    tools: [
      stack("Claude", "claude-color.svg"),
      stack("Google Drive", "googledrive-color.svg"),
      stack("Notion", "notion-color.svg"),
    ],
    pains: ["factures", "appels-offres"],
    sectorBonus: ["sante"],
    minTeamSizeIndex: 2,
  },
  {
    id: "production-contenu",
    name: "Production de contenu pilotée par l'IA",
    description:
      "Vos équipes créatives produisent plus de déclinaisons et de formats, sans recruter davantage.",
    stat: "10x",
    statNote: "d'efficacité par équipe créative, sans effectif supplémentaire",
    source: "Cas client Shem's Publicité",
    tools: [
      stack("Claude", "claude-color.svg"),
      stack("OpenAI", "openai-color.svg"),
      stack("n8n", "n8n-color.svg"),
    ],
    pains: ["contenu"],
    sectorBonus: ["agence"],
    minTeamSizeIndex: 0,
  },
  {
    id: "visibilite-geo",
    name: "Visibilité dans les moteurs IA (GEO)",
    description:
      "Votre entreprise est citée quand ChatGPT, Gemini ou Perplexity répondent aux questions de vos clients.",
    stat: "+70 %",
    statNote: "de visibilité dans les réponses de ChatGPT et Gemini",
    source: "Cas client Sage",
    tools: [
      stack("ChatGPT", "openai-color.svg"),
      stack("Gemini", "gemini-color.svg"),
      stack("Perplexity", "perplexity-color.svg"),
    ],
    pains: ["contenu", "prospection"],
    sectorBonus: ["services-b2b"],
    minTeamSizeIndex: 0,
  },
  {
    id: "brief-pilotage",
    name: "Brief de pilotage quotidien",
    description:
      "Un brief de décision est généré chaque matin à partir de vos données : chiffres, alertes et priorités du jour.",
    stat: "1 brief",
    statNote: "de décision prêt chaque matin, avant votre première réunion",
    source: "Système AI Makers en production",
    tools: [
      stack("Claude", "claude-color.svg"),
      stack("Slack", "slack-color.svg"),
      stack("Notion", "notion-color.svg"),
    ],
    pains: ["reporting"],
    sectorBonus: [],
    minTeamSizeIndex: 0,
  },
];

export interface ScannerAnswers {
  sector: SectorId;
  teamSize: TeamSizeId;
  pains: PainId[];
}

export interface ScoredOpportunity {
  opportunity: Opportunity;
  score: number;
}

const PAIN_MATCH_POINTS = 2;
const SECTOR_BONUS_POINTS = 1;

/**
 * Retourne les opportunités éligibles pour ce profil, triées par score
 * décroissant. Seules les opportunités avec au moins un irritant
 * correspondant sont retenues (score > 0 garanti).
 */
export function scoreOpportunities(
  answers: ScannerAnswers,
): ScoredOpportunity[] {
  const sizeIndex = TEAM_SIZES.findIndex((s) => s.id === answers.teamSize);

  return OPPORTUNITIES.filter((o) => sizeIndex >= o.minTeamSizeIndex)
    .map((opportunity) => {
      const painMatches = opportunity.pains.filter((p) =>
        answers.pains.includes(p),
      ).length;
      const sectorBonus = opportunity.sectorBonus.includes(answers.sector)
        ? SECTOR_BONUS_POINTS
        : 0;
      return {
        opportunity,
        score: painMatches * PAIN_MATCH_POINTS + sectorBonus,
      };
    })
    .filter((scored) => scored.score >= PAIN_MATCH_POINTS)
    .sort((a, b) => b.score - a.score);
}

export function getSectorLabel(id: SectorId): string {
  return SECTORS.find((s) => s.id === id)?.label ?? id;
}

export function getTeamSizeLabel(id: TeamSizeId): string {
  return TEAM_SIZES.find((s) => s.id === id)?.label ?? id;
}

export function getPainLabels(ids: PainId[]): string[] {
  return ids.map((id) => PAINS.find((p) => p.id === id)?.label ?? id);
}

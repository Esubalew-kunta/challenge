// =============================================================================
// DIAGNOSTIC IA — Configuration complète
// Questions, scoring, seuils, quick wins par secteur, dimensions radar
// =============================================================================

export type QuestionType = "scoring" | "qualification";
export type ScoreValue = 0 | 1 | 2;

export interface DiagnosticQuestion {
  id: string;
  type: QuestionType;
  dimension?: string;
  text: string;
  helpText: string;
  options: {
    value: ScoreValue | string;
    label: string;
    description: string;
  }[];
}

export interface ScoreThreshold {
  min: number;
  max: number;
  level: string;
  label: string;
  color: string;
  colorLight: string;
  description: string;
  headline: string;
  recommendations: string[];
}

export interface QuickWin {
  department: string;
  icon: string;
  title: string;
  description: string;
  setupTime: string;
  estimatedGain: string;
}

// =============================================================================
// LES 12 QUESTIONS DU DIAGNOSTIC
// 12 questions de scoring (0/1/2) + 2 questions de qualification
// =============================================================================

export const diagnosticQuestions: DiagnosticQuestion[] = [
  // --- DIMENSION : Vision stratégique ---
  {
    id: "q1",
    type: "scoring",
    dimension: "vision",
    text: "Votre direction a-t-elle défini une vision claire de ce que l'IA doit apporter à l'entreprise ?",
    helpText:
      "Pas juste « on devrait faire de l'IA », mais un objectif business précis avec des KPIs.",
    options: [
      {
        value: 0,
        label: "Pas du tout",
        description: "L'IA n'est pas un sujet stratégique défini",
      },
      {
        value: 1,
        label: "En réflexion",
        description: "On en parle, mais rien de formalisé",
      },
      {
        value: 2,
        label: "En place",
        description: "Vision documentée avec objectifs mesurables",
      },
    ],
  },
  {
    id: "q2",
    type: "scoring",
    dimension: "usecases",
    text: "Avez-vous identifié les 3 process métiers qui bénéficieraient le plus de l'IA ?",
    helpText:
      "Les process qui prennent le plus de temps ET qui ont le plus de valeur à automatiser.",
    options: [
      {
        value: 0,
        label: "Pas du tout",
        description: "On ne sait pas par où commencer",
      },
      {
        value: 1,
        label: "En cours",
        description: "On a des idées mais rien de priorisé",
      },
      {
        value: 2,
        label: "En place",
        description: "Cas d'usage identifiés et priorisés par ROI",
      },
    ],
  },

  // --- DIMENSION : Formation ---
  {
    id: "q3",
    type: "scoring",
    dimension: "formation",
    text: "Vos équipes ont-elles été formées à utiliser l'IA ?",
    helpText:
      "Au-delà de « essayez ChatGPT » : une vraie formation sur VOS cas d'usage.",
    options: [
      {
        value: 0,
        label: "Pas du tout",
        description: "Aucune formation structurée",
      },
      {
        value: 1,
        label: "En cours",
        description: "Quelques formations ponctuelles",
      },
      {
        value: 2,
        label: "En place",
        description: "Programme de formation avec cas d'usage métier",
      },
    ],
  },
  {
    id: "q4",
    type: "scoring",
    dimension: "formation",
    text: "Avez-vous un référent IA ou un AI Champion dans l'entreprise ?",
    helpText:
      "Quelqu'un qui porte le sujet, forme les équipes, et fait le lien entre la tech et le business.",
    options: [
      {
        value: 0,
        label: "Pas du tout",
        description: "Personne n'est responsable du sujet",
      },
      {
        value: 1,
        label: "En cours",
        description: "Quelqu'un s'y intéresse mais pas mandaté",
      },
      {
        value: 2,
        label: "En place",
        description: "Référent IA identifié avec un mandat clair",
      },
    ],
  },

  // --- DIMENSION : Infrastructure ---
  {
    id: "q5",
    type: "scoring",
    dimension: "infrastructure",
    text: "Vos données internes sont-elles accessibles et structurées ?",
    helpText:
      "CRM à jour, documentation centralisée, process documentés, pas éparpillés dans 15 outils.",
    options: [
      {
        value: 0,
        label: "Pas du tout",
        description: "Données éparpillées, rien n'est centralisé",
      },
      {
        value: 1,
        label: "En cours",
        description: "Partiellement structuré, des trous",
      },
      {
        value: 2,
        label: "En place",
        description: "Données centralisées et accessibles",
      },
    ],
  },

  // --- QUESTION DE QUALIFICATION (déguisée) ---
  {
    id: "q_team",
    type: "qualification",
    text: "Combien de personnes dans votre entreprise utilisent l'IA au quotidien ?",
    helpText:
      "Même de façon informelle : ChatGPT, Copilot, outils de transcription, etc.",
    options: [
      { value: "0-2", label: "0 à 2", description: "Presque personne" },
      {
        value: "3-10",
        label: "3 à 10",
        description: "Quelques early adopters",
      },
      {
        value: "11-50",
        label: "11 à 50",
        description: "Une bonne partie de l'équipe",
      },
      { value: "50+", label: "50+", description: "L'IA est généralisée" },
    ],
  },

  // --- DIMENSION : Cas d'usage ---
  {
    id: "q6",
    type: "scoring",
    dimension: "usecases",
    text: "Avez-vous automatisé au moins un workflow de bout en bout avec l'IA ?",
    helpText:
      "Pas juste utiliser ChatGPT ponctuellement, mais un vrai process automatisé qui tourne.",
    options: [
      {
        value: 0,
        label: "Pas du tout",
        description: "Aucun workflow automatisé",
      },
      { value: 1, label: "En cours", description: "On a des projets pilotes" },
      {
        value: 2,
        label: "En place",
        description: "Au moins un workflow IA en production",
      },
    ],
  },
  {
    id: "q7",
    type: "scoring",
    dimension: "maturite",
    text: "Mesurez-vous le ROI de vos initiatives IA ?",
    helpText:
      "Temps gagné, marge augmentée, adoption des équipes, scalabilité : au moins un KPI suivi.",
    options: [
      { value: 0, label: "Pas du tout", description: "On n'a aucune mesure" },
      {
        value: 1,
        label: "En cours",
        description: "On mesure de façon informelle",
      },
      {
        value: 2,
        label: "En place",
        description: "KPIs définis et suivis régulièrement",
      },
    ],
  },
  {
    id: "q8",
    type: "scoring",
    dimension: "vision",
    text: "Votre direction utilise-t-elle personnellement l'IA au quotidien ?",
    helpText:
      "Le CEO, le DG, les membres du COMEX, pas juste les équipes opérationnelles.",
    options: [
      {
        value: 0,
        label: "Pas du tout",
        description: "La direction n'utilise pas l'IA",
      },
      {
        value: 1,
        label: "Parfois",
        description: "Utilisation ponctuelle, pas systématique",
      },
      {
        value: 2,
        label: "Au quotidien",
        description: "L'IA fait partie de leur routine",
      },
    ],
  },

  // --- QUESTION DE QUALIFICATION (déguisée) ---
  {
    id: "q_sector",
    type: "qualification",
    text: "Quel est le secteur d'activité de votre entreprise ?",
    helpText:
      "Pour personnaliser vos recommandations avec des exemples de votre industrie.",
    options: [
      {
        value: "agence-communication",
        label: "Agence / Média / Communication",
        description: "",
      },
      {
        value: "tech-saas",
        label: "Tech / SaaS / Édition logicielle",
        description: "",
      },
      {
        value: "conseil-services",
        label: "Conseil / Services professionnels",
        description: "",
      },
      {
        value: "sante-biotech",
        label: "Santé / Biotech / Pharma",
        description: "",
      },
      {
        value: "industrie-manufacturing",
        label: "Industrie / Manufacturing",
        description: "",
      },
      {
        value: "finance-assurance",
        label: "Finance / Assurance / Immobilier",
        description: "",
      },
      { value: "autre", label: "Autre secteur", description: "" },
    ],
  },

  // --- DIMENSION : Infrastructure ---
  {
    id: "q9",
    type: "scoring",
    dimension: "infrastructure",
    text: "Avez-vous une politique de confidentialité pour l'usage de l'IA avec les données clients ?",
    helpText:
      "Charte IA, règles sur les données sensibles, conformité RGPD/AI Act.",
    options: [
      {
        value: 0,
        label: "Pas du tout",
        description: "Aucune politique en place",
      },
      {
        value: 1,
        label: "En cours",
        description: "On y réfléchit ou c'est en rédaction",
      },
      {
        value: 2,
        label: "En place",
        description: "Charte IA documentée et appliquée",
      },
    ],
  },
  {
    id: "q10",
    type: "scoring",
    dimension: "maturite",
    text: "Si vous retiriez tous les outils IA demain, votre performance serait-elle impactée ?",
    helpText:
      "Le vrai test de maturité : l'IA est-elle un nice-to-have ou un pilier de votre fonctionnement ?",
    options: [
      {
        value: 0,
        label: "Aucun impact",
        description: "On pourrait s'en passer sans problème",
      },
      {
        value: 1,
        label: "Impact modéré",
        description: "On perdrait en efficacité mais on survivrait",
      },
      {
        value: 2,
        label: "Impact majeur",
        description: "Notre fonctionnement serait sérieusement perturbé",
      },
    ],
  },
  {
    id: "q11",
    type: "scoring",
    dimension: "gouvernance",
    text: "Avez-vous défini qui peut utiliser l'IA, sur quelles données, et avec quelles règles ?",
    helpText:
      "Sans cadre écrit, chaque équipe improvise le sien — et vos données partent dans des outils que personne n'a validés.",
    options: [
      {
        value: 0,
        label: "Pas du tout",
        description: "Chacun utilise ce qu'il veut, sans cadre",
      },
      {
        value: 1,
        label: "Règles informelles",
        description: "Des consignes orales, rien de documenté",
      },
      {
        value: 2,
        label: "Charte IA en place",
        description: "Un cadre écrit, diffusé et connu des équipes",
      },
    ],
  },
  {
    id: "q12",
    type: "scoring",
    dimension: "gouvernance",
    text: "Êtes-vous en règle avec le RGPD et l'AI Act sur vos usages IA actuels ?",
    helpText:
      "L'AI Act s'applique par paliers depuis 2025. Les obligations dépendent du niveau de risque de chaque usage.",
    options: [
      {
        value: 0,
        label: "Sujet non traité",
        description: "La question n'a pas encore été posée",
      },
      {
        value: 1,
        label: "Identifié, pas instruit",
        description: "On sait que le sujet existe, sans analyse formelle",
      },
      {
        value: 2,
        label: "Analysé et conforme",
        description: "Usages qualifiés, registre à jour, conformité vérifiée",
      },
    ],
  },
] as const;

// =============================================================================
// SEUILS DE SCORE (4 paliers)
// =============================================================================

export const scoreThresholds: ScoreThreshold[] = [
  {
    min: 0,
    max: 6,
    level: "pre-demarrage",
    label: "Pré-démarrage",
    color: "#EF4444",
    colorLight: "#FEE2E2",
    headline: "Vos concurrents avancent pendant que vous réfléchissez.",
    description:
      "L'IA est un sujet de discussion dans votre entreprise, pas un outil de travail. Le risque est réel : pendant que vous attendez le « bon moment », vos concurrents mettent des systèmes en place qui créeront un avantage impossible à rattraper.",
    recommendations: [
      "Commencer par un audit de 3 jours pour identifier vos 3 quick wins IA",
      "Former votre COMEX à l'IA (pas un webinar, un atelier pratique)",
      "Nommer un référent IA dès cette semaine",
    ],
  },
  {
    min: 7,
    max: 12,
    level: "experimentation",
    label: "Expérimentation",
    color: "#2563EB",
    colorLight: "#DBEAFE",
    headline: "Vous avez commencé, mais rien n'est systématique.",
    description:
      "Vous avez des initiatives IA en cours, mais elles sont fragmentées. Le risque : l'énergie initiale retombe, les projets pilotes meurent, et dans 6 mois vous serez au même point, avec en plus la frustration d'avoir essayé sans résultat.",
    recommendations: [
      "Standardiser vos outils IA (un seul stack pour toute l'entreprise)",
      "Automatiser votre premier workflow complet de bout en bout",
      "Mettre en place des KPIs pour mesurer l'impact réel",
    ],
  },
  {
    min: 13,
    max: 18,
    level: "structuration",
    label: "Structuration",
    color: "#7C3AED",
    colorLight: "#EDE9FE",
    headline: "Vous avez des bases solides. Le prochain cap : l'échelle.",
    description:
      "Votre entreprise a dépassé le stade de l'expérimentation. Les fondations sont là. Le défi maintenant : passer de quelques initiatives réussies à un système intégré qui transforme l'ensemble de votre fonctionnement.",
    recommendations: [
      "Connecter vos systèmes IA à vos données internes (CRM, ERP, docs)",
      "Passer des outils aux agents IA autonomes sur les tâches répétitives",
      "Créer votre roadmap IA 6-12 mois avec budget alloué",
    ],
  },
  {
    min: 19,
    max: 24,
    level: "avance",
    label: "Avancé",
    color: "#10B981",
    colorLight: "#DCFCE7",
    headline: "Vous faites partie des 5%. Maintenant, optimisez.",
    description:
      "Votre entreprise a intégré l'IA de façon structurelle. Retirer l'IA impacterait votre performance. Le défi : rester en avance. L'IA évolue tous les 3 mois, vos systèmes doivent suivre.",
    recommendations: [
      "Mesurer et optimiser le ROI en continu (tableau de bord IA)",
      "Former les nouveaux arrivants avec un programme IA intégré à l'onboarding",
      "Explorer les agents IA autonomes pour les décisions opérationnelles",
    ],
  },
];

// =============================================================================
// DIMENSIONS DU RADAR (5 axes)
// =============================================================================

export const radarDimensions = [
  {
    id: "vision",
    label: "Vision stratégique",
    questionIds: ["q1", "q8"],
    description:
      "La direction porte-t-elle le sujet IA avec une vision claire ?",
  },
  {
    id: "usecases",
    label: "Cas d'usage",
    questionIds: ["q2", "q6"],
    description: "Les opportunités IA sont-elles identifiées et exploitées ?",
  },
  {
    id: "formation",
    label: "Formation",
    questionIds: ["q3", "q4"],
    description: "Les équipes sont-elles formées et accompagnées ?",
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    questionIds: ["q5", "q9"],
    description: "Les données et la gouvernance sont-elles prêtes ?",
  },
  {
    id: "maturite",
    label: "Maturité opérationnelle",
    questionIds: ["q7", "q10"],
    description: "L'IA est-elle mesurée et intégrée au fonctionnement ?",
  },
  {
    id: "gouvernance",
    label: "Gouvernance & conformité",
    questionIds: ["q11", "q12"],
    description: "Vos usages IA sont-ils encadrés et conformes ?",
  },
] as const;

// =============================================================================
// QUICK WINS PAR SECTEUR
// =============================================================================

export const sectorQuickWins: Record<string, QuickWin[]> = {
  "agence-communication": [
    {
      department: "Création",
      icon: "✏️",
      title: "Déclinaison de contenu automatisée",
      description:
        "Prenez vos 5 meilleurs contenus et déclinez-les en 3 formats chacun (post LinkedIn, email, story). 15 contenus en 2h au lieu de 2 semaines.",
      setupTime: "2h",
      estimatedGain: "15+ contenus/semaine",
    },
    {
      department: "Commercial",
      icon: "📧",
      title: "Propositions commerciales accélérées",
      description:
        "Créez un prompt qui génère une première version de proposition à partir du brief client. Temps de production divisé par 5.",
      setupTime: "1h",
      estimatedGain: "-80% temps rédaction propos",
    },
    {
      department: "Stratégie",
      icon: "🔍",
      title: "Veille concurrentielle automatisée",
      description:
        "Demandez à l'IA de scanner les 10 concurrents de votre client chaque semaine et de résumer les changements. Insights gratuits et continus.",
      setupTime: "30min",
      estimatedGain: "Veille en temps réel",
    },
  ],
  "tech-saas": [
    {
      department: "Support",
      icon: "💬",
      title: "Agent de support Niveau 1",
      description:
        "Catégorisez vos 50 derniers tickets et créez un chatbot qui gère les questions récurrentes. 60%+ des tickets résolus automatiquement.",
      setupTime: "2h",
      estimatedGain: "-60% tickets récurrents",
    },
    {
      department: "Produit",
      icon: "📊",
      title: "Analyse de feedback produit",
      description:
        "Donnez à l'IA vos reviews, NPS et tickets : elle identifie les patterns que vous ne voyez pas. Priorisez votre roadmap sur des données.",
      setupTime: "1h",
      estimatedGain: "Roadmap data-driven",
    },
    {
      department: "Commercial",
      icon: "🎯",
      title: "Préparation de démos automatisée",
      description:
        "L'IA compile un brief prospect complet (taille, stack, enjeux) en 5 min au lieu de 2h. Chaque démo est personnalisée.",
      setupTime: "1h",
      estimatedGain: "-87% temps de préparation",
    },
  ],
  "conseil-services": [
    {
      department: "Delivery",
      icon: "📝",
      title: "Génération de rapports automatisée",
      description:
        "L'IA génère la première version de vos rapports d'avancement à partir de vos notes et données projet. Vous affinez et envoyez.",
      setupTime: "2h",
      estimatedGain: "-70% temps reporting",
    },
    {
      department: "Commercial",
      icon: "📄",
      title: "Réponses aux appels d'offres",
      description:
        "Créez un prompt qui analyse le cahier des charges et génère une première version de réponse structurée. Plus de temps pour personnaliser.",
      setupTime: "1h",
      estimatedGain: "2x plus de réponses AO",
    },
    {
      department: "RH",
      icon: "👥",
      title: "Scoring de candidats",
      description:
        "Créez un prompt qui analyse les CV par rapport à vos fiches de poste et classe les candidats. Tri 5x plus rapide.",
      setupTime: "30min",
      estimatedGain: "Tri 5x plus rapide",
    },
  ],
  "sante-biotech": [
    {
      department: "R&D",
      icon: "🔬",
      title: "Revue de littérature accélérée",
      description:
        "L'IA résume les 20 dernières publications sur votre sujet de recherche en 30 minutes au lieu de 2 jours. Avec citations et points clés.",
      setupTime: "30min",
      estimatedGain: "-90% temps de veille",
    },
    {
      department: "Réglementaire",
      icon: "📋",
      title: "Analyse de dossiers réglementaires",
      description:
        "Donnez vos dossiers à l'IA pour identifier les points manquants, les incohérences, et les risques de rejet avant soumission.",
      setupTime: "2h",
      estimatedGain: "Détection risques en amont",
    },
    {
      department: "Formation",
      icon: "🎓",
      title: "Contenu de formation personnalisé",
      description:
        "Générez des modules de formation adaptés au niveau de chaque apprenant à partir de votre base de connaissances interne.",
      setupTime: "2h",
      estimatedGain: "Formation sur-mesure",
    },
  ],
  "industrie-manufacturing": [
    {
      department: "Production",
      icon: "⚙️",
      title: "Documentation technique automatisée",
      description:
        "L'IA génère et met à jour automatiquement la documentation technique à chaque modification de process. Toujours à jour.",
      setupTime: "2h",
      estimatedGain: "Docs toujours à jour",
    },
    {
      department: "Qualité",
      icon: "✅",
      title: "Analyse des non-conformités",
      description:
        "Donnez vos rapports de non-conformité à l'IA : elle identifie les patterns récurrents et propose des actions correctives.",
      setupTime: "1h",
      estimatedGain: "Patterns détectés",
    },
    {
      department: "Maintenance",
      icon: "🔧",
      title: "Prédiction de pannes",
      description:
        "Analysez vos historiques de maintenance pour identifier les signes précurseurs de panne. Maintenance préventive data-driven.",
      setupTime: "2h",
      estimatedGain: "-30% pannes imprévues",
    },
  ],
  "finance-assurance": [
    {
      department: "Conformité",
      icon: "🔒",
      title: "Veille réglementaire automatisée",
      description:
        "L'IA surveille les nouvelles réglementations et vous alerte des changements qui impactent votre activité. Chaque semaine.",
      setupTime: "1h",
      estimatedGain: "Veille continue",
    },
    {
      department: "Analyse",
      icon: "📈",
      title: "Résumé de rapports financiers",
      description:
        "L'IA résume vos rapports mensuels, identifie les anomalies et les tendances que l'œil humain rate par habitude.",
      setupTime: "30min",
      estimatedGain: "Insights automatiques",
    },
    {
      department: "Relation client",
      icon: "🤝",
      title: "Personnalisation des communications",
      description:
        "Générez des communications personnalisées pour chaque segment client à partir de votre CRM. Plus de messages génériques.",
      setupTime: "1h",
      estimatedGain: "+40% taux d'engagement",
    },
  ],
  autre: [
    {
      department: "Commercial",
      icon: "📧",
      title: "Emails de relance personnalisés",
      description:
        "Créez un prompt qui rédige des emails de relance personnalisés à partir du contexte du dernier échange. Testez sur 10 prospects.",
      setupTime: "1h",
      estimatedGain: "3-5h/semaine gagnées",
    },
    {
      department: "Direction",
      icon: "🧠",
      title: "Revue stratégique hebdomadaire",
      description:
        "Chaque lundi, donnez à l'IA un résumé de la semaine et demandez : « Quels sont les 3 risques que je ne vois pas ? »",
      setupTime: "15min/semaine",
      estimatedGain: "Meilleure anticipation",
    },
    {
      department: "Opérations",
      icon: "🔄",
      title: "Optimisation de process",
      description:
        "Décrivez votre process le plus chronophage à l'IA : « Quelles étapes peuvent être automatisées ou éliminées ? »",
      setupTime: "30min",
      estimatedGain: "Vision claire des gains",
    },
  ],
};

// =============================================================================
// FORMULE DU COÛT DE L'INACTION
// =============================================================================

export const costFormula = {
  hoursWastedPerPersonPerWeek: 7,
  weeksPerMonth: 4.3,
  averageCostPerHour: 35, // €/h coût chargé moyen
  teamSizeMapping: {
    "0-2": 5,
    "3-10": 15,
    "11-50": 35,
    "50+": 80,
  } as Record<string, number>,
} as const;

// =============================================================================
// CONTENU DE LA PAGE DE CAPTURE EMAIL
// =============================================================================

export const captureContent = {
  title: "Dernière étape : recevez votre diagnostic",
  subtitle:
    "Entrez votre email professionnel pour recevoir votre rapport personnalisé avec votre score, vos recommandations, et le Playbook AI-First complet (54 pages).",
  emailPlaceholder: "prenom@entreprise.com",
  firstNamePlaceholder: "Votre prénom",
  ctaLabel: "Voir mon diagnostic →",
  privacyNote:
    "Vos données restent confidentielles. Pas de spam. Désabonnement en 1 clic.",
} as const;

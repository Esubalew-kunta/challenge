/**
 * Contenu de la page /plateforme-data-ia.
 *
 * Extrait de la page, qui portait tout son copy en JSX inline et en tableaux
 * locaux. Les apostrophes sont reprises À L'IDENTIQUE : le rendu français ne
 * bouge pas.
 */

export const dataPlatformMeta = {
  title: "Plateforme data et IA pour l'entreprise",
  description:
    "Unifiez vos systèmes en silo (ERP, production, commercial) puis branchez-y des agents de reporting. Architecture Bronze, Silver, Gold, sans DSI.",
} as const;

export const dataPlatformSchema = {
  breadcrumbHome: "Accueil",
  breadcrumbCurrent: "Plateforme Data & IA",
  serviceName: "Plateforme data & agents IA pour entreprises",
  serviceType: "Data engineering et agents IA métier",
  serviceDescription:
    "Construction de plateformes data d'entreprise : ingestion automatisée des systèmes sources (ERP, production, CRM), architecture en couches Bronze, Silver, Gold, agents IA de reporting et de pilotage, dashboards métier. Sans DSI requise.",
  areaServed: ["France", "Maroc"],
} as const;

export const dataPlatformHero = {
  badge: "Plateforme Data & IA",
  h1Lead: "Vos données valent de l'or.",
  h1Highlight: "Encore faut-il les brancher.",
  intro:
    "Une plateforme data d'entreprise unifie vos systèmes en silo (ERP, production, commercial) dans un socle unique en couches Bronze, Silver et Gold, puis y branche des agents IA de reporting et de pilotage. Résultat : une seule version du chiffre, des reportings qui se produisent seuls, et des décisions anticipées plutôt que subies. Sans DSI requise, et tout vous appartient.",
  stats: [
    { target: 50, prefix: "+", label: "entreprises accompagnées" },
    { target: 200, prefix: "+", label: "systèmes en production" },
    { target: 9.6, decimals: 1, suffix: "/10", label: "de satisfaction" },
  ],
  proofCaption:
    "Le reporting qui se produit tout seul, branché sur vos systèmes.",
} as const;

export const dataPlatformSilos = {
  badge: "En un coup d'œil",
  title: "Vos silos, branchés dans un seul socle",
  description:
    "Vos systèmes séparés déversent leurs données dans un socle unique en trois couches, Bronze, Silver, Gold. Vos agents lisent le Gold et pilotent en temps réel.",
} as const;

export const dataPlatformSteps = {
  badge: "Le déroulé",
  title: "De vos silos à la donnée qui décide",
  description:
    "Quatre étapes, chacune avec un livrable exploitable. La plateforme produit de la valeur avant d'être finie.",
  items: [
    {
      number: "01",
      title: "Cartographie des sources",
      description:
        "On inventorie vos systèmes : ERP, production, commercial, fichiers Excel. Qui produit quelle donnée, où elle dort, qui en a besoin.",
    },
    {
      number: "02",
      title: "Ingestion et couche Bronze",
      description:
        "Les données brutes de tous les systèmes convergent automatiquement vers un socle unique, avec tests de qualité. Fini les exports manuels.",
    },
    {
      number: "03",
      title: "Couches Silver et Gold",
      description:
        "Nettoyage, référentiels unifiés, modèles métier : la donnée devient fiable, croisable et prête pour la décision.",
    },
    {
      number: "04",
      title: "Agents IA et dashboards",
      description:
        "Des agents de reporting priorisés en atelier avec vos équipes : suivi quotidien, consolidations, alertes. La donnée vient à vous.",
    },
  ],
} as const;

export const dataPlatformCase = {
  badge: "Sur le terrain",
  title: "Ce que ça donne en vrai",
  kicker: "Mission en cours",
  headline:
    "Un leader marocain de l'export agricole : 4 500 employés, 20 ans de données, 3 systèmes qui ne se parlaient pas.",
  body: "ERP financier, logiciel de production agricole, système de station de conditionnement : aucune vue consolidée, un suivi commercial sur Google Sheets, des décisions subies plutôt qu'anticipées. Nous construisons sa plateforme data d'entreprise et ses agents de reporting : la couche Bronze et l'ingestion automatisée ont été livrées en avance sur le planning, et 15 agents métier ont été priorisés en atelier avec les équipes des fermes elles-mêmes.",
  footnote: "Étude de cas complète en cours de validation client.",
} as const;

export const dataPlatformDeliverables = {
  badge: "Les livrables",
  title: "Ce que vous avez en main",
  items: [
    "Une plateforme data souveraine, hébergée où vous le décidez.",
    "L'ingestion automatisée de vos systèmes sources, avec tests de qualité.",
    "Des référentiels métier unifiés : fini les trois versions du même chiffre.",
    "Des agents IA de reporting priorisés par vos équipes, livrés par vagues.",
    "Des dashboards de pilotage branchés sur la donnée fiabilisée.",
    "La propriété intégrale : infrastructure, pipelines, agents, documentation.",
  ],
} as const;

export const dataPlatformNext = {
  badge: "Et après",
  title: "Le socle de tous vos agents IA",
  paragraphs: [
    "Une plateforme data n'est pas une fin : c'est le socle qui rend les agents IA fiables. Une fois la donnée unifiée, chaque nouveau cas d'usage (reporting, prévision, alerting, copilotes métier) se construit en semaines, pas en mois.",
    "C'est pour ça que la plateforme s'inscrit dans notre accompagnement complet : audit pour prioriser, ingénieur référent pour construire, formation hebdomadaire pour rendre vos équipes autonomes.",
  ],
  link: { label: "Voir l'accompagnement complet", href: "/ai-transformation" },
} as const;

export const dataPlatformFaq = {
  title: "Questions fréquentes sur les plateformes data & IA",
  items: [
    {
      question: "Faut-il une DSI pour construire une plateforme data ?",
      answer:
        "Non. Un référent IT côté client et des ateliers avec les équipes métiers suffisent : nous portons l'architecture, le build et l'exploitation. Nous travaillons aujourd'hui avec un groupe de 4 500 personnes qui n'a pas de DSI, et n'en veut pas. La plateforme est pensée pour être pilotée par le métier, pas par un service informatique.",
    },
    {
      question:
        "Nos données sont éparpillées et de mauvaise qualité, est-ce bloquant ?",
      answer:
        "C'est le point de départ de la quasi-totalité des missions : des systèmes qui ne se parlent pas, des exports Excel manuels, des référentiels incohérents. La couche Bronze ingère les données telles qu'elles sont, puis les couches Silver et Gold les nettoient et les fiabilisent progressivement, avec des tests de qualité automatisés. On ne vous demande pas des données propres : on vous les rend propres.",
    },
    {
      question: "Quels outils utilisez-vous ?",
      answer:
        "Des briques éprouvées et sans coût de licence caché : PostgreSQL pour le stockage, Docker pour l'infrastructure, Airflow pour l'orchestration des flux, Power BI ou équivalent pour les dashboards, et des agents IA (Claude, n8n) pour le reporting automatisé. Le tout se branche sur vos systèmes existants : ERP, outils de production, CRM. Rien n'est migré, rien n'est remplacé.",
    },
    {
      question: "Combien de temps avant une première couche exploitable ?",
      answer:
        "Sur notre dernière mission de ce type, la couche d'ingestion et la couche Bronze ont été livrées en quelques semaines, en avance sur le planning. Les agents de reporting arrivent ensuite par vagues, chacun validé par les équipes métiers à son jalon. Vous ne payez pas 18 mois de projet data avant de voir un premier résultat.",
    },
    {
      question: "À qui appartient la plateforme ?",
      answer:
        "À vous, intégralement : l'infrastructure, le code des pipelines, les agents, la documentation. C'est la même règle de propriété totale que sur toutes nos missions. Le jour où la collaboration s'arrête, tout continue de tourner chez vous.",
    },
  ],
} as const;

export const dataPlatformRelated = [
  {
    title: "AI Operating System",
    href: "/ai-operating-system",
    description: "L'operating system IA qui s'appuie sur vos données unifiées.",
  },
  {
    title: "Transformation IA",
    href: "/ai-transformation",
    description: "L'offre complète en 3 phases, de l'audit à l'autonomie.",
  },
  {
    title: "Études de cas",
    href: "/etudes-de-cas",
    description: "Les résultats mesurés chez nos clients.",
  },
] as const;

export const dataPlatformCta = {
  title: "Vos systèmes ne se parlent pas ?",
  subtitle:
    "30 minutes pour cartographier vos sources de données et identifier le premier agent de reporting à fort ROI.",
  label: "Réserver mon diagnostic gratuit",
} as const;

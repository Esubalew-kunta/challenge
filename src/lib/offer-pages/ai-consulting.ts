/**
 * Contenu de la page /agence-ia.
 *
 * Extrait de la page, qui portait son copy en JSX inline et en tableaux
 * locaux. Apostrophes reprises À L'IDENTIQUE : le rendu français ne bouge pas.
 */

export const aiConsultingMeta = {
  title: "Agence IA ? Un cabinet de transformation IA",
  description:
    "Vous cherchez une agence IA ? AI Makers est un cabinet de transformation IA : audit de vos process, agents IA et automatisations en production, équipes formées. +200 systèmes déployés chez +50 entreprises.",
} as const;

export const aiConsultingSchema = {
  breadcrumbHome: "Accueil",
  breadcrumbCurrent: "Agence IA",
  serviceName: "Transformation IA pour entreprises",
  serviceType: "Cabinet de transformation IA",
  serviceDescription:
    "Audit des processus, déploiement d'agents IA et d'automatisations en production, formation des équipes. Un ingénieur IA référent, propriété totale de ce qui est construit.",
  areaServed: ["France", "Maroc"],
} as const;

export const aiConsultingHero = {
  badge: "Cabinet de transformation IA",
  h1Lead: "Agence IA ? Non.",
  h1Highlight: "cabinet de transformation IA.",
  intro:
    "Vous cherchez une agence IA pour automatiser vos processus ? AI Makers va plus loin qu'une agence : nous auditons vos workflows, nous livrons des systèmes IA en production chaque mois (agents, automatisations, copilotes métier) et nous formons vos équipes jusqu'à l'autonomie. Un ingénieur référent, plus de 200 systèmes déployés chez plus de 50 entreprises.",
  stats: [
    { target: 50, prefix: "+", label: "entreprises accompagnées" },
    { target: 200, prefix: "+", label: "systèmes en production" },
    { target: 9.6, decimals: 1, suffix: "/10", label: "de satisfaction" },
  ],
  proofPhoto: {
    src: "/images/formations/atelier-hands-on.png",
    alt: "Atelier hands-on AI Makers avec une équipe cliente",
  },
  proofCaption: "Un atelier hands-on chez un client, sur ses cas d'usage réels.",
} as const;

export const aiConsultingComparison = {
  badge: "Le comparatif",
  title: "Cabinet, ESN, agence, licence ou AI Makers",
  description:
    "Cinq façons d'aborder l'IA en entreprise. Une seule vous livre des systèmes en production, configurés pour vous.",
} as const;

export const aiConsultingBuilds = {
  badge: "Ce qu'on construit",
  title: "Des systèmes en production, pas des démos",
  description:
    "Trois familles de systèmes IA, toutes livrées connectées à vos outils et documentées.",
  items: [
    {
      icon: "bot",
      title: "Agents IA sur mesure",
      description:
        "Des systèmes qui exécutent des tâches complètes : qualification de demandes, préparation de documents, synthèses de réunions. Connectés à vos outils, livrés en production.",
    },
    {
      icon: "workflow",
      title: "Automatisation de workflows",
      description:
        "Reporting, saisie, relances, facturation : les tâches répétitives passent en automatique avec n8n et Claude. Gain moyen constaté : 7 heures par semaine et par collaborateur.",
    },
    {
      icon: "copilot",
      title: "Copilotes métier",
      description:
        "Des assistants IA entraînés sur vos données et vos règles internes, au service d'une équipe précise : commerce, juridique, support, finance.",
    },
  ],
} as const;

export const aiConsultingMethod = {
  badge: "La méthode",
  title: "Trois phases, de l'audit à l'autonomie",
  description: "Une seule offre structure toutes nos missions : AI PARTNER.",
  items: [
    {
      number: "01",
      title: "Audit : AI Scan",
      description:
        "1 à 2 semaines pour cartographier vos processus, scorer votre maturité IA sur 24 points et livrer une roadmap avec au minimum 3 cas d'usage à fort ROI.",
    },
    {
      number: "02",
      title: "Build : AI Engine",
      description:
        "Un ingénieur IA référent construit 1 à 2 systèmes par mois, en production. 2 heures de formation par semaine pour vos équipes.",
    },
    {
      number: "03",
      title: "Scale : AI Champions",
      description:
        "Des référents internes formés pour diffuser les usages. Objectif : une entreprise autonome à 6 mois.",
    },
  ],
  link: {
    label: "Découvrir l'offre AI PARTNER en détail",
    href: "/ai-transformation",
  },
} as const;

export const aiConsultingIcp = {
  badge: "Pour qui",
  title: "Les entreprises avec qui ça fonctionne",
  description:
    "Nous acceptons au maximum 3 nouveaux clients par mois. Autant travailler avec les bons profils.",
  items: [
    {
      title: "PME et ETI de 50 à 500 personnes",
      description:
        "Assez de volume pour que l'automatisation change les marges, assez d'agilité pour déployer vite. Le cœur de nos missions.",
    },
    {
      title: "Agences de communication",
      description:
        "L'IA redéfinit le métier. Les agences qui l'intègrent dans leur production prennent l'avantage sur celles qui attendent.",
    },
    {
      title: "Biotech et santé",
      description:
        "Des équipes très qualifiées, beaucoup de documentation et de reporting : un terrain à fort levier pour l'IA, avec les exigences de rigueur du secteur.",
    },
  ],
} as const;

export const aiConsultingFaq = {
  title: "Questions fréquentes",
  items: [
    {
      question:
        "Quelle différence entre une agence IA et un cabinet de transformation IA ?",
      answer:
        "Une agence IA livre un projet : un chatbot, un POC, une automatisation, puis passe au client suivant. Un cabinet de transformation IA s'engage sur un résultat dans la durée : il audite les processus, déploie des systèmes en production, forme les équipes et transfère la compétence. Chez AI Makers, cela se traduit par un ingénieur référent, 1 à 2 systèmes livrés en production chaque mois, 2 heures de formation par semaine et la propriété intellectuelle totale de ce qui est construit.",
    },
    {
      question: "Que fait un consultant IA ?",
      answer:
        "Un consultant IA analyse les processus d'une entreprise, identifie les tâches automatisables, recommande des cas d'usage et accompagne leur mise en place. La limite du conseil classique : la recommandation s'arrête souvent au rapport. Notre approche va jusqu'à la production : les ingénieurs qui auditent sont ceux qui construisent les systèmes, puis forment les équipes à les faire vivre.",
    },
    {
      question: "Comment automatiser des processus métier avec l'IA ?",
      answer:
        "En quatre étapes. D'abord cartographier les workflows pour identifier les tâches répétitives : reporting, saisie, relances, synthèses. Ensuite prioriser par retour sur investissement : toutes les automatisations ne se valent pas. Puis construire le système avec des outils éprouvés comme n8n et Claude, connectés à vos données. Enfin mesurer : un système sans indicateur d'usage et de temps gagné est un système qu'on abandonne.",
    },
    {
      question: "Travaillez-vous avec des agents IA ?",
      answer:
        "Oui. Nous concevons des agents IA sur mesure : des systèmes capables d'exécuter des tâches complètes (qualifier une demande, préparer un document, synthétiser des échanges) en s'appuyant sur vos outils et vos données. Chaque agent est livré en production, documenté, et sa propriété intellectuelle vous revient intégralement.",
    },
    {
      question: "Où intervenez-vous ?",
      answer:
        "Nous avons des bureaux à Paris (75008) et à Casablanca. Nous intervenons en France et au Maroc, sur site pour les phases clés (interviews d'audit, restitution, formations) et à distance pour le reste. Nous limitons volontairement notre capacité à 3 nouveaux clients par mois pour garantir un ingénieur référent à chaque compte.",
    },
  ],
} as const;

export const aiConsultingRelated = [
  {
    title: "Meilleures agences IA en France en 2026",
    href: "/blog/meilleures-agences-ia-france",
    description:
      "Le comparatif honnête des cabinets et agences IA, pour choisir selon la taille de votre entreprise.",
  },
  {
    title: "Meilleures formations IA pour entreprises",
    href: "/blog/meilleures-formations-ia-entreprise",
    description:
      "Catalogue générique ou formation sur vos cas d'usage réels : comment choisir.",
  },
  {
    title: "Meilleures formations Claude en entreprise",
    href: "/blog/meilleures-formations-claude-entreprise",
    description: "Où former vos équipes à Claude en français, sur vos process.",
  },
  {
    title: "Forward Deployed Engineer",
    href: "/forward-deployed-engineer",
    description:
      "Un ingénieur intégré à votre équipe plutôt qu'une agence : le modèle, semaine par semaine.",
  },
] as const;

export const aiConsultingCta = {
  title: "Comparez-nous à une agence IA",
  subtitle:
    "30 minutes pour analyser vos workflows et repartir avec vos 3 premiers quick wins IA, que vous travailliez avec nous ou non.",
} as const;

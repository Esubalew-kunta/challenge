/**
 * Contenu de la page /ai-transformation ("Transformation IA").
 *
 * Structure : thèse de marché (hero + preuve + problème + mécanisme unique)
 * puis vision (3 horizons reliés aux phases) et squelette de conversion
 * (phases, règles, cas client, témoignages, FAQ, appel final
 * avec scarcité réelle).
 *
 * Tout le copy propre à la page vit ici. Les données partagées (logos
 * clients, témoignages, cas clients, fleet interne) sont
 * importées de site-config en lecture seule, jamais dupliquées.
 */

export const transformationMeta = {
  // 30/07/2026 : la page absorbe l'ex-page /audit-ia-entreprise. Le titre
  // reprend « audit IA entreprise » pour conserver son positionnement.
  title: "Transformation IA : votre département IA externalisé",
  description:
    "Votre département IA externalisé : audit chiffré en 2 semaines avec scoring de maturité sur 24 points, 1 à 2 systèmes IA en production par mois, équipes autonomes à 6 mois.",
} as const;

export const transformationHero = {
  badge: "Maximum 3 nouveaux clients par mois",
  title: "La transformation IA n'attendra pas votre prochain plan stratégique.",
  subtitle:
    "Intégrer l'IA est devenu fondamental. Le vrai travail commence après : trier l'IA spectacle des cas d'usage qui rapportent chez vous. AI Makers devient votre département IA : audit en 2 semaines, systèmes en production chaque mois, équipes autonomes à 6 mois.",
  manifesteLink: {
    label: "Lire pourquoi maintenant",
    href: "/pourquoi-maintenant",
  },
  cta: { label: "Réserver mon diagnostic gratuit", href: "/contact" },
  statsLine:
    "+200 systèmes déployés · +10 000 professionnels formés · 7h/semaine récupérées en moyenne par collaborateur",
} as const;

/** Logos affichés dans la rangée de preuve (noms exacts de clientLogos). */
export const featuredLogoNames = [
  "Schneider Electric",
  "Gepromed",
  "Sage",
  "Amgen",
  "Délifrance",
  "AS Monaco",
  "Emirates NBD",
  "Groupe Partouche",
] as const;

export const proofBar = {
  kicker: "Ils travaillent avec nous",
  stat: {
    value: "7h",
    label: "récupérées chaque semaine par collaborateur, en moyenne",
    detail:
      "Mesuré système par système : un KPI avant, un KPI après. L'adoption réelle, pas le nombre de licences distribuées.",
    link: { label: "Voir toutes les études de cas", href: "/etudes-de-cas" },
  },
} as const;

export const transformationProblem = {
  badge: "Le problème",
  title: "Trois raisons pour lesquelles rien n'a encore changé chez vous",
  intro:
    "Vous avez essayé les outils, peut-être formé quelques personnes. Vos process, eux, n'ont pas bougé. Le blocage est rarement technologique : c'est l'adoption qui fait défaut.",
  pains: [
    {
      number: "01",
      title: "Vos équipes ont testé ChatGPT. Rien n'est passé en production.",
      description:
        "Des usages individuels, aucun système. Chacun bricole dans son coin, rien n'est documenté, rien ne tient dans le temps. Un outil ne change rien : ce qui change tout, c'est un système configuré pour votre façon de travailler.",
      figure: "60-80%",
      figureLabel:
        "du travail répétitif (reporting, saisie, relances, synthèses) est absorbable par l'IA. Chez vous, il est encore fait à la main.",
    },
    {
      number: "02",
      title:
        "Vous avez formé quelques personnes. Trois semaines après, tout est oublié.",
      description:
        "Une formation théorique sur des slides génériques ne survit pas au retour au poste de travail. Ce qui tient dans le temps : de la pratique régulière sur vos cas réels, avec des systèmes déjà en production à utiliser. L'humain d'abord, la technologie ensuite.",
      figure: "2h/semaine",
      figureLabel:
        "de pratique sur vos cas réels : le format qui rend les équipes autonomes, pas le séminaire d'une journée.",
    },
    {
      number: "03",
      title: "Personne chez vous n'a le temps de structurer le sujet.",
      description:
        "Vos meilleurs éléments sont pris par l'opérationnel. Recruter un profil IA senior est long, cher et incertain. Pendant ce temps, le sujet reste au stade du « on devrait s'y mettre ».",
      figure: "6 à 12 mois",
      figureLabel:
        "pour recruter un expert IA senior, à 70 000 €+/an de fixe, sans garantie de résultat.",
    },
  ],
} as const;

export const transformationMechanism = {
  badge: "Notre mécanisme",
  title: "On s'applique à nous-mêmes ce qu'on vend.",
  paragraphs: [
    "AI Makers tourne sur ses propres systèmes. Le brief de décision du matin, l'analyse de chaque appel commercial, la préparation de chaque rendez-vous, le suivi de santé de chaque mission client : tout est produit par les agents que nous construisons.",
    "Résultat : une équipe de 8 qui produit comme une équipe de 60. C'est ce mécanisme, éprouvé chez nous tous les jours, que nous installons chez vous. Pas une méthode lue dans un livre blanc : notre propre façon de travailler.",
  ],
  stat: {
    value: "8 personnes",
    label: "la production d'une équipe de 60, grâce à nos propres systèmes",
  },
  systemsCaption:
    "Les systèmes qui font tourner AI Makers en interne, tous les jours :",
} as const;

export const transformationHorizons = {
  badge: "La trajectoire",
  title: "Où va l'IA. Et où on vous emmène.",
  intro:
    "Notre métier n'est pas de suivre la vague. C'est de construire chez vous, aujourd'hui, ce qui vous met en position pour la suite.",
  buildLabel: "Ce qu'on construit avec vous aujourd'hui pour y être",
  items: [
    {
      period: "Aujourd'hui",
      title: "Des workflows augmentés",
      description:
        "L'IA lit, trie, rédige, rapproche. Les tâches répétitives sortent du quotidien de vos équipes, process par process. C'est le niveau de maturité le plus rentable aujourd'hui, et le plus rapide à mettre en production.",
      build:
        "L'audit chiffre vos cas d'usage par ROI, puis les premiers systèmes passent en production dans vos workflows. C'est exactement le périmètre des phases AUDIT et BUILD.",
      phaseLabel: "Phases 1 et 2",
    },
    {
      period: "Dans 12 mois",
      title: "Des agents qui agissent",
      description:
        "Des agents qui enchaînent les étapes eux-mêmes : ils consultent vos outils, prennent des actions, rendent compte. Les standards émergent, comme MCP (Model Context Protocol, le standard ouvert lancé par Anthropic et adopté par OpenAI et Google), qui branche les modèles directement sur vos systèmes.",
      build:
        "Vos playbooks documentés et les données produites par vos premiers systèmes sont le carburant de ces agents. On les structure dès maintenant, pendant les phases BUILD et SCALE.",
      phaseLabel: "Phases 2 et 3",
    },
    {
      period: "Dans 24 mois",
      title: "Des équipes hybrides",
      description:
        "Des équipes où chaque collaborateur orchestre plusieurs agents sur son périmètre. Les entreprises qui auront structuré leurs process et formé leurs équipes d'ici là auront une avance difficile à rattraper. Personne ne connaît le calendrier exact. La direction, elle, ne fait plus débat.",
      build:
        "Le programme AI Champions rend vos équipes capables de faire tourner, corriger et étendre les systèmes sans nous. C'est la phase SCALE, et ce qui vient après.",
      phaseLabel: "Phase 3 et au-delà",
    },
  ],
  note: "AI Makers est Partenaire Anthropic, l'éditeur de Claude à l'origine du standard MCP. Ces horizons ne sont pas des promesses datées : ce que vous structurez aujourd'hui reste valable quel que soit le rythme réel.",
} as const;

export const transformationPhases = {
  badge: "Le déroulé",
  title: "Votre département IA externalisé, en trois phases.",
  subtitle:
    "L'humain avant la tech. La donnée avant le développement. Chaque phase a une durée, des livrables concrets, et un seul objectif final : que vos équipes adoptent les systèmes, puis se les approprient.",
  items: [
    {
      number: "Phase 1 : AUDIT",
      brand: "AI Scan",
      duration: "1 à 2 semaines",
      summary:
        "On ne développe rien en semaine 1. On commence par vos équipes et vos données : cartographie des workflows, interviews des opérationnels, scoring de maturité sur notre grille en 24 points. Vous repartez avec une feuille de route chiffrée, ROI par cas d'usage.",
      actions: [
        "Cartographie complète des process existants",
        "Interviews des décideurs et des opérationnels",
        "Scoring de maturité IA sur 6 axes (grille propriétaire)",
        "Roadmap chiffrée 3, 6 et 12 mois avec ROI estimé",
        "Minimum 3 cas d'usage prêts à construire",
      ],
      gain: "Vous savez où l'IA rapporte chez vous : au moins 3 cas d'usage chiffrés et une roadmap priorisée par ROI.",
      illustration: "/images/3d/cible-flechette.png",
    },
    {
      number: "Phase 2 : BUILD",
      brand: "AI Engine",
      duration: "3 à 6 mois",
      summary:
        "Un ingénieur IA référent construit vos systèmes sur vos données, directement dans vos workflows. Chaque système a un KPI mesuré avant et après, et vos équipes pratiquent 2h par semaine pour l'adopter au fil des livraisons.",
      actions: [
        "Un ingénieur IA référent, intégré à votre équipe",
        "1 à 2 systèmes IA livrés en production par mois",
        "2h de formation par semaine, sur vos cas réels",
        "Playbooks documentés, propriété client totale",
        "Support jour même + accès à +1 500 automatisations",
      ],
      gain: "Vos premiers systèmes tournent en production dès le premier mois, avec un impact mesuré sur un KPI établi avant le déploiement.",
      illustration: "/images/3d/jauge-numero1.png",
    },
    {
      number: "Phase 3 : SCALE",
      brand: "AI Champions",
      duration: "En continu, dès le mois 3",
      summary:
        "Le passage à l'échelle : vos équipes prennent la main. Optimisation continue des systèmes, nouveaux cas d'usage, revue stratégique trimestrielle au niveau COMEX.",
      actions: [
        "Programme AI Champions : vos équipes deviennent autonomes",
        "Optimisation continue des systèmes en production",
        "Identification de nouveaux cas d'usage en continu",
        "Veille IA intégrée directement dans vos systèmes",
        "Revue stratégique trimestrielle au niveau COMEX",
      ],
      gain: "Des équipes capables de faire tourner et d'améliorer les systèmes sans nous. Et chaque trimestre, de nouveaux cas d'usage à fort ROI, priorisés.",
      illustration: "/images/3d/chapeau-formation.png",
    },
  ],
} as const;

export const transformationCaseStudy = {
  badge: "Preuve",
  title: "Ce que ça donne chez un client",
  subtitle:
    "Un exemple documenté, avec l'avant, l'après et la méthode. Pas une promesse : un résultat mesuré.",
} as const;

export const transformationTestimonials = {
  badge: "Ils en parlent mieux que nous",
  title: "Ce que disent les dirigeants qu'on accompagne",
} as const;

/** Auteurs mis en avant, dans l'ordre d'affichage (issus de bookingProof). */
export const featuredTestimonialAuthors = [
  "Hervé Landau",
  "Mickaël Mina",
  "Mariem Lahlou",
] as const;

export const transformationFaq = {
  badge: "FAQ",
  title: "Questions fréquentes sur le programme",
  items: [
    {
      question: "Qu'est-ce que la transformation IA ?",
      answer:
        "La transformation IA consiste à redessiner les process d'une entreprise autour de l'intelligence artificielle : audit des workflows, systèmes en production, équipes formées. La méthode AI Makers tient en trois phases : identifier les cas d'usage qui créent de la valeur mesurable, les mettre en production, puis rendre les équipes autonomes.",
    },
    {
      question: "Combien de temps dure le programme ?",
      answer:
        "L'audit AI Makers dure 1 à 2 semaines. Ensuite, un ingénieur référent construit 1 à 2 systèmes par mois dans vos workflows, avec 2 heures de formation par semaine pour vos équipes. L'objectif est fixé dès le départ : vos équipes autonomes à 6 mois.",
    },
    {
      question: "Quelle est la durée d'engagement ?",
      answer:
        "L'engagement initial est de 3 ou 6 mois selon le périmètre. Ensuite, l'accompagnement se poursuit au mois, avec un préavis de 30 jours. La durée médiane d'un accompagnement complet est de 6 à 9 mois pour atteindre l'autonomie totale des équipes.",
    },
    {
      question: "Qui construit les systèmes ?",
      answer:
        "Un ingénieur IA référent d'AI Makers, intégré à votre équipe. Il est onboardé sur votre secteur 2 semaines avant le lancement : il comprend votre métier avant de construire quoi que ce soit. Chaque système livré a un KPI mesuré avant et après.",
    },
    {
      question: "Que se passe-t-il si les résultats ne sont pas là ?",
      answer:
        "Chaque système livré est mesuré sur un KPI établi avant son déploiement : l'impact se constate chiffres en main, système par système. Et la propriété intellectuelle totale de tout ce qui est construit vous reste acquise, quoi qu'il arrive.",
    },
    {
      question: "À qui appartient ce qui est construit ?",
      answer:
        "À vous, intégralement. Les systèmes, les playbooks documentés, les formations : tout reste chez vous. Le jour où l'accompagnement s'arrête, rien ne s'arrête avec lui. Zéro dépendance : c'est écrit au contrat.",
    },
    // Questions reprises de l'ex-page /audit-ia-entreprise (fusion 30/07/2026).
    {
      question: "Combien de temps dure un audit IA ?",
      answer:
        "L'AI Scan, l'audit IA d'AI Makers, dure 1 à 2 semaines selon la taille de l'entreprise et le nombre de départements couverts. C'est volontairement court : un audit qui traîne trois mois produit un rapport déjà périmé. En deux semaines, vous avez la cartographie, le scoring de maturité et une roadmap actionnable présentée à votre comité de direction.",
    },
    {
      question: "Qui est interviewé pendant l'audit ?",
      answer:
        "Les personnes qui exécutent réellement les processus, pas seulement les managers. Nous interrogeons chaque département concerné : les opérationnels décrivent les tâches répétitives telles qu'elles se passent vraiment, la direction apporte la vision et les priorités. C'est ce croisement qui révèle les écarts entre le processus officiel et le travail réel : là où se cachent les meilleurs gains.",
    },
    {
      question: "Que contient la roadmap de l'audit ?",
      answer:
        "Une feuille de route chiffrée et priorisée, avec au minimum 3 cas d'usage à fort ROI. Pour chaque cas d'usage : le processus concerné, le gain estimé, la complexité de mise en œuvre et l'ordre de déploiement recommandé. Elle est structurée en horizons 3, 6 et 12 mois et présentée directement à votre COMEX, avec le score de maturité IA de l'entreprise sur 24 points.",
    },
    {
      question: "Que se passe-t-il si l'audit ne révèle rien ?",
      answer:
        "Une entreprise de 50 personnes et plus a toujours des processus automatisables. La roadmap chiffrée sert précisément à ça : choisir les 3 plus rentables et l'ordre dans lequel les déployer.",
    },
    {
      question: "L'audit engage-t-il sur la suite ?",
      answer:
        "Non. La roadmap et tous les livrables vous appartiennent intégralement : vous pouvez les exécuter en interne ou avec un autre prestataire. Si vous continuez avec nous, l'audit devient la première phase de l'accompagnement, avec un premier impact visé sous 30 jours.",
    },
  ],
} as const;

export const transformationFinalCta = {
  title:
    "Chaque mois d'attente est un mois de données que vous n'accumulez pas.",
  subtitle:
    "30 minutes pour analyser vos workflows et repartir avec vos 3 premiers quick wins IA, que vous travailliez avec nous ou non.",
  cta: { label: "Réserver mon diagnostic gratuit", href: "/contact" },
} as const;

/* ------------------------------------------------------------------ */
/* Contenu qui vivait dans page.tsx                                    */
/*                                                                     */
/* Ces blocs étaient déclarés dans la page elle-même : tant qu'il n'y   */
/* avait qu'une langue, ça se voyait à peine. La page est désormais un  */
/* gabarit partagé FR/EN, donc tout le copy descend ici — sinon la      */
/* version anglaise hérite des chaînes françaises.                     */
/* ------------------------------------------------------------------ */

/** Schémas SEO : les libellés visibles des données structurées. */
export const transformationSchema = {
  breadcrumbHome: "Accueil",
  breadcrumbCurrent: "Transformation IA",
  serviceName: "Transformation IA : programme complet",
  serviceType: "Transformation IA d'entreprise",
  areaServed: ["France", "Maroc"],
  serviceDescription:
    "Programme de transformation IA en 3 phases : audit des workflows avec scoring de maturité sur 24 points, construction de 1 à 2 systèmes IA en production par mois par un ingénieur référent, formation des équipes jusqu'à l'autonomie à 6 mois.",
} as const;

/**
 * Phase 1 en détail — contenu repris de l'ex-page /audit-ia-entreprise
 * (fusionnée ici le 30/07/2026, ancienne URL redirigée en 301).
 */
export const transformationAudit = {
  badge: "La phase 1 en détail",
  title: "L'audit IA : vos opportunités cartographiées en 2 semaines",
  intro:
    "Un audit IA est une analyse systématique de vos workflows pour identifier les tâches automatisables et les prioriser par retour sur investissement. Notre AI Scan dure 1 à 2 semaines : cartographie des processus, interviews des équipes, scoring de maturité sur 24 points, et une roadmap chiffrée avec au minimum 3 cas d'usage à fort ROI, présentée à votre COMEX.",
  stepsTitle: "Quatre étapes en deux semaines",
  steps: [
    {
      number: "01",
      title: "Cartographie des processus",
      description:
        "On documente les workflows de chaque département : qui fait quoi, avec quels outils, en combien de temps. Le travail réel, pas l'organigramme.",
    },
    {
      number: "02",
      title: "Interviews des équipes",
      description:
        "Entretiens structurés avec les opérationnels et les managers pour identifier les tâches répétitives, les irritants et les données disponibles.",
    },
    {
      number: "03",
      title: "Scoring de maturité sur 24 points",
      description:
        "Une grille de maturité IA notée sur 24 évalue où en est l'entreprise : outils, données, compétences, usages. Chaque opportunité est scorée par ROI.",
    },
    {
      number: "04",
      title: "Restitution COMEX",
      description:
        "Présentation à votre comité de direction : score de maturité, cas d'usage priorisés, roadmap chiffrée. Des décisions, pas un rapport qui dort.",
    },
  ],
  deliverablesTitle: "Ce que vous avez en main à la fin",
  deliverables: [
    "La cartographie de vos processus, département par département.",
    "Votre score de maturité IA sur 24 points, avec les axes de progression.",
    "Au minimum 3 cas d'usage à fort ROI, chiffrés et priorisés.",
    "Une roadmap structurée en horizons 3, 6 et 12 mois.",
    "Une présentation de restitution devant votre COMEX.",
    "La propriété intégrale de tous les livrables, exploitables avec ou sans nous.",
  ],
} as const;

/**
 * Le cas client Gepromed, preuve centrale de la page : un département IA
 * complet déployé dans une MedTech de 6 personnes — la promesse de la
 * page, vécue par un client. Données issues de l'étude de cas publiée.
 */
export const transformationGepromed = {
  title: "Gepromed",
  subtitle: "Département IA complet — MedTech, Strasbourg",
  cover: "/images/case-studies/gepromed-agents.png",
  metric: "16 agents IA",
  metricLabel: "livrés le premier mois, sur 5 départements",
  before:
    "6 personnes, 3 casquettes par tête : 2 à 3 jours par semaine de tâches à faible valeur, et une conformité ISO chronophage.",
  after:
    "Des agents IA par domaine : acquisition, finance, gestion de projet, conformité ISO. 47 besoins recensés par l'équipe elle-même.",
  how: "Masterclass collective, pilote individuel sur les tâches réelles d'une personne, puis déploiement domaine par domaine.",
  tags: ["Agents IA", "MedTech", "Conformité ISO"],
  readMore: {
    label: "Lire l’étude de cas Gepromed complète",
    href: "/etudes-de-cas/gepromed",
  },
} as const;

/** CTA intermédiaire, après le détail des phases. */
export const transformationMidCta = {
  question: "Vous voulez savoir à quoi ressemblerait ce programme chez vous ?",
} as const;

/** Comparatif des options — repris de l'ex-page agence-ia. */
export const transformationComparison = {
  badge: "Le comparatif",
  title: "Cabinet, ESN, agence, licence ou AI Makers",
  subtitle:
    "Cinq façons d’aborder l’IA en entreprise. Une seule vous livre des systèmes en production, configurés pour vous.",
} as const;

/** Bloc « Pour aller plus loin » en pied de page. */
export const transformationRelated = [
  {
    title: "Forward Deployed Engineer",
    href: "/forward-deployed-engineer",
    description: "L'ingénieur IA référent qui s'assoit dans votre équipe.",
  },
  {
    title: "AI Operating System",
    href: "/ai-operating-system",
    description: "L'operating system IA qui fait tourner toute l'entreprise.",
  },
  {
    title: "Études de cas",
    href: "/etudes-de-cas",
    description: "Les résultats mesurés chez nos clients, avant et après.",
  },
  {
    title: "Formation IA entreprise",
    href: "/formation-ia-entreprise",
    description:
      "La phase Scale en pratique : des équipes formées sur leurs cas réels.",
  },
] as const;

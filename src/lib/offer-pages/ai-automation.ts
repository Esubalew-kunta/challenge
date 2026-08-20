/**
 * Contenu de la page /automatisation-ia-workflow.
 *
 * Extrait de la page, qui portait son copy en JSX inline et en tableaux
 * locaux. Apostrophes reprises À L'IDENTIQUE : le rendu français ne bouge pas.
 *
 * Le tableau « avec / sans » n'est PAS ici : il vient de
 * `homepageContent.offer.comparison`, partagé avec la home.
 */

export const aiAutomationMeta = {
  title: "Automatisation des processus par l'IA",
  description:
    "Automatisation des processus par l'IA : reporting, saisie, relances, synthèses. Cartographie, scoring ROI, build n8n et Claude, gains mesurés.",
} as const;

export const aiAutomationSchema = {
  breadcrumbHome: "Accueil",
  breadcrumbCurrent: "Automatisation IA",
  serviceName: "Automatisation des processus métier par l'IA",
  serviceType: "Automatisation de workflows",
  serviceDescription:
    "Cartographie des processus, priorisation par ROI, construction de workflows automatisés avec n8n et Claude, mesure des gains. Systèmes livrés en production.",
  areaServed: ["France", "Maroc"],
} as const;

export const aiAutomationHero = {
  badge: "Automatisation IA",
  h1Lead: "Automatisation des processus",
  h1Highlight: "par l'IA",
  intro:
    "L'automatisation des processus par l'IA consiste à confier à des systèmes intelligents les tâches répétitives d'un workflow : saisie, reporting, relances, synthèses. Résultat moyen constaté chez nos clients : 7 heures gagnées par semaine et par collaborateur. AI Makers cartographie vos processus, priorise par ROI, construit avec n8n et Claude, puis mesure les gains.",
  stats: [
    { target: 7, suffix: "h", label: "gagnées / semaine / personne" },
    { target: 200, prefix: "+", label: "systèmes en production" },
    { target: 50, prefix: "+", label: "entreprises accompagnées" },
  ],
  proofPhoto: {
    src: "/images/formations/atelier-hands-on.png",
    alt: "Atelier d'automatisation IA avec une équipe cliente",
  },
  proofCaption:
    "Construction d'un workflow automatisé, en atelier avec le client.",
} as const;

export const aiAutomationWiring = {
  badge: "En un coup d'œil",
  title: "À quoi ressemble un workflow automatisé",
  description:
    "Un déclencheur, un agent qui traite, des sorties en secondes. Voici un cas réel : un lead qui arrive par email, qualifié et routé sans qu'une seule main n'y touche.",
} as const;

export const aiAutomationProcesses = {
  badge: "Les processus",
  title: "Ce qui s'automatise vraiment",
  description:
    "Six familles de processus reviennent dans presque toutes nos missions. Si vos équipes y passent des heures chaque semaine, il y a un système à construire.",
  items: [
    {
      icon: "reporting",
      title: "Reporting",
      description:
        "Rapports d'activité, tableaux de bord, consolidations hebdomadaires générés automatiquement à partir de vos données.",
    },
    {
      icon: "data",
      title: "Saisie et transfert de données",
      description:
        "Extraction de documents, mise à jour de CRM, synchronisation entre outils, sans recopie manuelle.",
    },
    {
      icon: "followup",
      title: "Relances",
      description:
        "Relances clients, fournisseurs, candidats ou impayés déclenchées au bon moment, avec le bon contexte.",
    },
    {
      icon: "summary",
      title: "Synthèses",
      description:
        "Comptes rendus de réunions, résumés de documents longs, veille condensée et distribuée aux bonnes personnes.",
    },
    {
      icon: "onboarding",
      title: "Onboarding",
      description:
        "Arrivée d'un client ou d'un collaborateur : création des accès, documents et checklists sans intervention manuelle.",
    },
    {
      icon: "invoicing",
      title: "Facturation",
      description:
        "Génération de factures, suivi des paiements, rapprochements et alertes sur les retards.",
    },
  ],
} as const;

export const aiAutomationSteps = {
  badge: "La méthode",
  title: "Quatre étapes, zéro pari",
  description:
    "On ne commence jamais par l'outil. On commence par le processus et son ROI.",
  items: [
    {
      number: "01",
      title: "Cartographie",
      description:
        "On documente vos workflows réels, tâche par tâche, avec les équipes qui les exécutent. Pas de suppositions.",
    },
    {
      number: "02",
      title: "Scoring ROI",
      description:
        "Chaque processus est noté : temps passé, fréquence, complexité, gain potentiel. On ne construit que ce qui rapporte.",
    },
    {
      number: "03",
      title: "Build",
      description:
        "Construction du système avec n8n et Claude, connecté à vos outils, testé avec vos équipes, puis mis en production.",
    },
    {
      number: "04",
      title: "Mesure",
      description:
        "Chaque système a ses KPIs : usage réel, temps gagné, erreurs évitées. Ce qui n'est pas mesuré est abandonné.",
    },
  ],
} as const;

export const aiAutomationToolVsSystem = {
  badge: "Outil vs système",
  title: "Un outil s'achète. Un système se construit.",
  /** Le mot mis en gras au milieu du 2e paragraphe. */
  emphasis: "système",
  paragraph1:
    "Acheter une licence ChatGPT pour toute l'équipe n'est pas une automatisation. C'est un outil. Et un outil sans processus reste inutilisé après trois semaines.",
  paragraph2Lead: "Un ",
  paragraph2Rest:
    ", c'est différent : un workflow branché sur vos données, qui s'exécute sans qu'on y pense, avec des indicateurs de suivi et une personne responsable. Il survit aux départs, aux pics d'activité et aux changements d'outils.",
  paragraph3:
    "C'est la raison pour laquelle nous ne vendons pas de licences ni de prototypes : nous livrons des systèmes en production, documentés, dont la propriété intellectuelle vous revient intégralement.",
} as const;

export const aiAutomationWithWithout = {
  badge: "Avec ou sans",
  title: "Construire ces systèmes seul, ou avec nous",
  description:
    "Recruter un profil IA senior, ou brancher un ingénieur référent dédié à vos process. Le calcul est vite fait.",
} as const;

export const aiAutomationStack = {
  badge: "La stack",
  title: "Nos outils, sans langue de bois",
  description:
    "Nous n'avons d'exclusivité avec personne. Voici ce que nous utilisons et pourquoi.",
  items: [
    {
      name: "n8n",
      description:
        "Notre moteur d'automatisation principal. Open source, hébergement maîtrisé, logique avancée et connexion native aux modèles IA. C'est sur n8n que nous construisons la majorité des systèmes.",
    },
    {
      name: "Claude",
      description:
        "Le modèle IA que nous utilisons pour les tâches de raisonnement : analyse de documents, rédaction, synthèse, qualification. Intégré dans les workflows via API.",
    },
    {
      name: "Make",
      description:
        "Alternative visuelle pertinente pour des scénarios intermédiaires. Nous l'utilisons quand l'écosystème du client le justifie.",
    },
    {
      name: "Zapier",
      description:
        "Le plus simple pour connecter deux outils sur un scénario basique. Ses limites : coût au volume et logique restreinte. Honnêtement : rarement notre premier choix pour des processus métier.",
    },
  ],
} as const;

export const aiAutomationFaq = {
  title: "Questions fréquentes sur l'automatisation",
  items: [
    {
      question: "Quels processus automatiser en priorité ?",
      answer:
        "Ceux qui cumulent trois critères : fréquence élevée, règles claires, faible valeur ajoutée humaine. En pratique : le reporting récurrent, la saisie et le transfert de données entre outils, les relances clients et fournisseurs, les synthèses de réunions et de documents. C'est exactement ce que notre audit mesure : chaque processus reçoit un score de ROI avant toute décision de build.",
    },
    {
      question: "Combien de temps faut-il pour automatiser un workflow ?",
      answer:
        "Dans notre phase Build, un ingénieur référent livre 1 à 2 systèmes par mois, en production. Un workflow simple (une relance automatisée, un rapport généré) se déploie en quelques semaines. Un système plus profond, connecté à plusieurs outils avec des étapes de validation humaine, prend un cycle complet. Le vrai délai n'est pas technique : c'est l'adoption par les équipes, d'où les 2 heures de formation hebdomadaires intégrées.",
    },
    {
      question: "n8n ou Zapier ?",
      answer:
        "Zapier est plus simple à prendre en main, pertinent pour connecter deux outils sur un scénario basique. n8n est plus puissant : logique conditionnelle avancée, appels aux modèles IA comme Claude, hébergement maîtrisé, coût qui n'explose pas avec le volume. Pour des processus métier sérieux, nous construisons sur n8n. Mais l'outil est secondaire : un mauvais processus automatisé reste un mauvais processus.",
    },
    {
      question: "Comment mesurer le ROI d'une automatisation ?",
      answer:
        "Avant le build, on mesure la situation de départ : temps passé sur la tâche, fréquence, personnes concernées, taux d'erreur. Après la mise en production, on suit les mêmes indicateurs plus l'usage réel du système. Le ROI se calcule en heures récupérées et en erreurs évitées. Chez nos clients, le gain moyen constaté est de 7 heures par semaine et par collaborateur.",
    },
    {
      question: "Faut-il des compétences techniques en interne ?",
      answer:
        "Non pour démarrer : notre ingénieur construit, documente et met en production. Oui pour durer : c'est pourquoi chaque mission inclut 2 heures de formation par semaine et le programme AI Champions, qui forme des référents internes. À 6 mois, vos équipes font vivre les systèmes sans nous, et la propriété intellectuelle vous appartient intégralement.",
    },
  ],
} as const;

export const aiAutomationRelated = [
  {
    title: "Transformation IA",
    href: "/ai-transformation",
    description: "L'offre complète en 3 phases, de l'audit à l'autonomie.",
  },
  {
    title: "Calculateur de ROI IA",
    href: "/outils/calculateur-roi-ia",
    description: "Estimez les heures et la valeur récupérables avec l'IA.",
  },
  {
    title: "Études de cas",
    href: "/etudes-de-cas",
    description: "Les automatisations déployées chez nos clients.",
  },
] as const;

export const aiAutomationCta = {
  title: "Quels processus automatiser chez vous ?",
  subtitle:
    "30 minutes pour analyser vos workflows et repartir avec vos 3 premiers quick wins IA, que vous travailliez avec nous ou non.",
} as const;

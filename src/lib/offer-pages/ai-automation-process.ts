/**
 * Contenu de la page /automatisation-ia-workflow (V3, française).
 *
 * Positionnement : le processus d'abord, la solution ensuite. Le texte est la
 * copie validée — il ne doit pas être réécrit ici. Les apostrophes
 * typographiques sont volontaires et reprises à l'identique.
 *
 * La page anglaise `/en/ai-automation` continue de vivre sur l'ancien gabarit
 * (`ai-automation-page.tsx`) : aucune copie anglaise n'a été validée pour cette
 * version, et rien n'est traduit à l'aveugle ici.
 */

export const automationProcessMeta = {
  /** Sans « | AI Makers » : le suffixe vient du template du layout (fr). */
  title: "Automatisation des processus métier par IA",
  description:
    "Automatisez vos processus métier avec l’IA : audit, priorisation, ROI mesurable, intégration, contrôles humains et mise en production dans vos outils.",
} as const;

export const automationProcessSchema = {
  breadcrumbHome: "Accueil",
  breadcrumbCurrent: "Automatisation des processus métier",
  serviceName: "Automatisation des processus métier par l’IA",
  serviceType: "Automatisation des processus métier",
  serviceDescription:
    "Audit du processus avec les équipes qui l’exécutent, priorisation par opportunités, risques et dépendances, ROI défini selon le problème du client, construction avec contrôles humains explicites et mise en production documentée.",
  areaServed: ["France", "Maroc"],
} as const;

export const automationProcessHero = {
  badge: "Automatisation des processus métier",
  h1Lead: "Automatisation des processus métier",
  h1Highlight: "par l’IA",
  intro: [
    "Vos équipes savent déjà où le travail se bloque : ressaisies, relances manuelles, contrôles répétitifs, données copiées d’un outil à l’autre, erreurs qui reviennent chaque semaine, reporting qui dépend d’une personne, demandes qui attendent dans une boîte mail ou un tableur.",
    "AI Makers transforme ces points de friction en systèmes automatisés qui s’intègrent au fonctionnement réel de l’entreprise. Le point de départ est un diagnostic avec les équipes concernées. Il permet d’identifier le processus, les exceptions, les données disponibles, les risques, le propriétaire métier et la mesure qui permettra de juger le résultat.",
    "L’objectif est simple : choisir les automatisations qui méritent d’être construites et obtenir un ROI mesurable selon la réalité du client.",
  ],
  ctaLabel: "Réserver un diagnostic",
} as const;

/** Blocs de contenu rendus par `ai-automation-process-page.tsx`. */
export type ProcessBlock =
  | { readonly kind: "p"; readonly text: string }
  | {
      readonly kind: "pLink";
      readonly lead: string;
      readonly link: { readonly label: string; readonly href: string };
      readonly rest: string;
    }
  | { readonly kind: "h3"; readonly text: string }
  | { readonly kind: "ul"; readonly items: readonly string[] }
  | { readonly kind: "ol"; readonly items: readonly string[] }
  | {
      readonly kind: "cards";
      readonly items: readonly {
        readonly number: string;
        readonly title: string;
        readonly paragraphs: readonly string[];
      }[];
    }
  | {
      readonly kind: "cta";
      readonly label: string;
      readonly href: string;
    };

export type ProcessSection = {
  readonly badge: string;
  readonly title: string;
  readonly description?: string;
  readonly blocks: readonly ProcessBlock[];
};

export const automationProcessSections: readonly ProcessSection[] = [
  {
    badge: "Les signaux",
    title: "Quand l’automatisation devient une priorité opérationnelle",
    description:
      "Une équipe peut compenser longtemps un mauvais workflow par des contrôles manuels, des fichiers intermédiaires et quelques personnes qui connaissent toutes les exceptions. Lorsque le volume augmente, cette organisation génère davantage de reprises, d’attente et de dépendance.",
    blocks: [
      {
        kind: "p",
        text: "Un processus mérite d’être examiné lorsqu’au moins un de ces symptômes apparaît :",
      },
      {
        kind: "ul",
        items: [
          "le volume augmente plus vite que la capacité de l’équipe ;",
          "les mêmes erreurs reviennent malgré les contrôles ;",
          "plusieurs personnes copient, vérifient ou rapprochent les mêmes informations ;",
          "un traitement dépend fortement d’une personne ou d’une connaissance tacite ;",
          "la direction reçoit les données trop tard pour décider ;",
          "un backlog affecte le client ou les équipes ;",
          "le coût du statu quo dépasse progressivement le coût du changement.",
        ],
      },
      {
        kind: "p",
        text: "Le diagnostic sert à déterminer si la réponse doit être une automatisation, une clarification du processus, un travail sur la donnée ou une meilleure répartition des responsabilités.",
      },
      {
        kind: "pLink",
        lead: "Quand le problème concerne plusieurs processus, plusieurs équipes ou une trajectoire plus large, le sujet relève souvent aussi d’une ",
        link: { label: "transformation IA", href: "/ai-transformation" },
        rest: " : prioriser les chantiers, clarifier la gouvernance et décider où l’entreprise veut construire une capacité durable.",
      },
    ],
  },
  {
    badge: "L’audit",
    title: "L’audit approfondi : comprendre le travail avant de construire",
    description:
      "Le premier échange vérifie si le sujet mérite une analyse approfondie. Lorsque le potentiel est réel, AI Makers mène un audit détaillé avec les personnes qui exécutent, supervisent ou dépendent du processus.",
    blocks: [
      {
        kind: "p",
        text: "L’audit suit le travail tel qu’il existe réellement. Les procédures écrites sont utiles, mais les écarts avec la pratique quotidienne révèlent souvent les tâches invisibles, les contournements et les exceptions.",
      },
      { kind: "h3", text: "Ce que l’audit produit" },
      {
        kind: "p",
        text: "Le livrable rassemble six éléments liés entre eux : cartographie des processus, opportunités, risques, quick wins, roadmap d’implémentation et ownership. Une opportunité n’entre pas dans la roadmap parce qu’elle paraît intéressante en atelier. Elle doit être reliée à un problème observable, à une mesure exploitable et à des conditions de mise en œuvre réalistes.",
      },
      {
        kind: "p",
        text: "La cartographie décrit les étapes, validations, outils, données et personnes impliquées. L’analyse des risques fait ressortir les accès manquants, règles instables, exceptions, dépendances techniques et absences de responsable métier. Les quick wins sont ensuite choisis parmi les sujets où valeur, faisabilité, mesure et risque permettent réellement d’apprendre.",
      },
      {
        kind: "p",
        text: "La roadmap ordonne les dépendances avant le build. Chaque système retenu reçoit un responsable métier capable d’arbitrer le résultat attendu, les exceptions et les évolutions.",
      },
    ],
  },
  {
    badge: "Les règles",
    title: "Les règles qui changent réellement une décision d’automatisation",
    blocks: [
      {
        kind: "cards",
        items: [
          {
            number: "01",
            title: "L’absence d’owner bloque la mise en production",
            paragraphs: [
              "Si personne ne peut décider ce qui constitue un bon résultat, une exception acceptable ou une erreur critique, le problème n’est pas prêt à être automatisé. L’automatisation peut être prototypée pour apprendre, mais elle ne doit pas devenir un système opérationnel sans responsable identifié.",
            ],
          },
          {
            number: "02",
            title: "Une règle métier instable réduit la priorité",
            paragraphs: [
              "Un workflow dont les règles changent chaque semaine peut absorber beaucoup de temps et sembler idéal pour l’automatisation. Pourtant, automatiser une logique qui n’est pas stabilisée crée surtout une nouvelle couche à modifier en permanence.",
              "Dans ce cas, la première action consiste à clarifier le processus, réduire les variantes et identifier qui possède la règle.",
            ],
          },
          {
            number: "03",
            title: "Une donnée inaccessible peut annuler un ROI séduisant",
            paragraphs: [
              "Un processus peut avoir un volume élevé et un gain potentiel important. Si la donnée nécessaire n’est disponible qu’en export manuel, si les droits d’accès ne peuvent pas être obtenus ou si la source change fréquemment de format, la faisabilité doit être revue avant le build.",
              "Le potentiel économique reste intéressant, mais la dépendance technique doit être traitée dans la roadmap.",
            ],
          },
          {
            number: "04",
            title: "Les exceptions déterminent le niveau de contrôle humain",
            paragraphs: [
              "Un processus peut être composé majoritairement de cas simples tout en contenant quelques situations sensibles qui ne doivent pas être traitées automatiquement.",
              "Dans ce cas, il peut être plus robuste d’automatiser le traitement courant et de router les exceptions vers une personne.",
              "Le coût potentiel d’une erreur détermine le niveau de contrôle humain.",
            ],
          },
          {
            number: "05",
            title: "Un quick win doit être mesurable",
            paragraphs: [
              "Une automatisation facile à construire n’est pas automatiquement un bon premier projet. Si personne ne peut mesurer son effet, elle produit peu d’apprentissage.",
              "Un meilleur quick win possède un périmètre limité, une mesure de départ exploitable, des utilisateurs disponibles et une valeur suffisamment visible pour décider de la suite.",
            ],
          },
        ],
      },
      {
        kind: "p",
        text: "Ces règles évitent deux erreurs fréquentes : choisir uniquement les tâches les plus répétitives, ou choisir uniquement les projets les plus impressionnants techniquement.",
      },
    ],
  },
  {
    badge: "Le ROI",
    title: "Le ROI est défini selon le problème du client",
    description:
      "AI Makers ne fixe pas un chiffre universel de temps gagné ou de retour financier. La métrique dépend du résultat que l’entreprise cherche réellement à améliorer.",
    blocks: [
      {
        kind: "p",
        text: "Avant la construction, le projet définit une situation de départ. Selon le processus, cette baseline peut inclure le temps moyen par dossier, le nombre de dossiers traités par semaine, le volume de reprises, le taux d’erreur, le délai de réponse, le coût opérationnel ou une métrique commerciale.",
      },
      {
        kind: "p",
        text: "Le même système peut donc avoir des objectifs très différents selon l’entreprise.",
      },
      {
        kind: "p",
        text: "Dans la finance, la mesure peut porter sur les reprises et le temps de rapprochement. Pour une équipe commerciale, elle peut suivre le délai entre une demande entrante et sa qualification. En opérations, elle peut mesurer la capacité absorbée sans augmenter la charge administrative. Dans un autre contexte, la bonne métrique peut être la réduction d’erreurs critiques plutôt que le temps gagné.",
      },
      {
        kind: "p",
        text: "La baseline a aussi une fonction de gouvernance. Elle empêche le projet d’être jugé uniquement sur l’impression que « l’outil fonctionne ». Un workflow peut être techniquement correct sans améliorer le processus qui justifiait l’investissement.",
      },
      {
        kind: "p",
        text: "Après mise en production, les résultats sont comparés au point de départ convenu.",
      },
      {
        kind: "p",
        text: "La suite dépend de cette mesure : élargir le périmètre, corriger le système, maintenir le niveau atteint ou arrêter une automatisation dont la valeur n’est pas démontrée.",
      },
    ],
  },
  {
    badge: "Interne ou externe",
    title: "Construire en interne ou faire venir des experts ?",
    description: "Pour beaucoup d’entreprises, c’est la décision centrale.",
    blocks: [
      {
        kind: "p",
        text: "Le choix interne est cohérent lorsque l’équipe possède déjà les compétences d’intégration et d’automatisation, qu’un responsable peut consacrer du temps au sujet, que les systèmes sont bien connus et que l’entreprise accepte une phase d’apprentissage plus longue.",
      },
      {
        kind: "p",
        text: "L’appui d’experts devient plus pertinent lorsque le besoin est urgent, que plusieurs outils doivent être reliés, que les règles sont mal documentées, que les exceptions sont nombreuses ou que le coût d’une mauvaise conception est élevé.",
      },
      {
        kind: "p",
        text: "Un partenaire externe doit raccourcir la phase d’essais, challenger les hypothèses de départ, structurer les décisions techniques, accompagner les utilisateurs et laisser suffisamment de documentation pour que le système reste compréhensible après le projet.",
      },
      {
        kind: "p",
        text: "Le modèle d’exécution dépend du contexte. AI Makers peut prendre en charge l’implémentation, construire directement avec les équipes du client, transférer progressivement la responsabilité ou poursuivre dans un engagement AI Partner plus large.",
      },
      {
        kind: "pLink",
        lead: "Pour voir des exemples documentés de projets menés par AI Makers, consultez ",
        link: { label: "nos études de cas", href: "/etudes-de-cas" },
        rest: ".",
      },
      { kind: "cta", label: "Parler de votre projet", href: "/contact" },
    ],
  },
  {
    badge: "La méthode",
    title: "Du processus au système en production",
    blocks: [
      {
        kind: "cards",
        items: [
          {
            number: "01",
            title: "Cadrer un périmètre testable",
            paragraphs: [
              "Le projet commence par une partie précise du workflow. Utilisateurs, données, exceptions connues et résultat attendu doivent être identifiés suffisamment tôt pour tester le système sur des cas réels.",
            ],
          },
          {
            number: "02",
            title: "Organiser les dépendances",
            paragraphs: [
              "Accès, API, sources de données, règles de sécurité et systèmes maîtres sont vérifiés avant de figer l’architecture.",
              "Une dépendance non résolue entre dans la roadmap au lieu d’être découverte au déploiement.",
            ],
          },
          {
            number: "03",
            title: "Construire avec des contrôles explicites",
            paragraphs: [
              "Le système peut combiner automatisation, intégrations, règles métier et composants IA.",
              "Les décisions sensibles disposent d’un contrôle adapté : validation humaine, seuil de confiance, journalisation, limitation de périmètre ou escalade.",
            ],
          },
          {
            number: "04",
            title: "Tester les cas réels",
            paragraphs: [
              "Les utilisateurs testent les cas courants mais aussi les doublons, données manquantes, formats imparfaits et exceptions.",
              "Cette phase détermine ce que le système peut traiter seul et ce qui doit rester humain.",
            ],
          },
          {
            number: "05",
            title: "Mettre en production avec une responsabilité claire",
            paragraphs: [
              "Le passage en production couvre le suivi, les droits d’accès, les erreurs, la documentation et le responsable métier.",
              "Une automatisation sans ces éléments risque de devenir un nouveau point de dépendance.",
            ],
          },
        ],
      },
    ],
  },
  {
    badge: "La robustesse",
    title: "Les erreurs que l’architecture doit prévoir",
    description:
      "Un système utile est conçu pour les moments où le workflow ne se déroule pas comme prévu : API indisponible, donnée manquante, doublon, document incomplet, format modifié ou sortie IA incertaine.",
    blocks: [
      { kind: "p", text: "La conception doit répondre à des questions concrètes :" },
      {
        kind: "ul",
        items: [
          "qui reçoit un cas que le système ne peut pas traiter ?",
          "quelles actions nécessitent une approbation ?",
          "comment éviter qu’un doublon déclenche deux actions ?",
          "comment rejouer un traitement après une panne ?",
          "quelles informations faut-il journaliser pour comprendre une erreur ?",
        ],
      },
      {
        kind: "p",
        text: "Le niveau de contrôle augmente avec le coût potentiel d’une erreur.",
      },
      {
        kind: "p",
        text: "Un processus financier, une communication client ou une donnée sensible ne se traite pas comme une tâche administrative à faible risque.",
      },
    ],
  },
  {
    badge: "Les outils",
    title: "L’outil vient après le workflow",
    description:
      "AI Makers travaille avec des technologies d’automatisation et d’IA telles que n8n, Make, Zapier et Claude lorsque leur usage correspond au projet.",
    blocks: [
      {
        kind: "p",
        text: "Le choix dépend de l’environnement du client : systèmes déjà en place, API disponibles, exigences d’hébergement, contraintes de sécurité, volume, logique du workflow, besoin de revue humaine et capacité de l’équipe à exploiter le système ensuite.",
      },
      {
        kind: "p",
        text: "Un workflow simple peut être mieux servi par une automatisation légère.",
      },
      {
        kind: "p",
        text: "Un processus critique avec plusieurs sources de données, des règles complexes et des exceptions fréquentes demande une architecture différente.",
      },
      {
        kind: "p",
        text: "Le fait qu’un outil puisse techniquement connecter deux applications ne suffit pas à décider qu’il doit porter le processus.",
      },
      { kind: "p", text: "L’architecture est une conséquence de l’audit." },
    ],
  },
  {
    badge: "La continuité",
    title: "Ce que le client doit pouvoir reprendre après le projet",
    description:
      "La continuité exige du code compréhensible, des règles explicites, des accès maîtrisés, des tests rejouables et une responsabilité d’exploitation.",
    blocks: [
      { kind: "p", text: "Le client doit savoir :" },
      {
        kind: "ul",
        items: [
          "quelles données sont utilisées ;",
          "quelles règles ont été implémentées ;",
          "où se trouvent les accès ;",
          "quels tests permettent de vérifier le comportement ;",
          "quelles limites sont connues ;",
          "qui intervient lorsqu’un cas sort du périmètre prévu.",
        ],
      },
      {
        kind: "p",
        text: "La profondeur de la documentation dépend du système et du mode d’engagement.",
      },
      {
        kind: "p",
        text: "L’objectif est toutefois constant : éviter qu’une automatisation utile ne devienne opaque dès que la personne qui l’a construite n’est plus disponible.",
      },
      {
        kind: "p",
        text: "Cette logique permet aussi de choisir plus librement le modèle de collaboration.",
      },
      {
        kind: "p",
        text: "Certaines entreprises souhaitent que l’équipe interne reprenne progressivement les systèmes. D’autres préfèrent conserver un partenaire externe pour l’évolution, l’exploitation ou de nouveaux chantiers.",
      },
      {
        kind: "p",
        text: "Le bon niveau d’ownership est défini avec le client selon ses capacités et ses objectifs.",
      },
      {
        kind: "pLink",
        lead: "Lorsqu’une entreprise commence à exploiter plusieurs systèmes, un ",
        link: { label: "AI Operating System", href: "/ai-operating-system" },
        rest: " peut structurer leur suivi, leurs responsables et leur évolution.",
      },
    ],
  },
  {
    badge: "Démarrer",
    title: "Commencer par le processus qui bloque déjà votre croissance",
    description:
      "Le premier diagnostic doit permettre de répondre à trois questions :",
    blocks: [
      {
        kind: "ol",
        items: [
          "Où le processus perd-il réellement du temps ou de la fiabilité ?",
          "Qu’est-ce qui pourrait bloquer une automatisation ?",
          "Existe-t-il un résultat suffisamment mesurable pour justifier un audit approfondi ?",
        ],
      },
      {
        kind: "p",
        text: "Si le problème reste flou, qu’aucun responsable ne peut arbitrer ou qu’aucune mesure de départ n’est exploitable, le chantier n’est pas prêt pour le build.",
      },
      {
        kind: "p",
        text: "Si ces conditions sont réunies, l’audit transforme le sujet en périmètre priorisé avec risques, dépendances, quick wins, ownership et critères de réussite.",
      },
      { kind: "cta", label: "Réserver un diagnostic", href: "/contact" },
    ],
  },
];

export const automationProcessFaq = {
  title: "Questions fréquentes",
  items: [
    {
      question: "Quels processus faut-il automatiser en priorité ?",
      answer:
        "Le meilleur premier candidat combine un problème observable, une mesure de départ exploitable, un responsable métier identifié et des dépendances suffisamment maîtrisées. Un processus très chronophage peut être repoussé si ses règles changent chaque semaine ou si les données nécessaires restent inaccessibles.",
    },
    {
      question: "Comment mesurez-vous le ROI d’une automatisation ?",
      answer:
        "La métrique est choisie selon le problème : temps de traitement, coût, erreurs, volume absorbé, délai de réponse, conversion ou qualité de service. Une baseline est définie avant le build. Après mise en production, elle permet de décider s’il faut élargir, corriger, maintenir ou arrêter le système.",
    },
    {
      question: "Que contient l’audit d’automatisation ?",
      answer:
        "L’audit relie processus, opportunités, risques, quick wins, roadmap et ownership. Il vérifie aussi les données, accès, règles, exceptions et utilisateurs nécessaires aux tests. Une opportunité prioritaire doit expliquer son impact, ses blocages possibles et la manière dont son résultat sera mesuré.",
    },
    {
      question: "Faut-il automatiser en interne ou faire appel à des experts ?",
      answer:
        "L’interne est cohérent lorsque compétences, temps, ownership et capacité d’intégration existent déjà. Un partenaire externe devient plus pertinent lorsque l’urgence est forte, que plusieurs systèmes doivent être reliés, que les règles sont mal documentées ou que la phase d’apprentissage interne coûterait trop cher. Un modèle hybride reste possible.",
    },
    {
      question: "Quels processus doivent être stabilisés avant automatisation ?",
      answer:
        "Un processus sans responsable clair, avec des règles qui changent constamment, des exceptions mal comprises ou des données impossibles à obtenir doit généralement être stabilisé avant la mise en production. Un prototype peut aider à apprendre, mais le passage en production exige des règles et responsabilités suffisamment claires.",
    },
    {
      question: "Devons-nous remplacer nos outils actuels ?",
      answer:
        "Pas nécessairement. Les outils existants peuvent rester les systèmes de référence pendant qu’une couche d’automatisation orchestre certaines étapes. Un remplacement devient pertinent si un outil bloque les données, impose trop de manipulations ou empêche les contrôles nécessaires au processus.",
    },
    {
      question: "Comment gérez-vous les erreurs et les exceptions ?",
      answer:
        "Le coût potentiel d’une erreur fixe le niveau de contrôle. Selon le cas, le système peut traiter automatiquement, demander une validation, router une exception, journaliser l’action ou permettre de rejouer le traitement après incident. Les cas sensibles conservent davantage de contrôle humain.",
    },
    {
      question: "Que se passe-t-il après l’audit ?",
      answer:
        "Le mode d’exécution dépend du projet. AI Makers peut prendre en charge l’implémentation, construire avec l’équipe interne, organiser un transfert progressif ou poursuivre dans un engagement AI Partner. Le choix intervient lorsque périmètre, dépendances, risques, mesure de succès et responsabilités sont suffisamment clairs.",
    },
    {
      question: "Combien de temps faut-il pour automatiser un processus ?",
      answer:
        "Le délai dépend des accès, intégrations, règles, niveau de risque et disponibilité des utilisateurs pour tester. Le planning est défini après compréhension du périmètre réel afin d’éviter de transformer une estimation commerciale en contrainte technique artificielle.",
    },
  ],
} as const;

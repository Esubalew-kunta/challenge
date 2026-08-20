export type TransformationLink = {
  readonly label: string;
  readonly href: string;
};

export type TransformationBlock =
  | { readonly kind: "p"; readonly text: string }
  | {
      readonly kind: "pLink";
      readonly lead: string;
      readonly link: TransformationLink;
      readonly rest: string;
    }
  | { readonly kind: "ul"; readonly items: readonly string[] }
  | { readonly kind: "ol"; readonly items: readonly string[] }
  | { readonly kind: "cta"; readonly label: string; readonly href: string };

export type TransformationSection = {
  readonly badge: string;
  readonly title: string;
  readonly description?: string;
  readonly blocks: readonly TransformationBlock[];
};

export const aiTransformationMeta = {
  // The FR layout appends " | AI Makers".
  title: "Transformation IA en entreprise",
  description:
    "De l’audit aux systèmes en production : AI Makers structure votre transformation IA, priorise les cas d’usage, déploie et renforce l’autonomie de vos équipes.",
} as const;

export const aiTransformationHero = {
  badge: "Transformation IA en entreprise",
  title: "Transformation IA : de l’audit aux systèmes en production",
  intro: [
    "Une transformation IA organise le passage des usages isolés aux systèmes intégrés dans le travail réel. Elle commence par identifier les processus où l’IA peut produire un résultat mesurable, puis relie mise en production, adoption, gouvernance et montée en capacité des équipes.",
    "AI Makers commence par le travail réel : processus, données, responsables métier, points de friction, exceptions, risques et indicateurs de performance. L’audit dure généralement 1 à 2 semaines. Il doit produire une feuille de route claire et au moins trois cas d’usage viables, chiffrés et priorisés. Si ce résultat n’est pas atteint, l’audit est remboursé.",
    "La suite dépend du contexte : exécution ciblée, ingénieur IA intégré ou programme de transformation plus large. Le but reste le même : créer de la valeur mesurable et réduire progressivement la dépendance à une expertise externe.",
  ],
  primaryCta: { label: "Réserver un diagnostic IA", href: "/contact" },
  secondaryCta: { label: "Voir nos études de cas", href: "/etudes-de-cas" },
} as const;

export const aiTransformationSections: readonly TransformationSection[] = [
  {
    badge: "Déclencheur",
    title: "Quand une entreprise a besoin de structurer sa transformation IA",
    blocks: [
      {
        kind: "p",
        text: "Le sujet devient opérationnel lorsque plusieurs initiatives IA existent sans ordre de priorité, sans propriétaire clair ou sans mesure commune de leur valeur.",
      },
      {
        kind: "p",
        text: "Les signaux sont généralement visibles : pilotes qui restent isolés, tâches manuelles toujours présentes, données dispersées entre plusieurs outils, équipes qui avancent à des vitesses différentes ou direction qui reçoit davantage d’idées qu’elle ne peut en arbitrer.",
      },
      {
        kind: "p",
        text: "À ce stade, l’enjeu est de décider quels processus traiter en premier, quelles dépendances résoudre et quel niveau de contrôle conserver.",
      },
    ],
  },
  {
    badge: "Phase 1",
    title: "AUDIT : transformer les idées en décisions",
    blocks: [
      {
        kind: "p",
        text: "L’audit AI Makers dure généralement 1 à 2 semaines. Il transforme les idées existantes en décisions : quoi construire, quoi repousser et quoi abandonner.",
      },
      {
        kind: "p",
        text: "Le travail commence avec les personnes qui exécutent, supervisent ou dépendent des processus concernés. Nous suivons le travail réel : entrées, décisions, données, validations, exceptions et responsabilité du résultat.",
      },
      {
        kind: "ul",
        items: [
          "le problème observable à résoudre ;",
          "la métrique de départ qui permettra de mesurer l’effet ;",
          "le volume ou la fréquence du processus ;",
          "la stabilité des règles métier ;",
          "la disponibilité et la qualité des données ;",
          "les accès nécessaires aux outils et systèmes de référence ;",
          "le coût potentiel d’une erreur ;",
          "les validations humaines à conserver ;",
          "les dépendances techniques ou organisationnelles ;",
          "le responsable métier capable d’arbitrer.",
        ],
      },
      {
        kind: "p",
        text: "La sortie attendue est opérationnelle : une cartographie des processus, une liste d’opportunités qualifiées, les principaux risques, les gains rapides réellement défendables, une feuille de route priorisée et un propriétaire identifié pour chaque chantier retenu.",
      },
      {
        kind: "p",
        text: "L’audit doit faire émerger au minimum trois cas d’usage viables, chiffrés et priorisés. S’il n’aboutit pas à une feuille de route claire et à ces trois cas d’usage, il est remboursé.",
      },
    ],
  },
  {
    badge: "Priorisation",
    title: "Comment nous décidons ce qui mérite d’être construit",
    blocks: [
      {
        kind: "p",
        text: "La valeur théorique d’un cas d’usage ne suffit pas. Une opportunité attractive peut être une mauvaise première priorité si le processus change chaque semaine, si personne ne peut arbitrer les exceptions ou si la donnée nécessaire n’est pas accessible.",
      },
      {
        kind: "p",
        text: "Un problème doit être mesurable. Avant le build, il faut pouvoir décrire la situation de départ. Selon le processus, la bonne mesure peut être le temps passé, le volume traité, le délai de réponse, le taux de reprise, les erreurs, le coût opérationnel, le nombre de dossiers en attente ou un indicateur commercial.",
      },
      {
        kind: "p",
        text: "Le processus doit être suffisamment stable. Automatiser un processus mal défini fige souvent ses défauts. Si les règles métier sont encore en discussion, la priorité peut être de stabiliser le fonctionnement avant de construire.",
      },
      {
        kind: "p",
        text: "Les données et les accès doivent être vérifiés tôt. Un ROI apparent peut disparaître si l’information utile est inaccessible, peu fiable ou soumise à des contraintes qui rendent l’architecture disproportionnée.",
      },
      {
        kind: "p",
        text: "Un responsable métier doit exister. Sans personne capable de décider ce qui est acceptable, de traiter les exceptions et de suivre le résultat, le projet reste sans propriétaire.",
      },
      {
        kind: "p",
        text: "Le coût d’une erreur détermine le niveau d’autonomie. Un processus interne à faible risque peut automatiser beaucoup d’étapes. Un processus qui touche un client, une décision financière, une donnée sensible ou un engagement contractuel demande souvent des contrôles humains plus stricts.",
      },
      {
        kind: "p",
        text: "Cette logique permet de construire un portefeuille où chaque chantier a une raison économique, un propriétaire et une condition de succès.",
      },
    ],
  },
  {
    badge: "Phase 2",
    title: "BUILD : mettre les systèmes dans le travail réel",
    blocks: [
      {
        kind: "p",
        text: "Une transformation commence à créer de la valeur quand les systèmes entrent dans les processus utilisés chaque jour.",
      },
      {
        kind: "p",
        text: "Le build part du périmètre défini pendant l’audit. Les dépendances sont traitées avant de figer l’architecture. Les connexions aux outils, les droits d’accès, les systèmes de référence, les règles d’escalade et les cas d’exception sont testés avec les personnes qui utiliseront réellement le système.",
      },
      {
        kind: "p",
        text: "Chaque mise en production doit conserver une mesure de départ et une définition claire du résultat attendu. Le but est de pouvoir comparer l’avant et l’après, puis décider de maintenir, corriger, étendre ou arrêter le système.",
      },
      {
        kind: "pLink",
        lead: "Selon le cas, AI Makers peut construire des automatisations, des assistants métier, des workflows augmentés, des agents ou des composants d’un ",
        link: { label: "AI Operating System", href: "/ai-operating-system" },
        rest: ".",
      },
      {
        kind: "pLink",
        lead: "Lorsque le besoin porte principalement sur l’automatisation d’un processus précis, le travail peut aussi s’appuyer sur notre approche d’",
        link: {
          label: "automatisation des processus métier",
          href: "/automatisation-ia-workflow",
        },
        rest: ".",
      },
      {
        kind: "p",
        text: "Le choix des outils vient après le processus. L’architecture dépend de l’environnement du client, des systèmes déjà en place, du niveau de contrôle attendu, de la sensibilité des données et de la capacité future de l’équipe à exploiter ce qui est construit.",
      },
    ],
  },
  {
    badge: "Adoption",
    title: "L’adoption fait partie de la transformation",
    blocks: [
      {
        kind: "p",
        text: "Un système en production ne change les habitudes que si les équipes savent quand l’utiliser, ce qu’il fait, ce qu’il ne fait pas et comment réagir lorsqu’un cas sort du fonctionnement normal.",
      },
      {
        kind: "p",
        text: "L’accompagnement s’adapte au niveau de préparation de l’équipe. Certaines organisations reprennent rapidement les systèmes ; d’autres ont besoin d’un travail plus progressif sur les usages, la documentation et la montée en compétence.",
      },
      {
        kind: "p",
        text: "AI Makers ne fixe pas une cadence universelle de formation pour tous les projets. Le rythme dépend du nombre d’équipes concernées, de leur maturité, de la complexité des systèmes et du rôle que l’entreprise veut assumer après le déploiement.",
      },
      {
        kind: "pLink",
        lead: "Quand une montée en compétence structurée est nécessaire, elle peut prendre la forme d’un parcours dédié ou d’un programme AI Champions. Le sujet formation reste distinct du build technique. Les programmes disponibles sont présentés sur notre page ",
        link: { label: "Formation IA en entreprise", href: "/formation-ia-entreprise" },
        rest: ".",
      },
    ],
  },
  {
    badge: "Gouvernance",
    title: "Décider où l’humain reste indispensable",
    blocks: [
      {
        kind: "p",
        text: "Les choix de gouvernance commencent dès la conception du système.",
      },
      {
        kind: "p",
        text: "Pour chaque processus, il faut savoir quelles données sont accessibles, qui peut déclencher une action, quelles décisions demandent une validation, comment une erreur est détectée, comment un traitement peut être rejoué et qui intervient lorsqu’un incident survient.",
      },
      {
        kind: "p",
        text: "Un système exploitable doit rendre visibles ses limites. Il doit être possible de savoir quelles règles sont automatisées, quelles situations sont renvoyées vers un humain et où se trouve la responsabilité finale.",
      },
      {
        kind: "p",
        text: "Le niveau de contrôle dépend du contexte : préparer un brouillon interne n’expose pas l’entreprise comme modifier une donnée client ou agir dans un logiciel métier critique.",
      },
      {
        kind: "pLink",
        lead: "La gouvernance couvre aussi les accès, la documentation, les journaux utiles, la gestion des changements et les responsabilités d’exploitation. Pour les organisations qui doivent formaliser davantage ces sujets, notre approche est détaillée sur ",
        link: { label: "Gouvernance & sécurité IA", href: "/gouvernance-ia" },
        rest: ".",
      },
    ],
  },
  {
    badge: "Phase 3",
    title: "SCALE : passer de l’aide externe à la capacité interne",
    blocks: [
      {
        kind: "p",
        text: "Le passage à l’échelle mesure aussi la capacité de l’entreprise à exploiter elle-même les systèmes déjà construits.",
      },
      {
        kind: "p",
        text: "Cette autonomie se constate dans des comportements concrets.",
      },
      {
        kind: "p",
        text: "L’équipe sait qui possède chaque système. Elle comprend les données utilisées, les principales règles, les cas d’exception et les limites. Elle sait identifier un incident, lancer les vérifications prévues et demander une modification avec suffisamment de contexte. Les personnes responsables peuvent décider qu’un système doit être étendu, corrigé ou arrêté. De nouveaux collaborateurs peuvent être intégrés sans repartir de zéro.",
      },
      {
        kind: "p",
        text: "L’autonomie recherchée est définie avec le client selon ses capacités internes et les systèmes concernés. Certains périmètres peuvent être repris entièrement par l’équipe ; d’autres nécessitent encore un support ou une expertise spécialisée.",
      },
      {
        kind: "p",
        text: "Le niveau atteint et le temps nécessaire dépendent de la maturité de l’équipe, de la complexité et de la gouvernance interne.",
      },
      {
        kind: "p",
        text: "La transformation IA est un processus de montée en capacité. Le rôle d’AI Makers est de rendre l’organisation progressivement plus capable : comprendre ses opportunités, exploiter ses systèmes, mesurer leur valeur et faire évoluer son propre portefeuille IA.",
      },
    ],
  },
  {
    badge: "Durée",
    title: "Combien de temps dure une transformation IA ?",
    blocks: [
      {
        kind: "p",
        text: "La seule durée standardisée ici est celle de l’audit initial : généralement 1 à 2 semaines. La phase suivante dépend du nombre de processus retenus, des accès, de la complexité technique, des contraintes de sécurité et de la disponibilité des équipes métier.",
      },
      {
        kind: "pLink",
        lead: "Un client peut s’arrêter après l’audit et exécuter la feuille de route en interne. Il peut confier à AI Makers un nombre limité de systèmes. Il peut intégrer un ",
        link: { label: "Forward Deployed Engineer", href: "/forward-deployed-engineer" },
        rest: " dans son équipe pour accélérer l’exécution. Il peut aussi choisir un accompagnement plus large où AI Makers intervient comme partenaire ou département IA externalisé.",
      },
      {
        kind: "p",
        text: "Le modèle d’engagement est défini selon le problème à résoudre et la capacité interne.",
      },
    ],
  },
  {
    badge: "Transfert",
    title: "Ce que vous devez pouvoir reprendre après le projet",
    blocks: [
      {
        kind: "p",
        text: "La propriété d’un système n’a de valeur que si l’organisation peut réellement le comprendre et l’exploiter.",
      },
      {
        kind: "p",
        text: "À la fin d’un chantier, le client doit pouvoir identifier les composants utilisés, les accès nécessaires, les règles métier essentielles, les dépendances, les tests de référence, les points de contrôle et les personnes responsables. Le niveau de documentation dépend du système, mais il doit être suffisant pour éviter qu’un fonctionnement critique repose uniquement sur la mémoire de la personne qui l’a construit.",
      },
      {
        kind: "p",
        text: "Une architecture sophistiquée que personne côté client ne peut comprendre ou maintenir crée de la fragilité. L’objectif est de transférer une capacité, pas seulement un livrable.",
      },
    ],
  },
  {
    badge: "Preuve",
    title: "Comment nous évaluons la preuve",
    blocks: [
      {
        kind: "p",
        text: "Un cas client est utile lorsqu’il permet de relier quatre éléments :",
      },
      {
        kind: "ul",
        items: [
          "le processus ou problème de départ ;",
          "ce qui a réellement été construit ou modifié ;",
          "la métrique utilisée pour suivre le résultat ;",
          "les conditions qui ont permis ou limité ce résultat.",
        ],
      },
      {
        kind: "pLink",
        lead: "Nous évitons d’utiliser un logo comme preuve d’un résultat qu’il ne documente pas. Lorsque la mission peut être rendue publique, nos ",
        link: { label: "études de cas", href: "/etudes-de-cas" },
        rest: " détaillent le contexte et le travail réalisé.",
      },
      {
        kind: "p",
        text: "Lorsqu’un résultat chiffré n’est pas publiable ou suffisamment documenté, il ne doit pas être transformé en promesse générale.",
      },
    ],
  },
  {
    badge: "Principe",
    title: "Process first. Solution second.",
    blocks: [
      {
        kind: "p",
        text: "Nous partons du processus, de la décision métier, des données, des risques et du résultat mesurable. L’agent, l’automatisation ou le logiciel vient ensuite.",
      },
      {
        kind: "p",
        text: "Cette discipline permet parfois de conclure qu’un projet IA n’est pas encore prêt. C’est une bonne décision si elle évite de construire un système sans propriétaire, sans donnée fiable ou sans valeur mesurable.",
      },
      {
        kind: "p",
        text: "Lorsque le chantier est prêt, la même logique donne une trajectoire claire : AUDIT pour décider, BUILD pour mettre en production, SCALE pour transférer la capacité et développer l’autonomie.",
      },
    ],
  },
  {
    badge: "Prochaine étape",
    title: "Commencer par le diagnostic",
    blocks: [
      {
        kind: "p",
        text: "Un premier échange doit permettre de répondre à trois questions :",
      },
      {
        kind: "ol",
        items: [
          "Où l’entreprise perd-elle aujourd’hui du temps, de la fiabilité ou de la capacité de croissance ?",
          "Quelles contraintes pourraient empêcher une transformation utile : données, règles instables, accès, gouvernance, adoption ou absence de responsable ?",
          "Le problème est-il suffisamment concret pour justifier un audit approfondi ?",
        ],
      },
      {
        kind: "p",
        text: "Si le sujet reste trop vague, si personne ne peut arbitrer ou si aucune mesure de départ n’est exploitable, il est souvent trop tôt pour lancer le build.",
      },
      {
        kind: "p",
        text: "Si les conditions sont réunies, l’audit de 1 à 2 semaines permet de transformer le sujet en feuille de route, avec au moins trois cas d’usage viables, chiffrés et priorisés, leurs risques, leurs dépendances, leurs propriétaires et leurs critères de succès.",
      },
      { kind: "cta", label: "Réserver un diagnostic IA", href: "/contact" },
    ],
  },
] as const;

export const aiTransformationFaq = {
  title: "FAQ : Transformation IA en entreprise",
  items: [
    {
      question: "Qu’est-ce qu’une transformation IA en entreprise ?",
      answer:
        "C’est le passage d’usages isolés de l’IA à des systèmes intégrés dans le fonctionnement réel de l’entreprise, avec des priorités, des propriétaires, des métriques, des contrôles et une capacité interne pour les exploiter.",
    },
    {
      question: "Combien de temps dure l’audit ?",
      answer:
        "L’audit initial dure généralement 1 à 2 semaines. Il sert à cartographier les processus, qualifier les opportunités, identifier les risques et produire une feuille de route priorisée.",
    },
    {
      question: "Que garantit l’audit AI Makers ?",
      answer:
        "L’audit doit produire une feuille de route claire et au moins trois cas d’usage viables, chiffrés et priorisés. Si ce résultat n’est pas atteint, l’audit est remboursé.",
    },
    {
      question: "Combien de temps dure ensuite la transformation ?",
      answer:
        "Cela dépend du projet. Le nombre de systèmes, les accès, les dépendances, les exigences de sécurité, la maturité de l’équipe et le niveau d’autonomie recherché influencent directement la durée.",
    },
    {
      question: "AI Makers construit-il les systèmes ou conseille seulement ?",
      answer:
        "Les deux modèles sont possibles. AI Makers peut auditer et laisser le client exécuter, prendre en charge l’implémentation, construire avec l’équipe interne, intégrer un ingénieur IA référent ou accompagner la transformation plus largement.",
    },
    {
      question: "La formation est-elle incluse ?",
      answer:
        "La montée en compétence est définie selon les besoins du projet. Certains clients ont besoin d’un transfert ciblé, d’autres d’un programme plus structuré comme AI Champions ou d’une formation dédiée.",
    },
    {
      question: "Est-ce que les équipes deviennent autonomes ?",
      answer:
        "L’autonomie visée est définie selon la maturité, les systèmes concernés et les capacités internes. Certains périmètres peuvent être repris entièrement par l’équipe ; d’autres continuent de nécessiter un support ou une expertise spécialisée.",
    },
    {
      question: "Quels outils utilisez-vous ?",
      answer:
        "Le choix dépend du processus, des systèmes déjà en place, des données, des contraintes de sécurité et du niveau de contrôle attendu. La technologie est choisie après le diagnostic.",
    },
    {
      question: "Par où commencer ?",
      answer:
        "Par un diagnostic permettant de qualifier le problème. S’il existe un enjeu mesurable, un responsable capable d’arbitrer et des conditions réalistes d’exécution, l’étape suivante est l’audit de 1 à 2 semaines.",
    },
  ],
} as const;

export const aiTransformationSchema = {
  breadcrumbHome: "Accueil",
  breadcrumbCurrent: "Transformation IA",
  serviceName: "Transformation IA en entreprise",
  serviceType: "Transformation IA et mise en production de systèmes IA",
  serviceDescription: aiTransformationMeta.description,
  areaServed: ["France", "Europe", "Maroc"],
} as const;

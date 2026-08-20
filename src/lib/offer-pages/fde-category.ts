import type { Locale } from "@/lib/i18n";

const fr = {
  path: "/forward-deployed-engineer",
  badge: "Rôle et modèle de déploiement",
  h1: "Forward Deployed Engineer : l’ingénieur IA au plus près du métier",
  opening: "Un Forward Deployed Engineer (FDE) est un ingénieur qui travaille au contact direct des équipes métier pour transformer un problème opérationnel en système utilisable en production. Il ne se contente pas de conseiller : il comprend le workflow, connecte les données et les outils, construit, teste avec les utilisateurs puis mesure l’impact.",
  diagnostic: "Réserver un diagnostic",
  hire: "Recruter ou déployer un FDE",
  operating: {
    title: "Comment fonctionne le modèle embedded",
    intro: "Le FDE travaille dans la boucle de livraison de l’entreprise. Il échange avec les personnes qui exécutent le processus, les responsables des données et la DSI. Cette proximité raccourcit les allers-retours entre un besoin décrit, le comportement réel du système et les exceptions découvertes pendant les tests.",
    detail: "Il ne remplace pas le responsable métier, qui décide du résultat attendu, ni la DSI, qui conserve ses règles d’architecture et d’accès. Il relie ces acteurs : une décision métier devient une règle testable, une contrainte technique devient un arbitrage compréhensible, et chaque retour utilisateur revient dans la construction.",
  },
  workflow: {
    title: "Du workflow au système en production",
    intro: "Le travail avance par décisions vérifiables. Chaque étape produit quelque chose que l’équipe peut relire, tester ou exploiter.",
    items: [
      ["Comprendre le processus", "Suivre le travail avec les personnes qui le réalisent, relever les entrées, les décisions, les exceptions et les reprises manuelles."],
      ["Cartographier données et outils", "Identifier les sources utiles, leur qualité, les droits d’accès, les API, les exports et les systèmes qui resteront maîtres de la donnée."],
      ["Définir un périmètre testable", "Choisir une partie du workflow, les utilisateurs concernés et les critères qui diront si le système aide réellement."],
      ["Construire et intégrer", "Assembler les composants IA et logiciels dans l’environnement prévu, avec les contrôles nécessaires autour des données et des sorties."],
      ["Tester les cas réels", "Faire essayer le système aux utilisateurs, documenter les erreurs et les exceptions, puis corriger avant d’élargir l’usage."],
      ["Mettre en production et mesurer", "Organiser le déploiement, le suivi, les responsabilités d’exploitation et la mesure convenue au début du chantier."],
    ],
  },
  roles: {
    title: "FDE, consultant, ingénieur et prestataire : qui porte quoi ?",
    headers: ["Rôle", "Point de départ", "Responsabilité principale", "Limite habituelle"],
    rows: [
      ["Consultant", "Un problème à cadrer", "Analyse, recommandations et trajectoire", "Ne construit pas nécessairement le système"],
      ["AI engineer", "Un besoin technique défini", "Composants IA, évaluation et mise en production", "Peut rester éloigné du workflow métier"],
      ["Software engineer", "Un périmètre produit", "Logiciel fiable et maintenable", "Ne porte pas toujours la découverte du problème"],
      ["Freelance", "Une mission et des livrables", "Exécution autonome de son périmètre", "Encadrement et continuité dépendent du contrat"],
      ["ESN / projet traditionnel", "Un cahier des charges et une équipe", "Capacité de réalisation et gouvernance de projet", "Les retours terrain passent souvent par plusieurs intermédiaires"],
      ["Forward Deployed Engineer", "Un problème opérationnel à transformer", "Boucle complète entre métier, intégration, construction, tests et usage", "Nécessite des utilisateurs disponibles et des accès organisés"],
    ],
  },
  fit: {
    title: "Quand un FDE est utile, et quand il ne l’est pas",
    goodTitle: "Le modèle est adapté si…",
    good: [
      "le cas d’usage dépend d’un processus avec des exceptions que seul le terrain connaît ;",
      "la solution doit relier plusieurs outils, sources de données ou règles métier ;",
      "des utilisateurs peuvent tester régulièrement ce qui est construit ;",
      "un responsable métier peut arbitrer le périmètre et le résultat attendu ;",
      "l’entreprise veut apprendre du premier système avant d’étendre le modèle.",
    ],
    badTitle: "Un autre modèle est préférable si…",
    bad: [
      "le besoin est un logiciel standard déjà couvert par une solution du marché ;",
      "personne ne peut donner accès aux données, aux outils ou aux utilisateurs ;",
      "le projet est limité à une étude, sans intention de construire ni d’exploiter ;",
      "le périmètre est déjà stable et une équipe interne possède toute la capacité nécessaire.",
    ],
  },
  skills: {
    title: "Les compétences qui définissent le rôle",
    intro: "Le rôle demande une combinaison. Une faiblesse sur l’un de ces axes casse la boucle de livraison, même si les autres sont solides.",
    items: [
      ["Ingénierie logicielle", "Écrire, relire, tester, déployer et maintenir du code qui rejoint un environnement existant."],
      ["Données et intégration", "Comprendre SQL, API, pipelines, formats d’échange, permissions et qualité des données."],
      ["IA appliquée", "Choisir une approche, construire les évaluations, traiter les erreurs et suivre coût et comportement."],
      ["Analyse de processus", "Distinguer la procédure théorique du travail réel, puis choisir où une intervention est utile."],
      ["Communication et arbitrage", "Faire préciser une règle, exposer une contrainte, écrire une décision et obtenir un retour exploitable."],
      ["Conduite de production", "Définir qui surveille, qui intervient, comment une anomalie remonte et ce qui doit être documenté."],
    ],
  },
  proof: {
    title: "Une pratique adossée à des systèmes déjà livrés",
    body: "AI Makers s’appuie sur l’expérience de plus de 200 systèmes déployés à l’échelle du cabinet, tous modes d’accompagnement confondus. Ce chiffre décrit l’expérience globale de l’entreprise, pas 200 missions FDE. Pour un FDE, ce retour d’expérience sert surtout à reconnaître les problèmes récurrents : accès incomplets, données qui changent de format, exceptions absentes du cahier des charges, évaluation trop tardive ou responsabilité d’exploitation non définie.",
    caveat: "Elle ne dispense jamais d’étudier le contexte du client. Elle fournit des points de contrôle et des playbooks que l’ingénieur adapte au processus, aux outils et aux règles de l’entreprise.",
    linkLabel: "Voir les études de cas publiées",
    linkHref: "/etudes-de-cas",
  },
  bridge: {
    title: "Comprendre le rôle ou choisir un mode de déploiement",
    body: "Cette page définit le métier et son modèle de travail. Pour comparer un recrutement interne avec le déploiement d’un ingénieur AI Makers, consultez la page commerciale dédiée.",
  },
  related: [
    ["Recruter ou déployer un FDE", "/metiers/ingenieur-ia", "Comparer les deux modes et préparer un engagement."],
    ["Transformation IA", "/ai-transformation", "Prioriser les processus et organiser la trajectoire."],
    ["AI Operating System", "/ai-operating-system", "Piloter les systèmes, les responsabilités et leur évolution."],
    ["Équipe", "/equipe", "Découvrir les profils qui construisent les systèmes AI Makers."],
  ],
  faq: [
    { question: "Quelle est la mission principale d’un FDE ?", answer: "Transformer un problème opérationnel en système utilisé en production. Le FDE relie le cadrage métier, la construction technique, les tests utilisateurs, l’intégration dans les outils et la mesure du résultat." },
    { question: "Un FDE remplace-t-il un consultant ?", answer: "Pas exactement. Un consultant peut cadrer et recommander. Le FDE intervient lorsque l’entreprise a aussi besoin de construire, intégrer, tester et suivre la solution avec les équipes qui l’utiliseront." },
    { question: "Quelle différence entre FDE et AI engineer ?", answer: "Les deux peuvent construire des systèmes IA. Le FDE se distingue par sa présence dans la boucle métier et sa responsabilité sur le chemin complet, du workflow à l’usage en production. Un AI engineer peut intervenir sur un périmètre technique déjà défini." },
    { question: "Quelle différence entre un FDE et un freelance ou une ESN ?", answer: "Le statut ne suffit pas à définir la différence. Le modèle FDE organise une responsabilité continue entre compréhension du processus, construction et retours utilisateurs. Un freelance ou une ESN peuvent aussi travailler ainsi, mais leur mission est souvent structurée autour d’un périmètre ou d’un cahier des charges déjà fixé." },
    { question: "Avec qui le FDE travaille-t-il ?", answer: "Avec le responsable du processus, les utilisateurs, les propriétaires des données et la DSI. Le métier arbitre le résultat et les règles ; la DSI encadre l’architecture et les accès ; le FDE transforme ces décisions en système testable." },
    { question: "Quels livrables permettent de reprendre le système ?", answer: "Ils dépendent du périmètre, mais doivent couvrir le fonctionnement, les accès, les décisions, les tests, les procédures d’exploitation et les limites connues. La responsabilité de mise à jour doit être décidée avant le passage en production." },
  ],
} as const;

type DeepWiden<T> = T extends string ? string : T extends readonly (infer U)[] ? readonly DeepWiden<U>[] : T extends object ? { readonly [K in keyof T]: DeepWiden<T[K]> } : T;
export type FdeCategoryContent = DeepWiden<typeof fr>;

// English mirrors the approved French information architecture; it does not
// introduce a separate route or search strategy.
const en: FdeCategoryContent = {
  path: "/en/forward-deployed-engineer", badge: "Role and delivery model", h1: "Forward Deployed Engineer: the engineer closest to the business",
  opening: "A Forward Deployed Engineer (FDE) works directly with business teams to turn an operational problem into a system that can be used in production. The role goes beyond advisory work: the FDE maps the workflow, connects data and tools, builds, tests with users and measures the result.",
  diagnostic: "Book a diagnostic", hire: "",
  operating: { title: "How the embedded model works", intro: "The FDE works inside the company’s delivery loop, with the people who run the process, data owners and IT. This proximity shortens the distance between a stated need, the system’s actual behaviour and the exceptions found during testing.", detail: "The FDE does not replace the business owner, who decides the expected result, or IT, which retains its architecture and access rules. The role connects them: a business decision becomes a testable rule, a technical constraint becomes a clear trade-off, and user feedback returns directly to the build." },
  workflow: { title: "From workflow to a production system", intro: "The work progresses through verifiable decisions. Each step produces something the team can review, test or operate.", items: [["Understand the process", "Follow the work with the people who perform it and identify inputs, decisions, exceptions and manual rework."], ["Map data and tools", "Identify useful sources, quality, access rights, APIs, exports and the systems that remain authoritative."], ["Define a testable scope", "Choose one part of the workflow, its users and the criteria that show whether the system helps."], ["Build and integrate", "Assemble AI and software components in the intended environment, with the necessary controls around data and outputs."], ["Test real cases", "Let users try the system, document errors and exceptions, and correct them before expanding usage."], ["Move to production and measure", "Organise deployment, monitoring, operating responsibilities and the measurement agreed at the start."]] },
  roles: { title: "FDE, consultant, engineer and delivery partner: who owns what?", headers: ["Role", "Starting point", "Main responsibility", "Typical boundary"], rows: [["Consultant", "A problem to frame", "Analysis, recommendations and direction", "Does not necessarily build the system"], ["AI engineer", "A defined technical need", "AI components, evaluation and production", "May be removed from the business workflow"], ["Software engineer", "A product scope", "Reliable, maintainable software", "Does not always own problem discovery"], ["Freelancer", "An engagement and deliverables", "Independent execution of a scope", "Supervision and continuity depend on the contract"], ["IT services / traditional project", "A specification and a team", "Delivery capacity and project governance", "Field feedback often crosses several intermediaries"], ["Forward Deployed Engineer", "An operational problem to transform", "The full loop across business, integration, build, tests and usage", "Requires available users and organised access"]] },
  fit: { title: "When an FDE is useful, and when it is not", goodTitle: "The model fits when…", good: ["the use case depends on exceptions only frontline users know;", "the solution must connect several tools, data sources or business rules;", "users can test the work regularly;", "a business owner can decide scope and expected results;", "the company wants to learn from one system before expanding."], badTitle: "Another model is better when…", bad: ["a standard product already covers the need;", "nobody can provide access to data, tools or users;", "the project is limited to a study, with no intent to build or operate;", "the scope is stable and an internal team already has the required capacity."] },
  skills: { title: "The skills that define the role", intro: "The role requires a combination. A gap in any one area breaks the delivery loop, even when the others are strong.", items: [["Software engineering", "Write, review, test, deploy and maintain code inside an existing environment."], ["Data and integration", "Work with SQL, APIs, pipelines, exchange formats, permissions and data quality."], ["Applied AI", "Choose an approach, build evaluations, handle errors and monitor cost and behaviour."], ["Process analysis", "Separate the documented procedure from actual work and choose where intervention is useful."], ["Communication and trade-offs", "Clarify a rule, explain a constraint, record a decision and obtain actionable feedback."], ["Production operations", "Define monitoring, incident ownership, escalation and required documentation."]] },
  proof: { title: "A practice backed by systems already delivered", body: "AI Makers draws on company-wide experience from more than 200 systems deployed across all engagement models. This figure describes the firm’s overall delivery experience, not 200 FDE engagements. For an FDE, it helps identify recurring problems: incomplete access, changing data formats, missing exceptions, late evaluation and undefined operating ownership.", caveat: "It never replaces studying the client’s context. It provides checkpoints and playbooks that the engineer adapts to the company’s process, tools and rules.", linkLabel: "", linkHref: "" },
  bridge: { title: "Understand the role before choosing a delivery model", body: "This page defines the role and how it works. A diagnostic starts with the workflow, its users, data and operating constraints before deciding whether an embedded engineer is appropriate." },
  related: [["AI transformation", "/en/ai-transformation", "Prioritise processes and organise the roadmap."], ["AI Operating System", "/en/ai-operating-system", "Manage systems, responsibilities and evolution."], ["Team", "/en/team", "Meet the people who build AI Makers systems."]],
  faq: [{ question: "What is an FDE’s main responsibility?", answer: "To turn an operational problem into a system used in production, connecting business framing, technical delivery, user testing, tool integration and measurement." }, { question: "Does an FDE replace a consultant?", answer: "Not exactly. A consultant may frame and recommend. An FDE is appropriate when the company also needs someone to build, integrate, test and monitor the solution with its users." }, { question: "How is an FDE different from an AI engineer?", answer: "Both can build AI systems. The FDE is distinguished by direct participation in the business loop and ownership of the full path from workflow to production use." }, { question: "How is an FDE different from a freelancer or IT services firm?", answer: "Status alone does not define the difference. The FDE model organises continuous responsibility across process discovery, delivery and user feedback. Other providers can work this way, but are often engaged against a scope defined in advance." }, { question: "Who works with the FDE?", answer: "The process owner, users, data owners and IT. The business decides outcomes and rules, IT governs architecture and access, and the FDE turns those decisions into a testable system." }, { question: "What documentation supports handover?", answer: "It depends on scope, but should cover operation, access, decisions, tests, operating procedures and known limits. Ownership for updates should be agreed before production." }],
};

export const FDE_CATEGORY: Record<Locale, FdeCategoryContent> = { fr, en };

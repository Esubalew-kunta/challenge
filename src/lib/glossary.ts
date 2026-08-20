/**
 * Contenu du glossaire /glossaire-ia.
 *
 * Extrait de la page, qui portait ses 31 définitions en dur. Le texte est
 * repris À L'IDENTIQUE.
 */

export type GlossaryTerm = {
  readonly term: string;
  readonly definition: string;
};

export type GlossaryCategory = {
  readonly id: string;
  readonly title: string;
  readonly terms: readonly GlossaryTerm[];
};

export const glossaryMeta = {
  title: "Glossaire IA : les termes qui comptent",
  description:
    "30 définitions claires, sans jargon, des termes de l\'IA en entreprise : LLM, agent IA, RAG, audit IA, GEO, AI Act, prompt engineering. Par AI Makers.",
} as const;

export const glossaryCategories: readonly GlossaryCategory[] = [
  {
    id: "fondamentaux",
    title: "Fondamentaux",
    terms: [
      {
        term: "Intelligence artificielle générative",
        definition:
          "L'intelligence artificielle générative désigne les systèmes capables de produire du contenu nouveau (texte, image, code, audio) à partir d'une consigne en langage naturel. Contrairement à l'IA prédictive, qui classe ou anticipe, l'IA générative crée. C'est la technologie derrière ChatGPT, Claude et Gemini, et le socle de la plupart des cas d'usage IA en entreprise depuis 2023.",
      },
      {
        term: "LLM (grand modèle de langage)",
        definition:
          "Un LLM (Large Language Model) est un modèle d'intelligence artificielle entraîné sur d'immenses volumes de texte pour comprendre et générer du langage naturel. Il prédit la suite la plus probable d'un texte, ce qui lui permet de rédiger, résumer, traduire, analyser ou coder. GPT, Claude et Gemini sont des LLM. C'est la brique de base des applications d'IA générative.",
      },
      {
        term: "Agent IA",
        definition:
          "Un agent IA est un système qui utilise un modèle de langage pour accomplir une tâche de bout en bout, de façon autonome. Contrairement à un chatbot qui se contente de répondre, l'agent planifie, utilise des outils (recherche, bases de données, APIs), exécute des actions et vérifie ses résultats. En entreprise, un agent IA peut traiter des demandes clients, qualifier des leads ou produire des rapports sans intervention humaine.",
      },
      {
        term: "Forward Deployed Engineer (FDE)",
        definition:
          "Un Forward Deployed Engineer (FDE) est un ingénieur IA déployé directement dans l'équipe du client. Il comprend le problème depuis l'intérieur, là où le travail se fait, écrit du code de production, connecte l'IA aux systèmes existants et reste jusqu'à ce que ça tourne. Le modèle a été inventé par Palantir, puis adopté par OpenAI et Anthropic. AI Makers en fait le cœur de son offre pour les PME et ETI françaises.",
      },
      {
        term: "Prompt",
        definition:
          "Un prompt est l'instruction envoyée à un modèle d'IA pour obtenir une réponse. Il peut contenir une consigne, du contexte, des exemples et un format de sortie attendu. La qualité du prompt détermine directement la qualité du résultat : un même modèle peut produire un texte médiocre ou excellent selon la précision de l'instruction qu'il reçoit.",
      },
      {
        term: "Prompt engineering",
        definition:
          "Le prompt engineering est la discipline qui consiste à concevoir et optimiser les instructions données aux modèles d'IA pour obtenir des résultats fiables et reproductibles. Elle mobilise des techniques précises : rôle assigné au modèle, exemples fournis, décomposition en étapes, contraintes de format. En entreprise, des prompts standardisés et testés transforment un usage individuel de l'IA en processus reproductible.",
      },
      {
        term: "Hallucination",
        definition:
          "Une hallucination est une réponse fausse mais formulée avec assurance par un modèle d'IA : fait inventé, source inexistante, chiffre erroné. Elle survient parce que le modèle prédit du texte plausible sans vérifier sa véracité. En entreprise, on la limite en connectant le modèle à des sources vérifiées (RAG), en exigeant des citations et en gardant une validation humaine sur les contenus critiques.",
      },
      {
        term: "Token",
        definition:
          "Le token est l'unité de texte élémentaire traitée par un modèle de langage : un mot court, un fragment de mot ou un signe de ponctuation. En français, un token représente environ trois quarts d'un mot. Les tokens déterminent deux choses concrètes : le coût d'utilisation d'un modèle, facturé au volume de tokens, et la quantité de texte qu'il peut traiter en une fois.",
      },
      {
        term: "Fenêtre de contexte",
        definition:
          "La fenêtre de contexte est la quantité maximale de texte qu'un modèle d'IA peut prendre en compte dans un même échange, mesurée en tokens. Elle englobe la question posée, les documents fournis et la réponse générée. Une grande fenêtre de contexte permet d'analyser des contrats entiers, des rapports ou des historiques de conversation sans découpage préalable.",
      },
    ],
  },
  {
    id: "technique",
    title: "Technique",
    terms: [
      {
        term: "RAG",
        definition:
          "Le RAG (Retrieval-Augmented Generation) est une architecture qui connecte un modèle de langage aux données internes d'une entreprise. Avant de répondre, le système recherche les passages pertinents dans les documents de référence, puis génère une réponse fondée sur ces sources. C'est la méthode standard pour obtenir des réponses fiables sur des connaissances métier, sans réentraîner le modèle.",
      },
      {
        term: "Fine-tuning",
        definition:
          "Le fine-tuning consiste à réentraîner partiellement un modèle d'IA existant sur des données spécifiques pour spécialiser son comportement : ton d'écriture, format de sortie, vocabulaire métier. Plus lourd et plus coûteux que le RAG ou le prompt engineering, il se justifie quand l'entreprise a besoin d'un comportement très constant sur un grand volume de tâches identiques.",
      },
      {
        term: "Automatisation de processus (IPA)",
        definition:
          "L'automatisation intelligente de processus (IPA, Intelligent Process Automation) combine l'automatisation classique des tâches répétitives avec les capacités de compréhension de l'IA. Là où un script suit des règles fixes, l'IPA traite aussi les cas ambigus : lire un email, extraire les informations d'une facture, router une demande. C'est le levier principal des gains de productivité IA en entreprise.",
      },
      {
        term: "Workflow",
        definition:
          "Un workflow est l'enchaînement structuré des étapes d'un processus métier : déclencheur, traitements, validations, résultat. Cartographier ses workflows est le préalable de toute automatisation : on ne peut automatiser que ce qui est explicite. Dans les outils comme n8n, le mot désigne aussi l'automatisation elle-même : la séquence d'actions exécutée par le système.",
      },
      {
        term: "n8n",
        definition:
          "n8n est une plateforme d'automatisation de workflows qui connecte entre eux les outils d'une entreprise (CRM, email, bases de données, modèles d'IA) sans développement lourd. Chaque workflow y est construit visuellement, nœud par nœud. Sa flexibilité et son intégration native des modèles de langage en font un standard pour déployer des automatisations IA en production.",
      },
      {
        term: "API",
        definition:
          "Une API (interface de programmation) est le moyen par lequel deux logiciels communiquent entre eux de façon standardisée. C'est par API qu'un outil interne interroge un modèle comme Claude ou GPT, qu'un CRM se connecte à une messagerie, qu'une automatisation lit et écrit des données. Sans API, pas d'intégration de l'IA dans les systèmes existants.",
      },
      {
        term: "Chatbot",
        definition:
          "Un chatbot est un programme qui dialogue avec des utilisateurs en langage naturel, par écrit ou par la voix. Les chatbots modernes, construits sur des grands modèles de langage, comprennent des formulations libres et s'appuient sur les données de l'entreprise pour répondre. En production, un chatbot bien conçu absorbe une part importante des demandes récurrentes du support ou du service client.",
      },
      {
        term: "Copilote métier",
        definition:
          "Un copilote métier est un assistant IA intégré aux outils de travail d'un métier précis : rédaction commerciale dans le CRM, synthèse dans la messagerie, analyse dans le tableur. Contrairement à un chatbot généraliste, il connaît le contexte de l'utilisateur et agit dans son environnement. L'humain garde la décision ; le copilote accélère l'exécution.",
      },
      {
        term: "MCP (Model Context Protocol)",
        definition:
          "Le MCP (Model Context Protocol) est un protocole ouvert qui standardise la connexion entre un modèle d'IA et des ressources externes : bases de données, outils métier, fichiers. Un connecteur MCP développé une fois fonctionne avec tous les modèles compatibles, comme une prise universelle. Ce standard simplifie fortement l'intégration de l'IA au système d'information d'une entreprise.",
      },
    ],
  },
  {
    id: "entreprise",
    title: "Entreprise",
    terms: [
      {
        term: "Audit IA",
        definition:
          "Un audit IA est l'analyse structurée des processus d'une entreprise pour identifier où l'intelligence artificielle apporte un gain mesurable. Il combine cartographie des workflows, entretiens avec les équipes, évaluation de la maturité IA et priorisation des opportunités par retour sur investissement. Son livrable : une roadmap chiffrée avec des cas d'usage priorisés, pas une liste de technologies.",
      },
      {
        term: "Maturité IA",
        definition:
          "La maturité IA mesure le degré d'intégration réelle de l'intelligence artificielle dans une organisation : outils déployés, compétences des équipes, qualité des données, gouvernance, processus adaptés. Elle s'évalue sur une grille multi-axes et sert de point de départ à toute transformation : on ne construit pas la même roadmap pour une équipe qui découvre ChatGPT et pour une organisation déjà outillée.",
      },
      {
        term: "Cas d'usage IA",
        definition:
          "Un cas d'usage IA est l'application concrète de l'intelligence artificielle à un processus métier identifié : qualifier des leads, générer des comptes rendus de réunion, traiter les demandes de support de premier niveau. Un bon cas d'usage se reconnaît à trois critères : un processus existant et fréquent, un gain mesurable, et une mise en production réaliste avec les données disponibles.",
      },
      {
        term: "ROI d'un projet IA",
        definition:
          "Le ROI (retour sur investissement) d'un projet IA rapporte les gains obtenus (heures récupérées, délais réduits, erreurs évitées, revenus additionnels) au coût total du projet : outils, intégration, formation, maintenance. Il se mesure avec un indicateur de référence établi avant le déploiement, puis suivi après. Sans mesure avant/après, un projet IA n'a pas de ROI démontrable.",
      },
      {
        term: "AI Champion",
        definition:
          "Un AI Champion est un collaborateur formé pour devenir le référent IA de son équipe : il maîtrise les outils déployés, forme ses collègues, fait remonter les nouveaux cas d'usage et maintient les systèmes dans la durée. Former des AI Champions est le mécanisme clé d'une transformation durable : c'est ce qui rend l'entreprise autonome vis-à-vis de ses prestataires.",
      },
      {
        term: "Acculturation IA",
        definition:
          "L'acculturation IA est le processus par lequel les équipes d'une entreprise acquièrent une compréhension pratique de l'intelligence artificielle : ce qu'elle sait faire, ses limites, comment l'utiliser dans leur métier. Elle passe par la formation et la pratique sur des cas réels, pas par des présentations théoriques. C'est le prérequis de l'adoption : un outil que les équipes ne comprennent pas reste inutilisé.",
      },
      {
        term: "Transformation AI-First",
        definition:
          "Une transformation AI-First consiste à repenser les processus d'une entreprise en intégrant l'intelligence artificielle comme composant par défaut, et non comme ajout ponctuel. Chaque workflow est réexaminé : ce que l'IA peut absorber, ce qui reste humain, comment les deux s'articulent. Elle combine trois chantiers indissociables : les systèmes déployés, les compétences des équipes et la gouvernance.",
      },
    ],
  },
  {
    id: "reglementation-visibilite",
    title: "Réglementation & visibilité",
    terms: [
      {
        term: "Gouvernance IA",
        definition:
          "La gouvernance IA est l'ensemble des règles qu'une entreprise se donne pour encadrer l'usage de l'intelligence artificielle : quels outils sont autorisés, quelles données peuvent y transiter, qui valide les usages sensibles, comment les résultats sont contrôlés. Elle protège l'entreprise juridiquement et évite le « shadow AI », l'usage incontrôlé d'outils IA par les équipes.",
      },
      {
        term: "AI Act",
        definition:
          "L'AI Act est le règlement européen sur l'intelligence artificielle, entré en vigueur en 2024 avec une application progressive. Il classe les systèmes d'IA par niveau de risque (inacceptable, haut risque, risque limité, risque minimal) et impose des obligations proportionnées : transparence, documentation, contrôle humain. Toute entreprise européenne qui déploie de l'IA est concernée, au minimum par les obligations de transparence et de formation.",
      },
      {
        term: "RGPD et IA",
        definition:
          "Le RGPD s'applique pleinement aux usages de l'intelligence artificielle : dès qu'un outil IA traite des données personnelles (clients, salariés, candidats), l'entreprise doit garantir une base légale, la minimisation des données et l'information des personnes. Concrètement, cela impose de vérifier où sont hébergées les données envoyées aux modèles, combien de temps elles sont conservées et si elles servent à l'entraînement.",
      },
      {
        term: "GEO (Generative Engine Optimization)",
        definition:
          "Le GEO (Generative Engine Optimization) est l'optimisation de la visibilité d'une marque dans les réponses des moteurs génératifs : ChatGPT, Perplexity, Gemini, AI Overviews de Google. Là où le SEO vise le classement dans les liens, le GEO vise la citation dans les réponses. Il repose sur des contenus factuels, structurés et citables, présents dans les sources que les modèles consultent.",
      },
      {
        term: "AI Overviews",
        definition:
          "Les AI Overviews sont les réponses générées par l'IA que Google affiche en haut de ses résultats de recherche, avant les liens classiques. Elles synthétisent plusieurs sources en une réponse directe, ce qui réduit les clics vers les sites. L'enjeu se déplace : il ne s'agit plus seulement d'être classé, mais d'être cité comme source dans la réponse elle-même.",
      },
      {
        term: "Citabilité",
        definition:
          "La citabilité est la capacité d'un contenu à être repris comme source par un moteur d'IA. Un passage citable répond entièrement à une question en quelques phrases autonomes, contient des faits précis (chiffres, dates, définitions) et provient d'une source identifiable. C'est le critère central du GEO : les moteurs génératifs citent les contenus qui leur fournissent des réponses prêtes à l'emploi.",
      },
    ],
  },
];

/** Habillage de la page glossaire, côté français. Valeurs copiées au caractère près. */
export const glossaryChrome = {
  breadcrumbHome: "Accueil",
  breadcrumbCurrent: "Glossaire IA",
  badge: "Glossaire",
  h1: "Glossaire IA : les termes qui comptent en entreprise",
  intro:
    "30 définitions claires, sans jargon inutile. De quoi comprendre ce que votre prestataire, votre DSI ou votre COMEX raconte, et décider en connaissance de cause.",
  tocAria: "Sommaire du glossaire",
  htmlLang: "fr-FR",
  schemaName: "Glossaire IA : les termes qui comptent en entreprise",
  schemaDescription:
    "30 définitions des termes essentiels de l'intelligence artificielle en entreprise, rédigées par AI Makers.",
  missingLead: "Un terme vous manque ? Écrivez-nous via la ",
  missingLink: { label: "page contact", href: "/contact" },
  missingTail: " : le glossaire est mis à jour régulièrement.",
  dedicatedLead: "Deux entrées ont leur page dédiée : ",
  dedicatedFde: {
    label: "la définition complète du Forward Deployed Engineer",
    href: "/forward-deployed-engineer",
  },
  dedicatedMiddle: " et ",
  dedicatedRole: {
    label: "la fiche métier ingénieur IA",
    href: "/metiers/ingenieur-ia",
  },
  dedicatedEnd: ".",
  offerSubtitle:
    "Les 30 définitions vous situent. Le playbook vous dit quoi en faire : la méthode en 3 phases et les systèmes qu'on déploie chez nos clients.",
  ctaTitle: "Les définitions, c'est bien. Les systèmes en production, c'est mieux.",
  ctaSubtitle:
    "30 minutes pour analyser vos workflows et identifier vos 3 premiers quick wins IA. Gratuit, sans engagement.",
  ctaLabel: "Réserver mon diagnostic gratuit",
} as const;

/**
 * Données des programmes de formation IA AI Makers.
 * Source of truth pour la page catalogue /formation-ia-entreprise
 * et les pages détail /formation-ia-entreprise/[slug].
 *
 * Contenu ancré sur les vraies fiches formation AI Makers (voix maison).
 * Aucun prix affiché (décision site 2.0 — cadrage en diagnostic).
 */

export type FormationTool = {
  src: string;
  alt: string;
};

export type FormationModule = {
  titre: string;
  /** Créneau ou durée de la session ("9h00 – 10h30", "Session 1 · 3h"). */
  horaire?: string;
  items: readonly string[];
  /** Ce que le participant repart avec à la fin du module. */
  livrable?: string;
};

export type FormationStat = {
  value: string;
  label: string;
};

export type FormationFaq = {
  question: string;
  answer: string;
};

export type Formation = {
  slug: string;
  /** Nom court affiché sur les cartes */
  name: string;
  /**
   * Title SEO, sans le suffixe de marque : le template du layout ajoute
   * « | AI Makers ». À renseigner quand le `name` commercial ne contient pas
   * la requête que la page vise. Défaut : `name`.
   */
  seoTitle?: string;
  /**
   * Meta description, 160 caractères maximum. Défaut : `resume`, qui est écrit
   * pour la page et dépasse largement la limite d'affichage.
   */
  seoDescription?: string;
  /**
   * Paragraphe answer-first : la réponse directe et autonome à « c'est quoi,
   * cette formation », écrite pour être citée telle quelle par un moteur de
   * réponse. Rendu juste sous le hero. Optionnel, seules les formations qui
   * visent une requête de recherche en ont besoin.
   */
  answerFirst?: string;
  /**
   * Positionnement face aux alternatives réelles du marché. Chaque ligne
   * nomme une option et dit honnêtement ce qu'elle vaut, la nôtre comprise.
   */
  comparison?: {
    titre: string;
    intro: string;
    options: readonly { nom: string; texte: string; nous?: boolean }[];
  };
  /**
   * Ce que chaque métier automatise concrètement. Répond à « qu'est-ce qu'on
   * va en faire, chez nous », la question que le programme ne traite pas :
   * il dit ce qu'on apprend, jamais à quoi ça sert le lundi suivant.
   */
  usages?: {
    titre: string;
    intro: string;
    rows: readonly { metier: string; avant: string; apres: string }[];
  };
  /** Traitement des données pendant et après la session. Objection B2B n°1. */
  securite?: {
    titre: string;
    intro: string;
    points: readonly { titre: string; texte: string }[];
  };
  /** Ce qui se passe une fois la session finie. */
  apres?: {
    titre: string;
    intro: string;
    points: readonly { titre: string; texte: string }[];
  };
  /**
   * L'écosystème de l'outil, brique par brique. Couvre les requêtes de type
   * « apprendre », « guide » et « bonnes pratiques », qui cherchent une
   * explication avant de chercher un prestataire.
   */
  ecosysteme?: {
    titre: string;
    intro: string;
    items: readonly { nom: string; texte: string }[];
  };
  /**
   * Renvoi vers la formation sœur quand une requête voisine relève d'un autre
   * public. La section explique le sujet et oriente, sans disputer le titre
   * exact à la page qui le porte.
   */
  passerelle?: {
    titre: string;
    intro: string;
    pourQui: readonly { profil: string; texte: string }[];
    lienLabel: string;
    lienHref: string;
    cloture: string;
  };
  /** Comparaison avec les assistants concurrents, forces et limites. */
  versus?: {
    titre: string;
    intro: string;
    rows: readonly { outil: string; force: string; limite: string }[];
  };
  /** Ce que l'outil fait mal. Un comparatif sans limites ne convainc personne. */
  limites?: {
    titre: string;
    intro: string;
    points: readonly { titre: string; texte: string }[];
  };
  /** Le cadrage entre le premier appel et le jour de la session. */
  preparation?: {
    titre: string;
    intro: string;
    etapes: readonly { quand: string; titre: string; texte: string }[];
  };
  /** Les anti-patterns constatés en mission. Utile, et crédible. */
  erreurs?: {
    titre: string;
    intro: string;
    items: readonly { erreur: string; texte: string }[];
  };
  /**
   * Les principes de travail enseignés en séance. Couvre les requêtes
   * « bonnes pratiques » et « guide », qui cherchent la méthode avant le
   * prestataire, et donne à la page quelque chose à offrir au lecteur qui
   * n'achètera rien.
   */
  pratiques?: {
    titre: string;
    intro: string;
    principes: readonly { titre: string; texte: string }[];
    cloture: string;
  };
  /** Titre long affiché en hero de la page détail */
  titre: string;
  /** Étiquette de catégorie (Initiation, Métier, Avancé…) */
  categorie: string;
  /** Badge de mise en avant affiché sur la carte et le hero ("Le plus demandé"…) */
  badge?: string;
  /** Accroche courte */
  tagline: string;
  /** Résumé 1-2 phrases */
  resume: string;
  illustration: FormationTool;
  tools: readonly FormationTool[];
  niveau: string;
  public: string;
  format: string;
  duree: string;
  prerequis: string;
  objectifs: readonly string[];
  programme: readonly FormationModule[];
  resultats: readonly FormationStat[];
  faq: readonly FormationFaq[];
  /** Photo de session réelle (vide = placeholder affiché) */
  photo?: FormationTool;
  /** Bande photo large en milieu de page détail (vide = rotation auto dans la galerie) */
  bandPhoto?: FormationTool;
};

/** Galerie de photos réelles de sessions — affichée en fin de page catalogue (8 + tuile CTA = grille 3x3). */
export const formationPhotos: readonly FormationTool[] = [
  {
    src: "/images/formations/masterclass-skema-speaker.png",
    alt: "Masterclass IA AI Makers : intervention sur l'impact IA par métier",
  },
  {
    src: "/images/formations/session-equipe-quote.jpg",
    alt: "Fin de session de formation IA en entreprise",
  },
  {
    src: "/images/formations/masterclass-amphi.png",
    alt: "Masterclass IA en amphithéâtre",
  },
  {
    src: "/images/formations/session-finance-groupe.jpg",
    alt: "Formation IA d'une équipe finance en entreprise",
  },
  {
    src: "/images/formations/atelier-hands-on.png",
    alt: "Atelier hands-on en petit groupe, les mains sur les outils",
  },
  {
    src: "/images/formations/session-projection-ia.jpg",
    alt: "Session de formation « L'IA au service de votre métier »",
  },
  {
    src: "/images/formations/seminaire-equipe.png",
    alt: "Séminaire de formation IA en entreprise",
  },
  {
    src: "/images/formations/lab-ia-equipe-crea.jpg",
    alt: "Formation IA d'une équipe création au Lab IA",
  },
];

/** Logos outils. Exporté pour `formations.en.ts` : les `alt` sont des noms de
 *  produit, identiques dans les deux langues — les redéclarer les ferait diverger. */
export const TOOL = {
  claude: { src: "/images/stack/claude-color.svg", alt: "Claude" },
  claudeCode: { src: "/images/stack/claude-color.svg", alt: "Claude Code" },
  chatgpt: { src: "/images/stack/openai-color.svg", alt: "ChatGPT" },
  codex: { src: "/images/stack/openai-color.svg", alt: "Codex" },
  gemini: { src: "/images/stack/gemini-color.svg", alt: "Gemini" },
  copilot: { src: "/images/stack/copilot-color.svg", alt: "Microsoft Copilot" },
  microsoft: { src: "/images/stack/microsoft-color.svg", alt: "Microsoft 365" },
  cursor: { src: "/images/stack/cursor-color.svg", alt: "Cursor" },
  clay: { src: "/images/stack/clay-color.png", alt: "Clay" },
  lemlist: { src: "/images/stack/lemlist-color.png", alt: "Lemlist" },
  fullenrich: { src: "/images/stack/fullenrich-color.svg", alt: "FullEnrich" },
  nanoBanana: { src: "/images/stack/gemini-color.svg", alt: "Nano Banana" },
  weavy: { src: "/images/stack/weavy-color.svg", alt: "Weavy" },
} as const;

export const formations: readonly Formation[] = [
  {
    slug: "formation-ai-champions",
    photo: {
      src: "/images/formations/masterclass-amphi.png",
      alt: "Formation AI Champions en amphithéâtre",
    },
    name: "Formation AI Champions",
    seoTitle: "Formation IA en entreprise : vos AI Champions",
    seoDescription:
      "Formez des référents IA capables de diffuser les usages dans leurs équipes. Sur vos process, avec les outils que vous utilisez déjà.",
    titre:
      "Formation AI Champions : la journée qui sépare les équipes qui parlent d'IA de celles qui s'en servent",
    categorie: "Programme phare",
    tagline:
      "70 % d'une transformation IA, c'est l'humain (BCG). Cette journée installe le socle et fait émerger ceux qui porteront l'IA dans chaque équipe.",
    resume:
      "Vos équipes ont testé ChatGPT. Rien n'a changé. Normal : un outil sans méthode ne transforme rien. Cette journée travaille sur leurs vraies tâches, avec leurs vrais fichiers, et identifie vos premiers AI Champions : les profils moteurs qui feront vivre l'IA après notre départ.",
    illustration: {
      src: "/images/3d/chapeau-formation.png",
      alt: "Formation AI Champions",
    },
    tools: [TOOL.claude, TOOL.chatgpt, TOOL.gemini, TOOL.copilot],
    niveau: "Débutant",
    public: "Toutes les équipes, du support à la direction",
    format: "Présentiel, distanciel ou hybride",
    duree: "Journée type ci-dessous, ajustée à votre format lors du cadrage",
    prerequis: "Aucun prérequis technique",
    objectifs: [
      "Savoir quel outil utiliser pour quelle tâche, et lesquels ignorer",
      "Écrire des prompts qui produisent le même résultat de qualité, à chaque fois",
      "Automatiser 3 tâches hebdomadaires pendant la formation, sur vos documents réels",
      "Repartir avec un plan d'action priorisé et vos premiers AI Champions nommés",
    ],
    programme: [
      {
        titre: "L'IA générative, sans le bruit",
        horaire: "9h00 – 10h30",
        items: [
          "Ce que l'IA change vraiment au travail : démonstrations en direct sur vos cas concrets",
          "Panorama des assistants (Claude, ChatGPT, Gemini, Copilot) : lequel pour quoi",
          "Ce que l'IA ne sait pas faire : les limites et les risques, sans hype",
        ],
        livrable:
          "Une grille de lecture claire : quel outil pour quelle tâche dans votre métier.",
      },
      {
        titre: "Le prompting qui tient la route",
        horaire: "10h30 – 12h30",
        items: [
          "Structurer un prompt : rôle, contexte, tâche, format attendu",
          "Fiabiliser et reproduire des résultats de qualité",
          "Atelier : chaque participant construit ses prompts sur ses vraies tâches",
        ],
        livrable:
          "Votre bibliothèque de prompts métier, testée en séance, réutilisable dès demain.",
      },
      {
        titre: "Vos tâches réelles, augmentées",
        horaire: "14h00 – 16h00",
        items: [
          "Rédiger, résumer, analyser des documents : sur vos fichiers, pas des exemples génériques",
          "Préparer une réunion, un compte rendu, un email complexe en quelques minutes",
          "Atelier : chaque participant automatise une tâche qui lui prend du temps chaque semaine",
        ],
        livrable:
          "3 workflows quotidiens fonctionnels, appliqués à vos documents réels.",
      },
      {
        titre: "Vos cas d'usage et vos champions",
        horaire: "16h00 – 17h30",
        items: [
          "Cartographier les tâches chronophages de chaque métier présent",
          "Prioriser les usages à fort impact et faible risque",
          "Identifier les profils moteurs : ceux qui porteront l'IA dans leur équipe",
        ],
        livrable:
          "Un plan d'action priorisé et vos premiers AI Champions identifiés, nommés, volontaires.",
      },
    ],
    resultats: [
      { value: "7 h", label: "gagnées par semaine et par collaborateur" },
      { value: "10+", label: "cas d'usage identifiés pour votre métier" },
      { value: "1ers", label: "AI Champions identifiés dans vos équipes" },
    ],
    faq: [
      {
        question: "Qu'est-ce qu'un AI Champion ?",
        answer:
          "Un collaborateur formé qui devient le référent IA de son équipe : il maîtrise les outils, identifie les cas d'usage et fait monter ses collègues en compétence. C'est la clé d'une adoption qui dure : 70 % d'une transformation, c'est l'humain (BCG). Cette formation pose le socle et fait émerger vos premiers champions.",
      },
      {
        question: "À qui s'adresse la formation AI Champions ?",
        answer:
          "À toutes les équipes, quel que soit le niveau. La majorité des personnes que nous formons ne sont pas techniques : commerciaux, juristes, RH, support, dirigeants. La formation part de leurs tâches quotidiennes, pas de concepts techniques.",
      },
      {
        question: "La formation est-elle adaptée à notre secteur ?",
        answer:
          "Oui. Le contenu est co-construit en amont avec vous : nous préparons les exercices à partir de vos processus, vos outils et vos documents réels. Le déroulé type s'ajuste à votre format (demi-journée, journée, ou parcours).",
      },
    ],
  },
  {
    slug: "maitriser-claude",
    photo: {
      src: "/images/formations/masterclass-skema-speaker.png",
      alt: "Session Maîtriser Claude en entreprise",
    },
    bandPhoto: {
      src: "/images/formations/masterclass-amphi.png",
      alt: "Masterclass Claude en amphithéâtre à SKEMA Business School",
    },
    name: "Maîtriser Claude en entreprise",
    // « formation claude » vaut 153 impressions sur trois semaines et zéro
    // clic (Search Console, 2 août 2026). Le title commercial ne contenait pas
    // le mot « formation » ; la requête passe donc devant. Le partenariat
    // Anthropic, absent des deux pages Claude, ouvre la description : c'est le
    // seul argument qu'aucun concurrent francophone ne peut reprendre.
    seoTitle: "Formation Claude en entreprise, sur vos cas réels",
    seoDescription:
      "Partenaire officiel Anthropic. Formez vos équipes à Claude en français, sur vos documents et vos process. Chacun repart avec son Skill qui tourne.",
    // Paragraphe citable : il répond à « formation claude », « cours claude
    // entreprise » et « apprendre claude entreprise », qui totalisent 182
    // impressions et zéro clic sur trois semaines.
    answerFirst:
      "Une formation Claude en entreprise apprend à vos équipes à se servir de Claude comme d'un outil de travail plutôt que d'un assistant de conversation : créer des Skills qui prennent en charge une tâche précise, structurer des Projects qui gardent le contexte de l'équipe, brancher Claude sur vos outils existants et cadrer les usages côté sécurité. Chez AI Makers, partenaire officiel Anthropic, elle se déroule en français, sur vos propres documents, et chaque participant repart avec un Skill qui tourne.",
    comparison: {
      titre: "Les trois façons de former une équipe à Claude",
      intro:
        "Les alternatives existent et deux d'entre elles sont sérieuses. Voici où chacune se place.",
      options: [
        {
          nom: "Anthropic Academy",
          texte:
            "La ressource officielle d'Anthropic : gratuite, complète, tenue à jour. Elle est en anglais et se suit en autonomie, donc personne ne montre à vos équipes quoi en faire sur vos dossiers à vous.",
        },
        {
          nom: "Les grands catalogues de formation",
          texte:
            "Ils vendent de l'IA générative en général, avec des exemples ChatGPT ou Copilot. Claude y tient rarement une place à part, et jamais son écosystème Skills, Projects et Cowork.",
        },
        {
          nom: "AI Makers",
          texte:
            "Partenaire officiel Anthropic, en français, sur vos documents. Les formateurs sont les ingénieurs qui déploient Claude en production chez nos clients toutes les semaines.",
          nous: true,
        },
      ],
    },
    usages: {
      titre: "Ce que chaque métier automatise en sortant",
      intro:
        "Le programme dit ce que vos équipes apprennent. Voici ce qu'elles en font le lundi suivant, métier par métier. Ce sont les Skills que nos participants construisent le plus souvent en séance.",
      rows: [
        {
          metier: "Direction",
          avant:
            "Lire vingt pages de reporting avant chaque comité, et arriver avec les mauvaises questions",
          apres:
            "Un Skill qui résume les documents du comité, sort les écarts par rapport au mois précédent et prépare les questions à poser",
        },
        {
          metier: "Commerce",
          avant:
            "Reprendre le compte rendu d'appel de mémoire, deux heures après, quand les détails ont filé",
          apres:
            "Un Project qui contient votre argumentaire et vos objections types, et rédige le compte rendu plus l'email de relance dans la foulée",
        },
        {
          metier: "Ressources humaines",
          avant:
            "Relire cent candidatures à la main pour trouver les cinq qui correspondent vraiment",
          apres:
            "Un Skill qui compare chaque dossier à la fiche de poste réelle et justifie son classement, ligne par ligne",
        },
        {
          metier: "Finance et administration",
          avant:
            "Recopier des chiffres d'un export vers un tableau, tous les mois, sans valeur ajoutée",
          apres:
            "Une automatisation Cowork qui reprend l'export, contrôle les écarts et signale ce qui sort des clous",
        },
        {
          metier: "Marketing",
          avant:
            "Repartir de zéro à chaque contenu, avec un ton qui varie selon qui écrit",
          apres:
            "Un Project qui connaît votre positionnement et vos formats, et produit des premières versions déjà à votre voix",
        },
        {
          metier: "Opérations et support",
          avant:
            "Chercher la réponse dans quatre documents différents, à chaque demande client",
          apres:
            "Claude branché sur votre base documentaire, qui répond en citant la source et laisse la décision à l'humain",
        },
      ],
    },
    securite: {
      titre: "Vos données pendant et après la session",
      intro:
        "Les exercices portent sur vos vrais documents, donc la question du traitement des données arrive avant la première ligne d'un devis. Voici le cadre, posé à l'avance.",
      points: [
        {
          titre: "Vos contenus restent les vôtres",
          texte:
            "Anthropic n'entraîne pas ses modèles sur les données des comptes professionnels. Nous travaillons sur votre environnement Claude, avec vos accès, et les documents utilisés en séance ne quittent jamais votre périmètre.",
        },
        {
          titre: "Le cadre RGPD est posé avant la session",
          texte:
            "Nous définissons ensemble ce qui entre dans les exercices et ce qui reste dehors. Les documents sensibles peuvent être remplacés par des versions anonymisées quand la démonstration n'exige pas les vraies valeurs.",
        },
        {
          titre: "Les connecteurs sont cadrés un par un",
          texte:
            "Brancher Claude sur Drive, Notion, Slack ou Microsoft 365 revient à ouvrir un accès. Nous passons en revue les périmètres, les droits et ce que chaque connecteur voit réellement, avec votre DSI si vous en avez une.",
        },
        {
          titre: "Ce que vos équipes emportent",
          texte:
            "Les Skills et les Projects construits en séance vous appartiennent et vivent dans votre espace. Notre page gouvernance et sécurité détaille le cadre complet.",
        },
      ],
    },
    ecosysteme: {
      titre: "Ce qu'il y a dans Claude, brique par brique",
      intro:
        "La plupart des équipes connaissent la fenêtre de conversation et s'arrêtent là. Voici ce que contient réellement l'outil, et à quoi sert chaque brique. C'est le vocabulaire commun de la journée.",
      items: [
        {
          nom: "Les Projects",
          texte:
            "Un espace qui garde le contexte d'une équipe ou d'un dossier : documents de référence, ton à respecter, règles métier. Vous cessez de recoller le contexte à chaque conversation, et deux personnes du même service obtiennent des réponses cohérentes.",
        },
        {
          nom: "Les Skills",
          texte:
            "Une compétence que vous apprenez à Claude une fois et qu'il applique ensuite à la demande : préparer un compte rendu à votre format, contrôler un document contre une check-list, comparer une candidature à une fiche de poste. C'est la brique qui transforme un usage individuel en procédure d'équipe.",
        },
        {
          nom: "Les Artifacts",
          texte:
            "Un document, un tableau ou une petite application produits à côté de la conversation, que l'on modifie par itérations successives. Utile dès qu'un livrable dépasse le paragraphe.",
        },
        {
          nom: "Cowork",
          texte:
            "L'automatisation de tâches en plusieurs étapes, sans écrire de code. Reprendre un export, contrôler des écarts, produire un récapitulatif et le déposer au bon endroit, en une seule commande.",
        },
        {
          nom: "Les connecteurs MCP",
          texte:
            "Le branchement de Claude sur vos outils existants : Drive, Notion, Slack, Microsoft 365. Claude lit vos sources au lieu de vous demander de copier-coller, et cite d'où vient sa réponse.",
        },
        {
          nom: "Claude Code",
          texte:
            "L'outil en ligne de commande destiné à ceux qui construisent des logiciels. Il sort du périmètre de cette journée, qui vise les métiers ; la section suivante explique à qui il s'adresse.",
        },
      ],
    },
    passerelle: {
      titre: "Et Claude Code, pour ceux qui construisent",
      intro:
        "C'est la question qui revient le plus souvent en fin de session, et elle mérite une réponse honnête plutôt qu'un renvoi commercial. Claude Code est un outil différent, pour un public différent.",
      pourQui: [
        {
          profil: "Vos équipes métier",
          texte:
            "Cette journée leur suffit. Skills, Projects, Cowork et connecteurs couvrent l'automatisation de leur quotidien sans écrire une ligne de code, et c'est là que le temps se récupère.",
        },
        {
          profil: "Vos développeurs",
          texte:
            "Claude Code s'installe dans leur terminal et travaille sur votre dépôt : lire une base existante, écrire des tests, mener un refactoring, ouvrir une pull request. Le sujet demande sa propre session, avec les questions de revue de code et de droits d'accès qui vont avec.",
        },
        {
          profil: "Vos profils hybrides",
          texte:
            "Product managers, analystes, responsables d'opérations qui touchent déjà à la donnée. Ce sont eux qui tirent le plus de la combinaison des deux : ils cadrent avec Claude et construisent leur propre outil interne avec Claude Code.",
        },
      ],
      lienLabel: "Formation Claude Code et Cursor",
      lienHref: "/formation-ia-entreprise/vibe-coding",
      cloture:
        "Beaucoup de nos clients enchaînent les deux : cette journée pour l'ensemble des équipes, puis une session Claude Code pour le noyau technique. Les deux se cadrent au même diagnostic.",
    },
    versus: {
      titre: "Claude, ChatGPT ou Copilot : ce qui les sépare en entreprise",
      intro:
        "La question arrive dans chaque session, souvent parce que l'entreprise paie déjà l'un des trois. Voici où chacun se distingue, sans faire semblant que les autres sont mauvais.",
      rows: [
        {
          outil: "Claude",
          force:
            "Documents longs, rédaction qui tient la voix de l'entreprise, raisonnement sur des règles métier, écosystème Skills et Projects pour industrialiser un usage",
          limite:
            "Génération d'images absente, et une notoriété plus faible en interne, donc l'adoption demande un accompagnement",
        },
        {
          outil: "ChatGPT",
          force:
            "L'écosystème le plus large, la génération d'images, une notoriété qui facilite l'adhésion des équipes",
          limite:
            "Les résultats varient davantage d'une session à l'autre sur des tâches longues et structurées",
        },
        {
          outil: "Microsoft Copilot",
          force:
            "Intégré nativement à Word, Excel, Teams et Outlook, donc déjà présent là où vos équipes travaillent",
          limite:
            "Dépendant de la qualité de votre tenant Microsoft, et plus rigide dès qu'on sort de la suite Office",
        },
      ],
    },
    limites: {
      titre: "Ce que Claude fait mal, et qu'on vous dira en séance",
      intro:
        "Une formation qui promet un outil sans défaut produit des équipes déçues au bout de trois semaines. Voici ce que nous annonçons dès le matin.",
      points: [
        {
          titre: "Il se trompe avec assurance",
          texte:
            "Sur un chiffre, une date, une référence réglementaire, la réponse peut être fausse et parfaitement bien tournée. La journée apprend à brancher Claude sur vos sources et à exiger la citation, ce qui déplace le contrôle plutôt que de le supprimer.",
        },
        {
          titre: "Il ne remplace pas la décision",
          texte:
            "Un dossier de candidature classé, un écart budgétaire signalé, une réponse client rédigée : ce sont des propositions. La validation reste humaine, et les Skills construits en séance sont conçus dans ce sens.",
        },
        {
          titre: "Il dépend de la qualité de vos documents",
          texte:
            "Branché sur une base documentaire périmée, il répondra avec assurance à partir de documents périmés. Nous regardons ensemble ce qui mérite d'être connecté et ce qui doit d'abord être rangé.",
        },
        {
          titre: "Il coûte à l'usage",
          texte:
            "Les usages lourds consomment. Nous abordons le choix des modèles selon la tâche et le suivi de la consommation, pour éviter la facture surprise au troisième mois.",
        },
      ],
    },
    pratiques: {
      titre: "Les cinq principes qu'on enseigne, et que vous pouvez appliquer dès ce soir",
      intro:
        "Ils tiennent en une page et ne demandent aucun outil particulier. Nous les donnons ici parce qu'ils valent d'être connus, que vous nous appeliez ou non.",
      principes: [
        {
          titre: "Donnez le rôle et le destinataire avant la tâche",
          texte:
            "« Rédige une note » produit une note moyenne. « Tu écris pour un directeur financier qui a quinze minutes et connaît le dossier, résume ces trois documents en une page » produit quelque chose d'utilisable. Le modèle ne devine pas pour qui il écrit, et c'est l'information qui change le plus le résultat.",
        },
        {
          titre: "Montrez un exemple de ce que vous voulez",
          texte:
            "Un bon exemple vaut mieux que trois paragraphes de consigne. Collez un compte rendu que vous avez aimé, dites « même structure, même longueur, même ton », et la variabilité s'effondre. C'est le geste qui distingue les équipes qui obtiennent des résultats stables.",
        },
        {
          titre: "Découpez ce qui est long",
          texte:
            "Une demande qui contient quatre tâches produit quatre résultats médiocres. Analyser, puis structurer, puis rédiger, en trois temps, donne un meilleur résultat que la même demande d'un bloc. Le découpage permet aussi de corriger l'étape qui a dérapé sans tout refaire.",
        },
        {
          titre: "Demandez la source, systématiquement",
          texte:
            "Dès que Claude travaille sur vos documents, exigez qu'il cite le passage sur lequel il s'appuie. Cela ne supprime pas les erreurs, mais rend la vérification possible en quelques secondes au lieu d'une relecture complète, et c'est ce qui rend l'usage tenable sur des sujets sensibles.",
        },
        {
          titre: "Figez ce qui marche",
          texte:
            "La formulation qui a produit le bon résultat vaut plus que le résultat lui-même. Dès qu'une tâche revient, elle devient un Skill : la consigne est écrite une fois, testée, et l'équipe entière en hérite. C'est la différence entre un usage individuel et une méthode d'entreprise.",
        },
      ],
      cloture:
        "La journée applique ces cinq principes à vos propres tâches, jusqu'à ce que chaque participant ait un résultat qu'il garde.",
    },
    preparation: {
      titre: "Ce qui se passe avant le jour J",
      intro:
        "Une formation sur vos cas réels se prépare, sinon la matinée part en configuration et en malentendus. Le cadrage tient en quatre étapes et demande peu de temps de votre côté.",
      etapes: [
        {
          quand: "Le diagnostic",
          titre: "Trente minutes pour cerner le terrain",
          texte:
            "Nous regardons ce que vos équipes font aujourd'hui de l'IA, quels outils sont déjà payés, et quelles tâches reviennent assez souvent pour mériter un Skill. C'est aussi le moment où nous vous disons si une autre formation du catalogue conviendrait mieux.",
        },
        {
          quand: "La sélection des cas",
          titre: "Vous choisissez les tâches, nous préparons les exercices",
          texte:
            "Vous nous donnez une poignée de tâches répétitives et les documents qui vont avec. Nous construisons les exercices de la journée autour, pour que chaque manipulation porte sur quelque chose que le participant fait déjà.",
        },
        {
          quand: "Le cadrage technique",
          titre: "Les comptes et les accès sont réglés à l'avance",
          texte:
            "Comptes Claude, connecteurs à ouvrir, documents à anonymiser si besoin, cadre de sécurité validé avec votre DSI quand vous en avez une. Rien de tout cela ne se règle le matin de la session.",
        },
        {
          quand: "Le jour J",
          titre: "Tout le monde commence en même temps",
          texte:
            "Les participants arrivent avec un environnement qui fonctionne et des exercices qui parlent de leur métier. C'est ce qui permet de sortir un Skill utilisable dans la journée plutôt qu'une démonstration.",
        },
      ],
    },
    erreurs: {
      titre: "Six erreurs qu'on voit dans presque toutes les entreprises",
      intro:
        "Elles reviennent chez des équipes très différentes, et elles expliquent la plupart des déploiements IA qui s'essoufflent au bout d'un trimestre. La journée les traite une par une.",
      items: [
        {
          erreur: "Traiter Claude comme un moteur de recherche",
          texte:
            "Une question courte donne une réponse générique, l'équipe conclut que l'outil est surestimé et retourne à ses habitudes. Le contexte est ce qui fait la différence, et c'est précisément ce que les Projects automatisent.",
        },
        {
          erreur: "Tout recommencer à chaque fois",
          texte:
            "Le même prompt réécrit de mémoire chaque semaine, avec un résultat qui varie. Dès qu'une tâche revient, elle mérite un Skill : la formulation est figée une fois, le résultat devient reproductible.",
        },
        {
          erreur: "Distribuer des licences sans usage",
          texte:
            "L'entreprise paie des accès pour tout le monde et personne ne sait quoi en faire. Le taux d'usage réel se mesure en semaines, pas en licences achetées, et il tient à ce que chacun ait vu l'outil résoudre son problème à lui.",
        },
        {
          erreur: "Garder les usages dans la tête de deux personnes",
          texte:
            "Deux collaborateurs deviennent excellents, personne d'autre ne progresse, et leur départ efface le savoir. Écrire les Skills et les prompts dans un référentiel partagé coûte une heure et change la trajectoire.",
        },
        {
          erreur: "Brancher l'IA sur une documentation périmée",
          texte:
            "Les connecteurs donnent accès à ce qui existe, y compris aux versions obsolètes. Ranger la base avant de la connecter fait souvent plus pour la qualité des réponses que n'importe quel réglage.",
        },
        {
          erreur: "Sauter la question de la vérification",
          texte:
            "Sans règle explicite sur ce qui doit être relu, les équipes oscillent entre tout vérifier, ce qui annule le gain, et ne rien vérifier, ce qui finit par coûter cher. La journée pose cette règle tâche par tâche.",
        },
      ],
    },
    apres: {
      titre: "Ce qui se passe une fois la session finie",
      intro:
        "Une journée de formation dont personne ne se sert la semaine suivante coûte plus cher qu'elle ne rapporte. Trois choses tiennent l'usage.",
      points: [
        {
          titre: "Chacun repart avec quelque chose qui tourne",
          texte:
            "Le Skill construit en séance porte sur une tâche que le participant fait déjà toutes les semaines. Il sert dès le lendemain, ce qui évite la retombée classique des formations où tout est à reconstruire de mémoire.",
        },
        {
          titre: "Les usages sont écrits, pas seulement montrés",
          texte:
            "Les prompts, les Skills et les configurations passent dans un document qui vous reste. Un nouvel arrivant peut s'y brancher sans qu'on refasse la session pour lui.",
        },
        {
          titre: "Vos référents savent qui appeler",
          texte:
            "Nous identifions pendant la journée les profils qui feront vivre les usages dans chaque équipe. Ce sont eux qui répondent aux questions ensuite, et ce sont eux que nous accompagnons si vous prolongez.",
        },
      ],
    },
    titre:
      "Maîtriser Claude en entreprise : du chat qui répond à l'assistant qui travaille",
    categorie: "Métier",
    badge: "Le plus demandé",
    tagline:
      "Vos équipes n'utilisent qu'une fraction de Claude. Le reste, Skills, Projects et Cowork, c'est là que le temps se gagne.",
    resume:
      "Utiliser Claude comme un simple chat, c'est laisser l'essentiel sur la table. Cette formation le configure en assistant de travail : des Skills spécialisés sur vos tâches, des Projects qui connaissent votre contexte, des automatisations Cowork sans code et des connecteurs branchés sur vos outils. Chaque participant repart avec son premier Skill qui tourne.",
    illustration: {
      src: "/images/3d/etoiles-ia.png",
      alt: "Maîtriser Claude en entreprise",
    },
    tools: [TOOL.claude],
    niveau: "Débutant → Intermédiaire",
    public:
      "Managers, équipes opérationnelles, directions, responsables transformation digitale",
    format: "Présentiel, distanciel ou hybride",
    duree: "Format sur-mesure, de la journée au parcours complet",
    prerequis: "Aucun prérequis technique",
    objectifs: [
      "Créer un Skill spécialisé sur une tâche réelle pendant la formation",
      "Structurer un Project qui donne à Claude le contexte de votre équipe",
      "Automatiser un processus multi-étapes avec Cowork, sans code",
      "Brancher Claude sur Drive, Notion, Slack ou Microsoft 365, avec le bon cadre de sécurité",
    ],
    programme: [
      {
        titre: "Les fondamentaux de Claude",
        horaire: "9h00 – 10h30",
        items: [
          "Du chat à l'assistant de travail : ce que Claude change vraiment",
          "Prompts, styles et bonnes pratiques pour des résultats fiables",
          "Atelier : configurer Claude pour son métier, chacun sur son poste",
        ],
        livrable:
          "Claude configuré pour votre métier, sur le poste de chaque participant.",
      },
      {
        titre: "Skills, Projects & bases de connaissances",
        horaire: "10h30 – 12h30",
        items: [
          "Créer des assistants spécialisés avec les Skills",
          "Organiser ses connaissances dans les Projects",
          "Atelier : chaque participant crée son premier Skill sur une tâche réelle",
        ],
        livrable:
          "Votre premier Skill fonctionnel et un Project structuré pour votre équipe.",
      },
      {
        titre: "Cowork & automatisation sans code",
        horaire: "14h00 – 16h00",
        items: [
          "Automatiser des tâches multi-étapes avec Cowork",
          "Enchaîner des actions sans écrire de code",
          "Atelier : automatiser un vrai processus de votre quotidien",
        ],
        livrable:
          "Une automatisation multi-étapes qui tourne, construite en séance sans une ligne de code.",
      },
      {
        titre: "Connecteurs, déploiement & sécurité",
        horaire: "16h00 – 17h30",
        items: [
          "Connecter Claude à Drive, Notion, Slack et Microsoft 365 (MCP)",
          "Déployer Claude à l'échelle de l'équipe",
          "Cadrer la sécurité et la confidentialité des données",
        ],
        livrable:
          "Claude branché à vos outils, et la charte de déploiement sécurisé pour l'équipe.",
      },
    ],
    resultats: [
      // Les trois tuiles disaient « 100% du potentiel de Claude exploité »,
      // « Sans code » et « À l'échelle » : invérifiable pour la première,
      // pas des résultats pour les deux autres. Remplacées par ce que le
      // participant a réellement entre les mains en sortant.
      { value: "1 Skill", label: "par participant, qui tourne en fin de session" },
      { value: "Vos données", label: "les exercices portent sur vos vrais documents" },
      { value: "Dès le lendemain", label: "les usages sont réutilisables tels quels" },
    ],
    faq: [
      {
        question: "Faut-il des compétences techniques ?",
        answer:
          "Non. Le programme est pensé pour des managers et des équipes opérationnelles. Même les automatisations avec Cowork se font sans écrire de code.",
      },
      {
        question: "Qu'est-ce que les Skills et Cowork ?",
        answer:
          "Les Skills permettent de spécialiser Claude sur vos tâches et votre contexte. Cowork permet d'automatiser des tâches multi-étapes. Ensemble, ils font passer Claude du simple chat à un véritable assistant de travail.",
      },
      {
        question: "Peut-on connecter Claude à nos outils ?",
        answer:
          "Oui. Via les connecteurs MCP, Claude se branche à Drive, Notion, Slack et Microsoft 365. Nous couvrons aussi le déploiement à l'échelle d'une équipe et les paramètres de sécurité.",
      },
      // Les six entrées suivantes reprennent des requêtes réelles de la Search
      // Console (export du 2 août 2026) qui rapportent des impressions sans
      // aucun clic, faute d'une réponse sur la page.
      {
        question: "Où former ses équipes à Claude en français ?",
        answer:
          "La ressource officielle d'Anthropic, l'Anthropic Academy, est en anglais et se suit en autonomie. En français, l'offre dédiée à Claude reste rare : la plupart des catalogues traitent l'IA générative en général, avec des exemples ChatGPT. AI Makers est partenaire officiel Anthropic et forme en français, sur vos propres documents.",
      },
      {
        question: "Quelle différence avec l'Anthropic Academy ?",
        answer:
          "L'Anthropic Academy est excellente et gratuite, et nous la recommandons pour se familiariser avec l'outil. Elle enseigne Claude en général, en anglais. Notre formation part de vos processus, de vos documents et de vos outils, avec un formateur dans la salle qui répond sur vos cas. Les deux se complètent : l'Academy pour le socle, notre session pour l'application.",
      },
      {
        question: "Cette formation convient-elle à une PME ou une TPE ?",
        answer:
          "Oui, et c'est le format le plus fréquent. Le programme s'ajuste au nombre de participants et à la durée dont vous disposez, de la demi-journée au parcours. Une petite équipe présente même un avantage : tout le monde travaille sur les mêmes processus, donc les Skills créés en séance servent immédiatement à tous.",
      },
      {
        question: "Où se déroule la formation ?",
        answer:
          // Casablanca : le second bureau réel, cohérent avec l'adresse canonique de
          // `site-config` et avec le reste du site. Dernière occurrence de
          // « Rabat » dans le copy français ; l'amont la corrige aussi (d787276).
          "Dans vos locaux, dans les nôtres à Paris, ou à distance. Nous intervenons partout en France métropolitaine et au Maroc depuis notre bureau de Casablanca, et à distance sur toute la zone francophone. Le format se cale sur votre organisation au moment du cadrage.",
      },
      {
        question: "Formation Claude ou formation IA générative, laquelle choisir ?",
        answer:
          "Une formation IA générative donne le panorama : quel outil pour quel usage, comment écrire un prompt, quelles limites. Une formation Claude va plus loin sur un seul outil et son écosystème, Skills, Projects, Cowork et connecteurs, ce qu'aucun panorama ne couvre. Si vos équipes ont déjà le socle, la formation Claude est la suite logique.",
      },
      {
        question: "Combien de participants par session ?",
        answer:
          "Le format hands-on demande que chacun ait les mains sur son poste et reparte avec son Skill. Nous cadrons donc l'effectif au moment du diagnostic, en fonction du niveau des participants et du temps disponible, plutôt que d'annoncer un chiffre qui ne tiendrait pas dans tous les cas.",
      },
      {
        question: "Proposez-vous une formation Claude Code ?",
        answer:
          "Oui, dans une session distincte. Claude Code est un outil en ligne de commande qui travaille sur un dépôt de code : il s'adresse à des développeurs, quand cette journée s'adresse aux métiers. Notre formation Claude Code et Cursor couvre l'installation, la revue de code, les droits d'accès et la construction d'outils internes. Beaucoup de clients enchaînent les deux, cette journée pour l'ensemble des équipes puis une session technique pour le noyau qui construit.",
      },
      {
        question: "Faut-il savoir coder pour suivre cette formation ?",
        answer:
          "Non, et c'est le point de départ du programme. Les Skills se décrivent en français, les automatisations Cowork se construisent sans écrire de code, et les connecteurs se configurent depuis l'interface. Si vos équipes veulent aller jusqu'à écrire des outils, c'est le sujet de la formation Claude Code, qui suppose un profil technique.",
      },
      {
        question: "Claude, ChatGPT ou Copilot : lequel choisir en entreprise ?",
        answer:
          "Les trois se valent sur la rédaction courante. Claude se distingue sur les documents longs, le respect d'un ton d'entreprise et l'industrialisation d'un usage via les Skills et les Projects. ChatGPT a l'écosystème le plus large et génère des images. Copilot a l'avantage d'être déjà dans Word, Excel et Teams. Beaucoup d'entreprises en gardent deux, et la question utile est plutôt quel outil pour quelle tâche.",
      },
      {
        question: "Quelle différence entre le Claude gratuit et Claude en entreprise ?",
        answer:
          "La version gratuite donne accès à la conversation, avec des limites d'usage et sans les briques qui font la valeur en entreprise. Les Projects, les Skills, Cowork et les connecteurs vers vos outils relèvent des offres professionnelles, tout comme l'administration des accès et la garantie que vos contenus ne servent pas à entraîner les modèles. Nous cadrons le bon niveau d'abonnement au diagnostic, avant la session, pour que les participants travaillent sur un environnement qui a les fonctions du programme.",
      },
      {
        question: "Peut-on former des équipes réparties sur plusieurs sites ?",
        answer:
          "Oui, et c'est fréquent. Deux formats fonctionnent : une session à distance qui réunit tout le monde, ou une session par site quand la pratique en salle compte plus que la simultanéité. Pour les groupes très dispersés, nous préférons dédoubler la journée plutôt que de laisser la moitié des participants suivre en spectateurs, parce que le livrable de la journée est un Skill construit par chacun.",
      },
      {
        question: "Que faut-il préparer avant la session ?",
        answer:
          "Trois choses. Les comptes Claude de vos participants, pour que chacun travaille sur son poste. Une poignée de documents réels que nous utiliserons dans les exercices, choisis avec vous. Et la liste des tâches répétitives que vos équipes aimeraient voir disparaître, qui sert de matière aux Skills construits en séance.",
      },
    ],
  },
  {
    slug: "creation-publicite-ia",
    photo: {
      src: "/images/formations/lab-ia-equipe-crea.jpg",
      alt: "Session de formation créa au Lab IA : l'IA au service des équipes création",
    },
    name: "Création & Publicité : IA pour la Créa",
    seoTitle: "Formation IA pour la création et la publicité",
    seoDescription:
      "Formez vos équipes créa et pub à l'IA générative : images, vidéo, déclinaisons. Sur vos marques et vos formats, avec les outils du marché.",
    titre:
      "Création & Publicité : produire 5 fois plus, sans que ça se voie",
    categorie: "Métier",
    tagline:
      "Les volumes demandés aux équipes créa explosent. Les effectifs, non. L'IA absorbe la production, votre direction artistique garde la main.",
    resume:
      "Vos créatifs passent leurs journées à décliner au lieu de créer. Cette formation inverse le rapport : l'IA prend les déclinaisons et les variantes, vos équipes gardent le concept et la direction artistique. Le style de votre marque est traduit en instructions réutilisables dès la première session.",
    illustration: {
      src: "/images/3d/ampoule-checks.png",
      alt: "Création et publicité augmentées par l'IA",
    },
    tools: [TOOL.nanoBanana, TOOL.weavy],
    niveau: "Débutant → Intermédiaire",
    public: "Créatifs, designers, équipes marketing et communication",
    format: "Présentiel, distanciel ou hybride",
    duree: "Format sur-mesure, de la journée au parcours complet",
    prerequis: "Aucun prérequis technique",
    objectifs: [
      "Traduire la direction artistique de la marque en prompts reproductibles",
      "Produire une série de visuels à la charte pendant la formation, sur un vrai brief",
      "Monter le pipeline créatif complet dans Weavy, du brief à la livraison",
      "Décliner sur tous les canaux et mesurer le gain de production",
    ],
    programme: [
      {
        titre: "Les bases de la création IA",
        horaire: "9h00 – 10h30",
        items: [
          "Panorama des outils créatifs et de ce qu'ils savent vraiment faire",
          "Garder une direction artistique cohérente avec l'IA",
          "Atelier : les prompts visuels qui produisent votre style, pas du générique",
        ],
        livrable:
          "Votre kit de prompts DA : le style de votre marque, traduit en instructions réutilisables.",
      },
      {
        titre: "Générer visuels & contenus avec Nano Banana",
        horaire: "10h30 – 12h30",
        items: [
          "Produire des images et déclinaisons créatives sur vos briefs réels",
          "Itérer rapidement sur les concepts, sans perdre la main",
          "Respecter l'identité de marque à chaque génération",
        ],
        livrable:
          "Une série de visuels à votre charte, produits en séance sur un vrai brief.",
      },
      {
        titre: "Structurer un workflow créatif avec Weavy",
        horaire: "14h00 – 16h00",
        items: [
          "Intégrer l'IA dans le pipeline de production, du brief à la livraison",
          "Assembler et enchaîner les étapes créatives",
          "Atelier : monter le workflow de votre équipe, étape par étape",
        ],
        livrable:
          "Votre pipeline créatif monté dans Weavy, du brief à la livraison.",
      },
      {
        titre: "Décliner & industrialiser",
        horaire: "16h00 – 17h30",
        items: [
          "Adapter les créations à chaque canal (social, print, web)",
          "Accélérer les cycles de production sans sacrifier la qualité",
          "Mesurer le gain de temps et de volume, avant et après",
        ],
        livrable:
          "Un kit de déclinaisons multi-canal et vos indicateurs de production pour mesurer le gain.",
      },
    ],
    resultats: [
      { value: "x5", label: "cycles de production accélérés" },
      { value: "DA", label: "direction artistique cohérente préservée" },
      { value: "Multi-canal", label: "déclinaisons adaptées à chaque canal" },
    ],
    faq: [
      {
        question: "À qui s'adresse cette formation ?",
        answer:
          "Aux créatifs, designers et équipes marketing/communication qui veulent accélérer leur production sans sacrifier la qualité ni la cohérence de marque.",
      },
      {
        question: "Quels outils sont couverts ?",
        answer:
          "Nano Banana pour la génération de visuels et Weavy pour structurer le workflow créatif de bout en bout, du brief à la livraison.",
      },
      {
        question: "L'IA remplace-t-elle la direction artistique ?",
        answer:
          "Non. L'IA accélère la production, mais la direction artistique reste pilotée par vos équipes. La formation apprend justement à garder une DA cohérente tout en produisant plus vite.",
      },
    ],
  },
  {
    slug: "go-to-market-sales",
    photo: {
      src: "/images/formations/seminaire-equipe.png",
      alt: "Formation Go-to-Market & Sales en séminaire",
    },
    name: "Go-to-Market & Sales",
    seoTitle: "Formation IA pour vos équipes commerciales",
    seoDescription:
      "Prospection, qualification, relances : formez vos commerciaux à l'IA sur votre CRM et vos séquences réelles. Chaque participant repart avec ses automatisations.",
    titre:
      "Go-to-Market & Sales : 3 fois plus de prospection, sans embaucher un commercial de plus",
    categorie: "Métier",
    tagline:
      "Vos commerciaux passent plus de temps à chercher des contacts qu'à vendre. La machine d'acquisition augmentée inverse la proportion.",
    resume:
      "Des listes qui datent et des relances oubliées : la prospection manuelle plafonne vite. Cette formation monte votre machine d'acquisition avec Clay, FullEnrich et Lemlist. Votre première liste enrichie et votre première séquence sortent pendant la formation, sur votre vrai marché.",
    illustration: {
      src: "/images/3d/cible-flechette.png",
      alt: "Prospection et vente augmentées par l'IA",
    },
    tools: [TOOL.clay, TOOL.lemlist, TOOL.fullenrich],
    niveau: "Intermédiaire",
    public: "Équipes commerciales, marketing, growth, dirigeants",
    format: "Présentiel, distanciel ou hybride",
    duree: "Format sur-mesure, de la journée au parcours complet",
    prerequis: "Aucun prérequis technique",
    objectifs: [
      "Cartographier son marché et affiner son ICP avec l'IA",
      "Construire une liste de prospects enrichie pendant la formation, avec Clay et FullEnrich",
      "Rédiger et lancer une séquence multicanale personnalisée à l'échelle, avec Lemlist",
      "Piloter la machine : mesurer les taux de réponse et itérer",
    ],
    programme: [
      {
        titre: "La stratégie d'acquisition augmentée",
        horaire: "9h00 – 10h30",
        items: [
          "Cartographier votre marché et vos segments cibles avec l'IA",
          "Les leviers IA à chaque étape de votre cycle de vente",
          "Atelier : votre ICP affiné et vos segments priorisés",
        ],
        livrable:
          "Votre ciblage clarifié : ICP, segments prioritaires et plan d'attaque.",
      },
      {
        titre: "Enrichir et cibler avec Clay & FullEnrich",
        horaire: "10h30 – 12h30",
        items: [
          "Automatiser la collecte et l'enrichissement des données de prospects",
          "Détecter les signaux d'achat et prioriser les comptes",
          "Atelier : construire votre première liste enrichie, en direct",
        ],
        livrable:
          "Une liste de prospects qualifiée et enrichie, construite en séance sur votre marché.",
      },
      {
        titre: "Séquences personnalisées avec Lemlist",
        horaire: "14h00 – 16h00",
        items: [
          "Construire des séquences multicanales (email, LinkedIn)",
          "Personnaliser à grande échelle sans perdre en qualité",
          "Atelier : votre séquence rédigée, testée et prête à partir",
        ],
        livrable:
          "Votre première séquence multicanale prête à envoyer, sur vos vrais prospects.",
      },
      {
        titre: "Convertir et suivre",
        horaire: "16h00 – 17h30",
        items: [
          "Préparer ses rendez-vous commerciaux avec l'IA",
          "Améliorer le suivi et la relance, sans y passer ses soirées",
          "Piloter la performance de la machine d'acquisition",
        ],
        livrable:
          "Le playbook de votre machine d'acquisition : qui fait quoi, avec quel outil, mesuré comment.",
      },
    ],
    resultats: [
      { value: "x3", label: "de volume de prospection à qualité constante" },
      { value: "100%", label: "des messages personnalisés à grande échelle" },
      { value: "+conv.", label: "taux de conversion et de réponse en hausse" },
    ],
    faq: [
      {
        question: "À qui s'adresse cette formation ?",
        answer:
          "Aux équipes commerciales, marketing et growth, ainsi qu'aux dirigeants qui veulent industrialiser leur acquisition. Aucun prérequis technique n'est nécessaire.",
      },
      {
        question: "Quels outils sont couverts ?",
        answer:
          "Les outils de référence de la prospection augmentée : Clay et FullEnrich pour l'enrichissement de données, Lemlist pour les séquences multicanales personnalisées.",
      },
      {
        question: "La formation s'appuie-t-elle sur nos cas réels ?",
        answer:
          "Oui. Nous travaillons sur votre marché, vos personas et vos séquences réelles, pas sur des exemples génériques.",
      },
    ],
  },
  {
    slug: "microsoft-copilot",
    photo: {
      src: "/images/formations/masterclass-amphi-ecrans.png",
      alt: "Formation Microsoft Copilot, mise en pratique sur écrans",
    },
    name: "Microsoft Copilot",
    seoTitle: "Formation Microsoft Copilot en entreprise",
    seoDescription:
      "Passez de Copilot correcteur de texte à Copilot outil de travail : Word, Excel, Teams et Outlook, sur vos vrais documents et vos vraies réunions.",
    titre: "Microsoft Copilot : rentabiliser enfin les licences que vous payez déjà",
    categorie: "Métier",
    tagline:
      "Copilot est déployé, presque personne ne s'en sert. Une journée pour passer de la licence payée à l'outil utilisé.",
    resume:
      "La plupart des entreprises équipées de Copilot l'utilisent comme un correcteur amélioré. Cette formation le branche sur le vrai quotidien de vos équipes : documents Word, analyses Excel, présentations, emails et réunions Teams. Les exercices se font sur vos fichiers, et les gains se mesurent dès la semaine suivante.",
    illustration: {
      src: "/images/3d/outils-implementation.png",
      alt: "Maîtriser Microsoft Copilot en entreprise",
    },
    tools: [TOOL.copilot, TOOL.microsoft],
    niveau: "Débutant → Intermédiaire",
    public: "Salariés, managers, fonctions support",
    format: "Présentiel, distanciel ou hybride",
    duree: "Format sur-mesure, de la demi-journée à la journée",
    prerequis: "Disposer de licences Microsoft 365 Copilot",
    objectifs: [
      "Produire un document, une analyse Excel et une présentation avec Copilot, sur vos fichiers réels",
      "Traiter ses emails et capturer les décisions de réunion sans ressaisie",
      "Identifier les tâches à déléguer à Copilot, priorisées par gain de temps",
      "Mesurer les gains de productivité par équipe, avant et après",
    ],
    programme: [
      {
        titre: "Prendre en main Copilot",
        horaire: "9h00 – 10h30",
        items: [
          "Où trouver Copilot dans l'environnement Microsoft 365",
          "Les bons réflexes pour formuler ses demandes",
          "Ce que Copilot sait faire, et ses limites, démontré en direct",
        ],
        livrable:
          "Les réflexes de base installés : chaque participant a fait ses premières requêtes utiles.",
      },
      {
        titre: "Produire plus vite",
        horaire: "10h30 – 12h30",
        items: [
          "Rédiger et mettre en forme dans Word, sur vos documents réels",
          "Analyser et synthétiser des données dans Excel",
          "Atelier : générer une présentation PowerPoint à partir d'un de vos documents",
        ],
        livrable:
          "Un document, une analyse Excel et une présentation produits en séance sur vos fichiers.",
      },
      {
        titre: "Collaborer et communiquer",
        horaire: "14h00 – 16h00",
        items: [
          "Résumer et prioriser ses emails dans Outlook",
          "Capturer les décisions et actions dans Teams",
          "Atelier : préparer et débriefer une vraie réunion avec Copilot",
        ],
        livrable:
          "Votre routine réunions et emails augmentée : moins de saisie, plus de décisions capturées.",
      },
      {
        titre: "Automatiser le quotidien",
        horaire: "16h00 – 17h30",
        items: [
          "Identifier les tâches répétitives à déléguer à l'IA",
          "Gagner du temps sur la bureautique du quotidien",
          "Mesurer les gains de productivité par équipe",
        ],
        livrable:
          "La liste de vos tâches à déléguer à Copilot, priorisée par gain de temps estimé.",
      },
    ],
    resultats: [
      { value: "Licences", label: "Microsoft 365 enfin rentabilisées" },
      { value: "-tps", label: "sur les tâches bureautiques du quotidien" },
      { value: "Gains", label: "de productivité mesurables par équipe" },
    ],
    faq: [
      {
        question: "Faut-il déjà avoir Copilot pour suivre la formation ?",
        answer:
          "Oui, la formation se concentre sur Microsoft 365 Copilot. Elle est idéale pour les entreprises qui viennent de déployer les licences et veulent en tirer une valeur rapide.",
      },
      {
        question: "Quels outils Microsoft sont couverts ?",
        answer:
          "L'ensemble de la suite : Word, Excel, PowerPoint, Outlook et Teams. Nous adaptons les exercices aux outils les plus utilisés par vos équipes.",
      },
      {
        question: "Combien de temps pour voir des résultats ?",
        answer:
          "Les gains sont immédiats sur les tâches bureautiques du quotidien. L'objectif est une montée en compétence directement applicable dès la fin de la session.",
      },
    ],
  },
  {
    slug: "vibe-coding",
    photo: {
      src: "/images/formations/atelier-hands-on.png",
      alt: "Atelier Vibe Coding, les mains sur les outils",
    },
    name: "Vibe Coding",
    // « formation claude code » pèse 105 impressions en position 42, et rien
    // ne la visait : la requête est développeur, alors que « Maîtriser Claude »
    // s'adresse aux métiers. C'est cette page qui doit la porter, donc
    // « Claude Code » entre dans le title.
    seoTitle: "Formation Claude Code et Cursor pour vos équipes",
    seoDescription:
      "Vos profils métier pilotent Claude Code et Cursor en langage naturel et construisent leurs propres outils. Le premier sort de terre pendant la formation.",
    titre:
      "Vibe Coding : vos équipes métier construisent leurs propres outils, sans écrire une ligne de code",
    categorie: "Avancé",
    tagline:
      "L'outil dont votre équipe a besoin n'existe pas sur étagère. Maintenant, elle peut le construire elle-même.",
    resume:
      "Chaque équipe a son fichier Excel bricolé et sa liste d'outils rêvés que personne ne développera jamais. Le Vibe Coding change l'équation : vos profils métier pilotent Claude Code et Cursor en langage naturel, et construisent l'outil eux-mêmes. Le premier sort de terre pendant la formation.",
    illustration: {
      src: "/images/3d/marteau-build.png",
      alt: "Construire des outils avec l'IA",
    },
    tools: [TOOL.claudeCode, TOOL.cursor, TOOL.codex],
    niveau: "Intermédiaire → Avancé",
    public:
      "Profils métiers et opérationnels, product managers, ops qui veulent créer leurs propres outils",
    format: "Présentiel, distanciel ou hybride",
    duree: "Format sur-mesure, parcours en plusieurs sessions",
    prerequis:
      "Aisance avec les outils bureautiques, aucun prérequis en programmation",
    objectifs: [
      "Piloter Claude Code, Cursor et Codex en langage naturel, sans bagage technique",
      "Construire un outil métier fonctionnel pendant la formation",
      "Concevoir un agent qui prend en charge une vraie tâche répétitive",
      "Déployer ses créations, cadrer la sécurité et mesurer le ROI",
    ],
    programme: [
      {
        titre: "Les fondamentaux du Vibe Coding",
        horaire: "Session 1 · 3h",
        items: [
          "Comment fonctionne un assistant de code et comment lui parler",
          "Claude Code, Cursor, Codex : quand utiliser lequel, démonstré en direct",
          "Atelier : d'une idée à un premier outil fonctionnel, pendant la session",
        ],
        livrable:
          "Votre premier outil fonctionnel, construit en séance, zéro ligne de code écrite à la main.",
      },
      {
        titre: "Construire ses outils métier",
        horaire: "Session 2 · 3h",
        items: [
          "Prototyper une application utile à son équipe, sur un vrai besoin",
          "Itérer, corriger et améliorer sans blocage technique",
          "Bonnes pratiques pour des résultats fiables et maintenables",
        ],
        livrable:
          "Une application métier utilisable par votre équipe, avec la méthode pour en refaire.",
      },
      {
        titre: "Agents et automatisations",
        horaire: "Session 3 · 3h",
        items: [
          "Comprendre l'architecture d'un agent IA, sans jargon",
          "Automatiser des tâches complexes et répétitives",
          "Connecter l'IA à vos outils métier existants",
        ],
        livrable:
          "Un agent connecté à vos outils, qui prend en charge une tâche répétitive réelle.",
      },
      {
        titre: "Industrialiser et mesurer",
        horaire: "Session 4 · 3h",
        items: [
          "Déployer ses créations auprès de l'équipe",
          "Cadrer sécurité, qualité et coûts",
          "Mesurer le gain de productivité, avant et après",
        ],
        livrable:
          "Vos outils déployés, documentés, et un tableau de ROI mesuré sur chacun.",
      },
    ],
    resultats: [
      { value: "1er outil", label: "construit pendant la formation" },
      { value: "0 ligne", label: "de code écrite à la main" },
      { value: "ROI", label: "mesuré sur les automatisations déployées" },
    ],
    faq: [
      {
        question: "Faut-il savoir coder pour suivre Vibe Coding ?",
        answer:
          "Non. C'est justement le principe : construire des outils en pilotant l'IA par le langage naturel. Le programme s'adresse à des profils métier qui n'ont jamais codé mais veulent créer leurs propres solutions.",
      },
      {
        question: "Quels outils sont utilisés ?",
        answer:
          "Les assistants de code de référence : Claude Code, Cursor et Codex. Vous apprenez quand et comment utiliser chacun selon votre besoin.",
      },
      {
        question: "Que repart-on avec ?",
        answer:
          "Au minimum un outil ou prototype fonctionnel construit pendant la session, directement utilisable dans votre travail, et la méthode pour en créer d'autres en autonomie.",
      },
    ],
  },
] as const;

export function getFormation(slug: string): Formation | undefined {
  return formations.find((f) => f.slug === slug);
}

/** Formations autres que celle passée — pour le cross-sell en bas de page détail. */
export function getOtherFormations(slug: string): readonly Formation[] {
  return formations.filter((f) => f.slug !== slug);
}

/** Statistiques transverses affichées sur la page catalogue. */
export const formationStats: readonly FormationStat[] = [
  { value: "+10 000", label: "professionnels formés" },
  { value: "France & Maroc", label: "présentiel, distanciel ou hybride" },
  { value: "Sur-mesure", label: "chaque programme adapté à vos métiers" },
];

export type Formateur = {
  nom: string;
  role: string;
  /** Texte court (2-3 phrases) affiché quand la carte est ouverte. */
  bio?: string;
  photo: string;
  /** URL du profil LinkedIn — le bouton n'est affiché que si non vide. */
  linkedin?: string;
  /**
   * Logo d'ex-employeur affiché dans la carte ouverte.
   * Uniquement si l'entreprise est déjà mentionnée dans la bio publiée.
   */
  companyLogo?: string;
};

/** Formateurs experts — E-E-A-T. Photos réelles de l'équipe. */
export const formateurs: readonly Formateur[] = [
  {
    nom: "Othmane Halim",
    role: "Fondateur d'AI Makers",
    bio: "+200 missions IA. Expert transformation et stratégie IA.",
    photo: "/images/formateurs/othmane-halim.jpg",
    linkedin: "https://www.linkedin.com/in/othmanehalim/",
  },
  {
    nom: "Maneesh Behera",
    role: "COO d'AI Makers",
    bio: "Pilotage du delivery et des opérations sur les missions IA.",
    photo: "/images/formateurs/maneesh-behera.jpg",
    linkedin: "https://www.linkedin.com/in/maneesh-behera",
  },
  {
    nom: "Walid Boulanouar",
    role: "CTO AI Makers",
    bio: "Expert Claude, agents IA et automatisations.",
    photo: "/images/formateurs/walid-boulanouar.jpg",
    linkedin: "https://www.linkedin.com/in/walid-boulanouar",
  },
  {
    nom: "Othmane Khadri",
    role: "Go-to-Market & Growth",
    bio: "Spécialiste acquisition client et prospection augmentée par l'IA.",
    photo: "/images/formateurs/othmane-khadri.jpg",
    linkedin: "https://www.linkedin.com/in/othmane-khadri-b48162236",
  },
  {
    nom: "Adel Dahani",
    role: "Expert IA & Microsoft",
    bio: "Spécialiste déploiement Copilot en entreprise.",
    photo: "/images/formateurs/adel-dahani.png",
    linkedin: "https://www.linkedin.com/in/adeldahani",
  },
  {
    nom: "Edouard Willemsen",
    role: "Formateur IA",
    bio: "Consultant transformation IA et conduite du changement.",
    photo: "/images/formateurs/edouard-willemsen.jpg",
    linkedin: "https://www.linkedin.com/in/edouard-willemsen",
  },
  {
    nom: "Jim",
    role: "Directeur artistique IA",
    bio: "Directeur artistique spécialisé IA générative et création visuelle.",
    photo: "/images/formateurs/jim.jpg",
    linkedin: "https://www.linkedin.com/in/jimdigitart",
  },
  {
    nom: "Colin Blain",
    role: "Formateur IA",
    bio: "Spécialiste des clones IA et de la méthode second cerveau. Plus de 2 ans d'implémentation IA en entreprise.",
    photo: "/images/formateurs/colin-blain.jpg",
    linkedin: "https://www.linkedin.com/in/colin-blain-124a091a1",
  },
];

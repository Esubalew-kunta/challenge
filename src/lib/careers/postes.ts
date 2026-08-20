/**
 * Postes ouverts chez AI Makers.
 *
 * Déplacé de `app/(fr)/carrieres/` vers `lib/careers/` : la route anglaise a
 * besoin des mêmes types et du même index par slug.
 *
 * La page /carrieres lit ce tableau : tant qu'il est vide, elle affiche
 * l'état "candidature spontanée". Dès qu'un poste est ajouté ici,
 * il apparaît automatiquement dans le bloc "Postes ouverts" et génère sa
 * propre page /carrieres/[slug].
 *
 * Source du contenu : docs/hiring/01..05-*.md (annonces LinkedIn prêtes à
 * publier, FR canonique) plus une recherche dédiée (2026-08-12) sur des
 * annonces comparables (Anthropic, OpenAI, Palantir pour le FDE ; postings
 * IA/data/QA/growth pour les autres) et sur `src/lib/offer-pages/fde.ts`,
 * pour donner à chaque fiche la même profondeur que la page de référence
 * Forward Deployed Engineer : un quotidien texturé, une table de
 * compétences labellisée, et une comparaison avec les rôles voisins.
 * `screeningQuestions` alimente à la fois la page de détail (affichage) et
 * le formulaire de candidature (/carrieres/postuler), une seule source,
 * deux rendus.
 *
 * Cadrage remote/international, rémunération non publiée, et français
 * éliminatoire par poste : voir docs/hiring/README.md § Écarts tranchés.
 */

export type ScreeningQuestion = {
  /** Question posée telle quelle sur la page et dans le formulaire. */
  question: string;
  /** "boolean" = Oui/Non, "number" = saisie numérique avec seuil minimal. */
  type: "boolean" | "number";
  /** Seuil minimal attendu, uniquement pour type "number". */
  minValue?: number;
  /** Une réponse en dessous du seuil (ou "Non") écarte la candidature. */
  eliminatory: boolean;
};

/** Item "quotidien" : un titre court, et deux à trois phrases de texture. */
export type DayToDayItem = {
  title: string;
  body: string;
};

/** Une ligne de la table de profil, façon fiche de poste (Langages, Données...). */
export type ProfileRow = {
  category: string;
  detail: string;
};

/** Une ligne de la table "rôles voisins" : le titre qu'on confond avec celui-ci. */
export type AdjacentRole = {
  role: string;
  whatTheyDo: string;
  whoOwnsOutcome: string;
};

export interface JobRole {
  /** Intitulé du poste, ex. "AI Engineer" */
  title: string;
  /** Identifiant d'URL, ex. "ai-engineer", utilisé par /carrieres/[slug] */
  slug: string;
  /** Équipe ou verticale, ex. "Delivery", "Growth", "Ingénierie" */
  team: string;
  /** Lieu affiché sur les cartes, ex. "Remote, fuseau Paris/Casablanca" */
  location: string;
  /** À qui la personne est rattachée, affiché en haut de la page de détail. */
  reportsTo: string;
  /** Politique remote détaillée, affichée sur la page de détail. */
  remotePolicy: string;
  /** Type de contrat, ex. "Temps plein" */
  type: string;
  /** Une à deux phrases, affichées sur la carte du hub /carrieres */
  description: string;
  /** Accroche du h1 sur la page de détail */
  tagline: string;
  /** Paragraphe(s) d'intro avant les sections structurées */
  intro: string;
  /** Le quotidien du poste : cartes titre + texture, pas des puces plates. */
  dayToDay: readonly DayToDayItem[];
  /** Le déroulé des 90 premiers jours */
  first90Days: string;
  /** Le profil recherché, en table labellisée (Langages, Données...) */
  profileTable: readonly ProfileRow[];
  /** Ce qu'on ne cherche pas (une phrase de cadrage) */
  notLookingFor: string;
  /** Où ce poste se distingue des titres qu'on lui confond souvent */
  adjacentRoles: readonly AdjacentRole[];
  /** Compétences LinkedIn, 10 max */
  linkedinSkills: readonly string[];
  /** Français exigé (rôles au contact direct de clients francophones) */
  frenchRequired: boolean;
  /** Questions de présélection : la générale (expérience) + celle du poste */
  screeningQuestions: {
    experience: ScreeningQuestion;
    role: ScreeningQuestion;
  };
  /** Date de publication, format ISO, alimente JobPosting.datePosted */
  postedAt: string;
}

const REMOTE_POLICY_STANDARD =
  "À distance, dans un fuseau horaire compatible avec Paris et Casablanca (Europe, Maghreb ou proche), aucune obligation de résidence dans l'une des deux villes, avec des temps de présence ponctuels dans nos bureaux.";

export const jobOpenings: JobRole[] = [
  {
    title: "AI Engineer",
    slug: "ai-engineer",
    team: "Ingénierie",
    location: "Remote, fuseau Paris/Casablanca",
    reportsTo: "Walid Boulanouar, CTO",
    remotePolicy: REMOTE_POLICY_STANDARD,
    type: "Temps plein",
    description:
      "Le bâtisseur. RAG, systèmes multi-agents, orchestration : vous construisez dans les outils de nos clients, et ce que vous écrivez part en production.",
    tagline: "Vous construisez, ça part en production",
    intro:
      "Vous êtes le bâtisseur. RAG, systèmes multi-agents, orchestration : vous construisez dans les outils de nos clients, et ce que vous écrivez part en production.",
    dayToDay: [
      {
        title: "Vous branchez un agent sur un système qui n'a pas été conçu pour ça",
        body: "Un CRM ou un ERP client a dix ans d'historique et des champs vides là où l'agent attend une donnée propre. Vous décidez si on corrige en amont côté client ou si on contourne dans le code, et vous documentez pourquoi.",
      },
      {
        title: "Vous écrivez du code qui part en production, pas une démo",
        body: "Pipeline RAG, système multi-agents ou orchestration, sur la stack Claude, Claude Code, LangChain, Python, TypeScript déjà en place chez AI Makers. Ce qui sort de votre machine tourne devant de vrais utilisateurs la semaine suivante.",
      },
      {
        title: "Vous écrivez des évaluations avant d'ajouter une fonctionnalité",
        body: "Un système LLM ne renvoie jamais deux fois la même réponse : sans jeu de tests et seuils de régression, personne ne sait si une modification a amélioré ou cassé le système. C'est vous qui posez ces garde-fous.",
      },
      {
        title: "Vous regardez la facture avant qu'elle n'explose",
        body: "Un système qui marche en démo et coûte 40% de plus que prévu en production ne marche pas. Contrôle des coûts, choix de modèle, mise en cache : c'est votre problème, pas celui du client.",
      },
      {
        title: "Vous êtes d'astreinte quand ça casse",
        body: "Un système en production tombe un mardi soir : c'est vous qu'on appelle, et c'est vous qui réparez.",
      },
      {
        title: "Vous formez en construisant",
        body: "Une partie de votre temps se passe à expliquer à des équipes non techniques du client ce que fait le système et comment l'ajuster.",
      },
    ],
    first90Days:
      "Semaines 1-2, vous prenez en main un système déjà en production et vous le faites évoluer. À partir du mois 2, vous portez vos propres chantiers de bout en bout, sous la direction technique de Walid Boulanouar, notre CTO. Au mois 3, vous livrez chez un client en direct.",
    profileTable: [
      { category: "Langages", detail: "Python et TypeScript solides, SQL confortable" },
      {
        category: "Données",
        detail: "Capable de lire un schéma existant et d'en tirer un corpus RAG exploitable",
      },
      {
        category: "Architecture",
        detail: "API REST, intégrations CRM/ERP, cloud (AWS, GCP ou Azure)",
      },
      {
        category: "IA appliquée",
        detail:
          "RAG, multi-agents, orchestration, évaluation, contrôle des coûts, stack Claude/Claude Code/LangChain/n8n",
      },
      {
        category: "Terrain",
        detail: "A déjà mis un système en production et l'a maintenu, écrit clair",
      },
      {
        category: "Formation",
        detail: "2 à 8 ans en développement logiciel, dont une partie sur des systèmes IA",
      },
    ],
    notLookingFor:
      "Quelqu'un qui veut faire de la recherche. Ici on livre chez des clients, chaque semaine.",
    adjacentRoles: [
      {
        role: "ML Research Engineer",
        whatTheyDo: "Entraîne des modèles, R&D longue",
        whoOwnsOutcome: "Le labo porte le résultat",
      },
      {
        role: "Backend Developer généraliste",
        whatTheyDo: "Services métier classiques, logique déterministe",
        whoOwnsOutcome: "L'équipe produit porte le résultat",
      },
      {
        role: "Consultant IA avant-vente",
        whatTheyDo: "Recommande, documente, repart",
        whoOwnsOutcome: "Le client porte le résultat seul après son départ",
      },
      {
        role: "AI Engineer, AI Makers",
        whatTheyDo: "Construit dans les outils du client, astreinte incluse",
        whoOwnsOutcome: "Vous portez le résultat jusqu'à ce que ça tourne",
      },
    ],
    linkedinSkills: [
      "Python",
      "TypeScript",
      "Large Language Models (LLM)",
      "Retrieval-Augmented Generation (RAG)",
      "AI Agents",
      "LangChain",
      "n8n",
      "API REST",
      "Prompt Engineering",
      "SQL",
    ],
    frenchRequired: false,
    screeningQuestions: {
      experience: {
        question: "Combien d'années d'expérience en développement logiciel avez-vous ?",
        type: "number",
        minValue: 2,
        eliminatory: false,
      },
      role: {
        question:
          "Avez-vous déjà mis en production un système à base de LLM utilisé par des utilisateurs réels ?",
        type: "boolean",
        eliminatory: true,
      },
    },
    postedAt: "2026-08-12",
  },
  {
    title: "GTM & Growth Manager",
    slug: "gtm-growth-manager",
    team: "Growth",
    location: "Remote, fuseau Paris/Casablanca",
    reportsTo: "Othmane Halim, fondateur",
    remotePolicy: REMOTE_POLICY_STANDARD,
    type: "Temps plein",
    description:
      "Vous ouvrez le pipeline de bout en bout : outbound, inbound, contenu, jusqu'au diagnostic posé au calendrier. Le GEO est notre offre la plus en avance, vous serez dessus toutes les semaines.",
    tagline: "Vous ouvrez le pipeline, de bout en bout",
    intro:
      "Le produit fonctionne et les clients le disent. Ce qui manque, c'est quelqu'un dont c'est le métier d'amener les suivants.",
    dayToDay: [
      {
        title: "Vous êtes responsable du pipeline, du premier message au diagnostic réservé",
        body: "Comptes cibles, outbound, qualification d'inbound, suivi jusqu'à la réservation d'un audit AI Scan. S'il n'y a pas assez de diagnostics dans l'agenda un mois donné, c'est votre responsabilité, pas celle du fondateur, pas celle de la delivery.",
      },
      {
        title: "Vous portez l'acquisition GEO, notre offre la plus avancée",
        body: "Le cas Sage, 447 prompts suivis en continu, est notre meilleure preuve. Vous devez savoir la vendre à un dirigeant qui ne sait pas encore ce qu'est le GEO, et transformer une conversation de découverte en mandat payant.",
      },
      {
        title: "Vous faites vivre les outils déjà construits, vous ne repartez pas de zéro",
        body: "Playbook AI-First (48 pages), diagnostic de maturité IA, calculateur de ROI, audit GEO gratuit. Vous mesurez lequel convertit vraiment en rendez-vous, et coupez ou retravaillez ceux qui ne convertissent pas.",
      },
      {
        title: "Vous écrivez, ou faites écrire puis jugez, le contenu qui convertit",
        body: "Un post LinkedIn qui a de l'engagement mais ne génère aucun diagnostic réservé est un échec, même s'il « a bien marché ».",
      },
      {
        title: "Vous mesurez tout, sans équipe data pour le faire à votre place",
        body: "CAC, conversion à chaque étape, coût par diagnostic réservé, GEO comparé à l'acquisition classique : vous construisez vous-même les tableaux.",
      },
      {
        title: "Vous êtes la première recrue croissance d'une équipe de 10",
        body: "Pas de process GTM préexistant : les premières semaines, vous comprenez ce qui a déjà été testé auprès des clients autant que vous lancez de nouvelles actions. Vous posez les fondations (ICP, messaging, canaux) avant de scaler quoi que ce soit.",
      },
    ],
    first90Days:
      "Mois 1, vous apprenez l'offre en assistant à de vrais diagnostics : vous ne pouvez pas vendre ça de l'extérieur. Mois 2, vous reprenez le haut de tunnel et vous installez la mesure. Mois 3, vous portez un objectif de pipeline chiffré.",
    profileTable: [
      {
        category: "Canaux",
        detail: "Outbound B2B (LinkedIn, email), qualification d'inbound, juge vite quel canal scaler ou couper",
      },
      {
        category: "Mesure",
        detail:
          "Tableaux de pipeline autonomes (CAC, conversion par étape, coût par diagnostic) sans équipe data",
      },
      {
        category: "Contenu et GEO",
        detail:
          "Comprend le GEO comme discipline commerciale, sait le vendre à un dirigeant PME/ETI, juge un contenu sur sa conversion",
      },
      {
        category: "Vente",
        detail: "Porte des conversations avec des dirigeants francophones jusqu'à la réservation payante",
      },
      {
        category: "Autonomie",
        detail: "A déjà construit \"from scratch\" dans une petite structure, définit ses priorités sans process préétabli",
      },
    ],
    notLookingFor: "Quelqu'un qui pilote une agence. Ici, vous exécutez vous-même.",
    adjacentRoles: [
      {
        role: "Marketing Manager classique",
        whatTheyDo: "Marque, contenu, campagnes",
        whoOwnsOutcome: "La notoriété porte le résultat, rarement le pipeline",
      },
      {
        role: "Sales ou BDR",
        whatTheyDo: "Prospecte et close des leads déjà qualifiés",
        whoOwnsOutcome: "La conversion porte le résultat, pas la génération",
      },
      {
        role: "Chargé de compte agence",
        whatTheyDo: "Relation avec un client déjà signé",
        whoOwnsOutcome: "La rétention porte le résultat, pas l'acquisition",
      },
      {
        role: "GTM & Growth Manager, AI Makers",
        whatTheyDo: "Pipeline de bout en bout, mesure et itère",
        whoOwnsOutcome: "Vous portez le nombre de diagnostics réservés et le CAC",
      },
    ],
    linkedinSkills: [
      "Go-to-Market Strategy",
      "Demand Generation",
      "B2B Sales",
      "Outbound Prospecting",
      "SEO",
      "Content Marketing",
      "Marketing Analytics",
      "Lead Generation",
      "CRM",
      "Copywriting",
    ],
    frenchRequired: true,
    screeningQuestions: {
      experience: {
        question: "Combien d'années d'expérience en growth ou go-to-market B2B avez-vous ?",
        type: "number",
        minValue: 3,
        eliminatory: false,
      },
      role: {
        question:
          "Avez-vous déjà porté un objectif de pipeline ou de chiffre d'affaires B2B ?",
        type: "boolean",
        eliminatory: true,
      },
    },
    postedAt: "2026-08-12",
  },
  {
    title: "Data Engineer",
    slug: "data-engineer",
    team: "Ingénierie",
    location: "Remote, fuseau Paris/Casablanca",
    reportsTo: "Walid Boulanouar, CTO",
    remotePolicy: REMOTE_POLICY_STANDARD,
    type: "Temps plein",
    description:
      "Vous branchez les données de nos clients sur leurs systèmes IA : pipelines, intégrations, qualité des données. Le socle sur lequel tout le reste tient.",
    tagline: "Le socle sur lequel tout le reste tient",
    intro: "Un agent IA ne vaut que les données qu'on lui donne. C'est ce poste.",
    dayToDay: [
      {
        title: "Vous classez une source client en Bronze, Silver ou Gold",
        body: "Et découvrez que la moitié est inutilisable en l'état. Notre modèle sert justement à ça : faire remonter, dès l'audit, ce qui doit être nettoyé avant qu'un agent ne s'en serve.",
      },
      {
        title: "Vous branchez un export qu'on ne peut pas remplacer",
        body: "Le client a un vieil ERP, personne ne veut le changer, et le pipeline doit quand même tourner dessus chaque nuit.",
      },
      {
        title: "Vous construisez le corpus qui alimente un pipeline RAG",
        body: "Et en testez la qualité. Un corpus mal structuré donne des réponses fausses avec la même confiance qu'une réponse juste. Une partie de votre travail : trouver ces trous avant que le client ne les trouve en production.",
      },
      {
        title: "Vous déployez dans le compte cloud du client, pas dans le vôtre",
        body: "Nos systèmes tournent dans l'infrastructure du client (souveraineté des données, RGPD, AI Act). Ça veut dire apprendre son environnement (AWS, GCP ou Azure) plutôt que d'imposer le vôtre.",
      },
      {
        title: "Vous dites non à un client sur la qualité de ses données",
        body: "Et vous proposez la suite. Ce n'est pas un aparté technique : c'est une conversation avec quelqu'un qui a un dashboard bloqué et qui ne veut pas l'entendre.",
      },
      {
        title: "Vous construisez un agent de reporting qui pose un chiffre devant un décideur",
        body: "Chaque semaine, sans intervention manuelle.",
      },
    ],
    first90Days:
      "Mois 1, vous reprenez les pipelines d'un client en cours et vous apprenez comment nos systèmes consomment la donnée en aval. Mois 2, vous portez la couche data d'une mission complète. Mois 3, vous intervenez en amont, pendant la phase d'audit, là où se décide ce qui est faisable.",
    profileTable: [
      { category: "Langages", detail: "SQL excellent, Python solide" },
      {
        category: "Données",
        detail: "Modélisation, ETL/ELT, architecture Bronze/Silver/Gold, gros volumes",
      },
      {
        category: "Architecture",
        detail: "Intégrations CRM/ERP, cloud, requêtes qui tiennent en production",
      },
      {
        category: "IA appliquée",
        detail: "Corpus RAG et qualité de données, agents de reporting",
      },
      {
        category: "Terrain",
        detail: "Sait dire à un client que ses données ne sont pas prêtes, et proposer la suite",
      },
      { category: "Formation", detail: "3 à 8 ans en data engineering" },
    ],
    notLookingFor:
      "Quelqu'un qui veut un périmètre stable. Chaque client a une stack différente.",
    adjacentRoles: [
      {
        role: "Data Analyst",
        whatTheyDo: "Interroge la donnée déjà propre",
        whoOwnsOutcome: "Celui qui décide à partir du chiffre porte le résultat",
      },
      {
        role: "Analytics Engineer",
        whatTheyDo: "Transforme et modélise dans l'entrepôt",
        whoOwnsOutcome: "L'équipe data qui consomme les modèles porte le résultat",
      },
      {
        role: "Data Engineer généraliste, en interne",
        whatTheyDo: "Un seul stack, une seule entreprise",
        whoOwnsOutcome: "L'équipe data de cette entreprise porte le résultat",
      },
      {
        role: "Data Engineer, AI Makers",
        whatTheyDo: "Unifie des systèmes en silo chez chaque client, déploie dans son cloud",
        whoOwnsOutcome: "Vous portez le résultat, sur un stack différent à chaque mission",
      },
    ],
    linkedinSkills: [
      "SQL",
      "Python",
      "ETL",
      "Data Modeling",
      "Data Pipelines",
      "Data Warehousing",
      "API Integration",
      "Data Quality",
      "Cloud Platforms",
      "Apache Airflow",
    ],
    frenchRequired: false,
    screeningQuestions: {
      experience: {
        question: "Combien d'années d'expérience en data engineering avez-vous ?",
        type: "number",
        minValue: 3,
        eliminatory: false,
      },
      role: {
        question:
          "Avez-vous déjà construit et maintenu des pipelines de données en production ?",
        type: "boolean",
        eliminatory: true,
      },
    },
    postedAt: "2026-08-12",
  },
  {
    title: "QA Engineer",
    slug: "qa-engineer",
    team: "Ingénierie",
    location: "Remote, fuseau Paris/Casablanca",
    reportsTo: "Walid Boulanouar, CTO",
    remotePolicy: REMOTE_POLICY_STANDARD,
    type: "Temps plein",
    description:
      "Du QA de systèmes IA, pas du test d'interface. Évaluations de sorties LLM, non-régression sur les workflows, recette avant transfert : c'est vous qui décidez si un système part chez le client.",
    tagline: "200 systèmes en production, et il faut qu'ils tiennent",
    intro:
      "Passé un certain nombre de systèmes en production, la contrainte n'est plus de construire. C'est de garantir que ça tient. C'est ce poste, et il est nouveau. Précision utile : c'est du QA de systèmes IA, pas du test d'interface. Vous testez des sorties non déterministes, pas des boutons.",
    dayToDay: [
      {
        title: "Vous écrivez une suite d'évaluations, et elle ment",
        body: "Vous construisez un jeu de test pour l'agent support d'un client. Ça passe à 95%. Deux semaines plus tard, un utilisateur pose une question formulée différemment de tout ce qui figure dans votre jeu de test, et le système répond n'importe quoi. Votre travail : entretenir un jeu de test qui se rapproche du trafic réel, semaine après semaine.",
      },
      {
        title: "Vous cassez un workflow n8n pour de bonnes raisons",
        body: "Et vérifiez que rien d'autre ne casse avec lui. Un nœud est modifié pour corriger un bug ; une étape en aval qui dépendait d'un format de sortie précis échoue silencieusement. Vos tests de régression rattrapent ça avant le client.",
      },
      {
        title: "Vous êtes la dernière porte avant la livraison",
        body: "Jeu de test métier, cas limites du client, vérification que les sorties sont présentables devant un dirigeant qui va s'en servir pour décider. Vous dites oui ou non à la mise en production.",
      },
      {
        title: "Vous vérifiez un chiffre que l'entreprise répète partout",
        body: "« 7 heures par semaine récupérées en moyenne » est un argument commercial central, et une affirmation vérifiable. Vous construisez la méthode pour l'auditer projet par projet, et vous dites quand il ne tient pas pour un cas donné.",
      },
      {
        title: "Vous surveillez ce qui se dégrade sans prévenir",
        body: "Qualité qui baisse sur plusieurs semaines sans alerte, coût en tokens qui explose. Vous construisez les signaux qui rendent ces dérives visibles avant le client.",
      },
      {
        title: "Vous écrivez beaucoup, et pour être compris tout de suite",
        body: "Rapports de recette, notes de non-conformité, comptes-rendus de dérive : lisibles en trente secondes par quelqu'un qui n'a pas suivi le projet.",
      },
    ],
    first90Days:
      "Mois 1, vous auditez ce qui existe et vous nous dites où ça casse le plus souvent. Mois 2, vous installez le socle d'évaluation sur un système en production. Mois 3, aucun système ne part chez un client sans passer par votre recette.",
    profileTable: [
      {
        category: "Techniques d'évaluation",
        detail:
          "Golden datasets, rubriques de scoring, LLM-as-judge calibré contre annotation humaine, tests de régression",
      },
      {
        category: "Outils",
        detail:
          "Python solide, un framework d'éval (promptfoo, DeepEval ou équivalent), lecture et tests de workflows n8n, CI/CD",
      },
      {
        category: "Non-déterminisme",
        detail: "Raisonne en plages de qualité acceptable, distingue variation normale et vraie régression",
      },
      { category: "Écrit", detail: "Rapports clairs, lisibles par un non-technicien" },
      {
        category: "Terrain",
        detail:
          "3 à 8 ans QA, test engineering ou SDET, dont une partie sur des systèmes IA en production, à l'aise pour dire non sous pression",
      },
    ],
    notLookingFor:
      "Quelqu'un qui exécute des plans de test écrits par d'autres. Ici, vous écrivez la stratégie.",
    adjacentRoles: [
      {
        role: "QA ou testeur manuel généraliste",
        whatTheyDo: "Scénarios prédéfinis sur du déterministe",
        whoOwnsOutcome: "La couverture fonctionnelle porte le résultat",
      },
      {
        role: "MLOps ou Platform Engineer",
        whatTheyDo: "Infra qui fait tourner les modèles",
        whoOwnsOutcome: "La disponibilité technique porte le résultat",
      },
      {
        role: "Data Scientist ou ML Engineer",
        whatTheyDo: "Conçoit et entraîne les modèles",
        whoOwnsOutcome: "La performance du modèle en amont porte le résultat",
      },
      {
        role: "QA Engineer, AI Systems, AI Makers",
        whatTheyDo: "Construit les évaluations, décide go ou no-go",
        whoOwnsOutcome: "Vous portez la fiabilité des chiffres publiés",
      },
    ],
    linkedinSkills: [
      "Quality Assurance",
      "Test Automation",
      "Python",
      "LLM Evaluation",
      "Regression Testing",
      "API Testing",
      "CI/CD",
      "SQL",
      "Test Strategy",
      "Technical Documentation",
    ],
    frenchRequired: false,
    screeningQuestions: {
      experience: {
        question: "Combien d'années d'expérience en QA ou test engineering avez-vous ?",
        type: "number",
        minValue: 3,
        eliminatory: false,
      },
      role: {
        question:
          "Avez-vous déjà testé un système non déterministe : LLM, modèle ML, moteur de recommandation ?",
        type: "boolean",
        eliminatory: true,
      },
    },
    postedAt: "2026-08-12",
  },
  {
    title: "Forward Deployed Engineer",
    slug: "forward-deployed-engineer",
    team: "Delivery",
    location: "Remote, avec déplacements chez le client",
    reportsTo: "Walid Boulanouar, CTO",
    remotePolicy:
      "Basé à distance, dans un fuseau horaire compatible avec Paris et Casablanca (Europe, Maghreb ou proche), aucune obligation de résidence dans l'une des deux villes. Poste avec déplacements réguliers chez le client, une partie de la semaine.",
    type: "Temps plein",
    description:
      "Le cœur de notre offre. Vous êtes déployé dans l'équipe du client : vous allez à ses stand-ups, vous écrivez du code de production dans son environnement, et vous restez jusqu'à ce que ça tourne.",
    tagline: "Le poste au centre du jeu",
    intro:
      "Le FDE est le cœur de notre offre. Nous en déployons plus de 20 en entreprise. Un Forward Deployed Engineer est un ingénieur IA déployé directement dans l'équipe du client. Il comprend le problème depuis l'intérieur, là où le travail se fait, écrit du code de production, connecte l'IA aux systèmes existants, et reste jusqu'à ce que ça tourne.",
    dayToDay: [
      {
        title: "Vous êtes intégré à l'équipe du client",
        body: "Vous allez à ses stand-ups, vous apprenez son vocabulaire métier, et vous êtes onboardé deux semaines avant le kick-off pour lire ses process et prendre en main ses outils avant que le premier chantier ne s'ouvre.",
      },
      {
        title: "On vous branche",
        body: "Les systèmes existants du client ont vingt ans d'histoire et trois propriétaires successifs. Vous lisez ses API, ses exports, sa base, et vous reliez ce qui doit l'être. C'est la partie que personne ne montre en démo.",
      },
      {
        title: "Vous cadrez",
        body: "Le client arrive avec « il faudrait automatiser les comptes rendus ». Vous en sortez une spec, une estimation en jours, et un chiffre avant : vous ne recevez pas un cahier des charges, vous le construisez.",
      },
      {
        title: "Vous prototypez vite",
        body: "Un système utilisable en quelques jours, testé par les gens qui feront le travail, avant d'investir un mois.",
      },
      {
        title: "Vous formez les équipes du client pendant que vous construisez",
        body: "Jusqu'à ce qu'elles n'aient plus besoin de vous.",
      },
      {
        title: "Vous possédez le résultat",
        body: "Quand un système casse un mardi soir, c'est vous qu'on appelle, et c'est vous qui réparez.",
      },
    ],
    first90Days:
      "Vous êtes onboardé deux semaines avant le kick-off, le premier chantier démarre une fois le périmètre, les accès et les utilisateurs de test réunis. La moitié technique s'apprend dans les roadmaps publiques. La moitié terrain décide de tout et ne s'acquiert qu'en livrant chez des clients, toutes les semaines, sous la supervision de Walid Boulanouar, notre CTO.",
    profileTable: [
      {
        category: "Langages",
        detail: "Python, TypeScript, SQL. Vous basculez sur la stack du client en quelques jours",
      },
      { category: "Données", detail: "Modélisation, ETL, gros volumes, requêtes qui tiennent" },
      {
        category: "Architecture",
        detail: "API REST et GraphQL, cloud (AWS, GCP, Azure), infrastructure as code",
      },
      {
        category: "IA appliquée",
        detail: "RAG, systèmes multi-agents, orchestration, évaluation, contrôle des coûts",
      },
      {
        category: "Terrain",
        detail: "Recueil du besoin, arbitrage périmètre/vitesse/qualité, écrit clair, gestion des parties prenantes",
      },
      {
        category: "Formation",
        detail: "École d'ingénieurs ou master informatique, 2 à 8 ans d'expérience",
      },
    ],
    notLookingFor:
      "Quelqu'un qui veut coder seul, casque sur les oreilles. La moitié de ce métier se joue en face du client.",
    adjacentRoles: [
      {
        role: "Software Engineer",
        whatTheyDo: "Construit le produit, en interne",
        whoOwnsOutcome: "L'équipe produit porte le résultat",
      },
      {
        role: "Solutions Engineer",
        whatTheyDo: "Démontre le produit, en avant-vente",
        whoOwnsOutcome: "Le commercial porte le résultat",
      },
      {
        role: "Consultant IA classique",
        whatTheyDo: "Recommande, documente, repart",
        whoOwnsOutcome: "Le client porte le résultat seul après son départ",
      },
      {
        role: "Consultant d'ESN",
        whatTheyDo: "Exécute un périmètre staffé",
        whoOwnsOutcome: "Le contrat porte le résultat, pas la mission",
      },
      {
        role: "Forward Deployed Engineer, AI Makers",
        whatTheyDo: "Construit chez le client, dans ses outils, avec ses équipes",
        whoOwnsOutcome: "Vous portez le résultat, jusqu'à l'autonomie du client",
      },
    ],
    linkedinSkills: [
      "Python",
      "TypeScript",
      "SQL",
      "Large Language Models (LLM)",
      "AI Agents",
      "Solution Architecture",
      "API Integration",
      "Cloud Computing",
      "Stakeholder Management",
      "Client-Facing Engineering",
    ],
    frenchRequired: true,
    screeningQuestions: {
      experience: {
        question: "Combien d'années d'expérience en développement logiciel avez-vous ?",
        type: "number",
        minValue: 2,
        eliminatory: false,
      },
      role: {
        question:
          "Êtes-vous à l'aise pour travailler sur site chez un client, intégré à son équipe ?",
        type: "boolean",
        eliminatory: true,
      },
    },
    postedAt: "2026-08-12",
  },
];

export function getJobRole(slug: string): JobRole | undefined {
  return jobOpenings.find((job) => job.slug === slug);
}

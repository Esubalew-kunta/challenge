/**
 * Contenu de la fiche métier /metiers/ingenieur-ia.
 *
 * Raison d'être : c'est la seule poche de volume réel du champ FDE en français
 * (Ahrefs France, août 2026) — « ingénieur ia » 450/mois, « ingénieur
 * intelligence artificielle » 200, « salaire ingénieur ia » 150. Ces trois
 * requêtes sont d'intention CANDIDAT. Les laisser sur
 * /forward-deployed-engineer remplirait la page argent de chercheurs d'emploi.
 * Cette page les capte, sert les candidats vers /carrieres, et renvoie les
 * acheteurs vers la page FDE.
 *
 * Les grilles reprennent celles de `fde.ts` (§ fiche de poste) : un seul jeu
 * de chiffres sur le site, deux endroits où il s'affiche.
 */

export interface SalaryRow {
  level: string;
  experience: string;
  idf: string;
  regions: string;
}

export interface SkillGroup {
  title: string;
  items: readonly string[];
}

export interface PathStep {
  title: string;
  body: string;
}

export interface RoleDiff {
  role: string;
  focus: string;
  difference: string;
}

export const ingenieurIaContent = {
  hero: {
    badge: "Fiche métier",
    headline: "Ingénieur IA : le métier, les compétences et les salaires",
    subtitle:
      "Ce que fait un ingénieur en intelligence artificielle au quotidien, ce qu'il gagne en France en 2026, et les chemins qui y mènent. Écrit par une équipe qui en déploie plus de vingt chez ses clients.",
  },

  /** Paragraphe answer-first, adossé au schema Occupation. */
  definition: {
    title: "Qu'est-ce qu'un ingénieur IA ?",
    answer:
      "Un ingénieur IA conçoit, construit et met en production des systèmes qui utilisent l'intelligence artificielle : agents, moteurs de recherche sur documents internes, pipelines de traitement, applications métier. Il se distingue du data scientist, qui explore et modélise, par le fait qu'il livre du logiciel qui tourne. En France le poste se rencontre sous les intitulés ingénieur IA, ingénieur en intelligence artificielle, AI engineer ou machine learning engineer, pour un périmètre largement commun.",
    context:
      "Le métier a changé de nature en trois ans. Entraîner un modèle est devenu rare ; brancher des modèles existants sur les systèmes d'une entreprise est devenu l'essentiel du travail. C'est ce déplacement qui explique la tension actuelle sur les salaires, et l'apparition de rôles comme le Forward Deployed Engineer.",
  },

  daily: {
    title: "Ce qu'il fait de ses journées",
    intro:
      "Le quotidien varie selon le secteur, mais cinq blocs reviennent partout.",
    items: [
      {
        title: "Il intègre",
        body: "L'essentiel du temps passe à relier des systèmes qui n'ont pas été conçus pour se parler : API, exports, bases héritées, outils métier.",
      },
      {
        title: "Il construit des systèmes IA",
        body: "Recherche augmentée sur les documents de l'entreprise, agents autonomes, classification, extraction, génération. Du code qui part en production.",
      },
      {
        title: "Il évalue",
        body: "Un système IA se juge sur des jeux de tests, pas à l'œil. Mesurer la qualité des réponses et surveiller la dérive fait partie du poste.",
      },
      {
        title: "Il tient les coûts",
        body: "Chaque appel à un modèle coûte. Choisir le bon modèle par tâche, mettre en cache, surveiller la facture : compétence quotidienne.",
      },
      {
        title: "Il parle aux métiers",
        body: "Recueillir un besoin flou, arbitrer un périmètre, expliquer un arbitrage technique à une direction. C'est la partie qui départage les profils.",
      },
    ] satisfies readonly PathStep[],
  },

  skills: {
    title: "Les compétences attendues",
    intro:
      "La colonne technique s'apprend dans les roadmaps publiques. La colonne terrain s'acquiert en livrant, et c'est elle qui décide des salaires hauts.",
    groups: [
      {
        title: "Technique",
        items: [
          "Python, et de plus en plus TypeScript",
          "SQL, modélisation de données, ETL",
          "API REST et GraphQL, cloud AWS, GCP ou Azure",
          "Recherche augmentée (RAG), systèmes multi-agents, orchestration",
          "Évaluation des sorties, observabilité, contrôle des coûts",
          "Git, CI/CD, conteneurs",
        ],
      },
      {
        title: "Terrain",
        items: [
          "Recueil du besoin auprès d'un métier qui ne sait pas le formuler",
          "Arbitrage entre périmètre, vitesse et qualité",
          "Écrit clair : une note qu'un directeur financier comprend",
          "Gestion des parties prenantes, tenue de comité",
          "Chiffrage de l'impact avant de construire",
        ],
      },
    ] satisfies readonly SkillGroup[],
  },

  salary: {
    title: "Le salaire d'un ingénieur IA en France",
    intro:
      "Grilles constatées en 2026, salaire brut annuel hors variable. L'écart Paris / régions tourne autour de 15 %.",
    rows: [
      {
        level: "Junior",
        experience: "0 à 2 ans",
        idf: "45 000 à 55 000 €",
        regions: "38 000 à 48 000 €",
      },
      {
        level: "Confirmé",
        experience: "2 à 5 ans",
        idf: "55 000 à 75 000 €",
        regions: "48 000 à 65 000 €",
      },
      {
        level: "Senior",
        experience: "5 à 8 ans",
        idf: "75 000 à 100 000 €",
        regions: "65 000 à 85 000 €",
      },
      {
        level: "Lead / Staff",
        experience: "8 ans et +",
        idf: "100 000 à 130 000 €+",
        regions: "85 000 à 110 000 €",
      },
    ] satisfies readonly SalaryRow[],
    notes: [
      "Côté employeur, comptez environ 35 % de charges en plus : un senior payé 75 000 à 90 000 € selon l'entreprise et le rôle revient entre 101 000 et 122 000 € par an.",
      "Les laboratoires américains paient le même profil entre 385 000 et 1 million de dollars, ce qui explique la difficulté à garder un ingénieur une fois formé.",
      "Le variable dépasse rarement 10 % en PME et ETI françaises, sauf en startup où il prend la forme de BSPCE.",
    ],
  },

  paths: {
    title: "Comment on devient ingénieur IA",
    intro: "Trois chemins mènent au poste, et aucun n'est majoritaire.",
    items: [
      {
        title: "Depuis une école d'ingénieurs ou un master informatique",
        body: "Le chemin classique. Un cursus généraliste solide plus une spécialisation IA suffit à entrer sur un poste junior. Ce qui manque ensuite est toujours la même chose : l'expérience de la production.",
      },
      {
        title: "Depuis le développement logiciel",
        body: "Le chemin le plus rapide aujourd'hui. Un développeur senior couvre déjà quatre ou cinq des six blocs techniques attendus. Il lui reste l'ingénierie de l'IA appliquée, qui s'apprend en quelques mois de pratique réelle.",
      },
      {
        title: "Depuis la data ou le produit",
        body: "Un data engineer possède déjà les données ; un product manager technique possède déjà le cadrage et la relation métier. Dans les deux cas la bascule se joue sur le socle logiciel manquant.",
      },
    ] satisfies readonly PathStep[],
  },

  neighbours: {
    title: "Ingénieur IA et rôles voisins",
    rows: [
      {
        role: "Data scientist",
        focus: "Explore, modélise, produit des analyses",
        difference: "Livre des résultats et des modèles, rarement du logiciel en production",
      },
      {
        role: "Machine learning engineer",
        focus: "Entraîne et industrialise des modèles",
        difference: "Périmètre proche, centré sur l'entraînement plutôt que sur l'intégration",
      },
      {
        role: "Software engineer",
        focus: "Construit le produit de l'entreprise",
        difference: "Même métier de fond, sans la couche IA appliquée",
      },
      {
        role: "Forward Deployed Engineer",
        focus: "Construit chez le client, dans ses outils, avec ses équipes",
        difference: "Un ingénieur IA déployé à l'extérieur, qui porte le résultat de bout en bout",
      },
    ] satisfies readonly RoleDiff[],
  },

  faq: {
    title: "Questions fréquentes",
    items: [
      {
        question: "Quel est le salaire d'un ingénieur IA débutant en France ?",
        answer:
          "Entre 45 000 et 55 000 € bruts par an en Île-de-France, entre 38 000 et 48 000 € en régions. Ces montants correspondent à un profil sortant d'école d'ingénieurs ou de master informatique, sans expérience de production.",
      },
      {
        question: "Quel est le salaire d'un ingénieur IA senior ?",
        answer:
          "Entre 75 000 et 100 000 € bruts par an à Paris pour 5 à 8 ans d'expérience, entre 65 000 et 85 000 € en régions. Au-delà de huit ans, un lead ou un staff dépasse 100 000 € en Île-de-France. Côté employeur, ajoutez environ 35 % de charges : un senior payé 75 000 à 90 000 € revient entre 101 000 et 122 000 € par an.",
      },
      {
        question: "Quelles études pour devenir ingénieur IA ?",
        answer:
          "Une école d'ingénieurs ou un master en informatique reste la voie la plus courante, avec une spécialisation en intelligence artificielle ou en données. Mais une part croissante des ingénieurs IA vient du développement logiciel : un développeur senior couvre déjà l'essentiel du socle technique attendu.",
      },
      {
        question: "Ingénieur IA ou data scientist, quelle différence ?",
        answer:
          "Le data scientist explore les données, modélise et produit des analyses. L'ingénieur IA livre du logiciel qui tourne en production et se branche sur les systèmes existants. Les deux métiers se croisent, mais l'un est évalué sur des résultats d'analyse, l'autre sur des systèmes qui fonctionnent tous les jours.",
      },
      {
        question: "Le métier d'ingénieur IA recrute-t-il en France ?",
        answer:
          "Oui, et la tension est forte. Les offres se concentrent en Île-de-France, avec des pôles à Lyon, Toulouse, Nantes et Lille. Les profils capables de livrer en production, plutôt que de prototyper, sont les plus recherchés.",
      },
      {
        question: "Qu'est-ce qu'un Forward Deployed Engineer ?",
        answer:
          "C'est un ingénieur IA déployé directement dans l'équipe d'un client : il comprend le problème depuis l'intérieur, écrit du code de production, connecte l'IA aux systèmes existants et reste jusqu'à ce que ça tourne. Le modèle vient de Palantir et s'est répandu avec l'IA générative.",
      },
    ],
  },
} as const;

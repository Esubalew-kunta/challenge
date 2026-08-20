/**
 * Contenu de la page Forward Deployed Engineer.
 * Patterns empruntés à la référence golden-offer (ayautomate) :
 * badge de statut vivant, ancres chiffrées, mécanisme signature,
 * équipe incarnée, stack nommée, badges partenaires, FAQ.
 * Tous les chiffres viennent du contenu existant du site
 * (site-config.ts), rien d'inventé.
 */

export interface StackLogo {
  name: string;
  img: string;
}

export interface TeamMember {
  firstName: string;
  role: string;
  photo: string;
  stack: readonly StackLogo[];
}

export interface TimelineStep {
  period: string;
  title: string;
  description: string;
  gain: string;
}

export interface ComparisonRow {
  label: string;
  /** Colonne « Recruter en CDI » — l'alternative que la page discute partout ailleurs. */
  cdi: string;
  freelance: string;
  esn: string;
  fde: string;
}

/** Ligne d'un tableau à deux ou trois colonnes des nouvelles sections. */
export interface SpecRow {
  label: string;
  cells: readonly string[];
}

/** Item « titre en amorce + corps », pattern partagé par §A, §B et §C. */
export interface RunInItem {
  title: string;
  body: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface RoleProfile {
  /** Numéro affiché en tête de rangée (01, 02, 03). */
  number: string;
  title: string;
  /** Label court en uppercase, façon "THE EMBED" de la référence. */
  label: string;
  description: string;
  deliverables: readonly string[];
  logos: readonly StackLogo[];
  /** Badge "Le plus demandé" (pattern Most Popular de la référence). */
  popular?: boolean;
}

export interface CertBadge {
  /** Nom du badge affiché sous l'image. */
  name: string;
  /** Éditeur du badge, affiché en petit sous le nom. */
  issuer: string;
  /** Chemin de l'image (rendu défensif : tuile masquée si absente). */
  img: string;
}

export const fdeContent = {
  hero: {
    status: "Maximum 3 nouveaux clients par mois",
    headline: "Le poste d'ingénieur IA que vous n'aurez pas à recruter.",
    subtitle:
      "Forward Deployed Engineer : il comprend votre métier en deux semaines, construit dans vos outils, et forme vos équipes en même temps. Une personne, le travail de trois.",
    cta: { label: "Réserver mon diagnostic gratuit", href: "/contact" },
    microcopy: "Onboardé sur votre métier 2 semaines avant le jour 1.",
  },

  proof: {
    kicker: "Ils travaillent avec nos ingénieurs",
    /** Logos des entreprises accompagnées par nos ingénieurs (roster AY).
        `invert` : logo blanc à l'origine, inversé sur fond clair. */
    companyLogos: [
      { name: "Ronin Global", img: "/images/clients-fde/ronin-global.webp" },
      {
        name: "FleetForward",
        img: "/images/clients-fde/fleetforward-logo.webp",
        invert: true,
      },
      { name: "Untaylored", img: "/images/clients-fde/untaylored.webp" },
      { name: "Neoday", img: "/images/clients-fde/neoday.webp" },
      { name: "HelloCustomer", img: "/images/clients-fde/hello-customer.webp" },
      { name: "AmbryHill", img: "/images/clients-fde/ambry-hill.svg" },
      { name: "ThinkONE", img: "/images/clients-fde/thinkone.webp" },
      {
        name: "Addictest",
        img: "/images/clients-fde/addictest.svg",
        invert: true,
      },
      {
        name: "Shem's Publicité",
        img: "/images/clients-fde/shems-pub.webp",
        boost: true,
      },
      { name: "Wearview", img: "/images/clients-fde/wearview.webp" },
      { name: "Emprende.cl", img: "/images/clients-fde/emprende-logo.webp" },
      { name: "Kateb", img: "/images/clients-fde/kateb.webp" },
      { name: "EasyClic", img: "/images/clients-fde/easyclickweb.svg" },
      { name: "Dentakay", img: "/images/clients-fde/dentakay-logo.svg" },
      { name: "Humanoidz", img: "/images/clients-fde/humanoidz.webp" },
      { name: "Earleads", img: "/images/clients-fde/earleads.avif" },
    ],
    stat: {
      value: "7h",
      suffix: "/sem",
      label: "récupérées par collaborateur",
      detail:
        "Saisie, reporting, synthèses, relances. Chaque système est livré avec un chiffre avant et un chiffre après. Du temps mesuré, poste par poste.",
    },
  },

  definition: {
    badge: "Le modèle",
    title: "Qu'est-ce qu'un Forward Deployed Engineer ?",
    /** Passage answer-first — le paragraphe citable par Google et les moteurs IA. */
    answer:
      "Un Forward Deployed Engineer (FDE) est un ingénieur IA déployé directement dans l'équipe du client. Il comprend le problème depuis l'intérieur, là où le travail se fait, écrit du code de production, connecte l'IA aux systèmes existants et reste jusqu'à ce que ça tourne. Le modèle a été inventé par Palantir il y a vingt ans ; l'IA générative l'a remis au centre du jeu.",
    why: "95 % des pilotes IA en entreprise ne produisent aucun retour mesurable (étude MIT, 2025). Les modèles tiennent. C'est le déploiement qui lâche. Chaque environnement d'entreprise est compliqué à sa façon, et aucun logiciel sur étagère ne s'y branche tout seul. Il faut quelqu'un dans l'équipe, qui possède le résultat.",
    stats: [
      {
        figure: "95 %",
        label: "des pilotes IA échouent en entreprise",
        detail:
          "Étude MIT, 2025. La cause tient au dernier kilomètre du déploiement, précisément le travail d'un FDE.",
      },
      {
        figure: "×8",
        label: "les offres d'emploi FDE en un an",
        detail:
          "Offres Indeed multipliées par 8 entre avril 2025 et avril 2026. OpenAI, Anthropic et Google recrutent des FDE, y compris à Paris, comme Mistral et H Company.",
      },
      {
        figure: "385 K$ à 1 M$",
        label: "la rémunération d'un FDE dans les labs IA",
        detail:
          "C'est le profil le plus disputé du marché. À ce prix, presque aucune entreprise française ne peut le recruter. Notre modèle consiste à en déployer un.",
      },
    ],
  },

  /**
   * §A — la fiche de poste, juste après la définition.
   * Répond à « à quoi ressemble cette personne » avec le vocabulaire d'une
   * annonce, pour que l'acheteur puisse se représenter le recrutement qu'il
   * s'apprête à ne pas faire. La liste d'outils est volontairement absente :
   * la section « La stack » la détaille six sections plus bas.
   */
  jobSpec: {
    badge: "La fiche de poste",
    title: "La fiche de poste que vous n'aurez pas à écrire",
    anchor: "fiche-de-poste",
    intro:
      "Ouvrez une annonce d'ingénieur IA senior. Vous y lirez une pile technologique, un niveau d'études, une fourchette de salaire. La journée type y figure rarement, et c'est justement elle que vous achetez.",
    intro2:
      "Alors voici la nôtre, écrite comme si vous recrutiez. Si vous décidez ensuite de recruter pour de vrai, prenez-la. Elle vous appartient autant que le reste.",

    dayToDayTitle: "Ce qu'il fait de ses journées",
    dayToDayIntro: "Six choses reviennent chaque semaine, chez tous nos clients.",
    dayToDay: [
      {
        title: "Il branche",
        body: "Vos systèmes existants ont vingt ans d'histoire et trois propriétaires successifs. Il lit vos API, vos exports, votre base, et il relie ce qui doit l'être. C'est la partie que personne ne met dans une démo.",
      },
      {
        title: "Il écrit du code qui part en production",
        body: "Pipelines de données, applications internes, agents. Sur la stack qu'il maîtrise déjà en arrivant, celle que vous trouverez plus bas sur cette page.",
      },
      {
        title: "Il cadre",
        body: "Vous arrivez avec « il faudrait automatiser les comptes rendus ». Il en ressort une spec, une estimation en jours, et un chiffre avant.",
      },
      {
        title: "Il prototype vite",
        body: "Un système utilisable en quelques jours, testé par les gens qui feront le travail, avant d'investir un mois.",
      },
      {
        title: "Il remonte",
        body: "Ce que le terrain apprend repart dans nos playbooks, et redescend chez les autres clients. Vous héritez de ce que les autres ont appris avant vous.",
      },
      {
        title: "Il possède le résultat",
        body: "Quand un système casse un mardi soir, c'est lui qu'on appelle, et c'est lui qui répare.",
      },
    ] satisfies readonly RunInItem[],

    profileTitle: "Le profil, en clair",
    profile: [
      {
        label: "Langages",
        cells: ["Python, TypeScript, SQL. Bascule sur votre stack en quelques jours"],
      },
      {
        label: "Données",
        cells: ["Modélisation, ETL, gros volumes, requêtes qui tiennent"],
      },
      {
        label: "Architecture",
        cells: [
          "API REST et GraphQL, cloud (AWS, GCP, Azure), infrastructure as code",
        ],
      },
      {
        label: "IA appliquée",
        cells: [
          "RAG, systèmes multi-agents, orchestration, évaluation, contrôle des coûts",
        ],
      },
      {
        label: "Terrain",
        cells: [
          "Recueil du besoin, arbitrage périmètre/vitesse/qualité, écrit clair, gestion des parties prenantes",
        ],
      },
      {
        label: "Formation",
        cells: ["École d'ingénieurs ou master informatique, 2 à 8 ans d'expérience"],
      },
    ] satisfies readonly SpecRow[],
    profileNote:
      "La moitié technique s'apprend dans les roadmaps publiques. La moitié terrain décide de tout, et elle ne s'acquiert qu'en livrant chez des clients. Nos ingénieurs le font toutes les semaines, sous la supervision de Walid.",

    salaryTitle: "Ce que ça vaut sur le marché français",
    salaryIntro:
      "Grilles constatées pour un poste équivalent, salaire brut annuel, hors variable.",
    salaryHeaders: ["Expérience", "Paris / Île-de-France", "Régions"],
    salary: [
      { label: "Junior, 0 à 2 ans", cells: ["45 000 à 55 000 €", "38 000 à 48 000 €"] },
      { label: "Confirmé, 2 à 5 ans", cells: ["55 000 à 75 000 €", "48 000 à 65 000 €"] },
      { label: "Senior, 5 à 8 ans", cells: ["75 000 à 100 000 €", "65 000 à 85 000 €"] },
      {
        label: "Lead / Staff, 8 ans et +",
        cells: ["100 000 à 130 000 €+", "85 000 à 110 000 €"],
      },
    ] satisfies readonly SpecRow[],
    salaryNote:
      "Chargé à environ 35 %, un senior payé 75 000 à 90 000 € selon l'entreprise et le rôle vous coûte entre 101 000 et 122 000 € par an. Dans les labs américains le même profil se paie entre 385 000 et 1 million de dollars, ce qui explique pourquoi il devient difficile à garder une fois formé.",

    neighboursTitle: "Où il se distingue des rôles voisins",
    neighboursHeaders: ["Rôle", "Ce qu'il fait", "Qui porte le résultat"],
    neighbours: [
      { label: "Software engineer", cells: ["Construit le produit, en interne", "L'équipe produit"] },
      {
        label: "Solutions engineer",
        cells: ["Démontre le produit, en avant-vente", "Le commercial"],
      },
      { label: "Consultant IA", cells: ["Recommande, documente, repart", "Vous"] },
      { label: "Consultant d'ESN", cells: ["Exécute un périmètre staffé", "Le contrat"] },
      {
        label: "Forward Deployed Engineer",
        cells: ["Construit chez vous, dans vos outils, avec vos équipes", "Lui"],
      },
    ] satisfies readonly SpecRow[],
  },

  problem: {
    badge: "Le problème",
    title: "Recruter un ingénieur IA senior : long, cher, risqué.",
    intro:
      "Vous savez ce qu'il vous faut : quelqu'un qui construit. Le marché vous répond avec des CV, des préavis et des promesses.",
    anchors: [
      {
        figure: "6 à 12 mois",
        label: "pour recruter un expert IA senior",
        detail:
          "Vous rédigez la fiche de poste, vous sourcez, vous faites passer les entretiens, vous attendez le préavis. Pendant tout ce temps, personne ne construit.",
      },
      {
        figure: "70 000 €+/an",
        label: "de salaire fixe, soit 95 à 145 K€ chargés",
        detail:
          "Vous payez avant la première ligne de code. Et rien ne garantit qu'un seul système tournera en production.",
      },
      {
        figure: "1 erreur",
        label: "de casting, et tout est à refaire",
        detail:
          "Un mauvais recrutement sur ce poste et vous repartez à zéro : nouveau sourcing, nouveau préavis, six mois de plus.",
      },
    ],
  },

  mechanism: {
    badge: "Le mécanisme",
    title: "Il arrive avec deux cents systèmes déjà déployés.",
    intro:
      "Le jour 1, votre ingénieur ouvre la boîte à outils du cabinet : l'intelligence d'appels qui analyse nos propres calls, le cockpit qui briefe notre CEO chaque matin, le suivi qui score la santé de chaque mission. Plus de 200 systèmes déjà déployés et les playbooks qui vont avec : il adapte ce qui tourne déjà.",
    footnote:
      "On les construit pour nous d'abord. Un système qui ne tient pas chez nous n'arrive jamais chez vous.",
  },

  team: {
    badge: "L'équipe",
    title: "Les ingénieurs derrière le modèle",
    intro:
      "Des ingénieurs nommés, que vous rencontrez avant de signer. Ils construisent tous les jours, chez nous et chez nos clients, encadrés en direct par Walid, notre CTO.",
    members: [
      {
        firstName: "Walid",
        role: "CTO",
        photo: "/images/team/walid.jpg",
        stack: [
          { name: "Claude", img: "/images/stack/claude-color.svg" },
          { name: "n8n", img: "/images/stack/n8n-color.svg" },
          { name: "Notion", img: "/images/stack/notion-color.svg" },
          { name: "Vercel", img: "/images/stack/vercel-color.svg" },
        ],
      },
      {
        firstName: "Esubalew Kunta",
        role: "AI Engineer",
        photo: "/images/team/kunta.jpg",
        stack: [
          { name: "Claude", img: "/images/stack/claude-color.svg" },
          { name: "n8n", img: "/images/stack/n8n-color.svg" },
          { name: "Notion", img: "/images/stack/notion-color.svg" },
          { name: "Microsoft 365", img: "/images/stack/microsoft-color.svg" },
        ],
      },
      {
        firstName: "Yosef",
        role: "AI Engineer",
        photo: "/images/team/yosef-dejene.jpg",
        stack: [
          { name: "Claude", img: "/images/stack/claude-color.svg" },
          { name: "n8n", img: "/images/stack/n8n-color.svg" },
          { name: "Notion", img: "/images/stack/notion-color.svg" },
          { name: "Vercel", img: "/images/stack/vercel-color.svg" },
        ],
      },
      {
        firstName: "Meek",
        role: "AI Engineer",
        photo: "/images/team/meek-rand.jpg",
        stack: [
          { name: "Claude", img: "/images/stack/claude-color.svg" },
          { name: "n8n", img: "/images/stack/n8n-color.svg" },
          { name: "Notion", img: "/images/stack/notion-color.svg" },
          { name: "Microsoft 365", img: "/images/stack/microsoft-color.svg" },
        ],
      },
    ] satisfies readonly TeamMember[],
  },

  roles: {
    badge: "Les profils",
    title: "Les profils qu'on forme et qu'on source",
    intro:
      "On forme et on source les meilleurs profils IA. Trois rôles, un seul standard : livrer en production.",
    popularBadge: "Le plus demandé",
    items: [
      {
        number: "01",
        title: "AI Delivery Lead",
        label: "Le chef d'orchestre",
        description:
          "Il pilote la mission de bout en bout et traduit vos priorités business en systèmes livrés. C'est lui qui tient le rythme, semaine après semaine.",
        deliverables: ["Roadmap tenue", "Arbitrages ROI", "Comité hebdo"],
        logos: [
          { name: "Notion", img: "/images/stack/notion-color.svg" },
          { name: "Slack", img: "/images/stack/slack-color.svg" },
          { name: "Claude", img: "/images/stack/claude-color.svg" },
        ],
      },
      {
        number: "02",
        title: "AI Engineer",
        label: "Le bâtisseur",
        description:
          "RAG, systèmes multi-agents, orchestration : il construit dans vos outils, sur vos vraies données. Ce qu'il écrit part en production.",
        deliverables: [
          "Agents en production",
          "Intégrations à votre stack",
          "Playbooks documentés",
        ],
        logos: [
          { name: "Claude", img: "/images/stack/claude-color.svg" },
          { name: "n8n", img: "/images/stack/n8n-color.svg" },
          { name: "OpenAI", img: "/images/stack/openai-color.svg" },
        ],
        popular: true,
      },
      {
        number: "03",
        title: "LLMOps Engineer",
        label: "Le moteur",
        description:
          "Il fait tourner : déploiement, monitoring, contrôle des coûts. C'est lui qui transforme un POC en produit.",
        deliverables: [
          "Déploiement fiable",
          "Monitoring et alertes",
          "Coûts maîtrisés",
        ],
        logos: [
          { name: "Claude", img: "/images/stack/claude-color.svg" },
          {
            name: "Microsoft Teams",
            img: "/images/stack/microsoftteams-color.svg",
          },
          { name: "n8n", img: "/images/stack/n8n-color.svg" },
        ],
      },
    ] satisfies readonly RoleProfile[],
  },

  stack: {
    badge: "La stack",
    title: "Les outils qu'il maîtrise en arrivant",
    intro:
      "Zéro montée en compétence sur votre facture. Il a déjà passé des centaines d'heures sur chacun de ces outils, sur de vraies missions.",
    tools: [
      {
        name: "Claude Code",
        img: "/images/stack/claude-color.svg",
        line: "Son poste de travail. C'est ici que vos agents et vos outils internes s'écrivent, tous les jours.",
      },
      {
        name: "Cursor",
        img: "/images/stack/cursor-color.svg",
        line: "L'IDE augmenté par l'IA. Vos outils internes livrés en jours.",
      },
      {
        name: "Claude Agent SDK",
        img: "/images/stack/claude.svg",
        line: "Le framework d'agents d'Anthropic : des agents autonomes, branchés sur vos données et vos règles métier.",
      },
      {
        name: "n8n",
        img: "/images/stack/n8n-color.svg",
        line: "Vos outils branchés entre eux. Les données circulent, plus personne ne les recopie.",
      },
      {
        name: "LangChain",
        img: "/images/stack/langchain-color.svg",
        line: "Vos agents RAG : ils répondent depuis vos documents et vos données à vous.",
      },
      {
        name: "GitHub",
        img: "/images/stack/github-color.svg",
        line: "Chaque système versionné, revu et déployé proprement. Le code vit chez vous.",
      },
    ],
  },

  timeline: {
    badge: "Le déroulé",
    title: "Concrètement, semaine par semaine",
    steps: [
      {
        period: "Semaines -2 à 0",
        title: "Il apprend votre métier avant d'arriver",
        description:
          "Deux semaines avant le kick-off, il est déjà au travail : il lit vos process, apprend votre vocabulaire, prend en main vos outils. Le jour 1, il sait déjà comment vous travaillez.",
        gain: "Zéro journée passée à lui expliquer votre métier.",
      },
      {
        period: "Premier chantier",
        title: "Il rejoint vos points du matin et ouvre le premier chantier",
        description:
          "Le cadrage précède la construction. Le premier système se construit ensuite directement dans vos workflows, avec vos équipes.",
        gain: "Un chantier ouvert une fois le périmètre, les accès et les utilisateurs de test réunis.",
      },
      {
        period: "Chaque mois",
        title: "1 à 2 systèmes partent en production",
        description:
          "Chaque système est livré avec un chiffre avant et un chiffre après. Ce qui ne produit pas de résultat est repris jusqu'à ce que ça tourne.",
        gain: "Un impact mesuré à chaque livraison.",
      },
      {
        period: "Chaque semaine",
        title: "2h de formation, les mains sur les systèmes",
        description:
          "Il construit avec les gens qui utiliseront le système. Chaque semaine, il forme vos équipes 2 heures sur les systèmes qu'elles utilisent réellement. Les mains dessus, jamais sur des slides.",
        gain: "Vos équipes montent en compétence pendant que les systèmes se construisent.",
      },
      {
        period: "À 6 mois",
        title: "Vos équipes font tourner les systèmes sans lui",
        description:
          "Les systèmes tournent, les playbooks sont écrits, vos référents sont formés. Tout vous appartient. L'objectif tient en un mot : autonomie.",
        gain: "Zéro dépendance le jour où l'ingénieur repart.",
      },
    ] satisfies readonly TimelineStep[],
    ctaPrompt:
      "Vous voulez savoir ce qu'il construirait chez vous en premier ?",
  },

  /**
   * §C — former vos équipes, juste après le déroulé.
   * Décision produit (2026-08-04) : ce n'est pas un produit à part. La section
   * explique en quoi consiste le métier et comment les 2 heures hebdomadaires
   * déjà comprises dans la mission le transmettent, puis renvoie au catalogue
   * de formations existant. Aucune offre nouvelle n'est vendue ici.
   */
  training: {
    badge: "La formation",
    title: "Vos ingénieurs peuvent apprendre ce métier. On le leur apprend.",
    anchor: "former-vos-equipes",
    intro:
      "Les 2 heures de formation par semaine existent déjà dans chaque mission. Elles ne s'adressent pas qu'aux utilisateurs : vos développeurs et vos product managers y apprennent le métier lui-même.",

    gapTitle: "Ce qui manque à vos développeurs est plus court que vous ne le croyez",
    gap: "Regardez la carte de compétences publique du métier. La colonne technique tient en six blocs : Linux, front, back, algorithmique et system design, ingénierie de l'IA, DevOps. Vos développeurs seniors en couvrent déjà quatre ou cinq.",
    gapKicker:
      "Ce qui reste tient en quatre compétences de terrain, et c'est là que se joue le métier.",

    skillsHeaders: ["Compétence", "Ce que ça veut dire concrètement"],
    skills: [
      {
        label: "Recueil et cadrage",
        cells: [
          "Transformer « il faudrait qu'on gagne du temps » en un périmètre livrable en trois semaines",
        ],
      },
      {
        label: "Arbitrage",
        cells: [
          "Choisir entre périmètre, vitesse et qualité devant un métier qui veut les trois",
        ],
      },
      {
        label: "Sens des affaires",
        cells: ["Chiffrer l'impact avant de construire, et refuser ce qui ne se chiffre pas"],
      },
      {
        label: "Communication",
        cells: [
          "Écrire une note qu'un directeur financier comprend, tenir un comité, dire non proprement",
        ],
      },
    ] satisfies readonly SpecRow[],
    skillsNote:
      "Ces quatre-là ne s'apprennent dans aucune roadmap. Elles s'acquièrent en livrant sous contrainte, devant un client, avec quelqu'un d'expérimenté à côté. C'est ce qui se passe pendant une mission.",

    howTitle: "Comment vos équipes les acquièrent pendant la mission",
    how: [
      {
        title: "Les mains sur vos systèmes",
        body: "Les 2 heures hebdomadaires portent sur ce que votre ingénieur construit cette semaine-là, chez vous, avec vos données.",
      },
      {
        title: "En binôme sur un vrai chantier",
        body: "Vos développeurs cadrent et livrent à côté de lui. La revue de code passe par notre CTO, comme pour nos propres ingénieurs.",
      },
      {
        title: "Les playbooks écrits par eux",
        body: "Ce qu'ils documentent devient votre référentiel. À la fin de la mission, ils tiennent le rythme sans nous.",
      },
    ] satisfies readonly RunInItem[],

    outro:
      "Si ce sont vos équipes que vous voulez faire monter, plutôt qu'un ingénieur de plus, nos formations en entreprise couvrent le socle technique et les usages.",
  },

  comparison: {
    badge: "La comparaison",
    title: "FDE vs les alternatives",
    rows: [
      {
        label: "Ce que vous achetez",
        cdi: "Un poste, payé avant la première ligne de code",
        freelance: "Des jours facturés",
        esn: "Des consultants loin de votre terrain",
        fde: "Un ingénieur intégré à votre équipe, un résultat mesuré au KPI",
      },
      {
        label: "Le démarrage",
        cdi: "6 à 12 mois de recrutement, puis un préavis à purger",
        freelance: "Quand son planning se libère",
        esn: "Quand le staffing le décide",
        fde: "Onboardé 2 semaines avant le kick-off, cadrage puis construction",
      },
      {
        label: "L'encadrement",
        cdi: "À vous de l'assurer, sur un métier que vous découvrez",
        freelance: "Il est seul face au problème",
        esn: "Un manager loin du terrain",
        fde: "Encadré en direct par notre CTO, adossé à 200+ systèmes déployés",
      },
      {
        label: "La formation de vos équipes",
        cdi: "Un budget à part, quand son planning le permet",
        freelance: "Rarement incluse",
        esn: "Un projet facturé à part",
        fde: "2h de formation hands-on par semaine, incluses",
      },
      {
        label: "Ce qui vous reste",
        cdi: "Tout, aussi longtemps qu'il reste",
        freelance: "Le savoir repart avec lui",
        esn: "Des livrables techniques",
        fde: "Tout vous appartient : systèmes, playbooks, équipes formées",
      },
      {
        label: "L'engagement",
        cdi: "Un contrat de travail, et le risque de casting",
        freelance: "Engagement de moyens uniquement",
        esn: "Une obligation de moyens",
        fde: "Un résultat mesuré au KPI, système par système",
      },
    ] satisfies readonly ComparisonRow[],
  },

  /**
   * §B — externe ou interne, juste après les deux chronologies.
   * Répond frontalement à l'objection que le reste de la page contourne.
   * La section absorbe `validate` comme bloc de clôture : les deux tenaient
   * le même raisonnement à quatre écrans d'intervalle.
   */
  insideOutside: {
    badge: "La vraie question",
    title: "Ce qu'un ingénieur du dehors fait mieux les six premiers mois",
    anchor: "externe-ou-interne",
    intro:
      "Un DAF nous a posé la question sans détour l'an dernier : « pourquoi je vous paierais vous, alors que je peux embaucher quelqu'un à demeure ? » C'est la bonne question. Voici la réponse complète, y compris la partie qui ne nous arrange pas.",

    lastMileTitle: "Le problème du dernier kilomètre",
    lastMile:
      "Selon l'étude MIT de 2025, 95 % des pilotes d'IA en entreprise ne produisent aucun retour mesurable. La cause tient rarement au modèle. Elle tient à tout ce qui sépare une démo qui marche d'un système que trois cents personnes utilisent le lundi matin : les droits d'accès, les cas particuliers, la personne qui refuse de changer son fichier Excel, l'export qui tombe le 3 du mois.",
    lastMileKicker: "Ce travail-là demande quelqu'un qui l'a déjà fait ailleurs.",

    strengthsTitle: "Cinq choses que l'extérieur apporte au démarrage",
    strengths: [
      {
        title: "Il a vu deux cents systèmes",
        body: "Votre premier agent de qualification ressemble beaucoup au dix-septième qu'il a construit. Il connaît déjà les trois endroits où ça casse. Un ingénieur interne, même excellent, découvre ces trois endroits à vos frais.",
      },
      {
        title: "Il arrive avec la boîte à outils",
        body: "Le jour 1 il ouvre nos playbooks, notre intelligence d'appels, notre cockpit de direction, notre suivi de mission. Ce sont des systèmes que nous faisons tourner pour nous-mêmes avant de les installer chez vous.",
      },
      {
        title: "Il traverse les silos",
        body: "Un salarié dépend de son manager, de son service, de sa prochaine évaluation. Un ingénieur déployé va parler au comptable, au commercial et au DSI dans la même journée sans avoir à négocier une ligne hiérarchique.",
      },
      {
        title: "Il est réversible",
        body: "Si le courant ne passe pas, on change d'ingénieur en une semaine. Un mauvais recrutement sur ce poste coûte six mois de plus et une période d'essai à gérer.",
      },
      {
        title: "Il vous apprend le poste avant que vous l'ouvriez",
        body: "C'est le point que nos clients citent le plus souvent. Au bout de trois mois vous savez ce que ce rôle fait vraiment chez vous, quels systèmes il doit tenir, et à qui il doit parler. Vous rédigez alors une fiche de poste qui décrit un travail réel.",
      },
    ] satisfies readonly RunInItem[],

    refusalsTitle: "Trois cas où l'interne gagne, et où il faut nous le dire",
    refusalsIntro: "Nous refusons des missions. Voici quand.",
    refusals: [
      {
        title: "Vous avez une profondeur métier extrême",
        body: "Assurance actuarielle, conformité pharmaceutique, tarification bancaire. Si le savoir critique met deux ans à s'acquérir, un ingénieur permanent le portera mieux que nous.",
      },
      {
        title: "Votre charge est stable et prévisible sur trois ans",
        body: "Au-delà d'un certain volume, un salarié revient moins cher. Nous le disons au diagnostic, chiffres à l'appui.",
      },
      {
        title: "Vous avez déjà l'équipe",
        body: "Si vous employez trois ingénieurs capables de livrer en production, ce qui vous manque tient de la méthode et de la montée en compétence. Regardez plutôt la section suivante, ou le catalogue de formations.",
      },
    ] satisfies readonly RunInItem[],

    sequenceTitle: "La séquence que suivent la plupart de nos clients",
    sequence:
      "Trois mois avec un ingénieur déployé, des systèmes en production, une fiche de poste écrite à partir du réel. Recrutement lancé au mois quatre en sachant quoi chercher. Le nouvel arrivant hérite d'un environnement documenté et d'équipes déjà formées, et il produit en quelques semaines.",
    sequence2:
      "Certains recrutent. Certains prolongent. Certains s'arrêtent parce que les systèmes tournent et que personne n'a besoin d'un poste de plus. Les trois issues nous vont, parce que dans les trois cas tout vous appartient déjà.",
  },

  /** Bloc de clôture de §B. Conservé tel quel, réutilisé sous la nouvelle section. */
  validate: {
    badge: "L'angle malin",
    title: "Le meilleur moyen de réussir ce recrutement : le reporter.",
    body: "Vous n'avez jamais eu d'ingénieur IA. Vous ne savez pas encore quoi lui demander, ni comment le piloter, ni si le poste se justifie sur douze mois. Trois mois avec nous, et vous saurez exactement quel profil embaucher. Ou vous découvrirez que vous n'en avez pas besoin. Dans les deux cas, vous aurez des systèmes en production et des équipes formées.",
    footnote: "Certains de nos clients recrutent ensuite en interne. Ça compte comme une réussite de mission : tout leur appartient déjà.",
  },

  origin: {
    badge: "D'où vient ce modèle",
    text: "Palantir a bâti son succès sur ce modèle il y a vingt ans : l'ingénieur travaille dans l'équipe du client, parce qu'aucun environnement d'entreprise ne ressemble à un autre. OpenAI a monté son équipe FDE en 2024, puis une coentreprise de déploiement de 4 milliards de dollars en 2026. Anthropic a suivi. Les géants viennent de valider ce que nous pratiquons depuis le début : en français, pour les PME et ETI.",
  },

  testimonials: {
    badge: "Ils nous font confiance",
    title: "Ce que ça donne chez eux",
    /** Noms à retrouver dans homepageContent.testimonials.items (lecture seule). */
    names: ["Nicole Neumann", "Éric Solal", "Mickaël Mina"],
  },

  badges: {
    partnersLabel: "Partenaires officiels",
    partners: [
      {
        name: "Enterprise partner",
        issuer: "CLAY",
        img: "/images/badges/certs/clay-enterprise-partner.png",
      },
      {
        name: "Google partner",
        issuer: "GOOGLE",
        img: "/images/badges/certs/google-partner.png",
      },
      {
        name: "Certified partner",
        issuer: "MAKE",
        img: "/images/badges/certs/make-certified-partner.png",
      },
      {
        name: "Certified expert",
        issuer: "N8N",
        img: "/images/badges/certs/n8n-certified-expert.png",
      },
      {
        name: "AWS partner",
        issuer: "AMAZON WEB SERVICES",
        img: "/images/badges/certs/aws-partner.png",
      },
      {
        name: "Azure partner",
        issuer: "MICROSOFT",
        img: "/images/badges/certs/azure-partner.png",
      },
    ] satisfies readonly CertBadge[],
    certsLabel: "Nos ingénieurs sont certifiés",
    certs: [
      {
        name: "Claude certified architect",
        issuer: "ANTHROPIC",
        img: "/images/badges/certs/claude-certified-architect.png",
      },
      {
        name: "AI industry leader",
        issuer: "MICROSOFT",
        img: "/images/badges/certs/microsoft-ai-industry-leader.png",
      },
      {
        name: "Certified fundamentals",
        issuer: "MICROSOFT",
        img: "/images/badges/certs/microsoft-certified-fundamentals.png",
      },
    ] satisfies readonly CertBadge[],
  },

  faq: {
    badge: "Questions fréquentes",
    title: "Les questions qu'on nous pose avant de démarrer",
    items: [
      {
        question: "Qu'est-ce qu'un Forward Deployed Engineer (FDE) ?",
        answer:
          "Un ingénieur IA déployé directement dans l'équipe du client : il comprend le problème réel, écrit du code de production, connecte l'IA aux systèmes existants et reste responsable jusqu'à ce que la solution tourne. Le modèle vient de Palantir, il est aujourd'hui adopté par OpenAI, Anthropic et Google. Chez AI Makers, c'est le cœur de l'offre : un FDE intégré à votre équipe, encadré par notre CTO.",
      },
      {
        question: "Pourquoi le modèle FDE explose-t-il en ce moment ?",
        answer:
          "Parce que 95 % des pilotes IA en entreprise ne produisent aucun retour mesurable (étude MIT, 2025) : les modèles sont puissants, mais les brancher sur un environnement réel est le vrai problème. Résultat : les offres d'emploi FDE ont été multipliées par 8 en un an, et les labs IA paient ce profil entre 385 K$ et 1 M$ par an. Peu d'entreprises peuvent recruter ce profil. Beaucoup peuvent en déployer un.",
      },
      {
        question: "À qui appartient ce que l'ingénieur construit ?",
        answer:
          "À vous, intégralement. Code, playbooks, documentation : toute la propriété intellectuelle vous appartient, c'est écrit dans le contrat. Le jour où on part, tout reste chez vous. Zéro dépendance, zéro otage.",
      },
      {
        question: "Qui encadre l'ingénieur au quotidien ?",
        answer:
          "Walid, notre CTO. Chaque système livré passe en revue avec lui, chaque arbitrage technique remonte vers lui, et l'ingénieur s'appuie sur les playbooks des 200+ systèmes déjà déployés par le cabinet. Votre ingénieur travaille dans votre équipe, jamais seul face à un problème.",
      },
      {
        question: "Que se passe-t-il à la fin de la mission ?",
        answer:
          "L'objectif tient en un mot : autonomie. À 6 mois, les systèmes tournent, les playbooks sont écrits et vos référents sont formés pour les faire vivre. Chaque système part avec sa documentation, propriété client totale.",
      },
      {
        question: "L'ingénieur travaille à distance ou sur site ?",
        answer:
          "Les deux. Nous intervenons en présentiel en France métropolitaine et au Maroc, depuis nos bureaux de Paris et Casablanca, et à distance pour l'ensemble de la zone francophone. Le format se cale sur votre organisation lors du diagnostic.",
      },
      {
        question: "Quel est l'engagement minimum ?",
        answer:
          "3 mois. L'accompagnement se poursuit ensuite au mois, avec un préavis de 30 jours. Les premières semaines servent à l'audit et à la roadmap chiffrée, puis les premiers systèmes partent en production dès le premier mois.",
      },
      {
        question: "Pourquoi ne pas simplement recruter en interne ?",
        answer:
          "Vous pouvez, et certains de nos clients le font ensuite. La question est le moment : recruter un ingénieur IA senior prend 6 à 12 mois et engage 101 000 à 122 000 € chargés par an, sur un poste dont vous ne connaissez pas encore le contour. Déployer un FDE prend quelques semaines, coûte une fraction du poste, et vous apprend exactement ce que ce rôle doit faire chez vous. Vous recrutez ensuite en connaissance de cause, ou pas du tout.",
      },
      {
        question: "Et si nous voulons internaliser ensuite ?",
        answer:
          "C'est prévu, et c'est même un bon scénario de sortie. Les systèmes, les playbooks et la documentation vous appartiennent dès le premier jour. Le jour où vous embauchez votre propre ingénieur, il hérite d'un environnement documenté et d'équipes déjà formées : il est productif en quelques semaines. Nous pouvons aussi vous aider à définir la fiche de poste et à évaluer les candidats.",
      },
      {
        question: "En quoi est-ce différent d'un freelance IA ?",
        answer:
          "Un freelance vous vend des jours et repart avec son savoir. Nous vendons un résultat. Quand on part, vos référents restent, la documentation reste, et tout le code vous appartient.",
      },

      /* — Groupe A : le métier, adossé à la fiche de poste — */
      {
        question: "Quelles compétences a un Forward Deployed Engineer ?",
        answer:
          "Python, TypeScript et SQL côté langages, modélisation et ETL côté données, API et cloud côté architecture, RAG et systèmes multi-agents côté IA appliquée. La moitié qui décide vraiment est ailleurs : recueil du besoin, arbitrage entre périmètre et vitesse, écrit clair, gestion des parties prenantes. Ces quatre compétences de terrain s'acquièrent en livrant chez des clients.",
      },
      {
        question: "Quel est le salaire d'un ingénieur IA en France ?",
        answer:
          "Entre 45 000 et 55 000 € bruts pour un junior en Île-de-France, 55 000 à 75 000 € pour un confirmé, 75 000 à 100 000 € pour un senior, et au-delà de 100 000 € pour un lead. Comptez environ 35 % de plus en coût chargé. Les régions se situent environ 15 % en dessous. Dans les labs américains le même profil se négocie entre 385 000 et 1 million de dollars.",
      },
      {
        question: "Forward Deployed Engineer et solutions engineer, quelle différence ?",
        answer:
          "Le solutions engineer intervient en avant-vente et démontre un produit. Le Forward Deployed Engineer arrive après la signature et construit dans l'environnement du client. Le premier porte un cycle de vente, le second porte un système en production.",
      },
      {
        question: "Un FDE remplace-t-il une ESN ?",
        answer:
          "Sur le périmètre IA appliquée, souvent oui. L'ESN staffe un profil sur un périmètre défini à l'avance, avec une obligation de moyens. L'ingénieur déployé s'engage sur un résultat mesuré au KPI, système par système, et forme vos équipes en même temps.",
      },
      {
        question: "Combien de temps pour qu'un FDE soit opérationnel chez nous ?",
        answer:
          "L'onboarding a lieu avant le kick-off : il lit vos process, apprend votre vocabulaire et prend en main vos outils. Le premier chantier démarre une fois le périmètre, les accès, le contexte données/outils et les utilisateurs de test réunis.",
      },

      /* — Groupe B : externe ou interne — */
      {
        question: "Pourquoi 95 % des projets IA échouent-ils en entreprise ?",
        answer:
          "D'après l'étude MIT publiée en 2025, l'échec vient du dernier kilomètre du déploiement plutôt que de la qualité des modèles. Droits d'accès, cas particuliers, adoption réelle par les équipes, intégration aux systèmes existants. Chaque environnement d'entreprise est compliqué à sa façon, et aucun logiciel sur étagère ne s'y branche seul.",
      },
      {
        question: "Vaut-il mieux recruter un ingénieur IA ou en déployer un ?",
        answer:
          "Cela dépend de trois choses : la profondeur métier requise, la stabilité de votre charge sur trois ans, et ce que vous savez déjà du poste. Si le savoir critique met deux ans à s'acquérir ou si votre charge est stable, recrutez. Si vous ouvrez ce poste pour la première fois, déployez d'abord et recrutez ensuite en sachant quoi chercher.",
      },
      {
        question: "Dans quels cas refusez-vous une mission ?",
        answer:
          "Trois cas. Profondeur métier extrême où un permanent portera mieux le savoir. Charge stable et prévisible à long terme où un salarié revient moins cher. Équipe déjà en place où il manque la méthode plutôt que les bras, auquel cas nous vous orientons vers nos formations en entreprise.",
      },
      {
        question: "Que se passe-t-il si le courant ne passe pas avec l'ingénieur ?",
        answer:
          "Nous changeons d'ingénieur, en une semaine. Le successeur reprend des playbooks écrits et un environnement documenté. C'est une différence de fond avec un recrutement raté, qui coûte six mois de plus.",
      },
      {
        question: "Peut-on faire travailler un FDE avec notre DSI existante ?",
        answer:
          "C'est le cas standard. Il se branche sur vos process de sécurité, vos revues de code et vos environnements. Tout le code part sur votre GitHub, versionné et relu. Notre page gouvernance IA détaille le cadre.",
      },

      /* — Groupe C : montée en compétence interne — */
      {
        question: "Peut-on former nos propres ingénieurs au métier de FDE ?",
        answer:
          "C'est déjà compris dans la mission : 2 heures par semaine, sur les systèmes que votre ingénieur construit chez vous. Vos développeurs cadrent et livrent en binôme avec lui, la revue de code passe par notre CTO, et les playbooks qu'ils écrivent deviennent votre référentiel. Si vous cherchez une montée en compétence sans déploiement, nos formations IA en entreprise couvrent le socle.",
      },
      {
        question: "Un product manager peut-il devenir Forward Deployed Engineer ?",
        answer:
          "Sur la partie cadrage, arbitrage et relation métier, oui, et c'est souvent le profil le plus rapide à monter. Il lui manque le socle technique. Nos meilleures paires associent un développeur senior et un product manager sur le même chantier.",
      },
    ] satisfies readonly FaqItem[],
  },
} as const;

/**
 * Copy qui vivait dans la route /forward-deployed-engineer.
 *
 * La page est un gabarit partagé FR/EN : tout ce qui était écrit en dur dans le
 * JSX descend ici, sinon la version anglaise hérite du français. Les apostrophes
 * typographiques sont conservées telles quelles — le rendu français ne doit pas
 * bouger d'un caractère.
 */
export const fdePage = {
  meta: {
    title: "Forward Deployed Engineer : un ingénieur IA dédié",
    description:
      "Un ingénieur IA déployé dans votre équipe : il comprend votre métier, construit dans vos outils et livre du code en production. Né chez Palantir.",
  },
  schema: {
    breadcrumbHome: "Accueil",
    breadcrumbCurrent: "Forward Deployed Engineer",
    serviceType:
      "Ingénieur IA déployé en entreprise (Forward Deployed Engineer)",
    serviceName: "Forward Deployed Engineer",
    serviceDescription:
      "Un ingénieur IA intégré à l'équipe du client, onboardé sur son secteur 2 semaines avant le kick-off, qui construit 1 à 2 systèmes IA en production par mois directement dans les workflows de l'entreprise, avec 2 heures de formation par semaine jusqu'à l'autonomie des équipes à 6 mois.",
    definedTermName: "Forward Deployed Engineer (FDE)",
    areaServed: ["France", "Maroc"],
    occupationName: "Forward Deployed Engineer (ingénieur IA déployé)",
    alternateName: ["Ingénieur IA", "Ingénieur en intelligence artificielle"],
    salaryLabel: "Salaire brut annuel constaté en France",
    walid: {
      jobTitle: "CTO d'AI Makers",
      description:
        "Directeur technique d'AI Makers. Ingénieur INPT, builder de systèmes IA : plus de 250 produits construits, agents IA et automatisations n8n. Co-fondateur du partenaire AY Automate.",
      alumniOf: "Institut National des Postes et Télécommunications (INPT)",
    },
    adel: {
      jobTitle: "Expert IA associé chez AI Makers",
      description:
        "Expert IA associé d'AI Makers. Ingénieur ENSIAS, il a livré des projets d'IA générative pour L'Oréal, GSK et Nestlé. Certifié Microsoft Azure Data Scientist. Co-fondateur du partenaire AY Automate.",
      alumniOf:
        "École Nationale Supérieure d'Informatique et d'Analyse des Systèmes (ENSIAS)",
    },
  },
  embed: {
    badge: "En un coup d’œil",
    title: "Il ne débarque pas de l’extérieur. Il se branche dedans.",
    subtitle:
      "Un ingénieur qui se connecte à vos outils et vos équipes, et construit là où le travail se fait.",
  },
  careersNote: {
    prefix: "Le détail du métier, des grilles et des parcours est sur",
    jobLink: {
      label: "la fiche métier Ingénieur IA",
      href: "/metiers/ingenieur-ia",
    },
    middle: ". Nos postes ouverts sont sur",
    careersLink: { label: "Carrières", href: "/carrieres" },
  },
  ctaCost: {
    titre: "Ce profil, sans le recrutement",
    texte:
      "Décrivez vos systèmes et vos priorités. Nous revenons avec le chiffrage d'un ingénieur déployé chez vous, à comparer aux 101 000 à 122 000 euros chargés d'un senior en CDI.",
    label: "Obtenir mon chiffrage personnalisé",
    href: "/contact",
    secondaire: { label: "Voir la fiche métier", href: "/metiers/ingenieur-ia" },
  },
  hireOrDeploy: {
    badge: "Recruter ou déployer",
    title: "Les mêmes 9 mois, vus des deux côtés.",
    subtitle:
      "Le temps que votre annonce trouve son candidat, un Forward Deployed Engineer a déjà livré ses premiers systèmes.",
  },
  ctaThirty: {
    titre: "Trente minutes pour savoir si c'est votre cas",
    texte:
      "Nous regardons vos systèmes et vos priorités, et nous vous disons franchement si un ingénieur déployé est le bon choix, ou si vous devriez recruter.",
    label: "Réserver mon diagnostic gratuit",
    href: "/contact",
  },
  leadership: {
    badge: "Direction technique",
    title: "La direction technique d’AI Makers",
    intro:
      "AI Makers déploie plus de 20 ingénieurs IA en entreprise. Chaque mission est cadrée par des ingénieurs qui construisent des systèmes en production tous les jours, en partenariat avec AY Automate.",
    partnerBadge: "Partenaire officiel sur le marché francophone",
    countBadge: "+20 ingénieurs IA déployés en entreprise",
    people: [
      {
        name: "Walid Boulanouar",
        role: "CTO d’AI Makers",
        photo: "/images/team/walid.jpg",
        linkedin: "https://www.linkedin.com/in/walid-boulanouar",
        bio: "Directeur technique d’AI Makers. Ingénieur INPT, builder par nature : plus de 250 produits construits, agents IA et automatisations n8n, des systèmes livrés pour des entités gouvernementales au Maroc et en Arabie Saoudite. Il encadre chaque ingénieur déployé. Co-fondateur du partenaire AY Automate.",
      },
      {
        name: "Adel Dahani",
        role: "Expert IA associé",
        photo: "/images/formateurs/adel-dahani.png",
        linkedin: "https://www.linkedin.com/in/adeldahani",
        bio: "Expert IA associé d’AI Makers. Ingénieur ENSIAS, il a livré des projets d’IA générative pour L’Oréal, GSK et Nestlé. Certifié Microsoft Azure Data Scientist. Co-fondateur du partenaire AY Automate.",
      },
    ],
  },
  trainingLinks: {
    catalogue: {
      label: "Formations IA en entreprise",
      href: "/formation-ia-entreprise",
    },
    joiner: ", dont",
    featured: {
      label: "Maîtriser Claude en entreprise",
      href: "/formation-ia-entreprise/maitriser-claude",
    },
  },
  buildCtaLabel: "Voir ce qu’il construirait chez nous",
  ctaWelcome: {
    titre: "Accueillir un ingénieur dans votre équipe",
    texte:
      "Onboardé sur votre métier deux semaines avant le kick-off, il ouvre son premier chantier une fois le périmètre, les accès et les utilisateurs de test réunis. Trois nouveaux clients par mois, maximum.",
    label: "Réserver ma place",
    href: "/contact",
    secondaire: { label: "Voir notre capacité", href: "/capacite" },
  },
  capacityLink: { label: "Voir notre capacité actuelle →", href: "/capacite" },
  ctaQuestion: {
    titre: "Une question qui n'est pas dans cette liste ?",
    texte:
      "Décrivez-nous votre contexte. Nous répondons avec un périmètre, un déroulé et un chiffrage, ou nous vous disons que ce n'est pas pour vous.",
    label: "Poser ma question",
    href: "/contact",
    secondaire: { label: "Voir notre capacité", href: "/capacite" },
  },
  related: [
    {
      title: "Transformation IA",
      href: "/ai-transformation",
      description: "L'offre complète où s'inscrit votre ingénieur.",
    },
    {
      title: "L'équipe AI Makers",
      href: "/equipe",
      description:
        "Les profils qui déploient chez vous, entre Paris et Casablanca.",
    },
    {
      title: "Carrières",
      href: "/carrieres",
      description: "Les postes ouverts d'ingénieurs IA chez AI Makers.",
    },
    {
      title: "Fiche métier : ingénieur IA",
      href: "/metiers/ingenieur-ia",
      description: "Le métier, les compétences et les salaires en France.",
    },
    {
      title: "Gouvernance et sécurité",
      href: "/gouvernance-ia",
      description: "Le cadre dans lequel votre ingénieur travaille.",
    },
    {
      title: "Formations IA en entreprise",
      href: "/formation-ia-entreprise",
      description: "Faire monter vos équipes, avec ou sans déploiement.",
    },
  ],
  finalCta: {
    title: "Prêt à accueillir votre ingénieur IA ?",
    subtitle:
      "30 minutes pour analyser vos workflows et identifier les premiers systèmes que votre ingénieur construirait, que vous travailliez avec nous ou non.",
    cta: { label: "Réserver mon diagnostic gratuit", href: "/contact" },
  },
} as const;

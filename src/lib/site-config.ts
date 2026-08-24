export const bookingUrl = "https://cal.com/othmane-halim-5lo7uc/30min";
/** @deprecated utiliser bookingUrl */
import { PRIVACY_URL } from "@/lib/privacy-href";

export const calendlyUrl = bookingUrl;

export const siteConfig = {
  name: "AI Makers",
  url: "https://aimakers.fr",
  description:
    "AI Makers est un cabinet de transformation IA en France et au Maroc, avec des bureaux à Paris et Casablanca. Audit IA, formation, automatisation de workflows et déploiement d'agents sur-mesure pour PME, ETI et grands groupes. +50 entreprises accompagnées, +200 systèmes IA déployés, +10 000 professionnels formés.",
  locale: "fr_FR",
  addresses: {
    paris: {
      street: "60 rue François 1er",
      city: "75008 Paris",
      country: "France",
    },
    casablanca: {
      city: "Casablanca",
      country: "Maroc",
    },
  },
  email: "othmane@aimakers.fr",
  // Lien de composition Gmail : s'ouvre pour tout le monde dans le navigateur,
  // contrairement à mailto: qui dépend d'un client mail par défaut installé.
  emailHref:
    "https://mail.google.com/mail/?view=cm&fs=1&to=othmane@aimakers.fr",
  socials: {
    linkedin: "https://www.linkedin.com/company/aimakers1/",
  },
} as const;

/**
 * Vérification de propriété Google Search Console (méthode balise meta).
 *
 * Constante partagée plutôt que balise recopiée : elle doit figurer sur les
 * deux layouts racines (groupes (fr) et (en)). Google ne lit la balise que sur
 * l'URL exacte vérifiée, mais une propriété perd sa vérification si la balise
 * disparaît — d'où le point unique.
 *
 * Ne pas retirer après validation : Google revérifie périodiquement.
 */
export const googleSiteVerification =
  "9ds2MC_2KnE4KRoLOWYpxalNIH5ntMFTd9comywcsrc";

/** Liens simples de la barre (les menus déroulants sont dans megaMenu). */
export const navItems = [
  { label: "Contact", href: "/contact" },
] as const;

/**
 * Mega-menu de la barre principale — pattern AY Automate :
 * groupes en verbes d'action (Karp), chaque item vend un résultat (Hormozi),
 * descriptions factuelles d'une ligne (Amodei).
 */
export const megaMenu = {
  offres: {
    label: "Services",
    hubHref: null,
    groups: [
      {
        title: "Déployer",
        items: [
          {
            label: "Transformation IA",
            description: "Votre département IA, de l'audit au scale",
            href: "/ai-transformation",
          },
          {
            label: "Forward Deployed Engineer",
            description: "Un ingénieur IA intégré à vos équipes métier",
            href: "/forward-deployed-engineer",
          },
          {
            label: "AI Operating System",
            description: "L'entreprise qui tourne sur l'IA",
            href: "/ai-operating-system",
          },
        ],
      },
      {
        title: "Construire",
        items: [
          {
            label: "Automatisation de processus",
            description: "Vos outils branchés, plus personne ne recopie",
            href: "/automatisation-ia-workflow",
          },
          {
            label: "SEO & GEO",
            description: "Visible sur Google et dans ChatGPT",
            href: "/seo-geo",
          },
        ],
      },
      {
        title: "Gratuit",
        items: [
          {
            label: "Diagnostic IA /24",
            description: "Votre maturité IA en 12 questions",
            href: "/diagnostic-ia",
          },
          {
            label: "Calculateur ROI",
            description: "Vos gains estimés en 30 secondes",
            href: "/outils/calculateur-roi-ia",
          },
          {
            label: "Playbook AI-First",
            description: "Le guide complet, 54 pages (PDF)",
            href: "/playbook-ia",
          },
        ],
      },
    ],
    featured: {
      kicker: "À la une",
      title: "Forward Deployed Engineer",
      description:
        "Le rôle qui relie workflow métier, construction et mise en production.",
      href: "/forward-deployed-engineer",
      image: "/images/formations/session-finance-groupe.jpg",
      imagePosition: "center 45%",
      ctaLabel: "Découvrir le modèle",
    },
  },
  formations: {
    label: "Formations",
    hubHref: "/formation-ia-entreprise",
    groups: [
      {
        title: "Programmes",
        items: [
          {
            label: "Maîtriser Claude en entreprise",
            description: "Du chat à l'automatisation réelle",
            href: "/formation-ia-entreprise/maitriser-claude",
          },
          {
            label: "Formation AI Champions",
            description: "Le socle : comprendre et gagner du temps dès J1",
            href: "/formation-ia-entreprise/formation-ai-champions",
          },
          {
            label: "Vibe Coding",
            description: "Construire ses outils sans savoir coder",
            href: "/formation-ia-entreprise/vibe-coding",
          },
          {
            label: "Création & Publicité IA",
            description: "Produire plus, sans diluer la créa",
            href: "/formation-ia-entreprise/creation-publicite-ia",
          },
          {
            label: "Go-to-Market & Sales",
            description: "Clay, Lemlist, FullEnrich : la machine d'acquisition",
            href: "/formation-ia-entreprise/go-to-market-sales",
          },
          {
            label: "Microsoft Copilot",
            description: "Rentabiliser enfin vos licences 365",
            href: "/formation-ia-entreprise/microsoft-copilot",
          },
          {
            label: "Toutes les formations →",
            description: "Le catalogue : 6 programmes, sessions et formateurs",
            href: "/formation-ia-entreprise",
          },
        ],
      },
      {
        title: "Par ville",
        items: [
          { label: "Paris", description: "", href: "/formation-ia/paris" },
          { label: "Nice", description: "", href: "/formation-ia/nice" },
          { label: "Lyon", description: "", href: "/formation-ia/lyon" },
          {
            label: "Toulouse",
            description: "",
            href: "/formation-ia/toulouse",
          },
          {
            label: "Bordeaux",
            description: "",
            href: "/formation-ia/bordeaux",
          },
          { label: "Lille", description: "", href: "/formation-ia/lille" },
          {
            label: "Casablanca",
            description: "",
            href: "/formation-ia/casablanca",
          },
          {
            label: "Toutes les villes →",
            description: "",
            href: "/formation-ia",
          },
        ],
      },
    ],
    featured: {
      kicker: "Catalogue 2026",
      title: "Les 6 programmes en PDF",
      description:
        "Objectifs, modules et modalités. +10 000 professionnels formés.",
      href: "/formation-ia-entreprise#catalogue",
      image: "/images/formations/masterclass-amphi.png",
      imagePosition: "center 45%",
      ctaLabel: "Recevoir le catalogue",
    },
  },
  cabinet: {
    label: "À propos",
    hubHref: "/etudes-de-cas",
    groups: [
      {
        title: "Qui sommes-nous",
        items: [
          {
            label: "L'équipe",
            description: "Dix personnes, la production d'une équipe de 60",
            href: "/equipe",
          },
          {
            label: "Résultats",
            description: "Nos études de cas, chiffres mesurés",
            href: "/etudes-de-cas",
          },
          {
            label: "Gouvernance & sécurité",
            description: "RGPD, AI Act, vos données : intégrés d'office",
            href: "/gouvernance-ia",
          },
          {
            label: "IA au Maroc",
            description: "Notre équipe à Casablanca",
            href: "/ia-maroc",
          },
        ],
      },
      {
        title: "Ressources",
        items: [
          {
            // ATTENTION, deux produits différents portent presque le même nom :
            //
            //   /challenge-30-jours      cours email sur Claude, l'application
            //                            de chat. Existant, en français.
            //   /en/claude-code-challenge  ce cours-ci, sur Claude Code,
            //                            l'outil en ligne de commande.
            //
            // Le libellé dit explicitement lequel, sinon un lecteur clique sur
            // le mauvais et repart. À trancher côté marque : deux « challenge
            // 30 jours » dans un même menu restera confus quoi qu'on écrive.
            //
            // Pointe vers /en tant que la version française n'existe pas. La
            // langue est annoncée : un lecteur français qui tombe sur de
            // l'anglais sans prévenance repart aussi.
            label: "Claude Code en 30 jours",
            description: "Cours gratuit en anglais. Claude Code, pas le chat",
            href: "/en/claude-code-challenge",
          },
          {
            label: "Playbook AI-First",
            description: "Le guide complet (PDF)",
            href: "/playbook-ia",
          },
          {
            label: "Blog",
            description: "Terrain, méthodes, retours d'expérience",
            href: "/blog",
          },
          {
            label: "Glossaire IA",
            description: "30 définitions sans jargon",
            href: "/glossaire-ia",
          },
        ],
      },
    ],
    featured: {
      kicker: "La dream team",
      title: "L'équipe AI Makers",
      description:
        "Dix personnes, une flotte d'agents, la production d'une équipe de 60. Pas de vivier anonyme.",
      href: "/equipe",
      image: "/images/formation-hero.png",
      imagePosition: "center 30%",
      ctaLabel: "Rencontrer l'équipe",
    },
  },

} as const;

export const footerNav = {
  formations: [
    { label: "Toutes les formations IA", href: "/formation-ia-entreprise" },
    {
      label: "Formation AI Champions",
      href: "/formation-ia-entreprise/formation-ai-champions",
    },
    { label: "Vibe Coding", href: "/formation-ia-entreprise/vibe-coding" },
    {
      label: "Création & Publicité IA",
      href: "/formation-ia-entreprise/creation-publicite-ia",
    },
    {
      label: "Go-to-Market & Sales",
      href: "/formation-ia-entreprise/go-to-market-sales",
    },
    {
      label: "Microsoft Copilot",
      href: "/formation-ia-entreprise/microsoft-copilot",
    },
    {
      label: "Maîtriser Claude en entreprise",
      href: "/formation-ia-entreprise/maitriser-claude",
    },
    { label: "Formation IA Paris", href: "/formation-ia/paris" },
    { label: "Formation IA Nice", href: "/formation-ia/nice" },
    { label: "Formation IA Lyon", href: "/formation-ia/lyon" },
    { label: "Formation IA Toulouse", href: "/formation-ia/toulouse" },
    { label: "Formation IA Bordeaux", href: "/formation-ia/bordeaux" },
    { label: "Formation IA Lille", href: "/formation-ia/lille" },
    { label: "Formation IA Nantes", href: "/formation-ia/nantes" },
    { label: "Formation IA Marseille", href: "/formation-ia/marseille" },
    { label: "Formation IA Strasbourg", href: "/formation-ia/strasbourg" },
    { label: "Formation IA Montpellier", href: "/formation-ia/montpellier" },
    { label: "Formation IA Casablanca", href: "/formation-ia/casablanca" },
    { label: "Toutes les villes", href: "/formation-ia" },
  ],
  services: [
    { label: "Transformation IA", href: "/ai-transformation" },
    { label: "Formation IA", href: "/formation-ia-entreprise" },
    { label: "Forward Deployed Engineer", href: "/forward-deployed-engineer" },
    { label: "AI Operating System", href: "/ai-operating-system" },
    { label: "SEO & GEO", href: "/seo-geo" },
    {
      label: "Automatisation de processus",
      href: "/automatisation-ia-workflow",
    },
    {
      label: "IA pour agences de communication",
      href: "/secteurs/agences-communication",
    },
    { label: "IA pour TPE & PME", href: "/secteurs/tpe-pme" },
    {
      label: "IA santé, biotech & medtech",
      href: "/secteurs/sante-biotech-medtech",
    },
    { label: "IA pour médecins", href: "/secteurs/medecins-cabinets" },
    { label: "IA pour ESN", href: "/secteurs/esn-services-it" },
    { label: "IA conseil & études", href: "/secteurs/conseil-etudes-marche" },
    { label: "IA hôtellerie & tourisme", href: "/secteurs/hotellerie-tourisme-loisirs" },
    { label: "IA banque & courtage", href: "/secteurs/banque-assurance-courtage" },
    { label: "Diagnostic IA gratuit", href: "/diagnostic-ia" },
    { label: "Calculateur ROI IA", href: "/outils/calculateur-roi-ia" },
  ],
  resources: [
    { label: "Études de cas", href: "/etudes-de-cas" },
    { label: "Outils gratuits", href: "/outils" },
    { label: "Tous les secteurs", href: "/secteurs" },
    { label: "Playbook AI-First (PDF)", href: "/playbook-ia" },
    // Les deux challenges. Le premier porte sur Claude, l'application de chat,
    // par email. Le second sur Claude Code, l'outil en ligne de commande, sur
    // le site. Libellés distincts volontairement : voir le commentaire dans le
    // méga-menu Ressources plus haut.
    { label: "Challenge 30 jours Claude", href: "/challenge-30-jours" },
    { label: "Claude Code en 30 jours", href: "/en/claude-code-challenge" },
    { label: "Pourquoi maintenant", href: "/pourquoi-maintenant" },
    { label: "Blog", href: "/blog" },
    { label: "Glossaire IA", href: "/glossaire-ia" },
  ],
  company: [
    { label: "À propos", href: "/a-propos" },
    { label: "L'équipe", href: "/equipe" },
    { label: "Notre histoire : le fondateur", href: "/fondateur" },
    { label: "Gouvernance & sécurité", href: "/gouvernance-ia" },
    { label: "Notre capacité", href: "/capacite" },
    { label: "IA au Maroc", href: "/ia-maroc" },
    { label: "Carrières", href: "/carrieres" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: PRIVACY_URL },
    { label: "CGV", href: "/cgv" },
  ],
} as const;

export const clientLogos = [
  { name: "Schneider Electric", img: "/images/logo-schneider-nobg.png" },
  {
    name: "Gepromed",
    img: "/images/logo-gepromed.png",
    testimonial: {
      quote:
        "AI Makers nous accompagne bien au-delà de la formation : un operating system pour structurer notre activité, des agents IA personnalisés pour notre GTM et nos process internes. Leur force : rendre l'IA applicable à nos besoins métier, avec du temps gagné, des automatisations, et des gains de performance pour la structure.",
      author: "Nicole Neumann",
      role: "Responsable Innovation",
      photo: "/images/testimonials/nicole-neumann-gepromed.jpg",
    },
  },
  {
    name: "Amgen",
    img: "/images/logo amgen -nobg.png",
    testimonial: {
      quote:
        "La formation a complètement changé notre façon de travailler. Nos équipes sont maintenant autonomes sur les outils IA et gagnent un temps considérable au quotidien.",
      author: "Marie-Pierre Picon",
      role: "Attachée scientifique",
      photo: "/images/testimonials/marie-pierre-picon-amgen.png",
    },
  },
  {
    name: "Sage",
    img: "/images/Sage-logo-transparent-nobg.png",
    testimonial: {
      quote:
        "AI Makers a rendu le GEO compréhensible et exploitable par nos équipes métiers. Leur capacité à comprendre rapidement les enjeux business et à traduire des sujets techniques en recommandations actionnables a clairement fait la différence.",
      author: "Mickaël Mina",
      role: "Directeur IA",
      photo: "/images/testimonials/mickael-mina-sage.png",
    },
  },
  {
    name: "Délifrance",
    img: "/images/logo-delifrance.png",
    testimonial: {
      quote:
        "Avant AI Makers, notre défi était d'utiliser l'IA de manière intelligente et sécurisée, en obtenant le meilleur avantage tout en gardant notre autonomie. La formation a fait la différence : des exemples appliqués à notre environnement, la démonstration d'usages très concrets, et une vision claire des multiples usages de l'IA dans nos métiers.",
      author: "Hicham Boustit",
      role: "Directeur du Contrôle de gestion",
      photo: "/images/testimonials/hicham-boustit-delifrance.jpg",
    },
  },
  { name: "AS Monaco", img: "/images/logo as monaco -nobg.png" },
  { name: "Emirates NBD", img: "/images/logo emirates nbd -nobg.png" },
  { name: "Groupe Partouche", img: "/images/logo partouche-nobg.png" },
  { name: "Cardio Check-up", img: "/images/logo-cardio-checkup-nobg.png" },
  {
    name: "Empruntis",
    img: "/images/logo empruntis -nobg.png",
    testimonial: {
      quote:
        "L'accompagnement AI Makers nous a permis d'automatiser des processus qui prenaient des heures. Le ROI a été visible dès le premier mois.",
      author: "Vanessa Braflan",
      role: "Directrice",
      photo: "/images/testimonials/vanessa-braflan-empruntis.png",
    },
  },
  {
    name: "AstraNICE",
    img: "/images/logo astranice -nobg.png",
  },
  {
    name: "Bio Valley",
    img: "/images/bio valley-nobg.png",
    testimonial: {
      quote:
        "Voir l'IA comme un outil puissant s'il est utilisé correctement. La formation m'a permis de découvrir des outils différents selon le besoin et de mieux formuler mes demandes. L'approche du formateur pour des non initiés est remarquable.",
      author: "Jennifer Vigouroux",
      role: "Chargée d'innovation Bioproduction",
      photo: "/images/testimonials/jennifer-vigouroux-biovalley.jpg",
    },
  },
  { name: "IFA", img: "/images/logo ifa -nobg.png" },
  {
    name: "ThinkONE",
    img: "/images/logo thinkone -nobg.png",
    testimonial: {
      quote:
        "L'équipe AI Makers s'est distinguée par une approche humaine et une réelle disponibilité. Leur force de proposition nous a aidés à faire évoluer notre réflexion stratégique et à développer des outils pragmatiques, directement orientés vers l'impact.",
      author: "Mariem Lahlou",
      role: "Managing Partner",
      photo: "/images/testimonials/mariem-lahlou-thinkone.jpeg",
    },
  },
  {
    name: "ESN Engit",
    img: "/images/logo engit -nobg.png",
    testimonial: {
      quote:
        "Enfin un accompagnement à l'IA qui démystifie le sujet et donne les vraies clés pour l'intégrer efficacement. Une équipe compétente, pédagogue et souriante. Je vais commencer à en faire une utilisation quotidienne, c'est sans doute ma dernière publication créée sans IA.",
      author: "Éric Solal",
      role: "Président",
      photo: "/images/testimonials/eric-solal-engit.png",
    },
  },
  {
    name: "Fondation Force",
    img: "/images/logo-fondation-force.png",
    testimonial: {
      quote:
        "AI Makers nous accompagne avec une approche pragmatique, adaptée aux exigences du monde de la santé et de la recherche : des systèmes concrets qui font gagner du temps à nos équipes, et un vrai transfert de compétences. Un partenaire qui structure notre transformation IA.",
      author: "Lilla Merabet",
      role: "Directrice générale",
      photo: "/images/testimonials/lilla-merabet-fondation-force.jpg",
    },
  },
  { name: "Tribal DDB", img: "/images/logo tribal ddb -nobg.png" },
  {
    name: "Shem's Publicité",
    img: "/images/logo shems -nobg.png",
    testimonial: {
      quote:
        "Une équipe experte qui sait accompagner et former. Les équipes qui ont bénéficié de la formation sont aujourd'hui autonomes et l'IA est un copilote dans leur quotidien.",
      author: "Lamia Ajana",
      role: "Directrice Générale",
      photo: "/images/testimonials/lamia-ajana-shems.jpg",
    },
  },
  { name: "Bonzai", img: "/images/logo bonzai -nobg.png" },
  {
    name: "Addictest",
    img: "/images/logo-addictest.png",
    testimonial: {
      quote:
        "AI Makers a construit notre AI Operating System : les tâches répétitives sont automatisées, les process sont structurés, et nos équipes gagnent en performance au quotidien. Pas un outil de plus : un système qui fait tourner l'activité.",
      author: "Ziyad El Mouniri",
      role: "CEO & Fondateur",
      photo: "/images/testimonials/ziyad-el-mouniri-addictest.jpg",
    },
  },
  { name: "Duroc", img: "/images/logo duroc -nobg.png" },
];

export const homepageContent = {
  hero: {
    headline: "Transformation",
    headlineAccent: "IA",
    subtitle: "Votre département IA, opérationnel en 30 jours.",
    description:
      "AI Makers est un cabinet de transformation IA en France et au Maroc. Nous ciblons les cas d'usage à plus forte valeur, nous développons et opérons les systèmes en production dans vos outils, et nous formons vos équipes jusqu'à l'autonomie.",
    ctaPrimary: { label: "On commence ?", href: "/contact" },
    ctaSecondary: {
      label: "Testez votre maturité IA en 2 min",
      href: "/diagnostic-ia",
    },
    newsletterFallback: {
      prefix: "Pas prêt à échanger ?",
      label: "Recevez le Playbook AI-First (54 pages)",
      href: "/playbook-ia",
    },
    stats: [
      { target: 50, prefix: "+", label: "entreprises accompagnées" },
      { target: 10000, prefix: "+", label: "personnes formées" },
      {
        target: 9.6,
        decimals: 1,
        suffix: "/10",
        label: "de satisfaction moyenne",
      },
    ],
  },
  valueProp: {
    kicker: "Pourquoi AI Makers ?",
    title: "Votre partenaire de transformation IA",
    manifestoParagraphs: [
      "Nous sommes une équipe de builders. Depuis 2022, les systèmes que nous vendons font tourner AI Makers, et chaque nouveauté est testée en interne avant d'arriver chez vous.",
      "C'est ce qui rend l'approche pragmatique : tout part de vos problématiques, jamais d'un catalogue. Nous identifions les cas d'usage à plus forte valeur, puis construisons les automatisations et les agents qui y répondent. Déployés un par un, jusqu'à l'adoption réelle. Nous vous conseillons aussi sur le choix de votre stack et sa mise en place. Et vos collaborateurs montent en compétences, jusqu'à se passer de nous.",
    ],
    manifestoSignature: "Nous vendons notre propre cuisine.",
    conversation: [
      {
        from: "dg",
        text: "On sait qu'on doit intégrer l'IA. Mais on ne sait ni par où commencer, ni comment faire.",
      },
      {
        from: "aim",
        text: "C'est la phrase qu'on entend le plus. La bonne nouvelle : ça se règle en 2 semaines.",
      },
      { from: "dg", text: "Comment ?" },
      {
        from: "aim",
        text: "Un audit de vos workflows. On identifie où l'IA crée de la valeur chez vous, on chiffre chaque opportunité. Vous repartez avec une roadmap : quoi construire en premier, et pour quel gain.",
      },
      {
        from: "aim",
        text: "Ensuite on construit. 1 à 2 systèmes par mois, mesurés avant et après, sur un KPI établi avant chaque déploiement.",
      },
    ],
    conversationCta: {
      prefix: "Continuez la conversation. 30 minutes, en vrai.",
      label: "Réserver le créneau",
      href: "/contact",
    },
    objectionsKicker: "La conversation continue",
    objectionsTitle: "Ce que vous vous dites, probablement",
    objections: [
      {
        icon: "presentation",
        quote: "Encore un cabinet qui va me vendre des slides ?",
        answer:
          "Non : des **systèmes en production**, avec au minimum 3 cas d'usage rentables identifiés dès l'audit.",
      },
      {
        icon: "users",
        quote: "Mes équipes ne suivront jamais.",
        answer:
          "70% d'une transformation, c'est l'humain (BCG). **2h de formation par semaine**, vos **AI Champions** autonomes à 6 mois.",
      },
      {
        icon: "chef",
        quote: "Et vous, vous l'utilisez vraiment, l'IA ?",
        answer:
          "Depuis 2022, **les systèmes qu'on vend font tourner AI Makers**. Notre cuisine est plus bas sur cette page.",
      },
      {
        icon: "key",
        quote: "Et le jour où vous partez ?",
        answer:
          "**Tout reste chez vous** : code, playbooks, équipes formées. Votre indépendance est un **livrable**.",
      },
    ],
    optionsPunchline: {
      line1: "Pas un cabinet. Pas une agence. Pas une licence de plus.",
      line2:
        "Une équipe d'ingénieurs qui construit chez vous. Comparez.",
    },
    optionsTable: {
      columns: [
        { key: "cabinet", label: "Cabinet de conseil", icon: "briefcase" },
        { key: "esn", label: "ESN / SSII", icon: "server" },
        { key: "freelance", label: "Agence / freelance", icon: "user" },
        { key: "licence", label: "Licence ChatGPT ou Copilot", icon: "logos" },
        { key: "aimakers", label: "AI Makers", icon: "aimakers" },
      ],
      rows: [
        {
          label: "Ce que vous recevez",
          cells: [
            { mark: "no", text: "Un rapport et des slides" },
            { mark: "meh", text: "Des développeurs en régie" },
            { mark: "meh", text: "Un outil, puis plus personne" },
            { mark: "no", text: "Un chat généraliste" },
            { mark: "yes", text: "Des systèmes en production, documentés" },
          ],
        },
        {
          label: "Qui construit",
          cells: [
            { mark: "no", text: "Personne : on vous recommande" },
            { mark: "meh", text: "Une équipe facturée au jour" },
            { mark: "meh", text: "Un profil seul, selon dispo" },
            { mark: "no", text: "Vous, tout seul" },
            { mark: "yes", text: "Un ingénieur référent, dans votre infra" },
          ],
        },
        {
          label: "Configuré pour vous",
          cells: [
            { mark: "meh", text: "En théorie" },
            { mark: "meh", text: "Selon le cahier des charges" },
            { mark: "meh", text: "Selon le brief" },
            { mark: "no", text: "Générique par design" },
            { mark: "yes", text: "Sur vos process et vos données" },
          ],
        },
        {
          label: "Vos équipes à 6 mois",
          cells: [
            { mark: "no", text: "Toujours dépendantes" },
            { mark: "no", text: "Dépendantes de la régie" },
            { mark: "no", text: "Dépendantes du prestataire" },
            { mark: "meh", text: "Livrées à elles-mêmes" },
            { mark: "yes", text: "Autonomes : AI Champions formés" },
          ],
        },
        {
          label: "Quand ça s'arrête",
          cells: [
            { mark: "no", text: "Le rapport dort en PDF" },
            { mark: "no", text: "La régie part, le savoir aussi" },
            { mark: "no", text: "Tout part avec lui" },
            { mark: "no", text: "L'abonnement s'éteint" },
            { mark: "yes", text: "Tout reste chez vous : code, workflows, docs" },
          ],
        },
      ],
      scarcity: "Maximum 3 nouveaux clients par mois",
    },
    orbitCaption: "Notre stack. Utilisée tous les jours, en interne.",
  },
  problem: {
    badge: "Le problème",
    title:
      "Vous savez que l'IA peut transformer votre entreprise. Mais par où commencer ?",
    intro:
      "Vous avez essayé ChatGPT, peut-être même formé quelques personnes. Mais concrètement, rien n'a changé dans vos process.",
    points: [
      {
        title: "Vous ne savez pas quels process automatiser en priorité",
        description:
          "Trop d'options, pas de scoring ROI. Vous investissez sur des cas d'usage sympas, pas sur ceux qui impactent votre P&L.",
      },
      {
        title: "Vos équipes perdent leurs journées sur du travail sans valeur",
        description:
          "Reporting, saisie, relances, synthèses : du travail que l'IA absorbe à 60-80%. Vos meilleurs éléments méritent mieux.",
      },
      {
        title: "Vous avez testé ChatGPT ou Copilot. Rien n'a changé.",
        description:
          "Un outil ne change rien. Ce qui change tout : un système configuré pour votre façon de travailler, et des équipes formées pour l'utiliser.",
      },
    ],
  },
  method: {
    badge: "Comment on fonctionne",
    title: "Votre département IA externalisé. De l'audit à l'autonomie.",
    subtitle:
      "Semaine après semaine, voici ce qui existe chez vous : les livrables, les systèmes en production, et ce que vous y gagnez à chaque étape.",
    steps: [
      {
        number: "01",
        phase: "AI Scan",
        icon: "search",
        name: "Audit",
        duration: "Semaines 1-2",
        involvement: "Interviews de vos équipes",
        deliverable: "Cartographie complète et 3 cas d'usage rentables minimum",
        deliverableShort: "Cartographie + 3 cas chiffrés",
        whatWeDo: [
          "Cartographie de vos workflows réels",
          "Interviews des décideurs et opérationnels",
          "Scoring de maturité sur notre grille /24",
          "Chiffrage de chaque opportunité",
        ],
        gain: "Vous savez où l'IA rapporte chez vous : au moins 3 cas d'usage chiffrés, priorisés par ROI.",
        whyItMatters:
          "C'est ici que la plupart des projets IA meurent : un cas d'usage choisi à l'intuition plutôt qu'à l'impact. Vous ne signez la suite que si les chiffres tiennent.",
        next: "La roadmap passe en arbitrage",
      },
      {
        number: "02",
        phase: "AI Scan",
        icon: "map",
        name: "Stratégie",
        duration: "Semaine 2",
        involvement: "Revue et arbitrage en comité",
        deliverable: "Roadmap chiffrée et priorisée, validée ensemble",
        deliverableShort: "Roadmap ROI validée",
        whatWeDo: [
          "Priorisation par impact sur votre P&L",
          "Architecture d'intégration à votre stack",
          "Jalons et responsabilités",
          "Projections de gains par système",
        ],
        gain: "Une roadmap 3, 6 et 12 mois priorisée par ROI. Vous décidez sur des chiffres, pas des intuitions.",
        whyItMatters:
          "Une roadmap arbitrée en comité, c'est un cap et un sponsor interne. Sans elle, chaque décision se renégocie pendant 6 mois.",
        next: "Le développement démarre",
      },
      {
        number: "03",
        phase: "AI Engine",
        icon: "settings",
        name: "Développement",
        duration: "Semaines 3-6",
        involvement: "Minimale : on construit, vous validez",
        deliverable: "Systèmes construits, testés sur vos données",
        deliverableShort: "Systèmes testés sur vos données",
        whatWeDo: [
          "Construction des workflows et agents",
          "Connexion à vos outils existants",
          "Tests et contrôle qualité",
          "Documentation de chaque système",
        ],
        gain: "Vos premiers systèmes tournent en production dès le premier mois.",
        whyItMatters:
          "Testé sur vos vraies données, pas en démo. C'est la différence entre un POC qui impressionne et un outil que vos équipes gardent.",
        next: "Mise en production",
      },
      {
        number: "04",
        phase: "AI Engine",
        icon: "rocket",
        name: "Implémentation",
        duration: "En continu",
        involvement: "Vos retours terrain chaque semaine",
        deliverable: "1 à 2 systèmes par mois en production",
        deliverableShort: "Système 1 en production",
        whatWeDo: [
          "Déploiement dans vos workflows réels",
          "KPI mesuré avant et après",
          "Ajustements sur les retours d'usage",
          "Support jour même",
        ],
        gain: "Branché sur vos outils existants. Vos équipes ne changent pas d'environnement, elles gagnent du temps.",
        whyItMatters:
          "Un premier impact mesurable sous 30 jours : le moment où le projet commence à se payer.",
        next: "Vos équipes prennent la main",
      },
      {
        number: "05",
        phase: "AI Champions",
        icon: "graduation",
        name: "Formation",
        duration: "2h par semaine",
        involvement: "Participation active de vos équipes",
        deliverable: "Équipes autonomes, AI Champions identifiés et formés",
        deliverableShort: "Playbooks + AI Champions",
        whatWeDo: [
          "Sessions hands-on sur vos cas réels",
          "Formation de vos AI Champions",
          "Transmission des playbooks",
          "Montée en autonomie progressive",
        ],
        gain: "Des équipes autonomes, capables de faire tourner et d'améliorer les systèmes sans nous.",
        whyItMatters:
          "Un outil sans équipes formées meurt en trois mois. Formées sur leurs cas réels, vos équipes en redemandent.",
        next: "L'amélioration continue",
      },
      {
        number: "06",
        phase: "AI Champions",
        icon: "trending",
        name: "Itération",
        duration: "Chaque trimestre",
        involvement: "Revue stratégique avec la direction",
        deliverable: "Relance d'audit et nouveaux cas d'usage priorisés",
        deliverableShort: "Revue trimestrielle + nouveaux cas",
        whatWeDo: [
          "Mesure des gains réalisés",
          "Détection de nouvelles opportunités",
          "Optimisation des systèmes en production",
          "Veille intégrée à vos process",
        ],
        gain: "Chaque trimestre, de nouveaux cas d'usage à fort ROI identifiés et priorisés.",
        whyItMatters:
          "L'IA change tous les trimestres. Vos systèmes s'améliorent au lieu de vieillir, et la roadmap se recharge en continu.",
        next: "Le cycle recommence, plus haut",
      },
    ],
    cta: { label: "Auditer mes process", href: "/contact" },
  },
  proof: {
    badge: "Résultats prouvés",
    title: "Des résultats concrets, pas des promesses",
    subtitle:
      "Études de cas de transformations IA réussies avec métriques vérifiables.",
    cases: [
      {
        title: "Qatar Tourism",
        subtitle: "Chatbot IA WhatsApp",
        cover: "/images/case-studies/qatar-tourism-chatbot.png",
        metric: "18\u202F000\u202F$/an",
        metricLabel: "d'économies réalisées",
        secondMetric: "-40%",
        secondMetricLabel: "charge support",
        before:
          "Une équipe support débordée sur WhatsApp. Temps de réponse moyen : +4h.",
        after:
          "80% des demandes gérées en autonomie par l'agent IA. 24h/24, multilingue.",
        how: "Chatbot IA WhatsApp intégré au CRM existant",
        tags: ["Chatbot", "WhatsApp", "Support client"],
      },
      {
        title: "Sage",
        subtitle: "Référencement IA (GEO)",
        cover: "/images/case-studies/geo-dashboard.png",
        metric: "447",
        metricLabel: "prompts IA suivis pour piloter sa visibilité",
        before:
          "Des concurrents plus petits cités à leur place par ChatGPT, Gemini et Perplexity sur leurs requêtes clés.",
        after:
          "On cartographie où et comment leur marque ressort dans les LLMs, on analyse les concurrents cités, et on structure le contenu pour faire citer leur offre phare.",
        how: "Audit de visibilité IA + analyse concurrentielle sur les LLMs",
        tags: ["GEO", "SEO", "Visibilité IA"],
      },
      {
        title: "Shem's Publicité",
        subtitle: "Production marketing IA",
        cover: "/images/case-studies/shems-workflows-n8n.png",
        metric: "10x",
        metricLabel: "d'efficacité par équipe créative",
        before:
          "Une équipe de 3 produisait en 5 jours. Délais systématiquement dépassés.",
        after: "Même équipe, même volume, livré en moins de 24h.",
        how: "Automatisation du pipeline créatif : brief → génération → validation",
        tags: ["Automatisation", "Marketing", "Contenu"],
      },
    ],
    cta: { label: "Voir toutes les études de cas", href: "/etudes-de-cas" },
    ctaIntermediate: { label: "Obtenez les mêmes résultats", href: "/contact" },
  },
  offer: {
    badge: "Comment on fonctionne",
    title: "On ne vend pas des slides. On déploie.",
    subtitle:
      "On audite vos workflows. On identifie où l'IA crée de la valeur réelle. On développe, on implémente, on forme.",
    model: [
      {
        number: "01",
        title: "On audite vos workflows",
        description:
          "Cartographie de vos process, interviews de vos équipes, chronométrage de ce qui vous coûte du temps. Pas de théorie : on part de votre réalité opérationnelle.",
      },
      {
        number: "02",
        title: "On identifie où l'IA crée de la valeur",
        description:
          "Chaque opportunité est scorée par impact réel sur votre P&L. Vous repartez avec une roadmap priorisée et minimum 3 cas d'usage rentables, pas une liste de fonctionnalités.",
      },
      {
        number: "03",
        title: "On développe et on implémente",
        description:
          "Un ingénieur référent construit 1 à 2 systèmes par mois, directement dans vos workflows. Chaque système a un KPI mesuré avant/après. Si ça ne tourne pas, on itère jusqu'à ce que ça tourne.",
      },
      {
        number: "04",
        title: "On forme vos équipes jusqu'à l'autonomie",
        description:
          "2h de formation hands-on par semaine sur vos cas réels. On forme vos AI Champions, on documente tout, on vous transmet tout. À 6 mois, les systèmes tournent sans nous.",
      },
    ],
    phase1: {
      title: "Phase 1 : AUDIT",
      subtitle: "AI Scan · 1-2 semaines",
      summary:
        "Cartographie, interviews, scoring de maturité /24. Vous repartez avec une roadmap chiffrée et minimum 3 cas d'usage à fort ROI.",
      items: [
        "Cartographie complète des process existants",
        "Interviews des décideurs et opérationnels",
        "Scoring de maturité IA sur 6 axes (grille propriétaire)",
        "Roadmap chiffrée 3/6/12 mois avec ROI estimé",
        "Minimum 3 cas d'usage prêts à construire",
      ],
    },
    phase2: {
      title: "Phase 2 : BUILD",
      subtitle: "AI Engine · 3-6 mois",
      summary:
        "Un ingénieur IA référent. 1 à 2 systèmes en production par mois, 2h de formation par semaine, propriété client totale.",
      items: [
        "1 ingénieur IA référent, intégré à votre équipe",
        "1 à 2 systèmes IA livrés en production par mois",
        "2h de formation hands-on / semaine pour vos équipes",
        "Playbooks documentés, propriété client totale",
        "Support jour même + accès à +1\u202F500 automatisations",
      ],
    },
    phase3: {
      title: "Phase 3 : SCALE",
      subtitle: "AI Champions · En continu",
      summary:
        "Vos équipes deviennent autonomes. Optimisation continue, nouveaux cas d'usage, revue stratégique trimestrielle COMEX.",
      items: [
        "Programme AI Champions : vos équipes deviennent autonomes",
        "Optimisation continue des systèmes en production",
        "Identification de nouveaux cas d'usage en continu",
        "Veille IA intégrée directement dans vos systèmes",
        "Revue stratégique trimestrielle au niveau COMEX",
      ],
    },
    comparison: {
      withUs: [
        "Une seule offre, le même déroulé pour chaque client",
        "Ingénieur IA référent opérationnel dédié",
        "ROI mesuré dès le premier mois, KPI par KPI",
        "Propriété intellectuelle totale, zéro dépendance",
      ],
      without: [
        "6 à 12 mois pour recruter un expert IA senior",
        "ROI incertain sur des projets à 150\u202F000\u202F€+",
        "Dépendance totale à un prestataire unique",
        "70\u202F000\u202F€+/an de salaire fixe + charges",
      ],
    },
    cta: { label: "Discuter de votre projet", href: "/contact" },
    ctaIntermediate: { label: "Démarrer par l'audit", href: "/contact" },
  },
  connections: {
    badge: "Connexion",
    title: "On ne remplace rien. On se branche.",
    subtitle:
      "Vos outils restent. Nos systèmes s'y connectent, et le travail circule.",
    groups: [
      {
        number: "01",
        title: "Vos ventes et vos clients",
        detail: "Là où vit votre pipeline",
        tools: [
          { name: "Salesforce", logo: "/images/stack/salesforce-color.svg" },
          { name: "HubSpot", logo: "/images/stack/hubspot-color.svg" },
          { name: "Stripe", logo: "/images/stack/stripe-color.svg" },
          { name: "LinkedIn", logo: "/images/stack/linkedin-color.svg" },
          { name: "Zendesk", logo: "/images/stack/zendesk-color.svg" },
        ],
      },
      {
        number: "02",
        title: "Vos opérations et votre connaissance",
        detail: "Là où le travail s'organise",
        tools: [
          { name: "Jira", logo: "/images/stack/jira-color.svg" },
          { name: "SAP / votre ERP", logo: "/images/stack/sap-color.svg" },
          { name: "Notion", logo: "/images/stack/notion-color.svg" },
          { name: "Google Drive", logo: "/images/stack/googledrive-color.svg" },
          {
            name: "Google Sheets",
            logo: "/images/stack/googlesheets-color.svg",
          },
        ],
      },
      {
        number: "03",
        title: "Vos communications",
        detail: "Là où vos équipes échangent",
        tools: [
          { name: "Slack", logo: "/images/stack/slack-color.svg" },
          { name: "Gmail", logo: "/images/stack/gmail-color.svg" },
          {
            name: "Microsoft Teams",
            logo: "/images/stack/microsoftteams-color.svg",
          },
          { name: "WhatsApp", logo: "/images/stack/whatsapp-color.svg" },
        ],
      },
    ],
  },
  stackTable: {
    badge: "La stack, à découvert",
    title: "Chaque outil, maîtrisé. Des systèmes livrés sur chacun.",
    subtitle:
      "Du modèle d'IA au CRM, de l'automatisation à la visibilité : on couvre la chaîne complète. On ne découvre pas votre stack en mission — on a déjà construit dessus.",
    categories: [
      {
        name: "Cerveau IA",
        badge: "Raisonnement, génération, agents",
        tools: [
          {
            name: "Claude",
            logo: "/images/stack/claude-color.svg",
            detail: "Le moteur de vos agents et copilotes",
          },
          {
            name: "OpenAI",
            logo: "/images/stack/openai-color.svg",
            detail: "Modèles alternatifs selon les cas d'usage",
          },
          {
            name: "LangChain",
            logo: "/images/stack/langchain-color.svg",
            detail:
              "Le framework de vos agents RAG : vos systèmes branchés sur vos données",
          },
          {
            name: "Gemini",
            logo: "/images/stack/gemini-color.svg",
            detail: "Recherche et multimodal",
          },
          {
            name: "Microsoft Copilot",
            logo: "/images/stack/copilot-color.svg",
            detail: "Déployé et configuré dans votre environnement 365",
          },
        ],
      },
      {
        name: "Automatisation",
        badge: "Les workflows qui exécutent",
        tools: [
          {
            name: "n8n",
            logo: "/images/stack/n8n-color.svg",
            detail: "Workflows, webhooks, intégrations",
          },
          {
            name: "Make",
            logo: "/images/stack/make-color.svg",
            detail: "Scénarios rapides quand n8n est surdimensionné",
          },
          {
            name: "Zapier",
            logo: "/images/stack/zapier-color.svg",
            detail: "Déclencheurs simples entre vos apps",
          },
          {
            name: "Power Automate",
            logo: "/images/stack/powerautomate-color.svg",
            detail: "Vos process Microsoft orchestrés",
          },
        ],
      },
      {
        name: "Réunions, documents et connaissance",
        badge: "La mémoire de votre entreprise",
        tools: [
          {
            name: "Notion",
            logo: "/images/stack/notion-color.svg",
            detail: "La base de connaissance et le pilotage",
          },
          {
            name: "Google Drive",
            logo: "/images/stack/googledrive-color.svg",
            detail: "Vos documents, lus et exploités par les agents",
          },
          {
            name: "OneDrive",
            logo: "/images/stack/onedrive-color.svg",
            detail: "Votre environnement Microsoft, couvert aussi",
          },
          {
            name: "Fireflies",
            logo: "/images/stack/fireflies-color.png",
            detail: "Vos réunions transcrites et exploitées",
          },
          {
            name: "Slack",
            logo: "/images/stack/slack-color.svg",
            detail: "Les alertes et les validations",
          },
        ],
      },
      {
        name: "CRM et paiements",
        badge: "Vos systèmes de revenu",
        tools: [
          {
            name: "Salesforce",
            logo: "/images/stack/salesforce-color.svg",
            detail: "Votre pipeline mis à jour par les agents, sans saisie",
          },
          {
            name: "HubSpot",
            logo: "/images/stack/hubspot-color.svg",
            detail: "Pipeline et relances alimentés par les agents",
          },
          {
            name: "Stripe",
            logo: "/images/stack/stripe-color.svg",
            detail: "Facturation et encaissements suivis",
          },
          {
            name: "Lemlist",
            logo: "/images/stack/lemlist-color.png",
            detail: "Séquences de prospection pilotées par les agents",
          },
        ],
      },
      {
        name: "Visibilité SEO et GEO",
        badge: "Être trouvé, être cité par les IA",
        tools: [
          {
            name: "Ahrefs",
            logo: "/images/stack/ahrefs-color.svg",
            detail: "L'autorité de votre domaine, celle qui fait citer",
          },
          {
            name: "Profound",
            logo: "/images/stack/profound-color.svg",
            detail: "Votre part de voix dans les réponses des IA, suivie chaque mois",
          },
          {
            name: "Google Search Console",
            logo: "/images/stack/googlesearchconsole-color.svg",
            detail: "Ce que Google voit de votre site, sur votre compte",
          },
          {
            name: "Google Analytics",
            logo: "/images/stack/googleanalytics-color.svg",
            detail: "D'où viennent vos visiteurs, y compris depuis ChatGPT",
          },
        ],
      },
      {
        name: "Prototypage et développement",
        badge: "De l'idée à la production",
        tools: [
          {
            name: "Lovable",
            logo: "/images/stack/lovable-color.svg",
            detail: "Interfaces métier prototypées en direct",
          },
          {
            name: "GitHub",
            logo: "/images/stack/github-color.svg",
            detail: "Tout le code versionné, à vous",
          },
          {
            name: "Vercel",
            logo: "/images/stack/vercel-color.svg",
            detail: "Vos outils internes déployés et hébergés",
          },
        ],
      },
    ],
  },
  fleet: {
    badge: "Notre propre cuisine",
    title: "Un agent pour chaque étage de votre organisation",
    subtitle: "Un aperçu de ce qui tourne déjà, chez nous et chez nos clients.",
    systems: [
      {
        name: "Audit & pilotage GEO",
        tag: "Marketing",
        detail:
          "Votre visibilité dans les réponses IA suivie en continu : citations gagnées, part de voix face aux concurrents, positions SEO, actions priorisées",
        bricks: [
          "/images/stack/claude-color.svg",
          "/images/stack/profound-color.svg",
          "/images/stack/ahrefs-color.svg",
        ],
        internal: true,
      },
      {
        name: "Intelligence d'appels",
        tag: "Ventes",
        detail:
          "Chaque call analysé : objections, signaux d'achat, prochaine étape poussée dans le CRM",
        bricks: [
          "/images/stack/fireflies-color.png",
          "/images/stack/claude-color.svg",
          "/images/stack/salesforce-color.svg",
        ],
        internal: true,
      },
      {
        name: "Préparation de rendez-vous commerciaux",
        tag: "Ventes",
        detail:
          "Le brief complet prêt avant chaque rendez-vous : contexte, actualités, historique des échanges et angles d'attaque",
        bricks: [
          "/images/stack/claude-color.svg",
          "/images/stack/gmail-color.svg",
          "/images/stack/googlecalendar-color.svg",
        ],
        internal: true,
      },
      {
        name: "Traitement des factures fournisseurs",
        tag: "Finance",
        detail:
          "Chaque facture lue, rapprochée et pré-comptabilisée, seules les exceptions remontent",
        bricks: [
          "/images/stack/claude-color.svg",
          "/images/stack/sap-color.svg",
          "/images/stack/n8n-color.svg",
        ],
        internal: false,
      },
      {
        name: "Tableaux de bord de pilotage",
        tag: "Direction",
        detail:
          "Vos KPIs à jour chaque matin, et vos équipes répondent elles-mêmes à leurs questions data",
        bricks: [
          "/images/stack/powerbi-color.svg",
          "/images/stack/powerautomate-color.svg",
          "/images/stack/microsoftteams-color.svg",
        ],
        internal: false,
      },
      {
        name: "Qualification et rappel des leads en 5 minutes",
        tag: "Ventes",
        detail:
          "Chaque lead entrant qualifié, enrichi et rappelé dans les 5 minutes, jour et nuit : un lead contacté en 5 minutes se qualifie 21 fois mieux qu'à 30",
        bricks: [
          "/images/stack/claude-color.svg",
          "/images/stack/hubspot-color.svg",
          "/images/stack/gmail-color.svg",
        ],
        internal: false,
      },
      {
        name: "Cockpit de pilotage quotidien",
        tag: "Direction",
        detail:
          "Le brief de décision du matin, généré avant l'arrivée au bureau",
        bricks: [
          "/images/stack/claude-color.svg",
          "/images/stack/notion-color.svg",
          "/images/stack/n8n-color.svg",
        ],
        internal: true,
      },
      {
        name: "Suivi de santé des missions",
        tag: "Direction",
        detail:
          "Chaque mission client scorée chaque semaine, les signaux faibles détectés avant que la satisfaction ne baisse",
        bricks: [
          "/images/stack/claude-color.svg",
          "/images/stack/notion-color.svg",
          "/images/stack/slack-color.svg",
        ],
        internal: true,
      },
      {
        name: "Relances d'impayés et encaissement",
        tag: "Finance",
        detail:
          "Chaque facture en retard relancée au bon moment, sur le bon ton, avec escalade automatique : le DSO fond, la trésorerie respire",
        bricks: [
          "/images/stack/claude-color.svg",
          "/images/stack/stripe-color.svg",
          "/images/stack/gmail-color.svg",
        ],
        internal: false,
      },
      {
        name: "Agent support client",
        tag: "Opérations",
        detail:
          "Le support de premier niveau géré sur WhatsApp et Telegram, jour et nuit",
        bricks: [
          "/images/stack/whatsapp-color.svg",
          "/images/stack/telegram-color.svg",
          "/images/stack/openai-color.svg",
        ],
        internal: false,
      },
      {
        name: "Réponse aux appels d'offres",
        tag: "Ventes",
        detail:
          "Le dossier de réponse assemblé en heures au lieu de jours : analyse du cahier des charges, réponses tirées de votre bibliothèque, mise en forme prête à relire",
        bricks: [
          "/images/stack/claude-color.svg",
          "/images/stack/googledrive-color.svg",
          "/images/stack/notion-color.svg",
        ],
        internal: false,
      },
    ],
    buildYours: {
      title: "Construisez le vôtre",
      subtitle: "Décrivez-nous le process, on construit le système.",
      href: "#reserver",
    },
  },
  compliance: {
    badge: "Confiance et conformité",
    title: "Vos données. Vos règles.",
    subtitle:
      "Un vrai département IA gère aussi la conformité. RGPD, AI Act, charte interne : on les intègre dans chaque déploiement, pas après coup.",
    pillars: [
      {
        icon: "shield",
        title: "RGPD et CNIL",
        detail:
          "Base légale, minimisation des données et information des personnes, pour chaque déploiement, en lien avec votre DPO.",
      },
      {
        icon: "scale",
        title: "AI Act anticipé",
        detail:
          "Cartographie et classification de vos systèmes IA pendant l'audit, transparence intégrée par défaut dans les agents livrés.",
      },
      {
        icon: "file",
        title: "Charte IA sur mesure",
        detail:
          "Usages autorisés, données à ne jamais saisir, validation humaine : la charte que recommande la CNIL, construite avec vous dès l'audit.",
      },
      {
        icon: "book",
        title: "Registre et formation",
        detail:
          "Nos formations répondent à l'exigence de maîtrise de l'IA de l'article 4, avec un registre documenté des systèmes et des formations.",
      },
    ],
    cta: {
      label: "Notre approche de la gouvernance IA",
      href: "/gouvernance-ia",
    },
  },
  offers: {
    badge: "Nos offres",
    title: "Trois façons de travailler avec nous",
    subtitle:
      "Un point d'entrée pour chaque situation. Le même déroulé éprouvé partout.",
    items: [
      {
        name: "Transformation IA",
        promise:
          "Le programme complet : audit, systèmes en production, équipes autonomes.",
        for: "Pour les PME et ETI qui veulent passer AI-first, pas juste tester.",
        href: "/ai-transformation",
        illustration: "/images/3d/roadmap-roi.png",
      },
      {
        name: "Formation IA",
        promise:
          "Vos équipes formées à l'IA sur leurs vrais cas d'usage, pas sur des slides.",
        for: "Sur vos cas d'usage réels, jamais sur des slides génériques.",
        href: "/formation-ia-entreprise",
        illustration: "/images/3d/chapeau-formation-logos.png",
      },
      {
        name: "Forward Deployed Engineer",
        promise: "Un ingénieur IA déployé dans votre équipe.",
        for: "Il code chez vous, avec vous, dans vos outils.",
        href: "/forward-deployed-engineer",
        illustration: "/images/3d/chip-process.png",
      },
    ],
  },
  results: {
    badge: "Impact mesurable",
    counters: [
      { target: 200, suffix: "+", label: "Systèmes IA déployés" },
      { target: 10000, suffix: "+", label: "Professionnels formés" },
      { target: 7, suffix: "h/sem", label: "Récupérées par collaborateur" },
    ],
    benefits: [
      {
        title: "5 à 10h/semaine récupérées par collaborateur",
        description:
          "Sur les tâches répétitives : saisie, reporting, synthèses, relances. Des heures qui retournent à ce qui compte vraiment : la relation client et la croissance.",
      },
      {
        title: "ROI visible dès le mois 1, pas en fin d'année",
        description:
          "Chaque système déployé a un KPI attaché. Vous mesurez l'impact en temps réel. Pas de buzzwords, pas de promesses vagues. Des chiffres.",
      },
      {
        title: "Des équipes qui montent en compétence chaque semaine",
        description:
          "2h de formation hands-on par semaine, sur vos cas d'usage réels. Nos formations (IA Généraliste, Vibe Coding, Sales IA, Copilot) forment vos AI Champions : les référents qui portent la suite.",
      },
      {
        title: "Un avantage qui se mesure en données accumulées",
        description:
          "Vos systèmes s'améliorent avec l'usage. Vos concurrents qui « y réfléchissent encore » repartiront de zéro dans 6 mois. Vous, vous aurez 6 mois de données.",
      },
    ],
  },
  testimonials: {
    badge: "Témoignages",
    title: "Ce que disent nos clients",
    items: [
      {
        quote:
          "Enfin un accompagnement à l'IA qui démystifie le sujet et donne les vraies clés pour l'intégrer efficacement. Une équipe compétente, pédagogue et souriante. Je vais commencer à en faire une utilisation quotidienne, c'est sans doute ma dernière publication créée sans IA.",
        name: "Éric Solal",
        title: "Président",
        company: "ESN Engit",
        photo: "/images/testimonials/eric-solal-engit.png",
      },
      {
        quote:
          "L'accompagnement AI Makers nous a permis d'automatiser des processus qui prenaient des heures. Le ROI a été visible dès le premier mois.",
        name: "Vanessa Braflan",
        title: "Directrice",
        company: "Empruntis Montgeron",
        photo: "/images/testimonials/vanessa-braflan-empruntis.png",
      },
      {
        quote:
          "AI Makers a rendu le GEO compréhensible et exploitable par nos équipes métiers. Leur capacité à comprendre rapidement les enjeux business et à traduire des sujets techniques en recommandations actionnables a clairement fait la différence. Un partenaire sérieux et pédagogue.",
        name: "Mickaël Mina",
        title: "Directeur IA",
        company: "Sage",
        photo: "/images/testimonials/mickael-mina-sage.png",
      },
      {
        quote:
          "L'équipe AI Makers s'est distinguée par une approche humaine et une réelle disponibilité. Leur force de proposition nous a aidés à faire évoluer notre réflexion stratégique et à développer des outils pragmatiques, directement orientés vers l'impact.",
        name: "Mariem Lahlou",
        title: "Managing Partner",
        company: "ThinkONE",
        photo: "/images/testimonials/mariem-lahlou-thinkone.jpeg",
      },
      {
        quote:
          "Avant AI Makers, notre défi était d'utiliser l'IA de manière intelligente et sécurisée, en obtenant le meilleur avantage tout en gardant notre autonomie. La formation a fait la différence : des exemples appliqués à notre environnement, la démonstration d'usages très concrets, et une vision claire des multiples usages de l'IA dans nos métiers.",
        name: "Hicham Boustit",
        title: "Directeur du Contrôle de gestion",
        company: "Délifrance",
        photo: "/images/testimonials/hicham-boustit-delifrance.jpg",
      },
      {
        quote:
          "L'enthousiasme est garanti, tout comme les gains de productivité et de créativité, donc de retour sur investissement rapidement mesurables. À refaire !",
        name: "Hervé Landau",
        title: "Président",
        company: "SAS Family Holdings",
        photo: "/images/testimonials/herve-landau-sas-family-holdings.jpg",
      },
      {
        quote:
          "Voir l'IA comme un outil puissant s'il est utilisé correctement. La formation m'a permis de découvrir des outils différents selon le besoin et de mieux formuler mes demandes. L'approche du formateur pour des non initiés est remarquable.",
        name: "Jennifer Vigouroux",
        title: "Chargée d'innovation Bioproduction",
        company: "BioValley France",
        photo: "/images/testimonials/jennifer-vigouroux-biovalley.jpg",
      },
      {
        quote:
          "Une équipe experte qui sait accompagner et former. Les équipes qui ont bénéficié de la formation sont aujourd'hui autonomes et l'IA est un copilote dans leur quotidien.",
        name: "Lamia Ajana",
        title: "Directrice Générale",
        company: "Shem's Publicité",
        photo: "/images/testimonials/lamia-ajana-shems.jpg",
      },
      {
        quote:
          "AI Makers nous accompagne bien au-delà de la formation : un operating system pour structurer notre activité, des agents IA personnalisés pour notre GTM et nos process internes. Leur force : rendre l'IA applicable à nos besoins métier, avec du temps gagné, des automatisations, et des gains de performance pour la structure.",
        name: "Nicole Neumann",
        title: "Responsable Innovation",
        company: "Gepromed",
        photo: "/images/testimonials/nicole-neumann-gepromed.jpg",
      },
      {
        quote:
          "AI Makers a construit notre AI Operating System : les tâches répétitives sont automatisées, les process sont structurés, et nos équipes gagnent en performance au quotidien. Pas un outil de plus : un système qui fait tourner l'activité.",
        name: "Ziyad El Mouniri",
        title: "CEO & Fondateur",
        company: "Addictest",
        photo: "/images/testimonials/ziyad-el-mouniri-addictest.jpg",
      },
      {
        quote:
          "AI Makers nous accompagne avec une approche pragmatique, adaptée aux exigences du monde de la santé et de la recherche : des systèmes concrets qui font gagner du temps à nos équipes, et un vrai transfert de compétences. Un partenaire qui structure notre transformation IA.",
        name: "Lilla Merabet",
        title: "Directrice générale",
        company: "Fondation Force",
        photo: "/images/testimonials/lilla-merabet-fondation-force.jpg",
      },
      {
        quote:
          "La formation a complètement changé notre façon de travailler. Nos équipes sont maintenant autonomes sur les outils IA et gagnent un temps considérable au quotidien.",
        name: "Marie-Pierre Picon",
        title: "Attachée scientifique",
        company: "Amgen",
        photo: "/images/testimonials/marie-pierre-picon-amgen.png",
      },
      {
        quote:
          "L'adoption de l'IA dans nos équipes a été un vrai succès grâce au programme AI Champions. La méthodologie est rodée et efficace.",
        name: "Brigitte Meyer",
        title: "Attachée scientifique",
        company: "Amgen",
        photo: "/images/testimonials/brigitte-meyer-amgen.png",
      },
    ],
  },
  booking: {
    badge: "Réservez votre diagnostic",
    title: "30 minutes. Une session de travail, pas une démo.",
    subtitle:
      "On analyse vos workflows en direct et vous repartez avec vos 3 premiers quick wins IA, que vous travailliez avec nous ou non.",
    benefits: [
      "Cartographie express de vos opportunités IA",
      "3 quick wins priorisés par ROI",
      "Première roadmap actionnable",
    ],
    host: {
      name: "Othmane Halim",
      role: "CEO, AI Makers",
      photo: "/images/photo-othmane-halim.jpeg",
      responseTime: "Répond en général en 1h",
    },
    emailFallback: {
      prefix: "Pas envie d'un call ?",
      email: "othmane@aimakers.fr",
      emailHref:
        "https://mail.google.com/mail/?view=cm&fs=1&to=othmane@aimakers.fr",
    },
  },
  process: {
    badge: "Comment ça marche",
    title: "De zéro à AI-First en 90 jours",
    cta: { label: "Prendre rendez-vous", href: "/contact" },
    steps: [
      {
        number: "01",
        timing: "Jour 1",
        title: "Appel de diagnostic",
        description:
          "On analyse vos workflows, on identifie les 3 cas d'usage à plus fort ROI, on vous donne une première roadmap. Gratuit, sans engagement, avec des recommandations concrètes même si on ne travaille pas ensemble.",
        deliverable: "Roadmap IA personnalisée",
      },
      {
        number: "02",
        timing: "Semaines 1–4",
        title: "Audit & premiers quick wins",
        description:
          "Audit complet sur site (3 jours), scoring ROI de chaque opportunité, déploiement des premiers systèmes IA. Vos équipes voient les résultats avant la fin du premier mois.",
        deliverable: "Systèmes IA en production",
      },
      {
        number: "03",
        timing: "Mois 2–6",
        title: "Déploiement continu & autonomie",
        description:
          "1 à 2 nouveaux systèmes IA par mois. Formation de vos AI Champions. Documentation complète. À 6 mois, vous n'avez plus besoin de nous. C'est ça, le vrai objectif.",
        deliverable: "Équipes 100% autonomes",
      },
    ],
  },
  faq: {
    badge: "Questions fréquentes",
    title: "Les questions qu'on nous pose vraiment en call découverte",
    items: [
      {
        question: "Qu'est-ce qu'AI Makers ?",
        answer:
          "AI Makers est un cabinet de transformation IA en France et au Maroc, fondé par Othmane Halim, avec des bureaux à Paris (60 rue François 1er, 75008) et Casablanca. Le cabinet accompagne les PME, ETI et grands groupes dans l'intégration opérationnelle de l'intelligence artificielle via la Méthode AI-First, un framework propriétaire en 3 phases : Audit (AI Scan), Build (AI Engine), Scale (AI Champions). À ce jour, AI Makers a accompagné plus de 50 entreprises, déployé plus de 200 systèmes IA (plusieurs systèmes construits par client) et formé plus de 10 000 professionnels en France, au Maroc et en zone francophone.",
      },
      {
        question: "Quels types d'entreprises accompagnez-vous ?",
        answer:
          "AI Makers travaille principalement avec trois profils : les PME et ETI (50 à 500 salariés) qui veulent structurer leur stratégie IA sans recruter, les agences de communication qui cherchent à intégrer l'IA dans leur production créative, et les startups et scale-ups qui veulent automatiser leurs opérations pour croître sans augmenter leurs effectifs. Le dénominateur commun : une direction convaincue et un budget alloué à la transformation IA.",
      },
      {
        question:
          "Quelle est la différence entre AI Makers et une ESN ou un freelance IA ?",
        answer:
          "Une ESN vend des jours-homme et des livrables techniques. Un freelance vend une expertise ponctuelle sur un outil ou un périmètre. AI Makers vend une transformation complète : audit des workflows, déploiement des systèmes IA, formation des équipes et autonomisation. On ne part pas avant que vos équipes soient autonomes. C'est la différence entre acheter du code et acheter un résultat.",
      },
      {
        question: "Pourquoi pas un freelance IA à 500€/jour ?",
        answer:
          "Un freelance vous vend des jours. Nous vendons un résultat. Quand le freelance part, son savoir part avec lui. Quand on part, vos AI Champions restent, la documentation reste, et tout le code vous appartient.",
      },
      {
        question:
          "Comment se structure l'accompagnement et quel ROI attendre ?",
        answer:
          "L'accompagnement fonctionne au mois, avec un engagement initial de 3 ou 6 mois selon le périmètre, puis se poursuit au mois avec un préavis de 30 jours. En moyenne, nos clients constatent un gain de 7 heures par semaine par collaborateur concerné, mesuré système par système, avec un KPI de référence établi avant chaque déploiement. Le cadrage précis (périmètre, équipe, investissement) se fait lors du diagnostic gratuit de 30 minutes.",
      },
      {
        question: "Comment se déroulent les formations AI Makers ?",
        answer:
          "En hands-on, sur vos cas d'usage réels, jamais sur des slides génériques. Les formats : sessions dédiées (IA Généraliste, Vibe Coding, GTM Sales IA, Microsoft Copilot) ou 2h par semaine intégrées dans l'accompagnement, en présentiel à Paris et Casablanca ou à distance. L'objectif est toujours le même : des équipes autonomes, pas des participants qui ont « vu une démo ».",
      },
      {
        question: "Combien de temps dure un accompagnement typique ?",
        answer:
          "L'engagement minimum est de 3 mois. Les semaines 1 à 2 sont consacrées à l'audit AI Scan et à la roadmap chiffrée. Dès le premier mois, les premiers systèmes partent en production. La durée médiane d'un accompagnement complet est de 6 à 9 mois pour atteindre l'autonomie totale des équipes.",
      },
      {
        question: "Où intervenez-vous géographiquement ?",
        answer:
          "AI Makers opère depuis deux bureaux permanents : Paris (75008) et Casablanca, Maroc. Nous intervenons en présentiel en France métropolitaine et au Maroc, et à distance pour l'ensemble de la zone francophone (Belgique, Suisse, Canada, Afrique du Nord). Les audits sur site peuvent être réalisés dans toute la France.",
      },
      {
        question:
          "Que se passe-t-il si les résultats ne sont pas au rendez-vous ?",
        answer:
          "Chaque système déployé est mesuré sur un KPI de référence établi avant sa mise en production : l'impact se constate chiffres en main, pas sur une impression. Et la propriété intellectuelle totale vous appartient : le jour où on part, les systèmes, les playbooks et la documentation restent chez vous.",
      },
    ],
  },
  finalCta: {
    title: "30 minutes pour identifier vos 3 premiers quick wins IA",
    subtitle:
      "On analyse vos workflows, on identifie les opportunités à fort ROI, on vous donne une roadmap. Gratuit, sans engagement, et utile même si vous ne travaillez pas avec nous.",
    cta: { label: "Réserver mon diagnostic gratuit", href: "/contact" },
    urgency:
      "Maximum 3 nouveaux clients par mois. Chaque client a un ingénieur IA référent, onboardé 2 semaines avant le kick-off. Notre capacité est physiquement limitée, pas artificiellement.",
  },
} as const;

/**
 * Preuve sociale de la section réservation (id="reserver") :
 * carrousel de témoignages, stats de satisfaction et badges partenaires.
 */
export const bookingProof = {
  stats: {
    rating: "9,6/10",
    ratingLabel: "satisfaction moyenne",
    reco: "100%",
    recoLabel: "de recommandations",
  },
  testimonials: [
    {
      quote:
        "L'enthousiasme est garanti, tout comme les gains de productivité et de créativité, donc de retour sur investissement rapidement mesurables. À refaire !",
      author: "Hervé Landau",
      role: "Président",
      company: "SAS Family Holdings",
      photo: "/images/testimonials/herve-landau-sas-family-holdings.jpg",
    },
    {
      quote:
        "Un partenaire sérieux et pédagogue qui a permis de rendre un sujet technique comme le GEO compréhensible et exploitable par les équipes métiers. L'écoute et la réactivité ont clairement fait la différence.",
      author: "Mickaël Mina",
      role: "Directeur IA",
      company: "Sage",
      photo: "/images/testimonials/mickael-mina-sage.png",
    },
    {
      quote:
        "Voir l'IA comme un outil puissant s'il est utilisé correctement. La formation m'a permis de découvrir des outils différents selon le besoin et de mieux formuler mes demandes. L'approche du formateur pour des non initiés est remarquable.",
      author: "Jennifer Vigouroux",
      role: "Chargée d'innovation Bioproduction",
      company: "BioValley France",
      photo: "/images/testimonials/jennifer-vigouroux-biovalley.jpg",
    },
    {
      quote:
        "Une équipe experte qui sait accompagner et former. Les équipes qui ont bénéficié de la formation sont aujourd'hui autonomes et l'IA est un copilote dans leur quotidien.",
      author: "Lamia Ajana",
      role: "Directrice Générale",
      company: "Shem's Publicité",
      photo: "/images/testimonials/lamia-ajana-shems.jpg",
    },
    {
      quote:
        "Leur force de proposition a été déterminante : elle nous a aidés à faire évoluer notre réflexion stratégique autour de notre orientation IA. Une collaboration riche, structurante et particulièrement utile.",
      author: "Mariem Lahlou",
      role: "Managing Partner",
      company: "ThinkONE",
      photo: "/images/testimonials/mariem-lahlou-thinkone.jpeg",
    },
  ],
  badges: [
    { img: "/images/badges/osez-lia.png", label: "Ambassadeur Osez l'IA" },
    { img: "/images/badges/anthropic.svg", label: "Partenaire Anthropic" },
  ],
} as const;

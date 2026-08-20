/**
 * Chrome anglais — barre de navigation, mega-menu, pied de page.
 *
 * ⚠️ TRADUIT, PAS REPRIS D'UN MASTER. Les masters `[EN] website-content/`
 * couvrent les champs de contenu des pages, jamais le chrome des gabarits :
 * il n'existe aucun master de navigation. Ces libellés sont donc une traduction
 * fidèle du FR en ligne — même promesse, même registre, aucune promesse
 * nouvelle — et attendent une relecture éditoriale.
 *
 * Deux écarts assumés par rapport au FR :
 * • Le groupe « Par ville » et les 12 liens « Formation IA <ville> » du pied de
 *   page ne sont pas repris : ce sont des pages de marché français, et le
 *   master les classe explicitement en faible priorité EN.
 * • Le hub secteurs et ses pages ne partagent pas le même préfixe côté EN
 *   (/ai-by-industry vs /industries/*) ; c'est ce que prescrivent les masters.
 *
 * Les href pointent vers les routes EN de ROUTE_MAP (src/lib/i18n.ts). Elles
 * n'existent pas encore : ce fichier précède les pages, d'où EN_PUBLISHED qui
 * contrôle ce qu'on annonce réellement.
 */

/** Liens simples de la barre (les menus déroulants sont dans megaMenuEn). */
export const navItemsEn = [
  { label: "Contact", href: "/en/contact" },
] as const;

export const megaMenuEn = {
  offres: {
    label: "Services",
    hubHref: null,
    groups: [
      {
        title: "Deploy",
        items: [
          {
            label: "AI Transformation",
            description: "Your AI department, from audit to scale",
            href: "/en/ai-transformation",
          },
          {
            label: "Data & AI Platform",
            description: "Your silos unified, agents plugged into them",
            href: "/en/enterprise-data-platform",
          },
          {
            label: "Forward Deployed Engineer",
            description: "An engineer inside your team, week one",
            href: "/en/forward-deployed-engineer",
          },
          {
            label: "AI Operating System",
            description: "The company that runs on AI",
            href: "/en/ai-operating-system",
          },
        ],
      },
      {
        title: "Build",
        items: [
          {
            label: "Process automation",
            description: "Your tools connected, nobody re-keys anything",
            href: "/en/ai-automation",
          },
          {
            label: "AI Audit",
            description: "Costed roadmap, 3 prioritised use cases",
            href: "/en/ai-readiness-assessment",
          },
          {
            label: "SEO & GEO",
            description: "Visible on Google and inside ChatGPT",
            href: "/en/generative-engine-optimization",
          },
          {
            label: "AI Agency",
            description: "The team that ships to production",
            href: "/en/ai-consulting",
          },
        ],
      },
      {
        title: "Free",
        items: [
          {
            label: "AI Diagnostic /24",
            description: "Your AI maturity in 12 questions",
            href: "/en/ai-maturity-assessment",
          },
          {
            label: "ROI Calculator",
            description: "Your estimated gains in 30 seconds",
            href: "/en/ai-roi-calculator",
          },
          {
            label: "AI-First Playbook",
            description: "The complete guide, 54 pages (PDF)",
            href: "/en/ai-playbook",
          },
        ],
      },
    ],
    featured: {
      kicker: "Featured",
      title: "Forward Deployed Engineer",
      description:
        "The most in-demand role in AI. 20+ deployed with our clients this year.",
      href: "/en/forward-deployed-engineer",
      image: "/images/formations/session-finance-groupe.jpg",
      imagePosition: "center 45%",
      ctaLabel: "See how it works",
    },
  },

  formations: {
    label: "Training",
    hubHref: "/en/ai-training-for-teams",
    groups: [
      {
        title: "Programmes",
        items: [
          {
            label: "All training programmes",
            description: "The catalogue: 6 programmes, sessions and trainers",
            href: "/en/ai-training-for-teams",
          },
          {
            label: "AI Champions",
            description: "The foundation: understand it and save time from day one",
            href: "/en/ai-training-for-teams/ai-literacy",
          },
          {
            label: "Vibe Coding",
            description: "Build your own tools without knowing how to code",
            href: "/en/ai-training-for-teams/vibe-coding",
          },
          {
            label: "AI for Creative & Advertising",
            description: "AI takes the variants, your team keeps the concept",
            href: "/en/ai-training-for-teams/ai-for-advertising",
          },
          {
            label: "Go-to-Market & Sales",
            description: "Clay, Lemlist, FullEnrich: the acquisition machine",
            href: "/en/ai-training-for-teams/ai-sales-training",
          },
          {
            label: "Microsoft Copilot",
            description: "Finally get a return on your 365 licences",
            href: "/en/ai-training-for-teams/microsoft-copilot",
          },
          {
            label: "Mastering Claude at work",
            description: "From chat to real automation",
            href: "/en/ai-training-for-teams/claude-training",
          },
        ],
      },
      // Le groupe « Par ville » du FR n'a pas d'équivalent ici : pages de
      // marché français, faible priorité EN d'après le master.
    ],
    featured: {
      kicker: "2026 catalogue",
      title: "The 6 programmes, in PDF",
      description: "Objectives, modules and formats. 10,000+ professionals trained.",
      href: "/en/ai-training-for-teams#catalogue",
      image: "/images/formations/masterclass-amphi.png",
      imagePosition: "center 45%",
      ctaLabel: "Get the catalogue",
    },
  },

  secteurs: {
    label: "Industries",
    hubHref: "/en/ai-by-industry",
    groups: [
      {
        title: "By industry",
        items: [
          {
            label: "Marketing agencies",
            description: "Produce more without diluting the creative",
            href: "/en/industries/ai-for-marketing-agencies",
          },
          {
            label: "Small & mid-sized business",
            description: "Concrete gains, no IT department required",
            href: "/en/industries/ai-for-small-business",
          },
          {
            label: "Life sciences, biotech & medtech",
            description: "Scientific rigour, time given back",
            href: "/en/industries/ai-for-life-sciences",
          },
          {
            label: "Doctors & medical practices",
            description: "Less admin, more care",
            href: "/en/industries/ai-for-medical-practices",
          },
          {
            label: "IT services firms",
            description: "Deliver more, staff better",
            href: "/en/industries/ai-for-it-services",
          },
          {
            label: "Consulting & market research",
            description: "Analyse faster, deliver deeper",
            href: "/en/industries/ai-for-market-research",
          },
          {
            label: "Hospitality, travel & leisure",
            description: "Customer relationships at scale",
            href: "/en/industries/ai-for-hospitality",
          },
          {
            label: "Banking, insurance & brokerage",
            description: "Faster case handling, compliance included",
            href: "/en/industries/ai-for-financial-services",
          },
        ],
      },
    ],
    featured: null,
  },

  cabinet: {
    label: "About",
    hubHref: "/en/about",
    groups: [
      {
        title: "Who we are",
        items: [
          {
            label: "About AI Makers",
            description: "The firm that applies what it sells",
            href: "/en/about",
          },
          {
            label: "The team",
            description: "Ten people, the output of a team of 60",
            href: "/en/team",
          },
          {
            label: "Our capacity",
            description: "Three new clients a month, no more",
            href: "/en/capacity",
          },
          {
            label: "AI governance & security",
            description: "GDPR, AI Act, your data: built in by default",
            href: "/en/security",
          },
          {
            label: "AI in Morocco",
            // Casablanca, comme le FR (« Notre équipe à Casablanca ») et comme
            // l'adresse canonique de `site-config`. Le menu anglais annonçait
            // Rabat sur toutes les pages EN.
            description: "Our team in Casablanca",
            href: "/en/ai-morocco",
          },
        ],
      },
      {
        title: "Resources",
        items: [
          {
            label: "Case studies",
            description: "Measured results, real clients",
            href: "/en/ai-case-studies",
          },
          {
            // Le seul contenu EN natif du site : écrit en anglais, pas traduit.
            label: "30 Days of Claude Code",
            description: "Free course, one short page a day",
            href: "/en/claude-code-challenge",
          },
          {
            label: "AI-First Playbook",
            description: "The complete guide (PDF)",
            href: "/en/ai-playbook",
          },
          {
            label: "Blog",
            description: "Fieldwork, methods, lessons learned",
            href: "/en/blog",
          },
          {
            label: "AI glossary",
            description: "30 definitions, no jargon",
            href: "/en/ai-glossary",
          },
          {
            label: "Why now",
            description: "The manifesto, with the numbers",
            href: "/en/why-now",
          },
        ],
      },
    ],
    featured: {
      kicker: "The dream team",
      title: "The AI Makers team",
      description:
        "Ten people, a fleet of agents, the output of a team of 60. No anonymous bench.",
      href: "/en/team",
      image: "/images/formation-hero.png",
      imagePosition: "center 30%",
      ctaLabel: "Meet the team",
    },
  },
} as const;

export const footerNavEn = {
  formations: [
    { label: "All AI training", href: "/en/ai-training-for-teams" },
    {
      label: "AI Champions",
      href: "/en/ai-training-for-teams/ai-literacy",
    },
    { label: "Vibe Coding", href: "/en/ai-training-for-teams/vibe-coding" },
    {
      label: "AI for Creative & Advertising",
      href: "/en/ai-training-for-teams/ai-for-advertising",
    },
    {
      label: "Go-to-Market & Sales",
      href: "/en/ai-training-for-teams/ai-sales-training",
    },
    {
      label: "Microsoft Copilot",
      href: "/en/ai-training-for-teams/microsoft-copilot",
    },
    {
      label: "Mastering Claude at work",
      href: "/en/ai-training-for-teams/claude-training",
    },
    // Les 12 liens « Formation IA <ville> » du FR ne sont pas repris : pages de
    // marché français. Un seul lien vers le hub des lieux, si besoin.
    { label: "Training locations", href: "/en/ai-training-locations" },
  ],
  services: [
    { label: "AI Transformation", href: "/en/ai-transformation" },
    { label: "AI training", href: "/en/ai-training-for-teams" },
    { label: "Forward Deployed Engineer", href: "/en/forward-deployed-engineer" },
    { label: "AI Operating System", href: "/en/ai-operating-system" },
    { label: "SEO & GEO", href: "/en/generative-engine-optimization" },
    { label: "AI Agency", href: "/en/ai-consulting" },
    { label: "Process automation", href: "/en/ai-automation" },
    { label: "AI Audit", href: "/en/ai-readiness-assessment" },
    {
      label: "AI for marketing agencies",
      href: "/en/industries/ai-for-marketing-agencies",
    },
    { label: "AI for small business", href: "/en/industries/ai-for-small-business" },
    {
      label: "AI for life sciences & biotech",
      href: "/en/industries/ai-for-life-sciences",
    },
    { label: "AI for doctors", href: "/en/industries/ai-for-medical-practices" },
    { label: "AI for IT services", href: "/en/industries/ai-for-it-services" },
    {
      label: "AI for consulting & research",
      href: "/en/industries/ai-for-market-research",
    },
    {
      label: "AI for hospitality & travel",
      href: "/en/industries/ai-for-hospitality",
    },
    {
      label: "AI for banking & brokerage",
      href: "/en/industries/ai-for-financial-services",
    },
    { label: "Free AI diagnostic", href: "/en/ai-maturity-assessment" },
    { label: "AI ROI calculator", href: "/en/ai-roi-calculator" },
  ],
  resources: [
    { label: "Case studies", href: "/en/ai-case-studies" },
    { label: "Free tools", href: "/en/ai-tools" },
    { label: "All industries", href: "/en/ai-by-industry" },
    { label: "AI-First Playbook (PDF)", href: "/en/ai-playbook" },
    { label: "30 Days of Claude Code", href: "/en/claude-code-challenge" },
    { label: "Why now", href: "/en/why-now" },
    { label: "Blog", href: "/en/blog" },
    { label: "AI glossary", href: "/en/ai-glossary" },
  ],
  company: [
    { label: "About", href: "/en/about" },
    { label: "The team", href: "/en/team" },
    { label: "Our story: the founder", href: "/en/founder" },
    { label: "AI governance & security", href: "/en/security" },
    { label: "Our capacity", href: "/en/capacity" },
    { label: "AI in Morocco", href: "/en/ai-morocco" },
    { label: "Careers", href: "/en/careers" },
    { label: "Contact", href: "/en/contact" },
  ],
  legal: [
    { label: "Legal notice", href: "/en/legal-notice" },
    { label: "Privacy policy", href: "/en/privacy" },
    { label: "Terms of sale", href: "/en/terms" },
  ],
} as const;

/**
 * Preuve sous le calendrier, en anglais.
 *
 * Les six témoignages sont TRADUITS, pas réécrits : ce sont les propos de
 * personnes réelles, nommées, dans des entreprises réelles. La consigne du
 * master est explicite — « do not rewrite the substance ». Un témoignage dont
 * on durcit le propos en le traduisant devient une citation que la personne
 * n'a jamais donnée.
 *
 * Noms, fonctions, entreprises et photos sont repris à l'identique de la
 * version française : ce sont des faits, pas de la copie. Les intitulés de
 * poste restent dans leur forme anglaise usuelle (« Président » → « President »)
 * sans inventer de titre qui n'existe pas dans l'entreprise.
 */
export const bookingProofEn = {
  stats: {
    rating: "9.6/10",
    ratingLabel: "average satisfaction",
    reco: "100%",
    recoLabel: "would recommend",
  },
  testimonials: [
    {
      quote:
        "Enthusiasm is guaranteed, and so are the gains in productivity and creativity — with a return on investment you can measure quickly. We'd do it again!",
      author: "Hervé Landau",
      role: "President",
      company: "SAS Family Holdings",
      photo: "/images/testimonials/herve-landau-sas-family-holdings.jpg",
    },
    {
      quote:
        "A serious, genuinely pedagogical partner who made a technical subject like GEO understandable and actionable for business teams. Their attentiveness and responsiveness clearly made the difference.",
      author: "Mickaël Mina",
      role: "AI Director",
      company: "Sage",
      photo: "/images/testimonials/mickael-mina-sage.png",
    },
    {
      quote:
        "Seeing AI as a powerful tool, provided it is used properly. The training introduced me to different tools for different needs and taught me to frame my requests better. The trainer's approach for newcomers is remarkable.",
      author: "Jennifer Vigouroux",
      role: "Bioproduction Innovation Lead",
      company: "BioValley France",
      photo: "/images/testimonials/jennifer-vigouroux-biovalley.jpg",
    },
    {
      quote:
        "An expert team that knows how to guide and train. The teams who went through the training are autonomous today, and AI is a copilot in their day-to-day work.",
      author: "Lamia Ajana",
      role: "Managing Director",
      company: "Shem's Publicité",
      photo: "/images/testimonials/lamia-ajana-shems.jpg",
    },
    {
      quote:
        "Their ability to put ideas on the table was decisive: it helped us move our strategic thinking on AI forward. A rich, structuring and genuinely useful collaboration.",
      author: "Mariem Lahlou",
      role: "Managing Partner",
      company: "ThinkONE",
      photo: "/images/testimonials/mariem-lahlou-thinkone.jpeg",
    },
  ],
  /**
   * Les intitulés de badge restent en FRANÇAIS : « Osez l'IA » est le nom d'un
   * programme public français, et « Partenaire Anthropic » désigne un statut
   * dont la formulation anglaise officielle n'est pas confirmée. Traduire un
   * nom de programme ou inventer un intitulé de partenariat, c'est revendiquer
   * quelque chose qui n'a pas été accordé sous ce nom-là.
   */
  badges: [
    { img: "/images/badges/osez-lia.png", label: "Ambassadeur Osez l'IA" },
    { img: "/images/badges/anthropic.svg", label: "Partenaire Anthropic" },
  ],
} as const;

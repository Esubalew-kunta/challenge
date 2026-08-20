/**
 * Contenu anglais de /en/ai-operating-system.
 *
 * Traduction fidèle de `ai-os.ts` — la version FR EN LIGNE — en suivant la
 * formulation du master partout où elle couvre la même section.
 *
 * DEUX ÉCARTS DU MASTER, corrigés :
 *
 * 1. **Le dogfooding.** Le master annonce « 6 people · the output of a team of
 *    40 » ; la page française dit « 10 personnes · la production d'une équipe
 *    de 60 ». Le chiffre du master est périmé et il est de toute façon tagué
 *    `[to validate]`. On publie celui du FR en ligne.
 * 2. **Les garanties (§4.8).** Le master demande de rendre le bloc
 *    `homepageContent.guarantees` : il n'existe pas, la page française ne le
 *    rend pas, et il n'y a pas de route /garanties. Même phantom que sur
 *    /offre — voir l'en-tête de `ai-partner.en.ts`. Rien n'est rendu ici.
 *
 * La FAQ 1 garde « it's written into the contract » parce que la page
 * FRANÇAISE le dit toujours (« Zéro dépendance, c'est écrit au contrat ») : on
 * traduit ce qui est en ligne, on n'ajoute rien.
 *
 * Les liens visent les URL EN finales ; `withResolvedEnLinks` les rabat sur le
 * FR tant que la page n'est pas publiée.
 */

export const aiOsMetaEn = {
  // Le gabarit du layout ajoute « | AI Makers » : ne pas le réécrire ici.
  title: "AI Operating System: run your company on AI",
  description:
    "Not a pile of tools — an AI operating system for your company. Four layers: data, systems, agents, control. Live in the first month, autonomous at 6.",
} as const;

export const aiOsSchemaEn = {
  breadcrumbHome: "Home",
  breadcrumbCurrent: "AI Operating System",
  serviceName: "AI Operating System: the AI operating system of your company",
  serviceType: "Installation of an enterprise AI operating system",
  serviceDescription:
    "Installation of a four-layer AI operating system (structured data, automated processes, AI agents, control): mapping the processes, building the systems and agents department by department, training the teams to autonomy.",
  areaServed: ["France", "Morocco"],
} as const;

export const aiOsHeroEn = {
  badge: "At most 3 new clients a month",
  title: "Your company, run by an AI operating system",
  subtitle:
    "Not a pile of tools. An OS: your data, your processes and your agents in one place, working together. It’s what runs AI Makers, and what we install at our clients.",
  cta: { label: "Book a free diagnostic", href: "/en/contact" },
} as const;

export const aiOsProblemEn = {
  badge: "The problem",
  title: "You have tools everywhere. No system.",
  intro:
    "ChatGPT over here, Copilot over there, three automations asleep in a corner. Each tool works alone. Nothing flows.",
  pains: [
    {
      number: "01",
      title: "The licences pile up",
      description:
        "Every team bought its own tool. None talk to each other. You pay for ten subscriptions across ten silos, and the work still moves by copy-paste.",
    },
    {
      number: "02",
      title: "Knowledge is scattered",
      description:
        "Your processes live in email, drives and people’s heads. When someone leaves, their knowledge leaves with them. No AI can work on knowledge it can’t find.",
    },
    {
      number: "03",
      title: "No one is at the controls",
      description:
        "The data reports nowhere. Every decision starts with a hunt for numbers across five tools. You run on instinct a system you can’t see.",
    },
  ],
} as const;

export const aiOsThesisEn = {
  badge: "The thesis",
  title: "An OS, not tools.",
  paragraphs: [
    "An AI-native company doesn’t kit itself out. It architects itself. The difference fits in one line: tools get added, an OS fits together.",
    "Four layers. Your data structured at the bottom. Your processes automated above it. Agents that execute. A control layer that surfaces everything. Pull one layer and the rest collapses. That’s why isolated tools change nothing.",
  ],
  layersCaption:
    "The four layers of an AI operating system. Each layer rests on the one below.",
  layers: [
    {
      number: "04",
      name: "Control",
      detail:
        "Your KPIs surface on their own. You see what’s running, what’s stuck, what’s paying off.",
    },
    {
      number: "03",
      name: "Agents",
      detail:
        "They execute: they read, sort, draft, follow up and report back.",
    },
    {
      number: "02",
      name: "Systems",
      detail:
        "Your processes automated, department by department, each with a KPI.",
    },
    {
      number: "01",
      name: "Data",
      detail:
        "Your knowledge structured, out of email and people’s heads, reachable by the agents.",
    },
  ],
} as const;

export const aiOsFleetEn = {
  badge: "In production",
  title: "An agent for every floor. This is what an OS in production looks like.",
  subtitle:
    "A sample of the systems running, here and at our clients, sorted by department.",
} as const;

export const aiOsCaseStudyEn = {
  badge: "Client case",
  title: "What it looks like at Gepromed",
  context:
    "Gepromed, a European medical-device hub, runs on an AI Makers OS: go-to-market, internal processes, control.",
  company: "Gepromed",
} as const;

export const aiOsInstallEn = {
  badge: "The install",
  title: "How we install your OS",
  subtitle:
    "Three moves, tied to the three phases of the programme. No big bang: the OS goes up layer by layer, department by department.",
  steps: [
    {
      number: "01",
      phase: "Phase 1: AI Scan",
      duration: "1 to 2 weeks",
      title: "We map your processes",
      detail:
        "Interviews with your teams, a map of the workflows, a maturity score. You know where the OS starts for you: with the shortest-ROI use cases.",
    },
    {
      number: "02",
      phase: "Phase 2: AI Engine",
      duration: "3 to 6 months",
      title: "We build your systems and agents",
      detail:
        "A dedicated engineer builds, department by department. Every system ships to production with a KPI measured before and after.",
    },
    {
      number: "03",
      phase: "Phase 3: AI Champions",
      duration: "Ongoing, from month 3",
      title: "We train your teams to run the OS",
      detail:
        "Your teams take the wheel: they run, fix and extend the systems. The OS stays with you, with the people who know how to drive it.",
    },
  ],
} as const;

export const aiOsDogfoodingEn = {
  badge: "We run on it ourselves",
  title: "It’s our own OS.",
  text: "AI Makers runs on the system we install for you: same layers, same agents, same dashboards. We simply duplicate the one we run on ourselves.",
  stats: [
    { value: "+200", label: "AI systems deployed" },
    // Chiffres de la page FR en ligne, pas ceux du master (6 / 40, périmés).
    { value: "10 people", label: "the output of a team of 60" },
  ],
} as const;

export const aiOsFaqEn = {
  badge: "FAQ",
  title: "Frequently asked questions about the AI Operating System",
  items: [
    {
      question: "Who owns the OS once it’s installed?",
      answer:
        "You do, in full. The systems, the agents, the documented playbooks: all of it stays with you the day the engagement ends. Zero dependency — it’s written into the contract.",
    },
    {
      question: "How long does it take to install?",
      answer:
        "The audit takes 1 to 2 weeks and sets the roadmap. The first systems ship to production from the first month, at 1 to 2 a month. At 6 months, your teams run the OS on their own.",
    },
    {
      question: "Does it replace our current tools?",
      answer:
        "No. Your CRM, your ERP, your drives and your inboxes stay in place: the OS connects to them and makes the work flow between them.",
    },
    {
      question: "We already have automations. Do we start from scratch?",
      answer:
        "No. We audit them, keep what works, and fold it into the OS. What you’ve already built becomes a component of the system.",
    },
  ],
} as const;


export const aiOsRelatedEn = [
  {
    title: "AI Transformation",
    href: "/en/ai-transformation",
    description: "The full three-phase offer: audit, build and training.",
  },
  {
    title: "Data & AI Platform",
    href: "/en/enterprise-data-platform",
    description:
      "Unify your siloed data and plug reporting agents into it.",
  },
  {
    title: "Case studies",
    href: "/en/ai-case-studies",
    description: "The operating systems deployed at our clients.",
  },
] as const;

export const aiOsFinalCtaEn = {
  title: "Your competitors buy tools. Install a system.",
  subtitle:
    "30 minutes to map your processes and leave with your first 3 AI quick wins, whether you work with us or not.",
  cta: { label: "Book a free diagnostic", href: "/en/contact" },
} as const;

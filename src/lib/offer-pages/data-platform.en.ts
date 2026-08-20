/**
 * Contenu anglais de /en/enterprise-data-platform.
 *
 * Traduction fidèle de la page FR en ligne, en suivant la formulation du
 * master partout où elle couvre la même section. Le master est ici globalement
 * juste (il a été écrit contre cette page-ci, qui existe bel et bien).
 *
 * UN ÉCART CORRIGÉ — la FAQ 5. Le français dit « la même RÈGLE de propriété
 * totale » ; le master traduit par « the same full-ownership GUARANTEE ». Une
 * règle interne et une garantie contractuelle ne s'engagent pas pareil, et les
 * garanties ont justement été retirées du site (voir `ai-partner.en.ts`). On
 * garde « rule ».
 *
 * La mission agricole reste ANONYME et gardée au présent (« engagement in
 * progress ») : le client n'est pas nommé côté FR non plus, et l'étude de cas
 * est en validation. Les chiffres (4 500 personnes, 20 ans, 3 systèmes, 15
 * agents) sont ceux de la page française, `[to validate]` comme elle.
 */

export const dataPlatformMetaEn = {
  // Le gabarit du layout ajoute « | AI Makers » : ne pas le réécrire ici.
  title: "Enterprise data platform for AI",
  description:
    "We unify your siloed systems (ERP, production, CRM) on a Bronze/Silver/Gold foundation, then wire AI reporting agents on top. No IT department needed.",
} as const;

export const dataPlatformSchemaEn = {
  breadcrumbHome: "Home",
  breadcrumbCurrent: "Data & AI Platform",
  serviceName: "Enterprise data platform & business AI agents",
  serviceType: "Data engineering and business AI agents",
  serviceDescription:
    "Building enterprise data platforms: automated ingestion of source systems (ERP, production, CRM), a layered Bronze, Silver, Gold architecture, AI reporting and steering agents, business dashboards. No IT department required.",
  areaServed: ["France", "Morocco"],
} as const;

export const dataPlatformHeroEn = {
  badge: "Enterprise Data Platform",
  h1Lead: "Your data is worth a fortune.",
  h1Highlight: "You just have to wire it up.",
  intro:
    "An enterprise data platform unifies your siloed systems (ERP, production, sales) on a single foundation built in three layers — Bronze, Silver and Gold — then wires AI reporting and steering agents on top. The result: one version of every number, reporting that runs itself, and decisions you anticipate instead of absorb. No IT department required, and you own all of it.",
  stats: [
    { target: 50, prefix: "+", label: "companies supported" },
    { target: 200, prefix: "+", label: "systems in production" },
    { target: 9.6, decimals: 1, suffix: "/10", label: "satisfaction" },
  ],
  proofCaption: "The reporting that runs itself, wired into your systems.",
} as const;

export const dataPlatformSilosEn = {
  badge: "At a glance",
  title: "Your silos, wired into one foundation",
  description:
    "Your separate systems pour their data into a single foundation built in three layers — Bronze, Silver, Gold. Your agents read the Gold layer and steer in real time.",
} as const;

export const dataPlatformStepsEn = {
  badge: "The path",
  title: "From your silos to data that decides",
  description:
    "Four steps, each with a usable deliverable. The platform produces value before it is finished.",
  items: [
    {
      number: "01",
      title: "Source mapping",
      description:
        "We inventory your systems: ERP, production, sales, Excel files. Who produces which data, where it sleeps, who needs it.",
    },
    {
      number: "02",
      title: "Ingestion and the Bronze layer",
      description:
        "Raw data from every system converges automatically into one foundation, with quality tests. No more manual exports.",
    },
    {
      number: "03",
      title: "Silver and Gold layers",
      description:
        "Cleansing, unified reference data, business models: the data becomes reliable, joinable and ready to decide on.",
    },
    {
      number: "04",
      title: "AI agents and dashboards",
      description:
        "Reporting agents prioritised in workshops with your teams: daily tracking, consolidations, alerts. The data comes to you.",
    },
  ],
} as const;

export const dataPlatformCaseEn = {
  badge: "On the ground",
  title: "What it looks like in practice",
  kicker: "Engagement in progress",
  headline:
    "A Moroccan leader in agri-export: 4,500 employees, 20 years of data, 3 systems that didn’t talk to each other.",
  body: "Financial ERP, agricultural production software, packing-station system: no consolidated view, sales tracked in Google Sheets, decisions absorbed rather than anticipated. We are building its enterprise data platform and its reporting agents: the Bronze layer and automated ingestion shipped ahead of schedule, and 15 business agents were prioritised in workshops with the farm teams themselves.",
  footnote: "Full case study in client validation.",
} as const;

export const dataPlatformDeliverablesEn = {
  badge: "The deliverables",
  title: "What you are left holding",
  items: [
    "A sovereign data platform, hosted wherever you decide.",
    "Automated ingestion of your source systems, with quality tests.",
    "Unified business reference data: no more three versions of the same number.",
    "AI reporting agents prioritised by your teams, shipped in waves.",
    "Steering dashboards wired to the cleansed data.",
    "Full ownership: infrastructure, pipelines, agents, documentation.",
  ],
} as const;

export const dataPlatformNextEn = {
  badge: "What comes next",
  title: "The foundation under every one of your AI agents",
  paragraphs: [
    "A data platform is not an end in itself: it is the foundation that makes AI agents reliable. Once the data is unified, every new use case (reporting, forecasting, alerting, business copilots) gets built in weeks, not months.",
    "That is why the platform sits inside our full engagement: an audit to prioritise, a dedicated engineer to build, weekly training to make your teams independent.",
  ],
  link: {
    label: "See the complete engagement",
    href: "/en/ai-transformation",
  },
} as const;

export const dataPlatformFaqEn = {
  title: "Frequently asked questions about data & AI platforms",
  items: [
    {
      question: "Do you need an IT department to build a data platform?",
      answer:
        "No. One IT contact on your side plus workshops with the business teams is enough: we carry the architecture, the build and the operation. We currently work with a 4,500-person group that has no IT department and does not want one. The platform is designed to be run by the business, not by an IT service.",
    },
    {
      question: "Our data is scattered and low-quality — is that a blocker?",
      answer:
        "It is the starting point of nearly every engagement: systems that do not talk to each other, manual Excel exports, inconsistent reference data. The Bronze layer ingests the data as it is, then the Silver and Gold layers clean and harden it step by step, with automated quality tests. We do not ask you for clean data — we hand it back to you clean.",
    },
    {
      question: "What tools do you use?",
      answer:
        "Proven building blocks with no hidden licence cost: PostgreSQL for storage, Docker for infrastructure, Airflow to orchestrate the flows, Power BI or equivalent for dashboards, and AI agents (Claude, n8n) for automated reporting. It all plugs into your existing systems: ERP, production tools, CRM. Nothing is migrated, nothing is replaced.",
    },
    {
      question: "How long before a first usable layer?",
      answer:
        "On our most recent engagement of this kind, the ingestion and Bronze layers shipped in a few weeks, ahead of schedule. Reporting agents follow in waves, each validated by the business teams at its milestone. You do not pay for 18 months of data project before seeing a first result.",
    },
    {
      question: "Who owns the platform?",
      answer:
        "You do, entirely: the infrastructure, the pipeline code, the agents, the documentation. It is the same full-ownership rule as on all our engagements. The day the collaboration ends, everything keeps running at your company.",
    },
  ],
} as const;

export const dataPlatformRelatedEn = [
  {
    title: "AI Operating System",
    href: "/en/ai-operating-system",
    description: "The AI operating system that sits on your unified data.",
  },
  {
    title: "AI Transformation",
    href: "/en/ai-transformation",
    description: "The full three-phase offer, from audit to autonomy.",
  },
  {
    title: "Case studies",
    href: "/en/ai-case-studies",
    description: "The results measured at our clients.",
  },
] as const;

export const dataPlatformCtaEn = {
  title: "Your systems don’t talk to each other?",
  subtitle:
    "30 minutes to map your data sources and pin down the first high-ROI reporting agent to build.",
  label: "Book a free diagnostic",
} as const;

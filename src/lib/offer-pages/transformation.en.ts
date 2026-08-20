/**
 * Contenu anglais de /en/ai-transformation.
 *
 * Traduction fidèle de `transformation.ts` — la version FR EN LIGNE, pas les
 * masters `[EN] website-content/`, qui se sont révélés périmés (chiffres,
 * villes, garanties inventées). Aucun chiffre n'est modifié, aucune promesse
 * n'est ajoutée : ce sont les mêmes faits, dans l'autre langue.
 *
 * Les liens visent les URL EN finales ; `withResolvedEnLinks` les rabat sur le
 * FR tant que la page n'est pas publiée.
 */

export const transformationMetaEn = {
  title: "AI Transformation: your AI department, outsourced",
  description:
    "Your AI department, outsourced: a costed audit in 2 weeks with a 24-point maturity score, 1 to 2 AI systems in production per month, teams autonomous at 6 months.",
} as const;

export const transformationHeroEn = {
  badge: "3 new clients a month, maximum",
  title: "AI transformation will not wait for your next strategic plan.",
  subtitle:
    "Bringing in AI has become fundamental. The real work starts after: separating AI theatre from the use cases that actually pay off in your company. AI Makers becomes your AI department: audit in 2 weeks, systems in production every month, teams autonomous at 6 months.",
  manifesteLink: {
    label: "Read why now",
    href: "/en/why-now",
  },
  cta: { label: "Book my free diagnostic", href: "/en/contact" },
  statsLine:
    "200+ systems deployed · 10,000+ professionals trained · 7h a week recovered per employee on average",
} as const;

export const proofBarEn = {
  kicker: "They work with us",
  stat: {
    value: "7h",
    label: "recovered every week per employee, on average",
    detail:
      "Measured system by system: one KPI before, one KPI after. Real adoption, not the number of licences handed out.",
    link: { label: "See all case studies", href: "/en/ai-case-studies" },
  },
} as const;

export const transformationProblemEn = {
  badge: "The problem",
  title: "Three reasons nothing has changed in your company yet",
  intro:
    "You have tried the tools, maybe trained a few people. Your processes have not moved. The blocker is rarely technological: it is adoption that is missing.",
  pains: [
    {
      number: "01",
      title: "Your teams tested ChatGPT. Nothing reached production.",
      description:
        "Individual usage, no system. Everyone improvises on their own, nothing is documented, nothing lasts. A tool changes nothing: what changes everything is a system configured for the way you work.",
      figure: "60-80%",
      figureLabel:
        "of repetitive work (reporting, data entry, follow-ups, summaries) can be absorbed by AI. In your company, it is still done by hand.",
    },
    {
      number: "02",
      title: "You trained a few people. Three weeks later, it is all forgotten.",
      description:
        "Theory taught on generic slides does not survive the return to the desk. What lasts: regular practice on your real cases, with systems already in production to use. People first, technology second.",
      figure: "2h a week",
      figureLabel:
        "of practice on your real cases: the format that makes teams autonomous, not the one-day seminar.",
    },
    {
      number: "03",
      title: "Nobody in your company has time to structure the subject.",
      description:
        "Your best people are taken by day-to-day operations. Hiring a senior AI profile is slow, expensive and uncertain. Meanwhile the subject stays at the “we really should get to it” stage.",
      figure: "6 to 12 months",
      figureLabel:
        "to hire a senior AI expert, at €70,000+/year base salary, with no guarantee of results.",
    },
  ],
} as const;

export const transformationMechanismEn = {
  badge: "Our mechanism",
  title: "We apply to ourselves what we sell.",
  paragraphs: [
    "AI Makers runs on its own systems. The morning decision brief, the analysis of every sales call, the preparation of every meeting, the health tracking of every client engagement: all of it is produced by the agents we build.",
    "The result: a team of 8 producing like a team of 60. That is the mechanism, proven here every day, that we install in your company. Not a method read in a white paper: our own way of working.",
  ],
  stat: {
    value: "8 people",
    label: "the output of a team of 60, thanks to our own systems",
  },
  systemsCaption:
    "The systems that run AI Makers internally, every day:",
} as const;

export const transformationHorizonsEn = {
  badge: "The trajectory",
  title: "Where AI is going. And where we are taking you.",
  intro:
    "Our job is not to ride the wave. It is to build in your company, today, what puts you in position for what comes next.",
  buildLabel: "What we build with you today to get there",
  items: [
    {
      period: "Today",
      title: "Augmented workflows",
      description:
        "AI reads, sorts, drafts, reconciles. Repetitive tasks leave your teams' day-to-day, process by process. It is the most profitable level of maturity today, and the fastest to put into production.",
      build:
        "The audit costs your use cases by ROI, then the first systems go into production inside your workflows. That is exactly the scope of the AUDIT and BUILD phases.",
      phaseLabel: "Phases 1 and 2",
    },
    {
      period: "In 12 months",
      title: "Agents that act",
      description:
        "Agents that chain the steps themselves: they consult your tools, take actions, report back. Standards are emerging, such as MCP (Model Context Protocol, the open standard launched by Anthropic and adopted by OpenAI and Google), which plugs models straight into your systems.",
      build:
        "Your documented playbooks and the data produced by your first systems are the fuel for these agents. We structure them from now on, during the BUILD and SCALE phases.",
      phaseLabel: "Phases 2 and 3",
    },
    {
      period: "In 24 months",
      title: "Hybrid teams",
      description:
        "Teams where every employee orchestrates several agents across their scope. Companies that have structured their processes and trained their teams by then will hold a lead that is hard to close. Nobody knows the exact timetable. The direction is no longer up for debate.",
      build:
        "The AI Champions programme makes your teams able to run, fix and extend the systems without us. That is the SCALE phase, and what comes after it.",
      phaseLabel: "Phase 3 and beyond",
    },
  ],
  note: "AI Makers is an Anthropic Partner, the company behind Claude and the originator of the MCP standard. These horizons are not dated promises: what you structure today stays valid whatever the real pace turns out to be.",
} as const;

export const transformationPhasesEn = {
  badge: "How it runs",
  title: "Your AI department, outsourced, in three phases.",
  subtitle:
    "People before tech. Data before development. Each phase has a duration, concrete deliverables, and a single end goal: that your teams adopt the systems, then make them their own.",
  items: [
    {
      number: "Phase 1: AUDIT",
      brand: "AI Scan",
      duration: "1 to 2 weeks",
      summary:
        "We build nothing in week 1. We start with your teams and your data: workflow mapping, interviews with the people doing the work, maturity scoring on our 24-point grid. You leave with a costed roadmap, ROI per use case.",
      actions: [
        "Complete mapping of existing processes",
        "Interviews with decision-makers and operators",
        "AI maturity scoring on 6 axes (proprietary grid)",
        "Costed 3-, 6- and 12-month roadmap with estimated ROI",
        "At least 3 use cases ready to build",
      ],
      gain: "You know where AI pays off in your company: at least 3 costed use cases and a roadmap prioritised by ROI.",
      illustration: "/images/3d/cible-flechette.png",
    },
    {
      number: "Phase 2: BUILD",
      brand: "AI Engine",
      duration: "3 to 6 months",
      summary:
        "A dedicated AI engineer builds your systems on your data, directly inside your workflows. Every system has a KPI measured before and after, and your teams practise 2h a week to adopt it as deliveries land.",
      actions: [
        "A dedicated AI engineer, embedded in your team",
        "1 to 2 AI systems delivered to production per month",
        "2h of training a week, on your real cases",
        "Documented playbooks, full client ownership",
        "Same-day support + access to 1,500+ automations",
      ],
      gain: "Your first systems run in production from the first month, with impact measured on a KPI set before deployment.",
      illustration: "/images/3d/jauge-numero1.png",
    },
    {
      number: "Phase 3: SCALE",
      brand: "AI Champions",
      duration: "Ongoing, from month 3",
      summary:
        "Scaling up: your teams take over. Continuous optimisation of the systems, new use cases, quarterly strategic review at executive level.",
      actions: [
        "AI Champions programme: your teams become autonomous",
        "Continuous optimisation of the systems in production",
        "Ongoing identification of new use cases",
        "AI watch wired directly into your systems",
        "Quarterly strategic review at executive level",
      ],
      gain: "Teams able to run and improve the systems without us. And every quarter, new high-ROI use cases, prioritised.",
      illustration: "/images/3d/chapeau-formation.png",
    },
  ],
} as const;

export const transformationCaseStudyEn = {
  badge: "Proof",
  title: "What it looks like at a client",
  subtitle:
    "One documented example, with the before, the after and the method. Not a promise: a measured result.",
} as const;

export const transformationTestimonialsEn = {
  badge: "They say it better than we do",
  title: "What the leaders we work with say",
} as const;

export const transformationFaqEn = {
  badge: "FAQ",
  title: "Frequently asked questions about the programme",
  items: [
    {
      question: "What is AI transformation?",
      answer:
        "AI transformation means redesigning a company's processes around artificial intelligence: auditing workflows, systems in production, teams trained. The AI Makers method runs in three phases: identify the use cases that create measurable value, put them into production, then make the teams autonomous.",
    },
    {
      question: "How long does the programme last?",
      answer:
        "The AI Makers audit takes 1 to 2 weeks. Then a dedicated engineer builds 1 to 2 systems a month inside your workflows, with 2 hours of training a week for your teams. The goal is set from the start: your teams autonomous at 6 months.",
    },
    {
      question: "What is the commitment period?",
      answer:
        "The initial commitment is 3 or 6 months depending on scope. After that, the engagement continues monthly, with 30 days' notice. The median length of a full engagement is 6 to 9 months to reach complete team autonomy.",
    },
    {
      question: "Who builds the systems?",
      answer:
        "A dedicated AI engineer from AI Makers, embedded in your team. They are onboarded on your sector 2 weeks before kick-off: they understand your business before building anything. Every system delivered has a KPI measured before and after.",
    },
    {
      question: "What happens if the results are not there?",
      answer:
        "Every system delivered is measured against a KPI set before its deployment: the impact is checked with the numbers in hand, system by system. And full intellectual property of everything built stays yours, whatever happens.",
    },
    {
      question: "Who owns what is built?",
      answer:
        "You do, entirely. The systems, the documented playbooks, the training: all of it stays with you. The day the engagement stops, nothing stops with it. Zero dependency: it is written into the contract.",
    },
    {
      question: "How long does an AI audit take?",
      answer:
        "The AI Scan, the AI Makers AI audit, takes 1 to 2 weeks depending on the size of the company and the number of departments covered. That is deliberately short: an audit that drags on for three months produces a report that is already out of date. In two weeks you have the mapping, the maturity score and an actionable roadmap presented to your executive committee.",
    },
    {
      question: "Who is interviewed during the audit?",
      answer:
        "The people who actually run the processes, not only the managers. We interview every department concerned: operators describe the repetitive tasks as they really happen, leadership brings the vision and the priorities. It is that cross-check that reveals the gaps between the official process and the real work: where the best gains hide.",
    },
    {
      question: "What does the audit roadmap contain?",
      answer:
        "A costed, prioritised roadmap, with at least 3 high-ROI use cases. For each use case: the process concerned, the estimated gain, the implementation complexity and the recommended deployment order. It is structured across 3-, 6- and 12-month horizons and presented directly to your executive committee, along with the company's AI maturity score out of 24.",
    },
    {
      question: "What if the audit reveals nothing?",
      answer:
        "A company of 50 people or more always has automatable processes. The costed roadmap exists precisely for that: choosing the 3 most profitable ones and the order in which to deploy them.",
    },
    {
      question: "Does the audit commit us to what follows?",
      answer:
        "No. The roadmap and all deliverables belong to you entirely: you can execute them in-house or with another provider. If you continue with us, the audit becomes the first phase of the engagement, with a first impact targeted within 30 days.",
    },
  ],
} as const;

export const transformationFinalCtaEn = {
  title: "Every month of waiting is a month of data you are not accumulating.",
  subtitle:
    "30 minutes to analyse your workflows and leave with your first 3 AI quick wins, whether you work with us or not.",
  cta: { label: "Book my free diagnostic", href: "/en/contact" },
} as const;

export const transformationSchemaEn = {
  breadcrumbHome: "Home",
  breadcrumbCurrent: "AI Transformation",
  serviceName: "AI Transformation: the full programme",
  serviceType: "Enterprise AI transformation",
  areaServed: ["France", "Morocco"],
  serviceDescription:
    "A 3-phase AI transformation programme: workflow audit with a 24-point maturity score, 1 to 2 AI systems built into production per month by a dedicated engineer, teams trained to autonomy at 6 months.",
} as const;

export const transformationAuditEn = {
  badge: "Phase 1 in detail",
  title: "The AI audit: your opportunities mapped in 2 weeks",
  intro:
    "An AI audit is a systematic analysis of your workflows to identify the tasks that can be automated and prioritise them by return on investment. Our AI Scan takes 1 to 2 weeks: process mapping, team interviews, maturity scoring out of 24, and a costed roadmap with at least 3 high-ROI use cases, presented to your executive committee.",
  stepsTitle: "Four steps in two weeks",
  steps: [
    {
      number: "01",
      title: "Process mapping",
      description:
        "We document the workflows of every department: who does what, with which tools, in how much time. The real work, not the org chart.",
    },
    {
      number: "02",
      title: "Team interviews",
      description:
        "Structured interviews with operators and managers to identify repetitive tasks, friction points and the data available.",
    },
    {
      number: "03",
      title: "Maturity scoring out of 24",
      description:
        "An AI maturity grid scored out of 24 assesses where the company stands: tools, data, skills, usage. Every opportunity is scored by ROI.",
    },
    {
      number: "04",
      title: "Executive read-out",
      description:
        "A presentation to your executive committee: maturity score, prioritised use cases, costed roadmap. Decisions, not a report that gathers dust.",
    },
  ],
  deliverablesTitle: "What you hold at the end",
  deliverables: [
    "The map of your processes, department by department.",
    "Your AI maturity score out of 24, with the areas to improve.",
    "At least 3 high-ROI use cases, costed and prioritised.",
    "A roadmap structured across 3-, 6- and 12-month horizons.",
    "A read-out presentation to your executive committee.",
    "Full ownership of every deliverable, usable with or without us.",
  ],
} as const;

export const transformationGepromedEn = {
  title: "Gepromed",
  subtitle: "A complete AI department — MedTech, Strasbourg",
  cover: "/images/case-studies/gepromed-agents.png",
  metric: "16 AI agents",
  metricLabel: "delivered in the first month, across 5 departments",
  before:
    "6 people, 3 hats each: 2 to 3 days a week of low-value tasks, and time-consuming ISO compliance.",
  after:
    "AI agents by domain: acquisition, finance, project management, ISO compliance. 47 needs identified by the team itself.",
  how: "A collective masterclass, an individual pilot on one person's real tasks, then a domain-by-domain rollout.",
  tags: ["AI agents", "MedTech", "ISO compliance"],
  readMore: {
    label: "Read the full Gepromed case study",
    href: "/en/case-studies/gepromed",
  },
} as const;

export const transformationMidCtaEn = {
  question: "Want to know what this programme would look like in your company?",
} as const;

export const transformationComparisonEn = {
  badge: "The comparison",
  title: "Consultancy, IT services firm, agency, licence or AI Makers",
  subtitle:
    "Five ways to approach AI in a company. Only one delivers systems in production, configured for you.",
} as const;

export const transformationRelatedEn = [
  {
    title: "Forward Deployed Engineer",
    href: "/en/forward-deployed-engineer",
    description: "The dedicated AI engineer who sits inside your team.",
  },
  {
    title: "AI Operating System",
    href: "/en/ai-operating-system",
    description: "The AI operating system that runs the whole company.",
  },
  {
    title: "Case studies",
    href: "/en/ai-case-studies",
    description: "Measured results at our clients, before and after.",
  },
  {
    title: "AI training for teams",
    href: "/en/ai-training-for-teams",
    description:
      "The Scale phase in practice: teams trained on their real cases.",
  },
] as const;

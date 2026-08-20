import type { JobRole } from "./postes";

/**
 * Postes ouverts, version anglaise.
 *
 * Traduction fidèle de `postes.ts`. Les `slug`, `postedAt`, `frenchRequired`,
 * les seuils de présélection et les compétences LinkedIn sont des FAITS
 * partagés : ils ne changent pas de langue. `frenchRequired` reste vrai là où
 * il l'est — un poste au contact de clients francophones l'exige, que
 * l'annonce soit lue en anglais ou non.
 */

const REMOTE_POLICY_STANDARD_EN =
  "Remote, in a time zone compatible with Paris and Casablanca (Europe, North Africa or nearby), with no requirement to live in either city, and occasional time in our offices.";

export const jobOpeningsEn: JobRole[] = [
  {
    title: "AI Engineer",
    slug: "ai-engineer",
    team: "Engineering",
    location: "Remote, Paris/Casablanca time zone",
    reportsTo: "Walid Boulanouar, CTO",
    remotePolicy: REMOTE_POLICY_STANDARD_EN,
    type: "Full time",
    description:
      "The builder. RAG, multi-agent systems, orchestration: you build inside our clients' tools, and what you write ships to production.",
    tagline: "You build it, it ships to production",
    intro:
      "You are the builder. RAG, multi-agent systems, orchestration: you build inside our clients' tools, and what you write ships to production.",
    dayToDay: [
      {
        title: "You wire an agent into a system that was never designed for it",
        body: "A client CRM or ERP has ten years of history and empty fields where the agent expects clean data. You decide whether to fix it upstream on the client side or work around it in code, and you document why.",
      },
      {
        title: "You write code that ships to production, not a demo",
        body: "A RAG pipeline, a multi-agent system or orchestration, on the Claude, Claude Code, LangChain, Python, TypeScript stack already in place at AI Makers. What leaves your machine runs in front of real users the following week.",
      },
      {
        title: "You write evaluations before adding a feature",
        body: "An LLM system never returns the same answer twice: without a test set and regression thresholds, nobody knows whether a change improved or broke the system. You are the one who puts those guardrails in place.",
      },
      {
        title: "You watch the bill before it blows up",
        body: "A system that works in a demo and costs 40% more than planned in production does not work. Cost control, model choice, caching: that is your problem, not the client's.",
      },
      {
        title: "You are on call when it breaks",
        body: "A production system goes down on a Tuesday evening: you are the one who gets called, and you are the one who fixes it.",
      },
      {
        title: "You train while building",
        body: "Part of your time goes to explaining to the client's non-technical teams what the system does and how to adjust it.",
      },
    ],
    first90Days:
      "Weeks 1-2, you take over a system already in production and evolve it. From month 2, you carry your own workstreams end to end, under the technical direction of Walid Boulanouar, our CTO. In month 3, you deliver at a client directly.",
    profileTable: [
      { category: "Languages", detail: "Solid Python and TypeScript, comfortable SQL" },
      {
        category: "Data",
        detail: "Able to read an existing schema and turn it into a usable RAG corpus",
      },
      {
        category: "Architecture",
        detail: "REST APIs, CRM/ERP integrations, cloud (AWS, GCP or Azure)",
      },
      {
        category: "Applied AI",
        detail:
          "RAG, multi-agent, orchestration, evaluation, cost control, Claude/Claude Code/LangChain/n8n stack",
      },
      {
        category: "Field work",
        detail: "Has already put a system into production and maintained it, writes clearly",
      },
      {
        category: "Background",
        detail: "2 to 8 years in software development, part of it on AI systems",
      },
    ],
    notLookingFor:
      "Someone who wants to do research. Here we deliver at clients, every week.",
    adjacentRoles: [
      {
        role: "ML Research Engineer",
        whatTheyDo: "Trains models, long-cycle R&D",
        whoOwnsOutcome: "The lab owns the outcome",
      },
      {
        role: "Generalist backend developer",
        whatTheyDo: "Classic business services, deterministic logic",
        whoOwnsOutcome: "The product team owns the outcome",
      },
      {
        role: "Pre-sales AI consultant",
        whatTheyDo: "Recommends, documents, leaves",
        whoOwnsOutcome: "The client owns the outcome alone once they leave",
      },
      {
        role: "AI Engineer, AI Makers",
        whatTheyDo: "Builds inside the client's tools, on-call included",
        whoOwnsOutcome: "You own the outcome until it runs",
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
        question: "How many years of software development experience do you have?",
        type: "number",
        minValue: 2,
        eliminatory: false,
      },
      role: {
        question:
          "Have you already put an LLM-based system into production, used by real users?",
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
    location: "Remote, Paris/Casablanca time zone",
    reportsTo: "Othmane Halim, founder",
    remotePolicy: REMOTE_POLICY_STANDARD_EN,
    type: "Full time",
    description:
      "You open the pipeline end to end: outbound, inbound, content, through to a diagnostic booked in the calendar. GEO is our most advanced offer, and you will be on it every week.",
    tagline: "You open the pipeline, end to end",
    intro:
      "The product works and the clients say so. What is missing is someone whose actual job is bringing in the next ones.",
    dayToDay: [
      {
        title: "You own the pipeline, from the first message to the booked diagnostic",
        body: "Target accounts, outbound, inbound qualification, follow-through to a booked AI Scan audit. If there are not enough diagnostics in the calendar in a given month, that is your responsibility — not the founder's, not delivery's.",
      },
      {
        title: "You own GEO acquisition, our most advanced offer",
        body: "The Sage case, 447 prompts tracked continuously, is our best proof. You need to be able to sell it to a leader who does not yet know what GEO is, and turn a discovery conversation into a paid mandate.",
      },
      {
        title: "You make the tools we already built work, you do not start from zero",
        body: "The AI-First Playbook (48 pages), the AI maturity diagnostic, the ROI calculator, the free GEO audit. You measure which one actually converts into meetings, and cut or rework the ones that do not.",
      },
      {
        title: "You write, or commission and then judge, the content that converts",
        body: "A LinkedIn post with engagement that generates no booked diagnostic is a failure, even if it “did well”.",
      },
      {
        title: "You measure everything, with no data team to do it for you",
        body: "CAC, conversion at each step, cost per booked diagnostic, GEO compared with classic acquisition: you build the dashboards yourself.",
      },
      {
        title: "You are the first growth hire in a team of 10",
        body: "There is no pre-existing GTM process: in the first weeks you spend as much time understanding what has already been tried with clients as launching new actions. You lay the foundations (ICP, messaging, channels) before scaling anything.",
      },
    ],
    first90Days:
      "Month 1, you learn the offer by sitting in on real diagnostics: you cannot sell this from the outside. Month 2, you take over the top of the funnel and put measurement in place. Month 3, you carry a quantified pipeline target.",
    profileTable: [
      {
        category: "Channels",
        detail: "B2B outbound (LinkedIn, email), inbound qualification, quick judgement on which channel to scale or cut",
      },
      {
        category: "Measurement",
        detail:
          "Self-service pipeline dashboards (CAC, conversion per step, cost per diagnostic) with no data team",
      },
      {
        category: "Content and GEO",
        detail:
          "Understands GEO as a commercial discipline, can sell it to a leader of a small or mid-sized company, judges content on its conversion",
      },
      {
        category: "Sales",
        detail: "Carries conversations with French-speaking leaders through to a paid booking",
      },
      {
        category: "Autonomy",
        detail: "Has already built from scratch in a small organisation, sets priorities with no established process",
      },
    ],
    notLookingFor: "Someone who manages an agency. Here, you execute yourself.",
    adjacentRoles: [
      {
        role: "Classic marketing manager",
        whatTheyDo: "Brand, content, campaigns",
        whoOwnsOutcome: "Awareness owns the outcome, rarely pipeline",
      },
      {
        role: "Sales or BDR",
        whatTheyDo: "Prospects and closes already-qualified leads",
        whoOwnsOutcome: "Conversion owns the outcome, not generation",
      },
      {
        role: "Agency account manager",
        whatTheyDo: "Relationship with an already-signed client",
        whoOwnsOutcome: "Retention owns the outcome, not acquisition",
      },
      {
        role: "GTM & Growth Manager, AI Makers",
        whatTheyDo: "Pipeline end to end, measures and iterates",
        whoOwnsOutcome: "You own the number of booked diagnostics and the CAC",
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
        question: "How many years of B2B growth or go-to-market experience do you have?",
        type: "number",
        minValue: 3,
        eliminatory: false,
      },
      role: {
        question: "Have you already carried a B2B pipeline or revenue target?",
        type: "boolean",
        eliminatory: true,
      },
    },
    postedAt: "2026-08-12",
  },
  {
    title: "Data Engineer",
    slug: "data-engineer",
    team: "Engineering",
    location: "Remote, Paris/Casablanca time zone",
    reportsTo: "Walid Boulanouar, CTO",
    remotePolicy: REMOTE_POLICY_STANDARD_EN,
    type: "Full time",
    description:
      "You wire our clients' data into their AI systems: pipelines, integrations, data quality. The foundation everything else rests on.",
    tagline: "The foundation everything else rests on",
    intro: "An AI agent is only worth the data you give it. That is this role.",
    dayToDay: [
      {
        title: "You classify a client source as Bronze, Silver or Gold",
        body: "And discover that half of it is unusable as it stands. Our model exists precisely for that: surfacing, from the audit onwards, what must be cleaned before an agent relies on it.",
      },
      {
        title: "You wire in an export that cannot be replaced",
        body: "The client has an old ERP, nobody wants to change it, and the pipeline still has to run on it every night.",
      },
      {
        title: "You build the corpus that feeds a RAG pipeline",
        body: "And test its quality. A badly structured corpus gives wrong answers with the same confidence as right ones. Part of your job: finding those holes before the client finds them in production.",
      },
      {
        title: "You deploy into the client's cloud account, not yours",
        body: "Our systems run in the client's infrastructure (data sovereignty, GDPR, AI Act). That means learning their environment (AWS, GCP or Azure) rather than imposing yours.",
      },
      {
        title: "You tell a client no about the quality of their data",
        body: "And you propose what comes next. This is not a technical aside: it is a conversation with someone whose dashboard is blocked and who does not want to hear it.",
      },
      {
        title: "You build a reporting agent that puts a number in front of a decision-maker",
        body: "Every week, with no manual intervention.",
      },
    ],
    first90Days:
      "Month 1, you take over the pipelines of a live client and learn how our systems consume the data downstream. Month 2, you own the data layer of a full engagement. Month 3, you step in upstream, during the audit phase, where what is feasible gets decided.",
    profileTable: [
      { category: "Languages", detail: "Excellent SQL, solid Python" },
      {
        category: "Data",
        detail: "Modelling, ETL/ELT, Bronze/Silver/Gold architecture, large volumes",
      },
      {
        category: "Architecture",
        detail: "CRM/ERP integrations, cloud, queries that hold up in production",
      },
      {
        category: "Applied AI",
        detail: "RAG corpora and data quality, reporting agents",
      },
      {
        category: "Field work",
        detail: "Can tell a client their data is not ready, and propose what comes next",
      },
      { category: "Background", detail: "3 to 8 years in data engineering" },
    ],
    notLookingFor:
      "Someone who wants a stable scope. Every client has a different stack.",
    adjacentRoles: [
      {
        role: "Data Analyst",
        whatTheyDo: "Queries data that is already clean",
        whoOwnsOutcome: "Whoever decides from the number owns the outcome",
      },
      {
        role: "Analytics Engineer",
        whatTheyDo: "Transforms and models inside the warehouse",
        whoOwnsOutcome: "The data team consuming the models owns the outcome",
      },
      {
        role: "In-house generalist data engineer",
        whatTheyDo: "One stack, one company",
        whoOwnsOutcome: "That company's data team owns the outcome",
      },
      {
        role: "Data Engineer, AI Makers",
        whatTheyDo: "Unifies siloed systems at each client, deploys into their cloud",
        whoOwnsOutcome: "You own the outcome, on a different stack every engagement",
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
        question: "How many years of data engineering experience do you have?",
        type: "number",
        minValue: 3,
        eliminatory: false,
      },
      role: {
        question: "Have you already built and maintained data pipelines in production?",
        type: "boolean",
        eliminatory: true,
      },
    },
    postedAt: "2026-08-12",
  },
  {
    title: "QA Engineer",
    slug: "qa-engineer",
    team: "Engineering",
    location: "Remote, Paris/Casablanca time zone",
    reportsTo: "Walid Boulanouar, CTO",
    remotePolicy: REMOTE_POLICY_STANDARD_EN,
    type: "Full time",
    description:
      "QA for AI systems, not interface testing. LLM output evaluations, workflow regression, acceptance before handover: you decide whether a system ships to the client.",
    tagline: "200 systems in production, and they have to hold up",
    intro:
      "Past a certain number of systems in production, the constraint is no longer building. It is guaranteeing that it holds. That is this role, and it is new. A useful clarification: this is QA for AI systems, not interface testing. You test non-deterministic outputs, not buttons.",
    dayToDay: [
      {
        title: "You write an evaluation suite, and it lies",
        body: "You build a test set for a client's support agent. It passes at 95%. Two weeks later a user asks a question phrased unlike anything in your test set, and the system answers nonsense. Your job: maintaining a test set that keeps closing in on real traffic, week after week.",
      },
      {
        title: "You break an n8n workflow for good reasons",
        body: "And check that nothing else breaks with it. A node is changed to fix a bug; a downstream step that depended on a precise output format fails silently. Your regression tests catch that before the client does.",
      },
      {
        title: "You are the last gate before delivery",
        body: "Business test set, the client's edge cases, checking that the outputs are presentable to a leader who will use them to decide. You say yes or no to going live.",
      },
      {
        title: "You verify a number the company repeats everywhere",
        body: "“7 hours a week recovered on average” is a central commercial argument, and a verifiable claim. You build the method to audit it project by project, and you say when it does not hold for a given case.",
      },
      {
        title: "You watch for what degrades without warning",
        body: "Quality dropping over several weeks with no alert, token costs blowing up. You build the signals that make those drifts visible before the client sees them.",
      },
      {
        title: "You write a lot, and to be understood immediately",
        body: "Acceptance reports, non-conformity notes, drift write-ups: readable in thirty seconds by someone who has not followed the project.",
      },
    ],
    first90Days:
      "Month 1, you audit what exists and tell us where it breaks most often. Month 2, you put the evaluation foundation in place on a live system. Month 3, no system ships to a client without going through your acceptance.",
    profileTable: [
      {
        category: "Evaluation techniques",
        detail:
          "Golden datasets, scoring rubrics, LLM-as-judge calibrated against human annotation, regression testing",
      },
      {
        category: "Tools",
        detail:
          "Solid Python, an eval framework (promptfoo, DeepEval or equivalent), reading and testing n8n workflows, CI/CD",
      },
      {
        category: "Non-determinism",
        detail: "Thinks in acceptable quality ranges, tells normal variation from a real regression",
      },
      { category: "Writing", detail: "Clear reports, readable by a non-technical audience" },
      {
        category: "Field work",
        detail:
          "3 to 8 years in QA, test engineering or SDET, part of it on AI systems in production, comfortable saying no under pressure",
      },
    ],
    notLookingFor:
      "Someone who executes test plans written by others. Here, you write the strategy.",
    adjacentRoles: [
      {
        role: "Generalist QA or manual tester",
        whatTheyDo: "Predefined scenarios on deterministic software",
        whoOwnsOutcome: "Functional coverage owns the outcome",
      },
      {
        role: "MLOps or Platform Engineer",
        whatTheyDo: "Infrastructure that runs the models",
        whoOwnsOutcome: "Technical availability owns the outcome",
      },
      {
        role: "Data Scientist or ML Engineer",
        whatTheyDo: "Designs and trains the models",
        whoOwnsOutcome: "Upstream model performance owns the outcome",
      },
      {
        role: "QA Engineer, AI Systems, AI Makers",
        whatTheyDo: "Builds the evaluations, decides go or no-go",
        whoOwnsOutcome: "You own the reliability of the published numbers",
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
        question: "How many years of QA or test engineering experience do you have?",
        type: "number",
        minValue: 3,
        eliminatory: false,
      },
      role: {
        question:
          "Have you already tested a non-deterministic system: an LLM, an ML model, a recommendation engine?",
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
    location: "Remote, with travel to the client",
    reportsTo: "Walid Boulanouar, CTO",
    remotePolicy:
      "Remote-based, in a time zone compatible with Paris and Casablanca (Europe, North Africa or nearby), with no requirement to live in either city. This role involves regular travel to the client, part of the week.",
    type: "Full time",
    description:
      "The core of our offer. You are deployed inside the client's team: you go to their stand-ups, you write production code in their environment, and you stay until it runs.",
    tagline: "The role at the centre of the game",
    intro:
      "The FDE is the core of our offer. We deploy more than 20 of them into companies. A Forward Deployed Engineer is an AI engineer deployed directly inside the client's team. They understand the problem from the inside, where the work happens, write production code, connect AI to the existing systems, and stay until it runs.",
    dayToDay: [
      {
        title: "You are embedded in the client's team",
        body: "You go to their stand-ups, you learn their business vocabulary, and you are onboarded two weeks before kick-off to read their processes and get to grips with their tools before the first workstream opens.",
      },
      {
        title: "You get wired in",
        body: "The client's existing systems have twenty years of history and three successive owners. You read their APIs, their exports, their database, and you connect what needs connecting. That is the part nobody shows in a demo.",
      },
      {
        title: "You scope",
        body: "The client arrives with “we should automate the meeting notes”. You come back with a spec, an estimate in days, and a number before: you do not receive a brief, you build it.",
      },
      {
        title: "You prototype fast",
        body: "A usable system in a few days, tested by the people who will do the work, before investing a month.",
      },
      {
        title: "You train the client's teams while you build",
        body: "Until they no longer need you.",
      },
      {
        title: "You own the outcome",
        body: "When a system breaks on a Tuesday evening, you are the one who gets called, and you are the one who fixes it.",
      },
    ],
    first90Days:
      "You are onboarded two weeks before kick-off, and the first workstream starts once the scope, the accesses and the test users are in place. The technical half is learnable from public roadmaps. The field half decides everything and is only acquired by delivering at clients, every week, under the supervision of Walid Boulanouar, our CTO.",
    profileTable: [
      {
        category: "Languages",
        detail: "Python, TypeScript, SQL. You switch to the client's stack in a few days",
      },
      { category: "Data", detail: "Modelling, ETL, large volumes, queries that hold up" },
      {
        category: "Architecture",
        detail: "REST and GraphQL APIs, cloud (AWS, GCP, Azure), infrastructure as code",
      },
      {
        category: "Applied AI",
        detail: "RAG, multi-agent systems, orchestration, evaluation, cost control",
      },
      {
        category: "Field work",
        detail: "Requirements gathering, trading off scope/speed/quality, clear writing, stakeholder management",
      },
      {
        category: "Background",
        detail: "Engineering school or a computer science master's, 2 to 8 years of experience",
      },
    ],
    notLookingFor:
      "Someone who wants to code alone with headphones on. Half of this job happens in front of the client.",
    adjacentRoles: [
      {
        role: "Software Engineer",
        whatTheyDo: "Builds the product, in-house",
        whoOwnsOutcome: "The product team owns the outcome",
      },
      {
        role: "Solutions Engineer",
        whatTheyDo: "Demonstrates the product, pre-sales",
        whoOwnsOutcome: "The salesperson owns the outcome",
      },
      {
        role: "Classic AI consultant",
        whatTheyDo: "Recommends, documents, leaves",
        whoOwnsOutcome: "The client owns the outcome alone once they leave",
      },
      {
        role: "IT services consultant",
        whatTheyDo: "Executes a staffed scope",
        whoOwnsOutcome: "The contract owns the outcome, not the engagement",
      },
      {
        role: "Forward Deployed Engineer, AI Makers",
        whatTheyDo: "Builds at the client, in their tools, with their teams",
        whoOwnsOutcome: "You own the outcome, through to the client's autonomy",
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
        question: "How many years of software development experience do you have?",
        type: "number",
        minValue: 2,
        eliminatory: false,
      },
      role: {
        question:
          "Are you comfortable working on site at a client, embedded in their team?",
        type: "boolean",
        eliminatory: true,
      },
    },
    postedAt: "2026-08-12",
  },
];

export function getJobRoleEn(slug: string): JobRole | undefined {
  return jobOpeningsEn.find((job) => job.slug === slug);
}

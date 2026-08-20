import type {
  CertBadge,
  ComparisonRow,
  FaqItem,
  RoleProfile,
  RunInItem,
  SpecRow,
  TeamMember,
  TimelineStep,
} from "./fde";

/**
 * Contenu anglais de /en/forward-deployed-engineer.
 *
 * Traduction fidèle de `fde.ts` — la version FR EN LIGNE. Aucun chiffre n'est
 * modifié : les grilles de salaire restent en euros parce que ce sont des
 * salaires constatés EN FRANCE, pas une conversion pour le lecteur anglophone.
 * Les noms d'écoles (INPT, ENSIAS) restent tels quels : ce sont des noms
 * propres, pas de la copie.
 */
export const fdeContentEn = {
  hero: {
    status: "3 new clients a month, maximum",
    headline: "The AI engineering role you will not have to hire for.",
    subtitle:
      "Forward Deployed Engineer: he understands your business in two weeks, builds inside your tools, and trains your teams at the same time. One person, the work of three.",
    cta: { label: "Book my free diagnostic", href: "/en/contact" },
    microcopy: "Onboarded on your business 2 weeks before day 1.",
  },

  proof: {
    kicker: "They work with our engineers",
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
      suffix: "/wk",
      label: "recovered per employee",
      detail:
        "Data entry, reporting, summaries, follow-ups. Every system ships with a number before and a number after. Time measured, role by role.",
    },
  },

  definition: {
    badge: "The model",
    title: "What is a Forward Deployed Engineer?",
    answer:
      "A Forward Deployed Engineer (FDE) is an AI engineer deployed directly inside the client's team. He understands the problem from the inside, where the work happens, writes production code, connects AI to the existing systems and stays until it runs. The model was invented by Palantir twenty years ago; generative AI has put it back at the centre of the game.",
    why: "95% of enterprise AI pilots produce no measurable return (MIT study, 2025). The models hold up. It is the deployment that gives way. Every enterprise environment is complicated in its own way, and no off-the-shelf software plugs into it by itself. It takes someone inside the team, who owns the outcome.",
    stats: [
      {
        figure: "95%",
        label: "of enterprise AI pilots fail",
        detail:
          "MIT study, 2025. The cause lies in the last mile of deployment — precisely an FDE's job.",
      },
      {
        figure: "×8",
        label: "FDE job postings in one year",
        detail:
          "Indeed postings multiplied by 8 between April 2025 and April 2026. OpenAI, Anthropic and Google are hiring FDEs, including in Paris, as are Mistral and H Company.",
      },
      {
        figure: "$385K to $1M",
        label: "an FDE's pay in the AI labs",
        detail:
          "It is the most contested profile on the market. At that price, almost no French company can hire one. Our model is to deploy one.",
      },
    ],
  },

  jobSpec: {
    badge: "The job spec",
    title: "The job spec you will not have to write",
    anchor: "fiche-de-poste",
    intro:
      "Open a senior AI engineer job ad. You will read a tech stack, a degree level, a salary range. The typical day is rarely in there, and it is exactly what you are buying.",
    intro2:
      "So here is ours, written as if you were hiring. If you then decide to hire for real, take it. It is as much yours as the rest.",

    dayToDayTitle: "What he does with his days",
    dayToDayIntro: "Six things come back every week, at every one of our clients.",
    dayToDay: [
      {
        title: "He connects things",
        body: "Your existing systems have twenty years of history and three successive owners. He reads your APIs, your exports, your database, and wires together what needs wiring. That is the part nobody puts in a demo.",
      },
      {
        title: "He writes code that ships to production",
        body: "Data pipelines, internal applications, agents. On the stack he already knows on arrival, the one you will find further down this page.",
      },
      {
        title: "He scopes",
        body: "You arrive with “we should automate the meeting notes”. He comes back with a spec, an estimate in days, and a number before.",
      },
      {
        title: "He prototypes fast",
        body: "A usable system in a few days, tested by the people who will do the work, before investing a month.",
      },
      {
        title: "He feeds back",
        body: "What the field teaches goes back into our playbooks, and back down to the other clients. You inherit what the others learned before you.",
      },
      {
        title: "He owns the outcome",
        body: "When a system breaks on a Tuesday evening, he is the one who gets called, and he is the one who fixes it.",
      },
    ] satisfies readonly RunInItem[],

    profileTitle: "The profile, plainly",
    profile: [
      {
        label: "Languages",
        cells: ["Python, TypeScript, SQL. Switches to your stack in a few days"],
      },
      {
        label: "Data",
        cells: ["Modelling, ETL, large volumes, queries that hold up"],
      },
      {
        label: "Architecture",
        cells: [
          "REST and GraphQL APIs, cloud (AWS, GCP, Azure), infrastructure as code",
        ],
      },
      {
        label: "Applied AI",
        cells: [
          "RAG, multi-agent systems, orchestration, evaluation, cost control",
        ],
      },
      {
        label: "Field work",
        cells: [
          "Requirements gathering, trading off scope/speed/quality, clear writing, stakeholder management",
        ],
      },
      {
        label: "Education",
        cells: ["Engineering school or a computer science master's, 2 to 8 years of experience"],
      },
    ] satisfies readonly SpecRow[],
    profileNote:
      "The technical half is learnable from public roadmaps. The field half decides everything, and it is only acquired by delivering at clients. Our engineers do it every week, under Walid's supervision.",

    salaryTitle: "What it is worth on the French market",
    salaryIntro:
      "Observed ranges for an equivalent role, gross annual salary, excluding bonus.",
    salaryHeaders: ["Experience", "Paris / Île-de-France", "Regions"],
    salary: [
      { label: "Junior, 0 to 2 years", cells: ["€45,000 to €55,000", "€38,000 to €48,000"] },
      { label: "Mid-level, 2 to 5 years", cells: ["€55,000 to €75,000", "€48,000 to €65,000"] },
      { label: "Senior, 5 to 8 years", cells: ["€75,000 to €100,000", "€65,000 to €85,000"] },
      {
        label: "Lead / Staff, 8 years and up",
        cells: ["€100,000 to €130,000+", "€85,000 to €110,000"],
      },
    ] satisfies readonly SpecRow[],
    salaryNote:
      "Fully loaded at around 35%, a senior paid €75,000 to €90,000 depending on the company and the role costs you between €101,000 and €122,000 a year. In the American labs the same profile is paid between $385,000 and $1 million, which explains why he becomes hard to keep once trained.",

    neighboursTitle: "Where he differs from neighbouring roles",
    neighboursHeaders: ["Role", "What he does", "Who owns the outcome"],
    neighbours: [
      { label: "Software engineer", cells: ["Builds the product, in-house", "The product team"] },
      {
        label: "Solutions engineer",
        cells: ["Demonstrates the product, pre-sales", "The salesperson"],
      },
      { label: "AI consultant", cells: ["Recommends, documents, leaves", "You"] },
      { label: "IT services consultant", cells: ["Executes a staffed scope", "The contract"] },
      {
        label: "Forward Deployed Engineer",
        cells: ["Builds at your place, in your tools, with your teams", "He does"],
      },
    ] satisfies readonly SpecRow[],
  },

  problem: {
    badge: "The problem",
    title: "Hiring a senior AI engineer: slow, expensive, risky.",
    intro:
      "You know what you need: someone who builds. The market answers with CVs, notice periods and promises.",
    anchors: [
      {
        figure: "6 to 12 months",
        label: "to hire a senior AI expert",
        detail:
          "You write the job spec, you source, you run the interviews, you wait out the notice period. All that time, nobody is building.",
      },
      {
        figure: "€70,000+/year",
        label: "in base salary, i.e. €95K to €145K fully loaded",
        detail:
          "You pay before the first line of code. And nothing guarantees that a single system will run in production.",
      },
      {
        figure: "1 mistake",
        label: "in the hire, and it all starts over",
        detail:
          "One bad hire on this role and you are back to zero: new sourcing, new notice period, six more months.",
      },
    ],
  },

  mechanism: {
    badge: "The mechanism",
    title: "He arrives with two hundred systems already deployed.",
    intro:
      "On day 1, your engineer opens the studio's toolbox: the call intelligence that analyses our own calls, the cockpit that briefs our CEO every morning, the tracker that scores the health of every engagement. More than 200 systems already deployed and the playbooks that go with them: he adapts what already runs.",
    footnote:
      "We build them for ourselves first. A system that does not hold up here never reaches you.",
  },

  team: {
    badge: "The team",
    title: "The engineers behind the model",
    intro:
      "Named engineers, whom you meet before signing. They build every day, here and at our clients, supervised directly by Walid, our CTO.",
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
    badge: "The profiles",
    title: "The profiles we train and source",
    intro:
      "We train and source the best AI profiles. Three roles, one standard: ship to production.",
    popularBadge: "Most in demand",
    items: [
      {
        number: "01",
        title: "AI Delivery Lead",
        label: "The conductor",
        description:
          "He runs the engagement end to end and translates your business priorities into delivered systems. He is the one who holds the pace, week after week.",
        deliverables: ["Roadmap held", "ROI trade-offs", "Weekly steering"],
        logos: [
          { name: "Notion", img: "/images/stack/notion-color.svg" },
          { name: "Slack", img: "/images/stack/slack-color.svg" },
          { name: "Claude", img: "/images/stack/claude-color.svg" },
        ],
      },
      {
        number: "02",
        title: "AI Engineer",
        label: "The builder",
        description:
          "RAG, multi-agent systems, orchestration: he builds inside your tools, on your real data. What he writes ships to production.",
        deliverables: [
          "Agents in production",
          "Integrations with your stack",
          "Documented playbooks",
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
        label: "The engine",
        description:
          "He keeps it running: deployment, monitoring, cost control. He is the one who turns a POC into a product.",
        deliverables: [
          "Reliable deployment",
          "Monitoring and alerts",
          "Costs under control",
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
    badge: "The stack",
    title: "The tools he already knows on arrival",
    intro:
      "Zero ramp-up on your invoice. He has already spent hundreds of hours on each of these tools, on real engagements.",
    tools: [
      {
        name: "Claude Code",
        img: "/images/stack/claude-color.svg",
        line: "His workbench. This is where your agents and your internal tools get written, every day.",
      },
      {
        name: "Cursor",
        img: "/images/stack/cursor-color.svg",
        line: "The AI-augmented IDE. Your internal tools shipped in days.",
      },
      {
        name: "Claude Agent SDK",
        img: "/images/stack/claude.svg",
        line: "Anthropic's agent framework: autonomous agents, wired into your data and your business rules.",
      },
      {
        name: "n8n",
        img: "/images/stack/n8n-color.svg",
        line: "Your tools wired to each other. Data flows, nobody retypes it.",
      },
      {
        name: "LangChain",
        img: "/images/stack/langchain-color.svg",
        line: "Your RAG agents: they answer from your documents and your own data.",
      },
      {
        name: "GitHub",
        img: "/images/stack/github-color.svg",
        line: "Every system versioned, reviewed and deployed cleanly. The code lives with you.",
      },
    ],
  },

  timeline: {
    badge: "How it runs",
    title: "Concretely, week by week",
    steps: [
      {
        period: "Weeks -2 to 0",
        title: "He learns your business before arriving",
        description:
          "Two weeks before kick-off he is already at work: he reads your processes, learns your vocabulary, gets to grips with your tools. On day 1, he already knows how you work.",
        gain: "Zero days spent explaining your business to him.",
      },
      {
        period: "First workstream",
        title: "He joins your morning stand-ups and opens the first workstream",
        description:
          "Scoping precedes the build. The first system is then built directly inside your workflows, with your teams.",
        gain: "A workstream open once the scope, the accesses and the test users are in place.",
      },
      {
        period: "Every month",
        title: "1 to 2 systems ship to production",
        description:
          "Every system is delivered with a number before and a number after. Whatever produces no result is reworked until it runs.",
        gain: "Measured impact on every delivery.",
      },
      {
        period: "Every week",
        title: "2h of training, hands on the systems",
        description:
          "He builds with the people who will use the system. Every week, he trains your teams for 2 hours on the systems they actually use. Hands on, never on slides.",
        gain: "Your teams level up while the systems are being built.",
      },
      {
        period: "At 6 months",
        title: "Your teams run the systems without him",
        description:
          "The systems run, the playbooks are written, your leads are trained. Everything belongs to you. The goal fits in one word: autonomy.",
        gain: "Zero dependency the day the engineer leaves.",
      },
    ] satisfies readonly TimelineStep[],
    ctaPrompt: "Want to know what he would build at your company first?",
  },

  training: {
    badge: "Training",
    title: "Your engineers can learn this job. We teach it to them.",
    anchor: "former-vos-equipes",
    intro:
      "The 2 hours of training a week already exist in every engagement. They are not only for users: your developers and product managers learn the job itself there.",

    gapTitle: "What your developers are missing is shorter than you think",
    gap: "Look at the public skills map for the job. The technical column fits in six blocks: Linux, front end, back end, algorithms and system design, AI engineering, DevOps. Your senior developers already cover four or five of them.",
    gapKicker:
      "What remains fits in four field skills, and that is where the job is decided.",

    skillsHeaders: ["Skill", "What it means concretely"],
    skills: [
      {
        label: "Gathering and scoping",
        cells: [
          "Turning “we should save some time” into a scope deliverable in three weeks",
        ],
      },
      {
        label: "Trade-offs",
        cells: [
          "Choosing between scope, speed and quality in front of a business that wants all three",
        ],
      },
      {
        label: "Business sense",
        cells: ["Costing the impact before building, and refusing what cannot be costed"],
      },
      {
        label: "Communication",
        cells: [
          "Writing a note a CFO understands, running a steering meeting, saying no cleanly",
        ],
      },
    ] satisfies readonly SpecRow[],
    skillsNote:
      "Those four are in no roadmap. They are acquired by delivering under constraint, in front of a client, with someone experienced alongside. That is what happens during an engagement.",

    howTitle: "How your teams acquire them during the engagement",
    how: [
      {
        title: "Hands on your systems",
        body: "The 2 weekly hours are about what your engineer is building that week, at your company, with your data.",
      },
      {
        title: "Paired on a real workstream",
        body: "Your developers scope and ship alongside him. Code review goes through our CTO, as it does for our own engineers.",
      },
      {
        title: "The playbooks written by them",
        body: "What they document becomes your reference. By the end of the engagement, they hold the pace without us.",
      },
    ] satisfies readonly RunInItem[],

    outro:
      "If it is your teams you want to level up, rather than one more engineer, our corporate training covers the technical foundations and the day-to-day uses.",
  },

  comparison: {
    badge: "The comparison",
    title: "FDE vs the alternatives",
    rows: [
      {
        label: "What you are buying",
        cdi: "A role, paid before the first line of code",
        freelance: "Billed days",
        esn: "Consultants far from your field",
        fde: "An engineer embedded in your team, an outcome measured against a KPI",
      },
      {
        label: "Getting started",
        cdi: "6 to 12 months of hiring, then a notice period to serve",
        freelance: "When his schedule frees up",
        esn: "When staffing decides",
        fde: "Onboarded 2 weeks before kick-off, scoping then build",
      },
      {
        label: "Supervision",
        cdi: "Yours to provide, on a job you are discovering",
        freelance: "He is alone with the problem",
        esn: "A manager far from the field",
        fde: "Supervised directly by our CTO, backed by 200+ deployed systems",
      },
      {
        label: "Training your teams",
        cdi: "A separate budget, when his schedule allows",
        freelance: "Rarely included",
        esn: "A separately billed project",
        fde: "2h of hands-on training a week, included",
      },
      {
        label: "What you are left with",
        cdi: "Everything, for as long as he stays",
        freelance: "The know-how leaves with him",
        esn: "Technical deliverables",
        fde: "Everything belongs to you: systems, playbooks, trained teams",
      },
      {
        label: "The commitment",
        cdi: "An employment contract, and the risk of a bad hire",
        freelance: "Best-efforts commitment only",
        esn: "A best-efforts obligation",
        fde: "An outcome measured against a KPI, system by system",
      },
    ] satisfies readonly ComparisonRow[],
  },

  insideOutside: {
    badge: "The real question",
    title: "What an outside engineer does better in the first six months",
    anchor: "externe-ou-interne",
    intro:
      "A CFO put the question to us bluntly last year: “why would I pay you, when I can hire someone in-house?” It is the right question. Here is the full answer, including the part that does not suit us.",

    lastMileTitle: "The last-mile problem",
    lastMile:
      "According to the 2025 MIT study, 95% of enterprise AI pilots produce no measurable return. The cause rarely lies with the model. It lies in everything that separates a demo that works from a system three hundred people use on Monday morning: access rights, edge cases, the person who refuses to change their spreadsheet, the export that lands on the 3rd of the month.",
    lastMileKicker: "That work takes someone who has already done it elsewhere.",

    strengthsTitle: "Five things the outside brings at the start",
    strengths: [
      {
        title: "He has seen two hundred systems",
        body: "Your first qualification agent looks a lot like the seventeenth he built. He already knows the three places where it breaks. An internal engineer, however excellent, discovers those three places at your expense.",
      },
      {
        title: "He arrives with the toolbox",
        body: "On day 1 he opens our playbooks, our call intelligence, our leadership cockpit, our engagement tracker. These are systems we run for ourselves before installing them at your company.",
      },
      {
        title: "He crosses the silos",
        body: "An employee depends on their manager, their department, their next review. A deployed engineer will talk to the accountant, the salesperson and the IT director in the same day without negotiating a reporting line.",
      },
      {
        title: "He is reversible",
        body: "If the fit is not there, we change engineer within a week. A bad hire on this role costs six more months and a probation period to manage.",
      },
      {
        title: "He teaches you the role before you open it",
        body: "This is the point our clients raise most often. After three months you know what this role really does at your company, which systems it must hold, and who it must talk to. You then write a job spec that describes real work.",
      },
    ] satisfies readonly RunInItem[],

    refusalsTitle: "Three cases where in-house wins, and where you should tell us",
    refusalsIntro: "We turn engagements down. Here is when.",
    refusals: [
      {
        title: "You have extreme domain depth",
        body: "Actuarial insurance, pharmaceutical compliance, banking pricing. If the critical knowledge takes two years to acquire, a permanent engineer will carry it better than we will.",
      },
      {
        title: "Your workload is stable and predictable over three years",
        body: "Beyond a certain volume, an employee costs less. We say so at the diagnostic, with the numbers.",
      },
      {
        title: "You already have the team",
        body: "If you employ three engineers able to ship to production, what you are missing is method and skills, not hands. Look at the next section instead, or the training catalogue.",
      },
    ] satisfies readonly RunInItem[],

    sequenceTitle: "The sequence most of our clients follow",
    sequence:
      "Three months with a deployed engineer, systems in production, a job spec written from reality. Hiring launched in month four, knowing what to look for. The new joiner inherits a documented environment and teams already trained, and is productive within weeks.",
    sequence2:
      "Some hire. Some extend. Some stop because the systems run and nobody needs another role. All three outcomes work for us, because in all three everything already belongs to you.",
  },

  validate: {
    badge: "The smart angle",
    title: "The best way to get this hire right: postpone it.",
    body: "You have never had an AI engineer. You do not yet know what to ask of them, how to manage them, or whether the role is justified over twelve months. Three months with us, and you will know exactly which profile to hire. Or you will find that you do not need one. Either way, you will have systems in production and trained teams.",
    footnote:
      "Some of our clients hire in-house afterwards. That counts as a successful engagement: everything already belongs to them.",
  },

  origin: {
    badge: "Where this model comes from",
    text: "Palantir built its success on this model twenty years ago: the engineer works inside the client's team, because no enterprise environment looks like another. OpenAI built its FDE team in 2024, then a $4 billion deployment joint venture in 2026. Anthropic followed. The giants have just validated what we have practised from the start: in French, for small and mid-sized companies.",
  },

  testimonials: {
    badge: "They trust us",
    title: "What it looks like at their companies",
    names: ["Nicole Neumann", "Éric Solal", "Mickaël Mina"],
  },

  badges: {
    partnersLabel: "Official partners",
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
    certsLabel: "Our engineers are certified",
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
    badge: "Frequently asked questions",
    title: "The questions we get before starting",
    items: [
      {
        question: "What is a Forward Deployed Engineer (FDE)?",
        answer:
          "An AI engineer deployed directly inside the client's team: he understands the real problem, writes production code, connects AI to the existing systems and stays accountable until the solution runs. The model comes from Palantir and is now adopted by OpenAI, Anthropic and Google. At AI Makers it is the core of the offer: an FDE embedded in your team, supervised by our CTO.",
      },
      {
        question: "Why is the FDE model taking off right now?",
        answer:
          "Because 95% of enterprise AI pilots produce no measurable return (MIT study, 2025): the models are powerful, but wiring them into a real environment is the actual problem. As a result, FDE job postings multiplied by 8 in a year, and the AI labs pay this profile between $385K and $1M a year. Few companies can hire that profile. Many can deploy one.",
      },
      {
        question: "Who owns what the engineer builds?",
        answer:
          "You do, entirely. Code, playbooks, documentation: all the intellectual property is yours, and it is written into the contract. The day we leave, everything stays with you. Zero dependency, zero hostage-taking.",
      },
      {
        question: "Who supervises the engineer day to day?",
        answer:
          "Walid, our CTO. Every system delivered is reviewed with him, every technical trade-off goes up to him, and the engineer draws on the playbooks of the 200+ systems the studio has already deployed. Your engineer works inside your team, never alone with a problem.",
      },
      {
        question: "What happens at the end of the engagement?",
        answer:
          "The goal fits in one word: autonomy. At 6 months the systems run, the playbooks are written and your leads are trained to keep them alive. Every system leaves with its documentation, in full client ownership.",
      },
      {
        question: "Does the engineer work remotely or on site?",
        answer:
          "Both. We work on site in mainland France and in Morocco, from our Paris and Casablanca offices, and remotely across the whole French-speaking region. The format is set around your organisation at the diagnostic.",
      },
      {
        question: "What is the minimum commitment?",
        answer:
          "3 months. The engagement then continues monthly, with 30 days' notice. The first weeks go to the audit and the costed roadmap, then the first systems ship to production from the first month.",
      },
      {
        question: "Why not simply hire in-house?",
        answer:
          "You can, and some of our clients do afterwards. The question is timing: hiring a senior AI engineer takes 6 to 12 months and commits €101,000 to €122,000 fully loaded per year, for a role whose shape you do not yet know. Deploying an FDE takes a few weeks, costs a fraction of the role, and teaches you exactly what that role must do at your company. You then hire with your eyes open, or not at all.",
      },
      {
        question: "What if we want to bring it in-house afterwards?",
        answer:
          "That is expected, and it is even a good exit scenario. The systems, the playbooks and the documentation belong to you from day one. The day you hire your own engineer, they inherit a documented environment and teams already trained: they are productive within weeks. We can also help you define the job spec and assess candidates.",
      },
      {
        question: "How is this different from an AI freelancer?",
        answer:
          "A freelancer sells you days and leaves with the know-how. We sell an outcome. When we leave, your leads stay, the documentation stays, and all the code belongs to you.",
      },

      {
        question: "What skills does a Forward Deployed Engineer have?",
        answer:
          "Python, TypeScript and SQL on languages, modelling and ETL on data, APIs and cloud on architecture, RAG and multi-agent systems on applied AI. The half that really decides is elsewhere: requirements gathering, trading scope against speed, clear writing, stakeholder management. Those four field skills are acquired by delivering at clients.",
      },
      {
        question: "What is an AI engineer's salary in France?",
        answer:
          "Between €45,000 and €55,000 gross for a junior in the Paris region, €55,000 to €75,000 for a mid-level, €75,000 to €100,000 for a senior, and above €100,000 for a lead. Add around 35% for the fully loaded cost. The regions sit about 15% below. In the American labs the same profile negotiates between $385,000 and $1 million.",
      },
      {
        question: "Forward Deployed Engineer and solutions engineer: what is the difference?",
        answer:
          "The solutions engineer works in pre-sales and demonstrates a product. The Forward Deployed Engineer arrives after signature and builds inside the client's environment. The first carries a sales cycle, the second carries a system in production.",
      },
      {
        question: "Does an FDE replace an IT services firm?",
        answer:
          "On applied AI, often yes. An IT services firm staffs a profile on a scope defined in advance, with a best-efforts obligation. The deployed engineer commits to an outcome measured against a KPI, system by system, and trains your teams at the same time.",
      },
      {
        question: "How long before an FDE is operational at our company?",
        answer:
          "Onboarding happens before kick-off: he reads your processes, learns your vocabulary and gets to grips with your tools. The first workstream starts once the scope, the accesses, the data and tool context and the test users are ready.",
      },

      {
        question: "Why do 95% of enterprise AI projects fail?",
        answer:
          "According to the MIT study published in 2025, the failure comes from the last mile of deployment rather than from the quality of the models. Access rights, edge cases, real adoption by the teams, integration with existing systems. Every enterprise environment is complicated in its own way, and no off-the-shelf software plugs into it alone.",
      },
      {
        question: "Is it better to hire an AI engineer or to deploy one?",
        answer:
          "It depends on three things: the domain depth required, how stable your workload is over three years, and what you already know about the role. If the critical knowledge takes two years to acquire, or if your workload is stable, hire. If you are opening this role for the first time, deploy first and hire afterwards knowing what to look for.",
      },
      {
        question: "In which cases do you turn an engagement down?",
        answer:
          "Three cases. Extreme domain depth, where a permanent hire will carry the knowledge better. A stable, predictable long-term workload, where an employee costs less. A team already in place, where what is missing is method rather than hands — in which case we point you to our corporate training.",
      },
      {
        question: "What happens if the fit with the engineer is not there?",
        answer:
          "We change engineer, within a week. The successor picks up written playbooks and a documented environment. That is a fundamental difference from a failed hire, which costs six more months.",
      },
      {
        question: "Can an FDE work with our existing IT department?",
        answer:
          "That is the standard case. He plugs into your security processes, your code reviews and your environments. All the code goes to your GitHub, versioned and reviewed. Our AI governance page details the framework.",
      },

      {
        question: "Can we train our own engineers in the FDE role?",
        answer:
          "It is already included in the engagement: 2 hours a week, on the systems your engineer is building at your company. Your developers scope and ship paired with him, code review goes through our CTO, and the playbooks they write become your reference. If you are looking to build skills without a deployment, our corporate AI training covers the foundations.",
      },
      {
        question: "Can a product manager become a Forward Deployed Engineer?",
        answer:
          "On the scoping, trade-off and stakeholder side, yes, and it is often the fastest profile to bring up to speed. What they lack is the technical foundation. Our best pairs put a senior developer and a product manager on the same workstream.",
      },
    ] satisfies readonly FaqItem[],
  },
} as const;

/** Copy de la route, côté anglais. Miroir de `fdePage`. */
export const fdePageEn = {
  meta: {
    title: "Forward Deployed Engineer: a dedicated AI engineer",
    description:
      "An AI engineer deployed inside your team: he understands your business, builds inside your tools and ships production code. Born at Palantir.",
  },
  schema: {
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Forward Deployed Engineer",
    serviceType: "AI engineer deployed in-house (Forward Deployed Engineer)",
    serviceName: "Forward Deployed Engineer",
    serviceDescription:
      "An AI engineer embedded in the client's team, onboarded on their sector 2 weeks before kick-off, who builds 1 to 2 AI systems into production per month directly inside the company's workflows, with 2 hours of training a week until the teams are autonomous at 6 months.",
    definedTermName: "Forward Deployed Engineer (FDE)",
    areaServed: ["France", "Morocco"],
    occupationName: "Forward Deployed Engineer (deployed AI engineer)",
    alternateName: ["AI engineer", "Artificial intelligence engineer"],
    salaryLabel: "Observed gross annual salary in France",
    walid: {
      jobTitle: "CTO at AI Makers",
      description:
        "Technical director at AI Makers. INPT engineer, systems builder: more than 250 products built, AI agents and n8n automations. Co-founder of our partner AY Automate.",
      alumniOf: "Institut National des Postes et Télécommunications (INPT)",
    },
    adel: {
      jobTitle: "Associate AI expert at AI Makers",
      description:
        "Associate AI expert at AI Makers. ENSIAS engineer, he has delivered generative AI projects for L'Oréal, GSK and Nestlé. Certified Microsoft Azure Data Scientist. Co-founder of our partner AY Automate.",
      alumniOf:
        "École Nationale Supérieure d'Informatique et d'Analyse des Systèmes (ENSIAS)",
    },
  },
  embed: {
    badge: "At a glance",
    title: "He does not land from the outside. He plugs in.",
    subtitle:
      "An engineer who connects to your tools and your teams, and builds where the work happens.",
  },
  careersNote: {
    prefix: "The full role, salary ranges and career paths are on",
    jobLink: {
      label: "the AI engineer role page",
      href: "/metiers/ingenieur-ia",
    },
    middle: ". Our open roles are on",
    careersLink: { label: "Careers", href: "/en/careers" },
  },
  ctaCost: {
    titre: "This profile, without the hiring",
    texte:
      "Describe your systems and your priorities. We come back with the cost of an engineer deployed at your company, to compare against the €101,000 to €122,000 fully loaded cost of a senior on a permanent contract.",
    label: "Get my tailored quote",
    href: "/en/contact",
    secondaire: { label: "See the role page", href: "/metiers/ingenieur-ia" },
  },
  hireOrDeploy: {
    badge: "Hire or deploy",
    title: "The same 9 months, seen from both sides.",
    subtitle:
      "In the time your job ad takes to find its candidate, a Forward Deployed Engineer has already shipped his first systems.",
  },
  ctaThirty: {
    titre: "Thirty minutes to find out whether this is your case",
    texte:
      "We look at your systems and your priorities, and we tell you frankly whether a deployed engineer is the right call, or whether you should hire.",
    label: "Book my free diagnostic",
    href: "/en/contact",
  },
  leadership: {
    badge: "Technical leadership",
    title: "The technical leadership at AI Makers",
    intro:
      "AI Makers deploys more than 20 AI engineers into companies. Every engagement is framed by engineers who build production systems every day, in partnership with AY Automate.",
    partnerBadge: "Official partner in the French-speaking market",
    countBadge: "20+ AI engineers deployed into companies",
    people: [
      {
        name: "Walid Boulanouar",
        role: "CTO at AI Makers",
        photo: "/images/team/walid.jpg",
        linkedin: "https://www.linkedin.com/in/walid-boulanouar",
        bio: "Technical director at AI Makers. INPT engineer, a builder by nature: more than 250 products built, AI agents and n8n automations, systems delivered for government entities in Morocco and Saudi Arabia. He supervises every deployed engineer. Co-founder of our partner AY Automate.",
      },
      {
        name: "Adel Dahani",
        role: "Associate AI expert",
        photo: "/images/formateurs/adel-dahani.png",
        linkedin: "https://www.linkedin.com/in/adeldahani",
        bio: "Associate AI expert at AI Makers. ENSIAS engineer, he has delivered generative AI projects for L'Oréal, GSK and Nestlé. Certified Microsoft Azure Data Scientist. Co-founder of our partner AY Automate.",
      },
    ],
  },
  trainingLinks: {
    catalogue: {
      label: "AI training for teams",
      href: "/en/ai-training-for-teams",
    },
    joiner: ", including",
    featured: {
      label: "Mastering Claude at work",
      href: "/formation-ia-entreprise/maitriser-claude",
    },
  },
  buildCtaLabel: "See what he would build at our company",
  ctaWelcome: {
    titre: "Welcome an engineer into your team",
    texte:
      "Onboarded on your business two weeks before kick-off, he opens his first workstream once the scope, the accesses and the test users are in place. Three new clients a month, maximum.",
    label: "Book my slot",
    href: "/en/contact",
    secondaire: { label: "See our capacity", href: "/en/capacity" },
  },
  capacityLink: { label: "See our current capacity →", href: "/en/capacity" },
  ctaQuestion: {
    titre: "A question that is not on this list?",
    texte:
      "Describe your context. We answer with a scope, a plan and a price, or we tell you that this is not for you.",
    label: "Ask my question",
    href: "/en/contact",
    secondaire: { label: "See our capacity", href: "/en/capacity" },
  },
  related: [
    {
      title: "AI Transformation",
      href: "/en/ai-transformation",
      description: "The full offer your engineer is part of.",
    },
    {
      title: "The AI Makers team",
      href: "/en/team",
      description:
        "The people who deploy at your company, between Paris and Casablanca.",
    },
    {
      title: "Careers",
      href: "/en/careers",
      description: "Open AI engineering roles at AI Makers.",
    },
    {
      title: "AI engineer role page",
      href: "/metiers/ingenieur-ia",
      description: "The job, the skills and the salaries in France.",
    },
    {
      title: "Governance and security",
      href: "/en/security",
      description: "The framework your engineer works within.",
    },
    {
      title: "AI training for teams",
      href: "/en/ai-training-for-teams",
      description: "Levelling up your teams, with or without a deployment.",
    },
  ],
  finalCta: {
    title: "Ready to welcome your AI engineer?",
    subtitle:
      "30 minutes to analyse your workflows and identify the first systems your engineer would build, whether you work with us or not.",
    cta: { label: "Book my free diagnostic", href: "/en/contact" },
  },
} as const;

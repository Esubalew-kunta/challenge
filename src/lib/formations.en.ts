import { TOOL, type Formation, type FormationTool } from "./formations";

/**
 * Contenu anglais des programmes de formation, transcrit depuis les masters
 * `[EN] website-content/formation-ia-entreprise--*`.
 *
 * **Portée volontairement réduite au socle.** Le type `Formation` porte une
 * douzaine de blocs OPTIONNELS d'expansion SEO (`comparison`, `usages`,
 * `securite`, `ecosysteme`, `versus`, `limites`, `preparation`, `erreurs`,
 * `pratiques`, `passerelle`, `apres`) que seules deux pages françaises
 * remplissent. Les masters anglais ne les couvrent pas : ils s'arrêtent au
 * socle (hero + fiche, objectifs, programme, résultats, FAQ, CTA).
 *
 * On ne les invente donc pas — §7 interdit d'écrire du contenu absent de la
 * documentation source. Ces blocs sont conditionnels dans le gabarit : côté EN
 * ils ne s'affichent simplement pas. C'est un écart de profondeur FR/EN assumé
 * et documenté, pas un oubli.
 *
 * `slug` porte le segment ANGLAIS : c'est lui qui construit
 * `/en/ai-training-for-teams/<slug>` et il doit correspondre à ROUTE_MAP.
 *
 * `tools` réutilise le registre `TOOL` du fichier français : ce sont des noms
 * de produit et des logos, identiques dans les deux langues.
 */
export const formationsEn: readonly Formation[] = [
  {
    slug: "ai-literacy",
    name: "AI Literacy Masterclass",
    seoTitle: "AI Literacy Training for Teams",
    seoDescription:
      "A half- or full-day AI literacy masterclass: give non-technical teams the reflex to use ChatGPT, Claude, Gemini and Copilot on their real daily tasks.",
    titre: "AI Literacy Masterclass: give every team the AI reflex",
    categorie: "Foundation",
    tagline: "See what AI can actually do — and save time from day one.",
    resume:
      "The starting-point session: by the end, non-technical teams use ChatGPT, Claude, Gemini and Copilot on their own everyday tasks — drafting, summarising, document analysis. No jargon, no code.",
    illustration: {
      src: "/images/3d/chapeau-formation.png",
      alt: "AI literacy training for teams",
    },
    photo: {
      src: "/images/formations/masterclass-amphi.png",
      alt: "AI literacy masterclass in a lecture hall",
    },
    tools: [TOOL.claude, TOOL.chatgpt, TOOL.gemini, TOOL.copilot],
    niveau: "Beginner",
    public: "Every team, from support to leadership",
    format: "On-site, remote or hybrid",
    duree: "Tailored format, from a half-day to a full day",
    prerequis: "No technical prerequisites",
    objectifs: [
      "Understand what generative AI can — and can't — reliably do at work",
      "Write clear, repeatable prompts that hold their quality",
      "Apply AI to real tasks: drafting, summarising, document analysis",
      "Spot your own highest time-saving use cases",
    ],
    programme: [
      {
        titre: "Module 1 — Understanding generative AI",
        items: [
          "From automation to deep learning: what AI actually changes at work",
          "The assistant landscape (Claude, ChatGPT, Gemini, Copilot) and how they differ",
          "Live demos on concrete, everyday cases",
        ],
      },
      {
        titre: "Module 2 — Prompting basics",
        items: [
          "Structuring a prompt: role, context, task, expected format",
          "Making good results reliable and repeatable",
          "Hands-on: each participant builds and improves their own prompts",
        ],
      },
      {
        titre: "Module 3 — AI on your daily tasks",
        items: [
          "Write, summarise, rephrase and translate faster",
          "Analyse documents, pull out the essentials, prep a meeting",
          "Produce visuals and tables from your own data",
        ],
      },
      {
        titre: "Module 4 — Finding your use cases",
        items: [
          "Map the time-consuming tasks in your role",
          "Prioritise high-impact, low-risk uses",
          "Leave with an action plan you can apply immediately",
        ],
      },
    ],
    resultats: [
      { value: "7h", label: "saved per week, per employee" },
      { value: "10+", label: "use cases mapped for your teams" },
      { value: "0", label: "technical prerequisites" },
    ],
    faq: [
      {
        question: "Who is the AI literacy masterclass for?",
        answer:
          "Every team, whatever their level. Most people we train are non-technical — sales, legal, HR, support, leadership. The session starts from their daily tasks, not from technical concepts.",
      },
      {
        question: "Do participants need a technical background?",
        answer:
          "None. This is the starting point of any AI rollout: helping whole teams understand what AI can do and how to use it in their role.",
      },
      {
        question:
          "Which AI assistant will our teams learn — ChatGPT, Claude, Gemini or Copilot?",
        answer:
          "All four. The session compares them and shows when to use which; if you've already standardised on one (say Microsoft Copilot), the hands-on exercises focus there while keeping the overview. Either way the content is built beforehand from your own processes and real documents.",
      },
    ],
  },
  {
    slug: "claude-training",
    name: "Mastering Claude in the enterprise",
    seoTitle: "Claude Training for Teams",
    seoDescription:
      "Make Claude your team's core assistant: Skills, Projects, Cowork, MCP connectors and Microsoft 365 integrations — with the security settings that fit.",
    titre: "Mastering Claude in the enterprise: Skills, Cowork and AI automation",
    categorie: "Role-based",
    badge: "Most requested",
    tagline:
      "Go from chat to real automation: Skills, Projects, Cowork and connectors.",
    resume:
      "Make Claude your team's core assistant — Skills, Projects, Cowork, MCP connectors and Microsoft 365 integrations — with the right security settings.",
    illustration: {
      src: "/images/3d/etoiles-ia.png",
      alt: "Mastering Claude in the enterprise",
    },
    photo: {
      src: "/images/formations/masterclass-skema-speaker.png",
      alt: "Mastering Claude in the enterprise, training session",
    },
    bandPhoto: {
      src: "/images/formations/masterclass-amphi.png",
      alt: "Claude masterclass in a lecture hall at SKEMA Business School",
    },
    tools: [TOOL.claude],
    niveau: "Beginner → Intermediate",
    public:
      "Managers, operations teams, leadership, digital transformation leads",
    format: "On-site, remote or hybrid",
    duree: "Tailored format, from one day to a full track",
    prerequis: "No technical prerequisites",
    objectifs: [
      "Configure Claude as a specialised assistant with Skills and Projects",
      "Automate multi-step tasks with Cowork — no code",
      "Connect Claude to your tools (Drive, Notion, Slack, Microsoft 365)",
      "Roll Claude out across a team with the right security settings",
    ],
    programme: [
      {
        titre: "Module 1 — Claude fundamentals",
        items: [
          "From chat to working assistant: what Claude actually changes",
          "Prompts, styles and good practice for reliable results",
          "Configuring Claude for your role",
        ],
      },
      {
        titre: "Module 2 — Skills, Projects & knowledge bases",
        items: [
          "Build specialised assistants with Skills",
          "Organise your knowledge in Projects",
          "Standardise usage across a team",
        ],
      },
      {
        titre: "Module 3 — Cowork & no-code automation",
        items: [
          "Automate multi-step tasks with Cowork",
          "Chain actions without writing code",
          "Concrete use cases by function",
        ],
      },
      {
        titre: "Module 4 — Connectors, rollout & security",
        items: [
          "Connect Claude to Drive, Notion, Slack and Microsoft 365 (MCP)",
          "Roll Claude out across the team",
          "Set the guardrails for data security and confidentiality",
        ],
      },
    ],
    resultats: [
      { value: "100%", label: "of Claude's potential put to use" },
      { value: "No code", label: "automations everyone can build" },
      { value: "At scale", label: "secure team rollout" },
    ],
    faq: [
      {
        question: "Do participants need technical skills?",
        answer:
          "No. The program is built for managers and operations teams. Even the Cowork automations are done without writing code.",
      },
      {
        question: "What are Skills and Cowork?",
        answer:
          "Skills specialise Claude on your tasks and context; Cowork automates multi-step tasks. Together they take Claude from a chat window to a real working assistant.",
      },
      {
        question: "Can Claude connect to our tools?",
        answer:
          "Yes. Via MCP connectors, Claude plugs into Drive, Notion, Slack and Microsoft 365. We also cover team-wide rollout and the security settings.",
      },
    ],
  },
  {
    slug: "ai-for-advertising",
    name: "AI for Creative & Advertising",
    seoTitle: "AI for Advertising & Creative Teams",
    seoDescription:
      "Speed up creative production with Nano Banana and Weavy while keeping art direction consistent. AI training for creative and advertising teams.",
    titre: "AI for Advertising: produce and adapt creative content, faster",
    categorie: "Role-based",
    tagline:
      "Produce and adapt creative content with AI — without losing art direction.",
    resume:
      "Speed up creative output with Nano Banana and Weavy while keeping a consistent art direction from brief to delivery.",
    illustration: {
      src: "/images/3d/ampoule-checks.png",
      alt: "AI for creative and advertising teams",
    },
    photo: {
      src: "/images/formations/lab-ia-equipe-crea.jpg",
      alt: "Creative team AI training session at the AI Lab",
    },
    tools: [TOOL.nanoBanana, TOOL.weavy],
    niveau: "Beginner → Intermediate",
    public: "Creatives, designers, marketing and communications teams",
    format: "On-site, remote or hybrid",
    duree: "Tailored format, from one day to a full track",
    prerequis: "No technical prerequisites",
    objectifs: [
      "Generate visuals and creative content with AI",
      "Shorten production cycles",
      "Adapt creative across channels",
      "Build a creative AI workflow with Nano Banana and Weavy",
    ],
    programme: [
      {
        titre: "Module 1 — Creative AI basics",
        items: [
          "The creative-tool landscape and what each one does well",
          "Keeping a consistent art direction when AI is in the loop",
          "The prompts behind quality visuals",
        ],
      },
      {
        titre: "Module 2 — Generating visuals & content with Nano Banana",
        items: [
          "Produce images and creative variations",
          "Iterate quickly on concepts",
          "Stay true to brand identity",
        ],
      },
      {
        titre: "Module 3 — Structuring a creative workflow with Weavy",
        items: [
          "Bring AI into the production pipeline, brief to delivery",
          "Assemble and chain the creative steps",
          "Keep every deliverable consistent",
        ],
      },
      {
        titre: "Module 4 — Adapting & scaling",
        items: [
          "Adapt creative to each channel (social, print, web)",
          "Shorten production cycles",
          "Measure the time and volume you gain",
        ],
      },
    ],
    resultats: [
      { value: "x5", label: "faster production cycles" },
      { value: "Art direction", label: "kept consistent across outputs" },
      { value: "Multi-channel", label: "variations adapted to each channel" },
    ],
    faq: [
      {
        question: "Who is this training for?",
        answer:
          "Creatives, designers and marketing/comms teams who want to produce faster while keeping quality and brand consistency intact.",
      },
      {
        question: "Which tools are covered?",
        answer:
          "Nano Banana for generating visuals and Weavy for structuring the creative workflow end to end, from brief to delivery.",
      },
      {
        question: "Does AI replace art direction?",
        answer:
          "No. AI speeds up production, but art direction stays with your team. The training is specifically about keeping a consistent art direction while producing more.",
      },
    ],
  },
  {
    slug: "ai-sales-training",
    name: "Go-to-Market & Sales",
    seoTitle: "AI Sales Training for Teams",
    seoDescription:
      "Scale prospecting with Clay, Lemlist and FullEnrich: enriched lists, personalised sequences, more meetings booked. AI sales training on your real pipeline.",
    titre: "Go-to-Market & Sales: find and convert more customers with AI",
    categorie: "Role-based",
    tagline:
      "Build an AI-powered acquisition machine — from list to booked meeting.",
    resume:
      "Scale prospecting with Clay, Lemlist and FullEnrich: enriched lists, personalised sequences, and more meetings on the calendar.",
    illustration: {
      src: "/images/3d/cible-flechette.png",
      alt: "AI-powered prospecting and sales",
    },
    photo: {
      src: "/images/formations/seminaire-equipe.png",
      alt: "Go-to-Market & Sales training during a team offsite",
    },
    tools: [TOOL.clay, TOOL.lemlist, TOOL.fullenrich],
    niveau: "Intermediate",
    public: "Sales, marketing, growth teams and founders",
    format: "On-site, remote or hybrid",
    duree: "Tailored format, from one day to a full track",
    prerequis: "No technical prerequisites",
    objectifs: [
      "Spot the AI levers for customer acquisition",
      "Automate prospecting and lead enrichment with Clay and FullEnrich",
      "Personalise multichannel sequences at scale with Lemlist",
      "Lift conversion and tighten sales follow-up",
    ],
    programme: [
      {
        titre: "Module 1 — The AI-powered acquisition strategy",
        items: [
          "Map your market and target segments with AI",
          "Build qualified, up-to-date prospect lists",
          "The AI levers at each stage of the sales cycle",
        ],
      },
      {
        titre: "Module 2 — Enrich and target with Clay & FullEnrich",
        items: [
          "Automate prospect data collection and enrichment",
          "Detect buying signals and prioritise accounts",
          "Clean and de-risk your sales database",
        ],
      },
      {
        titre: "Module 3 — Personalised sequences with Lemlist",
        items: [
          "Build multichannel sequences (email, LinkedIn)",
          "Personalise messages at scale without losing quality",
          "Test, measure and optimise reply rates",
        ],
      },
      {
        titre: "Module 4 — Convert and follow up",
        items: [
          "Prep your sales meetings with AI",
          "Improve follow-up and re-engagement",
          "Track the performance of the acquisition machine",
        ],
      },
    ],
    resultats: [
      { value: "x3", label: "prospecting volume at the same quality" },
      { value: "100%", label: "of messages personalised at scale" },
      { value: "+conv.", label: "higher conversion and reply rates" },
    ],
    faq: [
      {
        question: "Who is this training for?",
        answer:
          "Sales, marketing and growth teams, plus founders who want to scale acquisition. No technical prerequisites.",
      },
      {
        question: "Which tools are covered?",
        answer:
          "The go-to outbound stack: Clay and FullEnrich for data enrichment, Lemlist for personalised multichannel sequences.",
      },
      {
        question:
          "Do we need Clay, Lemlist and FullEnrich subscriptions to take part?",
        answer:
          "Not to start — the training can run in our environment so the team learns the method first. The biggest gains come once your team has its own Clay, FullEnrich and Lemlist seats; we help you pick the tier that fits your prospecting volume.",
      },
    ],
  },
  {
    slug: "microsoft-copilot",
    name: "Microsoft Copilot",
    seoTitle: "Microsoft Copilot Training for Teams",
    seoDescription:
      "Copilot training on your everyday Microsoft 365 work: docs, spreadsheets, email and meetings — time saved from the first week, on your own real files.",
    titre:
      "Microsoft Copilot training: finally make your Microsoft 365 licenses pay off",
    categorie: "Role-based",
    tagline:
      "Copilot in Word, Excel, PowerPoint, Outlook and Teams — on your real files.",
    resume:
      "Put Copilot to work across your daily Microsoft 365 tasks: documents, spreadsheets, email and meetings. Time saved from the first week of use.",
    illustration: {
      src: "/images/3d/outils-implementation.png",
      alt: "Mastering Microsoft Copilot in the enterprise",
    },
    photo: {
      src: "/images/formations/masterclass-amphi-ecrans.png",
      alt: "Microsoft Copilot training, hands-on practice on screen",
    },
    tools: [TOOL.copilot, TOOL.microsoft],
    niveau: "Beginner → Intermediate",
    public: "Employees, managers, support functions",
    format: "On-site, remote or hybrid",
    duree: "Tailored format, from a half-day to a full day",
    prerequis: "Microsoft 365 Copilot licenses in place",
    objectifs: [
      "Structure and summarise information with AI",
      "Produce professional content faster (Word, PowerPoint, Excel)",
      "Improve internal collaboration and communication (Teams, Outlook)",
      "Automate low-value, repetitive tasks",
    ],
    programme: [
      {
        titre: "Module 1 — Getting started with Copilot",
        items: [
          "Where to find Copilot across Microsoft 365",
          "The right habits for phrasing your requests",
          "What Copilot can do — and where its limits are",
        ],
      },
      {
        titre: "Module 2 — Producing faster",
        items: [
          "Draft and format in Word",
          "Analyse and summarise data in Excel",
          "Generate a PowerPoint deck from a document",
        ],
      },
      {
        titre: "Module 3 — Collaborating and communicating",
        items: [
          "Summarise and prioritise email in Outlook",
          "Capture decisions and actions in Teams",
          "Prep and follow up on your meetings",
        ],
      },
      {
        titre: "Module 4 — Automating the everyday",
        items: [
          "Spot the repetitive tasks to hand to AI",
          "Save time on day-to-day office work",
          "Measure productivity gains by team",
        ],
      },
    ],
    resultats: [
      { value: "Licenses", label: "Microsoft 365 finally paying off" },
      { value: "Less time", label: "on everyday office tasks" },
      { value: "Gains", label: "measurable productivity, by team" },
    ],
    faq: [
      {
        question: "Do we need Copilot already to take the training?",
        answer:
          "Yes — the training is built around Microsoft 365 Copilot. It's ideal for companies that have just rolled out the licenses and want value quickly.",
      },
      {
        question: "Which Microsoft tools are covered?",
        answer:
          "The whole suite: Word, Excel, PowerPoint, Outlook and Teams. We tailor the exercises to the apps your teams use most.",
      },
      {
        question: "How soon do results show?",
        answer:
          "Gains show on everyday office tasks in the first week — a deck drafted from a document, an inbox triaged in Outlook, meeting actions captured in Teams. The goal is skills your teams can apply the moment the session ends.",
      },
    ],
  },
  {
    slug: "vibe-coding",
    name: "Vibe Coding",
    seoTitle: "Vibe Coding Course for Teams",
    seoDescription:
      "Our most advanced program: drive Claude Code, Cursor and Codex to build your own internal tools — no coding needed. A hands-on vibe coding course for operators.",
    titre: "Vibe Coding: build your own tools with AI, without being a developer",
    categorie: "Advanced",
    tagline: "Build your own tools by driving AI in plain language.",
    resume:
      "The most advanced program in the catalogue: steer the coding assistants — Claude Code, Cursor, Codex — to build your own internal tools, without knowing how to code.",
    illustration: {
      src: "/images/3d/marteau-build.png",
      alt: "Building your own tools with AI",
    },
    photo: {
      src: "/images/formations/atelier-hands-on.png",
      alt: "Vibe Coding workshop, hands on the tools",
    },
    tools: [TOOL.claudeCode, TOOL.cursor, TOOL.codex],
    niveau: "Intermediate → Advanced",
    public:
      "Operators, product managers and ops who want to build their own tools",
    format: "On-site, remote or hybrid",
    duree: "Tailored format, multi-session track",
    prerequis:
      "Comfortable with office software; no programming background needed",
    objectifs: [
      "Drive the coding assistants (Claude Code, Cursor, Codex) in plain language",
      "Build internal tools, prototypes and small apps",
      "Design agents and automations that take over repetitive work",
      "Turn your builds into something the team can rely on — with an eye on ROI",
    ],
    programme: [
      {
        titre: "Module 1 — Vibe coding fundamentals",
        items: [
          "How a coding assistant works, and how to talk to it",
          "Claude Code, Cursor and Codex: when to reach for which",
          "From an idea to a first working tool, live",
        ],
      },
      {
        titre: "Module 2 — Building your own tools",
        items: [
          "Prototype a small app that's useful to your team",
          "Iterate and fix without hitting a technical wall",
          "Good practice for results that stay reliable and maintainable",
        ],
      },
      {
        titre: "Module 3 — Agents and automations",
        items: [
          "Understand the architecture of an AI agent",
          "Automate complex, repetitive tasks",
          "Connect AI to the tools your team already uses",
        ],
      },
      {
        titre: "Module 4 — Shipping and measuring",
        items: [
          "Roll your builds out to the team",
          "Set the guardrails for security, quality and cost",
          "Measure the productivity gain and the ROI",
        ],
      },
    ],
    resultats: [
      { value: "1st tool", label: "built during the training" },
      { value: "0 lines", label: "of code written by hand" },
      { value: "ROI", label: "measured on the automations you ship" },
    ],
    faq: [
      {
        question: "Do you need to know how to code to take Vibe Coding?",
        answer:
          "No — that's the whole point. You build tools by driving AI in plain language. The program is designed for non-technical operators who want to create their own solutions.",
      },
      {
        question: "Which tools are used?",
        answer:
          "The leading coding assistants: Claude Code, Cursor and Codex. You learn when and how to use each one for the job in front of you.",
      },
      {
        question: "What do participants leave with?",
        answer:
          "At minimum, a working tool or prototype built during the session that you can use in your actual work — plus the method to build more on your own.",
      },
    ],
  },
];

export function getFormationEn(slug: string): Formation | undefined {
  return formationsEn.find((f) => f.slug === slug);
}

export function getOtherFormationsEn(slug: string): readonly Formation[] {
  return formationsEn.filter((f) => f.slug !== slug);
}

/**
 * Textes alternatifs anglais des photos de session.
 *
 * Mêmes fichiers image, mêmes `src` : seul l'`alt` change. Il était resté en
 * français sur les six pages programme anglaises déjà en ligne, qui lisent
 * `formationPhotos` directement — un lecteur d'écran anglophone y entendait
 * « Masterclass IA AI Makers : intervention sur l'impact IA par métier ».
 *
 * L'ordre suit celui de `formationPhotos` : `formation-page.tsx` sélectionne
 * sa photo PAR INDICE, donc les deux tableaux doivent rester alignés.
 */
export const formationPhotosEn: readonly FormationTool[] = [
  {
    src: "/images/formations/masterclass-skema-speaker.png",
    alt: "AI Makers AI masterclass: a talk on the impact of AI role by role",
  },
  {
    src: "/images/formations/session-equipe-quote.jpg",
    alt: "The end of a corporate AI training session",
  },
  {
    src: "/images/formations/masterclass-amphi.png",
    alt: "An AI masterclass in a lecture hall",
  },
  {
    src: "/images/formations/session-finance-groupe.jpg",
    alt: "AI training for a corporate finance team",
  },
  {
    src: "/images/formations/atelier-hands-on.png",
    alt: "A small-group hands-on workshop, hands on the tools",
  },
  {
    src: "/images/formations/session-projection-ia.jpg",
    alt: "A training session on putting AI to work in your role",
  },
  {
    src: "/images/formations/seminaire-equipe.png",
    alt: "A corporate AI training seminar",
  },
  {
    src: "/images/formations/lab-ia-equipe-crea.jpg",
    alt: "AI training for a creative team at the AI Lab",
  },
];

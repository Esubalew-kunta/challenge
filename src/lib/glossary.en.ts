/**
 * Contenu anglais du glossaire /en/ai-glossary.
 *
 * Les 30 définitions viennent du master `[EN] website-content/glossaire-ia/`,
 * qui les couvre intégralement — c'est le master le plus complet de la série.
 *
 * UNE EXCEPTION : « Forward Deployed Engineer (FDE) ». La page française porte
 * 31 termes, le master n'en couvre que 30 et saute celui-là. Il est traduit
 * ici depuis la définition française, en cohérence avec la page
 * /en/forward-deployed-engineer déjà en ligne.
 *
 * (À noter, sans le corriger : la méta annonce « 30 définitions » des deux
 * côtés alors que la page en compte 31. Écart présent dans le FR en ligne.)
 */

import type { GlossaryCategory } from "./glossary";

export const glossaryMetaEn = {
  // Le gabarit du layout ajoute « | AI Makers » : ne pas le réécrire ici.
  title: "AI glossary: the terms that matter",
  description:
    "30 clear, jargon-free definitions of the AI terms that matter in business: LLM, AI agent, RAG, AI audit, GEO, AI Act, prompt engineering. By AI Makers.",
} as const;

export const glossaryCategoriesEn: readonly GlossaryCategory[] = [
  {
    id: "fondamentaux",
    title: "Fundamentals",
    terms: [
      {
        term: "Generative AI",
        definition:
          "Generative AI refers to systems that can produce new content — text, images, code, audio — from a natural-language instruction. Unlike predictive AI, which classifies or forecasts, generative AI creates. It's the technology behind ChatGPT, Claude, and Gemini, and the foundation of most business AI use cases since 2023.",
      },
      {
        term: "LLM (large language model)",
        definition:
          "A large language model (LLM) is an AI model trained on vast volumes of text to understand and generate natural language. It works by predicting the most likely continuation of a text, which lets it write, summarise, translate, analyse, and code. GPT, Claude, and Gemini are LLMs — the basic building block of generative-AI applications.",
      },
      {
        term: "AI agent",
        definition:
          "An AI agent is a system that uses a language model to complete a task end to end, on its own. Unlike a chatbot that only answers, an agent plans, uses tools (search, databases, APIs), takes actions, and checks its own results. In a company, an AI agent can handle customer requests, qualify leads, or produce reports without human intervention.",
      },
      {
        term: "Forward Deployed Engineer (FDE)",
        definition:
          "A Forward Deployed Engineer is an AI engineer embedded inside the client's teams rather than working at arm's length from an agency. They map the processes on site, build the systems in the client's own tools, and train the people who will run them. The model comes from Palantir and is the one AI Makers uses for its Build phase: one named engineer per account, shipping to production every month.",
      },
      {
        term: "Prompt",
        definition:
          "A prompt is the instruction you send an AI model to get a response. It can contain a task, context, examples, and an expected output format. The quality of the prompt directly drives the quality of the result: the same model can produce mediocre or excellent output depending on how precise the instruction is.",
      },
      {
        term: "Prompt engineering",
        definition:
          "Prompt engineering is the discipline of designing and optimising the instructions given to AI models to get reliable, repeatable results. It draws on specific techniques: a role assigned to the model, worked examples, step-by-step decomposition, format constraints. In a company, standardised and tested prompts turn individual AI use into a repeatable process.",
      },
      {
        term: "Hallucination",
        definition:
          "A hallucination is a false answer stated with confidence by an AI model — an invented fact, a source that doesn't exist, a wrong figure. It happens because the model predicts plausible text without checking whether it's true. In business you limit it by connecting the model to verified sources (RAG), requiring citations, and keeping a human check on critical content.",
      },
      {
        term: "Token",
        definition:
          "A token is the elementary unit of text a language model processes: a short word, a fragment of a word, or a punctuation mark. In English, a token is roughly three-quarters of a word. Tokens determine two concrete things: the cost of using a model, billed by token volume, and how much text it can handle at once.",
      },
      {
        term: "Context window",
        definition:
          "The context window is the maximum amount of text an AI model can take into account in a single exchange, measured in tokens. It covers the question asked, the documents provided, and the answer generated. A large context window lets the model analyse whole contracts, reports, or conversation histories without splitting them up first.",
      },
    ],
  },
  {
    id: "technique",
    title: "Technical",
    terms: [
      {
        term: "RAG",
        definition:
          "RAG (Retrieval-Augmented Generation) is an architecture that connects a language model to a company's internal data. Before answering, the system retrieves the relevant passages from reference documents, then generates an answer grounded in those sources. It's the standard way to get reliable answers about business knowledge without retraining the model.",
      },
      {
        term: "Fine-tuning",
        definition:
          "Fine-tuning means partially retraining an existing AI model on specific data to specialise its behaviour: writing tone, output format, domain vocabulary. Heavier and costlier than RAG or prompt engineering, it's justified when a company needs very consistent behaviour across a large volume of identical tasks.",
      },
      {
        term: "Intelligent process automation (IPA)",
        definition:
          "Intelligent process automation (IPA) combines the classic automation of repetitive tasks with AI's ability to understand content. Where a script follows fixed rules, IPA also handles ambiguous cases: reading an email, extracting data from an invoice, routing a request. It's the main lever behind AI productivity gains in business.",
      },
      {
        term: "Workflow",
        definition:
          "A workflow is the structured sequence of steps in a business process: a trigger, processing, approvals, a result. Mapping your workflows is the prerequisite for any automation — you can only automate what's made explicit. In tools like n8n, the word also means the automation itself: the sequence of actions the system runs.",
      },
      {
        term: "n8n",
        definition:
          "n8n is a workflow-automation platform that connects a company's tools — CRM, email, databases, AI models — without heavy development. Each workflow is built visually, node by node. Its flexibility and native integration of language models make it a standard for shipping AI automations to production.",
      },
      {
        term: "API",
        definition:
          "An API (application programming interface) is the standardised way two pieces of software talk to each other. It's via API that an internal tool queries a model like Claude or GPT, that a CRM connects to an email system, that an automation reads and writes data. Without APIs, there's no way to integrate AI into existing systems.",
      },
      {
        term: "Chatbot",
        definition:
          "A chatbot is a program that converses with users in natural language, by text or voice. Modern chatbots, built on large language models, understand free-form phrasing and draw on a company's data to answer. In production, a well-designed chatbot absorbs a large share of a support or customer-service team's recurring requests.",
      },
      {
        term: "Business copilot",
        definition:
          "A business copilot is an AI assistant embedded in the tools of a specific role: sales writing in the CRM, summaries in the inbox, analysis in the spreadsheet. Unlike a general-purpose chatbot, it knows the user's context and acts inside their environment. The human keeps the decision; the copilot speeds up the execution.",
      },
      {
        term: "MCP (Model Context Protocol)",
        definition:
          "The Model Context Protocol (MCP) is an open standard that standardises how an AI model connects to external resources: databases, business tools, files. A connector built once with MCP works with every compatible model, like a universal plug. The standard sharply simplifies integrating AI into a company's information system.",
      },
    ],
  },
  {
    id: "entreprise",
    title: "Business",
    terms: [
      {
        term: "AI audit",
        definition:
          "An AI audit is the structured analysis of a company's processes to find where AI delivers a measurable gain. It combines workflow mapping, team interviews, an AI-maturity assessment, and prioritisation of opportunities by return on investment. Its deliverable is a costed roadmap of prioritised use cases — not a list of technologies.",
      },
      {
        term: "AI maturity",
        definition:
          "AI maturity measures how deeply AI is actually embedded in an organisation: tools deployed, team skills, data quality, governance, adapted processes. It's assessed on a multi-axis grid and is the starting point of any transformation — you don't build the same roadmap for a team just discovering ChatGPT and one that's already equipped.",
      },
      {
        term: "AI use case",
        definition:
          "An AI use case is the concrete application of AI to an identified business process: qualifying leads, generating meeting notes, handling first-line support requests. A good use case meets three criteria: an existing, frequent process; a measurable gain; and a realistic path to production with the data available.",
      },
      {
        term: "ROI of an AI project",
        definition:
          "The ROI of an AI project weighs the gains achieved (hours recovered, shorter turnaround, errors avoided, added revenue) against the project's total cost: tools, integration, training, maintenance. It's measured with a baseline set before deployment, then tracked after. Without a before/after measure, an AI project has no demonstrable ROI.",
      },
      {
        term: "AI Champion",
        definition:
          "An AI Champion is an employee trained to be their team's AI reference point: they master the deployed tools, train colleagues, surface new use cases, and keep the systems running over time. Training AI Champions is the key mechanism of a lasting transformation — it's what makes a company independent of its vendors.",
      },
      {
        term: "AI acculturation",
        definition:
          "AI acculturation is the process by which a company's teams gain a practical understanding of AI: what it can do, its limits, how to use it in their role. It happens through training and practice on real cases, not theoretical presentations. It's the prerequisite for adoption — a tool teams don't understand stays unused.",
      },
      {
        term: "AI-First transformation",
        definition:
          "An AI-First transformation means rethinking a company's processes with AI as a default component, not an occasional add-on. Every workflow is re-examined: what AI can absorb, what stays human, how the two fit together. It combines three inseparable tracks — the systems deployed, the teams' skills, and governance.",
      },
    ],
  },
  {
    id: "reglementation-visibilite",
    title: "Regulation & visibility",
    terms: [
      {
        term: "AI governance",
        definition:
          "AI governance is the set of rules a company gives itself to frame how AI is used: which tools are allowed, what data may pass through them, who signs off on sensitive uses, how outputs are checked. It protects the company legally and prevents \"shadow AI\" — the uncontrolled use of AI tools by teams.",
      },
      {
        term: "AI Act",
        definition:
          "The AI Act is the European Union's regulation on artificial intelligence, in force since 2024 with a phased rollout. It classifies AI systems by risk level (unacceptable, high, limited, minimal) and imposes proportionate obligations: transparency, documentation, human oversight. Any European company deploying AI is concerned — at minimum by the transparency and staff-training obligations.",
      },
      {
        term: "GDPR and AI",
        definition:
          "The GDPR applies fully to AI use: as soon as an AI tool processes personal data (customers, employees, candidates), the company must ensure a legal basis, data minimisation, and information of the people concerned. In practice that means checking where the data sent to models is hosted, how long it's kept, and whether it's used for training.",
      },
      {
        term: "GEO (Generative Engine Optimization)",
        definition:
          "Generative Engine Optimization (GEO) is the practice of optimising a brand's visibility inside the answers of generative engines: ChatGPT, Perplexity, Gemini, Google's AI Overviews. Where SEO targets ranking among links, GEO targets being cited in the answer. It rests on factual, structured, citable content present in the sources the models consult.",
      },
      {
        term: "AI Overviews",
        definition:
          "AI Overviews are the AI-generated answers Google shows at the top of its search results, above the classic links. They synthesise several sources into one direct answer, which reduces clicks through to websites. The stakes shift: it's no longer only about ranking, but about being cited as a source in the answer itself.",
      },
      {
        term: "Citability",
        definition:
          "Citability is a piece of content's ability to be picked up as a source by an AI engine. A citable passage fully answers a question in a few self-contained sentences, contains precise facts (figures, dates, definitions), and comes from an identifiable source. It's the core criterion of GEO: generative engines cite the content that hands them ready-to-use answers.",
      },
    ],
  },
];

/**
 * Habillage anglais.
 *
 * `htmlLang` alimente `inLanguage` du JSON-LD DefinedTermSet, qui était écrit
 * en dur à « fr-FR » : sans ça, le glossaire anglais se déclarait français
 * auprès des moteurs (TICKET-JSONLD-INLANGUAGE).
 *
 * Le second lien du paragraphe de fin vise `/metiers/ingenieur-ia`, une fiche
 * métier qui n'a pas de version anglaise et n'est pas au programme : il passe
 * par `resolveEnHref` et retombe donc sur le français, comme le veut le
 * résolveur pour un lien EN PLEIN TEXTE.
 */
export const glossaryChromeEn = {
  breadcrumbHome: "Home",
  breadcrumbCurrent: "AI glossary",
  badge: "Glossary",
  h1: "AI glossary: the terms that matter in business",
  intro:
    "30 clear definitions, without the needless jargon. Enough to follow what your vendor, your IT department or your executive committee is saying — and to decide with your eyes open.",
  tocAria: "Glossary contents",
  htmlLang: "en-US",
  schemaName: "AI glossary: the terms that matter in business",
  schemaDescription:
    "30 definitions of the essential terms of artificial intelligence in business, written by AI Makers.",
  missingLead: "Missing a term? Write to us through the ",
  missingLink: { label: "contact page", href: "/en/contact" },
  missingTail: ": the glossary is updated regularly.",
  dedicatedLead: "Two entries have their own page: ",
  dedicatedFde: {
    label: "the full definition of the Forward Deployed Engineer",
    href: "/en/forward-deployed-engineer",
  },
  dedicatedMiddle: " and ",
  dedicatedRole: {
    label: "the AI engineer role profile",
    href: "/metiers/ingenieur-ia",
  },
  dedicatedEnd: ".",
  offerSubtitle:
    "The 30 definitions tell you where you stand. The playbook tells you what to do with them: the three-phase method and the systems we deploy at our clients.",
  ctaTitle: "Definitions are good. Systems in production are better.",
  ctaSubtitle:
    "30 minutes to review your workflows and identify your first 3 AI quick wins. Free, no commitment.",
  ctaLabel: "Book my free diagnostic",
} as const;

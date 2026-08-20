# Glossaire IA (/glossaire-ia) — EN Content Master

## 1. Page header
- **Route (FR, live):** /glossaire-ia
- **Proposed EN slug:** /ai-glossary
- **Purpose:** 30 jargon-free definitions in 4 categories. GEO/definitional asset.
- **SEO role:** GEO / definitional long-tail — each definition is built to be lifted verbatim by AI answer engines and featured snippets.
- **Funnel stage:** TOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | ai glossary | 400 (US) / 150 (GB) | 59 (US) / 56 (GB) | Ahrefs keywords-explorer-overview, 2026-07 |
| Secondary | ai terms | 700 (US) / 90 (GB) | 55 (US) / 46 (GB) | Ahrefs, 2026-07 |
| Per-term target | generative engine optimization | 7,900 (US) / 1,500 (GB) | 48 (US) / 69 (GB) | Ahrefs, 2026-07 |
| Per-term target | what is rag | 4,600 (US) / 800 (GB) | 69 (US) / 73 (GB) | Ahrefs, 2026-07 (TP 26,000) |
| Per-term target | what is an ai agent | 15,000 (US) / 2,200 (GB) | 82 (US) / 79 (GB) | Ahrefs, 2026-07 |

> **Keyword decision — a glossary is a portfolio, not a single head term.** "ai glossary" (400 US, KD59) is the anchor for the page as a whole, but the real prize is the tail: each definition competes for its own "what is X" query, where an answer-first paragraph can win a featured snippet or an AI citation even at high KD. The highest-value winnable term in the set is **"generative engine optimization" (7,900 US, KD48)** — squarely our niche and lower difficulty than the giants. "what is rag" (4,600, TP 26,000), "what is a llm" (3,400), and "what is an ai agent" (15,000) are high-KD but high-citation; we play for the AI-answer citation, not necessarily blue-link #1. Every definition's first sentence is therefore self-contained and copy-pasteable. GB volumes ~4-8× smaller (US-led, GB secondary).

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Glossaire IA : les termes qui comptent en entreprise | AI Glossary: 30 Terms That Matter in Business *(45; renders 57 with `\| AI Makers` template suffix — brand not hand-written)* |
| Meta description (140–160 chars) | 30 définitions claires des termes de l'intelligence artificielle… | 30 clear, jargon-free definitions of the AI terms that matter in business: LLM, AI agent, RAG, AI audit, GEO, AI Act, prompt engineering. Written by AI Makers. *(157)* |
| H1 | Glossaire IA : les termes qui comptent en entreprise | AI glossary: the terms that matter in business |
| URL slug | /glossaire-ia | /ai-glossary |

> Note: the page's JSON-LD is `DefinedTermSet` with `inLanguage: "fr-FR"` — switch to `en` for the EN build (Agent 4 / dev).

## 4. Sections & content
Copy: inline `src/app/glossaire-ia/page.tsx` (345 lines) — 30 terms across 4 categories (count verified: 8 + 9 + 7 + 6 = 30).

### 4.1 — Hero
- **Component:** `page.tsx`
- **Fields:** badge, H1, intro, anchored table of contents
- **Current (FR):** Glossary promise (sans jargon).
- **Proposed (EN):**
  - **badge:** `Glossary`
  - **H1:** `AI glossary: the terms that matter in business`
  - **intro:** `30 clear definitions, no needless jargon. Enough to understand what your vendor, your IT lead, or your board is actually talking about — and to decide with your eyes open.`
  - **ToC labels:** `Fundamentals` · `Technical` · `Business` · `Regulation & visibility`
- **Rationale:** Intro states the payload (30 definitions) and the reader benefit in the first line. "Decide with your eyes open" keeps the FR's point of view.

### 4.2 — Fundamentals (categories[0], 8 terms)
- **Component:** `page.tsx` categories[0]
- **Proposed (EN):**
  - **category title:** `Fundamentals`
  - **Generative AI:** `Generative AI refers to systems that can produce new content — text, images, code, audio — from a natural-language instruction. Unlike predictive AI, which classifies or forecasts, generative AI creates. It's the technology behind ChatGPT, Claude, and Gemini, and the foundation of most business AI use cases since 2023.`
  - **LLM (large language model):** `A large language model (LLM) is an AI model trained on vast volumes of text to understand and generate natural language. It works by predicting the most likely continuation of a text, which lets it write, summarise, translate, analyse, and code. GPT, Claude, and Gemini are LLMs — the basic building block of generative-AI applications.`
  - **AI agent:** `An AI agent is a system that uses a language model to complete a task end to end, on its own. Unlike a chatbot that only answers, an agent plans, uses tools (search, databases, APIs), takes actions, and checks its own results. In a company, an AI agent can handle customer requests, qualify leads, or produce reports without human intervention.`
  - **Prompt:** `A prompt is the instruction you send an AI model to get a response. It can contain a task, context, examples, and an expected output format. The quality of the prompt directly drives the quality of the result: the same model can produce mediocre or excellent output depending on how precise the instruction is.`
  - **Prompt engineering:** `Prompt engineering is the discipline of designing and optimising the instructions given to AI models to get reliable, repeatable results. It draws on specific techniques: a role assigned to the model, worked examples, step-by-step decomposition, format constraints. In a company, standardised and tested prompts turn individual AI use into a repeatable process.`
  - **Hallucination:** `A hallucination is a false answer stated with confidence by an AI model — an invented fact, a source that doesn't exist, a wrong figure. It happens because the model predicts plausible text without checking whether it's true. In business you limit it by connecting the model to verified sources (RAG), requiring citations, and keeping a human check on critical content.`
  - **Token:** `A token is the elementary unit of text a language model processes: a short word, a fragment of a word, or a punctuation mark. In English, a token is roughly three-quarters of a word. Tokens determine two concrete things: the cost of using a model, billed by token volume, and how much text it can handle at once.`
  - **Context window:** `The context window is the maximum amount of text an AI model can take into account in a single exchange, measured in tokens. It covers the question asked, the documents provided, and the answer generated. A large context window lets the model analyse whole contracts, reports, or conversation histories without splitting them up first.`
- **Rationale:** Each first sentence is a standalone definition. Kept the FR's precise contrasts (generative vs predictive; agent vs chatbot) because they're what makes the entries citable.

### 4.3 — Technical (categories[1], 9 terms)
- **Component:** `page.tsx` categories[1]
- **Proposed (EN):**
  - **category title:** `Technical`
  - **RAG:** `RAG (Retrieval-Augmented Generation) is an architecture that connects a language model to a company's internal data. Before answering, the system retrieves the relevant passages from reference documents, then generates an answer grounded in those sources. It's the standard way to get reliable answers about business knowledge without retraining the model.`
  - **Fine-tuning:** `Fine-tuning means partially retraining an existing AI model on specific data to specialise its behaviour: writing tone, output format, domain vocabulary. Heavier and costlier than RAG or prompt engineering, it's justified when a company needs very consistent behaviour across a large volume of identical tasks.`
  - **Intelligent process automation (IPA):** `Intelligent process automation (IPA) combines the classic automation of repetitive tasks with AI's ability to understand content. Where a script follows fixed rules, IPA also handles ambiguous cases: reading an email, extracting data from an invoice, routing a request. It's the main lever behind AI productivity gains in business.`
  - **Workflow:** `A workflow is the structured sequence of steps in a business process: a trigger, processing, approvals, a result. Mapping your workflows is the prerequisite for any automation — you can only automate what's made explicit. In tools like n8n, the word also means the automation itself: the sequence of actions the system runs.`
  - **n8n:** `n8n is a workflow-automation platform that connects a company's tools — CRM, email, databases, AI models — without heavy development. Each workflow is built visually, node by node. Its flexibility and native integration of language models make it a standard for shipping AI automations to production.`
  - **API:** `An API (application programming interface) is the standardised way two pieces of software talk to each other. It's via API that an internal tool queries a model like Claude or GPT, that a CRM connects to an email system, that an automation reads and writes data. Without APIs, there's no way to integrate AI into existing systems.`
  - **Chatbot:** `A chatbot is a program that converses with users in natural language, by text or voice. Modern chatbots, built on large language models, understand free-form phrasing and draw on a company's data to answer. In production, a well-designed chatbot absorbs a large share of a support or customer-service team's recurring requests.`
  - **Business copilot:** `A business copilot is an AI assistant embedded in the tools of a specific role: sales writing in the CRM, summaries in the inbox, analysis in the spreadsheet. Unlike a general-purpose chatbot, it knows the user's context and acts inside their environment. The human keeps the decision; the copilot speeds up the execution.`
  - **MCP (Model Context Protocol):** `The Model Context Protocol (MCP) is an open standard that standardises how an AI model connects to external resources: databases, business tools, files. A connector built once with MCP works with every compatible model, like a universal plug. The standard sharply simplifies integrating AI into a company's information system.`
- **Rationale:** Stack names (n8n, Claude, MCP) kept as-is. "what is rag" and "what is fine tuning" are direct per-term targets; definitions lead with the expansion + one-line function.

### 4.4 — Business (categories[2], 7 terms)
- **Component:** `page.tsx` categories[2]
- **Proposed (EN):**
  - **category title:** `Business`
  - **AI audit:** `An AI audit is the structured analysis of a company's processes to find where AI delivers a measurable gain. It combines workflow mapping, team interviews, an AI-maturity assessment, and prioritisation of opportunities by return on investment. Its deliverable is a costed roadmap of prioritised use cases — not a list of technologies.`
  - **AI maturity:** `AI maturity measures how deeply AI is actually embedded in an organisation: tools deployed, team skills, data quality, governance, adapted processes. It's assessed on a multi-axis grid and is the starting point of any transformation — you don't build the same roadmap for a team just discovering ChatGPT and one that's already equipped.`
  - **AI use case:** `An AI use case is the concrete application of AI to an identified business process: qualifying leads, generating meeting notes, handling first-line support requests. A good use case meets three criteria: an existing, frequent process; a measurable gain; and a realistic path to production with the data available.`
  - **ROI of an AI project:** `The ROI of an AI project weighs the gains achieved (hours recovered, shorter turnaround, errors avoided, added revenue) against the project's total cost: tools, integration, training, maintenance. It's measured with a baseline set before deployment, then tracked after. Without a before/after measure, an AI project has no demonstrable ROI.`
  - **AI Champion:** `An AI Champion is an employee trained to be their team's AI reference point: they master the deployed tools, train colleagues, surface new use cases, and keep the systems running over time. Training AI Champions is the key mechanism of a lasting transformation — it's what makes a company independent of its vendors.`
  - **AI acculturation:** `AI acculturation is the process by which a company's teams gain a practical understanding of AI: what it can do, its limits, how to use it in their role. It happens through training and practice on real cases, not theoretical presentations. It's the prerequisite for adoption — a tool teams don't understand stays unused.`
  - **AI-First transformation:** `An AI-First transformation means rethinking a company's processes with AI as a default component, not an occasional add-on. Every workflow is re-examined: what AI can absorb, what stays human, how the two fit together. It combines three inseparable tracks — the systems deployed, the teams' skills, and governance.`
- **Rationale:** These carry the commercial cluster (AI audit, AI Champion, use case, ROI) and link to /ai-readiness-assessment and /audit-ia-entreprise. "AI audit" first sentence doubles as a mini answer for "what is an AI audit".

### 4.5 — Regulation & visibility (categories[3], 6 terms)
- **Component:** `page.tsx` categories[3]
- **Proposed (EN):**
  - **category title:** `Regulation & visibility`
  - **AI governance:** `AI governance is the set of rules a company gives itself to frame how AI is used: which tools are allowed, what data may pass through them, who signs off on sensitive uses, how outputs are checked. It protects the company legally and prevents "shadow AI" — the uncontrolled use of AI tools by teams.`
  - **AI Act:** `The AI Act is the European Union's regulation on artificial intelligence, in force since 2024 with a phased rollout. It classifies AI systems by risk level (unacceptable, high, limited, minimal) and imposes proportionate obligations: transparency, documentation, human oversight. Any European company deploying AI is concerned — at minimum by the transparency and staff-training obligations.`
  - **GDPR and AI:** `The GDPR applies fully to AI use: as soon as an AI tool processes personal data (customers, employees, candidates), the company must ensure a legal basis, data minimisation, and information of the people concerned. In practice that means checking where the data sent to models is hosted, how long it's kept, and whether it's used for training.`
  - **GEO (Generative Engine Optimization):** `Generative Engine Optimization (GEO) is the practice of optimising a brand's visibility inside the answers of generative engines: ChatGPT, Perplexity, Gemini, Google's AI Overviews. Where SEO targets ranking among links, GEO targets being cited in the answer. It rests on factual, structured, citable content present in the sources the models consult.`
  - **AI Overviews:** `AI Overviews are the AI-generated answers Google shows at the top of its search results, above the classic links. They synthesise several sources into one direct answer, which reduces clicks through to websites. The stakes shift: it's no longer only about ranking, but about being cited as a source in the answer itself.`
  - **Citability:** `Citability is a piece of content's ability to be picked up as a source by an AI engine. A citable passage fully answers a question in a few self-contained sentences, contains precise facts (figures, dates, definitions), and comes from an identifiable source. It's the core criterion of GEO: generative engines cite the content that hands them ready-to-use answers.`
- **Rationale:** GEO is the page's single highest-value winnable term (7,900 US, KD48); its definition is written to be the snippet. AI Act and GDPR entries link to /gouvernance-ia. "Citability" entry is meta — it also tells AI engines exactly why to cite this glossary.

### 4.6 — Closing note + CTA
- **Component:** inline note + `cta-section.tsx`
- **Fields:** "missing a term?" note, CTA title/subtitle
- **Current (FR):** « Les définitions, c'est bien. Les systèmes en production, c'est mieux. »
- **Proposed (EN):**
  - **closing note:** `Missing a term? Write to us via the contact page — the glossary is updated regularly.`
  - **CTA title:** `Definitions are good. Systems in production are better.`
  - **CTA subtitle:** `30 minutes to review your workflows and pin down your first 3 AI quick wins. Free, no commitment.`
  - **CTA button:** `Book my free diagnostic` → /contact
- **Rationale:** The CTA line is a kept opinion, not a reassurance closer — it earns its place.

## 5. FAQ
No FAQ slot in template.

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| Get cited by ChatGPT and Perplexity (GEO) | /seo-geo | GEO term link (existing) |
| AI Act & governance in practice | /gouvernance-ia | AI Act / GDPR term link (existing) |
| Start with an AI audit | /audit-ia-entreprise | "AI audit" term link (new) |
| Book my free diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Réserver mon diagnostic gratuit » → /contact. Proposed EN: **`Book my free diagnostic`** (title: `Definitions are good. Systems in production are better.`)

## 8. GEO block
- **Answer-first paragraph (EN, cite-able):** `AI Makers' AI glossary defines the 30 terms that matter most in business AI, grouped into fundamentals (LLM, AI agent, prompt, token), technical (RAG, fine-tuning, MCP, n8n), business (AI audit, AI maturity, AI Champion, ROI), and regulation & visibility (AI Act, GDPR, GEO, AI Overviews). Each definition is written to be self-contained and citable: for example, an AI agent is a system that uses a language model to complete a task end to end on its own — planning, using tools, and checking its results — where a chatbot only answers.`
- **llms.txt entry (EN):** `[AI Glossary](https://aimakers.fr/glossaire-ia) : 30 clear definitions of business AI terms — LLM, AI agent, RAG, GEO, AI Act, AI audit — written by AI Makers.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| 30 definitions (8 + 9 + 7 + 6) | page.tsx — count verified |
| Term definitions (LLM, RAG, agent, GEO, AI Act, fine-tuning, MCP…) | page.tsx copy — factual accuracy checked against standard AI definitions |
| AI Act in force 2024, phased, 4 risk levels | page copy + EU AI Act (widely documented) |
| Law reference: GDPR applies to AI processing personal data | page copy (standard) |

## Reconciliation applied
Applied from `seo-audit-report/glossaire-ia.md` (88/100) + `ai-slop-audit-report/glossaire-ia.md` (Net +1, ship).

- **Double brand suffix (SEO §2a):** stripped the hand-written `| AI Makers` from the proposed Title field; copy is now `AI Glossary: 30 Terms That Matter in Business` (45 chars; renders ~57 with the template suffix).
- **KEPT (protected):** all 30 answer-first definitions and the uniform 3-sentence structure (necessary definitional formula, exempt from de-templating per both audits); the POV CTA closer "Definitions are good. Systems in production are better."; the meta "AI Act in force since 2024 with a phased rollout" (both audits confirm accurate — qualifier already tight). Meta description (157) is within budget — no trim.
- **No slop edits:** Net +1, definitions are legitimately structured; no negation stacking, no template slop to remove.
- **Left for dev / owner (not copy):** JSON-LD `inLanguage: "fr-FR" → "en"` (TICKET-JSONLD-INLANGUAGE); the §4.4 rationale reference to `/ai-readiness-assessment` is the proposed EN slug for the audit page (TICKET-EN-ROUTES) — left as a proposal, and the shipping §6 link table already uses `/audit-ia-entreprise`.

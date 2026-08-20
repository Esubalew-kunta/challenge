# AI Operating System (/ai-operating-system) — EN Content Master

## 1. Page header
- **Route (FR, live):** /ai-operating-system
- **Proposed EN slug:** /ai-operating-system
- **Purpose:** Concept/offer page: the 4-layer AI OS that runs the company; differentiates from tool-buying.
- **SEO role:** pillar-support (EN: ai operating system — brand-coined concept, high strategic fit)
- **Funnel stage:** MOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | ai operating system | 250 (US) / 150 (GB) | 38 (US) | Ahrefs keywords-explorer-overview, 2026-07 (global 1,700) |
| Secondary | ai agents for business | 1,200 (US) | 52 (US) | Ahrefs, 2026-07 |
| Secondary | ai for business operations | 400 (US) | 35 (US) | Ahrefs, 2026-07 |
| Secondary | enterprise ai | 8,900 (US) / — | 58 (US) | Ahrefs, 2026-07 (aspirational, informational) |

> **Keyword decision:** "ai operating system" is a brand-coined concept, and the brief warned direct volume would be low — but Ahrefs shows it's a **real term: US 250 / KD38, global 1,700**, informational intent, parent topic = itself. That's more than expected and worth owning outright as primary (little competition on the exact phrase). Because direct volume is thin, the page also serves the concept's neighbours: **ai agents for business** (US 1,200, KD52 — the fleet section), **ai for business operations** (US 400, KD35 — the "runs the company" thesis), and the big informational term **enterprise ai** (US 8,900, KD58) as an aspirational ceiling. We deliberately did NOT force a bad head term (e.g. "agentic ai" at 101k/KD76 is off-intent and unrankable here).

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | AI Operating System \| AI Makers | AI Operating System: Run Your Company on AI *(43; renders "… \| AI Makers" = 55 — template auto-appends brand)* |
| Meta description (140–160 chars) | (from ai-os.ts) | Not a pile of tools — an AI operating system for your company. Four layers: data, systems, agents, control. Live in the first month, autonomous at 6. *(152)* |
| H1 | Votre entreprise, pilotée par un système d'exploitation IA. | Your company, run by an AI operating system |
| URL slug | /ai-operating-system | /ai-operating-system |

## 4. Sections & content
Copy source: `src/lib/offer-pages/ai-os.ts` + `site-config.ts` (fleet, guarantees, Gepromed/Addictest testimonials). Page: `src/app/ai-operating-system/page.tsx`. JSON-LD: Breadcrumb + Service + FAQPage.

### 4.1 — Hero
- **Component:** `ai-os.ts:aiOsHero`
- **Fields:** badge (scarcity), title, subtitle, cta
- **Proposed (EN):**
  - **badge:** `At most 3 new clients a month`
  - **title (H1):** `Your company, run by an AI operating system`
  - **subtitle (answer-first):** `Not a pile of tools. An OS: your data, your processes and your agents in one place, working together. It's what runs AI Makers, and what we install at our clients.`
  - **cta:** `{ label: "Book a free diagnostic", href: "/contact" }`
- **Rationale:** Defines "AI operating system" in the first sentence by contrast (not tools — a system where data/processes/agents work together), the exact cite-able answer for the coined term. "It's what runs AI Makers" is the dogfooding proof up front.

### 4.2 — Problem
- **Component:** `ai-os.ts:aiOsProblem`
- **Fields:** badge, title, intro, pains[3]{number,title,description}
- **Proposed (EN):**
  - **badge:** `The problem`
  - **title:** `You have tools everywhere. No system.`
  - **intro:** `ChatGPT over here, Copilot over there, three automations asleep in a corner. Each tool works alone. Nothing flows.`
  - **pains[0]:** title `The licences pile up` · description `Every team bought its own tool. None talk to each other. You pay for ten subscriptions across ten silos, and the work still moves by copy-paste.`
  - **pains[1]:** title `Knowledge is scattered` · description `Your processes live in email, drives and people's heads. When someone leaves, their knowledge leaves with them. No AI can work on knowledge it can't find.`
  - **pains[2]:** title `No one is at the controls` · description `The data reports nowhere. Every decision starts with a hunt for numbers across five tools. You run on instinct a system you can't see.`
- **Rationale:** Names the concrete failure state (ten subscriptions, copy-paste, knowledge in heads) instead of a generic complaint. "You run on instinct a system you can't see" sets up the control layer.

### 4.3 — Thesis: the 4 layers
- **Component:** `ai-os.ts:aiOsThesis`
- **Fields:** badge, title, paragraphs[2], layersCaption, layers[4]{number,name,detail}
- **Proposed (EN):**
  - **badge:** `The thesis`
  - **title:** `An OS, not tools.`
  - **paragraphs[0]:** `An AI-native company doesn't kit itself out. It architects itself. The difference fits in one line: tools get added, an OS fits together.`
  - **paragraphs[1]:** `Four layers. Your data structured at the bottom. Your processes automated above it. Agents that execute. A control layer that surfaces everything. Pull one layer and the rest collapses. That's why isolated tools change nothing.`
  - **layersCaption:** `The four layers of an AI operating system. Each layer rests on the one below.`
  - **layers[4]** (top to bottom):
    1. number `04` · name `Control` · detail `Your KPIs surface on their own. You see what's running, what's stuck, what's paying off.`
    2. number `03` · name `Agents` · detail `They execute: they read, sort, draft, follow up and report back.`
    3. number `02` · name `Systems` · detail `Your processes automated, department by department, each with a KPI.`
    4. number `01` · name `Data` · detail `Your knowledge structured, out of email and people's heads, reachable by the agents.`
- **Rationale:** The 4-layer architecture is the page's defensible concept. "Tools get added, an OS fits together" and "pull one layer and the rest collapses" are the two cite-able lines. Layer names anglicised (Pilotage → Control).

### 4.4 — Fleet (agents in production)
- **Component:** `sections/homepage/fleet.tsx` · `homepageContent.fleet` + `aiOsFleet` header
- **Fields:** badge, title, subtitle + 12 systems from homepage fleet
- **Proposed (EN):**
  - **badge:** `In production`
  - **title:** `An agent for every floor. This is what an OS in production looks like.`
  - **subtitle:** `A sample of the systems running, here and at our clients, sorted by department.`
  - **systems:** REUSE — the fleet items are OWNED by the homepage (see homepage.md §4.8). This page renders the same `homepageContent.fleet` with the OS-framed header above. Do not fork the items.
- **Rationale:** Fleet is shared; this page owns only the section header (badge/title/subtitle). The OS framing ("what an OS in production looks like") reuses the homepage systems as living proof of the 4 layers.

### 4.5 — Client case: Gepromed
- **Component:** `ai-os.ts:aiOsCaseStudy` + testimonial (site-config)
- **Fields:** badge, title, context, company (Gepromed quote)
- **Proposed (EN):**
  - **badge:** `Client case`
  - **title:** `What it looks like at Gepromed`
  - **context:** `Gepromed, a European medical-device hub, runs on an AI Makers OS: go-to-market, internal processes, control.`
  - **quote (Nicole Neumann, Gepromed):** EN translation owned by homepage §4.7 item 10, `[to validate: client approval of EN translation]`.
- **Rationale:** Gepromed is a real client with an on-record quote naming "an operating system" — the ideal case for this page. Quote single-sourced from the homepage testimonials.

### 4.6 — Install (3 steps)
- **Component:** `ai-os.ts:aiOsInstall`
- **Fields:** badge, title, subtitle, steps[3]{number,phase,duration,title,detail}
- **Proposed (EN):**
  - **badge:** `The install`
  - **title:** `How we install your OS`
  - **subtitle:** `Three moves, tied to the three phases of the program. No big bang: the OS goes up layer by layer, department by department.`
  - **steps[0]:** number `01` · phase `Phase 1: AI Scan` · duration `1 to 2 weeks` · title `We map your processes` · detail `Interviews with your teams, a map of the workflows, a maturity score. You know where the OS starts for you: with the shortest-ROI use cases.`
  - **steps[1]:** number `02` · phase `Phase 2: AI Engine` · duration `3 to 6 months` · title `We build your systems and agents` · detail `A dedicated engineer builds, department by department. Every system ships to production with a KPI measured before and after.`
  - **steps[2]:** number `03` · phase `Phase 3: AI Champions` · duration `Ongoing, from month 3` · title `We train your teams to run the OS` · detail `Your teams take the wheel: they run, fix and extend the systems. The OS stays with you, with the people who know how to drive it.`
- **Rationale:** Ties the coined concept to the concrete, proven 3-phase method (owned by /ai-transformation). "No big bang, layer by layer" answers the "how disruptive is this?" worry.

### 4.7 — Dogfooding
- **Component:** `ai-os.ts:aiOsDogfooding`
- **Fields:** badge, title, text, stats[2]{value,label}
- **Proposed (EN):**
  - **badge:** `We run on it ourselves`
  - **title:** `It's our own OS.`
  - **text:** `AI Makers runs on the system we install for you: same layers, same agents, same dashboards. We simply duplicate the one we run on ourselves.`
  - **stats[0]:** value `+200` · label `AI systems deployed`
  - **stats[1]:** value `6 people` · label `the output of a team of 40`
- **Rationale:** First-hand proof again. +200 from llms.txt (canonical); 6-people/team-of-40 tagged `[to validate]`.

### 4.8 — Guarantees
- **Component:** `sections/homepage/guarantees.tsx`
- **Fields:** 4 guarantees + credibility
- **Proposed (EN):** REUSE — OWNED by the homepage (see homepage.md "OWNER COPY"). Renders the same `homepageContent.guarantees`. Do not fork.
- **Rationale:** Shared block, single source.

### 4.9 — FAQ
- **Component:** `shared/faq-accordion.tsx` + `aiOsFaq` — see §5.

### 4.10 — Related
- **Component:** `shared/related-content.tsx`
- **Fields:** 3 links
- **Proposed (EN):** `AI Transformation` → /ai-transformation · `Data & AI Platform` → /plateforme-data-ia · `Case studies` → /etudes-de-cas
- **Rationale:** Cross-sells the program (transformation) and the foundational data layer (platform).

### 4.11 — Final CTA
- **Component:** `shared/cta-section.tsx` + `aiOsFinalCta`
- **Fields:** title, subtitle, cta
- **Proposed (EN):**
  - **title:** `Your competitors buy tools. Install a system.`
  - **subtitle:** `30 minutes to map your processes and leave with your first 3 AI quick wins, whether you work with us or not.`
  - **cta:** `{ label: "Book a free diagnostic", href: "/contact" }`
- **Rationale:** "Buy tools / install a system" is the page's whole argument compressed into the close — an assertion, not a reassurance.

## 5. FAQ
FAQ slot: YES — `faq-accordion.tsx` + FAQPage JSON-LD. 4 items.

| # | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|
| 1 | Who owns the OS once it's installed? | You do, in full. The systems, the agents, the documented playbooks: all of it stays with you the day the engagement ends. Zero dependency — it's written into the contract. *(AI-OS ownership Q owned here; the program-level ownership Q is on /ai-transformation.)* |
| 2 | How long does it take to install? | The audit takes 1 to 2 weeks and sets the roadmap. The first systems ship to production from the first month, at 1 to 2 a month. At 6 months, your teams run the OS on their own. |
| 3 | Does it replace our current tools? | No. Your CRM, ERP, drives and inboxes stay in place: the OS connects to them and makes the work flow between them. |
| 4 | We already have automations. Do we start from scratch? | No. We audit them, keep what works, and fold it into the OS. What you've already built becomes a component of the system. |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| AI Transformation | /ai-transformation | related |
| Data & AI Platform | /plateforme-data-ia | related |
| Case studies | /etudes-de-cas | related |
| Book a free diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Réserver mon diagnostic gratuit » → /contact. Proposed EN: **`Book a free diagnostic`**

## 8. GEO block
- **Answer-first paragraph (EN, cite-able):** `An AI operating system is a company running on four connected layers — structured data, automated systems, AI agents, and a control layer — instead of a pile of disconnected tools. AI Makers installs one department by department: an audit maps the processes, a dedicated engineer builds the systems and agents in production, and the teams are trained to run it. AI Makers runs on the same OS it installs — 200+ systems deployed, full client ownership.`
- **llms.txt entry (EN):** `[AI Operating System](https://aimakers.fr/ai-operating-system) : the 4-layer AI OS — data, systems, agents, control — that runs a company, installed department by department. A fleet of agents, fully owned by the client.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| +200 systems deployed | public/llms.txt (canonical) |
| 6 people = output of a team of 40 | ai-os.ts — [to validate] |
| Gepromed case & quote (Nicole Neumann) | site-config.ts testimonials — client-measured |
| 4-layer architecture (data / systems / agents / control) | ai-os.ts (concept) |
| Audit 1–2 weeks; 1–2 systems/month; autonomy at 6 months; 3 clients/month cap; 4 written guarantees; full ownership | site-config / ai-os.ts (canonical + program) |

---

## Reconciliation applied

**Changed:**
1. **Title double-brand fix** — stripped `| AI Makers` (was ~70 doubled → renders 55).
2. **De-stacked the "OS, not tools" frame from 7 → 4** — kept the thesis (hero "Not a pile of tools. An OS:", §4.3 title "An OS, not tools.", §4.3 "tools get added, an OS fits together") and the signature close (CTA "buy tools. Install a system."), since the page's entire argument *is* that contrast. Flattened §4.7 ("We don't sell a method read somewhere" → "We simply duplicate the one we run on ourselves") and FAQ4 ("a component of the system, not a duplicate" → "…a component of the system").
3. **Removed the homepage-owned "We replace nothing, we plug in."** from FAQ3 (keep-one-owner: homepage owns the connections tagline) — the answer keeps the same information via "the OS connects to them and makes the work flow between them."

**Deliberately NOT changed:**
- **The 4-layer OS coinage** (Data / Systems / Agents / Control) and "You run on instinct a system you can't see." — protected idiosyncrasy/voice fingerprint.
- **Dogfooding** ("It's what runs AI Makers") and the Gepromed on-record quote naming "an operating system" — first-hand proof; 6-people/team-of-40 stays `[to validate]`.
- **CTA contrast kept** — it's the page's whole thesis compressed into the close, load-bearing, and only one of four remaining thesis-contrasts.
- **Engineering left for dev:** hard-coded FR RelatedContent descriptions (page.tsx L462–476). Fleet + guarantees stay single-sourced from homepage.

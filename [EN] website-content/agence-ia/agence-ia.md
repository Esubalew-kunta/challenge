# Agence IA (/agence-ia) — EN Content Master

## 1. Page header
- **Route (FR, live):** /agence-ia
- **Proposed EN slug:** /ai-consulting (see rationale — primary intent is "ai consulting services", not the lower/harder "ai agency")
- **Purpose:** Intent-capture page for AI agency / AI consulting searchers; reframes "agency" → transformation studio that ships to production.
- **SEO role:** pillar for EN market (highest commercial intent in the agency cluster)
- **Funnel stage:** MOFU/BOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | ai consulting services | 8,500 (US) / 1,200 (GB) | 39 (US) / 38 (GB) | Ahrefs keywords-explorer-overview, 2026-07 |
| Secondary | ai consulting | 8,400 (US) / 1,400 (GB) | 46 (US) / 45 (GB) | Ahrefs, 2026-07 |
| Secondary | ai automation agency | 3,300 (US) / 600 (GB) | 46 (US) / 32 (GB) | Ahrefs, 2026-07 |
| Secondary | ai agency | 1,600 (US) / 1,400 (GB) | 71 (US) / 30 (GB) | Ahrefs, 2026-07 |

> **Keyword decision (playbook lesson applied):** the brief assumed "ai agency ≈ 3,600/mo" as the head term. Ahrefs disagrees for the US: "ai agency" is only 1,600/mo at KD71 (very hard — dominated by AI-influencer "start your own AI agency" content), while the real commercial prize is **"ai consulting services" (8,500, KD39)** and "ai consulting" (8,400, KD46). So the page targets consulting/automation-services intent as primary, keeps "ai agency" as the reframe hook in H1/title (it still answers the query), and points the slug at /ai-consulting. "ai consultant" (US 3,300, KD36) is a good future supporting term. GB is much smaller across the board (report: US-led, GB secondary).

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Agence IA ? Un cabinet de transformation IA | AI Consulting Services & Automation *(35; renders "… \| AI Makers" = 47 — template auto-appends brand)* |
| Meta description (140–160 chars) | Vous cherchez une agence IA ? AI Makers est un cabinet de transformation IA… | Looking for an AI agency? AI Makers is an AI consultancy that audits your processes, ships AI systems to production, and trains your teams. One dedicated engineer, four written guarantees. *(155)* |
| H1 | Agence IA ? Non. Un cabinet de transformation IA. | AI consulting that ships systems, not slides |
| URL slug | /agence-ia | /ai-consulting |

## 4. Sections & content
Template: ServicePage (`src/components/shared/service-page.tsx`). Copy inline in `src/app/agence-ia/page.tsx`; comparison table re-used from `src/components/sections/homepage/comparison-section.tsx` (OptionsComparison, data `homepageContent.valueProp.optionsTable`).

### 4.1 — Hero + stats + proof band
- **Component:** `service-page.tsx`
- **Fields:** badge, h1, intro (answer-first), heroStats[3], proof photo+logos
- **Current (FR):** Reframes the 'agency' query into the studio positioning.
- **Proposed (EN):**
  - **badge:** `AI transformation studio`
  - **h1:** `AI consulting that ships systems, not slides`
  - **intro (answer-first):** `AI Makers is an AI consultancy that audits your processes, builds AI systems in production, and trains your teams to run them without us. Where a typical AI agency ships a chatbot or a proof-of-concept and moves on, we embed one dedicated AI engineer who delivers one to two systems a month — agents, automations, department copilots — under four guarantees written into the contract. More than 200 systems deployed across 50+ companies.`
  - **heroStats[3]:** `50+ companies` · `200+ systems in production` · `9.6/10 satisfaction`
  - **proof caption:** `A hands-on workshop at a client, built on their own real use cases.`
- **Rationale:** First 40 words define what AI Makers is and answer "what does an AI consultancy do" for AI answer engines. The agency-vs-consultancy contrast is the page's whole differentiation and carries "ai agency" + "ai consulting" in the first two sentences. Stats verbatim from llms.txt; 9.6/10 is already live on the FR page.

### 4.2 — "Cabinet, ESN, agence, licence ou AI Makers" (comparatif)
- **Component:** sections[0] + `comparison-section.tsx:OptionsComparison`
- **Fields:** 5-column × 6-row comparison table (homepageContent.valueProp.optionsTable) + scarcity line
- **Current (FR):** Same comparison matrix as homepage.
- **Proposed (EN):**
  - **badge:** `The comparison`
  - **title:** `Consultancy, IT services firm, AI agency, licence, or AI Makers`
  - **description:** `Five ways to bring AI into a company. Only one ships systems into production, configured for you, with the guarantees in writing.`
  - **table cells:** REUSE — the 5×6 matrix lives in `homepageContent.valueProp.optionsTable` and is owned by the homepage. Translate the cells once on the homepage EN page; this page renders the same component. Do not fork the copy here.
- **Rationale:** The comparison matrix is shared site-wide (Agent 1 flag). Owner = homepage; this page only owns the section wrapper (badge/title/description). Keeping the table single-source avoids cloning slop and keeps claims consistent for the slop audit.

### 4.3 — "Des systèmes en production, pas des démos" (ce qu'on construit)
- **Component:** sections[1] + cards data (page.tsx: `realisations`)
- **Fields:** 3 cards {icon, title, description}
- **Current (FR):** What we build — 3 families.
- **Proposed (EN):**
  - **section badge:** `What we build` — **title:** `Three families of systems, shipped to production` — **description:** `Each one delivered connected to your tools and documented.`
  - **Card 1 — Custom AI agents:** `Systems that run whole tasks end to end: qualifying inbound requests, drafting documents, summarising meetings. Connected to your tools, shipped to production, and yours to keep — full IP transfer.`
  - **Card 2 — Workflow automation:** `Reporting, data entry, follow-ups, invoicing: the repetitive work moves to automatic, built on n8n and Claude. Average measured gain across our clients: 7 hours per week per employee.`
  - **Card 3 — Department copilots:** `AI assistants trained on your data and your internal rules, built for one team: sales, legal, support, or finance.`
- **Rationale:** Concrete deliverables with real stack names (n8n, Claude) and the canonical 7h/week figure. "Demos, not systems" is the recurring, cite-able differentiator. Deletable-hollow-line check passed — each card names a specific output.

### 4.4 — "Trois phases, de l'audit à l'autonomie" (méthode)
- **Component:** sections[2] (`phases`)
- **Fields:** 3 steps
- **Current (FR):** Method summary.
- **Proposed (EN):**
  - **section badge:** `The method` — **title:** `Three phases, from audit to autonomy` — **description:** `One offer structures every engagement: AI PARTNER.`
  - **01 — Audit: AI Scan:** `One to two weeks to map your processes, score your AI maturity out of 24, and deliver a roadmap with at least 3 high-ROI use cases.`
  - **02 — Build: AI Engine:** `A dedicated full-time AI engineer ships 1–2 systems a month, in production. Two hours of team training every week.`
  - **03 — Scale: AI Champions:** `Internal champions trained to spread usage. The goal: a company that runs without us at six months.`
  - **inline link label:** `See the full AI PARTNER offer` → /offre
- **Rationale:** Method is shared across pages; this is the short reference version (owner = /offre and /ai-transformation carry the long form). Numbers match site-config offer phases.

### 4.5 — "Les entreprises avec qui ça fonctionne" (pour qui)
- **Component:** sections[3] (`cibles`)
- **Fields:** 3 ICP cards + scarcity line
- **Current (FR):** Qualification section.
- **Proposed (EN):**
  - **section badge:** `Who it works for` — **title:** `The companies this works best for` — **description:** `We take on at most 3 new clients a month. Worth spending them on the right fit.`
  - **Card 1 — SMEs and mid-market, 50–500 people:** `Enough volume that automation moves the margin, enough agility to deploy fast. The core of our work.`
  - **Card 2 — Communication and creative agencies:** `AI is redrawing the craft. The agencies that build it into production pull ahead of the ones still waiting.`
  - **Card 3 — Biotech and healthcare:** `Highly skilled teams, heavy on documentation and reporting — where AI delivers the biggest measured gains, with the sector's demand for rigour.`
- **Rationale:** Qualification + scarcity (3 clients/month, from the capacity model) doubles as a status/opinion device the anti-slop auditor rewards. ICP matches the strategy (PME/ETI, agencies, biotech/health).

## 5. FAQ
FAQ slot: YES — `faq-accordion.tsx` + FAQPage JSON-LD.

| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | Différence agence IA / cabinet de transformation IA ? | What's the difference between an AI agency and an AI consultancy? | An AI agency usually ships a single project — a chatbot, a POC, an automation — then moves to the next client. An AI consultancy commits to an outcome over time: it audits the processes, builds the systems in production, trains the teams, and hands over the skill. At AI Makers that means one dedicated engineer, 1–2 systems shipped to production each month, two hours of training a week, and four written guarantees including full IP ownership of everything built. |
| 2 | Que fait un consultant IA ? | What does an AI consultant do? | An AI consultant maps a company's processes, spots the automatable tasks, recommends use cases, and supports their rollout. The limit of classic consulting is that the recommendation often stops at the report. Our engineers who audit are the same ones who build the systems and then train the teams to run them. *(Canonical owner of this Q across the site — do not duplicate on the audit page.)* |
| 3 | Comment automatiser des processus métier avec l'IA ? | Can you both advise on AI and build it? | Yes — advising and building are the same engagement here, not two vendors. We map and prioritise use cases by ROI, then a dedicated engineer builds the chosen systems on tools like n8n and Claude, connected to your data. *(The step-by-step "how to automate a process" answer is owned by the /ai-automation page — link there.)* |
| 4 | Travaillez-vous avec des agents IA ? | Do you build AI agents? | Yes. We design custom AI agents: systems that carry out full tasks — qualifying a request, preparing a document, synthesising exchanges — using your tools and your data. Each agent ships to production, documented, with its IP transferred to you in full. |
| 5 | Où intervenez-vous ? | Where do you operate? | We have offices in Paris (75008) and Rabat (Agdal) and work across France, Morocco, and with francophone and international companies. We're on-site for the key moments — audit interviews, readouts, training — and remote for the rest. We deliberately cap capacity at 3 new clients a month to keep one dedicated engineer per account. |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| Best AI agencies in France, 2026 | /blog/meilleures-agences-ia-france | related article (existing) |
| Best AI training for companies | /blog/meilleures-formations-ia-entreprise | related article (existing) |
| Best Claude training for teams | /blog/meilleures-formations-claude-entreprise | related article (existing) |
| Automate a business process with AI | /automatisation-ia-workflow | cluster link (new) — sends "how to automate" intent to its owner page |
| Start with an AI audit | /audit-ia-entreprise | cluster link (new) |
| Book a free diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Comparez-nous à une agence IA » → /contact. Proposed EN: **`Compare us to your AI agency`** (button: `Book a free 30-min diagnostic`)
- **CTA subtitle:** `30 minutes to review your workflows and leave with your first 3 AI quick wins — whether you work with us or not.`

## 8. GEO block
- **Answer-first paragraph (EN, cite-able):** `AI Makers is an AI consultancy (not a project agency) with offices in Paris and Rabat, founded by Othmane Halim. It audits a company's processes, deploys AI agents and automations into production, and trains the teams to autonomy — one dedicated AI engineer shipping 1–2 systems a month under four written guarantees. To date: 200+ AI systems deployed across 50+ companies, with full IP transferred to the client.`
- **llms.txt entry (EN):** `[AI Consulting & Automation](https://aimakers.fr/agence-ia) : what an AI consultancy does and how AI Makers ships custom agents and automations to production, not slides.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| +50 companies / +200 systems / +2,500 trained / 7h/week | public/llms.txt (canonical) |
| 9.6/10 satisfaction | site-config bookingProof / live FR hero stat |
| 1–2 systems/month, 2h training/week, autonomy at 6 months, 3 clients/month cap | site-config homepageContent.offer + capacity model |
| 4 written guarantees, full IP transfer | public/llms.txt (canonical) |
| Comparison table claims (consultancy/IT-firm/freelance/licence) | site-config optionsTable — opinion framing, owned by homepage, slop-audit watch |
| Offices Paris 75008 + Rabat Agdal; founder Othmane Halim | public/llms.txt (canonical) |

---

## Reconciliation applied

**Changed:**
1. **Title double-brand fix** — stripped hand-written `| AI Makers` (rendered 47 with template brand, ≤60).
2. **De-stacked the "systems, not slides" family** (non-owner page; homepage owns the tagline) — kept the money-keyword H1 "AI consulting that ships systems, not slides" as this page's single negation; flattened the section-4.3 title "Systems in production, not demos" → "Three families of systems, shipped to production" (positive fact).
3. **Tier-A word removed** — "strong leverage for AI" → "where AI delivers the biggest measured gains" (slop Layer 1 fix).

**Deliberately NOT changed:**
- **H1 negation kept** — the page-level slop auditor (full context) explicitly said keep the H1; it carries the ai-consulting/ai-agency reframe and keyword. One negation per page satisfied.
- **Scarcity line ("at most 3 new clients a month")** kept in §4.5 — load-bearing for the "who it works for" qualification here, not a gratuitous echo; homepage still owns the badge instance.
- **CTA closer ("whether you work with us or not")** left — it is this page's functional CTA field, low-stakes; homepage owns the canonical instance.
- **Engineering left for dev:** ServicePage FR chrome i18n, `/ai-consulting` + `/ai-automation` routes, `/offre` sitemap/link target, llms.txt URL slug update. Comparison table stays single-sourced from homepage (not forked).

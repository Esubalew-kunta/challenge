# Plateforme Data & IA (/plateforme-data-ia) — EN Content Master

## 1. Page header
- **Route (FR, live):** /plateforme-data-ia
- **Proposed EN slug:** /enterprise-data-platform (exact-match to the chosen primary; clearer intent than a translit of "plateforme-data-ia")
- **Purpose:** Offer page: unify siloed systems (Bronze/Silver/Gold) + reporting agents.
- **SEO role:** supporting (EN: enterprise data platform / data engineering services)
- **Funnel stage:** MOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | enterprise data platform | 600 (US) / 350 (GB) | 2 (US) / 2 (GB) | Ahrefs keywords-explorer-overview, 2026-07 |
| Secondary | data engineering services | 2,300 (US) / 250 (GB) | 8 (US) / 0 (GB) | Ahrefs, 2026-07 |
| Secondary | medallion architecture | 5,100 (US) / 1,400 (GB) | 3 (US) / 22 (GB) | Ahrefs, 2026-07 |
| Support | ai data platform / data platform | 350 / 2,600 (US) | 29 / 9 (US) | Ahrefs, 2026-07 — broad support terms |

> **Keyword decision:** the brief's assumed heads were mostly dead ends for a service page. "data foundation for ai" is 30/mo (unusable); "rag" (44,000) and "retrieval augmented generation" (3,300) are KD78–83 and informational/dev-intent, not the buyer this page serves — mention RAG in body copy, don't target it. The honest primary is **"enterprise data platform" (600, KD2)** — exact match to what the page sells (a company-wide data platform), commercial intent, near-zero difficulty. **"data engineering services" (2,300, KD8)** carries the volume and provider intent; **"medallion architecture" (5,100, KD3)** is a rare gift — it's literally the Bronze/Silver/Gold architecture the page describes, very low KD, and a strong GEO/citable anchor. "ai data platform" (350, KD29) and "data platform" (2,600, KD9) are supporting. US-led, GB secondary.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Plateforme data & IA : vos données enfin exploitables | Enterprise Data Platform for AI *(31; renders "… \| AI Makers" = 43 — template auto-appends brand)* |
| Meta description (140–160 chars) | Une plateforme data d'entreprise unifie vos systèmes en silo (ERP, production, commercial) puis y branche des agents IA de reporting et de pilotage. Architecture Bronze, Silver, Gold… | We build an enterprise data platform that unifies your siloed systems (ERP, production, CRM) on a Bronze/Silver/Gold foundation, then wires AI reporting agents on top. You own all of it. *(159)* |
| H1 | Vos données valent de l'or. Encore faut-il les brancher. | Your data is worth a fortune. You just have to wire it up. |
| URL slug | /plateforme-data-ia | /enterprise-data-platform |


## 4. Sections & content
Template: `src/components/shared/service-page.tsx` (ServicePage). Copy inline in `src/app/plateforme-data-ia/page.tsx`; visual `src/components/sections/services/data-silos.tsx`. ServicePage auto-renders: hero (badge/h1/intro/CTA), heroStats[3], proof band (photo + client logos), sections[], FAQ + JSON-LD, related, CTA.

### 4.1 — Hero + stats + proof band
- **Component:** `service-page.tsx` (hero/proof)
- **Fields:** badge, h1, intro (answer-first), heroStats[3], proof photo+caption
- **Current (FR):** Answer-first intro defining an enterprise data platform.
- **Proposed (EN):**
  - **Badge:** Enterprise Data Platform
  - **H1:** Your data is worth a fortune. You just have to wire it up.
  - **Intro (answer-first, ~60 words):** An enterprise data platform unifies your siloed systems (ERP, production, CRM) on a single foundation built in three layers — Bronze, Silver, Gold — then wires AI reporting and steering agents on top. The result: one version of every number, reporting that runs itself, and decisions you anticipate instead of absorb. No IT department required, and you own all of it.
  - **heroStats[3]:** +50 companies supported · 200+ systems in production · 9.6/10 satisfaction
  - **Proof caption:** Standing up data steering with the business teams.
- **Rationale:** Answer-first intro defines "enterprise data platform" + "medallion architecture" (Bronze/Silver/Gold) in the first 60 words — the LLM-citable block. heroStats are canonical (llms.txt + booking proof). "No IT department required" and "you own all of it" are the two objections this buyer raises first.

### 4.2 — « Vos silos, branchés dans un seul socle »
- **Component:** sections[0] + `data-silos.tsx`
- **Fields:** badge, title, description, silos visual
- **Current (FR):** Silo problem → single foundation.
- **Proposed (EN):**
  - **Badge:** At a glance
  - **Title:** Your silos, wired into one foundation
  - **Description:** Your separate systems pour their data into a single foundation built in three layers — Bronze, Silver, Gold. Your agents read the Gold layer and steer in real time.
- **Rationale:** Names the medallion layers plainly for the secondary keyword and the visual. Kept short — the diagram carries the weight.

### 4.3 — « De vos silos à la donnée qui décide » (déroulé)
- **Component:** sections[1] + steps data (page.tsx)
- **Fields:** badge, title, description, 4 steps
- **Current (FR):** Medallion architecture explained step by step.
- **Proposed (EN):**
  - **Badge:** The path
  - **Title:** From your silos to data that decides
  - **Description:** Four steps, each with a usable deliverable. The platform produces value before it's finished.
  - **Steps[4]:**
    1. **Source mapping** — We inventory your systems: ERP, production, sales, Excel files. Who produces which data, where it sleeps, who needs it.
    2. **Ingestion & Bronze layer** — Raw data from every system converges automatically into one foundation, with quality tests. No more manual exports.
    3. **Silver & Gold layers** — Cleansing, unified reference data, business models: data becomes reliable, joinable and decision-ready.
    4. **AI agents & dashboards** — Reporting agents prioritised in workshops with your teams: daily tracking, consolidations, alerts. The data comes to you.
- **Rationale:** This is the medallion-architecture explainer — the section that earns the "medallion architecture" (5,100/KD3) capture and gives LLMs a clean step list to cite. "Value before it's finished" is the honest process claim.

### 4.4 — « Ce que ça donne en vrai »
- **Component:** sections[2]
- **Fields:** badge, title, field example copy
- **Current (FR):** Concrete client illustration (Moroccan agri-export leader, mission in progress).
- **Proposed (EN):**
  - **Badge:** On the ground
  - **Title:** What it looks like in practice
  - **Copy (kicker "Engagement in progress"):** A Moroccan leader in agri-export: 4,500 employees, 20 years of data, 3 systems that didn't talk to each other. Financial ERP, agricultural production software, packing-station system — no consolidated view, sales tracked in Google Sheets, decisions absorbed rather than anticipated. We're building its enterprise data platform and reporting agents: the Bronze layer and automated ingestion shipped ahead of schedule, and 15 business agents were prioritised in workshops with the farm teams themselves.
  - **Footnote:** Full case study in client validation.
- **Rationale:** Real in-progress engagement from page.tsx — kept factual, no invented outcome. 4,500 employees / 20 years / 3 systems / 15 agents are live copy → [to validate] (client not yet named/published).

### 4.5 — « Ce que vous avez en main » (livrables)
- **Component:** sections[3]
- **Fields:** badge, title, deliverables list
- **Current (FR):** Platform + docs + ownership.
- **Proposed (EN):**
  - **Badge:** The deliverables
  - **Title:** What you're left holding
  - **List[6]:**
    - A sovereign data platform, hosted wherever you decide.
    - Automated ingestion of your source systems, with quality tests.
    - Unified business reference data: no more three versions of the same number.
    - AI reporting agents prioritised by your teams, shipped in waves.
    - Steering dashboards wired to the cleansed data.
    - Full ownership: infrastructure, pipelines, agents, documentation.
- **Rationale:** Ownership + sovereignty are the trust anchors for this buyer. Straight adaptation of the source list.

### 4.6 — « Le socle de tous vos agents IA » (et après)
- **Component:** sections[4]
- **Fields:** badge, title, copy
- **Current (FR):** Platform as foundation for agents.
- **Proposed (EN):**
  - **Badge:** What comes next
  - **Title:** The foundation under every one of your AI agents
  - **Copy:** A data platform is the foundation that makes AI agents reliable. Once the data is unified, every new use case (reporting, forecasting, alerting, business copilots) gets built in weeks. That's why the platform sits inside our full engagement: an audit to prioritise, a dedicated engineer to build, weekly training to make your teams independent.
  - **Inline link:** See the complete engagement → /ai-transformation
- **Rationale:** Positions the platform as the enabler for the agent/AI-OS offers (internal-link equity) without cloning their copy.

## 5. FAQ
FAQ slot: YES — `src/components/shared/faq-accordion.tsx` + FAQPage JSON-LD.

| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | Faut-il une DSI pour construire une plateforme data ? | Do you need an IT department to build a data platform? | No. One IT contact on your side plus workshops with the business teams is enough: we carry the architecture, the build and the operation. We currently work with a 4,500-person group that has no IT department and doesn't want one. The platform is designed to be run by the business itself. |
| 2 | Nos données sont éparpillées et de mauvaise qualité, est-ce bloquant ? | Our data is scattered and low-quality — is that a blocker? | No — it's the starting point of nearly every engagement: systems that don't talk, manual Excel exports, inconsistent reference data. The Bronze layer ingests data as-is, then the Silver and Gold layers clean and harden it step by step, with automated quality tests. We don't ask you for clean data — we hand it back to you clean. |
| 3 | Quels outils utilisez-vous ? | What tools do you use? | Proven building blocks with no hidden licence cost: PostgreSQL for storage, Docker for infrastructure, Airflow to orchestrate the flows, Power BI or equivalent for dashboards, and AI agents (Claude, n8n) for automated reporting. It all plugs into your existing systems — ERP, production tools, CRM. Nothing is migrated, nothing is replaced. |
| 4 | Combien de temps avant une première couche exploitable ? | How long before a first usable layer? | On our most recent engagement of this kind, the ingestion and Bronze layers shipped in a few weeks, ahead of schedule. Reporting agents follow in waves, each validated by the business teams at its milestone. You don't pay for 18 months of data project before seeing a first result. |
| 5 | À qui appartient la plateforme ? | Who owns the platform? | You do, entirely: the infrastructure, the pipeline code, the agents, the documentation. Same full-ownership guarantee as on all our engagements. The day the collaboration ends, everything keeps running at your company. |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| The AI Operating System on top of your data | /ai-operating-system | related |
| The complete 3-phase engagement | /ai-transformation | related |
| Measured results at our clients | /etudes-de-cas | related |
| Book a free diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Vos systèmes ne se parlent pas ? » → « Réserver mon diagnostic gratuit » (/contact). Proposed EN:
  - **Title:** Your systems don't talk to each other?
  - **Subtitle:** 30 minutes to map your data sources and pin down the first high-ROI reporting agent to build.
  - **Label:** Book a free diagnostic

## 8. GEO block
- **Answer-first paragraph (EN, 2–3 sentences):** An enterprise data platform unifies a company's siloed systems (ERP, production, CRM) on a single foundation, structured with the medallion architecture in Bronze, Silver and Gold layers, then wires AI reporting and steering agents on top. AI Makers builds these platforms end to end — source mapping, automated ingestion, cleansing, reporting agents and dashboards — with no IT department required and full client ownership of infrastructure, pipelines, agents and documentation. It's the data foundation that makes downstream AI agents reliable.
- **llms.txt entry (EN):** [Enterprise Data Platform](https://aimakers.fr/plateforme-data-ia) : AI Makers unifies siloed systems (ERP, production, CRM) on a Bronze/Silver/Gold medallion foundation, then wires AI reporting agents on top — no IT department required, full client ownership.

## 9. Facts used
| Fact / figure | Source |
|---|---|
| heroStats: +50 companies, 200+ systems, 9.6/10 satisfaction | public/llms.txt (canonical) + bookingProof |
| Bronze/Silver/Gold medallion architecture | page.tsx copy |
| Tool stack: PostgreSQL, Docker, Airflow, Power BI, Claude, n8n | page.tsx FAQ copy |
| 4,500-person Moroccan agri-export group, 20 years of data, 3 systems, 15 agents, Bronze shipped ahead of schedule | page.tsx copy — [to validate] (in-progress, client unnamed) |
| Full ownership guarantee | site pattern (/garanties) — reference, not re-authored |

---

## Reconciliation applied

**Changed:**
1. **Title double-brand fix** — stripped `| AI Makers` (renders 43).
2. **De-stacked negations (~6 → ~4)** — flattened §4.6 "isn't an end in itself" → positive and "in weeks, not months" → "in weeks"; FAQ1 "run by the business, not by an IT service" → "run by the business itself."

**Deliberately NOT changed:**
- **FAQ3 "Nothing is migrated, nothing is replaced."** — kept: this is the page's deflating/non-disruption signature (slop synthesis §1 says KEEP 1), directly answering the buyer's biggest fear.
- **FAQ2 "We don't ask you for clean data — we hand it back to you clean."** — kept as the sharpest, page-specific negation (both audits flagged it as the one to keep).
- **§4.1 "decisions you anticipate instead of absorb"** — kept; "instead of" reads as positive framing, not the "not Y" tic.
- **The in-progress agri-export case** (4,500 employees / 20 years / 3 systems / 15 agents, Bronze ahead of schedule) — surplus-detail first-hand proof, kept fully `[to validate]` and unnamed with the "engagement in progress" kicker (sign-off gate, not a content edit).
- **Named stack** (PostgreSQL/Docker/Airflow/Power BI) — first-hand, untouched.
- **Engineering left for dev:** ServicePage FR chrome i18n, `/enterprise-data-platform` route + sitemap, and the slug disagreement with ai-operating-system's related link (both are proposals pending the URL decision).

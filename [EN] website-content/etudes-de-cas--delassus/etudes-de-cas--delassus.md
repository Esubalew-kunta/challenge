# Étude de cas : Delassus Group — EN Content Master

> **noindex — draft, not for live indexing.** Page is noindex & out of sitemap; results still being measured (inProgress) pending client validation. Do NOT publish or index EN before FR validation clears.

> Live status: **draft** · results still being measured (inProgress) — page is noindex & out of sitemap pending client validation. Do not publish EN before FR validation clears.

## 1. Page header
- **Route (FR, live):** /etudes-de-cas/delassus
- **Proposed EN slug:** /case-studies/delassus
- **Purpose:** Proof asset (DRAFT) — measured before/after for Delassus Group (agri-industry and export · Morocco). Anchor proof for the Data & AI platform.
- **SEO role:** trust/proof + long-tail (noindex while draft)
- **Funnel stage:** MOFU/BOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | delassus case study (branded) | — | — | branded/navigational (draft) |
| Secondary | data platform bronze silver gold | low | n/a | Ahrefs (light), 2026-07 — technical, niche |
| Secondary | ai data platform case study | low | n/a | Ahrefs (light), 2026-07 — near-zero volume |

> **Keyword decision:** DRAFT + noindex — no SEO target until cleared for indexing. When published, value is proof feeding the Data & AI platform money page. Branded intent primary; no head term forced.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | 20 ans de données agricoles, une plateforme data et des agents métier | 20 years of farm data, one platform, AI agents *(46; renders ~58 once the template appends " \| AI Makers". The earlier 51-char form rendered ~63, over 60; trimmed. Distinct from the fuller H1 — needs TICKET-CS-META-TITLE for the two to diverge; single-field template feeds this to H1 too until then. Noindex draft, not urgent.)* |
| Meta description (140–160 chars) | Plateforme data Bronze, Silver, Gold et agents IA métier pour un leader de l'export agricole marocain de 4 500 employés. Étude de cas complète. | A Bronze/Silver/Gold data platform and business AI agents for a 4,500-employee Moroccan agri-export leader with no IT department. Full case study. *(146)* |
| H1 | 20 ans de données agricoles, une plateforme data et des agents métier | 20 years of farm data, a data platform, and business AI agents |
| URL slug | /etudes-de-cas/delassus | /case-studies/delassus |

## 4. Sections & content
Shared template: `src/app/etudes-de-cas/[slug]/page.tsx` · copy lives in `src/lib/case-studies.ts` (entry `delassus`).

### 4.1 — Hero + TL;DR + metrics
- **Component:** `src/app/etudes-de-cas/[slug]/page.tsx`
- **Fields:** client, sector, period (April 2026 · ongoing), tags [Data Platform, AI Agents, Reporting], title (H1), tldr, metrics[] {value, label} × 3
- **Proposed (EN):**
  - **sector:** `Agri-industry and export · Morocco` — **period:** `April 2026 · ongoing`
  - **tags:** `Data Platform` · `AI Agents` · `Reporting`
  - **TL;DR:** `A Moroccan leader in fruit and vegetable production and export (4,500 employees, 80,000 tonnes exported a year) had accumulated more than 20 years of data across three systems that don't talk to each other: ERP, farm production, and packing station. AI Makers is building its enterprise data platform and business AI agents for reporting and steering. The catch: the group has no IT department, and doesn't want one.`
  - **metrics:** `4,500` — `employees, 80,000 tonnes exported a year` · `3` — `siloed systems now connected` · `15` — `business agents prioritised with field teams`
- **Rationale:** Faithful EN. **DRAFT + inProgress: metrics describe scope and baseline, not a claimed outcome. Figures verbatim from `case-studies.ts`; [to validate] until measurement completes and client sign-off clears.**

### 4.2 — « La situation de départ » → "Where they started"
- **Component:** same template + `case-studies.ts:before[]`
- **Fields:** before[] — 4 bullets
- **Proposed (EN):**
  - `Three siloed systems: finance ERP, farm production (plots, tonnages), packing station. No consolidated view.`
  - `Sales and orders tracked on Google Sheets, prone to errors.`
  - `Decisions endured rather than anticipated: weather, prices, and demand unmodelled; production–packing mismatches caught too late.`
  - `About a dozen informal ChatGPT users, with no framework.`
- **Rationale:** The three-silo structure is the whole rationale for the platform — kept exact. "Decisions endured rather than anticipated" preserves the source's framing.

### 4.3 — « Ce qu'on a construit » → "What we built"
- **Component:** same template + `case-studies.ts:systems[]`
- **Fields:** systems[] — 3 blocks {title, description, visual?}
- **Proposed (EN):**
  - **The data platform** — `A dedicated server, automated ingestion of the three source systems, a layered Bronze/Silver/Gold architecture, and data-quality tests. The Bronze layer was delivered ahead of schedule.` · visual: `The data pipeline (architecture diagram)`
  - **The field workshop: 15 prioritised agents** — `A workshop with the farm teams produced the plan for the business agents: each scored on need, users, required data, and expected gain. The end users did the prioritising.` · visual: `Photo of the field workshop with the teams`
  - **The reporting agents** — `Deployed in waves: tonnage tracking, a daily progress KPI, a unified plot reference, budget reporting. Each agent is validated by the business at its milestone.` · visual: `A first reporting dashboard (anonymised data)`
- **Rationale:** "Bronze layer delivered ahead of schedule" and "the end users did the prioritising" are the two real, checkable proof points — kept verbatim. Only 3 systems blocks (matches source).

### 4.4 — « Le déroulé de la mission » → "How the mission ran"
- **Component:** same template + `case-studies.ts:how[]`
- **Fields:** how[] — 4 steps; learned (1 paragraph); stack [PostgreSQL, Docker, Airflow, Power BI, Claude]
- **Proposed (EN):**
  - **steps:** `On-site audit and framing with leadership: no IT department, so the method adapts with directly business-led workshops.` · `Budget-process workshop with the farm teams: 15 agents identified and prioritised.` · `Platform build: ingestion, layered architecture, orchestration.` · `Progressive agent rollout in waves, with business validation at each milestone.`
  - **learned:** `In a group with no IT department, field co-construction replaces the usual business-requirements owner: it was the farm teams who prioritised the agents, not a committee. The result: a foundation delivered ahead of schedule, and users waiting for their agents instead of resisting them.`
- **Rationale:** The "no IT department" method is the differentiator — kept as the spine. "Learned" is the transferable lesson (field co-construction), no reassurance closer.

### 4.5 — Témoignage (absent) → Testimonial (none)
- **Component:** same template + `case-studies.ts:testimonial`
- **Fields:** no testimonial in data
- **Proposed (EN):** No testimonial in source — render nothing. Do not fabricate a quote.
- **Rationale:** Zero-fabrication rule (and DRAFT + inProgress: any future quote needs client sign-off).

### 4.6 — Related + CTA final
- **Component:** `related-content.tsx`, `cta-section.tsx`
- **Proposed (EN):** Related: the Data & AI platform pillar (/plateforme-data-ia → EN money page) + the Gepromed agents case study. CTA below.
- **Rationale:** Data-platform proof — links to the platform money page.

## 5. FAQ
« Les questions qu'on nous pose sur ce type de mission » — `faq-accordion.tsx` + JSON-LD.

| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | Faut-il une DSI pour construire une plateforme data ? | Do you need an IT department to build a data platform? | No. Here, an IT liaison on the client side plus business-led workshops are enough: AI Makers carries the architecture and the build. |
| 2 | Combien de temps pour une première couche exploitable ? | How long to a first usable layer? | The ingestion layer and the Bronze layer were delivered in a few weeks, ahead of schedule. |
| 3 | Que deviennent nos systèmes existants ? | What happens to our existing systems? | They stay in place. The platform plugs into them and makes them talk to each other — no migration. |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| Browse all case studies | /case-studies | hub (EN slug of /etudes-de-cas) |
| Data & AI platform: unify your siloed systems | /plateforme-data-ia | money page (pillar — EN slug per Agent 1) |
| Book a free diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Obtenez les mêmes résultats » → /contact. Proposed EN: **`Get the same results`** → /contact

## 8. GEO block
> DRAFT — do not add to live llms.txt until the page is cleared for indexing.
- **Answer-first paragraph (EN, cite-able):** `Delassus Group, a Moroccan fruit-and-vegetable production and export leader (4,500 employees, 80,000 tonnes a year), had over 20 years of data siloed across an ERP, farm production, and a packing station. With no IT department, AI Makers built an enterprise data platform on a Bronze/Silver/Gold architecture (Bronze layer delivered ahead of schedule) and 15 business AI agents for reporting — prioritised in a field workshop by the end users themselves, and validated by the business at each milestone. Results are still being measured (mission ongoing).`
- **llms.txt entry (EN):** _[DRAFT — hold]_ `[Delassus case study](https://aimakers.fr/case-studies/delassus) : a Bronze/Silver/Gold data platform and 15 business AI agents for a Moroccan agri-export leader with no IT department.` — add only after the page is cleared for indexing.

## 9. Facts used
| Fact / figure | Source |
|---|---|
| 4,500 — employees, 80,000 tonnes exported a year | src/lib/case-studies.ts (client-reported, still being measured — [to validate]) |
| 3 — siloed systems now connected | src/lib/case-studies.ts (client-reported, still being measured — [to validate]) |
| 15 — business agents prioritised with field teams | src/lib/case-studies.ts (client-reported, still being measured — [to validate]) |
| Bronze layer delivered ahead of schedule; ~20 years of data | src/lib/case-studies.ts (client-reported — [to validate]) |
| Client name, sector, period | src/lib/case-studies.ts — [to validate] client approval pending (draft) |

## Reconciliation applied
- **Title length / brand suffix (§2a + §1.3):** proposed Title had no hand-written brand, but the 51-char text rendered ~63 with the appended " | AI Makers" — over 60. Trimmed the meta Title to "20 years of farm data, one platform, AI agents" (46 → ~58 rendered), kept distinct from the fuller H1. Title ≠ H1 stays gated on TICKET-CS-META-TITLE (single-field template until then); left ready-but-pending. Low urgency — noindex.
- **Meta (§2b / SEO short-meta finding):** was 129 (below floor); rebuilt to 146 using only sourced hooks (4,500 employees, "no IT department"). No new fact.
- **Uniform arc (§3.1):** NOT varied — `inProgress` + noindex draft; the "Results are still being measured (mission ongoing)" closer is a protected status flag. Arc unchanged.
- **Negations (§1):** kept "users waiting for their agents instead of resisting them" and "prioritised … not a committee" — verdict-bearing (KEEP); no de-stacking.
- **PROTECTED (critical):** `noindex` / `DRAFT` / `inProgress` status, held llms.txt entry ("[DRAFT — hold]"), and all `[to validate]` tags retained. Client kept as source (anonymised framing preserved); no name surfaced pre-sign-off. All figures (4,500 / 80,000t / 3 / 15 / ~20 years / "Bronze ahead of schedule") verbatim; NO testimonial fabricated. Nothing added, rounded, or invented. Do not publish or index EN before FR validation clears.
- **Not touched (engineering):** `/case-studies/*` slug left ready-but-pending; `/plateforme-data-ia` is a live route (kept).

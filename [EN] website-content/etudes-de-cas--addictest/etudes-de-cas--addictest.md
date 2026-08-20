# Étude de cas : Addictest — EN Content Master

> Live status: **published**

## 1. Page header
- **Route (FR, live):** /etudes-de-cas/addictest
- **Proposed EN slug:** /case-studies/addictest
- **Purpose:** Proof asset — measured before/after for Addictest (International education · Morocco).
- **SEO role:** trust/proof + long-tail
- **Funnel stage:** MOFU/BOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | addictest case study (branded) | — | — | branded/navigational |
| Secondary | ai operating system for sme | low | n/a | Ahrefs (light), 2026-07 — near-zero volume |
| Secondary | ai automation case study | 30 (US) | 6 | Ahrefs keywords-explorer-overview, 2026-07 |

> **Keyword decision:** Case studies are proof pages, not keyword plays. Ahrefs (light check, 2026-07) confirms generic "…case study" terms are near-zero: "ai automation case study" = 30 (US), "ai transformation case study" = 10. The value here is E-E-A-T proof plus internal links to the money page (/ai-automation). Primary intent is branded ("addictest" + case study); no head term forced.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Addictest industrialise ses candidatures universitaires avec l'IA | Addictest scales student applications with AI *(43; renders ~55 once the template appends " \| AI Makers" — do NOT hand-write the suffix)* |
| Meta description (140–160 chars) | Bots de CV et lettres de motivation, matching universités et operating system IA : comment Addictest a industrialisé ses candidatures. Étude de cas. | CV and cover-letter bots, university matching, and a full AI operating system: how Addictest industrialised its student applications. Case study. *(150)* |
| H1 | Addictest industrialise ses candidatures universitaires avec l'IA | Addictest industrialises its university applications with AI |
| URL slug | /etudes-de-cas/addictest | /case-studies/addictest |

## 4. Sections & content
Shared template: `src/app/etudes-de-cas/[slug]/page.tsx` · copy lives in `src/lib/case-studies.ts` (entry `addictest`).

### 4.1 — Hero + TL;DR + metrics
- **Component:** `src/app/etudes-de-cas/[slug]/page.tsx`
- **Fields:** client, sector, period (November 2025 · ongoing), tags [Operating System, AI Agents, Automation], title (H1), tldr, metrics[] {value, label} × 3
- **Current (FR):** TL;DR + 3 metrics (see source).
- **Proposed (EN):**
  - **sector:** `International education · Morocco` — **period:** `November 2025 · ongoing`
  - **tags:** `Operating System` · `AI Agents` · `Automation`
  - **TL;DR:** `Addictest, a Moroccan consultancy that has placed roughly 750 students in universities abroad since 2015, ran its leads, mentoring, and applications on scattered Excel files. AI Makers built its writing bots (CVs, cover letters), its university matching engine, and its full operating system.`
  - **metrics:** `~750` — `students placed abroad since 2015` · `3` — `AI systems in production` · `4` — `CV formats generated automatically`
- **Rationale:** Faithful EN of the source TL;DR and the three metrics — figures carried verbatim from `case-studies.ts` (client-reported), not rounded or invented. Answer-first: who Addictest is, the before-state, and what was built, in three sentences.

### 4.2 — « La situation de départ » → "Where they started"
- **Component:** same template + `case-studies.ts:before[]`
- **Fields:** before[] — 4 bullets
- **Current (FR):** Leads dispersés, dossiers artisanaux, relances manuelles, tout sur Excel.
- **Proposed (EN):**
  - `Leads scattered across Instagram, TikTok, Facebook, and forms — duplicated, with no CRM.`
  - `Applications built by hand: CVs, cover letters, and university shortlists written manually, impossible to scale.`
  - `Manual payment chasing, untracked one-to-one lessons, mentoring supervised without any tool.`
  - `The whole organisation ran on non-standardised Excel files.`
- **Rationale:** Direct translation of the four real pain points; kept concrete (real channel names, real artefacts) rather than generalising.

### 4.3 — « Ce qu'on a construit » → "What we built"
- **Component:** same template + `case-studies.ts:systems[]`
- **Fields:** systems[] — 4 blocks {title, description, visual?}
- **Proposed (EN):**
  - **AI Writing: CVs and cover letters** — `Bots generate a CV in 4 formats and cover letters aligned with the standards of each target university, for every student. The teaching team focuses on coaching, not formatting.` · visual: `A generated application pack (anonymised data)`
  - **Addictest Match Index: university matching** — `For each student profile, the engine recommends a fitting shortlist of universities: ambition, budget, field of study. What took hours of research becomes an instant starting point.` · visual: `A recommended university shortlist for one profile`
  - **The Operating System** — `Leads centralised and de-duplicated, mentoring tracked with an alert when a student hasn't been seen in 2 weeks, mentoring recordings sent automatically to parents, a management dashboard. The move out of Excel, sprint by sprint.` · visual: `The Operating System management dashboard`
  - **The automations around it** — `An automated email cycle (welcome, follow-up, newsletter), a WhatsApp lead-qualification bot, and continuous team training.`
- **Rationale:** Kept the real system names ("Addictest Match Index", "AI Writing") as proper nouns — they are first-hand, checkable artefacts. Visual placeholders mirror the source `visual` fields exactly.

### 4.4 — « Le déroulé de la mission » → "How the mission ran"
- **Component:** same template + `case-studies.ts:how[]`
- **Fields:** how[] — 4 steps; learned (1 paragraph); stack [Claude, n8n, Lovable, WhatsApp Business, Brevo]
- **Proposed (EN):**
  - **steps:** `Audited operations and mapped the pain points with the teams (January 2026).` · `Built the student bots: writing and matching in production within the first weeks (November 2025 to January 2026).` · `Full specification, then build of the Operating System (March to June 2026).` · `Beta with the team on 1 July 2026, then full migration off Excel.`
  - **learned:** `The success criterion set with the founder wasn't the number of features but adoption. Hence a deliberately narrow V0, tested by two people on the team before the full migration.`
- **Rationale:** Dates preserved exactly from source (they are the timeline proof). "Learned" kept as a single first-hand insight, no reassurance closer.

### 4.5 — Témoignage → Testimonial
- **Component:** same template + `case-studies.ts:testimonial`
- **Fields:** quote, author (Ziyad El Mouniri), role, pending
- **Proposed (EN):**
  - **quote:** `We were running 750 students on Excel files and goodwill. AI Makers built us a real operating system: leads, mentoring, applications — it's all in one place. And above all, my teams actually use it.`
  - **author:** `Ziyad El Mouniri` — **role:** `Founder, Addictest`
- **Rationale:** Faithful translation of the client quote. **`pending: true` in source → [to validate]: quote not yet signed off by the client; do not publish EN until the FR quote is validated.**

### 4.6 — Related + CTA final
- **Component:** `related-content.tsx`, `cta-section.tsx`
- **Fields:** 3 related case-study/offer links + CTA
- **Proposed (EN):** Related: two other case studies (Gepromed, ThinkONE) + the pillar `AI automation & operating systems` → /ai-automation. CTA below.
- **Rationale:** Links the OS/automation proof to its money page; sibling case studies keep the proof cluster internally linked.

## 5. FAQ
« Les questions qu'on nous pose sur ce type de mission » — `faq-accordion.tsx` + JSON-LD.

| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | Combien de temps pour déployer un operating system IA dans une PME ? | How long does it take to deploy an AI operating system in an SME? | At Addictest, the first bots were in production within a few weeks; the full Operating System was specified and deployed in 3 months, sprint by sprint. |
| 2 | Nos données sont éparpillées dans des Excel, est-ce bloquant ? | Our data is scattered across Excel files — is that a blocker? | No, it's the most common starting point. Standardising the data is the first build sprint: without a single source of truth, no module holds up. |
| 3 | Qui possède les systèmes à la fin ? | Who owns the systems at the end? | The client. Full intellectual property, with documentation and team training included. |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| Browse all case studies | /case-studies | hub (EN slug of /etudes-de-cas) |
| See how we build AI automation & operating systems | /ai-automation | money page (pillar) |
| Book a free diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Obtenez les mêmes résultats » → /contact. Proposed EN: **`Get the same results`** → /contact

## 8. GEO block
- **Answer-first paragraph (EN, cite-able):** `Addictest, a Moroccan international-education consultancy that has placed around 750 students abroad since 2015, worked with AI Makers to replace its scattered Excel files with three AI systems in production: writing bots that generate CVs (in 4 formats) and cover letters, the Addictest Match Index for university matching, and a full operating system that centralises leads, mentoring, and applications. The build ran sprint by sprint from November 2025, with adoption — not feature count — set as the success criterion.`
- **llms.txt entry (EN):** `[Addictest case study](https://aimakers.fr/case-studies/addictest) : how a Moroccan education consultancy replaced scattered Excel files with CV/cover-letter bots, a university matching engine, and a full AI operating system.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| ~750 — students placed abroad since 2015 | src/lib/case-studies.ts (client-reported) |
| 3 — AI systems in production | src/lib/case-studies.ts (client-reported) |
| 4 — CV formats generated automatically | src/lib/case-studies.ts (client-reported) |
| Testimonial (Ziyad El Mouniri) | src/lib/case-studies.ts — `pending: true` → [to validate] before publish |
| Client name, sector, period | src/lib/case-studies.ts |

## Reconciliation applied
- **Double brand suffix (§2a):** stripped the hand-written `| AI Makers` from the proposed Title field; text is now "Addictest scales student applications with AI" (43 chars → ~55 rendered once `title.template` appends the brand once). Title ≠ H1 remains gated on TICKET-CS-META-TITLE (dev ticket — left as ready-but-pending, not re-logged).
- **Uniform arc (§3.1):** left this case closing on the "Get the same results" CTA. The two arc-varied endings in this batch go to the two clearly completed/measured cases (gepromed, thinkone); addictest's build is still "ongoing" (beta 1 July 2026), so no hard-fact terminal number to land on — arc unchanged.
- **Negations (§1):** kept "coaching, not formatting" and "adoption — not feature count" — both verdict-bearing / load-bearing per the slop cross-page case-study verdict (KEEP); no de-stacking on proof pages.
- **Protected:** all three metrics (~750 / 3 / 4), TL;DR, dates, real system names ("Addictest Match Index", "AI Writing"), stack, and the client quote carried verbatim from `case-studies.ts`. `pending: true` → `[to validate]` retained; do not publish the quote pre-sign-off. No metric added, rounded, or invented.
- **Not touched (engineering):** proposed `/case-studies/*` and `/ai-automation` slugs and the metaTitle field left as ready-but-pending (TICKET-EN-ROUTES, TICKET-CS-META-TITLE).

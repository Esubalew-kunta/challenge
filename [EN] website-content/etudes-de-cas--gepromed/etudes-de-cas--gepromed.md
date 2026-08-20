# Étude de cas : Gepromed — EN Content Master

> Live status: **published**

## 1. Page header
- **Route (FR, live):** /etudes-de-cas/gepromed
- **Proposed EN slug:** /case-studies/gepromed
- **Purpose:** Proof asset — measured before/after for Gepromed (MedTech · Strasbourg). Anchor proof for the AI Operating System.
- **SEO role:** trust/proof + long-tail
- **Funnel stage:** MOFU/BOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | gepromed case study (branded) | — | — | branded/navigational |
| Secondary | ai for medtech | low | n/a | Ahrefs (light), 2026-07 — niche |
| Secondary | ai agents iso 13485 compliance | low | n/a | Ahrefs (light), 2026-07 — near-zero, long-tail |

> **Keyword decision:** Proof page. The distinctive hook — AI agents inside an ISO 13485 / regulated MedTech — is long-tail and near-zero volume but a strong differentiator for GEO. Branded intent primary; page feeds the /ai-automation money page (agents by department).

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Un département IA complet pour une MedTech de 6 personnes | A full AI department for a 6-person MedTech *(41)* |
| Meta description (140–160 chars) | Agents IA pour l'acquisition, la finance, la gestion de projet et la conformité ISO dans une MedTech de 6 personnes. 16 skills livrés en un mois. | AI agents for acquisition, finance, project management, and ISO compliance in a 6-person MedTech. 16 skills delivered in the first month. Case study. *(150)* |
| H1 | Un département IA complet pour une MedTech de 6 personnes | A full AI department for a 6-person MedTech |
| URL slug | /etudes-de-cas/gepromed | /case-studies/gepromed |

## 4. Sections & content
Shared template: `src/app/etudes-de-cas/[slug]/page.tsx` · copy lives in `src/lib/case-studies.ts` (entry `gepromed`).

### 4.1 — Hero + TL;DR + metrics
- **Component:** `src/app/etudes-de-cas/[slug]/page.tsx`
- **Fields:** client, sector, period (April 2026 · ongoing), tags [AI Agents, GTM, Compliance], title (H1), tldr, metrics[] {value, label} × 3
- **Proposed (EN):**
  - **sector:** `MedTech · Strasbourg` — **period:** `April 2026 · ongoing`
  - **tags:** `AI Agents` · `GTM` · `Compliance`
  - **TL;DR:** `Gepromed, a Strasbourg institute for medical devices (surgeon training, clinical research, explant analysis), runs with 6 people in a heavily regulated environment: ISO 9001, ISO 13485, Qualiopi. AI Makers is deploying AI agents by domain (acquisition, finance, project management, compliance) — first tested by one person, then requested by the whole team.`
  - **metrics:** `47` — `AI needs identified by the team itself` · `16` — `skills delivered in the first month` · `6` — `people, 5 departments covered`
- **Rationale:** Faithful EN; figures verbatim from `case-studies.ts`. "16 skills / 47 needs / 6 people" are the proof triangle — kept exact.

### 4.2 — « La situation de départ » → "Where they started"
- **Component:** same template + `case-studies.ts:before[]`
- **Fields:** before[] — 3 bullets
- **Proposed (EN):**
  - `An admin-and-finance manager wearing 3 hats, with 2 to 3 days a week of low-value tasks — including double-entry of financial data between two tools.`
  - `Time-consuming compliance: ISO, GDPR, Qualiopi, audited public funding.`
  - `An invisible website (AI-readability score of 24/100) and a sign-up flow that lost candidates.`
- **Rationale:** The "24/100 readability score" and "2–3 days/week" are the concrete before-state — preserved exactly.

### 4.3 — « Ce qu'on a construit » → "What we built"
- **Component:** same template + `case-studies.ts:systems[]`
- **Fields:** systems[] — 4 blocks {title, description, visual?}
- **Proposed (EN):**
  - **Acquisition (GTM engineering)** — `ICP, outreach messaging, LinkedIn posts and editorial calendar, SEO and GEO, a site rebuild that captures the lead before payment.` · visual: `The new site's sign-up dashboard`
  - **Finance and administration** — `An accounting agent scoped with the finance manager, plus accounting, HR, and quality skills deployed directly on her workstation.` · visual: `A finance skill in action (anonymised data)`
  - **Project management and development** — `A delivery tracker, faster software development (documentation, tickets), and a management-review deck generator.` · visual: `The mission's delivery tracker`
  - **Compliance: the MedTech differentiator** — `ISO gap analysis, a GDPR document generator, a Qualiopi programme. Auditable AI, with human validation before any export.`
- **Rationale:** "Human validation before any export" kept — the load-bearing compliance claim for a regulated client. Real deliverable names preserved.

### 4.4 — « Le déroulé de la mission » → "How the mission ran"
- **Component:** same template + `case-studies.ts:how[]`
- **Fields:** how[] — 4 steps; learned (1 paragraph); stack [Claude, n8n, Next.js, Notion]
- **Proposed (EN):**
  - **steps:** `Group masterclass for the whole team (April 2026).` · `One team member asked for individual training on her real tasks: 4 skills deployed on her workstation in a single day.` · `Leadership asked for the skills for the whole team; employees identified 47 needs themselves.` · `Partnership signed, 16 skills delivered in the first month, agents deployed by domain.`
  - **learned:** `Group training isn't enough: it was the individual day on one person's real tasks that triggered company-wide adoption. Since then, every rollout starts with an individual pilot.`
- **Rationale:** The adoption sequence (masterclass → one person → whole team) is the story's spine — kept step-for-step. "Learned" is the transferable method (start with an individual pilot).

### 4.5 — Témoignage (absent) → Testimonial (none)
- **Component:** same template + `case-studies.ts:testimonial`
- **Fields:** no testimonial in data
- **Proposed (EN):** No testimonial in source — render nothing. Do not fabricate a quote.
- **Rationale:** Zero-fabrication rule.

### 4.6 — Related + CTA final
- **Component:** `related-content.tsx`, `cta-section.tsx`
- **Proposed (EN):** Related: the /ai-automation pillar (agents by department) + the Addictest operating-system case study. CTA below.
- **Rationale:** Agents/OS proof — links to the automation money page.

## 5. FAQ
« Les questions qu'on nous pose sur ce type de mission » — `faq-accordion.tsx` + JSON-LD.

| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | L'IA est-elle compatible avec un environnement ISO 13485 ? | Is AI compatible with an ISO 13485 environment? | Yes, with traceability and human validation before export. Here, every agent respects the existing quality framework. |
| 2 | 6 personnes, est-ce trop petit pour l'IA ? | Six people — is that too small for AI? | It's the opposite: the smaller the team, the more each recovered hour counts. 47 needs were identified in this 6-person structure. |
| 3 | Par où commencer ? | Where should we start? | With one person and their real tasks, not a company-wide plan. Adoption does the rest. |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| Browse all case studies | /case-studies | hub (EN slug of /etudes-de-cas) |
| AI agents and automation, department by department | /ai-automation | money page (pillar) |
| Book a free diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Obtenez les mêmes résultats » → /contact. Proposed EN: **`Get the same results`** → /contact
- **Arc variation (§3.1 — one of the two completed cases varied):** keep the shared "Get the same results" CTA *component*, but let the page's closing narrative beat land on a **hard fact** rather than echoing the CTA sentiment in prose. Closing line before the CTA: `Partnership signed, 16 skills shipped in the first month, and every rollout since starts with an individual pilot.` (facts only, all from source: signed partnership + 16 skills + the method change; no new metric introduced.)

## 8. GEO block
- **Answer-first paragraph (EN, cite-able):** `Gepromed, a 6-person Strasbourg MedTech institute operating under ISO 9001, ISO 13485, and Qualiopi, worked with AI Makers to build a full AI department. AI agents were deployed by domain — acquisition (GTM), finance, project management, and compliance — with human validation before any export to stay auditable. The team identified 47 AI needs itself, and 16 skills were delivered in the first month. Adoption was triggered not by the group masterclass but by an individual day on one person's real tasks.`
- **llms.txt entry (EN):** `[Gepromed case study](https://aimakers.fr/case-studies/gepromed) : a 6-person MedTech under ISO 13485 gets a full AI department — agents for acquisition, finance, project management, and compliance, 16 skills in the first month.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| 47 — AI needs identified by the team itself | src/lib/case-studies.ts (client-reported) |
| 16 — skills delivered in the first month | src/lib/case-studies.ts (client-reported) |
| 6 — people, 5 departments covered | src/lib/case-studies.ts (client-reported) |
| AI-readability score 24/100; 2–3 days/week low-value tasks | src/lib/case-studies.ts (client-reported) |
| Client name, sector, period | src/lib/case-studies.ts |

## Reconciliation applied
- **Double brand suffix (§2a):** none to strip — proposed Title has no hand-written brand ("A full AI department for a 6-person MedTech", 41 → ~53 rendered) and Title == H1. No change.
- **Uniform arc (§3.1) — VARIED (case 2 of 2):** as the strongest completed case, this is the second varied ending. Kept the "Get the same results" CTA *component*; added a closing beat landing on **hard facts** (signed partnership + 16 skills in month one + the individual-pilot method change, all in source) instead of a CTA-echo. No restructuring of the arc.
- **Meta:** 150 chars, in range; unchanged.
- **Negations (§1):** kept the FAQ reversal ("the smaller the team, the more each recovered hour counts") — verdict-bearing; no de-stacking. Qualiopi/ISO are the client's own certifications (client fact), not an AI Makers cert claim — left exact.
- **Protected:** proof triangle (47 / 16 / 6), 24/100 readability, 2–3 days/week, "human validation before any export" all verbatim; stack named; NO testimonial fabricated (none in source). Nothing added, rounded, or invented.
- **Not touched (engineering):** `/case-studies/*` and `/ai-automation` slugs left ready-but-pending (TICKET-EN-ROUTES).

# Étude de cas : Cardio Check-up · Dr Sana Amraoui — EN Content Master

> **noindex — draft, not for live indexing.** Page is noindex & out of sitemap pending client validation (names, figures, testimonial). Do NOT publish or index EN before FR validation clears.

> Live status: **draft** — page is noindex & out of sitemap pending client validation. Do not publish EN before FR validation clears.

## 1. Page header
- **Route (FR, live):** /etudes-de-cas/cardio-check-up
- **Proposed EN slug:** /case-studies/cardio-check-up
- **Purpose:** Proof asset (DRAFT) — measured before/after for a Paris cardiology practice (Health · Cardiology, Paris).
- **SEO role:** trust/proof + long-tail (noindex while draft)
- **Funnel stage:** MOFU/BOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | cardiology practice ai case study (branded) | — | — | branded/navigational (draft) |
| Secondary | ai for medical practice gdpr | low | n/a | Ahrefs (light), 2026-07 — niche |
| Secondary | medical chatbot case study | low | n/a | Ahrefs (light), 2026-07 — near-zero volume |

> **Keyword decision:** DRAFT + noindex — no SEO target until the page is cleared for indexing. When published, value is proof feeding /ai-automation and the health sector page. Branded intent primary.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Sortir un cabinet de cardiologie d'Excel et de WhatsApp | A cardiology practice off Excel and WhatsApp *(44; renders ~56 once the template appends " \| AI Makers". The original "Moving a cardiology practice off Excel and WhatsApp" was 51 → ~63 rendered, over 60; trimmed. Single-field template feeds this to the H1 too until TICKET-CS-META-TITLE lands — noindex draft, so not urgent.)* |
| Meta description (140–160 chars) | Cockpit de cabinet, chatbot médical bilingue et visibilité IA pour une cardiologue parisienne, dans le respect du RGPD santé. Étude de cas. | A practice cockpit, a bilingual medical chatbot, and organic AI visibility for a Paris cardiologist — within health-data GDPR rules. Case study. *(145)* |
| H1 | Sortir un cabinet de cardiologie d'Excel et de WhatsApp | Moving a cardiology practice off Excel and WhatsApp |
| URL slug | /etudes-de-cas/cardio-check-up | /case-studies/cardio-check-up |

## 4. Sections & content
Shared template: `src/app/etudes-de-cas/[slug]/page.tsx` · copy lives in `src/lib/case-studies.ts` (entry `cardio-check-up`).

### 4.1 — Hero + TL;DR + metrics
- **Component:** `src/app/etudes-de-cas/[slug]/page.tsx`
- **Fields:** client, sector, period (May 2026 · ongoing), tags [Medical OS, Chatbot, GEO], title (H1), tldr, metrics[] {value, label} × 3
- **Proposed (EN):**
  - **sector:** `Health · Cardiology, Paris` — **period:** `May 2026 · ongoing`
  - **tags:** `Medical OS` · `Chatbot` · `GEO`
  - **TL;DR:** `A leading cardiologist-electrophysiologist (unit head at a major Paris hospital, founder of a cardiovascular check-up centre) ran her practice on 3 Excel spreadsheets, 3 overflowing inboxes, and to-do lists she texted to herself on WhatsApp. AI Makers built her augmented practice: a management cockpit, a bilingual medical chatbot in production, two websites, and an AI training programme — within strict health-data GDPR and French medical-board rules.`
  - **metrics:** `8` — `databases connected in the practice cockpit` · `~120` — `implantable Holters tracked, previously on 3 manual Excel files` · `2` — `languages for the medical chatbot in production`
- **Rationale:** Faithful EN. **DRAFT: client is described generically per source (no patient data, practitioner name pending client sign-off → [to validate]). Figures verbatim from `case-studies.ts`.**

### 4.2 — « La situation de départ » → "Where they started"
- **Component:** same template + `case-studies.ts:before[]`
- **Fields:** before[] — 4 bullets
- **Proposed (EN):**
  - `Tracking around 120 implantable Holters across 3 manual Excel spreadsheets: 2 hours of hand analysis some mornings.`
  - `To-do lists on paper and WhatsApp messages to herself, working until 1 a.m.`
  - `3 overflowing inboxes and an overloaded phone line for 3 secretaries.`
  - `A hard constraint: the French medical board bans paid advertising, so the only possible visibility is organic.`
- **Rationale:** The "2 hours some mornings / until 1 a.m." details are the real before-state — kept concrete. The advertising-ban constraint is load-bearing for the GEO angle.

### 4.3 — « Ce qu'on a construit » → "What we built"
- **Component:** same template + `case-studies.ts:systems[]`
- **Fields:** systems[] — 4 blocks {title, description, visual?}
- **Proposed (EN):**
  - **The practice cockpit** — `8 connected databases, one screen per role (doctor, secretaries, admin), exam tracking rebuilt from 4 Excel files with automatic statuses. The doctor only sees cases already checked by the secretary.` · visual: `The practice cockpit (dummy data)`
  - **The bilingual medical chatbot** — `In production on the centre's website: symptom triage, routing to the right doctor, redirecting emergencies to 15 (French emergency line). French and English.` · visual: `A typical chatbot conversation`
  - **Two websites** — `The check-up centre's multi-page platform and the practitioner's own site, built for appointment booking and organic visibility.` · visual: `The centre's home page`
  - **Training and AI visibility** — `12 training sessions (the practitioner, then her 3 secretaries), a library of domain prompts, and GEO visibility tracking across 36 keywords in 4 AIs.`
- **Rationale:** "The doctor only sees cases already checked by the secretary" kept — a real, checkable workflow rule, and a compliance signal. Visual placeholders mirror source.

### 4.4 — « Le déroulé de la mission » → "How the mission ran"
- **Component:** same template + `case-studies.ts:how[]`
- **Fields:** how[] — 4 steps; learned (1 paragraph); stack [Claude, Notion, Whisper, Render]
- **Proposed (EN):**
  - **steps:** `Framing in a one-hour consultation: 16 issues logged.` · `Started the following week, asking the client for 1.5 hours a week, no more.` · `Weekly training and continuous build: cockpit, chatbot, websites.` · `Compliance by design: zero identifiable patient data in the tools.`
  - **learned:** `In healthcare, the limiting factor isn't the technology but compliance: hosting, anonymisation, medical-board rules. Designing the system within those constraints from day one avoids rebuilding everything later.`
- **Rationale:** "1.5 hours a week, no more" and "zero identifiable patient data" are the real, checkable constraints — kept exact. "Learned" is the transferable healthcare lesson.

### 4.5 — Témoignage (absent) → Testimonial (none)
- **Component:** same template + `case-studies.ts:testimonial`
- **Fields:** no testimonial in data
- **Proposed (EN):** No testimonial in source — render nothing. Do not fabricate a quote.
- **Rationale:** Zero-fabrication rule (and DRAFT: any future quote needs client sign-off).

### 4.6 — Related + CTA final
- **Component:** `related-content.tsx`, `cta-section.tsx`
- **Proposed (EN):** Related: the /ai-automation pillar + the Addictest operating-system case study. CTA below.
- **Rationale:** Medical OS/automation proof — links to the automation money page.

## 5. FAQ
« Les questions qu'on nous pose sur ce type de mission » — `faq-accordion.tsx` + JSON-LD.

| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | L'IA peut-elle gérer des données patient ? | Can AI handle patient data? | Only within a strict framework: certified health hosting, anonymisation before any AI processing, human validation. That's the framework applied here. |
| 2 | Un médecin peut-il travailler sa visibilité malgré l'interdiction de publicité ? | Can a doctor work on visibility despite the advertising ban? | Yes: informative medical content and organic visibility in AI answers respect the medical board's rules, unlike paid advertising. |
| 3 | Combien de temps un praticien doit-il y consacrer ? | How much time does a practitioner need to spend on it? | 1.5 hours a week in this mission: 1 hour of training, 30 minutes of validation. |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| Browse all case studies | /case-studies | hub (EN slug of /etudes-de-cas) |
| AI agents and automation for your operations | /ai-automation | money page (pillar) |
| Book a free diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Obtenez les mêmes résultats » → /contact. Proposed EN: **`Get the same results`** → /contact

## 8. GEO block
> DRAFT — do not add to live llms.txt until the page is cleared for indexing.
- **Answer-first paragraph (EN, cite-able):** `A Paris cardiologist-electrophysiologist ran her practice on 3 Excel spreadsheets, overflowing inboxes, and WhatsApp to-do lists. AI Makers built an augmented practice within strict health-data GDPR and French medical-board rules: a management cockpit connecting 8 databases (with role-based screens and secretary-checked cases surfaced to the doctor), a bilingual medical chatbot in production for symptom triage, two websites, and an AI training programme. Compliance by design meant zero identifiable patient data in the tools.`
- **llms.txt entry (EN):** _[DRAFT — hold]_ `[Cardiology practice case study](https://aimakers.fr/case-studies/cardio-check-up) : a practice cockpit, a bilingual medical chatbot, and organic AI visibility for a Paris cardiologist, within health-data GDPR rules.` — add only after the page is cleared for indexing.

## 9. Facts used
| Fact / figure | Source |
|---|---|
| 8 — databases connected in the practice cockpit | src/lib/case-studies.ts (client-reported) |
| ~120 — implantable Holters tracked, previously on 3 manual Excel files | src/lib/case-studies.ts (client-reported) |
| 2 — languages for the medical chatbot in production | src/lib/case-studies.ts (client-reported) |
| 12 training sessions; 36 keywords across 4 AIs; 16 issues logged | src/lib/case-studies.ts (client-reported) |
| Client name / practitioner identity | src/lib/case-studies.ts — [to validate] client approval pending (draft) |
| Client sector, period | src/lib/case-studies.ts — [to validate] (draft) |

## Reconciliation applied
- **Title length / brand suffix (§2a + §1.3):** the proposed Title had no hand-written brand, but the original text (51 chars) would render ~63 once the template appends " | AI Makers" — over the 60 limit. Trimmed to "A cardiology practice off Excel and WhatsApp" (44 → ~56 rendered). Single-field template feeds it to the H1 too until TICKET-CS-META-TITLE (left ready-but-pending). Low urgency — page is noindex.
- **Meta (§2b / SEO short-meta finding):** was 137 (below floor); added the sourced word "organic" (organic visibility is the medical-board-compliant angle already in the copy) → 145, in range. No new fact.
- **Uniform arc (§3.1):** NOT varied — noindex draft, held; CTA kept as shared component. (The two arc-varied endings went to gepromed + thinkone.)
- **Negations (§1):** kept "the limiting factor isn't the technology but compliance" — verdict-bearing (KEEP); no de-stacking.
- **PROTECTED (critical):** `noindex` / `DRAFT` status, the held llms.txt entry ("[DRAFT — hold]"), and all `[to validate]` tags retained. Practitioner kept anonymised — real name (Dr Sana Amraoui) NOT surfaced; publishing it pre-sign-off would be a fabrication-adjacent breach. All figures (8 / ~120 / 2 / 12 / 36 / 16) verbatim; NO testimonial fabricated. Nothing added, rounded, or invented. Do not publish or index EN before FR validation clears.
- **Not touched (engineering):** `/case-studies/*` and `/ai-automation` slugs left ready-but-pending (TICKET-EN-ROUTES).

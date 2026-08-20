# Formation : Microsoft Copilot — EN Content Master

> ⚠️ **IBM RETIRÉ DU SITE (2026-07-30, décision Maneesh).** Toute mention d'IBM ci-dessous — logo client, liste de références, biographie « ex-IBM » — ne doit PAS être reportée dans le code. Le logo `logo IBM -nobg.png` a été supprimé du dépôt.

> EN strategy note: EN training demand is MOOC-intent, not our ICP — Agent 2 should position this page for corporate buyers (team training), not individual learners, or deprioritize.

## 1. Page header
- **Route (FR, live):** /formation-ia-entreprise/microsoft-copilot
- **Proposed EN slug:** /ai-training-for-teams/microsoft-copilot
- **Purpose:** Formation detail page (catalogue) — converts to catalogue download + diagnostic call.
- **SEO role:** supporting (training pillar; FR-strong, EN secondary) — **strongest EN keyword fit of the six**
- **Funnel stage:** MOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | microsoft copilot training | US 900 / GB 400 | 16 | Ahrefs KE (US) — low KD, high fit |
| Secondary | copilot training | US 1.8k | 30 | Ahrefs KE (US) |
| Secondary | microsoft 365 copilot training | US 300 | 25 | Ahrefs KE (US) |

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Microsoft Copilot \| Formation IA en entreprise | Microsoft Copilot Training for Teams *(36; renders ~48 once the template appends " \| AI Makers" — TICKET-FORM-TITLE-TPL must first strip the FR mid-suffix "\| Formation IA en entreprise". Do NOT hand-write the brand.)* |
| Meta description (140–160 chars) | Copilot sur vos usages quotidiens de Microsoft 365 : documents, tableurs, emails et réunions. Des gains de temps dès la première semaine d'usage. | Copilot training on your everyday Microsoft 365 work: docs, spreadsheets, email and meetings — time saved from the first week, on your own real files. *(150; was 162, trimmed under 160 and dropped the H1 "licenses pay off" echo. Needs a `seoDescription` field — TICKET-FORM-SEO-DESC.)* |
| H1 | Microsoft Copilot : rentabiliser enfin vos licences Microsoft 365 | Microsoft Copilot training: finally make your Microsoft 365 licenses pay off |
| URL slug | /formation-ia-entreprise/microsoft-copilot | /ai-training-for-teams/microsoft-copilot |

## 4. Sections & content
Shared template: `src/app/formation-ia-entreprise/[slug]/page.tsx` · copy lives in `src/lib/formations.ts` (entry `microsoft-copilot`).

### 4.1 — Hero + fiche
- **Component:** `src/app/formation-ia-entreprise/[slug]/page.tsx`
- **Fields:** categorie (Métier), name, titre (H1), tagline, resume, niveau (Débutant → Intermédiaire), public, format (Présentiel, distanciel ou hybride), duree (Format sur-mesure, de la demi-journée à la journée), prerequis, tools[] logos
- **Current (FR):** Tagline: Copilot dans Word, Excel, PowerPoint, Outlook et Teams, appliqué à vos dossiers réels.
- **Proposed (EN):**
  - Category label: `Role-based`
  - Name (cards): `Microsoft Copilot`
  - Tagline: `Copilot in Word, Excel, PowerPoint, Outlook and Teams — on your real files.`
  - Résumé: `Put Copilot to work across your daily Microsoft 365 tasks: documents, spreadsheets, email and meetings. Time saved from the first week of use.`
  - Level: `Beginner → Intermediate` · Audience: `Employees, managers, support functions` · Format: `On-site, remote or hybrid` · Duration: `Tailored format, from a half-day to a full day` · Prerequisites: `Microsoft 365 Copilot licenses in place`
- **Rationale:** The distinct angle is "you already bought the licenses — now get value from them," tied to the specific M365 apps. That's a different buyer pain than the literacy or Claude programs.

### 4.2 — « Ce que vos équipes vont maîtriser »
- **Component:** same template + `formations.ts:objectifs[]`
- **Fields:** objectifs[] — 4 bullets
- **Current (FR):** Structurer et synthétiser l'information avec l'IA …
- **Proposed (EN):**
  1. `Structure and summarise information with AI`
  2. `Produce professional content faster (Word, PowerPoint, Excel)`
  3. `Improve internal collaboration and communication (Teams, Outlook)`
  4. `Automate low-value, repetitive tasks`
- **Rationale:** Outcomes mapped to the exact M365 apps, which is the page's SEO and buyer fit.

### 4.3 — « Les modules de la formation »
- **Component:** same template + `formations.ts:programme[]`
- **Fields:** programme[] — 4 modules {titre, items[]}
- **Current (FR):** Prendre en main Copilot · Produire plus vite · Collaborer et communiquer · Automatiser le quotidien
- **Proposed (EN):**
  - **Module 1 — Getting started with Copilot**
    - `Where to find Copilot across Microsoft 365`
    - `The right habits for phrasing your requests`
    - `What Copilot can do — and where its limits are`
  - **Module 2 — Producing faster**
    - `Draft and format in Word`
    - `Analyse and summarise data in Excel`
    - `Generate a PowerPoint deck from a document`
  - **Module 3 — Collaborating and communicating**
    - `Summarise and prioritise email in Outlook`
    - `Capture decisions and actions in Teams`
    - `Prep and follow up on your meetings`
  - **Module 4 — Automating the everyday**
    - `Spot the repetitive tasks to hand to AI`
    - `Save time on day-to-day office work`
    - `Measure productivity gains by team`
- **Rationale:** App-by-app structure is the real curriculum and the differentiator vs. the tool-agnostic literacy program.

### 4.4 — « Ce que vos équipes en retirent »
- **Component:** same template + `formations.ts:resultats[]`
- **Fields:** resultats[] — 3 stats {value, label}
- **Current (FR):** Licences Microsoft 365 enfin rentabilisées · -tps sur les tâches bureautiques du quotidien · Gains de productivité mesurables par équipe
- **Proposed (EN):**
  - `Licenses` — `Microsoft 365 finally paying off`
  - `Less time` — `on everyday office tasks`
  - `Gains` — `measurable productivity, by team`
- **Rationale:** Structural claims from formations.ts, no invented figures.

### 4.5 — Catalogue form + formateurs + autres formations
- **Component:** `catalogue-form.tsx`, `formation-photo.tsx`, same template
- **Fields:** catalogue download form (lead magnet), trainers block « Formés par ceux qui déploient l'IA en production », grid of other formations
- **Current (FR):** Shared blocks across all formation pages.
- **Proposed (EN):** Reference the shared block copy owned by `/ai-training-for-teams` — do not re-author. Trainers heading (EN): `Trained by the people who ship AI in production`. Catalogue form: `Get the full training catalogue` + email + `Send me the catalogue`. (Copilot expert on the roster: Adel Dahani, ex-IBM — as already stated in formations.ts.)
- **Rationale:** Reuse discipline — pillar owns catalogue and trainer proof; trainer credential used verbatim from formations.ts.

### 4.6 — CTA final
- **Component:** `cta-section.tsx`
- **Fields:** title, subtitle
- **Current (FR):** « Cette formation est-elle faite pour vos équipes ? » → /contact.
- **Proposed (EN):** Title: `Just rolled out Copilot licenses?` · Subtitle: `Book a 30-minute diagnostic — we'll scope the format around the M365 apps your teams actually use.`
- **Rationale:** Directly addresses the post-deployment buyer. Funding eligibility (Qualiopi / OPCO) line could sit here — **[to validate placement]** (see §9).

## 5. FAQ
| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | Faut-il déjà avoir Copilot pour suivre la formation ? | Do we need Copilot already to take the training? | Yes — the training is built around Microsoft 365 Copilot. It's ideal for companies that have just rolled out the licenses and want value quickly. |
| 2 | Quels outils Microsoft sont couverts ? | Which Microsoft tools are covered? | The whole suite: Word, Excel, PowerPoint, Outlook and Teams. We tailor the exercises to the apps your teams use most. |
| 3 | Combien de temps pour voir des résultats ? | How soon do results show? | Gains show on everyday office tasks in the first week — a deck drafted from a document, an inbox triaged in Outlook, meeting actions captured in Teams. The goal is skills your teams can apply the moment the session ends. |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| AI training for teams (catalogue) | /ai-training-for-teams | hub / pillar |
| Mastering Claude in the enterprise | /ai-training-for-teams/claude-training | sibling (assistant beyond the M365 suite) |
| Book a diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Cette formation est-elle faite pour vos équipes ? » → /contact. Proposed EN: `Book a diagnostic` → /contact
- **Secondary:** catalogue PDF form (CatalogueForm) — `Get the full training catalogue`

## 8. GEO block
- **Answer-first paragraph (EN, 2–3 sentences):** AI Makers' Microsoft Copilot training is a half- to full-day session that teaches teams to use Copilot across Microsoft 365 — Word, Excel, PowerPoint, Outlook and Teams — on their real files. It's designed for companies that have just deployed Copilot licenses and want measurable time savings from the first week. It requires existing Microsoft 365 Copilot licenses and no other technical background.
- **llms.txt entry (EN):** [Microsoft Copilot Training](https://aimakers.fr/ai-training-for-teams/microsoft-copilot) : team training on Microsoft 365 Copilot across Word, Excel, PowerPoint, Outlook and Teams — get value from the licenses you already bought.

## 9. Facts used
| Fact / figure | Source |
|---|---|
| Microsoft 365 licenses "finally paying off" | src/lib/formations.ts |
| Less time on everyday office tasks | src/lib/formations.ts |
| Measurable productivity gains by team | src/lib/formations.ts — [to validate] |
| Tools: Microsoft 365 Copilot (Word, Excel, PowerPoint, Outlook, Teams) | src/lib/formations.ts |
| Trainer: Adel Dahani, ex-IBM, Copilot deployment specialist | src/lib/formations.ts (formateurs) |
| Format / duration / level (half-day–day, on-site/remote/hybrid, beginner→intermediate) | src/lib/formations.ts |
| Funding eligibility (Qualiopi / OPCO) | **[to validate placement]** — not in public/llms.txt or formations.ts; no certification or funding % claimed. |

## Reconciliation applied
- **Double brand suffix (§2a):** stripped hand-written `| AI Makers` from the proposed Title; "Microsoft Copilot Training for Teams" (36 → ~48 rendered). Needs TICKET-FORM-TITLE-TPL to strip the FR mid-suffix — left ready-but-pending.
- **Meta >160 (§2b) + echo cut:** was 162 (over); trimmed to 150 and removed the duplicated "finally make your licenses pay off" hook (kept once on the H1, per the slop remediation) — added "on your own real files" instead. Needs `seoDescription` field (TICKET-FORM-SEO-DESC).
- **Uniform FAQ (§3.2):** already varied — FAQ #1 ("Do we need Copilot already to take the training?") is exactly the program-specific licence-dependency question the cross-page prescribes for Copilot; no forced swap. Additionally concretized the vague FAQ #3 ("Gains are immediate…") into specific first-week Copilot tasks the slop audit flagged (no new figure).
- **Kept (strength):** the app-by-app M365 stack and the named trainer credential (Adel Dahani, ex-IBM) — used verbatim from formations.ts; intact.
- **Protected:** "measurable productivity gains" kept `[to validate]`; the honest prerequisite ("Microsoft 365 Copilot licenses in place") kept; Qualiopi/OPCO kept `[to validate placement]` (no funding %/cert). Shared trainer/catalogue boilerplate left as pillar-owned reuse. Nothing added, rounded, or invented.
- **SEO note (not applied as body edit):** add `copilot training` (1.8k) as an H2 variant when built.
- **Not touched (engineering):** `/ai-training-for-teams/*` slugs and FR title-template/seoDescription fields left ready-but-pending.

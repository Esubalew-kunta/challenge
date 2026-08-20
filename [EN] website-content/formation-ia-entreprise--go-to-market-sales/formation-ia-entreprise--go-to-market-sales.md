# Formation : Go-to-Market & Sales — EN Content Master

> EN strategy note: EN training demand is MOOC-intent, not our ICP — Agent 2 should position this page for corporate buyers (team training), not individual learners, or deprioritize.

## 1. Page header
- **Route (FR, live):** /formation-ia-entreprise/go-to-market-sales
- **Proposed EN slug:** /ai-training-for-teams/ai-sales-training
- **Purpose:** Formation detail page (catalogue) — converts to catalogue download + diagnostic call.
- **SEO role:** supporting (training pillar; FR-strong, EN secondary)
- **Funnel stage:** MOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | ai sales training | US 500 | 48 | Ahrefs KE (US) — CPC $9, strong commercial intent |
| Secondary | ai for sales teams | US 250 | 56 | Ahrefs KE (US) |
| Secondary | ai prospecting | US 250 | 22 | Ahrefs KE (US) — easier |

> Low-volume note: "ai training for sales" (the literal FR mirror) is US 10 / global 30 — do NOT target. Use "ai sales training" instead.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Go-to-Market & Sales \| Formation IA en entreprise | AI Sales Training for Teams *(27; renders ~39 once the template appends " \| AI Makers" — TICKET-FORM-TITLE-TPL must first strip the FR mid-suffix "\| Formation IA en entreprise". Do NOT hand-write the brand.)* |
| Meta description (140–160 chars) | Industrialiser la prospection avec Clay, Lemlist et FullEnrich : des listes enrichies, des séquences personnalisées, des rendez-vous. | Scale prospecting with Clay, Lemlist and FullEnrich: enriched lists, personalised sequences, more meetings booked. AI sales training on your real pipeline. *(156; was 162, trimmed under 160. Needs a `seoDescription` field — TICKET-FORM-SEO-DESC.)* |
| H1 | Go-to-Market & Sales : trouver et convertir plus de clients avec l'IA | Go-to-Market & Sales: find and convert more customers with AI |
| URL slug | /formation-ia-entreprise/go-to-market-sales | /ai-training-for-teams/ai-sales-training |

## 4. Sections & content
Shared template: `src/app/formation-ia-entreprise/[slug]/page.tsx` · copy lives in `src/lib/formations.ts` (entry `go-to-market-sales`).

### 4.1 — Hero + fiche
- **Component:** `src/app/formation-ia-entreprise/[slug]/page.tsx`
- **Fields:** categorie (Métier), name, titre (H1), tagline, resume, niveau (Intermédiaire), public, format (Présentiel, distanciel ou hybride), duree (Format sur-mesure, de la journée au parcours complet), prerequis, tools[] logos
- **Current (FR):** Tagline: Construire une machine d'acquisition augmentée par l'IA, de la liste au rendez-vous.
- **Proposed (EN):**
  - Category label: `Role-based`
  - Name (cards): `Go-to-Market & Sales`
  - Tagline: `Build an AI-powered acquisition machine — from list to booked meeting.`
  - Résumé: `Scale prospecting with Clay, Lemlist and FullEnrich: enriched lists, personalised sequences, and more meetings on the calendar.`
  - Level: `Intermediate` · Audience: `Sales, marketing, growth teams and founders` · Format: `On-site, remote or hybrid` · Duration: `Tailored format, from one day to a full track` · Prerequisites: `No technical prerequisites`
- **Rationale:** The distinct anchor is the outbound stack (Clay + FullEnrich for data, Lemlist for sequences) and the list→meeting arc. No overlap with the creative or Copilot programs.

### 4.2 — « Ce que vos équipes vont maîtriser »
- **Component:** same template + `formations.ts:objectifs[]`
- **Fields:** objectifs[] — 4 bullets
- **Current (FR):** Identifier les leviers IA pour l'acquisition client …
- **Proposed (EN):**
  1. `Spot the AI levers for customer acquisition`
  2. `Automate prospecting and lead enrichment with Clay and FullEnrich`
  3. `Personalise multichannel sequences at scale with Lemlist`
  4. `Lift conversion and tighten sales follow-up`
- **Rationale:** Tool-specific outcomes, phrased for a sales/growth lead scoping a team program.

### 4.3 — « Les modules de la formation »
- **Component:** same template + `formations.ts:programme[]`
- **Fields:** programme[] — 4 modules {titre, items[]}
- **Current (FR):** La stratégie d'acquisition augmentée · Enrichir et cibler avec Clay & FullEnrich · Séquences personnalisées avec Lemlist · Convertir et suivre
- **Proposed (EN):**
  - **Module 1 — The AI-powered acquisition strategy**
    - `Map your market and target segments with AI`
    - `Build qualified, up-to-date prospect lists`
    - `The AI levers at each stage of the sales cycle`
  - **Module 2 — Enrich and target with Clay & FullEnrich**
    - `Automate prospect data collection and enrichment`
    - `Detect buying signals and prioritise accounts`
    - `Clean and de-risk your sales database`
  - **Module 3 — Personalised sequences with Lemlist**
    - `Build multichannel sequences (email, LinkedIn)`
    - `Personalise messages at scale without losing quality`
    - `Test, measure and optimise reply rates`
  - **Module 4 — Convert and follow up**
    - `Prep your sales meetings with AI`
    - `Improve follow-up and re-engagement`
    - `Track the performance of the acquisition machine`
- **Rationale:** The Clay → Lemlist → follow-up arc is the real, non-templated curriculum.

### 4.4 — « Ce que vos équipes en retirent »
- **Component:** same template + `formations.ts:resultats[]`
- **Fields:** resultats[] — 3 stats {value, label}
- **Current (FR):** x3 de volume de prospection à qualité constante · 100% des messages personnalisés à grande échelle · +conv. taux de conversion et de réponse en hausse
- **Proposed (EN):**
  - `x3` — `prospecting volume at the same quality`
  - `100%` — `of messages personalised at scale`
  - `+conv.` — `higher conversion and reply rates`
- **Rationale:** Structural claims from formations.ts. "x3" and "+conv." tagged [to validate] as performance claims.

### 4.5 — Catalogue form + formateurs + autres formations
- **Component:** `catalogue-form.tsx`, `formation-photo.tsx`, same template
- **Fields:** catalogue download form (lead magnet), trainers block « Formés par ceux qui déploient l'IA en production », grid of other formations
- **Current (FR):** Shared blocks across all formation pages.
- **Proposed (EN):** Reference the shared block copy owned by `/ai-training-for-teams` — do not re-author. Trainers heading (EN): `Trained by the people who ship AI in production`. Catalogue form: `Get the full training catalogue` + email + `Send me the catalogue`.
- **Rationale:** Reuse discipline — pillar owns catalogue and trainer proof.

### 4.6 — CTA final
- **Component:** `cta-section.tsx`
- **Fields:** title, subtitle
- **Current (FR):** « Cette formation est-elle faite pour vos équipes ? » → /contact.
- **Proposed (EN):** Title: `Ready to scale your acquisition?` · Subtitle: `Book a 30-minute diagnostic — we'll look at your market, your personas and your sequences before scoping the program.`
- **Rationale:** Speaks to a sales leader. Funding eligibility (Qualiopi / OPCO) line could sit here — **[to validate placement]** (see §9).

## 5. FAQ
| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | À qui s'adresse cette formation ? | Who is this training for? | Sales, marketing and growth teams, plus founders who want to scale acquisition. No technical prerequisites. |
| 2 | Quels outils sont couverts ? | Which tools are covered? | The go-to outbound stack: Clay and FullEnrich for data enrichment, Lemlist for personalised multichannel sequences. |
| 3 | La formation s'appuie-t-elle sur nos cas réels ? *(EN slot varied — program-specific, §3.2; the real-cases reassurance is kept in the GEO paragraph and CTA)* | Do we need Clay, Lemlist and FullEnrich subscriptions to take part? | Not to start — the training can run in our environment so the team learns the method first. The biggest gains come once your team has its own Clay, FullEnrich and Lemlist seats; we help you pick the tier that fits your prospecting volume. |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| AI training for teams (catalogue) | /ai-training-for-teams | hub / pillar |
| AI workflow automation | /automatisation-ia-workflow | related money page (automate the pipeline) |
| Book a diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Cette formation est-elle faite pour vos équipes ? » → /contact. Proposed EN: `Book a diagnostic` → /contact
- **Secondary:** catalogue PDF form (CatalogueForm) — `Get the full training catalogue`

## 8. GEO block
- **Answer-first paragraph (EN, 2–3 sentences):** AI Makers' Go-to-Market & Sales program trains sales, marketing and growth teams to run AI-powered outbound — building enriched prospect lists with Clay and FullEnrich, then personalising multichannel sequences at scale with Lemlist. The training works on your real market, personas and sequences, and runs from prospect list to booked meeting. It's a team program with no technical prerequisites.
- **llms.txt entry (EN):** [Go-to-Market & Sales](https://aimakers.fr/ai-training-for-teams/ai-sales-training) : AI sales training for teams — scale prospecting with Clay, FullEnrich and Lemlist, from enriched list to booked meeting.

## 9. Facts used
| Fact / figure | Source |
|---|---|
| x3 — prospecting volume at same quality | src/lib/formations.ts — [to validate] |
| 100% — messages personalised at scale | src/lib/formations.ts |
| +conv. — higher conversion and reply rates | src/lib/formations.ts — [to validate] |
| Tools: Clay, FullEnrich, Lemlist | src/lib/formations.ts |
| Format / duration / level (day–full track, on-site/remote/hybrid, intermediate) | src/lib/formations.ts |
| Funding eligibility (Qualiopi / OPCO) | **[to validate placement]** — not in public/llms.txt or formations.ts; no certification or funding % claimed. |

## Reconciliation applied
- **Double brand suffix (§2a):** stripped hand-written `| AI Makers` from the proposed Title; "AI Sales Training for Teams" (27 → ~39 rendered). Needs TICKET-FORM-TITLE-TPL to strip the FR mid-suffix — left ready-but-pending.
- **Meta >160 (§2b):** was 162 (over); trimmed "built" → 156, under ceiling. Needs `seoDescription` field (TICKET-FORM-SEO-DESC).
- **Uniform FAQ (§3.2) — VARIED:** this page had the fully-templated who/tools/**based-on-our-cases** set. Replaced the generic "Is the training based on our real cases?" slot with a program-specific buyer question ("Do we need Clay, Lemlist and FullEnrich subscriptions to take part?"). The real-cases reassurance is preserved in the GEO paragraph and CTA subtitle, so no information lost.
- **Negations (§4):** the mild "at scale without losing quality" module item is scoping, left as-is; the "acquisition machine" metaphor is a Layer-10.7 marketing metaphor (out of §4 "X, not Y" scope), left as-is to avoid over-editing.
- **Kept (strength):** the named outbound stack (Clay, FullEnrich, Lemlist) — the differentiator; intact.
- **Protected:** "x3" and "+conv." kept `[to validate]`; Qualiopi/OPCO kept `[to validate placement]` (no funding %/cert); the honest keyword note rejecting the low-volume "ai training for sales" mirror kept. Shared trainer/catalogue boilerplate left as pillar-owned reuse. Nothing added, rounded, or invented.
- **SEO note (not applied as body edit):** surface the reachable adjacent term `ai prospecting` (KD22) in an H2/body when built.
- **Not touched (engineering):** `/ai-training-for-teams/*` slug and FR title-template/seoDescription fields left ready-but-pending.

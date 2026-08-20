# Formation : Création & Publicité : IA pour la Créa — EN Content Master

> EN strategy note: EN training demand is MOOC-intent, not our ICP — Agent 2 should position this page for corporate buyers (team training), not individual learners, or deprioritize.

## 1. Page header
- **Route (FR, live):** /formation-ia-entreprise/creation-publicite-ia
- **Proposed EN slug:** /ai-training-for-teams/ai-for-advertising
- **Purpose:** Formation detail page (catalogue) — converts to catalogue download + diagnostic call.
- **SEO role:** supporting (training pillar; FR-strong, EN secondary)
- **Funnel stage:** MOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | ai for advertising | US 1.4k / GB 150 | 54 | Ahrefs KE (US) |
| Secondary | generative ai for marketing | US 1.3k | 18 | Ahrefs KE (US) — easier, adjacent |
| Secondary | ai advertising course | US 30 | n/a | Ahrefs KE — low volume, exact-match |

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Création & Publicité : IA pour la Créa \| Formation IA en entreprise | AI for Advertising & Creative Teams *(35; renders ~47 once the template appends " \| AI Makers" — TICKET-FORM-TITLE-TPL must first strip the FR mid-suffix "\| Formation IA en entreprise". Do NOT hand-write the brand.)* |
| Meta description (140–160 chars) | Accélérer la production créative avec Nano Banana et Weavy, en gardant une direction artistique cohérente du brief à la livraison. | Speed up creative production with Nano Banana and Weavy while keeping art direction consistent. AI training for creative and advertising teams. *(143; was 161, trimmed under 160. Needs a `seoDescription` field — TICKET-FORM-SEO-DESC.)* |
| H1 | Création & Publicité : produire et décliner des contenus créatifs avec l'IA | AI for Advertising: produce and adapt creative content, faster |
| URL slug | /formation-ia-entreprise/creation-publicite-ia | /ai-training-for-teams/ai-for-advertising |

## 4. Sections & content
Shared template: `src/app/formation-ia-entreprise/[slug]/page.tsx` · copy lives in `src/lib/formations.ts` (entry `creation-publicite-ia`).

### 4.1 — Hero + fiche
- **Component:** `src/app/formation-ia-entreprise/[slug]/page.tsx`
- **Fields:** categorie (Métier), name, titre (H1), tagline, resume, niveau (Débutant → Intermédiaire), public, format (Présentiel, distanciel ou hybride), duree (Format sur-mesure, de la journée au parcours complet), prerequis, tools[] logos
- **Current (FR):** Tagline: Produire et décliner des contenus créatifs avec l'IA, sans perdre la direction artistique.
- **Proposed (EN):**
  - Category label: `Role-based`
  - Name (cards): `AI for Creative & Advertising`
  - Tagline: `Produce and adapt creative content with AI — without losing art direction.`
  - Résumé: `Speed up creative output with Nano Banana and Weavy while keeping a consistent art direction from brief to delivery.`
  - Level: `Beginner → Intermediate` · Audience: `Creatives, designers, marketing and communications teams` · Format: `On-site, remote or hybrid` · Duration: `Tailored format, from one day to a full track` · Prerequisites: `No technical prerequisites`
- **Rationale:** The differentiator is the specific creative stack (Nano Banana for generation, Weavy for the pipeline) and the "keep art direction" tension — not generic "AI content." That keeps it distinct from the literacy and Copilot programs.

### 4.2 — « Ce que vos équipes vont maîtriser »
- **Component:** same template + `formations.ts:objectifs[]`
- **Fields:** objectifs[] — 4 bullets
- **Current (FR):** Générer des visuels et des contenus créatifs avec l'IA …
- **Proposed (EN):**
  1. `Generate visuals and creative content with AI`
  2. `Shorten production cycles`
  3. `Adapt creative across channels`
  4. `Build a creative AI workflow with Nano Banana and Weavy`
- **Rationale:** Named tools in the objectives make the page concrete and non-templated.

### 4.3 — « Les modules de la formation »
- **Component:** same template + `formations.ts:programme[]`
- **Fields:** programme[] — 4 modules {titre, items[]}
- **Current (FR):** Les bases de la création IA · Générer visuels & contenus avec Nano Banana · Structurer un workflow créatif avec Weavy · Décliner & industrialiser
- **Proposed (EN):**
  - **Module 1 — Creative AI basics**
    - `The creative-tool landscape and what each one does well`
    - `Keeping a consistent art direction when AI is in the loop`
    - `The prompts behind quality visuals`
  - **Module 2 — Generating visuals & content with Nano Banana**
    - `Produce images and creative variations`
    - `Iterate quickly on concepts`
    - `Stay true to brand identity`
  - **Module 3 — Structuring a creative workflow with Weavy**
    - `Bring AI into the production pipeline, brief to delivery`
    - `Assemble and chain the creative steps`
    - `Keep every deliverable consistent`
  - **Module 4 — Adapting & scaling**
    - `Adapt creative to each channel (social, print, web)`
    - `Shorten production cycles`
    - `Measure the time and volume you gain`
- **Rationale:** The two-tool split (Nano Banana → Weavy) is the real, teachable structure and the page's fingerprint.

### 4.4 — « Ce que vos équipes en retirent »
- **Component:** same template + `formations.ts:resultats[]`
- **Fields:** resultats[] — 3 stats {value, label}
- **Current (FR):** x5 cycles de production accélérés · DA direction artistique cohérente préservée · Multi-canal déclinaisons adaptées à chaque canal
- **Proposed (EN):**
  - `x5` — `faster production cycles`
  - `Art direction` — `kept consistent across outputs`
  - `Multi-channel` — `variations adapted to each channel`
- **Rationale:** Structural claims from formations.ts. "x5" tagged [to validate] as a productivity claim.

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
- **Proposed (EN):** Title: `Ready to speed up your creative production?` · Subtitle: `Book a 30-minute diagnostic — we'll map your production workflow and scope the format around your channels and brand.`
- **Rationale:** Speaks to a creative/marketing lead. Funding eligibility (Qualiopi / OPCO) line could sit here — **[to validate placement]** (see §9).

## 5. FAQ
| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | À qui s'adresse cette formation ? | Who is this training for? | Creatives, designers and marketing/comms teams who want to produce faster while keeping quality and brand consistency intact. |
| 2 | Quels outils sont couverts ? | Which tools are covered? | Nano Banana for generating visuals and Weavy for structuring the creative workflow end to end, from brief to delivery. |
| 3 | L'IA remplace-t-elle la direction artistique ? | Does AI replace art direction? | No. AI speeds up production, but art direction stays with your team. The training is specifically about keeping a consistent art direction while producing more. |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| AI training for teams (catalogue) | /ai-training-for-teams | hub / pillar |
| AI for agencies (sector) | /secteurs/agences-communication | relevant sector page |
| Book a diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Cette formation est-elle faite pour vos équipes ? » → /contact. Proposed EN: `Book a diagnostic` → /contact
- **Secondary:** catalogue PDF form (CatalogueForm) — `Get the full training catalogue`

## 8. GEO block
- **Answer-first paragraph (EN, 2–3 sentences):** AI Makers' AI for Creative & Advertising program trains creative, design and marketing teams to produce and adapt content with generative AI — using Nano Banana for visuals and Weavy to structure the production pipeline from brief to delivery. It focuses on keeping art direction consistent while shortening production cycles, with no technical prerequisites. It's a team program, not an individual course.
- **llms.txt entry (EN):** [AI for Creative & Advertising](https://aimakers.fr/ai-training-for-teams/ai-for-advertising) : AI training for creative and marketing teams — produce and adapt content with Nano Banana and Weavy while keeping art direction consistent.

## 9. Facts used
| Fact / figure | Source |
|---|---|
| x5 — faster production cycles | src/lib/formations.ts — [to validate] |
| Art direction kept consistent | src/lib/formations.ts |
| Multi-channel variations | src/lib/formations.ts |
| Tools: Nano Banana, Weavy | src/lib/formations.ts |
| Format / duration / level (day–full track, on-site/remote/hybrid, beginner→intermediate) | src/lib/formations.ts |
| Funding eligibility (Qualiopi / OPCO) | **[to validate placement]** — not in public/llms.txt or formations.ts; no certification or funding % claimed. |

## Reconciliation applied
- **Double brand suffix (§2a):** stripped hand-written `| AI Makers` from the proposed Title; "AI for Advertising & Creative Teams" (35 → ~47 rendered). Needs TICKET-FORM-TITLE-TPL to strip the FR mid-suffix — left ready-but-pending.
- **Meta >160 (§2b):** the proposed meta was 161 (over ceiling); trimmed the redundant "brief to delivery" tail to 143. Needs `seoDescription` field (TICKET-FORM-SEO-DESC).
- **Negation thinning (§4 / slop remediation):** the "without losing/giving up X" frame appeared twice; kept the one that carries the page's core tension (tagline "without losing art direction") and flattened the duplicate in FAQ #1 to a positive clause ("while keeping quality and brand consistency intact"). FAQ #3 ("Does AI replace art direction? No") kept — verdict-bearing scoping, load-bearing.
- **Uniform FAQ (§3.2):** already varied — FAQ #3 is the program-specific art-direction question (not the templated "based-on-our-cases" slot); no forced swap.
- **Kept (strength):** the named creative stack (Nano Banana for generation, Weavy for the pipeline) — the differentiator; left intact.
- **Protected:** "x5" kept `[to validate]`; Qualiopi/OPCO kept `[to validate placement]` (no funding %/cert). Shared trainer/catalogue boilerplate left as pillar-owned reuse. Nothing added, rounded, or invented.
- **SEO note (not applied as body edit):** the reachable adjacent term `generative ai for marketing` (KD18) should be worked into an H2/body when the page is built — flagged, not forced here.
- **Not touched (engineering):** `/ai-training-for-teams/*` slug and FR title-template/seoDescription fields left ready-but-pending.

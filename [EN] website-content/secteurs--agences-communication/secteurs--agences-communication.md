# Secteur : Agences de communication — EN Content Master

## 1. Page header
- **Route (FR, live):** /secteurs/agences-communication
- **Proposed EN slug:** /industries/ai-for-marketing-agencies (collection base /industries — hub slug owned by Agent 1)
- **Purpose:** Sector landing page — shows the ICP we understand their pains, maps concrete AI use cases, funnels to diagnostic call.
- **SEO role:** supporting (sector long-tail) + conversion assist
- **Funnel stage:** MOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | ai for marketing agencies | 150 (US) / 10 (GB) | n/a (US) | Ahrefs keywords-explorer-overview, 2026-07 |
| Secondary | ai for creative agencies | 100 (US) | 9 (US) | Ahrefs, 2026-07 |
| Secondary | ai for agencies | 150 (US) / — (GB) | 13 (US) | Ahrefs, 2026-07 |

> **Volume note:** this is a genuinely low-volume long-tail cluster (US primary 150/mo, GB ~10/mo, KD very low). Fine and expected for a sector landing — the page earns its keep on MOFU conversion assist and internal-linking, not head-term traffic. The high-volume neighbour "ai marketing" (broad, informational) is a different intent and is not the target here.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | IA pour agences de communication : production, créa, marges | AI for Marketing Agencies *(renders as `AI for Marketing Agencies \| AI Makers`, 37 — the `\| AI Makers` suffix is auto-appended by `layout.tsx` title template; do not hand-write it)* |
| Meta description (140–160 chars) | Transformation IA pour agences de communication et de publicité : accélérer la production créative, protéger les marges et former les équipes. Cas réels d'agences accompagnées. | AI for communication and creative agencies: ship production faster, protect your margins, and train your teams without diluting the craft. Real agency case work. *(155)* |
| H1 | L'IA pour les agences de communication : produire plus, sans diluer la créa | AI for communication agencies: more output, same creative standard |
| URL slug | /secteurs/agences-communication | /industries/ai-for-marketing-agencies |

## 4. Sections & content
Shared template: `src/app/secteurs/[slug]/page.tsx` · copy lives in `src/lib/secteurs.ts` (entry `agences-communication`).

### 4.1 — Hero
- **Component:** `src/app/secteurs/[slug]/page.tsx` (inline hero)
- **Fields:** badge, titre (H1), intro (answer-first, 2–3 sentences), illustration alt
- **Current (FR):** Badge « Agences & création ». Intro: Les agences vivent une pression double : des clients qui demandent plus vite et moins cher, et une IA qui produit déjà une partie du travail facturé. Les agences qui gagnent ne sont pas celles qui résistent…
- **Proposed (EN):**
  - **badge:** `Agencies & creative`
  - **h1:** `AI for communication agencies: more output, same creative standard`
  - **intro (answer-first):** `Agencies are caught between two pressures: clients who want it faster and cheaper, and AI that already produces part of the work they bill for. The agencies pulling ahead build AI into production before their competitors — and before their own clients do it in-house. We help them keep the art direction human while the grunt work moves to automatic.`
  - **illustration alt:** `AI for communication and creative agencies`
- **Rationale:** First two sentences name the sector's actual fear (clients internalising the work) and take a clear position — the anti-slop "genuine specificity" test. No canonical figures needed here; the hero is a positioning statement, not a stat wall.

### 4.2 — Douleurs — « Ce que vous vivez en ce moment »
- **Component:** `src/app/secteurs/[slug]/page.tsx` + `secteurs.ts:douleurs[]`
- **Fields:** douleurs[] — 4 pain bullets, written in the prospect's voice
- **Current (FR):** « Vos clients commencent à faire en interne avec ChatGPT ce qu'ils vous payaient hier » · « Les délais de production écrasent vos marges, brief après brief » …
- **Proposed (EN):**
  1. `Clients are starting to do in-house with ChatGPT what they paid you for last year.`
  2. `Production deadlines eat your margin, brief after brief.`
  3. `Your creatives fear AI instead of using it as leverage.`
  4. `Pitches now expect an AI angle you're improvising on the spot.`
- **Rationale:** Kept in the prospect's own voice, present tense, no hedging. Each names a distinct, agency-specific loss (revenue leakage, margin, talent anxiety, pitch gap) — this is the differentiator that keeps the page from reading like a generic sector template.

### 4.3 — Cas d'usage — « Ce que l'IA change concrètement chez vous »
- **Component:** `src/app/secteurs/[slug]/page.tsx` + `secteurs.ts:casUsage[]`
- **Fields:** casUsage[] — 4 cards {titre, description}
- **Current (FR):** Production créative accélérée · Réponse aux appels d'offres · Social media et déclinaisons · Veille et insights consommateurs
- **Proposed (EN):**
  - **Faster creative production** — `Generate, adapt and version campaign visuals per channel while your creatives keep the art direction. Production cycles cut, volume up, without a new hire.`
  - **Pitch and RFP response** — `Build recommendations, moodboards and territories in days rather than weeks, with teams that drive the AI instead of being caught out by it.`
  - **Social and multi-format versioning** — `Industrialise the multi-format, multi-platform declensions of one campaign, instead of rebuilding every asset by hand.`
  - **Consumer insight and watch** — `Track trends, conversations and competitor campaigns continuously to feed strategy and planning.`
- **Rationale:** Use cases are specific to agency workflow (art direction ownership, RFPs, asset versioning), not generic "content generation". This is the primary anti-cannibalisation lever vs the other 7 sector pages.

### 4.4 — Témoignages — « Dans votre secteur, avec nous »
- **Component:** `src/app/secteurs/[slug]/page.tsx` + `site-config.ts:clientLogos` (testimonials)
- **Fields:** temoinClients[] — client names referencing clientLogos testimonials: Shem's Publicité, ThinkONE
- **Proposed (EN):** REUSE — testimonials are published verbatims owned by `site-config.ts:clientLogos`. Render the same two clients (Shem's Publicité, ThinkONE) by name. If EN quote translations are needed, translate the published verbatims faithfully and tag `[to validate]` translation — do not paraphrase or invent new quotes.
- **Rationale:** Testimonials are a shared, single-source asset. This page only selects which clients appear; it does not own the quote copy.

### 4.5 — Formations liées — « Les formations les plus demandées dans votre secteur »
- **Component:** `src/app/secteurs/[slug]/page.tsx` + `src/lib/formations.ts`
- **Fields:** formationsLiees[] — formation slugs: creation-publicite-ia, acculturation-ia, vibe-coding
- **Proposed (EN):** Section label `The training most requested in your sector`. Cards link to the EN formation pages (copy owned by the formation batch): `AI for advertising creative` (creation-publicite-ia), `AI foundations` (acculturation-ia), `Vibe Coding` (vibe-coding). Anchor labels proposed here; card body owned by each formation page.
- **Rationale:** References sibling formation pages, no cloned copy.

### 4.6 — Related + CTA final
- **Component:** `src/components/shared/related-content.tsx`, `src/components/shared/cta-section.tsx`
- **Fields:** 3 related links (Transformation IA, Audit IA, blog comparatif) + CTA title/subtitle
- **Proposed (EN):**
  - **CTA title:** `Where do the non-billable hours go in your production?`
  - **CTA subtitle:** `30 minutes on your production chain — where the non-billable hours go, and the first workflows to automate. You leave with a plan whether you work with us or not.`
- **Rationale:** Sector-native CTA question (replaces the "What would AI change in your [X]?" noun-swap shared with 5 sibling pages) — anchored on the agency-specific non-billable-hours problem.

## 5. FAQ
Rendered via `src/components/shared/faq-accordion.tsx` + FAQPage JSON-LD (`src/lib/faq-schema.ts`).

| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | L'IA va-t-elle remplacer nos créatifs ? | Will AI replace our creatives? | No, but it changes their job. Art direction, the idea and the client relationship stay human. What changes is the time spent producing, versioning and adapting. Our training starts from your real campaigns so your creatives lead the AI, not the other way round. *(Owner of this Q — the "will AI replace X" answer is not repeated on other sector pages.)* |
| 2 | Par où commencer dans une agence ? | Where does an agency start? | With an audit of your production chain: where the non-billable hours go, which steps AI can speed up without touching quality. Then we train the teams on your own briefs and ship the first workflows into production. |
| 3 | Vous avez déjà travaillé avec des agences ? | Have you worked with agencies before? | Yes — communication and advertising agencies in France and Morocco, on creative production, automation workflows and training creative teams. Their testimonials are on this page. |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| See our full AI transformation approach | /ai-transformation | existing related link |
| Start with an AI audit | /audit-ia-entreprise | existing related link |
| AI for advertising creative (training) | /formation-ia-entreprise/creation-publicite-ia | formations liées |
| Book a free diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Et dans votre entreprise, l'IA change quoi ? » → /contact. Proposed EN: **`Where do the non-billable hours go in your production?`** (button: `Book a free 30-min diagnostic`)

## 8. GEO block
- **Answer-first paragraph (EN, 2–3 sentences):** `AI Makers helps communication and advertising agencies build AI into production — faster creative output, pitch and RFP preparation, multi-format versioning — while keeping art direction human. It audits the production chain, ships the first automation workflows, and trains creative teams on their own campaigns. Agency clients in France and Morocco, part of 50+ companies and 200+ systems deployed.`
- **llms.txt entry (EN):** `[AI for Marketing Agencies](https://aimakers.fr/secteurs/agences-communication) : how communication and creative agencies use AI to speed production and pitches without diluting the craft — audit, workflows, and team training.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| Sector pains & use cases as listed | src/lib/secteurs.ts (published FR page) |
| +50 companies / +200 systems deployed | public/llms.txt (canonical) |
| Client testimonials (Shem's Publicité, ThinkONE) | src/lib/site-config.ts clientLogos (published verbatims) |
| Agency clients in France + Morocco | src/lib/secteurs.ts FAQ (published) |

## Reconciliation applied
Applied from `seo-audit-report/secteurs--agences-communication.md` + `ai-slop-audit-report/secteurs--agences-communication.md` + both `_cross-page-findings.md`.

- **Double brand suffix (§2a):** stripped manual `| AI Makers` from Title field — now `AI for Marketing Agencies`, renders 37 chars via `layout.tsx` template.
- **Hero "X, not Y" de-stack (slop §1, inflating):** flattened "aren't the ones resisting — they're the ones building AI into production…" to the plain positive assertion "build AI into production before their competitors — and before their own clients do it in-house."
- **CTA-title noun-swap sameness (slop §3.3):** replaced "What would AI change in your agency?" with the sector-native "Where do the non-billable hours go in your production?" (this page is one of the ≥3 that break the shared noun-swap template).
- **Kept (PROTECT):** distinct agency use cases (art-direction ownership, RFP/moodboards, multi-format versioning); canonical +50/+200 figures; verified testimonials (Shem's Publicité, ThinkONE); FAQ Q1 canonical ownership; the shared GEO closer + "whether you work with us or not" (shared component, not cloned prose).
- **Left to engineering (not touched):** `/industries/` vs `/secteurs/` slug (§8 GEO cites live `/secteurs/…` — consistent); FR template chrome i18n; `<html lang>`. Meta description 155 chars — under ceiling, no trim.

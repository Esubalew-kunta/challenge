# Secteur : ESN & services IT — EN Content Master

## 1. Page header
- **Route (FR, live):** /secteurs/esn-services-it
- **Proposed EN slug:** /industries/ai-for-it-services (collection base /industries — hub slug owned by Agent 1)
- **Purpose:** Sector landing page — shows the ICP we understand their pains, maps concrete AI use cases, funnels to diagnostic call.
- **SEO role:** supporting (sector long-tail) + conversion assist
- **Funnel stage:** MOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | ai for software development | 400 (US) / 50 (GB) | 37 (US) | Ahrefs keywords-explorer-overview, 2026-07 |
| Secondary | ai for msp | 150 (US) | n/a | Ahrefs, 2026-07 |
| Secondary | ai for it services | 20 (US) | n/a | Ahrefs, 2026-07 |

> **Volume note:** "ESN" (société de services numériques) has no clean English search equivalent — the closest EN intents are software-development / MSP / IT-services firms, all low-volume long-tail ("ai for software development" 400 US is the best of a thin cluster; "ai for it services" is near-zero at 20). Low volume is expected and acceptable; this page is a conversion-assist landing for a French-market ICP, not an EN traffic play.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | IA pour ESN et sociétés de services IT : delivery, staffing, avant-vente | AI for IT Services & Software Firms *(renders as `AI for IT Services & Software Firms \| AI Makers`, 47 — `\| AI Makers` auto-appended by `layout.tsx` title template; do not hand-write it)* |
| Meta description (140–160 chars) | Transformation IA pour ESN et sociétés de services numériques : avant-vente accélérée, delivery outillé, consultants formés aux assistants de code. Références réelles dans le secteur. | AI for IT services and software firms: faster pre-sales, tooled-up delivery, consultants trained on code assistants. Real references in the sector. *(148)* |
| H1 | L'IA pour les ESN : livrer plus, staffer mieux, vendre autrement | AI for IT services firms: deliver more, staff smarter, sell differently |
| URL slug | /secteurs/esn-services-it | /industries/ai-for-it-services |

## 4. Sections & content
Shared template: `src/app/secteurs/[slug]/page.tsx` · copy lives in `src/lib/secteurs.ts` (entry `esn-services-it`).

### 4.1 — Hero
- **Component:** `src/app/secteurs/[slug]/page.tsx` (inline hero)
- **Fields:** badge, titre (H1), intro (answer-first, 2–3 sentences), illustration alt
- **Current (FR):** Badge « ESN / Services numériques ». Intro: Les ESN vivent un paradoxe : elles vendent de la transformation numérique et restent artisanales sur leurs propres process…
- **Proposed (EN):**
  - **badge:** `IT services & software firms`
  - **h1:** `AI for IT services firms: deliver more, staff smarter, sell differently`
  - **intro (answer-first):** `IT services firms live a paradox: they sell digital transformation and stay artisanal about their own process. Pre-sales, staffing, delivery notes, delivery itself — AI changes the economics of the day-rate model, and clients are starting to demand AI-augmented consultants. We install the internal systems and train your people, without pulling anyone off billable delivery.`
  - **illustration alt:** `AI for IT services firms and software vendors`
- **Rationale:** Names the specific tension of a services firm (day-rate economics, billable-consultant scarcity) and the "we don't touch your billable delivery" objection-handler. Distinct from consulting/market-research page (which is about analysis, not delivery/staffing).

### 4.2 — Douleurs — « Ce que vous vivez en ce moment »
- **Component:** `src/app/secteurs/[slug]/page.tsx` + `secteurs.ts:douleurs[]`
- **Fields:** douleurs[] — 4 pain bullets, written in the prospect's voice
- **Current (FR):** « Vos réponses aux appels d'offres mobilisent vos meilleurs profils pendant des jours, sans garantie de gain » …
- **Proposed (EN):**
  1. `Your RFP responses tie up your best profiles for days, with no win guaranteed.`
  2. `Clients ask for AI-trained consultants and your bench can't keep up.`
  3. `The day-rate model is eroding: what you bill at 5 days, AI does in 1.`
  4. `Delivery notes, staffing, bench management — your internal functions run like it's 2015.`
- **Rationale:** Pains unique to a services/staffing business: RFP cost, bench skills gap, day-rate erosion, internal ops lag. No overlap with the SME or agency pains.

### 4.3 — Cas d'usage — « Ce que l'IA change concrètement chez vous »
- **Component:** `src/app/secteurs/[slug]/page.tsx` + `secteurs.ts:casUsage[]`
- **Fields:** casUsage[] — 4 cards {titre, description}
- **Current (FR):** Avant-vente et appels d'offres · Consultants augmentés · Delivery et comptes rendus · Staffing et intercontrats
- **Proposed (EN):**
  - **Pre-sales and RFPs** — `Technical proposals, structured responses and estimates prepared in hours rather than days, from your real references.`
  - **Augmented consultants** — `Teams trained on code assistants (Claude Code, Cursor, Codex): a concrete commercial edge with clients who now require it.`
  - **Delivery and reporting** — `Meeting notes, project documentation and client reporting drafted as you go — consultants correct a first draft instead of starting from a blank page after every meeting.`
  - **Staffing and bench** — `Faster profile-to-mission matching, and bench time spent skilling up on AI rather than idle.`
- **Rationale:** Every use case is services-firm-specific (RFPs, code assistants, staffing, bench). Names the real code-assistant tools — first-hand specificity the slop audit rewards.

### 4.4 — Témoignages — « Dans votre secteur, avec nous »
- **Component:** `src/app/secteurs/[slug]/page.tsx` + `site-config.ts:clientLogos` (testimonials)
- **Fields:** temoinClients[] — client names referencing clientLogos testimonials: ESN Engit, Sage
- **Proposed (EN):** REUSE — render published verbatims (ESN Engit, Sage) by name from `site-config.ts:clientLogos`. Translate faithfully and tag `[to validate]` if EN quotes are needed; no new quotes.
- **Rationale:** Single-source testimonials; page selects clients only.

### 4.5 — Formations liées — « Les formations les plus demandées dans votre secteur »
- **Component:** `src/app/secteurs/[slug]/page.tsx` + `src/lib/formations.ts`
- **Fields:** formationsLiees[] — formation slugs: vibe-coding, acculturation-ia, go-to-market-sales
- **Proposed (EN):** Section label `The training most requested in your sector`. Cards: `Vibe Coding` (vibe-coding), `AI foundations` (acculturation-ia), `Go-to-market & sales with AI` (go-to-market-sales). Anchor labels proposed; card body owned by each formation page.
- **Rationale:** References sibling formation pages; no cloned copy.

### 4.6 — Related + CTA final
- **Component:** `src/components/shared/related-content.tsx`, `src/components/shared/cta-section.tsx`
- **Fields:** 3 related links (Transformation IA, Audit IA, blog comparatif) + CTA title/subtitle
- **Proposed (EN):**
  - **CTA title:** `Where does the day-rate model leak in your firm?`
  - **CTA subtitle:** `30 minutes on pre-sales, delivery and staffing — where AI moves the day-rate maths, and which consultants to train first. You leave with a plan whether you work with us or not.`
- **Rationale:** Sector-native CTA question (replaces the "What would AI change in your firm?" noun-swap that clashed verbatim with banque) — anchored on the day-rate economics that define a services firm.

## 5. FAQ
Rendered via `src/components/shared/faq-accordion.tsx` + FAQPage JSON-LD (`src/lib/faq-schema.ts`).

| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | Pourquoi une ESN ferait-elle appel à un cabinet IA externe ? | Why would an IT services firm hire an outside AI consultancy? | For the same reason your clients hire you: speed. Your people know how, but they're staffed at clients. We install the internal systems and train your consultants without pulling anyone off billable delivery. *(Owner of the "why hire an outside firm" Q.)* |
| 2 | Formez-vous les consultants aux assistants de code ? | Do you train consultants on code assistants? | Yes — that's our Vibe Coding programme: Claude Code, Cursor and Codex applied to real projects. Consultants trained on AI sell better and deliver faster; the maths on a day rate is quick. *(Owner of the code-assistant training Q.)* |
| 3 | Avez-vous des références dans les services IT ? | Do you have references in IT services? | Yes, including the IT services firm Engit — its president's testimonial is on this page. We also work with software vendors such as Sage. |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| See our full AI transformation approach | /ai-transformation | existing related link |
| Start with an AI audit | /audit-ia-entreprise | existing related link |
| Vibe Coding (code-assistant training) | /formation-ia-entreprise/vibe-coding | formations liées |
| Book a free diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Et dans votre entreprise, l'IA change quoi ? » → /contact. Proposed EN: **`Where does the day-rate model leak in your firm?`** (button: `Book a free 30-min diagnostic`)

## 8. GEO block
- **Answer-first paragraph (EN, 2–3 sentences):** `AI Makers helps IT services firms and software vendors put AI into pre-sales, delivery and staffing — and trains consultants on code assistants like Claude Code, Cursor and Codex — without pulling anyone off billable delivery. It installs the internal systems and skills up the teams that clients now expect to be AI-augmented. Sector references (Engit, Sage) among 50+ companies and 200+ systems deployed.`
- **llms.txt entry (EN):** `[AI for IT Services Firms](https://aimakers.fr/secteurs/esn-services-it) : how IT services and software firms use AI for pre-sales, delivery and staffing, and train consultants on code assistants — without touching billable delivery.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| Sector pains & use cases as listed | src/lib/secteurs.ts (published FR page) |
| +50 companies / +200 systems deployed | public/llms.txt (canonical) |
| Vibe Coding = Claude Code / Cursor / Codex | src/lib/secteurs.ts + formations (published) |
| Client testimonials (ESN Engit, Sage) | src/lib/site-config.ts clientLogos (published verbatims) |

## Reconciliation applied
Applied from `seo-audit-report/secteurs--esn-services-it.md` + `ai-slop-audit-report/secteurs--esn-services-it.md` + both `_cross-page-findings.md`.

- **Double brand suffix (§2a):** stripped manual `| AI Makers` from Title — now `AI for IT Services & Software Firms`, renders 47 chars.
- **Verbatim clause "reviewed by consultants instead of written from scratch" (slop §3.3, esn=conseil):** conseil KEEPS it; esn rewritten to its own delivery-note reality — "consultants correct a first draft instead of starting from a blank page after every meeting."
- **CTA-title noun-swap (slop §3.3, "your firm" clashed with banque):** replaced "What would AI change in your firm?" with the sector-native "Where does the day-rate model leak in your firm?" (one of the ≥3 native rewrites).
- **Kept (PROTECT):** named-tool specificity (Claude Code, Cursor, Codex — why this page scores Clean); day-rate/bench/intercontrat economics; "without pulling anyone off billable delivery" objection-handler; FAQ Q1/Q2 ownership; canonical +50/+200 figures; verified testimonials (Engit, Sage).
- **Left to engineering:** `/industries/` vs `/secteurs/` slug (§8 GEO cites live `/secteurs/…`); FR template chrome i18n; `<html lang>`. Meta 148 chars — under ceiling.

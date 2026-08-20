# Secteur : TPE & PME — EN Content Master

## 1. Page header
- **Route (FR, live):** /secteurs/tpe-pme
- **Proposed EN slug:** /industries/ai-for-small-business (collection base /industries — hub slug owned by Agent 1)
- **Purpose:** Sector landing page — shows the ICP we understand their pains, maps concrete AI use cases, funnels to diagnostic call.
- **SEO role:** supporting (sector long-tail) + conversion assist
- **Funnel stage:** MOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | ai for small business | 4,700 (US) / 400 (GB) | 55 (US) / 56 (GB) | Ahrefs keywords-explorer-overview, 2026-07 |
| Secondary | ai tools for small business | 1,600 (US) | 43 (US) | Ahrefs, 2026-07 |
| Secondary | ai for smb | 20 (US) | 39 (US) | Ahrefs, 2026-07 |

> **Volume note:** the strongest sector primary in the set — "ai for small business" at 4,700/mo US (KD55). Real head-term intent, worth the on-page focus. GB much smaller (400). "ETI/mid-market" has no clean EN search term, so the page leads on small-business/SME language.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | IA pour TPE et PME en France : par où commencer | AI for Small Business & SMEs *(renders as `AI for Small Business & SMEs \| AI Makers`, 40 — `\| AI Makers` auto-appended by `layout.tsx` title template; do not hand-write it)* |
| Meta description (140–160 chars) | Transformation IA pour TPE, PME et ETI françaises : automatiser les tâches répétitives, gagner des heures par semaine et former les équipes, sans équipe technique interne. | AI for small and mid-sized businesses: automate the repetitive work, win hours back every week, and train your team — no IT department, no big-company budget. *(154)* |
| H1 | L'IA pour les TPE et PME : des gains concrets, sans DSI ni budget de grand groupe | AI for small business: concrete gains, no IT team or enterprise budget |
| URL slug | /secteurs/tpe-pme | /industries/ai-for-small-business |

## 4. Sections & content
Shared template: `src/app/secteurs/[slug]/page.tsx` · copy lives in `src/lib/secteurs.ts` (entry `tpe-pme`).

### 4.1 — Hero
- **Component:** `src/app/secteurs/[slug]/page.tsx` (inline hero)
- **Fields:** badge, titre (H1), intro (answer-first, 2–3 sentences), illustration alt
- **Current (FR):** Badge « TPE / PME France ». Intro: Une PME n'a pas besoin d'un plan IA à trois ans : elle a besoin de gains visibles ce trimestre…
- **Proposed (EN):**
  - **badge:** `SMEs in France`
  - **h1:** `AI for small business: concrete gains, no IT team or enterprise budget`
  - **intro (answer-first):** `A small or mid-sized business doesn't need a three-year AI plan — it needs visible gains this quarter. Writing, quotes, follow-ups, reporting, customer service: AI takes the repetitive load while your people keep the trade. No IT department, no new hire, no jargon. Across our clients the measured average is 7 hours a week won back per trained employee.`
  - **illustration alt:** `AI for small and mid-sized businesses`
- **Rationale:** Answer-first and quarter-focused (not the "3-year roadmap" the buyer fears). Uses the canonical 7h/week figure from llms.txt as the concrete promise. Distinct from the ETI/enterprise framing on other pages — the whole angle is "no DSI, no big budget".

### 4.2 — Douleurs — « Ce que vous vivez en ce moment »
- **Component:** `src/app/secteurs/[slug]/page.tsx` + `secteurs.ts:douleurs[]`
- **Fields:** douleurs[] — 4 pain bullets, written in the prospect's voice
- **Current (FR):** « Vous savez que l'IA peut vous faire gagner du temps, mais vous ne savez pas par où commencer » …
- **Proposed (EN):**
  1. `You know AI could save you time, but you don't know where to start.`
  2. `Competitors already talk about AI and you feel the gap opening.`
  3. `No IT department, no tech team — every new tool turns into a project.`
  4. `Your people spend their days on work a machine would do better.`
- **Rationale:** Pains are the SME buyer's, not an enterprise CIO's: uncertainty, competitive anxiety, no tech resource. Deliberately different from the ESN/consulting pains (day-rate, delivery) to avoid sibling overlap.

### 4.3 — Cas d'usage — « Ce que l'IA change concrètement chez vous »
- **Component:** `src/app/secteurs/[slug]/page.tsx` + `secteurs.ts:casUsage[]`
- **Fields:** casUsage[] — 4 cards {titre, description}
- **Current (FR):** Administratif et back-office · Commercial et relation client · Rédaction et communication · Reporting et pilotage
- **Proposed (EN):**
  - **Admin and back office** — `Quotes, invoices, follow-ups, data entry: the repetitive tasks run automatically, with a human check where it counts.`
  - **Sales and customer relations** — `Meeting prep, call notes, personalised follow-ups and pipeline tracking: your reps sell instead of typing.`
  - **Writing and communication** — `Emails, proposals, web content and social posts produced faster, in your company's voice.`
  - **Reporting and steering** — `Your numbers consolidated and readable every week, without losing your Sundays to it.`
- **Rationale:** Cross-functional back-office use cases for a generalist SME — broad on purpose, unlike the deep-vertical pages. Concrete outputs (quotes, invoices, pipeline) keep it from being hollow.

### 4.4 — Témoignages — « Dans votre secteur, avec nous »
- **Component:** `src/app/secteurs/[slug]/page.tsx` + `site-config.ts:clientLogos` (testimonials)
- **Fields:** temoinClients[] — client names referencing clientLogos testimonials: Empruntis, ESN Engit
- **Proposed (EN):** REUSE — render published verbatims (Empruntis, ESN Engit) by name from `site-config.ts:clientLogos`. Translate faithfully and tag `[to validate]` if EN quotes are needed; no new quotes.
- **Rationale:** Single-source testimonials; page selects clients only.

### 4.5 — Formations liées — « Les formations les plus demandées dans votre secteur »
- **Component:** `src/app/secteurs/[slug]/page.tsx` + `src/lib/formations.ts`
- **Fields:** formationsLiees[] — formation slugs: acculturation-ia, microsoft-copilot, go-to-market-sales
- **Proposed (EN):** Section label `The training most requested in your sector`. Cards: `AI foundations` (acculturation-ia), `Microsoft Copilot` (microsoft-copilot), `Go-to-market & sales with AI` (go-to-market-sales). Anchor labels proposed; card body owned by each formation page.
- **Rationale:** References sibling formation pages; no cloned copy.

### 4.6 — Related + CTA final
- **Component:** `src/components/shared/related-content.tsx`, `src/components/shared/cta-section.tsx`
- **Fields:** 3 related links (Transformation IA, Audit IA, blog comparatif) + CTA title/subtitle
- **Proposed (EN):**
  - **CTA title:** `What would AI change in your business?`
  - **CTA subtitle:** `30 minutes to spot the tasks costing you the most hours, and the two or three quick wins to start with. You leave with a plan whether you work with us or not.`
- **Rationale:** SME-scale framing ("tasks costing you the most hours", "quick wins") — matches the buyer who wants results this quarter.

## 5. FAQ
Rendered via `src/components/shared/faq-accordion.tsx` + FAQPage JSON-LD (`src/lib/faq-schema.ts`).

| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | On est 30 personnes, est-ce que c'est pour nous ? | We're a team of 30 — is this for us? | Yes. Our SME clients run from 20 to 500 people. AI needs neither an IT department nor an enterprise budget: we start with the tasks costing the most hours, measure, then expand. The measured average is 7 hours a week per trained employee. *(Owner of the "is this for a company our size" Q.)* |
| 2 | Combien de temps avant de voir des résultats ? | How long before we see results? | First gains land in the first weeks — one training session is enough for teams to apply AI to daily tasks. For automations running in production, count on the first month. *(Owner of the "time to results" Q across sectors.)* |
| 3 | Nos données sont-elles en sécurité ? | Is our data safe? | It's framed from the start: tool choice, privacy settings, written usage rules for your teams. We set up environments where your data is never used to train the models. *(General data-safety answer owned here; regulated-sector pages carry their own compliance-specific version.)* |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| See our full AI transformation approach | /ai-transformation | existing related link |
| Start with an AI audit | /audit-ia-entreprise | existing related link |
| AI foundations training | /formation-ia-entreprise/acculturation-ia | formations liées |
| Book a free diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Et dans votre entreprise, l'IA change quoi ? » → /contact. Proposed EN: **`What would AI change in your business?`** (button: `Book a free 30-min diagnostic`)

## 8. GEO block
- **Answer-first paragraph (EN, 2–3 sentences):** `AI Makers helps small and mid-sized businesses adopt AI without an IT department or an enterprise budget — automating admin, sales follow-ups, writing and reporting. It starts with the tasks costing the most hours, ships automations into production, and trains the team. The measured average across clients is 7 hours a week won back per trained employee; 50+ companies, 200+ systems, 2,500+ people trained.`
- **llms.txt entry (EN):** `[AI for Small Business](https://aimakers.fr/secteurs/tpe-pme) : how SMEs adopt AI without a tech team or big budget — automate the repetitive work, win hours back, train the team. Average 7h/week per trained employee.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| 7h/week per trained employee · +50 companies · +200 systems · +2,500 trained | public/llms.txt (canonical) |
| SME size range 20–500 people | src/lib/secteurs.ts FAQ (published) |
| Sector pains & use cases as listed | src/lib/secteurs.ts (published FR page) |
| Client testimonials (Empruntis, ESN Engit) | src/lib/site-config.ts clientLogos (published verbatims) |

## Reconciliation applied
Applied from `seo-audit-report/secteurs--tpe-pme.md` + `ai-slop-audit-report/secteurs--tpe-pme.md` + both `_cross-page-findings.md`.

- **Double brand suffix (§2a):** stripped manual `| AI Makers` from Title — now `AI for Small Business & SMEs`, renders 40 chars via template.
- **Data-safety boilerplate (slop §2.6) — CANONICAL OWNER, KEPT AS-IS:** FAQ Q3 "data never used to train the models" is the designated generic owner for the collection. The 4 regulated sectors (sante, medecins, conseil, banque) carry sector-specific data facts and defer here; this page deliberately keeps the generic version.
- **CTA-title noun-swap (slop §3.3) — KEPT AS-IS:** this generalist page is the single keeper of the "What would AI change in your business?" frame; the sector-native rewrites happen on agences/esn/conseil.
- **"…instead of typing" (slop, shared with banque) — KEPT here:** "your reps sell instead of typing" stays on tpe-pme; the banque instance is varied instead.
- **Kept (PROTECT):** canonical 7h/week + 50/200/2,500 figures; verified testimonials (Empruntis, ESN Engit); FAQ ownership of company-size + time-to-results Qs. Reversible-pain rewrite from the slop report was NOT applied — the pains trace to published FR source and the suggested replacements would fabricate specifics.
- **Left to engineering (not touched):** `/industries/` vs `/secteurs/` slug (§8 GEO cites live `/secteurs/…`); FR template chrome i18n; `<html lang>`. Meta 154 chars — under ceiling.

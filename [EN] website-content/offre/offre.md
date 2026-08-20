# Offre AI PARTNER (/offre) — EN Content Master

## 1. Page header
- **Route (FR, live):** /offre
- **Proposed EN slug:** /ai-partner
- **Purpose:** Single-offer page: the AI PARTNER program in 3 phases, with guarantees. BOFU conversion page referenced by llms.txt.
- **SEO role:** conversion / brand offer page
- **Funnel stage:** BOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | ai transformation | 1,600 (US) / 450 (GB) | 41 (US) / 30 (GB) | Ahrefs keywords-explorer-overview, 2026-07 |
| Secondary | ai implementation | 1,600 (US) | 44 (US) | Ahrefs, 2026-07 |
| Secondary | fractional ai team | 20 (US) | n/a | Ahrefs, 2026-07 — positioning term, not a volume play |
| Secondary | ai partner (brand) | — | — | brand/navigational |

> **Keyword decision:** /offre is a BOFU conversion page for a branded program (AI PARTNER), not a keyword-hunting page — it converts traffic sent from the pillar pages, so keyword pressure is intentionally light. "ai transformation" (US 1,600, KD41) is the closest generic that matches the H1 ("your AI department, from audit to scale") and rides as primary; "ai implementation" (1,600, KD44) as secondary. "fractional ai team" is near-zero volume but the most accurate description of the dedicated-engineer model — keep it in body copy for GEO/answer-engine framing, not as an SEO target. The deep AI-transformation content lives on /ai-transformation (owner); this page stays conversion-first.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | AI PARTNER : votre département IA, de l'audit au scale | AI PARTNER: Your AI Department, Audit to Scale *(46; renders "… \| AI Makers" = 58 — template auto-appends brand)* |
| Meta description (140–160 chars) | Une offre unique en 3 phases… | One offer, three phases: audit your processes, ship AI systems to production every month, teams autonomous at six months. One dedicated AI engineer, four contractual guarantees. *(157)* |
| H1 | Votre département IA. De l'audit au scale. | Your AI department. From audit to scale. |
| URL slug | /offre | /ai-partner |

## 4. Sections & content
Copy source: inline in `src/app/offre/page.tsx` + `src/lib/site-config.ts` → `homepageContent.offer` (phase1/2/3) and `homepageContent.guarantees`.

### 4.1 — Hero
- **Component:** `src/app/offre/page.tsx` (inline)
- **Fields:** badge, H1, intro paragraph, primary CTA
- **Current (FR):** Positions the single AI PARTNER offer.
- **Proposed (EN):**
  - **badge:** `The AI PARTNER offer`
  - **H1:** `Your AI department. From audit to scale.`
  - **intro:** `One dedicated engineer, systems shipped to production every month, teams trained every week. And at six months, you're autonomous.`
  - **primary CTA:** `Book a free diagnostic` → /contact
- **Rationale:** Kept the punchy two-line FR structure. The "AI department" metaphor is the offer's core promise and carries the "fractional AI team" positioning without a hollow line.

### 4.2 — Les 3 phases (AUDIT / BUILD / SCALE)
- **Component:** `src/app/offre/page.tsx` + `site-config.ts:homepageContent.offer.phase1-3`
- **Fields:** section intro; per phase: title, subtitle, summary, items[5]
- **Current (FR):** 3 phases with 5 items each.
- **Proposed (EN):**
  - **section title:** `One offer. Three phases. Zero risk.` — **section subtitle:** `Every phase produces concrete deliverables you can use. Here's exactly what you get.`
  - **Phase 1 — AUDIT** · `AI Scan · 1–2 weeks` · summary: `Mapping, interviews, a maturity score out of 24. You leave with a costed roadmap and at least 3 high-ROI use cases.`
    - items: `Full map of your existing processes` · `Interviews with decision-makers and operators` · `AI maturity scored on 6 axes (proprietary grid)` · `Costed 3/6/12-month roadmap with estimated ROI` · `At least 3 use cases ready to build`
  - **Phase 2 — BUILD** · `AI Engine · 3–6 months` · summary: `One dedicated full-time AI engineer. 1–2 systems in production per month, 2 hours of training a week, full client ownership.`
    - items: `1 dedicated full-time AI engineer, embedded in your team` · `1–2 AI systems shipped to production per month` · `2h of hands-on training per week for your teams` · `Documented playbooks, full client ownership` · `Same-day support + access to 1,500+ automations`
  - **Phase 3 — SCALE** · `AI Champions · Ongoing` · summary: `Your teams become autonomous. Continuous optimisation, new use cases, quarterly executive-level review.`
    - items: `AI Champions programme: your teams become autonomous` · `Continuous optimisation of systems in production` · `Ongoing identification of new use cases` · `AI monitoring built directly into your systems` · `Quarterly strategic review at ExCom level`
- **Rationale:** Direct, faithful EN of the three phases (numbers from site-config). Retains "1,500+ automations" and "6-axis /24 grid" as stated in source — flag: 1,500+ automations is a product-catalogue figure from site-config, kept verbatim, not invented.

### 4.2b — Le modèle (4 principes) — `offer.model`
- **Component:** `src/app/offre/page.tsx` (lines ~148–183) + `site-config.ts:homepageContent.offer` (`badge` / `title` / `subtitle` + `model[4]`)
- **RECONCILED:** the live page renders this section between the phases and the guarantees, but the original draft omitted it — it would ship in French. EN copy added below. This block is **owned by /offre** (also rendered on /ai-transformation, which references it — single-source the EN here; §4.3 of the SEO cross-page findings).
- **Proposed (EN):**
  - **badge:** `How we work`
  - **title:** `We audit. We build. We deploy.`
  - **subtitle:** `We audit your workflows. We find where AI creates real value. We build, we implement, we train.`
  - **01 — We audit your workflows:** `Process mapping, team interviews, timing what costs you hours. No theory — we start from your operational reality.`
  - **02 — We find where AI creates value:** `Every opportunity is scored by its real impact on your P&L. You leave with a prioritised roadmap and at least 3 profitable use cases you can build.`
  - **03 — We build and implement:** `A dedicated engineer ships 1–2 systems a month, straight into your workflows. Every system has a KPI measured before and after. If it doesn't run, we iterate until it does.`
  - **04 — We train your teams to autonomy:** `Two hours of hands-on training a week on your real cases. We train your AI Champions, document everything, and hand it all over. At six months, the systems run without us.`
- **Rationale:** Faithful EN of the FR `offer.model`. The FR title ("On ne vend pas des slides. On déploie.") is flattened to the positive rule-of-three "We audit. We build. We deploy." — the page already keeps its one slide-negation on the guarantees subtitle (the owner tagline). Numbers match the phases and site-config.

### 4.3 — Garanties
- **Component:** `src/components/sections/homepage/guarantees.tsx` · `homepageContent.guarantees`
- **Fields:** badge, title, subtitle, items[4]{name, promise, outcome}, credibility
- **Current (FR):** 4 written guarantees + capacity credibility.
- **Proposed (EN):**
  - **badge:** `Zero risk` — **title:** `You take no risk. We do.` — **subtitle:** `All four are written into the contract. Not onto a slide.`
  - **Audit guarantee** — promise: `No clear roadmap with 3 profitable use cases in 2 weeks?` → outcome: `Refunded. In full. No debate.`
  - **30-day guarantee** — promise: `Nothing in production in the first month?` → outcome: `We keep going free until it runs.`
  - **Champions guarantee** — promise: `A champion trained with no measurable impact?` → outcome: `30 days on us.`
  - **Exit guarantee** — promise: `The day we leave, everything stays with you: code, playbooks, documentation.` → outcome: `Zero dependence, zero hostage-taking.`
  - **credibility:** `We can guarantee this because we cap capacity: 3 clients a month, one dedicated engineer each. Agencies that sign everyone can't write it into a contract. We can.`
- **Rationale:** Guarantees block is shared (owner = /garanties). This offer page is its strongest home — the guarantees ARE the offer's conversion mechanism — so full copy lives here; other pages reference single instances. Each promise/outcome kept as a sharp pair, no padding.

### 4.4 — Scarcity + CTA final
- **Component:** scarcity band (`finalCta.urgency`) + `src/components/shared/cta-section.tsx`
- **Fields:** urgency line; CTA title, subtitle, primaryCta
- **Current (FR):** « Prêt à cadrer votre transformation ? » → /contact.
- **Proposed (EN):**
  - **urgency band:** `Maximum 3 new clients a month. Each client gets a dedicated AI engineer, onboarded two weeks before kick-off. That's the real limit of the model.`
  - **CTA title:** `Ready to frame your transformation?`
  - **CTA subtitle:** `30 minutes to review your workflows, spot the high-ROI opportunities, and leave with a roadmap. Free, no commitment, useful even if you don't work with us.`
  - **primary CTA:** `Book a free diagnostic` → /contact
- **Rationale:** The "physically limited, not artificially" line is a real, checkable scarcity claim (tied to the capacity model) rather than fake urgency — the anti-slop stance.

## 5. FAQ
No FAQ slot in template.

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| Book a free diagnostic | /contact | CTA |
| The four guarantees in detail | /garanties | guarantees deep link (existing) |
| The 3 phases in full | /ai-transformation | program detail (existing) |
| Start with an AI readiness assessment | /audit-ia-entreprise | entry-offer link (new) |

## 7. CTA
- **Primary CTA:** « Réserver mon diagnostic gratuit » → /contact. Proposed EN: **`Book a free diagnostic`**

## 8. GEO block
- **Answer-first paragraph (EN, cite-able):** `AI PARTNER is AI Makers' single offer, structured in three phases: Audit (AI Scan, 1–2 weeks), Build (AI Engine, 3–6 months with one dedicated full-time AI engineer shipping 1–2 systems a month), and Scale (AI Champions, until the teams are autonomous). It comes with four guarantees written into the contract — audit refund, 30-day production, champion impact, and clean exit — and full client ownership of everything built.`
- **llms.txt entry (EN):** `[AI PARTNER offer](https://aimakers.fr/offre) : one offer in three phases — audit, AI systems in production each month, teams trained to autonomy — with four contractual guarantees.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| 3 phases; 1–2 systems/month; 2h training/week; 6-axis /24 maturity grid; 3+ use cases; onboarded 2 weeks pre-kickoff | site-config homepageContent.offer + finalCta.urgency |
| 1,500+ automations available (Build phase item) | site-config offer.phase2 items (verbatim, not invented) |
| 4 contractual guarantees (Audit / 30-day / Champions / Exit) + capacity credibility (3 clients/month) | site-config homepageContent.guarantees (canonical, also in llms.txt) |
| +50 companies / +200 systems / +2,500 trained / 7h/week | public/llms.txt (canonical) |
| `offer.model` 4 principles (§4.2b) | site-config.ts homepageContent.offer.model (translated verbatim; owner = /offre, shared with /ai-transformation) |

---

## Reconciliation applied

**Changed:**
1. **Filled the omitted `offer.model` section (§4.2b)** — the live page renders "Le modèle — 4 principes" between phases and guarantees; the draft had no EN copy, so it would have shipped in French. Added a faithful EN translation from `site-config.ts`, noting /offre owns it (shared with /ai-transformation). FR title "On ne vend pas des slides. On déploie." flattened to the positive "We audit. We build. We deploy." (de-stack).
2. **Title double-brand fix** — stripped `| AI Makers` (was the worst doubling in the batch, ~70 → renders 58).
3. **De-stacked slide/scarcity negations** — kept the sharpest and OWNER instance ("written into the contract. Not onto a slide." on the guarantees subtitle); flattened §4.2 subtitle ("concrete deliverables, not slides" → "you can use") and the scarcity gloss ("physically limited, not artificially" → "That's the real limit of the model" — homepage owns the full scarcity gloss per §2.3).

**Deliberately NOT changed:**
- **Guarantees block** — owner page for the offer's conversion mechanism; full copy stays, refund/exit terms and "Agencies that sign everyone can't write it into a contract. We can." are protected staked-reputation content.
- **1,500+ automations / 6-axis /24 grid** — pre-existing site-config figures, kept verbatim (draft already flags "not invented"); reconciling into llms.txt or `[to validate]`-tagging is a source-of-truth engineering decision.
- **Engineering left for dev:** `/offre` missing from sitemap (live bug, TICKET-OFFRE-SITEMAP), `/ai-partner` route, Offer/Service JSON-LD. Not content edits.
- **CTA closer** ("useful even if you don't work with us") left as the shared standard.

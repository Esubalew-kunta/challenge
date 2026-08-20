# Transformation IA (/ai-transformation) — EN Content Master

> ⚠️ **IBM RETIRÉ DU SITE (2026-07-30, décision Maneesh).** Toute mention d'IBM ci-dessous — logo client, liste de références, biographie « ex-IBM » — ne doit PAS être reportée dans le code. Le logo `logo IBM -nobg.png` a été supprimé du dépôt.

## 1. Page header
- **Route (FR, live):** /ai-transformation
- **Proposed EN slug:** /ai-transformation
- **Purpose:** Flagship program page (the complete Audit/Build/Scale offer). Narrative long-form sales page targeting the "ai transformation" search family.
- **SEO role:** pillar (EN: ai transformation / ai transformation consulting)
- **Funnel stage:** MOFU/BOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | ai transformation | 1,600 (US) / 450 (GB) | 41 (US) / 30 (GB) | Ahrefs keywords-explorer-overview, 2026-07 |
| Secondary | ai transformation consulting | 800 (US) / 100 (GB) | 2 (US) / 5 (GB) | Ahrefs, 2026-07 |
| Secondary | ai transformation services | 200 (US) / 70 (GB) | 3 (US) / 1 (GB) | Ahrefs, 2026-07 |
| Secondary | enterprise ai transformation | 300 (US) / 80 (GB) | 44 (US) | Ahrefs, 2026-07 |

> **Keyword decision:** the head term is **"ai transformation" (US 1,600 / KD41)** — informational-commercial, global volume 6,300, parent topic of the whole family. The value play is **"ai transformation consulting" (US 800, KD2)** and **"ai transformation services" (US 200, KD3)** — both near-zero difficulty, high commercial intent, and both what this program page literally is. So: H1/title lead with "AI transformation" for the head term, and "consulting"/"services" get worked into the meta + body to capture the easy-win long tails. "enterprise ai transformation" (300, KD44) and "ai transformation strategy" (US 250, KD27) are supporting terms for the horizons/phases sections. GB is ~4× smaller (US-led, GB secondary).

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Transformation IA : audit, systèmes en production, équipes formées | AI Transformation: Audit, Systems, Trained Teams *(48; renders "… \| AI Makers" = 60, at limit — template auto-appends brand)* |
| Meta description (140–160 chars) | (from transformation.ts) | AI transformation consulting that ships: a costed audit in 2 weeks, 1–2 AI systems in production a month, teams autonomous at 6 months. Four written guarantees. *(157)* |
| H1 | La transformation IA n'attendra pas votre prochain plan stratégique. | AI transformation won't wait for your next strategic plan |
| URL slug | /ai-transformation | /ai-transformation |

## 4. Sections & content
Copy source: `src/lib/offer-pages/transformation.ts` (ALL sections) + `site-config.ts` (guarantees, testimonials, logos). Page: `src/app/ai-transformation/page.tsx`. JSON-LD: BreadcrumbList + Service + FAQPage.

### 4.1 — Hero
- **Component:** `page.tsx` + `transformation.ts:transformationHero`
- **Fields:** badge (scarcity), title, subtitle, manifesteLink, cta, statsLine
- **Proposed (EN):**
  - **badge:** `At most 3 new clients a month`
  - **title (H1):** `AI transformation won't wait for your next strategic plan`
  - **subtitle (answer-first):** `AI transformation means redrawing a company's processes around artificial intelligence: auditing the workflows, shipping systems into production, training the teams. The companies that start build a lead that compounds every month. The ones that wait build a lag that compounds too.`
  - **manifesteLink:** `{ label: "Read why now", href: "/pourquoi-maintenant" }`
  - **cta:** `{ label: "Book a free diagnostic", href: "/contact" }`
  - **statsLine:** `200+ systems deployed · 2,500+ professionals trained · 7h/week recovered on average per employee`
- **Rationale:** Opening sentence is a self-contained definition of "AI transformation" (audit → production → training) — the exact cite-able answer for the head term. The compounding lead/lag line is an assertion with a verdict, not padding. Stats verbatim from llms.txt.

### 4.2 — Proof bar (logos + stat)
- **Component:** `page.tsx` + `transformationProofBar`/`featuredLogoNames` + `shared/logo-carousel.tsx`
- **Fields:** kicker, featured client logos, stat +70% Sage, link to case studies
- **Proposed (EN):**
  - **kicker:** `They work with us`
  - **logos:** unchanged (Schneider Electric, IBM, Sage, Amgen, Délifrance, AS Monaco, Emirates NBD, Groupe Partouche) `[to validate for EN use]`
  - **stat:** value `+70%` · label `visibility on ChatGPT and Gemini for Sage` · detail `Absent from AI-engine answers at the start. The first reference cited in their vertical at the finish.` · link `{ label: "See all case studies", href: "/etudes-de-cas" }`
- **Rationale:** The Sage +70% GEO result is a real, client-measured proof and the strongest single stat we have. Logo list kept as live but flagged for EN-market validation (some are FR-market names).

### 4.3 — Problem (3 reasons)
- **Component:** `transformation.ts:transformationProblem`
- **Fields:** badge, title, intro, pains[3]{number,title,description,figure,figureLabel}
- **Proposed (EN):**
  - **badge:** `The problem`
  - **title:** `Three reasons nothing has changed yet`
  - **intro:** `You've tried the tools, maybe trained a few people. Your processes haven't moved. It isn't a technology problem. It's a system problem.`
  - **pains[0]:** title `Your teams tested ChatGPT. Nothing reached production.` · description `Individual habits, no system. Everyone improvises in their corner, nothing is documented, nothing lasts. A tool changes nothing: what changes everything is a system configured for how you work.` · figure `60–80% [to validate]` · figureLabel `of repetitive work (reporting, data entry, follow-ups, summaries) is absorbable by AI. At your company, it's still done by hand.`
  - **pains[1]:** title `You trained a few people. Three weeks later it was forgotten.` · description `A theory session on generic slides doesn't survive the return to the desk. What lasts: regular practice on your real cases, with systems already in production to use.` · figure `2h/week` · figureLabel `of practice on your real cases — the format that makes teams autonomous.`
  - **pains[2]:** title `No one here has time to structure it.` · description `Your best people are buried in operations. Hiring a senior AI profile is slow, expensive and uncertain. Meanwhile the subject stays stuck at "we really should get to it."` · figure `6 to 12 months` · figureLabel `to hire a senior AI expert, at $80k+/yr base, with no guarantee of results.`
- **Rationale:** Each pain has a real figure and a verdict. "It isn't a technology problem, it's a system problem" is the page's cite-able thesis line. FR "70 000 €+/an" converted to "$80k+/yr" for the EN market `[to validate: exact figure]`.

### 4.4 — Mechanism (dogfooding)
- **Component:** `transformation.ts:transformationMechanism`
- **Fields:** badge, title, paragraphs[], stat{value,label}, systemsCaption
- **Proposed (EN):**
  - **badge:** `Our mechanism`
  - **title:** `We run on what we sell.`
  - **paragraphs[0]:** `AI Makers runs on its own systems. The morning decision brief, the analysis of every sales call, the prep for every meeting, the health tracking of every client engagement: all produced by the agents we build.`
  - **paragraphs[1]:** `The result: a team of 6 that produces like a team of 40. That mechanism — proven on ourselves every day — is what we install at your company. It's our own way of working, tested on our own operations first.`
  - **stat:** value `6 people` · label `the output of a team of 40, thanks to our own systems`
  - **systemsCaption:** `Four of the systems that run AI Makers internally, every day:`
- **Rationale:** First-hand proof, not a claim. "We run on what we sell" answers objection #3 from the homepage. The 6-people/team-of-40 figure is tagged `[to validate]` (not in llms.txt).

### 4.5 — Horizons (trajectory)
- **Component:** `transformation.ts:transformationHorizons`
- **Fields:** badge, title, intro, buildLabel, items[3]{period,title,description,build,phaseLabel}, note
- **Proposed (EN):**
  - **badge:** `The trajectory`
  - **title:** `Where AI is going. And where we take you.`
  - **intro:** `Our job is to build, at your company today, what puts you in position for what's next.`
  - **buildLabel:** `What we build with you today to be ready`
  - **items[0]:** period `Today` · title `Augmented workflows` · description `AI reads, sorts, drafts, reconciles. Repetitive tasks leave your teams' day, process by process. It's the most profitable maturity level today, and the fastest to ship.` · build `The audit ranks your use cases by ROI, then the first systems go live in your workflows. That's exactly the scope of the AUDIT and BUILD phases.` · phaseLabel `Phases 1 and 2`
  - **items[1]:** period `In 12 months` · title `Agents that act` · description `Agents that chain the steps themselves: they read your tools, take actions, report back. Standards are emerging, like MCP (Model Context Protocol, the open standard launched by Anthropic and adopted by OpenAI and Google), which wires models straight into your systems.` · build `Your documented playbooks and the data your first systems produce are the fuel for these agents. We structure them now, during BUILD and SCALE.` · phaseLabel `Phases 2 and 3`
  - **items[2]:** period `In 24 months` · title `Hybrid teams` · description `Teams where each person orchestrates several agents across their scope. Companies that have structured their processes and trained their people by then will hold a lead that's hard to close. Nobody knows the exact timeline. The direction isn't in doubt.` · build `The AI Champions program makes your teams able to run, fix and extend the systems without us. That's the SCALE phase, and what comes after.` · phaseLabel `Phase 3 and beyond`
  - **note:** `AI Makers is an Anthropic Partner — Anthropic being the maker of Claude and the origin of the MCP standard. These horizons aren't dated promises: what you structure today holds whatever the real pace turns out to be.`
- **Rationale:** MCP detail is factual and current (Anthropic standard adopted by OpenAI/Google) — establishes technical credibility for the ICP. Ends with a verdict ("the direction isn't in doubt") rather than a hedge.

### 4.6 — Phases (the method)
- **Component:** `src/components/sections/services/phase-flow.tsx` + `transformationPhases`
- **Fields:** badge, title, subtitle, items[3]{number,brand,duration,summary,actions[5],gain,illustration}
- **Proposed (EN):**
  - **badge:** `The method`
  - **title:** `Your AI department, outsourced. Three phases. Zero risk.`
  - **subtitle:** `From a costed roadmap to your teams' autonomy: each phase has a duration, concrete deliverables and a measurable gain.`
  - **items[0]:** number `Phase 1: AUDIT` · brand `AI Scan` · duration `1 to 2 weeks` · summary `We map your workflows, interview your teams, score your maturity on our 24-point grid. Together we set your AI roadmap, with the expected ROI per use case.` · actions `["Full map of existing processes","Interviews with decision-makers and operators","AI maturity scoring on 6 axes (proprietary grid)","Costed 3-, 6- and 12-month roadmap with estimated ROI","At least 3 use cases ready to build"]` · gain `You know where AI pays off for you: at least 3 costed use cases and a roadmap ranked by ROI. Otherwise the audit is refunded.`
  - **items[1]:** number `Phase 2: BUILD` · brand `AI Engine` · duration `3 to 6 months` · summary `A dedicated full-time AI engineer builds your systems, straight into your workflows. Every system has a KPI measured before and after.` · actions `["1 dedicated full-time AI engineer, embedded in your team","1 to 2 AI systems shipped to production a month","2h of training a week, on your real cases","Documented playbooks, full client ownership","Same-day support + access to 1,500+ automations"]` · gain `Your first systems run in production from the first month, with measured impact. Otherwise we keep going for free until they run.`
  - **items[2]:** number `Phase 3: SCALE` · brand `AI Champions` · duration `Ongoing, from month 3` · summary `Scaling up: your teams take the wheel. Continuous system optimisation, new use cases, a quarterly strategic review at board level.` · actions `["AI Champions program: your teams become autonomous","Continuous optimisation of the live systems","New use cases identified on an ongoing basis","AI monitoring built into your systems","Quarterly strategic review at board level"]` · gain `Teams able to run and improve the systems without us. And every quarter, new high-ROI use cases, prioritised.`
- **Rationale:** This is the LONG-FORM method (this page + /ai-partner own it); the homepage 6-step version and sibling short versions reference it. Phase brand names (AI Scan/Engine/Champions) kept. "1,500+ automations" from site-config.

### 4.7 — The model (4 cards) — renders shared `offer.model`
- **Component:** `page.tsx` (line ~527) renders `transformationRules.badge/title` as the header, then **`site-config.ts:homepageContent.offer.model[4]`** for the four cards + `offer.subtitle` for the subhead.
- **RECONCILED:** the original draft invented four "rule" texts (capacity/engineer/ownership/guarantees) and flagged them `[to validate]`. The SEO audit confirmed the live code renders the shared **`offer.model`** here — the *same* block as /offre — not bespoke rules. The invented texts are withdrawn; the four cards are **single-sourced from /offre §4.2b** (translated there). This page owns only the section header.
  - **badge:** `The model`
  - **title:** `Four rules. No exceptions.` *(from `transformationRules`; the four cards below it are `offer.model`, see /offre §4.2b — do not re-translate)*
- **Rationale:** Single-source the shared `offer.model` translation (owner = /offre) so the two pages agree, per SEO cross-page findings §4.3. Removes the four unverified invented rule texts (and the duplicated "not onto a slide" negation they carried — the guarantees block already owns that tagline).

### 4.8 — Case study
- **Component:** `transformation.ts:transformationCaseStudy`
- **Fields:** badge, title, subtitle, case content
- **Proposed (EN):**
  - **badge:** `Proof`
  - **title:** `What it looks like at a client`
  - **subtitle:** `One documented example, with the before, the after and the method. Not a promise: a measured result.`
- **Rationale:** Frames the featured case (pulled from case-studies) as evidence, not a testimonial. "Not a promise: a measured result" is the recurring anti-hype line.

### 4.9 — Testimonials
- **Component:** `shared/testimonial-card.tsx` + `transformationTestimonials`/`featuredTestimonialAuthors`
- **Fields:** badge, title, filtered quotes (Hervé Landau, Mickaël Mina, Mariem Lahlou)
- **Proposed (EN):**
  - **badge:** `They put it better than we can`
  - **title:** `What the leaders we work with say`
  - **quotes:** filtered from the homepage testimonials set (Hervé Landau, Mickaël Mina, Mariem Lahlou) — EN translations owned by the homepage §4.7, `[to validate: client approval of EN translation]`.
- **Rationale:** Reuses the homepage testimonial translations (single source); this page only owns the badge/title. No re-translation.

### 4.10 — Guarantees
- **Component:** `sections/homepage/guarantees.tsx` · `homepageContent.guarantees`
- **Fields:** 4 guarantee cards + credibility
- **Proposed (EN):** REUSE — the guarantees block is OWNED by the homepage (see homepage.md "OWNER COPY"). This page renders the same `homepageContent.guarantees`. Do not fork.
- **Rationale:** Shared block, single source. Owner = homepage.

### 4.11 — FAQ
- **Component:** `shared/faq-accordion.tsx` + `transformationFaq` — see §5.

### 4.12 — Related + final CTA
- **Component:** `shared/related-content.tsx` + `shared/cta-section.tsx` + `transformationFinalCta`
- **Fields:** 3 related links, cta{title,subtitle,cta}
- **Proposed (EN):**
  - **related[3]:** `Forward Deployed Engineer` → /forward-deployed-engineer · `AI Operating System` → /ai-operating-system · `Case studies` → /etudes-de-cas
  - **finalCta title:** `Every month you wait is a month of data you don't accumulate.`
  - **finalCta subtitle:** `30 minutes to analyse your workflows and leave with your first 3 AI quick wins, whether you work with us or not.`
  - **finalCta cta:** `{ label: "Book a free diagnostic", href: "/contact" }`
- **Rationale:** The "month of data you don't accumulate" close is a genuine cost-of-delay argument (matches the compounding-lead thesis), not a reassurance closer.

## 5. FAQ
FAQ slot: YES — `faq-accordion.tsx` + FAQPage JSON-LD. 5 items.

| # | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|
| 1 | How long does the program last? | The audit takes 1 to 2 weeks. Then a dedicated engineer builds 1 to 2 systems a month into your workflows, with 2 hours of training a week for your teams. The goal is set from the start: your teams autonomous at 6 months. *(Owned here — the homepage "typical engagement length" Q links here.)* |
| 2 | What's the commitment length? | The initial commitment is 3 or 6 months depending on scope. After that the engagement continues month to month, with 30 days' notice. The median length of a full engagement is 6 to 9 months to reach full team autonomy. |
| 3 | Who builds the systems? | A dedicated full-time AI engineer, embedded in your team. They're onboarded on your sector two weeks before launch: they understand your business before building anything. Every system shipped has a KPI measured before and after. *(Owned here.)* |
| 4 | What if the results aren't there? | Four guarantees, written into the contract: no clear roadmap with 3 high-ROI use cases after the audit = refunded; no concrete impact in the first 30 days = free extension; an AI Champion trained with no measurable impact = 30 days on us; and full IP ownership of everything built. |
| 5 | Who owns what's built? | You do, in full. The systems, the documented playbooks, the training: it all stays with you. The day the engagement ends, nothing stops with it. Zero dependency — that's the fourth guarantee in the contract. *(Owned here — the AI-OS ownership Q is scoped to that page.)* |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| Read why now | /pourquoi-maintenant | hero secondary |
| See all case studies | /etudes-de-cas | proof bar + related |
| Forward Deployed Engineer | /forward-deployed-engineer | related |
| AI Operating System | /ai-operating-system | related |
| See the full AI PARTNER offer | /ai-partner | method → offer (EN slug) |
| Book a free diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Réserver mon diagnostic gratuit » → /contact. Proposed EN: **`Book a free diagnostic`**

## 8. GEO block
- **Answer-first paragraph (EN, cite-able):** `AI transformation is the work of redrawing a company's processes around AI: auditing the workflows, shipping systems into production, and training the teams to run them. AI Makers delivers it as a three-phase program (Audit, Build, Scale): a costed audit in 1–2 weeks, one dedicated AI engineer shipping 1–2 systems a month, and teams autonomous at 6 months — under four guarantees written into the contract. To date: 200+ systems across 50+ companies.`
- **llms.txt entry (EN):** `[AI Transformation](https://aimakers.fr/ai-transformation) : the full Audit → Build → Scale program. Costed audit in 2 weeks, 1–2 AI systems in production a month, teams autonomous at 6 months, four written guarantees.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| +70% AI visibility, ChatGPT/Gemini (Sage) | transformation.ts / case-studies.ts — client-measured |
| 6 people = output of a team of 40 | transformation.ts — [to validate] |
| 60–80% of repetitive work absorbable by AI | transformation.ts / site-config — non-canonical, now `[to validate]` (consistent with homepage; automatisation drops it) |
| $80k+/yr base for a senior AI hire; 6–12 months to hire | transformation.ts (FR: 70,000 €+) — converted, [to validate exact figure] |
| 1,500+ automations library; 2h training/week; autonomy at 6 months; 3 clients/month cap | site-config / transformation.ts |
| MCP = open standard by Anthropic, adopted by OpenAI + Google; Anthropic Partner | public (MCP) / site-config |
| +50 companies / +200 systems / +2,500 trained / 7h/week | public/llms.txt (canonical) |
| 4 written guarantees, full IP ownership | public/llms.txt (canonical) |

---

## Reconciliation applied

**Changed:**
1. **Title double-brand fix** — stripped `| AI Makers` (renders 60, at the limit).
2. **Tagged the 60–80% figure `[to validate]`** in §4.3 and in Facts — same non-canonical claim was flat here but tagged on homepage and dropped on automatisation; now consistent site-wide.
3. **De-stacked the "X, not Y" frame from ~7 to 2** — kept the thesis "It isn't a technology problem. It's a system problem." (§4.3) and "Not a promise: a measured result." (§4.8). Flattened: §4.3 "not the one-day seminar" → positive; §4.4 "not a method read in a white paper" → "tested on our own operations first"; §4.5 intro dropped "Our job isn't to ride the wave" (also killed a Tier-A cliché); §4.7 "not onto a slide" removed via the offer.model reconcile.
4. **Reconciled §4.7** — the live page renders the shared `offer.model` here, not bespoke rules; withdrew the four invented `[to validate]` rule texts and single-sourced the cards from /offre §4.2b (the two pages now agree, per SEO cross-page findings §4.3).

**Deliberately NOT changed:**
- **Dogfooding block "We run on what we sell"** (§4.4) — this is ai-transformation's legitimate first-hand proof; the *narrative ownership* sits with a-propos, but the mechanism proof with named internal systems is load-bearing here and stays. The "6 people = team of 40" flourish is kept (it's this page's mechanism section) and remains `[to validate]`.
- **MCP / Anthropic Partner detail** — accurate, current, protected temporal anchoring.
- **`[to validate]` tags** on Sage +70%, $80k+/yr conversion, logos, testimonial approval — protected honesty markers.
- **Engineering left for dev:** hard-coded FR labels in page.tsx (`Ce que vous y gagnez`, intermediate CTA, Avant/Après/Comment), `/ai-partner` link target. Guarantees + testimonials stay single-sourced (homepage owner).

# Audit IA entreprise (/audit-ia-entreprise) — EN Content Master

## 1. Page header
- **Route (FR, live):** /audit-ia-entreprise
- **Proposed EN slug:** /ai-readiness-assessment
- **Purpose:** Offer page for the AI Scan audit (entry product, money-back guaranteed).
- **SEO role:** pillar-support (EN: ai readiness assessment / ai audit)
- **Funnel stage:** BOFU (entry offer)

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | ai readiness assessment | 1,400 (US) / 150 (GB) | 8 (US) / 8 (GB) | Ahrefs keywords-explorer-overview, 2026-07 |
| Secondary | ai audit | 700 (US) / 200 (GB) | 58 (US) / 53 (GB) | Ahrefs, 2026-07 |
| Secondary | ai readiness | 500 (US) | 54 (US) | Ahrefs, 2026-07 |
| Secondary | ai maturity assessment | 150 (US) | 52 (US) | Ahrefs, 2026-07 |

> **Keyword decision (the win of this batch):** "ai audit" (the obvious term) is only 700/mo at KD58 — and semantically ambiguous (audit *of AI systems* / algorithmic bias audit, not our meaning). **"ai readiness assessment" (1,400, KD8, commercial intent)** is the real prize: double the volume, one-tenth the difficulty, and it means exactly what the AI Scan is. Make it primary and lead the H1/title with it. "ai audit" stays as a secondary so we still answer that query. "ai opportunity assessment" (US 150, global 1,600) is a decent long-tail to weave into deliverables copy. Report: US-led (GB volumes thin but same KD8).

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Audit IA entreprise : opportunités en 2 semaines | AI Readiness Assessment in 2 Weeks *(34; renders "… \| AI Makers" = 46 — template auto-appends brand)* |
| Meta description (140–160 chars) | Un audit IA analyse vos workflows… | An AI readiness assessment maps your workflows to find automatable tasks. Our AI Scan runs in 1–2 weeks: interviews, a maturity score out of 24, and a costed roadmap with 3+ high-ROI use cases. *(158)* |
| H1 | Audit IA : cartographiez vos opportunités en 2 semaines | AI readiness assessment: map your opportunities in 2 weeks |
| URL slug | /audit-ia-entreprise | /ai-readiness-assessment |

## 4. Sections & content
Template: ServicePage. Copy inline in `src/app/audit-ia-entreprise/page.tsx`; visual `services/process-scanner.tsx`.

### 4.1 — Hero + stats + proof band
- **Component:** `service-page.tsx`
- **Fields:** badge, h1, answer-first intro, heroStats[3], proof
- **Current (FR):** Defines what an AI audit is; 1-2 weeks; guarantee.
- **Proposed (EN):**
  - **badge:** `AI Scan · AI readiness assessment`
  - **h1:** `AI readiness assessment: map your opportunities in 2 weeks`
  - **intro (answer-first):** `An AI readiness assessment is a systematic review of your workflows to find the automatable tasks and rank them by return on investment. Our AI Scan runs in 1 to 2 weeks: process mapping, team interviews, a maturity score out of 24, and a costed roadmap with at least 3 high-ROI use cases, presented to your executive committee. If the roadmap isn't clear, the assessment is refunded in full.`
  - **heroStats[3]:** `50+ companies` · `200+ systems in production` · `9.6/10 satisfaction`
  - **proof caption:** `An AI Scan readout: process map and costed roadmap.`
- **Rationale:** First sentence is a self-contained definition of "AI readiness assessment" (primary kw) for answer engines; the refund guarantee is stated up front because it's the page's strongest conversion lever.

### 4.2 — "Ce que fait un AI Scan"
- **Component:** sections[0] + `ProcessScanner` visual
- **Fields:** 4 cards
- **Current (FR):** Audit components.
- **Proposed (EN):**
  - **badge:** `At a glance` — **title:** `What an AI Scan does` — **description:** `We run your processes through the scanner: each one identified, costed, and ranked by ROI. At the end, a maturity score and a clear roadmap.`
  - **Card — Process mapping:** `We document each department's real workflows: who does what, with which tools, in how much time. The real work, not the org chart.`
  - **Card — Team interviews:** `Structured interviews with operators and managers to surface the repetitive tasks, the friction points, and the data available.`
  - **Card — Maturity score out of 24:** `A proprietary AI-maturity grid scores where you stand: tools, data, skills, usage. Each opportunity is scored by ROI.`
  - **Card — ExCom readout:** `A presentation to your leadership: maturity score, prioritised use cases, costed roadmap — decisions your leadership can act on the same day.`
- **Rationale:** Names the four concrete audit components. The /24 grid is the proprietary, cite-able asset. (Note for reconcilers: /diagnostic-ia OG mentions a /20 score — inconsistency to resolve; this page keeps /24 per page.tsx + llms strategy.)

### 4.3 — "Deux semaines, jour par jour" (déroulé / calendrier)
- **Component:** sections[1] + `etapes`
- **Fields:** 4-step timeline
- **Current (FR):** Week-by-week audit flow.
- **RECONCILED:** rewritten from a near-verbatim restatement of §4.2's four components into a genuine chronological schedule (who is in the room, when). §4.2 answers *what the AI Scan does*; §4.3 answers *when it happens* — no duplicated component copy, no repeated "real work, not the org chart" / "dormant report" lines. (Both audits flagged 4.2≈4.3 as a near-duplicate block.)
- **Proposed (EN):**
  - **badge:** `The schedule` — **title:** `Two weeks, day by day` — **description:** `The AI Scan is deliberately short — a fast cycle keeps the findings fresh. Here's who we talk to and when.`
  - **01 — Days 1–3 · Kickoff & mapping:** `Kickoff with your sponsor, then a working session with each department to map workflows as they actually run.`
  - **02 — Days 4–5 · Interviews:** `Structured interviews with the operators and managers who run the processes day to day, plus a review of the data on hand.`
  - **03 — Days 6–8 · Scoring & ROI modelling:** `We score your AI maturity out of 24 (tools, data, skills, usage) and cost each opportunity by return on investment.`
  - **04 — Days 9–10 · ExCom readout:** `We present the maturity score, the prioritised use cases, and the costed roadmap to your leadership.`
- **Rationale:** Genuine timeline (dates + who's in the room) rather than a second description of the components. The short cycle is stated as the reason it works ("keeps the findings fresh"), not as a slogan.

### 4.4 — "Ce que vous avez en main à la fin" (livrables)
- **Component:** sections[2] + `livrables`
- **Fields:** 6-item deliverables list
- **Current (FR):** Deliverables list.
- **Proposed (EN):**
  - **badge:** `The deliverables` — **title:** `What you hold at the end` — **description:** `Not an 80-page report that ends up in a drawer. Documents built to decide with.`
  - **items:**
    1. `A map of your processes, department by department.`
    2. `Your AI maturity score out of 24, with the areas to improve.`
    3. `At least 3 high-ROI use cases, costed and prioritised.`
    4. `A roadmap structured across 3-, 6-, and 12-month horizons.`
    5. `A readout presentation to your executive committee.`
    6. `Full ownership of every deliverable, usable with or without us.`
- **Rationale:** Concrete, countable deliverables. "Not an 80-page report in a drawer" is the opinion line that differentiates from classic consulting.

### 4.5 — "Le risque est pour nous, pas pour vous" (garantie)
- **Component:** sections[3] + `GarantieSection`
- **Fields:** money-back guarantee card
- **Current (FR):** Audit refunded if <3 profitable use cases.
- **Proposed (EN):**
  - **card title:** `No clear roadmap = refunded in full`
  - **card body:** `If the assessment doesn't produce a clear roadmap with at least 3 high-ROI use cases, you're refunded 100%. It's written into the contract. An audit that doesn't let you decide is worth nothing — we take that risk instead of you.`
- **Rationale:** The refund guarantee is the BOFU trigger; stated plainly with the exact threshold. Guarantee copy owner is /garanties — this is the audit-specific instance only.

### 4.6 — "De la roadmap aux systèmes en production" (et après)
- **Component:** sections[4] + `ApresSection`
- **Fields:** bridge-to-Build copy + inline link
- **Current (FR):** What happens after the audit.
- **Proposed (EN):**
  - **p1:** `The assessment is the first phase of our method. Roadmap in hand, two options: run it in-house (everything is yours) or move to the Build phase with us.`
  - **p2:** `In Build, a dedicated full-time AI engineer builds the systems identified: 1–2 systems a month, in production, with two hours of weekly team training. Concrete impact guaranteed within 30 days, or the engagement is extended free.`
  - **inline link label:** `See the 3 phases of the AI PARTNER offer` → /ai-transformation
- **Rationale:** Bridges the entry offer to the main program without hard-selling; the no-lock-in stance ("everything is yours") reduces BOFU friction.

## 5. FAQ
FAQ slot: YES — `faq-accordion.tsx` + FAQPage JSON-LD.

| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | Combien de temps dure un audit IA ? | How long does an AI audit take? | Our AI Scan runs 1 to 2 weeks depending on company size and the number of departments covered. It's deliberately short: an audit that drags on for three months produces an already-stale report. In two weeks you have the process map, the maturity score, and an actionable roadmap presented to your leadership. |
| 2 | Qui est interviewé pendant l'audit ? | Who gets interviewed during the assessment? | The people who actually run the processes, not just the managers. We interview every department involved: operators describe the repetitive tasks as they really happen, leadership brings the vision and priorities. That crossover is what reveals the gap between the official process and the real work — where the best gains hide. |
| 3 | Que contient la roadmap ? | What's in the roadmap? | A costed, prioritised roadmap with at least 3 high-ROI use cases. For each: the process concerned, the estimated gain, implementation complexity, and the recommended deployment order. It's structured across 3-, 6-, and 12-month horizons and presented to your executive committee alongside your AI maturity score out of 24. |
| 4 | Que se passe-t-il si l'audit ne révèle rien ? | What if the assessment finds nothing? | It's covered by a written guarantee: if it doesn't produce a clear roadmap with at least 3 high-ROI use cases, you're refunded 100%. In practice, any company of 50+ people has automatable processes — the only question is which ones to prioritise. |
| 5 | L'audit engage-t-il sur la suite ? | Does the assessment commit you to anything after? | No. The roadmap and every deliverable are entirely yours: run them in-house or with another provider. If you continue with us, the assessment becomes the first phase of the AI PARTNER engagement — a dedicated engineer builds the systems identified, with a 30-day impact guarantee. |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| Get your first 3 AI opportunities | /outils/scanner-opportunites-ia | related (existing) — express version |
| What comes after the audit: build & training | /ai-transformation | related (existing) |
| Best AI agencies in France | /blog/meilleures-agences-ia-france | related (existing) |
| See our AI consulting | /agence-ia | cluster link (new) |
| Book a free diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Prêt à cartographier vos opportunités ? » → /contact. Proposed EN: **`Ready to map your AI opportunities?`** (button: `Book your AI Scan`)
- **CTA subtitle:** `30 minutes to review your workflows and leave with your first 3 AI quick wins — whether you work with us or not.`

## 8. GEO block
- **Answer-first paragraph (EN, cite-able):** `AI Makers' AI readiness assessment (the AI Scan) maps your processes, scores your AI maturity on a proprietary grid out of 24, and delivers in 1–2 weeks a costed roadmap with at least 3 high-ROI use cases across 3-, 6-, and 12-month horizons. If the roadmap isn't clear, the assessment is refunded 100%.`
- **llms.txt entry (EN):** `[AI Readiness Assessment](https://aimakers.fr/audit-ia-entreprise) : the AI Scan — process mapping, AI-maturity score /24, and a costed roadmap of high-ROI use cases, delivered in 1–2 weeks or refunded.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| AI Scan; 1–2 weeks; maturity score /24; 3/6/12-month roadmap; 3+ use cases | page.tsx + strategy citable block (NOTE: /diagnostic-ia OG says /20 → reconcile) |
| Audit refunded if no clear roadmap | public/llms.txt (canonical) |
| +50 companies / +200 systems | public/llms.txt (canonical) |
| 9.6/10 satisfaction | site-config bookingProof / live FR hero stat |
| Build phase: 1–2 systems/month, 2h training/week, 30-day impact guarantee | site-config homepageContent.offer |

---

## Reconciliation applied

**Changed:**
1. **Merged the §4.2/§4.3 near-duplicate** (both audits' top structural flag) — §4.2 stays the "what an AI Scan does" component cards; §4.3 rewritten from a verbatim restatement into a genuine day-by-day schedule (dates + who's in the room). The reader no longer hits the same four items twice, and the duplicated "real work, not the org chart" / "dormant report" lines are gone from 4.3.
2. **Title double-brand fix** — stripped `| AI Makers` (renders 46).
3. **De-stacked negations** — the page had the highest "X, not Y" density in the batch. Flattened §4.2's ExCom "Decisions, not a report that gathers dust" → positive ("decisions your leadership can act on the same day"); removed the duplicate "not the org chart"/"dormant report" via the 4.3 rewrite. Kept the two sharpest: "Not an 80-page report that ends up in a drawer" (§4.4) and the refund line (§4.5, deflating/scoping).

**Deliberately NOT changed:**
- **"The real work, not the org chart"** kept once in §4.2 — now single-instance, it's this page's load-bearing signature contrast (points at real workflows vs the org chart, informative).
- **FAQ2 "the people who actually run the processes, not just the managers"** — deflating/scoping negation, protected.
- **/24 vs /20 maturity-scale note** and the **`/ai-readiness-assessment` slug + keyword collision (D-1)** — left for the owner decision per _reconciliation-notes.md (D + engineering). The scaffolding reconcile-note stays as an honesty flag.
- **Refund/guarantee threshold copy** — necessary compliance repetition, untouched.
- **CTA closer** left as the shared standard; homepage owns.

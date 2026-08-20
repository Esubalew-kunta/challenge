# Calculateur ROI IA (/outils/calculateur-roi-ia) — EN Content Master

## 1. Page header
- **Route (FR, live):** /outils/calculateur-roi-ia
- **Proposed EN slug:** /ai-roi-calculator
- **Purpose:** Interactive ROI calculator (hours + € recoverable). Tool-magnet that captures "how much can AI save us" intent and routes to a free diagnostic.
- **SEO role:** tool-magnet (primary EN commercial-tool term)
- **Funnel stage:** TOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | ai roi calculator | 200 (US) / 40 (GB) · 350 global | 6 (US) | Ahrefs keywords-explorer-overview, 2026-07 |
| Secondary | ai roi | 700 (US) · 1,800 global | 44 (US) | Ahrefs, 2026-07 |
| Secondary | roi calculator | 20,000 (US) · 43,000 global | 26 (US) | Ahrefs, 2026-07 (broad reframe hook only) |

> **Keyword decision:** "ai roi calculator" is low-volume but an exact-match, KD6 term we can own outright, and the intent is perfect. "ai roi" (700, KD44) is the informational sibling — worth a heading/FAQ mention, not the H1. "roi calculator" (20k) is a generic finance query we won't beat and mostly won't match intent; keep it only as a natural phrase, not a target. Note for the reconcile pass: the live calculator computes in **euros** — a US-primary page may want a currency note or localisation. `[to validate placement]`

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Calculateur ROI IA : combien votre entreprise peut-elle gagner ? | AI ROI Calculator: hours & value you can recover *(48; renders 60 with `\| AI Makers` template suffix — brand not hand-written)* |
| Meta description (140–160 chars) | Estimez en 30 secondes les heures et les euros que l'IA peut libérer… | Estimate in 30 seconds how many hours and how much value AI can free up in your company — from headcount, salaries, and real adoption. Transparent math, conservative assumptions, free. *(157)* |
| H1 | Combien d'heures l'IA peut-elle libérer dans votre entreprise ? | How many hours could AI free up in your company? |
| URL slug | /outils/calculateur-roi-ia | /ai-roi-calculator |

## 4. Sections & content
Copy: inline `src/app/outils/calculateur-roi-ia/page.tsx`; calculator component `src/components/outils/roi-calculator.tsx`.

### 4.1 — Hero + calculator
- **Component:** `page.tsx` + `outils/roi-calculator.tsx`
- **Fields:** H1, intro, 4 sliders (headcount, avg gross salary, hours saved/week/person, real adoption %), 3 result labels (hours/year, valued €, FTE), calculator CTA
- **Current (FR):** 30-second estimate promise.
- **Proposed (EN):**
  - **badge:** `Free tool`
  - **H1:** `How many hours could AI free up in your company?`
  - **intro (answer-first):** `Move four sliders — headcount, average salary, hours saved per person per week, and how much of the team actually adopts the tools — and you get an annual estimate in three figures: hours freed, that time valued at loaded salary cost, and the full-time-equivalents it adds up to. Nothing is stored; the math runs in your browser and every assumption is spelled out below.`
  - **slider labels (EN):** `People affected` (5–500) · `Average gross annual salary` (€25k–€90k) · `Hours saved per week, per person` (1–10) · `Share of the team that actually adopts` (30–100%)
  - **result labels (EN):** `{X} h freed per year ({N} active employees)` · `{€} of working time valued (loaded salary)` · `{X.X} FTE reinvested in the business`
  - **slider helper (EN):** `Reference: teams we've trained recover 7 hours per week per person on average. The 4-hour default is deliberately conservative.`
  - **calculator CTA (in component):** `Validate this potential in 30 minutes` → booking (sub: `Free diagnostic, whether you work with us or not.`)
- **Rationale:** Answer-first paragraph describes exactly what the tool does — four inputs, three outputs — matching `roi-calculator.tsx`. The "runs in your browser, nothing stored" line is true (no capture in the component) and doubles as a trust signal. 7h/week is the canonical llms.txt figure, framed correctly as the client reference, not the default.

### 4.2 — "Our assumptions, in plain words"
- **Component:** `page.tsx`
- **Fields:** assumptions copy
- **Current (FR):** Transparent methodology.
- **Proposed (EN):**
  - **title:** `Our assumptions, in plain words`
  - **body:** `The estimate is deliberately cautious. We count 47 worked weeks a year, not 52. We value the freed hours at loaded salary cost — gross salary times roughly 1.45 for employer charges — divided across a 35-hour week, so an hour freed is priced the way it actually costs you. Only the share of the team you set as "adopting" is counted; the rest is treated as zero gain. The 4-hour weekly default sits well under the 7 hours a week our trained teams report, on purpose: an estimate you can defend beats one you have to walk back.`
- **Rationale:** Every number here maps to a real constant in code — 47 weeks (`HEURES_PAR_AN`), ×1.45 (`CHARGES_PATRONALES`), 35h week, adoption gating. No fabricated benchmark. The employer-charge multiplier is France-specific; flag for reconcile if the page localises to a US audience. `[to validate placement]` for ×1.45 in a US context.

### 4.3 — FAQ
- **Component:** `shared/faq-accordion.tsx` — see §5

### 4.4 — Related
- **Component:** `shared/related-content.tsx`
- **Fields:** cross-links
- **Proposed (EN):**
  - `AI opportunity assessment` → /outils/scanner-opportunites-ia — `Your 3 highest-ROI AI systems from three questions.`
  - `2-minute AI diagnostic` → /diagnostic-ia — `Your AI maturity score and a personalised action plan.`
  - `AI transformation, end to end` → /ai-transformation — `The full Audit / Build / Scale method behind these numbers.`
- **Rationale:** Sends estimate-intent onward to the assessment and the paid method. Anchors in EN.

### 4.5 — CTA final
- **Component:** `cta-section.tsx`
- **Proposed (EN):**
  - **title:** `Does the number get your attention?`
  - **subtitle:** `Thirty minutes to pressure-test it against your real processes, with the people who ship these systems into production.`
  - **primary CTA:** `Book a free diagnostic` → /contact
- **Rationale:** Matches FR intent ("Le chiffre vous interpelle ?") without slop; ties the abstract figure to a concrete next step.

## 5. FAQ
FAQ slot: YES — `faq-accordion.tsx` + FAQPage JSON-LD.

| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | D'où vient le chiffre de 7 heures gagnées par semaine ? | Where does the "7 hours a week" figure come from? | It's our own measured average across the teams we've trained — more than 2,500 professionals, over 200 systems in production. It's the reference point, not the calculator's default: the tool starts you at 4 hours a week on purpose, so the estimate stays conservative. Move the slider to match what you actually expect. |
| 2 | Ce calcul est-il fiable pour mon entreprise ? | Is this estimate reliable for my company? | It's an order of magnitude, not a quote. The math is transparent — 47 worked weeks, hours valued at loaded salary cost, only the adopting share counted — but your real number depends on your processes, which tasks you automate, and how fast the team picks it up. Treat it as a starting hypothesis to test in a diagnostic. |
| 3 | Les heures gagnées se transforment-elles vraiment en valeur ? | Do freed hours actually turn into value? | Only if the time is redirected. Freeing two hours a week is worth nothing if it evaporates into more meetings. The gain is real when those hours go to higher-value work — more clients served, faster delivery, projects that were stuck. That's why we express the result in full-time-equivalents too: it's capacity you choose where to reinvest. |
| 4 | Que se passe-t-il après le calcul ? | What happens after I run the numbers? | Nothing automatic — the tool captures no data and doesn't email you. If the figure is worth a conversation, book a free 30-minute diagnostic and we'll map which of your processes would actually produce those hours, and in what order. No aggressive follow-up. |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| 2-minute AI diagnostic | /diagnostic-ia | related tool |
| AI opportunity assessment | /outils/scanner-opportunites-ia | related tool |
| AI transformation, end to end | /ai-transformation | offer |
| Book a free diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Le chiffre vous interpelle ? » → /contact. Proposed EN: **`Does the number get your attention?`** (button: `Book a free diagnostic`)

## 8. GEO block
- **Answer-first paragraph (EN, cite-able):** `AI Makers' AI ROI calculator estimates the annual hours and monetary value a company can recover with AI. You set four inputs — headcount, average salary, hours saved per week per person, and adoption rate — and it returns hours freed per year, that time valued at loaded salary cost, and the full-time-equivalents added, using deliberately conservative assumptions (47 worked weeks, a 4-hour default versus the 7 hours a week AI Makers' trained teams report). It's free, runs client-side, and stores nothing.`
- **llms.txt entry (EN):** `[AI ROI Calculator](https://aimakers.fr/outils/calculateur-roi-ia) : estimate the hours and value AI can free up in your company — transparent, conservative math, no signup.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| 7h/week average (client reference); +2,500 trained; +200 systems | public/llms.txt (canonical) |
| Calculator default 4h/week; 47 worked weeks; loaded cost ×1.45; 35h week; FTE = hours/(35×47) | src/components/outils/roi-calculator.tsx (verified) |
| No data captured by the tool (client-side only) | roi-calculator.tsx — no fetch/capture (verified) |
| Euro output / ×1.45 employer charge = France-specific | roi-calculator.tsx — `[to validate placement]` for US localisation |

## Reconciliation applied
Applied from `seo-audit-report/outils--calculateur-roi-ia.md` (86/100, ship after localisation decision) + `ai-slop-audit-report/outils--calculateur-roi-ia.md` (Net −10, floor 0, best-in-batch, ship).

- **Double brand suffix (SEO §2a):** stripped hand-written `| AI Makers` from the Title field; copy is now `AI ROI Calculator: hours & value you can recover` (48 chars; renders 60 with the template suffix — at the cap).
- **No slop edits — clean by both audits.** KEPT (protected): the full method transparency ("47 worked weeks, not 52", "gross salary times roughly 1.45 for employer charges", "35-hour week", adoption gating), the honest "roughly 1.45" hedge, the admissions against interest ("the tool captures no data and doesn't email you", "an order of magnitude, not a quote", "worth nothing if it evaporates into more meetings"), the single scoping negation, and the 7h-reference-vs-4h-default framing (canonical llms.txt). This page "earns presence through method, not rhetoric" — protected.
- **Meta 157 within budget** — no trim. No GDPR item (calculator captures nothing).
- **Left for owner / dev (not copy):** euro output + France-specific ×1.45 employer-charge basis on a US-primary page — `[to validate placement]` tags kept intact; localise (currency note or locale) is a product/dev decision; `/outils/calculateur-roi-ia` vs `/ai-roi-calculator` slug/canonical (TICKET-EN-ROUTES).

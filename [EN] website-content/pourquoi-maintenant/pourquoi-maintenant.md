# Pourquoi maintenant (/pourquoi-maintenant) — EN Content Master

## 1. Page header
- **Route (FR, live):** /pourquoi-maintenant
- **Proposed EN slug:** /why-now
- **Purpose:** Sourced manifesto on AI cost collapse and the action window. Editorial trust asset.
- **SEO role:** trust / GEO citation asset (sourced numbers). Not a keyword page — an opinion piece that earns citations.
- **Funnel stage:** TOFU/MOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| — | (no keyword target — argument/manifesto page) | minimal | — | Ahrefs, 2026-07 |

> **Keyword decision — minimal keyword pressure by design.** This is an opinion/argument page, not an intent page. Its job is to take a position ("the cost of intelligence is collapsing; the window is now") and back it with real, cited numbers so that AI answer engines and journalists cite it. There is no commercial head term to target; forcing one would dilute the POV. Its SEO value is GEO citation of the sourced stats (÷280 inference cost, LLMflation, 88%→39% adoption-vs-impact) plus internal-link equity to /contact. Flagged to Agent 3: score on citation-worthiness, not on keyword coverage.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Pourquoi maintenant \| AI Makers | Why Now: The Cost of Intelligence Collapsed *(43; renders 55 with `\| AI Makers` template suffix — brand not hand-written)* |
| Meta description (140–160 chars) | Le coût de l'intelligence s'effondre : divisé par 280 en deux ans… | The cost of intelligence fell 280× in two years. What that changes for your company — and why the window to act is this quarter, not in three years. *(148)* |
| H1 | Pourquoi maintenant. | Why now. |
| URL slug | /pourquoi-maintenant | /why-now |

## 4. Sections & content
Copy source: `src/lib/offer-pages/manifeste.ts` (blocs 1-5, respirations, sources). Page: `src/app/pourquoi-maintenant/page.tsx`. FR copy is word-for-word validated; EN keeps every claim, source, and number 1:1.

### 4.1 — Hero
- **Component:** `manifeste.ts:manifesteHero`
- **Fields:** title, subtitle
- **Current (FR):** Minimal manifesto opening.
- **Proposed (EN):**
  - **title:** `Why now.`
  - **subtitle:** `The cost of intelligence is collapsing. This is what that changes for your company — with sourced numbers.`
- **Rationale:** Keeps the FR's flat, declarative open. No adjectives, no hype — the number does the work.

### 4.2 — Bloc 1 — the cost of intelligence
- **Component:** `manifesteBloc1`
- **Fields:** title + paragraph + stats[3]
- **Current (FR):** « L'intelligence coûte 280 fois moins cher qu'il y a deux ans. »
- **Proposed (EN):**
  - **index:** `01`
  - **title:** `Intelligence costs 280 times less than it did two years ago.`
  - **paragraph:** `In March 2023, GPT-4 cost $30 per million tokens. Sixteen months later, an equivalent model cost $0.15. The Stanford AI Index measures a 280× drop in inference cost over two years. a16z named it LLMflation: at equal performance, the price falls tenfold every year.`
  - **stats:** `÷280 — inference cost over 2 years (Stanford AI Index)` · `÷10 per year — at equal performance (a16z)` · `4% → 72% — success on real engineering tasks in one year (SWE-bench)`
- **Rationale:** The anchor stat and the page's most citable line. All three figures keep their named source inline — this is the GEO payload.

### 4.3 — Bloc 2 — processes become the variable
- **Component:** `manifesteBloc2`
- **Fields:** title + paragraphs
- **Current (FR):** Second argument block.
- **Proposed (EN):**
  - **index:** `02`
  - **title:** `When intelligence is nearly free, your processes become the variable.`
  - **para 1:** `Every process that rests on a human reading, deciding, and re-keying can be redrawn. At today's rates, analysing a ten-page document costs about three cents of API. An invoice processed by hand costs $12.88; automated, $2.78 (Ardent Partners).`
  - **para 2:** `The question is no longer what AI costs. It's what each month costs you while your processes stay manual.`
- **Rationale:** The reframe is the argument's hinge; kept the Ardent Partners invoice figures verbatim with citation.

### 4.4 — Respiration 1
- **Component:** `manifesteRespiration1`
- **Fields:** single stat + label
- **Current (FR):** « une facture traitée à la main, puis automatisée (Ardent Partners) ».
- **Proposed (EN):**
  - **value:** `$12.88 → $2.78`
  - **label:** `one invoice, processed by hand then automated (Ardent Partners)`
- **Rationale:** Breather stat — one number, one source.

### 4.5 — Bloc 3 — adoption vs. impact
- **Component:** `manifesteBloc3`
- **Fields:** title + paragraphs
- **Current (FR):** Third argument block.
- **Proposed (EN):**
  - **index:** `03`
  - **title:** `Nine companies in ten use AI. Fewer than four in ten see the effect.`
  - **para 1:** `88% of organisations use AI. Only 39% measure an impact on their bottom line (McKinsey, 2025). In France, 55% of small and mid-sized firms use generative AI, 17% regularly (Bpifrance) [to validate — cited Bpifrance source slug reads 31%; reconcile the figure/source before publish]. And Gartner predicts more than 40% of agentic-AI projects will be cancelled by end-2027 — cost, unclear value.`
  - **para 2:** `The dividing line isn't the technology; everyone has the same models. It's execution. The winners redraw their processes and measure. The losers buy licences and wait.`
- **Rationale:** Strong POV ("buy licences and wait" is a judgment, kept). Every figure carries its source. Note the French SMB stat is stated as Bpifrance per the FR copy — see §9 for the label/source cross-check to validate.

### 4.6 — Respiration 2
- **Component:** `manifesteRespiration2`
- **Fields:** single stat + label
- **Current (FR):** Breathing stat.
- **Proposed (EN):**
  - **value:** `88% → 39%`
  - **label:** `of organisations use AI; only 39% measure an impact on their bottom line (McKinsey, 2025)`
- **Rationale:** Restates the block's core gap as a standalone citable unit.

### 4.7 — Bloc 4 — compounding
- **Component:** `manifesteBloc4`
- **Fields:** title + paragraph + punchline
- **Current (FR):** « L'avance se compose. Le retard aussi. »
- **Proposed (EN):**
  - **index:** `04`
  - **title:** `A lead compounds. So does a lag.`
  - **paragraph:** `A system in production improves with every piece of data it handles: your playbooks sharpen, your teams level up, your data piles up where your competitors have none. Twelve months of lead can't be bought back with the same tool — you'd have to buy back the twelve months of learning too.`
  - **punchline:** `Next year is the most expensive line in your strategic plan.`
- **Rationale:** The compounding argument is the page's most distinctive claim; punchline kept as a hard assertion.

### 4.8 — Bloc 5 — CTA
- **Component:** `manifesteBloc5`
- **Fields:** title, body, ctaPrimary (/contact), ctaSecondary (/#methode)
- **Current (FR):** « Ce trimestre. Pas dans trois ans. »
- **Proposed (EN):**
  - **title:** `This quarter. Not in three years.`
  - **body:** `You don't need an 18-month plan to start. Two weeks of audit. At least three costed use cases. First systems in production within 30 days. Guaranteed in the contract.`
  - **ctaPrimary:** `Book my free diagnostic` → /contact
  - **ctaSecondary:** `See our method` → /#methode
- **Rationale:** Ends on commitment, not reassurance — no "whatever your situation" softener. Numbers match the guarantee model.

### 4.9 — Sources
- **Component:** `manifesteSources`
- **Fields:** 7 sourced references
- **Current (FR):** Explicit source list — GEO gold; keep and verify links in EN.
- **Proposed (EN):**
  - **title:** `Sources`
  - **items (labels EN, hrefs unchanged):**
    - `a16z, LLMflation (November 2024)` → https://a16z.com/llmflation-llm-inference-cost/
    - `Stanford AI Index 2025` → https://hai.stanford.edu/ai-index/2025-ai-index-report
    - `McKinsey, The State of AI (November 2025)` → https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai
    - `Bpifrance Le Lab (December 2025)` → https://lelab.bpifrance.fr/Etudes/31-des-tpe-et-pme-utilisent-l-ia-generative
    - `INSEE, ICT survey (2025)` → https://www.insee.fr/fr/statistiques/8616837
    - `Gartner (June 2025)` → https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027
    - `Ardent Partners / Medius` → https://www.medius.com/resources/guides-reports/ardent-partners-accounts-payable-metrics-that-matter/
- **Rationale:** The source list is the page's credibility engine and GEO asset — translate labels only, keep every href. All links to be re-checked live before publish (see §9).

## 5. FAQ
No FAQ slot in template.

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| Book my free diagnostic | /contact | CTA (existing) |
| See our method | /#methode | secondary CTA (existing) |

## 7. CTA
- **Primary CTA:** « Réserver mon diagnostic gratuit » → /contact. Proposed EN: **`Book my free diagnostic`**
- **Secondary CTA:** « Voir notre méthode » → /#methode. Proposed EN: **`See our method`**

## 8. GEO block
- **Answer-first paragraph (EN, cite-able):** `The cost of AI inference fell roughly 280× in two years (Stanford AI Index), a trend a16z calls LLMflation — at equal performance the price drops about tenfold a year. Yet while 88% of organisations use AI, only 39% measure an impact on their results (McKinsey, 2025). AI Makers argues the gap is execution, not technology: the companies that redraw their processes and measure pull ahead, and the lead compounds — which is why the time to start is this quarter, not in three years.`
- **llms.txt entry (EN):** `[Why Now](https://aimakers.fr/pourquoi-maintenant) : AI Makers' sourced manifesto on the collapse of AI costs (÷280 in two years) and why the window to act on processes is now.`

## 9. Facts used
| Fact / figure | Source | Status |
|---|---|---|
| ÷280 inference cost in 2 years | Stanford AI Index 2025 (cited in-page) | cited; verify link live |
| ÷10 / year at equal performance ("LLMflation") | a16z, Nov 2024 (cited in-page) | cited; verify link live |
| GPT-4 $30 → $0.15 per M tokens, 16 months | manifeste.ts copy | `[to validate]` — specific figure, verify against a16z/Stanford source |
| 4% → 72% on SWE-bench in one year | SWE-bench (cited in-page) | cited; verify link live |
| Invoice $12.88 → $2.78 | Ardent Partners / Medius (cited in-page) | cited; verify link live |
| 88% use AI / 39% measure impact | McKinsey State of AI, 2025 (cited in-page) | cited; verify link live |
| 55% of FR SMBs use gen-AI, 17% regularly | Bpifrance Le Lab (cited in-page) | `[to validate]` — Bpifrance link slug says "31% des TPE-PME"; reconcile the 55%/17% vs 31% figures + which source (Bpifrance vs INSEE) |
| >40% of agentic-AI projects cancelled by end-2027 | Gartner, June 2025 (cited in-page) | cited; verify link live |
| 3 cents API to analyse a 10-page document | manifeste.ts copy | `[to validate]` — illustrative estimate, no source cited |
| 2 weeks audit / ≥3 use cases / production in 30 days / guaranteed | guarantee model + site-config | canonical |

## Reconciliation applied
Applied from `seo-audit-report/pourquoi-maintenant.md` + `ai-slop-audit-report/pourquoi-maintenant.md` (batch 2 reconciliation).

- **Double brand suffix (SEO §2a):** stripped the hand-written `| AI Makers` from the proposed Title field (the `layout.tsx` template appends it once). Title copy is now `Why Now: The Cost of Intelligence Collapsed` (43 chars; renders ~55 with suffix).
- **Meta >160 (SEO §2b, 170→148):** trimmed the description by dropping "with sourced numbers"; kept the keyword frame + the "this quarter, not in three years" hook.
- **Bpifrance 55%/31% conflict (SEO 🟠 / notes §D):** added a visible inline `[to validate]` marker to the 55%/17% Bpifrance figure in Bloc 3 body copy so it is not presented as settled fact. Figure/source reconciliation remains an owner decision (Bpifrance 31% vs 55%/17% from INSEE).
- **KEPT (protected):** the full staked POV — "The winners redraw their processes and measure. The losers buy licences and wait.", "Next year is the most expensive line in your strategic plan.", both load-bearing negative-parallelism argument hinges (slop audit ships this page, Net −9), the 7-source block, and all `[to validate]` tags. No slop de-stacking (flat declarative H1, no trailer opener to thin).
- **Owner decisions (not copy):** GPT-4 $30→$0.15 price point + "3 cents API" estimate sourcing; `#methode` anchor target for EN build. Left as-is with existing tags.

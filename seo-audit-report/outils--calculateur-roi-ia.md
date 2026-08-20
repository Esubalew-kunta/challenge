# Calculateur ROI IA — /outils/calculateur-roi-ia (EN: /ai-roi-calculator)

**Source audited:** `[EN] website-content/outils--calculateur-roi-ia/outils--calculateur-roi-ia.md`
**Compared against:** `src/app/outils/calculateur-roi-ia/page.tsx`, `src/components/outils/roi-calculator.tsx`, `src/lib/faq-schema.ts`, `src/app/sitemap.ts`, `public/llms.txt`; Ahrefs (US/GB) 2026-07.
**See also:** `_cross-page-findings.md`

## Score: 86 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 22 / 25 |
| Factual & Claim Accuracy | 23 / 25 |
| On-Page SEO | 18 / 20 |
| Content Quality & Depth | 12 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Ship after one localisation decision. Every number in the copy maps to a real constant in the calculator code, there's no data capture (so no GDPR issue), the 7h figure is correctly framed as the client reference rather than the default, and the keyword is an exact-match KD6 term worth owning. The one open item is that the tool computes in euros with a France-specific employer-charge multiplier on a US-primary EN page.

**Tool matches its code: YES.** 4 sliders (headcount 5–500, salary €25k–90k, hours/week 1–10 default 4, adoption 30–100% default 70), 3 outputs (hours/yr, valued €, FTE), `HEURES_PAR_AN=47`, `CHARGES_PATRONALES=1.45`, 35h week, `FTE = hours/(35×47)`, and no fetch/capture — all verified in `roi-calculator.tsx`.

## Findings

### 🟡 Medium
1. **Currency + employer-charge basis are France-specific on a US-primary page.** The tool outputs euros and values freed time at gross × 1.45 (French employer charges) over 47 weeks — verified constants. The EN primary is "ai roi calculator" (200 US/KD6). A US visitor gets € figures and a French charge multiplier. The draft flags this `[to validate placement]` in §2 and §4.2. **Fix:** decide localisation — either a currency/charge note ("figures in €, French employer-charge basis") or a code-level locale for the EN build. Not a fabrication (the math is transparent and labelled), but it degrades the estimate's usefulness for the target market → 🟡.
2. **EN slug `/ai-roi-calculator` vs live route `/outils/calculateur-roi-ia`** — confirm canonical/slug at build.

### 🟢 Low
3. **"loaded salary cost, gross × roughly 1.45" stated in body copy** — accurate to code, but keep "roughly" so it reads as an assumption, not a universal constant, especially outside France.

## What this page gets right
- **Every stated number traces to code — no fabricated benchmark.** 47 worked weeks (`HEURES_PAR_AN`), ×1.45 (`CHARGES_PATRONALES`), 35h week, adoption gating, FTE formula — the "our assumptions, in plain words" section maps 1:1 to `roi-calculator.tsx`. This is exactly the tools-page discipline (§9): the promise equals what the tool does.
- **Canonical figure handled correctly:** 7h/week is framed as the measured client reference (llms.txt), with the calculator's 4h default explicitly called out as deliberately conservative — no inflation, no confusion between reference and default.
- **No data capture → no GDPR exposure.** Verified: the component holds state in `useState`, no `fetch`, nothing stored. The "runs in your browser, nothing stored" copy is true and doubles as a trust signal.
- **Exact-match ownable keyword:** "ai roi calculator" 200/KD6 verified; "ai roi" (700/KD44) correctly demoted to FAQ/heading, "roi calculator" (20k) correctly kept as a natural phrase only, not a target.
- **FAQ is FAQPage-eligible** (`faq-accordion.tsx` + `faqPageSchema`); 4 honest, answer-first Q&As including the "nothing is captured" point.
- **Route in sitemap** (`sitemap.ts:31`); title 58 chars, meta 157 — within budget (measured). Strong self-contained GEO block.

## Priority fixes (ranked)
1. **Decide currency/charge localisation for the US-primary EN page** (🟡, product/dev) — note or locale.
2. **Confirm slug/canonical** (🟡, dev).
3. **Keep "roughly 1.45" hedged** in final copy (🟢, trivial).

## Open questions
- For the EN (US-primary) build: localise the calculator to USD + US cost basis, or keep €/French basis with an explicit note?

## Cross-page candidates
- **FR-specific figures on US-primary EN pages** (€, ×1.45 charges here; possibly OPCO/Qualiopi framing elsewhere) — a systemic EN-localisation review; log in `_cross-page-findings.md`.
- **EN-slug vs live-route canonical decision** — systemic.

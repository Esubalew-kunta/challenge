# Automatisation IA de workflows — `/automatisation-ia-workflow`

**Source audited:** `[FR] website-content/automatisation-ia-workflow/automatisation-ia-workflow.md`
**Compared against:** `src/app/automatisation-ia-workflow/page.tsx`, `src/components/shared/service-page.tsx` (FAQPage schema), `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt`; Ahrefs (France, FR, 2026-07).
**See also:** `_cross-page-findings.md` (automation-intent ownership vs `/agence-ia`).

## Score: 90 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust Signals | 23 / 25 |
| Factual & Claim Accuracy | 22 / 25 |
| On-Page SEO | 17 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 14 / 15 |

## Verdict
Ship. One of the strongest pages in the batch: verified low-difficulty primary keyword, genuine first-hand stack judgments (n8n > Make > Zapier with reasons), canonical figures, and correct title-template handling. Two small issues: minor volume overstatements in the keyword table and a proposed meta that references a build tool the page doesn't use.

## Findings

### 🟡 Keyword table overstates two secondaries vs measured Ahrefs FR
§2 claims `automatisation workflow` = 320 and `automatisation des processus métier` = 320. Ahrefs FR (2026-07) returns `automatisation workflow` = **250** (KD 0) and `automatisation des processus métier` = **300** (KD 4). The primary, `automatisation des processus` = 600/KD 5, and `automatisation ia` = 900/KD 24 both check out exactly.
- **Why it matters:** the table is presented with a "Source: Ahrefs, France, 2026-07" stamp; two figures don't match a fresh pull. Small, but the audit regime treats stated volumes as claims.
- **Fix:** correct to 250 / 300, or re-pull and cite the exact date.

### 🟡 Proposed meta names "Notion" as a build brick, but the page builds on n8n + Claude
Proposed meta: `…Construit sur Claude, n8n et Notion. ROI mesuré dès le premier mois.` The draft itself flags (§Réconciliation) that the page copy builds on **n8n + Claude**; Notion is a knowledge tool, not this page's automation engine.
- **Why it matters:** the meta is the SERP promise; naming a build tool the body doesn't demonstrate is a small consistency gap. The current live meta is actually more accurate (n8n + Claude, 7h canonical).
- **Fix:** drop "Notion" from the proposed meta (→ "Construit sur n8n et Claude"), or keep the live meta.

### 🟡 Primary is the lower-volume variant (600) vs `automatisation ia` (900)
§2 targets `automatisation des processus` (600/KD5) as primary over the higher-volume `automatisation ia` (900/KD24).
- **Assessment:** defensible — the KD gap (5 vs 24) and exact-match H1 justify it, and `automatisation ia` is captured as a secondary. Not a defect, but worth a conscious confirmation given §5.2's warning about picking the low-volume variant. No copy change required.

## What this page gets right
- **Primary keyword verified and winnable:** `automatisation des processus` = 600/mo, KD 5 (Ahrefs FR) — real commercial intent at very low difficulty, exact-matched in the H1 and first line.
- **Title-template handling correct:** bare `Automatisation des processus par l'IA` (37 chars) + auto-appended ` | AI Makers` = ~49 rendered, brand once. Exactly right.
- **Answer-first opener is a self-contained definition** of "l'automatisation des processus par l'IA" with the canonical 7h figure inside the first 40 words — strongly citable for GEO.
- **First-hand practitioner signal, protected:** the stack section ranks n8n > Make > Zapier with honest trade-offs ("Honnêtement : rarement notre premier choix" for Zapier) and "un mauvais processus automatisé reste un mauvais processus." This is exactly the experience signal E-E-A-T rewards.
- **Integrity on figures:** the non-canonical 60-80% stat is deliberately excluded rather than shipped with a `[à valider]` tag on a commercial page; 7h, +200, +50 all trace to `public/llms.txt`.
- **Schema genuinely implemented:** `BreadcrumbList` + `Service` in `page.tsx`; `FAQPage` via `ServicePage`/`buildFaqSchema` fed 5 real Q&A. Route in `sitemap.ts`; internal links (`/ai-transformation`, `/outils/calculateur-roi-ia`, `/etudes-de-cas`, `/contact`) all valid.
- **FAQ Q4 (ROI measurement) correctly declared canonical owner**, with the ROI calculator pointing here.

## Priority fix list
1. **(🟡, trivial)** Correct the two overstated secondary volumes (250 / 300).
2. **(🟡, trivial)** Remove "Notion" from the proposed meta or keep the live meta.
3. **(🟡, none)** Confirm the deliberate choice of `automatisation des processus` over `automatisation ia` as primary.

## Open questions
- Keep the divergent proposed meta, or retain the live meta (which is more accurate and carries the 7h figure)?
- Coordinate with `/agence-ia`: that page answers "comment automatiser des processus métier avec l'IA" in full — this page should own that intent (cross-page).

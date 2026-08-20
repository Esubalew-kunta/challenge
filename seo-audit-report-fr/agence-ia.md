# Agence IA — `/agence-ia`

**Source audited:** `[FR] website-content/agence-ia/agence-ia.md`
**Compared against:** `src/app/agence-ia/page.tsx`, `src/components/shared/service-page.tsx` (+ `buildFaqSchema`), `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt`; Ahrefs Keywords Explorer (France, FR, 2026-07).
**See also:** `_cross-page-findings.md` (FAQ "comment automatiser…" ownership; title-template handling).

## Score: 89 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust Signals | 22 / 25 |
| Factual & Claim Accuracy | 23 / 25 |
| On-Page SEO | 17 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 13 / 15 |

## Verdict
Ship. This is a well-built commercial page: the primary keyword is verified, available and correctly targeted head-on; the title-template handling is correct (unlike the homepage draft); and all three claimed schema types are genuinely implemented. The one real issue is a FAQ answer that duplicates the automatisation page's territory.

## Findings

### 🟡 FAQ Q3 answers "comment automatiser des processus métier avec l'IA" in full — competes with the automatisation page
§5 Q3 gives a complete 4-step how-to answer, verbatim live. The draft acknowledges (§Réconciliation) that this is `/automatisation-ia-workflow`'s owned intent and keeps it anyway, linking out.
- **Why it matters:** a full, self-contained answer to a query another page owns creates FAQPage-rich-result competition between two of the site's own pages (cross-page rule §8.2). `automatisation des processus métier` is a real FR term (300/KD4) that the workflow page should win.
- **Fix:** trim Q3 here to a 1-2 sentence pointer ("En quatre étapes — cartographier, prioriser par ROI, construire, mesurer. Détail complet sur notre page automatisation.") and let `/automatisation-ia-workflow` own the full answer. Confirm against that page's FAQ (cross-page candidate).

### 🟡 Meta description has no explicit next step
Proposed: `Agence IA à Paris et Rabat : audit, agents et automatisation de vos processus métier. Un ingénieur IA dédié, des systèmes en production, 4 garanties.` (150 chars, in range). It ends on a benefit, not an action.
- **Fix:** trade a benefit for a CTA, e.g. end with "Diagnostic gratuit." — matches the funnel stage and the ruleset's "contains a next step" criterion.

### 🟡 `consultant ia` secondary volume (480) not independently confirmed
§2 lists `consultant ia` at 480 with no difficulty. Verified in this pass: `agence ia` 2 400/KD54, `agence intelligence artificielle` 500/KD51, `automatisation ia` 900/KD24 — all match. `consultant ia` was not pulled; treat its 480 as an unverified claim until checked.

## What this page gets right
- **Primary keyword is verified, available, and correctly targeted:** `agence ia` = 2 400/mo, KD 54 (Ahrefs FR) — a real commercial head term. The FR decision to target it front-on (title, H1, intro) rather than pivot away is sound, and the slug `/agence-ia` is the exact keyword.
- **Local intent handled correctly:** `agence ia` carries local intent; the page puts "Paris et Rabat" in the meta and schema without geo-suffixing every instance of the keyword — exactly per §5.3.
- **Title-template handling is correct:** the draft explicitly targets a 40-char bare string and notes the layout appends ` | AI Makers` → 52 rendered, ≤60, brand once. This is the correct model (and the right way to fix the homepage's mistake).
- **All three schema types genuinely implemented:** `BreadcrumbList` + `Service` in `page.tsx`; `FAQPage` via `service-page.tsx` `buildFaqSchema` (line 68-104), fed the 5 real FAQ items. Verified in code, not merely planned.
- **Route in sitemap; internal-link targets valid:** `/agence-ia` is in `sitemap.ts`; `/automatisation-ia-workflow`, `/audit-ia-entreprise`, `/contact`, and the three `/blog/*` articles all exist.
- **Canonical figures only:** +200 systèmes, +50 entreprises, 7h/semaine, 4 garanties — all trace to `public/llms.txt`. No Qualiopi/OPCO claim smuggled into the meta.
- **Real stack named** (n8n, Claude) and single-negation discipline held in the H1 — first-hand practitioner signal.

## Priority fix list
1. **(🟡, low effort)** Trim FAQ Q3 to a pointer so `/automatisation-ia-workflow` owns the "how to automate" answer.
2. **(🟡, low effort)** Add a next-step CTA to the meta description.
3. **(🟡, trivial)** Confirm the `consultant ia` 480 volume before relying on it.

## Open questions
- Should the "consultant ia" secondary be kept, given it wasn't reconfirmed here?
- Confirm `/automatisation-ia-workflow` carries the canonical full answer to "comment automatiser des processus métier avec l'IA" so this page can safely trim.

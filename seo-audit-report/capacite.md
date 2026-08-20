# Capacité — /capacite (EN draft → proposed /capacity)

**Source audited:** `[EN] website-content/capacite/capacite.md`
**Compared against:** `src/app/capacite/page.tsx`, `src/lib/metadata.ts`, `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt`
**See also:** cross-page candidates (end of file)

## Score: 88 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 23 / 25 |
| Factual & Claim Accuracy | 25 / 25 |
| On-Page SEO | 15 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Ship after meta fixes. A brand/trust page with correctly-declared minimal keyword pressure — no forced head term, which is the right call for a scarcity/model page. Canonical facts are exact and the copy ties the capacity cap to the guarantees honestly ("physical limit, not a commercial choice"). Only meta mechanics and the missing FAQ/schema surface pull points.

## Findings

### 🟡 Medium
1. **Title brand doubling.** Field `3 New Clients a Month, Maximum — AI Makers` (42) + template ` | AI Makers` → `... Maximum — AI Makers | AI Makers` (54, brand ×2). *Fix:* field = `3 New Clients a Month, Maximum`; template adds the brand.
2. **Meta description 184 chars — 24 over the 160 budget** (measured). *Fix:* cut to ≤160, e.g. end at "physically limited" and drop the final clause.

### 🟢 Low
3. **No FAQ block / only BreadcrumbList schema** (verified: `page.tsx` emits `breadcrumbSchema`, no FAQPage). The draft honestly states "No FAQ slot in template", so this is correct-as-is, not a defect — noted so a future FAQ isn't assumed live.
4. **`/capacity` route not yet in `sitemap.ts`** — EN-build engineering item (cross-page).

## What this page gets right
- "Minimal keyword" claim confirmed correct: this is a model-explanation page; inventing a head term would be forced (ruleset §5, name/trust-page exception).
- Canonical facts exact: "maximum three new clients per month", "dedicated AI engineer", "two weeks onboarding before kick-off" — all match `public/llms.txt`.
- Answer-first GEO paragraph is self-contained and citable.
- Advantage 03 correctly cross-links the guarantees as the reason the cap exists — consistent with `/garanties`.

## Priority fixes
1. De-duplicate brand in title field.
2. Trim meta description to ≤160.
3. EN build: create `/capacity` route + sitemap + hreflang.

## Open questions
- None material.

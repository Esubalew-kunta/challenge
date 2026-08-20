# Secteur — TPE & PME · route `/secteurs/tpe-pme`

**Source audited:** `[EN] website-content/secteurs--tpe-pme/secteurs--tpe-pme.md`
**Compared against:** `src/app/secteurs/[slug]/page.tsx`, `src/lib/secteurs.ts` (entry `tpe-pme`), `src/lib/metadata.ts`, `src/app/layout.tsx`, `src/lib/faq-schema.ts`, `src/app/sitemap.ts`, `src/lib/site-config.ts`, `public/llms.txt`. Ahrefs keywords-explorer-overview (US), 2026-07-15.
**See also:** shared cross-sector findings (double brand suffix, `/industries` slug, FR template chrome) in the final report.

## Score: 90 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 23 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 17 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 12 / 15 |

## Verdict
Ship after the two shared template fixes. The strongest page of the collection: a real head-adjacent primary ("ai for small business" 4,700/mo US, verified), the canonical 7h/week figure used correctly, and cross-functional use cases that stay concrete. Only the shared title/slug/i18n mechanics hold it back.

## Findings

### 🟠 High
1. **Double brand suffix in title.** Proposed `AI for Small Business & SMEs | AI Makers` will render as `… | AI Makers | AI Makers` because `layout.tsx` auto-appends `%s | AI Makers`. **Fix:** `metaTitle = AI for Small Business & SMEs` (28) → renders 40 chars.
2. **Proposed slug `/industries/ai-for-small-business` has no route** and contradicts the draft's own §8 GEO block citing `/secteurs/tpe-pme`. Same collection-wide slug issue. **Fix:** align §3 with §8 or ticket the migration.

### 🟡 Medium
3. **EN content in FR template chrome** (section H2s, breadcrumb, CTA button, `lang="fr"`) — shared i18n gap; page renders half-FR as written.
4. **GB volume is modest.** "ai for small business" GB ≈ 400 (draft claim); the page leads US-side. Fine — flagged only so the GB expectation is set correctly.

## What this page gets right
- 7h/week per trained employee is canonical (`public/llms.txt`: "7h/semaine récupérées en moyenne par collaborateur") — used verbatim, no inflation.
- Primary "ai for small business" verified at 4,700/mo US, KD55 (Ahrefs 2026-07) — exactly as drafted; distinct primary from all 7 siblings.
- Testimonials verified: Empruntis (line 500) and ESN Engit (line 535) both have `testimonial` objects.
- FAQ explicitly claims canonical ownership of "is this for a company our size", "time to results", and the general "is our data safe" answer — the regulated pages carry their own compliance-specific versions.
- SME size range "20 to 500 people" traces to the published FR FAQ.

## Priority fixes
1. Strip `| AI Makers` from `metaTitle` (🟠, trivial).
2. Resolve slug §3/§8 mismatch (🟠, coordination).
3. Template i18n ticket (🟡, shared engineering).

## Open questions
- The "general data-safety" answer is designated owner here; confirm the regulated sector pages (santé, médecins, banque) link to or clearly differentiate from it rather than each re-stating "data never used to train the models" as new (see cross-sector boilerplate note).

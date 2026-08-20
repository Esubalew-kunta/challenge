# Case study — Addictest · route `/etudes-de-cas/addictest` (EN proposed `/case-studies/addictest`)

**Source audited:** `[EN] website-content/etudes-de-cas--addictest/etudes-de-cas--addictest.md`
**Compared against:** `src/lib/case-studies.ts` (entry `addictest`), `src/app/etudes-de-cas/[slug]/page.tsx`, `src/lib/metadata.ts`, `src/app/layout.tsx` (title template `%s | AI Makers`), `src/app/sitemap.ts`, `public/llms.txt`.
**See also:** `_cross-page-findings.md` (shared template tickets referenced below).

## Score: 88 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 25 / 25 |
| Factual & Claim Accuracy | 25 / 25 |
| On-Page SEO | 15 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 9 / 15 |

## Verdict
Fix-first, then ship. Every figure, quote and client fact traces verbatim to `case-studies.ts`; nothing is fabricated. Two blockers are structural, not editorial: (1) the draft proposes a meta Title different from the H1, but the template feeds a single `caseStudy.title` field to both; (2) the pending testimonial must not go live until the FR quote is signed off. Both are already flagged inside the draft.

## Findings

### 🟠 High
1. **Title ≠ H1, but one field feeds both.** Draft proposes Title `Addictest scales student applications with AI` and H1 `Addictest industrialises its university applications with AI`. In `page.tsx`, `generateMetadata` uses `caseStudy.title` and the hero `<h1>` also renders `caseStudy.title` — one string cannot be two values. As written this cannot ship. Fix: add a `metaTitle` field to `CaseStudyDetail` (shared ticket TICKET-CS-META-TITLE) or make Title and H1 identical.
2. **Internal-link targets do not exist as routes yet.** Draft links to `/case-studies` and `/ai-automation` (money page). Live routes are `/etudes-de-cas` and `/automatisation-ia-workflow` (there is no `/ai-automation`). These are proposed EN-migration slugs; as-written the links 404 against current code. Fix: gate on the EN route set being built (TICKET-EN-ROUTES); until then map anchors to existing FR routes.
3. **Pending testimonial — do not publish until signed off.** `testimonial.pending: true` in source (Ziyad El Mouniri). Draft correctly tags `[to validate]`. Confirm the FR quote is client-approved before the EN goes live; template renders a "Témoignage en cours de validation" note while pending.

### 🟡 Medium
4. **Answer-first GEO paragraph has no dedicated field.** The proposed §8 cite-able paragraph maps onto `tldr` (the hero lead); there is no separate answer-first field in the template. Acceptable, but the producer should fold the citable framing into `tldr`, not treat it as a new block.
5. **Meta description does double duty only in part — length OK (150).** Within 140–160; no action.

## What this page gets right
- All three metrics (`~750`, `3`, `4`) and the TL;DR are carried verbatim from `case-studies.ts` — no rounding, no invention.
- Keyword decision is honest: case studies treated as branded/proof pages, generic "…case study" terms correctly called near-zero (consistent with a proof asset, not a keyword play).
- Real, checkable first-hand artefacts kept as proper nouns ("Addictest Match Index", "AI Writing"), a genuine E-E-A-T signal.
- Schema matches code: template emits `Article` + `BreadcrumbList` + `FAQPage`; the draft does not over-claim `Course`. FAQ block is FAQPage-eligible.

## Priority fixes
1. Resolve Title/H1 into one field or open TICKET-CS-META-TITLE (🟠).
2. Hold publication until the pending testimonial is signed off (🔴-adjacent contractual — do not ship the quote early).
3. Point internal links at routes that exist, or ship only once EN routes are live (🟠).
4. Fold the GEO answer-first framing into `tldr` (🟡).

## Open questions
- Is `/ai-automation` the confirmed EN slug for the automation money page, and when do EN case-study routes go live?
- Has Ziyad El Mouniri signed off on the (translated) quote?

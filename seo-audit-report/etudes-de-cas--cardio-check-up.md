# Case study — Cardio Check-up (DRAFT / noindex) · route `/etudes-de-cas/cardio-check-up` (EN proposed `/case-studies/cardio-check-up`)

**Source audited:** `[EN] website-content/etudes-de-cas--cardio-check-up/etudes-de-cas--cardio-check-up.md`
**Compared against:** `src/lib/case-studies.ts` (entry `cardio-check-up`, `status: "draft"`), `src/app/etudes-de-cas/[slug]/page.tsx` (draft → `robots: { index:false, follow:false }`), `src/app/sitemap.ts` (`getPublishedCaseStudies()` excludes drafts), `public/llms.txt`.
**See also:** `_cross-page-findings.md`.

## Score: 87 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 25 / 25 |
| Factual & Claim Accuracy | 25 / 25 |
| On-Page SEO | 15 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 8 / 15 |

## Verdict
Correctly held as a noindex draft — do not publish or index until FR validation clears. **Noindex handling verified against code:** `status: "draft"` makes `generateMetadata` return `robots:{index:false,follow:false}`, and `sitemap.ts` builds case-study entries only from `getPublishedCaseStudies()`, so the route is out of the sitemap. A draft that would index would be 🔴; this one is handled right. The draft also correctly holds its llms.txt entry ("[DRAFT — hold]"). Factually clean; the practitioner's identity is kept generic and tagged `[to validate]`.

## Findings

### 🟠 High
1. **Practitioner identity pending — keep anonymised until sign-off.** Source `client` holds a real name ("Dr Sana Amraoui"); the draft keeps the copy generic ("a leading cardiologist-electrophysiologist") and tags identity `[to validate]`. Correct. Publishing the name (or any patient-adjacent detail) before client approval would be 🔴. Hold with the noindex.
2. **Internal-link targets not built.** `/ai-automation` and `/case-studies` are proposed EN slugs (live: `/automatisation-ia-workflow`, `/etudes-de-cas`). Gate on TICKET-EN-ROUTES. Lower urgency while noindex.

### 🟡 Medium
3. **Meta description short (self-reported 137).** Below 140–160. Not urgent while noindex, but fix before the page is cleared for indexing.
4. **Answer-first GEO paragraph maps to `tldr`; §8 correctly marks the llms.txt entry as "DRAFT — hold".**

## What this page gets right
- Noindex + out-of-sitemap + llms.txt hold are all correct and consistent with the code — model handling of an unvalidated draft.
- Health-data discipline: "zero identifiable patient data", "certified health hosting", "secretary-checked cases surfaced to the doctor", medical-board advertising ban — all real, checkable constraints, none over-promised.
- All figures (8 databases, ~120 Holters, 2 languages, 12 sessions, 36 keywords) traced verbatim; no testimonial invented.
- Schema matches code (`Article`/`Breadcrumb`/`FAQPage`).

## Priority fixes
1. Keep the page noindex and the practitioner anonymised until client sign-off (🔴 if breached).
2. Before clearing for index: lengthen meta to 140–160 and point links at live routes (🟠/🟡).

## Open questions
- Timeline for client validation of names/figures/testimonial, after which the page can flip to `published`.

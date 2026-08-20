# Case study — ThinkONE · route `/etudes-de-cas/thinkone` (EN proposed `/case-studies/thinkone`)

**Source audited:** `[EN] website-content/etudes-de-cas--thinkone/etudes-de-cas--thinkone.md`
**Compared against:** `src/lib/case-studies.ts` (entry `thinkone`, `status: published`), `src/app/etudes-de-cas/[slug]/page.tsx`, `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt`.
**See also:** `_cross-page-findings.md`.

## Score: 89 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 25 / 25 |
| Factual & Claim Accuracy | 25 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 9 / 15 |

## Verdict
Near ship-ready. The two metrics (`4+` sessions, `6 months`) match source exactly; Title = H1 (no single-field conflict); meta description is in range (146). The only real work is the not-yet-built EN routes. This is the cleanest of the batch alongside Gepromed.

## Findings

### 🟠 High
1. **Internal-link targets not built.** `/ai-training-for-teams` (money page) and `/case-studies` are proposed EN slugs; live equivalents are `/formation-ia-entreprise` and `/etudes-de-cas`. There is no `/ai-training-for-teams` route today. Gate on TICKET-EN-ROUTES.

### 🟡 Medium
2. **Two metrics only (source has two) — grid renders 3 columns.** `page.tsx` maps `metrics[]` into a `sm:grid-cols-3` block; two items leave a visual gap. Not a content error, but flag the layout: either accept the two-column visual or add a third sourced metric (do not invent one).
3. **Answer-first GEO paragraph maps to `tldr`** (no dedicated field).

## What this page gets right
- Both metrics and the TL;DR carried verbatim; no fabrication, no testimonial invented (none in source).
- "It even challenges the briefs" and the senior-research-director agent framing are distinctive, first-hand and non-generic — real E-E-A-T.
- Keyword decision honest (training/skills case studies near-zero in EN; treated as proof feeding the training pillar).
- Schema matches code; FAQ (2 Q&A) is FAQPage-eligible.

## Priority fixes
1. Point internal links at live routes or ship with EN routes (🟠).
2. Decide on the two-vs-three-metric layout (🟡) — do not pad with an invented figure.

## Open questions
- When do EN case-study and training-pillar routes go live?
- Is a two-metric hero acceptable in the 3-column grid, or is a third *sourced* metric available?

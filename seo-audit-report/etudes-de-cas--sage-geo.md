# Case study — Sage / GEO · route `/etudes-de-cas/sage-geo` (EN proposed `/case-studies/sage-geo`)

**Source audited:** `[EN] website-content/etudes-de-cas--sage-geo/etudes-de-cas--sage-geo.md`
**Compared against:** `src/lib/case-studies.ts` (entry `sage-geo`, `status: published`, `inProgress: true`), `src/app/etudes-de-cas/[slug]/page.tsx`, `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt`.
**See also:** `_cross-page-findings.md`.

## Score: 87 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 25 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 15 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 9 / 15 |

## Verdict
Fix-first, then ship. This is the flagship GEO proof and it is factually careful: every baseline figure (447 prompts, 55,000 impressions / 537 clicks, ~70% de-indexed) is traced to `case-studies.ts` and tagged `[to validate]` because the mission is `inProgress`. The one blocker is the Title≠H1 single-field conflict. Note the client is named `Sage` in the data (`client`/`cardTitle`/logo) but the draft keeps the copy anonymised ("a leading business-management software vendor") — that is internally consistent and safe.

## Findings

### 🟠 High
1. **Title ≠ H1, but one field feeds both.** Title `Becoming the AI-cited reference on e-invoicing` vs H1 `Becoming the reference the AIs cite on e-invoicing`. `caseStudy.title` feeds both the meta title and the hero `<h1>`. Not shippable as two values — align them or add `metaTitle` (TICKET-CS-META-TITLE).
2. **Internal-link targets not built.** `/case-studies` and `/seo-geo`: `/seo-geo` **does** exist in the sitemap (good), but `/case-studies` is a proposed EN slug (live hub is `/etudes-de-cas`). Gate on TICKET-EN-ROUTES.

### 🟡 Medium
3. **`inProgress` figures are a baseline, not an outcome — keep the framing.** Draft is correct: metrics describe the starting point, and the last system visual keeps "measurement in progress". Ensure the published page does not later present the 55k/537 baseline as a *result*. Tracked, confirm on sign-off.
4. **Meta description at the floor (self-reported 140).** Within range but at the minimum; a few more chars of specificity would help CTR.
5. **Answer-first GEO paragraph maps to `tldr`** (no dedicated field). Fold in rather than treat as a new block.

## What this page gets right
- Zero fabrication: no testimonial exists in source, and the draft explicitly refuses to invent one.
- Baseline numbers carried verbatim and every one tagged `[to validate]` pending measurement — exactly the discipline the methodology asks for.
- "Learned" line is a genuine method stance (GEO tools simulate; cross-check three sources), a strong first-hand E-E-A-T signal on a GEO page.
- Correctly feeds the `/seo-geo` money page as its anchor proof; schema (`Article`/`Breadcrumb`/`FAQPage`) matches code.
- `1 Sept. 2026` e-invoicing deadline is a real public fact, sourced as such.

## Priority fixes
1. Resolve Title/H1 (🟠).
2. Keep the baseline-vs-outcome framing explicit through to sign-off (🟡).
3. Point `/case-studies` anchor at a live route or ship with EN routes (🟠).

## Open questions
- Should the page name Sage explicitly (data holds the name and logo) or stay anonymised? The copy and the data currently disagree on disclosure.
- Confirm the baseline figures are cleared for public display while the mission is ongoing.

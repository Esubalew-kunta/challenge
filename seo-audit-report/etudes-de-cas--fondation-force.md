# Case study — Fondation Force · route `/etudes-de-cas/fondation-force` (EN proposed `/case-studies/fondation-force`)

**Source audited:** `[EN] website-content/etudes-de-cas--fondation-force/etudes-de-cas--fondation-force.md`
**Compared against:** `src/lib/case-studies.ts` (entry `fondation-force`, `status: published`, `inProgress: true`), `src/app/etudes-de-cas/[slug]/page.tsx`, `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt`.
**See also:** `_cross-page-findings.md`.

## Score: 88 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 25 / 25 |
| Factual & Claim Accuracy | 25 / 25 |
| On-Page SEO | 15 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 9 / 15 |

## Verdict
Fix-first, then ship. Factually clean: 100% crawlers blocked, 96% branded traffic, 448 clicks/month, 35 years — all verbatim from `case-studies.ts` and tagged `[to validate]` while `inProgress`. Title and H1 are identical here, so the single-field issue does not bite. The remaining items are the short meta description and the not-yet-built EN routes.

## Findings

### 🟠 High
1. **Internal-link targets partly unbuilt.** `/seo-geo` exists (good); `/case-studies` is a proposed EN slug (live hub `/etudes-de-cas`). Gate on TICKET-EN-ROUTES.

### 🟡 Medium
2. **Meta description short (self-reported 129 chars).** Below the 140–160 target; add specificity (e.g., the Nobel-board authority hook) to reach ~150 and improve SERP CTR.
3. **"Nobel laureate in medicine" kept generic — good, keep it that way.** The person is unnamed in source and the draft does not invent one; if a name is ever added it must be client-sourced (would be 🔴 if fabricated). Tracked as a guardrail, not a defect.
4. **Answer-first GEO paragraph maps to `tldr`** (no dedicated field).

## What this page gets right
- The whole story hinges on one checkable, first-hand fact — a robots.txt blocking GPTBot/ClaudeBot/PerplexityBot — kept exact. Excellent E-E-A-T.
- No testimonial invented (none in source).
- Every figure traced and `[to validate]`-tagged; "patronage" correctly chosen for *mécénat*, "Managing Director" for *Déléguée Générale*.
- Feeds `/seo-geo` as the second GEO proof alongside Sage; schema matches code (`Article`/`Breadcrumb`/`FAQPage`).

## Priority fixes
1. Lengthen the meta description to 140–160 (🟡).
2. Point `/case-studies` anchor at a live route or ship with EN routes (🟠).
3. Keep the Nobel laureate unnamed unless client provides the name (🟡 guardrail).

## Open questions
- Confirm the baseline figures are cleared for public display while the mission is ongoing.
- When do EN case-study routes go live?

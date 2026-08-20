# Case study — Delassus Group (DRAFT / noindex) · route `/etudes-de-cas/delassus` (EN proposed `/case-studies/delassus`)

**Source audited:** `[EN] website-content/etudes-de-cas--delassus/etudes-de-cas--delassus.md`
**Compared against:** `src/lib/case-studies.ts` (entry `delassus`, `status: "draft"`, `inProgress: true`), `src/app/etudes-de-cas/[slug]/page.tsx` (draft → `robots:{index:false,follow:false}`), `src/app/sitemap.ts` (drafts excluded), `public/llms.txt`.
**See also:** `_cross-page-findings.md`.

## Score: 86 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 25 / 25 |
| Factual & Claim Accuracy | 25 / 25 |
| On-Page SEO | 14 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 8 / 15 |

## Verdict
Correctly held as a noindex draft (also `inProgress`) — do not publish or index until FR validation clears. **Noindex verified against code** (same mechanism as cardio-check-up: draft → robots noindex/nofollow, and excluded from `sitemap.ts` via `getPublishedCaseStudies()`). llms.txt entry correctly marked "[DRAFT — hold]". Factually clean; scope figures (4,500 / 80,000t / 3 systems / 15 agents) traced and `[to validate]`-tagged.

## Findings

### 🟠 High
1. **Title ≠ H1, but one field feeds both.** Title `20 years of farm data, a data platform, and AI agents` vs H1 `…and business AI agents`. `caseStudy.title` feeds both meta title and hero `<h1>` — align them or add `metaTitle` (TICKET-CS-META-TITLE). Lower urgency while noindex, but fix before clearing.
2. **Client identity pending — keep as source until sign-off.** `[to validate]` on client approval (draft). Publishing the named client before approval would be 🔴. Hold with the noindex.
3. **Internal-link targets partly unbuilt.** `/plateforme-data-ia` **exists** in the sitemap (good); `/case-studies` is a proposed EN slug. Gate the hub link on TICKET-EN-ROUTES.

### 🟡 Medium
4. **Meta description short (self-reported 129).** Below 140–160; fix before clearing for index.
5. **`inProgress` framing correct** — metrics are scope/baseline, not claimed outcomes; keep it that way through sign-off.
6. **Three metrics, three systems** — matches source; grid fills cleanly.

## What this page gets right
- Noindex + out-of-sitemap + llms.txt hold all correct and code-consistent.
- The "no IT department, and doesn't want one" differentiator and the field-workshop prioritisation (end users scored the agents) are distinctive, first-hand, transferable — strong E-E-A-T.
- "Bronze layer delivered ahead of schedule" and Bronze/Silver/Gold architecture kept exact and traced; no testimonial invented (none in source).
- Feeds `/plateforme-data-ia` (a live route) as the data-platform anchor proof; schema matches code.

## Priority fixes
1. Keep noindex and client anonymity until sign-off (🔴 if breached).
2. Before clearing for index: resolve Title/H1, lengthen meta to 140–160 (🟠/🟡).
3. Confirm `/plateforme-data-ia` stays the EN target for the platform money page.

## Open questions
- Timeline for client validation, after which the page flips to `published`.
- Is the client to be named on publish, or kept as "a Moroccan agri-export leader"?

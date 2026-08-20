# Études de cas — hub /etudes-de-cas (EN: /ai-case-studies)

**Source audited:** `[EN] website-content/etudes-de-cas/etudes-de-cas.md`
**Compared against:** `src/app/etudes-de-cas/page.tsx`, `src/lib/case-studies.ts`, `src/app/sitemap.ts`, `public/llms.txt`; Ahrefs (US/GB) 2026-07.
**See also:** `_cross-page-findings.md`

## Score: 86 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 22 / 25 |
| Factual & Claim Accuracy | 23 / 25 |
| On-Page SEO | 17 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Ship. A strong proof hub with the right trust posture: it lists only the 5 published cases (correctly excluding the 2 draft/noindex ones), states that client figures are attributed as client figures, and frames the collection ("read them for the method, not the logos") without retelling any single case. Keyword and indexability handling are clean. Confirm the case-metric attribution discipline carries to the child pages (out of this batch).

## Findings

### 🟡 Medium
1. **Case metrics are client-reported and inherit the child pages' validation status.** §9 notes card metrics are "client-reported; drafts pending validation". The hub itself states figures conservatively and attributes them — good — but the named-client results on the child pages (Gepromed, Sage, etc.) are the strict-standard claims (§4 of the ruleset). This hub is clean; the dependency is that each child case must carry its client-sourced numbers or a `[to validate]` tag. Confirm at the child-page audits, don't assume.
2. **EN slug `/ai-case-studies` vs live route `/etudes-de-cas`** — confirm canonical/slug + that the 5 published child routes resolve under whatever slug scheme ships.

### 🟢 Low
3. **Meta at 160-char ceiling** — trim a few chars of buffer against translation drift.

## What this page gets right
- **Correct index hygiene:** exactly 5 published cases shown (Addictest, Sage, Fondation Force, ThinkONE, Gepromed); the 2 draft cases (cardio-check-up, delassus) are excluded, matching `case-studies.ts` `status` and `getPublishedCaseStudies()` (which also gates the sitemap, `sitemap.ts:100`). No noindex case leaks into the hub.
- **Honest trust framing:** "where a figure comes from the client, we say so" and "read them for the method, not the logos" are real, citable POV — the right E-E-A-T stance for a proof hub, not manufactured superlatives.
- **No cannibalization:** teasers are short and route to child pages that own the full before/after metrics.
- **Keyword verified and apt:** "ai case studies" 200/KD39 confirmed — modest volume, exact intent, correctly framed as proof-support rather than a traffic pillar.
- **Route in sitemap;** title 58 chars, meta 160 — within budget (measured). Answer-first GEO paragraph is concrete (Gepromed six-person medtech, Sage cited by ChatGPT/Gemini) and citable.

## Priority fixes (ranked)
1. **Verify each published child case carries client-sourced or `[to validate]`-tagged metrics** (🟡, coordination with child-page audits).
2. **Confirm slug/canonical for the hub + 5 child routes** (🟡, dev).
3. **Trim meta buffer** (🟢, trivial).

## Open questions
- Are the case-card metrics (the specific before/after numbers) client-approved for publication in English, or still pending sign-off?

## Cross-page candidates
- **Client-reported case metrics attribution** — a site-level standard shared with the 7 `etudes-de-cas--*` child drafts; document the "attributed or `[to validate]`" rule once.
- **EN-slug vs live-route canonical decision** — systemic.

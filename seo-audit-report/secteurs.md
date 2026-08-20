# Secteurs — hub /secteurs (EN: /ai-by-industry)

**Source audited:** `[EN] website-content/secteurs/secteurs.md`
**Compared against:** `src/app/secteurs/page.tsx`, `src/lib/secteurs.ts`, `src/app/sitemap.ts`, `public/llms.txt`; Ahrefs (US) 2026-07.
**See also:** `_cross-page-findings.md`

## Score: 86 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 21 / 25 |
| Factual & Claim Accuracy | 23 / 25 |
| On-Page SEO | 17 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Ship. A model hub page: it earns its keep with a genuine, citable POV ("the highest-payback use case differs by sector because the bottleneck differs") instead of listing children, and routes to all 8 sector pages with short teasers that don't clone the child H1s. Keyword stance is honest about a thin category term. Only a minor cross-page figure inconsistency to resolve (6 vs 8 sectors elsewhere on the site).

## Findings

### 🟡 Medium
1. **"6 sectors" appears elsewhere on the site; this hub has 8.** `secteurs.ts` has 8 entries (matches this draft's 8 cards), but the `playbook-ia` draft's credibility block states "6 sectors covered" and llms.txt lists 6 sector names in prose. This is a site-level figure inconsistency, not an error in this draft. **Fix (cross-page):** standardise on 8 (the real count) wherever a sector count is stated. Owned in `_cross-page-findings.md`; this hub is the canonical source.

### 🟢 Low
2. **Meta at 158 chars — fine, but the sector list inside it may drift on translation.** No action needed now; just keep the buffer if edited.
3. **EN slug `/ai-by-industry` vs live route `/secteurs`** — confirm canonical/slug handling at build (systemic across EN drafts).

## What this page gets right
- **Genuine hub POV, citable:** the "bottleneck differs → first system differs" framing with three concrete contrasts (agency creative volume / medical admin / broker compliance) is a self-contained, liftable answer — not a list preamble. This is precisely what §9's hub rule asks for.
- **No cannibalization:** 8 teasers translated from each sector's real focus (`titre`/`casUsage`), kept short so child pages own the full use-case lists. Hub routes, doesn't re-answer.
- **Count verified:** 8 sectors in `secteurs.ts`, matching the 8 cards and 8 sitemap routes (`secteurEntries`).
- **Honest keyword call:** "ai use cases by industry" 90/KD64 verified — correctly flagged as low-volume and hard, with winnable intent pushed to the per-sector child pages. No inflated volume, no stuffing.
- **Route in sitemap** (`sitemap.ts:21` + per-sector entries); title 57 chars, meta 158 — within budget (measured). Strong answer-first GEO block naming all 8 sectors.

## Priority fixes (ranked)
1. **Reconcile the 6-vs-8 sector count site-wide** (🟡, low) — fix the `playbook-ia` "6 sectors" and llms.txt prose to 8.
2. **Confirm `/secteurs` vs `/ai-by-industry` canonical** (🟢, dev).

## Open questions
- Is the canonical sector count 8 everywhere, or are some sectors intentionally omitted from certain summaries (e.g. the "6" in the playbook)?

## Cross-page candidates
- **Sector-count consistency (6 vs 8)** — shared with `playbook-ia` and llms.txt; this hub is canonical owner.
- **EN-slug vs live-route canonical decision** — systemic across the batch.

# Blog — hub /blog (EN: /blog)

**Source audited:** `[EN] website-content/blog/blog.md`
**Compared against:** `src/app/blog/page.tsx`, `src/lib/blog.ts`, `src/content/blog/*.md`, `src/app/sitemap.ts`, `public/llms.txt`; Ahrefs (US) 2026-07.
**See also:** `_cross-page-findings.md`

## Score: 84 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 21 / 25 |
| Factual & Claim Accuracy | 22 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Ship. A blog index handled correctly: no head-term chasing, a real editorial POV ("field notes that pass our own slop audit, not content marketing"), and routing to posts that each own their term. The slug stays `/blog` (no needless change). The only caveat is a dependency on the content calendar for the actual article translations, which the draft scopes out honestly.

## Findings

### 🟡 Medium
1. **Article bodies are out of scope — index renders whatever exists.** §4.2 lists 8 post titles "for continuity only" and defers EN article copy to the content calendar. Correct scoping, but two consequences to confirm: (a) the index must not ship EN chrome around still-French post cards (mixed-language SERP/UX); (b) the 8 titles listed must match the posts `blog.ts` actually renders at build. Verify the EN index and EN posts ship together, or the hub gates language correctly.

### 🟢 Low
2. **Meta at 160-char ceiling** — trim buffer against translation drift.
3. **Post count is a moving target.** §9 says 8 posts (verified against `src/content/blog/*.md`); the index is dynamic, so no hardcoded count appears in copy — good. Just confirm no "8 articles" literal sneaks into the hero.

## What this page gets right
- **Correct no-keyword stance for an index:** the draft explicitly declines a head term and lets posts carry intent — the right call; ranking for an index page is a losing game. No stuffing, no forced primary.
- **Genuine, citable POV:** "This isn't a content-marketing blog… if a post can't survive our own slop audit, it doesn't go up" is an assertable stance that matches the actual post mix (inside-AI-Makers teardowns, honest comparatives, "this site is itself an AI product"). Adds hub value beyond a list.
- **Post inventory verified:** 8 posts in `src/content/blog/` match the 8 titles listed; slugs (meilleures-agences-ia-france, inside-ai-makers-*, ce-site-est-un-produit-ia, bienvenue, etc.) are real.
- **Slug unchanged (`/blog`)** — no canonical churn. Route in sitemap (`sitemap.ts` blogEntries); title 50 chars, meta 160 — within budget (measured).
- **No hub-level cannibalization:** the index frames and routes; individual posts (the "best AI agencies/training" comparatives) own their commercial terms.

## Priority fixes (ranked)
1. **Confirm EN index + EN posts ship together** (or language-gate the card list) so no mixed-language render occurs (🟡, coordination).
2. **Trim meta buffer** (🟢, trivial).

## Open questions
- Will the 8 posts be translated to EN in the same release as this index, or does the index go live pointing at French post bodies?

## Cross-page candidates
- **EN index ↔ EN child-content release coupling** — same pattern as the `formation-ia`/`secteurs`/`etudes-de-cas`/`outils` hubs: a hub shouldn't ship English while its children are still French. Document the release-coupling rule once in `_cross-page-findings.md`.

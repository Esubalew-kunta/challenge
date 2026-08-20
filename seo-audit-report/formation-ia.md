# Formation IA par ville — hub /formation-ia (EN: /ai-training-locations)

**Source audited:** `[EN] website-content/formation-ia/formation-ia.md`
**Compared against:** `src/app/formation-ia/page.tsx`, `src/lib/villes-formation.ts`, `src/lib/formations.ts`, `src/app/sitemap.ts`, `public/llms.txt`; Ahrefs (US/GB) 2026-07.
**See also:** `_cross-page-findings.md`

## Score: 82 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 20 / 25 |
| Factual & Claim Accuracy | 22 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Ship (light). A correctly deprioritised, FR-centric city hub. The keyword judgment is the strongest thing here: it refuses the 11,000-volume "ai training" head term as an off-ICP MOOC-intent trap and hands EN training intent to the programme hub — exactly right. It routes to its 11 city children and the 6-programme catalogue without cloning either, so it avoids hub-on-hub duplication. Two things to confirm: the EN owner route it defers to, and a light meta trim margin.

## Findings

### 🟡 Medium
1. **Deferred-to route `/ai-training-for-teams` is a sibling's proposed slug, not a live route.** §2/§6 hand EN "ai training for teams" intent to "the programme hub (`/ai-training-for-teams`, owned by formation-ia-entreprise)". That EN slug is not yet a route (live route is `/formation-ia-entreprise`). This is a legitimate cross-draft dependency, not an error, but the link target must resolve to whatever the programme hub actually ships as. Confirm with the formation-ia-entreprise audit/owner before wiring the anchor.
2. **Meta description is at the 160-char ceiling.** Draft claims *(160)* — at the limit, so any post-translation drift truncates. Trim ~5–8 chars of buffer (e.g. "and more" → cut) so it survives rendering.

### 🟢 Low
3. **EN slug `/ai-training-locations` vs live route `/formation-ia`.** The route stays `/formation-ia` (in sitemap, `sitemap.ts:20`); the EN slug is aspirational. Confirm whether EN gets a real slug swap or keeps the FR route, so canonical/hreflang is set correctly at build.

## What this page gets right
- **Best keyword call in the batch:** correctly reads "ai training" (11,000/KD65 verified) as self-serve/MOOC intent, not on-site enterprise training, and deprioritises the whole page for EN rather than chasing a number. This is exactly the §5 discipline (bare vs. modified term, intent flag) done right.
- **No cannibalization:** routes to `/formation-ia-entreprise` for the catalogue instead of re-describing the 6 programmes; city children own local content. Hub adds routing + a short honest frame.
- **Counts verified against code:** 11 cities in `villes-formation.ts` (paris, nice, strasbourg, montpellier, casablanca, lyon, toulouse, bordeaux, lille, nantes, marseille) and 6 programmes in `formations.ts` — both match the draft exactly.
- **Route in sitemap;** title 52 chars — within budget. Answer-first GEO paragraph names all 11 cities + the catalogue, citable and self-contained.
- **Canonical figure respected:** +2,500 trained sourced to llms.txt.

## Priority fixes (ranked)
1. **Confirm the programme-hub EN route** the anchors defer to (🟡, coordination) — align with the formation-ia-entreprise owner.
2. **Set the canonical/slug decision** for `/formation-ia` vs `/ai-training-locations` (🟢, dev).
3. **Trim ~8 chars of meta buffer** (🟢, trivial).

## Open questions
- Does the EN build keep `/formation-ia` or move to `/ai-training-locations`? (Affects canonical + all inbound internal links.)
- What EN slug does the programme hub actually ship as — `/ai-training-for-teams`, `/formation-ia-entreprise`, or other?

## Cross-page candidates
- **Hub↔hub training-intent split** (`/formation-ia` city hub vs `/formation-ia-entreprise` programme hub) — document the canonical owner of "ai training" EN intent once in `_cross-page-findings.md` so both hubs agree.
- **EN-slug vs live-route canonical decision** — systemic across every page proposing a new EN slug over an existing FR route.

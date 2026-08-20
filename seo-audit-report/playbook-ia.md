# Playbook AI-First — /playbook-ia (EN: /ai-playbook)

**Source audited:** `[EN] website-content/playbook-ia/playbook-ia.md`
**Compared against:** `src/lib/playbook-config.ts`, `src/lib/site-config.ts`, `src/app/playbook-ia/page.tsx`, `src/components/shared/lead-capture.tsx`, `src/app/sitemap.ts`, `public/llms.txt`; Ahrefs (US) 2026-07.
**See also:** `_cross-page-findings.md`

## Score: 74 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 16 / 25 |
| Factual & Claim Accuracy | 17 / 25 |
| On-Page SEO | 17 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Fix-first. A well-structured lead-magnet page whose copy is strong, but its stat wall carries several unsourced external claims (88%/5%, $700B, 30%, 50%/63%, 95%) that the draft itself flags `[to validate]`. On a page selling an AI company's credibility, shipping those numbers without citations is the main risk. Plus one live figure inconsistency (43 vs 48 pages) and an unverified social-proof number. None are fabricated by the auditor's standard — they're inherited from config and honestly tagged — but they must be sourced or softened before publish.

## Findings

### 🟠 High
1. **Stat wall = multiple unsourced external claims, all `[to validate]`.** §4.2 stats: "88% use AI / only 5% get value", "$700B invested / ~nil GDP impact", "30% of AI projects abandoned after PoC". §4.3 cards: "cost-cutting succeeds 50% / growth 63% / 13-point gap", "3 mistakes that sink 95% of AI projects". All originate in `playbook-config.ts` with **no source in the config** (confirmed) and are tagged `[to validate sources]` in §9. This is the dominant E-E-A-T deduction: an AI consultancy quoting hard percentages with no citation reads as slop and is legally exposed under EU comparative-claims norms. **Fix:** attach a named source to each figure (McKinsey/BCG/etc.) or reframe as qualitative. Do not ship the EN with bare percentages.
2. **Social proof "300+ executives" is unverified and not in the canonical set.** §4.1 `socialProof: "Already used by 300+ executives"` — flagged `[to validate]` §9; not in `llms.txt`. A specific usage count on a lead-capture hero is a trust claim. **Fix:** verify the real number or drop the count. 🟠 (not 🔴 only because it's tagged, not asserted as canonical).

### 🟡 Medium
3. **48 vs 43 pages — live inconsistency, already tracked.** Confirmed in code: `playbook-config.ts` says **48 pages** (5 occurrences), `site-config.ts:111` megamenu says **"43 pages"**. Both ship in production FR. Draft correctly uses 48 and flags the reconcile. **Fix:** correct `site-config.ts` to 48 (single source of truth) so the deliverable count is consistent across nav, page, and the EN build.
4. **GDPR consent microcopy is an add, not a confirmed field.** §4.7 proposes a consent/unsubscribe line "add if not present". Data-capture page → this must actually land in `lead-capture.tsx` (purpose + lawful basis + unsubscribe). Verify the field exists or scope it; copy with no landing field won't ship. Confirm `lead-capture.tsx` renders a consent line.

### 🟢 Low
5. **Named external references (Y Combinator, "the Amodei Exercise") kept as framing.** Low risk — no fabricated quotes — but "The Amodei Exercise" attributes a named method to Dario Amodei; keep it clearly as a framing device, not a claimed endorsement.

## What this page gets right
- **Keyword stance verified and honest:** ai playbook 40/KD23 and ai transformation playbook 60/KD3 confirmed exact against Ahrefs (US). Draft correctly calls this a deliberately low-keyword conversion asset — not stuffed.
- **Canonical figures used correctly:** "200+ AI systems delivered / 2,500+ trained" match `llms.txt` exactly; the draft explicitly reworded "200+ missions" → "200+ AI systems delivered" to avoid inventing a new metric. Good discipline.
- **Deliverable spec matches config 1:1:** 48 pages / 8 exercises / 6 chapters / 9 maturity levels / 5 AI systems / score-out-of-20 all trace to `playbook-config.ts`; the promise matches the actual PDF.
- **Copy is genuinely non-slop** — "ghost AI", "paving dirt roads with asphalt", "doesn't sell you a dream — it hands you a plan" carry a real POV.
- **Route in sitemap** (`sitemap.ts:34`); title 56 chars, meta 154 chars — both within budget (measured).
- **Strong answer-first GEO block** and a clean llms.txt entry consistent with the deliverable spec.

## Priority fixes (ranked)
1. **Source or soften every stat in §4.2/§4.3** (🟠, medium effort) — the single highest-impact fix.
2. **Verify or drop "300+ executives"** (🟠, low).
3. **Fix 43→48 in `site-config.ts`** (🟡, trivial) so the page count is consistent everywhere.
4. **Confirm/scope the GDPR consent line in `lead-capture.tsx`** (🟡, low).

## Open questions
- What are the real sources for the 88%/5%, $700B, 30%, 50%/63%, and 95% figures — and are they current (2025–26)?
- Is "300+ executives" a real, defensible count?

## Cross-page candidates
- **Unsourced-stat discipline** — shared with `pourquoi-maintenant`; both need a site-wide "every figure carries a source or `[to validate]`" pass. Log in `_cross-page-findings.md`.
- **GDPR consent microcopy on data-capture forms** — shared across all tools/lead-gen pages (`playbook-ia`, `challenge-30-jours`, `outils/*`); one shared consent-line spec + one `lead-capture.tsx` field, not n hand-edits.
- **48 vs 43 page-count** and other nav-vs-page figure drifts — consistency sweep.

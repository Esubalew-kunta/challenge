# Formation — Vibe Coding · route `/formation-ia-entreprise/vibe-coding` (EN proposed `/ai-training-for-teams/vibe-coding`)

**Source audited:** `[EN] website-content/formation-ia-entreprise--vibe-coding/formation-ia-entreprise--vibe-coding.md`
**Compared against:** `src/lib/formations.ts` (entry `vibe-coding`), `src/app/formation-ia-entreprise/[slug]/page.tsx`, `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt`. Ahrefs KE (US), 2026-07.
**See also:** `_cross-page-findings.md`.

## Score: 85 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 24 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 7 / 15 |

## Verdict
Fix-first. Best keyword economics of the six (KD 8) and a genuinely distinct offer, but the same two template blockers apply (title render, meta field). The MOOC-intent caveat on the parent term is correctly handled.

## Findings

### 🟠 High
1. **Proposed Title cannot render from the template.** Same mechanism as all formations: `${name} | Formation IA en entreprise | AI Makers`. Needs TICKET-FORM-TITLE-TPL to produce `Vibe Coding Course for Teams | AI Makers` ≤60.
2. **Proposed meta description has no landing field** — `resume` does triple duty (hero + meta + Course schema). The distinct meta line needs TICKET-FORM-SEO-DESC.

### 🟡 Medium
3. **Keyword targeting verified and sound.** Primary `vibe coding course` = **450 US, KD 8, CPC $1.90 (Ahrefs, confirmed)** — low-difficulty, high-fit. The draft correctly flags the parent `vibe coding` (89k US) as informational/MOOC intent and refuses to target it. Good discipline; no change needed beyond confirming the exact-match secondary later.
4. **Internal links** `/ai-training-for-teams` (unbuilt) — gate on TICKET-EN-ROUTES. `/automatisation-ia-workflow` exists (good).
5. **Answer-first GEO paragraph** has no dedicated field.

## What this page gets right
- **Qualiopi/OPCO `[to validate placement]`** — no assertion. Compliance pass.
- Only build-your-own-tools program in the catalogue; named tools (Claude Code, Cursor, Codex) are the anchor, not a swapped-in program name — no boilerplate cannibalization, distinct FAQ.
- Result stats (`1st tool`, `0 lines`, `ROI`) structural from `formations.ts`, with `ROI`/`1st tool` tagged `[to validate]`.
- `Course` + `FAQPage` schema real in code.

## Priority fixes
1. TICKET-FORM-TITLE-TPL + TICKET-FORM-SEO-DESC (🟠) — blockers shared across all six formations.
2. Gate the pillar link on EN routes (🟡).

## Open questions
- Same Qualiopi funding-line placement question as the other formations.

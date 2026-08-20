# Formation — Maîtriser Claude / Claude Training · route `/formation-ia-entreprise/maitriser-claude` (EN proposed `/ai-training-for-teams/claude-training`)

**Source audited:** `[EN] website-content/formation-ia-entreprise--maitriser-claude/formation-ia-entreprise--maitriser-claude.md`
**Compared against:** `src/lib/formations.ts` (entry `maitriser-claude`), `src/lib/formations.ts:formateurs` (Walid Boulanouar), `src/app/formation-ia-entreprise/[slug]/page.tsx`, `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt`. Ahrefs KE (US), 2026-07.
**See also:** `_cross-page-findings.md`.

## Score: 84 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 25 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 15 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 6 / 15 |

## Verdict
Fix-first. Distinct, feature-specific offer (Skills/Projects/Cowork/MCP) with a named trainer credential; the two shared template blockers apply. Primary is mid-difficulty (KD 47) — a higher-volume adjacent term is available and should be worked in.

## Findings

### 🟠 High
1. **Proposed Title cannot render from the template** — needs TICKET-FORM-TITLE-TPL for `Claude Training for Teams | AI Makers` ≤60.
2. **Proposed meta description has no landing field** — `resume` triple-duty; needs TICKET-FORM-SEO-DESC.

### 🟡 Medium
3. **Keyword choice verified; consider the higher-volume adjacent.** Primary `claude training` = **350 US, KD 47, CPC $1.60 (Ahrefs, confirmed)**. Secondary `claude for business` (900 US, KD 43 per draft) has ~2.5x the volume at similar difficulty — worth elevating to a co-primary / H2 rather than leaving as secondary.
4. **Internal links** `/ai-training-for-teams` (unbuilt); `/automatisation-ia-workflow` exists. Gate pillar link on TICKET-EN-ROUTES.
5. **Product-feature accuracy:** Skills, Projects, Cowork, MCP connectors (Drive/Notion/Slack/Microsoft 365) are all current Claude capabilities — technically correct, not stale. Pass.
6. **Answer-first GEO paragraph** has no dedicated field.

## What this page gets right
- **Qualiopi/OPCO `[to validate placement]`** — compliance pass.
- Trainer credential (Walid Boulanouar, CTO — Claude/agents/automations) used **verbatim from `formations.ts:formateurs`** — real, verifiable E-E-A-T.
- Feature-specific curriculum (Skills → Cowork → connectors) cleanly separates it from the Copilot (M365) and literacy (multi-tool) programs; program-specific FAQ; no boilerplate cannibalization.
- `100%` result stat correctly tagged `[to validate]`; `Course`/`FAQPage` schema real in code.

## Priority fixes
1. TICKET-FORM-TITLE-TPL + TICKET-FORM-SEO-DESC (🟠).
2. Elevate `claude for business` (900 US) to co-primary / H2 (🟡).
3. Gate the pillar link on EN routes (🟡).

## Open questions
- Same Qualiopi funding-line placement question as the other formations.
- Confirm the primary-vs-`claude for business` split so this page and any future "Claude for business" content don't collide.

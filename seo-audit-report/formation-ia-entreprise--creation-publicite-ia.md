# Formation — Création & Publicité / AI for Advertising · route `/formation-ia-entreprise/creation-publicite-ia` (EN proposed `/ai-training-for-teams/ai-for-advertising`)

**Source audited:** `[EN] website-content/formation-ia-entreprise--creation-publicite-ia/formation-ia-entreprise--creation-publicite-ia.md`
**Compared against:** `src/lib/formations.ts` (entry `creation-publicite-ia`), `src/app/formation-ia-entreprise/[slug]/page.tsx`, `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt`. Ahrefs KE (US), 2026-07.
**See also:** `_cross-page-findings.md`.

## Score: 84 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 24 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 15 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 7 / 15 |

## Verdict
Fix-first. Distinct creative-stack positioning (Nano Banana + Weavy) and clean compliance handling; the two template blockers apply, and the chosen primary is on the harder side (KD 54) — the easier adjacent term should be worked into the body.

## Findings

### 🟠 High
1. **Proposed Title cannot render from the template** — needs TICKET-FORM-TITLE-TPL to yield `AI for Advertising & Creative Teams | AI Makers` ≤60 (current template injects `| Formation IA en entreprise`).
2. **Proposed meta description has no landing field** — `resume` triple-duty; needs TICKET-FORM-SEO-DESC.

### 🟡 Medium
3. **Primary is high-difficulty; secondary is the easier win.** Primary `ai for advertising` = **1,400 US, KD 54, CPC $4.50 (Ahrefs, confirmed)** — high volume but hard. Secondary `generative ai for marketing` = 1,300 US, KD 18 (draft's own note) is materially easier and adjacent; make sure it is present in the body/H2s, not just listed. `ai advertising course` (30) correctly noted as low.
4. **Internal links** `/ai-training-for-teams` (unbuilt); `/secteurs/agences-communication` **exists** (good, live route). Gate the pillar link on TICKET-EN-ROUTES.
5. **Answer-first GEO paragraph** has no dedicated field.

## What this page gets right
- **Qualiopi/OPCO `[to validate placement]`** — compliance pass.
- Two-tool split (Nano Banana for generation, Weavy for pipeline) is a real, teachable structure and the page's fingerprint — no boilerplate cannibalization; distinct FAQ.
- `x5` productivity stat correctly tagged `[to validate]`; other stats structural.
- Honest "AI doesn't replace art direction" framing — no over-promise. `Course`/`FAQPage` schema real in code.

## Priority fixes
1. TICKET-FORM-TITLE-TPL + TICKET-FORM-SEO-DESC (🟠).
2. Ensure `generative ai for marketing` (KD 18) is worked into H2/body as the reachable term (🟡).
3. Gate the pillar link on EN routes (🟡).

## Open questions
- Same Qualiopi funding-line placement question as the other formations.

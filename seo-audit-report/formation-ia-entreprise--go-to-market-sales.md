# Formation — Go-to-Market & Sales · route `/formation-ia-entreprise/go-to-market-sales` (EN proposed `/ai-training-for-teams/ai-sales-training`)

**Source audited:** `[EN] website-content/formation-ia-entreprise--go-to-market-sales/formation-ia-entreprise--go-to-market-sales.md`
**Compared against:** `src/lib/formations.ts` (entry `go-to-market-sales`), `src/app/formation-ia-entreprise/[slug]/page.tsx`, `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt`. Ahrefs KE (US), 2026-07.
**See also:** `_cross-page-findings.md`.

## Score: 84 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 24 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 6 / 15 |

## Verdict
Fix-first. Well-chosen commercial primary and the strongest low-volume-trap avoidance in the batch; the two template blockers apply. High CPC ($9) confirms strong commercial intent, so the SEO payoff justifies the template work.

## Findings

### 🟠 High
1. **Proposed Title cannot render from the template** — needs TICKET-FORM-TITLE-TPL for `AI Sales Training for Teams | AI Makers` ≤60.
2. **Proposed meta description has no landing field** — `resume` triple-duty; needs TICKET-FORM-SEO-DESC.

### 🟡 Medium
3. **Keyword choice verified and correct.** Primary `ai sales training` = **500 US, KD 48, CPC $9.00 (Ahrefs, confirmed)**. The draft explicitly rejects the literal FR mirror `ai training for sales` (10 US) — exactly the low-volume-variant trap §5 warns about. Good. Secondary `ai prospecting` (250, KD 22) is the easier adjacent term; ensure it appears in body/H2.
4. **Internal links** `/ai-training-for-teams` (unbuilt); `/automatisation-ia-workflow` exists. Gate pillar link on TICKET-EN-ROUTES.
5. **Answer-first GEO paragraph** has no dedicated field.

## What this page gets right
- **Qualiopi/OPCO `[to validate placement]`** — compliance pass.
- Distinct outbound stack (Clay + FullEnrich for data, Lemlist for sequences) and the list→meeting arc; no boilerplate cannibalization; program-specific FAQ.
- Performance stats `x3` and `+conv.` correctly tagged `[to validate]`.
- `Course`/`FAQPage` schema real in code.

## Priority fixes
1. TICKET-FORM-TITLE-TPL + TICKET-FORM-SEO-DESC (🟠).
2. Surface `ai prospecting` (KD 22) in an H2/body as the reachable term (🟡).
3. Gate the pillar link on EN routes (🟡).

## Open questions
- Same Qualiopi funding-line placement question as the other formations.

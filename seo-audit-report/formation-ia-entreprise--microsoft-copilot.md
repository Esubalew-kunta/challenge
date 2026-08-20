# Formation — Microsoft Copilot · route `/formation-ia-entreprise/microsoft-copilot` (EN proposed `/ai-training-for-teams/microsoft-copilot`)

**Source audited:** `[EN] website-content/formation-ia-entreprise--microsoft-copilot/formation-ia-entreprise--microsoft-copilot.md`
**Compared against:** `src/lib/formations.ts` (entry `microsoft-copilot`), `src/lib/formations.ts:formateurs` (Adel Dahani), `src/app/formation-ia-entreprise/[slug]/page.tsx`, `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt`. Ahrefs KE (US), 2026-07.
**See also:** `_cross-page-findings.md`.

## Score: 86 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 25 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 7 / 15 |

## Verdict
Fix-first. Best EN keyword fit of the six (KD 16 on a 900-volume term) and a named, traceable trainer credential — the strongest formation draft. Only the two shared template blockers stand between it and shipping.

## Findings

### 🟠 High
1. **Proposed Title cannot render from the template** — needs TICKET-FORM-TITLE-TPL for `Microsoft Copilot Training for Teams | AI Makers` ≤60 (current template injects `| Formation IA en entreprise`, pushing it well over).
2. **Proposed meta description has no landing field** — `resume` triple-duty; needs TICKET-FORM-SEO-DESC.

### 🟡 Medium
3. **Keyword choice verified — excellent.** Primary `microsoft copilot training` = **900 US, KD 16, CPC $1.90 (Ahrefs, confirmed)**: high volume, low difficulty, exact buyer fit. No change needed. Secondary `copilot training` (1,800, KD 30) worth an H2.
4. **Internal links** `/ai-training-for-teams` and `/ai-training-for-teams/claude-training` unbuilt — gate on TICKET-EN-ROUTES.
5. **Prerequisite honesty:** the fiche states "Microsoft 365 Copilot licenses in place" and the FAQ repeats it — correct, no over-promise. (Draft-risk none.)
6. **Answer-first GEO paragraph** has no dedicated field.

## What this page gets right
- **Qualiopi/OPCO `[to validate placement]`** — compliance pass.
- Trainer credential (Adel Dahani, ex-IBM, Copilot deployment specialist) used **verbatim from `formations.ts:formateurs`** — a real, verifiable E-E-A-T signal, not invented.
- App-by-app curriculum (Word/Excel/PowerPoint/Outlook/Teams) is distinct from the tool-agnostic literacy program; program-specific FAQ; no boilerplate cannibalization.
- `Course`/`FAQPage` schema real in code.

## Priority fixes
1. TICKET-FORM-TITLE-TPL + TICKET-FORM-SEO-DESC (🟠) — this page has the most to gain from shipping the exact-match EN title.
2. Add `copilot training` as an H2 variant (🟡).
3. Gate internal links on EN routes (🟡).

## Open questions
- Same Qualiopi funding-line placement question as the other formations.

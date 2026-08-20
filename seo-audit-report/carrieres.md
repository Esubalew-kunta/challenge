# Carrières — /carrieres (EN draft → proposed /careers)

**Source audited:** `[EN] website-content/carrieres/carrieres.md`
**Compared against:** `src/app/carrieres/postes.ts` (open roles), `src/app/carrieres/page.tsx` (stack), `src/lib/metadata.ts`, `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt`
**See also:** cross-page candidates (end of file)

## Score: 88 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 24 / 25 |
| Factual & Claim Accuracy | 25 / 25 |
| On-Page SEO | 15 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Ship after meta trim. Recruiting/employer-brand page; minimal keyword pressure is expected and correctly declared. The five open roles are verbatim from `postes.ts` and self-tagged `[to validate freshness]` — the right discipline for volatile job listings. Metas are the closest to compliant in the batch; only small fixes.

## Findings

### 🟡 Medium
1. **Title brand doubling (minor).** Field `Careers: Join AI Makers` (23) + template ` | AI Makers` → `Careers: Join AI Makers | AI Makers` (35, brand ×2). Short, low harm, but redundant. *Fix:* field = `Careers: Join AI Makers` is fine visually; if avoiding the double brand, use `Careers` or `Open Roles` in the field.

### 🟢 Low
2. **Meta description 159 chars — within budget** (one of only three in the batch under 160). No action.
3. **Open-roles freshness — already tracked.** Draft tags the 5 openings `[to validate freshness]` (read 2026-07-14). Confirm current before publish; not re-flagged as new.
4. **`/careers` route not yet in `sitemap.ts`** — EN-build item (cross-page).

## What this page gets right (roles verified against source)
- All five roles match `postes.ts` exactly: **AI Engineer, AI Delivery Lead, LLMOps Engineer, AI & Data Engineer, SEO & GEO Executor**, each `location: "Paris, Rabat ou remote"` → "Paris, Rabat or remote", `type: "Temps plein"` → "Full-time". No invented role or location.
- Empty-state fallback copy is specified — the page degrades gracefully if `postes.ts` is emptied.
- Stack names (Claude Code, n8n, LangChain) and "CTO mentoring" match `page.tsx`; team-of-6 / Paris·Rabat / international clients are canonical.
- Answer-first GEO paragraph self-contained and lists the open roles — citable for "AI jobs at AI Makers" style queries.

## Priority fixes
1. (Optional) Remove brand duplication from title field.
2. Re-confirm the five openings are still live before publishing.
3. EN build: create `/careers` route + sitemap + hreflang; consider `JobPosting` schema per open role for richer results.

## Open questions
- Are all five roles still open as of publish date?

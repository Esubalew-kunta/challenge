# Audit IA entreprise → AI Readiness Assessment — EN Content Master · route `/audit-ia-entreprise` → proposed `/ai-readiness-assessment`

**Source audited:** `[EN] website-content/audit-ia-entreprise/audit-ia-entreprise.md`
**Compared against:** `src/app/audit-ia-entreprise/page.tsx`, `src/app/diagnostic-ia/page.tsx`, `src/components/shared/service-page.tsx`, `src/lib/metadata.ts` + root template, `src/app/sitemap.ts`, `public/llms.txt`
**Data source:** Ahrefs keywords-explorer-overview (US), 2026-07-15
**See also:** `_cross-page-findings.md`

## Score: 87 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust Signals | 24 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 15 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Fix-first. The keyword call is the strongest in the whole batch — verified — and the guarantee copy matches the contract exactly. One page-specific blocker to resolve on top of the shared engineering dependencies: the proposed slug `/ai-readiness-assessment` collides with the homepage's own "AI maturity test" CTA target, and both would then chase the same primary keyword.

## Findings

### 🟠 High

**1. Slug + primary-keyword collision with the diagnostic tool.**
Evidence: This page proposes slug `/ai-readiness-assessment` and primary keyword `ai readiness assessment` (1,400/KD8, verified). But the **homepage draft** routes its hero secondary CTA "Test your AI maturity in 2 min" to `/ai-readiness-assessment` — semantically the `/diagnostic-ia` 2-minute quiz (`src/app/diagnostic-ia/page.tsx`: "Testez votre maturité IA en 2 minutes. Score /20"). Two different products (a free 2-min self-serve quiz vs a paid 1–2-week audit) are being pointed at one slug and one query.
Why it matters: §1.3 / §8.2 — a single query/slug needs one canonical owner. As drafted, the quiz and the audit cannibalize each other on "ai readiness assessment".
Fix: Make this commercial BOFU page the canonical owner of `/ai-readiness-assessment` + the keyword; give the 2-min quiz a distinct slug (e.g. `/ai-readiness-quiz` or keep `/diagnostic-ia`) and repoint the homepage CTA there. Cross-page decision.

**2. ServicePage template hard-codes French UI strings.**
Evidence: Renders via `ServicePage`; hero CTA button, proof band, and related labels are hard-coded FR (`service-page.tsx`). Proposed EN button `Book your AI Scan` has no field.
Fix: Shared i18n ticket. Cross-page.

**3. Proposed title renders with a double brand suffix.**
Evidence: `AI Readiness Assessment in 2 Weeks | AI Makers` *(47)* → through `constructMetadata` + template becomes `… | AI Makers | AI Makers` (~58 chars). Stays under 60 here, but shows the brand twice.
Fix: Drop the manual `| AI Makers`. Cross-page pattern.

**4. Proposed slug `/ai-readiness-assessment` is not a route / not in the sitemap.**
Evidence: `sitemap.ts` has `/audit-ia-entreprise`. New EN route required.
Fix: EN slug + routes + sitemap ticket. Cross-page.

### 🟡 Medium

**5. Maturity-score scale: /24 here vs /20 on the diagnostic tool — already tracked in the draft.**
Evidence: The draft's Facts table flags "NOTE: /diagnostic-ia OG says /20 → reconcile". Confirmed: `diagnostic-ia/page.tsx` line 12 says "Score /20"; this page (and its code, line 92) says "/24". These appear to be two different instruments (2-min quiz vs AI Scan audit), so not strictly a contradiction — but the site presents two AI-maturity scores on two scales.
Why it matters: A reader/AI engine can't tell whether "24" and "20" are the same score. Already-tracked (§3.5) — confirm the intended framing, don't re-flag as new.
Fix: State explicitly that the quiz (/20) and the AI Scan (/24) are different instruments, or unify the scale.

## What this page gets right
- **Best keyword find in the batch, verified.** Ahrefs US: ai readiness assessment 1,400/**KD8** vs the obvious "ai audit" 700/KD58. Double the volume, one-tenth the difficulty, and exact semantic match to the AI Scan. This is §5.1/§5.2 done at its best — and the draft correctly keeps "ai audit" as a secondary to still answer that query. ai readiness 500/KD54 and ai maturity assessment 150/KD52 also confirmed exact.
- **Guarantee language matches the contract.** "No clear roadmap with ≥3 high-ROI use cases = refunded 100%" mirrors the canonical guarantee in `public/llms.txt`/garanties, with the exact threshold, no softening or inflation (§1.2).
- **Schema verified in code:** BreadcrumbList + Service (page.tsx) + FAQPage (ServicePage). Matches the draft.
- **Answer-first GEO paragraph** defines "AI readiness assessment" self-containedly and leads with the refund guarantee (the BOFU trigger).
- **Draft surfaces its own paper trail** (the /24 vs /20 note) rather than hiding it — the discipline §3.5 asks for.
- Canonical figures only (50+/200+/9.6-tagged). All internal links resolve to existing routes.

## Priority fix list
1. **(🟠, decision)** Resolve the `/ai-readiness-assessment` slug + keyword ownership vs the 2-min quiz; repoint the homepage CTA.
2. **(🟠, engineering)** i18n ServicePage FR strings (shared).
3. **(🟠, engineering)** Create the `/ai-readiness-assessment` route + sitemap entry.
4. **(🟠, low)** Drop the manual `| AI Makers` from the title.
5. **(🟡, trivial)** Clarify /24 (audit) vs /20 (quiz) as distinct instruments.

## Open questions
- Which page owns `/ai-readiness-assessment` and the "ai readiness assessment" keyword — this paid audit, or the free quiz? (Recommend: the audit.)
- Are the /20 quiz score and the /24 AI Scan score meant to be the same maturity measure or two different ones?

## Cross-page candidates
- **`/ai-readiness-assessment` slug + keyword collision** between this page and the homepage diagnostic CTA.
- **ServicePage hard-coded FR UI strings** (shared).
- **Double brand suffix** (title template) — recurs.
- **EN slug scheme vs live FR routes** — recurs.

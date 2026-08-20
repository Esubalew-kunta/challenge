# Outils gratuits — hub /outils (EN: /ai-tools)

**Source audited:** `[EN] website-content/outils/outils.md`
**Compared against:** `src/app/outils/page.tsx`, the 3 child tool components, `src/app/sitemap.ts`, `public/llms.txt`; Ahrefs (US) 2026-07.
**See also:** `_cross-page-findings.md`

## Score: 85 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 21 / 25 |
| Factual & Claim Accuracy | 23 / 25 |
| On-Page SEO | 17 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Ship. A clean tool-magnet hub: it correctly refuses the "free ai tools / ai tools for business" directory head terms as off-intent for a 3-tool lead-gen page, adds a citable POV ("no invented numbers; a tool that oversells is worse than no tool"), and routes to its three children with blurbs that match each tool's verified behaviour. The "two of three return an answer without an email" claim is accurate against code.

## Findings

### 🟡 Medium
1. **The hub inherits its children's GDPR-consent gap.** Two of the three tools capture data (GEO check: email+company; scanner: email + answers → `/api/lead`) and neither child form currently shows a consent line / privacy-policy link (verified in `geo-audit-form.tsx`; see child audits). The hub copy ("no forced signup") is honest, but the consent gap is a real compliance item on the tools it routes to. Not the hub's own defect — flagged so it's fixed at the source. See the two tool audits.
2. **EN slug `/ai-tools` vs live route `/outils`** — confirm canonical/slug + that the three child routes resolve under the shipped scheme.

### 🟢 Low
3. **Meta at 159 chars** — within budget; keep buffer if edited.

## What this page gets right
- **Correct directory-term refusal:** "free ai tools" (7,300/KD57) and "ai tools for business" (2,900/KD33) verified — both correctly read as software-directory intent the hub can't and shouldn't win. Targets "ai tools for business" softly, no stuffing. Textbook §5 intent-flag judgment.
- **Citable hub POV:** "built the same way we build client systems — sourced figures, conservative math, no invented numbers" is an assertable stance and true of the underlying tools (ROI math and scanner sources both verified against code).
- **Accurate routing claim:** "two of the three give you an answer on screen without an email" checks out — ROI calculator captures nothing (client-side, verified), scanner shows top-3 before capture; only the GEO check requires email up front.
- **No cannibalization:** blurbs route to child tools and the `/audit-ia-entreprise` owner for the paid bridge; nothing re-answered.
- **Route in sitemap** (`sitemap.ts:30`); title 56 chars, meta 159 — within budget (measured). Answer-first GEO paragraph is accurate and self-contained.

## Priority fixes (ranked)
1. **Fix the consent-line gap on the two capturing child tools** (🟡, shared with tool audits) — one shared consent component.
2. **Confirm `/outils` vs `/ai-tools` canonical + child routes** (🟡, dev).

## Open questions
- Does the EN build keep `/outils` or move to `/ai-tools`? (Affects the three child tool URLs too.)

## Cross-page candidates
- **GDPR consent microcopy on data-capture forms** — shared across `outils/audit-geo-gratuit`, `outils/scanner-opportunites-ia`, `playbook-ia`, `challenge-30-jours`. One shared consent line + privacy-policy link (`/confidentialite` exists) fixes all; log in `_cross-page-findings.md`.
- **EN-slug vs live-route canonical decision** — systemic.

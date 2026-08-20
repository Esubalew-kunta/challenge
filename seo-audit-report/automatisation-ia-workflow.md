# Automatisation IA de workflows → AI Automation — EN Content Master · route `/automatisation-ia-workflow` → proposed `/ai-automation`

**Source audited:** `[EN] website-content/automatisation-ia-workflow/automatisation-ia-workflow.md`
**Compared against:** `src/app/automatisation-ia-workflow/page.tsx`, `src/components/shared/service-page.tsx`, `src/lib/metadata.ts` + root template, `src/app/sitemap.ts`, `public/llms.txt`
**Data source:** Ahrefs keywords-explorer-overview (US), 2026-07-15
**See also:** `_cross-page-findings.md`

## Score: 88 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust Signals | 24 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Fix-first, then ship. Excellent keyword discipline (correctly refuses to force the high-volume-but-wrong rpa/workflow-automation terms onto a commercial page) and clean fact hygiene (the unverifiable 60–80% figure is explicitly dropped). Blockers are the same three shared engineering dependencies as the other ServicePage pages, plus one small stated-difficulty discrepancy.

## Findings

### 🟠 High

**1. ServicePage template hard-codes French UI strings — EN copy can't fully ship.**
Evidence: The page renders via `ServicePage`, whose hero CTA button (`Réserver mon diagnostic gratuit`), proof band (`Ils nous font confiance` + the 50-companies line), and related labels (`Ressources`, `Lire l'article`) are hard-coded FR in `src/components/shared/service-page.tsx`. The draft's proposed EN hero button `Book a free 30-min diagnostic` has no prop to land in.
Fix: Shared i18n ticket for ServicePage strings. Cross-page — see `_cross-page-findings.md`.

**2. Proposed title doubles the brand suffix.**
Evidence: `AI Automation for Business Processes | AI Makers` *(48)*. Through `constructMetadata` + `template: "%s | AI Makers"` this renders `… | AI Makers | AI Makers` = **60 chars, double brand**.
Fix: Drop the manual `| AI Makers` (`%s` = `AI Automation for Business Processes` = 36 → 48 rendered). Cross-page.

**3. Proposed slug `/ai-automation` does not exist as a route / sitemap entry.**
Evidence: `sitemap.ts` has `/automatisation-ia-workflow`, not `/ai-automation`. The homepage and agence-ia drafts both deep-link "how to automate" intent to `/ai-automation` as its owner — so this page is the target of links that currently 404.
Fix: EN slug + routes + sitemap ticket. Cross-page.

### 🟡 Medium

**4. One stated keyword difficulty is off.**
Evidence: Draft lists `ai workflow automation | 4,600 (US) | 56`. Ahrefs US returns volume 4,600 ✓ but **difficulty 61**, not 56.
Why it matters: Minor, but §3.3 requires measured accuracy; a KD understated by 5 nudges the effort estimate.
Fix: Correct to KD61. (All other stated volumes/difficulties verified exact — see below.)

## What this page gets right
- **Textbook keyword decision, fully verified.** Ahrefs US confirms the draft's numbers: ai automation 12,000/KD56 (primary), workflow automation 52,000/KD50, business process automation 5,600/KD48, rpa 32,000/KD78, robotic process automation 18,000/KD72. The draft correctly keeps the 12k/on-brand "ai automation" as primary and refuses to chase the 32k–52k terms that are informational, harder, and legacy-vendor-owned (§5.2, §5.4 done properly).
- **Fact hygiene is exemplary.** The Facts table explicitly *drops* the "60–80% absorption" figure as unverifiable rather than shipping it with a tag on a commercial page (§7.3 discipline, rarely seen).
- **Schema verified in code:** BreadcrumbList + Service (page.tsx) + FAQPage (ServicePage `buildFaqSchema`). Matches the draft's claim.
- **Canonical figures only:** 7h/week, 200+ systems, 50+ companies all from `public/llms.txt`.
- **First-hand, opinionated stack copy** (n8n > Make > Zapier, "honestly, rarely our first pick") — real practitioner voice, not generic.
- **Answer-first GEO paragraph** defines "AI automation" self-containedly with the 7h figure inside the first 40 words. All internal links (`/ai-transformation`, `/outils/calculateur-roi-ia`, `/etudes-de-cas`, `/audit-ia-entreprise`, `/contact`) resolve to existing routes. Current route is in the sitemap.

## Priority fix list
1. **(🟠, engineering)** i18n ServicePage FR strings (shared across ServicePage EN pages).
2. **(🟠, low)** Remove manual `| AI Makers` from the title.
3. **(🟠, engineering)** Create `/ai-automation` route + sitemap entry (this page is a deep-link target from homepage/agence-ia).
4. **(🟡, trivial)** Correct "ai workflow automation" difficulty to KD61.

## Open questions
- Confirm `/ai-automation` as the canonical owner slug for the automation cluster (homepage and agence-ia already point here).

## Cross-page candidates
- **ServicePage hard-coded FR UI strings** (shared).
- **Double brand suffix** (title template) — recurs.
- **EN slug scheme vs live FR routes** — recurs; this page is a link target for the cluster.

# Plateforme Data & IA → Enterprise Data Platform — EN Content Master · route `/plateforme-data-ia` → proposed `/enterprise-data-platform`

**Source audited:** `[EN] website-content/plateforme-data-ia/plateforme-data-ia.md`
**Compared against:** `src/app/plateforme-data-ia/page.tsx`, `src/components/shared/service-page.tsx`, `src/lib/metadata.ts` + root template, `src/app/sitemap.ts`, `public/llms.txt`
**Data source:** Ahrefs keywords-explorer-overview (US), 2026-07-15
**See also:** `_cross-page-findings.md`

## Score: 87 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust Signals | 23 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Fix-first, then ship. Strong keyword work — the "medallion architecture" find is a genuine low-difficulty gift that matches the page's own content — and clean fact hygiene on the in-progress case study. Blockers are the shared ServicePage/title/slug engineering dependencies, not the content.

## Findings

### 🟠 High

**1. ServicePage template hard-codes French UI strings — EN copy can't fully ship.**
Evidence: Renders via `ServicePage`; the hero CTA button (`Réserver mon diagnostic gratuit`), proof band (`Ils nous font confiance` + the 50-companies line), and related labels (`Ressources`, `Lire l'article`) are hard-coded FR in `src/components/shared/service-page.tsx`. The draft proposes an EN CTA label via the `cta.label` prop (which the template does honor for the *final* CTA), but the hero button and proof band have no EN field.
Fix: Shared i18n ticket for ServicePage strings. Cross-page — see `_cross-page-findings.md`.

**2. Proposed title renders with a double brand suffix.**
Evidence: `Enterprise Data Platform for AI | AI Makers` *(45)* → through `constructMetadata` + `template: "%s | AI Makers"` renders `… | AI Makers | AI Makers` ≈ **57 chars** (under 60, but the brand shows twice).
Fix: Drop the manual `| AI Makers`. Cross-page pattern.

**3. Proposed slug `/enterprise-data-platform` is not a route, and the EN link graph is inconsistent about it.**
Evidence: `sitemap.ts` has `/plateforme-data-ia`. New EN route required. Also: the ai-operating-system draft links "Data & AI Platform → /plateforme-data-ia" (old slug), while this page proposes `/enterprise-data-platform` — the two EN drafts disagree on the slug.
Fix: EN slug + routes + sitemap ticket; align the ai-operating-system link to the final slug. Cross-page.

### 🟡 Medium

**4. In-progress case-study figures are unnamed and tagged — keep them tagged to publish.**
Evidence: §4.4 carries "4,500 employees, 20 years of data, 3 systems, 15 agents, Bronze shipped ahead of schedule" for an unnamed Moroccan agri-export group, with the footnote "case study in client validation". The draft tags these `[to validate]`.
Why it matters: §7.2 — good discipline (no invented finished outcome, client unnamed until published). Just don't let the tags drop.
Fix: Carry `[to validate]` to sign-off; publish the named case only after client validation.

## What this page gets right
- **Keyword strategy is excellent and fully verified.** Ahrefs US: enterprise data platform 600/KD2 (exact-match primary), data engineering services 2,300/KD8, **medallion architecture 5,100/KD3** (a rare gift — literally the Bronze/Silver/Gold content the page already explains), data platform 2,600/KD9. The draft correctly refuses to chase "rag"/"retrieval augmented generation" (KD78–83, dev-intent) and the dead "data foundation for ai" (30/mo). Textbook §5.2/§5.4.
- **Fact hygiene on the case study is honest** — an in-progress engagement, client unnamed, no fabricated outcome, footnoted as in validation (§7.2).
- **Schema verified:** BreadcrumbList + Service (page.tsx) + FAQPage (ServicePage). Matches the draft's claim.
- **Technical content is accurate and concrete:** the medallion (Bronze/Silver/Gold) architecture is correctly described; the tool stack (PostgreSQL, Docker, Airflow, Power BI, Claude, n8n) is specific and current; "nothing migrated, nothing replaced" and "full ownership" match the site's guarantee pattern (§1.2).
- **Answer-first GEO paragraph** defines "enterprise data platform" + the medallion layers self-containedly — the ideal citable block, and it carries the primary + the medallion secondary in the first 60 words.
- Canonical heroStats (50+/200+/9.6-tagged); current route in the sitemap; all internal links (`/ai-operating-system`, `/ai-transformation`, `/etudes-de-cas`, `/contact`) resolve.

## Priority fix list
1. **(🟠, engineering)** i18n ServicePage FR strings (shared across ServicePage EN pages).
2. **(🟠, low)** Drop the manual `| AI Makers` from the title.
3. **(🟠, engineering)** Create `/enterprise-data-platform` route + sitemap entry; align the ai-operating-system link to the final slug.
4. **(🟡, sign-off)** Keep the agri-export figures `[to validate]`; publish the named case only after client validation.

## Open questions
- Approve `/enterprise-data-platform` as the slug, and update the ai-operating-system related link to match?
- Timeline for client validation of the Moroccan agri-export case (currently the page's only concrete proof, and it's unnamed)?

## Cross-page candidates
- **ServicePage hard-coded FR UI strings** (shared).
- **Double brand suffix** (title template) — recurs.
- **EN slug scheme vs live FR routes** — recurs, with an internal disagreement (ai-operating-system links the old slug).

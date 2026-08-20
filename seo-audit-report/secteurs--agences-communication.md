# Secteur — Agences de communication · route `/secteurs/agences-communication`

**Source audited:** `[EN] website-content/secteurs--agences-communication/secteurs--agences-communication.md`
**Compared against:** `src/app/secteurs/[slug]/page.tsx` (shared template), `src/lib/secteurs.ts` (entry `agences-communication`), `src/lib/metadata.ts`, `src/app/layout.tsx` (title template), `src/lib/faq-schema.ts`, `src/app/sitemap.ts`, `src/lib/site-config.ts` (clientLogos), `public/llms.txt`. Ahrefs keywords-explorer-overview (US), 2026-07-15.
**See also:** cross-sector findings summarised in the final report (double brand suffix, `/industries` slug migration, FR template chrome i18n) apply to all 8 sector pages.

## Score: 88 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 22 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 12 / 15 |

## Verdict
Ship after fixing the title and slug. This is a well-differentiated, honestly-sourced draft — sector-specific pains and use cases, canonical figures from `llms.txt`, real testimonials (Shem's Publicité, ThinkONE both verified in `clientLogos`). The blockers are shared template mechanics, not content: the proposed title double-appends the brand suffix, and the proposed `/industries/` slug does not exist as a route.

## Findings

### 🟠 High
1. **Double brand suffix in title.** Draft proposes `AI for Marketing Agencies | AI Makers` as `metaTitle`. But `src/app/layout.tsx` sets `title.template = "%s | AI Makers"` — the suffix is auto-appended to every page. Applied literally the rendered title becomes `AI for Marketing Agencies | AI Makers | AI Makers`. **Fix:** set `metaTitle` to `AI for Marketing Agencies` (25 chars) → renders as `AI for Marketing Agencies | AI Makers` (37), matching the draft's own stated count.
2. **Proposed slug `/industries/ai-for-marketing-agencies` has no route.** Live route is `/secteurs/[slug]` (`generateStaticParams` over `secteurs.ts`); `src/app/industries/` does not exist; `sitemap.ts` emits `/secteurs/agences-communication`. The draft's own GEO/llms.txt block (§8) cites `aimakers.fr/secteurs/agences-communication`, contradicting the §3 slug proposal. As written the slug change cannot ship without the route-migration ticket owned by Agent 1. **Fix:** keep `/secteurs/…` until migration, or scope the migration as a named engineering ticket and update the GEO block to match.

### 🟡 Medium
3. **EN content renders inside FR template chrome.** Section H2s ("Ce que vous vivez en ce moment", "Ce que l'IA change concrètement chez vous", "Questions fréquentes"), breadcrumb ("Accueil / Secteurs"), hero CTA button ("Réserver un diagnostic gratuit") and `RelatedContent` are hardcoded FR in `page.tsx`; `<html lang="fr">` in `layout.tsx`. The draft only supplies EN for data fields (`intro`, `douleurs`, `casUsage`, `faq`). As written the page renders half-EN/half-FR. **Fix:** template i18n engineering ticket (shared across all 8).
4. **Primary keyword very low volume.** "ai for marketing agencies" = 150/mo US, difficulty null (Ahrefs 2026-07 — matches the draft claim). Acceptable for a MOFU sector landing per rules §5; not penalised, but the page must earn its keep on conversion assist + internal links, not head traffic, as the draft correctly states.

## What this page gets right
- Testimonials verified: Shem's Publicité (`site-config.ts` line 558, has `testimonial`) and ThinkONE (line 524, has `testimonial`) both render.
- Figures are canonical: "+50 companies / +200 systems" traces to `public/llms.txt`. No invented numbers.
- Genuinely distinct pains/use cases (client insourcing, RFPs, asset versioning, art-direction ownership) — no boilerplate-with-name-swapped.
- FAQ Q1 ("will AI replace our creatives?") is explicitly claimed as canonical owner and is not repeated on sibling pages.
- FAQPage + BreadcrumbList JSON-LD are implemented in code (`faq-schema.ts`, `page.tsx`), not merely planned.
- Route is in `sitemap.ts` (`secteurEntries`).

## Priority fixes
1. Strip `| AI Makers` from the proposed `metaTitle` (🟠, trivial).
2. Resolve the `/industries` vs `/secteurs` slug: align §3 with §8, or ticket the migration (🟠, coordination).
3. Template i18n ticket so EN chrome matches EN content (🟡, engineering — shared).

## Open questions
- Is the `/industries/` EN-slug migration actually in scope for this release, or does EN content ship on the existing `/secteurs/` routes first?

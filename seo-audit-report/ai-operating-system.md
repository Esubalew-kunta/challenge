# AI Operating System — EN Content Master · route `/ai-operating-system` (unchanged)

**Source audited:** `[EN] website-content/ai-operating-system/ai-operating-system.md`
**Compared against:** `src/app/ai-operating-system/page.tsx`, `src/lib/offer-pages/ai-os.ts`, `src/lib/site-config.ts` (fleet, guarantees, Gepromed testimonial), `src/lib/metadata.ts` + root template, `src/app/sitemap.ts`, `public/llms.txt`
**Data source:** Ahrefs keywords-explorer-overview (US), 2026-07-15
**See also:** `_cross-page-findings.md`

## Score: 90 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust Signals | 24 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 17 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Ship after minor fixes. A clean, well-structured concept page: field map matches the code, all three schemas are implemented, the slug stays `/ai-operating-system` (already in the sitemap), and every internal link resolves. Only the double-suffix title and a few hard-coded French related-link descriptions need attention.

## Findings

### 🟠 High

**1. Proposed title doubles the brand suffix.**
Evidence: `AI Operating System: Run Your Company on AI | AI Makers` *(58)* → through `constructMetadata` + `template: "%s | AI Makers"` renders `… | AI Makers | AI Makers` ≈ **70 chars**.
Fix: Drop the manual `| AI Makers` (`%s` = `AI Operating System: Run Your Company on AI` = 43 → 55 rendered). Cross-page pattern.

### 🟡 Medium

**2. RelatedContent descriptions are hard-coded French in `page.tsx` — no EN provided.**
Evidence: `page.tsx` lines 462–476 render three related links with inline FR descriptions ("L'offre complète en 3 phases…", "Unifier vos données en silo…", "Les operating systems déployés chez nos clients."). The draft's §4.10 gives EN link *titles* but not the descriptions.
Why it matters: §6.7 — the related-card descriptions would render in French on the EN page.
Fix: Provide EN descriptions (small inline edit, or move to the data file).

## What this page gets right
- **Keyword call is smart and fully verified.** Ahrefs US confirms: ai operating system 250/KD38 (a real brand-coined term worth owning outright), ai agents for business 1,200/KD52, ai for business operations 400/KD35, enterprise ai 8,900/KD58. The draft explicitly refuses to force "agentic ai" (confirmed 101,000/KD76 — off-intent and unrankable here). Exactly the §5.2/§5.4 discipline.
- **Field map matches the code.** `offer-pages/ai-os.ts` is genuinely imported by `page.tsx` (lines 14–25); every mapped section lands in a real field.
- **All three schemas implemented:** BreadcrumbList + Service + FAQPage in `page.tsx` (lines 103–105) — matches the draft's claim.
- **Slug stable and indexed:** stays `/ai-operating-system`, in `sitemap.ts`. Every internal link (`/ai-transformation`, `/plateforme-data-ia`, `/etudes-de-cas`, `/contact`) resolves — no EN-slug dependency.
- **Cannibalization discipline is exemplary:** the fleet is reused from the homepage owner (only the section header is owned here), guarantees reuse the shared owner block, and the AI-OS ownership FAQ is scoped here while the program-level ownership Q stays on `/ai-transformation`.
- **First-hand proof:** the Gepromed case uses a real on-record client quote (Nicole Neumann) that literally names "an operating system" — the ideal evidence for this concept; pulled verbatim from `site-config` testimonials. +200 systems is canonical; "6 people = team of 40" is tagged `[to validate]`.
- **Answer-first GEO paragraph** defines "AI operating system" self-containedly (the four connected layers vs. a pile of tools) — the ideal citable answer for the coined term.

## Priority fix list
1. **(🟠, low)** Drop the manual `| AI Makers` from the title.
2. **(🟡, low)** Provide EN for the three hard-coded FR related-link descriptions in `page.tsx`.

## Open questions
- Confirm the "6 people = output of a team of 40" claim for publication (currently `[to validate]`, consistent with the ai-transformation page).

## Cross-page candidates
- **Double brand suffix** (title template) — recurs.
- **Hard-coded FR strings in page templates** (here: RelatedContent descriptions) — a variant of the same shipping-blocker seen across pages.

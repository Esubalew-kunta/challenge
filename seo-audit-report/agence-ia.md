# Agence IA → AI Consulting — EN Content Master · route `/agence-ia` → proposed `/ai-consulting`

**Source audited:** `[EN] website-content/agence-ia/agence-ia.md`
**Compared against:** `src/app/agence-ia/page.tsx`, `src/components/shared/service-page.tsx`, `src/lib/metadata.ts` + root template, `src/app/sitemap.ts`, `public/llms.txt`
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
Fix-first, then ship. The keyword strategy here is the strongest in the batch — the draft correctly rejects the brief's assumed "ai agency" head term after checking real data. Two engineering dependencies block a clean EN launch: the ServicePage template hard-codes French UI strings the EN copy can't override, and the proposed `/ai-consulting` slug + title suffix need resolution. No fabrication; figures and schema all verify.

## Findings

### 🟠 High

**1. ServicePage template hard-codes French UI strings with no EN prop — EN copy cannot fully ship.**
Evidence: `src/components/shared/service-page.tsx` hard-codes the hero CTA button `Réserver mon diagnostic gratuit` (line 129), the proof band `Ils nous font confiance` / `Des équipes formées et des systèmes en production chez plus de 50 entreprises` (lines 179–184), and the related-articles labels `Ressources` / `Lire l'article` / default `Pour aller plus loin` (lines 305, 329, 92). The draft proposes an EN hero button `Book a free 30-min diagnostic` and EN related-article titles, but **no prop exists to receive the button label or the proof-band copy**.
Why it matters: §6.7 field-mapping — proposed copy with no landing field will not ship as written; the page would render a French CTA button on an English page.
Fix: One engineering ticket to parameterize/i18n the ServicePage template strings (hero CTA label, proof band, related labels). This blocks every ServicePage-based EN page, not just this one. Cross-page.

**2. Proposed title doubles the brand suffix.**
Evidence: Draft title `AI Consulting Services & Automation | AI Makers` annotated *(52)*. Under `constructMetadata` (plain string) + root `template: "%s | AI Makers"`, this renders `AI Consulting Services & Automation | AI Makers | AI Makers` = **64 chars, double brand**.
Fix: Drop the manual `| AI Makers`; `%s` = `AI Consulting Services & Automation` (35) → 47 rendered. Cross-page pattern — see homepage audit and `_cross-page-findings.md`.

**3. Proposed slug `/ai-consulting` and internal targets `/ai-automation` do not exist.**
Evidence: `sitemap.ts` `staticRoutes` has `/agence-ia`, `/automatisation-ia-workflow` — not `/ai-consulting` or `/ai-automation`. The draft's slug change and the FAQ-3 note ("owned by the /ai-automation page — link there") both assume routes that aren't built.
Why it matters: Same EN slug-scheme dependency flagged on the homepage; links to `/ai-automation` would 404.
Fix: Fold into the EN-routes decision + sitemap ticket. Cross-page.

### 🟡 Medium

**4. Draft's inline "See the full AI PARTNER offer" points to `/offre`, which is not in the sitemap.**
Evidence: §4.4 sets the inline link to `/offre`; the live code (`page.tsx` line 163) links to `/ai-transformation`. `/offre` exists as a route (`src/app/offre/page.tsx`) but is **absent from `sitemap.ts` `staticRoutes`**.
Why it matters: Linking authority to a non-indexed page; also a divergence from the current target.
Fix: Either keep `/ai-transformation` (in sitemap) or add `/offre` to the sitemap (see the offre-page audit — this is that page's own indexability finding).

**5. llms.txt entry still references the old slug.**
Evidence: §8 proposes `[AI Consulting & Automation](https://aimakers.fr/agence-ia) : …` while the page's proposed slug is `/ai-consulting`.
Fix: Update the URL in the llms.txt entry to the final slug.

## What this page gets right
- **Best keyword call in the batch, and it's verified.** Ahrefs US confirms the draft's numbers exactly: ai consulting services 8,500/KD39, ai consultant 3,300/KD36, ai agency 1,600/KD71, ai automation agency 3,300/KD46. Rejecting the brief's "ai agency" head term for the higher-volume/lower-difficulty "ai consulting services" is textbook §5.2 variant-testing.
- **Schema claim is true.** ServicePage emits FAQPage JSON-LD (`buildFaqSchema`, line 97/104); the page adds BreadcrumbList + Service. All three verified in code — the draft's "FAQPage JSON-LD" claim holds.
- **Figures canonical or tagged.** 200+ systems / 50+ companies / 7h-week / 4 written guarantees trace to `public/llms.txt`; 9.6/10 is the live FR hero stat.
- **Cannibalization discipline is explicit** — comparison table reused from the homepage owner (not forked); the "what does an AI consultant do" Q declared canonical here; "how to automate a process" routed to its owner page.
- **Answer-first GEO paragraph is self-contained and citable**; the agency-vs-consultancy reframe carries both keywords in the first two sentences.
- Current route `/agence-ia` is in the sitemap; single H1; related-article internal links all resolve to existing blog routes.

## Priority fix list
1. **(🟠, engineering)** i18n/parameterize ServicePage hard-coded FR strings (hero CTA, proof band, related labels) — blocks all ServicePage EN pages.
2. **(🟠, low)** Remove the manual `| AI Makers` from the title.
3. **(🟠, engineering)** Resolve `/ai-consulting` + `/ai-automation` routes in the EN slug/sitemap ticket.
4. **(🟡, trivial)** Repoint the "AI PARTNER offer" link to a sitemap'd target (or add `/offre` to the sitemap).
5. **(🟡, trivial)** Update the llms.txt entry URL to the final slug.

## Open questions
- Approve `/ai-consulting` as the slug (vs keeping `/agence-ia` for continuity/redirects)?
- Should the "AI PARTNER offer" link go to `/offre` or `/ai-transformation`? (`/offre` is currently not indexed.)

## Cross-page candidates
- **ServicePage hard-coded FR UI strings** — affects every ServicePage-based EN page (agence-ia, audit-ia-entreprise, automatisation-ia-workflow, formation-ia-entreprise, forward-deployed-engineer, plateforme-data-ia, seo-geo — verify each).
- **Double brand suffix** (title template) — recurs here.
- **EN slug scheme vs live FR routes** — recurs here.

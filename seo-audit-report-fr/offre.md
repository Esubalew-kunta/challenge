# Offre AI PARTNER — `/offre`

**Source audited:** `[FR] website-content/offre/offre.md`
**Compared against:** `src/app/offre/page.tsx`, `src/lib/site-config.ts` (`homepageContent.offer` / `.guarantees` / `.finalCta`), `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt`; Ahrefs (France, FR, 2026-07).
**See also:** `_cross-page-findings.md` (`/offre` missing from sitemap; `/offre` vs `/ai-transformation` overlap on AI PARTNER).

## Score: 82 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust Signals | 22 / 25 |
| Factual & Claim Accuracy | 22 / 25 |
| On-Page SEO | 15 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 10 / 15 |

## Verdict
Fix-first, then ship. The content is solid — the guarantee block is the site's strongest and matches the contract and canonical set. But this BOFU conversion page is missing from the sitemap while being referenced by `llms.txt`, carries only BreadcrumbList schema, and its keyword table has two wrong volumes.

## Findings

### 🟠 `/offre` is not in the sitemap, yet it is a live, indexable, llms.txt-referenced conversion page
`src/app/sitemap.ts` `staticRoutes` does **not** include `/offre` (verified — grep returns nothing). Meanwhile `public/llms.txt` line 14 features "[Offre AI PARTNER](https://aimakers.fr/offre)" as a primary page, and the route renders with default `index: true`.
- **Why it matters:** the site's headline BOFU offer page is excluded from the one file that tells Google which URLs to crawl. It can still be discovered via internal links, but it is deprioritized and inconsistent with its llms.txt prominence. Indexability is a §1.5 core criterion.
- **Fix:** add `"/offre"` to `staticRoutes` in `sitemap.ts` (one-line engineering ticket). The draft already tracks this in §À valider — confirm resolved before publish.

### 🟠 Keyword table: `transformation ia` and `agence ia` volumes are both wrong
§2 lists `transformation ia` = **250** (primary) and `agence ia` = **600** (secondary, ceded). Ahrefs FR (2026-07): `transformation ia` = **100**, `agence ia` = **2 400**. The agence-ia master itself correctly cites 2 400.
- **Why it matters:** the primary's volume is 2.5× overstated and the ceded term is 4× understated and contradicts the sibling master. Low competitive stakes (this is a deliberately light-touch brand conversion page), but the figures carry a "Source: Ahrefs" stamp and should be right.
- **Fix:** correct to `transformation ia` 100, `agence ia` 2 400. The keyword strategy (brand-led, ceding generics to owner pages) is fine as-is.

### 🟡 Only BreadcrumbList schema — no Offer or Service structured data on the offer page
`page.tsx` emits `BreadcrumbList` only. For a single-offer page with defined phases and guarantees, a `Service` (or `Offer`) schema would add eligibility for richer results and reinforce GEO.
- **Fix:** add a `Service`/`Offer` JSON-LD block (engineering ticket). Not a defect in the copy; an opportunity the draft already notes.

### 🟡 Live title/meta over budget (proposed fixes both)
Live title `AI PARTNER : votre département IA, de l'audit au scale` renders ~65 with the ` | AI Makers` suffix; live meta ~205 chars. Proposed title `AI PARTNER : votre département IA` (~43 rendered) and proposed meta (158) are correct.
- **Fix:** ship the proposed values.

### 🟡 `+1 500 automatisations` is a non-canonical catalog figure
§4.2 Phase 2 keeps "accès à +1 500 automatisations" verbatim from `site-config`. It is not in the `llms.txt` canonical set. Kept verbatim (not fabricated) and tagged `[to validate]`.
- **Fix:** confirm the source of truth for this number, or tag it in the rendered copy until confirmed. Tracked.

## What this page gets right
- **Guarantee block is the site's strongest and fully accurate:** the four garanties (Audit / 30 jours / Champions / Sortie) match `homepageContent.guarantees`, `public/llms.txt`, and the homepage master, each stated with its exact condition. The credibility line ties the guarantees to the real capacity model (3 clients/mois). No softening, no inflation.
- **Maturity grid clarified consistently:** "scoring de maturité IA sur 6 axes (grille propriétaire) /24" — 6 axes × 4 = 24, consistent with the audit page and homepage /24 (and confirming `/diagnostic-ia`'s /20 is the outlier).
- **Canonical figures throughout** (+50, +200, +2 500, 7h) trace to `llms.txt`.
- **Correct keyword humility:** the page cedes `transformation ia` deep content to `/ai-transformation` and `agence ia` to `/agence-ia` — right anti-cannibalization posture for a conversion page.
- **Answer-first GEO paragraph** fully describes the 3-phase AI PARTNER offer and is self-contained/citable.
- **Real, verifiable scarcity** ("physiquement limitée, pas artificiellement") rather than false urgency.
- **Internal links valid:** `/contact`, `/garanties`, `/ai-transformation`, `/audit-ia-entreprise` all exist and are in the sitemap.

## Priority fix list
1. **(🟠, trivial engineering)** Add `/offre` to `sitemap.ts`.
2. **(🟠, trivial)** Correct `transformation ia` (100) and `agence ia` (2 400) volumes.
3. **(🟡, low effort engineering)** Add Service/Offer JSON-LD.
4. **(🟡, trivial)** Ship the shortened title and meta.

## Open questions
- Confirm `/offre` vs `/ai-transformation` division of labor — both describe the 3-phase AI PARTNER program; verify no full-content duplication (cross-page).
- What is the source of "+1 500 automatisations"?

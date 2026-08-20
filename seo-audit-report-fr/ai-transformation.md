# Transformation IA — `/ai-transformation`

**Source audited:** `[FR] website-content/ai-transformation/ai-transformation.md`
**Compared against:** `src/app/ai-transformation/page.tsx`, `src/lib/offer-pages/transformation.ts`, `src/lib/site-config.ts` (`offer.model`, guarantees), `src/app/sitemap.ts`, `public/llms.txt`; Ahrefs (France, FR, 2026-07).
**See also:** `_cross-page-findings.md` (`/ai-partner` broken link; `/offre`↔`/ai-transformation` 3-phase overlap; "Partenaire Anthropic").

## Score: 88 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust Signals | 22 / 25 |
| Factual & Claim Accuracy | 23 / 25 |
| On-Page SEO | 17 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 12 / 15 |

## Verdict
Ship after fixing the broken internal link. This is the site's strongest long-form sales page: verified keyword blend, a genuinely current MCP technical claim, first-hand dogfooding proof, and all three schema types implemented. One internal link points to a non-existent route, and the "Partenaire Anthropic" claim recurs unverified.

## Findings

### 🟠 Internal link "Voir l'offre AI PARTNER complète → `/ai-partner`" targets a route that does not exist
§4.7 and §6 both point the model/offer link to `/ai-partner`. There is no `/ai-partner` route in `src/app/` (verified — the AI PARTNER offer page is `/offre`, per `sitemap`-adjacent config and `llms.txt` line 14). The §4.7 rationale even says the model card renders `offer.model` "de /offre" — the link contradicts its own source note.
- **Why it matters:** a broken internal link on a pillar page wastes link equity and dead-ends the user at the exact conversion moment. Internal-link targets must exist (§6.6).
- **Fix:** change the target to `/offre` in both places.

### 🟠 "Partenaire Anthropic" asserted as fact, unverified (recurring site-wide)
§4.5 note: "AI Makers est Partenaire Anthropic, l'éditeur de Claude à l'origine du standard MCP." The homepage master carries the same claim tagged `[à valider autorisation]`; here it is stated flatly, no tag.
- **Why it matters:** a named partnership is an E-E-A-T credential (§1.1) and must be verifiable. Inconsistent tagging (flagged on homepage, unflagged here) is itself a tell.
- **Fix:** confirm Anthropic partner-program authorization, or downgrade to a factual, defensible phrasing ("nous construisons sur Claude / MCP") and tag until confirmed. Cross-page item.

### 🟡 `agence ia` (2 400) worked as a secondary here while `/agence-ia` owns it as primary
§2 blends `agence ia` into this page because the true FR primary `transformation ia` is thin (100/mo). `/agence-ia` is the declared owner of that term.
- **Assessment:** acceptable — the title and H1 lead with "Transformation IA," and agence ia stays in body/meta only, so `/agence-ia` still wins the head-to-head. Keep it out of this page's title/H1 to avoid drift. No copy change required, but note the shared term.

## What this page gets right
- **Keyword table is accurate and the blend is sound:** `transformation ia` 100 ✓, `agence ia` 2 400/KD54 ✓, `transformation digitale ia` 70 ✓, `automatisation ia` 900/KD24 ✓ — all match Ahrefs FR. Correctly diagnoses the thin FR head term and blends rather than over-repeating a low-volume phrase.
- **Title/meta fixed correctly:** live title (65 chars) trimmed to bare `Transformation IA : le programme complet` (40) → 52 rendered with the auto-suffix; meta trimmed to 156. Template handling correct.
- **Current, correct technical claim (rare and valuable):** the MCP description — "standard ouvert lancé par Anthropic et adopté par OpenAI et Google" — is factually accurate as of 2025 and signals real technical literacy to the ICP (§1.2 technical-currency criterion).
- **First-hand dogfooding proof:** "On s'applique à nous-mêmes ce qu'on vend" / "6 personnes → production d'une équipe de 40" (tagged `[à valider]`) with four named internal systems — genuine experience signal.
- **All figures canonical or honestly tagged:** +50/+200/+2 500/7h canonical; Sage +70% `[à valider — cas non publié]`, 60-80% `[à valider]`, 6=40 `[à valider]`, logos `[à valider pour usage]`. Native FR 70 000 €/an kept (not a bad USD conversion).
- **Schema genuinely implemented:** `BreadcrumbList` + `Service` + `FAQPage` in `page.tsx`. Route in `sitemap.ts`.
- **Stacked negations reduced ~7→2, thesis lines kept** ("Ce n'est pas un problème de technologie. C'est un problème de système."); shared blocks (offer.model, guarantees, testimonials) mono-sourced, not forked.

## Priority fix list
1. **(🟠, trivial)** Repoint `/ai-partner` → `/offre` in the model card and related links.
2. **(🟠, low effort — needs client)** Verify or re-phrase "Partenaire Anthropic"; tag until confirmed, consistently with the homepage.
3. **(🟡, none)** Keep `agence ia` out of this page's title/H1 so `/agence-ia` stays the owner.

## Open questions
- Is AI Makers an authorized Anthropic partner? (Same question as homepage — resolve once, site-wide.)
- Confirm the canonical owner of the 3-phase AUDIT/BUILD/SCALE method between `/ai-transformation` (long form) and `/offre` (conversion) — the phase content overlaps heavily (cross-page).
- Sage +70% approved for public use? (Marked "cas non publié.")

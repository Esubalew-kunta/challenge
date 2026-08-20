# SEO & GEO → Generative Engine Optimization — EN Content Master · route `/seo-geo` → proposed `/generative-engine-optimization`

**Source audited:** `[EN] website-content/seo-geo/seo-geo.md`
**Compared against:** `src/app/seo-geo/page.tsx`, `src/lib/offer-pages/seo-geo.ts`, `src/lib/site-config.ts` (Sage case, bookingProof), `src/app/sitemap.ts`, `src/lib/metadata.ts` + root template, `public/llms.txt`
**Data source:** Ahrefs keywords-explorer-overview (US), 2026-07-15
**See also:** `_cross-page-findings.md`

## Score: 90 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust Signals | 24 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 12 / 15 |

## Verdict
Ship after fixes. One of the strongest pages: field map matches the code, all three schemas are implemented, the keyword read correctly avoids the "geo" 55k trap, and the page cites a real academic source to get GEO terminology right. Two things to settle first: the load-bearing "+70% Sage" proof is tagged `[to validate]` and its case study is unpublished, and the slug/title need the shared fixes.

## Findings

### 🟠 High

**1. The page's single load-bearing proof (+70% Sage) is tagged `[to validate]` and the linked case study is unpublished.**
Evidence: "+70% visibility for Sage" leads the hero, the meta description, the shift facts, and the why-us section. §9 tags it `[to validate]` (case-studies.ts "inProgress"), and §6 links proof to `/etudes-de-cas/sage-geo`. Per `sitemap.ts` (lines 98–107), only client-validated case studies are published/indexed — in-progress ones are "noindex et hors sitemap". So the whole page is built around a figure and a case not yet cleared for publication.
Why it matters: §1.1/§7.2 — a named-client result is held to the strictest standard; here it's not decorative, it's the entire proof of the page.
Fix: Get explicit client sign-off on the +70% figure and publish the Sage case before this page ships. If it can't be cleared, the page needs a different proof spine.

**2. Proposed slug `/generative-engine-optimization` is not a route / not in the sitemap.**
Evidence: `sitemap.ts` has `/seo-geo`. New EN route required (the change is sound — `/seo-geo` is opaque to EN searchers).
Fix: EN slug + routes + sitemap ticket. Cross-page.

**3. Proposed title doubles the brand suffix.**
Evidence: `Generative Engine Optimization (GEO) | AI Makers` *(52)* → through `constructMetadata` + `template: "%s | AI Makers"` renders `… | AI Makers | AI Makers` ≈ **64 chars**.
Fix: Drop the manual `| AI Makers` (`%s` = `Generative Engine Optimization (GEO)` = 36 → 48 rendered). Cross-page pattern.

### 🟡 Medium

**4. Hard-coded French labels in `page.tsx` have no EN copy.**
Evidence: The Sage case labels `Avant` / `Après` / `Comment` (lines 196/204/211), the method label `Le livrable` (line 358), and the RelatedContent descriptions (lines 524/529/534) are inline FR, outside `seo-geo.ts`, and the draft provides no EN.
Why it matters: §6.7 — render in French on the EN page.
Fix: Add EN for these inline labels/descriptions.

## What this page gets right
- **Keyword read is exemplary and verified.** Ahrefs US: generative engine optimization 7,900/KD48 (primary), answer engine optimization 4,900/KD43, llm seo 1,500/KD12 (the low-KD win), ai seo 8,500/KD60. Critically, the draft identifies "geo" at 55,000/KD79 as a **namespace mirage** (geography / GEO Group) and refuses it — confirmed exactly (§5.4 collision-detection done right). The honest 7,900-primary matches the service and the page's own definition.
- **Real academic authority, correctly cited.** The GEO term origin — Aggarwal et al., Princeton, KDD 2024, arXiv:2311.09735, "up to +40% visibility" — is accurate and current (§1.2), and it's an authoritative external citation, not a name-drop. This is the rare page that earns its "citations to authoritative sources" points.
- **Honest expectation framing.** "We don't promise you a position — nobody controls what a model decides to cite" (§4.7) is exactly the non-over-promising stance §1.2 rewards, paired with a concrete measurable commitment.
- **Schema verified:** BreadcrumbList + Service + FAQPage in `page.tsx` (lines 95–97) — matches the draft.
- **Dogfooding is provable and on-page:** the page itself uses llms.txt + Service/FAQ/Breadcrumb schema + answer-first structure — the method demonstrated on the very page selling it. `seo-geo.ts` is genuinely imported (field map correct).
- **Answer-first GEO paragraph** defines "Generative Engine Optimization" self-containedly with the academic origin and the Sage result — the ideal citable block. Sage testimonial (Mickaël Mina, AI Director) is the single sourced quote, translated not invented. Current route in sitemap; other internal links resolve.

## Priority fix list
1. **(🟠, client sign-off)** Clear the +70% Sage figure and publish the case study before shipping — the page depends on it.
2. **(🟠, engineering)** Create `/generative-engine-optimization` route + sitemap entry.
3. **(🟠, low)** Drop the manual `| AI Makers` from the title.
4. **(🟡, low)** Add EN for the hard-coded FR labels (Avant/Après/Comment, Le livrable, related descriptions).

## Open questions
- Is the Sage +70% AI-visibility result cleared for EN publication, and when does the Sage case study move from in-progress to published/indexed?
- Approve `/generative-engine-optimization` as the slug (recommended — `/seo-geo` is opaque to EN searchers)?

## Cross-page candidates
- **Double brand suffix** (title template) — recurs.
- **EN slug scheme vs live FR routes** — recurs.
- **Hard-coded FR labels in page templates** (Avant/Après/Comment, related descriptions) — same pattern as ai-transformation.
- **Sage +70% as shared proof** — the same case powers homepage, ai-transformation, and this page; one sign-off covers all three.

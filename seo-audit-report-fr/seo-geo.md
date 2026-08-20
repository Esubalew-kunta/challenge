# SEO & GEO — `/seo-geo`

**Source audited:** `[FR] website-content/seo-geo/seo-geo.md`
**Compared against:** `src/app/seo-geo/page.tsx`, `src/lib/offer-pages/seo-geo.ts` (`seoGeoMeta`), `src/lib/site-config.ts` (Sage testimonial), `src/lib/case-studies.ts` (published gate), `src/app/sitemap.ts`, `public/llms.txt`; Ahrefs (France, FR, 2026-07).
**See also:** `_cross-page-findings.md` (Sage +70% gate spans homepage/ai-transformation/seo-geo; double-brand title bug).

## Score: 83 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust Signals | 20 / 25 |
| Factual & Claim Accuracy | 20 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 13 / 15 |

## Verdict
Block until the Sage proof is validated and the testimonial is restored to source. The content is excellent — a genuinely sourced academic anchor, real dogfooding, honest "we can't promise a position" framing. But the page's entire proof spine is an unvalidated +70% from an unpublished case, its proof link points at a noindex page, and the proposed Sage testimonial has been altered from the sourced original.

## Findings

### 🟠 Proof backbone is an unvalidated "+70% Sage" from an unpublished/noindex case (page is gated — keep it gated)
The +70% appears in the hero, proof bar, facts, why-us, meta, and llms.txt entry, and is tagged `[to validate]` throughout. It comes from a case that is `inProgress`/noindex in `case-studies.ts`, so `/etudes-de-cas/sage-geo` is **not** in `getPublishedCaseStudies()` and thus not in the sitemap. The internal link "Cas Sage : +70% → /etudes-de-cas/sage-geo" (§6) therefore points at a noindex page.
- **Why it matters:** the whole page persuades on one client number that isn't yet client-approved or published; linking "proof" to a noindex page compounds it. §2 makes an unvalidated results figure at least 🟠.
- **Fix:** hold publication until Sage signs off on +70% and the case study is published (moves it into the sitemap and makes the proof link valid). The draft's explicit GATE is correct — enforce it. One sign-off also clears the same claim on the homepage and ai-transformation.

### 🟠 Live title renders the brand twice — `seoGeoMeta.title` hand-writes " | AI Makers"
`src/lib/offer-pages/seo-geo.ts` line 22: `title: "SEO & GEO : être cité par les IA | AI Makers"`, passed as a string into `constructMetadata`; `layout.tsx` appends the same suffix → **`SEO & GEO : être cité par les IA | AI Makers | AI Makers`** live. Same bug class as `/ai-operating-system`.
- **Fix:** remove the hand-written " | AI Makers" from `seoGeoMeta.title`; the draft's bare `SEO & GEO : être cité par les IA` (32 → 44 rendered) is correct.

### 🟠 Proposed Sage testimonial diverges from the sourced original (adds a sentence)
§4.8 proposed text: "…exploitable **pour** nos équipes métiers. Leur capacité à **saisir vite** les enjeux… **Un partenaire sérieux et pédagogue.**" The `site-config` source reads "…exploitable **par** nos équipes métiers. Leur capacité à **comprendre rapidement** les enjeux…" and contains **no** "partenaire sérieux et pédagogue" sentence.
- **Why it matters:** altering a real named person's (Mickaël Mina, Sage) quote — especially adding words — is a §7.2 credential-integrity issue, not a stylistic edit. The draft tags it `[to validate]` but presents modified wording as the quote.
- **Fix:** use the verbatim `site-config` quote, unchanged. Do not add sentences to a real testimonial.

### 🟡 Primary keyword understated; a strong on-intent secondary missed
§2 lists `generative engine optimization` = 200. Ahrefs FR (2026-07): **1 100, KD 21** — the term is materially more valuable than claimed (and the draft's "own the exact term early" strategy is even better than it thinks). The draft correctly rejects bare `geo` as a namespace mirage (confirmed: `geo` FR 1 800 but global 236 000, branded/navigational). But it missed **`seo geo` = 800, KD 12** — a clean, on-intent, low-difficulty secondary this exact page could own. `référencement ia` is 350 (not 150).
- **Fix:** correct `generative engine optimization` to 1 100/KD21 and `référencement ia` to 350; add `seo geo` (800/KD12) as a secondary.

## What this page gets right
- **Best-practice sourced citation (the §1.1 ideal):** the GEO origin is attributed to a real, verifiable paper — "GEO: Generative Engine Optimization," Aggarwal et al. (Princeton), KDD 2024, arXiv:2311.09735, with the +40% figure from the study itself. Linked authority, not name-dropped. Exemplary.
- **Genuine dogfooding, provable on the page:** llms.txt at root, Service/FAQ/Breadcrumb schema, answer-first structure — the page literally demonstrates the technique it sells. The strongest possible "why us" for a GEO vendor.
- **Honest ceiling framing:** "On ne vous promet pas une position, personne ne contrôle ce qu'un modèle décide de citer" — commits to measurement (baseline day 1, monthly curve, share of voice) rather than over-promising rankings. Correct §1.2 risk framing.
- **Schema genuinely implemented:** `BreadcrumbList` + `Service` + `FAQPage` in `page.tsx`. Route `/seo-geo` in `sitemap.ts`.
- **Excellent, citable GEO answer-first paragraph** anchored to the academic source; llms.txt entry consistent.
- **Correct namespace-collision judgment** on bare `geo`; stacked negations reduced ~9→3 with signature lines kept ("Ce n'est pas de la magie, c'est de la méthode").
- **Right SEO+GEO positioning** (additive, not a replacement fad) — reassures the SEO-savvy buyer.

## Priority fix list
1. **(🟠, blocking — needs client)** Do not publish until Sage validates +70% and the case study is published (also fixes the noindex proof link). Clears homepage + ai-transformation too.
2. **(🟠, trivial)** Restore the Sage testimonial to the verbatim `site-config` text; remove the added sentence.
3. **(🟠, trivial engineering)** Remove the hand-written " | AI Makers" from `seoGeoMeta.title`.
4. **(🟡, trivial)** Correct keyword volumes (generative engine optimization 1 100; référencement ia 350) and add `seo geo` (800) as a secondary.

## Open questions
- Has Sage approved "+70% de visibilité IA" for public use, and when is `/etudes-de-cas/sage-geo` published? Until both, this page and its meta cannot ship as written.
- Which is the authoritative Mickaël Mina quote — the `site-config` text is the only sourced version.

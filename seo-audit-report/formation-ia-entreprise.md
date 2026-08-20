# Formation IA entreprise → AI Training for Teams — EN Content Master · route `/formation-ia-entreprise` → proposed `/ai-training-for-teams`

**Source audited:** `[EN] website-content/formation-ia-entreprise/formation-ia-entreprise.md`
**Compared against:** `src/app/formation-ia-entreprise/page.tsx`, `src/lib/offer-pages/formation.ts`, `src/lib/formations.ts`, `src/lib/faq-schema.ts`, `src/lib/metadata.ts` + root template, `src/app/sitemap.ts`, `public/llms.txt`
**Data source:** Ahrefs keywords-explorer-overview (US), 2026-07-15
**See also:** `_cross-page-findings.md`

## Score: 86 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust Signals | 24 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 12 / 15 |
| Technical SEO & GEO | 10 / 15 |

## Verdict
Fix-first. Content quality and compliance discipline are high (the Qualiopi/OPCO restraint is exemplary, the keyword read is honest about a small pillar), but the draft's field map points at the wrong file: every section maps onto `offer-pages/formation.ts`, which no page currently imports. As written the copy won't reach the live page.

## Findings

### 🟠 High

**1. The section field map targets an orphaned file — copy won't ship where mapped.**
Evidence: §4 maps every block to `formation.ts:formationHero`, `formationProofStats`, `formationProblem`, `formationCatalogue`, `formationMechanics`, `formationChampions`, `formationGuaranteeSection`. Those exports do exist in `src/lib/offer-pages/formation.ts` — but `grep -rn "offer-pages/formation" src/` returns **nothing**: no file imports it. The live `/formation-ia-entreprise` page (`src/app/formation-ia-entreprise/page.tsx`) renders **inline JSX** (hero lines 175–185, `pourquoiPoints`, `pedagogie`, inline `faq`) plus `@/lib/formations` (`formations`, `formateurs`, `formationStats`, `formationPhotos`). Editing `offer-pages/formation.ts` per the draft changes nothing on the page.
Why it matters: §6.7 — proposed copy with no live landing field cannot ship as written; a producer would edit dead code.
Fix: Decide the target structure before translating: either (a) wire `offer-pages/formation.ts` into the page as a refactor and then fill it with EN copy, or (b) remap the EN copy onto the actual inline blocks + `@/lib/formations`. Engineering + content decision.

**2. ServicePage-style shared blockers do not apply here, but the page carries FR-only local SEO that shouldn't ship in EN.**
Evidence: `page.tsx` lines 652–685 render a "Formation IA près de chez vous" block linking `/formation-ia/{paris,lyon,…,casablanca}` — French/Moroccan city landing pages. The draft's §4 never addresses this block; an EN render would show a French local-SEO strip.
Why it matters: Irrelevant to a US/GB audience and dilutes the EN page; those city routes are FR-intent.
Fix: Drop or replace the villes block for the EN page (engineering flag on the EN template).

**3. Proposed title doubles the brand suffix.**
Evidence: `AI Training for Teams, on Your Real Work | AI Makers` *(52)* → through `constructMetadata` + `template: "%s | AI Makers"` renders `… | AI Makers | AI Makers` = **64 chars, double brand**.
Fix: Drop the manual `| AI Makers`. Cross-page pattern.

**4. Proposed slug `/ai-training-for-teams` is not a route / not in the sitemap.**
Evidence: `sitemap.ts` has `/formation-ia-entreprise`. The homepage offers card 3 also points here. New EN route required.
Fix: EN slug + routes + sitemap ticket. Cross-page.

### 🟡 Medium

**5. Draft asserts a "Cinq vs Six" count bug that is not present in the live page.**
Evidence: §4.4 says "the FR copy has a 5-vs-6 mismatch — header says Cinq… carry the correction". The live page says **"Six" consistently**: metadata "6 programmes" (line 30), hero "Six programmes hands-on" (line 182), catalogue H2 "Six formations" (line 258). `grep -in "cinq"` on the page returns nothing.
Why it matters: §3.1 — the annotation wasn't verified against live code; the "fix" is unnecessary and could confuse the producer.
Fix: Drop the correction note (or point it at wherever the "Cinq" actually was — not this page).

## What this page gets right
- **Exemplary Qualiopi/OPCO restraint.** The draft explicitly refuses to add a Qualiopi certification or "OPCO up to 100%" funding claim, tagging `[to validate placement]` and instructing not to invent a funding percentage. Verified: qualiopi/opco appear nowhere in this page's code or `public/llms.txt` (only in unrelated blog markdown). This is §4.1 compliance done exactly right — the single most likely place to get a regulated claim wrong, and the draft got it right.
- **Honest keyword read, fully verified.** Ahrefs US confirms: ai training for employees 450/KD22 (primary), ai upskilling 500/KD17, ai training for executives 300/KD42, corporate ai training 150/(no KD), generative ai training 400/KD39. The draft correctly concludes EN training is a *small* pillar and that the volume lives on the agency/automation pages — and refuses to chase MOOC/cert-seeker noise (§5.2, §5.4).
- **Uses the canonical figure, corrects a stale one.** 2,500+ trained (llms.txt), explicitly replacing the brief's stale "1,250". 9.6/10 + 100%-reco from `bookingProof`.
- **Schema implemented and richer than claimed:** BreadcrumbList + `ItemList`/`Course` (catalogue) + FAQPage (`faqPageSchema(faq)`) all in `page.tsx`. The draft's FAQPage claim holds, with bonus Course schema.
- **Strong E-E-A-T:** real, named practitioner-trainers (Othmane Halim, Maneesh Behera, Walid Boulanouar, Othmane Khadri, Adel Dahani, Edouard Willemsen) with the "trained by people who ship to production" differentiator; signed testimonials reused verbatim, not rewritten.
- **Answer-first GEO paragraph** names all six programmes and leads with the outcome; a genuinely deep hub, not thin. Sub-page links and blog links resolve.

## Priority fix list
1. **(🟠, engineering + content)** Resolve the target structure: wire `offer-pages/formation.ts` into the page, or remap EN copy to the live inline blocks / `@/lib/formations`.
2. **(🟠, engineering)** Drop/replace the FR villes local-SEO block for the EN page.
3. **(🟠, engineering)** Create `/ai-training-for-teams` route + sitemap entry (homepage links here).
4. **(🟠, low)** Drop the manual `| AI Makers` from the title.
5. **(🟡, trivial)** Remove the incorrect "Cinq→Six" correction note.

## Open questions
- Is `offer-pages/formation.ts` a planned refactor target for this page, or dead code? The answer decides where the EN copy goes.
- Confirm the EN page should drop French/Moroccan city links entirely (vs. an EN-market local strategy).
- Hold the line on Qualiopi/OPCO: is the certification live and the funding rate confirmed? Until then, no funding claim ships.

## Cross-page candidates
- **Double brand suffix** (title template) — recurs.
- **EN slug scheme vs live FR routes** — recurs; homepage links here.
- **Orphaned `offer-pages/*.ts` content modules** — check whether other pages' drafts (ai-transformation reuses this pattern) map onto files that are/aren't imported.

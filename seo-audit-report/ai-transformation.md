# Transformation IA → AI Transformation — EN Content Master · route `/ai-transformation` (unchanged)

**Source audited:** `[EN] website-content/ai-transformation/ai-transformation.md`
**Compared against:** `src/app/ai-transformation/page.tsx`, `src/lib/offer-pages/transformation.ts`, `src/lib/site-config.ts` (`offer.model`, `guarantees`), `src/lib/metadata.ts` + root template, `src/app/sitemap.ts`, `public/llms.txt`
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
Ship after minor fixes. The strongest page in the batch: the slug stays `/ai-transformation` (already in the sitemap), the field map matches the code exactly (`transformation.ts` is genuinely imported), all three schemas are implemented, and the keyword strategy finds real low-difficulty wins. Two things before publish: a handful of hard-coded French labels in the page template have no EN copy, and the title doubles the brand suffix.

## Findings

### 🟠 High

**1. Hard-coded French labels in `page.tsx` have no EN copy in the draft.**
Evidence: Several strings are inline in `src/app/ai-transformation/page.tsx`, not in `transformation.ts`, so the draft's field map (which only covers the data file) misses them: the phase-gain label `Ce que vous y gagnez` (line 460), the intermediate CTA `Vous voulez savoir à quoi ressemblerait ce programme chez vous ?` (line 490), and the case-study labels `Avant` / `Après` / `Comment` (lines 601/609/617).
Why it matters: §6.7 — these render in French on the EN page; the draft provides no EN for them.
Fix: Add EN for these inline labels (small engineering/i18n edit on this page's template).

**2. Proposed title doubles the brand suffix.**
Evidence: `AI Transformation: Audit, Systems, Trained Teams | AI Makers` *(56)* → through `constructMetadata` + `template: "%s | AI Makers"` renders `… | AI Makers | AI Makers` ≈ **68 chars**.
Fix: Drop the manual `| AI Makers`. Cross-page pattern.

### 🟡 Medium

**3. §4.7 "rules" map onto the shared `offer.model` — confirm single source and content match.**
Evidence: The draft's §4.7 proposes 4 rule texts and flags uncertainty ("transformationRules only exposes badge/title; rule text is rendered in page.tsx"). Verified: `page.tsx` line 527 renders `offer.model` for the 4 rule cards (and `offer.subtitle` for the subhead) — the **same** `offer.model` block the `/offre` page renders (and whose EN copy the offre draft omitted). So `offer.model` is shared across `/ai-transformation` and `/offre`.
Why it matters: §8.3 — the two pages must agree; translate `offer.model` once. Also confirm the draft's 4 proposed rule texts actually match the 4 `offer.model` items.
Fix: Treat `offer.model` EN copy as single-source (this draft can own it); verify the 4 proposed rules match the live items; ensure `/offre` renders the same translation.

**4. The "60–80%" figure is used here but was deliberately dropped on the automation page — inconsistent handling of the same unsourced claim.**
Evidence: §4.3 pain[0] uses `figure 60–80%`; the automatisation-ia-workflow draft explicitly *dropped* the identical "60–80% absorption" figure as unverifiable. Neither is in `public/llms.txt`. The Facts table here lists it as "recurring claim" with no `[to validate]` tag.
Why it matters: §7.3 — the same non-canonical figure should be tagged or dropped consistently site-wide.
Fix: Either tag `60–80% [to validate]` here or drop it, matching the automation page's decision.

**5. Method-owner internal link points to `/ai-partner`, which doesn't exist yet.**
Evidence: §6 "See the full AI PARTNER offer → /ai-partner" (the offre page's proposed new slug).
Fix: Fold into the EN slug/sitemap ticket. Cross-page.

## What this page gets right
- **Best easy-win keyword identification in the batch, verified.** Ahrefs US: ai transformation 1,600/KD41 (head), and the value play — **ai transformation consulting 800/KD2** and **ai transformation services 200/KD3** — both near-zero difficulty, high intent, and literally what this page is. enterprise ai transformation 300/KD44 and ai transformation strategy 250/KD27 confirmed as supporting terms. Exactly the §5.2 discipline.
- **Field map matches the code.** Unlike the formation page, `offer-pages/transformation.ts` IS imported by `page.tsx` (lines 21–36); every mapped section lands in a real field.
- **All three schemas implemented:** BreadcrumbList + Service + FAQPage in `page.tsx` (lines 119–121) — the draft's claim is fully true.
- **Slug is stable and indexed:** stays `/ai-transformation`, already in `sitemap.ts` — no route dependency for this page.
- **Technical claims are current and correct:** the MCP description (open standard from Anthropic, adopted by OpenAI and Google) is accurate as of 2026 (§1.2). Anthropic Partner status is real (rendered by `PartnerStrip`).
- **First-hand dogfooding proof** (the internal systems, "we run on what we sell") is real, pulled from `fleet.systems.filter(internal)` — not a claim. Uncertain figures (6 people = team of 40; $80k+/yr) are tagged `[to validate]`.
- **Answer-first GEO paragraph** defines "AI transformation" self-containedly (audit → production → training) — the ideal citable answer for the head term. Guarantees reuse the shared owner block; testimonials reuse homepage translations (single source).

## Priority fix list
1. **(🟠, engineering)** Add EN for the hard-coded `page.tsx` labels (gain label, intermediate CTA, Avant/Après/Comment).
2. **(🟠, low)** Drop the manual `| AI Makers` from the title.
3. **(🟡, content)** Own the shared `offer.model` EN copy here and confirm `/offre` renders the same translation.
4. **(🟡, trivial)** Tag or drop the 60–80% figure to match the automation page.
5. **(🟡, engineering)** Resolve the `/ai-partner` link target (EN slug ticket).

## Open questions
- Confirm the $80k+/yr figure (converted from 70,000€) for the US/GB market, and the "6 people = team of 40" claim — both currently `[to validate]`.
- Should the 60–80% claim be tagged `[to validate]` everywhere it appears, or dropped site-wide?

## Cross-page candidates
- **Double brand suffix** (title template) — recurs.
- **Shared `offer.model` block** rendered on both `/ai-transformation` and `/offre` — single-source the EN translation.
- **Inconsistent handling of the 60–80% figure** across pages (used here, dropped on automation).
- **EN slug scheme** — this page links to `/ai-partner`.

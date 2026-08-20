# AI for Banking, Insurance & Brokers — `/en/industries/ai-for-financial-services`

**Source audited:** branch `feat/en-full-parity`, production build served locally.
**Compared against:** rendered HTML (measured), `src/lib/i18n.ts`, served `sitemap.xml`,
codebase grep for schema, `docs/EN-LAUNCH.md`.
**Page type (§9):** Service / sector landing (financial services) — MOFU
**See also:** [`_cross-page.md`](./_cross-page.md) — site-wide patterns are documented
there once and are **not** repeated here.

## Score: 79 / 100

| Category | Score | Weight |
|---|---:|---:|
| E-E-A-T & Trust Signals | 7 | 25 |
| Factual Accuracy & Substantiation | 23 | 25 |
| On-Page SEO | 20 | 20 |
| Content Quality & Depth | 14 | 15 |
| Technical SEO | 15 | 15 |
| **Total** | **79** | **100** |

*Grade band: Solid. Targeted fixes.*

> §1.1 reallocation applied: this sector has no expert-reviewer convention for B2B
> marketing pages, so the 5 reviewer points move to citations (→10), per the §1.1 note.
> Stated, not silently dropped.

### Measured facts

| Measure | Value |
|---|---|
| HTTP status | 200 |
| Title (rendered, incl. `\| AI Makers`) | `AI for Banking, Insurance & Brokers \| AI Makers` — **47** chars |
| Meta description | **154** — in budget |
| `<h1>` count | 1 |
| `<h2>` / `<h3>` | 8 / 15 |
| Body words (header/footer stripped) | 725 |
| JSON-LD emitted | `BreadcrumbList`, `FAQPage` |
| hreflang | reciprocal fr/en/x-default ✅ |
| In `sitemap.xml` | yes ✅ |
| Canonical | `https://aimakers.fr/en/industries/ai-for-financial-services` ✅ |

## Verdict

Ships. The page is well-differentiated from its seven siblings, its claims are either canonical or visibly tagged, and every technical signal measured clean — schema, canonical, hreflang, sitemap, single H1. The score is held down almost entirely by the site-wide E-E-A-T gap (CP-3), not by anything wrong on this page. Fix the cross-page items and this page moves into the high 80s without a word of its copy changing.

## Findings

> Site-wide findings **CP-1** (French badge labels), **CP-2** (unverified partner
> badges) and **CP-3** (no author / reviewer / updated date) apply to this page and are
> documented in `_cross-page.md`. They are the reason the E-E-A-T score is what it is.
> They are not restated as page findings — the fix belongs at the source, not here.

🟡 **"One brokerage client reported ROI within the first month `[to validate]`"** renders live. Tagged correctly per §7.3, traced to `secteurs.ts` and absent from `llms.txt`. An ROI claim is the kind a competitor or a regulator will ask you to evidence; give it a source or cut it. See CP-4.

## What this page gets right

- **Sector-native differentiation.** Compliance-by-design framing with human validation retained on every decision, and the "documented for your compliance team and DPO" line gives the regulated buyer a concrete artefact rather than a reassurance.
- **Structured data verified in code, not claimed.** `BreadcrumbList` + `FAQPage` are emitted and parse as valid JSON — grepped in `faq-schema.ts` and confirmed in the rendered HTML, per §6.5.
- **Indexability clean.** In `sitemap.xml`, self-referencing canonical, reciprocal hreflang, no `noindex`, one `<h1>`.
- **Title is well inside budget** at 47 chars including the auto-appended `| AI Makers` — no double brand suffix, which the masters' reconciliation notes flag as a repeat offence.
- **725 words** of substantive body copy, comfortably clear of thin.

## Priority fix list

1. Site-wide **CP-1** (French badge labels) — cheapest fix, affects this page.
2. Site-wide **CP-3** (author/reviewer/updated) — the single largest score lever here.
3. Meta description is in budget — no action.
4. Validate or cut the tagged figures on this page (see CP-4).

## Open questions

- Re-validate the master's Ahrefs volumes against live data before treating the stated primary keyword as accepted (§5.1). Not performed in this audit.


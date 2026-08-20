# AI for Biotech & Life Sciences — `/en/industries/ai-for-life-sciences`

**Source audited:** branch `feat/en-full-parity`, production build served locally.
**Compared against:** rendered HTML (measured), `src/lib/i18n.ts`, served `sitemap.xml`,
codebase grep for schema, `docs/EN-LAUNCH.md`.
**Page type (§9):** Service / sector landing (life sciences) — MOFU
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
| Title (rendered, incl. `\| AI Makers`) | `AI for Biotech & Life Sciences \| AI Makers` — **42** chars |
| Meta description | **149** — in budget |
| `<h1>` count | 1 |
| `<h2>` / `<h3>` | 8 / 15 |
| Body words (header/footer stripped) | 814 |
| JSON-LD emitted | `BreadcrumbList`, `FAQPage` |
| hreflang | reciprocal fr/en/x-default ✅ |
| In `sitemap.xml` | yes ✅ |
| Canonical | `https://aimakers.fr/en/industries/ai-for-life-sciences` ✅ |

## Verdict

Ships. The page is well-differentiated from its seven siblings, its claims are either canonical or visibly tagged, and every technical signal measured clean — schema, canonical, hreflang, sitemap, single H1. The score is held down almost entirely by the site-wide E-E-A-T gap (CP-3), not by anything wrong on this page. Fix the cross-page items and this page moves into the high 80s without a word of its copy changing.

## Findings

> Site-wide findings **CP-1** (French badge labels), **CP-2** (unverified partner
> badges) and **CP-3** (no author / reviewer / updated date) apply to this page and are
> documented in `_cross-page.md`. They are the reason the E-E-A-T score is what it is.
> They are not restated as page findings — the fix belongs at the source, not here.

🟡 **Compliance claims carry `[to validate]` with no owner or deadline** — the HDS health-data-hosting scoping in particular. Correct tagging under §7.3 and **not** a fabrication finding; the issue is that an indefinite hedge on a regulatory claim, on a page with no expert reviewer (CP-3), is not a resting state. See CP-4.

## What this page gets right

- **Sector-native differentiation.** Regulated-sector framing is disciplined and consistent: AI is scoped to documentation, admin and reporting, diagnosis and treatment decisions are explicitly ruled out, and human sign-off is restated in every use-case card rather than once in a disclaimer.
- **Structured data verified in code, not claimed.** `BreadcrumbList` + `FAQPage` are emitted and parse as valid JSON — grepped in `faq-schema.ts` and confirmed in the rendered HTML, per §6.5.
- **Indexability clean.** In `sitemap.xml`, self-referencing canonical, reciprocal hreflang, no `noindex`, one `<h1>`.
- **Title is well inside budget** at 42 chars including the auto-appended `| AI Makers` — no double brand suffix, which the masters' reconciliation notes flag as a repeat offence.
- **814 words** of substantive body copy, comfortably clear of thin.

## Priority fix list

1. Site-wide **CP-1** (French badge labels) — cheapest fix, affects this page.
2. Site-wide **CP-3** (author/reviewer/updated) — the single largest score lever here.
3. Meta description is in budget — no action.
4. Validate or cut the tagged figures on this page (see CP-4).

## Open questions

- Re-validate the master's Ahrefs volumes against live data before treating the stated primary keyword as accepted (§5.1). Not performed in this audit.


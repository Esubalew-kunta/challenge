# Contact — free AI diagnostic — `/en/contact`

**Source audited:** branch `feat/en-full-parity`, production build served locally.
**Compared against:** rendered HTML (measured), `src/lib/i18n.ts`, served `sitemap.xml`,
codebase grep for schema, `docs/EN-LAUNCH.md`, and the draft audit one directory up.
**Page type (§9):** Contact / conversion (§9)
**See also:** [`_cross-page.md`](./_cross-page.md)

## Score: 78 / 100

| Category | Score | Weight |
|---|---:|---:|
| E-E-A-T & Trust Signals | 7 | 25 |
| Factual Accuracy & Substantiation | 24 | 25 |
| On-Page SEO | 19 | 20 |
| Content Quality & Depth | 13 | 15 |
| Technical SEO | 15 | 15 |
| **Total** | **78** | **100** |

*Grade band: Solid. Targeted fixes.*

> §1.1 reallocation applied: no expert-reviewer convention governs B2B marketing pages
> in this sector, so the 5 reviewer points move to citations (→10) per the §1.1 note.
> Stated rather than silently dropped.

### Measured facts

| Measure | Value |
|---|---|
| HTTP status | 200 |
| Title (rendered, incl. auto-appended brand) | `Contact — Book Your Free AI Diagnostic \| AI Makers` — **50** chars ✅ |
| Meta description | **140** — in budget ✅ |
| `<h1>` | 1 — `30 minutes to know exactly what AI can do for you.` |
| `<h2>` / `<h3>` | 0 / 6 |
| Body words (header/footer stripped) | 169 |
| JSON-LD emitted (verified in rendered HTML) | `BreadcrumbList` |
| hreflang | reciprocal fr/en/x-default ✅ |
| In `sitemap.xml` | yes ✅ |
| Canonical | `https://aimakers.fr/en/contact` ✅ |

## Verdict

Ships. Short by design and correctly so — a contact page is navigational, and §9 says thinness is not a defect here. The offer is specific (30 minutes, workflows reviewed, three quick wins) rather than a generic "get in touch", and the meta description lands exactly on the 140 floor.

## Findings

> Site-wide findings **CP-1** (French badge labels on every EN page), **CP-2**
> (partner badges published past their authorization gate) and **CP-3** (no author,
> reviewer or updated date anywhere) apply here and are documented once in
> `_cross-page.md`. They are not restated as page findings — §8.1 puts the fix at the
> source, not in N hand-edits.

🟢 **169 body words.** Flagged only to pre-empt an automated thin-content report: for a
contact page this is appropriate, and it is explicitly not a finding under §9.

🟢 **Only `BreadcrumbList` is emitted.** `ContactPage` schema, and `ContactPoint` beyond
the one already on the home page, would be natural here. Available markup, not a defect.

## What this page gets right

- **Meta description measures exactly 140** — on the floor, in budget, and it contains a next step.
- **The offer is concrete and falsifiable**: *"30 minutes to review your workflows and pin down your highest-ROI AI quick wins. No sales pitch."* — a specific commitment rather than an invitation.
- **Title 50 chars, single H1 matching transactional intent, valid schema, in sitemap.**

## Priority fix list

1. Site-wide **CP-1** and **CP-3**.
2. Optional: add `ContactPage` structured data.

## Open questions

- None specific to this page.


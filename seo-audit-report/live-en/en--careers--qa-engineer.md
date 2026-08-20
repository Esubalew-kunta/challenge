# QA Engineer — role page — `/en/careers/qa-engineer`

**Source audited:** branch `feat/en-full-parity`, production build served locally.
**Compared against:** rendered HTML (measured), `src/lib/i18n.ts`, served `sitemap.xml`,
codebase grep for schema, `docs/EN-LAUNCH.md`, and the draft audit one directory up.
**Page type (§9):** Job posting / conversion (§9)
**See also:** [`_cross-page.md`](./_cross-page.md)

## Score: 76 / 100

| Category | Score | Weight |
|---|---:|---:|
| E-E-A-T & Trust Signals | 7 | 25 |
| Factual Accuracy & Substantiation | 24 | 25 |
| On-Page SEO | 17 | 20 |
| Content Quality & Depth | 13 | 15 |
| Technical SEO | 15 | 15 |
| **Total** | **76** | **100** |

*Grade band: Solid. Targeted fixes.*

> §1.1 reallocation applied: no expert-reviewer convention governs B2B marketing pages
> in this sector, so the 5 reviewer points move to citations (→10) per the §1.1 note.
> Stated rather than silently dropped.

### Measured facts

| Measure | Value |
|---|---|
| HTTP status | 200 |
| Title (rendered, incl. auto-appended brand) | `QA Engineer: AI Makers Careers \| AI Makers` — **42** chars ✅ |
| Meta description | **163** — over the 160 budget 🟡 |
| `<h1>` | 1 — `QA Engineer : 200 systems in production, and they have to hold up` |
| `<h2>` / `<h3>` | 5 / 13 |
| Body words (header/footer stripped) | 669 |
| JSON-LD emitted (verified in rendered HTML) | `BreadcrumbList`, `JobPosting` |
| hreflang | reciprocal fr/en/x-default ✅ |
| In `sitemap.xml` | yes ✅ |
| Canonical | `https://aimakers.fr/en/careers/qa-engineer` ✅ |

## Verdict

Ships. `JobPosting` schema is emitted and valid, the page is in the sitemap with a correct canonical, and the copy is specific about the work rather than generic recruitment language. The meta description is the only on-page measure out of place, and the E-E-A-T score reflects the site-wide gaps rather than anything on this page.

## Findings

> Site-wide findings **CP-1** (French badge labels on every EN page), **CP-2**
> (partner badges published past their authorization gate) and **CP-3** (no author,
> reviewer or updated date anywhere) apply here and are documented once in
> `_cross-page.md`. They are not restated as page findings — §8.1 puts the fix at the
> source, not in N hand-edits.

🟡 **Meta description is 163 chars, 3 over the 160 budget.** The tail truncates in search results; move the strongest hook forward and trim at source.

🟢 **No named hiring contact on the page.** For a role page, a named person with a role is both a trust signal and a conversion lever. Not scored as a defect — no sector convention requires it — but it is the cheapest E-E-A-T win available here, and it would partly answer site-wide **CP-3** on the pages where it matters most.

## What this page gets right

- **`JobPosting` schema emitted and valid**, verified in the rendered HTML rather than assumed from an annotation (§6.5). This is what makes the role eligible for Google Jobs.
- **Title 42 chars** including the auto-appended brand — inside budget, and free of the double-suffix defect that affects the parent hub.
- **669 words**: substantive for a role page, not a pasted job spec.
- **Single H1, clean hierarchy, correct canonical, reciprocal hreflang, in `sitemap.xml`.**

## Priority fix list

1. Rewrite the meta description into the 140–160 budget.
2. Consider a named hiring contact (see findings).
3. Site-wide **CP-1** and **CP-3**.

## Open questions

- None specific to this page.


# Capacity — 3 clients a month — `/en/capacity`

**Source audited:** branch `feat/en-full-parity`, production build served locally.
**Compared against:** rendered HTML (measured), `src/lib/i18n.ts`, served `sitemap.xml`,
codebase grep for schema, `docs/EN-LAUNCH.md`, and the draft audit one directory up.
**Page type (§9):** Service / positioning (§9)
**See also:** [`_cross-page.md`](./_cross-page.md)

## Score: 78 / 100

| Category | Score | Weight |
|---|---:|---:|
| E-E-A-T & Trust Signals | 7 | 25 |
| Factual Accuracy & Substantiation | 24 | 25 |
| On-Page SEO | 18 | 20 |
| Content Quality & Depth | 14 | 15 |
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
| Title (rendered, incl. auto-appended brand) | `3 New Clients a Month, Maximum \| AI Makers` — **42** chars ✅ |
| Meta description | **133** — under the 140 floor 🟡 |
| `<h1>` | 1 — `Three new clients a month. Maximum.` |
| `<h2>` / `<h3>` | 4 / 8 |
| Body words (header/footer stripped) | 459 |
| JSON-LD emitted (verified in rendered HTML) | `BreadcrumbList` |
| hreflang | reciprocal fr/en/x-default ✅ |
| In `sitemap.xml` | yes ✅ |
| Canonical | `https://aimakers.fr/en/capacity` ✅ |

## Verdict

Ships. A short, disciplined positioning page that does the hardest thing in B2B copy well: it converts a constraint into a proof and pre-empts the cynical reading in its own first line. Nothing on it is unverifiable. Only the meta description needs work.

## Findings

> Site-wide findings **CP-1** (French badge labels on every EN page), **CP-2**
> (partner badges published past their authorization gate) and **CP-3** (no author,
> reviewer or updated date anywhere) apply here and are documented once in
> `_cross-page.md`. They are not restated as page findings — §8.1 puts the fix at the
> source, not in N hand-edits.

🟡 **Meta description is 133 chars, 7 under the 140 floor.** Verbatim: *"Every AI Makers
client gets a dedicated AI engineer, onboarded two weeks before kick-off — so we cap it
at three new clients a month."* It reads well and contains the proposition, but it
carries **no next step** — §1.3 requires the description to contain one. Seven characters
of headroom is enough to add one.

## What this page gets right

- **It names and defeats the objection in its first sentence**: *"This isn't manufactured scarcity. It's a mechanical limit of our model."* Scarcity claims are a standard place for unsubstantiated marketing, and this page grounds it in a stated mechanism instead.
- **Every claim is about the company's own operating model** — a two-week onboarding, a dedicated engineer, a three-client cap. Self-verifiable commitments, no external statistic to source, no superlative. This is why it scores 24/25 on §1.2.
- **Title 42 chars, single H1, clean hierarchy, valid `BreadcrumbList`.**
- **459 words** is appropriate for a single-proposition positioning page; this is not thin content, it is a page with one job.

## Priority fix list

1. Rewrite the meta description to 140–160 **with a next step**.
2. Site-wide **CP-1** and **CP-3**.

## Open questions

- None specific to this page.


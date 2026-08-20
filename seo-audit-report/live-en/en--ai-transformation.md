# AI Transformation — `/en/ai-transformation`

**Source audited:** branch `feat/en-full-parity`, production build served locally.
**Compared against:** rendered HTML (measured), `src/lib/i18n.ts`, served `sitemap.xml`,
codebase grep for schema, `docs/EN-LAUNCH.md`, and the draft audit one directory up.
**Page type (§9):** Service / money page (§9)
**See also:** [`_cross-page.md`](./_cross-page.md)

## Score: 77 / 100

| Category | Score | Weight |
|---|---:|---:|
| E-E-A-T & Trust Signals | 8 | 25 |
| Factual Accuracy & Substantiation | 22 | 25 |
| On-Page SEO | 17 | 20 |
| Content Quality & Depth | 15 | 15 |
| Technical SEO | 15 | 15 |
| **Total** | **77** | **100** |

*Grade band: Solid. Targeted fixes.*

> §1.1 reallocation applied: no expert-reviewer convention governs B2B marketing pages
> in this sector, so the 5 reviewer points move to citations (→10) per the §1.1 note.
> Stated rather than silently dropped.

### Measured facts

| Measure | Value |
|---|---|
| HTTP status | 200 |
| Title (rendered, incl. auto-appended brand) | `AI Transformation: your AI department, outsourced \| AI Makers` — **61** chars — over the 60 budget 🟡 |
| Meta description | **162** — over the 160 budget 🟡 |
| `<h1>` | 1 — `AI transformation will not wait for your next strategic plan.` |
| `<h2>` / `<h3>` | 11 / 26 |
| Body words (header/footer stripped) | 2903 |
| JSON-LD emitted (verified in rendered HTML) | `BreadcrumbList`, `Service`, `FAQPage` |
| hreflang | reciprocal fr/en/x-default ✅ |
| In `sitemap.xml` | yes ✅ |
| Canonical | `https://aimakers.fr/en/ai-transformation` ✅ |

## Verdict

Ships, with the caveat that it carries proof shared with a gated page. At 2,903 words with `Service` and `FAQPage` schema this is a serious money page and the depth is real. Two measured overruns (title 61, meta 162) and a dependency on the unvalidated Sage figure keep it out of the 80s.

## Findings

> Site-wide findings **CP-1** (French badge labels on every EN page), **CP-2**
> (partner badges published past their authorization gate) and **CP-3** (no author,
> reviewer or updated date anywhere) apply here and are documented once in
> `_cross-page.md`. They are not restated as page findings — §8.1 puts the fix at the
> source, not in N hand-edits.

🟡 **Title measures 61 chars including the auto-appended brand — 1 over the 60 budget.**
Rendered: `AI Transformation: your AI department, outsourced | AI Makers`. It will
truncate. The fix is to shorten the page-side title; do **not** hand-write a brand suffix
(the template appends one — see the `/en/careers` finding for what happens when both
occur).

🟡 **Meta description is 162 chars, 2 over budget.**

🟡 **Quantified promises carry no on-page source.** The description asserts *"a costed
audit in 2 weeks with a 24-point maturity score, 1 to 2 AI systems in production per
month, teams autonomous at 6 months."* These are commitments about the company's own
delivery model, so they are self-verifiable in principle — but "24-point" and "1 to 2 per
month" are the kind of specifics a buyer will hold you to, and no page element evidences
them. §1.2 scores statistics as sourced and consistent with the validated-figures list;
these are not in `public/llms.txt`.

🟠 **Shared dependency on a gated claim.** The draft audit one directory up
(`_cross-page-findings.md` B-2) records that the "+70% Sage" result is `[to validate]`,
sourced from an **unpublished, `inProgress`, noindex** case study, and that it appears on
this page as supporting proof (🟡 here, 🔴 on `/seo-geo`). One client sign-off clears it.
Verify whether the EN page still leans on it before promoting this page.

## What this page gets right

- **2,903 words with `Service` + `FAQPage` + `BreadcrumbList` schema**, all verified in the rendered HTML. This is the depth a competitive money-page query demands.
- **The H1 takes a position** — *"AI transformation will not wait for your next strategic plan"* — rather than restating the service name.
- **Built on the shared locale-keyed content pattern** (`transformation.en.ts` + a shared page component), so the EN and FR pages cannot structurally drift.
- **15/15 on technical SEO**: canonical, hreflang, sitemap, single H1, valid schema.

## Priority fix list

1. Shorten the title to ≤60 rendered.
2. Trim the meta description to ≤160.
3. Resolve or remove the Sage dependency before promoting this page.
4. Source the 24-point / 1–2-per-month / 6-month figures, or soften them.
5. Site-wide **CP-1** and **CP-3**.

## Open questions

- Has the Sage case been signed off and published since the draft audit? That single decision unblocks this page, `/seo-geo` and the home page together.


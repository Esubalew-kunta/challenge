# AI Makers — English home — `/en`

**Source audited:** branch `feat/en-full-parity`, production build served locally.
**Compared against:** rendered HTML (measured), `src/lib/i18n.ts`, served `sitemap.xml`,
codebase grep for schema, `docs/EN-LAUNCH.md`, and the draft audit one directory up.
**Page type (§9):** Home — navigational + orientation (§9)
**See also:** [`_cross-page.md`](./_cross-page.md)

## Score: 80 / 100

| Category | Score | Weight |
|---|---:|---:|
| E-E-A-T & Trust Signals | 10 | 25 |
| Factual Accuracy & Substantiation | 23 | 25 |
| On-Page SEO | 18 | 20 |
| Content Quality & Depth | 14 | 15 |
| Technical SEO | 15 | 15 |
| **Total** | **80** | **100** |

*Grade band: Solid. Targeted fixes.*

> §1.1 reallocation applied: no expert-reviewer convention governs B2B marketing pages
> in this sector, so the 5 reviewer points move to citations (→10) per the §1.1 note.
> Stated rather than silently dropped.

### Measured facts

| Measure | Value |
|---|---|
| HTTP status | 200 |
| Title (rendered, incl. auto-appended brand) | `AI Transformation Studio for Companies \| AI Makers` — **50** chars ✅ |
| Meta description | **168** — over the 160 budget 🟡 |
| `<h1>` | 1 — `AI transformation, shipped` |
| `<h2>` / `<h3>` | 12 / 30 |
| Body words (header/footer stripped) | 2642 |
| JSON-LD emitted (verified in rendered HTML) | `Organization`, `WebSite`, `FAQPage` |
| hreflang | reciprocal fr/en/x-default ✅ |
| In `sitemap.xml` | yes ✅ |
| Canonical | `https://aimakers.fr/en` ✅ |

## Verdict

Ships, with the strongest trust foundation on the English site. It is the only EN page carrying `Organization` schema with a named founder and LinkedIn `sameAs`, and at 2,642 words it is substantial without cannibalising the money pages beneath it. Two fixable issues: an over-length meta description, and a Paris/Casablanca vs France/Morocco inconsistency between the description and the body.

## Findings

> Site-wide findings **CP-1** (French badge labels on every EN page), **CP-2**
> (partner badges published past their authorization gate) and **CP-3** (no author,
> reviewer or updated date anywhere) apply here and are documented once in
> `_cross-page.md`. They are not restated as page findings — §8.1 puts the fix at the
> source, not in N hand-edits.

🟡 **Meta description is 168 chars, 8 over the 160 budget.** Verbatim: *"AI Makers is an
AI transformation studio in Paris and Casablanca. We audit your processes, ship AI
systems into production, and train your teams. 200+ systems deployed."* The tail
("200+ systems deployed") is the part that truncates — and it is the strongest proof
element in the string. Trim the middle clause instead.

🟡 **The description and the body disagree on where the company is.** The meta says
*"in Paris and Casablanca"*; the first 100 words of the body say *"an AI transformation
studio in France and Morocco."* Both are presumably true, but §8.3 makes sibling
consistency mandatory on checkable details, and a city-level claim in the SERP snippet
that the landing page does not repeat is a weak local signal. Pick one register and use
it in both places — city-level is the stronger choice for local intent.

## What this page gets right

- **`Organization` schema is real E-E-A-T, not boilerplate**: named founder with `jobTitle`, `sameAs` LinkedIn for both person and company, `foundingDate: 2022`, `contactPoint`. Verified in the rendered JSON-LD. This is the strongest trust signal on the English site and it is the reason this page scores 10/25 on §1.1 where its siblings score 7.
- **`WebSite` and `FAQPage` also emitted and parse valid.**
- **Title 50 chars** including the brand suffix — well inside budget, no duplication.
- **2,642 words** with 12 `<h2>` sections: orientation depth without thinness, the main risk §9 names for a home page.
- **`200+ systems deployed` matches `public/llms.txt`**, the canonical figures list. Not an invented number.

## Priority fix list

1. Trim the meta description to ≤160, protecting the `200+ systems` tail.
2. Reconcile Paris/Casablanca vs France/Morocco between meta and body.
3. Site-wide **CP-1** and **CP-3**.

## Open questions

- Should the English home target the US/UK market or English-speaking buyers of a France/Morocco business? The answer changes whether city-level anchoring helps or hurts. Not resolvable from the codebase.


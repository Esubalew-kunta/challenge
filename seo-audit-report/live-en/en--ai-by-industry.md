# AI by Industry (sector hub) — `/en/ai-by-industry`

**Source audited:** branch `feat/en-full-parity`, production build served locally.
**Compared against:** rendered HTML (measured), `src/lib/i18n.ts`, served `sitemap.xml`,
codebase grep for schema, `docs/EN-LAUNCH.md`, and the draft audit one directory up.
**Page type (§9):** Hub / index (§9)
**See also:** [`_cross-page.md`](./_cross-page.md)

## Score: 74 / 100

| Category | Score | Weight |
|---|---:|---:|
| E-E-A-T & Trust Signals | 7 | 25 |
| Factual Accuracy & Substantiation | 23 | 25 |
| On-Page SEO | 19 | 20 |
| Content Quality & Depth | 10 | 15 |
| Technical SEO | 15 | 15 |
| **Total** | **74** | **100** |

*Grade band: Meaningful gaps. Will underperform.*

> §1.1 reallocation applied: no expert-reviewer convention governs B2B marketing pages
> in this sector, so the 5 reviewer points move to citations (→10) per the §1.1 note.
> Stated rather than silently dropped.

### Measured facts

| Measure | Value |
|---|---|
| HTTP status | 200 |
| Title (rendered, incl. auto-appended brand) | `AI by industry: use cases that actually differ \| AI Makers` — **58** chars ✅ |
| Meta description | **162** — over the 160 budget 🟡 |
| `<h1>` | 1 — `AI applied to your industry , not in general` |
| `<h2>` / `<h3>` | 9 / 5 |
| Body words (header/footer stripped) | 380 |
| JSON-LD emitted (verified in rendered HTML) | `BreadcrumbList` |
| hreflang | reciprocal fr/en/x-default ✅ |
| In `sitemap.xml` | yes ✅ |
| Canonical | `https://aimakers.fr/en/ai-by-industry` ✅ |

## Verdict

Fix before promotion. Technically clean and the hero POV is genuinely citable, but at 380 words this is the thinnest substantive page on the English site and §9 names thinness as the primary risk for a hub. It is the entry point to eight pages that each carry 700–818 words. It routes well; it does not yet earn its own place in an index.

## Findings

> Site-wide findings **CP-1** (French badge labels on every EN page), **CP-2**
> (partner badges published past their authorization gate) and **CP-3** (no author,
> reviewer or updated date anywhere) apply here and are documented once in
> `_cross-page.md`. They are not restated as page findings — §8.1 puts the fix at the
> source, not in N hand-edits.

🟡 **Thin for a hub: 380 words**, against eight children at 699–818. §9 requires a hub to
add citable value of its own rather than list its children. Today it carries one POV
paragraph plus eight teasers. Add hub-level substance that belongs to no child — for
example how the sector choice is made, what is common across all eight engagements, or a
cross-sector comparison table. Do **not** solve it by importing use cases from the
children; that would create the cannibalisation the collection was designed to avoid.

🟡 **Meta description is 162 chars, 2 over budget** — and the master claimed 158, a
4-character under-report (see CP-5). Trim at source in the page's `constructMetadata`
call.

🟢 **Only `BreadcrumbList` is emitted.** A hub listing eight child pages is the natural
place for `ItemList` / `CollectionPage` structured data. Not a defect — nothing is
claimed that isn't implemented, which is what §1.5 actually scores — but it is available
markup this page is leaving unused.

## What this page gets right

- **The hero POV is a real, citable position**, not a list preamble: *"the bottleneck is different, so the first system to build is different"*, with three contrasting concrete examples (agency / medtech / broker). This is the differentiator that keeps the page from being a bare directory.
- **Card teasers are written for the hub**, not sliced from the children. The FR hub derives its card text from `intro.split(". ")[1]`; this one uses a deliberate `teaser` field, so it does not re-answer what the child pages own.
- **Title 58 chars** including the brand suffix — inside budget.
- **All eight child links resolve** to live, indexable pages verified in `sitemap.xml` (§6.6).

## Priority fix list

1. **Deepen the hub** — the one finding that changes this page's standing.
2. Trim the meta description to ≤160.
3. Consider `ItemList` schema for the eight children.
4. Site-wide **CP-1** and **CP-3**.

## Open questions

- Is the hub/children prefix split (`/en/ai-by-industry` vs `/en/industries/*`) deliberate? The masters state it and `ROUTE_MAP` encodes it, so this audit treats it as intentional and does not file it. Flagged only because it is unusual and every future reader will question it.


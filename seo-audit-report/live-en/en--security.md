# AI Data Security — `/en/security`

**Source audited:** branch `feat/en-full-parity`, production build served locally.
**Compared against:** rendered HTML (measured), `src/lib/i18n.ts`, served `sitemap.xml`,
codebase grep for schema, `docs/EN-LAUNCH.md`, and the draft audit one directory up.
**Page type (§9):** Service / trust (§9)
**See also:** [`_cross-page.md`](./_cross-page.md)

## Score: 80 / 100

| Category | Score | Weight |
|---|---:|---:|
| E-E-A-T & Trust Signals | 9 | 25 |
| Factual Accuracy & Substantiation | 23 | 25 |
| On-Page SEO | 19 | 20 |
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
| Title (rendered, incl. auto-appended brand) | `AI Data Security: Where Your Data Lives \| AI Makers` — **51** chars ✅ |
| Meta description | **161** — over the 160 budget 🟡 |
| `<h1>` | 1 — `Your data never leaves your side.` |
| `<h2>` / `<h3>` | 5 / 14 |
| Body words (header/footer stripped) | 847 |
| JSON-LD emitted (verified in rendered HTML) | `BreadcrumbList`, `FAQPage` |
| hreflang | reciprocal fr/en/x-default ✅ |
| In `sitemap.xml` | yes ✅ |
| Canonical | `https://aimakers.fr/en/security` ✅ |

## Verdict

Ships. The most concrete trust page on the English site — it answers "where does our data actually live" with named products and a named contractual artefact rather than reassurance language. Note it is the EN twin of `/gouvernance-ia`, not of a French `/securite`: those two FR pages were merged, and the mapping is deliberate.

## Findings

> Site-wide findings **CP-1** (French badge labels on every EN page), **CP-2**
> (partner badges published past their authorization gate) and **CP-3** (no author,
> reviewer or updated date anywhere) apply here and are documented once in
> `_cross-page.md`. They are not restated as page findings — §8.1 puts the fix at the
> source, not in N hand-edits.

🟡 **Meta description is 161 chars, 1 over budget.** Verbatim: *"AI Makers delivers
systems that run in your own accounts and keys — your data stays with you.
Least-privilege access, standard DPA on request, no model training."* A single character.
Trim at source.

🟡 **"standard DPA on request" is a contractual claim with no artefact behind it on the
page.** A data-processing agreement is exactly the kind of commitment a security-minded
buyer will test. Either link the DPA (or a request route) or state who to ask. Cheap to
fix and it converts a claim into a checkable fact — which is precisely what §1.1 scores.

## What this page gets right

- **Named specificity instead of security theatre**: *"your n8n, Notion and Microsoft 365 subscriptions, your API keys"*. Naming the actual products is first-hand detail that generic security copy cannot fake.
- **"no model training"** is the single most asked question about AI vendors and it is answered directly rather than buried.
- **`FAQPage` schema emitted and valid** alongside `BreadcrumbList` — verified in the rendered HTML, not taken from an annotation (§6.5).
- **847 words** with a clean heading hierarchy.
- **The FR→EN mapping is correct and deliberate.** `/gouvernance-ia` → `/en/security` after the 2026-08-02 merge absorbed `/securite`. `i18n.ts` documents why a parallel `/en/ai-governance` target was **not** kept: two EN entries for one FR page would emit competing hreflang for the same URL. Verified — this is right.

## Priority fix list

1. Trim the meta description by 1 character.
2. Give "standard DPA on request" a link or a named contact.
3. Site-wide **CP-1** and **CP-3**.

## Open questions

- Is there a published DPA that can be linked, or is it deliberately request-only?


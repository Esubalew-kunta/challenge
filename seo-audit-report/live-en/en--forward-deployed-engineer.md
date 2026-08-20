# Forward Deployed Engineer — `/en/forward-deployed-engineer`

**Source audited:** branch `feat/en-full-parity`, production build served locally.
**Compared against:** rendered HTML (measured), `src/lib/i18n.ts`, served `sitemap.xml`,
codebase grep for schema, `docs/EN-LAUNCH.md`, and the draft audit one directory up.
**Page type (§9):** Service / money page (§9)
**See also:** [`_cross-page.md`](./_cross-page.md)

## Score: 79 / 100

| Category | Score | Weight |
|---|---:|---:|
| E-E-A-T & Trust Signals | 9 | 25 |
| Factual Accuracy & Substantiation | 23 | 25 |
| On-Page SEO | 17 | 20 |
| Content Quality & Depth | 15 | 15 |
| Technical SEO | 15 | 15 |
| **Total** | **79** | **100** |

*Grade band: Solid. Targeted fixes.*

> §1.1 reallocation applied: no expert-reviewer convention governs B2B marketing pages
> in this sector, so the 5 reviewer points move to citations (→10) per the §1.1 note.
> Stated rather than silently dropped.

### Measured facts

| Measure | Value |
|---|---|
| HTTP status | 200 |
| Title (rendered, incl. auto-appended brand) | `Forward Deployed Engineer: a dedicated AI engineer \| AI Makers` — **62** chars — over the 60 budget 🟡 |
| Meta description | **138** — under the 140 floor 🟡 |
| `<h1>` | 1 — `The AI engineering role you will not have to hire for.` |
| `<h2>` / `<h3>` | 18 / 29 |
| Body words (header/footer stripped) | 5425 |
| JSON-LD emitted (verified in rendered HTML) | `BreadcrumbList`, `Service`, `DefinedTerm`, `Occupation`, `Person`, `Person`, `FAQPage` |
| hreflang | reciprocal fr/en/x-default ✅ |
| In `sitemap.xml` | yes ✅ |
| Canonical | `https://aimakers.fr/en/forward-deployed-engineer` ✅ |

## Verdict

Ships. At 5,425 words with seven distinct schema types this is the deepest and most technically complete page on the English site by a wide margin. The two issues are a title that truncates and a description that under-runs — both trivial next to what the page does well.

## Findings

> Site-wide findings **CP-1** (French badge labels on every EN page), **CP-2**
> (partner badges published past their authorization gate) and **CP-3** (no author,
> reviewer or updated date anywhere) apply here and are documented once in
> `_cross-page.md`. They are not restated as page findings — §8.1 puts the fix at the
> source, not in N hand-edits.

🟡 **Title measures 62 chars including the brand suffix — 2 over budget**, the longest on
the English site. Rendered: `Forward Deployed Engineer: a dedicated AI engineer | AI
Makers`. The primary keyword is front-loaded, which is right; the appositive after the
colon is what pushes it over. Shorten page-side.

🟡 **Meta description is 138 chars, 2 under the 140 floor** — and it spends its last
sentence on *"Born at Palantir."* That is a strong differentiator, but the description
carries **no next step**, which §1.3 requires. Two characters of headroom plus the
reclaimed space is enough.

🟢 **"Born at Palantir" is a checkable external claim** and, as far as this audit can
verify, an accurate one — Palantir originated the Forward Deployed Engineer title. Not
filed as a finding. Noted because it is the only external factual claim on the page and
a future audit will re-check it.

## What this page gets right

- **Seven schema types emitted and valid**: `BreadcrumbList`, `Service`, `DefinedTerm`, `Occupation`, two `Person` entries and `FAQPage` — all verified in the rendered HTML per §6.5. `DefinedTerm` and `Occupation` on a role-definition page is genuinely sophisticated markup, and the two `Person` entries are the closest thing to a named human on any EN page.
- **5,425 words** — comfortably the depth a definitional head-term query rewards.
- **The H1 sells the outcome, not the title**: *"The AI engineering role you will not have to hire for."*
- **Locale-keyed content pattern** (`fde.en.ts` + shared component): FR and EN cannot drift apart structurally.

## Priority fix list

1. Shorten the title to ≤60 rendered.
2. Rewrite the meta description to 140–160 with a next step, keeping "Palantir".
3. Site-wide **CP-1** and **CP-3**. Given the two `Person` entries already in schema, this page is the cheapest place to pilot a real author byline.

## Open questions

- None specific to this page.


# Careers — `/en/careers`

**Source audited:** branch `feat/en-full-parity`, production build served locally.
**Compared against:** rendered HTML (measured), `src/lib/i18n.ts`, served `sitemap.xml`,
codebase grep for schema, `docs/EN-LAUNCH.md`, and the draft audit one directory up.
**Page type (§9):** Hub / index (§9)
**See also:** [`_cross-page.md`](./_cross-page.md)

## Score: 74 / 100

| Category | Score | Weight |
|---|---:|---:|
| E-E-A-T & Trust Signals | 7 | 25 |
| Factual Accuracy & Substantiation | 24 | 25 |
| On-Page SEO | 14 | 20 |
| Content Quality & Depth | 14 | 15 |
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
| Title (rendered, incl. auto-appended brand) | `Careers: join AI Makers \| AI Makers` — **35** chars ✅ |
| Meta description | **201** — over the 160 budget 🟡 |
| `<h1>` | 1 — `Build the systems everyone else watches run.` |
| `<h2>` / `<h3>` | 3 / 14 |
| Body words (header/footer stripped) | 541 |
| JSON-LD emitted (verified in rendered HTML) | `BreadcrumbList` |
| hreflang | reciprocal fr/en/x-default ✅ |
| In `sitemap.xml` | yes ✅ |
| Canonical | `https://aimakers.fr/en/careers` ✅ |

## Verdict

Fix before promotion. The content is good — specific, honest about the team's size and geography, and it routes to five live role pages. But it carries the two worst on-page SEO defects measured anywhere on the English site: the brand name appears twice in the title, and the meta description overruns by 41 characters.

## Findings

> Site-wide findings **CP-1** (French badge labels on every EN page), **CP-2**
> (partner badges published past their authorization gate) and **CP-3** (no author,
> reviewer or updated date anywhere) apply here and are documented once in
> `_cross-page.md`. They are not restated as page findings — §8.1 puts the fix at the
> source, not in N hand-edits.

🟠 **The brand appears twice in the rendered title.** Measured:
`Careers: join AI Makers | AI Makers`. Source: `src/lib/careers/page-content.ts:193` sets
`title: "Careers: join AI Makers"`, and `layout.tsx` then appends its
`title.template: "%s | AI Makers"`. This is precisely the "double brand suffix" pattern
the draft audit flagged as a repeat offence across the content set — stripped from the
drafts, but live in this page's own config. It wastes SERP width on a duplicated word and
reads as a template bug to anyone who sees it. **Fix:** change line 193 to `"Careers"` or
`"Careers: build AI systems in production"`; never hand-write the suffix.

🟠 **Meta description is 201 chars — 41 over the 160 budget**, the worst overrun on the
English site. Verbatim: *"AI Makers hires people who want to ship AI systems into
production, not slides. A team of 10 between Paris and Casablanca, international clients,
a leading-edge stack. Speculative applications welcome."* Google will cut it around
"…international clients," so *"Speculative applications welcome"* — the actual call to
action — never renders. Rewrite to ≤160 with the CTA moved forward.

🟡 **"A team of 10" is a checkable claim that will go stale.** It is the kind of number
that changes without anyone remembering the careers page says it. Either commit to
maintaining it or use a range.

🟢 **No `ItemList` for the five open roles.** The child pages each carry `JobPosting`
correctly; the hub itself emits only `BreadcrumbList`. Available markup, not a defect.

## What this page gets right

- **The positioning is specific and falsifiable**: *"we do not produce slides. We ship AI systems into production at real clients"* — a claim a candidate can test at interview, not a values statement.
- **Honest about scale.** Naming a team of 10 rather than implying a larger firm is a trust signal, even though the number needs maintaining.
- **All five role pages are live, in the sitemap, and each carries valid `JobPosting` schema** — verified per route.
- **541 words**, appropriate for a careers hub, and it does not re-answer what the role pages own.

## Priority fix list

1. **Fix the double brand suffix** — `page-content.ts:193`. One line.
2. **Rewrite the meta description to ≤160**, CTA first.
3. Decide how "a team of 10" gets maintained.
4. Site-wide **CP-1** and **CP-3**.

## Open questions

- Careers is footer-only by product decision and deliberately absent from the primary nav. That is recorded and this audit does not challenge it — but it does mean the page's discoverability depends entirely on organic and direct traffic, which raises the cost of the title and description defects above.


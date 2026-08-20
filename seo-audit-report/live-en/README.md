# English site — live-page SEO audit

Audit of the AI Makers English site **as actually served**, 2026-08-13, branch
`feat/en-full-parity`. 21 live routes, one file each (§11.1), plus
[`_cross-page.md`](./_cross-page.md) for the systemic patterns (§8.1).

**Method.** Every figure is measured, never estimated (§3.3): a production build was
served locally and each route crawled for rendered `title`, `meta description`, heading
counts, JSON-LD `@type`, `hreflang`, `canonical`, `<img alt>` and body word count with
header/footer stripped. Schema was confirmed by grep in the codebase before being
credited (§6.5); indexability was checked against the served `sitemap.xml` (§6.6).

**Not covered.** English keyword volumes were **not** re-validated against live tool
data. §5.1 requires that before a primary keyword is accepted, so no page here is scored
on keyword selection. That is the largest remaining gap and should be its own pass — see
open question 4 in `_cross-page.md`.

**Auditor independence (§11.3).** The 9 sector routes were built in this same session by
the author of this audit; their findings are self-reported and flagged as such in
`_cross-page.md`. The other 12 routes carry no such conflict.

**Relationship to `../`.** The parent directory audits the EN content *drafts*. This
directory audits the *shipped pages*. A perfect draft can still ship wrong — CP-1 is
exactly that case.

## Scores

| Page | Route | Score | Band |
|---|---|---:|---|
| [AI Makers](./en.md) | `/en` | **80** | Solid |
| [AI Data Security](./en--security.md) | `/en/security` | **80** | Solid |
| [AI for Small Business & SMEs](./en--industries--ai-for-small-business.md) | `/en/industries/ai-for-small-business` | **79** | Solid |
| [Forward Deployed Engineer](./en--forward-deployed-engineer.md) | `/en/forward-deployed-engineer` | **79** | Solid |
| [AI for Biotech & Life Sciences](./en--industries--ai-for-life-sciences.md) | `/en/industries/ai-for-life-sciences` | **79** | Solid |
| [AI for Market Research & Consulting](./en--industries--ai-for-market-research.md) | `/en/industries/ai-for-market-research` | **79** | Solid |
| [AI for Doctors & Medical Practices](./en--industries--ai-for-medical-practices.md) | `/en/industries/ai-for-medical-practices` | **79** | Solid |
| [AI for IT Services & Software Firms](./en--industries--ai-for-it-services.md) | `/en/industries/ai-for-it-services` | **79** | Solid |
| [AI for Banking, Insurance & Brokers](./en--industries--ai-for-financial-services.md) | `/en/industries/ai-for-financial-services` | **79** | Solid |
| [AI for Marketing Agencies](./en--industries--ai-for-marketing-agencies.md) | `/en/industries/ai-for-marketing-agencies` | **78** | Solid |
| [Contact](./en--contact.md) | `/en/contact` | **78** | Solid |
| [Capacity](./en--capacity.md) | `/en/capacity` | **78** | Solid |
| [AI for Hospitality & Tourism](./en--industries--ai-for-hospitality.md) | `/en/industries/ai-for-hospitality` | **78** | Solid |
| [AI Transformation](./en--ai-transformation.md) | `/en/ai-transformation` | **77** | Solid |
| [GTM / Growth Manager](./en--careers--gtm-growth-manager.md) | `/en/careers/gtm-growth-manager` | **76** | Solid |
| [Data Engineer](./en--careers--data-engineer.md) | `/en/careers/data-engineer` | **76** | Solid |
| [QA Engineer](./en--careers--qa-engineer.md) | `/en/careers/qa-engineer` | **76** | Solid |
| [AI Engineer](./en--careers--ai-engineer.md) | `/en/careers/ai-engineer` | **76** | Solid |
| [Forward Deployed Engineer (role)](./en--careers--forward-deployed-engineer.md) | `/en/careers/forward-deployed-engineer` | **76** | Solid |
| [Careers](./en--careers.md) | `/en/careers` | **74** | Meaningful gaps |
| [AI by Industry (sector hub)](./en--ai-by-industry.md) | `/en/ai-by-industry` | **74** | Meaningful gaps |

**Site average: 77.6 / 100** across 21 pages — the "Solid, targeted fixes" band.

The spread is narrow (74–82) because the dominant driver is systemic, not per-page:
every English page forfeits up to 13 of the 25 E-E-A-T points for having no author, no
reviewer byline and no updated date (**CP-3**). No page fails on its own content.

## The three things worth doing first

1. **CP-1 — French badge labels on all 21 pages.** Two files, ~10 minutes.
   `site-config.en.ts:465-466` and two literals in `footer.tsx`. The English dictionary
   already holds the correct strings; the call sites bypass it.
2. **CP-3 — no author / reviewer / updated date anywhere.** A template change that
   unlocks up to 13 points on every page. The single largest scoring lever available.
3. **`/en/careers` — the brand appears twice in the title** (`page-content.ts:193`) and
   the meta description runs 201 chars against a 160 budget. One line and one rewrite.

Executing only these three measurably improves every page on the English site.

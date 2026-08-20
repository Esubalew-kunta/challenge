# Secteur — ESN & services IT · route `/secteurs/esn-services-it`

**Source audited:** `[EN] website-content/secteurs--esn-services-it/secteurs--esn-services-it.md`
**Compared against:** `src/app/secteurs/[slug]/page.tsx`, `src/lib/secteurs.ts` (entry `esn-services-it`), `src/lib/metadata.ts`, `src/app/layout.tsx`, `src/lib/faq-schema.ts`, `src/app/sitemap.ts`, `src/lib/site-config.ts`, `public/llms.txt`. Ahrefs keywords-explorer-overview (US), 2026-07-15.
**See also:** shared cross-sector findings in the final report.

## Score: 87 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 22 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Ship after the shared template fixes. Strong first-hand specificity (names Claude Code, Cursor, Codex — the anti-slop test the ruleset rewards) and services-firm-specific pains with zero overlap against the SME or agency pages. Blockers are the shared title/slug/i18n mechanics plus the acknowledged thin EN keyword cluster.

## Findings

### 🟠 High
1. **Double brand suffix in title.** Proposed `AI for IT Services & Software Firms | AI Makers` renders doubled. **Fix:** `metaTitle = AI for IT Services & Software Firms` (35) → renders 47 chars.
2. **Proposed slug `/industries/ai-for-it-services` has no route**; §8 GEO cites `/secteurs/esn-services-it`. Shared slug issue.

### 🟡 Medium
3. **EN content in FR template chrome** — shared i18n gap.
4. **Thin EN keyword cluster (acknowledged).** "ESN" has no clean EN equivalent; primary "ai for software development" = 400/mo US, KD37 (Ahrefs 2026-07, matches draft). "ai for it services" is near-zero (~20). Low volume is acceptable for this conversion-assist landing per rules §5; not penalised. Note the primary term ("software development") is broader than the page's delivery/staffing/pre-sales angle — mild intent drift, but the cleanest available.
5. **H1 does not contain the primary keyword.** "AI for IT services firms: deliver more, staff smarter, sell differently" omits "software development". Given the thin cluster and FR-market ICP this is acceptable, but note the primary appears only in body, not H1/title.

## What this page gets right
- Use-case cards name real tools (Claude Code, Cursor, Codex) — practitioner specificity, cross-checked against `secteurs.ts` and the Vibe Coding formation.
- Testimonials verified: ESN Engit (line 535) and Sage (line 464) both have `testimonial` objects.
- Emirates NBD-style name-dropping avoided here; only clients with real testimonials are rendered.
- FAQ Q1 ("why hire an outside AI firm") and Q2 (code-assistant training) designated canonical owners — not repeated elsewhere.
- Pains (RFP cost, bench skills gap, day-rate erosion, internal-ops lag) are unique to a services/staffing business; no sibling overlap.
- Route in `sitemap.ts`; FAQPage + BreadcrumbList JSON-LD implemented in code.

## Priority fixes
1. Strip `| AI Makers` from `metaTitle` (🟠, trivial).
2. Resolve slug §3/§8 mismatch (🟠, coordination).
3. Template i18n ticket (🟡, shared engineering).

## Open questions
- None specific to this page beyond the collection-wide slug decision.

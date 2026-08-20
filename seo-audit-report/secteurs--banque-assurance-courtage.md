# Secteur — Banque, assurance & courtage · route `/secteurs/banque-assurance-courtage`

**Source audited:** `[EN] website-content/secteurs--banque-assurance-courtage/secteurs--banque-assurance-courtage.md`
**Compared against:** `src/app/secteurs/[slug]/page.tsx`, `src/lib/secteurs.ts` (entry `banque-assurance-courtage`), `src/lib/metadata.ts`, `src/app/layout.tsx`, `src/lib/faq-schema.ts`, `src/app/sitemap.ts`, `src/lib/site-config.ts`, `public/llms.txt`. Ahrefs keywords-explorer-overview (US), 2026-07-15.
**See also:** shared cross-sector findings in the final report. **Regulated/financial sector — compliance-claims pass applied.**

## Score: 88 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 23 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 12 / 15 |

## Verdict
Ship after the shared template fixes. The financial-regulation discipline is handled well: compliance-by-design leads, human validation stays on every decision, systems are documented for the compliance team/DPO, and EU AI Act / GDPR specifics carry a visible `[to validate]`. The "ROI within the first month" claim is tagged `[to validate]` and — usefully — is actually corroborated by the published Empruntis testimonial. Blockers are the shared title/slug/i18n mechanics.

## Findings

### 🟠 High
1. **Double brand suffix in title.** Proposed `AI for Banking, Insurance & Brokers | AI Makers` renders doubled. **Fix:** `metaTitle = AI for Banking, Insurance & Brokers` (35) → renders 47 chars.
2. **Proposed slug `/industries/ai-for-financial-services` has no route**; §8 GEO cites `/secteurs/banque-assurance-courtage`. Shared slug issue.

### 🟡 Medium
3. **EN content in FR template chrome** — shared i18n gap.
4. **Primary "ai in banking" is informational-intent and doesn't name insurance/brokerage.** Verified 2,300/mo US, KD47 (Ahrefs 2026-07, matches draft). The low-KD long-tail "ai for insurance brokers" (150, KD5 — draft claim) maps most exactly to the courtage angle and is the easier win; ensure it appears in body copy, not just the keyword table. Intent is informational-only — fine for MOFU.
5. **"ROI within the first month" tagged `[to validate]`** (source `secteurs.ts`, not `llms.txt`). Note it is independently supported by the published Empruntis verbatim ("Le ROI a été visible dès le premier mois", `site-config.ts` line ~503) — so the claim is defensible; keep the tag until the client confirms it may be stated as a general result.

## What this page gets right
- Compliance-by-design framing with human validation retained on decisions and documentation for compliance/DPO — no automated-decisioning over-claim, appropriate for a regulated sector.
- EU AI Act / GDPR sector-specifics tagged `[to validate]` rather than asserted.
- Testimonial verified: Empruntis (line 500) has a `testimonial`; "director" role and credit-brokerage context match `site-config.ts`. Emirates NBD is referenced by name only (logo-only entry, line 486) — correctly not rendered as a quote.
- FAQ Q1 (financial-regulation compliance) and Q3 (where to start in a regulated business) designated canonical owners, distinct from the health-data answers.
- Pains (file admin vs client time, stalled signatures, compliance load, digital-competitor pressure) are unique to advisory/brokerage; no sibling overlap.
- "+50 companies / +200 systems" canonical from `llms.txt`. Route in `sitemap.ts`; JSON-LD implemented.

## Priority fixes
1. Strip `| AI Makers` from `metaTitle` (🟠, trivial).
2. Resolve slug §3/§8 mismatch (🟠, coordination).
3. Work "ai for insurance brokers" (KD5) into body copy for the easy long-tail (🟡).
4. Template i18n ticket (🟡, shared engineering).

## Open questions
- Confirm the "ROI within the first month" result may be generalised beyond the specific Empruntis engagement, or keep it attributed to that named client.
- Confirm EU AI Act scoping language before any untagged publication.

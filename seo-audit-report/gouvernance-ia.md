# Gouvernance IA — /gouvernance-ia (EN draft → proposed /ai-governance)

**Source audited:** `[EN] website-content/gouvernance-ia/gouvernance-ia.md`
**Compared against:** `src/app/gouvernance-ia/page.tsx` (metadata, breadcrumb + FAQPage schema), `src/lib/metadata.ts`, `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt`; **Ahrefs (US) keywords-explorer-overview, 2026-07**
**See also:** cross-page candidates (end of file)

## Score: 87 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 24 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 14 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Fix-first (title overrun + legal date), then ship. The compliance content is handled with real care: AI Act articles, dates and fine figures are accurate, and the one genuinely uncertain, post-cutoff legal claim is already tagged `[to validate]` by the author. This is exactly the discipline the ruleset asks for. Correct the title length and confirm the deferral date with counsel.

## Findings

### 🟡 Medium
1. **Rendered title exceeds 60 chars.** Field `AI Governance: GDPR, EU AI Act & AI Charter — AI Makers` (55) + template ` | AI Makers` → **67 chars**, and brand ×2. Both a length overrun and redundant branding. *Fix:* field = `AI Governance: GDPR, the EU AI Act & AI Charters` (47) → renders 59 with the template brand, single brand.
2. **Meta description 177 chars — over the 160 budget.** *Fix:* trim to ≤160.
3. **Post-cutoff legal date — already tracked, confirm resolved (not re-flagged as new).** The draft asserts high-risk (HR) obligations were deferred to **December 2027 via a "June 2026 omnibus"** and self-tags it `[to validate]` in §4.3/§4.5/§5-Q4/§9. This date is after the auditor's knowledge cutoff (Jan 2026); under the AI Act as originally adopted, Annex III high-risk obligations apply 2 Aug 2026. The `[to validate]` tag is appropriate and must survive to legal sign-off. **Money/compliance-relevant → escalate to counsel before publish.**

### 🟢 Low
4. **`/ai-governance` route not yet in `sitemap.ts`** — EN-build item (cross-page).

## What this page gets right
- **Keyword claims verified against Ahrefs (US):** `ai governance` 8,900/KD46, `ai governance framework` 3,600/KD34, `eu ai act` 6,800/KD89, all match the draft exactly. The decision to target `ai governance`/`ai governance framework` as head and use `eu ai act` (KD89) descriptively is sound.
- Accurate AI Act facts: in force since Aug 2024; Art. 4 AI literacy from Feb 2025; Art. 50 transparency from 2 Aug 2026; fines €15M/3% (Art. 99, transparency tier) and GDPR €20M/4% (Art. 83) — all correctly stated.
- HR uses correctly characterised as high-risk; CNIL charter recommendation accurate.
- Answer-first GEO paragraph opens with a clean, citable definition of "AI governance". FAQPage schema **verified present** in `page.tsx`.
- Legal-disclaimer line retained ("does not constitute legal advice").

## Priority fixes
1. Shorten title field so rendered title ≤60 with single brand (§ finding 1).
2. Legal review of the December 2027 / June 2026-omnibus deferral before publish (§ finding 3).
3. Trim meta description to ≤160 (§ finding 2).

## Open questions
- Legal: confirm the final adopted text/date of the high-risk deferral ("Digital Omnibus"). Until confirmed, keep the `[to validate]` framing visible.

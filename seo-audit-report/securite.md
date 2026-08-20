# Sécurité & données — /securite (EN draft → proposed /security)

**Source audited:** `[EN] website-content/securite/securite.md`
**Compared against:** `src/app/securite/page.tsx` (metadata, breadcrumb + FAQPage schema), `src/lib/metadata.ts`, `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt`; **Ahrefs (US), 2026-07**
**See also:** cross-page candidates (end of file)

## Score: 88 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 24 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 15 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Ship after meta fixes. A procurement-enablement page that keeps its security claims correctly qualified — the "no training on your data" claim is bounded to "in line with providers' policies … configured and verified by us", not overstated. Reversibility/IP claims correctly reference the contractual Independence Guarantee. Only meta mechanics pull points.

## Findings

### 🟡 Medium
1. **Rendered title exceeds 60 chars.** Field `AI Data Security: Where Your Data Lives — AI Makers` (51) + template ` | AI Makers` → **63 chars**, brand ×2. *Fix:* field = `AI Data Security: Where Your Data Lives` (39) → renders 51 with single template brand.
2. **Meta description 188 chars — 28 over the 160 budget** (measured; the longest but one in the batch). *Fix:* cut to ≤160.

### 🟢 Low
3. **`/security` route not yet in `sitemap.ts`** — EN-build item (cross-page).

## What this page gets right
- **Keyword claim verified (Ahrefs US):** `ai data security` 1,500/KD36 matches the draft; `enterprise ai security` (450/KD3) is a sensible easy-win secondary. Realistic, non-inflated targets.
- The "not used by default to train the models" claim is correctly qualified ("in line with these providers' policies") rather than presented as an absolute AI Makers guarantee — accurate framing of a third-party-dependent fact.
- Data-sovereignty position ("systems run in your accounts", "AI Makers hosts nothing") is consistent with `public/llms.txt`.
- Commitment 4 (full IP ownership/reversibility) correctly labelled contractual and cross-linked to the Independence Guarantee — consistent with `/garanties`.
- Answer-first GEO paragraph self-contained; FAQPage schema **verified present** in `page.tsx`. Legal-disclaimer line retained.

## Priority fixes
1. Shorten title field so rendered ≤60 with single brand.
2. Trim meta description to ≤160.
3. EN build: create `/security` route + sitemap + hreflang.

## Open questions
- None material; DPA-on-request and "can sign yours" claims are contractual statements — confirm with legal they match the actual DPA offering (standard practice check, not a flagged discrepancy).

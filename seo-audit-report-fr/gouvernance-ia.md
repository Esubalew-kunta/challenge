# Gouvernance IA — /gouvernance-ia

**Source audited:** `[FR] website-content/gouvernance-ia/gouvernance-ia.md`
**Compared against:** `src/app/gouvernance-ia/page.tsx` (live metadata, AI Act timeline objects, FAQPage + BreadcrumbList JSON-LD), `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt`. Ahrefs (France, French) for all stated keyword volumes.
**See also:** `_cross-page-findings.md`

## Score: 89 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 23 / 25 |
| Factual & Claim Accuracy | 22 / 25 |
| On-Page SEO | 19 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Fix-first, then ship — the fix is a legal sign-off, not a rewrite. This is the best-researched page in the batch: every stated keyword volume is exactly right against Ahrefs France, the AI Act articles/dates/fine amounts are accurate, and the draft is disciplined enough to self-tag the one unverifiable claim (the "omnibus de juin 2026 → décembre 2027" high-risk deferral) with `[à valider]`. The blocker is that the **live page already ships that same deferral as settled fact with no tag** — a compliance-timing statement that cannot currently be verified.

## Findings

### 🔴 Critical (live-risk)
1. **Live page asserts an unverifiable, compliance-relevant legal deadline as settled fact.** `page.tsx:69-72` (timeline) and `:134` (FAQ4) and `:347` (body) state the high-risk RH obligations were "reportées à décembre 2027 par l'omnibus de juin 2026" with no hedge. Under the AI Act as adopted, Annex III high-risk obligations apply **2 August 2026**; the June-2026 "Digital Omnibus" deferral to Dec 2027 is post-knowledge-cutoff and legally mobile. If that deferral did not pass as stated, the live page tells clients they have until Dec 2027 when the deadline is Aug 2026 — an understated compliance timeline. Ruleset §2 fixed rule: legal/compliance statements are 🔴 when wrong. The draft handles this correctly with `[à valider]` on every instance (§4.3, §4.4-6, §4.5, §5-Q4, §9) and documents the adopted-text fallback — **confirm the draft's tagging ships, and get legal sign-off on the omnibus date before publish.** Do not let the untagged live wording persist.

### 🟡 Medium
2. **Live title 68 chars — draft fixes to 54.** Live `Gouvernance IA : RGPD, AI Act et charte IA en entreprise` renders at 68 incl. suffix (over 60). Proposed `Gouvernance IA : RGPD, AI Act et charte IA` measures **54** (verified), keeps the head term front-loaded. Ship it.
3. **Meta description at the ceiling.** Proposed FR meta measures **159 chars** (verified) — inside the 160 budget but with zero margin; safe as-is, just don't add to it.

## What this page gets right
- **Every keyword volume verified exact against Ahrefs France:** gouvernance ia **350**, charte ia **350**, conformité ia **150**, gouvernance de l'ia **150**, ai act **11,000 (KD 51)**, ia act **5,800 (KD 57)**, rgpd ia **100 (KD 39)**. The §2.2 note correctly treats ai act/ia act as high-volume-but-competitive descriptive terms and picks "gouvernance ia" as the realistic head — sound strategy, not stuffing.
- **AI Act facts accurate:** in force since Aug 2024; Art. 4 AI literacy since Feb 2025; Art. 50 transparency 2 Aug 2026; fines €15M/3% (Art. 99, transparency tier, lower amount for SMEs) and RGPD €20M/4% (Art. 83) — all correct.
- **Legal disclaimer present** ("ne constitue pas un conseil juridique") — appropriate for a compliance page.
- **Schema real:** FAQPage (`:145`) + BreadcrumbList (`:20`) implemented; route in `sitemap.ts:26`.
- **GEO answer-first paragraph** opens with a clean, citable definition of "gouvernance IA" — strong for both head-term relevance and AI-engine citability.
- **Internal-link targets exist:** /securite, /audit-ia-entreprise, /contact.

## Priority fix list
1. 🔴 Get legal sign-off on the "omnibus juin 2026 → décembre 2027" claim; ship the draft's `[à valider]` tagging and correct the untagged live timeline/FAQ/body wording.
2. 🟡 Ship the 54-char title.
3. 🟡 Ship the meta description (do not lengthen it).

## Open questions
- Did the June-2026 Digital Omnibus actually defer Annex III high-risk obligations to December 2027? This governs whether the live page understates clients' compliance deadline. Needs client/legal confirmation.

---
### Cross-page candidates
- **AI Act dates & the omnibus/Dec-2027 claim** are shared with /securite (sister page) and any sector page touching compliance — the deferral claim must be resolved once and applied consistently (ruleset §8.1). Candidate for `_cross-page-findings.md`.
- **"[à valider]" discipline** on post-cutoff legal dates is a good pattern this page models; verify /securite applies it too.

# IA au Maroc — /ia-maroc

**Source audited:** `[FR] website-content/ia-maroc/ia-maroc.md`
**Compared against:** `src/app/ia-maroc/page.tsx` (live metadata, LocalBusiness + FAQPage + BreadcrumbList JSON-LD, markets line, SARL/loi-09-08 copy), `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt`. Ahrefs (Morocco `ma` + France) for stated volumes.
**See also:** `_cross-page-findings.md`

## Score: 85 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 21 / 25 |
| Factual & Claim Accuracy | 22 / 25 |
| On-Page SEO | 18 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 10 / 15 |

## Verdict
Fix-first on two verification items, then ship. A strong geo-entity page: real local anchoring (SARL, 46 Av Okba Agdal), accurate loi 09-08/CNDP + RGPD dual-regime framing, and full structured data (LocalBusiness + FAQPage). Two claims need resolving before promotion — the live page asserts Belgium/Luxembourg markets not in the canonical source, and the Moroccan legal-entity claim underpins local billing so must be verifiable. The draft already flags both; make sure the fixes land.

## Findings

### 🟠 High
1. **Live page claims markets beyond the canonical source.** `page.tsx:240` lists "(France, Belgique, Luxembourg, Maroc)". The canonical market set in `llms.txt` is France + Maroc only. Asserting active service in Belgium and Luxembourg without a source is an unsubstantiated market claim (ruleset §7.1, §7.3). The draft correctly narrows §4.3 to "France et Maroc" with a `[to validate]` and logs it (§119, §126). **Confirm Belgium/Luxembourg service before re-adding; otherwise the live wording must change.** Live-risk.
2. **Moroccan legal-entity claim underpins local billing — verify it.** FAQ2 (`page.tsx:102`) and body (`:230`) state "AI Makers dispose d'une société de droit marocain (SARL)… facturés au Maroc, dans le cadre juridique et fiscal marocain." This is money/legal-relevant (local contracting + invoicing). The SARL is not stated in `llms.txt`. If the entity is registered, this is fine and a genuine differentiator; if not, it is a serious misrepresentation. Ruleset §2 fixed rule (money/legal → 🔴 when wrong). Could not verify from code — **needs client sign-off / registry confirmation** before publish.

### 🟡 Medium
3. **Proposed meta is 172 chars — over budget; the draft's "159" is a miscount.** Measured **172** (verified); live is 223. The fix improves but still exceeds 160. Trim ~12+ chars (e.g. drop "de transformation" or "et formation des équipes") to reach ≤160.
4. **loi 09-08 depth is deliberately high-level — confirm that's the intent.** Deeper obligations (CNDP declaration, cross-border transfer rules) are omitted and tagged `[to validate legal accuracy]` (§68, §129). The high-level framing ("cadre de la loi 09-08 et des exigences de la CNDP") is accurate and safe. Confirm the omission is intentional, not a gap — already tracked.

### 🟢 Low
5. **"ia maroc" volume is ~100 (Morocco), not 150 as stated.** Ahrefs MA: ia maroc **100**, intelligence artificielle maroc **200 (KD 37)**, agence ia maroc **60**. The draft's "150" slightly overstates the head term, but both are low-volume and the low-pressure geo-entity strategy is sound regardless. Correct the figure; no strategy change.

## What this page gets right
- **Full structured data — best in the batch.** LocalBusiness (`page.tsx:138`), FAQPage (`:123`), and BreadcrumbList (`:20`) all implemented — exactly right for a geo-entity page, and strong for AI-engine citation. (Contrast /contact, which lacks LocalBusiness.)
- **loi 09-08 / CNDP + RGPD accurate.** Morocco's data-protection law 09-08 enforced by the CNDP, EU clients under RGPD — the dual-regime split is correct and not over-engineered.
- **Real local anchoring:** "46 Avenue Okba, Agdal, Rabat" matches `llms.txt`; "Pas un cabinet français qui parle du Maroc" is a defensible positioning claim backed by the entity fact, not empty copy.
- **Method/guarantee language consistent** with /garanties + /capacite: "au minimum 3 cas d'usage à fort ROI, sinon remboursé" and "ingénieur onboardé 2 semaines avant le kick-off" match canon; method correctly deferred to /ai-transformation (anti-cannibalization, §8.2).
- **Title 59 chars** incl. suffix (verified) — within budget, via `constructMetadata` single-suffix (confirms the diagnostic-ia hardcoded-suffix anomaly).
- **intelligence artificielle maroc (200, KD 37)** verified in Ahrefs MA.
- **Route in sitemap** (`sitemap.ts:37`); internal-link targets /etudes-de-cas/thinkone, /etudes-de-cas/addictest, /ai-transformation, /contact all exist.

## Priority fix list
1. 🟠 Confirm (or remove) Belgium/Luxembourg markets; ship the France+Maroc narrowing.
2. 🟠 Verify the Moroccan SARL entity registration (billing claim).
3. 🟡 Trim the meta to ≤160 (currently 172); correct "ia maroc" volume to ~100.

## Open questions
- Does AI Makers actively serve Belgium and Luxembourg? If not, `page.tsx:240` must change.
- Is the Moroccan SARL formally registered, enabling local contracting/invoicing as claimed?
- Is the high-level loi 09-08 treatment the intended scope, or should CNDP declaration/transfer obligations be addressed?

---
### Cross-page candidates
- **Market scope (France/Maroc vs Belgium/Luxembourg)** appears wherever markets are listed — reconcile against `llms.txt` once (ruleset §7.3, §8.1).
- **LocalBusiness schema** is implemented here but missing on /contact — /ia-maroc and /contact are the two NAP-bearing pages; align their structured-data coverage.
- **Guarantee/onboarding figures** co-owned with /garanties, /capacite, /offre — confirm agreement.

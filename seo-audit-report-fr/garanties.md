# Garanties — /garanties

**Source audited:** `[FR] website-content/garanties/garanties.md`
**Compared against:** `src/app/garanties/page.tsx` (live metadata, guarantees, FAQ, FAQPage + BreadcrumbList JSON-LD), `src/app/layout.tsx` (title template), `src/app/sitemap.ts`, `public/llms.txt`.
**See also:** `_cross-page-findings.md`

## Score: 88 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 21 / 25 |
| Factual & Claim Accuracy | 23 / 25 |
| On-Page SEO | 18 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 12 / 15 |

## Verdict
Ship after one small copy decision. This is a strong BOFU trust page: every one of the 4 guarantees states its trigger AND its activation condition, the "ce qu'elle suppose" table attaches each precondition, and all figures match `llms.txt`. The only real issue is the uniqueness/comparative framing ("les seuls à garantir", "vos concurrents n'offrent pas de garanties") — legally sensitive under French comparative-advertising rules and unverifiable. It is inherited live copy, so it is not a new draft risk, but it should get a client decision.

## Findings

### 🟠 High
1. **Unverifiable uniqueness / comparative claim.** H1 `Pourquoi on est les seuls à garantir nos résultats` (§4.1) and FAQ5 `Pourquoi vos concurrents n'offrent pas de garanties ? Parce que leur modèle ne le permet pas` (§5) assert a market-exclusivity fact about competitors. Ruleset §1.1 (no unsubstantiated superlatives without a named, checkable basis) and §4.3 (EU/French law prohibits misleading comparative claims). No named basis is given. This is live copy the draft deliberately preserves, so it is a **live-risk**, not a new draft risk — but "les seuls" is a factual absolute that cannot be substantiated. Fix: soften to a defensible framing ("Pourquoi on peut garantir nos résultats") or add a checkable basis, and reframe FAQ5 around *our* model rather than asserting what every competitor does.

### 🟡 Medium
2. **Meta description (live) overruns; the fix is correct.** Live description measures ~206 chars (over the 160 budget). The draft's proposed FR replacement measures **154 chars** (verified) and keeps the keyword load — this is a valid fix, already tracked in §132. Confirm it ships; the live value is the one currently in `page.tsx:13`.

### 🟢 Low
3. **"champions formés" vs "champions à impact mesurable".** The proposed meta swaps the live phrase for a more precise one that matches Garantie Champions' actual condition. Good change; no action beyond shipping.

## What this page gets right
- **Every guarantee states its condition.** All 4 guarantees carry Le déclencheur + Comment l'activer, and §4.4's table attaches each precondition ("ce qu'elle suppose") — the compliance requirement in ruleset §4.4 is fully met. Verified against live `faqItems`/guarantee objects in `page.tsx`.
- **Figures match canon.** "3 nouveaux clients/mois", "ingénieur dédié onboardé 2 semaines avant le kick-off", "4 garanties écrites au contrat" all match `public/llms.txt`.
- **Schema is real, not planned.** FAQPage schema (`page.tsx:135`) and BreadcrumbList (`:19`) are implemented; route is in `sitemap.ts:25`.
- **Title within budget:** measured 56 chars incl. " | AI Makers" suffix.
- **GEO answer-first paragraph** (§8) is self-contained and citable; consistent with the `llms.txt` guarantees line.
- **Internal-link targets all exist:** /capacite, /audit-ia-entreprise, /contact, /cgv.

## Priority fix list
1. 🟠 Get a client decision on "les seuls à garantir" / FAQ5 comparative claim; reword to a defensible form.
2. 🟡 Ship the 154-char meta description to replace the 206-char live one.
3. 🟢 Adopt "champions à impact mesurable" phrasing.

## Open questions
- Can the company substantiate "les seuls à garantir nos résultats" with a named, checkable basis? If not, it must be softened before promotion.

---
### Cross-page candidates
- **Capacity model figures** ("3 clients/mois", "ingénieur dédié 2 semaines avant kick-off") are co-owned with /capacite and the homepage — verify all three agree (cross-page consistency, ruleset §8.3).
- **Comparative "agence classique / concurrents" framing** recurs (garanties §4.2, FAQ5; likely /capacite, /agence-ia). Candidate for a single compliance decision on comparative claims.

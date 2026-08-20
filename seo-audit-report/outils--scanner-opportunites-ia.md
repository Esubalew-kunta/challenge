# Scanner d'opportunités IA — /outils/scanner-opportunites-ia (EN: /ai-opportunity-assessment)

**Source audited:** `[EN] website-content/outils--scanner-opportunites-ia/outils--scanner-opportunites-ia.md`
**Compared against:** `src/lib/scanner-opportunites.ts`, `src/app/outils/scanner-opportunites-ia/page.tsx`, scanner-wizard, `src/lib/schemas/lead.ts`, `src/lib/faq-schema.ts`, `src/app/sitemap.ts`; Ahrefs (US/GB) 2026-07.
**See also:** `_cross-page-findings.md`

## Score: 87 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 22 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 18 / 20 |
| Content Quality & Depth | 12 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Fix-first (one compliance item). The strongest tool page in the batch: the promise matches the code down to the scoring mechanics and the per-opportunity sources, the exact-intent keyword is apt, and no benchmark is invented. The only blocker is the same consent-line gap on the email-capture step; results-on-screen-before-capture is honest and verified.

**Tool matches its code: YES.** 12 opportunities, 6 sectors / 4 team sizes / 8 pains (pick 2–4), scoring = `painMatches × PAIN_MATCH_POINTS + sectorBonus` filtered to ≥ one matching pain with a `minTeamSizeIndex` gate, and per-entry sources — all verified in `scanner-opportunites.ts`.

## Findings

### 🟠 High
1. **Email-capture step has no visible consent line / privacy-policy link.** The full report requires a work email; the email + sector/size/pains are stored via `/api/lead` (source `"scanner"`, per `schemas/lead.ts`). Like the GEO tool, the form needs an informed-consent line + link to `/confidentialite`. The draft flags GDPR in §9. **Fix:** add the shared consent microcopy to the wizard's capture step before EN publish (also a live FR gap). 🟠 (compliance).

### 🟡 Medium
2. **EN slug `/ai-opportunity-assessment` vs live route `/outils/scanner-opportunites-ia`** — confirm canonical/slug at build.

### 🟢 Low
3. **Exact scoring weights stated as "+2 per pain, +1 sector."** The mechanism (pain-weighted + sector bonus + size gate) is verified; the literal "+2 / +1" values map to `PAIN_MATCH_POINTS` / `SECTOR_BONUS_POINTS` constants — keep the method copy describing behaviour ("pains carry the most weight") rather than hardcoding numbers that could drift if the constants change.

## What this page gets right
- **Promise matches code to the mechanic and the source.** 12 opportunities verified; the "sourced figures, not promises" method card names Forrester, Ardent Partners, Loopio, Deloitte — all present in the code's per-entry `source` fields, alongside Klarna, Unilever, and AI Makers production systems. No invented benchmark; every result card carries a real source. This is the tools-page standard (§9) fully met.
- **Honest capture framing:** "no email to see your top three" is literally true — the wizard renders results before any capture; email only unlocks the full report. Correctly stated in hero, FAQ, and GEO block.
- **Apt exact-intent keyword:** "ai opportunity assessment" 150 US / 1,600 global, low competition — verified; correctly called a magnet, not a traffic pillar. "ai use cases by industry" (90/KD64) correctly deferred to the `/secteurs` hub as a supporting phrase.
- **FAQ is FAQPage-eligible** (`faq-accordion.tsx` + `faqPageSchema`); 4 answer-first Q&As, including the sources question that reinforces citability.
- **Route in sitemap** (`sitemap.ts:33`); title 59 chars (within 60), meta 153 — within budget (measured). Answer-first GEO block is accurate (12-opportunity library, sourced figures, on-screen top-3).

## Priority fixes (ranked)
1. **Add the consent line + privacy link to the wizard capture step** (🟠, low) — blocks a compliant ship.
2. **Confirm slug/canonical** (🟡, dev).
3. **Keep method copy behaviour-based, not hardcoded weights** (🟢, trivial).

## Open questions
- Confirmed GDPR consent wording/placement for the report-email step, linking `/confidentialite`?

## Cross-page candidates
- **GDPR consent microcopy on data-capture forms** — shared with `audit-geo-gratuit`, `playbook-ia`, `challenge-30-jours`; one shared component fixes all.
- **EN-slug vs live-route canonical decision** — systemic.

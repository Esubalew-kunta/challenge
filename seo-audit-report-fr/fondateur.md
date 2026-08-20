# Fondateur — /fondateur

**Source audited:** `[FR] website-content/fondateur/fondateur.md`
**Compared against:** `src/app/fondateur/page.tsx` (live letter verbatim, Person JSON-LD, metadata), `src/app/a-propos/page.tsx` + `src/app/equipe/page.tsx` (founder title consistency), `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt`.
**See also:** `_cross-page-findings.md`

## Score: 86 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 23 / 25 |
| Factual & Claim Accuracy | 23 / 25 |
| On-Page SEO | 18 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 8 / 15 |

## Verdict
Ship after title shortening and one third-party verification. This is the corpus's reference voice — a first-person founder letter reproduced verbatim, no smoothing, with genuine E-E-A-T (a named ADHD disclosure, a named real reference). Low keyword volume on the name is correct. Only items: a live title over budget (draft fixes it) and one named-third-party claim worth confirming for accuracy/consent.

## Findings

### 🟡 Medium
1. **Named third-party attribution should be confirmed.** Ch.2: "Le déclic arrive lors d'une conférence sur l'IA, **aux côtés de Didier Gaultier, Head of AI d'Orange**" (`page.tsx:61`, verbatim in draft §4.2). This is a factual claim about a real, named individual's title. Ruleset §4.2 (named people traceable, no unverifiable positioning) + §7 (nothing about a real named person unless sourced). It reads as the founder's genuine account, but the person's exact title and consent to be named should be confirmed. Could not verify from code — **needs client sign-off**. Live-risk (already shipping).
2. **Live title over budget — draft fixes to 36.** Live `Othmane Halim, fondateur d'AI Makers : pourquoi ce cabinet existe` renders well over 60 incl. suffix (and duplicates the brand). Proposed `Othmane Halim, fondateur` renders as "Othmane Halim, fondateur | AI Makers" = **36 chars** (verified). Ship it. Note: this trims all keyword modifiers to bare name — acceptable for a name/entity page, but "fondateur AI Makers" is worth keeping as the entity anchor, which the suffix supplies.

### 🟢 Low
3. **Person `jobTitle` inconsistency across pages.** `fondateur/page.tsx:34` = "Fondateur & CEO"; `a-propos/page.tsx:31` = "CEO"; `formateurs.ts` = "Fondateur d'AI Makers". Not contradictory (a founder can be CEO) but the Person schema should state one canonical jobTitle. Fold into the cross-page reconciliation, not a standalone fix.

## What this page gets right
- **Verbatim first-person voice, unsmoothed.** The ADHD/décrochage disclosure, "concrètement, on fait comment ?" refrain (H1/Ch.2/CTA), and "notre plus grande fierté, c'est que vous n'ayez plus besoin de nous" are preserved intact — rare, authentic E-E-A-T that generic founder copy never carries.
- **No fabricated credentials.** The letter makes no invented degree/award claims; the career arc (startup → grand groupe) is generic and self-asserted, appropriate for a first-person account.
- **Figures canonical:** +200/+50/+2 500/équipe de 6 match `public/llms.txt`.
- **Proposed meta 155 chars** (verified) — inside budget, keeps the conference/AI-native/"département" spine.
- **Route in sitemap** (`sitemap.ts:41`); Person schema implemented; internal-link targets /a-propos, /equipe, /contact exist. `/#methode` secondary link points to a homepage anchor — confirm the `#methode` id exists on `/`.

## Priority fix list
1. 🟡 Confirm Didier Gaultier's title and consent to be named (accuracy + courtesy).
2. 🟡 Ship the shortened title.
3. 🟢 Settle one canonical Person `jobTitle` in the cross-page reconciliation.

## Open questions
- Is "Didier Gaultier, Head of AI d'Orange" accurate and consented? Third-party name in production copy.
- Canonical founder jobTitle: "Fondateur", "CEO", or "Fondateur & CEO"? Pick one for all Person schema.
- Does `#methode` exist as an anchor on the homepage (secondary CTA target)?

---
### Cross-page candidates
- **Founder jobTitle consistency** (Fondateur / CEO / Fondateur & CEO) spans /fondateur, /a-propos, /equipe and their Person schema — resolve once in `_cross-page-findings.md` (ties to the /a-propos "Chief of Staff" finding).
- **Named third-party references in copy** (Didier Gaultier here; client names elsewhere) — establish a single verification/consent rule for named individuals.

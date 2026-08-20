# Capacité — /capacite

**Source audited:** `[FR] website-content/capacite/capacite.md`
**Compared against:** `src/app/capacite/page.tsx` (live metadata, BreadcrumbList JSON-LD, sections), `src/app/layout.tsx` (title template), `src/app/sitemap.ts`, `public/llms.txt`.
**See also:** `_cross-page-findings.md`

## Score: 87 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 22 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 17 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 10 / 15 |

## Verdict
Ship. Brand-trust page with correctly minimal keyword ambition (no head term to chase — appropriate per ruleset §9). The draft's biggest win is fixing a live title that is badly over budget (86 chars) down to 49. Canonical figures all match. Main residual: this is a shorter page with only BreadcrumbList schema and no FAQ, so its Technical/GEO ceiling is naturally lower — acceptable for a trust page.

## Findings

### 🟠 High
1. **Live title is 86 chars — the draft correctly fixes it.** Live `title: "3 nouveaux clients par mois, maximum : pourquoi notre capacité est limitée"` renders at **86 chars** incl. " | AI Makers" (measured), far over the ≤60 budget — Google truncates it. The draft's proposed `3 nouveaux clients par mois. Maximum.` measures **49 chars** (verified) and matches the H1. This is a live-risk the draft resolves; ship the shorter title.

### 🟡 Medium
2. **Live meta description overruns; fix is valid.** Live description ~230 chars (over 160). Proposed FR replacement measures **145 chars** (verified), retains dedicated-engineer + 2-week onboarding + 3-client cap. Confirm it ships.
3. **Comparative "freelance bouche-trou / équipe mutualisée" framing** (§4.3 bloc 02). Same comparative-claim family flagged on /garanties — defensible as describing *our* model, but the implied contrast with competitors ("dix comptes en parallèle") is a soft comparative claim. Keep an eye on it site-wide; not blocking here since it describes AI Makers' own arrangement.

## What this page gets right
- **Canonical figures exact:** "max 3 nouveaux clients/mois", "ingénieur IA dédié onboardé 2 semaines avant le kick-off" match `public/llms.txt` verbatim.
- **Honest framing, no over-promise:** "Ce n'est pas de la rareté marketing" names the reader's real objection; "On préfère refuser un client que trahir ceux qui ont déjà signé" is a credibility-costing admission — strong E-E-A-T.
- **Schema real:** BreadcrumbList implemented (`page.tsx:17`); no FAQ block claimed and none needed (§5 correctly says template has no FAQ slot — no false schema claim).
- **Route in sitemap** (`sitemap.ts:28`); internal-link targets /garanties, /contact exist.
- **GEO answer-first paragraph** (§8) self-contained and consistent with the `llms.txt` capacité line.

## Priority fix list
1. 🟠 Ship the 49-char title to replace the 86-char live one.
2. 🟡 Ship the 145-char meta description.
3. 🟡 Note the comparative framing for the site-wide compliance decision.

## Open questions
- None blocking. The capacity numbers are self-asserted operational facts; confirm they remain current.

---
### Cross-page candidates
- **Capacity-model figures co-owned with /garanties and homepage** — confirm all three state identical numbers (ruleset §8.3). /capacite is the natural canonical owner of this topic.
- **Comparative "équipe mutualisée / freelance" framing** recurs on /garanties §4.2 — fold into the single comparative-claims compliance decision.

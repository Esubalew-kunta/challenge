# L'équipe — /equipe

**Source audited:** `[FR] website-content/equipe/equipe.md`
**Compared against:** `src/lib/formations.ts:formateurs`, `src/lib/offer-pages/fde.ts:team`, `src/app/equipe/page.tsx` (live metadata, BreadcrumbList JSON-LD, roster selection logic), `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt`.
**See also:** `_cross-page-findings.md`

## Score: 88 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 24 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 18 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 9 / 15 |

## Verdict
Ship after shortening the title. This is the cleanest E-E-A-T page in the batch: every name, role, and bio is verbatim from the live data source, no bio is invented where the source carries none, and low keyword volume on name terms is correct and expected (ruleset §9). The page also carries the *canonical* founder title set (Fondateur/COO/CTO) that /a-propos should be aligned to.

## Findings

### 🟡 Medium
1. **Live title 78 chars — draft fixes to 55.** Live `L'équipe AI Makers : 6 personnes, la production d'une équipe de 40` renders at **78** incl. suffix (brand duplicated). Proposed `L'équipe : 6 personnes, la production de 40` measures **55** (verified). Ship it.

### 🟢 Low
2. **Proposed meta 143 chars** (verified) — inside 140–160, fine. Live was ~240. No action beyond shipping.
3. **Technical/GEO ceiling is naturally lower** — BreadcrumbList only, no FAQ (template has none, correctly stated). No Person schema per team member, but that's an enhancement, not a defect for this page type.

## What this page gets right
- **Roster is verbatim and verified.** Direction — Othmane Halim (Fondateur d'AI Makers), Maneesh Behera (COO d'AI Makers), Walid Boulanouar (CTO AI Makers) — matches `formateurs.ts:669-689` exactly, bios included. Kunta (AI Engineer) matches the `fde.ts:team` filter used at `equipe/page.tsx:52`. Experts Hamza Idmoudi + Edouard Willemsen match `pickFormateurs(["Hamza Idmoudi","Edouard Willemsen"])` at `:49`.
- **No fabricated bios.** Kunta and Hamza Idmoudi carry no bio field in the source, and the draft shows them name+role only — exactly right per ruleset §7.2. LinkedIn URLs all trace to real profiles in `formateurs`.
- **Canonical title set:** the GEO paragraph and roster state Othmane = "Fondateur" — this is the consistent set that /a-propos (which says "CEO") must be reconciled *to*, not away from.
- **Figures canonical:** +200/+50/+2 500, Paris·Rabat, 6 personnes match `public/llms.txt`.
- **Route in sitemap** (`sitemap.ts:40`); internal-link targets /fondateur, /carrieres, /contact exist.

## Priority fix list
1. 🟡 Ship the 55-char title.
2. 🟢 Ship the 143-char meta as-is.
3. 🟢 (Optional enhancement, separate ticket) add per-person Person schema to strengthen E-E-A-T signals.

## Open questions
- None for this page. It is the reference roster; other name pages should be reconciled to it.

---
### Cross-page candidates
- **/equipe is the canonical owner of the founder-title set (Fondateur/COO/CTO).** The /a-propos "CEO / Chief of Staff" divergence should be resolved *toward* this page (see `_cross-page-findings.md`).
- **Kunta / FDE team roster** is shared with /forward-deployed-engineer — confirm both stay in sync if `fde.ts` changes.

# À propos — /a-propos

**Source audited:** `[FR] website-content/a-propos/a-propos.md`
**Compared against:** `src/app/a-propos/page.tsx` (live metadata, Person JSON-LD, direction/dogfooding sections), `src/app/equipe/page.tsx` + `src/lib/formations.ts:formateurs` (team roles), `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt`.
**See also:** `_cross-page-findings.md`

## Score: 84 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 21 / 25 |
| Factual & Claim Accuracy | 23 / 25 |
| On-Page SEO | 18 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 9 / 15 |

## Verdict
Fix-first — a real identity inconsistency needs resolving at source, not just in the draft. As a brand/E-E-A-T page, its minimal keyword ambition is correct and no fabricated credentials appear (founder facts are verifiable, figures canonical). But the live page names a "Chief of Staff" role that maps to nobody on /equipe and titles the founder "CEO" while every other surface says "Fondateur" — an internal-consistency defect the draft fixes in copy but that still lives in the source and the Person JSON-LD.

## Findings

### 🟠 High
1. **Live page states a role with no named holder + inconsistent founder title.** `page.tsx:98`: "Le CEO, le COO et le **Chief of Staff** pilotent la stratégie…" — but /equipe direction is only Fondateur (Othmane Halim), COO (Maneesh Behera), CTO (Walid Boulanouar). No Chief of Staff exists anywhere in `formateurs`. Additionally `page.tsx:31` Person `jobTitle: "CEO"` and `:172` alt "fondateur et CEO d'AI Makers" conflict with the "Fondateur" title used on /equipe and in `formateurs.ts`. Ruleset §1.1 (consistent business identity across page/schema) + §8.3 (sibling pages must agree). The draft correctly rewrites §4.4 to "Le fondateur et le COO" and drops the phantom Chief of Staff — but the fix must also land in `page.tsx:31` (jobTitle) and `:98`/`:172`. This is a **live-risk**. Escalate as one reconciliation ticket (draft §126 already logs it).

### 🟡 Medium
2. **Live title 73 chars — draft fixes to 51.** Live `À propos : AI Makers, le cabinet qui s'applique ce qu'il vend` renders at **73** incl. suffix (brand also duplicated in the field). Proposed `Le cabinet qui s'applique ce qu'il vend` measures **51** (verified), matches H1. Ship it.
3. **Proposed meta description is 165 chars — 5 over budget.** Draft claims ~150; measured **165** (verified). Trim ~6 chars (e.g. drop "de transformation" → "cabinet IA en France et au Maroc", or "professionnels formés" → "pros formés") to reach ≤160. Live value is worse (~290).

## What this page gets right
- **No fabricated credentials.** Founder block uses only verifiable facts (startup → grand groupe path, conference anecdote) with a named LinkedIn (linkedin.com/in/othmanehalim) — no invented degree or title. Othmane Halim is a real, traceable person.
- **Figures canonical:** 6 personnes, +50 entreprises, +200 systèmes, +2 500 formés, 7h/sem all match `public/llms.txt`.
- **Roles-only team preview** (§4.4) correctly keeps named people on /equipe — good separation, no bio duplication.
- **Dogfooding proof** (§4.5) is concrete and first-hand (daily CEO brief agent, call intelligence, mission-health scoring, this site) — genuine experience signal, not filler.
- **No FAQ block claimed** and template has none — no false schema claim.
- **Route in sitemap** (`sitemap.ts:39`); internal-link targets /fondateur, /equipe, /garanties, /contact all exist.

## Priority fix list
1. 🟠 Reconcile founder title + drop "Chief of Staff" at source: fix `page.tsx:31` jobTitle ("CEO" → align with "Fondateur"/founder), `:98`, `:172`; ship the draft's "Le fondateur et le COO" copy. One ticket, spans /a-propos + Person schema.
2. 🟡 Ship the 51-char title.
3. 🟡 Trim the proposed meta to ≤160.

## Open questions
- Is Othmane Halim's official title "CEO" or "Fondateur"? Pick one and apply it consistently across /a-propos copy, the Person JSON-LD, /equipe, /fondateur, and `formateurs.ts`.
- Does a "Chief of Staff" exist? If a real person holds it, add them to /equipe; if not, the role must be removed everywhere.

---
### Cross-page candidates
- **Founder-title inconsistency (CEO vs Fondateur) and the phantom "Chief of Staff"** span /a-propos, /equipe, /fondateur and the Person JSON-LD — resolve once in `_cross-page-findings.md` (ruleset §8.3). This is the single most systemic E-E-A-T issue in the name-page cluster.
- **Canonical figures** (+50/+200/+2 500/7h) recur across nearly every page — /a-propos and homepage are the natural canonical owners; confirm all consumers match `llms.txt`.

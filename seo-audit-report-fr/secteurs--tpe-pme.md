# Audit — IA pour TPE et PME (`/secteurs/tpe-pme`)

- **Source audited:** `[FR] website-content/secteurs--tpe-pme/secteurs--tpe-pme.md`
- **Compared against:** `src/lib/secteurs.ts` (entry `tpe-pme`), `src/app/secteurs/[slug]/page.tsx`, `src/lib/site-config.ts`, `src/app/layout.tsx` + `src/lib/metadata.ts`, `src/app/sitemap.ts`, `public/llms.txt`. Keyword data: Ahrefs keywords-explorer, country=FR, 2026-07.
- **See also:** `_cross-page-findings.md` (CP-1 owner, CP-2, CP-4 owner, CP-6).

## Score: 87 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 23 / 25 |
| Factual & Claim Accuracy | 25 / 25 |
| On-Page SEO | 17 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 9 / 15 |

## Verdict
Ship after applying the master. This is the anchor page of the collection: the cleanest FR
primary in the set ("ia pme" 150), correct canonical-figure usage, and the deliberate owner of
the shared generic CTA and the generic data-security answer. No factual, compliance, or
keyword blockers.

## Findings

### 🟠 High
1. **Custom CTA / shared CTA (CP-1).** This page *keeps* the generic
   "Et dans votre entreprise, l'IA change quoi ?" — correct, it is the canonical owner. But
   the CTA is still hardcoded in `page.tsx:317`, so the moment sibling pages get per-sector CTA
   fields, this page must be wired to the fallback. Tracked as the shared engineering ticket.

### 🟡 Medium
2. **Per-sector `llms.txt` entry not implemented (CP-2).** The proposed line (incl. the 7h
   figure) is not in `public/llms.txt`; the generic secteurs line (llms.txt:40) does list TPE-PME.
3. **Generic data-security answer duplicated in LIVE (CP-4).** FAQ Q3 is the designated canonical
   owner of "vos données ne servent jamais à entraîner les modèles" — correct — but LIVE
   `secteurs.ts` still repeats the same phrasing on sante/conseil/medecins. Fix is to apply the
   regulated-sector rewrites, not to change this page.
4. **Broad use cases by design.** casUsage (back-office, commercial, rédaction, reporting) are
   deliberately horizontal. Fine for a generalist ICP, but depth is shallower than the vertical
   pages — competitive risk only if a rival PME page goes deeper. Low.

## What this page gets right
- **"ia pme" (150, FR) is the strongest, on-intent primary in the whole set** — verified in
  Ahrefs; "ia tpe" is 0 and correctly kept as body-only long-tail.
- **7h/semaine is genuinely canonical** (`llms.txt:10`) — used in intro, FAQ Q1, and GEO block
  with no `[à valider]` needed. Correct.
- **PME size range 20–500** matches the live FAQ; testimonials (Empruntis, ESN Engit) reused by
  name, no fabrication.
- **Two explicit canonical FAQ ownerships** claimed and honoured: company-size Q and
  time-to-results Q — genuinely reduces sibling cannibalization.
- LIVE title (59 rendered) is the only one in the set already within budget.

## Priority fixes
1. Add the proposed `llms.txt` line (CP-2) — it carries the 7h canonical figure into GEO.
2. Confirm this page stays wired to the generic CTA fallback when CP-1 lands.
3. Apply the tightened 153-char meta description.

## Open questions
- None material. This page is the reference implementation for the others.
</content>

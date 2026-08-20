# Audit — IA pour hôtellerie, tourisme & loisirs (`/secteurs/hotellerie-tourisme-loisirs`)

- **Source audited:** `[FR] website-content/secteurs--hotellerie-tourisme-loisirs/secteurs--hotellerie-tourisme-loisirs.md`
- **Compared against:** `src/lib/secteurs.ts` (entry `hotellerie-tourisme-loisirs`), `src/app/secteurs/[slug]/page.tsx`, `src/lib/site-config.ts` (clientLogos:487 Groupe Partouche, homepageContent.proof Qatar Tourism), `src/app/layout.tsx` + `src/lib/metadata.ts`, `src/app/sitemap.ts`, `public/llms.txt` + `public/llms-full.txt`. Keyword data: Ahrefs keywords-explorer, country=FR, 2026-07.
- **See also:** `_cross-page-findings.md` (CP-1, CP-2, CP-5, CP-6).

## Score: 85 / 100 (draft) — but a 🔴 lives in the shipping code (see below)

| Category | Score |
|---|---|
| E-E-A-T & Trust | 22 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 15 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 10 / 15 |

## Verdict
The **draft is publish-ready and exemplary** — it explicitly fixes a fabrication that is
currently live and tags every non-canonical figure. But the **LIVE page ships a 🔴 fabricated
testimonial claim** (Groupe Partouche) and two untagged non-canonical figures. Block the *live*
copy until the master is applied; ship the master as-is.

## Findings

### 🔴 Critical (LIVE-risk — the master already fixes it)
1. **LIVE claims a Groupe Partouche testimonial that does not exist.** `secteurs.ts`
   hotellerie FAQ Q2 (rendered live) reads: *"le Groupe Partouche dans les loisirs
   (son témoignage est sur cette page)"*. But `site-config.ts:487` is
   `{ name: "Groupe Partouche", img: "…partouche-nobg.png" }` — **logo/name only, no
   `testimonial` object**. The template renders testimonials only for clients with a
   `testimonial` field (`page.tsx:45-49, 182`), so **no Partouche quote ever appears** — the
   FAQ promises a testimonial "on this page" that is not and cannot be there. This is a
   fabricated/broken client-testimonial claim → **🔴**, and it is *shipping now*.
   *Fix:* apply the master. The master §4.4 marks Partouche **LOGO ONLY**, and FAQ Q2 strips
   the "(son témoignage est sur cette page)" clause, keeping Partouche only as a named
   logo reference. **Confirmed: the master does NOT claim a Partouche testimonial.** ✅

### 🟠 High
2. **LIVE ships 18 000 $/an and 80 % untagged.** These appear in the live intro, a casUsage
   card, and FAQ Q1. They are **not** in `llms.txt`/`llms-full.txt` (verified absent); they trace
   to the Qatar Tourism case study (`homepageContent.proof`, `site-config.ts`), which the sector
   page does **not** name ("un office de tourisme international"). *Live-risk 🟠* (unsourced
   results figures without `[à valider]`). The master correctly tags all three occurrences
   `[à valider]` and softens to conditional ("économiserait ~18 000 $", "gérerait 80 %").
   *Fix:* apply the master — or, better, name Qatar Tourism and link the published case study,
   which would make the figures fully sourced.
3. **Custom CTA cannot ship (CP-1).** §4.6 proposes
   `Quoi automatiser en premier avant la haute saison ?`; no template field. Engineering ticket.

### 🟡 Medium
4. **Live title overruns (CP-5).** LIVE renders at **91 chars** (joint-longest). Proposed
   "IA pour hôtellerie, tourisme et loisirs" renders at 51. Apply.
5. **No testimonial section renders for this sector.** Because Partouche is logo-only,
   `temoins.length === 0` and the entire "Dans votre secteur, avec nous" block is hidden. The
   page leans on FAQ references + logo instead. Acceptable and honest, but proof is thinner here
   than on sibling pages — worth a client-approved Partouche or Qatar Tourism quote later.
6. **Per-sector `llms.txt` entry not implemented (CP-2);** generic line lists "hôtellerie".

## What this page gets right
- **Best-differentiated pains and use cases in the set** (multilingual 24/7 volume, e-réputation,
  seasonal team churn) — zero overlap with the other 7 pages.
- **"ia hôtellerie" (150, FR) is a solid primary;** "ia tourisme" (10) correctly kept secondary;
  "ia service client" (150, KD1) is a smart low-difficulty body target.
- **The master is a model of the fabrication-removal discipline** — it documents the Partouche
  fix and preserves `[à valider]` on all non-canonical figures rather than deleting them.

## Priority fixes
1. **Apply the master to production immediately** — it clears the live 🔴 Partouche claim.
2. Tag or source the 18 000 $/80 % figures (apply `[à valider]`, or name + link Qatar Tourism).
3. Apply the shortened title (91 → 51).
4. Engineering ticket for CTA fields (CP-1); add `llms.txt` line (CP-2).

## Open questions
- Is there a client-approved Groupe Partouche quote that could be added to `clientLogos`? Until
  then, Partouche stays logo-only.
- Can the tourism chatbot deployment be named (Qatar Tourism) and linked to the case study, to
  make 18 000 $/80 % fully attributable instead of `[à valider]`?
</content>

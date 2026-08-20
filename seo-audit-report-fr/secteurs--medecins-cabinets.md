# Audit — IA pour médecins & cabinets médicaux (`/secteurs/medecins-cabinets`)

- **Source audited:** `[FR] website-content/secteurs--medecins-cabinets/secteurs--medecins-cabinets.md`
- **Compared against:** `src/lib/secteurs.ts` (entry `medecins-cabinets`), `src/app/secteurs/[slug]/page.tsx`, `src/lib/site-config.ts`, `src/app/layout.tsx` + `src/lib/metadata.ts`, `src/app/sitemap.ts`, `public/llms.txt`. Keyword data: Ahrefs keywords-explorer, country=FR, 2026-07.
- **See also:** `_cross-page-findings.md` (CP-1, CP-2, CP-4, CP-5, CP-6). Regulated sector.

## Score: 85 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 23 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 15 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 10 / 15 |

## Verdict
Ship after applying the master. Medical assistive-only framing is exemplary — the draft never
implies clinical decision-making, gates the "2h/day" estimate with `[à valider]`, and leads with
secret médical. The live secteurs.ts version ships the "2h/day" claim untagged (🟠 live-risk),
which the master fixes. No publication blockers in the draft.

## Findings

### 🟠 High
1. **LIVE ships the "jusqu'à deux heures par jour" figure untagged.** `secteurs.ts` medecins
   intro states it as fact; it is a sector estimate, not a canonical figure (absent from
   `llms.txt`/`llms-full.txt`). *Live-risk 🟠.* The master correctly rewrites it to
   "jusqu'à deux heures selon les estimations courantes `[à valider]`" and tags the douleurs
   bullet too. *Fix:* apply the master; keep `[à valider]` until a cited source (e.g. a named
   study/union figure) is attached or the claim is softened.
2. **Custom CTA cannot ship (CP-1).** §4.6 proposes
   `Où l'IA vous rendrait-elle du temps médical ?`; no template field. Engineering ticket.

### 🟡 Medium
3. **Live title overruns (CP-5).** LIVE renders at **91 chars** (joint-longest). Proposed
   "IA pour médecins et cabinets médicaux" renders at 49. Apply.
4. **HDS wording, same caveat as sante page.** FAQ Q1 gates "hébergement de données de santé
   certifié (ex. HDS) … `[à valider]`" — correct treatment. Client must confirm whether AI Makers
   provides/brokers HDS hosting or only advises; the copy must not imply certification it lacks.
5. **Health-primary adjacency with sante page (CP-6).** medecins owns "ia médecin" (60) /
   "ia médecine" (200); sante owns "ia santé" (350). Distinct intent (practitioners vs
   institutions) — keep both pages on their lanes; do not let medecins drift into R&D language or
   the two will compete.
6. **Single testimonial (Addictest, e-santé).** Real, reused by name; the FAQ also name-drops
   Amgen/Gepromed as sector references (correct — those are health clients). Proof is adequate.
7. **Per-sector `llms.txt` entry not implemented (CP-2)** — and the generic line at llms.txt:40
   **omits médecins** (see CP-2). Add it.

## What this page gets right
- **Assistive-only discipline is the best in the collection:** every casUsage card carries an
  in-the-loop guardrail ("relu avant envoi", "une aide pour vous, pas une décision clinique",
  "relue par vous"). No autonomous clinical judgment implied anywhere.
- **`[à valider]` applied to the only non-canonical figure** (2h/day) — meets the rule.
- **secret médical led up front** and framed as the deployment precondition (RGPD + adapted
  hosting).
- **Addictest testimonial reused by name;** Amgen/Gepromed cited as real sector references — no
  fabricated clinical outcomes.
- Clean split from sante (clinicians vs research).

## Priority fixes
1. Apply the master's `[à valider]`-tagged "2h/day" wording — removes the live untagged claim.
2. Apply the shortened title (91 → 49).
3. Client sign-off on HDS wording; keep `[à valider]`.
4. Engineering ticket for CTA fields (CP-1); add `llms.txt` line + fix generic secteurs line (CP-2).

## Open questions
- Source for "jusqu'à deux heures par jour" of admin — can a citable study back it, or should the
  claim be softened further?
- HDS hosting: provided, brokered, or advised only?
</content>

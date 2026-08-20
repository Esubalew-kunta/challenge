# Audit — IA pour banque, assurance & courtage (`/secteurs/banque-assurance-courtage`)

- **Source audited:** `[FR] website-content/secteurs--banque-assurance-courtage/secteurs--banque-assurance-courtage.md`
- **Compared against:** `src/lib/secteurs.ts` (entry `banque-assurance-courtage`), `src/app/secteurs/[slug]/page.tsx`, `src/lib/site-config.ts` (clientLogos: Empruntis w/ testimonial, Emirates NBD logo-only), `src/app/layout.tsx` + `src/lib/metadata.ts`, `src/app/sitemap.ts`, `public/llms.txt`. Keyword data: Ahrefs keywords-explorer, country=FR, 2026-07.
- **See also:** `_cross-page-findings.md` (CP-1, CP-2, CP-5, CP-6). Regulated sector.

## Score: 86 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 23 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 10 / 15 |

## Verdict
Ship after applying the master. Financial-regulation discipline is handled well:
conformity-by-design, human validation on every decision, DPO/traçabilité, and RGPD/EU AI Act
gated with `[à valider]`. Clean, low-difficulty FR primary ("ia banque" 100, KD3). The one
non-canonical figure ("ROI dès le premier mois") is both tagged AND corroborated by a real
published testimonial. No blockers.

## Findings

### 🟠 High
1. **LIVE ships "ROI dès le premier mois" untagged** (casUsage card). Not in `llms.txt`, so
   non-canonical — but it is directly corroborated by the **published Empruntis testimonial**
   (`site-config.ts:502-508`: "Le ROI a été visible dès le premier mois"). *Live-risk is mild 🟠*
   because it is sourced to a real quote. The master still tags it `[à valider]` on the card,
   which is the safe treatment. *Fix:* apply the master; optionally attribute it explicitly
   ("comme le confirme Empruntis") to convert it from `[à valider]` to sourced.
2. **Custom CTA cannot ship (CP-1).** §4.6 proposes
   `Où l'IA dégage-t-elle votre conformité en premier ?`; no template field. Engineering ticket.
   (Master notes the old "votre société" wording collided verbatim with the esn CTA — correctly
   de-duplicated.)

### 🟡 Medium
3. **Live title overruns (CP-5).** LIVE renders at **89 chars**. Proposed
   "IA pour banque, assurance et courtage" renders at 49. Apply.
4. **RGPD / EU AI Act claim gated correctly.** FAQ Q1 states rules "cadrées au cas par cas
   `[à valider]`" with traçabilité, human validation, data cloisonnées, DPO documentation. This
   is accurate and appropriately conditional for a regulated buyer. Keep `[à valider]` until
   client sign-off on any specific AI Act obligation named.
5. **Emirates NBD correctly name-only.** `clientLogos:486` is logo-only (no testimonial); the
   master frames it as "des acteurs bancaires internationaux comme Emirates NBD" — a named
   reference, no fabricated quote. ✅ (Contrast the hotellerie/Partouche live error.)
6. **Per-sector `llms.txt` entry not implemented (CP-2);** generic line lists "banque-assurance".

## What this page gets right
- **Regulated-sector framing is precise:** conformity-by-design, human-in-the-loop on decisions,
  documentation for compliance teams + DPO — no over-promised automation of regulated decisions.
- **"ia banque" (100, KD3) and "ia assurance" (150, KD1) are real, low-difficulty FR targets;**
  the master correctly ignores the inflated global_volume (13 000) on "ia assurance" as a
  namespace/branded collision.
- **The only non-canonical figure is both `[à valider]`-tagged and testimonial-corroborated** —
  belt-and-braces honesty.
- **Empruntis testimonial reused by name; Emirates NBD kept name-only** — no fabrication.
- Distinct dossier-processing use cases; no overlap with siblings.

## Priority fixes
1. Apply the master (tags "ROI dès le premier mois"); optionally attribute it to Empruntis to
   make it fully sourced.
2. Apply the shortened title (89 → 49) and 153-char meta.
3. Client sign-off on any named EU AI Act obligation; keep `[à valider]`.
4. Engineering ticket for CTA fields (CP-1); add `llms.txt` line (CP-2).

## Open questions
- Any specific EU AI Act obligation the client wants named (high-risk system classification,
  etc.), or keep it general with `[à valider]`?
- Attribute "ROI dès le premier mois" to Empruntis explicitly, or keep it as an anonymised
  `[à valider]` claim?
</content>

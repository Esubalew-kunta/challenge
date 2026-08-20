# Audit — IA pour santé, biotech & medtech (`/secteurs/sante-biotech-medtech`)

- **Source audited:** `[FR] website-content/secteurs--sante-biotech-medtech/secteurs--sante-biotech-medtech.md`
- **Compared against:** `src/lib/secteurs.ts` (entry `sante-biotech-medtech`), `src/app/secteurs/[slug]/page.tsx`, `src/lib/site-config.ts`, `src/app/layout.tsx` + `src/lib/metadata.ts`, `src/app/sitemap.ts`, `public/llms.txt`. Keyword data: Ahrefs keywords-explorer, country=FR, 2026-07.
- **See also:** `_cross-page-findings.md` (CP-1, CP-2, CP-4, CP-5, CP-6). Regulated sector.

## Score: 86 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 23 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 10 / 15 |

## Verdict
Ship after applying the master. Regulated-sector discipline is handled correctly:
assistive-only framing, no diagnostic/treatment claims, RGPD framed generally, and the HDS
hosting claim carries `[à valider]`. Strongest FR primary in the set after tpe-pme ("ia santé"
350). No compliance blockers.

## Findings

### 🟠 High
1. **Custom CTA cannot ship (CP-1).** §4.6 proposes
   `Où l'IA rendrait-elle du temps à vos équipes ?` + custom subtitle; no template field.
   Engineering ticket.

### 🟡 Medium
2. **Live title overruns (CP-5).** LIVE renders at **73 chars**; proposed
   "IA pour santé, biotech et medtech" renders at 45. Apply.
3. **HDS / health-data-hosting claim correctly gated but must be signed off.** FAQ Q1 states
   "hébergement de données de santé certifié (ex. HDS) cadré au cas par cas … `[à valider]`".
   This is the right treatment (HDS certification is a real French requirement for hosting
   identifying health data). *Confirm with client:* whether AI Makers itself provides/【arranges】
   HDS-certified hosting, or only advises on it — the wording must not imply AI Makers is HDS-certified
   if it is not. Keep `[à valider]` until signed off.
4. **Generic data-security phrasing duplicated in LIVE (CP-4).** LIVE `secteurs.ts` sante FAQ
   still uses the tpe-pme generic phrasing; the master correctly replaces it with the RGPD/HDS
   version. Apply.
5. **Per-sector `llms.txt` entry not implemented (CP-2);** the generic line at llms.txt:40 does
   list "santé-biotech".

## What this page gets right
- **Assistive-only framing throughout** — hero and every casUsage card exclude diagnostic/
  treatment and repeat "relecture experte / validation humaine". Meets the regulated-sector rule.
- **"ia santé" (350, KD42) verified as the on-intent primary;** "ia biotech" (0) correctly
  kept body-only.
- **Named references are real and testimonials reused by name** (Amgen, Gepromed) — no
  fabricated clinical outcomes, no invented client results.
- **`[à valider]` discipline** applied to the only non-general regulatory specific (HDS).
- Distinct from the medecins page: R&D/regulatory pains vs clinician pains — clean split
  (CP-6).

## Priority fixes
1. Apply the shortened title (73 → 45) and 158-char meta.
2. Client sign-off on the HDS wording; keep `[à valider]` until then.
3. Apply the RGPD/HDS FAQ rewrite (removes CP-4 duplication here).
4. Engineering ticket for CTA fields (CP-1); add `llms.txt` line (CP-2).

## Open questions
- Does AI Makers provide, broker, or merely advise on HDS-certified hosting? The public claim
  must match exactly.
- Any EU AI Act positioning intended here (the banque page names it; this page does not) — keep
  consistent or deliberately scope it out.
</content>

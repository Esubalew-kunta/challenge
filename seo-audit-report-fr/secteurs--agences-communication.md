# Audit — IA pour agences de communication (`/secteurs/agences-communication`)

- **Source audited:** `[FR] website-content/secteurs--agences-communication/secteurs--agences-communication.md`
- **Compared against:** `src/lib/secteurs.ts` (entry `agences-communication`), `src/app/secteurs/[slug]/page.tsx`, `src/lib/site-config.ts` (clientLogos), `src/app/layout.tsx` + `src/lib/metadata.ts` (title suffix), `src/app/sitemap.ts`, `public/llms.txt`. Keyword data: Ahrefs keywords-explorer, country=FR, 2026-07.
- **See also:** `_cross-page-findings.md` (CP-1, CP-2, CP-5, CP-6).

## Score: 84 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 22 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 15 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 10 / 15 |

## Verdict
Ship after applying the master. The draft is clean, honest, and well-differentiated from the
7 siblings. Two things block a perfect on-page score: the *exact* primary keyword earns ~0
searches, and the custom CTA copy has no template field (CP-1). No factual or compliance
blockers.

## Findings

### 🟠 High
1. **Exact primary "ia agence communication" has no measurable FR volume.** Ahrefs FR returns
   no row for the exact phrase; the master leans on "ia agence" (70, KD n/a) and secondary
   "ia marketing" (450, KD38, commercial+informational). The master is transparent about this
   ("~70 « ia agence »", "cluster de longue traîne à faible volume — attendu"). *Why it matters:*
   the page cannot rank on a phrase nobody types. *Fix:* keep the sector-landing framing but
   ensure "ia marketing" and "ia agence" appear naturally in H1/intro/body as the realistic
   ranking targets; treat the exact phrase as a semantic anchor, not a traffic bet. Acceptable
   for a MOFU assist page — not a blocker.
2. **Custom CTA cannot ship (CP-1).** §4.6/§7 propose the title
   `Où partent les heures non facturables de votre production ?` + custom subtitle. The
   closing CTA is hardcoded in `page.tsx:317` and not sector-driven. *Fix:* engineering ticket
   to add `ctaTitle`/`ctaSubtitle` to the `Secteur` type; until then this page shows the shared
   generic CTA.

### 🟡 Medium
3. **Live title overruns 60 chars (CP-5).** LIVE `metaTitle` renders at **71 chars**
   ("…créa, marges | AI Makers"). Master's proposed "IA pour agences de communication" renders
   at 44 — apply it.
4. **ThinkONE testimonial fit.** `temoinClients` reuses Shem's Publicité (ad agency ✓) and
   ThinkONE — but ThinkONE is a research/conseil cabinet and its published quote is about
   strategic reflection, reading more naturally on the conseil page. Real, published testimonial,
   so acceptable; consider whether a second creative-agency proof would land harder here.
5. **Per-sector `llms.txt` entry not yet implemented (CP-2).**

## What this page gets right
- **Distinct, first-hand use cases** (DA control, appels d'offres, multi-format déclinaisons,
  veille insights) — no generic "content generation"; strongest anti-cannibalization lever in
  the set.
- **Canonical figures only** (+50 / +200 from llms.txt); no invented numbers; no `[à valider]`
  needed because the hero deliberately carries no stats.
- **Testimonials reused by name** from `clientLogos` — no fabricated quotes.
- **FAQ Q1 ownership** ("l'IA va-t-elle remplacer nos créatifs ?") is explicitly claimed and
  not duplicated on siblings — clean canonical assignment.
- Answer-first intro is self-contained and GEO-citable.

## Priority fixes
1. Apply the shortened title (71 → 44 chars) and the 158-char meta description.
2. Engineering ticket for per-sector CTA fields (CP-1) — shared across all sectors.
3. Ensure "ia marketing" / "ia agence" appear naturally in body copy as the real ranking targets.
4. Add the proposed `llms.txt` line (CP-2).

## Open questions
- Is there a purely creative-agency client (beyond Shem's) whose testimonial could replace or
  join ThinkONE here for tighter sector fit?
</content>

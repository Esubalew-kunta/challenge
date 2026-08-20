# Audit — IA pour ESN & services IT (`/secteurs/esn-services-it`)

- **Source audited:** `[FR] website-content/secteurs--esn-services-it/secteurs--esn-services-it.md`
- **Compared against:** `src/lib/secteurs.ts` (entry `esn-services-it`), `src/app/secteurs/[slug]/page.tsx`, `src/lib/site-config.ts`, `src/app/layout.tsx` + `src/lib/metadata.ts`, `src/app/sitemap.ts`, `public/llms.txt`. Keyword data: Ahrefs keywords-explorer, country=FR, 2026-07.
- **See also:** `_cross-page-findings.md` (CP-1, CP-2, CP-5, CP-6).

## Score: 82 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 22 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 14 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 9 / 15 |

## Verdict
Ship after applying the master, but with eyes open on keywords: this is the weakest sector by
demand — the exact primary "ia esn" returns **0** FR searches and no strong variant exists. The
content itself is excellent and highly first-hand (named tools, day-rate economics). Treat it as
a pure MOFU assist / internal-linking page, not a traffic bet.

## Findings

### 🟠 High
1. **Zero-volume primary (CP-6).** Ahrefs FR: "ia esn" = 0, "ia développeur" = 30, "ia services
   numériques" long-tail. The master is honest ("cluster de très faible volume assumé"). *Why it
   matters:* no realistic organic head-traffic. *Fix:* accept as an assist/link page; consider a
   body-level nod to higher-volume adjacent terms consultants search ("assistant de code",
   "Claude Code") — but do not manufacture a fake primary. Not a publication blocker given the
   page's stated secondary SEO role.
2. **Custom CTA cannot ship (CP-1).** §4.6 proposes
   `Où le modèle jour-homme fuit-il dans votre ESN ?`; no template field. Engineering ticket.
   (Note the master flags the old "votre société" wording collided verbatim with the banque CTA —
   correctly de-duplicated.)

### 🟡 Medium
3. **Live title overruns badly (CP-5).** LIVE renders at **84 chars** — the second-longest in
   the set. Proposed "IA pour ESN et services IT" renders at 38. Apply.
4. **Sage testimonial fit.** Sage appears as a témoin here, but its published quote is about GEO,
   not ESN delivery/staffing. Real and published, so acceptable; the master frames Sage as a
   software editor ("éditeurs de logiciels comme Sage"), which is fair.
5. **Per-sector `llms.txt` entry not implemented (CP-2);** generic line lists "ESN".

## What this page gets right
- **First-hand specificity rewarded:** names real tools (Claude Code, Cursor, Codex) and real
  services-firm mechanics (avant-vente, intercontrats, jour-homme). This is practitioner copy,
  not AI-flavoured filler.
- **ESN Engit testimonial reused by name** (president's quote) — verified in `clientLogos`;
  no fabrication.
- **Objection-handler "sans mobiliser votre delivery facturable"** is a genuine sector insight.
- **FAQ Q1/Q2 ownership** (external-cabinet Q, code-assistant Q) claimed and non-duplicated.
- Vibe Coding formation link resolves (`formations.ts` slug `vibe-coding`).

## Priority fixes
1. Apply the shortened title (84 → 38) — biggest single on-page win here.
2. Accept the low-volume reality; weave "assistant de code"/named tools into body copy for
   semantic reach rather than chasing a head term.
3. Engineering ticket for CTA fields (CP-1); add `llms.txt` line (CP-2).

## Open questions
- Given ~0 search demand, is this page primarily for sales enablement / internal linking? If so,
  confirm it should stay in the sitemap at priority 0.7 or be deprioritised.
</content>

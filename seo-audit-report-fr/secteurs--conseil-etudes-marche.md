# Audit — IA pour conseil & études de marché (`/secteurs/conseil-etudes-marche`)

- **Source audited:** `[FR] website-content/secteurs--conseil-etudes-marche/secteurs--conseil-etudes-marche.md`
- **Compared against:** `src/lib/secteurs.ts` (entry `conseil-etudes-marche`), `src/app/secteurs/[slug]/page.tsx`, `src/lib/site-config.ts`, `src/app/layout.tsx` + `src/lib/metadata.ts`, `src/app/sitemap.ts`, `public/llms.txt`. Keyword data: Ahrefs keywords-explorer, country=FR, 2026-07.
- **See also:** `_cross-page-findings.md` (CP-1, CP-2, CP-4, CP-5, CP-6).

## Score: 83 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 22 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 14 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 9 / 15 |

## Verdict
Ship after applying the master. The deepest vertical use cases in the set (verbatim coding,
knowledge base). Two on-page cautions: the primary "ia conseil" carries a namespace ambiguity
(conseil = "advice"), and the LIVE title is the joint-longest in the set. No factual or
compliance blockers.

## Findings

### 🟠 High
1. **Primary "ia conseil" (100, FR) has namespace ambiguity (CP-6).** "conseil" also means
   generic "advice", so a slice of that volume is informational "ask-the-AI" intent, not
   "AI for consulting firms". The master already steers away from "cabinets de conseil IA"
   (competitor-comparison intent that would cannibalise `/agence-ia`) — good. *Fix:* qualify the
   term in body copy ("cabinets de conseil et instituts d'études") so the page targets the
   commercial slice, and lean on "ia études de marché" / "ia cabinet de conseil" as
   disambiguating secondaries. Verify SERP intent before investing further.
2. **Custom CTA cannot ship (CP-1).** §4.6 proposes
   `Où partent réellement vos heures d'étude ?`; no template field. Engineering ticket.

### 🟡 Medium
3. **Live title overruns worst-in-set (CP-5).** LIVE renders at **90 chars**. Proposed
   "IA pour conseil et études de marché" renders at 47. Apply.
4. **Generic data-security phrasing duplicated in LIVE (CP-4).** LIVE conseil FAQ Q1 uses the
   tpe-pme generic phrasing; the master replaces it with a sector-specific version (isolated
   environments + client NDAs). Apply.
5. **Single testimonial (ThinkONE).** Only one témoin available; real and well-fitted (research/
   conseil, Managing Partner quote). Not a defect, but proof is thinner than agences/tpe-pme.
6. **Per-sector `llms.txt` entry not implemented (CP-2)** — and the generic line at llms.txt:40
   **omits conseil entirely** (see CP-2). Add it.

## What this page gets right
- **Deepest, most first-hand use cases:** verbatim coding, corpus review with traced sources,
  knowledge-base capitalisation — genuinely specific to research/consulting workflows.
- **FAQ Q2 "la qualité d'analyse est-elle au niveau ?"** frames the AI honestly (eliminates
  processing, does not replace judgment) — no over-promising.
- **ThinkONE testimonial reused by name** — verified in `clientLogos`; no fabrication.
- **No unsourced figures** — the page carries zero numeric claims beyond canonical +50/+200.
- Clear owner of "confidential interviews" and "analysis quality" FAQ questions.

## Priority fixes
1. Apply the shortened title (90 → 47) — largest on-page overrun in the collection.
2. Verify SERP intent for "ia conseil"; qualify the term in body copy to hit the commercial slice.
3. Apply the NDA/isolated-environment FAQ rewrite (removes CP-4 duplication here).
4. Add the `llms.txt` line and correct the generic secteurs line to include conseil (CP-2).

## Open questions
- Is a second consulting/market-research client available to strengthen proof beyond ThinkONE?
</content>

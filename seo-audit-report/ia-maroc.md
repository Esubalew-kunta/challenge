# IA au Maroc — /ia-maroc (EN draft → proposed /ai-morocco)

**Source audited:** `[EN] website-content/ia-maroc/ia-maroc.md`
**Compared against:** `src/app/ia-maroc/page.tsx` (SARL/loi 09-08/CNDP/address copy, breadcrumb + FAQPage schema), `src/lib/metadata.ts`, `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt`; **Ahrefs (US), 2026-07**
**See also:** cross-page candidates (end of file)

## Score: 85 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 24 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 13 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Fix-first (meta length), then ship. A deliberately low-keyword geo/entity page — correctly reasoned, since "ai in morocco" returns **0 US volume (Ahrefs-verified)** and the Morocco audience searches in FR/Arabic. Entity facts (Moroccan-law SARL, Rabat office, loi 09-08/CNDP, GDPR) are all confirmed against live copy. The meta description is the batch's worst length overrun and needs cutting.

## Findings

### 🟠 High
1. **Meta description 209 chars — 49 over the 160 budget** (measured; longest in the batch). Google truncates around 155–160, so ~a third of this description is dead weight and the "law 09-08 and GDPR" payload sits past the cut. *Fix:* rewrite to ≤160, front-loading the entity + compliance facts, e.g. "AI Makers is an AI consultancy with a Moroccan-law company and a Rabat office. We audit, ship AI systems to production and train teams — under law 09-08 and GDPR." (~158).

### 🟡 Medium
2. **Title-field vs template split.** Draft shows `AI Consultancy in Morocco — Rabat | AI Makers` (self-counted 48). Page uses `constructMetadata`, so the field must be `AI Consultancy in Morocco — Rabat` (33) and the template adds ` | AI Makers` → 45. Make the split explicit so brand doesn't double.
3. **llms.txt entry URL mismatch.** Proposed EN `llms.txt` entry links `https://aimakers.fr/ia-maroc` while the page's proposed slug is `/ai-morocco`. Align the URL to the final slug.

### 🟢 Low
4. **"Belgium/Luxembourg" markets — safely handled.** Draft §4.3/§9 says it dropped a FR "Belgium, Luxembourg" list to the canonical France+Morocco; a grep of `src/app/ia-maroc/page.tsx` finds no such mention, so the conservative France+Morocco framing is correct regardless. Deeper loi 09-08 obligations left undetailed and tagged `[to validate legal accuracy]` — appropriate.
5. **`/ai-morocco` route not yet in `sitemap.ts`** — EN-build item (cross-page).

## What this page gets right
- Keyword decision verified: `ai in morocco` = **0 US volume (Ahrefs)**; treating this as an entity + GEO-citation asset (not a keyword page) is the right call and honestly declared.
- Entity facts confirmed against live copy: "société de droit marocain (SARL)" (`page.tsx:230`), address "46 Avenue Okba, Agdal" (`page.tsx:41`), "loi 09-08 (CNDP)" + "RGPD" (`page.tsx:14,117`). No invented legal or office claim.
- Compliance framing correct: loi 09-08 is Morocco's personal-data statute enforced by the CNDP; GDPR for EU-resident data — stated at the level the FR page asserts, no over-claim.
- FAQ answers are answer-first with one fact each; FAQPage schema **verified present**. Answer-first GEO paragraph self-contained and entity-rich (SARL, address, laws, founder, second office).

## Priority fixes
1. Cut the meta description to ≤160 (§ finding 1) — highest-impact fix on the page.
2. Make the title field/template split explicit (§ finding 2).
3. Align the `llms.txt` entry URL to the final EN slug (§ finding 3); EN build: create `/ai-morocco` route + sitemap + hreflang.

## Open questions
- Legal: are deeper loi 09-08 obligations (CNDP registration, cross-border transfer) in scope for this page, or intentionally kept high-level? (Currently `[to validate]`.)
- Does AI Makers actually serve Belgium/Luxembourg? If yes, canonical sources (llms.txt) should say so; if no, the drop is correct.

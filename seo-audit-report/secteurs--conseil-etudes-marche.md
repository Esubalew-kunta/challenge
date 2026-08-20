# Secteur — Conseil & études de marché · route `/secteurs/conseil-etudes-marche`

**Source audited:** `[EN] website-content/secteurs--conseil-etudes-marche/secteurs--conseil-etudes-marche.md`
**Compared against:** `src/app/secteurs/[slug]/page.tsx`, `src/lib/secteurs.ts` (entry `conseil-etudes-marche`), `src/lib/metadata.ts`, `src/app/layout.tsx`, `src/lib/faq-schema.ts`, `src/app/sitemap.ts`, `src/lib/site-config.ts`, `public/llms.txt`. Ahrefs keywords-explorer-overview (US), 2026-07-15.
**See also:** shared cross-sector findings in the final report.

## Score: 88 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 22 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 17 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Ship after the shared template fixes. Disciplined keyword choice — deliberately targets "ai for market research" and keeps "ai consulting firms" off-target to avoid cannibalising the `/ai-consulting` money page (rules §5.5 respected). Deep-vertical use cases (verbatim coding, knowledge base) unique to research/consulting. Blockers are the shared title/slug/i18n mechanics.

## Findings

### 🟠 High
1. **Double brand suffix in title.** Proposed `AI for Market Research & Consulting | AI Makers` renders doubled. **Fix:** `metaTitle = AI for Market Research & Consulting` (35) → renders 47 chars.
2. **Proposed slug `/industries/ai-for-market-research` has no route**; §8 GEO cites `/secteurs/conseil-etudes-marche`. Shared slug issue.

### 🟡 Medium
3. **EN content in FR template chrome** — shared i18n gap.
4. **Single testimonial (ThinkONE).** Only one client renders in the témoignages section; the template still renders it (grid degrades to one card). Verified: ThinkONE has a `testimonial` (line 524). Not a defect, just thinner social proof than siblings with two.

## What this page gets right
- Primary "ai for market research" verified 500/mo US, KD46 (Ahrefs 2026-07, matches draft); distinct primary from all siblings.
- Deliberate avoidance of "ai consulting firms" (competitor-comparison intent) to protect the `/ai-consulting` money page — correct anti-cannibalisation call.
- Use cases (interview coding, desk research, knowledge capitalisation) are deep-vertical and unique; "sources traceable" / "reviewed by consultants" keep claims honest.
- FAQ Q1 (confidential-interview handling) and Q2 (analysis quality) designated canonical owners, distinct from the health/finance compliance answers.
- ThinkONE testimonial verified in `clientLogos`; "Managing Partner" role matches `site-config.ts`.
- "+50 companies / +200 systems" canonical from `llms.txt`. Route in `sitemap.ts`; JSON-LD implemented.

## Priority fixes
1. Strip `| AI Makers` from `metaTitle` (🟠, trivial).
2. Resolve slug §3/§8 mismatch (🟠, coordination).
3. Template i18n ticket (🟡, shared engineering).

## Open questions
- Confirm the intended relationship to a future `/ai-consulting` page so this sector landing consistently links up to it rather than competing.

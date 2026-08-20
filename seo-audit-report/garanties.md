# Garanties — /garanties (EN draft → proposed /guarantees)

**Source audited:** `[EN] website-content/garanties/garanties.md`
**Compared against:** `src/app/garanties/page.tsx`, `src/lib/metadata.ts`, `src/app/layout.tsx` (title template), `src/app/sitemap.ts`, `src/components/shared/json-ld.tsx`, `src/lib/faq-schema.ts`, `public/llms.txt`
**See also:** cross-page candidates (end of file)

## Score: 90 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 24 / 25 |
| Factual & Claim Accuracy | 25 / 25 |
| On-Page SEO | 15 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 12 / 15 |

## Verdict
Ship after minor meta fixes. This is a model trust page: each of the four guarantees keeps its trigger, its payoff *and* its activation condition, and the "What they cover / What they assume" table attaches the precondition to every guarantee — exactly what §4.4 of the ruleset demands. No fabrication, figures canonical. Only the title/description mechanics need correction.

## Findings

### 🟡 Medium
1. **Title will render with brand twice.** Draft title field = `Our 4 Written Guarantees — AI Makers` (36 chars). The live page uses `constructMetadata`, and the root template (`layout.tsx`) appends ` | AI Makers`, so the rendered `<title>` becomes `Our 4 Written Guarantees — AI Makers | AI Makers` (48 chars, brand ×2). *Fix:* put only `Our 4 Written Guarantees` in the title field; the template supplies the brand → `Our 4 Written Guarantees | AI Makers`.
2. **Meta description 178 chars — overruns the 140–160 budget** (measured). Will truncate in SERP. *Fix:* trim to ≤160, e.g. drop the closing "Here's exactly what they cover." → lands ~150.

### 🟢 Low
3. **`/guarantees` route does not exist yet** in `sitemap.ts` (only `/garanties`). Not a draft defect — see cross-page engineering ticket. Internal-link footnote `/cgv` is valid (in `legalRoutes`).

## What this page gets right
- Every guarantee states its condition (trigger + what you get + how to activate), and the transparency table adds "What it assumes" per guarantee — no misleading unconditional promise.
- Canonical facts intact: "four guarantees written into the contract", "max three new clients/month", "dedicated engineer onboarded two weeks before kick-off" all match `public/llms.txt`.
- Answer-first GEO paragraph is self-contained and citable; FAQ Q&A pairs are FAQPage-eligible and the live page **actually emits `faqPageSchema`** (verified in `page.tsx`) — planned = implemented here.
- No unsubstantiated superlatives; the H1 "only ones who guarantee" is framed as a model consequence, argued not asserted.

## Priority fixes
1. Split brand out of the title field (§ finding 1).
2. Trim meta description to ≤160 (§ finding 2).
3. On EN build: register `/guarantees` route + sitemap entry + hreflang link to `/garanties`.

## Open questions
- Keep legal route as French `/cgv` on the EN page (draft assumes yes) — confirm.

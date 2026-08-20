# À propos — /a-propos (EN draft → proposed /about)

**Source audited:** `[EN] website-content/a-propos/a-propos.md`
**Compared against:** `src/app/a-propos/page.tsx` (leadership copy, Person schema jobTitle "CEO"), `src/lib/metadata.ts`, `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt`
**See also:** cross-page candidates (end of file)

## Score: 87 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 24 / 25 |
| Factual & Claim Accuracy | 25 / 25 |
| On-Page SEO | 13 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Ship after title fix. E-E-A-T-dominant brand page; low keyword pressure is expected and correctly declared. No invented credentials — the founder block and the "CEO / COO / Chief of Staff" leadership line are faithful translations of live copy, and every figure is canonical. Only the title length/branding needs correction.

## Findings

### 🟡 Medium
1. **Rendered title exceeds 60 chars.** Field `About AI Makers: the firm that runs on what it sells` (52) + template ` | AI Makers` → **64 chars**, with "AI Makers" appearing twice. *Fix:* either drop the brand from the field (`About: the firm that runs on what it sells` → renders 55) or accept the natural in-title brand and shorten to fit 60 with the appended suffix.
2. **Meta description 188 chars — 28 over the 160 budget** (measured). *Fix:* trim to ≤160; the figures list can be compressed.

### 🟢 Low
3. **Live-copy internal inconsistency (not introduced by the draft), flag to client:** `/a-propos` leadership reads "the CEO, the COO and the Chief of Staff" (verbatim from `src/app/a-propos/page.tsx:98`), while `/equipe` lists leadership as Othmane (Founder/CEO), Maneesh (COO) and Walid (**CTO**). "Chief of Staff" has no named holder. This divergence pre-exists in the live FR site; the EN draft translates faithfully. Worth reconciling at source so the two pages agree.
4. **`/about` route not yet in `sitemap.ts`** — EN-build item (cross-page).

## What this page gets right
- No fabrication: founder background (startup → large corporation, conference turning point) matches live copy; no invented credential, client, or figure.
- Canonical figures exact: 6 people, +50 companies, +200 systems, +2,500 trained, 7h/week, Paris (75008) + Rabat — all match `public/llms.txt`.
- Dogfooding proof section is concrete and first-hand (daily decision brief, call intelligence, engagement health scoring, "this website") — genuine experience signals, not filler.
- Answer-first GEO paragraph self-contained and citable. Named people live on `/equipe`; roles-only here avoids duplication.

## Priority fixes
1. Fix title length/branding to render ≤60 with single brand.
2. Trim meta description to ≤160.
3. Reconcile the CEO/COO/Chief-of-Staff vs Founder/COO/CTO leadership description between `/a-propos` and `/equipe` (source fix).

## Open questions
- Who is the "Chief of Staff" referenced on `/a-propos`, and is that label current? Align both pages once answered.

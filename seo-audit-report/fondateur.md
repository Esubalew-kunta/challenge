# Fondateur — /fondateur (EN draft → proposed /founder)

**Source audited:** `[EN] website-content/fondateur/fondateur.md`
**Compared against:** `src/app/fondateur/page.tsx` (first-person letter, Person schema jobTitle "Fondateur & CEO"), `src/lib/metadata.ts`, `src/app/layout.tsx`, `public/llms.txt`
**See also:** cross-page candidates (end of file)

## Score: 90 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 25 / 25 |
| Factual & Claim Accuracy | 25 / 25 |
| On-Page SEO | 15 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Ship after title fix. Entity-building founder page with the strongest E-E-A-T signals in the batch — a genuine first-person voice (ADHD disclosure, a named third party) translated faithfully, not smoothed into generic founder-speak. Every load-bearing detail traces to the live letter or Person schema. Only the title's redundant brand needs a touch.

## Findings

### 🟡 Medium
1. **Title brand doubling.** Field `Othmane Halim, Founder of AI Makers` (35) + template ` | AI Makers` → `Othmane Halim, Founder of AI Makers | AI Makers` (47, brand ×2). *Fix:* field = `Othmane Halim, Founder of AI Makers` is fine for entity clarity but drop the template duplication — e.g. field `Othmane Halim, Founder` → renders `Othmane Halim, Founder | AI Makers`; or keep as-is and accept the double brand (low harm, but flag).
2. **Meta description 177 chars — over the 160 budget.** *Fix:* trim to ≤160.

### 🟢 Low
3. **`/founder` route not yet in `sitemap.ts`** — EN-build item (cross-page).

## What this page gets right (claims verified against live letter)
- **Named third party is real in source, not invented:** "Didier Gaultier, Head of AI at Orange" appears verbatim in `src/app/fondateur/page.tsx:61` ("Didier Gaultier, Head of AI d'Orange"). Faithful translation.
- ADHD disclosure is the founder's own words (`page.tsx:50`) — kept, not sanitised. This is authentic experience signal.
- Person schema **verified present** (`page.tsx:30`, jobTitle "Fondateur & CEO"); EN "founder and CEO" is consistent.
- Canonical figures exact (+200 systems / +50 companies / +2,500 trained / team of 6). Answer-first GEO paragraph self-contained and entity-focused ("Othmane Halim is the founder and CEO of AI Makers…") — ideal for GEO citation.

## Priority fixes
1. Resolve title brand duplication (§ finding 1).
2. Trim meta description to ≤160.
3. EN build: create `/founder` route + sitemap + hreflang; carry the Person schema to the EN page.

## Open questions
- None. Confirm Othmane is comfortable with the ADHD disclosure appearing on the EN/international page (it's already public on the FR page) — a courtesy check, not a defect.

# Équipe — /equipe (EN draft → proposed /team)

**Source audited:** `[EN] website-content/equipe/equipe.md`
**Compared against:** `src/app/equipe/page.tsx`, `src/lib/formations.ts` (`formateurs`), `src/lib/offer-pages/fde.ts` (`team.members`), `src/lib/metadata.ts`, `src/app/layout.tsx`, `public/llms.txt`
**See also:** cross-page candidates (end of file)

## Score: 89 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 25 / 25 |
| Factual & Claim Accuracy | 25 / 25 |
| On-Page SEO | 15 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Ship after meta fixes. The dominant E-E-A-T category is clean: every name, role and bio was checked against the live data source and **matches verbatim** — nothing invented, and people with no bio in source are shown name+role only, exactly as the ruleset requires. Only meta mechanics pull points.

## Findings

### 🟡 Medium
1. **Title brand doubling.** Field `The AI Makers Team: 6 people, the output of 40` (46) + template ` | AI Makers` → 58 chars with "AI Makers" ×2. Under 60 but redundant. *Fix:* `The Team: 6 people, the output of 40` in the field → renders `... of 40 | AI Makers`.
2. **Meta description 174 chars — over the 160 budget.** *Fix:* trim to ≤160.

### 🟢 Low
3. **`/team` route not yet in `sitemap.ts`** — EN-build item (cross-page).

## What this page gets right (roster verified against source)
- **Leadership** (from `formateurs`): Othmane Halim — Founder (bio "+200 AI engagements. Expert in AI transformation and strategy." = source "+200 missions IA. Expert transformation et stratégie IA." ✓); Maneesh Behera — COO ✓; Walid Boulanouar — CTO ✓. LinkedIn URLs match source.
- **Engineering:** Kunta — AI Engineer ✓ (from `fde.ts:team.members`, role "AI Engineer", line 189–190). Draft correctly renders only Kunta (the live `.filter(["Kunta"])`) with name+role only — no bio invented (source carries none). Team intro quoted verbatim from `fdeContent.team.intro`.
- **Associate experts:** Hamza Idmoudi — Data / AI Engineer ✓ (no bio in source → shown name+role only, nothing padded); Edouard Willemsen — AI Trainer ✓ (bio matches source). Draft correctly follows the live `pickFormateurs(["Hamza Idmoudi","Edouard Willemsen"])` selection, not the skeleton's example note.
- Canonical figures exact: +200 systems / +50 companies / +2,500 trained, Paris · Rabat. Answer-first GEO paragraph self-contained.

## Priority fixes
1. De-duplicate brand in title field.
2. Trim meta description to ≤160.
3. EN build: create `/team` route + sitemap + hreflang; add a Person/`ItemList` schema for the roster if E-E-A-T entity signals are wanted (currently only BreadcrumbList).

## Open questions
- None. (Low search volume on the team page is expected and correct — no keyword to chase.)

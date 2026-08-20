# Glossaire IA — /glossaire-ia (EN: /ai-glossary)

**Source audited:** `[EN] website-content/glossaire-ia/glossaire-ia.md`
**Compared against:** `src/app/glossaire-ia/page.tsx`, `src/app/sitemap.ts`, `public/llms.txt`; Ahrefs (US/GB) 2026-07.
**See also:** `_cross-page-findings.md`

## Score: 88 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 22 / 25 |
| Factual & Claim Accuracy | 23 / 25 |
| On-Page SEO | 18 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Ship after two small fixes. This is the strongest GEO/definitional asset in the batch: 30 self-contained, citable definitions, correct keyword portfolio strategy, and factually accurate AI definitions. The only real gaps are one code-dependent schema change (`inLanguage`) and one internal-link target that does not exist as a route.

## Findings

### 🟠 High
1. **Internal-link target `/ai-readiness-assessment` does not exist.** §4.4 rationale says the business cluster links "to /ai-readiness-assessment and /audit-ia-entreprise". No such route exists (no `src/app/ai-readiness-assessment`, absent from `sitemap.ts`). The FR equivalent is `/diagnostic-ia`. **Fix:** point the "AI maturity / readiness" anchor to `/diagnostic-ia` (or `/audit-ia-entreprise`), or scope `/ai-readiness-assessment` as a new route before linking. Note: the formal §6 internal-link table lists only existing routes (`/seo-geo`, `/gouvernance-ia`, `/audit-ia-entreprise`, `/contact`) — the dead target is only in prose, so impact is limited, but it must not reach the built page.

### 🟡 Medium
2. **JSON-LD `inLanguage` hardcoded to fr-FR — a code change, not content.** The draft correctly flags (§3 note) that the page's `DefinedTermSet` schema is `inLanguage: "fr-FR"` and must become `"en"` for the EN build. This is a real dev ticket, not a copy edit — scope it explicitly so the EN glossary doesn't emit French-language structured data. Confirm the `DefinedTermSet` block is actually implemented in `page.tsx` before treating the schema as live.
3. **"AI Act… in force since 2024" — verify phrasing precision.** §4.5 states the AI Act is "in force since 2024 with a phased rollout" and lists 4 risk levels. Broadly correct (entered into force Aug 2024, staged application through 2026–27), but "in force since 2024" can read as "fully applicable" — keep the "phased rollout" qualifier tight so the definition isn't over-stated on a regulatory term. Money/compliance-adjacent → keep conditional.

### 🟢 Low
4. **No FAQPage eligibility captured despite 30 Q-shaped entries.** Template has no FAQ slot (§5), so each "what is X" definition can't emit FAQPage markup — but `DefinedTermSet` is the right schema here and the first sentences are snippet-ready. Optional upside, not a defect.

## What this page gets right
- **All five stated keyword volumes/difficulties verified exact against Ahrefs (US):** ai glossary 400/KD59, ai terms 700/KD55, generative engine optimization 7,900/KD48, what is rag 4,600/KD69, what is an ai agent 15,000/KD82. No inflated claims.
- **Keyword strategy is correct:** treats the glossary as a tail portfolio, correctly identifies GEO (7,900, KD48) as the highest-value winnable term, and builds its definition to be the snippet. Textbook GEO reasoning.
- **Definitions are factually accurate and genuinely citable** — each first sentence is self-contained (agent vs chatbot, generative vs predictive, RAG expansion + function). Checked against standard AI definitions: no stale or invented product facts.
- **Term count verified:** 8 + 9 + 7 + 6 = 30, matches `page.tsx`.
- **Route in sitemap** (`sitemap.ts:38`); title 57 chars, meta 159 chars — both within budget (measured).
- **No stuffing:** "ai glossary" density is low; the page varies phrasing naturally across 30 entries.
- **GEO answer-first block (§8) and llms.txt entry** are consistent with the live llms.txt glossary line.

## Priority fixes (ranked)
1. **Repoint or remove `/ai-readiness-assessment` link** (🟠, trivial) → use `/diagnostic-ia`.
2. **Ticket the `inLanguage: "fr-FR" → "en"` schema change** for the EN build (🟡, dev, low effort).
3. **Tighten the "AI Act in force since 2024" qualifier** (🟡, trivial).

## Open questions
- Is `/ai-readiness-assessment` a planned new EN route, or should the anchor use `/diagnostic-ia`?

## Cross-page candidates
- **`/ai-readiness-assessment` phantom route** — if other EN drafts reference the same non-existent route, consolidate the decision (new route vs `/diagnostic-ia`) in `_cross-page-findings.md`.
- **`inLanguage` locale on JSON-LD** — every EN page cloned from a FR template inherits `fr-FR`; this is a systemic EN-build dev ticket, not a per-page fix.

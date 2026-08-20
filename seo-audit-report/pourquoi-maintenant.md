# Pourquoi maintenant — /pourquoi-maintenant (EN: /why-now)

**Source audited:** `[EN] website-content/pourquoi-maintenant/pourquoi-maintenant.md`
**Compared against:** `src/lib/offer-pages/manifeste.ts`, `src/app/pourquoi-maintenant/page.tsx`, `src/app/sitemap.ts`, `src/components/sections/homepage/method.tsx`, `public/llms.txt`; Ahrefs (US) 2026-07.
**See also:** `_cross-page-findings.md`

## Score: 82 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 20 / 25 |
| Factual & Claim Accuracy | 20 / 25 |
| On-Page SEO | 17 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Fix-first (light). This is a well-built GEO citation asset: sourced, opinionated, self-contained. The EN keeps every FR figure and source 1:1 (verified against `manifeste.ts`). Two things block a clean ship: the meta description is 10 chars over the stated limit, and one cited figure (55% Bpifrance) contradicts its own linked source (slug = 31%). Both are already tracked in the draft — confirm resolution, don't re-discover.

## Findings

### 🟠 High
1. **Cited figure conflicts with its own source — "55% des TPE-PME… (Bpifrance)".** `manifeste.ts:68` states "En France, 55% des TPE-PME utilisent l'IA générative, 17% régulièrement (Bpifrance)", but the Bpifrance source URL it links is `lelab.bpifrance.fr/Etudes/31-des-tpe-et-pme-utilisent-l-ia-generative` (slug = **31%**). The draft carries this figure verbatim into EN and flags it `[to validate]` in §9. This is a real, shipping (FR live) contradiction between a stated stat and its cited source — an E-E-A-T hit on a page whose entire value is sourced credibility. **Already tracked — confirm resolved:** reconcile to one figure/source (31% Bpifrance, or 55%/17% from a different source, possibly the INSEE ICT survey also listed) before EN publish. Do not ship EN carrying the mismatch.

### 🟡 Medium
2. **Meta description is 170 chars, not the claimed 160.** Measured: the proposed EN meta "The cost of intelligence fell 280× in two years… not in three years." = **170 chars** (draft §3 claims *(160)*). Over the 140–160 budget → truncation risk in SERP. **Fix:** trim ~12 chars, e.g. drop "with sourced numbers" or "for your company". The description does double duty as page metadata; keep the "why now / this quarter" hook.
3. **Three figures are `[to validate]` estimates with no in-page source — already tracked.** (a) "GPT-4 $30 → $0.15 per M tokens, 16 months" (`manifeste.ts:26`); (b) "~3 cents of API to analyse a 10-page document" (illustrative, no citation); (c) the Bpifrance 55/17 above. All three are flagged in §9. Confirm each is either sourced or softened before publish — the GPT-4 price point in particular should trace to a16z/Stanford. Not a blocker (visible `[to validate]` discipline is being followed).

### 🟢 Low
4. **Secondary CTA `/#methode` resolves to a homepage anchor, not this page.** `id="methode"` exists only in `src/components/sections/homepage/method.tsx:114`. The link works (homepage), but confirm the EN nav/anchor still exists post-translation so the "See our method" CTA doesn't dead-end.

## What this page gets right
- **EN is a faithful 1:1 of the FR source.** Every figure, source label, and href in the draft matches `manifeste.ts` (÷280, ÷10/yr, 4%→72% SWE-bench, $12.88→$2.78, 88%/39%, >40% Gartner). No new/inflated numbers introduced.
- **Sources block is genuine GEO gold** — 7 named references (a16z, Stanford AI Index, McKinsey, Bpifrance, INSEE, Gartner, Ardent Partners) with live hrefs, translated labels only.
- **Answer-first GEO paragraph (§8) is self-contained and citable** — states the thesis + the anchor stats + the source in one liftable block.
- **Correct keyword stance:** deliberately no head-term target; scored on citation-worthiness, which is the right call for a manifesto. No stuffing.
- **Route is in the sitemap** (`sitemap.ts:36`). Title = 55 chars incl. brand suffix (within budget).
- **Canonical figures respected** — the guarantee/commitment numbers in Bloc 5 (2 weeks audit, ≥3 use cases, 30 days) match the site model.

## Priority fixes (ranked)
1. **Reconcile the Bpifrance 55%/17% vs 31%-slug figure** (🟠, low effort) — pick one figure + correct source, fix in `manifeste.ts` so FR and EN agree.
2. **Trim the EN meta description to ≤160 chars** (🟡, trivial).
3. **Source or soften the GPT-4 price and 3-cents estimates** (🟡, low) — attach citation or mark clearly illustrative.
4. **Confirm `#methode` anchor target for the EN build** (🟢, trivial).

## Open questions
- Which is the correct SMB-adoption figure and source — Bpifrance 31%, or 55%/17% from INSEE? Client sign-off needed.
- Is the GPT-4 $30→$0.15 price point sourced (a16z LLMflation), or an internal estimate to tag?

## Cross-page candidates
- **`[to validate]` unsourced stat pattern:** shared with `playbook-ia` ($700B/5%/30% stats, 50/63% success gap) — a site-wide "sourced-stat discipline" pass belongs in `_cross-page-findings.md`.
- **Meta-length self-counts drifting from actual** (this page 160→170) — check whether other EN drafts under-count.

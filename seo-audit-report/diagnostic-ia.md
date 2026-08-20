# Diagnostic IA — /diagnostic-ia (EN draft → proposed /ai-maturity-assessment)

**Source audited:** `[EN] website-content/diagnostic-ia/diagnostic-ia.md` (wizard page — meta + intro + GEO only)
**Compared against:** `src/lib/diagnostic-config.ts` (12 questions = 10 scoring ×0/1/2 + 2 qualification; `captureContent`), `src/app/diagnostic-ia/page.tsx` (**plain Next Metadata, self-contained title**), `src/app/sitemap.ts`, `public/llms.txt`; **Ahrefs (US), 2026-07**
**See also:** cross-page candidates (end of file)

## Score: 88 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 23 / 25 |
| Factual & Claim Accuracy | 25 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Ship. Auditing meta + intro + GEO only (the wizard body lives in config). The two things that could go wrong on a tool page — the /20-vs-/24 scale and a colliding slug — are both correctly reasoned and verified. Metas are within budget. The tool's promise matches what the code actually does.

## Findings

### 🟢 Low
1. **/20 vs /24 — verified correct, not a bug.** `diagnostic-config.ts` confirms 12 questions = **10 scoring ×0/1/2 = score out of 20** + 2 qualification questions. The site-wide "/24 grid" is the separate, human-led AI Scan audit. The draft keeps `/20` here and `/24` on the audit page — correct. GEO paragraph states the distinction cleanly.
2. **Slug-collision reasoning sound but depends on a not-yet-existing route.** Draft takes `/ai-maturity-assessment` (Ahrefs: `ai maturity assessment` **150/KD52** — verified) and routes `ai readiness assessment` intent (**1,400/KD8** — verified, the strong term) to the audit page at proposed `/ai-readiness-assessment`. Confirm that audit-page EN slug before finalising; neither EN route exists in `sitemap.ts` yet.
3. **Title 55 chars, description 156 — both within budget.** Title is self-contained (plain metadata, no template) — the draft correctly did **not** rely on a ` | AI Makers` suffix here. No length action.
4. **`ai readiness quiz`** claimed at 50/KD1 (not spot-checked this pass) — plausible; low-stakes secondary.

## What this page gets right
- Keyword targets verified against Ahrefs and honestly framed as "light keyword pressure — the page's job is the tool + lead capture, not ranking".
- Tool promise matches code: "score out of 20, sector-specific recommendations, 90-day action plan, work-email gate, 48-page Playbook bundle" all trace to `diagnostic-config.ts` (`captureContent`, `sectorQuickWins`, `scoreThresholds`).
- **GDPR on capture handled:** privacy note ("data stays private, no spam, one-click unsubscribe") kept explicit; work-email gate is minimal, purpose-appropriate collection.
- Answer-first GEO paragraph self-contained and correctly positions the self-test as the counterpart to the human-led AI Scan.

## Priority fixes
1. Confirm the audit page's EN slug (`/ai-readiness-assessment`) before locking this page's slug/cross-links.
2. EN build: create `/ai-maturity-assessment` route + sitemap + hreflang.
3. Spot-check `ai readiness quiz` volume at build time if it's to be used in copy.

## Open questions
- Final EN slug for the audit/AI-Scan page (owns "ai readiness assessment")?

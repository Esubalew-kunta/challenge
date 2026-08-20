# Challenge 30 jours — /challenge-30-jours (EN: /30-day-ai-challenge)

**Source audited:** `[EN] website-content/challenge-30-jours/challenge-30-jours.md`
**Compared against:** `src/app/challenge-30-jours/page.tsx`, `src/components/shared/faq-accordion.tsx`, `src/lib/faq-schema.ts`, `src/app/sitemap.ts`, `public/llms.txt`; Ahrefs (US) 2026-07.
**See also:** `_cross-page-findings.md`

## Score: 83 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 20 / 25 |
| Factual & Claim Accuracy | 21 / 25 |
| On-Page SEO | 17 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Ship after two small fixes. An honest, well-scoped lead-nurture page: the copy explicitly sets expectations (email-guided, no human coaching, half the audience won't buy), which is a real anti-slop trust asset. Two things to resolve before publish: verify the "Anthropic Partner" badge wording, and land the GDPR consent line as an actual form field. FAQ block is FAQPage-eligible and correctly wired.

## Findings

### 🟠 High
1. **"By AI Makers, Anthropic Partner" badge — verify partner status wording.** §4.1 badge 2, flagged `[to validate]` §9. "Anthropic Partner" is a checkable partnership claim; if the exact program status/wording isn't confirmed, it's an E-E-A-T/accuracy risk (a partnership stated inaccurately). **Fix:** confirm the precise, current Anthropic partner designation and use its exact wording, or soften to a defensible phrasing (e.g. "Claude specialists") before EN publish. Cross-check consistency with how the badge appears on the FR page and other Claude-adjacent pages.

### 🟡 Medium
2. **GDPR consent line is proposed as an "add", not a confirmed field.** §4.2 and §4.5 add a consent/unsubscribe line to `ChallengeForm`. Data-capture point → this must actually land in the form component (purpose limitation + one-click unsubscribe). Verify the field exists or scope it as a dev task; copy with no landing field won't ship as written.
3. **`inLanguage` locale on FAQPage schema (EN build).** FAQ slot is confirmed (`faq-accordion.tsx` + `faqPageSchema` in `faq-schema.ts`). The 4 Q&A pairs are FAQPage-eligible (real objections, direct answers). Confirm the EN build sets the correct language on the emitted schema, consistent with the glossary/`inLanguage` ticket.

### 🟢 Low
4. **Primary keyword is thin by design — accept, don't stuff.** "30 day ai challenge" 200/no-KD and "ai challenge" 100/KD14 (parent "presidential ai challenge") verified against Ahrefs. Off-target parents; correctly treated as a conversion page fed by internal/email/social. No action beyond keeping copy un-stuffed (it is).

## What this page gets right
- **Keyword claims verified exact against Ahrefs (US):** 30 day ai challenge 200 (no KD), ai challenge 100/KD14. Draft's "low-volume, off-target parent, conversion page" read is accurate — no false volume claim.
- **Honest expectation-setting is the standout asset:** §4.4 openly states half the audience won't buy, §4.5 rules out coaching-seekers, and the copy never promises human coaching — matching the n8n-operated reality (`page.tsx` header comment). This is exactly the E-E-A-T signal an AI vendor should show.
- **Program spec is internally consistent:** 4 weeks / one email a week / 4 deliverables, 1–2 h/week, one-click unsubscribe — all trace to page copy; "30 days" and "4 weeks / one a week" framing reconcile cleanly.
- **FAQ is FAQPage-eligible and correctly wired** (`faq-accordion.tsx` + `faqPageSchema`); 4 real objections with answer-first responses.
- **Internal links resolve:** `/formation-ia-entreprise/maitriser-claude` and `/ai-transformation` both exist as routes and are in the sitemap.
- **Route in sitemap** (`sitemap.ts:35`); title 50 chars, meta 153 chars — both within budget (measured). Strong self-contained GEO answer-first block.

## Priority fixes (ranked)
1. **Confirm the exact "Anthropic Partner" wording** (🟠, low effort) — verify or soften.
2. **Land the GDPR consent line as a real field in `ChallengeForm`** (🟡, low).
3. **Set correct `inLanguage` on the EN FAQPage schema** (🟡, dev, trivial).

## Open questions
- What is AI Makers' exact, current Anthropic partnership designation, and is "Anthropic Partner" the approved wording?

## Cross-page candidates
- **"Anthropic Partner" badge consistency** — appears here and likely on other Claude-adjacent pages (formation `maitriser-claude`, blog Claude comparatives). Verify once, apply one approved wording site-wide via `_cross-page-findings.md`.
- **GDPR consent microcopy on data-capture forms** — shared with `playbook-ia` and `outils/*`; one shared spec, not per-page.
- **`inLanguage` locale on JSON-LD for the EN build** — systemic dev ticket shared with the glossary and every EN page.

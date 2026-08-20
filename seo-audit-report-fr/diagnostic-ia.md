# Diagnostic IA — /diagnostic-ia

**Source audited:** `[FR] website-content/diagnostic-ia/diagnostic-ia.md`
**Compared against:** `src/app/diagnostic-ia/page.tsx` (live plain-Metadata title/OG), `src/lib/diagnostic-config.ts` (question count, scoring thresholds, captureContent, privacyNote), `src/app/layout.tsx` (root `title.template`), `src/app/sitemap.ts`, `public/llms.txt`. Ahrefs (France, French) for stated volumes.
**See also:** `_cross-page-findings.md`

## Score: 83 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 21 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 9 / 15 |

## Verdict
Fix the title, then ship. As a wizard/lead-magnet page the audit scope is correctly limited to meta + intro + GEO, and the substance is clean: the /20 self-test vs /24 AI Scan distinction is real and verified, question count is accurate, and the tool's promise matches its config. The one genuine problem is the title — it is over budget and the draft's reasoning about the brand suffix is likely wrong, risking a doubled "| AI Makers".

## Findings

### 🟠 High
1. **Title over budget + probable double brand suffix.** Live `title` (`page.tsx:5`) is a plain string `"Diagnostic IA Gratuit : testez votre maturité IA en 2 minutes | AI Makers"` = **73 chars raw** (already >60). The draft (§31) asserts the root template does NOT append the suffix here "because plain Next Metadata", and keeps a hardcoded `| AI Makers`. That reasoning is doubtful: the root layout defines `title.template: "%s | AI Makers"` (`layout.tsx:15`), and in Next.js App Router a template DOES apply to a child page's plain-string title — which would render **"…2 minutes | AI Makers | AI Makers"** (~85 chars, doubled suffix). This must be verified against the actual rendered `<title>`. Correct fix regardless: use `title: { absolute: "Diagnostic IA gratuit : votre maturité en 2 minutes" }` (no hardcoded suffix, template suppressed) — or drop the hardcoded suffix and let the template add it once. Note the draft's proposed string is **63 chars raw** (verified), still 3 over 60 before any suffix.

### 🟡 Medium
2. **GDPR: privacy note is text-only, no policy link.** `captureContent.privacyNote` = "Vos données restent confidentielles. Pas de spam. Désabonnement en 1 clic." is preserved (good) but there is no link to `/confidentialite` at the email gate. Ruleset §4.5 — add a privacy-policy link at the lead-capture point. Same pattern as /contact.

### 🟢 Low
3. **Meta description 148 chars** (verified) — within budget, unchanged. Good.
4. **Keyword targets reasonable and non-cannibalizing.** Draft targets "maturité ia" + "diagnostic ia" and explicitly points "audit ia" intent to /audit-ia-entreprise (the paid AI Scan owner) — correct anti-cannibalization call (ruleset §5.5, §8.2). Volumes stated (maturité ia 150, diagnostic ia 200, audit ia 400) are plausible; light keyword pressure is the right posture for a tool page.

## What this page gets right
- **/20 vs /24 distinction is real and verified.** `diagnostic-config.ts:45` documents "10 questions de scoring (0/1/2) + 2 questions de qualification"; `scoreThresholds` top `max: 20` (`:422`) confirms the /20 scale. The /24 grid belongs to the human AI Scan — the draft reconciles them as two instruments, not a bug. Correct.
- **Question count accurate:** 12 total (10 scored + 2 qualification) matches config exactly.
- **Tool promise matches the tool** (ruleset §9): meta/intro promise 12 questions, score /20, sector recommendations, 90-day plan, free — all backed by `diagnostic-config.ts` (`captureContent`, thresholds). No fabricated benchmark output.
- **GEO answer-first paragraph** cleanly explains the self-test and explicitly names the /24 AI Scan as the human counterpart — good disambiguation for AI engines.
- **Route in sitemap** (`sitemap.ts:29`); internal escalation links to /contact and /audit-ia-entreprise exist.

## Priority fix list
1. 🟠 Fix the title: verify the rendered `<title>`; switch to `title.absolute` (≤60, no hardcoded suffix) — e.g. "Diagnostic IA gratuit : votre maturité en 2 min".
2. 🟡 Add a `/confidentialite` link at the email capture gate.
3. 🟢 Keep the maturité ia / diagnostic ia targeting; leave "audit ia" to /audit-ia-entreprise.

## Open questions
- What does the live page actually render for `<title>` — single or doubled "| AI Makers"? This determines the exact title fix and confirms whether other plain-Metadata pages share the bug.

---
### Cross-page candidates
- **Plain-`metadata` pages with hardcoded "| AI Makers"** may all double-suffix (diagnostic-ia is one; audit any page not using `constructMetadata`). Worth a site-wide check in `_cross-page-findings.md` (ruleset §6.1).
- **Privacy-link-on-data-capture** shared with /contact and the free tools — one rule for all lead-gen surfaces.
- **"audit ia" cannibalization**: /audit-ia-entreprise is the canonical owner; /diagnostic-ia correctly defers — confirm no other page competes for it.

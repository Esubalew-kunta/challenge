# Audit GEO gratuit — /outils/audit-geo-gratuit (EN: /ai-visibility-checker)

**Source audited:** `[EN] website-content/outils--audit-geo-gratuit/outils--audit-geo-gratuit.md`
**Compared against:** `src/app/outils/audit-geo-gratuit/page.tsx`, `src/components/shared/geo-audit-form.tsx`, `src/lib/schemas/lead.ts`, `src/lib/faq-schema.ts`, `src/app/sitemap.ts`; Ahrefs (US/GB) 2026-07.
**See also:** `_cross-page-findings.md`

## Score: 85 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 21 / 25 |
| Factual & Claim Accuracy | 23 / 25 |
| On-Page SEO | 18 / 20 |
| Content Quality & Depth | 12 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Fix-first (one compliance item). The promise matches the code and the keyword judgment is excellent — but the data-capture form needs a consent line before it ships. The standout is honesty engineering: the draft knows "checker" implies an instant scanner and repeatedly keeps the copy accurate to the real deliverable (human-prepared, 48h), which the code confirms verbatim.

**Tool matches its code: YES.** Form fields (email + company), `/api/lead` source `"geo-audit"`, 48h delivery, and the "prepared by a human, not a robot" microcopy all verified in `geo-audit-form.tsx`.

## Findings

### 🟠 High
1. **Data-capture form has no visible consent line / privacy-policy link.** `geo-audit-form.tsx` captures a work email + company name and POSTs to `/api/lead` (source `"geo-audit"`); the only microcopy is "Gratuit. Sous 48h. Préparé par un humain, pas par un robot." (line 181) — no purpose/consent statement, no link to `/confidentialite`. GDPR requires informed capture. The draft flags this `[to validate placement]` in §7 and proposes the line ("We only use this to send your audit — see our privacy policy"). **Fix:** add the consent line + privacy link to the form component before EN publish; this is also a live FR compliance gap. Money/compliance-adjacent → 🟠 even though the rest is clean.

### 🟡 Medium
2. **"Checker" keyword vs. human-prepared reality — well-handled, verify it holds.** Primary is "ai visibility checker" (1,000/KD14), which connotes an instant tool, but the deliverable is human-prepared within 48h. The draft guards this in the H1, hero, "how it works", and GEO block. Keep that discipline in the final rendered copy — do not let a shorter meta or CTA imply a live scan. (Currently accurate.)

### 🟢 Low
3. **EN slug `/ai-visibility-checker` vs live route `/outils/audit-geo-gratuit`** — confirm canonical/slug at build.

## What this page gets right
- **Excellent keyword judgment (playbook lesson applied):** rejects "generative engine optimization audit" (~20/mo, effectively zero) for "ai visibility checker" (1,000/KD14, verified) with "ai visibility audit" (250) and "geo audit" (250) as low-KD support. Slug and H1 reframed to the winnable term while keeping "GEO" as the descriptive method. This is §5 done right.
- **Promise matches code exactly:** the "human, 48h" claim is not marketing — it's the literal form success message and microcopy in `geo-audit-form.tsx`. No implied automation, no fabricated output.
- **FAQ is FAQPage-eligible** (`faq-accordion.tsx` + `faqPageSchema`, verified) — 3 real objections, answer-first.
- **Concrete, non-hollow deliverables:** quoted engine answers, competitor gap, three ranked moves — each card names a specific output.
- **Route in sitemap** (`sitemap.ts:32`); title 58 chars, meta 157 — within budget (measured). Strong answer-first GEO block that explicitly distinguishes itself from an "instant automated scanner".

## Priority fixes (ranked)
1. **Add the consent line + privacy-policy link to `geo-audit-form.tsx`** (🟠, low effort) — blocks a compliant ship.
2. **Lock the "human/48h" framing in final rendered meta + CTA** (🟡, trivial) so "checker" never over-promises.
3. **Confirm slug/canonical** (🟢, dev).

## Open questions
- Confirmed placement/wording of the GDPR consent line — near submit, linking `/confidentialite`?

## Cross-page candidates
- **GDPR consent microcopy on data-capture forms** — shared with `scanner-opportunites-ia`, `playbook-ia`, `challenge-30-jours`; one shared component.
- **EN-slug vs live-route canonical decision** — systemic.

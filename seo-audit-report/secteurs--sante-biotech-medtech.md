# Secteur — Santé, biotech & medtech · route `/secteurs/sante-biotech-medtech`

**Source audited:** `[EN] website-content/secteurs--sante-biotech-medtech/secteurs--sante-biotech-medtech.md`
**Compared against:** `src/app/secteurs/[slug]/page.tsx`, `src/lib/secteurs.ts` (entry `sante-biotech-medtech`), `src/lib/metadata.ts`, `src/app/layout.tsx`, `src/lib/faq-schema.ts`, `src/app/sitemap.ts`, `src/lib/site-config.ts`, `public/llms.txt`. Ahrefs keywords-explorer-overview (US), 2026-07-15.
**See also:** shared cross-sector findings in the final report. **Regulated sector — dedicated health-data accuracy pass applied.**

## Score: 88 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 23 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 12 / 15 |

## Verdict
Ship after the shared template fixes. The regulated-sector discipline is handled correctly: AI is framed as assistive on documentation/watch/regulatory work, diagnosis and treatment are explicitly ruled out, GDPR is stated accurately and certified health-data-hosting specifics carry a visible `[to validate]`. No unverifiable clinical or outcome claims. Blockers are the shared title/slug/i18n mechanics.

## Findings

### 🟠 High
1. **Double brand suffix in title.** Proposed `AI for Biotech & Life Sciences | AI Makers` renders as `… | AI Makers | AI Makers`. **Fix:** `metaTitle = AI for Biotech & Life Sciences` (30) → renders 42 chars.
2. **Proposed slug `/industries/ai-for-life-sciences` has no route**; §8 GEO block cites `/secteurs/sante-biotech-medtech`. Shared slug issue. **Fix:** align or ticket.

### 🟡 Medium
3. **EN content in FR template chrome** — shared i18n gap.
4. **Meta description is exactly 160 chars** (draft's own count) — at the hard ceiling with zero buffer; any edit or SERP rewrite pushes it over. **Fix:** trim ~5–10 chars for margin.
5. **Head-term "ai in healthcare" correctly kept off-primary.** Verified separately as broad/informational; the on-intent primary "ai in life sciences" = 400/mo US, KD40 (Ahrefs 2026-07, matches draft). Note: intent is informational-only (not commercial) — fine for a MOFU landing but temper transactional expectations.

## What this page gets right
- Assistive-only framing is explicit and repeated ("never for diagnosis or treatment decisions", "expert review in the loop", "sign-off stays human") — no autonomy over-claim on any use-case card.
- GDPR framing stated as general regulatory context (accurate); certified health-data hosting specifics tagged `[to validate]` per rules §7.3.
- FAQ Q1 designated canonical owner of the life-sciences compliance question, explicitly distinct from the banking page's financial-regulation version.
- Testimonials verified: Amgen (line 453) and Gepromed (line 489) both have `testimonial` objects.
- "+50 companies / +200 systems" canonical from `llms.txt`. No invented figures.
- FAQPage + BreadcrumbList JSON-LD implemented in code; route in `sitemap.ts`.

## Priority fixes
1. Strip `| AI Makers` from `metaTitle` (🟠, trivial).
2. Resolve slug §3/§8 mismatch (🟠, coordination).
3. Trim meta description below 160 for buffer (🟡, trivial).
4. Template i18n ticket (🟡, shared engineering).

## Open questions
- Certified health-data hosting (e.g. HDS) is tagged `[to validate]` — client must confirm the actual hosting posture before this copy states or implies it anywhere.

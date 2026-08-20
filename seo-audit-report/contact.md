# Contact — /contact (EN draft, slug kept /contact)

**Source audited:** `[EN] website-content/contact/contact.md`
**Compared against:** `src/app/contact/page.tsx` (uses `constructMetadata`), `src/lib/metadata.ts`, `src/app/layout.tsx`, `src/lib/site-config.ts` (`bookingProof`), `src/components/shared/cal-embed.tsx`, `public/llms.txt`, `src/app/sitemap.ts`
**See also:** cross-page candidates (end of file)

## Score: 89 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 24 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Ship after confirming one badge label. Conversion endpoint with correctly-declared minimal keyword pressure — scored on conversion clarity and trust, per the draft's own note. Meta lengths are within budget and the title correctly models the brand suffix. The only real to-do is validating the "100% would recommend" / partner-badge copy for EN.

## Findings

### 🟡 Medium
1. **Title brand handling — verify implementation.** Draft shows the full rendered title as `Contact — Book Your Free AI Diagnostic | AI Makers` (self-counted 53). Because the page uses `constructMetadata`, the ` | AI Makers` suffix is appended by the template — so the **title field must contain only** `Contact — Book Your Free AI Diagnostic` (38); if the literal string shown (already ending "| AI Makers") is pasted into the field, brand doubles → 62 chars. The draft's intent is correct; the implementation note must be explicit. *Fix:* field = `Contact — Book Your Free AI Diagnostic`.
2. **"100% would recommend" not in canonical source.** Draft §4.3 lists this stat; §9 tags it `[to validate]` (from `site-config bookingProof`, not in `public/llms.txt`). Keep the tag until confirmed — a satisfaction stat is trust-relevant. `9.6/10 satisfaction` is canonical (llms.txt) and fine.

### 🟢 Low
3. **Partner-badge labels for EN — already tracked.** `Anthropic Partner` / `"Osez l'IA" Ambassador` tagged `[to validate for EN]` (keep-French vs translate). Confirm before publish.
4. **Meta description 140 chars, title 50 rendered — both within budget.** No length action.
5. **Only Paris address shown** (matches live layout; Rabat lives on `/ia-maroc`) — a deliberate, disclosed choice, not a defect.

## What this page gets right
- Address (`60 rue François 1er, 75008 Paris`) and email (`othmane@aimakers.fr`) verbatim from canonical sources; founder named on the booking (raises intent).
- Answer-first GEO paragraph is self-contained, states the booking method + what the 30 minutes delivers + both offices — ideal for "how do I contact AI Makers" citation.
- Testimonials correctly left to the shared `site-config` layer to translate once (no cloning/duplication here).
- GDPR-appropriate: booking/email capture, no over-collection on this page.

## Priority fixes
1. Make the title-field-vs-template split explicit for the implementer (§ finding 1).
2. Validate "100% would recommend" against source before publish; keep `[to validate]` meanwhile.
3. Decide EN treatment of the partner-badge labels.

## Open questions
- Is "100% would recommend" a real, current figure? Source it or drop it.
- Should the Rabat office also appear on the EN contact page (Agent 4 layout decision)?

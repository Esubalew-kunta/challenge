# Case study — Gepromed · route `/etudes-de-cas/gepromed` (EN proposed `/case-studies/gepromed`)

**Source audited:** `[EN] website-content/etudes-de-cas--gepromed/etudes-de-cas--gepromed.md`
**Compared against:** `src/lib/case-studies.ts` (entry `gepromed`, `status: published`), `src/app/etudes-de-cas/[slug]/page.tsx`, `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt`.
**See also:** `_cross-page-findings.md`.

## Score: 90 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 25 / 25 |
| Factual & Claim Accuracy | 25 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 15 / 15 |
| Technical SEO & GEO | 9 / 15 |

## Verdict
Ship after the EN routes exist. The strongest draft in the batch: proof triangle (47 needs / 16 skills / 6 people) verbatim from source, Title = H1, meta at 150, three metrics fill the grid, and the ISO 13485 compliance framing ("human validation before any export") is load-bearing and kept exact. Only the unbuilt EN link targets hold it back.

## Findings

### 🟠 High
1. **Internal-link targets not built.** `/ai-automation` (money page) does not exist (live: `/automatisation-ia-workflow` / `/agence-ia`); `/case-studies` is a proposed slug. Gate on TICKET-EN-ROUTES.

### 🟡 Medium
2. **Qualiopi is stated as a client fact, not an AI Makers certification — correct.** The draft references Gepromed's own ISO 9001 / ISO 13485 / Qualiopi environment (the client's certifications), not an AI Makers Qualiopi claim. This is accurate and traceable to `case-studies.ts`; noted here only so it is not mistaken for a training-certification claim about AI Makers.
3. **Answer-first GEO paragraph maps to `tldr`** (no dedicated field).

## What this page gets right
- Every figure (47/16/6, plus "24/100 readability", "2–3 days/week") traced verbatim; no fabrication; no invented testimonial.
- The adoption sequence (masterclass → one individual → whole team → 47 self-identified needs) is a genuine, transferable first-hand narrative.
- Regulated-sector accuracy: "auditable AI, human validation before export" is the right, non-over-promising framing for a MedTech.
- Schema matches code; FAQ (3 Q&A) FAQPage-eligible; feeds the automation money page as the AI-department anchor proof.

## Priority fixes
1. Point internal links at live routes or ship with EN routes (🟠).

## Open questions
- Confirm the EN slug for the automation money page (`/ai-automation` vs `/automatisation-ia-workflow`) and the EN case-study route timeline.

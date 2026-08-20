# Secteur — Médecins & cabinets médicaux · route `/secteurs/medecins-cabinets`

**Source audited:** `[EN] website-content/secteurs--medecins-cabinets/secteurs--medecins-cabinets.md`
**Compared against:** `src/app/secteurs/[slug]/page.tsx`, `src/lib/secteurs.ts` (entry `medecins-cabinets`), `src/lib/metadata.ts`, `src/app/layout.tsx`, `src/lib/faq-schema.ts`, `src/app/sitemap.ts`, `src/lib/site-config.ts`, `public/llms.txt`. Ahrefs keywords-explorer-overview (US), 2026-07-15.
**See also:** shared cross-sector findings in the final report. **Regulated/medical sector — assistive-only pass applied.**

## Score: 86 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 22 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 15 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 12 / 15 |

## Verdict
Ship after the shared template fixes. The medical discipline is exemplary: AI is framed strictly as an admin/documentation aid, diagnosis and treatment are explicitly ruled out, medical confidentiality leads, and the "up to two hours a day" figure carries a visible `[to validate]` because it is an industry estimate, not a canonical figure. Blockers are the shared title/slug/i18n mechanics plus a US-SaaS-dominated primary the page can't realistically win head-on (acknowledged).

## Findings

### 🟠 High
1. **Double brand suffix in title.** Proposed `AI for Doctors & Medical Practices | AI Makers` renders doubled. **Fix:** `metaTitle = AI for Doctors & Medical Practices` (34) → renders 46 chars.
2. **Proposed slug `/industries/ai-for-medical-practices` has no route**; §8 GEO cites `/secteurs/medecins-cabinets`. Shared slug issue.

### 🟡 Medium
3. **EN content in FR template chrome** — shared i18n gap.
4. **Primary "ai medical scribe" is a US-SaaS SERP.** Verified 3,100/mo US, KD65 (Ahrefs 2026-07, matches draft) — dominated by scribe products (Abridge/Nuance-class). The draft correctly says the page targets FR/EU practice buyers and treats ranking as secondary to conversion assist. Not penalised, but note the primary appears in neither H1 ("AI for doctors: less admin, more clinical time") nor title — on-page keyword presence is weak. Softer secondary "ai for doctors" (700) is the more attainable term.
5. **"Up to two hours a day" figure** tagged `[to validate]` in hero, douleurs and Facts table — correct per rules §7.3, but note the same figure appears in the published FR `secteurs.ts` intro *untagged*; the FR live page should carry the same qualification.

## What this page gets right
- Assistive-only framing repeated per card ("reviewed before they go out", "a prompt for you, not a clinical decision", "reviewed by you") — no card implies autonomous medical judgement.
- Medical confidentiality is the lead frame; patient data under GDPR stated accurately, certified health-data hosting tagged `[to validate]`.
- Testimonial verified: Addictest (line 570) has a `testimonial` object and renders.
- FAQ Q1 (medical confidentiality) designated canonical owner, distinct from the life-sciences compliance answer; Q3 frames "non-technical" for clinicians (life-sciences page owns the research-team version).
- Two-hours figure conservatively tagged; no invented clinical outcomes.
- Route in `sitemap.ts`; FAQPage + BreadcrumbList JSON-LD implemented.

## Priority fixes
1. Strip `| AI Makers` from `metaTitle` (🟠, trivial).
2. Resolve slug §3/§8 mismatch (🟠, coordination).
3. Consider surfacing "ai for doctors" / a documentation-assistant phrasing in H1 or title for on-page keyword presence (🟡).
4. Template i18n ticket (🟡, shared engineering).

## Open questions
- The "up to two hours a day" estimate needs a source or should stay tagged everywhere it appears, including the live FR page.
- Certified health-data hosting posture must be confirmed before any copy implies it.

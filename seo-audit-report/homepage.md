# Homepage — EN Content Master · route `/`

**Source audited:** `[EN] website-content/homepage/homepage.md`
**Compared against:** `src/app/page.tsx`, `src/app/layout.tsx`, `src/lib/metadata.ts`, `src/app/sitemap.ts`, `public/llms.txt`, `src/lib/site-config.ts`
**Data source:** Ahrefs keywords-explorer-overview (US), 2026-07-15
**See also:** `_cross-page-findings.md`

## Score: 88 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust Signals | 23 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Ship after fixing two things. This is a genuinely strong draft: figures trace to the canonical set or carry `[to validate]` tags, the answer-first GEO block is excellent, and cannibalization is managed by explicit ownership. Two blockers before publish: (1) proposed titles double the brand suffix under the live metadata template, and (2) every internal link points to an EN slug scheme (`/ai-consulting`, `/ai-automation`, `/ai-training-for-teams`, `/ai-readiness-assessment`) that does not exist as a route and is not a decided naming convention.

## Findings

### 🟠 High

**1. Proposed title doubles the brand suffix → renders over 60 chars.**
Evidence: The draft proposes `AI Transformation Studio for Companies | AI Makers` and annotates it *(49)*. Measured length is 50 chars as written. But `src/lib/metadata.ts` `constructMetadata()` returns `title` as a **plain string**, and `src/app/layout.tsx` sets `title.template: "%s | AI Makers"`. Next.js applies the parent template to any child string title, so the rendered `<title>` becomes `AI Transformation Studio for Companies | AI Makers | AI Makers` = **62 chars, double brand**.
Why it matters: Exceeds the 60-char budget (§6.1) and shows a duplicated brand token in the SERP — a credibility/CTR hit. This is systemic: the draft self-appends `| AI Makers` on every title.
Fix: Drop the manual `| AI Makers` from every proposed title and let the template add it (proposed `%s` = `AI Transformation Studio for Companies` = 38 chars → 50 rendered), OR set `title.absolute` in `constructMetadata`. This is a cross-page pattern — see `_cross-page-findings.md`.

**2. Internal links + CTAs target EN routes that do not exist and reverse the live slug scheme.**
Evidence: §6 internal-links and §4 CTAs point to `/ai-readiness-assessment` (hero secondary, FR live = `/diagnostic-ia`), `/ai-training-for-teams` (offers card 3, FR = `/formation-ia-entreprise`), `/ai-consulting` (pillar deep-link, FR = `/agence-ia`), `/ai-automation` (pillar deep-link, FR = `/automatisation-ia-workflow`). None of these appear in `src/app/sitemap.ts` `staticRoutes` or as app routes.
Why it matters: As written these links 404. Beyond that, they establish a new EN slug convention that diverges from every live route — a client naming decision (§5.5), not a content-pass detail.
Fix: One engineering ticket to (a) decide the EN slug scheme, (b) create the routes, (c) add them to `sitemap.ts`. Until then, no draft may assume these targets resolve. Cross-page dependency.

### 🟡 Medium

**3. `WebSite` JSON-LD hard-codes `inLanguage: "fr-FR"`.**
Evidence: `src/app/page.tsx` line 79, `webSiteSchema.inLanguage: "fr-FR"`; the Organization/WebSite `url` is the FR root. An EN homepage rendered from this code inherits FR language signal.
Why it matters: For an EN market page, the language signal contradicts the content. Minor but a GEO/hreflang cleanup.
Fix: Parameterize `inLanguage` per locale when the EN site is built. Engineering ticket, folded into the EN-routes ticket.

**4. "AI transformation studio" diverges from the canonical self-description.**
Evidence: Draft repeatedly says "AI transformation studio"; `public/llms.txt` and the Organization schema describe a "cabinet de transformation IA" (consulting firm). "Studio" is a positioning choice, not a translation of "cabinet".
Why it matters: Not a figure divergence (so not 🔴), but the EN llms.txt entry and schema should agree on one EN noun for the entity. Confirm "studio" is the intended EN identity, then apply it consistently in the EN llms.txt entry.
Fix: Client decision on the EN entity noun; then make llms.txt / schema / copy agree.

**5. Meta description has no explicit next step.**
Evidence: Proposed meta = `AI Makers is an AI transformation studio in Paris and Rabat. We audit processes, ship AI systems to production, and train your teams. 200+ systems, 4 guarantees.` (~158 chars, in range). §1.3 rewards a next step in the description; this ends on proof, not an action.
Fix: Optional — trim a clause to fit a soft CTA ("Book a free diagnostic.") if it stays ≤160.

## What this page gets right
- **Figures are disciplined.** 200+ systems / 2,500+ trained / 7h-week / +50 companies all trace verbatim to `public/llms.txt`; 9.6/10, 100% reco, BCG 70%, and the case-study numbers each carry a visible `[to validate]` tag (§7.3, §1.1 all satisfied).
- **Schema is actually implemented, not planned.** `src/app/page.tsx` emits Organization + WebSite + FAQPage JSON-LD in code (verified), matching the draft's claim.
- **Stated keyword volumes are accurate.** Ahrefs US confirms ai transformation 1,600/KD41, ai consulting 8,400/KD46, ai automation 12,000/KD56 — exactly as claimed.
- **Answer-first GEO block is self-contained and citable** — defines the entity, method, figures, and guarantees in one paragraph without needing the rest of the page.
- **Cannibalization is managed by explicit ownership** (comparison table, guarantees, 6-step method, Q1/Q8/Q9 declared owned here; siblings link, not re-answer).
- **First-hand experience is real, not claimed** — the Fleet ("our own kitchen") and open Stack table name the actual live tools; dogfooding answers objection #3 with specifics.
- Route `/` is in `sitemap.ts`; no cannibalization; single H1; logical funnel.

## Priority fix list
1. **(🟠, low effort)** Remove the manual `| AI Makers` from the proposed title (or use `title.absolute`) so it renders once, ≤60 chars.
2. **(🟠, high effort — engineering)** Open one ticket for the EN slug scheme + routes + sitemap entries; block internal links until routes resolve.
3. **(🟡, low)** Parameterize `WebSite.inLanguage` for the EN locale (fold into the EN-routes ticket).
4. **(🟡, trivial)** Confirm "studio" vs "cabinet/firm" as the EN entity noun; align llms.txt entry + schema.
5. **(🟡, trivial)** Add a soft CTA to the meta description if it stays ≤160.

## Open questions
- Is the EN slug scheme (`/ai-consulting`, `/ai-automation`, `/ai-training-for-teams`, `/ai-readiness-assessment`) approved? These reverse the live FR routes and need a client decision before any page links to them.
- Is "AI transformation studio" the deliberate EN positioning, replacing "cabinet/consulting firm"?
- Are 9.6/10 satisfaction and 100%-would-recommend cleared for EN publication, and is the "Osez l'IA" badge intended for a US/GB audience?

## Cross-page candidates
- **Double brand suffix** from `constructMetadata` string title + root `template: "%s | AI Makers"` — verify on every draft that self-appends `| AI Makers`.
- **EN slug scheme vs live FR routes** — the EN internal-link graph depends on routes that don't exist; one shared decision + ticket.
- **`WebSite`/Organization schema hard-coded `fr-FR` + FR url** — affects every EN page rendered from this codebase.

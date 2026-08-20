# Offre AI PARTNER → AI Partner — EN Content Master · route `/offre` → proposed `/ai-partner`

**Source audited:** `[EN] website-content/offre/offre.md`
**Compared against:** `src/app/offre/page.tsx`, `src/lib/site-config.ts` (`homepageContent.offer`, `.guarantees`), `src/app/sitemap.ts`, `src/lib/metadata.ts` + root template, `public/llms.txt`
**Data source:** Ahrefs keywords-explorer-overview (US), 2026-07-15
**See also:** `_cross-page-findings.md`

## Score: 82 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust Signals | 23 / 25 |
| Factual & Claim Accuracy | 23 / 25 |
| On-Page SEO | 15 / 20 |
| Content Quality & Depth | 12 / 15 |
| Technical SEO & GEO | 9 / 15 |

## Verdict
Fix-first. The offer copy and guarantees are accurate and well-mapped, but this page carries a **live indexability bug independent of the EN work** — `/offre` is not in the sitemap today — and the EN draft omits one rendered section and would ship an over-length double-suffixed title. Keyword pressure is intentionally (and correctly) light for a BOFU page.

## Findings

### 🟠 High

**1. `/offre` is missing from the sitemap — live indexability gap.**
Evidence: `src/app/sitemap.ts` `staticRoutes` (lines 11–44) lists `/ai-transformation`, `/agence-ia`, etc. but **not** `/offre`. Yet `public/llms.txt` line 14 lists `[Offre AI PARTNER](https://aimakers.fr/offre)` as a main page, and `src/app/offre/page.tsx` exists and is indexable (no noindex).
Why it matters: A BOFU conversion page the site actively promotes is excluded from the sitemap — it relies on internal links alone for discovery. This is a **live** issue, not a draft issue (§3.6).
Fix: Add the route (`/offre`, or the new `/ai-partner`) to `sitemap.ts`. One-line engineering fix; do it regardless of the EN launch.

**2. Draft omits the live "Le modèle — 4 principes" section — it would render in French.**
Evidence: `page.tsx` lines 148–183 render a section from `offer.model` (`offer.badge` / `offer.title` / `offer.subtitle` + 4 numbered principles) between the phases and the guarantees. The draft's §4 covers hero, phases, guarantees, scarcity+CTA — but **not** this section. No EN copy is proposed for `offer.model`.
Why it matters: §6.7 — a rendered section with no EN copy ships in French on the EN page.
Fix: Add EN copy for `offer.badge/title/subtitle` + the 4 `offer.model` principles (confirm whether `offer.model` is owned/translated elsewhere, since it's shared site-config).

**3. Proposed title renders with a double brand suffix, well over 60 chars.**
Evidence: `AI PARTNER: Your AI Department, Audit to Scale | AI Makers` *(59)* → through `constructMetadata` + `template: "%s | AI Makers"` becomes `… | AI Makers | AI Makers` ≈ **70 chars**.
Fix: Drop the manual `| AI Makers` (`%s` = `AI PARTNER: Your AI Department, Audit to Scale` = 46 → 58 rendered). Cross-page pattern.

**4. Proposed slug `/ai-partner` is not a route / not in the sitemap.**
Evidence: New EN route required; compounds finding #1.
Fix: EN slug + routes + sitemap ticket. Cross-page.

### 🟡 Medium

**5. No Offer/Service schema on the offer page.**
Evidence: `page.tsx` emits only `breadcrumbSchema`. A branded-offer/conversion page is a natural fit for `Offer` or `Service` structured data; none is present. (No FAQ, so the absence of FAQPage is correct — the draft's "No FAQ slot" is accurate.)
Why it matters: GEO/rich-result opportunity missed on the strongest conversion page.
Fix: Add `Service`/`Offer` JSON-LD (engineering ticket).

**6. `1,500+ automations` and the `/24` 6-axis grid are live site-config figures not in the canonical llms.txt set.**
Evidence: §4.2 carries "access to 1,500+ automations" and "AI maturity scored on 6 axes (/24)" verbatim from `homepageContent.offer`. Neither appears in `public/llms.txt`. The draft correctly flags "verbatim, not invented".
Why it matters: §7.3 — figures should trace to the canonical set or carry `[to validate]`. These are pre-existing live copy (so live-risk, not fabrication), but they aren't in the canonical set.
Fix: Reconcile into llms.txt or tag `[to validate]` at source. Low priority — draft faithfully carried live copy.

## What this page gets right
- **Keyword strategy is correct for a BOFU page and verified.** Ahrefs US: ai transformation 1,600/KD41, ai implementation 1,600/KD44, fractional ai team 20 (no KD). The draft rightly treats this as conversion-first (light keyword pressure), keeps deep "ai transformation" content on its owner page, and uses "fractional ai team" for GEO framing only — not as a volume play (§5.4).
- **Guarantees match the contract exactly.** All four (Audit refund / 30-day production / Champions impact / clean Exit) mirror `homepageContent.guarantees` and `public/llms.txt`, with conditions intact and no inflation (§1.2, §4.4).
- **Field mapping is honest and mostly correct:** hero/phases/CTA are inline in this page's own `page.tsx` (editable), guarantees come from the shared `GuaranteesSection` (owner = homepage/garanties). No orphaned-file problem here.
- **Answer-first GEO paragraph** fully describes the 3-phase offer + 4 guarantees self-containedly. Phase figures (1–2 systems/month, 2h/week, /24 grid) are internally consistent with the homepage and audit pages.
- Canonical brand figures (50+/200+/2,500+/7h) present; all internal links resolve.

## Priority fix list
1. **(🟠, one-line engineering, do now)** Add `/offre` (or `/ai-partner`) to `sitemap.ts` — live indexability fix.
2. **(🟠, content)** Provide EN copy for the omitted "Le modèle — 4 principes" (`offer.model`) section.
3. **(🟠, engineering)** Create the `/ai-partner` route + sitemap entry (EN slug ticket).
4. **(🟠, low)** Drop the manual `| AI Makers` from the title.
5. **(🟡, engineering)** Add Offer/Service JSON-LD.
6. **(🟡, trivial)** Reconcile or `[to validate]`-tag the 1,500+ automations and /24 grid figures.

## Open questions
- Keep `/offre` and add it to the sitemap, or migrate to `/ai-partner` with a redirect? Either way it must enter the sitemap.
- Is `offer.model` (the 4 principles) translated on another page, or does it need EN copy here?

## Cross-page candidates
- **Double brand suffix** (title template) — recurs, worst case here (~70 chars).
- **EN slug scheme vs live FR routes** — recurs.
- **Missing-from-sitemap routes** — `/offre` is out today; audit the full route list vs `sitemap.ts` when the EN routes land.

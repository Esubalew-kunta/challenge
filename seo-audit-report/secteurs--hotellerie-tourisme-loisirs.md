# Secteur — Hôtellerie, tourisme & loisirs · route `/secteurs/hotellerie-tourisme-loisirs`

**Source audited:** `[EN] website-content/secteurs--hotellerie-tourisme-loisirs/secteurs--hotellerie-tourisme-loisirs.md`
**Compared against:** `src/app/secteurs/[slug]/page.tsx`, `src/lib/secteurs.ts` (entry `hotellerie-tourisme-loisirs`), `src/lib/metadata.ts`, `src/app/layout.tsx`, `src/lib/faq-schema.ts`, `src/app/sitemap.ts`, `src/lib/site-config.ts` (clientLogos), `public/llms.txt`. Ahrefs keywords-explorer-overview (US), 2026-07-15.
**See also:** shared cross-sector findings in the final report.

## Score: 78 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 18 / 25 |
| Factual & Claim Accuracy | 21 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 10 / 15 |

## Verdict
Fix first, then ship. The content is well-differentiated and the unverified figures ($18k/year, 80% autonomous) are conservatively tagged `[to validate]`. But the draft instructs rendering a "published verbatim" for Groupe Partouche that does not exist in `clientLogos`, and the FAQ states "its testimonial is on this page" — which will be false: the témoignages section renders empty for this sector. That is a claim about a named client that the code cannot back.

## Findings

### 🔴 Critical
1. **Groupe Partouche has no testimonial — the "testimonial is on this page" claim is false.** `site-config.ts` line 487 is `{ name: "Groupe Partouche", img: "…partouche-nobg.png" }` — a **logo-only** entry with no `testimonial` object. The template renders témoignages only for clients matching `secteur.temoinClients` **AND** `"testimonial" in c` (`page.tsx` lines 45-49), so this section renders **empty** for hôtellerie. Yet:
   - Draft §4.4 says "REUSE — render the published verbatim (Groupe Partouche)". There is no verbatim to reuse.
   - Draft FAQ Q2: "Groupe Partouche in leisure (its testimonial is on this page)". This statement is false as coded.
   This is a live-risk too — the FR page has the same empty section — but the EN draft amplifies it by asserting the testimonial exists. **Fix:** either (a) add a real, client-approved Partouche testimonial to `clientLogos` (do not invent a quote — rules §7.1/§7.2), or (b) remove "its testimonial is on this page" and drop Partouche from `temoinClients`, keeping it as a logo/name reference only.

### 🟠 High
2. **Double brand suffix in title.** Proposed `AI for Hospitality & Tourism | AI Makers` renders doubled. **Fix:** `metaTitle = AI for Hospitality & Tourism` (28) → renders 40 chars.
3. **Proposed slug `/industries/ai-for-hospitality` has no route**; §8 GEO cites `/secteurs/hotellerie-tourisme-loisirs`. Shared slug issue.

### 🟡 Medium
4. **EN content in FR template chrome** — shared i18n gap.
5. **Non-canonical figures $18,000/year and 80% autonomous** are correctly tagged `[to validate]` (source `secteurs.ts`, not `llms.txt`). They appear three times (hero, use-case card, FAQ) — keep the tag on every instance through sign-off, and the client must confirm both numbers before any untagged publication.

## What this page gets right
- Primary "ai in hospitality" verified 250/mo US, KD33 (Ahrefs 2026-07, matches draft) — lowest difficulty of the eight, a realistic long-tail win; distinct primary.
- $18k/year and 80% figures conservatively tagged `[to validate]` per rules §7.3 — the draft is honest that they are not canonical.
- Pains (multilingual volume, review load, content churn, seasonal-staff turnover) are unique to hospitality; no sibling overlap.
- FAQ Q1 (can a chatbot handle customers) and Q3 (seasonal staffing) designated canonical owners.
- Route in `sitemap.ts`; FAQPage + BreadcrumbList JSON-LD implemented.

## Priority fixes
1. Resolve the Groupe Partouche testimonial: add an approved verbatim to `clientLogos`, or remove the "testimonial on this page" claim and demote Partouche to a logo/name reference (🔴, blocks publication of the FAQ claim).
2. Strip `| AI Makers` from `metaTitle` (🟠, trivial).
3. Resolve slug §3/§8 mismatch (🟠, coordination).
4. Client sign-off on $18k/year and 80% figures; keep `[to validate]` until then (🟡).
5. Template i18n ticket (🟡, shared engineering).

## Open questions
- Does an approved Groupe Partouche testimonial exist that simply hasn't been added to `clientLogos`? If not, the copy must stop claiming one.
- Are the $18,000/year and 80%-autonomous figures from the tourist-office WhatsApp deployment client-approved for publication?

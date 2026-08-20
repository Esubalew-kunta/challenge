# Forward Deployed Engineer — `/forward-deployed-engineer`

**Source audited:** `[FR] website-content/forward-deployed-engineer/forward-deployed-engineer.md`
**Compared against:** `src/app/forward-deployed-engineer/page.tsx` (Breadcrumb/Service/DefinedTerm/Person×2/FAQPage schema), `src/lib/offer-pages/fde.ts`, `src/lib/site-config.ts`, `src/app/sitemap.ts`, `public/llms.txt`; Ahrefs (France, FR, 2026-07).
**See also:** `_cross-page-findings.md` (external-stat/badge sourcing; founder-bio verification).

## Score: 87 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust Signals | 20 / 25 |
| Factual & Claim Accuracy | 20 / 25 |
| On-Page SEO | 18 / 20 |
| Content Quality & Depth | 15 / 15 |
| Technical SEO & GEO | 14 / 15 |

## Verdict
Fix-first, then ship. This is the site's richest, most GEO-ready page — best-in-class schema, a citable definition, named founders with Person schema. But its credibility rests on roughly eight external statistics and nine partner/certification badges that are all live and none externally sourced/linked. The draft honestly tags every one `[à valider]`; those tags must resolve (with sources or sign-off) before this is a clean publish.

## Findings

### 🟠 ~8 external statistics are live and name-dropped, not linked
The definition and origin sections assert, as running copy: "95 % des pilotes IA échouent (étude MIT, 2025)", "+729 % d'offres FDE / ×8 (Indeed)", "385 K$ à 1 M$" FDE comp, "coentreprise OpenAI 4 Md$ (2026)". Each is tagged `[à valider — source externe]` in the master (§9) but ships live from `fde.ts` with no citation link.
- **Why it matters:** §1.1 requires authoritative claims to be "linked, not name-dropped." These are the page's persuasion backbone and its only real fabrication exposure. Live-risk: they're on the site now.
- **Fix:** add a source link for each (MIT report, Indeed data, comp source, OpenAI JV announcement), or obtain sign-off and keep the `[à valider]` visible until then. Do not weaken or launder — verify.

### 🟠 Nine partner/certification badges live, each unverified
§4.13: partners (Clay "Enterprise partner", Google, Make, n8n "Certified expert", AWS, Microsoft Azure) and certs (Anthropic "Claude certified architect", Microsoft "AI industry leader", "Certified fundamentals"). All tagged `[à valider chaque badge]` in §9, all rendered live via `cert-badges.tsx`.
- **Why it matters:** partnership/certification badges are regulated E-E-A-T credential claims (§1.1, §4.2); an unverified badge is treated as fabricated until sourced. "Partenaire Anthropic / Claude certified architect" is the same unconfirmed Anthropic-relationship claim flagged on the homepage and ai-transformation.
- **Fix:** confirm each badge's authorization (partner-program membership, named certified engineer) or remove it. Single sign-off pass across the whole badge set.

### 🟡 Founder bios state specifics beyond the canonical set, presented untagged
§4.6 bios: Walid Boulanouar "250+ produits… systèmes pour des entités gouvernementales au Maroc et en Arabie Saoudite"; Adel Dahani "AI Engineer chez IBM… projets d'IA générative pour L'Oréal, GSK et Nestlé… Certifié Microsoft Azure Data Scientist." `public/llms.txt` confirms only the roles (CTO / COO ex-IBM, co-founders of AY Automate). The named-enterprise-client and "250+ produits" claims exceed the canonical record and are stated as fact.
- **Why it matters:** §7.2 — credentials attached to real named people must trace to source. Could not verify "250+ produits", "gouvernement Arabie Saoudite", or the specific IBM client roster from the code/llms.txt; the draft asserts LinkedIn verification but provides no link. State uncertainty (§3.7).
- **Fix:** confirm these specifics against each person's LinkedIn/public record and, where they can't be substantiated, trim to what's verifiable. The roles themselves (Person schema + LinkedIn `sameAs`) are solid.

## What this page gets right
- **Best schema coverage on the site, all genuinely implemented:** `BreadcrumbList` + `Service` + `DefinedTerm` (the FDE definition) + `Person` ×2 (Walid, Adel, with `alumniOf` and org `worksFor`) + `FAQPage` — verified in `page.tsx`. The DefinedTerm + Person combination is a genuinely strong GEO/E-E-A-T asset.
- **Correct, honest keyword strategy:** `forward deployed engineer` = 10/mo FR (16 000 global) — the draft correctly refuses to treat a near-zero FR term as a volume play, instead owning the definition (citable answer-first) and blending `ingénieur ia` and `agence ia` (2 400). Slug kept as exact match.
- **Every non-canonical figure is tagged** `[à valider]` in the master — the fabrication discipline itself is exemplary; the issue is that the live page doesn't yet show sources.
- **Canonical facts accurate:** AY Automate lineage, +20 engineers, Walid/Adel roles, +200 systèmes, 7h/sem all trace to `llms.txt`.
- **Deepest, most concrete content in the batch** (week-by-week timeline, role profiles, real stack with hours-on-tool framing, FDE-vs-alternatives table unique to this page) — strong first-hand operator signal.
- **Title/meta fixed** (bare 46 → 58 rendered; meta 158). Route in `sitemap.ts`; internal links (`/ai-transformation`, `/equipe`, `/carrieres`, `/capacite`, `/contact`) all valid. Guarantees mono-sourced, not forked.
- **Answer-first GEO paragraph is the best on the site** — a self-contained, citable definition backed by DefinedTerm schema.

## Priority fix list
1. **(🟠, medium effort — needs sources/client)** Add source links for the MIT/Indeed/comp/OpenAI-JV stats, or keep `[à valider]` visible until signed off.
2. **(🟠, low effort — needs client)** Verify or remove each partner/certification badge; resolve "Partenaire Anthropic" once site-wide.
3. **(🟡, low effort — needs client)** Confirm the specific founder-bio claims against LinkedIn; trim what can't be substantiated.

## Open questions
- Are the MIT 95%, Indeed +729%, $385K–$1M, and OpenAI $4B JV figures confirmed with citable sources?
- Which of the nine badges are actually held (partner-program membership, named certified engineers)?
- Can "250+ produits", the Saudi/Morocco government work, and the IBM client roster (L'Oréal/GSK/Nestlé) be substantiated publicly?

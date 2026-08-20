# Forward Deployed Engineer — EN Content Master · route `/forward-deployed-engineer` (unchanged)

**Source audited:** `[EN] website-content/forward-deployed-engineer/forward-deployed-engineer.md`
**Compared against:** `src/app/forward-deployed-engineer/page.tsx`, `src/lib/offer-pages/fde.ts`, `src/lib/site-config.ts`, `src/lib/metadata.ts` + root template, `src/app/sitemap.ts`, `public/llms.txt`
**Data source:** Ahrefs keywords-explorer-overview (US), 2026-07-15
**See also:** `_cross-page-findings.md`

## Score: 86 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust Signals | 22 / 25 |
| Factual & Claim Accuracy | 22 / 25 |
| On-Page SEO | 17 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Fix-first. The best-resourced page on the site (richest data file, six schema types including Person/DefinedTerm) and a genuinely excellent, verified keyword pillar. Two things block a clean EN launch: a large hard-coded French "Direction technique" section the draft never translates, and a wall of unverified figures + partner/certification badges that must be confirmed before publish (they're trust-and-law-sensitive).

## Findings

### 🟠 High

**1. A whole hard-coded French section (founder bios) is not covered by the draft's field map.**
Evidence: The draft's §4.6 maps the team to `fdeContent.team`, but `page.tsx` also renders a separate inline section "5bis Direction technique / Encadré par les fondateurs d'AY Automate" (lines 424–524) with full FR bios of Walid Boulanouar (483–488) and Adel Dahani (514–519), plus inline FR elsewhere: the FdeEmbed intro "Il ne débarque pas de l'extérieur…" (195–202), "En production chez nous" (358), the capacity link "Voir notre capacité actuelle" (883), the RelatedContent descriptions (916–926), and the final CTA (933–937). None have EN copy in the draft.
Why it matters: §6.7 — these render in French on the EN page, including a prominent E-E-A-T section.
Fix: Add EN for the "Direction technique" section and the other inline strings (engineering + content).

**2. Unverified partner/certification badges — confirm before EN publish (trust/legal exposure).**
Evidence: §4.13 lists partner badges (Clay "Enterprise partner", Google, Make, n8n, AWS, Microsoft/Azure) and certs (Anthropic "Claude certified architect", Microsoft). The draft tags each `[to validate]` and does not verify them. §4.2/§1.1 hold partnership and certification claims to a strict, verifiable standard.
Why it matters: A stated partnership or certification that isn't real is a trust hit and a comparative-advertising exposure — the class §2 keeps at 🔴 when wrong. These are pre-existing live claims (live-risk), so the action is confirmation, not a fabrication finding.
Fix: Client confirms each badge (partner tier, certification names) before EN publish; drop any that can't be evidenced.

**3. Proposed title doubles the brand suffix.**
Evidence: `Forward Deployed Engineer (FDE) Explained | AI Makers` *(53)* → through `constructMetadata` + template renders `… | AI Makers | AI Makers` ≈ **65 chars**.
Fix: Drop the manual `| AI Makers`. Cross-page pattern.

### 🟡 Medium

**4. Dense market/comp figures carried from live copy — keep the `[to validate]` tags to sign-off.**
Evidence: §9 tags 95% pilot-failure (MIT 2025), +729%/8× FDE postings (Indeed), $385K–$1M lab comp, 6–12 months / €70k hire, 1,500+ automations, OpenAI $4B JV 2026. These are live `fde.ts` copy, not in the canonical llms.txt set.
Why it matters: §7.3 — none are canonical; the numeric market claims (especially comp and the $4B JV) are the checkable ones. The draft tags them correctly.
Fix: Carry the `[to validate]` tags all the way to sign-off; confirm the comp band and the $4B JV against a citable source, or soften. (The Palantir origin and OpenAI/Anthropic/Google FDE adoption are accurate and current — those are fine.)

## What this page gets right
- **Rare, rankable keyword pillar — verified.** Ahrefs US: forward deployed engineer **5,100/KD8**, what is a forward deployed engineer 700/KD13, forward deployed engineering 350/KD6, ai engineer 16,000/KD56. The draft correctly overturns the brief's "low-volume niche" assumption: this is real volume at exceptionally low difficulty, and the draft keeps the exact-match slug to own it (§5.1/§5.2).
- **Schema is the strongest in the batch.** `page.tsx` emits BreadcrumbList + Service + **DefinedTerm** (FDE definition) + **two Person schemas** (Walid Boulanouar, Adel Dahani, with real LinkedIn `sameAs`, `alumniOf`, `jobTitle`) + FAQPage. The draft's FAQPage claim holds, and the Person/DefinedTerm markup is exactly the E-E-A-T/GEO signal this page needs.
- **Verifiable named credentials.** The founders' roles and lineage (Walid CTO/AY co-founder; Adel COO/ex-IBM, ENSIAS) match `public/llms.txt` and carry LinkedIn links — real people, real records, nothing invented (§1.1, §4.2). The AY Automate "20+ engineers deployed" partnership is canonical.
- **Field map matches the code** (`fde.ts` imported) for every section it covers; slug stays `/forward-deployed-engineer` and is in the sitemap; all internal links (`/ai-transformation`, `/equipe`, `/carrieres`, `/capacite`, `/contact`) resolve.
- **Answer-first GEO paragraph** is a clean, citable FDE definition (Palantir origin, now OpenAI/Anthropic/Google) — the ideal answer for "what is a forward deployed engineer". Deepest, most concrete page on the site; first-hand dogfooding (internal systems) is real, not claimed.

## Priority fix list
1. **(🟠, engineering + content)** Translate the hard-coded FR "Direction technique" founder-bios section and the other inline FR strings.
2. **(🟠, client sign-off)** Confirm every partner/certification badge before EN publish; drop the unevidenced ones.
3. **(🟠, low)** Drop the manual `| AI Makers` from the title.
4. **(🟡, sign-off)** Validate the comp band ($385K–$1M) and the OpenAI $4B JV figure, or soften; keep all `[to validate]` tags to publish.

## Open questions
- Are all six partner/cert badges accurate and current (partner tiers, exact certification names)?
- Can the $385K–$1M FDE comp band and the "OpenAI $4B deployment JV (2026)" be sourced, or should they be softened for the EN market?

## Cross-page candidates
- **Double brand suffix** (title template) — recurs.
- **Hard-coded FR strings in page templates** (here: an entire founder-bios section) — the recurring shipping blocker.
- **Unverified partner/certification badges** — also appear on the homepage ("Anthropic Partner", "Osez l'IA"); confirm the badge set site-wide once.

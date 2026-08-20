# Sécurité & données — /securite

**Source audited:** `[FR] website-content/securite/securite.md`
**Compared against:** `src/app/securite/page.tsx` (live metadata, FAQPage + BreadcrumbList JSON-LD, sections), `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt`, `src/app/garanties/page.tsx` (Garantie Indépendance). Ahrefs (France, French) for stated volumes.
**See also:** `_cross-page-findings.md`

## Score: 89 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 23 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 18 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 10 / 15 |

## Verdict
Ship after two length tweaks. A well-built procurement/trust page for DSI/DPO buyers. Every stated keyword volume matches Ahrefs France, the sensitive "no training on your data" claim is correctly qualified ("conformément aux politiques des fournisseurs" — not overstated), and it defers all AI Act detail to /gouvernance-ia so it carries none of that page's omnibus-date risk. Only nits: a live title over budget (draft fixes it) and a proposed meta 1 char over 160.

## Findings

### 🟡 Medium
1. **Live title is 70 chars — draft fixes to 58.** Live `Sécurité et données : où vivent vos données avec AI Makers` renders at **70** incl. suffix (over 60). Proposed `Sécurité des données IA : où vivent les vôtres` measures **58** (verified) and folds in the head term "sécurité des données ia" (150, Ahrefs FR). Ship it — but 58 is tight; don't grow it.
2. **Proposed meta description is 161 chars — 1 over budget.** The draft claims ~158; measured **161** (verified). Trim ~2 chars (e.g. "aucun entraînement des modèles" → "sans entraînement des modèles") to land ≤160.

### 🟢 Low
3. **"sécurité ia" (KD 7) is correctly used descriptively, not as head.** §2 note picks "sécurité des données ia" (150) as the realistic target over the easy-but-tiny "sécurité ia" (20). Sound; no action.

## What this page gets right
- **Keyword volumes verified exact against Ahrefs France:** sécurité des données ia **150**, protection des données ia **100**, sécurité ia **20 (KD 7)**, sécurité intelligence artificielle **50**. Target selection is correct.
- **Sensitive claim properly qualified:** "les données soumises via API ne servent pas par défaut à entraîner les modèles, conformément aux politiques des fournisseurs" (§4.2, §4.3-2) — accurate for Anthropic/OpenAI/Google *API* (not consumer) tiers, and hedged with "par défaut / selon la politique des fournisseurs" rather than stated as an absolute. This is the right standard.
- **No AI Act date exposure:** the page defers governance/AI Act detail to /gouvernance-ia (§4.4), so it does not carry the omnibus/Dec-2027 risk flagged on that page. Good separation of concerns.
- **Consistency with /garanties:** "propriété intellectuelle totale et réversibilité … C'est une garantie contractuelle" correctly maps to Garantie Indépendance — verified in `garanties/page.tsx`.
- **Schema real:** FAQPage (`page.tsx:131`) + BreadcrumbList (`:33`) implemented; route in `sitemap.ts:27`.
- **Legal disclaimer present**; concrete tool names (n8n, Notion, Microsoft 365, API keys) give real procurement-grade specificity.

## Priority fix list
1. 🟡 Ship the 58-char title to replace the 70-char live one.
2. 🟡 Trim the proposed meta by ~2 chars to reach ≤160.
3. 🟢 Keep "sécurité des données ia" as the head; no keyword change.

## Open questions
- None. Claims are properly qualified and figures verified.

---
### Cross-page candidates
- **"No training on your data / provider API policy" qualifier** is shared with any page touching model providers — /securite is a good canonical owner of the data-residency claim; other pages should link here rather than re-assert it (ruleset §8.2).
- **"validation humaine des sorties critiques … charte IA"** is shared verbatim with /gouvernance-ia — intentional consistency; confirm both stay in sync if edited.

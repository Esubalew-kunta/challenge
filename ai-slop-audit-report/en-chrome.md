# Slop Audit — EN chrome (navigation, mega-menu, footer, UI strings)

> Rules: `content-playbook/rules/anti-ai-slop-audit-rules.md`.

| | |
|---|---|
| Source audited | `src/lib/site-config.en.ts`, `src/lib/ui-strings.ts` (`en` block) |
| Word count | 599 (164 strings) |
| Depth | deep |
| Context exposure | **CONTAMINATED — declared.** This audit was written by the same agent that wrote the copy. The playbook exists precisely because that arrangement lets an agent pass its own homework (`README.md`, "The idea in one paragraph"). Treat every "resolved" below as provisional until a genuinely blind pass runs. Findings marked 🔴 were reproduced against production, so those stand regardless. |

## 1 — Cold read

Read as a visitor would meet it: header, menus, footer. It reads as competent
product navigation — short, concrete, verb-led, no filler. Attention did not
slide; each item names a thing you can buy or read. The problem is not the prose.
The problem is that the prose describes a site that does not exist yet: reading
it as a *reader* rather than as a translator surfaced immediately that clicking
any of it lands nowhere. That is the finding the earlier string-level checks
missed entirely, because they were checking words, not the artifact.

## 2 — SDS (slop density)

| Layer | Points | Notes |
|---|---|---|
| 1 — Lexical | 0 | No Tier A tells. One false positive ("from audit to scale") — see disposition D1 |
| 2 — Phrase & syntax | 10 | Rule 2.5 colon-headlines ×5 |
| 3 — Structure | 0 | Navigation, not prose — layers 3/4 largely N/A |
| 4 — Formatting | 0 | |
| 5 — **Substance** | 5 | Rule 5.2 reversibility ×1 (3), Rule 5.6 temporal vagueness ×1 (2) |
| 6 — Rhythm | 0 | N/A for nav labels |
| 7 — Open/close | 0 | N/A |
| 8 — Tone | 0 | No corporate cheer, no sycophancy |
| 9 — Epistemic integrity | — | see 🔴 F2 below, unvalidated figure |
| 12 — Provenance | 0 | No artifact leakage |
| **Total** | **15** | |

**SDS = 15 ÷ (599/1000) = 25.0**

The score is misleading on its own and should not be read as a pass. Layer 2's
10 points are inherited from the French source, which uses the same construction;
the substantive problems here are not slop-shaped and are recorded below as
findings rather than points.

## 3 — Findings

### 🔴 F1 — Every link in the English navigation 404s
**Severity: critical. Reproduced in production.**

The EN chrome was authored before the EN pages. It points at the ~37 routes
planned in `ROUTE_MAP`; exactly one (`/en/capacity`) exists. Verified live:

```
/en/ai-case-studies      404
/en/contact              404
/en/ai-transformation    404
/en/ai-training-for-teams 404
/en/about                404
/en/capacity             200
```

`/en/capacity` shipped to production with a header, mega-menu and footer in
which every destination is a dead end. Worse than not shipping the page.

**Resolved** — `src/lib/nav.ts` now resolves every EN href through
`EN_PUBLISHED`, falling back to the French equivalent when the English page does
not exist. A visitor reaches the content in the wrong language rather than
nothing, and each link upgrades itself the moment its EN page ships. No manual
sweep needed later.

**Process note:** the string-level checks I ran before this audit (Tier A word
lists, phrase patterns) passed clean and would never have caught this. The cold
read caught it in one pass. That asymmetry is the argument for the firewall.

### 🔴 F2 — Unvalidated figure in the Featured card
> "The most in-demand role in AI. 20+ deployed with our clients this year."

Faithful translation of the live French (`+20 déployés chez nos clients cette
année`), so not an invention. But it does not appear on the validated-figures
list, and `seo-audit-rules.md §7.3` requires unvalidated figures to carry a
visible `[to validate]` tag through to sign-off.

**Resolved — owner validated the figure (2026-07-29).** No `[to validate]` tag
required; it stands in both languages.

### 🟠 F3 — Rule 5.6, temporal vagueness
Same string: **"this year"** in persistent navigation. Undated relative time in
chrome that renders on every page rots silently — it will be wrong in January and
nobody will notice. Prefer an absolute figure or drop the time qualifier.

**Accepted as-is — owner ruling (2026-07-29):** the content is refreshed
continuously, so relative time is acceptable here. Re-check if the nav ever goes
a full year without a content pass.

### 🟠 F4 — Rule 5.2, reversibility
> "Produce more without diluting the creative"

Used verbatim for two different destinations: the *AI for Creative & Advertising*
training programme, and the *Marketing agencies* industry page. An identical
promise for two different products means at least one is not describing its own
value. Inherited from the French, which has the same duplication.

**Resolved.** The line is the *sector* page's own H1 (« L'IA pour les agences
de communication : produire plus, sans diluer la créa »), so the sector keeps
it. The training programme had borrowed it and now carries its own promise,
taken from its own tagline (« l'IA absorbe la production, votre direction
artistique garde la main »): EN "AI takes the variants, your team keeps the
concept", FR « L'IA prend les déclinaisons, vos équipes le concept ». Sourced
from existing copy, not invented (§7).

### 🟡 F5 — Brand-name inconsistency
The same asset was **"AI-First Playbook"** in the mega-menu and **"AI Playbook
(PDF)"** in the footer.

**Resolved — owner picked "AI-First Playbook".** Applied to the footer in both
languages: the French had the same drift (« Playbook IA (PDF) » in the footer
against « Playbook AI-First » in the menu).

### 🟡 F6 — Rule 2.5, colon-headline density
Five instances in 599 words: "The foundation: understand it and save time from
day one", "The catalogue: 6 programmes…", "GDPR, AI Act, charter: built in by
default", "Clay, Lemlist, FullEnrich: the acquisition machine", "Our story: the
founder".

Each mirrors the French construction, so this is inherited, not invented. Flagged
for a density decision rather than corrected unilaterally — changing it would
make the EN diverge stylistically from the FR.

## 4 — Disposition

| # | Finding | Ruling | Reason |
|---|---|---|---|
| D1 | Rule 2.3 "From X to Y" sweep on "Your AI department, from audit to scale" | **Rejected** | Rule 2.3 targets the rhetorical sweep ("from startups to enterprises"). This names two real phases of the delivered methodology and is a direct rendering of the live French. Not a sweep. |
| D2 | F6 colon-headlines | **Deferred to owner** | Inherited from FR. Correcting only the EN would split the two languages stylistically for no reader benefit. |
| D3 | F1 nav 404s | **Fixed** | Engineering defect, not a copy issue. Fallback to FR implemented; 51 dead links → 0, verified in rendered HTML. |
| D4 | F2 "20+ deployed … this year" | **Validated by owner** | Confirmed 2026-07-29. |
| D5 | F3 temporal vagueness | **Accepted by owner** | Content refreshed continuously; relative time acceptable. |
| D6 | F4 duplicated promise | **Fixed** | Sector keeps the line (its own H1); training programme given its own, sourced from its tagline. Both languages. |
| D7 | F5 playbook naming | **Fixed** | "AI-First Playbook" everywhere; FR footer aligned too. |

## 5 — Standing caveat

This copy has no content master behind it. The `[EN] website-content/` masters
cover page data fields only; there is no navigation master, so these 599 words
were authored by translation from the live French and have never been through an
independent agent 3 or agent 4 pass. They are the first thing an English visitor
reads.

# Carrières — /carrieres

**Source audited:** `[FR] website-content/carrieres/carrieres.md`
**Compared against:** `src/app/carrieres/postes.ts` (open roles), `src/app/carrieres/page.tsx` (live metadata, values cards, BreadcrumbList JSON-LD), `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt`.
**See also:** `_cross-page-findings.md`

## Score: 84 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 22 / 25 |
| Factual & Claim Accuracy | 23 / 25 |
| On-Page SEO | 18 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 8 / 15 |

## Verdict
Ship after confirming role freshness. Employer-brand/recruitment page with correctly minimal keyword ambition. All 5 open roles are verbatim from `postes.ts`, the draft removes an unsubstantiated "stack de pointe" adjective (good), and figures are canonical. Two gaps: the roles carry a `[à valider fraîcheur]` tag that must be checked before publish, and the page ships no JobPosting schema despite listing 5 real jobs.

## Findings

### 🟡 Medium
1. **Open-role freshness must be confirmed.** The 5 roles (AI Engineer, AI Delivery Lead, LLMOps Engineer, AI & Data Engineer, SEO & GEO Executor — all "Paris, Rabat ou remote") match `postes.ts` verbatim as read 2026-07-15, and the draft keeps the `[à valider fraîcheur]` tag (§4.3/§9). Recruitment listings go stale fast; **confirm these are still open before publish** (ruleset §3.5 — already tracked, confirm resolved).
2. **No JobPosting schema despite 5 real roles.** Live page emits only BreadcrumbList (`page.tsx:74`). A careers page with structured openings is the textbook case for `JobPosting` structured data (ruleset §1.5). The draft does not falsely claim it — so no fabrication — but this is a real missed GEO/rich-result opportunity. Scope as one engineering ticket (add JobPosting per role from `postes.ts`).
3. **Live "stack de pointe" is an unsubstantiated modifier — draft removes it.** `page.tsx:67` "une stack de pointe" and the live meta both use it. Draft strips the adjective and names the stack (Claude Code, n8n, LangChain) instead — correct per ruleset §1.1 (no unsubstantiated superlatives). Ship the fix.

### 🟢 Low
4. **Live title duplicates brand.** `Carrières : rejoignez AI Makers` + suffix repeats "AI Makers". Proposed `Carrières : rejoignez l'équipe` measures **42 chars** (verified). Ship it.

## What this page gets right
- **Roles verbatim from source.** All 5 titles, teams, and "Paris, Rabat ou remote" locations match `postes.ts` (`:38-85`); mailto application flow matches too. Empty-state copy provided for when the list is cleared — good resilience.
- **Figures canonical:** équipe de 6, Paris + Rabat, international clients match `public/llms.txt`; application email `othmane@aimakers.fr` matches the contact block.
- **Concrete builder ethos, no inflation:** "Pas de POC qui dort dans un tiroir", "Montrez-nous ce que vous avez construit" — specific, deflating, credible.
- **Proposed meta 158 chars** (verified) — inside budget, names the real stack.
- **Route in sitemap** (`sitemap.ts:42`); internal-link targets /equipe, /forward-deployed-engineer, /contact exist; `#postes` is an on-page anchor.

## Priority fix list
1. 🟡 Confirm the 5 roles are still open (resolve `[à valider fraîcheur]`).
2. 🟡 Add JobPosting schema per role (engineering ticket).
3. 🟡 Ship the "stack de pointe" removal + 42-char title + 158-char meta.

## Open questions
- Are all 5 listed roles currently open? Stale job listings damage employer-brand trust and can trigger rich-result penalties.

---
### Cross-page candidates
- **"stack de pointe" / superlative adjectives** — same unsubstantiated-modifier family flagged on /garanties ("les seuls"). Fold into one superlatives-cleanup pass.
- **Canonical figures** (équipe de 6, Paris·Rabat) shared with /equipe, /a-propos — confirm agreement (ruleset §8.3).

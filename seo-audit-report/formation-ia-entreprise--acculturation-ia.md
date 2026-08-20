# Formation — Acculturation IA / AI Literacy · route `/formation-ia-entreprise/acculturation-ia` (EN proposed `/ai-training-for-teams/ai-literacy`)

**Source audited:** `[EN] website-content/formation-ia-entreprise--acculturation-ia/formation-ia-entreprise--acculturation-ia.md`
**Compared against:** `src/lib/formations.ts` (entry `acculturation-ia`), `src/app/formation-ia-entreprise/[slug]/page.tsx` (emits `Course` + `BreadcrumbList` + `FAQPage`; meta title = `${name} | Formation IA en entreprise`; meta description = `resume`), `src/app/layout.tsx` (`%s | AI Makers`), `src/app/sitemap.ts`, `public/llms.txt`. Ahrefs KE (US), 2026-07.
**See also:** `_cross-page-findings.md`.

## Score: 83 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 24 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 15 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 7 / 15 |

## Verdict
Fix-first. Content and Qualiopi discipline are excellent, but two shipping blockers are template-level: the proposed EN Title cannot render from the current metadata code, and the proposed meta description has no field to land in (`resume` does triple duty). Also watch primary-keyword overlap with the training pillar.

## Findings

### 🟠 High
1. **Proposed Title cannot render from the template.** `generateMetadata` builds `title: ${formation.name} | Formation IA en entreprise`, then layout appends ` | AI Makers`. With EN `name = "AI Literacy Masterclass"` the rendered title is `AI Literacy Masterclass | Formation IA en entreprise | AI Makers` — French mid-suffix and ~62 chars, not the draft's `AI Literacy Training for Teams | AI Makers`. Fix: EN build must drop/translate the hardcoded `| Formation IA en entreprise` suffix and keep rendered ≤60 incl `| AI Makers` (shared ticket TICKET-FORM-TITLE-TPL).
2. **Proposed meta description has no landing field.** The template uses `formation.resume` for the meta description — and `resume` also feeds the hero paragraph and the `Course` schema `description`. The draft's richer meta line (`A half- or full-day AI literacy masterclass…`) differs from `resume`, so it cannot ship without a dedicated `seoDescription` field on `Formation` (TICKET-FORM-SEO-DESC).
3. **Primary keyword overlaps the training pillar.** Primary `ai training for employees` (**verified Ahrefs: 450 US, KD 22, CPC $15**) is a generic term the `/ai-training-for-teams` pillar will also want. Risk of child-vs-pillar cannibalization. Recommend this child own the literacy-specific term `ai literacy training` (draft's secondary) and cede the generic to the pillar.

### 🟡 Medium
4. **Proposed meta description length ~168 chars** — over the 160 ceiling; trim when the `seoDescription` field lands.
5. **Internal links to `/ai-training-for-teams` and `/ai-training-for-teams/claude-training`** — routes not built yet (live: `/formation-ia-entreprise/…`). Gate on TICKET-EN-ROUTES.
6. **Answer-first GEO paragraph** has no dedicated field; `resume` is the on-page lead.

## What this page gets right
- **Qualiopi/OPCO handled exactly right:** tagged `[to validate placement]`, no certification and no funding % asserted (§4 compliance pass).
- Figures sourced correctly: `7h/week` and `+2,500 trained` traced to `public/llms.txt`; `10+ use cases` tagged `[to validate]`; `0 prerequisites` structural.
- `Course` + `FAQPage` schema is real in code, matching the draft's claim.
- Distinct four-assistant framing (Claude/ChatGPT/Gemini/Copilot) separates it from the single-tool siblings; FAQ is program-specific (no duplicate-FAQ cannibalization).

## Priority fixes
1. Open TICKET-FORM-SEO-DESC and TICKET-FORM-TITLE-TPL — without them the EN title and meta cannot ship as written (🟠).
2. Switch primary to `ai literacy training`; let the pillar own `ai training for employees` (🟠).
3. Gate internal links on the EN route set (🟡).

## Open questions
- Is AI Makers Qualiopi-certified? If so, where does the funding-eligibility line sit (fiche vs CTA)?
- Confirm the child/pillar keyword split so the literacy page and the pillar don't compete.

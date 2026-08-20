# Playbook AI-First (/playbook-ia) — EN Content Master

## 1. Page header
- **Route (FR, live):** /playbook-ia
- **Proposed EN slug:** /ai-playbook
- **Purpose:** Lead magnet landing page: 48-page PDF playbook, email capture.
- **SEO role:** conversion (lead magnet) — minimal keyword pressure.
- **Funnel stage:** TOFU→MOFU capture

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | ai playbook | 40 (US) | 23 | Ahrefs keywords-explorer-overview, 2026-07 |
| Secondary | ai transformation playbook | 60 (US) | 3 | Ahrefs, 2026-07 |

> **Keyword decision — minimal keyword pressure; this is a conversion asset.** "ai playbook" (40 US) and "ai transformation playbook" (60 US) are near-zero volume. A lead-magnet landing page lives or dies on the offer and the capture form, not on organic head-term ranking; most traffic will come from internal links (nav, homepage, blog), paid, and email. So the copy is optimised for the email conversion and to name the exact deliverable — not stuffed for a term that barely exists. Flagged to Agent 3 as a deliberately low-keyword conversion page.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Le Playbook AI-First \| AI Makers | The AI-First Playbook — Free 48-Page Guide *(42; renders 54 with `\| AI Makers` template suffix — brand not hand-written)* |
| Meta description (140–160 chars) | (from page metadata / playbook-config) | A free 48-page playbook to structure your AI transformation: 8 exercises, 5 key AI systems, a 9-level maturity model, and a 90-day plan. Delivered free by email. *(158)* |
| H1 | Le guide que 88% des dirigeants auraient voulu avoir avant de commencer avec l'IA. | The guide 88% of executives wish they'd had before starting with AI. |
| URL slug | /playbook-ia | /ai-playbook |

## 4. Sections & content
Copy source: `src/lib/playbook-config.ts` (`playbookContent.*`). Page: `src/app/playbook-ia/page.tsx`; capture via `shared/lead-capture.tsx`.

### 4.1 — Hero
- **Component:** `playbookContent.hero`
- **Fields:** badge, title, subtitle, ctaPrimary (#recevoir-playbook), ctaSecondary (/diagnostic-ia), socialProof
- **Current (FR):** 88%-hook headline.
- **Proposed (EN):**
  - **badge:** `> NEW: The AI-First Playbook 2026`
  - **title:** `The guide 88% of executives wish they'd had before starting with AI.`
  - **subtitle:** `48 pages. 8 hands-on exercises. 5 turnkey AI systems. The one guide that doesn't sell you a dream — it hands you a plan.`
  - **ctaPrimary:** `Get the playbook (PDF)` → #recevoir-playbook
  - **ctaSecondary:** `Take my free AI diagnostic` → /diagnostic-ia
  - **socialProof:** `Already used by 300+ executives` *(see §9 — [to validate])*
- **Rationale:** Keeps the 88% hook and the exact deliverable count. "Doesn't sell you a dream — it hands you a plan" is the FR's POV; kept because it sets the promise the PDF must meet. Page count set to **48** (config source of truth); megamenu's "43 pages" is the outlier to reconcile — flagged §9.

### 4.2 — Stats (3)
- **Component:** `playbookContent.stats`
- **Fields:** 3 stat blocks {value, label, sublabel}
- **Current (FR):** Wake-up-call stats [to validate sources].
- **Proposed (EN):**
  - **Stat 1:** `88%` — `of companies use AI` — `but only 5% get real value from it` `[to validate — source]`
  - **Stat 2:** `$700B` — `invested in AI` — `impact on GDP: almost nil` `[to validate — source]`
  - **Stat 3:** `30%` — `of AI projects abandoned` — `after the proof of concept` `[to validate — source]`
  - **⚠ Do not render as bare percentages:** none of these three figures has a source in `playbook-config.ts`. Attach a named citation (e.g. McKinsey/BCG) or reframe as qualitative before publish — see §9.
- **Rationale:** Direct translation of the config figures. All three are external claims with no source in the config — kept but flagged [to validate sources] here and in §9; attach a citation or soften before publish.

### 4.3 — Problem
- **Component:** `playbookContent.problem`
- **Fields:** badge, title, cards[3]
- **Current (FR):** « Vous avez ChatGPT. Et maintenant ? »
- **Proposed (EN):**
  - **badge:** `The problem`
  - **title:** `You've got ChatGPT. Now what?`
  - **Card 1 — ChatGPT with no system = ghost AI:** `Every employee tinkers in their own corner. Nothing compounds, nothing improves. It's like handing everyone a phone without installing email.`
  - **Card 2 — Automating a bad process = scaling mediocrity:** `Bolting AI onto a workflow no one has rethought is paving dirt roads with asphalt. Leaders redesign first, automate second.`
  - **Card 3 — Aiming at cost-cutting = 13 fewer points of success:** `Companies that frame AI as cost savings succeed 50% of the time. Those aiming at growth: 63%. That gap turns slide decks into results.` `[to validate — source for 50%/63%]`
- **Rationale:** Kept the FR's vivid analogies (ghost AI, dirt roads/asphalt) — they're the memorable, non-slop part. The 50%/63%/13-point figures (and the "95% of AI projects" in §4.4) have no source in config → carry a visible `[to validate]`; cite or soften before publish, do not present as bare fact.

### 4.4 — What's in the playbook (6 chapters)
- **Component:** `playbookContent.preview`
- **Fields:** badge, title, items[6] {number, title, description}
- **Current (FR):** « 48 pages de concret, zéro bullshit. »
- **Proposed (EN):**
  - **badge:** `What's inside the Playbook`
  - **title:** `48 pages of substance, zero fluff.`
  - **01 — The Wake-Up Call:** `The numbers nobody shows you, and the 3 mistakes that sink 95% of AI projects.` `[to validate — source for 95%]`
  - **02 — The 9 Maturity Levels:** `Where does your company stand? A pyramid to place yourself and see the path ahead.`
  - **03 — The AI-Native Model:** `What Y Combinator and the global leaders understood before everyone else.`
  - **04 — The 5 AI Systems:** `The 5 building blocks every competitive company needs, explained simply.`
  - **05 — Privacy & Sovereignty:** `AI Act, data, models: what your company needs to know and do.`
  - **06 — Your Action Plan:** `A readiness score out of 20, quick wins by department, a personalised 90-day roadmap.`
- **Rationale:** Chapter titles kept 1:1 so the promise matches the actual PDF. "Score out of 20" matches the playbook's own scoring exercise (§4.5) and the diagnostic scale — consistent. Y Combinator reference kept as in config (external claim, low-risk framing).

### 4.5 — 8 hands-on exercises
- **Component:** `playbookContent.exercises`
- **Fields:** badge, title, subtitle, items[8] {name, type, time, description}
- **Current (FR):** « Pas juste un rapport : un kit de travail. »
- **Proposed (EN):**
  - **badge:** `8 hands-on exercises included`
  - **title:** `A working kit you complete as you read.`
  - **subtitle:** `Each exercise is built to be done while you read. You finish with concrete actions, not theory.`
  - **Exercises:**
    - `5-Min Express Audit` · Calculator · 5 min · `Work out what inaction is costing you per month`
    - `AI Maturity Test` · Self-assessment · 2 min · `Place yourself on the 9-level pyramid`
    - `Time/Value Matrix` · Exercise · 10 min · `Find your AI quick wins by sorting your tasks`
    - `The Amodei Exercise` · Reflection · 5 min · `Break your role down into 5 AI components`
    - `The 4 Tiers` · Framework · Reading · `From ChatGPT to an integrated system, with a checklist`
    - `Quick Wins by Department` · Actions · Immediate · `One action you can do Monday, for each department`
    - `Readiness Score` · Scoring · 2 min · `10 questions, a score out of 20, a personalised diagnosis` *(featured)*
    - `The 30-60-90 Plan` · Roadmap · Reading · `Your action plan for the next 90 days`
- **Rationale:** Exercise list kept exact — the promise ("kit de travail") is delivered by these 8 named items. "The Amodei Exercise" kept as a named framework (references Dario Amodei's task-decomposition idea; low-risk, no fabricated quote).

### 4.6 — Credibility
- **Component:** `playbookContent.socialProof`
- **Fields:** title, stats[3]
- **Current (FR):** « Construit à partir de +200 missions terrain. »
- **Proposed (EN):**
  - **title:** `Built from 200+ field engagements.`
  - **stats:** `200+ AI systems delivered` · `2,500+ professionals trained` · `8 sectors covered`
- **Rationale:** 200+ and 2,500+ are canonical (llms.txt: +200 systems, +2,500 trained). Reworded "200+ missions" to "200+ AI systems delivered" to match the canonical figure exactly. Sector count set to **8** (canonical — `secteurs.ts` has 8 entries; the FR "6 sectors" was the outlier per `_cross-page-findings.md §5`).

### 4.7 — Lead capture
- **Component:** `shared/lead-capture.tsx` + `playbookContent.capture`
- **Fields:** anchor, title, subtitle, email field, CTA, success message + GDPR note
- **Current (FR):** « Recevez le playbook par email ».
- **Proposed (EN):**
  - **title:** `Get the playbook by email`
  - **subtitle:** `Enter your first name and work email. You'll get the full playbook (48 pages) straight to your inbox.`
  - **ctaLabel:** `Get the playbook`
  - **successTitle:** `Done!`
  - **successMessage:** `The playbook is on its way to your inbox. If it's not there in a few minutes, check your spam folder.`
  - **GDPR/consent line (add if not present):** `We use your email only to send the playbook and occasional AI resources. Unsubscribe in one click. No sharing with third parties.`
- **Rationale:** Data-capture page → explicit purpose + one-click unsubscribe line, matching the diagnostic page's privacy tone. Consent microcopy flagged as an add for the EN build if the FR form lacks it.

### 4.8 — Final CTA
- **Component:** `playbookContent.finalCta`
- **Fields:** title, subtitle, 2 CTAs, urgency
- **Current (FR):** « Le plan complet est dans le playbook. »
- **Proposed (EN):**
  - **title:** `The full plan is in the playbook.`
  - **subtitle:** `48 pages to structure your AI transformation. And if you want to place your company, the diagnostic takes 2 minutes.`
  - **ctaPrimary:** `Get the playbook (PDF)` → #recevoir-playbook
  - **ctaSecondary:** `Take my free AI diagnostic` → /diagnostic-ia
  - **urgency:** `March 2026 edition. Updated every quarter.`
- **Rationale:** Kept the quarterly-update line — a real freshness signal, not manufactured scarcity.

## 5. FAQ
No FAQ slot in template.

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| Take my free AI diagnostic | /diagnostic-ia | secondary CTA (existing) |
| Talk to us | /contact | escalation (existing) |

## 7. CTA
- **Primary CTA:** « Recevoir le playbook (PDF) » (email capture). Proposed EN: **`Get the playbook (PDF)`**
- **Secondary CTA:** « Faire mon diagnostic IA gratuit » → /diagnostic-ia. Proposed EN: **`Take my free AI diagnostic`**

## 8. GEO block
- **Answer-first paragraph (EN, cite-able):** `The AI-First Playbook is AI Makers' free 48-page guide to structuring an AI transformation. It contains 6 chapters (from a wake-up call to a 90-day action plan), 8 hands-on exercises done while reading, a 9-level maturity model, and the 5 core AI systems a competitive company needs. It's built from 200+ field engagements and 2,500+ professionals trained, and delivered by email after a short form.`
- **llms.txt entry (EN):** `[AI-First Playbook](https://aimakers.fr/playbook-ia) : AI Makers' free 48-page transformation guide — 6 chapters, 8 exercises, a 9-level maturity model and a 90-day plan, delivered by email.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| 48 pages / 8 exercises / 5 AI systems / 6 chapters / 9 maturity levels | playbook-config.ts (source of truth) |
| **48 vs 43 pages inconsistency** | playbook-config.ts (48) vs site-config.ts megaMenu (43) — reconcile; EN uses 48 |
| 88% use AI / 5% get value; $700B invested / ~nil GDP impact; 30% abandoned after PoC | playbook-config.ts — **[to validate sources]** |
| 50% vs 63% success (cost-cutting vs growth), 13-point gap | playbook-config.ts — **[to validate sources]** |
| 95% of AI projects fail; Y Combinator / AI-native claim | playbook-config.ts — external framing, [to validate] |
| 200+ AI systems delivered / 2,500+ trained | public/llms.txt (canonical) |
| 8 sectors covered | secteurs.ts = 8 entries (canonical); FR "6 sectors" reconciled up to 8 per `_cross-page-findings.md §5` |
| 300+ executives social proof | playbook-config hero — **[to validate]**, not in llms.txt |
| Score out of 20 (readiness) | playbook-config — consistent with diagnostic /20 scale |

## Reconciliation applied
Applied from `seo-audit-report/playbook-ia.md` (74/100, fix-first) + `ai-slop-audit-report/playbook-ia.md` (Net +15, one editing pass).

- **Negation de-stack (slop §2.1, 3× → 1):** kept the strongest hero negation ("the one guide that doesn't sell you a dream — it hands you a plan"). Flattened the exercises title `Not just a report — a working kit.` → `A working kit you complete as you read.` Removed the third instance `No hype — a plan.` from the meta description (the sentence already lists the deliverables) and closed the meta on a next-step (`Delivered free by email.`) instead.
- **Double brand suffix (SEO §2a):** stripped hand-written `| AI Makers` from the Title field (renders 54 with template suffix).
- **Sectors 6 → 8 (canonical, `_cross-page-findings.md §5`):** credibility block and §9 now read "8 sectors covered" (secteurs.ts is the 8-entry source of truth). Page count kept at **48** (already canonical in the draft; `site-config.ts:111` "43 pages" is a dev fix, not copy).
- **Stat wall `[to validate]` (SEO 🟠 / slop remediation):** added visible `[to validate — source]` tags inline to the §4.2 stat wall (88%/5%, $700B, 30%), the §4.3 50%/63% card, and the §4.4 "95%" chapter line, plus a "do not render as bare percentages" instruction. Cite-or-soften remains an owner action; the numbers are no longer presented as bare fact.
- **KEPT (protected):** the vivid load-bearing analogies ("ghost AI", "paving dirt roads with asphalt"), the "March 2026 edition, updated every quarter" freshness signal, the named deliverable spec (48/8/5/9, named exercises), the "300+ executives" social proof with its existing `[to validate]` tag, and the canonical 200+/2,500+ figures.
- **Left for dev / owner (not copy):** GDPR consent microcopy landing in `lead-capture.tsx` (TICKET-GDPR-CONSENT); `site-config.ts:111` 43→48; verify-or-drop "300+ executives"; source the stat wall.

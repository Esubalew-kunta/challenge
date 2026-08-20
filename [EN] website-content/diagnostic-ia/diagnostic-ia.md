# Diagnostic IA (/diagnostic-ia) — EN Content Master

## 1. Page header
- **Route (FR, live):** /diagnostic-ia
- **Proposed EN slug:** /ai-maturity-assessment
- **Purpose:** Interactive maturity self-assessment (wizard). App-like page: only meta + wizard microcopy are translatable.
- **SEO role:** tool-magnet (free assessment) — light keyword.
- **Funnel stage:** TOFU capture

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | ai maturity assessment | 150 (US) / 200 (GB) | 52 (US) | Ahrefs keywords-explorer-overview, 2026-07 |
| Secondary | ai readiness quiz | 50 (US) | 1 | Ahrefs, 2026-07 |
| Reference (not owned here) | ai readiness assessment | 1,400 (US) | 8 | Ahrefs, 2026-07 |

> **Keyword decision — light keyword; slug chosen to avoid collision.** The strong term in this cluster is "ai readiness assessment" (1,400 US, KD8, commercial), but the sibling slug **/ai-readiness-assessment already exists and maps to the audit page (AI Scan)** — the paid, human-led assessment. To avoid two pages fighting for the same term, this self-serve 2-minute quiz takes **/ai-maturity-assessment** and targets "ai maturity assessment" (150, KD52) + "ai readiness quiz" (50, KD1), pointing "readiness assessment" intent to the audit owner. Light keyword pressure overall — the page's job is the tool + lead capture, not organic ranking. Decision flagged for Agent 3/4 (confirm /ai-readiness-assessment = audit page before finalising).

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Diagnostic IA Gratuit : testez votre maturité IA en 2 minutes \| AI Makers | Free AI Maturity Assessment — 2-Minute Test \| AI Makers *(56)* |
| Meta description (140–160 chars) | 12 questions pour évaluer votre maturité IA. Score personnalisé, recommandations par secteur, et plan d'action 90 jours. Gratuit et sans engagement. | 12 questions to assess your AI maturity. Get a personalised score out of 20, sector-specific recommendations, and a 90-day action plan. Free, no commitment. *(157)* |
| H1 | (no static H1 — wizard-driven UI) | (no static H1 — wizard-driven; keep OG title as the page's semantic H1: "Free AI Maturity Assessment") |
| URL slug | /diagnostic-ia | /ai-maturity-assessment |

> **/20 vs /24 reconciliation — decided.** The two scales are different instruments, not a bug: this self-serve diagnostic has 10 scoring questions × 0/1/2 = a score **out of 20**; the site-wide "grille /24" is the *audit AI Scan* maturity grid, a separate, human-led tool. So the OG "Score /20" is correct for THIS page — keep /20 here, keep /24 on the audit page. EN meta uses "score out of 20". (Also: FR page builds metadata with plain Next Metadata, not `constructMetadata` — dev note for Agent 4.)

## 4. Sections & content
Page `src/app/diagnostic-ia/page.tsx` renders only `src/components/sections/diagnostic/diagnostic-wizard.tsx`. ALL wizard copy (12 questions, options, capture, result) lives in `src/lib/diagnostic-config.ts` + `diagnostic-scoring.ts`. Per brief: fill page meta, the answer-first intro microcopy, and the GEO block. Sections here = wizard steps, not content sections. Full 12-question translation is a config-file pass (out of this page's prose scope; noted for the diagnostic-config EN pass).

### 4.1 — Wizard microcopy (the translatable surface)
- **Component:** `sections/diagnostic/diagnostic-wizard.tsx` + `lib/diagnostic-config.ts`
- **Fields:** progress/step counters, back button, capture screen, CTA labels
- **Current (FR):** 12-question maturity quiz → score /20 + action plan, email-gated result.
- **Proposed (EN) — microcopy:**
  - **Progress counter:** `Question {n} of 12` / last step: `Final step`
  - **Back button:** `Back`
  - **Step-counter helper (answer-first intro line, shown up front):** `12 quick questions, about 2 minutes. You'll get your AI maturity score out of 20, recommendations for your sector, and a 90-day action plan — free, no commitment.`
  - **Capture screen title (`captureContent.title`):** `Last step: get your assessment`
  - **Capture screen subtitle (`captureContent.subtitle`):** `Enter your work email to receive your personalised report — your score, your recommendations, and the full AI-First Playbook (48 pages).`
  - **First-name placeholder:** `Your first name` · **Email placeholder:** `you@company.com`
  - **CTA label (`captureContent.ctaLabel`):** `See my results →` · **loading:** `Calculating…`
  - **Privacy note (`captureContent.privacyNote`):** `Your data stays private. No spam. Unsubscribe in one click.`
  - **Validation microcopy:** `First name required` · `Email required` · `Please use your work email`
- **Rationale:** Answer-first intro states the length (2 min), the deliverable (score /20 + sector recs + 90-day plan), and the price (free) before the user commits — the conversion driver. Capture screen keeps the work-email gate and the Playbook bundle (matches the FR capture copy). Privacy note is the GDPR-on-capture line, kept explicit.

## 5. FAQ
No FAQ slot in template.

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| (post-result) See my results | /diagnostic-ia/resultat | result screen (out of scope) |
| Book a free diagnostic instead | /contact | post-result / human-led alternative |
| Prefer the full audit? | /audit-ia-entreprise | escalation to AI Scan (the /24 grid) |

## 7. CTA
- **Primary CTA:** Complete the assessment → lead capture → result. Proposed EN: **`See my results`**

## 8. GEO block
- **Answer-first paragraph (EN, cite-able):** `AI Makers' free AI maturity assessment is a 2-minute self-test of 12 questions that scores your company's AI maturity out of 20 across dimensions like strategy, use cases, training, data, and governance. You get a personalised report with sector-specific recommendations and a 90-day action plan, delivered to your work email. It's the self-serve counterpart to the AI Scan, AI Makers' human-led audit that scores maturity out of 24.`
- **llms.txt entry (EN):** `[AI Maturity Assessment](https://aimakers.fr/diagnostic-ia) : AI Makers' free 2-minute self-test — 12 questions, a maturity score out of 20, sector recommendations and a 90-day plan.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| 12 questions (10 scoring + 2 qualification); score out of 20 | diagnostic-config.ts — verified (10 × 0/1/2 = /20) |
| /20 (this diagnostic) vs /24 (audit AI Scan) | reconciled: different instruments, both correct |
| Sector recommendations, 90-day action plan, work-email gate, Playbook 48p bundle | diagnostic-config.ts (captureContent) |
| Data-privacy note (no spam, one-click unsubscribe) | diagnostic-config.ts privacyNote |
| /ai-readiness-assessment owned by audit page | brief sibling-slug list — confirm before final |

## Reconciliation applied
**Changed:** nothing in copy — this page needed no content fixes.

**Deliberately kept (and why no double-brand strip):**
- Title keeps its `| AI Makers` — verified by the SEO audit that `diagnostic-ia/page.tsx` uses **plain Next Metadata with a self-contained title** (NOT `constructMetadata`), so the template does not append the brand; the in-field brand is correct here and does not double. Rendered 56 chars, ≤60.
- Meta description 156/157 chars — within budget, unchanged.
- No negations to de-stack (slop net −1, pure functional wizard microcopy).
- /20-vs-/24 kept distinct (this self-test scores /20; the AI Scan audit scores /24 — different instruments, already reconciled).
- GDPR-on-capture privacy note kept explicit; work-email gate + 48-page Playbook bundle preserved.
- Proposed slug `/ai-maturity-assessment` and the `/ai-readiness-assessment` audit-owner collision left as PROPOSALS (engineering/owner decision).

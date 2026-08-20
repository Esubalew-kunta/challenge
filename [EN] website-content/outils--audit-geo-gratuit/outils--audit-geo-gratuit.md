# Audit GEO gratuit (/outils/audit-geo-gratuit) — EN Content Master

## 1. Page header
- **Route (FR, live):** /outils/audit-geo-gratuit
- **Proposed EN slug:** /ai-visibility-checker
- **Purpose:** Lead magnet — a human-prepared, 48h mini-audit of how AI answer engines describe the company vs. competitors. Feeds the paid /seo-geo offer.
- **SEO role:** tool-magnet feeding /seo-geo
- **Funnel stage:** TOFU capture

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | ai visibility checker | 1,000 (US) / 250 (GB) · 2,300 global | 14 (US) | Ahrefs keywords-explorer-overview, 2026-07 |
| Secondary | ai visibility audit | 250 (US) · 600 global | 12 (US) | Ahrefs, 2026-07 |
| Secondary | geo audit | 250 (US) · 1,300 global | 0 (US) | Ahrefs, 2026-07 |

> **Keyword decision (playbook lesson applied):** the brief floated "generative engine optimization audit" — Ahrefs shows it at ~20/mo US, effectively zero. The winnable, real-intent term is **"ai visibility checker" (1,000, KD14)**, with "ai visibility audit" (250, KD12) and "geo audit" (250, KD0) as low-difficulty support. So the slug becomes /ai-visibility-checker and the H1 leads with the AI-visibility framing; "GEO" / "generative engine optimization" stay as the descriptive method term, not the head keyword. Honest caveat for the reconcile pass: "checker" implies an instant automated tool, but this deliverable is **human-prepared within 48h** — copy must not imply a live scanner. Kept the promise accurate below.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Audit GEO gratuit : que disent les IA de votre entreprise ? | Free AI Visibility Check: what AI says about you *(48; renders 60 with `\| AI Makers` template suffix — brand not hand-written)* |
| Meta description (140–160 chars) | ChatGPT, Gemini et Perplexity répondent déjà… | ChatGPT, Gemini, and Perplexity already answer your customers' questions. This free check shows what they say about you and your competitors — human-prepared within 48h. *(157)* |
| H1 | Que disent les IA de votre entreprise ? | What do AI engines say about your company? |
| URL slug | /outils/audit-geo-gratuit | /ai-visibility-checker |

## 4. Sections & content
Copy: inline `src/app/outils/audit-geo-gratuit/page.tsx`; form `src/components/shared/geo-audit-form.tsx` (email + company → /api/lead, source "geo-audit"). FAQPage JSON-LD via `faq-schema.ts`.

### 4.1 — Hero + form
- **Component:** `page.tsx` + `geo-audit-form.tsx`
- **Fields:** H1, intro, form (work email + company), submit + microcopy
- **Current (FR):** Curiosity hook — what AIs say about you.
- **Proposed (EN):**
  - **H1:** `What do AI engines say about your company?`
  - **intro (answer-first):** `ChatGPT, Gemini, and Perplexity already answer your customers' questions — and they name some companies and skip others. This free check shows how those engines describe you, where you show up against your competitors, and the three moves that would get you cited more. It's prepared by a person on our team, not a bot, and lands in your inbox within 48 hours.`
  - **form labels (EN):** `Your work email` · `Your company name` — **submit:** `Get my free AI visibility check` — **microcopy:** `Free. Within 48h. Prepared by a human, not a robot.`
  - **success state:** `Noted. Your check lands in your inbox within 48 hours.`
- **Rationale:** Answer-first paragraph carries "ai visibility" and names the three engines for GEO citation. Matches the form's real fields (email + company) and the true delivery promise (human, 48h) from `geo-audit-form.tsx`. Avoids implying an instant automated checker.

### 4.2 — "What you get"
- **Component:** `page.tsx` (cards[3])
- **Fields:** 3 deliverable cards
- **Current (FR):** Deliverable breakdown.
- **Proposed (EN):**
  - **Card 1 — What the engines answer:** `The actual responses ChatGPT, Gemini, and Perplexity give to the questions your buyers ask — quoted, not paraphrased.`
  - **Card 2 — You vs. your competitors:** `Where you appear in those answers, where a competitor gets named instead, and the gap between the two.`
  - **Card 3 — Three priority moves:** `The three highest-leverage actions to get cited more often, ranked, so you can start without us.`
- **Rationale:** Concrete deliverables; each card names a specific output (quoted answers, competitor gap, ranked actions) — deletable-hollow-line test passes.

### 4.3 — "How it works"
- **Component:** `page.tsx` (steps[3])
- **Fields:** 3 steps
- **Current (FR):** Process transparency (human-prepared).
- **Proposed (EN):**
  - **Step 1 — You send two things:** `Your work email and your company name. That's the whole form.`
  - **Step 2 — We query the engines:** `We put your buyers' real questions to ChatGPT, Gemini, and Perplexity and record what they say about you and your market.`
  - **Step 3 — A human writes it up, within 48h:** `Someone on our team reads the answers, spots the pattern, and sends you a short, plain-language audit — not an automated PDF.`
- **Rationale:** Transparency about method is the trust play and it's literally what happens. Reinforces "human, 48h" so the "checker" keyword doesn't over-promise a live tool.

### 4.4 — FAQ
- **Component:** `shared/faq-accordion.tsx` — see §5

### 4.5 — Related
- **Component:** `shared/related-content.tsx`
- **Proposed (EN):**
  - `Get cited by AI: our SEO & GEO offer` → /seo-geo — `The paid engagement that turns the audit into rankings and citations.`
  - `2-minute AI diagnostic` → /diagnostic-ia — `Your AI maturity score and a personalised action plan.`
  - `Best AI agencies in France, 2026` → /blog/meilleures-agences-ia-france — `How to choose, by company size.`

## 5. FAQ
FAQ slot: YES — `faq-accordion.tsx` + FAQPage JSON-LD.

| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | C'est vraiment gratuit ? | Is it really free? | Yes — no cost, no card, no call required. You give a work email and your company name, and you get the check back within 48 hours. |
| 2 | Pourquoi gratuit ? | Why is it free? | Because it's the honest first step of our SEO & GEO work, and it's genuinely useful on its own. Some companies act on the three moves themselves; some ask us to run the full engagement. Either way you leave with something you can use. |
| 3 | Et ensuite ? | What happens next? | You get a short written audit with three ranked actions. If you want the full version — measured before/after visibility across the engines, ongoing optimisation — that's our paid SEO & GEO offer. If not, no aggressive follow-up. |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| Get cited by AI: SEO & GEO offer | /seo-geo | paid offer |
| 2-minute AI diagnostic | /diagnostic-ia | related tool |
| Best AI agencies in France, 2026 | /blog/meilleures-agences-ia-france | related |

## 7. CTA
- **Primary CTA:** GEO audit form (work email + company) → audit within 48h. Proposed EN button: **`Get my free AI visibility check`**
- **GDPR note:** the form captures a work email + company name and posts to `/api/lead` (source "geo-audit"). Personal data — needs a one-line consent/privacy link near the submit ("We only use this to send your audit — see our privacy policy") and the standard retention/DPA handling. `[to validate placement]` of the exact consent line with the reconcile pass.

## 8. GEO block
- **Answer-first paragraph (EN, cite-able):** `AI Makers' free AI visibility check shows how AI answer engines — ChatGPT, Gemini, and Perplexity — describe a company and its competitors, and lists three ranked moves to get cited more. Unlike an instant automated scanner, it's prepared by a person on the team and delivered within 48 hours from just a work email and company name. It's the entry point to AI Makers' paid SEO & GEO engagement.`
- **llms.txt entry (EN):** `[Free AI Visibility Check](https://aimakers.fr/outils/audit-geo-gratuit) : what ChatGPT, Gemini, and Perplexity say about your company vs. competitors — human-prepared within 48h.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| 48h delivery, human-prepared | page copy + geo-audit-form.tsx microcopy/success (verified) |
| Form captures work email + company; free providers blocked | geo-audit-form.tsx + schemas/lead.ts source "geo-audit" (verified) — GDPR data capture |
| Engines named (ChatGPT, Gemini, Perplexity) | FR page copy (live) |

## Reconciliation applied
Applied from `seo-audit-report/outils--audit-geo-gratuit.md` (85/100, fix-first: one compliance item) + `ai-slop-audit-report/outils--audit-geo-gratuit.md` (Net −4, floor 0, ship).

- **Double brand suffix (SEO §2a):** stripped hand-written `| AI Makers` from the Title field; copy is now `Free AI Visibility Check: what AI says about you` (48 chars; renders 60 with the template suffix — at the cap).
- **KEPT (protected — tools' method transparency):** the stacked deflationary negations ("prepared by a person, not a bot", "quoted, not paraphrased", "not an automated PDF", "Unlike an instant automated scanner") are retained. Both `_cross-page-findings.md §1/§4.4` and the reconciliation brief classify the tools' method/transparency scoping as protected presence — each clause removes a real over-claim (the "checker" keyword must not imply a live scanner). The per-page slop audit's optional 4→2 thinning is overridden by that protect instruction. The admissions "so you can start without us" / "no aggressive follow-up" are kept.
- **Meta 157 within budget** — no trim. The "human, 48h" honesty framing is preserved throughout so the keyword never over-promises.
- **Left for dev / owner (not copy):** consent line + `/confidentialite` link on `geo-audit-form.tsx` (TICKET-GDPR-CONSENT, also a live FR gap) — `[to validate placement]` tag kept; `/outils/audit-geo-gratuit` vs `/ai-visibility-checker` slug/canonical (TICKET-EN-ROUTES).

# Secteur : Banque, assurance & courtage — EN Content Master

## 1. Page header
- **Route (FR, live):** /secteurs/banque-assurance-courtage
- **Proposed EN slug:** /industries/ai-for-financial-services (collection base /industries — hub slug owned by Agent 1)
- **Purpose:** Sector landing page — shows the ICP we understand their pains, maps concrete AI use cases, funnels to diagnostic call.
- **SEO role:** supporting (sector long-tail) + conversion assist
- **Funnel stage:** MOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | ai in banking | 2,300 (US) / 300 (GB) | 47 (US) / 48 (GB) | Ahrefs keywords-explorer-overview, 2026-07 |
| Secondary | ai for insurance | 700 (US) | 55 (US) | Ahrefs, 2026-07 |
| Secondary | ai for insurance brokers | 150 (US) / 30 (GB) | 5 (US) | Ahrefs, 2026-07 |

> **Volume note:** "ai in banking" 2,300 US (KD47) is the strongest attainable primary — "ai in finance" (4,500) is bigger but broader/harder (KD64) and drifts into investing content. "ai for insurance brokers" is very low volume (150) but KD5 — an easy long-tail win that maps exactly to the courtage (brokerage) angle, so it earns a spot despite the volume.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | IA pour banque, assurance et courtage : dossiers, relation client, conformité | AI for Banking, Insurance & Brokers *(renders as `AI for Banking, Insurance & Brokers \| AI Makers`, 47 — `\| AI Makers` auto-appended by `layout.tsx` title template; do not hand-write it)* |
| Meta description (140–160 chars) | Transformation IA pour banques, assureurs et courtiers : montage de dossiers accéléré, relation client augmentée, conformité intégrée. Références réelles dans le courtage et la banque. | AI for banking, insurance and brokerage: faster case files, augmented client relations, compliance built in from the start. Real references in the sector. *(153)* |
| H1 | L'IA pour la banque, l'assurance et le courtage : conformité comprise | AI for banking, insurance and brokerage: compliance included |
| URL slug | /secteurs/banque-assurance-courtage | /industries/ai-for-financial-services |

## 4. Sections & content
Shared template: `src/app/secteurs/[slug]/page.tsx` · copy lives in `src/lib/secteurs.ts` (entry `banque-assurance-courtage`).

### 4.1 — Hero
- **Component:** `src/app/secteurs/[slug]/page.tsx` (inline hero)
- **Fields:** badge, titre (H1), intro (answer-first, 2–3 sentences), illustration alt
- **Current (FR):** Badge « Banque / Assurance / Courtage ». Intro: Dans la banque, l'assurance et le courtage, le temps se perd dans les dossiers…
- **Proposed (EN):**
  - **badge:** `Banking / Insurance / Brokerage`
  - **h1:** `AI for banking, insurance and brokerage: compliance included`
  - **intro (answer-first):** `In banking, insurance and brokerage, time is lost in the case file: documents to collect, data to enter, follow-ups, compliance to record. AI absorbs that file work to give time back to advice, with compliance designed into every system from the first workflow. Human validation stays on every decision, and every system is documented for your compliance team.`
  - **illustration alt:** `AI for banking, insurance and brokerage`
- **Rationale:** Regulated-financial discipline: leads with "compliance by design", keeps human validation on decisions, and points to documentation for the compliance team — no automated-decisioning over-claim. Angle (case-file processing) is distinct from every other page.

### 4.2 — Douleurs — « Ce que vous vivez en ce moment »
- **Component:** `src/app/secteurs/[slug]/page.tsx` + `secteurs.ts:douleurs[]`
- **Fields:** douleurs[] — 4 pain bullets, written in the prospect's voice
- **Current (FR):** « Vos conseillers passent plus de temps sur les dossiers que devant les clients » …
- **Proposed (EN):**
  1. `Your advisers spend more time on case files than in front of clients.`
  2. `Follow-ups and missing documents drag out every signature.`
  3. `Compliance documentation ties up whole teams.`
  4. `Digital-first competitors process in hours what takes you days.`
- **Rationale:** Pains specific to advisory/brokerage: file admin vs client time, stalled signatures, compliance load, digital-competitor pressure. No overlap with other pages.

### 4.3 — Cas d'usage — « Ce que l'IA change concrètement chez vous »
- **Component:** `src/app/secteurs/[slug]/page.tsx` + `secteurs.ts:casUsage[]`
- **Fields:** casUsage[] — 4 cards {titre, description}
- **Current (FR):** Montage et complétude des dossiers · Relation client et relances · Conformité documentaire · Synthèses et pilotage
- **Proposed (EN):**
  - **Case-file assembly and completeness** — `Documents checked, information extracted and files pre-filled automatically: your teams review the file instead of keying it in. One brokerage client reported ROI within the first month `[to validate]`.`
  - **Client relations and follow-ups** — `Personalised follow-ups, answers to recurring requests and meeting prep: the adviser arrives informed, the client feels looked after.`
  - **Compliance documentation** — `Consistency checks, audit trails and documentation generated as you go, validated by your compliance team.`
  - **Summaries and steering** — `Production, portfolios and alerts summarised weekly for management, without manual exports.`
- **Rationale:** The "ROI within the first month" claim is from `secteurs.ts` (published FR) but not in `llms.txt`, so it's tagged `[to validate]`. "Validated by your compliance team" / "your teams review" keep the automation claims within regulated bounds.

### 4.4 — Témoignages — « Dans votre secteur, avec nous »
- **Component:** `src/app/secteurs/[slug]/page.tsx` + `site-config.ts:clientLogos` (testimonials)
- **Fields:** temoinClients[] — client names referencing clientLogos testimonials: Empruntis
- **Proposed (EN):** REUSE — render the published verbatim (Empruntis) by name from `site-config.ts:clientLogos`. Translate faithfully and tag `[to validate]` if an EN quote is needed; no new quotes.
- **Rationale:** Single-source testimonials; page selects the client only.

### 4.5 — Formations liées — « Les formations les plus demandées dans votre secteur »
- **Component:** `src/app/secteurs/[slug]/page.tsx` + `src/lib/formations.ts`
- **Fields:** formationsLiees[] — formation slugs: acculturation-ia, microsoft-copilot, go-to-market-sales
- **Proposed (EN):** Section label `The training most requested in your sector`. Cards: `AI foundations` (acculturation-ia), `Microsoft Copilot` (microsoft-copilot), `Go-to-market & sales with AI` (go-to-market-sales). Anchor labels proposed; card body owned by each formation page.
- **Rationale:** References sibling formation pages; no cloned copy.

### 4.6 — Related + CTA final
- **Component:** `src/components/shared/related-content.tsx`, `src/components/shared/cta-section.tsx`
- **Fields:** 3 related links (Transformation IA, Audit IA, blog comparatif) + CTA title/subtitle
- **Proposed (EN):**
  - **CTA title:** `Where does AI clear your compliance first?`
  - **CTA subtitle:** `30 minutes to map the high-gain, low-regulatory-risk use cases first — case-file assembly and internal summaries before client-facing work. Every step goes through your compliance. You leave with a plan whether you work with us or not.`
- **Rationale:** Sector-native CTA question (replaces the "What would AI change in your firm?" noun-swap that clashed verbatim with esn) — anchored on regulatory-risk sequencing.

## 5. FAQ
Rendered via `src/components/shared/faq-accordion.tsx` + FAQPage JSON-LD (`src/lib/faq-schema.ts`).

| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | L'IA est-elle compatible avec nos obligations réglementaires ? | Is AI compatible with our regulatory obligations? | Yes, if it's built in from the design stage: traceability of processing, human validation on decisions, siloed data. We document every system for your compliance team and DPO. Sector-specific rules (e.g. under GDPR and the EU AI Act) are scoped case by case `[to validate]`. *(Owner of the financial-regulation compliance Q; distinct from the health-data answers.)* |
| 2 | Avez-vous des références dans le secteur financier ? | Do you have references in financial services? | Yes: Empruntis in credit brokerage (its director's testimonial is on this page) and international banking players such as Emirates NBD. |
| 3 | Par où commencer dans une structure régulée ? | Where do you start in a regulated business? | With an audit that maps the high-gain, low-regulatory-risk use cases: case-file assembly and internal summaries first, client-facing work next. Every step goes through your compliance. *(Owner of the "where to start in a regulated business" Q.)* |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| See our full AI transformation approach | /ai-transformation | existing related link |
| Start with an AI audit | /audit-ia-entreprise | existing related link |
| AI foundations training | /formation-ia-entreprise/acculturation-ia | formations liées |
| Book a free diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Et dans votre entreprise, l'IA change quoi ? » → /contact. Proposed EN: **`Where does AI clear your compliance first?`** (button: `Book a free 30-min diagnostic`)

## 8. GEO block
- **Answer-first paragraph (EN, 2–3 sentences):** `AI Makers helps banks, insurers and brokers put AI into case-file processing, client follow-ups and compliance documentation — with compliance designed in, human validation kept on every decision, and each system documented for the compliance team and DPO. It sequences use cases by regulatory risk, starting with the low-risk internal work. Sector references (Empruntis, Emirates NBD) among 50+ companies and 200+ systems deployed.`
- **llms.txt entry (EN):** `[AI for Banking, Insurance & Brokerage](https://aimakers.fr/secteurs/banque-assurance-courtage) : how banks, insurers and brokers use AI for case files, client relations and compliance documentation — compliance by design, human validation on every decision.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| "ROI within the first month" (brokerage client) | src/lib/secteurs.ts (published FR) — not in llms.txt, `[to validate]` |
| GDPR / EU AI Act sector-specific rules | general regulatory context; specifics `[to validate]` |
| Compliance-by-design + human validation framing | regulated-sector discipline (Agent 2) |
| +50 companies / +200 systems deployed | public/llms.txt (canonical) |
| Client testimonial (Empruntis) + Emirates NBD reference | src/lib/site-config.ts clientLogos + src/lib/secteurs.ts (published) |

## Reconciliation applied
Applied from `seo-audit-report/secteurs--banque-assurance-courtage.md` + `ai-slop-audit-report/secteurs--banque-assurance-courtage.md` + both `_cross-page-findings.md`.

- **Double brand suffix (§2a):** stripped manual `| AI Makers` from Title — now `AI for Banking, Insurance & Brokers`, renders 47 chars.
- **Hero "X, not Y" de-stack (slop §1, inflating):** flattened "compliance designed in from the start, not bolted on after" to the plain positive "compliance designed into every system from the first workflow."
- **Hero verb "absorbs" (slop, shared with hotellerie) — KEPT HERE:** banque keeps "AI absorbs that file work"; the hotellerie instance was varied instead.
- **"…instead of typing" (slop, shared with tpe-pme) — VARIED HERE:** "your teams review instead of typing" → "your teams review the file instead of keying it in"; tpe-pme keeps the original.
- **CTA-title noun-swap (slop §3.3, "your firm" clashed with esn):** replaced "What would AI change in your firm?" with the sector-native "Where does AI clear your compliance first?"
- **Data-safety fact — ALREADY sector-specific, KEPT:** FAQ Q1 already anchors on EU AI Act + DPO + traceability + human validation (no generic "data never used to train the models" boilerplate present) — no replacement needed.
- **Kept (PROTECT):** compliance-by-design + human-validation framing; the `[to validate]`-tagged "ROI within the first month" (NOT stripped, and corroborated by the published Empruntis verbatim); case-file/brokerage-native use cases; Emirates NBD as name-only reference (logo-only, correctly no quote); FAQ Q1/Q3 ownership; canonical +50/+200 figures; verified testimonial (Empruntis).
- **Left to engineering:** `/industries/` vs `/secteurs/` slug (§8 GEO cites live `/secteurs/…`); FR template chrome i18n; `<html lang>`; working "ai for insurance brokers" (KD5) into body copy. Meta 153 chars — under ceiling.

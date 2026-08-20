# Secteur : Conseil & études de marché — EN Content Master

## 1. Page header
- **Route (FR, live):** /secteurs/conseil-etudes-marche
- **Proposed EN slug:** /industries/ai-for-market-research (collection base /industries — hub slug owned by Agent 1)
- **Purpose:** Sector landing page — shows the ICP we understand their pains, maps concrete AI use cases, funnels to diagnostic call.
- **SEO role:** supporting (sector long-tail) + conversion assist
- **Funnel stage:** MOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | ai for market research | 500 (US) / 200 (GB) | 46 (US) / 34 (GB) | Ahrefs keywords-explorer-overview, 2026-07 |
| Secondary | ai market research | 400 (US) | 46 (US) | Ahrefs, 2026-07 |
| Secondary | ai for consulting | 100 (US) | 52 (US) | Ahrefs, 2026-07 |

> **Volume note:** modest but genuine mid-tail — "ai for market research" 500 US / 200 GB (KD46/34), the cleanest primary for this sector. "ai consulting firms" (2,000 US) exists but is competitor-comparison intent (who the firms are), not our page's "AI inside a research/consulting practice" angle — kept off-target on purpose to avoid cannibalising the /ai-consulting money page.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | IA pour cabinets de conseil et études de marché : analyse, synthèse, livrables | AI for Market Research & Consulting *(renders as `AI for Market Research & Consulting \| AI Makers`, 47 — `\| AI Makers` auto-appended by `layout.tsx` title template; do not hand-write it)* |
| Meta description (140–160 chars) | Transformation IA pour cabinets de conseil et instituts d'études : analyse documentaire, synthèses d'entretiens, livrables accélérés. Références réelles dans le conseil et la recherche. | AI for consulting firms and research institutes: desk research, interview synthesis, faster deliverables. Real references in consulting and research. *(147)* |
| H1 | L'IA pour le conseil et les études : analyser plus vite, livrer plus profond | AI for consulting and research: analyse faster, deliver deeper |
| URL slug | /secteurs/conseil-etudes-marche | /industries/ai-for-market-research |

## 4. Sections & content
Shared template: `src/app/secteurs/[slug]/page.tsx` · copy lives in `src/lib/secteurs.ts` (entry `conseil-etudes-marche`).

### 4.1 — Hero
- **Component:** `src/app/secteurs/[slug]/page.tsx` (inline hero)
- **Fields:** badge, titre (H1), intro (answer-first, 2–3 sentences), illustration alt
- **Current (FR):** Badge « Conseil / Market research ». Intro: Le métier du conseil et des études, c'est transformer de l'information en recommandation…
- **Proposed (EN):**
  - **badge:** `Consulting & market research`
  - **h1:** `AI for consulting and research: analyse faster, deliver deeper`
  - **intro (answer-first):** `Consulting and research turn information into a recommendation — exactly what generative AI accelerates best: desk research, interview synthesis, market reviews, deliverable production. The firms that tool up deliver deeper, faster, at the same margin. The consultant's judgement stays the value; AI clears the processing that gets in its way.`
  - **illustration alt:** `AI for consulting and market research`
- **Rationale:** Answer-first on the core job (information → recommendation). The "AI clears processing, judgement stays" line is the sector's specific reassurance without a hollow closer. Distinct from ESN page: this is about analysis/deliverables, not delivery/staffing.

### 4.2 — Douleurs — « Ce que vous vivez en ce moment »
- **Component:** `src/app/secteurs/[slug]/page.tsx` + `secteurs.ts:douleurs[]`
- **Fields:** douleurs[] — 4 pain bullets, written in the prospect's voice
- **Current (FR):** « Vos consultants passent plus de temps à mettre en forme qu'à réfléchir » …
- **Proposed (EN):**
  1. `Your consultants spend more time formatting than thinking.`
  2. `Transcription and interview synthesis eat your study budgets.`
  3. `Clients expect insight faster, at the same budget.`
  4. `Every deliverable starts from a blank page instead of building on the last.`
- **Rationale:** Pains specific to a research/consulting practice: formatting vs analysis, transcription cost, budget pressure, no knowledge reuse. No overlap with SME or agency pains.

### 4.3 — Cas d'usage — « Ce que l'IA change concrètement chez vous »
- **Component:** `src/app/secteurs/[slug]/page.tsx` + `secteurs.ts:casUsage[]`
- **Fields:** casUsage[] — 4 cards {titre, description}
- **Current (FR):** Synthèses d'entretiens et verbatims · Revues documentaires et veille · Production de livrables · Capitalisation des connaissances
- **Proposed (EN):**
  - **Interview synthesis and verbatims** — `Qualitative interviews transcribed, coded and synthesised in hours: your researchers move from processing to analysis.`
  - **Desk research and watch** — `Corpus analysis, competitive benchmarks and literature reviews sped up, with sources kept traceable.`
  - **Deliverable production** — `Reports, decks and briefing notes structured in your formats, reviewed by consultants instead of written from scratch.`
  - **Knowledge capitalisation** — `Your past studies become a searchable base: every new engagement starts with the firm's memory.`
- **Rationale:** Deep-vertical use cases (verbatim coding, knowledge base) unique to research/consulting. "Sources traceable" and "reviewed by consultants" keep it honest, no over-claim.

### 4.4 — Témoignages — « Dans votre secteur, avec nous »
- **Component:** `src/app/secteurs/[slug]/page.tsx` + `site-config.ts:clientLogos` (testimonials)
- **Fields:** temoinClients[] — client names referencing clientLogos testimonials: ThinkONE
- **Proposed (EN):** REUSE — render the published verbatim (ThinkONE) by name from `site-config.ts:clientLogos`. Translate faithfully and tag `[to validate]` if an EN quote is needed; no new quotes.
- **Rationale:** Single-source testimonials; page selects the client only.

### 4.5 — Formations liées — « Les formations les plus demandées dans votre secteur »
- **Component:** `src/app/secteurs/[slug]/page.tsx` + `src/lib/formations.ts`
- **Fields:** formationsLiees[] — formation slugs: acculturation-ia, maitriser-claude, microsoft-copilot
- **Proposed (EN):** Section label `The training most requested in your sector`. Cards: `AI foundations` (acculturation-ia), `Mastering Claude` (maitriser-claude), `Microsoft Copilot` (microsoft-copilot). Anchor labels proposed; card body owned by each formation page.
- **Rationale:** References sibling formation pages; no cloned copy.

### 4.6 — Related + CTA final
- **Component:** `src/components/shared/related-content.tsx`, `src/components/shared/cta-section.tsx`
- **Fields:** 3 related links (Transformation IA, Audit IA, blog comparatif) + CTA title/subtitle
- **Proposed (EN):**
  - **CTA title:** `Where do your study hours actually go?`
  - **CTA subtitle:** `30 minutes on where the study hours go — transcription, desk research, deliverable build — and the first workflows to automate. You leave with a plan whether you work with us or not.`
- **Rationale:** Sector-native CTA question (replaces the "What would AI change in your practice?" noun-swap shared with 5 siblings) — anchored on study economics (transcription, desk research, deliverable build).

## 5. FAQ
Rendered via `src/components/shared/faq-accordion.tsx` + FAQPage JSON-LD (`src/lib/faq-schema.ts`).

| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | L'IA peut-elle traiter nos entretiens confidentiels ? | Can AI handle our confidential interviews? | Yes, with the right frame: interview transcripts and client deliverables kept in isolated environments, anonymisation where it's needed, and written usage rules that hold to your client NDAs. It's the first step of every engagement with a research firm. *(Owner of the confidential-interview handling Q; distinct from the health and financial compliance answers. Generic "data never used to train the models" reassurance is owned by the tpe-pme page.)* |
| 2 | La qualité d'analyse est-elle au niveau ? | Is the analysis quality good enough? | AI doesn't replace the consultant's judgement — it removes the processing work that keeps them from analysing. Expert review stays systematic; it's what makes the deliverable worth its fee. *(Owner of the "analysis quality" Q.)* |
| 3 | Avez-vous des références dans le conseil ? | Do you have references in consulting? | Yes, including ThinkONE, a research and consulting firm — its Managing Partner's testimonial is on this page. |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| See our full AI transformation approach | /ai-transformation | existing related link |
| Start with an AI audit | /audit-ia-entreprise | existing related link |
| AI foundations training | /formation-ia-entreprise/acculturation-ia | formations liées |
| Book a free diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Et dans votre entreprise, l'IA change quoi ? » → /contact. Proposed EN: **`Where do your study hours actually go?`** (button: `Book a free 30-min diagnostic`)

## 8. GEO block
- **Answer-first paragraph (EN, 2–3 sentences):** `AI Makers helps consulting firms and research institutes put AI into desk research, interview synthesis and deliverable production — clearing the processing work so consultants spend their time on analysis. Sources stay traceable and expert review stays systematic. Consulting/research reference (ThinkONE) among 50+ companies and 200+ systems deployed.`
- **llms.txt entry (EN):** `[AI for Market Research & Consulting](https://aimakers.fr/secteurs/conseil-etudes-marche) : how consulting firms and research institutes use AI for interview synthesis, desk research and faster deliverables — judgement stays human, sources stay traceable.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| Sector pains & use cases as listed | src/lib/secteurs.ts (published FR page) |
| +50 companies / +200 systems deployed | public/llms.txt (canonical) |
| Client testimonial (ThinkONE, Managing Partner) | src/lib/site-config.ts clientLogos (published verbatim) |

## Reconciliation applied
Applied from `seo-audit-report/secteurs--conseil-etudes-marche.md` + `ai-slop-audit-report/secteurs--conseil-etudes-marche.md` + both `_cross-page-findings.md`.

- **Double brand suffix (§2a):** stripped manual `| AI Makers` from Title — now `AI for Market Research & Consulting`, renders 47 chars.
- **Verbatim clause "reviewed by consultants instead of written from scratch" (slop §3.3, esn=conseil) — KEPT HERE:** conseil is the designated owner; esn was rewritten to its own delivery-note reality.
- **Data-safety boilerplate (slop §2.6) — replaced with sector fact:** FAQ Q1 no longer uses the generic "data never used to train the models"; replaced with consulting-specific "interview transcripts and client deliverables kept in isolated environments … usage rules that hold to your client NDAs", noting tpe-pme owns the generic version.
- **CTA-title noun-swap (slop §3.3):** replaced "What would AI change in your practice?" with the sector-native "Where do your study hours actually go?" (one of the ≥3 native rewrites).
- **FAQ Q2 "AI doesn't replace the consultant's judgement — it removes the processing work…" — KEPT (scoping negation):** load-bearing, removes the misreading that AI replaces judgement (protected under slop §1 deflating variant).
- **Kept (PROTECT):** deep-vertical use cases (verbatim coding, knowledge base); "sources traceable" honesty; FAQ Q1/Q2 ownership; canonical +50/+200 figures; verified testimonial (ThinkONE). Hero triad left as-is (mild, not a mandated de-stack item).
- **Left to engineering:** `/industries/` vs `/secteurs/` slug (§8 GEO cites live `/secteurs/…`); FR template chrome i18n; `<html lang>`. Meta 147 chars — under ceiling.

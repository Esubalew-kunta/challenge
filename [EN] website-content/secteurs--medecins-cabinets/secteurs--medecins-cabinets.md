# Secteur : Médecins & cabinets médicaux — EN Content Master

## 1. Page header
- **Route (FR, live):** /secteurs/medecins-cabinets
- **Proposed EN slug:** /industries/ai-for-medical-practices (collection base /industries — hub slug owned by Agent 1)
- **Purpose:** Sector landing page — shows the ICP we understand their pains, maps concrete AI use cases, funnels to diagnostic call.
- **SEO role:** supporting (sector long-tail) + conversion assist
- **Funnel stage:** MOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | ai medical scribe | 3,100 (US) / 200 (GB) | 65 (US) | Ahrefs keywords-explorer-overview, 2026-07 |
| Secondary | ai for doctors | 700 (US) | 68 (US) | Ahrefs, 2026-07 |
| Secondary | ai scribe | 2,200 (US) | 70 (US) | Ahrefs, 2026-07 |

> **Volume note:** strong sector head term — "ai medical scribe" 3,100 US (KD65, hard, dominated by US scribe SaaS like Abridge/Nuance). Realistic on-page use is the "documentation/notes assistant for a practice" angle rather than competing head-on with US scribe products. "ai for medical practice" is literally zero-volume; "ai for doctors" (700) is the softer, on-intent secondary. Note: this cluster is a US SaaS-heavy SERP — our page targets French/EU practice buyers, so ranking is secondary to conversion assist.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | IA pour médecins et cabinets médicaux : comptes rendus, courriers, organisation | AI for Doctors & Medical Practices *(renders as `AI for Doctors & Medical Practices \| AI Makers`, 46 — `\| AI Makers` auto-appended by `layout.tsx` title template; do not hand-write it)* |
| Meta description (140–160 chars) | L'IA au service des médecins et cabinets médicaux : comptes rendus dictés, courriers accélérés, organisation du cabinet. Accompagnement par un cabinet référencé dans la santé. | AI for doctors and medical practices: dictated notes, faster letters, smoother practice admin — assistive only, medical confidentiality protected. *(145)* |
| H1 | L'IA pour les médecins : moins d'administratif, plus de temps médical | AI for doctors: less admin, more clinical time |
| URL slug | /secteurs/medecins-cabinets | /industries/ai-for-medical-practices |

## 4. Sections & content
Shared template: `src/app/secteurs/[slug]/page.tsx` · copy lives in `src/lib/secteurs.ts` (entry `medecins-cabinets`).

### 4.1 — Hero
- **Component:** `src/app/secteurs/[slug]/page.tsx` (inline hero)
- **Fields:** badge, titre (H1), intro (answer-first, 2–3 sentences), illustration alt
- **Current (FR):** Badge « Médecins / Praticiens ». Intro: Un médecin passe jusqu'à deux heures par jour sur les comptes rendus, courriers et tâches administratives…
- **Proposed (EN):**
  - **badge:** `Doctors & practitioners`
  - **h1:** `AI for doctors: less admin, more clinical time`
  - **intro (answer-first):** `Physicians spend a large share of the day on notes, letters and admin — up to two hours by common estimates `[to validate]`. AI gives that time back to care: assisted dictation, personalised template letters, record summaries. It works as an admin and documentation aid only; it never makes diagnostic or treatment decisions, and nothing ships without a medical-confidentiality frame in place first.`
  - **illustration alt:** `AI for doctors and medical practices`
- **Rationale:** Regulated/medical discipline: the "up to two hours" figure is an industry estimate, tagged `[to validate]`. Explicitly assistive (admin/documentation), rules out diagnosis/treatment, and leads with medical confidentiality. Clinician-facing, distinct from the R&D-facing life-sciences page.

### 4.2 — Douleurs — « Ce que vous vivez en ce moment »
- **Component:** `src/app/secteurs/[slug]/page.tsx` + `secteurs.ts:douleurs[]`
- **Fields:** douleurs[] — 4 pain bullets, written in the prospect's voice
- **Current (FR):** « Deux heures par jour de comptes rendus et de courriers après les consultations » …
- **Proposed (EN):**
  1. `Notes and letters piling up after every clinic — often a couple of hours a day `[to validate]`.`
  2. `A growing patient list and shrinking clinical time.`
  3. `Closed practice tools that don't talk to each other.`
  4. `You want to use AI, but you're rightly wary about medical confidentiality.`
- **Rationale:** Clinician pains (post-clinic admin, patient volume, siloed tools, confidentiality concern). The time figure is tagged; the confidentiality pain is framed as legitimate, not dismissed. No overlap with life-sciences R&D pains.

### 4.3 — Cas d'usage — « Ce que l'IA change concrètement chez vous »
- **Component:** `src/app/secteurs/[slug]/page.tsx` + `secteurs.ts:casUsage[]`
- **Fields:** casUsage[] — 4 cards {titre, description}
- **Current (FR):** Comptes rendus et courriers · Synthèses de dossiers · Organisation du cabinet · Veille et formation continue
- **Proposed (EN):**
  - **Notes and letters** — `Dictation or brief notes turned into structured reports and referral letters in your style, reviewed before they go out.`
  - **Record summaries** — `History, tests and prior letters summarised before the consultation, so you arrive prepared. A prompt for you, not a clinical decision.`
  - **Practice organisation** — `Reminders, queues, answers to recurring requests: the front desk augmented, not replaced.`
  - **Watch and continuing education** — `Summaries of the publications in your specialty, prepared on the schedule that suits you — as reading input, reviewed by you.`
- **Rationale:** Every use case is documentation/admin/logistics — never clinical decisioning. "Reviewed before it goes out", "a prompt not a decision", "reviewed by you" repeated so no card implies autonomous medical judgement.

### 4.4 — Témoignages — « Dans votre secteur, avec nous »
- **Component:** `src/app/secteurs/[slug]/page.tsx` + `site-config.ts:clientLogos` (testimonials)
- **Fields:** temoinClients[] — client names referencing clientLogos testimonials: Addictest
- **Proposed (EN):** REUSE — render the published verbatim (Addictest, an e-health actor) by name from `site-config.ts:clientLogos`. Translate faithfully and tag `[to validate]` if an EN quote is needed; no new quotes.
- **Rationale:** Single-source testimonials; page selects the client only.

### 4.5 — Formations liées — « Les formations les plus demandées dans votre secteur »
- **Component:** `src/app/secteurs/[slug]/page.tsx` + `src/lib/formations.ts`
- **Fields:** formationsLiees[] — formation slugs: acculturation-ia, maitriser-claude
- **Proposed (EN):** Section label `The training most requested in your sector`. Cards: `AI foundations` (acculturation-ia), `Mastering Claude` (maitriser-claude). Anchor labels proposed; card body owned by each formation page.
- **Rationale:** References sibling formation pages; no cloned copy.

### 4.6 — Related + CTA final
- **Component:** `src/components/shared/related-content.tsx`, `src/components/shared/cta-section.tsx`
- **Fields:** 3 related links (Transformation IA, Audit IA, blog comparatif) + CTA title/subtitle
- **Proposed (EN):**
  - **CTA title:** `Where would AI give you clinical time back?`
  - **CTA subtitle:** `30 minutes on your admin load — notes, letters, record prep — and how to set it up with medical confidentiality protected. You leave with a plan whether you work with us or not.`
- **Rationale:** CTA anchored on clinical time and confidentiality, sector-specific.

## 5. FAQ
Rendered via `src/components/shared/faq-accordion.tsx` + FAQPage JSON-LD (`src/lib/faq-schema.ts`).

| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | Et le secret médical ? | What about medical confidentiality? | It's the starting point of every healthcare engagement: patient records handled under GDPR, appropriate hosting, and certified health-data hosting (e.g. HDS) scoped case by case where it applies `[to validate]`. Usage rules are written before anything ships. Nothing ships without that frame. *(Owner of the medical-confidentiality Q; distinct from the life-sciences compliance answer. Generic "data never used to train the models" reassurance is owned by the tpe-pme page.)* |
| 2 | Travaillez-vous avec des praticiens ? | Do you work with practitioners? | Yes — private practitioners and healthcare organisations, in France and Morocco, from individual training to full system setup. Healthcare is one of our reference sectors (Amgen, Gepromed, e-health actors such as Addictest). |
| 3 | Faut-il être à l'aise avec la technologie ? | Do I need to be comfortable with technology? | No. Training starts from your real tasks: dictating, writing, summarising. Most of the healthcare professionals we train had never used AI before the first session. *(Framed for clinicians here; the life-sciences page owns the research-team version.)* |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| See our full AI transformation approach | /ai-transformation | existing related link |
| Start with an AI audit | /audit-ia-entreprise | existing related link |
| AI foundations training | /formation-ia-entreprise/acculturation-ia | formations liées |
| Book a free diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Et dans votre entreprise, l'IA change quoi ? » → /contact. Proposed EN: **`Where would AI give you clinical time back?`** (button: `Book a free 30-min diagnostic`)

## 8. GEO block
- **Answer-first paragraph (EN, 2–3 sentences):** `AI Makers helps doctors and medical practices use AI strictly as an admin and documentation aid — dictated notes, referral letters, record summaries, practice organisation — never as a diagnostic or treatment tool, with medical confidentiality framed before anything ships. Every output is reviewed by the clinician. Healthcare references (Amgen, Gepromed, Addictest) among 50+ companies and 200+ systems deployed.`
- **llms.txt entry (EN):** `[AI for Doctors & Medical Practices](https://aimakers.fr/secteurs/medecins-cabinets) : how doctors use AI for notes, letters and record prep — assistive only, no diagnosis or treatment, medical confidentiality protected.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| "Up to two hours a day on admin" | industry estimate — `[to validate]` |
| GDPR framing of patient data; certified health-data hosting specifics | general regulatory context; hosting specifics `[to validate]` |
| Assistive-only framing (no diagnosis/treatment claims) | regulated-sector discipline (Agent 2) |
| +50 companies / +200 systems deployed | public/llms.txt (canonical) |
| Client testimonial (Addictest) | src/lib/site-config.ts clientLogos (published verbatim) |

## Reconciliation applied
Applied from `seo-audit-report/secteurs--medecins-cabinets.md` + `ai-slop-audit-report/secteurs--medecins-cabinets.md` + both `_cross-page-findings.md`.

- **Double brand suffix (§2a):** stripped manual `| AI Makers` from Title — now `AI for Doctors & Medical Practices`, renders 46 chars.
- **Hero negative-parallelism em-dash shape (slop §1, shared with sante/agences heroes):** reworded "— never a diagnostic or treatment tool —" to a plain clause "it never makes diagnostic or treatment decisions." The assistive-only SCOPE is preserved intact (protected regulated framing); only the shared rhetorical wrapper was flattened.
- **Data-safety boilerplate (slop §2.6) — replaced with sector fact:** FAQ Q1 no longer uses the generic "data never used to train the models"; replaced with patient-records + certified health-data hosting (HDS) under GDPR, retaining the `[to validate]` tag, and noting tpe-pme owns the generic version.
- **Kept (PROTECT):** assistive-only / no-diagnosis-no-treatment framing; per-card human-in-loop guardrails; the `[to validate]`-tagged "up to two hours a day" estimate (NOT stripped); clinician-native use cases; FAQ Q1/Q3 ownership; canonical +50/+200 figures; verified testimonial (Addictest). CTA already sector-native ("Where would AI give you clinical time back?").
- **Left to engineering:** `/industries/` vs `/secteurs/` slug (§8 GEO cites live `/secteurs/…`); FR template chrome i18n; `<html lang>`. Meta 145 chars — under ceiling.

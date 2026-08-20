# IA au Maroc (/ia-maroc) — EN Content Master

## 1. Page header
- **Route (FR, live):** /ia-maroc
- **Proposed EN slug:** /ai-morocco
- **Purpose:** Morocco market page: local entity, Rabat office, loi 09-08 compliance.
- **SEO role:** geo-pillar (MA market) — but near-zero EN search demand; primarily an entity/positioning + GEO-citation asset for the Morocco market.
- **Funnel stage:** MOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | ai in morocco | 0 (US) / n/a (GB) | n/a | Ahrefs keywords-explorer-overview, 2026-07 |
| Secondary | ai morocco | 0 (US) | n/a | Ahrefs, 2026-07 |
| Reference | ai consulting (cluster head, served on /ai-consulting) | 8,400 (US) | 46 | Ahrefs, 2026-07 |

> **Keyword decision — minimal EN keyword pressure.** Both "ai in morocco" and "ai morocco" return 0 US volume in Ahrefs. The Morocco audience searches in French/Arabic or navigates directly; there is no English head term to chase here. So this page is NOT built for an EN keyword — it is an **entity + local-legitimacy page** (Moroccan-law company, Rabat office) and a **GEO-citation asset**: when someone asks an AI engine "is there an AI consultancy based in Morocco / in Rabat", the answer-first block and llms.txt entry are what get cited. Ranking value comes via the brand + the /ai-consulting cluster, not a MA-specific term. Flagged to Agent 3 as a deliberately low-keyword geo page.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | IA Maroc : cabinet de transformation IA à Rabat | AI Consultancy in Morocco — Rabat |
| Meta description (140–160 chars) | AI Makers est un cabinet de transformation IA avec une société de droit marocain et un bureau à Rabat Agdal… | AI Makers is an AI consultancy with a Moroccan-law company and a Rabat office. We audit, ship AI systems to production and train teams — under law 09-08 and GDPR. |
| H1 | Votre partenaire IA au Maroc. Pas un cabinet français qui parle du Maroc. | Your AI partner in Morocco. Not a Paris firm that talks about Morocco. |
| URL slug | /ia-maroc | /ai-morocco |

## 4. Sections & content
Copy: inline `src/app/ia-maroc/page.tsx` (385 lines).

### 4.1 — Hero
- **Component:** `page.tsx`
- **Fields:** badge, H1, intro, CTA
- **Current (FR):** Local-legitimacy positioning.
- **Proposed (EN):**
  - **badge:** `Morocco`
  - **H1:** `Your AI partner in Morocco. Not a Paris firm that talks about Morocco.`
  - **intro:** `AI Makers is an AI consultancy with a Moroccan-law company and an office in Rabat. We map your processes, put AI systems into production, and train your teams — in French, across the Kingdom. The same engineer who runs the audit builds the systems and trains the people who keep them.`
  - **CTA:** `Book a free diagnostic`
- **Rationale:** First two sentences establish the entity fact (Moroccan-law company + Rabat office) — the whole differentiation vs. remote-coverage firms, and the answer an AI engine needs. "Not a Paris firm that talks about Morocco" is an assertion, not a hollow line; it survives the deletable-line test.

### 4.2 — "The Kingdom isn't waiting. Neither are your competitors."
- **Component:** `page.tsx`
- **Fields:** cards[3]: national momentum, competitive pressure, cost of waiting
- **Current (FR):** Market-urgency section.
- **Proposed (EN):**
  - **section H2:** `Morocco isn't waiting. Neither are your competitors.`
  - **Card 1 — National momentum:** `Morocco's national digitalisation strategy is pushing the whole economy to modernise its processes. AI has moved off the watch-list: boards now track it as a live project.`
  - **Card 2 — Real competitive pressure:** `Banks, telecoms, industry — the Kingdom's most competitive sectors are already investing in AI. In those markets the gap widens between the organisations that structure their transformation and the ones still waiting.`
  - **Card 3 — The cost of waiting:** `Every month without automated processes is team time burned on repetitive work while competitors reinvest theirs. The only open question is the order you tackle it in, and who with.`
- **Rationale:** National-strategy and sector claims are kept at the level the FR page asserts (no invented figures). Concrete sectors named (banks, telecoms, industry) instead of generic "many companies".

### 4.3 — "A Moroccan company, an office in Agdal. Not a mailbox."
- **Component:** `page.tsx`
- **Fields:** entity/office copy
- **Current (FR):** « Pas une boîte aux lettres. »
- **Proposed (EN):**
  - **badge:** `A real presence`
  - **H2:** `A Moroccan company and a staffed office in Rabat Agdal.`
  - **para 1:** `Plenty of European firms "cover" Morocco from Paris. We did the opposite: a Moroccan-law company, an office at 46 Avenue Okba in Rabat Agdal, and a local team that works day to day with our Paris team.`
  - **para 2:** `In practice that changes everything: local contracting and invoicing, on-site work without international logistics, and a read on the Moroccan market you can't improvise from abroad. Our markets — France and Morocco — share one method, but each client is served from the right entity.`
- **Rationale:** Keeps the concrete address (46 Av Okba, Agdal) from llms.txt. Dropped the FR page's "Belgium, Luxembourg" list to the canonical two markets in llms.txt (France + Morocco) to avoid asserting markets not in the canonical source — flagged below.

### 4.4 — "Law 09-08 on the Morocco side. GDPR on the Europe side."
- **Component:** `page.tsx`
- **Fields:** dual-compliance copy — 3 cards
- **Current (FR):** Data-law coverage both sides.
- **Proposed (EN):**
  - **badge:** `Data compliance`
  - **H2:** `Law 09-08 on the Morocco side. GDPR on the Europe side.`
  - **intro:** `We scope the legal frame first, because an AI system that ignores it becomes a liability. Compliance is built in from the scoping stage.`
  - **Card 1 — Moroccan clients:** `Personal data is processed under Morocco's Law 09-08 and the requirements of the CNDP, the national data-protection authority.`
  - **Card 2 — European clients:** `GDPR compliance for any engagement involving the data of EU residents.`
  - **Card 3 — Hosting:** `Data hosting is matched to the client's choice and constraints, and fixed at the start of the engagement.`
- **Rationale:** Law 09-08 (2009) is Morocco's personal-data-protection statute, enforced by the CNDP — stated at the level the FR page asserts. Deeper obligations (registration, cross-border transfer rules) are not detailed to avoid legal over-claim; see `[to validate]` in §9.

### 4.5 — "Three phases. The same method as in Europe."
- **Component:** `page.tsx`
- **Fields:** 3-phase method recap + inline link to /ai-transformation
- **Current (FR):** Method parity.
- **Proposed (EN):**
  - **badge:** `The method`
  - **H2:** `Three phases. The same method as in Europe.`
  - **intro:** `Audit, build, scale — with four guarantees written into the contract.`
  - **01 — Audit:** `We map your processes, score your AI maturity, and interview your teams. You leave with a costed roadmap and at least 3 high-ROI use cases — or the audit is refunded.`
  - **02 — Build:** `A dedicated AI engineer, onboarded on your sector two weeks before kick-off, ships your first systems to production and trains your teams every week.`
  - **03 — Scale:** `Your people become autonomous AI champions. The systems, playbooks, and documentation are yours in full — zero dependency.`
  - **inline link:** `See the full offer` → /ai-transformation
- **Rationale:** Method is owned by /offre and /ai-transformation; this is the short reference version. "Audit refunded if fewer than 3 use cases" matches the FR page and the guarantee model.

### 4.6 — FAQ
- **Component:** `shared/faq-accordion.tsx`
- **Fields:** 5 Q/A — see §5
- **Current (FR):** MA-specific logistics.
- **Proposed (EN):** _See §5._
- **Rationale:** Logistics questions a Moroccan buyer actually asks; answer-first, one fact each.

### 4.7 — CTA final
- **Component:** `cta-section.tsx`
- **Fields:** title, subtitle, CTA
- **Current (FR):** « Diagnostic IA gratuit avec l'équipe de Rabat ».
- **Proposed (EN):**
  - **title:** `A free AI diagnostic with the Rabat team`
  - **subtitle:** `30 minutes to review your workflows and pin down your first AI use cases. In French, on-site or remote.`
  - **CTA:** `Book my free diagnostic` → /contact
- **Rationale:** Keeps the Rabat-team specificity — the local hook that distinguishes this CTA from the generic site CTA.

## 5. FAQ
FAQ slot: YES — `src/components/shared/faq-accordion.tsx` + FAQPage JSON-LD.

| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | Intervenez-vous partout au Maroc ? | Do you work across all of Morocco? | Yes. Our office is in Rabat (Agdal), and we work throughout the Kingdom — Casablanca, Tangier, Marrakech and beyond — on-site or remote depending on the engagement. All our work is delivered in French. |
| 2 | Facturez-vous depuis le Maroc ? | Can you invoice from Morocco? | Yes. AI Makers has a Moroccan-law company (SARL). Moroccan clients contract with our local entity and are invoiced in Morocco, under Moroccan legal and tax rules. |
| 3 | Vos formations sont-elles disponibles au Maroc ? | Are your training programmes available in Morocco? | Yes. The training we deliver to our European clients is available in Morocco, run in French, on-site or remote. The Scale phase of our method — the internal AI-champions programme — applies the same way. |
| 4 | Travaillez-vous avec le secteur public ? | Do you work with the public sector? | We work with both private and public organisations. Every engagement starts with the same diagnostic: process mapping, high-ROI use cases, then a roadmap adapted to the organisation's constraints. |
| 5 | Comment gérez-vous la conformité des données ? | How do you handle data compliance? | For Moroccan clients we work under Law 09-08 and the requirements of the CNDP. For European clients, under GDPR. Data hosting is matched to the client's choice and fixed at the scoping stage. |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| A Moroccan case: ThinkOne | /etudes-de-cas/thinkone | MA case (existing) |
| A Moroccan case: Addictest | /etudes-de-cas/addictest | MA case (existing) |
| See the full AI PARTNER offer | /ai-transformation | method owner |
| Book a free diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Diagnostic IA gratuit avec l'équipe de Rabat » → /contact. Proposed EN: **`Book my free diagnostic`** (section title: `A free AI diagnostic with the Rabat team`)

## 8. GEO block
- **Answer-first paragraph (EN, cite-able):** `AI Makers is an AI consultancy operating in Morocco through a Moroccan-law company (SARL) with an office at 46 Avenue Okba, Agdal, Rabat. It audits company processes, deploys AI agents and automations into production, and trains teams to autonomy — in French, across the Kingdom — under Morocco's Law 09-08 (CNDP) for Moroccan clients and GDPR for European ones. Founded by Othmane Halim, with a second office in Paris (75008).`
- **llms.txt entry (EN):** `[AI in Morocco](https://aimakers.fr/ai-morocco) : AI Makers' work with Moroccan companies from its Rabat office — audit, systems in production, and training, under law 09-08 and GDPR.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| Moroccan-law company (SARL), office 46 Av Okba, Agdal, Rabat | public/llms.txt + page copy |
| Founder Othmane Halim; Paris 75008 office | public/llms.txt (canonical) |
| Law 09-08 + CNDP for MA; GDPR for EU | page copy — general framing safe; deeper obligations `[to validate legal accuracy]` |
| Audit refunded if < 3 high-ROI use cases; engineer onboarded 2 weeks pre-kickoff | page copy + guarantee model |
| Markets = France + Morocco | public/llms.txt. FR page also lists Belgium/Luxembourg — `[to validate]`, dropped to canonical two to avoid over-claim |
| "National digitalisation strategy", sector momentum (banks/telecoms/industry) | page copy — qualitative, no invented figures |

## Reconciliation applied
**Changed:**
- Title field: stripped the hand-written `| AI Makers` (and `*(48)*` note). Field is now `AI Consultancy in Morocco — Rabat` (33) → template renders `... Rabat | AI Makers` (~45 chars, single brand).
- Meta description: cut 209→~158 chars (the batch's worst overrun); front-loaded the entity + law 09-08 + GDPR payload so it survives the SERP cut.
- De-stacked the 4 stacked "X, not Y" negations to ONE: kept the H1 "Not a Paris firm that talks about Morocco" (core positioning); flattened the other three to positive assertions — §4.2 card 1 ("a live project, not a memo" → "boards now track it as a live project"), §4.3 H2 ("an office in Agdal. Not a mailbox." → "A Moroccan company and a staffed office in Rabat Agdal."), §4.4 intro ("a liability, not an asset" → "We scope the legal frame first, because an AI system that ignores it becomes a liability").
- llms.txt entry URL aligned to the page's own proposed slug (`/ia-maroc` → `/ai-morocco`) for internal consistency with the master header (matches how sibling masters cite their proposed EN slug). Still a proposal — final routing is an engineering decision.

**Deliberately kept:**
- H1 negation (the one retained), "We did the opposite" named-competitor stance, entity anchoring (SARL, 46 Avenue Okba Agdal), Law 09-08/CNDP + GDPR framing, audit-refund guarantee + zero-dependency (necessary compliance/guarantee consistency).
- `[to validate legal accuracy]` on deeper loi 09-08 obligations; the conservative France+Morocco market scope (FR "Belgium/Luxembourg" list stays dropped) with its `[to validate]` note.

**Owner decision:** deeper loi 09-08 obligations (CNDP registration, cross-border transfer) in scope or intentionally high-level (legal); confirm Belgium/Luxembourg service before adding to canonical sources.

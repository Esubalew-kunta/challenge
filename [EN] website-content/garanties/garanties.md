# Garanties (/garanties) — EN Content Master

## 1. Page header
- **Route (FR, live):** /garanties
- **Proposed EN slug:** /guarantees
- **Purpose:** Trust page detailing the 4 contractual guarantees (trigger / what you get / how to activate).
- **SEO role:** trust / conversion support
- **Funnel stage:** BOFU

## 2. Target keywords
> Low direct search intent — this is a brand-trust/conversion page, not a head-term page. No forced head term.

| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | (brand/trust page — no head term) | — | — | intent judgement |
| Secondary | ai consulting guarantee | negligible | — | Ahrefs (no meaningful volume) |
| Secondary | money-back guarantee ai audit | negligible | — | intent judgement |

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Nos 4 garanties contractuelles : zéro risque | Our 4 Written Guarantees |
| Meta description (140–160 chars) | Audit remboursé, impact sous 30 jours… | Audit refunded, impact in 30 days, champions with measurable results, full IP ownership: AI Makers' four guarantees are written into the contract. |
| H1 | Pourquoi on est les seuls à garantir nos résultats | Why we're the only ones who guarantee our results |
| URL slug | /garanties | /guarantees |

## 4. Sections & content

### 4.1 — Hero
- **Proposed (EN):**
  - Badge: `Zero risk`
  - H1: `Why we're the only ones who guarantee our results`
  - Intro: `Our offer is built around the guarantees, not the other way round. All four are written into the contract.`
  - CTA button: `Book my free diagnostic`
- **Rationale:** Direct translation, keeps the guarantee-led differentiation. No slop; asserts the claim plainly.

### 4.2 — "A guarantee is a consequence of the model" band
- **Proposed (EN):**
  - Kicker: `Why it's possible`
  - H2: `A guarantee isn't a marketing line. It's a consequence of the model.`
  - Body:
    - `A traditional agency spreads its consultants across ten accounts at once. Nobody knows your business in depth, quality depends on who's free that week, and results are unpredictable. You can't guarantee what you don't control.`
    - `Our model is built differently. Every client gets a dedicated AI engineer, onboarded two weeks before kick-off on their sector and their tools. And we take on a maximum of three new clients per month: onboarding capacity is physically limited, so the load stays under control.`
    - `When the load is controlled and the engineer knows the ground, results become predictable. And what's predictable can be written into a contract. That's the whole logic: the guarantees are the direct consequence of how we work.`
- **Rationale:** Faithful. Ties guarantees to the capacity model (co-owned with /capacity and homepage). Keeps the "3 new clients/month" and "2 weeks before kick-off" canonical framing.

### 4.3 — The 4 guarantees in detail
- **Fields per guarantee:** name, tagline, The trigger, What you get, How to activate
- **Section header:** H2 `The trigger, what you get, how to activate` · sub: `No hidden conditions. Here is each guarantee exactly as it appears in the contract, in plain language.`
- **Proposed (EN):**

  **01 — Audit Guarantee** · tagline: `No clear roadmap, no invoice.`
  - The trigger: `At the end of the audit, you don't have a clear roadmap with at least 3 high-ROI use cases, costed and prioritised.`
  - What you get: `You're refunded 100% of the audit fee. You keep every deliverable produced during the audit.`
  - How to activate: `One email is enough. No form, no justification to provide. The refund is triggered on receipt.`

  **02 — 30-Day Guarantee** · tagline: `Impact in the first month, or we continue free of charge.`
  - The trigger: `By day 30 of the engagement, no concrete impact is observed: no system in production, no measurable time recovered.`
  - What you get: `The engagement is extended free of charge until the impact is there. Same dedicated engineer, same pace, zero extra billing.`
  - How to activate: `You flag it by email to your engagement lead. We assess it together, on the deliverables, not on impressions.`

  **03 — Champions Guarantee** · tagline: `Every trained champion produces measurable impact.`
  - The trigger: `An employee trained in the Champions programme doesn't reach measurable impact on their own workflows.`
  - What you get: `30 days of extra support for that champion, at no charge, until the impact is demonstrated.`
  - How to activate: `An email to your engagement lead with the name of the champion concerned. Nothing else to justify.`

  **04 — Independence Guarantee** · tagline: `The day we leave, everything stays with you.`
  - The trigger: `It applies at all times: it's an ownership clause, active from day one, not a recourse clause.`
  - What you get: `Everything built for you (code, playbooks, documentation) belongs to you. No licence, no hidden subscription, no technical dependency on AI Makers.`
  - How to activate: `Nothing to activate. Intellectual property is transferred as the engagement runs, deliverable by deliverable.`
- **Rationale:** Every guarantee keeps its exact trigger AND its activation condition — a guarantee stated without its condition would mislead. Wording matches the FR contract copy 1:1.

### 4.4 — "What they cover. What they assume." (transparency table)
- **Section header:** H2 `What they cover. What they assume.` · sub: `An honest guarantee has honest conditions. Here they are, taken from our terms of sale.`
- **Proposed (EN) — table:**

  | Guarantee | What it covers | What it assumes |
  |---|---|---|
  | Audit Guarantee | A clear roadmap with at least 3 high-ROI use cases, or a full refund. | Your teams' availability for the interviews scheduled in the plan. |
  | 30-Day Guarantee | Concrete impact observed in the first month, or a free extension. | Access to the tools and data needed, granted from kick-off. |
  | Champions Guarantee | Measurable impact per trained champion, or 30 free days. | Active participation of the champions in the training sessions. |
  | Independence Guarantee | Full ownership of the code, playbooks and documentation. | No condition. It applies in all cases. |
  - Footnote: `The full contractual text is public: read our terms of sale.` (link /cgv — keep FR legal route)
- **Rationale:** The preconditions are load-bearing and must stay attached to each guarantee. Kept verbatim.

### 4.5 — FAQ — see §5

### 4.6 — CTA final
- **Proposed (EN):**
  - Title: `Book your diagnostic: the audit is guaranteed or refunded`
  - Subtitle: `30 minutes to analyse your workflows. If the audit that follows doesn't produce a clear roadmap with 3 high-ROI use cases, it costs you nothing.`
  - Button: `Book my free diagnostic` → /contact
- **Rationale:** Keeps the refund condition explicit in the CTA (not a hollow reassurance closer).

## 5. FAQ
FAQ slot: YES — `faq-accordion.tsx` + FAQPage JSON-LD.

| # | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|
| 1 | What if I change my mind mid-engagement? | You keep everything. The engagement advances by deliverables — systems in production, playbooks, documentation — and each one is yours the moment it's handed over. If you stop, nothing disappears and nothing stops working: that's exactly what the Independence Guarantee covers. |
| 2 | What if my teams don't play their part? | That's the one real risk, and we handle it from kick-off: the guarantees assume your teams' availability, access to tools, and active participation. In practice the client-side load stays light — the dedicated engineer does the heavy lifting. If a blocker appears, we flag it to your sponsor immediately rather than let the engagement drift. |
| 3 | Are the guarantees really in the contract? | Yes. All four appear word for word in our terms of sale and in every signed contract. You can read them before any commitment: they're public, on the terms-of-sale page of this site. |
| 4 | How does an audit refund work? | One email is enough. No form, no review committee, no justification to provide. If the roadmap delivered doesn't contain at least 3 high-ROI use cases, you write to your AI Makers contact and the full refund is triggered. You keep the deliverables already produced. |
| 5 | Why don't your competitors offer guarantees? | Because their model doesn't allow it. An agency pooling its consultants across ten accounts can't predict its results, so it can't guarantee anything. Our model is different: one dedicated engineer per client, onboarded two weeks before kick-off, and a maximum of three new clients per month. The load is controlled, results are predictable, and what's predictable can be written into a contract. |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| the model behind the guarantees | /capacite (→ /capacity) | model explanation |
| the guaranteed AI audit | /audit-ia-entreprise (→ /ai-readiness-assessment) | guaranteed offer |
| Book a diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** EN: `Book your diagnostic: the audit is guaranteed or refunded` → /contact

## 8. GEO block
- **Answer-first paragraph (EN):** `AI Makers backs its work with four guarantees written into the contract: the audit is refunded in full if it doesn't yield a clear roadmap with at least 3 high-ROI use cases; if there's no concrete impact by day 30, the engagement continues free of charge; every trained AI Champion reaches measurable impact or gets 30 extra days; and all code, playbooks and documentation belong to the client, with no lock-in. These guarantees are possible because AI Makers assigns one dedicated engineer per client and takes on at most three new clients a month.`
- **llms.txt entry (EN):** `[Guarantees](https://aimakers.fr/guarantees) : AI Makers' four contractual guarantees — audit refunded, impact in 30 days, champions with measurable results, and full IP ownership with no lock-in.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| 4 guarantees written into the contract | public/llms.txt (canonical) |
| Max 3 new clients/month; dedicated engineer onboarded 2 weeks before kick-off | public/llms.txt + page copy |
| Guarantee triggers/conditions (3 high-ROI use cases, day 30, champions, IP transfer) | src/app/garanties/page.tsx (contractual wording) |

## Reconciliation applied
**Changed:**
- Title: stripped hand-written `— AI Makers` suffix (template appends it). Rendered title now `Our 4 Written Guarantees | AI Makers` (~36 chars, within 60).
- Meta description: trimmed from 178→~143 chars by dropping the closing "Here's exactly what they cover."; kept keyword payload + guarantee list.
- §4.2: de-stacked one inflating "X, not Y" echo — flattened "the guarantees aren't a commercial bet, they're the direct consequence of how we work" to positive ("the guarantees are the direct consequence of how we work"). Kept the H2 device as the one negation on the page.

**Deliberately kept:**
- All four guarantee triggers + activation conditions + the "What it assumes" precondition table (necessary compliance/guarantee repetition — PROTECT).
- The exit-guarantee ownership triplet "code, playbooks, documentation" — garanties is the canonical owner of this phrasing (§2.4).
- The H2 "A guarantee isn't a marketing line. It's a consequence of the model." as the single load-bearing negation the section substantiates.
- FAQ honesty admission (FAQ2 "the one real risk"), max-3-clients/month + 2-weeks-before-kick-off canonical framing.

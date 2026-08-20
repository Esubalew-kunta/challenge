# Secteurs — hub (/secteurs) — EN Content Master

## 1. Page header
- **Route (FR, live):** /secteurs
- **Proposed EN slug:** /ai-by-industry
- **Purpose:** Hub for the 8 sector pages; frames why AI use cases differ by industry and routes to each.
- **SEO role:** hub
- **Funnel stage:** TOFU/MOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | ai use cases by industry | 90 (US) · 250 global | 64 (US) | Ahrefs keywords-explorer-overview, 2026-07 |
| Secondary | ai by industry / ai for [industry] | long-tail per sector | — | routed to child pages |
| Secondary | industry ai solutions | low | — | Ahrefs, 2026-07 |

> **Keyword decision:** "ai use cases by industry" (90, KD64) is the closest head term and it's both low-volume and hard — a genuinely thin category query. The winnable intent is per-sector and lives on the child pages ("ai for agencies", "ai for healthcare", etc.). So the hub targets the category term lightly and earns its keep with a real POV on why sector matters, not by out-optimising a weak head term.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Transformation IA par secteur : agences, TPE/PME, santé | AI by industry: use cases that actually differ *(46; renders 58 with `\| AI Makers` template suffix — brand not hand-written)* |
| Meta description (140–160 chars) | L'IA appliquée à votre secteur… | AI applied to your industry, not in general: agencies, SMEs, health & biotech, IT services, hospitality, banking. Real use cases and client references per sector. *(158)* |
| H1 | L'IA appliquée à votre métier | AI applied to your industry, not in general |
| URL slug | /secteurs | /ai-by-industry |

## 4. Sections & content
Copy: inline `src/app/secteurs/page.tsx` + `src/lib/secteurs.ts` (8 entries).

### 4.1 — Hero
- **Component:** `page.tsx`
- **Fields:** badge, H1, intro
- **Current (FR):** "The use cases that matter aren't the same…" — sector-specific promise.
- **Proposed (EN):**
  - **badge:** `By industry`
  - **H1:** `AI applied to your industry, not in general`
  - **intro (own POV, answer-first):** `The AI use cases that pay off in a communication agency are not the ones that pay off in a medtech or a brokerage — the bottleneck is different, so the first system to build is different. A creative team needs volume without more headcount; a medical practice needs its admin back; a broker needs compliance baked in. Pick your sector below for the use cases, the tools, and the client work that actually apply to it.`
- **Rationale:** The hub's POV — "the first system to build differs because the bottleneck differs" — is a citable framing, not a list preamble. It gives three concrete, contrasting examples (agency / medtech / broker) drawn from the real sector data without answering any child page in full.

### 4.2 — Sector cards (8)
- **Component:** `page.tsx` + `secteurs.ts`
- **Fields:** card per sector {name, one-line, link}
- **Current (FR):** 8 sectors.
- **Proposed (EN):** *(names = translated `nom`; one-liners are hub-level teasers, not the child H1s)*
  - `Communication agencies` → /secteurs/agences-communication — `Ship more creative work and more tender responses, without hiring.`
  - `Small & mid-sized businesses` → /secteurs/tpe-pme — `The repetitive back-office, sales and reporting work moves to automatic.`
  - `Health, biotech & medtech` → /secteurs/sante-biotech-medtech — `Scientific watch, regulatory documents and first-line support, held to the sector's rigour.`
  - `IT services firms (ESN)` → /secteurs/esn-services-it — `Produce more on delivery, and win differently on pre-sales.`
  - `Consulting & market research` → /secteurs/conseil-etudes-marche — `Interviews, literature reviews and deliverables, analysed faster and in more depth.`
  - `Doctors & medical practices` → /secteurs/medecins-cabinets — `Notes, referral letters and case summaries handled, so clinicians get time back.`
  - `Hospitality, tourism & leisure` → /secteurs/hotellerie-tourisme-loisirs — `24/7 multilingual guest relations, at scale.`
  - `Banking, insurance & brokerage` → /secteurs/banque-assurance-courtage — `Case files and follow-ups handled, with document compliance built in.`
- **Rationale:** One-line teasers translated from each sector's real focus (`titre`/`casUsage`), kept short so the hub routes without cloning the child pages that own the full use-case lists. Card shapes are deliberately varied (declaratives, fragments, pairs) rather than the uniform "punch: three nouns" colon template, and the duplicated "compliance… compliance" on the banking card was cut to one instance — restructured, not synonym-swapped.

### 4.3 — CTA final
- **Component:** `cta-section.tsx`
- **Proposed (EN):**
  - **title:** `And in your industry — what does AI actually change?`
  - **subtitle:** `Thirty minutes to map the use cases that fit your sector and your processes, with the engineers who build them.`
  - **primary CTA:** `Book a free diagnostic` → /contact
- **Rationale:** Mirrors FR intent; sector-specific curiosity hook into the diagnostic.

## 5. FAQ
No FAQ slot in template.

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| (8 sector names above) | /secteurs/[slug] ×8 | sector pages |
| Book a free diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Et dans votre secteur, l'IA change quoi ? » → /contact. Proposed EN: **`And in your industry — what does AI actually change?`** (button: `Book a free diagnostic`)

## 8. GEO block
- **Answer-first paragraph (EN, cite-able):** `AI Makers builds sector-specific AI systems for eight industries: communication agencies, small and mid-sized businesses, health/biotech/medtech, IT services firms, consulting and market research, medical practices, hospitality/tourism, and banking/insurance/brokerage. The premise is that the highest-payback use case differs by sector because the bottleneck differs — creative volume for agencies, admin time for medical practices, built-in compliance for brokers — so each sector page carries its own use cases, tools, and client references.`
- **llms.txt entry (EN):** `[AI by industry](https://aimakers.fr/secteurs) : AI use cases, tools, and client work per sector — agencies, SMEs, health, IT services, hospitality, banking, and more.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| 8 sectors + names + focus | src/lib/secteurs.ts (verified) |

## Reconciliation applied
Applied from `seo-audit-report/secteurs.md` (86/100, ship) + `ai-slop-audit-report/secteurs.md` (Net +14, one editing pass on the card grid).

- **Uniform card template (slop §2.5 / §3.4 — the primary tell):** rewrote the 8 sector teasers to break the repeated "punch: noun, noun, noun" colon shape — no card now uses the colon-list template; shapes vary (declarative / fragment / pair). Restructured, not synonym-swapped. Content still drawn from each sector's real `casUsage`.
- **Redundant echo (slop):** the banking card's "document compliance — compliance included" is now "document compliance built in" (concept stated once).
- **Double brand suffix (SEO §2a):** stripped hand-written `| AI Makers` from the Title field (renders 58 with template suffix).
- **KEPT (protected):** the hub thesis untouched ("the bottleneck is different, so the first system to build is different" + the three agency/medtech/broker contrasts — the citable POV both audits praise); the H1 "not in general" scoping negation (deflationary, corpus KEEP list). Meta 158 within budget — no trim.
- **Canonical:** this hub is the source of truth for the sector count = **8** (`secteurs.ts`); the playbook "6 sectors" was reconciled up to 8 in that page's pass.
- **Left for dev (not copy):** `/secteurs` vs `/ai-by-industry` slug/canonical (TICKET-EN-ROUTES); llms.txt prose "6 sector names" → 8 is a config/dev edit.

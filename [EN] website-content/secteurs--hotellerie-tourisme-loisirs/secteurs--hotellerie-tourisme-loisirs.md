# Secteur : Hôtellerie, tourisme & loisirs — EN Content Master

## 1. Page header
- **Route (FR, live):** /secteurs/hotellerie-tourisme-loisirs
- **Proposed EN slug:** /industries/ai-for-hospitality (collection base /industries — hub slug owned by Agent 1)
- **Purpose:** Sector landing page — shows the ICP we understand their pains, maps concrete AI use cases, funnels to diagnostic call.
- **SEO role:** supporting (sector long-tail) + conversion assist
- **Funnel stage:** MOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | ai in hospitality | 250 (US) / 100 (GB) | 33 (US) / 48 (GB) | Ahrefs keywords-explorer-overview, 2026-07 |
| Secondary | ai for hospitality | 200 (US) | 36 (US) | Ahrefs, 2026-07 |
| Secondary | ai for hotels | 40 (US) | 53 (US) | Ahrefs, 2026-07 |

> **Volume note:** low-volume but low-difficulty cluster — "ai in hospitality" 250 US (KD33), the most attainable primary among the eight in KD terms. "ai for hotels" is thin (40). Fine for a sector landing; the low KD makes it a realistic long-tail win despite modest volume.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | IA pour hôtellerie, tourisme et loisirs : relation client, contenus, opérations | AI for Hospitality & Tourism *(renders as `AI for Hospitality & Tourism \| AI Makers`, 40 — `\| AI Makers` auto-appended by `layout.tsx` title template; do not hand-write it)* |
| Meta description (140–160 chars) | Transformation IA pour l'hôtellerie, le tourisme et les loisirs : relation client multilingue 24/7, contenus, opérations. Références réelles : casinos, tourisme institutionnel. | AI for hospitality, tourism and leisure: multilingual 24/7 guest relations, content and operations at scale. Real references in casinos and tourism. *(147)* |
| H1 | L'IA pour l'hôtellerie, le tourisme et les loisirs : la relation client à l'échelle | AI for hospitality and tourism: guest relations at scale |
| URL slug | /secteurs/hotellerie-tourisme-loisirs | /industries/ai-for-hospitality |

## 4. Sections & content
Shared template: `src/app/secteurs/[slug]/page.tsx` · copy lives in `src/lib/secteurs.ts` (entry `hotellerie-tourisme-loisirs`).

### 4.1 — Hero
- **Component:** `src/app/secteurs/[slug]/page.tsx` (inline hero)
- **Fields:** badge, titre (H1), intro (answer-first, 2–3 sentences), illustration alt
- **Current (FR):** Badge « Hôtellerie / Tourisme / Loisirs ». Intro: Dans l'hôtellerie, le tourisme et les loisirs, chaque interaction compte et la saisonnalité ne pardonne pas…
- **Proposed (EN):**
  - **badge:** `Hospitality / Tourism / Leisure`
  - **h1:** `AI for hospitality and tourism: guest relations at scale`
  - **intro (answer-first):** `In hospitality, tourism and leisure, every interaction counts and seasonality is unforgiving. AI takes the peak-season overflow: guest requests in every language 24/7, multilingual content, operations steered from a single view. We've deployed it from casinos to institutional tourism — including a WhatsApp chatbot reported to save around $18,000 a year `[to validate]`.`
  - **illustration alt:** `AI for hospitality, tourism and leisure`
- **Rationale:** The $18,000/year figure comes from `secteurs.ts` (published FR) but isn't in `llms.txt`, so it's tagged `[to validate]`. Angle is volume/multilingual/seasonality — nothing like the other seven pages.

### 4.2 — Douleurs — « Ce que vous vivez en ce moment »
- **Component:** `src/app/secteurs/[slug]/page.tsx` + `secteurs.ts:douleurs[]`
- **Fields:** douleurs[] — 4 pain bullets, written in the prospect's voice
- **Current (FR):** « Des demandes clients en dix langues, à toute heure, que vos équipes absorbent mal en haute saison » …
- **Proposed (EN):**
  1. `Guest requests in ten languages, at all hours, that your teams struggle to absorb in peak season.`
  2. `Online reviews piling up without a personalised reply.`
  3. `Content — offers, listings, social — to version endlessly.`
  4. `Seasonal teams to train fast, who then leave with the know-how.`
- **Rationale:** Pains unique to hospitality: multilingual volume, review load, content churn, seasonal-staff turnover. No overlap with any other sector page.

### 4.3 — Cas d'usage — « Ce que l'IA change concrètement chez vous »
- **Component:** `src/app/secteurs/[slug]/page.tsx` + `secteurs.ts:casUsage[]`
- **Fields:** casUsage[] — 4 cards {titre, description}
- **Current (FR):** Relation client 24/7 multilingue · Avis et e-réputation · Contenus et offres multilingues · Opérations et reporting
- **Proposed (EN):**
  - **24/7 multilingual guest relations** — `WhatsApp and web chatbots that reply in the guest's language, wired into your booking systems. Our reference deployment reportedly handles 80% of requests autonomously and saves ~$18,000 a year `[to validate]`.`
  - **Reviews and e-reputation** — `Personalised replies to reviews in your house's tone, platform monitoring, and summaries for management.`
  - **Multilingual content and offers** — `Listings, newsletters, social and seasonal offers versioned across languages, without an agency at every iteration.`
  - **Operations and reporting** — `Activity forecasts, daily summaries and per-site steering: management sees everything, every morning.`
- **Rationale:** Both quantified claims (80% autonomous, ~$18k/year) are tagged `[to validate]` — they come from `secteurs.ts`, not `llms.txt`. Use cases are hospitality-specific (booking-system integration, house tone, per-site steering).

### 4.4 — Témoignages — « Dans votre secteur, avec nous »
- **Component:** `src/app/secteurs/[slug]/page.tsx` + `site-config.ts:clientLogos` (testimonials)
- **Fields:** temoinClients[] — Groupe Partouche is a **LOGO/NAME reference only**
- **Proposed (EN):** LOGO-ONLY. `site-config.ts` line 487 is `{ name: "Groupe Partouche", img: "…partouche-nobg.png" }` — a logo-only entry with **no `testimonial` object**. The template renders témoignages only for clients that have a `testimonial`, so this section renders **empty** for this sector. There is NO Partouche verbatim to reuse — render Partouche only as a client name/logo (proof of the reference), and do **not** claim or render a quote. If a client-approved Partouche testimonial is later added to `clientLogos`, it can be surfaced then.
- **Rationale:** No fabricated testimonial. Partouche stands as logo/name proof of a real leisure-sector reference; the quote claim is removed because none exists in source.

### 4.5 — Formations liées — « Les formations les plus demandées dans votre secteur »
- **Component:** `src/app/secteurs/[slug]/page.tsx` + `src/lib/formations.ts`
- **Fields:** formationsLiees[] — formation slugs: acculturation-ia, creation-publicite-ia, microsoft-copilot
- **Proposed (EN):** Section label `The training most requested in your sector`. Cards: `AI foundations` (acculturation-ia), `AI for advertising creative` (creation-publicite-ia), `Microsoft Copilot` (microsoft-copilot). Anchor labels proposed; card body owned by each formation page.
- **Rationale:** References sibling formation pages; no cloned copy.

### 4.6 — Related + CTA final
- **Component:** `src/components/shared/related-content.tsx`, `src/components/shared/cta-section.tsx`
- **Fields:** 3 related links (Transformation IA, Audit IA, blog comparatif) + CTA title/subtitle
- **Proposed (EN):**
  - **CTA title:** `What's the first thing to automate before peak season?`
  - **CTA subtitle:** `30 minutes on your guest-request volume, reviews and multilingual content — and the first thing to automate before peak season. You leave with a plan whether you work with us or not.`
- **Rationale:** Sector-native CTA question (replaces the "What would AI change in your operation?" noun-swap) — anchored on the seasonality pressure unique to hospitality.

## 5. FAQ
Rendered via `src/components/shared/faq-accordion.tsx` + FAQPage JSON-LD (`src/lib/faq-schema.ts`).

| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | Un chatbot IA peut-il vraiment gérer nos clients ? | Can an AI chatbot really handle our guests? | Yes, on the repetitive volume — hours, bookings, standard requests — with a handover to a human as soon as it's needed. Our reference tourism deployment reportedly handles around 80% of requests autonomously, 24/7 and in several languages `[to validate]`. *(Owner of the "can a chatbot handle customers" Q.)* |
| 2 | Avez-vous des références dans le secteur ? | Do you have references in the sector? | Yes: Groupe Partouche in leisure and an international tourist office for which we deployed a multilingual WhatsApp chatbot. *(Partouche is a named client reference — logo-only in source, no published quote; do not claim a testimonial.)* |
| 3 | Comment gérez-vous la saisonnalité des équipes ? | How do you handle seasonal staff turnover? | By documenting everything in systems that stay: the playbooks and agents don't leave at the end of the season. New teams are operational in days, not weeks. *(Owner of the seasonal-staffing Q.)* |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| See our full AI transformation approach | /ai-transformation | existing related link |
| Start with an AI audit | /audit-ia-entreprise | existing related link |
| AI foundations training | /formation-ia-entreprise/acculturation-ia | formations liées |
| Book a free diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Et dans votre entreprise, l'IA change quoi ? » → /contact. Proposed EN: **`What's the first thing to automate before peak season?`** (button: `Book a free 30-min diagnostic`)

## 8. GEO block
- **Answer-first paragraph (EN, 2–3 sentences):** `AI Makers helps hospitality, tourism and leisure operators handle volume with AI — multilingual 24/7 guest relations, review replies, multilingual content and per-site operations. Deployments range from casinos to institutional tourism, including a multilingual WhatsApp chatbot. Sector reference (Groupe Partouche) among 50+ companies and 200+ systems deployed.`
- **llms.txt entry (EN):** `[AI for Hospitality & Tourism](https://aimakers.fr/secteurs/hotellerie-tourisme-loisirs) : how hospitality and tourism operators use AI for multilingual 24/7 guest relations, reviews and content at scale — casino and tourism references.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| ~$18,000/year saved (WhatsApp chatbot) | src/lib/secteurs.ts (published FR) — not in llms.txt, `[to validate]` |
| ~80% of requests handled autonomously | src/lib/secteurs.ts (published FR) — not in llms.txt, `[to validate]` |
| +50 companies / +200 systems deployed | public/llms.txt (canonical) |
| Client logo/name reference (Groupe Partouche) — NO testimonial | src/lib/site-config.ts clientLogos line 487 (logo-only, no `testimonial` object) |
| International tourist office WhatsApp deployment | src/lib/secteurs.ts (published FR) |

## Reconciliation applied
Applied from `seo-audit-report/secteurs--hotellerie-tourisme-loisirs.md` (🔴 Critical) + `ai-slop-audit-report/secteurs--hotellerie-tourisme-loisirs.md` + both `_cross-page-findings.md`.

- **🔴 FABRICATION REMOVED (Partouche testimonial):** `site-config.ts:487` is logo-only (no `testimonial` object) — no Partouche quote exists.
  - §4.4 rewritten from "REUSE — render the published verbatim (Groupe Partouche)" to **LOGO-ONLY**: Partouche renders as a client name/logo reference; the témoignages section renders empty for this sector; no quote is claimed or rendered.
  - FAQ Q2 stripped of the false clause "(its testimonial is on this page)"; Partouche kept only as a named client reference with an explicit editorial note.
  - Facts table line corrected from "Client testimonial … (published verbatim)" to "logo/name reference — NO testimonial."
  - GEO block "Sector reference (Groupe Partouche)" left as-is (accurate — names them as a real client/logo reference, claims no quote).
- **Double brand suffix (§2a):** stripped manual `| AI Makers` — now `AI for Hospitality & Tourism`, renders 40 chars.
- **Hero verb "absorbs" (slop, shared with banque) — VARIED HERE:** "AI absorbs the volume" → "AI takes the peak-season overflow" (hospitality-native); banque keeps "absorbs."
- **CTA-title noun-swap (slop §3.3):** replaced "What would AI change in your operation?" with the sector-native "What's the first thing to automate before peak season?"
- **Kept (PROTECT):** the `[to validate]`-tagged non-canonical figures ($18k/yr, 80% autonomous) — NOT stripped, tags retained on all three instances; hospitality-native use cases and pains; FAQ Q1/Q3 ownership; canonical +50/+200 figures.
- **Left to engineering:** `/industries/` vs `/secteurs/` slug (§8 GEO cites live `/secteurs/…`); FR template chrome i18n; `<html lang>`. Meta 147 chars — under ceiling.

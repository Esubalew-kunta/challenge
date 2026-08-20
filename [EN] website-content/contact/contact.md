# Contact (/contact) — EN Content Master

## 1. Page header
- **Route (FR, live):** /contact
- **Proposed EN slug:** /contact
- **Purpose:** Conversion endpoint: Cal.com booking embed + proof. Target of nearly every CTA on the site.
- **SEO role:** conversion — minimal keyword pressure.
- **Funnel stage:** BOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| — | (no keyword target — conversion endpoint) | minimal | — | Ahrefs, 2026-07 |

> **Keyword decision — minimal keyword pressure by design.** A contact/booking page is the destination of internal CTAs, not an organic-acquisition page. It carries no head term; its only "query" is branded navigation ("ai makers contact"). Copy is optimised for the booking conversion and to state exactly what the 30 minutes delivers. Flagged to Agent 3: score on conversion clarity + trust, not keywords.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Contact : réservez votre diagnostic IA gratuit | Contact — Book Your Free AI Diagnostic |
| Meta description (140–160 chars) | Contactez AI Makers pour un diagnostic IA gratuit… | Contact AI Makers for a free AI diagnostic. 30 minutes to review your workflows and pin down your highest-ROI AI quick wins. No sales pitch. *(146)* |
| H1 | 30 minutes pour savoir exactement ce que l'IA peut faire pour vous. | 30 minutes to know exactly what AI can do for you. |
| URL slug | /contact | /contact |

## 4. Sections & content
Copy: inline `src/app/contact/page.tsx` + `shared/cal-embed.tsx` (bookingUrl cal.com Othmane Halim) + `shared/booking-proof.tsx` (`site-config.ts:bookingProof`).

### 4.1 — Hero + promise
- **Component:** `page.tsx`
- **Fields:** badge, H1, subtitle, 3 steps, contact info (email, address)
- **Current (FR):** Work-session (not demo) framing.
- **Proposed (EN):**
  - **badge:** `Free AI diagnostic · No commitment`
  - **H1:** `30 minutes to know exactly what AI can do for you.`
  - **subtitle:** `No sales pitch. We review your workflows, pin down your 3 highest-ROI AI quick wins, and give you a first roadmap — whether you work with us or not.`
  - **Steps:** `1 — You book a 30-min slot` · `2 — We analyse your workflows live` · `3 — You leave with a concrete AI roadmap`
  - **contact info:** `60 rue François 1er, 75008 Paris` · `othmane@aimakers.fr`
- **Rationale:** "No sales pitch" + "whether you work with us or not" is the FR's differentiator and it's true to the format; kept. Address and email verbatim from canonical sources. Note: the FR page shows only the Paris address — the Rabat office lives on /ia-maroc; not adding it here to match the live layout (flag §9 if Agent 4 wants both).

### 4.2 — Cal.com embed
- **Component:** `shared/cal-embed.tsx`
- **Fields:** booking iframe title, "prefer no call?" fallback
- **Current (FR):** « Réserver un diagnostic gratuit avec Othmane Halim ».
- **Proposed (EN):**
  - **iframe title:** `Book a free diagnostic with Othmane Halim`
  - **fallback line:** `Not into a call? othmane@aimakers.fr`
- **Rationale:** Names the founder (Othmane Halim, canonical) — a real person on the other end raises booking intent. Email fallback kept for the call-averse.

### 4.3 — Booking proof
- **Component:** `shared/booking-proof.tsx` + `bookingProof`
- **Fields:** stats, testimonials, badges
- **Current (FR):** Reassurance under the calendar.
- **Proposed (EN):**
  - **stats:** `9.6/10 satisfaction` · `100% would recommend` *(see §9)*
  - **badges:** `Anthropic Partner` · `"Osez l'IA" Ambassador` *(see §9 — [to validate for EN])*
  - **testimonials:** translate the 6 `bookingProof` testimonials 1:1 (owned by `site-config.ts` — do not rewrite the substance; Agent 2 EN pass on site-config testimonials is the single source).
- **Rationale:** 9.6/10 is canonical (llms.txt). Testimonials are shared site-config data — reference, don't clone here; translate once at the site-config layer. Badge names may need EN treatment or a keep-in-French decision (see §9).

## 5. FAQ
No FAQ slot in template.

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| Prefer to self-assess first? Take the AI diagnostic | /diagnostic-ia | alternative self-serve (existing) |
| othmane@aimakers.fr | mailto:othmane@aimakers.fr | email fallback (existing) |

## 7. CTA
- **Primary CTA:** Book the 30-min diagnostic (Cal.com embed). Proposed EN: **`Book a free 30-min diagnostic`**

## 8. GEO block
- **Answer-first paragraph (EN, cite-able):** `You can contact AI Makers by booking a free 30-minute AI diagnostic with founder Othmane Halim, or by email at othmane@aimakers.fr. The diagnostic is a working session, not a sales pitch: the team reviews your workflows, identifies your three highest-ROI AI quick wins, and hands you a first roadmap — whether or not you go on to work with them. Offices in Paris (60 rue François 1er, 75008) and Rabat (Agdal).`
- **llms.txt entry (EN):** `[Contact](https://aimakers.fr/contact) : book a free 30-minute AI diagnostic with AI Makers, or reach the team at othmane@aimakers.fr.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| Free 30-min diagnostic, no pitch, 3 quick wins, first roadmap | page copy (format) |
| Founder Othmane Halim; email othmane@aimakers.fr; Paris 75008 (+ Rabat) | public/llms.txt (canonical) |
| 9.6/10 satisfaction | public/llms.txt (canonical) |
| 100% would recommend | site-config bookingProof — [to validate], not in llms.txt |
| "Anthropic Partner" / "Osez l'IA" Ambassador badges | site-config bookingProof — **[to validate for EN use]** (keep-in-French vs translate) |
| 6 testimonials | site-config bookingProof — shared data, translate at source, don't clone here |

## Reconciliation applied
**Changed:**
- Title field: stripped the hand-written `| AI Makers` (and the `*(53)*` note) so the template appends the brand once. Field is now `Contact — Book Your Free AI Diagnostic` → renders `Contact — Book Your Free AI Diagnostic | AI Makers` (~51 chars, single brand).

**Deliberately kept:**
- Meta description (146 chars, within budget) — unchanged.
- No negations to de-stack (slop audit net −2, clean microcopy).
- All `[to validate]` tags intact: "100% would recommend" (not in llms.txt), the `Anthropic Partner` / `"Osez l'IA" Ambassador` badge EN-treatment flags. 9.6/10 kept (canonical).
- Testimonials left to the shared site-config layer (no cloning here).

**Owner decisions (unchanged, flagged):** source-or-drop "100% would recommend"; decide keep-French vs translate for the partner badges; whether the Rabat office should also appear on the EN contact page.

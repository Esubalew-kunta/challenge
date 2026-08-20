# Reconciliation Notes — EN content pipeline

Consolidated from the two independent audits (`seo-audit-report/` and
`ai-slop-audit-report/`, incl. their `_cross-page-findings.md`). This file
records the items that are **NOT content edits** — engineering tickets and
decisions that must be resolved before the EN content can ship as live pages.
Agent 2 (reconciliation) applies the *content* fixes to the page masters and
leaves these for the owner/dev.

Status legend: ⛔ blocks EN launch · ⚠️ decision needed · 🐞 live bug (fix now,
not EN-gated) · 🔎 sign-off gate (page-specific).

---

## A. Decisions the owner must make (⚠️)

1. **⚠️ URL structure — flat FR slugs vs. `/en/*` vs. new EN slugs.**
   The content masters propose English slugs (`/ai-consulting`,
   `/ai-automation`, `/ai-readiness-assessment`, `/ai-training-for-teams`,
   `/generative-engine-optimization`, `/enterprise-data-platform`, sector
   `/ai-by-industry`, etc.). None exist as routes today; the live site is
   flat French (`/agence-ia`, `/secteurs/[slug]`). Internal links in the EN
   drafts already point at the proposed slugs, so **every EN internal link
   404s until this is decided and routes exist.** This is the "flat vs `/en`"
   question already flagged open in the Notion research ("confirm before any
   dev work"). Nothing downstream (routes, hreflang, 301s) can proceed
   without it. Recommendation: `/en/<english-slug>` subpath so FR stays
   canonical and hreflang isolates the two trees.

2. **⚠️ Is the EN site launching now, or is this a content bank?**
   If the answer is "content bank for later," tickets B1–B5 stay parked and
   the content masters are the deliverable. If "launch now," B1–B5 are the
   critical path.

---

## B. Engineering tickets — EN pages will not render correctly without these (⛔)

- **⛔ TICKET-EN-ROUTES** — create the EN routes for every decided slug +
  `sitemap.ts` entries + `hreflang` (FR↔EN) + 301s where a slug changes.
  Blocks all EN internal links.
- **⛔ TICKET-I18N-SERVICEPAGE / -SECTORPAGE / -BESPOKE** — the shared
  `service-page.tsx`, the `secteurs/[slug]` template, and bespoke pages
  hard-code French UI chrome (hero CTA button label, proof-band text,
  `RelatedContent` labels, section H2s, breadcrumbs, and inline sections such
  as the FDE founder bios). EN pages currently render half-French. Needs an
  i18n string layer; the content masters only supply EN for the *data*
  fields, not the template chrome.
- **⛔ TICKET-HTML-LANG** — root layout emits `<html lang="fr">`; EN pages
  need `lang="en"`.
- **⛔ TICKET-JSONLD-INLANGUAGE** — JSON-LD `inLanguage:"fr-FR"` (glossary +
  FAQPage pages, ~4 files) and FR `areaServed`/`url` must switch for EN.
- **⛔ TICKET-CS-META-TITLE** — case-study template feeds one `caseStudy.title`
  to both `<title>` and `<h1>`; drafts that propose a distinct Title≠H1 need a
  new optional `metaTitle` field.
- **⛔ TICKET-FORM-TITLE-TPL + TICKET-FORM-SEO-DESC** — formation
  `generateMetadata` hard-codes `| Formation IA en entreprise`, and
  `formation.resume` does triple duty (hero + meta description + Course
  schema), so the proposed EN meta descriptions have no field to land in.
- **⚠️ TICKET-FORMATION-ORPHAN** — a field map references an unimported
  `offer-pages/formation.ts`; confirm the live source before wiring EN.

## C. Live bugs — fix now, independent of EN (🐞)

- **🐞 TICKET-OFFRE-SITEMAP** — `/offre` is missing from `sitemap.ts`
  staticRoutes (one line). Live indexability bug on the FR site today.
- **🐞 TICKET-GDPR-CONSENT** — the four lead-capture forms (audit-geo,
  scanner, playbook, challenge) POST to `/api/lead` with **no visible consent
  microcopy / privacy link**. `/confidentialite` exists to link. Live FR gap,
  not just EN.

## D. Source-of-truth figure conflicts — reconcile at source (the site has two values)

| Fact | Canonical (use this) | Wrong value still in code | Where |
|---|---|---|---|
| Professionals trained | **2,500+** | 1,250 (stale, Notion brief only) | canonical in `llms.txt`; drafts corrected |
| Playbook page count | **48** | 43 | `site-config.ts:111` says 43 → fix |
| Sectors count | **8** | 6 | `llms.txt` / playbook say 6 → fix |
| Bpifrance adoption stat | pick one, cite it | 55% vs 31% (own source-slug says 31%) | `pourquoi-maintenant` — needs the real source |
| Leadership titles | reconcile | `/a-propos` "CEO/COO/Chief of Staff" vs `/equipe` Founder/COO/CTO (Walid=CTO) | pre-existing FR inconsistency |
| Diagnostic scale | **both correct** | /20 self-test vs /24 AI Scan — distinct instruments | no fix; keep distinct |

## E. Page-specific sign-off gates (🔎 — page can't publish until cleared)

- **🔴 `secteurs--hotellerie-...`** — the drafted Groupe Partouche testimonial
  **does not exist** in `site-config.ts` (logo-only). Reconciliation DROPS the
  quote + the FAQ line claiming it. (This is the one hard fabrication; fixed
  as a content edit, noted here for visibility.)
- **🔎 seo-geo + 2 pages** — the "+70% Sage" result is an unpublished,
  `[to validate]` case and is the entire proof spine of `seo-geo`. Needs
  client sign-off before that page ships.
- **🔎 addictest** — testimonial is `pending:true` in source; hold EN until
  the FR quote is validated.
- **🔎 cardio-check-up, delassus** — `status:"draft"` / noindex; EN drafts
  correctly hold their llms.txt entries. Do not index.
- **🔎 partner/cert badges** — "Anthropic Partner", Clay/Google/etc., "Osez
  l'IA" Ambassador: verify wording/authorization before EN use.
- **🔎 playbook-ia stat wall** — 88%/5%/$700B/30%/95%/300+ executives all
  unsourced (`[to validate]`); source or cut before publish.

## F. FR→EN localisation review (not blocking, but flag)

- ROI calculator computes in **€** with France-specific ×1.45 employer charge
  on a US-primary EN page — localise currency/basis or state the basis.
- OPCO/Qualiopi funding framing: **not in `llms.txt` or page copy** → every
  mention stays `[to validate placement]`; invent no funding %/certification.
- FR city strip / "Osez l'IA" badge are FR-market artifacts — hide or adapt
  on EN.

---

*Content-level fixes (double brand suffix, meta trims, the fabricated
testimonial, "X, not Y" de-stacking, duplicate-section merges, figure
corrections in copy) are applied by Agent 2 directly in the page masters and
recorded in each file's "Reconciliation applied" section.*

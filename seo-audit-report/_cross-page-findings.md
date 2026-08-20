# Cross-Page Findings — AI Makers EN Content Audit (Agent 3)

Systemic patterns across all 55 per-page audits, documented once here per ruleset §8 and referenced from the per-page files. Fix each at its source (one ticket / one decision) rather than by N hand-edits.

- **Scope:** all 55 EN content drafts + their live templates.
- **Ground truth:** live codebase (`src/`), `public/llms.txt`, `src/app/sitemap.ts`, `src/lib/site-config.ts`. Keyword data: Ahrefs (US/2026-07-15).
- **Verified in code for this pass:** `layout.tsx:15` `title.template: "%s | AI Makers"`; `sitemap.ts:11-44` staticRoutes (no `/offre`); `inLanguage:"fr-FR"` at `page.tsx:79`, `blog/[slug]/page.tsx:50`, `pourquoi-maintenant/page.tsx:36`, `glossaire-ia/page.tsx:219`; `site-config.ts:487` Partouche logo-only; `site-config.ts:111` "43 pages" outlier; llms.txt canonical figure set.

This file is a prioritised engineering + content brief. Read §7 first if you want the execution order.

---

## 1. 🔴 Blockers (site-level)

### B-1 🔴 Fabricated Groupe Partouche testimonial — `secteurs--hotellerie-tourisme-loisirs`
`src/lib/site-config.ts:487` is `{ name: "Groupe Partouche", img: "…partouche-nobg.png" }` — **logo-only, no `testimonial` object**; the sector's témoignages block renders empty. The draft asserts a quote that does not exist:
- §4.4: *"REUSE — render the published verbatim (Groupe Partouche)"* — no verbatim exists.
- FAQ Q2 verbatim: *"Groupe Partouche in leisure (its testimonial is on this page)"* — false as coded.

**Fix (blocks publication of this page):** either (a) add a real, client-approved Partouche quote to the config (do **not** invent one), or (b) delete "its testimonial is on this page," drop Partouche from the testimonial reuse, and keep it as a logo/name reference only.

### B-2 🔴/🟠 Claims gated on client sign-off before their page can ship
Not fabrications, but false-if-unconfirmed and each currently unverified. Each blocks its own page(s) until signed off:
- **`seo-geo` (🔴 for this page):** the entire page is spined on "+70% AI visibility for Sage," tagged `[to validate]`, sourced from an **unpublished, `inProgress`, noindex** case (`case-studies.ts`; `/etudes-de-cas/sage-geo` is out of the sitemap). Shared with `homepage` + `ai-transformation` (🟡 there — supporting proof, not the spine). One client sign-off + case publication clears all three. Until then seo-geo must not ship.
- **`etudes-de-cas--addictest`:** testimonial is `testimonial.pending: true` (Ziyad El Mouniri). Must not go live until the FR quote is signed off.
- **`etudes-de-cas--cardio-check-up`, `--delassus`:** correctly held as noindex drafts. cardio-check-up's real clinician name (Dr Sana Amraoui) must not be published pre-approval.
- **Unverified partner / certification badges (trust + comparative-advertising exposure, §1.1/§4.2/§4.3):** homepage `Anthropic Partner` + `"Osez l'IA"` ambassador; `forward-deployed-engineer` Clay "Enterprise partner"/Google/Make/n8n/AWS/Microsoft-Azure + "Claude certified architect"/Microsoft certs; `challenge-30-jours` "Anthropic Partner." Confirm each badge (exact partner tier, exact cert names) once, site-wide, or drop any that can't be evidenced. False partnership/cert claims are the single most likely place this site gets a regulated comparative claim wrong.
- **`playbook-ia` stat wall (🟠):** "88% use AI / 5% get value," "$700B invested," "95% of AI projects," "300+ executives already used it" — all unsourced. Attach citations or a visible `[to validate]` tag before ship; do not present as fact.

**Net hard 🔴 fabrication count: 1 (Partouche).** The rest of §1 are sign-off gates that block specific pages, not the whole site.

---

## 2. Systematic template / meta issues (one fix each)

### 2a. Double brand suffix — hand-written `| AI Makers` / `— AI Makers` (fix once, ~30 pages)
`layout.tsx:15` already appends `%s | AI Makers`. `constructMetadata()` returns `title` as a plain string, so every hand-written suffix renders **twice**. **Fix (one decision):** strip the manual brand from every title field (let the template add it once), OR set `title: { absolute: … }` in `constructMetadata`.

**Rendered length > 60 today because of the doubling (12 pages — these actively break the §1.3 title rule):**

| Page | Field title | Rendered chars |
|---|---|---|
| offre | `AI PARTNER: Your AI Department, Audit to Scale \| AI Makers` | ~70 |
| ai-operating-system | `AI Operating System: Run Your Company on AI \| AI Makers` | ~70 |
| ai-transformation | `AI Transformation: Audit, Systems, Trained Teams \| AI Makers` | ~68 |
| gouvernance-ia | `AI Governance: GDPR, EU AI Act & AI Charter — AI Makers` | ~67 |
| forward-deployed-engineer | `Forward Deployed Engineer (FDE) Explained \| AI Makers` | ~65 |
| seo-geo | `Generative Engine Optimization (GEO) \| AI Makers` | ~64 |
| formation-ia-entreprise | `AI Training for Teams, on Your Real Work \| AI Makers` | ~64 |
| agence-ia | `AI Consulting Services & Automation \| AI Makers` | ~64 |
| a-propos | `About AI Makers: the firm that runs on what it sells` (+brand ×2) | ~64 |
| securite | `AI Data Security: Where Your Data Lives — AI Makers` | ~63 |
| homepage | `AI Transformation Studio for Companies \| AI Makers` | ~62 |
| automatisation-ia-workflow | `AI Automation for Business Processes \| AI Makers` | 60 (at limit) |

**Also doubled but ≤60 (strip the manual brand anyway):** audit-ia-entreprise ~58, equipe 58, plateforme-data-ia ~57, capacite 54, garanties 48, fondateur 47, ia-maroc, carrieres 35, and all 8 sector pages (`AI for … | AI Makers`, 37–47 rendered after fix). `contact` and `diagnostic-ia` are already correct (no manual suffix) — keep as-is; `contact` breaks (→62) only if the "| AI Makers" string is pasted into the field.

**Separate mechanism, same result — formation children (6 pages):** `generateMetadata` injects a **French** mid-suffix `| Formation IA en entreprise` *and then* layout adds `| AI Makers`, e.g. acculturation renders `AI Literacy Masterclass | Formation IA en entreprise | AI Makers` (~62, and French on an EN page). Fixed by TICKET-FORM-TITLE-TPL (§3).

### 2b. Meta description > 160 chars (FR→EN swell — measured overruns)
| Page | Measured chars | Over by |
|---|---|---|
| ia-maroc | 209 | 49 |
| a-propos | 188 | 28 |
| securite | 188 | 28 |
| capacite | 184 | 24 |
| garanties | 178 | 18 |
| gouvernance-ia | 177 | 17 |
| fondateur | 177 | 17 |
| equipe | 174 | 14 |
| pourquoi-maintenant | 170 | 10 |
| formation…acculturation-ia | ~168 | ~8 |

**At the 160 ceiling (zero buffer — trim ~5–10 to survive translation):** sante-biotech-medtech 160, blog 160, formation-ia 160. All are simple content edits.

### 2c. Title == H1 single-field templates (block distinct Title/H1)
- **Case studies (`CaseStudyDetail`):** one `caseStudy.title` feeds both meta title and hero H1. Title ≠ H1 was drafted on **addictest**, **delassus**, **sage-geo** → not shippable as written. Needs a `metaTitle` field (TICKET-CS-META-TITLE). fondation-force / gepromed / thinkone drafted title == H1, so they're unaffected.
- **Formations (6 children):** `formation.resume` does triple duty (hero paragraph + meta description + Course-schema description) and title carries the FR mid-suffix. Needs `seoDescription` + a title-template fix (TICKET-FORM-SEO-DESC / TICKET-FORM-TITLE-TPL).

---

## 3. Engineering tickets (scoped once; NOT content edits)

Per ruleset §8.4, no per-page audit may assume any of these is already done.

- **TICKET-OFFRE-SITEMAP (🟠, ship now, not EN-gated):** `/offre` is absent from `sitemap.ts` staticRoutes though it's indexable and promoted in llms.txt. One-line add. Live indexability bug independent of the EN work.
- **TICKET-EN-ROUTES (🟠, gates all EN publish):** the EN slug scheme diverges from live FR routes; drafts' internal links already depend on slugs that 404. Build routes + add to sitemap + hreflang + 301 from FR. Slug decisions: `/agence-ia`→`/ai-consulting`, `/automatisation-ia-workflow`→`/ai-automation`, `/audit-ia-entreprise`→`/ai-readiness-assessment` (see D-1), `/formation-ia-entreprise`→`/ai-training-for-teams`, `/offre`→`/ai-partner`, `/plateforme-data-ia`→`/enterprise-data-platform`, `/seo-geo`→`/generative-engine-optimization`, `/gouvernance-ia`→`/ai-governance`, `/ia-maroc`→`/ai-morocco`, `/securite`→`/security`, `/glossaire-ia`→`/ai-glossary`, `/a-propos`→`/about`, `/equipe`→`/team`, `/fondateur`→`/founder`, `/carrieres`→`/careers`, `/capacite`→`/capacity`, `/diagnostic-ia`→`/ai-maturity-assessment`, sectors→`/industries/…`, tools→`/ai-visibility-checker` `/ai-roi-calculator` `/ai-opportunity-assessment` `/ai-tools`, case studies→`/case-studies/…`. **Resolve the `ai-operating-system` draft's stale link to `/plateforme-data-ia` vs the platform draft's `/enterprise-data-platform` — one final slug.** Homepage/ai-transformation internal links must repoint to the final set.
- **TICKET-I18N-SERVICEPAGE (🟠):** `components/shared/service-page.tsx` hard-codes FR with no override prop — hero CTA `Réserver mon diagnostic gratuit` (L129), proof band `Ils nous font confiance` + 50-companies line (L179–184), `Ressources`/`Lire l'article`/`Pour aller plus loin` (L305/329/92). Renders FR chrome on EN. Affects **agence-ia, automatisation-ia-workflow, audit-ia-entreprise, plateforme-data-ia**.
- **TICKET-I18N-SECTORPAGE (🟠):** sector `page.tsx` hard-codes FR chrome — H2s `Ce que vous vivez en ce moment`, `Ce que l'IA change concrètement chez vous`, `Questions fréquentes`; breadcrumb `Accueil / Secteurs`; hero CTA `Réserver un diagnostic gratuit`; RelatedContent. Drafts supply EN only for `intro/douleurs/casUsage/faq`. Affects **all 8 sector pages + `/secteurs` hub** (renders half-EN/half-FR).
- **TICKET-I18N-BESPOKE (🟠):** inline FR strings in bespoke `page.tsx` files not covered by field maps — **ai-transformation** (`Ce que vous y gagnez`, intermediate CTA, `Avant/Après/Comment`), **ai-operating-system** (RelatedContent L462–476), **forward-deployed-engineer** (whole `Direction technique / Encadré par les fondateurs d'AY Automate` block L424–524 with FR founder bios, plus FdeEmbed intro, `En production chez nous`, `Voir notre capacité actuelle`, RelatedContent, final CTA), **seo-geo** (`Avant/Après/Comment`, `Le livrable`, RelatedContent), **offre** (`Le modèle — 4 principes` / `offer.model` L148–183 rendered but no EN copy drafted), **formation-ia-entreprise** (FR villes local-SEO strip L652–685 linking `/formation-ia/{paris…casablanca}`).
- **TICKET-HTML-LANG (🟠):** `layout.tsx` `<html lang="fr">` must be locale-aware for EN.
- **TICKET-JSONLD-INLANGUAGE (🟠):** `inLanguage:"fr-FR"` → `"en"` on EN build in `page.tsx:79`, `blog/[slug]/page.tsx:50`, `pourquoi-maintenant/page.tsx:36`, `glossaire-ia/page.tsx:219` (DefinedTermSet); plus Organization/Service `areaServed:["France","Maroc"]` and FR `url` are locale-fixed. Fold into the EN build.
- **TICKET-GDPR-CONSENT (🟠, also a live FR gap):** add purpose + lawful-basis + unsubscribe + `/confidentialite` link microcopy to the lead-capture forms. **audit-geo-gratuit** (email+company → `/api/lead` `"geo-audit"`, only "Gratuit. Sous 48h…" microcopy, no consent line), **scanner-opportunites-ia** (email+sector/size/pains → `/api/lead` `"scanner"`, no consent line on the wizard step), **playbook-ia** (`lead-capture.tsx` — consent line is a draft "add," not a confirmed field), **challenge-30-jours** (`ChallengeForm` — same). One shared consent component fixes all four. **calculateur-roi-ia is clean** (client-side only, no capture).
- **TICKET-CS-META-TITLE (🟠):** add `metaTitle` to `CaseStudyDetail` so Title ≠ H1 can ship (addictest, delassus, sage-geo).
- **TICKET-FORM-TITLE-TPL + TICKET-FORM-SEO-DESC (🟠):** strip the FR mid-suffix `| Formation IA en entreprise` from formation `generateMetadata`, and add a dedicated `seoDescription` field on `Formation` (today `resume` does triple duty). Affects all 6 formation children.
- **TICKET-FORMATION-ORPHAN (🟠):** `formation-ia-entreprise` field map targets `offer-pages/formation.ts`, which **no page imports** (`grep` returns nothing); the live page renders inline JSX + `@/lib/formations`. Mapped copy will not ship — reconcile the field map to the real source before treating that page's copy as landed.

---

## 4. Cannibalization & duplication map

**Verified clean (managed by explicit ownership — report as passes):** homepage owns the comparison table / 4 guarantees / 6-step method / fleet; siblings link, not re-answer. agence-ia owns "what does an AI consultant do"; ai-transformation owns program-level Q; ai-operating-system owns AI-OS Q. Case-study children each own their full before/after metrics (hub is teaser-only). Sector FAQ is cleanly partitioned (agences=creatives-replacement, conseil=confidential-interviews, esn=why-hire-outside + code-assistant, medecins=medical confidentiality, santé=life-sciences compliance, banque=financial regulation, hotellerie=chatbot + seasonal staffing, tpe-pme=company-size + time-to-results). **No duplicate FAQ answered in full on two pages was found.**

**Actual conflicts to resolve (one canonical owner each):**
1. **`/ai-readiness-assessment` slug + keyword collision (D-1 below).** Owner: the paid audit page.
2. **Sector data-safety boilerplate** — the residual "**data never used to train the models**" GDPR reassurance recurs across sector pages. **Canonical owner: `secteurs--tpe-pme`** (general "is our data safe" answer). santé, médecins, banque keep only their *compliance-specific* version and link up to tpe-pme rather than re-state the general one.
3. **`offer.model` block rendered on BOTH `/ai-transformation` and `/offre`** — single-source the EN translation. Owner: `/offre` (it's the offer page); ai-transformation references it.
4. **`ai training for employees`** keyword overlaps: the child `formation…acculturation-ia` and the pillar `/ai-training-for-teams`. Pillar owns `ai training for employees`; the child owns `ai literacy training`.
5. **"Anthropic Partner" badge wording** — one approved string site-wide (homepage, FDE, challenge), owned in this file (see B-2).

---

## 5. Cross-page factual inconsistencies (reconcile at source)

| Item | Conflict | Canonical value (settled by) | Fix |
|---|---|---|---|
| **Playbook page count** | `site-config.ts:111` megamenu says **43 pages**; everywhere else (playbook-config, page, diagnostic, outils, llms.txt) says **48** | **48** (llms.txt + playbook-config) | Edit `site-config.ts:111` `43`→`48`. |
| **Sector count** | `secteurs.ts` = **8** (8 cards, 8 sitemap routes); llms.txt prose lists **6** names; `playbook-ia` credibility block says **"6 sectors"** | **8** (secteurs.ts is the hub, canonical) | Update llms.txt sector list + playbook block to 8. |
| **Professionals trained** | brief/`formation-ia-entreprise` had stale **1,250**; live everywhere = **2,500+** | **+2,500** (llms.txt) | No live 1,250 remains — keep 2,500+; drop any stale 1,250. |
| **Bpifrance TPE-PME adoption** | `manifeste.ts:68` states **"55% … 17% régulièrement (Bpifrance)"** but the linked source slug says **31%** | The **cited Bpifrance source** — link says 31%; needs source check `[to validate]` | Align the stat to what the cited article actually reports (likely 31%) or fix the citation. Live FR contradiction carried into EN (pourquoi-maintenant). |
| **Leadership titles** | `a-propos` (page.tsx:98) says "the CEO, the COO and the **Chief of Staff**"; `equipe`/`fondateur` = Othmane **Founder & CEO**, Maneesh **COO**, Walid **CTO** (Person schema `Fondateur & CEO`) | Founder & CEO / COO / **CTO** (Person schema + equipe) | Reconcile a-propos — "Chief of Staff" has no named holder; either name them or align to CTO. Open question for client. |
| **AI-maturity scale** | `/diagnostic-ia` self-test scores **/20**; `/audit-ia-entreprise` AI Scan scores **/24** | Two different instruments (not a defect) | Frame explicitly on both pages so they don't read as the same score. |
| **"60–80% of repetitive work"** | untagged `figure` on ai-transformation; **deliberately dropped** as unverifiable on automatisation-ia-workflow | Not in llms.txt | One policy: tag `[to validate]` everywhere or drop everywhere (see CP figure policy below). |

**Figure policy (ruleset §7.3):** every figure not in `public/llms.txt` carries a visible `[to validate]` tag to sign-off. Applies to the 1,500+ automations, "6 people = team of 40," "9.6/10 / 100% would recommend," "$18k/yr" (hotellerie), "up to 2h/day" (medecins — note this ships **untagged** in the live FR `secteurs.ts` intro; the FR page should carry the same qualification).

### D-1 🟠 `/ai-readiness-assessment` collision (audit page vs. homepage quiz)
`audit-ia-entreprise` proposes slug `/ai-readiness-assessment` + primary `ai readiness assessment` (1,400/KD8). The **homepage** routes its "Test your AI maturity in 2 min" CTA to the same `/ai-readiness-assessment` — semantically the `/diagnostic-ia` quiz (/20), a different product from the paid AI Scan audit (/24). **Recommend:** the paid audit owns the slug + keyword; the quiz gets a distinct slug and the homepage CTA repoints.

---

## 6. FR-on-EN localisation items

- **ROI calculator (`outils--calculateur-roi-ia`, flagship):** outputs **euros**, values freed time at **gross × 1.45** (`CHARGES_PATRONALES=1.45`, French employer charges), over **47 weeks** (`HEURES_PAR_AN=47`), 35h week — on a US-primary "ai roi calculator" page. Decide a USD/US-locale basis or add an explicit "€ / French employer-charge basis" note; keep "~1.45" hedged as an assumption outside France.
- **OPCO / Qualiopi framing (all 6 formations + hub):** currently restrained — **no funding % and no certification asserted**, tagged `[to validate placement]`. Keep the restraint; make one client decision on where (if anywhere) the EN funding-eligibility line sits before adding it. This is the single most-regulated claim on the site.
- **Badges:** `"Osez l'IA"` (FR government campaign) and `Anthropic Partner` — decide keep-French vs. translate vs. drop for the US/GB audience (ties to B-2 verification).
- **FR city local-SEO strip** (`formation-ia-entreprise` `/formation-ia/{paris…casablanca}`) — drop or replace with EN-market geo on the EN page.
- **Currency conversions to confirm for the target market:** `ai-transformation` "$80k+/yr [to validate], converted from 70,000€"; `forward-deployed-engineer` €70k hire figure in FR framing.
- **Entity noun:** homepage "cabinet/studio" — pick one EN term ("studio" is the drafted choice).

---

## 7. Priority-ranked fix list (severity × effort)

### A. Content edits — ship now (no code gate)
1. 🔴 **Remove/replace the fabricated Groupe Partouche testimonial** (hotellerie). Blocks that page. (§B-1)
2. 🟠 **Strip hand-written `| AI Makers` / `— AI Makers` from every title field** — one pass fixes 12 titles that break the 60-char limit and the doubling everywhere. (§2a)
3. 🟡 **Trim the 10 meta descriptions > 160** (ia-maroc 209 → … → acculturation 168) and the 3 at the 160 ceiling. (§2b)
4. 🟠 **Reconcile source-of-truth figures:** playbook `43→48` (`site-config.ts:111`); sectors `6→8` (llms.txt + playbook block); Bpifrance 55/31 (verify cited source); leadership "Chief of Staff" line. (§5)
5. 🟠 **Apply the `[to validate]` policy** to unsourced stats (playbook stat wall, badges) and **hold** seo-geo (Sage +70%), addictest (pending testimonial), cardio-check-up/delassus (noindex) until sign-off. (§B-2)

### B. Dev tickets — gated (EN cannot ship correctly without these)
1. 🟠 **TICKET-OFFRE-SITEMAP** — 1 line, ship immediately (live bug, not EN-gated). (§3)
2. 🟠 **TICKET-EN-ROUTES** — routes + slugs + sitemap + hreflang + 301s; unblocks every EN internal link. (§3)
3. 🟠 **TICKET-I18N-SERVICEPAGE / -SECTORPAGE / -BESPOKE** — FR chrome renders on EN pages until these land. (§3)
4. 🟠 **TICKET-HTML-LANG + TICKET-JSONLD-INLANGUAGE** — locale signals contradict EN content. (§3)
5. 🟠 **TICKET-GDPR-CONSENT** — 4 lead forms; also a live FR compliance gap. (§3)
6. 🟠 **TICKET-CS-META-TITLE + TICKET-FORM-TITLE-TPL + TICKET-FORM-SEO-DESC + TICKET-FORMATION-ORPHAN** — unblock distinct Title/H1 and the formation-page copy. (§3)

---

## What the EN drafts get right, site-wide (verified)
- **Keyword validation is genuinely strong** — ~30 volumes/difficulties checked against Ahrefs (US) matched; drafts correctly reject high-volume-but-wrong heads (`ai agency` KD71→`ai consulting services` KD39; `geo` 55k namespace mirage; `agentic ai` 101k off-intent; `ai audit`→`ai readiness assessment` KD8).
- **Figure discipline is mostly excellent** — canonical llms.txt figures used verbatim; non-canonical figures largely `[to validate]`-tagged; automatisation even drops an unverifiable figure rather than ship it.
- **Schema is real, not planned** — every "FAQPage JSON-LD" claim is implemented; bonus Course/ItemList (formation), DefinedTerm + 2× Person-with-LinkedIn (FDE), BreadcrumbList/Service throughout.
- **Cannibalization is managed by explicit ownership** — comparison table, guarantees, 6-step method, fleet, per-topic FAQ owners; siblings reference, not re-answer. No duplicate FAQ found.
- **Compliance restraint is exemplary** where it matters most — the formation pages refuse to add any Qualiopi/OPCO funding claim until legal confirms.

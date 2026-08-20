# Cross-page findings — FR site-wide consolidation (authoritative)

Site-wide synthesis of all 55 per-page FR audits. Systemic issues are documented
once here; per-page files reference them (ruleset §8.1). This file supersedes the
earlier sector-only and pillar-only batches.

**Ground-truth re-verified this pass:** `src/app/layout.tsx` (`title.template: "%s | AI Makers"`,
`lang="fr"`), `src/app/sitemap.ts` (`/offre` absent from `staticRoutes`), `public/llms.txt`
(canonical figures + sector line), `src/lib/secteurs.ts` (8 entries; Partouche logo-only),
`src/lib/offer-pages/*.ts` (hand-written suffixes), `src/lib/metadata.ts`. Keyword data:
Ahrefs keywords-explorer, country=FR, French, 2026-07.

**Reading order:** A Blockers → B Engineering tickets → C Figure conflicts →
D Keyword corrections → E Cannibalization → F Top-N site priorities.

---

## Verified site-wide passes (report as passes; do NOT re-flag per page)

- **Schema genuinely implemented (not planned) almost everywhere.** ServicePage auto-emits
  `FAQPage` via `buildFaqSchema`; pillars add `Breadcrumb`+`Service`; FDE adds
  `DefinedTerm`+`Person`×2; glossaire emits `DefinedTermSet`+30 `DefinedTerm`; sector template
  emits `BreadcrumbList`+`FAQPage` for all 8. Only exception: **`/playbook-ia` has zero schema**
  (grep = 0) — minor GEO gap, not a defect.
- **`inLanguage: "fr-FR"` is CORRECT for the FR build** (glossaire, pourquoi-maintenant, etc.).
  Report as a pass — this is the FR mirror of the EN-side defect, not a bug here.
- **Indexability clean** for every audited route except the two gaps in Ticket B5/B7: routes are
  in `sitemap.ts`, canonicals self-referential, draft case studies correctly `noindex` + excluded
  via `getPublishedCaseStudies()`.
- **Canonical figure set** (`public/llms.txt`): +50 entreprises, +200 systèmes IA déployés,
  +2 500 formés, **7h/semaine par collaborateur**, équipe de 6, 3 clients/mois max, 4 garanties.
  Used consistently on most pages (homepage, a-propos, equipe, fondateur, garanties, capacite,
  agence-ia, secteurs/tpe-pme, etc.).

---

# A. BLOCKERS — resolve before publish/promotion

### A1 🔴 LIVE — Fabricated/broken Groupe Partouche testimonial (`/secteurs/hotellerie-tourisme-loisirs`)
`secteurs.ts` hotellerie FAQ Q2 (rendered live, `:480-483`) promises *"le Groupe Partouche
dans les loisirs (son témoignage est sur cette page)"*, but `site-config.ts:487` carries
Partouche as **logo/name only — no `testimonial` object**. The template renders a testimonial
only when the field exists, so **no Partouche quote ever appears**; `temoins.length===0` hides
the whole testimonial block. The FAQ claims a testimonial that is not and cannot be on the page.
**Fix:** apply the master — strip "(son témoignage est sur cette page)", keep Partouche as a
named logo only. Shipping now.

### A2 🔴 LIVE — AI Act "reporté à décembre 2027" stated as settled fact (`/gouvernance-ia`)
`gouvernance-ia/page.tsx:69-72` (timeline), `:134` (FAQ4), `:347` (body) state high-risk
Annex III RH obligations were "reportées à décembre 2027 par l'omnibus de juin 2026" with **no
hedge**. Under the adopted AI Act, Annex III high-risk obligations apply **2 Aug 2026**; the
June-2026 "Digital Omnibus" deferral is post-cutoff and legally mobile. If it did not pass as
stated, the live page understates clients' compliance deadline — money/compliance ⇒ 🔴
(ruleset §2 fixed rule). The draft correctly `[à valider]`-tags every instance; the LIVE copy
does not. **Fix:** legal sign-off on the omnibus date, then ship the draft's tagged wording;
keep `/securite` (which defers all AI Act detail here) as the clean sister.

### A3 🔴 vigilance / 🟠 compliance — `/etudes-de-cas/cardio-check-up` (keep noindex)
(1) The `client` field in `case-studies.ts` holds the real name "Dr Sana Amraoui"; the template
never renders `client` (verified) so it does not surface — **never map `client` to a rendered
field before the practitioner signs**; consider removing the name from the shipped bundle.
(2) FAQ #1 asserts "hébergement certifié santé" but the declared stack (Claude, Notion, Whisper,
Render) shows no HDS host — either confirm real HDS hosting or reword so the stated safeguard
(HDS vs full anonymisation) matches the actual setup. Contained today by `noindex`; both must
resolve before any indexation.

### A4 🟠 GATE — Sage "+70% visibilité IA" unvalidated, from an unpublished/noindex case
Appears on **homepage** (proof.cases), **ai-transformation** (proof bar), and **`/seo-geo`**
(entire proof spine: hero, proof bar, facts, why-us, meta, llms.txt). The case is
`inProgress`/noindex in `case-studies.ts` ⇒ `/etudes-de-cas/sage-geo` is not in
`getPublishedCaseStudies()`/sitemap, so seo-geo's "proof" link points at a noindex page.
**`/seo-geo` is BLOCKED until Sage signs off on +70% and the case is published** — one sign-off
clears all three pages and fixes the dead proof link. Also on seo-geo: the proposed Mickaël Mina
testimonial **adds a sentence** ("Un partenaire sérieux et pédagogue") not in `site-config` and
changes "par→pour"/"comprendre rapidement→saisir vite" — restore the verbatim source quote
(§7.2, never add words to a named person's testimonial).

### A5 🟠 GATE — FDE: ~8 external stats + 9 partner/cert badges live, none sourced/linked (`/forward-deployed-engineer`)
Running-copy stats from `fde.ts`: "95% des pilotes échouent (MIT 2025)", "+729%/×8 offres FDE
(Indeed)", "385 K$–1 M$" comp, "coentreprise OpenAI 4 Md$". Nine badges via `cert-badges.tsx`
(Clay/Google/Make/n8n/AWS/Azure + Anthropic "Claude certified architect"/Microsoft). All
`[à valider]` in the master, all live without a citation. Founder bios also state
untagged-in-copy specifics beyond canon ("250+ produits", Saudi/Morocco government work,
IBM→L'Oréal/GSK/Nestlé roster). **Fix:** one sign-off pass — link each stat, confirm each badge's
authorization, trim unverifiable bio specifics; keep `[à valider]` visible until then.

### A6 🟠 GATE (potential 🔴) — "Partenaire Anthropic" badge, site-wide, unverified
Rendered via `site-config.ts:1823` (`/images/badges/anthropic.svg`) on `footer.tsx:194`,
`cta-section.tsx:33`, `challenge-30-jours/page.tsx:32,162`, `transformation.ts:144`, homepage,
contact. An official-looking badge + the word "Partenaire" asserts a formal partner status; FDE's
"Claude certified architect" is the same claim. If not backed by a real Anthropic partner
programme, it is a false partnership claim ⇒ **🔴**. **Resolve once site-wide:** prove the status
or reword to a defensible form ("formations sur Claude / expertise Anthropic") and revisit the
badge. (Same applies to "Ambassadeur Osez l'IA" on homepage/contact.)

### A7 🟠 — Playbook unsourced stat wall (`/playbook-ia`)
`playbook-config.ts:25-35` ships `88%` / `700 Mds $` / `30%`, plus `50%/63%/13 pts` and
`95% des projets IA échouent`, **none carrying a `source` field** — displayed live as settled
percentages on a page that promises "zéro bullshit". "+300 dirigeants" (`:20`) is likewise
unverified. **Fix:** attach named citations (McKinsey/BCG/Y Combinator) or requalify as
qualitative before any promotion. Model to copy: `/outils/scanner-opportunites-ia`, where every
one of the 12 opportunities carries a visible `source`.

### A8 🟠 — Comparative / superlative compliance cleanup (FR advertising law)
One client decision covering all of:
- `/garanties` H1 "Pourquoi on est **les seuls à garantir** nos résultats" + FAQ5 "Pourquoi vos
  **concurrents n'offrent pas** de garanties" — unverifiable market-exclusivity absolutes.
- `/carrieres` "une **stack de pointe**" (`page.tsx:67` + meta) — draft already strips it and
  names the stack; ship the fix.
- `/capacite` + `/garanties` "freelance bouche-trou / équipe mutualisée / dix comptes en
  parallèle" — soft comparative framing (defensible as describing *our* model; monitor).
**Fix:** soften "les seuls" to a defensible basis ("Pourquoi on peut garantir…"), reframe FAQ5
around our model, complete the superlatives sweep.

### A-misc 🟠 — Named-client result figures live without the tag the drafts assign
- **homepage:** Qatar Tourism (18 000 $/an, −40%) and Shem's (10×) run **untagged** in
  `proof.cases` cards (only Sage carries `[à valider]`).
- **`/secteurs/hotellerie`:** 18 000 $/80% untagged (trace to Qatar Tourism, not named on page).
- **contact/formation-ia-entreprise:** "100% de recommandations" and "9,6/10" (see C4).
- **creation-publicite:** "x5 cycles de production" unsourced.
Carry the `[à valider]` through to rendered copy, or obtain written client sign-off.

---

# B. Systemic engineering tickets (name + scope; do not re-litigate per page)

### B1 — TICKET-TITLE-BRAND-SUFFIX (double brand + >60 overruns)
`layout.tsx:15` always appends `" | AI Makers"`. **Hand-written second suffix (double brand)
confirmed in code:** `offer-pages/formation.ts:17`, `offer-pages/ai-os.ts:15`,
`offer-pages/seo-geo.ts:22`, `offer-pages/manifeste.ts:11` (`/pourquoi-maintenant`),
`playbook-ia/page.tsx:28` (+ OG title `:31`). Legal pages (`cgv`, `confidentialite`,
`mentions-legales`) also hand-write it — verify they use `absolute` or they double too.
**Also >60 rendered once measured (+12 for suffix):** homepage (~66, brand ×2), offre (~65),
capacite (86→fix 49), a-propos (73→51), equipe (78→55), fondateur (>60→36), gouvernance (68→54),
securite (70→58), glossaire (63→56), formation-ia hub (76→55), challenge (71→57),
etudes-de-cas (71→52), diagnostic (73/possibly doubled→verify rendered `<title>`),
audit-geo-gratuit (71→59), scanner (74→~62), playbook (85, brand ×2), and all 8 sectors
(esn/conseil/medecins/hotellerie/banque 84–91→~51). Every master's shorter title fits.
**Fix:** strip hand-written suffixes; apply the shorter titles; template supplies brand once.

### B2 — TICKET-FORM-TITLE-TPL (formation children get a triple stack)
Formation-child titles render `… | Formation IA en entreprise | AI Makers` (a mid-level suffix
+ the root suffix), e.g. creation-publicite. Fix the formation `[slug]` metadata template so
children carry one brand suffix, not two.

### B3 — TICKET-CS-META-TITLE / TICKET-FORM-SEO-DESC (no dedicated meta fields)
Case-study `[slug]` pages derive `<title>` from H1 (`title`), and formation children reuse
`resume` for the meta description (triple-duty). There is no dedicated meta-title / meta-desc
field, which constrains every length fix on those templates. Add optional dedicated fields.

### B4 — TICKET-GDPR-CONSENT (lead capture has no privacy notice)
Data-capture surfaces missing a purpose statement + `/confidentialite` link at the point of
collection: **`geo-audit-form.tsx`** (email+company → `/api/lead`, grep privacy = 0),
**`challenge-form.tsx`** (email+company, grep = 0), **scanner-wizard.tsx:594** (email+sector+
size+pains; only "Zéro spam. Vos données restent chez nous."), **`LeadCapture`** default
`privacyNote` (`lead-capture.tsx:33`, weak generic — affects playbook capture),
**`/diagnostic-ia`** (text-only note, no policy link), **`/contact`** (Cal.com embed, no link).
`/confidentialite` exists in `sitemap.ts` legal routes. **Fix once at component + form level:**
purpose + opt-out + policy link.

### B5 — `/offre` sitemap gap
`/offre` is live, indexable, featured in `llms.txt`, but **absent from `sitemap.ts` `staticRoutes`**
(verified). Add it. (Also: `ai-transformation` links `→ /ai-partner`, a non-existent route; target
is `/offre`.)

### B6 — Per-sector CTA + llms.txt fields hardcoded (was CP-1/CP-2)
(a) `secteurs/[slug]/page.tsx:316-324` hardcodes the closing CTA ⇒ all 8 sectors show the
**identical** CTA; 7 masters propose distinct per-sector CTAs with no field to land in. Add
optional `ctaTitle`/`ctaSubtitle` to the `Secteur` type; tpe-pme owns the generic fallback.
(b) `public/llms.txt` has ONE generic sector line that **omits médecins-cabinets and
conseil-études-marché** (both live). Add per-sector lines, or at minimum list all 8.

### B7 — Maturity scale: /24 vs /20 is NOT a bug (correction to prior note)
Re-verified: `/diagnostic-ia` is a **/20 self-test** (`diagnostic-config.ts:45,422`, 10 scored +
2 qualif) and the **/24 AI Scan** is the separate human instrument (audit/homepage/offre/megaMenu).
The draft reconciles them as two instruments — correct. **Do not "fix" /diagnostic-ia to /24.**
Only ensure copy never conflates the two.

### B8 — Missing entity/JobPosting schema (enhancement, low priority)
`/contact` (NAP present) has no Organization/LocalBusiness schema; `/carrieres` lists 5 real jobs
with no `JobPosting`; `/playbook-ia` has no schema at all. Optional GEO/E-E-A-T upside.

---

# C. Figure / source-of-truth conflicts (pick canonical, fix at source)

### C1 — Sectors: **8** (canonical) vs 6
`secteurs.ts` = 8 top-level entries; `playbook-config.ts:169` says "6 secteurs couverts";
`llms.txt` sector line lists only 6 (omits médecins + conseil). Set all to 8.

### C2 — Playbook length: **48 pages** (canonical, `playbook-config.ts` + `llms.txt`) vs 43
`site-config.ts:111` mega-menu says "43 pages". Align to 48 (or confirm the real PDF page count
first). Also `playbook-config.ts:167` "+200 missions IA réalisées" → align to canonical
"+200 systèmes IA déployés".

### C3 — Founder title / phantom role (most systemic E-E-A-T issue)
Canonical set = **`/equipe`**: Othmane Halim = **Fondateur**, Maneesh Behera = COO,
Walid Boulanouar = CTO (matches `formateurs.ts:669-689`). Divergences to reconcile *toward* it:
`a-propos/page.tsx:98` names a **"Chief of Staff"** that maps to nobody; `:31` Person
`jobTitle:"CEO"` and `:172` "fondateur et CEO"; `fondateur/page.tsx:34` Person "Fondateur & CEO".
Pick ONE canonical `jobTitle` and drop the phantom Chief of Staff everywhere (copy + Person schema).

### C4 — bookingProof "9,6/10" + "100% de recommandations" source
Both live via `site-config.ts:604`/booking-proof component but **absent from `llms.txt`**
(verified). Contact draft mis-cites 9,6/10 as "canonique (llms.txt)". "100% de recommandations"
has no source. "9,6/10" is also a hard stat on formation-ia-entreprise but `[à valider]` on
homepage — tag inconsistently. **Fix:** add to `llms.txt` to make canonical (single source), or
retag as site-config-sourced; source-or-remove "100%".

### C5 — Bpifrance 55%/17% vs 31% (`/pourquoi-maintenant`)
`manifeste.ts:68` states "55% des TPE-PME utilisent l'IA générative, 17% régulièrement
(Bpifrance)", but the cited link `:113-114` is a Bpifrance study whose slug says **31%**. Either
correct to 31% + keep Bpifrance, or re-attribute 55%/17% to INSEE (`:117`) with the right link.
Master `[à valider]`; live copy untagged. Also QA the 7 external source hrefs; requalify two
unsourced illustrative figures (GPT-4 30$→0,15$/M tokens; "3 centimes/doc").

### C6 — homepage "5 à 10h/semaine" vs canonical "7h/semaine"
`benefits[0]` says "5 à 10h" while the counters + `llms.txt` say 7h. Not a contradiction, but two
figures for one metric on one screen. Headline on canonical 7h; frame 5–10h as the observed spread.

---

# D. FR keyword corrections to apply to the masters (Ahrefs FR, 2026-07)

| Term / page | Master claim | Ahrefs FR (correct) | Action |
|---|---|---|---|
| outil ia (glossaire/tools) | global 1300 | **700 FR** | use FR figure |
| agent ia (glossaire) | 6 600 | **7 700 / KD35** | correct up (glossaire is owner) |
| formation ia (formation hub/homepage) | 8 100 | **6 900 / KD55** | correct; leave head to `/formation-ia-entreprise` |
| glossaire ia | — | **100** (vocab 70, termes 0) | long-tail portfolio, not a head |
| playbook ia | — | **10** (global 40) | conversion asset, don't judge on it |
| generative engine optimization (seo-geo, audit-geo, glossaire) | 200 | **1 100 / KD21** | correct up; own the term early |
| référencement ia (seo-geo) | 150 | **350 / KD3** | correct |
| seo geo (seo-geo) | not listed | **800 / KD12** | add as on-intent secondary — seo-geo owns |
| creation-publicite primary "formation ia créative" | 150 | **~20** | pivot primary → **formation ia marketing 250/KD10**; body: **formation midjourney 300/KD0**, formation ia design 150 |
| étude de cas ia (etudes hub) | "volume modéré" | **~0** | requalify: low vol, exact intent (proof hub, not traffic) |
| audit geo (audit-geo tool) | — | **250** (commercial) | confirmed primary, exact intent |
| agent/agence/automatisation (homepage, agence-ia) | — | agence ia **2 400/KD54**, automatisation des processus **600/KD5**, transformation ia **100**, automatisation ia **900/KD24** | already correct — keep |
| forward deployed engineer (FDE) | — | **10 FR** (16k global) | correct: own the definition, not a volume play |

Sector primaries (re-confirmed, no two share a primary): ia pme 150 ✅, ia santé 350/KD42 ✅,
ia médecin 60 / ia médecine 200 ✅, ia hôtellerie 150 ✅, ia banque 100 / ia assurance 150(KD1) ✅;
weak-but-accepted (sector landings, expected): ia agence communication ~0, ia esn 0, ia conseil 100.

---

# E. Cannibalization map (clean split confirmed; assignments below)

- **No two money/sector/formation pages share a primary** — verified.
- **Health:** `/secteurs/sante-biotech-medtech` owns "ia santé" (institutions); `/secteurs/medecins-cabinets`
  owns "ia médecin/médecine" (practitioners). Adjacent SERP, distinct intent — keep tight.
- **Formation trio:** `/formation-ia` = geo intent ("formation ia [ville]"); `/formation-ia-entreprise`
  = catalogue + head term "formation ia" (6 900); `offer-pages/formation.ts` must not contest the head.
- **Shared secondary "formation ia marketing" (250)** → assign to **creation-publicite-ia**
  (créa/marketing fit); go-to-market-sales uses "prospection ia"/"formation prospection" instead.
- **"comment automatiser des processus métier avec l'IA"** → owned by `/automatisation-ia-workflow`;
  trim `/agence-ia` FAQ Q3 to a pointer.
- **"agent ia" (7 700, informational)** → `/glossaire-ia` is the definitional owner; commercial
  pages (agence-ia/automatisation) target commercial variants, not the definition.
- **`/offre` vs `/ai-transformation`** both describe the 3-phase AI PARTNER program — confirm
  ai-transformation owns the long-form method, `/offre` stays conversion-only.
- **Blog vs service:** `meilleures-agences-ia-france` (editorial) vs `/agence-ia` (commercial) —
  complementary intent; monitor, not yet a finding.

---

# F. Top site priorities (execute top-down)

1. **Apply the hotellerie master to production now** — clears the live 🔴 Partouche fabricated
   testimonial (A1). Zero external dependency.
2. **Legal sign-off + tag the AI Act "Dec 2027" claim on `/gouvernance-ia`** (A2) — live
   compliance-timing 🔴.
3. **Resolve the site-wide trust gates in one client pass:** "Partenaire Anthropic" badge (A6),
   Sage +70% publication (A4, unblocks `/seo-geo` + homepage + ai-transformation), FDE stats/badges
   (A5), homepage Qatar/Shem's tags, playbook stat wall (A7). Nothing ships on these until signed.
4. **Ship TICKET-TITLE-BRAND-SUFFIX (B1) + TICKET-FORM-TITLE-TPL (B2):** remove the 5 hand-written
   suffixes, apply the shorter titles — fixes double-brand bugs and 20+ over-60 titles at once.
5. **Ship TICKET-GDPR-CONSENT (B4):** privacy notice + `/confidentialite` link on geo-audit-form,
   ChallengeForm, scanner, LeadCapture, diagnostic, contact — legal exposure across every lead form.

Then, lower effort/risk: fix `/offre` sitemap + `/ai-partner` link (B5); reconcile founder title +
drop Chief of Staff (C3); align figure conflicts 48/8/7h/9,6/booking (C1–C6); restore the verbatim
Sage testimonial (A4); apply the D keyword corrections to the masters; add per-sector CTA + llms.txt
fields (B6); soften comparative/superlative claims (A8).

# Cross-Page / Corpus Synthesis — Anti-AI-Slop Audit

**Scope:** consolidation of the "repeated devices" lists from all 55 per-page reports. The premise of this pass: *per page, nothing is slop.* Every page cleared its own audit. But a device reused verbatim across 30+ pages stops reading as a chosen phrase and starts reading as a generated one — Layer 2.1 (negative parallelism), Layer 3.4/3.7 (uniform mass / coverage-over-depth), and Layer 6.3 (elegant-variation / template fill) fire only at corpus scale. This file is the de-duplication map. It does **not** re-litigate any page's score.

**One rule governs every fix below (Layer 15):** never synonym-swap. "systems, not slides" → "production systems, not demos" is still the same skeleton wearing new paint (Layer 17.6). The fix is always to **flatten the negation to its positive clause and let the fact stand alone.**

---

## 1. The corpus signature: "X, not Y" negative parallelism (Layer 2.1)

This is the house voice. The negation skeleton — "not X, it's Y" / "X, not Y" / "doesn't X — Y" / "not a slogan" — appears on **at least 35 of the 55 pages.** It is the single most-carried device in the corpus and the #1 synthesis finding. `blog.md` itself already named it "the top device for synthesis."

At corpus scale this splits into two populations that must be treated **oppositely**:

- **Inflating variant (the real slop tell).** The "not Y" is a straw man — a dream, a slide, a slogan — set up only so the "it's Y" can sound bold. It asserts a *posture*, not a *fact*. This is where the corpus reads generated. De-stack it.
- **Deflating / scoping variant (load-bearing — KEEP).** The "not Y" removes a claim the reader might otherwise assume: "a starting point, not an audit"; "real use cases, not a generic slide deck"; "not in general." This is honest expectation-setting doing real work. Deleting it *loses* information. Keep it.

The corpus-wide rule: **one negation per page, maximum, and only when the "not Y" clause removes a real misreading.** Flatten every inflating instance to its positive clause.

### Per-page verdict

| Page | Instances | Variant | Verdict |
|---|---|---|---|
| `playbook-ia` | 3 ("doesn't sell a dream — hands you a plan" / "Not just X — Y" / "No X — Y") | **Inflating** — the canonical offender | **DE-STACK to 1.** Keep "hands you a plan"; drop the dream/straw-man halves. |
| `formation-ia-entreprise` | ~9 ("Not a seminar" ×2, "not on a slide", "not career trainers", "not a break from it", "not a certificate", "measured on what your teams produce") | **Inflating**, densest positioning stack in corpus | **DE-STACK to 1–2.** Keep "trained by the people who ship AI to production"; flatten the rest to positive claims. |
| `ia-maroc` | 4 ("not X / not Y") — densest single-page instance in the sector/market batch | **Inflating** | **DE-STACK to 1.** |
| `gouvernance-ia` | 3 | Mixed | **DE-STACK to 1**, keep the one that scopes governance honestly. |
| `carrieres` | 2 ("not slides" + "It's not a slogan") — already doubled on-page | **Inflating** | **DE-STACK to 1** (per its own report: keep "ship production systems, not slides"; rewrite the slogan line to a plain fact). |
| `capacite` | 2 + "not a commercial choice" | Mixed (scarcity is a real constraint) | **DE-STACK to 1**; keep the scarcity-as-capacity one, drop the rhetorical one. |
| `garanties` | 2 | **Deflating** (guarantee context) | **KEEP** — load-bearing, honest scoping of what's promised. |
| `securite` | 1–2 | **Deflating** | **KEEP.** |
| `equipe` | 1 ("This isn't a slogan, it's our living proof") | Inflating but substantiated | **DE-STACK:** drop "isn't a slogan" half (see §2.7). |
| `a-propos` | "we don't X, we Y" | Inflating | **DELETE the negation**, keep the dogfooding fact. |
| `fondateur` | "not X, it's Y" | **In-voice, genuine** | **PROTECT — do not touch** (see §4). |
| `pourquoi-maintenant` | negative-definition staking | Mixed | **KEEP 1** paired with its sourced stat. |
| `blog` | "This isn't X. It's Y." | Inflating | **DE-STACK to 1.** |
| `audit-ia-entreprise` | "The real work, not the org chart" (×2); "Decisions, not a report that gathers dust" | Deflating (anti-consulting) | **KEEP 1**, de-dupe the ×2. |
| `homepage` | "systems, not slides"; "written into the contract, not onto a slide" | Signature taglines | **KEEP as owner** (see §2.2) — 1 each, not both stacked. |
| `agence-ia` / `ai-transformation` / `offre` / `automatisation` / `ai-operating-system` | "systems, not slides" family, 1 each | Echoes of homepage owner | **FLATTEN** to the positive claim; homepage owns the tagline. |
| `challenge-30-jours` | 4 ("Or it isn't" ×2 + scoping ×4) | **Deflating/scoping** — its own report calls it load-bearing | **KEEP** — expectation-setting, not elevation. |
| `secteurs` (hub) | "not in general" | **Scoping** | **KEEP.** |
| `formation-ia` | "real use cases, not a generic slide deck" | **Scoping** | **KEEP.** |
| `etudes-de-cas` (hub) | "for the method, not the logos" | **Deflating** | **KEEP.** |
| `outils--audit-geo-gratuit` | heaviest scoping concentration in its batch | **Scoping/honest** | **KEEP** (thin, but each removes a real over-claim). |
| `outils--scanner-opportunites-ia` | "Sourced figures, not promises" / "A starting point, not an audit" | **Scoping/honest** | **KEEP.** |
| `outils--calculateur-roi-ia` | 1, honest | **Scoping** | **KEEP.** |
| `plateforme-data-ia` | "Nothing is migrated, nothing is replaced" | Deflating (non-disruption) | **KEEP 1.** |
| Sector heroes (`sante`, `medecins`, `agences`) + `conseil` FAQ | negative-parallelism em-dash hero, shared verbatim | Inflating (shared component) | **VARY:** these are the *same* hero device on 3–4 sector pages; keep it on one, rewrite the others as a plain problem statement. |
| Case studies (`cardio-check-up` "isn't the technology but compliance", `addictest` "not X, Y", `thinkone` "not generic training") | 1 each | Deflating (verdict-bearing) | **KEEP** — each lands on a real constraint/lesson. |

**Net:** roughly half the instances are the inflating tell to de-stack; the other half are honest scoping to protect. The discriminator is always: *does the "not Y" clause delete a misreading, or just inflate the "Y"?*

---

## 2. Verbatim reused devices → keep-one-owner map

For each device: the pages it lands on, the **one page that keeps it**, and what the rest do.

### 2.1 CTA closer — "…leave with your first 3 AI quick wins — whether you work with us or not."
**Carried on (~14):** homepage, agence-ia, automatisation-ia-workflow, ai-operating-system, ai-transformation, audit-ia-entreprise, seo-geo, equipe, a-propos, fondateur, contact, plateforme-data-ia (variant), diagnostic-ia (adjacent), + all 8 sectors run the shortened "You leave with a plan whether you work with us or not."
**Owner:** **homepage** (booking + finalCta) keeps the full canonical line.
**Rest:** this is largely a shared UI component — where a page merely *renders* the shared CTA, leave it (reused component ≠ slop). The fix targets pages that **re-state the closer in body prose** on top of the component: cut the prose echo. Sectors keep their shorter variant as the sector house line; do not also give them the long form.

### 2.2 "systems, not slides" / "in the contract, not onto a slide" tagline family
**Carried on:** homepage, agence-ia, ai-transformation, offre, formation-ia-entreprise, automatisation ("systems to production, not licences/prototypes/demos"), ai-operating-system ("An OS, not tools").
**Owners (two distinct taglines):**
- "**systems, not slides**" → **homepage** (positioning).
- "**written into the contract, not onto a slide**" → **garanties / offre** (guarantee context, where "contract" is literal).
**Rest:** flatten to the positive claim — "we ship systems in production," "we write it into the contract." Do not let a third page mint a new synonym ("not demos," "not licences," "not a certificate") — that is Layer 17.6 laundering, the skeleton surviving under new paint.

### 2.3 Scarcity — "at most 3 new clients a month"
**Carried on:** homepage, agence-ia, ai-transformation, ai-operating-system, offre, forward-deployed-engineer, capacite ("Maximum.").
**Owner:** **homepage** (scarcity badge + finalCta urgency + guarantees credibility — it does the most work there).
**Rest:** state it once as a plain capacity fact if the page needs it; drop the "physically limited, not artificially" gloss everywhere except the owner. capacite's one-word "Maximum." fragment can stay as that page's own device.

### 2.4 Exit-guarantee — "everything stays with you: code, playbooks, trained teams"
**Carried on (~11):** homepage, offre, ai-transformation, ai-operating-system, plateforme-data-ia ("full ownership: infrastructure, pipelines, agents"), automatisation ("IP transferred to you in full"), agence-ia ("full IP transfer"), forward-deployed-engineer ("Everything is yours: systems, playbooks, trained teams"), securite, audit-ia-entreprise ("everything is yours, with or without us"), ia-maroc ("zero dependency").
**Owner:** **garanties** owns the canonical worded line (it is the guarantees page).
**Rest:** **partially protected** — this is procurement/compliance reassurance (see §4), so the *concept* legitimately recurs on securite, offre, and the sector/service pages. What to cut is the *verbatim triplet phrasing* ("code, playbooks, trained teams" / "Zero dependency, no hostages") repeated word-for-word. Let each page name the ownership item that matters to *its* buyer (data-page → pipelines & infra; formation → trained teams; automation → IP/source). Keep the fact, vary the noun.

### 2.5 Dogfooding set — "we run on what we sell" / "6 people, output of a team of 40" / cockpit · call-intelligence · tracker
**Carried on:** homepage (objection #3), ai-transformation, ai-operating-system, forward-deployed-engineer, a-propos (~3×), equipe, carrieres, seo-geo ("we practise what we sell").
**Owners (split by asset):**
- The **narrative** ("we run on what we sell") → **a-propos** (it's the identity page).
- The **"6 people / team of 40" stat** → this is a **canonical figure** shared deliberately with equipe/founder/carrieres; keep the *number* everywhere it's load-bearing, but only **one** page (a-propos) frames it with the "output of a team of 40" flourish — the rest cite the headcount plainly.
- The **specific internal systems** (cockpit / call-intelligence / tracker) → **forward-deployed-engineer** or **ai-operating-system** (where the mechanism is the point). Elsewhere, name at most one system, not the full set.
**Rest:** on seo-geo, ai-transformation, carrieres, keep the *proof* (we use our own X) but drop the repeated "we run on what we sell" framing sentence.

### 2.6 Sector data-safety boilerplate — "your data is never used to train the models" + "written usage rules"
**Carried near-verbatim on 4 sectors:** tpe-pme, sante-biotech-medtech, conseil-etudes-marche, medecins-cabinets.
**Owner:** the canonical data-safety statement belongs to **securite / gouvernance-ia** (protected compliance copy, §4).
**Rest (the 4 sectors):** keep the reassurance — it's necessary in an FAQ — but replace the generic sentence with the **sector-specific concrete**: médecins → patient records; banque/conseil → client deliverables & regulated data; sante-biotech → trial/literature data. Same guarantee, specific noun. This converts a template line into a Zero-Knowledge-passing one (Layer 5.1).

### 2.7 "It's not a slogan"
**Carried on:** equipe ("This isn't a slogan, it's our living proof") and carrieres ("It's not a slogan: it's the result of internal systems").
**Owner:** **equipe.**
**Rest:** carrieres deletes it (its own report already prescribes: rewrite to "Internal systems absorb the repetitive work, so six people ship like forty"). Two pages calling the same claim "not a slogan" is exactly what makes it read like one.

---

## 3. Uniform arcs (Layer 3.4 / 3.7)

Three families each run a single template. Individually each page is genuine; the **sameness across the family** is the corpus tell (shuffleable, modular, low paragraph-mass variance). The remediation goal is *controlled* variation — break the template on **one axis** in a minority of pages, chosen by editorial judgment, **without** installing a new rule ("every 3rd page varies" is just a second template).

### 3.1 The 7 case studies
`addictest, cardio-check-up, delassus, fondation-force, gepromed, sage-geo, thinkone`
**Shared arc:** TL;DR → "Where they started" → "What we built" (systems) → "How the mission ran" (steps + one "learned") → testimonial → FAQ → GEO answer-first + llms.txt. All 7 close on the **"Get the same results" CTA**; 3 (fondation-force, sage-geo, delassus) share the inProgress closer "Results are still being measured (mission ongoing)."
**Recommendation:** let **~2 of the 7** end on a **hard fact** (a number, a named constraint, a next-step already shipped) instead of the "Get the same results" CTA — the completed cases (with measured results) are the natural candidates. Keep the inProgress closer verbatim on the 3 ongoing ones (§4 — it's an honesty tag). Do **not** re-order the arc for all 7; vary only the ending, and only where a real fact exists to land on.

### 3.2 The 6 formations
`acculturation-ia, creation-publicite-ia, go-to-market-sales, maitriser-claude, microsoft-copilot, vibe-coding`
**Shared arc:** fiche → objectifs (4) → programme (4 modules) → resultats (3 stats) → catalogue/trainers → CTA → FAQ (3) → GEO. Verbatim boilerplate: "Trained by the people who ship AI in production" · "Get the full training catalogue / Send me the catalogue" · "Book a diagnostic" · the "we'll scope the program around your tools" CTA. Uniform 3-question FAQ set (who-for / which-tools / based-on-our-cases).
**Recommendation:** the trainer line and catalogue CTA are shared-component copy — leave them (reuse ≠ slop). The **uniform FAQ set is the real tell**: 6 pages answering the same 3 templated questions. Replace **one** of the 3 FAQ slots per page with a **course-specific** question a real prospect asks (Copilot → "does this need an M365 licence?"; vibe-coding → "do I need to code first?"; the microsoft-copilot and vibe-coding reports already show these course-specific questions exist). That single swap breaks the template while keeping the arc.

### 3.3 The 8 sectors
`agences-communication, banque-assurance-courtage, conseil-etudes-marche, esn-services-it, hotellerie-tourisme-loisirs, medecins-cabinets, sante-biotech-medtech, tpe-pme`
**Shared template:** colon-headline use-case card rhythm (all 8) · CTA closer "You leave with a plan whether you work with us or not." (all 8) · GEO closer "among 50+ companies and 200+ systems deployed" (all 8) · CTA title "What would AI change in your [X]?" noun-swap (6 of 8) · the "…and watch" use-case device (agences/sante/conseil/medecins) · "reviewed by consultants instead of written from scratch" (conseil = esn, verbatim).
**Recommendation:** the card grid and GEO line are shared components — keep. The **noun-swap CTA title** ("your firm / your practice / your operation") is the most mechanical tell: 6 pages filling one template slot. Give at least **3 of the 6** a genuinely sector-native question instead of the noun-swap (médecins/sante already broke it with "Where would AI give you clinical time back?" — that's the model). Fix the **verbatim conseil=esn "reviewed by consultants instead of written from scratch"**: one keeps it, the other states its own review reality.

---

## 4. PROTECT — do not let reconciliation "clean" these

Agent 2 (reconciliation) must treat the following as **out of scope for de-duplication**. They are either genuine human presence (Layer 16), honest epistemics, or necessary compliance — "cleaning" them would *lower* corpus quality.

1. **The `fondateur` first-person letter — net −6 (SDS 12 − HPC 18).** The strongest-scoring page in the corpus. Its negative-parallelism ("not X, it's Y") is **in-voice and genuine**, not the template tell. Its repeated spine "concretely, how do we do this?" (H1, Ch.2, CTA) is intentional structure. **Do not de-stack, do not de-dupe against the corpus signature.** Leave it entirely.

2. **All honesty / provenance tags.** `[to validate]` markers, `inProgress` closers ("Results are still being measured (mission ongoing)" on fondation-force / sage-geo / delassus), and `noindex` status notes. These are Layer 16 temporal-honesty credits, not filler. Repetition of the inProgress closer across the 3 ongoing cases is **correct and required** — it must stay uniform *because it is a status flag, not prose.*

3. **Necessary compliance / guarantee repetition.** The audit-refund conditions ("< 3 high-ROI use cases → refunded 100%", "30-day impact guarantee"), the reversibility / "run in your accounts" / "IP reverts to you" language, and the data-safety statement — repeated across garanties, securite, gouvernance-ia, ia-maroc and the sectors **by design** (procurement reassurance). securite's report already flags "shared verbatim with gouvernance-ia (necessary cross-page consistency, not slop)." Vary the *illustrative noun* per audience (§2.4, §2.6), but never cut the guarantee itself for anti-repetition reasons.

4. **The tools' method-transparency presence.** `outils--scanner-opportunites-ia` (named-source transparency), `outils--calculateur-roi-ia` ("device-light… earns presence through method, not rhetoric"), and `outils` hub ("no invented numbers", "an oversell is worse than no tool", "no forced signup"). These are Layer 16 credits earned through *method*, not voice. The scoping negations here ("A starting point, not an audit") are the **deflating** variant — protected under §1.

5. **The deflating/scoping negations named KEEP in §1** — challenge-30-jours' expectation-setting, secteurs' "not in general", formation-ia's "not a generic slide deck", the case studies' verdict-bearing contrasts. These are honest and load-bearing; a blanket "reduce negative parallelism" pass would strip them. The de-stack targets are the **inflating** rows only.

6. **Canonical figures as consistency.** +200 systems / +2,500 trained / 6-people-team-of-40 / 7h-per-week / maturity-out-of-24 / autonomy-at-6-months. These *should* be identical everywhere they appear — a number that drifts page to page is worse than one repeated. Keep the numbers uniform; vary only the sentence that frames them.

---

## 5. Prioritised remediation list (for the content producer)

Highest-impact de-duplication first. Format: **page → device → action.**

1. `formation-ia-entreprise` → ~9 inflating "not X" negations → **DE-STACK to 1–2**; flatten the rest to positive claims. *(Densest single-page stack; biggest single win.)*
2. `playbook-ia` → 3 "doesn't sell a dream — hands you a plan" negations → **DE-STACK to 1**, keep the plan clause.
3. Corpus-wide → "systems, not slides" / "not onto a slide" tagline family (7 pages) → **homepage + garanties keep; flatten the other 5** to the positive claim. No new synonyms.
4. `ia-maroc` → 4 stacked "not X/not Y" → **DE-STACK to 1.**
5. 4 sectors (`tpe-pme`, `sante`, `conseil`, `medecins`) → generic "data never used to train the models" → **replace-with-fact**: swap in the sector-specific data type. *(Also upgrades Layer 5.1.)*
6. 8 sectors → noun-swap CTA title "What would AI change in your [X]?" → **replace ≥3 with sector-native questions** (médecins/sante already model this).
7. `conseil` = `esn` → verbatim "reviewed by consultants instead of written from scratch" → **one keeps, the other rewrites** to its own review reality.
8. 6 formations → uniform 3-question FAQ set → **swap 1 slot per page** for a course-specific question.
9. 7 case studies → all close on "Get the same results" CTA → **let ~2 completed cases end on a hard fact** instead.
10. `carrieres` → "It's not a slogan" + "not slides" (doubled on-page) → **DE-STACK to 1**; equipe keeps "not a slogan," carrieres deletes it.
11. Dogfooding framing sentence ("we run on what we sell") on seo-geo / ai-transformation / carrieres → **a-propos keeps the narrative; others keep the proof, drop the framing line.**
12. Exit-guarantee verbatim triplet ("code, playbooks, trained teams") across ~11 pages → **garanties owns the phrasing; each other page names its buyer's ownership item** (keep concept, vary noun — do NOT cut, it's compliance).
13. `gouvernance-ia` (3), `carrieres` (2), `capacite` (2), `a-propos`, `blog`, `audit-ia-entreprise` (×2 "real work") → residual inflating negations → **DE-STACK each to 1.**

Items 1–4 remove the loudest corpus signal (the inflating negation) and stop the tagline laundering. Items 5–9 break the three uniform arcs on one axis each. Items 10–13 clean the long tail. Everything in §4 is off-limits regardless of position on this list.

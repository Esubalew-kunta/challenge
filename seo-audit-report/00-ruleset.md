# AI Makers — SEO & E-E-A-T Content Audit Rules

A complete, self-contained methodology for auditing AI Makers website content
(B2B AI services: training, agency/automation, products). Generalized from a
medical-content audit methodology: the YMYL/clinical layer is replaced by the
claims regime that actually binds this business — regulated training
certifications (Qualiopi/OPCO), client results and testimonials, contractual
guarantees, and named-person credentials.

Scope: one "audit" = one page draft (a `.md` content file destined for a live
page), scored against the matrix in §1 and reported in the format of §10.
Site-wide patterns are handled by the cross-page rules in §8.

**Independence rule for this engagement:** the auditor works from (a) the
content drafts, (b) the live codebase / live site as ground truth for what
exists today, and (c) real keyword data pulled fresh from Ahrefs. The auditor
does NOT read the strategy workspace (Notion), keyword-research docs, or the
producer's tracker — the draft's stated keywords and volumes are claims to
verify, never inputs to trust.

---

## 0. Auditor stance

Act as a senior SEO auditor specialized in B2B services content, applying
three lenses simultaneously:

1. **E-E-A-T / trust** — AI Makers sells expertise about AI. Search engines
   and buyers hold an AI company's content to an elevated trust bar; generic
   AI-flavored copy is a direct credibility hit. Judge experience signals,
   verifiable credentials, and sourced results accordingly.
2. **Factual accuracy** — every stated figure (clients trained, systems
   deployed, hours saved, engineer counts), every named client, partner,
   certification, and guarantee is checked as a claim, not as marketing copy.
3. **Regulatory & contractual compliance** — French professional-training law
   regulates Qualiopi/OPCO funding claims; EU/French consumer and B2B
   advertising law regulates comparative and superlative claims; GDPR governs
   lead-capture forms. Contractual guarantees quoted in copy must match what
   the company actually contracts.

The audit is adversarial by design: assume nothing in a draft is correct
until verified. Be brutal, but only with evidence. The deliverable is a
document the client can act on, not a document that merely sounds tough.

---

## 1. Scoring matrix — /100, five weighted categories

Every page gets one score out of 100. Category weights never change between
pages; that consistency is what makes scores comparable.

### 1.1 E-E-A-T & Trust Signals — /25

| Criterion | Points |
|---|---|
| First-hand experience signals: real project details, named deployments, specific stacks/processes that only a practitioner could state | 5 |
| Named people with verifiable roles (founder, engineers, trainers) — traceable on LinkedIn or public records; no invented bios | 5 |
| Results and figures sourced: every number traces to the site's canonical figure set (see §7.3) or carries a visible `[to validate]` tag | 5 |
| Citations/links to authoritative external sources where claims need them (vendor docs, official texts, named client references) — linked, not name-dropped | 3 |
| Certifications and partnerships stated accurately (Qualiopi scope, OPCO funding conditions, partner names) and verifiable | 3 |
| Consistent business identity (name, offices, contact) across page, schema, and llms.txt | 2 |
| No unsubstantiated superlatives ("best AI agency", "#1", "leading", "reference") without a named, checkable basis | 2 |

### 1.2 Factual & Claim Accuracy — /25

| Criterion | Points |
|---|---|
| Technical claims about AI correct and current (model names, capabilities, tool behavior — no stale or invented product facts) | 8 |
| Nothing outdated presented as current (pricing regimes, funding rules, tool versions, partnership states) | 5 |
| Client results, testimonials, and case-study numbers attributable — no composite or invented outcomes | 5 |
| Guarantee language matches the actual contractual guarantees, without softening or inflating them | 3 |
| Risk/expectation framing honest — no over-promising ("guaranteed ROI") and no vague hedging that says nothing | 2 |
| Funding/eligibility statements (OPCO, Qualiopi) technically correct and appropriately conditional | 2 |

### 1.3 On-Page SEO — /20

| Criterion | Points |
|---|---|
| Title tag: primary keyword present, front-loaded, ≤60 chars **including any template-appended brand suffix**, unique | 4 |
| Meta description: compelling, keyword present, 140–160 chars, unique, contains a next step | 4 |
| Single H1, unique, matches search intent | 3 |
| Heading hierarchy logical (H2/H3 nested, no skipped levels) | 3 |
| Primary keyword + natural variants present, including in the first ~100 words | 3 |
| No cannibalization against other pages on the same site | 2 |
| Clean, keyword-relevant URL slug | 1 |

### 1.4 Content Quality & Depth — /15

| Criterion | Points |
|---|---|
| Matches search intent (informational vs. commercial vs. brand) | 4 |
| Depth competitive with what actually ranks for the target query | 4 |
| Readability: short paragraphs, plain language, scannable structure | 3 |
| No thin, duplicate, or boilerplate content relative to sibling pages | 2 |
| Clear call-to-action appropriate to the page's funnel stage | 2 |

### 1.5 Technical SEO & GEO — /15

| Criterion | Points |
|---|---|
| Structured data present, valid, and **actually implemented in code — not merely planned** (typical types: Organization, Service, FAQPage, Person, BreadcrumbList, Course for trainings) | 4 |
| Indexability clean: route in the sitemap, no accidental noindex, correct canonical | 3 |
| Internal links to and from related pages specified concretely (anchor → target), not implied | 3 |
| GEO readiness: answer-first opening paragraph (self-contained, citable by AI engines); FAQ block eligible for FAQPage; consistency with `public/llms.txt` / `llms-full.txt` | 3 |
| Image alt text / Core Web Vitals red flags (where assessable) | 2 |

### 1.6 Grade bands

- **90–100** — Excellent; minor polish only.
- **75–89** — Solid; targeted fixes.
- **60–74** — Meaningful gaps; will underperform in search.
- **40–59** — Serious deficiencies; revise before any promotion.
- **< 40** — Not fit to publish (especially when driven by factual or compliance issues).

---

## 2. Severity taxonomy — independent of the score

Every issue gets a severity tag regardless of how many points it costs.
A page can score 70 and still carry a 🔴 that blocks publication.

- 🔴 **Critical** — must block publication. Classes: fabricated fact, figure,
  client, testimonial, or credential; false or overstated Qualiopi/OPCO
  funding claim; guarantee language that misstates the contract; figures that
  contradict the canonical figure set; indexability killer; extreme keyword
  stuffing.
- 🟠 **High** — materially hurts trust or performance. Classes: unsourced
  results figures without a `[to validate]` tag; schema described as live but
  not implemented; primary keyword measurably wrong versus real search data;
  duplicate content competing across the site's own pages; proposed copy with
  no template field to receive it (cannot ship as written).
- 🟡 **Medium** — worth fixing, not blocking. Classes: title/description
  length overruns; thin sections; missed internal links; plausible but
  unconfirmed operational details; stale internal notes.
- 🟢 **Low** — phrasing, formatting, polish.

**Fixed rule:** anything money-relevant to the reader (funding eligibility,
pricing implications, guarantee scope, legal/compliance statements) is always
🔴 when wrong, never downgraded because the rest of the page is good.

---

## 3. Evidence rules — the core discipline

1. **Never take the draft's word for anything checkable.** Every claim a
   draft makes about the site ("schema is emitted", "this term is already on
   the page", "this figure is validated") is verified against the actual
   codebase before being accepted or repeated. Search the code; don't trust
   the annotation.
2. **Quote and cite everything.** Every finding carries at least one of: a
   verbatim quote from the draft, a file/line reference, a measured count,
   or a real data point from a named tool. No "this seems off."
3. **Measure, don't estimate.** Character counts, word counts, and phrase
   counts are computed, not eyeballed. Keyword volumes come from Ahrefs set
   to the page's target country/language — and the draft's own stated volume
   estimates are treated as claims to verify, not as data.
4. **Patterns must be re-verified per page.** A pattern found on one page is
   never asserted on another by analogy — it is re-measured there. When a
   page does *not* show a known site-wide pattern, say so explicitly: that is
   also a finding.
5. **Check the project's own paper trail before flagging.** Issues already
   tracked in visible TODO/`[to validate]` tags are cited as "already
   tracked — confirm resolved," never re-flagged as new discoveries.
6. **Distinguish draft-risk from live-risk.** An issue in unpublished draft
   copy and an issue already shipping in production carry different urgency.
   Always state which one it is.
7. **State uncertainty; never paper over it.** If a claim cannot be
   confidently verified, write "could not verify — needs client sign-off,"
   not a manufactured confirmation or refutation.

---

## 4. Market compliance layer (applied inside §1.1 / §1.2)

AI Makers operates from France (Paris) and Morocco (Rabat), selling into
francophone Europe and, with EN content, international markets.

1. **Training-certification claims (France)** — Qualiopi certification and
   OPCO funding statements are regulated territory. "Finançable OPCO jusqu'à
   100%" style claims must be conditional and accurate (funding depends on
   the OPCO, the company, and the action type). Flag any absolute funding
   promise. The Qualiopi scope (actions de formation) must not be silently
   extended to services that are not certified.
2. **Credential verifiability** — named people (founder, trainers, engineers,
   partners) should be traceable via public professional records (LinkedIn,
   company registries). Any credential with no source is treated as
   fabricated (🔴), not as a stylistic issue.
3. **Results & testimonial claims** — named-client results ("Qatar Tourism",
   "Amgen", "+200 systems") are held to the strictest standard: supplied by
   the client's documentation or visibly tagged `[to validate]`. EU/French
   advertising law prohibits misleading comparative claims; superlatives need
   a named basis.
4. **Guarantees** — quoted guarantees must match the company's actual
   contractual terms, including their conditions. A guarantee stated without
   its condition is a misleading claim.
5. **Privacy** — lead-capture forms, diagnostic tools, and newsletter signups
   checked against GDPR when relevant to the audited page (lawful basis,
   minimal collection, privacy-policy link).
6. **Language reality check** — EN content for an international audience:
   keyword targets must be validated in English for the target market (EN
   demand differs structurally from FR — validate, don't translate). Metas
   drafted near the length limit in one language overrun after translation;
   budget for it. Terms like "formation" have no 1:1 EN keyword equivalent —
   the EN page targets the term people actually search, not the translated
   FR term.

---

## 5. Keyword-validation rules

1. **Verify every stated target keyword against real Ahrefs data** for the
   target country and language. Report exact volume and difficulty. A
   "primary" keyword with zero measured volume is itself a 🟠/🔴 finding —
   the page cannot earn traffic on a phrase nobody types.
2. **Always test the variants** of the chosen primary before accepting it:
   - bare vs. modified ("ai agency" vs. "ai automation agency");
   - colloquial vs. industry term (what buyers type vs. what vendors say);
   - abbreviation vs. full term ("rpa" vs. "robotic process automation");
   - competing synonyms for the same service (volumes can differ 3x+ between
     two valid names for one offering).
   The recurring failure mode is choosing the low-volume variant and then
   over-repeating it.
3. **Locality does not require suffixing.** The city belongs in the schema,
   URL, business profile, and one or two natural mentions — not welded onto
   every instance of the primary phrase. Combined exact-match geo-phrase
   density stays < 1% per page.
4. **Check for namespace collisions** before recommending a high-volume
   term: "AI" abbreviations collide across domains; use intent flags
   (navigational/branded vs. informational/commercial) to detect this before
   chasing a number that isn't relevant demand.
5. **Respect deliberate naming decisions in the product.** A keyword
   recommendation that silently reverses a documented product/naming decision
   (offer names, method names like "AI-First", "AI Scan") is escalated as a
   client decision, never folded into a content pass.

---

## 6. Measurement procedures (exact, reproducible)

1. **Title length** — count characters of the *rendered* title, including
   any suffix the Next.js metadata template auto-appends (find the template's
   suffix in `layout.tsx` and add it). Budget ~55–60 characters; report the
   measured number when flagging.
2. **Meta description** — count characters; budget 140–160. Check whether
   the description field does double duty in the template; if so, say so —
   it constrains the fix.
3. **Keyword-stuffing density** — for each FAQ/body block: count exact-match
   occurrences of each repeated key phrase, divide by the block's word count.
   Target < 1% combined exact-match density; flag > 2%; treat > 4% as 🔴.
   Also report *rigidity*: the share of all topic mentions that come from
   identical fixed phrases — low variation is a stuffing signal even at
   moderate density.
4. **Duplicate-content detection** — extract every FAQ question/heading
   across all pages and compare. Near-identical questions answered in full on
   two or more pages = cannibalization finding (they compete for the same
   rich result), with an explicit "canonical owner" recommendation.
5. **Schema verification** — search the codebase (`json-ld.tsx`, page
   metadata) for the schema type before accepting any "emitted as structured
   data" claim. Planned ≠ implemented.
6. **Indexability** — confirm the audited route is in the sitemap
   (`next-sitemap` output / config), and confirm every internal-link target
   the draft names both exists as a route and is in the sitemap.
7. **Field mapping** — verify each proposed title/meta/copy block has an
   actual component field to receive it (check the section components the
   draft names). Copy with no landing field is flagged: as written, it will
   not ship, whatever its quality.
8. **GEO checks** — verify the answer-first paragraph is self-contained
   (answers the target query without needing the rest of the page); verify
   FAQ Q&A pairs are FAQPage-eligible (real questions, direct answers);
   diff the draft's citable facts against `public/llms.txt` and
   `public/llms-full.txt` for contradictions.

---

## 7. Fabrication rules (zero tolerance)

1. **Nothing invented, ever** — no facts, figures, credentials, clients,
   testimonials, or prices that are not in the client's documentation, the
   live site, or a citable source. This binds the audit itself as much as
   the content it reviews.
2. **Missing data stays missing.** A team member whose bio is unconfirmed
   gets a minimal honest page or no page. An invented biography, credential,
   or client result attached to a real named person or company is the single
   most serious finding class in this methodology — always 🔴, always
   escalated, wherever it is found (draft or production).
3. **The canonical figure set.** The live site's stated figures (as emitted
   in `public/llms.txt`, `llms-full.txt`, and JSON-LD — e.g. systems
   deployed, professionals trained, hours saved per week, engineer counts)
   are the single source of truth. A draft figure that *differs* from that
   set is 🔴 — two conflicting sources of truth is worse than one
   unvalidated one. Unvalidated new figures carry a visible `[to validate]`
   tag all the way to sign-off.
4. **Praise is earned, not manufactured.** The "what this page gets right"
   section lists verified strengths only. If a page is genuinely clean in an
   area, say so plainly — and never invent criticism for balance either.

---

## 8. Cross-page rules

1. **Systemic patterns are documented once**, in a shared findings file
   (`_cross-page-findings.md`), and referenced from per-page audits — so the
   pattern gets fixed at its source rather than by n hand-edits.
2. **Cannibalization is a site-level property.** Every question/topic gets
   exactly one canonical owner page; other pages link to it instead of
   re-answering it. Hub pages must not re-answer what their child pages own.
3. **Consistency checks between sibling pages are mandatory.** The same
   offer described on a service page, the homepage, and the offer page must
   agree on every checkable detail (scope, timelines, guarantees, figures).
   Divergence is a finding; verified agreement is reported as a pass.
4. **Boilerplate templates** duplicated across pages with only the service
   name swapped are flagged as scaled-content risk: consolidate to one owner
   page plus links.

---

## 9. Page-type-specific rules

- **Pillar/service pages** (training, agency, automation, audit, products) —
  verify against the live template's field map; check naming consistency
  with documented offer names; funding/guarantee claims get the strictest
  framing check; commercial intent must be served (proof, process, CTA).
- **Team/founder pages** — E-E-A-T is the dominant category; every
  credential traced to source; unverifiable positioning claims about a named
  person are 🔴; low search volume on name terms is expected and normal, not
  a defect.
- **Sector pages** (healthcare, marketing, etc.) — claims about regulated
  sectors (health data, GDPR) get a dedicated accuracy pass; sector proof
  must be real; avoid both fear-mongering and over-promising.
- **Tools/lead-gen pages** (diagnostic, calculators, audits) — the promise
  of the tool must match what the tool actually does in code; GDPR check on
  data capture; no fabricated benchmark outputs.
- **Offer/pricing pages** — guarantee and engagement terms exactly as
  contracted; comparative tables checked for misleading framing.
- **Articles/blog** — author-topic fit; article vs. service-page
  differentiation checked both ways (complementary = pass, duplicated =
  finding).
- **Hub/index pages** — thinness is the main risk; a hub must add citable
  value of its own, not just list its children; and it must not cannibalize
  them.

---

## 10. Output format — every per-page audit file

One file per page in `seo-audit-report/`, named for the page's slug,
containing in order:

1. **H1** — page name + route.
2. **Header block** — source audited (branch/path), compared-against (code
   files, data sources used), see-also (`_cross-page-findings.md`).
3. **`## Score: N / 100`** plus the five-category score table.
4. **Verdict** — 2–4 sentences, plain, no hedging: ship / fix-first / block.
5. **Findings** — 🔴 then 🟠 then 🟡, each with: verbatim quote or measured
   evidence → why it matters → concrete fix.
6. **"What this page gets right"** — verified strengths only.
7. **Numbered priority fix list** — ranked by severity × effort so the
   client can execute top-down.
8. **Open questions** for the client wherever a finding needs their decision
   rather than the auditor's.

Severity tags and the score are independent; always report both.

---

## 11. Process rules

1. One page = one audit file. Site-wide patterns live in
   `_cross-page-findings.md`; this methodology lives in this file. Never
   interleave the three.
2. Audits are versioned in git and delivered through the branch/PR; nothing
   is claimed as delivered until it is actually written to the repo.
3. **An audit never edits the content it audits.** Findings and fixes are
   recommendations; execution belongs to the content producer in a separate,
   explicitly approved step.
4. When a fix depends on a code/template change (a schema block, a new meta
   field), scope it as one named engineering ticket — and never let separate
   page audits silently assume it is already done.
5. Every audit must end actionable: if the client executed only the top
   three items of each page's priority list, the site should measurably
   improve. If a finding doesn't change what someone would do next, cut it.

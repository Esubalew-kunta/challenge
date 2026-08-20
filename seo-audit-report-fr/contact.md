# Contact — /contact

**Source audited:** `[FR] website-content/contact/contact.md`
**Compared against:** `src/app/contact/page.tsx` (live metadata, BreadcrumbList JSON-LD), `src/components/shared/cal-embed.tsx`, `src/components/shared/booking-proof.tsx`, `src/lib/site-config.ts:bookingProof`, `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt` + `llms-full.txt`.
**See also:** `_cross-page-findings.md`

## Score: 82 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust | 20 / 25 |
| Factual & Claim Accuracy | 22 / 25 |
| On-Page SEO | 18 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 9 / 15 |

## Verdict
Fix-first on two trust items, then ship. Conversion endpoint with correctly minimal keyword ambition. Copy and NAP data are clean and match canon, but (a) the "9,6/10" figure is mis-attributed to llms.txt when it actually lives only in site-config, (b) "100% de recommandations" is an untagged-in-production results claim (draft tags it), and (c) the booking embed has no visible privacy link — a GDPR gap on a data-capture page.

## Findings

### 🟠 High
1. **"9,6/10 satisfaction" is mis-cited as canonical.** Draft §55/§78 states "9,6/10 est canonique (llms.txt)". It is **not** in `llms.txt` or `llms-full.txt` (verified by grep) — it exists only in `site-config.ts:604` (`target: 9.6`), the live booking-proof source. The number is therefore real (matches the live component) but its cited source of truth is wrong. Ruleset §7.3: the canonical figure set is what's in llms.txt/JSON-LD. Fix: either add "9,6/10" to `llms.txt` to make it genuinely canonical, or re-tag it in the audit trail as site-config-sourced. Not fabricated, but two-source ambiguity is exactly what §7.3 warns against.
2. **"100% de recommandations" is an unsourced results figure.** It appears in the booking-proof block but is not in llms.txt and has no clear source. The draft correctly tags it `[à valider]` (§52, §79) and flags "source-or-remove" — so it is tracked, not a new discovery. **Confirm it is sourced or removed before publish** (ruleset §2: unsourced results figures; here the tag downgrades urgency but it must resolve).

### 🟡 Medium
3. **GDPR: booking embed with no privacy link.** The page embeds a Cal.com booking flow (collects name/email) and, per live `page.tsx` and the draft, shows no `/confidentialite` link near the form. Ruleset §4.5 (lawful basis, privacy-policy link on lead capture). `/confidentialite` exists in the sitemap legal routes — add a visible link at the point of data capture.
4. **Partnership badge should be verifiable.** `site-config.ts:1823` "Partenaire Anthropic" (and "Ambassadeur Osez l'IA") render as trust badges. Ruleset §1.1 requires partnerships stated accurately and verifiable. Confirm the Anthropic partner status is formally accurate — courtesy verification, already live.
5. **No Organization/LocalBusiness schema.** Only BreadcrumbList is emitted. A contact page with a NAP (60 rue François 1er, 75008 Paris) is the natural place for Organization/LocalBusiness structured data — enhancement ticket, strengthens entity/NAP consistency.

### 🟢 Low
6. **Title kept at 58 chars, meta enriched to 157** (both verified, within budget). Good; adds the "Sans pitch commercial" differentiator.

## What this page gets right
- **NAP matches canon:** "60 rue François 1er, 75008 Paris" + "othmane@aimakers.fr" match `public/llms.txt` exactly.
- **Names a real person for the booking** (Othmane Halim via Cal.com) — raises booking intent and is honest.
- **Strong conversion differentiator preserved:** "Pas de pitch commercial … que vous travailliez avec nous ou non" — clean microcopy, no negation-stacking to fix.
- **Shared testimonials left in site-config** rather than cloned — avoids duplicate-content drift.
- **GEO answer-first paragraph** is self-contained and citable; includes both offices (Paris + Rabat).
- **Route in sitemap** (`sitemap.ts:43`); internal link to /diagnostic-ia (self-serve alternative) exists.

## Priority fix list
1. 🟠 Resolve the "9,6/10" source (add to llms.txt or re-tag) and source-or-remove "100% de recommandations".
2. 🟡 Add a `/confidentialite` link at the booking form (GDPR).
3. 🟡 Confirm "Partenaire Anthropic" is accurate; consider Organization schema.

## Open questions
- Is "9,6/10" meant to be a canonical figure? If so it belongs in llms.txt for single-source-of-truth.
- Can "100% de recommandations" be sourced? Otherwise remove.
- Is "Partenaire Anthropic" a formal partnership that can be substantiated?
- Should the Rabat office also appear on /contact, or stay on /ia-maroc only? (draft flags this as an owner decision)

---
### Cross-page candidates
- **"9,6/10" and "100% de recommandations"** flow from `site-config.ts:bookingProof` into every page using booking-proof — resolve the source once (ruleset §8.1); this is not a contact-only issue.
- **"Partenaire Anthropic" badge** is site-wide (shared component) — one verification covers all consumers.
- **Privacy-link-on-data-capture** applies to all lead-gen surfaces (/contact, /diagnostic-ia, tools) — set one rule.

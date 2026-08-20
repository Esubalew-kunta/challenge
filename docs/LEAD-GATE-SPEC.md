# Site-wide lead gate — specification & implementation plan

> **Goal:** one identity form — **name, phone, company email** — collected once,
> as the first step of every lead-generating action on the site. Free-provider
> email addresses (Gmail, Outlook, Yahoo, …) are refused.
>
> Written against `main` @ `0d0cf54`. Part 1 is the sweep (what exists today,
> every point, no exceptions). Part 2 is the target design. Part 3 is the
> implementation order. Part 4 lists the decisions someone has to make before
> this ships — read it first, two of them change the work.

---

## Implementation status — 2026-08-03

**Built.** The gate is live on every surface listed in Part 1. What landed:

- `src/lib/schemas/identity.ts` — the single home of the company-email rule.
  `lead.ts`, `catalogue.ts` and `diagnostic.ts` all import from it.
- `src/components/shared/lead-gate.tsx` — the one form. `BookingGate`,
  `GeoAuditForm`, `CatalogueForm`, `LeadCapture`, `ChallengeForm`,
  `DiagnosticCapture`, `ScannerCapture` and `ContentOffer` are now thin wrappers.
- `src/lib/lead-capture-state.ts` — capture memory, key bumped to `_v2`.
- New surfaces: ROI calculator (results gated), blog hub, 21 blog articles,
  glossary — all via `src/components/shared/content-offer.tsx`.
- `tests/identity.test.ts` — 14 cases, `npm test`.

**A third inline provider list was found during implementation** that the
original sweep missed: `diagnostic-capture.tsx` carried its own copy, also
missing `icloud.com`, validated only in the component. Removed.

**Three deviations from the plan below, all deliberate:**

1. **Phone rides in `p_payload`, not a `p_phone` parameter.**
   `capture_website_lead` has a fixed signature and PostgREST returns 404 on an
   undeclared parameter — passing `p_phone` before the OS migration would break
   *every* capture on *every* form. Merged inside `captureLead()` so no future
   entry point can forget it. **D2 below is still open.**
2. **`roi`, `blog` and `glossaire` are deliberately absent from
   `FORM_BY_SOURCE`.** `form` values are normalised DB-side by
   `private.normalise_lead_form` and may be constrained; an unknown value could
   fail the insert and lose the lead. The three sources are recorded verbatim in
   the `source` column and fall into the generic `lead` form until the OS accepts
   them.
3. **Only the gate's *chrome* is localised.** `LeadGate` takes a `locale` and
   pulls its labels from `ui-strings.ts`, threaded through `BookingGate` →
   `BookingModal` → `CTASection` and the footer newsletter. **Zod validation
   messages remain French on English pages** — localising them means porting
   every message in the shared schemas, which was out of scope here. Worth doing
   before more EN pages ship.

**Verified:** build green, `tsc --noEmit` clean, 14/14 tests, lint unchanged from
baseline (63 problems, none in changed files). All 16 gated routes return 200.
Server-side rejection confirmed by request against a running build for the three
holes: `/api/catalogue` with `@gmail.com` → 400 (was accepted), `/api/diagnostic`
with `@gmail.com` and `@icloud.com` → 400 (was client-side only), newsletter
email-only → passes validation.

---

## Part 0 — What already exists (do not rebuild it)

A meaningful amount of this is already built, and the plan below extends it
rather than replacing it. Know this before you start:

- **`isFreeEmailProvider()` and `FREE_EMAIL_PROVIDERS`** already live in
  `src/lib/schemas/lead.ts:6-29`, with an 11-domain list. `leadSubmissionSchema`
  already enforces it, with a well-judged `superRefine` guard that stops
  "invalid email" and "personal address" firing at the same time.
- **`BookingGate`** (`src/components/shared/booking-gate.tsx`) already gates
  every Cal.com embed behind first name + email, and already handles the
  "already captured, don't ask twice" case.
- **`markLeadCaptured()` / `hasLeadCaptured()`** already exist — though they live
  in an odd place (`src/components/shared/geo-audit-form.tsx:18-32`) and are only
  called by 3 of the 10 forms.

The three things genuinely missing are: **phone is collected nowhere**, **the
free-email rule is applied inconsistently**, and **four lead-gen surfaces have no
capture at all**.

---

## Part 1 — The sweep

### 1a. Cal.com booking — every path to the calendar

`bookingUrl` is defined once (`src/lib/site-config.ts:1` =
`https://cal.com/othmane-halim-5lo7uc/30min`). There are **no** hardcoded
cal.com URLs anywhere else in `src/` or `public/` — verified with
`grep -rn "cal\.com" src/ public/`. Every route to the calendar is therefore
one of these five:

| # | Path to calendar | Where | Gated today |
|---|---|---|---|
| 1 | Inline embed, homepage | `src/components/sections/homepage/booking.tsx:108` → `BookingGate` | ✅ name + email |
| 2 | Inline embed, contact page | `src/app/(fr)/contact/page.tsx:110` → `BookingGate` | ✅ name + email |
| 3 | Inline embed, team page | `src/app/(fr)/equipe/page.tsx:403` → `BookingGate` | ✅ name + email |
| 4 | Modal, from any `CTASection` whose `primaryCta.href === bookingUrl` | `cta-section.tsx:113` → `BookingCtaButton` → `booking-modal.tsx:146` → `BookingGate` | ✅ name + email |
| 5 | **Direct link, no gate** | `booking-modal.tsx:99` — when `hasLeadCaptured()` is true, renders a raw `<a href={bookingUrl}>` | ⚠️ by design (see D3) |

Path 4 covers **28 page instances**: `/secteurs` (1), `/secteurs/[slug]` (8),
`/formation-ia` (1), `/formation-ia/[ville]` (11),
`/formation-ia-entreprise/[slug]` (6), `/outils/calculateur-roi-ia` (1).

The header CTA (`src/components/layout/header.tsx:92`) and ~10 `site-config.ts`
CTAs point at `/contact`, which is gated by path 2. Good — no leak there.

### 1b. Every form that creates a lead

| # | Form | Component | Appears on | Fields today | Sets `markLeadCaptured` | Free email blocked |
|---|---|---|---|---|---|---|
| F1 | Booking gate | `shared/booking-gate.tsx` | homepage, `/contact`, `/equipe`, + modal site-wide | firstName, email | ✅ | ✅ |
| F2 | Playbook download | `shared/lead-capture.tsx` | `/playbook-ia:310` | firstName, email | ❌ | ✅ |
| F3 | Free GEO audit | `shared/geo-audit-form.tsx` | `/outils/audit-geo-gratuit:149` | email, company, website | ✅ | ✅ |
| F4 | Exit-intent popup | `shared/lead-popup.tsx:255` → `GeoAuditForm` | **site-wide** | email, company, website | ✅ | ✅ |
| F5 | Footer newsletter | `layout/footer-newsletter.tsx` | **every page** | email only | ❌ | ✅ |
| F6 | Training catalogue | `formation/catalogue-form.tsx` | `/formation-ia-entreprise:501` + `[slug]:396` (6 pages) | firstName, lastName, email, company | ❌ | ❌ **not blocked** |
| F7 | 30-day challenge | `(fr)/challenge-30-jours/challenge-form.tsx` | `/challenge-30-jours` | email, company | ✅ | ✅ |
| F8 | Opportunity scanner | `(fr)/outils/scanner-opportunites-ia/scanner-wizard.tsx:457` | `/outils/scanner-opportunites-ia` | **email only** | ❌ | ✅ |
| F9 | AI maturity diagnostic | `sections/diagnostic/diagnostic-wizard.tsx` | `/diagnostic-ia` | firstName, email | ❌ | ⚠️ **different, shorter list** |

**Three defects visible in that table alone:**

- **F6 (catalogue) does not block free providers.** `catalogueSubmissionSchema`
  (`src/lib/schemas/catalogue.ts`) is a plain `.email()`. The error message even
  says « Email professionnel invalide » while accepting `@gmail.com`. This is the
  highest-volume training-lead form on the site.
- **F9 (diagnostic) uses a second, divergent list.** `emailCaptureSchema`
  (`src/lib/schemas/diagnostic.ts:26-48`) inlines its own 10-domain array that is
  **missing `icloud.com`** — present in the canonical list. Two lists, one of
  them already wrong. And `diagnosticSubmissionSchema.email` — the one the
  **server** validates — is a bare `.email()`, so the block is client-side only
  and trivially bypassed.
- **6 of 9 forms never set `markLeadCaptured()`**, so a visitor who downloaded
  the playbook, took the diagnostic, or requested the catalogue is still treated
  as anonymous by the booking gate and the exit popup.

### 1c. Lead-gen surfaces with **no** capture at all

These are the gaps the new form should fill:

| # | Surface | Routes | Today |
|---|---|---|---|
| G1 | **Blog index** | `/blog` | No inline capture. Only the site-wide footer newsletter (F5) and the exit popup (F4). |
| G2 | **Blog articles** | `/blog/[slug]` — **21 posts** | Same. The single highest-intent organic surface on the site has no offer. |
| G3 | **ROI calculator** | `/outils/calculateur-roi-ia` | Results are computed and shown for free. No capture at any point. Only a `CTASection` at the bottom (path 4). |
| G4 | **Glossary** | `/glossaire-ia` | 30 definitions, pure organic entry point, no capture. |

`/outils` (the tools hub), `/etudes-de-cas` and the 7 case-study pages also carry
no inline capture — they route to `/contact`. That is defensible; G1–G4 are not.

### 1d. Dead enum

`source: "brief"` is a valid value in `leadSubmissionSchema` and has a
`FORM_BY_SOURCE` mapping in `capture-lead.ts:60`, but **no form on the site ever
sends it**. `/desabonnement` mentions « Brief AI-First » as an email programme.
Either a form was removed or never built — confirm with the owner before
treating it as dead.

---

## Part 2 — Target design

### 2.1 One schema, one source of truth

Create `src/lib/schemas/identity.ts`. Everything else imports from it. The
free-provider list moves here from `lead.ts`, and `diagnostic.ts`'s inline copy
is deleted.

```ts
import { z } from "zod";

/**
 * Identité du lead — nom, téléphone, email professionnel.
 *
 * Socle commun à TOUS les formulaires du site. Un seul schéma, parce que la
 * divergence a déjà coûté : `diagnostic.ts` portait sa propre liste de
 * domaines, plus courte d'une entrée (icloud.com), et `catalogue.ts` n'en
 * portait aucune tout en affichant « Email professionnel invalide ».
 */

export const FREE_EMAIL_PROVIDERS = [
  // Existant
  "gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "live.com",
  "icloud.com", "orange.fr", "free.fr", "sfr.fr", "laposte.net", "wanadoo.fr",
  // Ajouts : variantes FR/MA/int. rencontrées sur les leads réels
  "googlemail.com", "yahoo.fr", "hotmail.fr", "outlook.fr", "msn.com",
  "aol.com", "gmx.com", "gmx.fr", "protonmail.com", "proton.me", "pm.me",
  "me.com", "mac.com", "bbox.fr", "numericable.fr", "neuf.fr", "aliceadsl.fr",
  "voila.fr", "yandex.com", "mail.com", "zoho.com", "menara.ma", "iam.net.ma",
] as const;

/** Jetables : pas des adresses personnelles, des adresses qui n'existeront plus. */
export const DISPOSABLE_EMAIL_PROVIDERS = [
  "mailinator.com", "yopmail.com", "yopmail.fr", "guerrillamail.com",
  "10minutemail.com", "temp-mail.org", "tempmail.com", "throwawaymail.com",
  "trashmail.com", "getnada.com", "sharklasers.com", "dispostable.com",
  "maildrop.cc", "fakeinbox.com", "mailnesia.com", "spamgourmet.com",
] as const;

function domainOf(email: string): string | undefined {
  return email.split("@")[1]?.toLowerCase().trim();
}

export function isFreeEmailProvider(email: string): boolean {
  const d = domainOf(email);
  return !d || (FREE_EMAIL_PROVIDERS as readonly string[]).includes(d);
}

export function isDisposableEmailProvider(email: string): boolean {
  const d = domainOf(email);
  return !!d && (DISPOSABLE_EMAIL_PROVIDERS as readonly string[]).includes(d);
}

/**
 * Email professionnel. Le garde-fou du superRefine est repris tel quel de
 * `lead.ts` : sans lui, une adresse mal formée déclenche « Email invalide » ET
 * « Adresse personnelle » en même temps.
 */
export const companyEmail = z
  .string()
  .trim()
  .min(1, "Email requis")
  .email("Email invalide")
  .superRefine((email, ctx) => {
    if (!z.string().email().safeParse(email).success) return;
    if (isDisposableEmailProvider(email)) {
      ctx.addIssue({
        code: "custom",
        message: "Adresse jetable détectée. Merci d'utiliser votre email professionnel.",
      });
      return;
    }
    if (isFreeEmailProvider(email)) {
      ctx.addIssue({
        code: "custom",
        message:
          "Adresse personnelle détectée. Merci d'utiliser votre email professionnel.",
      });
    }
  });

/**
 * Téléphone. Volontairement permissif sur la forme, strict sur la substance :
 * on accepte +33, 0033, 06…, +212…, espaces, points et tirets, et on exige
 * 8 à 15 chiffres (E.164). Un masque plus strict refuserait des numéros
 * marocains et internationaux parfaitement valides — le bureau de Rabat est
 * la moitié du cabinet.
 */
export const phone = z
  .string()
  .trim()
  .min(1, "Téléphone requis")
  .max(30, "Numéro trop long")
  .refine((v) => {
    const digits = v.replace(/[^\d]/g, "");
    return digits.length >= 8 && digits.length <= 15;
  }, "Numéro de téléphone invalide")
  .refine((v) => /^[+0-9][0-9\s.\-()]*$/.test(v), "Numéro de téléphone invalide");

/** Normalisation avant envoi : ce qui part en base est comparable. */
export function normalisePhone(v: string): string {
  const t = v.trim().replace(/[\s.\-()]/g, "");
  if (t.startsWith("+")) return t;
  if (t.startsWith("00")) return `+${t.slice(2)}`;
  // 0X… sans indicatif : on n'invente PAS de pays. Laissé tel quel, le
  // rapprochement se fera côté OS avec le contexte de la page.
  return t;
}

export const fullName = z
  .string()
  .trim()
  .min(2, "Nom requis")
  .max(80, "Nom trop long")
  .refine((v) => v.split(/\s+/).length >= 2, "Merci d'indiquer prénom et nom");

/** Le socle. Tout formulaire du site en hérite. */
export const identitySchema = z.object({
  name: fullName,
  phone,
  email: companyEmail,
  company: z.string().trim().min(2, "Nom d'entreprise trop court").max(100).optional(),
});

export type Identity = z.infer<typeof identitySchema>;
```

### 2.2 One component: `<LeadGate>`

New file `src/components/shared/lead-gate.tsx`. It generalises the existing
`BookingGate`: render the identity form, and once submitted (or if the visitor
was captured earlier) render `children`.

```tsx
type LeadGateProps = {
  /** Source du lead — alimente `formFromSource()` côté serveur. */
  source: LeadSource;
  /** Titre et sous-titre du formulaire, propres à chaque contexte. */
  title: string;
  subtitle: string;
  ctaLabel: string;
  /** Contexte d'affichage : ids de champs + libellé analytics. */
  context: string;
  /** Champs supplémentaires envoyés avec l'identité (réponses de wizard…). */
  extraPayload?: Record<string, unknown>;
  /** Révélé une fois la capture faite. */
  children: React.ReactNode;
};
```

Non-negotiables for this component, each one a lesson already paid for in this
codebase:

- **Same validation client and server.** Import `identitySchema`; the route
  re-validates with the same module. The F9 diagnostic bug is exactly what
  happens when the client validates and the server does not.
- **Keep `BookingGate`'s error handling.** It reads `payload.error` off a
  non-OK response and shows the server's French message. Do not regress to a
  generic string.
- **`noValidate` on the form**, as `BookingGate` does — the browser's native
  email popup fights the Zod messages.
- **Labels, not just placeholders.** `BookingGate` uses `sr-only` labels bound
  with `htmlFor`. Match it. `type="tel"` and `autoComplete="tel"` on the phone
  field, `autoComplete="name"` on the name.
- **Never block on the network.** Loading state, and on failure the visitor can
  retry — never a dead end in front of the content.

### 2.3 Capture memory — and the migration trap

Move `markLeadCaptured` / `hasLeadCaptured` out of `geo-audit-form.tsx` into
`src/lib/lead-capture-state.ts` (they have nothing to do with the GEO form; they
only live there for historical reasons).

**Then bump the key.** This is the single easiest thing to get wrong:

```ts
// v1 = prénom + email. v2 = nom + téléphone + email pro.
// La clé CHANGE de nom : sinon tout visiteur déjà capturé sous l'ancien
// schéma saute le nouveau formulaire pour toujours, et son téléphone n'est
// jamais demandé. Le coût est de redemander une fois à des gens connus ;
// le coût inverse est de ne jamais collecter le champ qu'on ajoute.
export const LEAD_CAPTURED_KEY = "aim_lead_captured_v2";
```

Also store what was captured, not just a timestamp — so forms can prefill
instead of re-asking, and so `hasLeadCaptured()` can answer "captured *with a
phone number*?":

```ts
type CapturedLead = { name: string; email: string; phone: string; at: string };
```

Have **every** form call `markLeadCaptured()` on success. Six of nine do not
today (F2, F5, F6, F8, F9, and the catalogue path).

### 2.4 Server side

1. **`src/lib/schemas/lead.ts`** — rebuild `leadSubmissionSchema` on
   `identitySchema.extend({...})`. Keep the existing `source` enum and the
   per-source `superRefine` rules. Replace `firstName` with `name` (see D1).
2. **`src/lib/schemas/catalogue.ts`** — replace the bare `.email()` with
   `companyEmail`, add `name` and `phone`. This closes the F6 hole.
3. **`src/lib/schemas/diagnostic.ts`** — delete the inline provider array; use
   `companyEmail` in **both** `emailCaptureSchema` and
   `diagnosticSubmissionSchema`. This closes the F9 hole.
4. **`src/lib/capture-lead.ts`** — add `phone` to `CaptureInput` and pass it as
   `p_phone`. **See D2: this needs an OS-side change.** Until that lands, phone
   still reaches the OS inside `p_payload` (the routes spread the whole parsed
   body into it), so nothing is lost — it just has no first-class column.
5. **Normalise before sending:** call `normalisePhone()` in the routes, not in
   the components, so every entry point stores the same shape.

### 2.5 Where the gate goes

| Point | Change |
|---|---|
| F1 booking gate (4 paths) | Replace `BookingGate` internals with `LeadGate`; keep the component name and props so the 4 call sites are untouched. |
| F2 playbook | Wrap the download in `LeadGate source="playbook"`. Add `markLeadCaptured()`. |
| F3 GEO audit | Add name + phone. Keep `company` and `website` — they are what makes the audit possible. |
| F4 exit popup | Inherits F3. |
| F5 footer newsletter | **See D4 — do not change this one without a decision.** |
| F6 catalogue | Add phone; `companyEmail`; `markLeadCaptured()`. Merge `firstName`/`lastName` into `name`. |
| F7 challenge | Add name + phone. |
| F8 scanner | The wizard's final step becomes the full identity form instead of email-only. |
| F9 diagnostic | Same — final step becomes the full form. Fix the server-side validation. |
| **G1/G2 blog** | New: an inline `LeadGate`-backed offer block after the article body in `blog/[slug]/page.tsx`, and one on `/blog`. Offer the playbook, not "subscribe" — there is already a newsletter in the footer. |
| **G3 ROI calculator** | Gate the *results*, not the inputs: let the visitor move the sliders, reveal the annual figure behind `LeadGate source="roi"`. Add `"roi"` to the `source` enum and to `FORM_BY_SOURCE`. |
| **G4 glossary** | Inline offer block, same as the blog. |

---

## Part 3 — Implementation order

Each step builds and deploys on its own.

1. **`src/lib/schemas/identity.ts`** + unit-test it (there is no test harness
   today — a plain `node --test` file is enough, do not install a framework for
   this). Nothing consumes it yet.
2. **Point the three existing schemas at it.** `lead.ts`, `catalogue.ts`,
   `diagnostic.ts`. **Do not add phone yet.** This step alone closes the F6 and
   F9 security holes and is worth shipping by itself.
3. **`src/lib/lead-capture-state.ts`** with the `_v2` key; update the 3 existing
   callers; add the 6 missing ones.
4. **`<LeadGate>`**, built by generalising `BookingGate`. Re-point `BookingGate`
   at it so the 4 booking paths are covered with no call-site changes.
5. **Add `phone`** to `identitySchema` and to every form. Ship the OS migration
   (D2) first, or accept payload-only storage for one deploy.
6. **New surfaces:** G3 (ROI), then G1/G2 (blog), then G4 (glossary).
7. **English parity.** `src/lib/ui-strings.ts` needs every new string, and
   `/en/capacity` + `/en/security` both render `Footer` and `CTASection`.
   HANDOVER §4 is explicit: *every FR content edit must update the EN copy in the
   same change* — EN lives in separate files and fails silently otherwise.

**Verification for each step:** `npm run build`, `npm run typecheck`,
`npm run lint`. Then submit one lead through **every** form in the table above
and confirm it lands in `public.website_leads` with the right `form` value —
`formFromSource()` maps source → form, and a new source that is not in
`FORM_BY_SOURCE` silently arrives labelled `lead`.

---

## Part 4 — Decisions needed before this ships

**D1 — `firstName` → `name`.** Today five forms collect `firstName` only. The
request says "name". Full name is better for a CRM and for email personalisation
that does not read as automated. But it is a breaking change to
`leadSubmissionSchema`, to `captureLead()`'s `p_first_name`, and to whatever n8n
templates interpolate the first name. **Recommendation:** collect `name`, and
have the server split on first whitespace to keep populating `p_first_name` —
no downstream breakage, better data.

**D2 — The OS needs a `phone` column.** `captureLead()` calls the RPC
`capture_website_lead` with a fixed `p_*` parameter list. Adding `p_phone`
requires a migration and a function-signature change **in the OS repo, not
here** — and the site's own guardrail (PROGRESS.md) forbids building Supabase
objects without explicit sign-off. Until that lands, phone rides along in
`p_payload` JSONB and is queryable but not first-class. **Someone must own this
in the OS repo.** It is the one dependency that blocks the full value of the
feature.

**D3 — The `hasLeadCaptured()` bypass.** `booking-modal.tsx:99` sends known
visitors straight to Cal.com. That is good UX and should stay. But note what it
means: the gate is a **lead-capture** device, not an access-control device. It
is localStorage — cleared cookies, incognito, or a different browser all re-ask.
Anyone determined can reach the calendar. If the intent is genuinely to *block*
un-qualified bookings, that has to be enforced in Cal.com's own intake, not
here. **Confirm which of the two goals is wanted** — the answer changes nothing
about the build, but it changes what you promise the owner.

**D4 — Phone on the footer newsletter.** The request is "all lead gen points",
and F5 is on all 43 pages. But a newsletter box that demands name + phone +
company email will lose most of its signups — that is a well-understood
trade-off, not a guess. Three options: (a) apply the full gate as specified;
(b) leave the newsletter at email-only, since it is a subscription rather than a
lead; (c) keep the inline box at email-only and follow up with the full form on
the confirmation step. **Recommendation: (c)** — it satisfies the requirement
without pricing the newsletter out of existence. **This one needs an explicit
call before implementation.**

**D5 — Free-provider blocking will refuse real prospects.** A large share of
French TPE/PME owners genuinely use `@gmail.com` or `@orange.fr` as their only
business address, and the site sells to TPE/PME (`/secteurs/tpe-pme` is a
dedicated page). The current message ("Adresse personnelle détectée") tells them
to use something they do not have — a hard dead end on the highest-intent
action. **Recommendation:** keep the block, but give the refusal an exit —
"Pas d'email professionnel ? Écrivez-nous à othmane@aimakers.fr" — so the lead
is redirected rather than lost. Cheap to build, and it converts the one case
where the rule is wrong.

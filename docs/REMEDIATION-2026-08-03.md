# Remediation instructions — audit of 2026-08-03

> Hand this file to the VPS agent. Each item is self-contained: what is wrong,
> where, what to do, how to verify. Work top to bottom — the order is by
> severity, not by convenience.
>
> Baseline for this audit: `main` @ `0d0cf54`. Build, `tsc --noEmit` and
> `scripts/check-generated.mjs` were all green at that commit — do not "fix"
> anything that isn't listed here.
>
> **Before you start:** read `HANDOVER.md` §2 (repo access) and §1 (deploy).
> Nothing here changes the deploy procedure.

---

## R1 — The unsubscribe link returns 502 in production (do this first)

**Severity: high. User-facing, and CNIL-relevant.**

`/challenge-30-jours` promises in its FAQ « un lien de désinscription en un
clic ». That link lands on `/desabonnement`, which POSTs to
`/api/desabonnement`. That route relays to `N8N_UNSUBSCRIBE_WEBHOOK_URL`
(`src/app/api/desabonnement/route.ts:56`).

That variable is set **nowhere**: not in `.env.example`, not in the HANDOVER §7
env table, and the base n8n webhook list in PROGRESS.md names
`lead`/`diagnostic`/`catalogue`/`desabonnement` — so the endpoint exists on
n8n's side but the site was never told its URL.

`relayToN8n()` returns `{ok: false, reason: "not_configured"}` when the URL is
undefined, and the route turns that into a **502 with a French error**. So
today: the visitor clicks unsubscribe, sees a failure, and n8n — which is what
actually performs the unsubscribe — never hears about it. `recordUnsubscribe()`
does fire first and is silent on failure, so the token is logged in the OS, but
that is a reconciliation record, not an unsubscribe.

**Do:**

1. On the box, in `/opt/ai-makers/apps/website/app/.env`, add:
   ```
   N8N_UNSUBSCRIBE_WEBHOOK_URL=https://othmaneaimakers.app.n8n.cloud/webhook/desabonnement
   ```
   Confirm that exact path with whoever owns the n8n instance before writing it
   — PROGRESS.md names the endpoint but no one has verified the production URL.
2. Add the variable to `.env.example` as part of R8 below.
3. Restart the container (`docker compose up -d web`). This one is server-side
   only, so a restart suffices — **no rebuild needed** (contrast with any
   `NEXT_PUBLIC_*` change, which does need one).

**Verify:** `POST /api/desabonnement` with a real token → 200, and the row's
`unsubscribed_at` is set in Supabase. Then click a real unsubscribe link from a
Challenge email end to end.

**If the n8n endpoint does not exist:** do not leave this as-is. Either build it,
or change the route so the OS write is authoritative and the n8n relay is
best-effort — the current shape makes a promised legal control fail closed.

---

## R2 — Two English nav links dump visitors on the French homepage

**Severity: high (for EN visitors). Small diff.**

`/en/ai-readiness-assessment` appears twice in the English chrome:

- `src/lib/site-config.en.ts:69` — mega-menu entry
- `src/lib/site-config.en.ts:341` — footer, labelled "AI Audit"

It is **not** a value in `ROUTE_MAP` (`src/lib/i18n.ts`). `resolveHref()` in
`src/lib/nav.ts` therefore fails its `ROUTE_MAP_EN_TO_FR` lookup and falls
through to its last-resort `return "/"`. Every other unpublished EN link
degrades to its French equivalent; these two land on the French homepage with no
explanation.

It is a leftover from before `/audit-ia-entreprise` was absorbed into
`/ai-transformation` (the 2026-08-02 fusion). This is exactly the failure mode
HANDOVER §3 item 4 warns about.

**Do:** point both entries at the EN slug of the page that actually inherited
that content — `/en/ai-transformation`, which **is** in `ROUTE_MAP` (mapped from
`/ai-transformation`) and so resolves correctly to the French page until the EN
page ships.

```ts
// src/lib/site-config.en.ts:69 and :341
href: "/en/ai-transformation",
```

Keep the label "AI Audit" — the audit is the first phase of that page's offer,
so the label is still honest.

**Then add a guard so this cannot recur.** In `src/lib/nav.ts`, `resolveHref()`
currently swallows the miss. Make the fallback loud in development:

```ts
const fr = ROUTE_MAP_EN_TO_FR[path];
if (!fr && process.env.NODE_ENV !== "production") {
  console.warn(`[nav] EN href absent de ROUTE_MAP, rabattu sur "/" : ${path}`);
}
return fr ? (hash ? `${fr}#${hash}` : fr) : "/";
```

**Verify:** `npm run dev`, load `/en/capacity`, open the mega-menu and the
footer, click both "AI Audit" entries → both land on `/ai-transformation`.
No `[nav]` warnings in the console.

---

## R3 — The privacy policy names the wrong host

**Severity: high (legal accuracy). Needs a human sign-off before you push.**

`src/app/(fr)/confidentialite/page.tsx:49` tells visitors:

> « Elles peuvent être transmises à des sous-traitants techniques (**hébergeur
> Vercel**, outils CRM) […] »

The site has been off Vercel and self-hosted on the VPS since 2026-07-29
(HANDOVER §1). The actual processors are named nowhere: the self-hosted Supabase
("the OS"), n8n Cloud (`othmaneaimakers.app.n8n.cloud` — which is where the
emails are sent from), and Google (GTM/GA4, post-consent only).

Section 7 has a second, smaller inaccuracy: it says cookie preferences are
managed « depuis votre navigateur », while the site ships its own consent banner
that is re-openable from the footer "Cookies" link. The policy understates a
control the site actually provides.

**Do:**

1. Rewrite §5 to name the real processors. Suggested wording — **have the owner
   approve it before pushing**, this is a legal document:
   > Vos données sont destinées aux équipes commerciales et opérationnelles
   > d'AI Makers. Elles sont hébergées sur nos propres serveurs situés dans
   > l'Union européenne. Elles peuvent être traitées par nos sous-traitants
   > techniques — n8n (automatisation et envoi des emails) et Google
   > (mesure d'audience, uniquement après votre consentement) — dans le respect
   > du RGPD et avec des garanties contractuelles adéquates.
2. In §7, replace « depuis votre navigateur » with a sentence pointing at the
   real control: « Vous pouvez modifier votre choix à tout moment via le lien
   « Cookies » en pied de page. »
3. Check §8 "Transferts hors UE" against the same facts — n8n Cloud's region and
   Google's transfers both belong there. Read the current text before editing.
4. Check `/mentions-legales` and `/cgv` for the same stale "Vercel" claim.

**Verify:** `grep -rn "Vercel" src/app/\(fr\)/confidentialite src/app/\(fr\)/mentions-legales src/app/\(fr\)/cgv` returns nothing.

**Note the irony to avoid:** do not remove `@vercel/analytics` (R9) and leave the
privacy policy naming Vercel, or vice versa. Do R3 and R9 in the same change.

---

## R4 — A live menu entry points at a deleted page

**Severity: medium.**

`src/lib/site-config.ts:289-291` still carries a mega-menu item:

```ts
label: "Nos garanties",
description: "4 garanties écrites au contrat",
href: "/garanties",
```

`/garanties` was deleted in August 2026 and 301s to `/ai-transformation`
(`next.config.ts:108-112`). The French navigation does **not** pass through
`resolveHref()` — only the English side does — so this renders verbatim. It is
not a 404, but it is a menu promise ("4 garanties écrites au contrat") that
resolves to a page which does not make that promise.

**Do:** delete the three-line menu entry. Do **not** delete the redirect in
`next.config.ts` — external links and old SERP entries still rely on it, and
HANDOVER §8 is explicit that redirects are never pruned.

If the owner wants the guarantees kept in the menu, the alternative is to point
it at the anchor on the page that inherited them. Check whether
`/ai-transformation` actually has a guarantees section first — if it does not,
delete the entry rather than linking to a promise the page does not keep.

**Verify:** `grep -rn '"/garanties"' src/lib/` returns nothing;
`curl -sI https://aimakers.fr/garanties` still returns 301.

---

## R5 — `npm run lint` lints the build output

**Severity: medium. This one is blocking the others — do it before R6.**

`eslint.config.mjs` ignores `.next/**`. But `next.config.ts:77` sets `distDir`
to **`.next.nosync`** whenever `VERCEL` and `CONTAINER_BUILD` are both unset —
which is every local run. So a bare `eslint` walks 637 files of compiled chunks
and reports **417 problems**. The 63 real ones are buried at the end of the
output, which is almost certainly why they have gone unfixed.

**Do:** add the local build dir to the ignore list in `eslint.config.mjs`:

```js
globalIgnores([
  ".next/**",
  // distDir vaut .next.nosync hors conteneur (cf. next.config.ts) : sans cette
  // ligne, `eslint` lint la sortie de build et noie les vraies erreurs.
  ".next.nosync/**",
  "out/**",
  "build/**",
  "next-env.d.ts",
]),
```

While you are in `package.json`, make the scripts say what they do:

```json
"lint": "eslint src scripts",
"typecheck": "tsc --noEmit",
"check:generated": "node scripts/check-generated.mjs"
```

**Verify:** `npm run lint` reports **63 problems (32 errors, 31 warnings)** —
not 417. That number is the R6 starting point.

---

## R6 — Real lint errors, now that R5 stops hiding them

**Severity: medium. Two of these are genuine React correctness bugs.**

After R5, the 63 remaining problems break down as:

| Count | Rule | Action |
|---|---|---|
| 19 | `react/no-unescaped-entities` | French apostrophes in JSX. Cosmetic. Fix with `&apos;` — do **not** `--fix` blindly, check each renders correctly. |
| 16 | `@next/next/no-img-element` | `service-page.tsx:251`, `testimonial-card.tsx:36` and others. Convert to `next/image` **only where you have intrinsic dimensions**; otherwise leave and suppress with a comment explaining why. |
| 14 | `@typescript-eslint/no-unused-vars` | Includes `CONSENT_CHANGE_EVENT` imported-unused in `cookie-consent.tsx:6` and `args` in `gtm.ts:19`. The `gtm.ts` one is deliberate (see the comment above it) — add an eslint-disable there rather than deleting the parameter. |
| 7 | `react-hooks/set-state-in-effect` | `booking-modal.tsx:36`, `cookie-consent.tsx:44` and others. These read `localStorage` in an effect to avoid hydration mismatch — that is a legitimate pattern. Suppress with a comment stating why, do not restructure. |
| 3 | `react-hooks/purity` | `background-beams.tsx:106,109,112` — **real bug**, see below. |
| 2 | `react-hooks/refs` | `lead-popup.tsx:68`, `problem.tsx:229` — **real bug**, see below. |
| 1 | `prefer-const` | `animated-beam.tsx:97`. Trivial. |

**The two that actually matter:**

- **`react-hooks/refs`** — `lead-popup.tsx:68` does `pathnameRef.current = pathname`
  during render, and `problem.tsx:229` reads a ref during render. Under React 19
  concurrent rendering a render can be thrown away and re-run; a ref mutated
  during render then holds a value from an abandoned render. Move the assignment
  into an effect (`useEffect(() => { pathnameRef.current = pathname }, [pathname])`).
- **`react-hooks/purity`** — `background-beams.tsx:106-112` calls an impure
  function (almost certainly `Math.random()`) during render. Same problem, more
  visible: the beams can jump between renders. Hoist the random values into
  `useState(() => …)` initialisers or `useMemo` so they are generated once.

Fix the 5 real ones first and commit them separately from the 58 cosmetic ones —
a reviewer should be able to see the correctness fixes without scrolling through
apostrophes.

**Verify:** `npm run lint` clean, or every remaining entry carries an inline
comment explaining why it is suppressed. `npm run build` and `npm run typecheck`
still green.

---

## R7 — The English pages are missing from the sitemap

**Severity: medium (SEO).**

`src/lib/i18n.ts:29` states that `ROUTE_MAP` serves, among other things, « les
entrées EN du sitemap ». `src/app/sitemap.ts` contains **no `/en/*` entry at
all**. `/en/capacity` and `/en/security` are discoverable only through the
hreflang tags on their French counterparts.

**Do:** in `src/app/sitemap.ts`, derive the EN entries from `EN_PUBLISHED` —
never from a second hand-maintained list, or it will drift exactly the way this
one did:

```ts
import { EN_PUBLISHED } from "@/lib/i18n";

// Dérivé d'EN_PUBLISHED, jamais saisi à la main : une page EN entre au sitemap
// au moment même où elle devient annonçable en hreflang, pas un jour plus tard.
const enEntries: MetadataRoute.Sitemap = [...EN_PUBLISHED].map((route) => ({
  url: `${baseUrl}${route}`,
  lastModified: new Date(),
  changeFrequency: "monthly" as const,
  priority: 0.7,
}));
```

Append `...enEntries` to the returned array.

**Verify:** `npm run build && npx next start`, then
`curl -s localhost:3000/sitemap.xml | grep '/en/'` → two entries.

---

## R8 — `.env.example` is materially out of date

**Severity: medium, with a nasty failure mode.**

`.env.example` lists 4 variables. The code reads **10**. And
`docker-compose.yml` instructs `cp .env.example .env` — so a fresh deploy that
follows the repo's own instructions comes up with lead capture **silently
disabled** (`captureLead()` returns `not_configured` when `OS_LEAD_INGEST_SECRET`
or `OS_SUPABASE_ANON_KEY` is missing, and falls through to an n8n relay that is
also unconfigured).

It also documents `NEXT_PUBLIC_GA_ID` as load-bearing, while
`src/app/(fr)/layout.tsx:44` says in as many words that it is no longer read.
`Dockerfile` and `docker-compose.yml` still plumb it through as a build ARG.

**Do:** replace `.env.example` with the full set, grouped and commented:

```sh
# ── Capture des leads (OS) ────────────────────────────────────────────────
# SANS CES TROIS VARIABLES, AUCUN LEAD N'EST ENREGISTRÉ. captureLead() renvoie
# "not_configured" et le formulaire tombe sur le relais n8n de secours.
OS_SUPABASE_URL=http://supabase-kong:8000
OS_SUPABASE_ANON_KEY=
OS_LEAD_INGEST_SECRET=
# App OS, joignable par nom de conteneur sur le réseau `web` partagé.
OS_APP_URL=http://os-app:3000
# Hôtes acceptés comme Referer pour l'attribution (page_path + utm_*).
LEAD_ORIGIN_HOSTS=aimakers.fr,www.aimakers.fr,blogs.aimakers.fr

# ── Relais n8n ────────────────────────────────────────────────────────────
# Filet de secours pour les trois formulaires : appelé UNIQUEMENT si la
# capture OS échoue. Base : https://othmaneaimakers.app.n8n.cloud/webhook/
N8N_LEAD_WEBHOOK_URL=
N8N_DIAGNOSTIC_WEBHOOK_URL=
N8N_CATALOGUE_WEBHOOK_URL=
# Celui-ci n'est PAS un filet : c'est le seul chemin de la désinscription.
# Vide => /api/desabonnement renvoie 502 et le lien promis dans chaque email
# ne fonctionne pas. Voir R1.
N8N_UNSUBSCRIBE_WEBHOOK_URL=
```

Then decide `NEXT_PUBLIC_GA_ID`'s fate — **do not leave it half-removed**.
**DONE (2026-08-13)** : supprimé du `Dockerfile` (paire `ARG`/`ENV`) et de
`docker-compose.yml` (`build.args`). Il n'était plus lu nulle part.
GA4 goes through GTM now, which is consent-gated, so the variable is dead.
Either delete it from `Dockerfile` (the `ARG`/`ENV` pair) and
`docker-compose.yml` (`build.args`), or reinstate a documented use. Deleting is
the right call; it currently reads as a live knob that does nothing, which is
how someone ends up rebuilding an image to change a value with no effect.

**Verify:** every `process.env.X` in `src/` has a matching line in
`.env.example`:
```sh
grep -rho 'process\.env\.[A-Z_]*' src/ | sort -u
```

---

## R9 — `@vercel/analytics` runs outside the consent gate

**Severity: low today, latent. Do it with R3.**

`<Analytics />` is mounted unconditionally in **both** root layouts
(`src/app/(fr)/layout.tsx`, `src/app/(en)/layout.tsx`), outside the consent
architecture that governs everything else on this site.

Be precise about the risk, because it is easy to overstate: on the VPS this
requests a **first-party** `/_vercel/insights/script.js` that 404s. No data
leaves, no third party is contacted, no cookie is set. Today it is dead weight —
one failed request per page load. The problem is that it is the one component
that would begin collecting without consent the moment this is deployed to
Vercel, and it sits directly against the stated design ("RIEN ne se charge avant
un opt-in explicite", `src/lib/consent.ts`).

**Do:** remove the dependency and its two mount points.

1. Delete the `<Analytics />` element and the `@vercel/analytics/next` import
   from both layouts.
2. `src/components/shared/booking-gate.tsx`, `lead-capture.tsx`,
   `geo-audit-form.tsx` and `scanner-wizard.tsx` also import `track` from
   `@vercel/analytics` — that is the **conversion tracking for every lead form**,
   so do not just delete the calls. Replace with a `dataLayer.push` through the
   consent-gated GTM path. Add to `src/lib/gtm.ts`:
   ```ts
   /** Événement de conversion. No-op tant que le conteneur n'est pas injecté. */
   export function trackEvent(event: string, params: Record<string, unknown> = {}) {
     if (typeof window === "undefined") return;
     const w = window as unknown as { dataLayer?: unknown[] };
     w.dataLayer?.push({ event, ...params });
   }
   ```
   Then swap each `track("lead_capture_submit", {...})` for
   `trackEvent("lead_capture_submit", {...})`.
3. `npm uninstall @vercel/analytics`.

**Verify:** `grep -rn "@vercel/analytics" src/` returns nothing. `npm run build`
green. Load a page with analytics **refused** → no `/_vercel/` request in the
network tab and no `gtm.js`. Accept → `gtm.js` loads, and submitting a lead form
pushes `lead_capture_submit` onto `dataLayer`.

**Coordinate:** whoever owns the GTM container must add a tag listening for
`lead_capture_submit`, or conversion reporting goes dark. Do not ship this step
without telling them.

---

## R10 — Known bug: `removeChild` crash on diagnostic submit

**Severity: low (development only), but it has been open since 2026-07-21.**

`src/components/sections/diagnostic/diagnostic-wizard.tsx:121` does a hard
`window.location.href = "/diagnostic-ia/resultat"` while framer-motion's
`AnimatePresence mode="wait"` is still mounted. React's teardown races the
browser navigation and throws
`Failed to execute 'removeChild' on 'Node'`. Same pattern at
`diagnostic-result.tsx:33`.

The lead always saves and navigation always happens; the overlay is dev-only.
But it makes the dev console untrustworthy during exactly the flow you most need
to debug.

**Do:** replace the hard navigation with the router, and let the exit animation
finish first:

```ts
import { useRouter } from "next/navigation";
// …
const router = useRouter();
// après la soumission réussie :
router.push("/diagnostic-ia/resultat");
```

If the exit animation still races, gate the navigation on
`AnimatePresence`'s `onExitComplete` rather than reaching for a `setTimeout`.
Apply the same fix to `diagnostic-result.tsx:33`.

**Note:** `scanner-wizard.tsx` was flagged in PROGRESS.md as having the same
pattern. It does **not** — it has no `window.location.href`. Correct that line
in PROGRESS.md while you are there.

**Verify:** `npm run dev`, complete the diagnostic, submit → navigates to the
result page with a clean console.

---

## R11 — `markRelayed()` is dead code, and HANDOVER §5 describes a flow that no longer exists

**Severity: low. Documentation accuracy.**

`src/lib/capture-lead.ts:217` exports `markRelayed()`. Nothing calls it —
confirmed by `grep -rn "markRelayed" src/`. It became unreachable when the n8n
relay moved out of the request path and into an OS cron.

HANDOVER §5 still documents the old chain: « capture → relay to n8n →
`markRelayed()` → `requestLeadNotification()` ». The routes now do
capture → `after(requestLeadNotification)`, with n8n as a fallback only when the
capture fails.

**Do:** decide with the OS owner whether the OS cron calls
`mark_website_lead_relayed` itself. If it does, delete `markRelayed()` from the
site. If it does not, the `relayed` column is not being maintained by anyone and
that is a bigger problem than the dead function — escalate it rather than
deleting.

Either way, correct HANDOVER §5 to describe the flow the code actually
implements.

---

## R12 — Housekeeping

Low severity, safe, do them last and in one commit.

- **`next-sitemap` is an unused dependency.** The app uses App Router's native
  `src/app/sitemap.ts`. `npm uninstall next-sitemap`. (`grep -rn "next-sitemap" src/`
  → nothing; the only hits are in the two SEO audit report `00-ruleset.md`
  files, which are documents, not code.)
- **`npm audit`: 4 high severity**, all `sharp` < 0.35.0 inheriting libvips CVEs,
  transitive through `next`. The fix is `next@16.2.12`, a minor bump outside the
  pinned `16.1.6`. Do **not** run `npm audit fix --force`. Bump `next` and
  `eslint-config-next` together, deliberately, and run the full build + a manual
  pass over the site before deploying.
- **`calendlyUrl` in `src/lib/site-config.ts:3`** is marked `@deprecated` and
  aliases `bookingUrl`. Check for callers (`grep -rn "calendlyUrl" src/`) and
  delete it if there are none.
- **`PROGRESS.md` is stale in ways that mislead.** Its "Language status" section
  says « Site is **FR only**. No i18n lib, `<html lang="fr">` hardcoded, no `/en`
  routes » — none of which has been true since 2026-07-29. Its env-var section
  says the webhooks are « set in Vercel ». Add a header pointing at HANDOVER.md
  as authoritative, or bring the stale sections up to date. Do not leave two
  documents disagreeing about where the site runs.
- **There is no CI and there are no tests.** Not something to fix in this pass,
  but worth raising: `npm run build`, `npm run typecheck`, `npm run lint` and
  `node scripts/check-generated.mjs` are four checks that currently only run when
  someone remembers. A single GitHub Actions workflow running those four on every
  PR would have caught R5, R6 and R7 before they reached `main`. Note the
  constraint in HANDOVER §2: the box's PAT 404s on this repo, so a workflow must
  run on GitHub's runners, not from the VPS.

---

## Order of work, and what to push

Suggested commit sequence — each one independently deployable:

1. **R1** (env var only, no code) — deploy immediately, it is a live failure.
2. **R5** then **R6-real** (the 5 correctness errors) — the lint fix has to land
   first or you cannot see what you are fixing.
3. **R2 + R4 + R7** — navigation and sitemap correctness, one commit.
4. **R3 + R9** — privacy policy and Vercel analytics, one commit, **owner
   sign-off required on the R3 wording**.
5. **R8** — env documentation.
6. **R6-cosmetic**, **R10**, **R11**, **R12** — cleanup.

All of it goes to `claude/repo-audit-qgm1ky` unless told otherwise, and to
`main` only through a PR (HANDOVER §2: `gh` cannot open PRs from the box — push
the branch and open it in the browser).

After each deploy, run the HANDOVER §3 verification: zero "IBM" in source and in
generated HTML, `/en/*` still `lang="en"` with no French leak, build clean.

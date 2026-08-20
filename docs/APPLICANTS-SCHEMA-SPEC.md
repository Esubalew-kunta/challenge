# Applicant tracking — schema & ingestion spec (for the OS team)

> **Goal:** a dedicated `applicants` table on the OS, so leadership can run
> an actual hiring pipeline — interview stage, scoring, resume, LinkedIn/
> GitHub/website — instead of digging application data out of the generic
> `website_leads.payload` JSONB.
>
> **Status: BUILT (2026-08-12).** The OS side of this spec now exists — see
> `Ai-M-Internal-Ops` PR #114: migrations `0096` (table), `0097` (RPC),
> `0098` (private bucket), and `POST /api/careers/resume-upload`. The
> migrations are applied to the live OS database and the ingest secret is
> provisioned. What remains is the deploy of both apps, not the build.
> Every open decision in §8 is now resolved — read that section before
> changing anything here. Written against `main` @ `ec938a0`. Companion to `docs/LEAD-GATE-SPEC.md` —
> same secret/RPC pattern, same "server-to-server only, browser never talks
> to the OS directly" invariant — but a **new dedicated table**, not an
> extension of `website_leads`.

---

## §0 — What already exists (do not rebuild it)

`/carrieres/postuler` already collects and submits applications today. It
routes through the existing sales-lead path:

- `src/lib/capture-lead.ts` → `POST {OS_SUPABASE_URL}/rest/v1/rpc/capture_website_lead`,
  auth = anon key + a per-tenant secret (`OS_LEAD_INGEST_SECRET`) as `p_secret`.
- `src/app/api/careers-apply/route.ts` calls it with `form: "lead"`,
  `source: "application"`, and everything application-specific (`role`,
  screening answers, links) folded into the generic `p_payload` JSONB.
- Lands in `public.website_leads`. Queryable, but nothing application-specific
  is a first-class column — no `stage`, no `score`, no resume.

**This spec does not remove that path.** The site will keep it as a fallback
until you ship the pieces below (see §7's "what stays out of scope" — the
transition is automatic on the site's side, no coordination needed once you
ship).

---

## §1 — What the site will send you

| Field | Type | Source |
|---|---|---|
| `application_id` | text | Site-generated, e.g. `app_<timestamp>_<random>` |
| `role_slug` | text | One of the 5 current role slugs in `src/app/(fr)/carrieres/postes.ts` — expect this list to change over time without notice |
| `role_title` | text | Snapshotted display title at submission time |
| `name` | text | Full name, candidate-entered |
| `email` | text | Plain email (not the site's B2B `companyEmail` rule — candidates apply from personal addresses) |
| `phone` | text, nullable | Optional |
| `locale` | text | `fr` or `en` |
| `source`, `page_path`, `utm_source/medium/campaign/term/content` | text, nullable | Same shape as `website_leads`' existing UTM columns |
| `linkedin_url`, `github_url`, `website_url` | text, nullable | Candidate-entered, loosely validated, not domain-enforced |
| `resume_storage_path`, `resume_original_filename`, `resume_mime_type`, `resume_size_bytes` | text/text/text/integer, nullable | Returned by the resume-upload endpoint in §6, echoed back at final submission |
| `years_experience` | numeric | Answer to the role's general screening question |
| `experience_question_text`, `experience_min_value` | text, numeric | **Snapshotted** — the literal question text and threshold in effect at submission time |
| `role_question_text`, `role_answer` | text, boolean | The role's eliminatory screening question, snapshotted + answered |
| `french_required`, `french_fluent` | boolean, boolean nullable | Whether this role required French, and the candidate's answer if asked |
| `auto_screen_score` | integer 0–100 | Computed by the site at submission (see the site's `src/lib/careers-scoring.ts`) |
| `auto_screen_flags` | jsonb array | e.g. `["below_min_experience", "role_question_failed"]` |

This becomes the full RPC parameter list in §5 — **every one of these must be
a first-class `p_*` parameter**, not a JSONB catch-all. See the warning in §5
for why.

---

## §2 — The `applicants` table

```sql
create table public.applicants (
  id                        uuid primary key default gen_random_uuid(),
  created_at                timestamptz not null default now(),
  updated_at                timestamptz not null default now(),

  -- Identity
  name                      text not null,
  email                     text not null,              -- store lowercased/trimmed
  phone                     text,
  locale                    text not null default 'fr',

  -- Role. Plain text, NOT a Postgres enum or FK: the site owns the role
  -- list in postes.ts and it changes without notice (new req, closed req).
  -- A hard-coupled type would force a migration on every hiring cycle.
  role_slug                 text not null,
  role_title                text not null,               -- snapshot at submission time

  -- Submission metadata (mirrors website_leads' existing UTM columns)
  application_id            text not null,
  source                    text,
  page_path                 text,
  utm_source                text,
  utm_medium                text,
  utm_campaign              text,
  utm_term                  text,
  utm_content               text,

  -- Profile links
  linkedin_url              text,
  github_url                text,
  website_url               text,

  -- Resume — a reference only, NEVER a public URL. See §4.
  resume_storage_path       text,
  resume_original_filename  text,
  resume_mime_type          text,
  resume_size_bytes         integer,
  resume_uploaded_at        timestamptz,

  -- Screening answers. Question TEXT is snapshotted alongside the answer,
  -- not just the answer, because postes.ts questions can change — a past
  -- answer must never be silently reinterpreted against today's wording
  -- or threshold.
  years_experience          numeric(4,1) not null,
  experience_question_text  text not null,
  experience_min_value      numeric(4,1) not null,
  role_question_text        text not null,
  role_answer               boolean not null,
  french_required           boolean not null default false,
  french_fluent             boolean,

  -- Scoring. auto_screen_score and overall_score are DIFFERENT fields with
  -- different meaning — never conflate or let one silently overwrite the
  -- other. auto is system-computed at every submission; overall is set by a
  -- human, only through the OS's own UI, never by the ingestion RPC.
  auto_screen_score         integer not null,
  auto_screen_flags         jsonb not null default '[]',
  overall_score             integer,
  scored_by                 text,
  scored_at                 timestamptz,

  -- Pipeline. text + CHECK, not a Postgres enum, so adding a stage later
  -- doesn't need an ALTER TYPE migration dance.
  stage                     text not null default 'applied',
  stage_updated_at          timestamptz not null default now(),
  stage_updated_by          text,
  rejection_reason          text,
  rejection_sub_reason      text,

  -- Human workflow (set through the OS UI, not the ingestion RPC)
  assigned_to               text,
  next_step                 text,
  follow_up_at              timestamptz,
  tags                      text[] not null default '{}',

  -- Dedupe / re-application bookkeeping — see §3
  first_submitted_at        timestamptz not null default now(),
  submitted_at               timestamptz not null default now(),
  reapplied_count             integer not null default 1,

  constraint applicants_stage_check check (
    stage in ('applied','screening','test_assignment','interview','offer','hired','rejected')
  ),
  constraint applicants_score_range check (
    auto_screen_score between 0 and 100
    and (overall_score is null or overall_score between 0 and 100)
  )
);

-- Dedupe key: same person, same role → one row, merged, never duplicated.
create unique index applicants_email_role_key
  on public.applicants (lower(email), role_slug);

create index applicants_email_idx     on public.applicants (lower(email));
create index applicants_role_idx      on public.applicants (role_slug);
create index applicants_stage_idx     on public.applicants (stage);
create index applicants_submitted_idx on public.applicants (submitted_at);
```

**Proposed `rejection_sub_reason` values** (not CHECK-enforced — leadership
may need to add one without a migration): `insufficient_experience`,
`failed_screening_question`, `failed_test`, `failed_interview`,
`compensation_mismatch`, `role_filled`, `withdrew`, `culture_fit`, `other`.

**Not built here, by design:** an `applicant_notes` table (`id, applicant_id
fk, author, note, created_at`) so multiple interviewers can log notes per
stage without overwriting each other. Ship `applicants` first; add notes
whenever leadership actually starts interviewing. See §8.

---

## §3 — Dedupe / re-application policy

Dedupe key: `(lower(email), role_slug)`. This mirrors the site's understanding
of how `upsert_lead()` already handles `website_leads` — merge, never
downgrade a flag, never silently overwrite a human's work.

| Case | Behavior |
|---|---|
| Same email, same role, applies again | **Merge into the existing row.** Overwrite: name, phone, links, resume reference, screening answers, `auto_screen_score`/`auto_screen_flags` (recomputed fresh — it's system-derived, safe to replace), `submitted_at`. Increment `reapplied_count`. Preserve `first_submitted_at`. |
| Same email, same role, already past `applied`/`screening` | Merge fields per above, but **never** silently move `stage` backward to `applied`. Add `"reapplied"` to `tags` instead, so leadership sees it and decides. |
| Same email, same role, already `rejected`/`hired` | Merge fields, tag `"reapplied"`, leave `stage` untouched — resurrecting into the active pipeline is a leadership call, not something the ingestion RPC should do automatically. |
| Same email, **different** role | New row — `role_slug` is part of the dedupe key, so this is a genuinely distinct application. |
| `overall_score`, `scored_by`, `scored_at`, `assigned_to`, `rejection_reason`, `next_step`, `tags` | **Never** written by the ingestion RPC, on first submission or re-application. Only the OS's own UI writes these. |

---

## §4 — Resume storage & access control

- New **private** Supabase Storage bucket, e.g. `applicant-resumes`. No
  anonymous read. Access only via the OS's own authenticated backend,
  generating short-lived signed URLs when leadership opens a candidate
  record.
- `applicants.resume_storage_path` is an internal reference (storage object
  path, or an opaque `resume_id` if you prefer indirection) — **never** a
  public URL. Resumes are sensitive PII; they must not be reachable by a
  bare link.
- This bucket + its access policy is new infrastructure, not an implicit
  side effect of the `CREATE TABLE` above — call it out as its own build
  item.

---

## §5 — RPC contract: `capture_website_application`

```sql
create or replace function public.capture_website_application(
  p_secret                    text,
  p_application_id            text,
  p_role_slug                 text,
  p_role_title                text,
  p_name                      text,
  p_email                     text,
  p_phone                     text,
  p_locale                    text,
  p_source                    text,
  p_page_path                 text,
  p_utm_source                text,
  p_utm_medium                text,
  p_utm_campaign              text,
  p_utm_term                  text,
  p_utm_content               text,
  p_linkedin_url              text,
  p_github_url                text,
  p_website_url               text,
  p_resume_storage_path       text,
  p_resume_original_filename  text,
  p_resume_mime_type          text,
  p_resume_size_bytes         integer,
  p_years_experience          numeric,
  p_experience_question_text  text,
  p_experience_min_value      numeric,
  p_role_question_text        text,
  p_role_answer               boolean,
  p_french_required           boolean,
  p_french_fluent             boolean,
  p_auto_screen_score         integer,
  p_auto_screen_flags         jsonb
) returns uuid
security definer
language plpgsql
as $$
-- Tenant/property resolution from p_secret, same pattern as
-- capture_website_lead — never from a client-supplied field (falsifiable).
-- Implement the dedupe/merge logic from §3 here.
$$;
```

**Read this before implementing:** `capture_website_lead` shipped with a
fixed parameter signature, and PostgREST 404s on any undeclared `p_*`
parameter — which is exactly why `name`/`phone` on that older function ended
up riding inside a `p_payload` JSONB catch-all instead of being first-class
columns (see `docs/LEAD-GATE-SPEC.md` §D2, still open). **Do not repeat that
here.** Declare the full parameter list above from day one — every field in
§1 is a first-class parameter, nothing application-specific should need a
JSONB workaround this time.

Auth: same secret-header pattern as `capture_website_lead` — anon key +
`p_secret`. **Recommend a dedicated `OS_APPLICATION_INGEST_SECRET`**, not a
reuse of `OS_LEAD_INGEST_SECRET` — resumes carry more sensitive PII than a
generic sales lead, and a separate secret limits blast radius if one leaks.

**Note on `LeadForm`:** no change needed to the existing enum
(`"lead" | "diagnostic" | ...`) — this is a new table, not a new value
flowing through `capture_website_lead`. The one enum-equivalent this spec
does need is the `stage` CHECK constraint in §2.

---

## §6 — Resume upload endpoint

Same exemption pattern as the existing `/api/cron/leads-notify` call (must
be added to the OS middleware's auth-exemption list alongside `api/cron` and
`api/notion` — easy to miss, would otherwise silently 404 or redirect to a
login page):

```
POST {OS_APP_URL}/api/careers/resume-upload
Headers: x-ingest-secret: <OS_APPLICATION_INGEST_SECRET>
Body:    multipart/form-data — file, applicationId, roleSlug

Success 200: { "ok": true, "resumeId": "<path>", "storagePath": "<path>" }
Failure:     { "ok": false, "reason": "..." }  — 4xx/5xx, never a silent 200
```

**Both fields carry the PATH, not a storage object UUID.** The site stores
whatever comes back as `resumeId` into `applicants.resume_storage_path`
(`resumeStoragePath: data.resumeId` in `careers-apply/route.ts`). Returning the
storage service's internal object id there fills the column with a UUID, and a
signed URL cannot be generated from a UUID — the CV is uploaded, referenced and
yet unrecoverable, and nothing surfaces it until someone in recruitment tries to
open a candidate's file. This was a real defect, caught on the first live
application and fixed in `Ai-M-Internal-Ops` PR #115. A CV's reference is its
path (D4). Do not "restore" the object id here.

Validate on the OS side too (defense in depth, don't rely on the site alone):
mime types `application/pdf`, `application/msword`,
`application/vnd.openxmlformats-officedocument.wordprocessingml.document`;
max size 8MB; store under the private bucket from §4, path convention e.g.
`applications/<roleSlug>/<applicationId>-<sanitizedFilename>`.

---

## §7 — Summary: who builds what

| | |
|---|---|
| **Site sends** | Every field in §5's RPC signature; a resume file to §6's endpoint, separately, before the main submission. |
| **OS must build** | `applicants` table (§2) + indexes; `capture_website_application` RPC (§5); private storage bucket + access policy (§4); resume-upload endpoint (§6) + middleware exemption; dedupe/merge logic (§3). |
| **Explicitly out of scope for this spec** | `applicant_notes` table (optional, later); any leadership-facing UI to move stages / set `overall_score`; the n8n workflow for applicant emails (mirrors the current "not yet built" posture of `N8N_APPLICATION_WEBHOOK_URL`). |

---

## §8 — Decisions (all resolved 2026-08-12)

**D1 — One ingest secret or two? → TWO.** `OS_APPLICATION_INGEST_SECRET` is
separate from `OS_LEAD_INGEST_SECRET`, provisioned in `private.ingest_keys`
under the name `website_applications` and set in both containers' `.env`. The
site already sends it; nothing further to decide.

**D2 — Reverse proxy body-size limit? → NOT AN ISSUE, verified.** The Caddy
config this spec could not see lives at `/opt/ai-makers/infra/caddy/Caddyfile`
on the VPS. It contains **no `request_body max_size` directive anywhere**, and
Caddy v2.11.4 imposes no default request-body limit on `reverse_proxy`. An
8–10MB multipart resume passes the proxy. Do not re-investigate this.

**D3 — `applicant_notes` now or later? → LATER**, as recommended. `stage`,
`tags` and `rejection_reason` carry the pipeline until real interview
note-taking starts. Not built.

**D4 — Raw path or opaque `resume_id`? → RAW PATH**, as recommended.
`applicants.resume_storage_path` holds the storage object path. The upload
endpoint also returns the storage object's own UUID as `resumeId`, so an
indirection layer can be added later without changing the stored column.

---

## §9 — What was built, and the deviations from this spec

Three deliberate departures, all in the direction of not losing a candidate:

1. **Optional fields merge with `coalesce`, they do not blind-overwrite.** §3
   says a re-application overwrites phone, links and resume reference. Taken
   literally, a candidate who leaves the phone blank on their second
   application would erase the number they gave on the first. The RPC keeps
   the existing value when the incoming one is null. Required fields (name,
   screening answers, score) still overwrite.
2. **An out-of-range `auto_screen_score` is clamped to 0–100, not rejected.**
   The table's CHECK constraint would otherwise abort the insert and lose the
   application over a scoring bug.
3. **`stage` is never written by the RPC at all** — not even on first insert
   beyond its column default. §3 describes several cases where the stage must
   not move backward; never touching the column satisfies all of them and
   removes the possibility of a future edit reintroducing a regression.

`tags` is the one human-owned column the ingestion touches, and only by
**appending** `reapplied` when the existing row has moved past `applied`.
Existing tags are preserved.

**Verified against the live stack, not mocked:** an 8-case dedupe suite (merge,
no stage regression, human fields intact, CV survives a CV-less re-application,
different role is a distinct row, `first_submitted_at` preserved, score
clamped, wrong secret and invalid email rejected); a real RPC call from the
`aimakers-web` container through Kong; `anon` refused a SELECT on
`public.applicants` (401); upload accepted a PDF and rejected a bad mime (415),
a 9MB file (413) and an empty file (400); a crafted `roleSlug`/`applicationId`/
filename containing `../` was neutralised into `applications/etc/escape-passwd.pdf`
rather than escaping the folder; the stored CV was unreachable both anonymously
and with the anon key, and retrievable only through a service-role signed URL.
All test rows and objects were deleted afterwards.

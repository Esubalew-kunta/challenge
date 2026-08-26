# Claude Code Resource Packs: Phase 3 Implementation Plan

Date: 26 August 2026
Design: `docs/superpowers/specs/2026-08-26-claude-code-resource-packs-design.md`

## Constraints

- Keep all lessons public.
- Require a company email only for downloads.
- Use static files and the existing lead/email flow; no AI API.
- Build English and French together.
- Do not vendor or auto-install third-party executable code.
- Preserve unrelated working-tree files and local development logs.

## Step 1: Stabilize the completed path work

Files:

- `src/lib/challenge/profile.ts`
- `src/components/challenge/use-profile.ts`
- `src/components/challenge/profile-modal.tsx`
- `src/components/challenge/profile-questions.tsx`
- `src/components/challenge/path-guidance.tsx`
- `src/components/challenge/day-view.tsx`
- `src/lib/challenge/types.ts`
- `src/lib/challenge/config.ts`
- `src/lib/challenge/config.fr.ts`

Re-run focused TypeScript, ESLint, and diff checks. Commit only the completed
Phase 1 and Phase 2 code, leaving local log files untouched.

## Step 2: Align the profile with resource categories

Replace the old Sales/Marketing/Operations/Technical/Other presentation with
Developer/Consultant/Operations/Founder/Marketing. Keep the existing database
column name `role`, but use a `ResourceCategory` type in challenge code. Bump the
local profile version so old test data is not mistaken for a valid category.

Update the English and French option labels, onboarding summary, path UI, and
profile parser. Add parser tests for valid, old-version, and invalid profiles.

## Step 3: Add a static resource registry

Create `src/lib/challenge/resources.ts` with typed resource IDs, locale-aware
paths, milestone mapping, category-pack mapping, titles, and expected archive
manifests. Keep selection pure and deterministic so it can be unit tested
without a browser or API.

Extend the challenge content type with an optional resource offer and attach
the correct IDs to Days 2, 10, 20, and 30 in English and French. Do not add the
email form in this step; Phase 4 wires the gate to the existing API.

## Step 4: Author the Second Brain packages

Create English and French source folders under `resources/challenge/`. Each
contains `START-HERE.md`, index, `CLAUDE.md`, manual `MEMORY.md`, inbox,
projects, resources, routines, archive, one safe rule, and one starter skill.

Explain auto memory and `/memory` accurately. Keep routines in `03-Routines/`,
not `.claude/routines/`. Include no credentials, active hooks, executable
scripts, or automatic network actions.

## Step 5: Author the five category Skills Packs

Create three ready-to-copy AIMakers skills for each category in both locales:

- Developer: Codebase Mapper, Safe Change, Code Reviewer;
- Consultant: Discovery Brief, Proposal Builder, Meeting-to-Action Plan;
- Operations: SOP Builder, Process Auditor, Weekly Operations Report;
- Founder: Idea Validator, Decision Memo, Founder Weekly Review; and
- Marketing: Campaign Brief, Content Repurposer, Performance Review.

Each pack includes `START-HERE.md`, installation instructions, beginner and
Builder examples, and tips. Validate every `SKILL.md` frontmatter name and
description.

## Step 6: Author the milestone kits

Create localized Starter, Workflow, and Company source folders. Add the approved
templates, checklists, tips, shortcuts, GStack/Vercel recommendations, and
`VERIFIED-RESOURCES.md`. Record source owner, license status, purpose,
installation command, safety note, and the 26 August 2026 review date.

Copy the existing localized worksheet PDFs into the correct archive during the
build:

- Starter: Setup, Tool Picker, Hooks, Manager;
- Workflow: Context, Saved Jobs, Connections; and
- Company: Unattended, Instructions, Complete Guide, Team.

Generate a short localized quick-guide PDF for each milestone kit and include it
inside the ZIP.

## Step 7: Build reproducible static archives

Add a PowerShell build script that stages the source trees, copies the approved
PDFs, creates the 18 ZIP variants under
`public/resources/claude-code-challenge/`, and writes a machine-readable
manifest. The script must resolve and verify every target path before replacing
generated archives.

Static archives are committed and served directly by the site. Vercel does not
run the archive builder during normal deployment.

## Step 8: Validate and hand off Phase 3

Add a resource validation script that checks:

- all 18 archives exist and open;
- expected English/French manifests match;
- no secret-like values, executable extensions, active hooks, or unsafe config;
- AIMakers skill frontmatter is valid;
- every expected PDF is present; and
- approved external links return a valid response at review time.

Run typecheck, focused lint, resource validation, archive inspection, and
`git diff --check`. Show the user the resource inventory and sample folder trees
before moving to Phase 4.

## Phase boundary

Phase 3 ends with complete, tested static downloads and typed metadata. Phase 4
adds the Day 2/10/20/30 email forms, API payload changes, immediate multi-file
delivery, known-contact behavior, and milestone badge gates.

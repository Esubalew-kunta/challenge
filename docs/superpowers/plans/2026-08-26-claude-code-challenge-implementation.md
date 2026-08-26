# Claude Code Challenge Lead Magnet: Implementation Plan

Status: Ready for execution after product-spec approval
Spec: `docs/superpowers/specs/2026-08-26-claude-code-challenge-lead-magnet-design.md`

## Guardrails

- Do not add an AI API or paid model dependency.
- Reuse existing challenge-sheet, challenge-badge, lead, email, and analytics patterns.
- Keep all 30 lessons publicly readable.
- Keep Beginner and Builder content in one curriculum with conditional sections.
- Do not require an account, proof upload, Second Brain download, or final project.
- Preserve unrelated working-tree changes, including local dev logs.
- Implement English and French together; every content change has an equivalent French change.

## Phase 1: Data and shared content model

### 1. Extend the profile model

Files:

- `src/lib/challenge/profile.ts`
- `src/components/challenge/use-profile.ts`
- `src/components/challenge/profile-questions.tsx`
- `src/lib/challenge/config.ts`
- `src/lib/challenge/config.fr.ts`

Add typed fields for role, experience, goal, selected path, locale, and path-change history. Keep local storage as the first store. Preserve the existing profile behavior and make onboarding dismissible.

### 2. Add path-aware lesson content

Files:

- `src/lib/challenge/types.ts`
- `src/lib/challenge/days-phase-1.ts`
- `src/lib/challenge/days-phase-2.ts`
- `src/lib/challenge/days-phase-3.ts`
- corresponding `.fr.ts` files
- `src/components/challenge/day-view.tsx`

Add optional Beginner and Builder blocks to the lesson data model. Keep the shared explanation, one daily result, one practical action, one check, and the existing quiz. Add a visible path switcher and show only the selected path block by default.

### 3. Add the shared Second Brain starter resource

Files:

- `public/` resource location or the existing generated-resource convention
- `src/lib/challenge/registry.ts`
- `src/lib/challenge/registry.fr.ts`
- `src/components/challenge/earned-offer.tsx`

Create one language-neutral Markdown workspace ZIP with `00_Index.md`, `CLAUDE.md`, `MEMORY.md`, folders, rules, skills, and routines. Add an optional Day 2 download link. Verify the ZIP contains no secrets and opens without a special application.

## Phase 2: Learner journey and progression

### 4. Add onboarding and path switching

Files:

- `src/components/challenge/profile-modal.tsx`
- `src/components/challenge/profile-questions.tsx`
- `src/components/challenge/lesson-path-switcher.tsx` (new)
- `src/components/challenge/use-profile.ts`

Ask three optional questions. Save answers locally. Show recommended path and first resource. Add a visible “Change my path” control. Do not block Day 1.

### 5. Keep daily quizzes and add milestone checks

Files:

- `src/components/challenge/quiz.tsx`
- `src/components/challenge/day-view.tsx`
- `src/lib/challenge/progress.ts`
- `src/components/challenge/score-card.tsx`

Keep daily quizzes lightweight. Add milestone completion state for days 10, 20, and 30. Badge eligibility must depend on local completion and milestone quiz success, not uploaded proof.

### 6. Add milestone resource offers

Files:

- `src/components/challenge/sheet-offer.tsx`
- `src/components/challenge/earned-offer.tsx`
- `src/lib/challenge/sheets.ts`
- `src/lib/challenge/sheets.fr.ts`
- `src/lib/challenge/registry.ts`

Group the existing sheet inventory into three email-gated bundles: Starter, Workflow, and Company. Keep selected lesson worksheets visible without creating additional email gates. Add PDF and ZIP delivery metadata.

## Phase 3: Lead capture, badge, and analytics

### 7. Reuse and extend existing lead APIs

Files:

- `src/app/api/challenge-sheet/route.ts`
- `src/app/api/challenge-badge/route.ts`
- `src/lib/schemas/lead.ts`
- `src/lib/schemas/challenge-badge.ts`

Accept only the necessary fields. Cheat-sheet requests require email. Badge requests require email and display name. Add locale, path, role, experience, goal, milestone, source, and anonymous visitor ID where the current schema and consent rules allow it. Do not capture user files or Claude conversations.

### 8. Add anonymous-to-lead event association

Files:

- `src/lib/challenge/progress.ts`
- `src/components/challenge/use-profile.ts`
- an existing analytics helper or a small challenge analytics module

Track onboarding, path selection/change, day viewed/completed, quiz completion, resource request, badge request, Second Brain download, milestone reached, and CTA click. Keep the browser identifier anonymous until a resource or badge form is submitted. Avoid creating a new analytics vendor.

### 9. Update badge presentation

Files:

- `src/components/challenge/badge-card.tsx`
- `src/components/challenge/badge-view.tsx`
- `src/lib/challenge/badge-art.ts`
- `src/app/(en)/en/claude-code-challenge/badge/page.tsx`
- corresponding French badge files/routes

Add the three milestone titles and generate a PNG plus LinkedIn-ready sharing image. Collect display name only at badge request time. Keep the existing badge endpoint and rendering pipeline.

## Phase 4: Lightweight interactive tools

### 10. Add deterministic selectors

New or existing components:

- `src/components/challenge/tool-selector.tsx`
- `src/components/challenge/skill-selector.tsx`
- `src/lib/challenge/recommendations.ts`
- French equivalents or locale data

Use static mappings from role, experience, and goal to recommend a tool, skill, or resource. Add no model calls. Include a reset and path-change option.

Defer routine builder, cost calculator, time-saved calculator, public showcase, and large resource library until after the first release.

## Phase 5: Content and presentation

### 11. Rewrite content using the approved lesson template

Files:

- all English and French day data files
- `src/components/challenge/day-view.tsx`
- `src/components/challenge/rich-text.tsx`

For each day, ensure:

- one clear result
- why it matters
- Beginner and Builder instruction blocks
- one practical action
- one test
- one common problem
- optional advanced detail
- daily quiz
- continue-or-skip guidance

Keep claims honest, security warnings visible, and command/file names unchanged where translation would break them.

### 12. Improve the index page

Files:

- `src/app/(en)/en/claude-code-challenge/page.tsx`
- corresponding French page
- challenge-specific components and styles

Add the transformation promise, path selector, “what you will have” section, optional Second Brain download, milestone map, and three reward explanations. Reduce competing global navigation where safe. Keep lessons public and the primary CTA clear.

### 13. Add soft follow-up CTAs

Files:

- challenge page and milestone components
- English/French UI strings

Show optional CTAs after Days 10, 20, and 30 for the readiness diagnostic, AI Makers training, and team consultation. CTAs must not block resource or badge delivery.

## Phase 6: French parity and QA

### 14. Content parity checks

Use existing challenge guards and add checks for:

- same 30 day numbers and slugs
- same phase and milestone boundaries
- same path variants
- same resource IDs and bundle mapping
- same quiz counts and answer indexes
- translated UI strings present in both locales

Review French for natural phrasing and French examples instead of relying only on mechanical translation.

### 15. Automated checks

Run:

- `npm run typecheck`
- `npm run lint`
- `npm test`
- `npm run check:generated`
- `npm run build`

Add focused tests for profile persistence, path switching, milestone eligibility, resource mapping, badge input validation, and English/French parity.

### 16. Browser QA

Test English and French at desktop and mobile widths:

- onboarding can be skipped
- selected path persists after reload
- path switching updates content
- all 30 lessons remain public
- daily quizzes persist progress
- Days 10, 20, and 30 show the correct offers
- email-only cheat-sheet gate works
- name-and-email badge gate works
- PDF and ZIP downloads work
- Second Brain download is optional
- CTA clicks are tracked
- no console errors or broken links

## Execution order

1. Add and test profile/path data model.
2. Add path-aware lesson rendering.
3. Add Second Brain and resource bundle metadata.
4. Add milestone state and offers.
5. Extend lead and badge payloads.
6. Add analytics events.
7. Add deterministic selectors.
8. Rewrite and review content in English and French.
9. Improve presentation and CTAs.
10. Run automated and browser QA.

## Release gate

Do not launch until English and French pass the same functional checklist, all three resource gates work, badge generation works for all milestones, analytics events are visible, and the full challenge can operate without daily manual intervention.

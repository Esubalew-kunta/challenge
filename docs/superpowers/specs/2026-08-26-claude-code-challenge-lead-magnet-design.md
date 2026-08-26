# Claude Code in 30 Days: Evergreen Lead-Magnet Design

Status: Planning specification for review
Date: 2026-08-26

## 1. Product goal

Create an evergreen, low-maintenance lead magnet that teaches Claude Code through 30 short public lessons and converts engaged readers into AI Makers leads through useful milestone resources.

The experience must be useful without an account, require no paid AI API, reuse the existing AI Makers email and badge systems, and work in English and French at the same quality level.

## 2. Audience

One shared 30-day curriculum serves two paths:

- Beginner: business professionals, consultants, operations, founders, and non-technical users.
- Builder: developers and technical founders.

The user answers optional onboarding questions. The selected path is saved, controls the default instructions and examples, and can be changed at any time. Shared concepts remain shared; path-specific sections are shown progressively so the page does not overwhelm beginners.

Onboarding questions:

1. What describes you? Developer, Consultant, Operations, Founder, or Marketing.
2. How familiar are you with Claude Code? Never used it, tried it, or use it regularly.
3. What do you want to achieve? Save time, automate work, build software, organize knowledge, or improve team work.

## 3. Core promise

Build a safe AI work system around your real projects in 30 days.

The promise is practical and honest: each day creates one small useful output. The challenge does not require a large final project, proof upload, daily check-in, or formal certification.

## 4. Learning architecture

### Phase 1: Get it working, Days 1–10

Install and understand Claude Code, choose a path, download the optional Second Brain workspace, create `CLAUDE.md` and `MEMORY.md`, learn key shortcuts, protect files, and create the first skill.

Milestone: Claude Code Builder.

### Phase 2: Make it yours, Days 11–20

Teach rules, context control, hooks, skills, routines, loops, planning, cost awareness, and one useful connection. The learner learns when to use a command, skill, rule, hook, agent, or routine.

Milestone: Claude Code Operator.

### Phase 3: Make it work without you, Days 21–30

Teach narrow agents, parallel work, review and verification, scheduled routines, document search, company repositories, and handoff practices.

Milestone: AI Champion.

Advanced topics are optional sections. The main path remains 10–15 minutes per lesson.

## 5. Lesson template

Every lesson follows the same structure:

1. Today’s result
2. Why it matters
3. Beginner path and Builder path
4. Do this now
5. Save your result
6. Check it works
7. Common problem
8. Quick quiz, normally 1–2 questions
9. Continue or skip guidance

Every day produces one small artifact or result: a file, rule, skill, routine, checklist, decision, or working output. Larger milestone projects are not required.

Writing style: calm expert coach. Use plain language, real problems, short explanations, concrete examples, progressive disclosure, and honest claims. Explain technical terms once in normal language. Use Builder notes for deeper commands and configuration.

## 6. Second Brain workspace

The Second Brain is optional but strongly recommended and introduced on Day 2. It is one shared starter ZIP for both paths. Obsidian is optional; the underlying Markdown files work in Claude Code, VS Code, Cursor, Obsidian, or a normal editor.

Starter structure:

```text
My-Claude-Workspace/
├── 00_Index.md
├── CLAUDE.md
├── MEMORY.md
├── 00-Inbox/
├── 01-Projects/
├── 02-Resources/
├── 03-Archive/
└── .claude/
    ├── skills/
    ├── rules/
    └── routines/
```

The workspace grows through the lessons, but no badge depends on downloading or using it.

## 7. Resources and lead capture

Public lessons remain readable without an email. Email gates are limited to three high-value bundles:

- Day 10: Starter Kit PDF + ZIP: shortcuts, `CLAUDE.md`, `MEMORY.md`, setup guides, and starter skills.
- Day 20: Workflow Kit PDF + ZIP: skills, routines, loops, rules, hooks, context, and cost checklists.
- Day 30: Company Claude Kit PDF + ZIP: company `CLAUDE.md`, team rules, shared skills, safety checklist, routines, and handoff guide.

Small worksheets may appear on selected lesson days, but they are grouped into the three milestone bundles and do not create repeated email friction.

Cheat-sheet request fields: email only.

Badge request fields: display name and email. Display name can be a first name, full name, company name, or nickname.

Badges are downloadable PNGs and LinkedIn-ready sharing images:

- Days 1–10: Claude Code Builder
- Days 11–20: Claude Code Operator
- Days 21–30: AI Champion

Badge unlock requires completing the relevant lessons and passing the milestone quiz. No screenshot or file proof is required.

## 8. Personalization and analytics

Personalization uses deterministic rules, not an AI API. Role, experience, goal, locale, and path select the recommended instructions, skills, repository examples, and resource bundle.

Store locally before email: selected path, onboarding answers, viewed and completed days, quiz results, resource milestones, and path changes.

When the user submits an email, associate the prior anonymous activity with the lead record and send the matching resource. Collect only information needed for personalization and follow-up. Never collect user files or Claude conversations.

Useful events include:

- onboarding_started and onboarding_completed
- path_selected and path_changed
- day_viewed and day_completed
- quiz_completed
- resource_requested and badge_requested
- second_brain_downloaded
- milestone_reached
- follow-up CTA clicked

Use the existing AI Makers email, lead, and badge systems wherever possible.

## 9. Lightweight interactive features

Version 1 includes:

- Optional onboarding profile
- Saved Beginner/Builder path with a visible change-path button
- Daily quiz and progress tracking
- Milestone badges and email gates
- Tool selector using static decision rules
- Ready-made skill selector using role, experience, and goal
- Second Brain ZIP download
- Basic milestone progress card

Later enhancements, not required for Version 1: routine builder, cost calculator, time-saved calculator, public showcase, and a large resource library.

## 10. Follow-up CTAs

Use soft, helpful CTAs after milestones:

- Day 10: free AI readiness diagnostic.
- Day 20: AI Makers training resources.
- Day 30: team deployment or consultation conversation.

CTAs are optional and do not block the resource or badge.

## 11. French parity

English and French launch together. French receives the same 30 lessons, paths, quizzes, resources, badges, interactive behavior, analytics events, email messages, SEO metadata, and CTA logic.

French copy must be reviewed as natural French, not produced as a literal translation. Both languages require separate content QA before launch.

## 12. Non-goals

Version 1 will not include:

- A custom AI chatbot
- Paid AI API calls
- Required daily monitoring
- Required milestone projects
- Mandatory Obsidian installation
- Complex leaderboard or social network
- Screenshot verification for badges
- A new email or badge platform

## 13. Success measures

Track:

- Challenge visits
- Onboarding completion
- Path selection and switching
- Day 1, Day 10, Day 20, and Day 30 completion
- Quiz completion
- Cheat-sheet conversion rate
- Badge request rate
- Second Brain downloads
- Email-to-consultation conversion
- English/French conversion comparison

## 14. Acceptance criteria

The product is ready for implementation planning when:

- English and French have the same functional journey.
- A user can read all lessons without an email.
- A user can choose and change paths.
- Daily lessons show one practical result without overwhelming users.
- The three milestone bundles and badges are defined.
- Badge and resource requests use existing systems.
- The Second Brain ZIP is optional and downloadable on Day 2.
- Analytics events are defined without collecting sensitive user content.
- No feature requires a paid AI API.
- The challenge can run without daily manual administration.

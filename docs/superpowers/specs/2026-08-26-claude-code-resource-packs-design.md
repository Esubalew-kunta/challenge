# Claude Code Challenge Resource Packs

Date: 26 August 2026
Status: Approved design, awaiting written-spec review

## 1. Objective

Turn the 30-day challenge resources into a useful evergreen lead magnet that
helps beginners get a working system quickly and gives experienced visitors
ready-to-use workflows. The resource system must work without an AI API,
runtime file generation, accounts, proof uploads, or daily monitoring.

All 30 lessons remain publicly readable. Downloads use static files and the
existing lead-delivery flow.

## 2. Delivery moments

There are four resource moments:

| Day | Resource | Access |
| --- | --- | --- |
| 2 | Second Brain workspace | Company email |
| 10 | Starter Kit and selected Skills Pack | Company email |
| 20 | Workflow Kit | Company email |
| 30 | Company Claude Kit | Company email |

The first resource request collects the company email. Later requests recognize
the saved contact in the same browser and offer a one-click confirmation, with
an option to change the address. Each successful request provides an immediate
download and sends the same resource links by email.

If a visitor skipped onboarding, the page asks them to choose a resource
category before the email field. This choice is a personalization preference,
not an additional contact field. The five categories are Developer, Consultant,
Operations, Founder, and Marketing.

## 3. Packaging model

Use separate English and French packages. Do not put both languages in one ZIP.

The static inventory contains 18 package variants:

- two Second Brain packages;
- two Starter Kits;
- ten Skills Packs, one for each category and locale;
- two Workflow Kits; and
- two Company Claude Kits.

Each package includes a short `START-HERE` guide. The milestone kits contain a
printable quick guide, relevant existing worksheet PDFs, editable Markdown
templates, and examples. The quick guide may also be offered as a direct PDF
link, but the ZIP is the complete resource.

No third-party package is automatically installed or silently copied into a
user's project.

## 4. Second Brain workspace

The Second Brain is introduced on Day 2 and works in Claude Code, VS Code,
Cursor, Obsidian, or a normal text editor. Obsidian is optional.

```text
My-Claude-Workspace/
├── START-HERE.md
├── 00_Index.md
├── CLAUDE.md
├── MEMORY.md
├── 00-Inbox/
├── 01-Projects/
├── 02-Resources/
├── 03-Routines/
├── 04-Archive/
└── .claude/
    ├── rules/
    └── skills/
```

The root `MEMORY.md` is explicitly described as a manually maintained project
notebook. It is not presented as Claude Code auto memory. The guide explains
that auto memory is stored separately by Claude Code and is viewed through
`/memory`.

`03-Routines/` contains reusable human-readable routine and loop templates. It
is not described as a native `.claude/routines/` feature. Examples distinguish
session-scoped `/loop` tasks from durable Desktop, cloud, or CI routines.

The workspace contains no secrets, credentials, active hooks, executable
scripts, or automatic network actions.

## 5. Milestone kits

### Day 10: Starter Kit

Include the existing Setup, Tool Picker, Hooks, and Manager PDFs. Add:

- the best current Claude Code shortcuts and diagnostic commands;
- a concise `CLAUDE.md` template;
- a manual memory template and auto-memory explanation;
- a safe starter rule;
- one simple reusable skill;
- installation examples for the app, editor, and terminal; and
- the visitor's selected category Skills Pack.

### Day 20: Workflow Kit

Include the existing Context, Saved Jobs, and Connections PDFs. Add:

- skill, rule, hook, and context decision guide;
- routine and loop templates;
- workflow review checklist;
- cost and context checklist;
- safe connection checklist; and
- examples for improving a skill after each use.

### Day 30: Company Claude Kit

Include the existing Unattended, Instructions, Complete Guide, and Team PDFs.
Add:

- company `CLAUDE.md` template;
- shared rule and shared skill templates;
- security and permissions checklist;
- team onboarding and handoff guide;
- ownership and review cadence template; and
- a safe unattended-work checklist.

## 6. AIMakers category Skills Packs

These skills are authored for this challenge and are included as ready-to-copy
`SKILL.md` folders. Each pack contains three focused skills, beginner-friendly
usage examples, installation instructions, and an advanced-tips page.

| Category | Included AIMakers skills |
| --- | --- |
| Developer | Codebase Mapper, Safe Change, Code Reviewer |
| Consultant | Discovery Brief, Proposal Builder, Meeting-to-Action Plan |
| Operations | SOP Builder, Process Auditor, Weekly Operations Report |
| Founder | Idea Validator, Decision Memo, Founder Weekly Review |
| Marketing | Campaign Brief, Content Repurposer, Performance Review |

The skills use plain instructions and do not depend on paid integrations. A
visitor can change category before downloading; the new choice updates the
locally saved profile.

## 7. Verified external resources

Every package contains a localized `VERIFIED-RESOURCES.md` guide. It records the
source owner, purpose, installation method, license status, review date, and a
short safety note. The initial review date is 26 August 2026.

Approved sources:

- Anthropic official plugin marketplace and `anthropics/skills` repository;
- `obra/superpowers`, available through Anthropic's official marketplace;
- `garrytan/gstack`;
- `vercel-labs/agent-skills`;
- `wshobson/agents`; and
- `hesreallyhim/awesome-claude-code` for discovery only.

The guide must not describe popularity as proof of safety. It explains that
plugins can execute code and that users should inspect and trust a source before
installation. Community sources are labelled "reviewed on" rather than
"permanently verified."

### GStack recommendations

GStack is MIT-licensed and provides an integrated workflow with shared setup and
dependencies. Link to its official installer instead of copying individual
folders out of context. Recommend a small starting route by category:

- Developer: planning, engineering review, investigation, QA, review, and ship;
- Founder: office hours, CEO review, and autoplan;
- Consultant: office hours, design consultation, and document generation;
- Operations: careful/guard, health, canary, and investigation; and
- Marketing: design consultation, design review, and document generation.

### Vercel recommendations

Vercel's official Agent Skills repository is MIT-licensed and follows the Agent
Skills format. Recommend only relevant skills:

- Developer: React best practices, composition patterns, UI guidelines, and
  Vercel optimization;
- Founder and Marketing: writing and web-design guidelines when working on a
  website; and
- React Native or view-transition guidance only when the visitor's work calls
  for it.

Provide the official `npx skills add` commands. Do not run them for the visitor.

## 8. Personalization and data flow

Personalization is deterministic:

1. Read locale, category, level, goal, and Beginner/Builder path from the local
   profile.
2. If category is missing, show the five category buttons.
3. Show the company-email resource form.
4. Send locale, resource ID, category, level, goal, and path to the existing
   lead API.
5. Return static URLs for the base kit and, on Day 10, the matching Skills Pack.
6. Start the immediate download and send the same links through the existing
   email workflow.

No user file, prompt, Claude conversation, or project content is collected.

## 9. Failure handling

- If lead storage or email delivery fails but the request is valid, preserve the
  current graceful-download behavior and explain that the email may not arrive.
- If a localized file is missing, do not silently send the other language.
  Display a retryable error and record the missing resource in server logs.
- If the saved category is invalid or from an older profile version, ask for a
  current category rather than guessing.
- If a third-party link changes later, the static package remains useful because
  all AIMakers skills and templates are self-contained.

## 10. Validation and acceptance criteria

Before release:

- open every English and French ZIP;
- verify the expected file manifest for all 18 variants;
- scan archives for secrets, credentials, executable files, and unsafe active
  configuration;
- validate every AIMakers `SKILL.md` name and description;
- verify all PDF and external links;
- confirm English and French packages have matching content IDs;
- confirm the Day 2 email gate, immediate download, and email delivery;
- confirm the Day 10 base kit and selected Skills Pack are both delivered;
- confirm known contacts can request later kits without retyping their address;
- test category switching and saved-profile updates; and
- confirm the public lessons remain readable without submitting an email.

## 11. Source references

- Claude Code memory: https://code.claude.com/docs/en/memory
- Claude Code plugins: https://code.claude.com/docs/en/discover-plugins
- Claude Code scheduled tasks: https://code.claude.com/docs/en/scheduled-tasks
- Anthropic skills: https://github.com/anthropics/skills
- Superpowers: https://github.com/obra/superpowers
- GStack: https://github.com/garrytan/gstack
- Vercel Agent Skills: https://github.com/vercel-labs/agent-skills
- Wshobson Agent Marketplace: https://github.com/wshobson/agents
- Awesome Claude Code: https://github.com/hesreallyhim/awesome-claude-code

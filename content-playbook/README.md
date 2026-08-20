# Website Content Creation Playbook

A four-agent system for producing website content that survives an independent SEO audit
and an independent "was this actually written by a human" audit — in that order, on purpose.

This repo is sector-agnostic and brand-agnostic. Nothing here knows what you sell. The
agents find that out by asking you, once, at intake (`intake/questionnaire.md`), and
everything downstream runs off your answers.

## The idea in one paragraph

Most content pipelines fail in one of two ways. Either one agent does everything, in which
case it audits its own homework and passes; or the auditors are handed the brief, in which
case they check whether the content matches the brief rather than whether the content is
any good. This system fixes both by splitting the work across four agents and putting a
wall down the middle. Agents 1 and 2 hold all the context and make the content. Agents 3
and 4 are deliberately starved of that context and audit the artifact cold, the way a
reader or a search engine meets it. Then agent 2 — and only agent 2 — decides which
findings to act on, because it is the only one that knows why the page is the way it is.

## The four agents

| # | Agent | Holds | Never sees | Produces |
|---|---|---|---|---|
| 1 | **Page & Section Tracker** | Full context, page inventory, brief | — | `_tracker.md`, one spec per page |
| 2 | **Content Creator** | Full context, prior research, Ahrefs | — | `<page>/content.md` |
| 3 | **SEO Auditor** | Ahrefs, the content, the live code | Brief, prior research, specs, agent 2's reasoning | `seo-audit-report/<page>.md` |
| 4 | **Anti-AI-Slop Auditor** | The content, nothing else | Brief, prior research, specs, Ahrefs, agent 2's reasoning | `ai-slop-audit-report/<page>.md` |

Agents 3 and 4 never talk to each other, and neither is told what the other found. Two
independent auditors that agree are evidence. Two auditors who compared notes are one
auditor with extra steps.

## The cycle

```
 intake ──▶ 1 ──▶ 2 ──┬──▶ 3 ──┐
  (you)     │        │  └──▶ 4 ─┤   3 and 4 run in parallel or in any order —
            │        │          │   they are independent by construction
            │        │          ▼
            └────────┴───── 2 (disposition pass) ──▶ 1 (re-verify) ──▶ sign-off
```

Agent 2's second pass is a judgment step, not an apply-all step. The auditors do not know
why a decision was made, so some of their findings will be wrong. Agent 2 rules on each
one and records the ruling in `_disposition.md`. A rejected finding stays rejected with its
reason attached; without that record the next cycle re-raises it and nobody remembers why
it was dropped the first time.

Full procedure: **[`SOP.md`](SOP.md)**.

## Quickstart

1. Drop this repo into the branch where your content will live.
2. Run agent 1. It walks you through `intake/questionnaire.md` and refuses to start until
   the blocking questions are answered. That refusal is the product, not friction to route
   around — see the next section.
3. Agent 1 builds the tracker and the page specs. You approve them.
4. Agent 2 writes each page against its spec.
5. When every page is drafted, fire agents 3 and 4.
6. Agent 2 dispositions the findings. Agent 1 re-verifies coverage. Ship.
7. Run the whole cycle again for the next language, into `[FR] website-content/`.

## The one thing that sinks this if you skip it

Intake asks you for firsthand material: things that went wrong, numbers you measured
yourself, opinions you would defend in public, the specific complaint a specific customer
made. It reads like the soft part of the questionnaire. It is the load-bearing part.

Agent 4 scores every page against the Zero-Knowledge Test — could this have been written by
someone who has never done the thing, met the people, or used the product? A page that
fails it **cannot be repaired by editing**, and no amount of rewriting will change that,
because what's missing is knowledge, not prose. If intake supplies no firsthand material,
agent 2 has nothing to build with, agent 4 correctly fails every page, and the loop never
converges. You will have built an expensive machine for generating polished nothing.

The questionnaire is a raw-material supply line. Feed it properly or don't start.

## Repo map

```
README.md                       ← you are here
SOP.md                          ← the operating procedure, step by step
intake/
  questionnaire.md              ← what agent 1 asks before any work starts
  project-brief.template.md     ← what intake produces; the context spine
.claude/agents/                 ← the four agents, pluggable as Claude Code subagents
  1-page-section-tracker.md       (also plain markdown, if you run another harness)
  2-content-creator.md
  3-seo-auditor.md
  4-anti-slop-auditor.md
rules/
  context-firewall.md           ← who may see what; the load-bearing constraint
  seo-audit-rules.md            ← generic organic/on-page audit + swappable sector modules
  anti-ai-slop-audit-rules.md   ← slop detection + human-presence scoring
templates/                      ← the shape of every artifact the agents emit
```

## Output layout the agents build

```
[EN] website-content/
  _brief.md            ← intake output            (agents 1 & 2 only)
  _tracker.md          ← agent 1: every page, every section, live status
  _disposition.md      ← agent 2: every audit finding, ruled on
  <page-slug>/
    _spec.md           ← agent 1: what this page must contain, and why
    content.md         ← agent 2: the deliverable
    _sources.md        ← agent 2: firsthand material and citations used
seo-audit-report/
  _cross-page.md       ← systemic findings, written once
  <page-slug>.md
ai-slop-audit-report/
  <page-slug>.md
[FR] website-content/  ← same shape, after EN sign-off
```

Underscore-prefixed files are internal. Only `content.md` is the product.

## Adapting this to a sector

Don't fork the scoring matrix. The five categories and their weights (25/25/20/15/15) are
fixed, so that a 78 means the same thing on every page of every project you ever run. What
changes per sector is *which criteria fill those categories* and *which compliance regime
applies*. That's the sector module — `rules/seo-audit-rules.md` §4. A worked example
(healthcare/YMYL, French market) ships in that section. Copy its shape; throw away its
content.

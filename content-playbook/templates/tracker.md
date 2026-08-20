# Tracker — `[XX] website-content`

> Owned by agent 1. The single source of truth for "are we done?"
> **Never shown to agents 3 or 4.**
>
> Rule: this file is rebuilt by **sweeping the filesystem**, not by remembering. The
> characteristic failure of a content project is not a bad page — it's the page everyone
> forgot, spec'd in week one and shipped as a stub.

| | |
|---|---|
| Language | `[EN]` |
| Last swept | <date> — *by re-reading the tree, not from memory* |
| Cycle | 1 |

## Status vocabulary

`not-started` → `spec'd` → `drafted` → `audited` → `dispositioned` → `signed-off`

Plus `blocked` — always with a reason and an owner.

## Pages

| # | Page | Route | Type | Sections | Status | SEO | Slop | Blocked on |
|---|---|---|---|---|---|---|---|---|
| 1 | | | | 0/0 | `not-started` | — | — | |
| 2 | | | | 0/0 | `not-started` | — | — | |

**Sections** = drafted / spec'd. **SEO** = agent 3's /100 (need ≥75, no 🔴).
**Slop** = agent 4's net score (need ≤8, no auto-fails).

## Section detail

<details>
<summary>Page 1 — &lt;name&gt;</summary>

| Section | Material | Status | Notes |
|---|---|---|---|
| S1 | M1 | `drafted` | |
| S2 | — | `blocked` | no material — asked <date>, owner <who> |

</details>

## Blocked

| Page | Section | Needs | Owner | Asked | Due | Age |
|---|---|---|---|---|---|---|

> Nothing ages here quietly. If a block is older than the deadline it threatens, escalate to
> the human rather than letting agent 2 improvise around it.

## Canonical topic ownership

From brief §4 Q17. Record decisions here so nobody relitigates them in three weeks.

| Topic | Owner | Losers (link-only) | Decided |
|---|---|---|---|

## Known false-positive classes

> When an auditor misreads something *because it's blind* — and the same misread recurs
> across pages — record the class here. The auditor stays blind; the correction lives on
> this side of the wall. Never fix this by briefing agents 3 or 4.

| Class | Example finding | Why it recurs | Standing ruling |
|---|---|---|---|
| Product name read as keyword stuffing | "'Foundry' at 3.1% density" | Agent 3 can't know it's a product name | `reject` — cite brief §1 |

## Gate status

| Stage | Gate | ☐ |
|---|---|---|
| 1 | §6 has ≥3 usable specifics | ☐ |
| 1 | Brief corrected by human | ☐ |
| 2 | Specs approved | ☐ |
| 3 | All pages `drafted` | ☐ |
| 4 | Firewall enforced — fresh subagents, paths only | ☐ |
| 5 | Every finding ruled, every `implement` diffed | ☐ |
| 6 | Filesystem swept against inventory | ☐ |
| 8 | Factual + compliance sign-off | ☐ |

## Cycle log

| Cycle | Date | Pages audited | Converged | Sent back | Note |
|---|---|---|---|---|---|
| 1 | | | | | |

> **Two failed cycles on a page means stop looping and go get material.** A third cycle
> produces a page that scores well and reads like nothing.

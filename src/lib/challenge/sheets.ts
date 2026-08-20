/**
 * The ten downloadable sheets.
 *
 * Same principle as the thirty days: a sheet is a data record, never a
 * hand-built page. One layout renders all ten, so a fact cannot say one thing
 * on a sheet and something else on the day it came from.
 *
 * Every command and path here is referenced from `registry.ts` where one
 * exists. Nothing is retyped. If an install command changes, it changes in one
 * place and both the day page and the sheet follow.
 *
 * Two rules the layout depends on:
 *
 * 1. One page. All ten, no exceptions (owner's call, 20 August 2026). Two
 *    columns, and the blocks have to fit. If a sheet does not fit, cut a block,
 *    never shrink the type.
 *
 *    What that cost: the original brief for The Complete Guide promised all
 *    thirty days written out, and The Manager Pack four sections aimed at an
 *    approver. Neither survives on one page. The Complete Guide is now the
 *    reference table plus the where-does-it-go rules, and the Manager Pack is
 *    the rollout, the approver questions and the failure modes. The days
 *    themselves are on the site, which is where they can be kept current.
 *
 * 2. No prices, no plan details, no model names printed. Those link back to
 *    the site. A number inside a file sitting in somebody's inbox cannot be
 *    corrected; a link can.
 *
 * 3. The verification date is not printed either (owner's call, same day).
 *    `VERIFIED_AGAINST` still governs when we re-check the content, it is just
 *    not shown to the reader.
 */

import {
  EXIT_CODES,
  INSTALL,
  PLAN_REQUIREMENT,
  SETTINGS_PATHS,
  SYSTEM_REQUIREMENTS,
} from "./registry";

/* ----------------------------------------------------------------- blocks */

/** A run of commands. `note` is one short line under the command, never more. */
export interface CommandsBlock {
  kind: "commands";
  heading: string;
  items: { label: string; code: string; note?: string }[];
}

/** A plain table. Keep to two or three columns: a fourth will not fit. */
export interface TableBlock {
  kind: "table";
  heading: string;
  head: string[];
  rows: string[][];
}

/** What went wrong on the left, what to do about it on the right. */
export interface FixesBlock {
  kind: "fixes";
  heading: string;
  items: { problem: string; fix: string }[];
}

/**
 * Short lines. Not paragraphs.
 *
 * An item may open with `**a lead**`, which the sheet layout sets in bold
 * before the rest. Only at the very start of the line: this is a lead-in, not
 * general markdown, and keeping it to one position means there is no way to
 * accidentally bold half a sentence. Everything else, including anywhere else
 * in the line, is plain text with `backticks` for code as usual.
 */
export interface ListBlock {
  kind: "list";
  heading: string;
  items: string[];
}

/** One boxed warning. At most one per column, or the page stops being scannable. */
export interface NoteBlock {
  kind: "note";
  heading: string;
  body: string;
}

export type SheetBlock =
  | CommandsBlock
  | TableBlock
  | FixesBlock
  | ListBlock
  | NoteBlock;

export interface SheetDoc {
  /** Matches the `sheet.id` on the day record and the row in Supabase. */
  id: string;
  slot: number;
  day: number;
  title: string;
  /** One line under the title. What this sheet saves you from. */
  strapline: string;
  left: SheetBlock[];
  right: SheetBlock[];
}

/* ------------------------------------------------------------------ sheets */

const SETUP: SheetDoc = {
  id: "sheet-setup",
  slot: 1,
  day: 1,
  title: "The Setup Sheet",
  strapline: "Install it, prove it works, and fix it when it does not.",
  left: [
    {
      kind: "commands",
      heading: "Install it",
      items: [
        {
          label: "macOS or Linux, in Terminal",
          code: INSTALL.mac,
          note: "It updates itself from then on. You do this once.",
        },
        {
          label: "Windows, in PowerShell",
          code: INSTALL.windows,
          note: "Your prompt must start with PS. If it does not, you are in Command Prompt and this will fail.",
        },
      ],
    },
    {
      kind: "commands",
      heading: "Prove it worked",
      items: [
        {
          label: "Should print a number, then (Claude Code)",
          code: INSTALL.verify,
        },
        {
          label: "Checks your setup without starting anything",
          code: INSTALL.diagnose,
        },
        {
          label: "Go to a folder that does not matter, then start",
          code: INSTALL.start,
        },
      ],
    },
    {
      kind: "table",
      heading: "The commands you actually use in week one",
      head: ["Type this", "What it does"],
      rows: [
        ["/help", "Everything it can do. Start here when stuck."],
        ["/login", "Switch accounts, or log in again."],
        ["/init", "Write the project rules file for this folder."],
        ["/memory", "Open the rules file and edit what it remembers."],
        ["/context", "Show what is currently loaded and what it costs."],
        ["/hooks", "Show which guards are registered. Read only."],
      ],
    },
    {
      kind: "table",
      heading: "Where you can run it",
      head: ["Where", "Good for"],
      rows: [
        ["Desktop app", "Never used a terminal. Buttons and windows."],
        ["Terminal", "How most people use it. Everything works here."],
        ["Your editor", "VS Code and JetBrains, if you live in one."],
        ["The web", "Trying it with nothing installed."],
      ],
    },
  ],
  right: [
    {
      kind: "note",
      heading: "Read this before you install",
      body: `${PLAN_REQUIREMENT.short} You need Pro, Max, Team or Enterprise, or a Console account with credit on it. This is the number one reason a first install looks broken: it installs perfectly, then will not let you in.`,
    },
    {
      kind: "fixes",
      heading: "The five things that go wrong",
      items: [
        {
          problem: "command not found",
          fix: "Your terminal was already open when you installed, so it does not know the new command exists. Close it completely, open a new one, try again. Almost never a failed install.",
        },
        {
          problem: "It installs, then will not log in",
          fix: "Check your plan at claude.ai. A free account does not include Claude Code.",
        },
        {
          problem: "Windows: an error mentioning &&",
          fix: "You are in Command Prompt, not PowerShell. Close it, open PowerShell, run the line again.",
        },
        {
          problem: "Windows: it works, but feels limited",
          fix: "Install Git for Windows. Without it Claude Code falls back to PowerShell for running commands, which works but can do less.",
        },
        {
          problem: "Installed, but something still feels wrong",
          fix: `Run ${INSTALL.diagnose}. It reports what it finds and changes nothing. Read what it says before reinstalling: reinstalling is almost never the answer and costs you ten minutes.`,
        },
      ],
    },
    {
      kind: "list",
      heading: "Worth knowing on day one",
      items: [
        `Minimum machine: ${SYSTEM_REQUIREMENTS}`,
        "Days 1 to 6 work anywhere, including in a browser. From Day 7 you want it on your own computer, because those days create files and run scripts.",
        `Project rules live in ${SETTINGS_PATHS.project}. Your own live in ${SETTINGS_PATHS.user}.`,
        "You never paste a file in. You point it at a folder and ask in normal English. It works out what to open.",
      ],
    },
    {
      kind: "commands",
      heading: "Your first five minutes",
      items: [
        {
          label: "1. Go to a folder that does not matter, and start",
          code: INSTALL.start,
        },
        {
          label: "2. Ask it something you actually want to know",
          code: "what is in this folder, and what is it for?",
          note: "You never told it which files to open. It went and looked. That is the whole difference from a chat window, in one answer.",
        },
        {
          label: "3. See the rest",
          code: "/help",
        },
      ],
    },
  ],
};

const TOOL_PICKER: SheetDoc = {
  id: "sheet-which-tool",
  slot: 2,
  day: 5,
  title: "The Tool Picker",
  strapline: "Three questions, two seconds, and you stop opening the wrong thing.",
  left: [
    {
      kind: "table",
      heading: "Three kinds of work",
      head: ["Kind", "What it looks like", "Reach for"],
      rows: [
        ["Asking", "A question. You want an answer, not a change.", "A chat window"],
        ["Building", "Real files need to change. More than one.", "Claude Code"],
        ["Repeating", "The same thing, on a schedule, without you.", "A saved job"],
      ],
    },
    {
      kind: "list",
      heading: "The three questions, in order",
      items: [
        "**Does anything on my disk need to change?** If no, use a chat window and stop here.",
        "**Will I want this again next week?** If yes, it should be a saved job.",
        "**Does it need to happen without me there?** If yes, that is an unattended run.",
      ],
    },
    {
      kind: "commands",
      heading: "Let it sort your own list",
      items: [
        {
          label: "Write five things you actually did last week, then ask",
          code: `For each of these five things, tell me: is it asking,
building, or repeating? Then tell me which one would save
me the most time if I automated it, and why. Be blunt if
some of them are not worth it.`,
        },
      ],
    },
  ],
  right: [
    {
      kind: "note",
      heading: "The rule, in one line",
      body: "Stop at the first yes. Most people never get past question one, and that is the correct answer more often than it feels.",
    },
    {
      kind: "fixes",
      heading: "The two mistakes",
      items: [
        {
          problem: "Heavy tool, light job",
          fix: "Opening a terminal and waiting, to ask something you could have typed into a chat box. Nothing breaks. You are just slower every day for a year.",
        },
        {
          problem: "Light tool, heavy job",
          fix: "Copying file after file into a chat window and pasting answers back by hand. Twelve copy and pastes is not just slow, it is where the mistakes come from.",
        },
      ],
    },
    {
      kind: "table",
      heading: "What each one is genuinely best at",
      head: ["Tool", "Best at"],
      rows: [
        ["A chat window", "One question, no change to your files"],
        ["Claude Code", "Work across many files, on your real disk"],
        ["A saved job", "The same shape of work, again and again"],
        ["An unattended run", "Work that must happen with nobody watching"],
      ],
    },
  ],
};

const HOOKS: SheetDoc = {
  id: "sheet-hooks",
  slot: 3,
  day: 8,
  title: "The Hooks Cheat Sheet",
  strapline: "A guard that stops it touching what you cannot afford to lose.",
  left: [
    {
      kind: "commands",
      heading: "The guard itself",
      items: [
        {
          label: `${SETTINGS_PATHS.hooksDir}/protect-files.sh`,
          code: `#!/bin/bash
INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')
FILE_PATH="\${FILE_PATH//\\\\//}"

PROTECTED=(".env" "package-lock.json" ".git/")

for p in "\${PROTECTED[@]}"; do
  if [[ "$FILE_PATH" == *"$p"* ]]; then
    echo "Blocked: $FILE_PATH matches '$p'" >&2
    exit 2
  fi
done
exit 0`,
          note: "The last four lines are the whole idea. On the list: say why, and `exit 2`. Not on the list: `exit 0` and get out of the way.",
        },
      ],
    },
    {
      kind: "commands",
      heading: "Switch it on",
      items: [
        {
          label: SETTINGS_PATHS.project,
          code: `{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          { "type": "command",
            "command": "\\"$CLAUDE_PROJECT_DIR\\"/.claude/hooks/protect-files.sh" }
        ]
      }
    ]
  }
}`,
          note: "`matcher` is the filter. `Edit|Write` means it runs on edits and writes only. Not reads, not shell commands.",
        },
      ],
    },
  ],
  right: [
    {
      kind: "table",
      heading: "The only two numbers that matter",
      head: [...EXIT_CODES.head],
      rows: EXIT_CODES.rows.map((r) => [...r]),
    },
    {
      kind: "table",
      heading: "Guards worth having",
      head: ["Guard", "Runs", "Does"],
      rows: [
        ["Protect files", "Before an edit", "Refuses `.env`, lockfiles, `.git/`"],
        ["Log changes", "After an edit", "Writes every changed file to a log"],
        ["Tidy up", "After an edit", "Runs your formatter"],
        ["Tell me", "When it is waiting", "Pings you, so you stop watching"],
      ],
    },
    {
      kind: "fixes",
      heading: "Three reasons a guard never fires",
      items: [
        {
          problem: "The script is not allowed to run",
          fix: "On macOS and Linux, `chmod +x` it. On Windows there is no such permission, but the script is Bash, so you need Git for Windows. Check with `git --version`.",
        },
        {
          problem: "The path in settings is not where you saved it",
          fix: "The most common one. `/hooks` shows what is registered, read only. If `PreToolUse` shows 0, the path is wrong.",
        },
        {
          problem: "The matcher is narrower than you think",
          fix: "`Edit|Write` does not cover a file changed by a shell command. That change walks straight past your guard.",
        },
      ],
    },
    {
      kind: "note",
      heading: "The only test that counts",
      body: "Ask it to edit a protected file on purpose. If it edits instead of refusing, the guard is not wired up. Testing the happy path proves nothing.",
    },
  ],
};

const MANAGER: SheetDoc = {
  id: "sheet-manager",
  slot: 4,
  day: 10,
  title: "The Manager Pack",
  strapline: "For whoever has to approve this. The answers on paper, before they ask.",
  left: [
    {
      kind: "list",
      heading: "What a rollout actually involves",
      items: [
        "**One person, not a team.** They do days 1 to 10, which is under three hours spread across two weeks.",
        "**One real job, not a demo.** The boring weekly one, never the impressive rare one.",
        "**A written rules file, corrected as you go.** Written once and never touched is the same as not having one.",
        "**One guard, tested by breaking it on purpose.** Until something is blocked, nothing is protected.",
        "**Then the second person copies the first.** They have a working example to point at, which is the whole reason for going one at a time.",
      ],
    },
    {
      kind: "table",
      heading: "What good looks like in month one",
      head: ["By", "You should see"],
      rows: [
        ["Week 1", "One person installed, one real question answered on real files"],
        ["Week 2", "A rules file that has been corrected at least twice"],
        ["Week 3", "One guard that has actually blocked something"],
        ["Week 4", "One saved job used more than twice, by choice"],
      ],
    },
    {
      kind: "note",
      heading: "The one decision that decides this",
      body: "Who goes first, and on what job. Pick the person who already automates things for themselves, and the job they complain about every week. Everything else is detail.",
    },
  ],
  right: [
    {
      kind: "fixes",
      heading: "What an approver will ask",
      items: [
        {
          problem: "What does everyone need?",
          fix: `A paid Claude account. ${PLAN_REQUIREMENT.short} Which plan suits you is on our site rather than printed here, so it cannot go out of date in this file.`,
        },
        {
          problem: "Can we stop it touching things?",
          fix: "Yes, and this is the answer that matters. A written rule is guidance and is usually followed. A guard is enforcement and always runs. Anything that truly must not happen goes in a guard.",
        },
        {
          problem: "What if the person who set it up leaves?",
          fix: "The whole setup is plain files that live with the project. It is handed over by copying a folder, not by copying a person.",
        },
        {
          problem: "How do we know it is working?",
          fix: "One job that used to take a person an hour now takes a command. If nobody can point at that job by week four, it is not working, and no amount of enthusiasm changes it.",
        },
      ],
    },
    {
      kind: "list",
      heading: "The three ways team rollouts go wrong",
      items: [
        "**Everyone at once.** Nobody has a working example to copy, so ten people each solve the same first problem badly.",
        "**The impressive pilot.** A rare showy task instead of the boring weekly one. It demos well and changes nothing.",
        "**Rules with no enforcement.** A document everyone agreed to and nothing that blocks. The first accident is what teaches the lesson.",
      ],
    },
    {
      kind: "table",
      heading: "What to measure, and what to ignore",
      head: ["Measure", "Ignore"],
      rows: [
        ["One named job that went from hours to a command", "How many people installed it"],
        ["How many times the rules file has been corrected", "How long the rules file is"],
        ["Whether a guard has blocked something real", "How many guards exist"],
        ["Saved jobs used more than twice", "Saved jobs built"],
      ],
    },
  ],
};

const CONTEXT: SheetDoc = {
  id: "sheet-context",
  slot: 5,
  day: 13,
  title: "The Context Sheet",
  strapline: "Everything that loads before you type, and how to get the room back.",
  left: [
    {
      kind: "commands",
      heading: "Look at a real session",
      items: [
        {
          label: "Not a fresh one. Work for a few minutes first, then run",
          code: "/context",
          note: "The most useful command here, and almost nobody runs it. Write down the largest item. That number is the whole point.",
        },
        {
          label: "Then let it read its own report",
          code: `Run /context and look at the result.
1. What is taking the most room?
2. Of that, what is not being used in what I am doing today?
3. What one change would free the most, and what would I lose?`,
        },
      ],
    },
    {
      kind: "table",
      heading: "The four things taking up room",
      head: ["What", "Loaded when", "How to shrink it"],
      rows: [
        ["Connected tools", "Always, used or not", "Disconnect what you do not use"],
        ["Rules files", "Every session", "Split them by path"],
        ["Memory index", "Every session", "Delete stale notes with `/memory`"],
        ["Files read", "As the session goes", "`/compact` or `/clear`"],
      ],
    },
  ],
  right: [
    {
      kind: "table",
      heading: "Compact and clear are not the same",
      head: ["", "`/compact`", "`/clear`"],
      rows: [
        ["Does", "Summarises the conversation", "Starts fresh"],
        ["You keep", "The gist of what happened", "Nothing"],
        ["Use when", "Same job, running long", "New job, unrelated"],
      ],
    },
    {
      kind: "note",
      heading: "What to look for",
      body: "Anything you did not expect. Anything large. And especially any connected tool you have not used this week, because what a tool can do is loaded whether you use it or not.",
    },
    {
      kind: "list",
      heading: "The habit worth more than any setting",
      items: [
        "Long session, still the same job, running out of room: `/compact`.",
        "Moving to something unrelated: `/clear`.",
        "**Remove exactly one thing today.** Whatever came top. Then run `/context` again and watch the number move. Seeing it move is what makes this stick.",
      ],
    },
  ],
};

const SKILLS: SheetDoc = {
  id: "sheet-skills",
  slot: 6,
  day: 15,
  title: "The Saved Jobs Sheet",
  strapline: "Which job to save first, and why it is not the one you would guess.",
  left: [
    {
      kind: "table",
      heading: "Score yours. Both out of five, then multiply",
      head: ["Job", "Often", "Annoying", "Score"],
      rows: [
        ["Weekly client update", "5", "4", "20"],
        ["Explaining a bug to a colleague", "4", "3", "12"],
        ["Setting up a new project", "1", "5", "5"],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
      ],
    },
    {
      kind: "note",
      heading: "The trap",
      body: "The impressive one is nearly always the rare one. Setting up a new project is deeply annoying and still scores 5, because you do it three times a year. Build the boring twenty first.",
    },
    {
      kind: "commands",
      heading: "The skeleton",
      items: [
        {
          label: ".claude/skills/weekly-report/SKILL.md",
          code: `---
description: When to use this, in one line. This is
  what decides whether it gets picked up at all.
---

You are a [who]. You produce [exactly what comes out].

Never [the thing you keep correcting].
Stop when [the line you must not cross].`,
          note: "Invoked by name, or picked up automatically from the description. The body only loads when it is actually used.",
        },
      ],
    },
  ],
  right: [
    {
      kind: "table",
      heading: "What makes one you keep",
      head: ["Property", "What it means"],
      rows: [
        ["Same shape every time", "The steps do not change, only the input does"],
        ["You can tell if it worked", "There is an output you can look at and judge"],
        ["It says what not to do", "The failure you keep correcting is written down"],
      ],
    },
    {
      kind: "list",
      heading: "Say what not to do",
      items: [
        "This one line separates a saved job you keep from one you abandon.",
        "**Weak:** be accurate, be thorough, be professional.",
        "**Strong:** do not invent progress. If a client has nothing, say so plainly.",
        "Whatever it gets wrong twice, write down. That does more than any amount of describing the good version.",
      ],
    },
    {
      kind: "commands",
      heading: "Rank ten of them",
      items: [
        {
          label: "List ten things you did more than once last month, then ask",
          code: `For each, score how often out of 5, and how annoying
out of 5. Multiply. Sort by total.

Then tell me which three are worth saving, and which I
should not bother with. Be blunt about the ones that
are not worth it.`,
        },
      ],
    },
    {
      kind: "note",
      heading: "Build one, not three",
      body: "Build the top one, use it for a week, and fix the file every time it is not quite right. A saved job you have corrected three times is worth more than three you have never run.",
    },
  ],
};

const CONNECTIONS: SheetDoc = {
  id: "sheet-connections",
  slot: 7,
  day: 16,
  title: "The Connections Sheet",
  strapline: "Pick the right one, set it up, and do not leak a token doing it.",
  left: [
    {
      kind: "list",
      heading: "The choosing question",
      items: [
        "**Finish this sentence honestly.** I keep switching windows to ___",
        "Whatever that is, connect that. Not the one that sounds most powerful.",
        "**If you cannot finish it, connect nothing today.** That is a real answer, not a failure, and it is the right one more often than people expect.",
      ],
    },
    {
      kind: "table",
      heading: "So then",
      head: ["If you keep switching to", "Connect"],
      rows: [
        ["Your issue tracker, to see what is assigned", "That tracker"],
        ["A database, for the same read query", "That database"],
        ["Your docs, for a decision from months ago", "That doc tool"],
        ["Nothing. You are curious.", "Nothing. Come back when you have an X."],
      ],
    },
    {
      kind: "commands",
      heading: "Let it do the setup research",
      items: [
        {
          label: "Setup differs per service, and it can read the current instructions",
          code: `I want to connect [service] so I can [the thing you
keep switching windows for].

Tell me: whether an official connector exists, exactly
what I need including any credential, the command to
add it, and what it will not be able to do.

If there is no good option, tell me that instead of
improvising.`,
        },
      ],
    },
  ],
  right: [
    {
      kind: "note",
      heading: "Every connection has a standing cost",
      body: "What a connection can do is loaded into every session, whether you use it or not. Connect five things you do not need and you pay for all five on every message. This is the part everybody skips.",
    },
    {
      kind: "list",
      heading: "Keeping the credential out of files",
      items: [
        "A connection usually needs a token. A token belongs in an environment variable, never typed into a settings file.",
        "**If a setup guide tells you to paste a key straight into a file, stop and find the environment variable version.** Settings files get committed and shared, and this is the most common way a token escapes.",
      ],
    },
    {
      kind: "list",
      heading: "The rule, and the check",
      items: [
        "**One connection at a time.** Use it for a week. Only then consider a second.",
        "Use it for the real job immediately, not a test. If it does not save you the window switch, disconnect it the same day.",
        "Then run `/context` and find it in the list. Now you know its price, and whether the job was worth it.",
      ],
    },
  ],
};

const UNATTENDED: SheetDoc = {
  id: "sheet-unattended",
  slot: 8,
  day: 24,
  title: "The Unattended Sheet",
  strapline: "One flag turns a conversation into a command that runs without you.",
  left: [
    {
      kind: "commands",
      heading: "Start with something that only reads",
      items: [
        {
          label: "Terminal",
          code: `claude -p "Summarise what changed in this project in the
last week" --allowedTools "Read,Grep,Glob"`,
        },
        {
          label: "Then leave a trace",
          code: `claude -p "Summarise what changed this week" \\
  --allowedTools "Read,Grep,Glob" \\
  > reports/weekly-$(date +%F).md`,
        },
        {
          label: "It reads standard input, so it fits what you already have",
          code: `git diff main | claude -p "List anything in this diff
that looks risky. One line each. If nothing, say nothing."`,
        },
      ],
    },
    {
      kind: "commands",
      heading: "A skeleton that fails safely",
      items: [
        {
          label: "scripts/weekly-summary.sh",
          code: `#!/bin/bash
set -euo pipefail

cd "$(dirname "$0")/.."
mkdir -p reports
OUT="reports/weekly-$(date +%F).md"

claude -p "Summarise what changed in this project in the
last week. Group by area. Flag anything unfinished." \\
  --allowedTools "Read,Grep,Glob" \\
  > "$OUT"

echo "Wrote $OUT"`,
          note: "`set -euo pipefail` is the line that matters. Without it a step can fail in the middle and the script still exits looking successful.",
        },
      ],
    },
  ],
  right: [
    {
      kind: "table",
      heading: "The flags that matter",
      head: ["Flag", "What it actually permits"],
      rows: [
        ["`-p \"...\"`", "Run once and stop. No session, no waiting for you"],
        ["`--allowedTools \"Read,Edit\"`", "Exactly these, nothing else"],
        ["`--permission-mode acceptEdits`", "Write files without asking"],
        ["`--output-format json`", "Structured output a script can read"],
        ["`--bare`", "Skip your local setup, so it runs the same anywhere"],
      ],
    },
    {
      kind: "note",
      heading: "The rule for unattended runs",
      body: "Allow the narrowest set of tools that lets the job finish. Nobody is watching, so a run with everything allowed is the one that quietly does something you did not want at three in the morning.",
    },
    {
      kind: "fixes",
      heading: "Four ways they fail quietly",
      items: [
        {
          problem: "The main step never happened",
          fix: "Something needed permission and nobody was there to give it, so it was simply skipped. The classic first unattended failure. Name the tools in advance.",
        },
        {
          problem: "No output file",
          fix: "You were not watching, so the file is all you get. A run that leaves no trace cannot be debugged, and you will need to debug it.",
        },
        {
          problem: "Too many tools allowed",
          fix: "Allowing everything so it does not get stuck is how something unwanted happens with nobody to stop it.",
        },
        {
          problem: "The script hid its own failure",
          fix: "Without `set -euo pipefail` a broken step in the middle still exits 0, so whatever calls it thinks all is well.",
        },
      ],
    },
  ],
};

const INSTRUCTIONS: SheetDoc = {
  id: "sheet-instructions",
  slot: 9,
  day: 26,
  title: "The Instructions Sheet",
  strapline: "The difference between an instruction that nearly works and one that works.",
  left: [
    {
      kind: "table",
      heading: "The four things, in order of difference made",
      head: ["Thing", "Weak", "Strong"],
      rows: [
        ["Who is doing it", "Review this", "You are a careful reviewer who cannot change anything"],
        [
          "What comes out",
          "Summarise the week",
          "Three bullets per client: what moved, what is blocked, what is next",
        ],
        [
          "What not to do",
          "Be accurate",
          "Do not invent progress. If a client has nothing, say so",
        ],
        ["When to stop", "Fix the problems", "Report problems. Do not change any files"],
      ],
    },
    {
      kind: "list",
      heading: "How to find your own not-to-do line",
      items: [
        "**What did you have to say twice?** Look back at your last few sessions and find it.",
        "Write it in the words you would use if you were annoyed, and put it in as written.",
        "That single line does more than any amount of describing the good version. It is also the one that gets skipped.",
      ],
    },
  ],
  right: [
    {
      kind: "commands",
      heading: "Let it interview you instead of drafting",
      items: [
        {
          label: "Five minutes of answers beats an hour of writing",
          code: `Here is an instruction I use. It nearly works, and the
thing I keep correcting is: [what you keep correcting].

[paste your instruction]

Interview me to fix it. One question at a time, wait for
my answer. Cover: who is doing it, exactly what should
come out, what it must never do, and when it should stop.

Then rewrite it. Keep it short.`,
        },
      ],
    },
    {
      kind: "table",
      heading: "Six shapes worth having",
      head: ["Job", "The line that makes it work"],
      rows: [
        ["Review", "Report problems. Change nothing."],
        ["Summarise", "Fixed number of bullets. Say when there is nothing."],
        ["Research", "Say what you could not find, rather than filling the gap."],
        ["Check", "List what failed. Do not fix anything."],
        ["Convert", "Keep every field. Flag anything that will not map."],
        ["Report", "Same sections every time, even when a section is empty."],
      ],
    },
    {
      kind: "note",
      heading: "Test the failure, not the success",
      body: "Anyone can test the happy path, and it already worked. Run it on the case that used to go wrong. That is the only test that tells you whether the rewrite was worth anything.",
    },
  ],
};

const COMPLETE: SheetDoc = {
  id: "sheet-complete-guide",
  slot: 10,
  day: 30,
  title: "The Complete Guide",
  strapline: "The whole system on one page, and where the next thing goes.",
  left: [
    {
      kind: "table",
      heading: "Seven pieces, each doing a job the others cannot",
      head: ["Piece", "What it is for", "Day"],
      rows: [
        ["`CLAUDE.md`", "Facts that are always true", "2"],
        ["`.claude/rules/`", "Facts true only for some files", "12"],
        ["Memory", "What it learned by itself", "4"],
        ["`.claude/skills/`", "Procedures you repeat", "9, 15, 19"],
        ["`.claude/agents/`", "Narrow jobs, with tools taken away", "21"],
        ["`.claude/hooks/`", "Things that must or must never happen", "8, 11"],
        ["Connections", "Live data behind a login", "16"],
      ],
    },
    {
      kind: "list",
      heading: "Where a new thing goes. First yes wins",
      items: [
        "**Must it happen, or must it never happen?** A hook.",
        "**Is it a fact that is always true?** `CLAUDE.md`. True only for some files? A rule with a path filter.",
        "**Is it a procedure with steps?** A skill.",
        "**Is it a narrow job that should not have all the tools?** An agent.",
      ],
    },
  ],
  right: [
    {
      kind: "note",
      heading: "The one to get right",
      body: "If something genuinely must not happen, it is a hook, not an instruction. A written rule is guidance and is usually followed. A hook is enforcement and always runs.",
    },
    {
      kind: "list",
      heading: "The six question self check",
      items: [
        "Which piece stops something happening, rather than asking for it?",
        "Where does a fact that is only true for test files belong?",
        "What is the difference between what you write and what it writes?",
        "Why is an unused connection not free?",
        "What does exit code 2 do?",
        "What must never be in any of these files?",
      ],
    },
    {
      kind: "commands",
      heading: "The clear-out, which is the real work of day 30",
      items: [
        {
          label: "Be ready for the answer. A third of it has probably never been run",
          code: `Look at everything in my .claude/ folder and my CLAUDE.md.

For each skill, agent, hook and rule tell me: what it does
in one line, whether there is any sign I have used it, and
whether it duplicates something else.

Then tell me what to delete. Be blunt.`,
          note: "Delete anything unused for a month. It is in your history if you want it back, and a short setup you understand beats a long one you have to think about.",
        },
      ],
    },
  ],
};

/**
 * The eleventh sheet, and the only one that is not free on a day page.
 *
 * `day: 0` means it belongs to no single day. Everything that reads `day`
 * branches on that: the layout prints "Earned sheet" instead of "from Day N",
 * and the footer points at the course rather than at a lesson.
 *
 * It is deliberately not another approver document. The Manager Pack on Day 10
 * is for the person who has to say yes before anything starts. This one is for
 * the person who already did the thirty days and now has to make it survive
 * contact with four colleagues, which is a different and much later problem.
 */
const TEAM: SheetDoc = {
  id: "sheet-team",
  slot: 11,
  day: 0,
  title: "The Team Sheet",
  strapline:
    "You did the thirty days. This is how it survives four other people doing them badly.",
  left: [
    {
      kind: "list",
      heading: "What has to leave your laptop",
      items: [
        "**The rules file.** `CLAUDE.md` at the top of the project, committed. If it only exists on your machine, everybody else is working without it and nobody can see that.",
        `**The guards.** \`${SETTINGS_PATHS.project}\` and \`${SETTINGS_PATHS.hooksDir}\`, committed. A guard nobody else has is a rule only you follow.`,
        "**The saved jobs.** `.claude/skills/<name>/SKILL.md`, committed. This is the part that pays for itself: one person writes the boring job once and four people stop doing it by hand.",
        "**The specialists.** `.claude/agents/<name>.md`, committed. The `tools` line in one is enforcement, not a suggestion, so it travels as a real limit.",
        "**Nothing else.** No keys, no personal settings, no transcripts. If it would embarrass you in a pull request, it does not belong in the repository.",
      ],
    },
    {
      kind: "table",
      heading: "Shared or personal",
      head: ["Goes in the repository", "Stays on your machine"],
      rows: [
        ["The rules file for this project", "Your own habits and shortcuts"],
        ["Guards that must always run", "Guards you are still trying out"],
        ["Saved jobs the team repeats", "One-off jobs only you run"],
        ["Specialists with a fixed job", "Anything holding a key or a token"],
      ],
    },
    {
      kind: "note",
      heading: "The rule that keeps it alive",
      body: "The rules file is corrected in the same commit as the mistake that proved it wrong. Written once and never touched again is the same as not having one, and everybody quietly stops reading it inside a month.",
    },
  ],
  right: [
    {
      kind: "commands",
      heading: "A new joiner, first thirty minutes",
      items: [
        {
          label: "Install, on their own machine",
          code: `${INSTALL.mac}\n${INSTALL.verify}`,
          note: `Windows uses \`${INSTALL.windows}\`. If it installs and will not log in, that is the account, not the install.`,
        },
        {
          label: "Open the project, not a folder of notes",
          code: INSTALL.start,
          note: "Started inside the repository, so it reads the rules file the team already wrote.",
        },
        {
          label: "Show them what is enforced",
          code: "/hooks",
          note: "Read only, and it lists exactly what will block them. Far better than finding out by being blocked.",
        },
      ],
    },
    {
      kind: "fixes",
      heading: "What breaks the moment a second person joins",
      items: [
        {
          problem: "Everybody writes their own rules file",
          fix: "One file, in the project, in the repository. Personal preferences go in the user level file instead, where they cannot argue with the team's.",
        },
        {
          problem: "A guard blocks somebody and they cannot tell why",
          fix: "Make the guard say what it wants. It sends its message back when it refuses, so write that line for the colleague who has never seen it, not for yourself.",
        },
        {
          problem: "Two people build the same saved job, slightly differently",
          fix: "Search `.claude/skills` before writing one. Thirty seconds of looking beats two versions that drift apart for six months.",
        },
        {
          problem: "The person who set it up leaves",
          fix: "Nothing happens, if everything above is committed. The setup is plain files that live with the project, handed over by copying a folder rather than a person.",
        },
      ],
    },
    {
      kind: "list",
      heading: "What to standardise, and what to leave alone",
      items: [
        "**Standardise what must not happen.** Anything that would be expensive to undo goes in a guard, and everybody gets the same one.",
        "**Standardise the boring repeated job.** That is where the hours are, and a shared version gets better every time somebody fixes it.",
        "**Leave the way people work alone.** How somebody phrases a request is not a team decision, and policing it buys nothing while costing you goodwill.",
      ],
    },
  ],
};

export const SHEET_DOCS: SheetDoc[] = [
  SETUP,
  TOOL_PICKER,
  HOOKS,
  MANAGER,
  CONTEXT,
  SKILLS,
  CONNECTIONS,
  UNATTENDED,
  INSTRUCTIONS,
  COMPLETE,
  TEAM,
];

export function getSheetDoc(id: string): SheetDoc | undefined {
  return SHEET_DOCS.find((s) => s.id === id);
}

/**
 * Phase 2. Make it yours. Days 11 to 20.
 *
 * Phase 1 got it working. This phase shapes it around the reader's actual
 * work: what loads, what it costs, what it connects to, and what it refuses
 * to do. Each phase needs its own promise, or nobody has a reason to continue
 * past Day 10.
 */

import type { Day } from "./types";
import { SETTINGS_PATHS } from "./registry";

export const PHASE_2_DAYS: Day[] = [
  /* --------------------------------------------------------------- Day 11 */
  {
    day: 11,
    slug: "day-11",
    title: "Guards that report back to you",
    phase: 2,
    minutes: 15,
    app: "needs-app",
    promise:
      "A guard that checks the work after it happens and hands back what it found, so mistakes get fixed before you ever see them.",
    outcome: "A guard that checks work and reports what it found",
    why: [
      "Day 8's guard says no. This one says here is what is wrong. That is a bigger difference than it sounds.",
      "When your script prints a problem, the message goes back into the conversation. It reads it and fixes its own work, without you being involved at all.",
    ],
    sections: [
      {
        heading: "Before and after are two different jobs",
        body: [
          "`PreToolUse` runs before something happens, so it can stop it. `PostToolUse` runs after, so it cannot stop anything, but it can see the result.",
          "Checking work is an after job. You cannot lint a file that has not been written yet.",
        ],
        table: {
          head: ["Event", "When", "Good for"],
          rows: [
            ["`PreToolUse`", "Before the action", "Blocking. Protecting files."],
            ["`PostToolUse`", "After the action", "Checking, formatting, logging."],
            ["`Stop`", "When it finishes replying", "Notifying you. A final sweep."],
          ],
        },
      },
      {
        heading: "The feedback loop, in four steps",
        body: [
          "This is the whole idea, and it is worth reading twice.",
          "1. It edits a file. 2. Your guard runs your linter on that file. 3. The linter finds a problem, and your guard prints it. 4. It reads that message and fixes the file.",
          "You were not involved. You did not review anything. The error never reached you.",
        ],
        callout: {
          tag: "Why this matters more than blocking",
          body: [
            "A block stops a bad thing. A report makes the next attempt better. Over a week, the second one changes far more about how your sessions go.",
          ],
        },
      },
      {
        heading: "Catching what Edit and Write miss",
        body: [
          "Day 8's quiz had a trap in it: a file changed by a shell command walks straight past an `Edit|Write` matcher.",
          "If a check genuinely must see every change, add a `Stop` guard that sweeps the whole working folder once, at the end of the turn. Slower, but nothing gets past it.",
        ],
      },
    ],
    steps: [
      {
        title: "Write a guard that checks and reports",
        body: [
          "This one runs your project's linter on whichever file just changed, and prints anything it finds.",
          "Swap `npx eslint` for whatever your project actually uses. If you have no linter, use a spell checker, or a script that just greps for `TODO`. The mechanism is the point.",
        ],
        code: {
          label: `${SETTINGS_PATHS.hooksDir}/check-after-edit.sh`,
          code: `#!/bin/bash

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

[ -z "$FILE_PATH" ] && exit 0
[ -f "$FILE_PATH" ] || exit 0

OUTPUT=$(npx eslint "$FILE_PATH" 2>&1)

if [ -n "$OUTPUT" ]; then
  echo "Lint problems in $FILE_PATH:" >&2
  echo "$OUTPUT" >&2
  exit 2
fi

exit 0`,
        },
      },
      {
        title: "Make it runnable",
        panels: [
          {
            id: "mac",
            label: "macOS or Linux",
            body: ["Same as Day 8. A new script has to be allowed to run."],
            code: {
              label: "Terminal",
              code: "chmod +x .claude/hooks/check-after-edit.sh",
            },
          },
          {
            id: "win",
            label: "Windows",
            body: [
              "Nothing to do here. Move on to the next step. As on Day 8, you need Git for Windows so the Bash script can run at all.",
            ],
          },
        ],
      },
      {
        title: "Wire it to the after event",
        body: [
          "Note this is `PostToolUse`, not `PreToolUse`. Your Day 8 guard stays exactly where it is. A settings file can hold both.",
        ],
        code: {
          label: SETTINGS_PATHS.project,
          code: `{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "\\"$CLAUDE_PROJECT_DIR\\"/.claude/hooks/check-after-edit.sh"
          }
        ]
      }
    ]
  }
}`,
        },
      },
      {
        title: "Watch the loop happen",
        body: [
          "Ask for a change you know your linter will complain about. Then watch, and do nothing.",
          "You should see it make the edit, get told off by your own guard, and fix it. If it does not, run `/hooks` and check `PostToolUse` shows 1.",
        ],
        code: {
          label: "Type this to Claude",
          code: "Add a new function to one of my source files. Do not run the linter yourself.",
        },
      },
    ],
    win: {
      beforeLabel: "Before",
      before: [
        "It: writes something",
        "You: spot the problem in review",
        "You: ask for a fix",
      ],
      afterLabel: "After",
      after: [
        "It: writes something",
        "Your guard: tells it what is wrong",
        "It: fixes it before you look",
      ],
    },
    quiz: [
      {
        question: "You want to run your formatter on files after they change. Which event?",
        options: ["`PreToolUse`", "`PostToolUse`"],
        answer: 1,
        explanation:
          "You cannot format a file that has not been written yet. Before is for blocking, after is for checking.",
      },
      {
        question: "Your guard prints a lint error and exits 2. What happens next?",
        options: [
          "The message goes back into the conversation and it can fix the file",
          "The session stops and you have to start again",
        ],
        answer: 0,
        explanation:
          "That is the whole loop. Your script becomes the reviewer, and the fix happens before the problem ever reaches you.",
      },
      {
        question:
          "You need a check that sees every file change, including ones made by shell commands. What do you add?",
        options: [
          "A `Stop` guard that sweeps the folder once at the end of the turn",
          "Nothing. `Edit|Write` already covers everything.",
        ],
        answer: 0,
        explanation:
          "An `Edit|Write` matcher only sees those two tools. A sweep at the end is slower, but nothing gets past it.",
      },
    ],
    nextTeaser: "Stop loading rules that only matter for some of your files",
  },

  /* --------------------------------------------------------------- Day 12 */
  {
    day: 12,
    slug: "day-12",
    title: "Rules that only load when needed",
    phase: 2,
    minutes: 12,
    app: "needs-app",
    promise:
      "Your instructions split up so that each one only appears when it is actually relevant.",
    outcome: "Instructions scoped to the files they apply to",
    why: [
      "Your CLAUDE.md has been growing. Rules about tests, rules about the database, rules about the front end, all loaded on every single session whether or not you are anywhere near those files.",
      "Today you split them, so a rule about database files only shows up when a database file is opened.",
    ],
    sections: [
      {
        heading: "Why one big file gets worse as it grows",
        body: [
          "Two things go wrong at once, and they pull in the same direction.",
          "It costs more on every message, because all of it is read every time. And it gets followed less closely, because a rule about tests is sitting next to twenty rules that have nothing to do with what you asked.",
        ],
      },
      {
        heading: "Rules live in their own folder",
        body: [
          "Put markdown files in `.claude/rules/`. One topic per file, named after the topic.",
          "A rule with no path filter loads every session, the same as CLAUDE.md. A rule with a path filter only loads when a matching file is touched.",
        ],
        table: {
          head: ["File", "Loads"],
          rows: [
            ["`.claude/rules/code-style.md`", "Every session. No filter."],
            ["`.claude/rules/testing.md` with a filter", "Only when a test file is opened."],
            ["`~/.claude/rules/preferences.md`", "Every project on your machine."],
          ],
        },
      },
      {
        heading: "The filter is a few lines at the top",
        body: [
          "Add a small block at the very top of the file listing which files it applies to. That is the whole mechanism.",
          "Patterns are the usual ones: `**` means any depth of folder, `*` means any name.",
        ],
        table: {
          head: ["Pattern", "Matches"],
          rows: [
            ["`**/*.ts`", "Every TypeScript file, anywhere"],
            ["`src/api/**/*`", "Everything under `src/api/`"],
            ["`*.md`", "Markdown files in the project root only"],
            ["`tests/**/*.test.ts`", "Test files under `tests/`"],
          ],
        },
      },
    ],
    steps: [
      {
        title: "Find out what is actually in there",
        body: [
          "Do not guess. Let it read your own file and tell you what should move.",
        ],
        code: {
          label: "Type this to Claude",
          code: `Read my CLAUDE.md. For each rule in it, tell me:

1. Does it apply to every file, or only some?
2. If only some, which file pattern?

Then list which rules should move into .claude/rules/ and
what each file should be called. Do not move anything yet.`,
        },
      },
      {
        title: "Move one rule out",
        body: [
          "One, not all of them. You want to see the mechanism work before you rearrange everything.",
          "The block between the dashes is the filter. Everything under it is the rule.",
        ],
        code: {
          label: ".claude/rules/testing.md",
          code: `---
paths:
  - "**/*.test.ts"
  - "tests/**/*"
---

# Testing rules

- Every new function gets a test in the same commit
- Test names say what the behaviour is, not what the function is called
- No network calls in unit tests. Stub them.
- Run \`npm test\` before you say something is finished`,
        },
      },
      {
        title: "Take it out of CLAUDE.md",
        body: [
          "If the rule is in both places you have made things worse, not better.",
          "Delete those lines from CLAUDE.md now.",
        ],
      },
      {
        title: "Prove the filter works",
        body: [
          "Start a fresh session. Run `/context` before touching anything: your testing rule should not be loaded. Then open a test file and run `/context` again. Now it should be.",
        ],
        code: { label: "Type this to Claude", code: "/context" },
      },
    ],
    win: {
      beforeLabel: "Before",
      before: [
        "One file, growing every week",
        "Every rule loaded on every session",
      ],
      afterLabel: "After",
      after: [
        "A short CLAUDE.md of always-true things",
        "Rules that appear only when they are relevant",
      ],
    },
    quiz: [
      {
        question: "A rule file with no path filter. When does it load?",
        options: ["Every session, like CLAUDE.md", "Never, until you ask for it"],
        answer: 0,
        explanation:
          "No filter means it always applies. The filter is what makes it conditional. That is the only difference.",
      },
      {
        question:
          "You move a rule into `.claude/rules/` but leave it in CLAUDE.md too. What have you achieved?",
        options: [
          "Nothing good. It now loads twice and costs more than before.",
          "Extra safety. Two copies means it is more likely to be followed.",
        ],
        answer: 0,
        explanation:
          "Duplication is the failure mode here. Worse, if the two copies drift apart you get contradictory instructions and it picks one at random.",
      },
      {
        question:
          "You want a rule that applies to every TypeScript file anywhere in the project. Which pattern?",
        options: ["`**/*.ts`", "`*.ts`"],
        answer: 0,
        explanation:
          "`*.ts` only matches the project root. `**` is the part that means at any depth.",
      },
    ],
    nextTeaser: "Find out where your session is actually spending its budget",
  },

  /* --------------------------------------------------------------- Day 13 */
  {
    day: 13,
    slug: "day-13",
    title: "Control what it pays attention to",
    term: "context",
    phase: 2,
    minutes: 15,
    app: "needs-app",
    promise:
      "You can see exactly what is loaded into a session, and you have removed the biggest thing that should not be.",
    outcome: "One audit done, one thing removed",
    why: [
      "Everything it knows at the start of a session takes up room: your instructions, your rules, your memory, the description of every tool it can reach.",
      "Run it once and you will usually find one thing taking up a third of the space.",
    ],
    sections: [
      {
        heading: "There is a command that just shows you",
        body: [
          "`/context` prints what is loaded and how much room each part is taking. It is the most useful command on this whole page and almost nobody runs it.",
          "Run it now, before you read the rest. What you find will be more convincing than anything written here.",
        ],
        callout: {
          tag: "What to look for",
          body: [
            "Anything you did not expect. Anything large. And especially any connected tool you are not using this week, because tool descriptions are loaded whether you use them or not.",
          ],
        },
      },
      {
        heading: "The four things that take up room",
        body: ["In roughly the order they surprise people."],
        table: {
          head: ["What", "Loaded when", "How to shrink it"],
          rows: [
            [
              "Connected tools",
              "Always, whether used or not",
              "Disconnect what you are not using. Day 17.",
            ],
            [
              "`CLAUDE.md` and rules",
              "Every session",
              "Split by path. Day 12.",
            ],
            [
              "Memory index",
              "Every session",
              "Delete stale notes. `/memory`.",
            ],
            [
              "Files read during the session",
              "As it goes",
              "`/compact` or `/clear`.",
            ],
          ],
        },
      },
      {
        heading: "Clearing and compacting are not the same",
        body: [
          "Both give you room back. They lose different things, and picking the wrong one is annoying.",
        ],
        table: {
          head: ["", "`/compact`", "`/clear`"],
          rows: [
            ["What it does", "Summarises the conversation so far", "Starts fresh"],
            ["You keep", "The gist of what happened", "Nothing from the conversation"],
            ["Use when", "Same job, running long", "New job, unrelated to the last one"],
          ],
        },
      },
    ],
    steps: [
      {
        title: "Look at a real session",
        body: [
          "Not a fresh one. Open a project you have been working in, do something normal for a few minutes, then run this.",
          "Write down the largest item. That number is the whole point of today.",
        ],
        code: { label: "Type this to Claude", code: "/context" },
      },
      {
        title: "Ask it to read its own report",
        body: ["It can see the same list you can, and it is better at spotting the odd one out."],
        code: {
          label: "Type this to Claude",
          code: `Run /context and look at the result.

1. What is taking the most room?
2. Of that, what is not being used in what I am actually doing today?
3. What one change would free up the most, and what would I lose?`,
        },
      },
      {
        title: "Remove exactly one thing",
        body: [
          "One. Whatever came top. Disconnect the tool, delete the stale memory, split the rule.",
          "Then run `/context` again and see the difference. Seeing the number move is what makes this stick.",
        ],
      },
      {
        title: "Learn the two-key habit",
        body: [
          "When a session is long and still on the same job, `/compact`. When you move to something unrelated, `/clear`.",
          "Doing this by reflex is worth more than any single setting change on this page.",
        ],
      },
    ],
    win: {
      beforeLabel: "Before",
      before: ["No idea what was loaded", "Paying for all of it, every message"],
      afterLabel: "After",
      after: ["A list you have read", "One large thing gone", "A habit for the rest"],
    },
    quiz: [
      {
        question: "Which command shows you what is loaded into a session?",
        options: ["`/context`", "`/memory`"],
        answer: 0,
        explanation:
          "`/memory` shows your memory files specifically. `/context` shows everything, including the parts you did not put there yourself.",
      },
      {
        question:
          "You connected a tool three weeks ago and have not used it since. Is it costing you anything?",
        options: [
          "Yes. Its description is loaded every session, used or not.",
          "No. It only costs when you use it.",
        ],
        answer: 0,
        explanation:
          "This is the most common surprise in a `/context` report. Day 17 is entirely about this.",
      },
      {
        question:
          "You are two hours into one long job and running out of room. Which do you use?",
        options: ["`/compact`, which summarises and keeps the gist", "`/clear`, which starts fresh"],
        answer: 0,
        explanation:
          "Same job means you want the history, just smaller. `/clear` is for when the next thing has nothing to do with the last thing.",
      },
    ],
    sheet: {
      slot: 5,
      id: "sheet-context",
      title: "The Context Sheet",
      pitch:
        "One page. Everything that loads, and how to get the room back.",
      contents: [
        "Everything that gets loaded, and at what point",
        "The five biggest wins, in order, with what each one costs you",
        "Compact against clear, and how to pick in one second",
      ],
    },
    nextTeaser: "Turn that audit into money you are no longer spending",
  },

  /* --------------------------------------------------------------- Day 14 */
  {
    day: 14,
    slug: "day-14",
    title: "Spend less on the same work",
    phase: 2,
    minutes: 12,
    app: "needs-app",
    promise:
      "A measured drop in what your sessions cost, with a before and after you can show somebody.",
    outcome: "A measured drop, before and after",
    why: [
      "Yesterday you saw where it goes. Today you cut it, and you measure the difference rather than assuming there was one.",
      "This is also the honest answer to Day 6. Plenty of people who thought they needed a bigger plan did not, once they stopped loading everything into every session.",
    ],
    sections: [
      {
        heading: "Measure first, always",
        body: [
          "Every change on this page sounds like it should help. Some will barely move the needle for your setup, and one of them might be the whole problem.",
          "So write the starting number down. Otherwise you will do six things and never know which one mattered.",
        ],
      },
      {
        heading: "The three changes, in order of size",
        body: [
          "Do them in this order. The first one is usually bigger than the other two combined.",
        ],
        table: {
          head: ["Change", "Usual effect", "What it costs you"],
          rows: [
            [
              "Disconnect tools you are not using",
              "Often the largest single win",
              "You reconnect them the week you need them",
            ],
            [
              "Trim what loads every session",
              "Steady saving on every message",
              "An hour of tidying, once",
            ],
            [
              "Compact and clear by reflex",
              "Stops long sessions getting expensive",
              "Nothing. It is a habit.",
            ],
          ],
        },
      },
      {
        heading: "Big job, small job",
        body: [
          "The other lever is not loading less, it is choosing the right size of tool for the job.",
          "A quick search, a summary, a yes or no classification: these do not need your heaviest model. Reserve that for work that actually requires the reasoning.",
          "Day 21 makes this automatic by giving narrow jobs their own helper, with their own smaller model.",
        ],
      },
    ],
    steps: [
      {
        title: "Write down where you start",
        body: [
          "Open a normal working session and run this. Note the total. This is your before.",
        ],
        code: { label: "Type this to Claude", code: "/context" },
      },
      {
        title: "Cut the biggest thing",
        body: [
          "Yesterday you removed one. Today remove the rest of what you are genuinely not using.",
          "The test for a connected tool is simple: have you used it in the last two weeks? If not, disconnect it. Reconnecting takes a minute.",
        ],
      },
      {
        title: "Trim what loads every time",
        body: [
          "Your CLAUDE.md, your unfiltered rules, and your memory index. Read all three and delete anything that is no longer true.",
          "Stale instructions are worse than none, because they get followed.",
        ],
        code: { label: "Type this to Claude", code: "/memory" },
      },
      {
        title: "Measure again, and write it down",
        body: [
          "Fresh session, same command. Compare it with your before.",
          "Put both numbers somewhere you will find them. When somebody asks whether this was worth doing, that line is your answer.",
        ],
        code: {
          label: "Add a line like this to your notes",
          code: `Context audit, [today's date]
Before: ...
After:  ...
Biggest single win: ...`,
        },
      },
    ],
    win: {
      beforeLabel: "Before",
      before: ["Everything loaded, every session", "No idea what any of it cost"],
      afterLabel: "After",
      after: ["Only what you use", "Two numbers you can point at"],
    },
    quiz: [
      {
        question: "What is the first thing to do before changing anything?",
        options: [
          "Write down the starting number",
          "Disconnect every tool you have",
        ],
        answer: 0,
        explanation:
          "Without a before, you will make six changes and never know which one worked. Measuring first is what turns this from a feeling into a fact.",
      },
      {
        question: "Which change is usually the biggest?",
        options: [
          "Disconnecting tools you are not using",
          "Shortening your CLAUDE.md",
        ],
        answer: 0,
        explanation:
          "Every connected tool loads its description every session, whether you use it or not. It is nearly always the largest item in the report.",
      },
      {
        question:
          "You need a one line summary of a file. Does that need your most capable model?",
        options: [
          "No. Match the size of the tool to the size of the job.",
          "Yes. Always use the best one available.",
        ],
        answer: 0,
        explanation:
          "Summarising, searching and classifying do not need heavy reasoning. Day 21 makes this automatic rather than something you remember to do.",
      },
    ],
    nextTeaser: "Turn your best three repeated jobs into three saved ones",
  },

  /* --------------------------------------------------------------- Day 15 */
  {
    day: 15,
    slug: "day-15",
    title: "Build a library of saved jobs",
    phase: 2,
    minutes: 15,
    app: "needs-app",
    promise:
      "Three saved jobs, chosen because they are worth the most, not because they were the easiest to build.",
    outcome: "Three saved jobs, ranked by what they save",
    why: [
      "On Day 9 you built one. It works, and by now you have probably used it a few times.",
      "Today is about doing that deliberately rather than by instinct: work out which jobs are genuinely worth saving, in what order, and then build the top ones.",
    ],
    sections: [
      {
        heading: "Rank by frequency times annoyance",
        body: [
          "Two numbers, both out of five. How often do you do it, and how much do you dislike doing it. Multiply.",
          "This ranking is almost always different from the order you would have guessed, and the difference is where the value is.",
        ],
        table: {
          head: ["Job", "How often", "How annoying", "Score"],
          rows: [
            ["Weekly client update", "5", "4", "20"],
            ["Explaining a bug to a colleague", "4", "3", "12"],
            ["Setting up a new project", "1", "5", "5"],
            ["Reformatting a spreadsheet", "2", "2", "4"],
          ],
        },
        callout: {
          tag: "The trap",
          body: [
            "The impressive one is nearly always the rare one. Setting up a new project is deeply annoying and scores 5, because you do it three times a year. Build the boring twenty first.",
          ],
        },
      },
      {
        heading: "What makes a saved job good",
        body: ["Three properties. Miss any one and you will stop using it within a fortnight."],
        table: {
          head: ["Property", "What it means"],
          rows: [
            ["Same shape every time", "The steps do not change, only the input does"],
            ["You can tell if it worked", "There is an output you can look at and judge"],
            ["It says what not to do", "The failure you keep correcting is written down"],
          ],
        },
      },
      {
        heading: "Say what not to do",
        body: [
          "This is the line that separates a skill you keep from one you abandon. Whatever it gets wrong twice, write down explicitly.",
          "Not \"be accurate\". Something like: do not invent progress, if a client has nothing say so plainly.",
        ],
      },
    ],
    steps: [
      {
        title: "List ten, honestly",
        body: [
          "Ten things you did more than once in the last month. Real ones. Boring ones count double.",
        ],
      },
      {
        title: "Score them",
        code: {
          label: "Type this to Claude",
          code: `Here are ten things I do repeatedly:
1. ...
(through 10)

For each: score how often I do it out of 5, and how annoying it
is out of 5. Multiply for a total. Sort by total.

Then tell me which three are worth saving as skills, and which
ones I should not bother with. Be blunt about the ones that are
not worth it.`,
        },
      },
      {
        title: "Build the top one properly",
        body: [
          "Same shape as Day 9: a folder, a `SKILL.md`, a description that says when to use it.",
          "Write the not-to-do line in from the start. You already know what it will get wrong, because it is the thing you always have to correct.",
        ],
      },
      {
        title: "Use them for a week before building more",
        body: [
          "Do not build all three today. Build one, use it for a week, fix the file each time it is not quite right.",
          "A skill you have corrected three times is worth more than three skills you have never used.",
        ],
      },
    ],
    win: {
      beforeLabel: "Before",
      before: ["One saved job, built on instinct", "No idea what should be next"],
      afterLabel: "After",
      after: ["A ranked list", "The top one built", "A reason for the order"],
    },
    quiz: [
      {
        question: "How do you rank which job to save first?",
        options: [
          "How often you do it, times how annoying it is",
          "How impressive it would be to automate",
        ],
        answer: 0,
        explanation:
          "The impressive one is nearly always the rare one. Frequency times annoyance puts the boring weekly job where it belongs, at the top.",
      },
      {
        question:
          "Which line is more likely to make a skill actually usable?",
        options: [
          '"Do not invent progress. If a client has nothing, say so."',
          '"Be accurate and professional."',
        ],
        answer: 0,
        explanation:
          "Naming the specific failure you keep correcting is worth more than any amount of general encouragement.",
      },
      {
        question: "You have ranked your list. Should you build all three today?",
        options: [
          "No. Build one, use it for a week, fix it as you go.",
          "Yes. Get them all done while you have the momentum.",
        ],
        answer: 0,
        explanation:
          "A skill you have corrected three times beats three you have never run. The corrections are where the value gets added.",
      },
    ],
    sheet: {
      slot: 6,
      id: "sheet-skills",
      title: "The Saved Jobs Sheet",
      pitch:
        "The scoring table, plus four skill files you can copy today.",
      contents: [
        "The ranking table, blank, ready to fill in",
        "Four complete skill files for jobs almost everybody has",
        "The four reasons a saved job gets abandoned, and how to avoid each",
      ],
    },
    nextTeaser: "Let it reach the other tools you already use",
  },

  /* --------------------------------------------------------------- Day 16 */
  {
    day: 16,
    slug: "day-16",
    title: "Connect your other apps",
    term: "MCP",
    phase: 2,
    minutes: 15,
    app: "needs-app",
    promise:
      "One real connection, doing one real job, chosen because you needed it rather than because it was available.",
    outcome: "One connection, doing one real task",
    why: [
      "So far everything has happened inside your own folders. A connection lets it reach outside: your issue tracker, your database, your documents.",
      "This is the day with the highest ratio of excitement to regret on the whole challenge, which is why tomorrow is entirely about restraint.",
    ],
    sections: [
      {
        heading: "What a connection actually is",
        body: [
          "A small program that sits between it and some other service, and offers a list of things that service can do.",
          "Once connected, you stop describing the steps. You say what you want, in normal words, and it works out which of those things to use.",
        ],
      },
      {
        heading: "Connect the one you would use today",
        body: [
          "Not the one that sounds most powerful. The one you would genuinely use this afternoon.",
          "The right way to choose is to finish this sentence: I keep switching windows to do X. Whatever X is, connect that.",
        ],
        table: {
          head: ["If you keep switching to", "Connect"],
          rows: [
            ["Your issue tracker, to check what is assigned", "That tracker"],
            ["A database, to run the same read query", "That database"],
            ["Your docs, to find a decision from months ago", "That doc tool"],
            ["Nothing. You are just curious.", "Nothing today. Come back when you have an X."],
          ],
        },
      },
      {
        heading: "Every connection has a standing cost",
        body: [
          "This is the part that gets skipped, and it is why Day 13 came first.",
          "The description of everything a connection can do is loaded into every session, whether you use it or not. Connect five things you do not need and you are paying for all five on every message you send.",
        ],
        callout: {
          tag: "The rule",
          body: [
            "One connection at a time. Use it for a week. Only then consider a second. Tomorrow is about what happens to people who ignore this.",
          ],
        },
      },
    ],
    steps: [
      {
        title: "Finish the sentence",
        body: [
          "I keep switching windows to ___. Write it down. If you cannot finish it honestly, stop here and come back another day. That is a real answer.",
        ],
      },
      {
        title: "Find and add it",
        body: [
          "Let it do the research. Connection setup differs per service and it can read the current instructions rather than you hunting for them.",
        ],
        code: {
          label: "Type this to Claude",
          code: `I want to connect [the service] so I can [the thing you
keep switching windows for].

Tell me:
1. Whether an official connector exists for it
2. Exactly what I need to set it up, including any credential
3. The command to add it
4. What it will be able to do once connected, and what it will not

If there is no good option, tell me that instead of improvising.`,
        },
      },
      {
        title: "Keep the credential out of the settings file",
        body: [
          "Everything from Day 7 applies here. A connection usually needs a token, and a token belongs in an environment variable, not typed into a settings file that gets committed.",
          "If a setup guide tells you to paste a key directly into a file, stop and find the environment variable version.",
        ],
      },
      {
        title: "Use it for the real job, immediately",
        body: [
          "Not a test. The actual thing you wrote down in step one. If it does not save you the window switch, disconnect it today rather than leaving it there.",
        ],
      },
      {
        title: "Look at what it cost",
        body: [
          "Run this and find your new connection in the list. Now you know its price, and you can decide whether the job was worth it.",
        ],
        code: { label: "Type this to Claude", code: "/context" },
      },
    ],
    win: {
      beforeLabel: "Before",
      before: [
        "You: switch to the other tool",
        "You: find the thing",
        "You: copy it back",
      ],
      afterLabel: "After",
      after: ['You: "what is assigned to me this week?"', "It: goes and gets it"],
    },
    quiz: [
      {
        question: "How should you choose your first connection?",
        options: [
          "Finish the sentence: I keep switching windows to ___",
          "Pick the most capable one available",
        ],
        answer: 0,
        explanation:
          "A connection you do not use is pure cost. The window switch you keep making is the only evidence worth acting on.",
      },
      {
        question: "You connect a service and do not use it for a month. What has it cost?",
        options: [
          "Room in every single session that month",
          "Nothing. Unused means free.",
        ],
        answer: 0,
        explanation:
          "The list of what it can do is loaded every session regardless. This is exactly what tomorrow is about.",
      },
      {
        question:
          "A setup guide tells you to paste your API token directly into a settings file. What do you do?",
        options: [
          "Find the environment variable version instead",
          "Paste it in. Settings files are local.",
        ],
        answer: 0,
        explanation:
          "Settings files get committed and shared. Everything from Day 7 still applies, and this is the most common way a token escapes.",
      },
    ],
    sheet: {
      slot: 7,
      id: "sheet-connections",
      title: "The Connections Sheet",
      pitch:
        "Pick the right one, and set it up without leaking a token.",
      contents: [
        "The choosing question, and when the honest answer is not yet",
        "Setup for the connections most companies already have",
        "Keeping credentials out of files, with the pattern that works",
      ],
    },
    nextTeaser: "Why the person with fifteen connections is slower than you",
  },

  /* --------------------------------------------------------------- Day 17 */
  {
    day: 17,
    slug: "day-17",
    title: "Why you should not connect everything",
    phase: 2,
    minutes: 12,
    app: "needs-app",
    promise:
      "Your connections trimmed back to the ones that earn their place, and a rule for saying no to the next one.",
    outcome: "Connections trimmed to what earns its place",
    why: [
      "Yesterday you connected one thing and it felt good. The obvious next move is to connect eight more. This is the day that talks you out of it.",
      "Every connection makes every session a little heavier and a little vaguer. The person with fifteen connections is not more capable. They are slower, and their results are worse.",
    ],
    sections: [
      {
        heading: "The cost is paid on every message",
        body: [
          "A connection is not like an app you install and forget. Its whole list of abilities is loaded at the start of every session, used or not.",
          "Fifteen connections means fifteen lists, every time you say hello.",
        ],
      },
      {
        heading: "The second cost is worse than the first",
        body: [
          "Room is the obvious cost. Confusion is the expensive one.",
          "When there are two hundred possible actions available and only three are relevant, the wrong one gets picked more often. You notice this as it doing something slightly odd, and you never trace it back to the connection you added a month ago.",
        ],
        table: {
          head: ["Connections", "What you notice"],
          rows: [
            ["One or two", "It reaches for the right thing without being told"],
            ["Five or six", "Occasionally you have to say which tool to use"],
            ["Ten or more", "You start naming the tool every time. Which is where you began."],
          ],
        },
      },
      {
        heading: "Narrow beats broad",
        body: [
          "Some connections offer hundreds of actions. You need four of them.",
          "Where a connection lets you limit which actions are available, limit them. A connection scoped to the handful you use is dramatically cheaper and noticeably more accurate than the same one wide open.",
        ],
        callout: {
          tag: "The rule for saying no",
          body: [
            "A connection earns its place if you used it in the last two weeks. If you did not, disconnect it today. Reconnecting takes a minute, and you will not miss it.",
          ],
        },
      },
    ],
    steps: [
      {
        title: "List what you have connected",
        body: [
          "Including anything you set up months ago and forgot. That is usually where the surprise is.",
        ],
        code: { label: "Type this to Claude", code: "/context" },
      },
      {
        title: "Apply the two week test",
        body: [
          "For each one: have you actually used it in the last fortnight? Not could have. Did.",
          "Anything that fails, disconnect now. Do not keep it because you might need it later. Later takes a minute.",
        ],
      },
      {
        title: "Narrow the ones you keep",
        body: [
          "For each survivor, work out which handful of its abilities you actually use, and limit it to those where you can.",
        ],
        code: {
          label: "Type this to Claude",
          code: `For each connection I still have:

1. Which of its actions have I actually used?
2. Can this connection be limited to just those?
3. If yes, exactly how?

Show me the smallest configuration that still does what I need.`,
        },
      },
      {
        title: "Measure it",
        body: [
          "Run `/context` again and compare with step one. This is the same before and after habit as Day 14, and it is the reason the change sticks.",
        ],
      },
    ],
    win: {
      beforeLabel: "Before",
      before: [
        "Nine connections, three in use",
        "You: naming the tool every time",
      ],
      afterLabel: "After",
      after: [
        "Three connections, all in use",
        "It: picks the right one without being told",
      ],
    },
    quiz: [
      {
        question: "What does an unused connection cost you?",
        options: [
          "Room in every session, plus a worse choice of tool",
          "Nothing until you use it",
        ],
        answer: 0,
        explanation:
          "Room is the obvious cost. The expensive one is that more options means the wrong one gets chosen more often.",
      },
      {
        question: "What is the two week test?",
        options: [
          "Used it in the last fortnight, or disconnect it",
          "Keep anything you might use in the next fortnight",
        ],
        answer: 0,
        explanation:
          "Might is not evidence. Reconnecting takes about a minute, so there is no real cost to being strict here.",
      },
      {
        question:
          "A connection offers 200 actions and you use four. What should you do?",
        options: [
          "Limit it to the four, if it lets you",
          "Leave it. Extra options do no harm.",
        ],
        answer: 0,
        explanation:
          "196 irrelevant options are loaded every session and make the choice harder every time. Narrow is both cheaper and more accurate.",
      },
    ],
    nextTeaser: "A rule for telling saved jobs, connections and plain commands apart",
  },

  /* --------------------------------------------------------------- Day 18 */
  {
    day: 18,
    slug: "day-18",
    title: "Saved job, connection, or plain command",
    phase: 2,
    minutes: 10,
    app: "anywhere",
    promise:
      "One rule that tells you which of the three to reach for, so you stop building the expensive version of a simple thing.",
    outcome: "A rule for picking between the three",
    why: [
      "You now have all three. It is very easy to build a connection for something a one line command already does, and to keep pasting a command that should have been a saved job.",
      "Ten minutes here saves you from the most common expensive mistake in the whole thirty days.",
    ],
    sections: [
      {
        heading: "Three tools, three different jobs",
        body: ["They look similar from the outside and they are not."],
        table: {
          head: ["", "Saved job", "Connection", "Plain command"],
          rows: [
            [
              "What it is",
              "Your instructions, written down",
              "A bridge to another service",
              "A program already on your machine",
            ],
            ["What it costs", "Nothing until used", "Loaded every session", "Nothing until used"],
            ["Set up", "Write one file", "Install and authenticate", "Already there"],
            ["Best for", "A procedure you repeat", "Live data behind a login", "Anything with a CLI"],
          ],
        },
      },
      {
        heading: "The expensive mistake",
        body: [
          "If a service already has a command line tool, and you are logged into it, you almost never need a connection for it.",
          "It can already run commands. A command costs nothing until it is used. A connection costs something on every single message. For anything with a decent CLI, the command wins comfortably.",
        ],
        callout: {
          tag: "Before you install any connection",
          body: [
            "Ask one question: does this thing have a command line tool I am already signed in to? If yes, try that first. It is free, it is faster, and it is one less thing loaded forever.",
          ],
        },
      },
      {
        heading: "Three questions, in order",
        body: [
          "1. Is this a procedure I repeat, in my own words? Saved job.",
          "2. Does it need live data from a service, behind a login, with no command line tool? Connection.",
          "3. Is there already a command that does it? Plain command. Just say so in your instructions.",
        ],
      },
    ],
    steps: [
      {
        title: "List five things you want it to be able to do",
        body: ["Real ones you have wished for in the last month."],
      },
      {
        title: "Classify them",
        code: {
          label: "Type this to Claude",
          code: `Here are five things I want to be able to do:
1. ...
(through 5)

For each one tell me: saved job, connection, or plain command?
Give the reason in one line.

If a command line tool already exists for any of these, say so
and tell me not to install a connection for it.`,
        },
      },
      {
        title: "Write the answer into your instructions",
        body: [
          "Where a plain command wins, tell it so once in your CLAUDE.md and you never have to say it again.",
        ],
        code: {
          label: "Add to CLAUDE.md",
          code: `## Tools available here

- Use the \`gh\` command for anything GitHub. I am already signed in.
- Use the \`aws\` command for anything AWS.
- Prefer a command over a connection when both exist.`,
        },
      },
    ],
    win: {
      beforeLabel: "Before",
      before: ["Every new need: install another connection"],
      afterLabel: "After",
      after: ["Three questions", "Most needs cost nothing at all"],
    },
    quiz: [
      {
        question:
          "The service you want has a command line tool and you are already signed in. What do you use?",
        options: [
          "The command. It costs nothing until it is used.",
          "A connection, so it is properly integrated.",
        ],
        answer: 0,
        explanation:
          "This is the most common expensive mistake on the whole challenge. A connection is loaded on every message. A command is free until you run it.",
      },
      {
        question: "Which of the three costs you something on every session?",
        options: ["A connection", "A saved job"],
        answer: 0,
        explanation:
          "A saved job only loads when you invoke it. A connection loads its whole list of abilities every time, used or not.",
      },
      {
        question:
          "You repeat the same five step procedure every week, in your own words. What is that?",
        options: ["A saved job", "A connection"],
        answer: 0,
        explanation:
          "Your own repeated instructions are exactly what a saved job is for. No connection is involved.",
      },
    ],
    nextTeaser: "Turn your most repeated sentence into a single word",
  },

  /* --------------------------------------------------------------- Day 19 */
  {
    day: 19,
    slug: "day-19",
    title: "Make your own shortcuts",
    phase: 2,
    minutes: 12,
    app: "needs-app",
    promise:
      "The sentence you type most often, replaced by one word, with the changing part passed in.",
    outcome: "Your most repeated instruction, made one word",
    why: [
      "There is a sentence you type several times a week. Slightly different each time, but the same shape.",
      "That is a shortcut waiting to happen. It takes about four minutes and you will use it for years.",
    ],
    sections: [
      {
        heading: "A shortcut is a small saved job",
        body: [
          "Same mechanism as Day 9, smaller. A file whose name becomes the word you type.",
          "The difference is size, not kind. A saved job is a procedure. A shortcut is one instruction you are tired of typing.",
        ],
        table: {
          head: ["File", "You type"],
          rows: [
            ["`.claude/skills/explain/SKILL.md`", "`/explain`"],
            ["`.claude/commands/explain.md`", "`/explain` as well. Both work."],
            ["`~/.claude/skills/explain/SKILL.md`", "`/explain`, in every project"],
          ],
        },
      },
      {
        heading: "Pull in live information",
        body: [
          "A shortcut can run a command and drop the result into the instructions before it reads them. That is what makes it useful rather than just shorter.",
          "A line beginning with an exclamation mark and a command in backticks is replaced by that command's output.",
        ],
        callout: {
          tag: "Why this matters",
          body: [
            "It means your shortcut arrives with the current state already attached. A review shortcut can carry your actual uncommitted changes, so the answer is about your real work rather than a guess.",
          ],
        },
      },
      {
        heading: "Good ones are small and specific",
        body: [
          "Narrow shortcuts get used. Vague ones get forgotten.",
          "`/explain-like-im-new` beats `/help-me`. Name the exact situation.",
        ],
      },
    ],
    steps: [
      {
        title: "Find your most repeated sentence",
        body: [
          "Think about the last week. What did you type more than twice, in slightly different words each time?",
        ],
      },
      {
        title: "Write it as a shortcut",
        body: [
          "This one carries your actual uncommitted changes into the prompt, so the review is about your real work.",
        ],
        code: {
          label: ".claude/skills/review/SKILL.md",
          code: `---
description: Reviews my uncommitted changes and flags anything risky. Use when I ask what I changed, or ask for a review before I commit.
---

## My current changes

!\`git diff HEAD\`

## Instructions

Review the changes above. In this order:

1. Anything that will break, with the file and line
2. Anything risky: no error handling, a hardcoded value, a missing test
3. One thing that could be simpler

Be short. Do not compliment the code. If there are no changes,
say so and stop.`,
        },
      },
      {
        title: "Run it on real work",
        body: ["Make a small change to something, then type it."],
        code: { label: "Type this to Claude", code: "/review" },
      },
      {
        title: "Build two more, then stop",
        body: [
          "Three is plenty to start with. A shortcut you use every day is worth more than nine you have forgotten you made.",
          "If you cannot remember what a shortcut does, delete it. It is costing you nothing to keep, but it is cluttering the list you scan.",
        ],
      },
    ],
    win: {
      beforeLabel: "Before",
      before: [
        "You: type the same three sentences",
        "You: slightly differently each time",
      ],
      afterLabel: "After",
      after: ["You: `/review`", "It: arrives with your real changes attached"],
    },
    quiz: [
      {
        question: "What decides the word you type?",
        options: ["The folder or file name", "A setting inside the file"],
        answer: 0,
        explanation:
          "A folder called `review` gives you `/review`. That is the whole naming rule, and it is why the name is worth a moment's thought.",
      },
      {
        question:
          "What does a line like `!`git diff HEAD`` do inside a shortcut?",
        options: [
          "Runs the command and drops the output into the instructions first",
          "Tells it to run that command later, if it wants to",
        ],
        answer: 0,
        explanation:
          "The instructions arrive with the current state already inlined. That is what makes a shortcut about your real work rather than a general answer.",
      },
      {
        question: "Which shortcut is more likely to survive?",
        options: ["`/explain-like-im-new`", "`/help-me`"],
        answer: 0,
        explanation:
          "Narrow and specific gets remembered and used. Vague gets forgotten within a fortnight.",
      },
    ],
    nextTeaser: "Make it show you the plan before it touches anything",
  },

  /* --------------------------------------------------------------- Day 20 */
  {
    day: 20,
    resource: { id: "workflow-kit" },
    slug: "day-20",
    title: "Make it plan before it acts",
    term: "plan mode",
    phase: 2,
    minutes: 12,
    app: "anywhere",
    promise:
      "One real job run through a plan you read and changed before anything happened.",
    outcome: "One job run through a plan you approved first",
    why: [
      "On a small job, letting it start immediately is fine. On anything touching several files, it is how you end up unpicking forty minutes of confident work that went the wrong way.",
      "Plan mode makes it show you the whole approach first. You read it, change it, then say go. Two minutes of reading, and the rework disappears.",
    ],
    sections: [
      {
        heading: "The problem it solves",
        body: [
          "Without a plan, the first thing you see is the result. If the approach was wrong, everything after it is wrong too, and you find out at the end.",
          "With a plan, the first thing you see is the approach. Wrong approaches are obvious in a paragraph and invisible in a diff.",
        ],
      },
      {
        heading: "When it is worth it",
        body: ["Not always. The judgement is about how much would have to be undone."],
        table: {
          head: ["Worth planning", "Not worth planning"],
          rows: [
            ["It touches several files", "One small edit"],
            ["You are not sure of the right approach", "You already know exactly what you want"],
            ["Getting it wrong means unpicking a lot", "Trivial to undo"],
            ["You are working in unfamiliar code", "You wrote it last week"],
          ],
        },
      },
      {
        heading: "The plan is a draft, not a proposal",
        body: [
          "Reading the plan and saying yes changes nothing. The value is in editing it.",
          "Delete a step. Reorder two. Add the thing it missed. That editing is the whole point, and it is where your knowledge of your own project gets used.",
        ],
        callout: {
          tag: "The one question to ask",
          body: [
            "Read the plan and ask: what is not on this list that should be? Missing steps are far more common, and far more expensive, than wrong ones.",
          ],
        },
      },
    ],
    steps: [
      {
        title: "Pick a job worth planning",
        body: [
          "Something real that touches at least three files. If nothing qualifies, wait until it does. This day does not work on a toy example.",
        ],
      },
      {
        title: "Ask for the plan first",
        body: [
          "Press Shift and Tab to cycle into plan mode, or just ask for it in words. Being explicit works fine and is easier to remember.",
        ],
        code: {
          label: "Type this to Claude",
          code: `Before you change anything: plan this out.

I want to [what you want].

Give me:
1. The files you will touch, and what changes in each
2. The order you will do them in
3. Anything you are unsure about
4. What could break

Do not write any code yet. Wait for me.`,
        },
      },
      {
        title: "Change the plan",
        body: [
          "Do not just approve it. Find at least one thing to alter. There almost always is one.",
        ],
        code: {
          label: "Type this to Claude",
          code: `Two changes to the plan:

- Drop step 3, we do not need it
- Add a step before step 1: [the thing it missed]

Show me the updated plan. Still do not write anything.`,
        },
      },
      {
        title: "Then let it run",
        body: [
          "Now say go. Watch how much straighter it goes than usual.",
          "Afterwards, compare: how long did reading and fixing the plan take, against how long it would have taken to unpick a wrong approach at the end?",
        ],
      },
    ],
    win: {
      beforeLabel: "Before",
      before: [
        "It: starts immediately",
        "You: find out at the end it went the wrong way",
        "You: unpick forty minutes of work",
      ],
      afterLabel: "After",
      after: [
        "It: shows you the approach",
        "You: change two things",
        "It: goes straight there",
      ],
    },
    quiz: [
      {
        question: "When is planning first not worth it?",
        options: [
          "A single small edit you already know how to make",
          "A job across several files in code you do not know",
        ],
        answer: 0,
        explanation:
          "The test is how much would have to be undone. Nothing to undo means nothing to plan.",
      },
      {
        question: "You read the plan and it looks fine. What should you do?",
        options: [
          "Look for what is missing before approving",
          "Approve it. That is what reading it was for.",
        ],
        answer: 0,
        explanation:
          "Missing steps are more common and more expensive than wrong ones, and they are exactly what a plan will not show you unless you go looking.",
      },
      {
        question: "What is the plan actually for?",
        options: [
          "For you to edit, using what you know about your project",
          "For it to confirm it understood you",
        ],
        answer: 0,
        explanation:
          "If you only ever say yes, you have added a step and gained nothing. The editing is where your knowledge gets into the work.",
      },
    ],
    nextTeaser: "Hand narrow jobs to helpers that only do one thing",
  },
];

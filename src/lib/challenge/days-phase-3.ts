/**
 * Phase 3 — Make it work without you. Days 21 to 30.
 *
 * Days 28 and 29 are additions to the original draft. Day 28 exists because
 * most people in a company do not write code, and without it the finance or
 * operations reader has no page that speaks to them. Day 29 exists because the
 * Manager Pack on Day 10 tells somebody to roll this out and no other day
 * shows them how.
 */

import type { Day } from "./types";

export const PHASE_3_DAYS: Day[] = [
  /* --------------------------------------------------------------- Day 21 */
  {
    day: 21,
    slug: "day-21",
    title: "Helpers with one narrow job",
    term: "subagents",
    phase: 3,
    minutes: 15,
    app: "needs-app",
    promise:
      "Two helpers written, each with one job and only the tools it needs, and one of them run on real work.",
    outcome: "Two helpers written, one of them run",
    why: [
      "A general assistant that can do anything is worse at any particular thing than a narrow one that can only do that thing.",
      "A helper gets its own fresh start, its own instructions, and only the tools you allow it. It goes away, does the job, and hands back a summary instead of filling your session with everything it read.",
    ],
    sections: [
      {
        heading: "It is a file with a job description",
        body: [
          "A helper, properly a subagent, is a markdown file in `.claude/agents/`. A few lines at the top say who it is and when to use it. Everything below is its instructions.",
        ],
        table: {
          head: ["Line", "What it does"],
          rows: [
            ["`name`", "Its identifier. Lowercase with hyphens."],
            ["`description`", "When to hand work to it. This is what decides delegation."],
            ["`tools`", "What it is allowed to use. Leave it out and it gets everything."],
            ["`model`", "Which size of model. Leave it out and it matches your session."],
          ],
        },
      },
      {
        heading: "Two things you actually gain",
        body: ["Both matter, and the second one is the reason to bother."],
        table: {
          head: ["Gain", "Why"],
          rows: [
            [
              "Your session stays clean",
              "It reads twenty files and hands you a paragraph, instead of putting all twenty into your conversation.",
            ],
            [
              "You can take tools away",
              "A reviewer with read-only tools cannot change anything, no matter what it decides. That is enforcement, not instruction.",
            ],
          ],
        },
        callout: {
          tag: "The `tools` line is the point",
          body: [
            "Telling something not to edit files is guidance. Not giving it the ability to edit files is a guarantee. For anything that only needs to look, take the writing tools away.",
          ],
        },
      },
      {
        heading: "Match the model to the job",
        body: [
          "Day 14 said match the size of the tool to the size of the job, and left it as something you would have to remember.",
          "This is where it becomes automatic. A helper that searches and summarises can be set to a smaller model once, in its file, and then it is always right.",
        ],
      },
    ],
    steps: [
      {
        title: "Make the folder",
        code: { label: "Terminal", code: "mkdir -p .claude/agents" },
      },
      {
        title: "Write a helper that can only look",
        body: [
          "Note the `tools` line. It has Read, Grep and Glob. It has no way to change anything, so it cannot, whatever it concludes.",
        ],
        code: {
          label: ".claude/agents/reviewer.md",
          code: `---
name: reviewer
description: Reviews code for problems and risk. Use after a change is written, or when I ask for a review.
tools: Read, Grep, Glob
model: sonnet
---

You are a careful reviewer. You cannot change anything, only report.

For the code you are given, report in this order:

1. Anything that will break, with the file and line
2. Anything risky: unhandled errors, hardcoded values, missing tests
3. One thing that could be simpler

Be short. Do not compliment the code. If you find nothing, say so
in one line rather than inventing something.`,
        },
      },
      {
        title: "Write a second one that only searches",
        body: [
          "This one exists to keep your main session clean. It reads a lot and gives back a little, which is exactly what a smaller model is good at.",
        ],
        code: {
          label: ".claude/agents/finder.md",
          code: `---
name: finder
description: Finds where something lives in this project. Use when I ask where something is, or how something works, before making a change.
tools: Read, Grep, Glob
model: haiku
---

You find things. You do not change things and you do not give opinions.

Given a question about this project, return:

1. The files that matter, with paths
2. One line each on what that file does
3. The single best place to start reading

Keep it under fifteen lines. Do not paste file contents.`,
        },
      },
      {
        title: "Use one on real work",
        body: [
          "Ask for it by name. Watch what comes back: a summary, not twenty files.",
        ],
        code: {
          label: "Type this to Claude",
          code: "Use the reviewer to look at my uncommitted changes.",
        },
      },
    ],
    win: {
      beforeLabel: "Before",
      before: [
        "One session doing everything",
        "Twenty files read into your conversation",
      ],
      afterLabel: "After",
      after: [
        "A helper that reads twenty files",
        "A paragraph comes back",
        "A reviewer that physically cannot edit",
      ],
    },
    quiz: [
      {
        question:
          "You want a reviewer that can never change your code. What is the reliable way?",
        options: [
          "Give it a `tools` line with only reading tools",
          "Tell it in its instructions not to edit anything",
        ],
        answer: 0,
        explanation:
          "Instructions are guidance and usually followed. Taking the tool away is a guarantee. For anything that must not happen, remove the ability rather than asking.",
      },
      {
        question:
          "What comes back to your main session when a helper finishes?",
        options: [
          "A summary of what it found",
          "Everything it read, added to your conversation",
        ],
        answer: 0,
        explanation:
          "That is the main practical reason to use one. The reading happens somewhere else and only the conclusion comes back.",
      },
      {
        question:
          "A helper whose whole job is finding files and summarising them. Which model?",
        options: ["A smaller one, set in its file", "The largest available"],
        answer: 0,
        explanation:
          "Searching and summarising do not need heavy reasoning. Setting it once in the file means you never have to remember to choose.",
      },
    ],
    nextTeaser: "Split one large job across several helpers at once",
  },

  /* --------------------------------------------------------------- Day 22 */
  {
    day: 22,
    slug: "day-22",
    title: "Many helpers on one big job",
    phase: 3,
    minutes: 15,
    app: "needs-app",
    promise:
      "One large repetitive job split into pieces, done at the same time, and put back together.",
    outcome: "One large job split up and finished",
    why: [
      "Some jobs are one hundred small identical jobs wearing a coat. Renaming something across forty files. Checking sixty pages for the same problem.",
      "Done one at a time that is an afternoon. Split across helpers working at once it is a coffee break.",
    ],
    sections: [
      {
        heading: "Only one shape of job qualifies",
        body: [
          "Splitting only helps when the pieces do not need each other.",
        ],
        table: {
          head: ["Splits well", "Does not split"],
          rows: [
            ["The same check across many files", "A change where step 2 depends on step 1"],
            ["Summarising forty separate documents", "Designing something, then building it"],
            ["Converting a folder of files, one at a time", "Anything where the pieces must agree with each other"],
          ],
        },
      },
      {
        heading: "Three ways to divide the work",
        body: ["Pick by what the job actually looks like."],
        table: {
          head: ["Shape", "How it works", "Good for"],
          rows: [
            [
              "One each",
              "Every helper takes one item from a list",
              "Forty files, forty helpers, same task",
            ],
            [
              "Different angles",
              "Every helper looks at the same thing differently",
              "One document reviewed for security, cost, and clarity",
            ],
            [
              "Two guesses",
              "Two helpers chase competing explanations",
              "A bug where you have two theories and no evidence",
            ],
          ],
        },
      },
      {
        heading: "Putting it back together is the real work",
        body: [
          "Twelve summaries is not an answer. Somebody has to read them all and produce one thing.",
          "Plan that step before you start. Say up front what the combined result should look like, or you will be left holding twelve pieces and doing the hard part by hand.",
        ],
        callout: {
          tag: "Start with three",
          body: [
            "Not forty. Run your split on three items first and read the results properly. If the shape of the answer is wrong, you have wasted three helpers instead of forty.",
          ],
        },
      },
    ],
    steps: [
      {
        title: "Find a job that is really many small ones",
        body: [
          "In your own work. Something where you would otherwise open the same kind of file over and over doing the same thing.",
        ],
      },
      {
        title: "Test the shape on three",
        code: {
          label: "Type this to Claude",
          code: `I want to [the job] across every file in [the folder].

First, do exactly three of them, in parallel, one helper each.
Show me the three results.

Do not do the rest yet. I want to check the shape of the answer
before we scale it up.`,
        },
      },
      {
        title: "Fix the instructions, then run the rest",
        body: [
          "Whatever was wrong in the three will be wrong in all forty. Fix the wording, not the three results.",
        ],
        code: {
          label: "Type this to Claude",
          code: `The shape is right now. Do the rest the same way.

When they are all done, combine them into one summary with:
- What was done, in one line
- Anything that failed, and why
- Anything that needs me to look at it`,
        },
      },
      {
        title: "Check the boring middle",
        body: [
          "Do not just read the first result and the last. Open two from the middle at random.",
          "Where splitting goes wrong is quiet: one helper misread the job and produced something plausible and wrong, thirty times.",
        ],
      },
    ],
    win: {
      beforeLabel: "Before",
      before: ["Forty files, one at a time", "An afternoon"],
      afterLabel: "After",
      after: ["Forty files at once", "One combined summary", "A coffee"],
    },
    quiz: [
      {
        question: "Which job splits well across helpers?",
        options: [
          "The same check applied to sixty separate files",
          "A design, then a build based on that design",
        ],
        answer: 0,
        explanation:
          "The pieces have to be independent. Anything where step 2 needs step 1 to be finished cannot happen at the same time.",
      },
      {
        question: "Before running your split on forty items, what should you do?",
        options: [
          "Run it on three and check the shape of the answer",
          "Run all forty. That is the point of doing it in parallel.",
        ],
        answer: 0,
        explanation:
          "If the instructions are slightly wrong you get forty slightly wrong results. Three is enough to see it, and cheap to throw away.",
      },
      {
        question: "How should you check forty results?",
        options: [
          "Open two from the middle at random",
          "Read the first and the last",
        ],
        answer: 0,
        explanation:
          "The failure here is quiet and consistent: one misreading, repeated thirty times, all of it plausible. Random spot checks find that. The ends do not.",
      },
    ],
    nextTeaser: "Run two jobs side by side without them treading on each other",
  },

  /* --------------------------------------------------------------- Day 23 */
  {
    day: 23,
    slug: "day-23",
    title: "Working on two things at once",
    phase: 3,
    minutes: 15,
    app: "needs-app",
    promise:
      "Two jobs running side by side in the same project, with no chance of them overwriting each other.",
    outcome: "Two jobs side by side, nothing clashing",
    why: [
      "Yesterday split one job across helpers. This is different: two entirely separate jobs, at the same time, in the same project.",
      "The obvious way is to open two sessions in the same folder. Do that and they will edit the same files underneath each other, and you will not notice until something is broken.",
    ],
    sections: [
      {
        heading: "Why two sessions in one folder go wrong",
        body: [
          "Both of them see the same files. Neither knows the other exists.",
          "One reads a file, thinks for a moment, and writes it back. In that moment the other one changed it. The first write silently undoes the second. No error, no warning.",
        ],
      },
      {
        heading: "Give each one its own copy",
        body: [
          "The fix is a second working folder that shares the same history but has its own files on disk.",
          "In git this is a worktree. Two folders, one project, separate files. Each session gets one and they cannot touch each other.",
        ],
        table: {
          head: ["Approach", "What happens"],
          rows: [
            ["Two sessions, one folder", "They overwrite each other quietly"],
            ["Two folders, two copies of the project", "Safe, but the history is separate and merging is painful"],
            ["Two worktrees", "Safe, one shared history, no merging problem"],
          ],
        },
      },
      {
        heading: "When it is worth the setup",
        body: [
          "Not for everything. There is a real cost: two folders to keep track of, and it is easy to forget which window is which.",
        ],
        table: {
          head: ["Worth it", "Not worth it"],
          rows: [
            ["A long job, and a small urgent one arrives", "Two small jobs. Just do them in order."],
            ["Two features that touch the same files", "Two jobs in completely different projects"],
            ["Something long running you want to leave going", "Anything you will finish in ten minutes"],
          ],
        },
      },
    ],
    steps: [
      {
        title: "Make a second working folder",
        body: [
          "This creates a folder next to your project with its own copy of the files and its own branch.",
        ],
        code: {
          label: "Terminal, from your project",
          code: "git worktree add ../myproject-urgent -b urgent-fix",
        },
      },
      {
        title: "Open a session in each",
        body: [
          "One terminal in your original folder, one in the new one. Two sessions, two sets of files, no overlap.",
        ],
        code: {
          label: "In the second terminal",
          code: `cd ../myproject-urgent
claude`,
        },
      },
      {
        title: "Label your windows",
        body: [
          "Two identical terminals and you will type into the wrong one.",
          "Rename the tabs, or use different colour schemes. Whatever your terminal offers. Thirty seconds now.",
        ],
      },
      {
        title: "Clean up when you are done",
        body: [
          "Merge the branch as normal, then remove the extra folder. Leaving old worktrees around is how this gets confusing.",
        ],
        code: {
          label: "Terminal",
          code: "git worktree remove ../myproject-urgent",
        },
      },
    ],
    win: {
      beforeLabel: "Before",
      before: [
        "Urgent thing arrives mid job",
        "You: stop, stash, switch, lose your place",
      ],
      afterLabel: "After",
      after: [
        "Long job: keeps going in one window",
        "Urgent job: its own window, own files",
        "Neither one knows about the other",
      ],
    },
    quiz: [
      {
        question: "Two sessions in the same folder. What goes wrong?",
        options: [
          "They overwrite each other's edits, quietly",
          "The second one refuses to start",
        ],
        answer: 0,
        explanation:
          "There is no error. One writes a file the other had already changed, and the change disappears. You find out later, from the result.",
      },
      {
        question: "What does a worktree give you?",
        options: [
          "A second folder with its own files, sharing one history",
          "A complete second copy of the project, with separate history",
        ],
        answer: 0,
        explanation:
          "Separate files means no clashes. Shared history means no painful merge later. That combination is the whole reason to use one.",
      },
      {
        question: "Two small jobs you could finish in ten minutes each. Worth setting this up?",
        options: [
          "No. Just do them one after the other.",
          "Yes. Parallel is always faster.",
        ],
        answer: 0,
        explanation:
          "The setup and the risk of typing into the wrong window cost more than ten minutes of waiting. This is for a long job plus an interruption.",
      },
    ],
    nextTeaser: "Let a job run start to finish with nobody watching",
  },

  /* --------------------------------------------------------------- Day 24 */
  {
    day: 24,
    slug: "day-24",
    title: "Running it without watching",
    phase: 3,
    minutes: 15,
    app: "needs-app",
    promise:
      "One job that runs start to finish on its own, writes its result to a file, and tells you whether it worked.",
    outcome: "One job run start to finish, unattended",
    why: [
      "Everything so far has had you sitting there approving things. This is the day that stops.",
      "One flag turns a conversation into a command. You give it the job on the way in, it does the work, it prints the answer, and it exits. No screen watching.",
    ],
    sections: [
      {
        heading: "One flag changes everything",
        body: [
          "Add `-p` and your prompt, and it runs once and stops. No session, no waiting for you.",
          "It also exits with a success or failure code like any other command, which is what makes it usable inside a script.",
        ],
      },
      {
        heading: "Nobody is there to approve anything",
        body: [
          "This is the part that catches people out. With nobody watching, anything that would have asked permission just does not happen.",
          "So you have to say in advance what it is allowed to do. Be specific. This is the one place where being generous costs you.",
        ],
        table: {
          head: ["Flag", "What it does"],
          rows: [
            ["`--allowedTools \"Read,Edit\"`", "Allows exactly these, nothing else"],
            ["`--permission-mode acceptEdits`", "Lets it write files without asking"],
            ["`--output-format json`", "Gives you structured output a script can read"],
            ["`--bare`", "Skips your local setup, so it runs the same on any machine"],
          ],
        },
        callout: {
          tag: "The rule for unattended runs",
          body: [
            "Allow the narrowest set of tools that lets the job finish. An unattended run with everything allowed is the one that quietly does something you did not want at three in the morning.",
          ],
        },
      },
      {
        heading: "Give yourself something to read afterwards",
        body: [
          "You were not watching, so the output is all you get. Send it to a file, with the date in the name.",
          "A run that leaves no trace is a run you cannot debug, and you will need to debug it.",
        ],
      },
    ],
    steps: [
      {
        title: "Run one thing without a session",
        body: [
          "Start with something that only reads. You want to see the shape of it before you let it change anything.",
        ],
        code: {
          label: "Terminal",
          code: `claude -p "Summarise what changed in this project in the last week" --allowedTools "Read,Grep,Glob"`,
        },
      },
      {
        title: "Send the result somewhere",
        body: [
          "Now it leaves a trace. Run it twice and you have a history you can compare.",
        ],
        code: {
          label: "Terminal",
          code: `claude -p "Summarise what changed in this project in the last week" \\
  --allowedTools "Read,Grep,Glob" \\
  > reports/weekly-$(date +%F).md`,
        },
      },
      {
        title: "Pipe something into it",
        body: [
          "It reads from standard input, so it fits into whatever you already have.",
        ],
        code: {
          label: "Terminal",
          code: `git diff main | claude -p "List anything in this diff that looks risky. One line each. If nothing, say nothing."`,
        },
      },
      {
        title: "Wrap it in a script you can trust",
        body: [
          "Save this, make it runnable, and run it by hand a few times before you let anything else call it.",
        ],
        code: {
          label: "scripts/weekly-summary.sh",
          code: `#!/bin/bash
set -euo pipefail

cd "$(dirname "$0")/.."
mkdir -p reports

OUT="reports/weekly-$(date +%F).md"

claude -p "Summarise what changed in this project in the last week.
Group by area. Flag anything that looks unfinished." \\
  --allowedTools "Read,Grep,Glob" \\
  > "$OUT"

echo "Wrote $OUT"`,
        },
      },
    ],
    win: {
      beforeLabel: "Before",
      before: ["You: open a session", "You: paste the same prompt", "You: wait and watch"],
      afterLabel: "After",
      after: ["A script runs it", "A file appears", "You read it when you want to"],
    },
    quiz: [
      {
        question: "In an unattended run, what happens to anything that needs permission?",
        options: [
          "It does not happen. Nobody is there to approve it.",
          "It waits until somebody approves it.",
        ],
        answer: 0,
        explanation:
          "That is why you say in advance what is allowed. A job that silently skipped its main step is the classic first unattended failure.",
      },
      {
        question: "How many tools should you allow in an unattended run?",
        options: [
          "The narrowest set that lets the job finish",
          "All of them, so it does not get stuck",
        ],
        answer: 0,
        explanation:
          "Nobody is watching. Everything allowed is how something unwanted happens at three in the morning, with nobody to stop it.",
      },
      {
        question: "Why send the output to a dated file?",
        options: [
          "You were not watching, so it is the only record you have",
          "It is tidier",
        ],
        answer: 0,
        explanation:
          "When it goes wrong, and it will, the file is the only thing you have to work out why. A run that leaves no trace cannot be debugged.",
      },
    ],
    sheet: {
      slot: 8,
      id: "sheet-unattended",
      title: "The Unattended Sheet",
      pitch:
        "Every flag that matters, plus a script skeleton that fails safely.",
      contents: [
        "The flags, with what each one actually permits",
        "A working script skeleton with error handling and logging",
        "The four ways unattended runs fail quietly, and how to catch each",
      ],
    },
    nextTeaser: "Make that job run itself every morning",
  },

  /* --------------------------------------------------------------- Day 25 */
  {
    day: 25,
    slug: "day-25",
    title: "Setting it to run on a schedule",
    phase: 3,
    minutes: 12,
    app: "needs-app",
    promise:
      "One useful job that runs itself on a schedule and leaves the answer waiting for you.",
    outcome: "One useful job that runs every morning",
    why: [
      "Yesterday's script still needs you to type its name. Today it runs itself.",
      "The job to pick is the one you do at the same time every week, that mostly involves gathering things together and reading them.",
    ],
    sections: [
      {
        heading: "Your computer already has a scheduler",
        body: [
          "You do not need anything new. Every operating system has one built in, and it is the right tool.",
        ],
        table: {
          head: ["System", "What it is called"],
          rows: [
            ["macOS and Linux", "cron"],
            ["Windows", "Task Scheduler"],
            ["A server you already have", "Whatever it already uses"],
          ],
        },
      },
      {
        heading: "Pick the right job",
        body: [
          "A good scheduled job gathers things and reports. A bad one changes things.",
        ],
        table: {
          head: ["Good scheduled job", "Bad scheduled job"],
          rows: [
            ["Summarise what changed this week", "Fix everything it finds"],
            ["Check for anything that looks stuck", "Push changes automatically"],
            ["Gather your notes into one file", "Anything you cannot easily undo"],
          ],
        },
        callout: {
          tag: "Start read-only",
          body: [
            "Your first scheduled job should only read and write a report. Once you have watched it be correct for two weeks, then consider letting it change things.",
          ],
        },
      },
      {
        heading: "Three things that break it",
        body: [
          "A scheduler runs your script in a much emptier environment than your terminal.",
          "It has no idea where anything is, so use full paths for everything. It does not have your logged in shell, so check it can find `claude` at all. And nobody sees the output, so write it to a file and note failures too.",
        ],
      },
    ],
    steps: [
      {
        title: "Make yesterday's script bulletproof",
        body: [
          "Full paths, and a log of what happened whether it worked or not.",
        ],
        code: {
          label: "scripts/weekly-summary.sh",
          code: `#!/bin/bash
set -euo pipefail

PROJECT="/full/path/to/your/project"
CLAUDE="/full/path/to/claude"

cd "$PROJECT"
mkdir -p reports logs

DATE=$(date +%F)
OUT="reports/weekly-$DATE.md"
LOG="logs/weekly-$DATE.log"

{
  echo "Started: $(date)"
  "$CLAUDE" -p "Summarise what changed in this project in the last week.
Group by area. Flag anything that looks unfinished." \\
    --allowedTools "Read,Grep,Glob" \\
    > "$OUT"
  echo "Finished: $(date). Wrote $OUT"
} >> "$LOG" 2>&1`,
        },
      },
      {
        title: "Find where claude actually is",
        body: [
          "Put the answer into the script above. The scheduler will not find it on its own.",
        ],
        panels: [
          {
            id: "mac",
            label: "macOS or Linux",
            body: ["Run this and copy the path it prints."],
            code: { label: "Terminal", code: "which claude" },
          },
          {
            id: "win",
            label: "Windows",
            body: ["Run this in PowerShell and copy the path it prints."],
            code: { label: "PowerShell", code: "(Get-Command claude).Source" },
          },
        ],
      },
      {
        title: "Run it by hand first",
        body: [
          "Twice. Read the report and read the log. If it is wrong now, it will be wrong at seven in the morning when you are not there.",
        ],
        code: { label: "Terminal", code: "bash scripts/weekly-summary.sh" },
      },
      {
        title: "Put it on the schedule",
        panels: [
          {
            id: "mac",
            label: "macOS or Linux",
            body: [
              "Open your schedule with `crontab -e` and add this line. It runs at 7am every Monday.",
            ],
            code: {
              label: "crontab",
              code: "0 7 * * 1 /bin/bash /full/path/to/scripts/weekly-summary.sh",
            },
          },
          {
            id: "win",
            label: "Windows",
            body: [
              "Open Task Scheduler, create a basic task, set it to weekly on Monday at 7am, and point it at your script.",
              "Tick the option to run whether you are signed in or not, otherwise it will quietly do nothing on the mornings you have not logged in.",
            ],
          },
        ],
      },
    ],
    win: {
      beforeLabel: "Before",
      before: ["Monday: remember to run it", "Monday: often forget"],
      afterLabel: "After",
      after: ["Monday 7am: it runs", "Monday 9am: you read it"],
    },
    quiz: [
      {
        question: "What should your first scheduled job be allowed to do?",
        options: [
          "Only read, and write a report",
          "Whatever it needs, so it can finish the job properly",
        ],
        answer: 0,
        explanation:
          "Watch it be correct for two weeks before you let it change anything. Nobody is there to stop it, and nobody will notice for a while.",
      },
      {
        question: "Why do full paths matter in a scheduled script?",
        options: [
          "The scheduler runs in an emptier environment and does not know where anything is",
          "They do not. It is just tidier.",
        ],
        answer: 0,
        explanation:
          "This is the single most common reason a scheduled job silently does nothing. It cannot find the command, and nobody is watching the error.",
      },
      {
        question: "Before scheduling it, what should you do?",
        options: [
          "Run it by hand twice and read the log",
          "Schedule it and check the report on Monday",
        ],
        answer: 0,
        explanation:
          "A job that is wrong now will be wrong at 7am when you are asleep. Two manual runs cost you two minutes and save the week.",
      },
    ],
    nextTeaser: "Write instructions that keep working instead of nearly working",
  },

  /* --------------------------------------------------------------- Day 26 */
  {
    day: 26,
    slug: "day-26",
    title: "Instructions worth keeping",
    phase: 3,
    minutes: 12,
    app: "anywhere",
    promise:
      "One instruction you were nearly happy with, rewritten so it works every time.",
    outcome: "One weak instruction rewritten properly",
    why: [
      "You now have skills, helpers, guards and scheduled jobs, and every one of them is only as good as the instructions inside it.",
      "There is a real difference between an instruction that works most of the time and one that works. It is usually four specific things, and none of them are about being polite.",
    ],
    sections: [
      {
        heading: "The four things",
        body: ["In order of how much difference they make."],
        table: {
          head: ["Thing", "Weak", "Strong"],
          rows: [
            [
              "Say who is doing it",
              "Review this",
              "You are a careful reviewer who cannot change anything",
            ],
            [
              "Say what comes out",
              "Summarise the week",
              "Three bullets per client: what moved, what is blocked, what is next",
            ],
            [
              "Say what not to do",
              "Be accurate",
              "Do not invent progress. If a client has nothing, say so",
            ],
            [
              "Say when to stop",
              "Fix the problems",
              "Report problems. Do not change any files.",
            ],
          ],
        },
      },
      {
        heading: "Say what not to do",
        body: [
          "Describing what you want is easy. Writing down what you keep correcting is what fixes it.",
          "Whatever it does wrong twice, write down. That single line does more than any amount of describing the good version.",
        ],
        callout: {
          tag: "How to find yours",
          body: [
            "Look back at your last few sessions. What did you have to say twice? That sentence, written into the instruction, is the highest value edit available to you today.",
          ],
        },
      },
      {
        heading: "Let it interview you",
        body: [
          "The fastest way to a good instruction is not writing one. It is being asked the right questions about a job you know well.",
          "Answering ten specific questions takes five minutes and produces something better than an hour of drafting.",
        ],
      },
    ],
    steps: [
      {
        title: "Pick the one that nearly works",
        body: [
          "Not your best one. The one you keep having to correct in the same way. A skill, a helper, or a chunk of your CLAUDE.md.",
        ],
      },
      {
        title: "Write down what you keep correcting",
        body: [
          "One line. The exact thing, in the words you would use if you were annoyed. That is your what-not-to-do line and it goes in as written.",
        ],
      },
      {
        title: "Get interviewed",
        code: {
          label: "Type this to Claude",
          code: `Here is an instruction I use. It nearly works, and the thing
I keep correcting is: [what you keep correcting].

[paste your instruction]

Interview me to fix it. One question at a time, wait for my answer.
Cover: who is doing it, exactly what should come out, what it must
never do, and when it should stop.

Then rewrite it. Keep it short.`,
        },
      },
      {
        title: "Test the failure, not the success",
        body: [
          "Anyone can test the happy path. Run it on the case that used to go wrong.",
          "That is the only test that tells you whether today was worth it.",
        ],
      },
    ],
    win: {
      beforeLabel: "Before",
      before: ["An instruction that nearly works", "The same correction, every time"],
      afterLabel: "After",
      after: ["The correction written into the instruction", "It stops happening"],
    },
    quiz: [
      {
        question: "Which of these four gets skipped most, and helps most?",
        options: [
          "Saying what it must never do",
          "Saying who is doing it",
        ],
        answer: 0,
        explanation:
          "Naming the failure you keep correcting is the line that fixes it. Describing the good version is not.",
      },
      {
        question: "Which is a better instruction?",
        options: [
          '"Do not invent progress. If a client has nothing, say so."',
          '"Be accurate and thorough."',
        ],
        answer: 0,
        explanation:
          "The specific one names the actual failure. The general one is agreeable and changes nothing.",
      },
      {
        question: "After rewriting an instruction, what should you test it on?",
        options: [
          "The case that used to go wrong",
          "A normal case, to check it still works",
        ],
        answer: 0,
        explanation:
          "The happy path already worked. Testing it again tells you nothing about whether you fixed anything.",
      },
    ],
    sheet: {
      slot: 9,
      id: "sheet-instructions",
      title: "The Instructions Sheet",
      pitch:
        "The four things, plus six templates you can adapt today.",
      contents: [
        "The four things, with a weak and strong example of each",
        "The interview prompt, ready to paste",
        "Six templates: review, summarise, research, check, convert, report",
      ],
    },
    nextTeaser: "Point it at your own notes and documents, not just code",
  },

  /* --------------------------------------------------------------- Day 27 */
  {
    day: 27,
    slug: "day-27",
    title: "Point it at your notes and documents",
    phase: 3,
    minutes: 15,
    app: "needs-app",
    promise:
      "Your own notes, meeting records and documents, searchable and usable in normal language.",
    outcome: "Your own files, searchable and usable",
    why: [
      "You have years of notes, meeting records and half-finished documents. You know the answer is in there. You cannot find it.",
      "Search only works if you remember the words you used. Most of the time you remember the situation, not the phrase.",
    ],
    sections: [
      {
        heading: "It is a folder, and that is all it needs to be",
        body: [
          "No special tool, no import, no database. Point it at a folder of text or markdown files and it can read them.",
          "If your notes live somewhere that stores plain files on disk, they already work. If they are locked inside an app, export them first.",
        ],
        table: {
          head: ["Where your notes are", "What to do"],
          rows: [
            ["Markdown or text files in a folder", "Nothing. It already works."],
            ["A notes app that syncs to files", "Point at the sync folder."],
            ["A tool with no file export", "Export what you can. Start with the last year."],
            ["Scattered across your desktop", "Move them into one folder first. That is today's real work."],
          ],
        },
      },
      {
        heading: "Three things it can do that search cannot",
        body: ["This is the reason to bother, and none of it needs any setup."],
        table: {
          head: ["Question", "Why search fails"],
          rows: [
            [
              "What did we decide about pricing, and why?",
              "The decision is in one note, the reasoning in another",
            ],
            [
              "What have I promised people that I have not done?",
              "Nobody writes the word promise",
            ],
            [
              "What is the thread running through my last ten notes?",
              "There is no phrase to search for",
            ],
          ],
        },
      },
      {
        heading: "Read only, until you trust it",
        body: [
          "Your notes are original material. Losing them is not the same as losing a file you can regenerate.",
          "For the first fortnight, let it read and write summaries to a new folder. Do not let it edit or reorganise anything you cannot replace.",
        ],
        callout: {
          tag: "Protect them properly",
          body: [
            "Your Day 8 guard already does this. Add your notes folder to the protected list and the question stops being about trust.",
          ],
        },
      },
    ],
    steps: [
      {
        title: "Get them into one folder",
        body: [
          "If they are already there, skip this. If they are scattered, this is the real work of today and it is worth doing properly.",
        ],
      },
      {
        title: "Protect them before you start",
        body: [
          "Add the folder to the protected patterns in your Day 8 guard. Two minutes, and it removes the whole category of worry.",
        ],
        code: {
          label: "In .claude/hooks/protect-files.sh",
          code: `PROTECTED_PATTERNS=(".env" "package-lock.json" ".git/" "notes/")`,
        },
      },
      {
        title: "Ask it the question search cannot answer",
        body: [
          "Start in the notes folder and ask something you have genuinely failed to find before.",
        ],
        code: {
          label: "Type this to Claude",
          code: `Read through these notes and tell me:

1. What did I decide about [the thing], and what was the reasoning?
2. Which notes did that come from?

If the notes disagree with each other, say so rather than
picking one. If you cannot find it, say that plainly.`,
        },
      },
      {
        title: "Make it a saved job",
        body: [
          "The useful version of this is not a one-off question, it is the same question every week.",
        ],
        code: {
          label: ".claude/skills/loose-ends/SKILL.md",
          code: `---
description: Finds things I said I would do and have not closed off. Use when I ask about loose ends or what I have forgotten.
---

## Instructions

Read the notes changed in the last thirty days.

Find anything that reads like a commitment: I will, we should,
next step, follow up, get back to.

For each one report:
- What was promised
- Which note, and roughly when
- Whether anything later suggests it was done

Sort by oldest first. Do not include anything clearly finished.
If you are unsure whether something is a commitment, include it
and say you are unsure.`,
        },
      },
    ],
    win: {
      beforeLabel: "Before",
      before: ["You: search for a word you cannot remember", "You: give up and ask somebody"],
      afterLabel: "After",
      after: [
        'You: "what did we decide about pricing, and why?"',
        "It: reads it all and tells you, with sources",
      ],
    },
    quiz: [
      {
        question: "What do you need to make your notes usable?",
        options: [
          "A folder of text files. Nothing else.",
          "An import, and a special tool",
        ],
        answer: 0,
        explanation:
          "If your notes are plain files on disk, they already work. The only real job is getting them into one folder.",
      },
      {
        question: "For the first fortnight, what should it be allowed to do with your notes?",
        options: [
          "Read them, and write summaries somewhere new",
          "Read and reorganise them, so they are tidier",
        ],
        answer: 0,
        explanation:
          "Notes are original material. A lost note is not like a lost generated file. Add them to your Day 8 guard and the question goes away.",
      },
      {
        question:
          "Which question is worth asking your notes, that ordinary search cannot answer?",
        options: [
          '"What have I promised people that I have not done?"',
          '"Find the note containing the word invoice"',
        ],
        answer: 0,
        explanation:
          "Nobody writes the word promise. Search needs you to remember the phrase, and usually you only remember the situation.",
      },
    ],
    nextTeaser: "Use it for work that has nothing to do with code",
  },

  /* --------------------------------------------------------------- Day 28 */
  {
    day: 28,
    slug: "day-28",
    title: "Use it for work that is not code",
    phase: 3,
    minutes: 15,
    app: "anywhere",
    promise:
      "One real task from your actual job, done end to end, with no code involved anywhere.",
    outcome: "One real non technical task done end to end",
    why: [
      "Most writing about this tool assumes you are a developer. Most people in a company are not.",
      "It does not know what a file contains until it opens it. A spreadsheet of invoices, a folder of contracts and a folder of source code are the same kind of problem to it.",
    ],
    sections: [
      {
        heading: "What it is actually good at",
        body: [
          "Strip away the code and what is left is: reading a lot of things, finding the pattern, and producing something consistent from it.",
          "That describes most of the tedious part of most office jobs.",
        ],
        table: {
          head: ["If you work in", "It can"],
          rows: [
            [
              "Finance",
              "Read a folder of invoices and find every one that does not match the agreed rate",
            ],
            [
              "Operations",
              "Turn twelve meeting notes into one status document, same shape every time",
            ],
            [
              "HR",
              "Check every job description against your own wording standards and list what differs",
            ],
            [
              "Legal or procurement",
              "Compare fifteen supplier contracts and produce a table of the terms that differ",
            ],
            [
              "Customer support",
              "Read six months of tickets and find the ten questions that keep coming back",
            ],
          ],
        },
      },
      {
        heading: "The one rule that makes it useful",
        body: [
          "Files, not screenshots. It can read what is in a folder. It cannot read your accounting system through the screen.",
          "So the first step of any non technical job is nearly always: export the thing to a folder. Once it is a folder of files, everything in these thirty days applies to it.",
        ],
        table: {
          head: ["Works well", "Does not work"],
          rows: [
            ["A folder of PDFs, spreadsheets, documents", "A web app you have to click through"],
            ["An export from your system", "A screenshot of a report"],
            ["Plain text, markdown, CSV", "Anything only your eyes can reach"],
          ],
        },
      },
      {
        heading: "Say what the output looks like",
        body: [
          "Technical work usually has an obvious right answer. Office work usually does not: it has a shape somebody expects.",
          "So describe the shape. Not summarise these contracts, but a table with one row per supplier and these five columns. Show it what good looks like and you get it back.",
        ],
        callout: {
          tag: "The check that matters",
          body: [
            "Pick three of the source files at random and verify the output against them yourself. Not the first three. Random. This is how you find out whether it understood the job or merely produced something plausible.",
          ],
        },
      },
    ],
    steps: [
      {
        title: "Pick something real and tedious",
        body: [
          "Not a demo. Something you actually did last month that took two hours and involved reading a lot of similar things.",
        ],
      },
      {
        title: "Get it into a folder",
        body: [
          "Export from wherever it lives. Ten or twenty files is plenty for a first go. Put them in one folder and start there.",
        ],
      },
      {
        title: "Describe the shape of the answer",
        body: [
          "The more precisely you describe the output, the less you will have to fix.",
        ],
        code: {
          label: "Type this to Claude",
          code: `In this folder are [what they are].

Read all of them and produce a table with one row per [thing]
and these columns:

- [column 1]
- [column 2]
- [column 3]

Rules:
- If something is missing from a file, write "not stated". Do not guess.
- Flag anything that looks inconsistent with the others.
- Do not summarise. I want the table.

Save it as summary.md.`,
        },
      },
      {
        title: "Check three at random",
        body: [
          "Open three source files at random and check the row that came from each one. Not the first three.",
          "If all three are right, you can trust the rest. If one is wrong, the instructions need fixing, not the output.",
        ],
      },
      {
        title: "Save it, so next month is five minutes",
        body: [
          "This is the step that turns two hours into five minutes forever. Same as Day 9: a folder, a `SKILL.md`, the instruction you just proved works.",
        ],
      },
    ],
    win: {
      beforeLabel: "Before",
      before: ["Two hours", "Opening the same kind of file forty times", "Every month"],
      afterLabel: "After",
      after: ["Export to a folder", "One saved job", "Five minutes, and you check three"],
    },
    quiz: [
      {
        question: "Can it read your accounting system directly?",
        options: [
          "No. Export to a folder of files first.",
          "Yes, if you show it the screen",
        ],
        answer: 0,
        explanation:
          "Files, not screens. Exporting is the first step of nearly every non technical job, and once it is a folder everything else applies.",
      },
      {
        question: "What is the most important part of the instruction for office work?",
        options: [
          "Describing exactly what the output should look like",
          "Explaining the background in detail",
        ],
        answer: 0,
        explanation:
          "There is rarely one right answer, only the shape somebody expects. Describe the shape and you get it. Leave it open and you get something plausible.",
      },
      {
        question: "You get a table of forty rows. How do you check it?",
        options: [
          "Open three source files at random and verify their rows",
          "Read the whole table carefully",
        ],
        answer: 0,
        explanation:
          "Reading the output only tells you it looks reasonable. Checking three at random against the source tells you whether it understood the job.",
      },
    ],
    nextTeaser: "Hand your whole setup to a colleague so it works on their machine",
  },

  /* --------------------------------------------------------------- Day 29 */
  {
    day: 29,
    slug: "day-29",
    title: "Give your setup to someone else",
    phase: 3,
    minutes: 12,
    app: "needs-app",
    promise:
      "Everything you built, packaged so a colleague gets it working in ten minutes without asking you anything.",
    outcome: "Your setup packaged so a colleague can use it",
    why: [
      "You have spent a month building something that works. Right now it works for exactly one person, on one machine.",
      "This is also the day that decides whether this stays your private habit or becomes how your team works.",
    ],
    sections: [
      {
        heading: "Some of it travels, some of it does not",
        body: [
          "Know which is which before you promise anybody anything.",
        ],
        table: {
          head: ["What", "Travels?", "Why"],
          rows: [
            ["`CLAUDE.md`", "Yes", "Committed with the project"],
            ["`.claude/rules/`", "Yes", "Committed"],
            ["`.claude/skills/`", "Yes", "Committed"],
            ["`.claude/agents/`", "Yes", "Committed"],
            ["`.claude/hooks/`", "Yes, with care", "Scripts commit, but may need setting up per machine"],
            ["`.claude/settings.json`", "Yes", "Committed, so hooks are wired up for everybody"],
            ["Memory", "No", "Machine local, and specific to you"],
            ["Anything in `.env`", "Never", "Each person needs their own"],
          ],
        },
      },
      {
        heading: "The three things that break on somebody else's machine",
        body: ["Every one of these is avoidable and every one of them happens."],
        table: {
          head: ["Breaks", "Fix"],
          rows: [
            [
              "A full path to your home folder",
              "Use the project variable instead of `/Users/yourname/`",
            ],
            [
              "A tool you have installed and they do not",
              "List what is needed, or check for it in the script",
            ],
            [
              "A script that is not runnable on their machine",
              "Say so in the setup notes. Windows and Mac differ here.",
            ],
          ],
        },
      },
      {
        heading: "Write the note for somebody with nothing",
        body: [
          "Assume they have not installed anything, have never used this, and will not ask you a question. They will just give up quietly.",
          "Five numbered steps. If it takes more than ten minutes, cut something.",
        ],
        callout: {
          tag: "The test that actually works",
          body: [
            "Watch one colleague follow your note without helping them. Say nothing, even when they get stuck. Every place they hesitate is a line you need to add. This takes fifteen minutes and finds things you cannot see yourself.",
          ],
        },
      },
    ],
    steps: [
      {
        title: "Check nothing personal is in there",
        body: [
          "This is the important one. Everything from Day 7 applies, and this is the moment it gets committed for everybody to see.",
        ],
        code: {
          label: "Type this to Claude",
          code: `Look at my CLAUDE.md, .claude/rules/, .claude/skills/,
.claude/agents/, .claude/hooks/ and .claude/settings.json.

Find anything that would not work on a colleague's machine:

1. Any credential or key
2. Any path specific to me, like /Users/myname/
3. Anything that assumes a tool I have installed
4. Anything specific to my machine or operating system

List each one with the file and line, and how to fix it.`,
        },
      },
      {
        title: "Fix the paths",
        body: [
          "Use the project variable instead of a full path. It works on every machine, including theirs.",
        ],
        code: {
          label: "In .claude/settings.json",
          code: `"command": "\\"$CLAUDE_PROJECT_DIR\\"/.claude/hooks/protect-files.sh"`,
        },
      },
      {
        title: "Write the setup note",
        body: [
          "Short. Numbered. Honest about how long it takes and what could go wrong.",
        ],
        code: {
          label: "SETUP.md",
          code: `# Getting set up

About ten minutes.

## What you need first
- Claude Code installed (a free Claude account does not include it)
- Git

## Steps
1. Clone this project and open a terminal in it
2. Copy \`.env.example\` to \`.env\` and fill in your own values
3. On Mac or Linux only: \`chmod +x .claude/hooks/*.sh\`
4. Run \`claude\` in the project folder
5. Type \`/context\` and check CLAUDE.md appears under Memory files

## If step 5 shows nothing
You are probably not in the project root. Check with \`pwd\`.

## What you get
- \`/review\` reviews your uncommitted changes
- \`/weekly-report\` builds the client update
- A guard that stops anything editing .env`,
        },
      },
      {
        title: "Watch somebody do it",
        body: [
          "One colleague, fifteen minutes, and you say nothing. Every hesitation is a missing line.",
          "This is uncomfortable and it is the only test that finds what you cannot see.",
        ],
      },
    ],
    win: {
      beforeLabel: "Before",
      before: ["One person has it", "Everybody else: asks you", "Or does without"],
      afterLabel: "After",
      after: ["Clone, five steps, ten minutes", "Nobody has to ask you"],
    },
    quiz: [
      {
        question: "Which of these does not travel to a colleague?",
        options: [
          "Your memory files",
          "Your `.claude/skills/` folder",
        ],
        answer: 0,
        explanation:
          "Memory is machine local and specific to you. Skills, rules, agents and CLAUDE.md all commit and travel with the project.",
      },
      {
        question:
          "Your hook uses `/Users/yourname/project/.claude/hooks/check.sh`. What happens on their machine?",
        options: [
          "It silently does nothing, because that path does not exist",
          "It works. Paths are resolved automatically.",
        ],
        answer: 0,
        explanation:
          "Use the project variable instead. A hook that quietly does not run is worse than no hook, because everybody assumes they are protected.",
      },
      {
        question: "What is the real test of your setup note?",
        options: [
          "Watch a colleague follow it while you say nothing",
          "Read it through carefully yourself",
        ],
        answer: 0,
        explanation:
          "You cannot see your own assumptions. Every place they hesitate is a line you did not know was missing.",
      },
    ],
    nextTeaser: "See the whole system in one place, and what to do next",
  },

  /* --------------------------------------------------------------- Day 30 */
  {
    day: 30,
    slug: "day-30",
    title: "Everything in one place",
    phase: 3,
    minutes: 14,
    app: "anywhere",
    promise:
      "The whole system on one page, an honest look at what you actually use, and one decision about what happens next.",
    outcome: "A full reference, and an honest self check",
    why: [
      "Thirty days ago you had nothing installed. What you have now is a system, and it is worth being able to see all of it at once.",
      "Today is a reference, a clear-out, and one decision. It is not a lesson.",
    ],
    sections: [
      {
        heading: "The whole thing, in one table",
        body: [
          "Seven kinds of thing. Every one of them does a job the others cannot.",
        ],
        table: {
          head: ["Piece", "What it is for", "Day"],
          rows: [
            ["`CLAUDE.md`", "Facts that are always true", "2"],
            ["`.claude/rules/`", "Facts true only for some files", "12"],
            ["Memory", "What it learned by itself", "4"],
            ["`.claude/skills/`", "Procedures you repeat", "9, 15, 19"],
            ["`.claude/agents/`", "Narrow jobs, with tools taken away", "21"],
            ["`.claude/hooks/`", "Things that must or must not happen", "8, 11"],
            ["Connections", "Live data behind a login", "16"],
          ],
        },
      },
      {
        heading: "Where a new thing goes",
        body: [
          "This is the question you will keep having. Four questions, in order, first yes wins.",
          "1. Must it happen, or must it never happen? A hook.",
          "2. Is it a fact that is always true? CLAUDE.md. True only for some files? A rule.",
          "3. Is it a procedure with steps? A skill.",
          "4. Is it a narrow job that should not have all the tools? An agent.",
        ],
        callout: {
          tag: "The one to get right",
          body: [
            "If something genuinely must not happen, it is a hook, not an instruction. CLAUDE.md is guidance and it is usually followed. A hook is enforcement and it always runs.",
          ],
        },
      },
      {
        heading: "Most of it you will not use",
        body: [
          "That is normal and it is not failure. A setup that does four things every day is worth more than one that does twenty things you have forgotten.",
          "Today's real work is deleting what you built and never used.",
        ],
      },
    ],
    steps: [
      {
        title: "List what you actually have",
        code: {
          label: "Terminal",
          code: `ls -R .claude/
cat CLAUDE.md | head -20`,
        },
      },
      {
        title: "Ask it what you never use",
        body: [
          "Be ready for the answer. A third of what you built has probably never been run.",
        ],
        code: {
          label: "Type this to Claude",
          code: `Look at everything in my .claude/ folder and my CLAUDE.md.

For each skill, agent, hook and rule, tell me:
1. What it does, in one line
2. Whether there is any sign I have actually used it
3. Whether it duplicates something else

Then tell me what to delete. Be blunt. Do not be encouraging.`,
        },
      },
      {
        title: "Delete it",
        body: [
          "Anything you have not used in a month. It is in your history if you ever want it back.",
          "A short setup you understand beats a long one you have to think about.",
        ],
      },
      {
        title: "Take the honest self check",
        body: [
          "Not a score. Six questions. Any you cannot answer points at the day worth revisiting.",
        ],
        code: {
          label: "Answer these yourself",
          code: `1. Which piece stops something happening, rather than asking for it?
2. Where does a fact that is only true for test files belong?
3. What is the difference between what you write and what it writes?
4. Why is an unused connection not free?
5. What does exit code 2 do?
6. What must never be in any of these files?`,
        },
      },
      {
        title: "Decide one thing",
        body: [
          "One. Either: pick the day you could not answer and redo it. Or: pick one job you still do by hand and save it.",
          "Not a plan. One thing.",
        ],
      },
    ],
    win: {
      beforeLabel: "Thirty days ago",
      before: ["Nothing installed", "Explaining yourself every session", "Copying files into a chat box"],
      afterLabel: "Now",
      after: [
        "A system that knows your project",
        "Learns from your corrections",
        "Refuses to touch what matters",
        "Runs jobs while you are asleep",
        "And a colleague can set it up in ten minutes",
      ],
    },
    quiz: [
      {
        question:
          "Something must never happen, no matter what. Where does that belong?",
        options: [
          "A hook, because it always runs",
          "CLAUDE.md, because the rule is written down",
        ],
        answer: 0,
        explanation:
          "CLAUDE.md is guidance and usually followed. A hook is enforcement and always runs. Anything that truly must not happen belongs in a hook.",
      },
      {
        question:
          "A fact that is only true when working on test files. Where does it go?",
        options: [
          "A rule in `.claude/rules/` with a path filter",
          "CLAUDE.md, with a note saying it only applies to tests",
        ],
        answer: 0,
        explanation:
          "In CLAUDE.md it loads on every session whether or not you are near a test. A path filter means it appears only when it is relevant.",
      },
      {
        question: "You built nine skills and use two. What should you do?",
        options: [
          "Delete the seven. They are in your history if you want them.",
          "Keep them all. They might be useful one day.",
        ],
        answer: 0,
        explanation:
          "A short setup you understand beats a long one you have to think about. Deleting is the real work of the last day.",
      },
    ],
    sheet: {
      slot: 10,
      id: "sheet-complete-guide",
      title: "The Complete Guide",
      pitch:
        "All thirty days as one document. Nothing to look up again.",
      contents: [
        "All thirty days, written out, in order",
        "Every command and file path in one reference section",
        "The where-does-it-go decision rules on one page",
        "A record that you finished, if you want one",
      ],
    },
    nextTeaser: "Back to the beginning, or wherever you want to go next",
  },
];

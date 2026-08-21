/**
 * Phase 1 — Get it working. Days 1 to 10.
 *
 * By Day 10 the reader has a complete, safe, working setup. Plenty stop here.
 * That is why Day 10 carries the Manager Pack: it is the commercial peak, not
 * Day 30. Completion falls away across any self-paced course, so the offer
 * belongs where the audience still is.
 *
 * Every command was checked against the official documentation. See
 * `registry.ts` for the verification stamp and the shared facts.
 */

import type { Day } from "./types";
import {
  EXIT_CODES,
  INSTALL,
  PLAN_REQUIREMENT,
  SETTINGS_PATHS,
  SYSTEM_REQUIREMENTS,
} from "./registry";

export const PHASE_1_DAYS: Day[] = [
  /* ---------------------------------------------------------------- Day 1 */
  {
    day: 1,
    slug: "day-1",
    title: "Meet Claude Code",
    phase: 1,
    minutes: 18,
    app: "anywhere",
    promise:
      "By the end of this page it is installed, logged in, and it has told you something true about your own files.",
    outcome: "A working install",
    why: [
      "A chat window can tell you what to do. It cannot open your files, change them, or run anything. You end up copying answers back and forth all day.",
      "Claude Code sits on your computer and does the work. Same conversation, but it reads the real files and makes the real changes. Everything else in these thirty days builds on this one page.",
    ],
    sections: [
      {
        heading: "It works on your files, not on copies",
        body: [
          "You do not paste anything in. You point it at a folder and ask a question in normal English. It goes and looks.",
          "You do not have to tell it which file to open either. It works that out. That is the part people are surprised by on day one.",
        ],
      },
      {
        heading: "There is more than one way to run it",
        body: [
          "Same tool, different front doors. Pick whichever you are most comfortable in. You can change later.",
        ],
        table: {
          head: ["Where", "Good for"],
          rows: [
            [
              "Desktop app",
              "Never used a terminal. Buttons and windows. Start here if the word terminal puts you off.",
            ],
            [
              "Terminal",
              "The main way most people use it. Everything works here.",
            ],
            [
              "Your code editor",
              "VS Code and JetBrains, if you already live in one.",
            ],
            ["The web", "Trying it out with nothing installed."],
          ],
        },
        callout: {
          tag: "Worth knowing now",
          body: [
            "Days 1 to 6 work anywhere. From Day 7 onward you will want it on your own computer, because those days create files and run scripts on your machine. If you only have a browser today, keep reading, then come back to those days at your own desk.",
          ],
        },
      },
      {
        heading: "It is not on the free plan",
        body: [
          `You will also need a computer from the last few years. ${SYSTEM_REQUIREMENTS}`,
        ],
        callout: {
          tag: "Before you install",
          body: [`${PLAN_REQUIREMENT.short} ${PLAN_REQUIREMENT.long}`],
        },
      },
    ],
    steps: [
      {
        title: "Check your Claude account",
        body: [
          "Open claude.ai and look at your plan. If it says Free, you will need to move up before the next step works. If you are on Pro, Max, Team or Enterprise, you are ready.",
        ],
      },
      {
        title: "Install it",
        panels: [
          {
            id: "mac",
            label: "macOS or Linux",
            body: [
              "Open Terminal and paste this one line.",
              "It downloads and sets itself up. It also keeps itself updated from then on, so this is the only time you do this.",
            ],
            code: { label: "Terminal", code: INSTALL.mac },
          },
          {
            id: "win",
            label: "Windows",
            body: [
              "Open PowerShell and paste this one line.",
              "How to tell you are in PowerShell: the line you type on starts with `PS C:\\`. If there is no `PS`, you are in Command Prompt and this line will not work. Open PowerShell instead.",
              "Optional but recommended: install Git for Windows. It gives Claude Code a better way to run commands. Without it, it uses PowerShell instead, which works but is more limited.",
            ],
            code: { label: "PowerShell", code: INSTALL.windows },
          },
          {
            id: "app",
            label: "Desktop app",
            body: [
              "If you would rather not touch a terminal at all, download the desktop app for macOS, Windows or Linux from claude.com and install it like any other program.",
              "Everything on Days 1 to 6 works this way. Some later days ask you to create small files, which is easier in the terminal, but the app can do it too.",
            ],
          },
        ],
      },
      {
        title: "Check it worked",
        body: [
          "You should get a number followed by `(Claude Code)`. If you get anything else, open the box that matches your problem below.",
        ],
        code: { label: "Terminal or PowerShell", code: INSTALL.verify },
        troubleshoot: [
          {
            summary: "It says command not found",
            body: [
              "Almost always this. Your terminal was already open when you installed, so it does not know the new command exists yet.",
              "Close the terminal completely and open a new one. Then try again. This fixes it most of the time.",
            ],
          },
          {
            summary: "Windows: the install line gave an error about &&",
            body: [
              "You are in Command Prompt, not PowerShell. Close it, open PowerShell, and run the line again.",
            ],
          },
          {
            summary: "It installed but something still feels wrong",
            body: [
              "Run this. It checks your setup and tells you what it finds, without starting anything.",
            ],
            code: { label: "Terminal or PowerShell", code: INSTALL.diagnose },
          },
        ],
      },
      {
        title: "Log in and open your first session",
        body: [
          "Go to a folder that does not matter, then start it.",
          "The first time, it opens your browser to log in. After that it remembers you. If you ever need to switch accounts, type `/login` while it is running.",
        ],
        code: { label: "Terminal or PowerShell", code: INSTALL.start },
      },
      {
        title: "Ask it something real",
        body: [
          "Not a test question. Something you would genuinely want to know.",
          "Watch what it does. You did not tell it which files to open. It went and looked. That is the whole difference from a chat window, in one answer.",
          "One more worth trying: type `/help` to see everything it can do.",
        ],
        code: {
          label: "Type this to Claude",
          code: "what is in this folder, and what is it for?",
        },
      },
    ],
    win: {
      beforeLabel: "Twenty minutes ago",
      before: [
        "You: paste a file into a chat",
        "It: gives you an answer",
        "You: paste the answer back into the file",
      ],
      afterLabel: "Now",
      after: [
        'You: "what is in this folder?"',
        "It: opens the files itself",
        "You: never touched a clipboard",
      ],
    },
    quiz: [
      {
        question: "You have a free Claude.ai account. Can you use Claude Code?",
        options: [
          "Yes, the free account covers it.",
          "No. You need Pro, Max, Team, Enterprise, or a Console account.",
        ],
        answer: 1,
        explanation:
          "This is the number one reason a first install seems to fail. It installs perfectly, then will not let you in. Day 6 covers picking the right plan.",
      },
      {
        question: "Do you have to tell it which files to look at?",
        options: [
          "No. It works out what it needs to read.",
          "Yes. You list every file first.",
        ],
        answer: 0,
        explanation:
          "You point it at a folder and ask. It decides what to open. That is the main thing that separates it from a chat window.",
      },
      {
        question:
          "You installed it, but `claude --version` says command not found. What is most likely?",
        options: [
          "The install failed and you should start again.",
          "Your terminal was open during the install and has not caught up.",
        ],
        answer: 1,
        explanation:
          "Close the terminal completely, open a new one, and try again. Reinstalling is almost never the answer, and it wastes ten minutes.",
      },
    ],
    gate: {
      question: "Did it work?",
      yesLabel: "Yes, I ran my first session",
      noLabel: "No, something went wrong",
      failTag: "Let us get you unstuck",
      failBody: [
        "Do not skip to Day 2. Nearly every failed install is one of three things. Go back up to step 3 and open the box that matches what you saw. If none of them fit, run `claude doctor` and read what it tells you.",
        "Check your plan first. Claude Code is not on the free plan.",
      ],
    },
    sheet: {
      slot: 1,
      id: "sheet-setup",
      title: "The Setup Sheet",
      pitch:
        "One page, so you stop flipping between this site and your terminal.",
      contents: [
        "Every install and check command, for all three systems",
        "The five errors behind almost every failed install, and the fix for each",
        "The handful of commands you will actually use in week one",
      ],
    },
    nextTeaser: "Stop explaining yourself at the start of every session",
  },

  /* ---------------------------------------------------------------- Day 2 */
  {
    day: 2,
    slug: "day-2",
    title: "Tell it who you are",
    term: "CLAUDE.md",
    phase: 1,
    minutes: 15,
    app: "anywhere",
    promise:
      "One small file that it reads at the start of every session, so you never explain yourself twice.",
    outcome: "An instruction file it reads every time",
    why: [
      "Every session starts blank. It does not remember yesterday. So you find yourself typing the same three sentences again: what this project is, what you care about, how you want it to answer.",
      "Write those sentences down once, in a file it reads automatically, and you never type them again.",
    ],
    sections: [
      {
        heading: "It is one plain file called CLAUDE.md",
        body: [
          "No special format. It is plain text with a few headings. It goes in the folder you work in, and it gets read at the start of every session in that folder.",
          "If you commit it to your project, your whole team gets the same instructions. That is usually what you want.",
        ],
        table: {
          head: ["Where you put it", "Who it applies to"],
          rows: [
            [
              "`./CLAUDE.md` in your project",
              "Everyone on the project. Committed and shared.",
            ],
            [
              "`~/.claude/CLAUDE.md`",
              "You, in every project on this machine.",
            ],
            [
              "`./CLAUDE.local.md`",
              "You, in this project only. Add it to `.gitignore`.",
            ],
          ],
        },
      },
      {
        heading: "What belongs in it, and what does not",
        body: [
          "Put in the things you would otherwise re-explain. Leave out anything long.",
        ],
        table: {
          head: ["Put in", "Leave out"],
          rows: [
            [
              "How to build and test this project",
              "Reference material and documentation",
            ],
            ["Conventions you always want followed", "Anything it can read from the code itself"],
            ["Where things live in the project", "Long lists that will go stale"],
            ["How you want it to talk to you", "Passwords or keys, ever"],
          ],
        },
        callout: {
          tag: "The one rule that matters",
          body: [
            "Keep it under 200 lines. This file is read at the start of every single session, so a long one costs you on every message and gets followed less closely, not more. Short and specific beats long and thorough.",
          ],
        },
      },
      {
        heading: "Be specific enough to check",
        body: [
          "Vague instructions get ignored. Concrete ones get followed. The test is whether you could tell, looking at the result, if it did what you asked.",
        ],
        table: {
          head: ["Weak", "Strong"],
          rows: [
            ['"Format code properly"', '"Use 2 space indentation"'],
            ['"Test your changes"', '"Run `npm test` before committing"'],
            ['"Keep files organised"', '"API handlers live in `src/api/handlers/`"'],
          ],
        },
      },
    ],
    steps: [
      {
        title: "Let it write the first draft",
        body: [
          "Open a session in a real project and run this. It reads your codebase and writes a starting CLAUDE.md for you, with the build commands and conventions it can work out on its own.",
          "If a CLAUDE.md already exists, it suggests improvements instead of overwriting it.",
        ],
        code: { label: "Type this to Claude", code: "/init" },
      },
      {
        title: "Add the things it could not guess",
        body: [
          "The draft covers what is visible in the code. It cannot know your preferences or your history. Add those yourself.",
          "Copy this prompt and answer honestly. Short answers are fine.",
        ],
        code: {
          label: "Type this to Claude",
          code: `Interview me to improve my CLAUDE.md. Ask me one question at a time,
and wait for my answer before the next one. Cover:

1. What this project is, in one sentence
2. Who uses it
3. What you should never do without asking me first
4. Conventions that are not obvious from the code
5. How I want you to answer me

Then rewrite CLAUDE.md. Keep it under 200 lines.`,
        },
      },
      {
        title: "Check it actually loaded",
        body: [
          "Start a fresh session and run this. Look under the heading Memory files. Your CLAUDE.md should be listed.",
          "If it is not there, it is in the wrong folder and it is doing nothing at all.",
        ],
        code: { label: "Type this to Claude", code: "/context" },
      },
      {
        title: "Prove it worked",
        body: [
          "Close the session, open a new one, and ask this without any other context.",
        ],
        code: {
          label: "Type this to Claude",
          code: "What is this project, and what are my rules for working on it?",
        },
      },
    ],
    win: {
      beforeLabel: "Every session before",
      before: [
        "You: explain the project again",
        "You: explain your conventions again",
        "You: finally ask your actual question",
      ],
      afterLabel: "Every session now",
      after: ["You: ask your actual question", "It: already knows the rest"],
    },
    quiz: [
      {
        question: "How long should your CLAUDE.md be?",
        options: [
          "As long as it needs to be. More detail is better.",
          "Under 200 lines. It is read on every single session.",
        ],
        answer: 1,
        explanation:
          "It loads at the start of every session, so length costs you every time. Longer files also get followed less closely, not more. If it is growing, that content probably belongs somewhere else.",
      },
      {
        question:
          "You want a rule that applies to you personally, in every project on your machine. Where does it go?",
        options: [
          "`./CLAUDE.md` in each project",
          "`~/.claude/CLAUDE.md`, once",
        ],
        answer: 1,
        explanation:
          "The one in your home folder applies everywhere. Project files are for things the whole team should share.",
      },
      {
        question:
          "Which of these belongs in CLAUDE.md?",
        options: [
          '"Run `npm test` before committing"',
          "Your API key, so it does not have to ask",
        ],
        answer: 0,
        explanation:
          "Never put a password or key in any of these files. Day 7 covers keeping secrets out properly. The build command is exactly the kind of thing this file is for.",
      },
    ],
    nextTeaser: "Give it a folder shape it can find its way around",
  },

  /* ---------------------------------------------------------------- Day 3 */
  {
    day: 3,
    slug: "day-3",
    title: "Organise your files",
    phase: 1,
    minutes: 12,
    app: "anywhere",
    promise:
      "A folder shape that answers most of its questions before it has to ask you.",
    outcome: "A folder shape it can navigate unaided",
    why: [
      "Yesterday you told it the rules. Today you show it where things are. Structure does a job instructions cannot: it is always true, and it costs nothing to read.",
      "A folder called `01_Active` tells it more than a paragraph explaining which work is current.",
    ],
    sections: [
      {
        heading: "Structure beats instructions",
        body: [
          "You can write \"client work in progress lives in the clients folder, but only the ones we are still working on\". Or you can have a folder called `Active`. The second one never goes out of date and never gets misread.",
          "Every minute you spend on the shape is a minute you do not spend explaining it.",
        ],
      },
      {
        heading: "A simple shape that works for most people",
        body: [
          "Four buckets. Anything you have can go in exactly one of them, and where it goes is obvious.",
        ],
        table: {
          head: ["Folder", "What goes in it"],
          rows: [
            ["`00_Inbox`", "Anything not sorted yet. Empty it weekly."],
            ["`01_Active`", "Work you are doing right now. Should be short."],
            ["`02_Reference`", "Things you look up but do not work on."],
            ["`03_Archive`", "Finished. Kept, not touched."],
          ],
        },
        callout: {
          tag: "Do not copy this blindly",
          body: [
            "This shape is a starting point, not a rule. If your work has three obvious buckets, use three. The point is that the names describe your actual work, not somebody else's system.",
          ],
        },
      },
      {
        heading: "One line per folder does the rest",
        body: [
          "Put a short `README.md` in each folder saying what belongs there. It costs you four sentences and it removes almost all the remaining guesswork.",
          "This also helps the humans. That is not a side effect, it is the point.",
        ],
      },
    ],
    steps: [
      {
        title: "Let it look before it moves anything",
        body: [
          "Do not start by creating folders. Start by asking what shape your work is already in.",
        ],
        code: {
          label: "Type this to Claude",
          code: `Look at this folder and tell me:
1. What kinds of things are in here
2. What is active versus finished
3. Three folder structures that would fit, with the trade-off of each

Do not create or move anything yet.`,
        },
      },
      {
        title: "Pick one and let it build the shape",
        body: [
          "Choose the option that matches how you actually work, not the one that looks tidiest.",
        ],
        code: {
          label: "Type this to Claude",
          code: `Create option 2. For each folder, add a README.md with one
line saying what belongs there. Do not move any existing files yet,
just create the structure.`,
        },
      },
      {
        title: "Move things in small batches",
        body: [
          "Never let it reorganise everything in one go. You will not be able to tell what happened.",
        ],
        code: {
          label: "Type this to Claude",
          code: `Move only the files that clearly belong in 03_Archive.
List what you are moving and why, and wait for me to say go.`,
        },
      },
      {
        title: "Test that the shape works",
        body: [
          "The real test is whether it can now find something without you pointing at it. Ask about something you know is buried.",
        ],
        code: {
          label: "Type this to Claude",
          code: "Find everything related to [something you worked on months ago] and summarise where it got to.",
        },
      },
    ],
    win: {
      beforeLabel: "Before",
      before: [
        'You: "the file is in the second folder"',
        'You: "no, the other second folder"',
      ],
      afterLabel: "After",
      after: [
        'You: "what happened with that project?"',
        "It: finds it, reads it, tells you",
      ],
    },
    quiz: [
      {
        question: "Why does a folder called `01_Active` beat a written rule about active work?",
        options: [
          "It is shorter to type.",
          "It is always true, and it cannot be misread or go stale.",
        ],
        answer: 1,
        explanation:
          "Written rules drift out of date the moment the work changes. A folder name changes when you move the file, which you were doing anyway.",
      },
      {
        question: "It offers to reorganise your whole folder in one go. Should you let it?",
        options: [
          "No. Move things in small batches you can check.",
          "Yes. It is faster and it knows the structure.",
        ],
        answer: 0,
        explanation:
          "A hundred moves at once is impossible to review, and hard to undo. Small batches keep you in control and cost almost nothing extra.",
      },
      {
        question: "What goes in the README inside each folder?",
        options: [
          "A full description of every file in it",
          "One line saying what belongs there",
        ],
        answer: 1,
        explanation:
          "A list of files goes stale immediately. A line about what belongs there stays true, and it is the bit that actually helps.",
      },
    ],
    nextTeaser: "Make it remember what you told it last week",
  },

  /* ---------------------------------------------------------------- Day 4 */
  {
    day: 4,
    slug: "day-4",
    title: "Make it remember",
    term: "memory",
    phase: 1,
    minutes: 12,
    app: "anywhere",
    promise:
      "It starts writing its own notes, so the same correction never has to be made twice.",
    outcome: "Facts that survive between sessions",
    why: [
      "CLAUDE.md is what you tell it. Memory is what it works out for itself. When you correct it, or it discovers how your build works, it writes that down and reads it back tomorrow.",
      "It is on by default, so today is mostly about seeing what it has saved and taking control of it.",
    ],
    sections: [
      {
        heading: "Two systems, and they do different jobs",
        body: [
          "It is easy to confuse these. The difference is simply who does the writing.",
        ],
        table: {
          head: ["", "CLAUDE.md", "Memory"],
          rows: [
            ["Who writes it", "You", "It does"],
            ["What is in it", "Rules and instructions", "Things it has learned"],
            ["Good for", "How you want it to behave", "Corrections, build commands, habits"],
          ],
        },
      },
      {
        heading: "Where the notes live",
        body: [
          "Each project gets its own folder of notes on your machine. There is one index file, `MEMORY.md`, that is read at the start of every session, plus topic files it reads only when it needs them.",
          "That split matters: the index stays short, and the detail costs you nothing until it is used.",
        ],
        callout: {
          tag: "It is just text",
          body: [
            "These are plain markdown files. You can open them, edit them, or delete anything that is wrong. Nothing is hidden and nothing is locked.",
          ],
        },
      },
      {
        heading: "What must never go in",
        body: [
          "Memory is a file on your disk, and files get copied, backed up and shared. Treat it as if somebody else will read it one day.",
          "No passwords. No keys. No client data you would not email. Day 7 is entirely about keeping that boundary.",
        ],
      },
    ],
    steps: [
      {
        title: "See what it already knows",
        body: [
          "This opens a list of every memory file, and lets you open any of them. Have a look at what it has been writing about you.",
        ],
        code: { label: "Type this to Claude", code: "/memory" },
      },
      {
        title: "Teach it something on purpose",
        body: [
          "Say it in normal words. It decides this is worth keeping and writes it down.",
        ],
        code: {
          label: "Type this to Claude",
          code: "Remember that we use pnpm on this project, never npm.",
        },
      },
      {
        title: "Check it stuck",
        body: [
          "Close the session completely. Open a new one in the same folder. Then ask.",
          "If it knows, memory is doing its job. If it does not, run `/memory` and check the file was actually written.",
        ],
        code: {
          label: "Type this to Claude",
          code: "Which package manager do we use here?",
        },
      },
      {
        title: "Clean out anything wrong",
        body: [
          "A wrong memory is worse than none. It gets repeated confidently, for months.",
          "Open `/memory`, read what is there, and delete anything that is out of date.",
        ],
      },
    ],
    win: {
      beforeLabel: "Before",
      before: [
        "You: correct the same thing on Monday",
        "You: correct it again on Thursday",
      ],
      afterLabel: "After",
      after: ["You: correct it once", "It: writes it down and stops doing it"],
    },
    quiz: [
      {
        question: "Who writes memory files?",
        options: [
          "You do, by hand",
          "It does, based on what it learns from you",
        ],
        answer: 1,
        explanation:
          "That is the whole difference from CLAUDE.md. You write the rules, it writes the learnings.",
      },
      {
        question: "It remembered something wrong. What should you do?",
        options: [
          "Open `/memory` and delete or fix that file",
          "Nothing. It will correct itself over time.",
        ],
        answer: 0,
        explanation:
          "A wrong memory is worse than none, because it gets repeated confidently. These are plain text files, so fixing one takes seconds.",
      },
      {
        question: "Is memory a safe place for an API key?",
        options: [
          "No. Never. It is a plain file on your disk.",
          "Yes, it is stored locally so it is private.",
        ],
        answer: 0,
        explanation:
          "Local does not mean safe. Files get backed up, synced and copied. Day 7 covers where secrets actually belong.",
      },
    ],
    nextTeaser: "Know which tool to reach for, and stop using the heavy one for everything",
  },

  /* ---------------------------------------------------------------- Day 5 */
  {
    day: 5,
    slug: "day-5",
    title: "Which tool for which job",
    phase: 1,
    minutes: 10,
    app: "anywhere",
    promise:
      "A rule you can apply in two seconds, so you stop reaching for the wrong thing.",
    outcome: "A decision rule you can apply",
    why: [
      "Four days in, the temptation is to use Claude Code for everything. That is a mistake in both directions: it is overkill for a quick question, and a chat window is useless for a job across twelve files.",
      "Ten minutes now saves you the slow annoyance of using the wrong tool every day for a year.",
    ],
    sections: [
      {
        heading: "Three kinds of work",
        body: [
          "Almost everything you do falls into one of these. Once you can name which one you are in, the tool picks itself.",
        ],
        table: {
          head: ["Kind", "What it looks like", "Reach for"],
          rows: [
            [
              "Asking",
              "A question. You want an answer, not a change.",
              "A chat window",
            ],
            [
              "Building",
              "Real files need to change. More than one of them.",
              "Claude Code",
            ],
            [
              "Repeating",
              "The same thing, on a schedule, without you.",
              "Claude Code with a saved job",
            ],
          ],
        },
      },
      {
        heading: "The two mistakes",
        body: [
          "Both are common and both are quiet. Nothing breaks, you are just slower than you need to be.",
        ],
        table: {
          head: ["Mistake", "What it feels like"],
          rows: [
            [
              "Heavy tool, light job",
              "Opening a terminal and waiting, to ask something you could have typed into a chat box.",
            ],
            [
              "Light tool, heavy job",
              "Copying file after file into a chat window and pasting the answers back by hand.",
            ],
          ],
        },
      },
      {
        heading: "Three questions that decide it",
        body: [
          "Ask them in order and stop at the first yes.",
          "1. Does anything on my disk need to change? If no, use a chat window.",
          "2. Will I want this again next week? If yes, it should be a saved job. That is Day 9.",
          "3. Does it need to happen without me there? If yes, that is Phase 3.",
        ],
      },
    ],
    steps: [
      {
        title: "List what you actually repeat",
        body: [
          "Not what you think you should do. What you did last week.",
          "Write down five tasks. Real ones, with names.",
        ],
      },
      {
        title: "Sort them",
        body: ["Put each one into asking, building, or repeating."],
        code: {
          label: "Type this to Claude",
          code: `Here are five things I do regularly:
1. ...
2. ...
3. ...
4. ...
5. ...

For each one tell me: is it asking, building, or repeating?
Then tell me which single one would save me the most time if I
automated it, and why. Be blunt if some of them are not worth it.`,
        },
      },
      {
        title: "Keep the answer",
        body: [
          "Whichever one comes top is what you will build on Day 9. Write it down somewhere you will find it.",
        ],
      },
    ],
    win: {
      beforeLabel: "Before",
      before: [
        "Every task: open the same tool",
        "Some of them: much slower than needed",
      ],
      afterLabel: "After",
      after: ["Three questions", "The right tool, first time"],
    },
    quiz: [
      {
        question:
          "You want to know what a piece of jargon means. Nothing on your disk needs to change. Which tool?",
        options: ["A chat window", "Claude Code"],
        answer: 0,
        explanation:
          "Nothing needs to change, so the heavy tool buys you nothing. Opening a terminal for this is the most common quiet waste of time.",
      },
      {
        question:
          "You need to rename the same thing across twelve files. Which tool?",
        options: [
          "A chat window, one file at a time",
          "Claude Code, which opens the files itself",
        ],
        answer: 1,
        explanation:
          "This is what it is for. Twelve copy and pastes is not just slower, it is where mistakes come from.",
      },
      {
        question:
          "You do the same report every Monday. What does that tell you?",
        options: [
          "It should become a saved job",
          "Nothing. Just do it each week.",
        ],
        answer: 0,
        explanation:
          "Anything you will want again next week is worth saving. That is Day 9, and it is the highest value hour in Phase 1.",
      },
    ],
    sheet: {
      slot: 2,
      id: "sheet-which-tool",
      title: "The Tool Picker",
      pitch:
        "One page. Stop opening the wrong tool.",
      contents: [
        "The three questions, in order, with what each answer means",
        "A side by side of every tool and what it is genuinely best at",
        "The two mistakes, and how to notice you are making them",
      ],
    },
    nextTeaser: "Pick the right plan, and know the one signal that means upgrade",
  },

  /* ---------------------------------------------------------------- Day 6 */
  {
    day: 6,
    slug: "day-6",
    // The Day 6 tool. See cost-tool.tsx: it prints no price of ours, only
    // the numbers the reader types in.
    tool: "cost",
    title: "Plans and what it costs",
    phase: 1,
    minutes: 8,
    app: "anywhere",
    promise:
      "The right plan chosen for a reason you could explain to your finance team.",
    outcome: "The right plan, picked with a reason",
    why: [
      "Day 1 told you the free plan does not include Claude Code. Today is about which paid one you actually need, and how to tell when you have outgrown it.",
      "Start too high and you overpay. Start too low and you get stopped mid task.",
    ],
    sections: [
      {
        heading: "Start low on purpose",
        body: [
          "Start on the cheapest paid tier that includes Claude Code. Use it properly for two weeks. Then decide.",
          "You cannot guess your usage before you have any. Nobody can. Two weeks of real work tells you more than any calculator.",
        ],
        callout: {
          tag: "Why prices are not printed here",
          body: [
            "Plans and prices change. Anything we printed on this page would quietly go stale and mislead you. The current tiers and limits are on our pricing page, and every cheat sheet on this site links there rather than copying the numbers in.",
          ],
        },
      },
      {
        heading: "The one signal that means upgrade",
        body: [
          "There is only one that counts: you are being stopped, repeatedly, in the middle of real work.",
          "Not that you might be stopped. Not that a bigger tier sounds better. That you were actually interrupted, more than once, doing something that mattered.",
        ],
        table: {
          head: ["Real signal", "Misleading signal"],
          rows: [
            [
              "You hit a limit twice this week, mid task",
              '"The higher tier includes more, so it must be better value"',
            ],
            [
              "You are working around it by splitting jobs up",
              "Somebody else on a bigger plan says it is worth it",
            ],
            [
              "The interruption cost you more than the difference in price",
              "You want to try a feature once",
            ],
          ],
        },
      },
      {
        heading: "Cost is mostly a setup problem, not a plan problem",
        body: [
          "Before you pay more, it is worth knowing that a lot of usage is wasted on things you do not need loaded. Day 13 measures where yours goes and Day 14 cuts it.",
          "Plenty of people who thought they needed a bigger plan did not, once they stopped loading everything into every session.",
        ],
      },
    ],
    steps: [
      {
        title: "Work out roughly how you will use it",
        body: [
          "Not exactly. Roughly. Two numbers: how many days a week you will use it, and whether your typical job is one file or many.",
        ],
      },
      {
        title: "Pick the lowest tier that fits",
        body: [
          "Open our pricing page, pick the cheapest paid tier that includes Claude Code, and start there.",
        ],
      },
      {
        title: "Write down why, with a date",
        body: [
          "This is the step that saves the argument in three months. One sentence in your CLAUDE.md or your notes.",
        ],
        code: {
          label: "Add a line like this to your notes",
          code: `Plan: chose the entry tier on [today's date].
Reason: mostly single file work, three days a week.
Revisit if: I get interrupted by limits twice in one week.`,
        },
      },
    ],
    win: {
      beforeLabel: "Before",
      before: ["A guess", "No idea when to change it"],
      afterLabel: "After",
      after: ["A tier, chosen for a reason", "A written trigger to revisit"],
    },
    quiz: [
      {
        question: "You are new. Which tier should you start on?",
        options: [
          "The lowest paid one that includes Claude Code",
          "The biggest, so you never hit a limit",
        ],
        answer: 0,
        explanation:
          "You cannot estimate usage you do not have yet. Two weeks of real work tells you more than any guess, and moving up later is easy.",
      },
      {
        question: "Which of these genuinely means you should upgrade?",
        options: [
          "A bigger plan includes more things",
          "You were interrupted mid task, twice, this week",
        ],
        answer: 1,
        explanation:
          "Being actually stopped during real work is the only signal that counts. Everything else is a feeling, and feelings are expensive here.",
      },
      {
        question: "Why does this page not list the prices?",
        options: [
          "They change, so a printed number here would go stale and mislead you",
          "Because they are secret",
        ],
        answer: 0,
        explanation:
          "Same reason no cheat sheet on this site prints them. A number in a PDF in your inbox cannot be corrected. A link can.",
      },
    ],
    nextTeaser: "Make sure it can never touch your passwords",
  },
  /* ---------------------------------------------------------------- Day 7 */
  {
    day: 7,
    slug: "day-7",
    title: "Keep your passwords safe",
    phase: 1,
    minutes: 12,
    app: "needs-app",
    promise:
      "Nothing sensitive exposed, and a check you can run again in thirty seconds any time.",
    outcome: "Nothing sensitive left exposed",
    why: [
      "You have now given something the ability to read every file in your project. That is the point, and it is also the risk. Most leaks are not dramatic. A key ends up in a file, the file ends up in a commit, and the commit ends up public.",
      "Twelve minutes today and the whole category of accident stops being possible.",
    ],
    sections: [
      {
        heading: "The three ways a key gets out",
        body: [
          "Almost every real leak is one of these. None of them require anybody to do anything stupid.",
        ],
        table: {
          head: ["How", "What it looks like"],
          rows: [
            [
              "Committed by accident",
              "A `.env` file that was never in `.gitignore`, pushed with everything else.",
            ],
            [
              "Written into a note",
              "A key pasted into a README, an instruction file, or a memory note, to save looking it up.",
            ],
            [
              "Already out, still live",
              "A key that leaked months ago, was deleted from the current version, and still works.",
            ],
          ],
        },
      },
      {
        heading: "Deleting is not fixing",
        body: [
          "Removing a key from the current version of a file does nothing. The old version is still in the history, and anybody who cloned it already has it.",
          "There is only one fix once a key has been exposed: make the old one stop working. Rotate it. Everything else is tidying up.",
        ],
        callout: {
          tag: "The rule that covers almost everything",
          body: [
            "Secrets live in a `.env` file, and `.env` is in `.gitignore`. Nothing else on your machine contains the actual value. Not your instruction file, not a note, not a comment.",
          ],
        },
      },
      {
        heading: "Where it should never go",
        body: [
          "You have created two files this week that feel private and are not. Both are plain text on your disk, and both get backed up, synced and sometimes committed.",
        ],
        table: {
          head: ["Safe to write there", "Never write there"],
          rows: [
            ["`CLAUDE.md`: which env var a key is read from", "`CLAUDE.md`: the key itself"],
            ["Memory: that this project uses Stripe", "Memory: the Stripe key"],
            ["A README: how to get your own key", "A README: your key, for convenience"],
          ],
        },
      },
    ],
    steps: [
      {
        title: "Cover the obvious files",
        body: [
          "If you already have a `.gitignore`, check these lines are in it. If you do not, create one.",
        ],
        code: {
          label: ".gitignore",
          code: `.env
.env.local
.env.*.local
*.pem
*.key`,
        },
      },
      {
        title: "Check nothing is tracked already",
        body: [
          "This lists any file git is currently watching that looks like a secret. You want no output at all.",
          "If something comes back, git is already tracking it. Stop and deal with that before anything else.",
        ],
        code: {
          label: "Terminal",
          code: `git ls-files | grep -E "\\.env|\\.pem$|\\.key$"`,
        },
      },
      {
        title: "Look through your own history",
        body: [
          "Let it do the reading. This is exactly the kind of job it is good at, and it is faster than you.",
        ],
        code: {
          label: "Type this to Claude",
          code: `Search this project for anything that looks like a credential:
API keys, tokens, passwords, private keys, connection strings.

Check the tracked files and also the git history, not just the
current version. List what you find with the file and line.
Do not print the full value of anything, just enough to identify it.`,
        },
      },
      {
        title: "Rotate anything that was exposed",
        body: [
          "For each thing found: go to wherever it came from, create a new one, put the new one in `.env`, and delete the old one at the source.",
          "Deleting the old one at the source is the step that matters. Until you do that, it still works.",
        ],
      },
      {
        title: "Check your own notes",
        body: [
          "Open your memory files and your CLAUDE.md and read them. You are looking for anything you pasted in to save time.",
        ],
        code: { label: "Type this to Claude", code: "/memory" },
      },
    ],
    win: {
      beforeLabel: "Before",
      before: [
        "Secrets: in a few places",
        "If one leaked: you would not know",
      ],
      afterLabel: "After",
      after: [
        "Secrets: one file, ignored by git",
        "A thirty second check you can run again",
      ],
    },
    quiz: [
      {
        question:
          "You find an API key in an old commit. You delete it from the current file. Is it safe?",
        options: [
          "Yes. It is not in the file any more.",
          "No. It is still in the history and it still works. Rotate it.",
        ],
        answer: 1,
        explanation:
          "The old version stays in the history, and anybody who cloned the project already has it. Making the old key stop working is the only real fix.",
      },
      {
        question: "Where should the actual value of a key live?",
        options: [
          "In a `.env` file that is listed in `.gitignore`",
          "In your CLAUDE.md, so it does not have to ask you",
        ],
        answer: 0,
        explanation:
          "CLAUDE.md is plain text that usually gets committed and shared with your whole team. It can say which env var to read. It must never hold the value.",
      },
      {
        question: "Is it safe to keep a key in a memory file, since it is local?",
        options: [
          "No. Local files get backed up, synced and copied.",
          "Yes, memory files never leave your machine.",
        ],
        answer: 0,
        explanation:
          "Local is not the same as private. Treat every file on your disk as something somebody else might read one day.",
      },
    ],
    nextTeaser: "Stop it touching the files you cannot afford to lose",
  },

  /* ---------------------------------------------------------------- Day 8 */
  {
    day: 8,
    slug: "day-8",
    title: "Safety guards",
    term: "hooks",
    phase: 1,
    minutes: 12,
    app: "needs-app",
    promise:
      "Stop it touching the files you cannot afford to lose, and make it explain itself when it tries.",
    outcome: "One guard, working, tested on purpose",
    why: [
      "Yesterday you moved your secrets somewhere safe. Today you stop anything from touching them at all, even by accident.",
      "A guard is a small script that runs before an action and can stop it. Ten minutes now, and the accident you are most worried about stops being possible.",
    ],
    sections: [
      {
        heading: "A guard is just a script, and you choose when it runs",
        body: [
          "You tell it one thing: before you edit a file, run my script first. Your script is told what is about to happen. It answers one of two ways. Fine, or no.",
          "The moment you pick is called an event. The one you want today is `PreToolUse`, which means before a tool runs.",
        ],
      },
      {
        heading: "The script answers with a number",
        body: [
          "Scripts do not reply in sentences. They reply with a number, called an exit code. Only two of them matter here.",
          "That last part is the useful bit. You are not only blocking. You are telling it why, so it can try a different way instead of just stopping.",
        ],
        table: { head: [...EXIT_CODES.head], rows: EXIT_CODES.rows.map((r) => [...r]) },
      },
      {
        heading: "Guards worth having",
        body: [
          "Start with one. The protective one below is the one worth keeping.",
        ],
        table: {
          head: ["Guard", "Runs", "Does"],
          rows: [
            [
              "Protect files",
              "Before an edit",
              "Refuses to touch `.env`, lockfiles, and anything in `.git/`",
            ],
            [
              "Log changes",
              "After an edit",
              "Writes every changed file into a log you can read later",
            ],
            ["Tidy up", "After an edit", "Runs your formatter so nothing lands messy"],
            [
              "Tell me",
              "When it is waiting",
              "Pings you, so you do not sit watching the screen",
            ],
          ],
        },
      },
    ],
    steps: [
      {
        title: "Make the script",
        body: [
          `Save this as \`${SETTINGS_PATHS.hooksDir}/protect-files.sh\` inside your project.`,
          "Read the last four lines and you have understood guards. If the file is on the list, print why and `exit 2`. If it is not, `exit 0` and get out of the way.",
        ],
        code: {
          label: `${SETTINGS_PATHS.hooksDir}/protect-files.sh`,
          code: `#!/bin/bash

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

# Windows paths use \\ so swap them, or the patterns below will not match
FILE_PATH="\${FILE_PATH//\\\\//}"

PROTECTED_PATTERNS=(".env" "package-lock.json" ".git/")

for pattern in "\${PROTECTED_PATTERNS[@]}"; do
  if [[ "$FILE_PATH" == *"$pattern"* ]]; then
    echo "Blocked: $FILE_PATH matches protected pattern '$pattern'" >&2
    exit 2
  fi
done

exit 0`,
        },
      },
      {
        title: "Let your computer run it",
        panels: [
          {
            id: "mac",
            label: "macOS or Linux",
            body: ["A new script is not allowed to run until you say so. One command does it:"],
            code: {
              label: "Terminal",
              code: "chmod +x .claude/hooks/protect-files.sh",
            },
          },
          {
            id: "win",
            label: "Windows",
            body: [
              "Windows does not have this permission, so there is nothing to run here. Skip to the next step.",
              "One thing to check first. The script is written in Bash, and Windows cannot read Bash on its own. You need Git for Windows, which includes Git Bash. If `git --version` works in your terminal, you already have it.",
            ],
          },
        ],
      },
      {
        title: "Switch it on",
        body: [
          `Open \`${SETTINGS_PATHS.project}\` in your project. Create it if it is not there, then add this.`,
          "`matcher` is the filter. `\"Edit|Write\"` means the guard only runs when it edits or writes a file. Not when it reads one. Not when it runs a command.",
        ],
        code: {
          label: SETTINGS_PATHS.project,
          code: `{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "\\"$CLAUDE_PROJECT_DIR\\"/.claude/hooks/protect-files.sh"
          }
        ]
      }
    ]
  }
}`,
        },
      },
      {
        title: "Check it registered",
        body: [
          "In a session, type this. You will see a list of events with a count beside each one. `PreToolUse` should now show 1.",
          "That screen only shows you what is registered. You cannot edit from there. Changes always go in the settings file.",
        ],
        code: { label: "Type this to Claude", code: "/hooks" },
      },
      {
        title: "Break it on purpose",
        body: [
          "This is the only test that counts.",
          "It should refuse, and tell you which rule stopped it. If it edits the file instead, the guard is not wired up. Check that the path in your settings file matches where you actually saved the script.",
        ],
        code: {
          label: "Type this to Claude",
          code: "Add a comment to the top of my .env file",
        },
      },
    ],
    win: {
      beforeLabel: "Ten minutes ago",
      before: [
        'You: "clean up the config files"',
        "It: edits `.env`",
        "You: find out on Thursday",
      ],
      afterLabel: "Now",
      after: [
        'You: "clean up the config files"',
        "It: Blocked, .env is protected",
        "It: asks you first",
      ],
    },
    quiz: [
      {
        question: "Your guard script ends with exit 0. Has it approved the edit?",
        options: [
          "Yes. The edit is approved and goes ahead.",
          "No. It only means the guard has nothing to say.",
        ],
        answer: 1,
        explanation:
          "0 means no objection, not yes. The normal permission rules still run after your guard. Only 2 actually stops something.",
      },
      {
        question:
          'Your script prints "Blocked: .env is protected". Who reads that message?',
        options: [
          "Only you, later, in a log file.",
          "Claude gets it back, and can try another way.",
          "Nobody. It is thrown away.",
        ],
        answer: 1,
        explanation:
          "This is why your message should say why you blocked it. A good message lets it fix its own approach instead of just stopping.",
      },
      {
        question:
          "Your guard uses the matcher Edit and Write. A shell command changes a file. Does the guard fire?",
        options: [
          "Yes. Any change to any file sets it off.",
          "No. That matcher only covers the Edit and Write tools.",
        ],
        answer: 1,
        explanation:
          "A file changed by a shell command walks straight past your guard. Day 11 shows you how to catch those too.",
      },
    ],
    sheet: {
      slot: 3,
      id: "sheet-hooks",
      title: "The Hooks Cheat Sheet",
      pitch:
        "Six guards you can paste in today, plus the full event list.",
      contents: [
        "All the events in plain English on one side",
        "Six ready made guards on the other",
        "The three mistakes that stop a guard from firing at all",
      ],
    },
    nextTeaser: "Stop re-explaining the same task every single time",
  },

  /* ---------------------------------------------------------------- Day 9 */
  {
    day: 9,
    slug: "day-9",
    title: "Your first saved job",
    term: "skills",
    phase: 1,
    minutes: 15,
    app: "needs-app",
    promise:
      "One thing you do often, turned into one word you type.",
    outcome: "One task you can trigger by name",
    why: [
      "On Day 5 you found the one task worth automating first. Today you build it.",
      "Right now, every time you want that job done you type the same paragraph of instructions. A saved job holds those instructions in a file. You type one word instead.",
    ],
    sections: [
      {
        heading: "It is a folder with one file in it",
        body: [
          "A saved job, called a skill, is a folder with a `SKILL.md` inside. The folder name becomes the word you type.",
          "A folder called `weekly-report` gives you `/weekly-report`. That is the whole naming rule.",
        ],
        table: {
          head: ["Where you put it", "Where it works"],
          rows: [
            ["`.claude/skills/name/SKILL.md`", "This project. Committed and shared with your team."],
            ["`~/.claude/skills/name/SKILL.md`", "You, in every project on this machine."],
          ],
        },
      },
      {
        heading: "It only loads when it is used",
        body: [
          "This is the part that makes skills better than a long instruction file. Your CLAUDE.md is read at the start of every session, so everything in it costs you every time.",
          "A skill costs nothing until you use it. That means a long, detailed procedure is fine in a skill and wrong in CLAUDE.md.",
        ],
        callout: {
          tag: "The rule for where things go",
          body: [
            "A fact that is always true goes in CLAUDE.md. A procedure with steps goes in a skill. If a section of your CLAUDE.md has turned into a list of steps, that is the signal to move it.",
          ],
        },
      },
      {
        heading: "Pick the boring one first",
        body: [
          "The temptation is to build the impressive one. Build the boring one you do every week instead.",
          "Value is frequency times annoyance. Something dull you do every Monday beats something clever you do twice a year.",
        ],
      },
    ],
    steps: [
      {
        title: "Make the folder",
        body: [
          "Name it after what it does, in words you would actually type. This is a project skill, so your team gets it too.",
        ],
        code: {
          label: "Terminal",
          code: "mkdir -p .claude/skills/weekly-report",
        },
      },
      {
        title: "Write the file",
        body: [
          "The `description` line is important. It is how it decides to offer the skill when you did not ask for it by name. Say when it should be used, not just what it is.",
        ],
        code: {
          label: ".claude/skills/weekly-report/SKILL.md",
          code: `---
description: Builds this week's client update from the notes in 01_Active. Use when I ask for the weekly report or the client update.
---

## Instructions

1. Read every file changed in 01_Active in the last seven days.
2. Group what you find by client.
3. For each client write, in this order:
   - What moved this week, in one sentence
   - Anything blocked, and who it is waiting on
   - What happens next week
4. Keep the whole thing under one page.
5. Flag anything that has not moved in two weeks.

Do not invent progress. If a client has nothing, say so plainly.`,
        },
      },
      {
        title: "Run it on real work",
        body: [
          "Not on a test folder. On the actual thing, this week.",
          "It will be wrong in small ways the first time. That is expected and it is the point of the next step.",
        ],
        code: { label: "Type this to Claude", code: "/weekly-report" },
      },
      {
        title: "Fix the file, not the output",
        body: [
          "This is the habit that matters. When the result is not right, do not correct it in the chat. Go back and change the instructions.",
          "Correcting the chat fixes it once. Correcting the file fixes it forever.",
        ],
      },
    ],
    win: {
      beforeLabel: "Every week before",
      before: [
        "You: type the same paragraph of instructions",
        "You: correct the same two things",
      ],
      afterLabel: "Every week now",
      after: ["You: `/weekly-report`", "It: already knows the two things"],
    },
    quiz: [
      {
        question: "Where does a skill for your whole team live?",
        options: [
          "`.claude/skills/name/SKILL.md` in the project",
          "`~/.claude/skills/name/SKILL.md` in your home folder",
        ],
        answer: 0,
        explanation:
          "The project folder gets committed, so everybody gets it. The home folder one is yours alone, across all your projects.",
      },
      {
        question:
          "A long, detailed procedure. Does it belong in CLAUDE.md or in a skill?",
        options: [
          "CLAUDE.md, so it is always available",
          "A skill, because it only loads when it is used",
        ],
        answer: 1,
        explanation:
          "CLAUDE.md is read at the start of every session, so length costs you every time. A skill costs nothing until you invoke it.",
      },
      {
        question: "The output was not quite right. What do you do?",
        options: [
          "Edit the SKILL.md so it is right next time too",
          "Tell it in the chat what to change",
        ],
        answer: 0,
        explanation:
          "Correcting the chat fixes it once. Correcting the file fixes it every time from now on. That is the whole point of saving the job.",
      },
    ],
    nextTeaser: "See everything you have built, and choose where to go next",
  },

  /* --------------------------------------------------------------- Day 10 */
  {
    day: 10,
    slug: "day-10",
    title: "Your setup so far",
    phase: 1,
    minutes: 12,
    app: "anywhere",
    promise:
      "A working system you understand, and a clear idea of which of the next twenty days are worth your time.",
    outcome: "A working system, and a path to pick next",
    why: [
      "Nine days ago you had nothing installed. You now have a setup that knows your project, remembers your corrections, protects your files and does one job on command.",
      "Today is not a new lesson. It is checking the pieces still work, and deciding what happens next.",
    ],
    sections: [
      {
        heading: "What you actually built",
        body: [
          "Six pieces. Each one does a different job, and it helps to be able to say which is which.",
        ],
        table: {
          head: ["Piece", "Its job", "Day"],
          rows: [
            ["`CLAUDE.md`", "Rules you wrote", "2"],
            ["Folder structure", "Where things are, without explaining", "3"],
            ["Memory", "What it learned by itself", "4"],
            ["Your plan", "What it costs, and when to change", "6"],
            ["`.env` and `.gitignore`", "Secrets kept out", "7"],
            ["A guard", "Things it must never touch", "8"],
            ["A saved job", "One task, one word", "9"],
          ],
        },
      },
      {
        heading: "Stopping here is a real option",
        body: [
          "This is a complete setup. If you never read another page on this site, what you have will keep paying for itself.",
          "The next twenty days are not more of the same. They are for people who now want it shaped around their work, and then running without them watching.",
        ],
      },
      {
        heading: "What the next twenty days are for",
        body: [
          "Two phases, with two different promises. Pick based on which sentence sounds more like your problem.",
        ],
        table: {
          head: ["Phase", "Days", "The promise"],
          rows: [
            [
              "Make it yours",
              "11 to 20",
              "It fits your work, costs less, and connects to the other tools you use.",
            ],
            [
              "Make it work without you",
              "21 to 30",
              "Jobs run while you are doing something else, including on a schedule.",
            ],
          ],
        },
      },
    ],
    steps: [
      {
        title: "Check each piece still works",
        body: [
          "Nine days is long enough for something to have quietly broken. Four quick checks.",
        ],
        code: {
          label: "Type these to Claude, one at a time",
          code: `/context      -> is my CLAUDE.md listed under Memory files?
/memory       -> is anything saved there wrong or out of date?
/hooks        -> does PreToolUse still show 1?
/weekly-report -> does my saved job still run?`,
        },
      },
      {
        title: "Ask it what is weak",
        body: [
          "It can see your setup. Let it tell you what is missing rather than guessing.",
        ],
        code: {
          label: "Type this to Claude",
          code: `Look at my setup: CLAUDE.md, my folder structure, my
.claude/ folder, my hooks and my skills.

Tell me:
1. The three weakest things about it
2. What one change would help most, and why
3. Anything in here that is going to cause a problem later

Be blunt. Do not be encouraging.`,
        },
      },
      {
        title: "Choose your next three days",
        body: [
          "Not all twenty. Three. Pick from the phase that matches your problem, do those, and come back.",
          "People who pick three finish them. People who commit to twenty finish none.",
        ],
      },
    ],
    win: {
      beforeLabel: "Ten days ago",
      before: ["Nothing installed", "Explaining yourself every session"],
      afterLabel: "Now",
      after: [
        "A setup that knows your project",
        "Remembers your corrections",
        "Protects your files",
        "Does one job on command",
      ],
    },
    quiz: [
      {
        question: "Which piece holds rules that you wrote yourself?",
        options: ["Memory", "CLAUDE.md"],
        answer: 1,
        explanation:
          "You write CLAUDE.md. It writes memory. That split is worth being able to say out loud, because it decides where new things go.",
      },
      {
        question: "Which piece stops something happening, rather than suggesting it should not?",
        options: [
          "A guard, because it can block the action outright",
          "CLAUDE.md, because the rules are written down",
        ],
        answer: 0,
        explanation:
          "CLAUDE.md is guidance and it is usually followed. A guard is enforcement and it always runs. That is why anything that truly must not happen belongs in a guard.",
      },
      {
        question: "How many of the next twenty days should you commit to today?",
        options: ["Three", "All twenty"],
        answer: 0,
        explanation:
          "People who pick three finish them. People who commit to twenty finish none. Pick three, do them, then come back and pick again.",
      },
    ],
    sheet: {
      slot: 4,
      id: "sheet-manager",
      title: "The Manager Pack",
      pitch:
        "For whoever has to approve this. The answer on paper, before they ask.",
      contents: [
        "What a rollout actually involves, step by step, with the honest time",
        "The questions an approver will ask, and straight answers to them",
        "What to watch in the first month, and what good looks like",
        "The three ways team rollouts go wrong, and how to avoid each",
      ],
    },
    nextTeaser: "Build a guard that checks the work and reports back",
  },
];

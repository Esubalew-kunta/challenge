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
 * 1. **One page.** Two columns, and the blocks have to fit. If a sheet does
 *    not fit, cut it, do not shrink the type. Eight of the ten are one page.
 *    The Manager Pack and The Complete Guide are documents and are the stated
 *    exceptions.
 * 2. **No prices, no plan details, no model names printed.** Those link back
 *    to the site. A number inside a file sitting in somebody's inbox cannot be
 *    corrected; a link can.
 */

import { INSTALL, PLAN_REQUIREMENT, SETTINGS_PATHS, SYSTEM_REQUIREMENTS } from "./registry";

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

/** Short lines. Not paragraphs. */
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

export const SHEET_DOCS: SheetDoc[] = [SETUP];

export function getSheetDoc(id: string): SheetDoc | undefined {
  return SHEET_DOCS.find((s) => s.id === id);
}

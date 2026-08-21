/**
 * Single source of truth for every fact that appears on more than one day.
 *
 * The reference site we studied teaches exit codes on four separate pages and
 * contradicts itself twice, quotes 8 connectors on one page and 24 on another,
 * and uses two different hook syntaxes. That happens because each page was
 * hand-written. Here a fact exists once. Edit it here and every page that
 * references it updates.
 *
 * Rule: no prices and no plan details are ever printed into a downloadable
 * sheet. Those link back to the site so they cannot go stale in an inbox.
 */

/** Stamped on every page. A page older than this + 90 days gets re-checked. */
export const VERIFIED_AGAINST = {
  source: "the official Claude Code documentation",
  date: "20 August 2026",
  /** ISO, for the freshness job. */
  iso: "2026-08-20",
} as const;

/** Install commands. Verified against the official docs on the date above. */
export const INSTALL = {
  mac: "curl -fsSL https://claude.ai/install.sh | bash",
  windows: "irm https://claude.ai/install.ps1 | iex",
  verify: "claude --version",
  diagnose: "claude doctor",
  start: "claude",
} as const;

/**
 * The single most common reason a first install appears to fail: it installs
 * perfectly, then will not log in. Stated on Day 1 and referenced from Day 6.
 */
export const PLAN_REQUIREMENT = {
  short: "A free Claude.ai account does not include Claude Code.",
  long:
    "You need Pro, Max, Team or Enterprise, or a Claude Console account with credit on it. Day 6 covers which one is right for you, and how to tell when you actually need to move up.",
} as const;

/** Minimum machine. Referenced on Day 1. */
export const SYSTEM_REQUIREMENTS =
  "macOS 13 or newer, Windows 10 or newer, or a recent Linux, with at least 4 GB of memory.";

/**
 * Hook exit codes. Referenced by Days 8 and 11. This table exists once.
 */
export const EXIT_CODES = {
  head: ["Number", "Meaning", "What you need to know"],
  rows: [
    [
      "0",
      "No objection",
      "This is not the same as \"approved\". Claude's normal permission rules still run afterwards.",
    ],
    [
      "2",
      "Blocked",
      "The action is stopped. Whatever your script printed as an error goes back to Claude, so it can try something else.",
    ],
  ],
} as const;

/** Where settings live. Referenced by Days 8, 11, 12, 14, 16, 19. */
export const SETTINGS_PATHS = {
  project: ".claude/settings.json",
  user: "~/.claude/settings.json",
  hooksDir: ".claude/hooks",
} as const;

/**
 * The day after which the reader wants Claude Code on their own machine.
 * Stated once on Day 1, and drives the badge on every day record.
 */
export const OWN_MACHINE_FROM_DAY = 7;

/** Route roots. French is built after English is signed off. */
export const CHALLENGE_ROUTES = {
  en: "/en/claude-code-challenge",
  fr: "/challenge-claude-code",
} as const;

/** Lead source tag sent to /api/lead for every sheet on the challenge. */
export const LEAD_SOURCE = "claude-code-challenge" as const;

/**
 * How a French sheet is named, in one place.
 *
 * A sheet exists twice: `sheet-setup` in English and `sheet-setup-fr` in
 * French. Two ids rather than one row with two file columns, because adding a
 * column changes an existing table while adding a row does not, and because
 * the id then carries the language into the PDF name, the storage path and the
 * lead row without anything else having to know.
 *
 * The French day records deliberately keep the English id in their `sheet`
 * field, so nothing in the content had to be renamed. This function is where
 * the translation happens, and it is called in exactly two places: the French
 * sheet data, and `/api/challenge-sheet` when it looks the file up.
 */
export const FR_SHEET_SUFFIX = "-fr" as const;

export function sheetIdFor(id: string, locale: "en" | "fr"): string {
  if (locale !== "fr") return id;
  return id.endsWith(FR_SHEET_SUFFIX) ? id : `${id}${FR_SHEET_SUFFIX}`;
}

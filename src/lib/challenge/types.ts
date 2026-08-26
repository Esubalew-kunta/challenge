/**
 * Claude Code in 30 Days. The content model.
 *
 * Every day is a data record, never a hand-built page. One layout renders all
 * thirty. Shared facts (install commands, plan requirements, verification date)
 * live in `registry.ts` and are referenced, never retyped, so two days can
 * never disagree with each other.
 */

export type Phase = 1 | 2 | 3;

/** Locales the challenge ships in. English first; French follows. */
export type ChallengeLocale = "en" | "fr";

/**
 * Does this day need Claude Code installed on the reader's own machine?
 * Rendered as a calm informational badge, never a warning: it tells the reader
 * what to get, not what they cannot have.
 */
export type AppRequirement = "anywhere" | "needs-app";

/** A copy-to-clipboard block. `label` names where the reader types it. */
export interface CodeBlock {
  label: string;
  code: string;
}

/** One tab of a platform-specific instruction (macOS, Windows, Desktop app). */
export interface PlatformPanel {
  id: string;
  label: string;
  /** Paragraphs of plain text. Inline `code` spans are allowed. */
  body: string[];
  code?: CodeBlock;
  /** Optional second code block, e.g. a verification command. */
  extraCode?: CodeBlock;
}

/** A collapsible troubleshooting entry shown under a step. */
export interface Troubleshoot {
  summary: string;
  body: string[];
  code?: CodeBlock;
}

/** A teaching section: three per day, no more. One idea each. */
export interface TeachSection {
  heading: string;
  body: string[];
  table?: { head: string[]; rows: string[][] };
  callout?: { tag: string; body: string[] };
}

/** One numbered action in "Do this now". */
export interface Step {
  title: string;
  body?: string[];
  code?: CodeBlock;
  panels?: PlatformPanel[];
  troubleshoot?: Troubleshoot[];
}

/** The before-and-after that closes every day. Never a sales pitch. */
export interface Win {
  beforeLabel: string;
  before: string[];
  afterLabel: string;
  after: string[];
}

/** Optional instructions shown only to the reader's selected learning path. */
export interface PathGuidance {
  beginner: string[];
  builder: string[];
}

/**
 * A multiple-choice question. The reader commits to an answer before seeing
 * anything, which is the whole point: a "show answer" button lets people skip
 * the thinking, which is the same as having no question at all.
 */
export interface Question {
  question: string;
  options: string[];
  /** Zero-based index of the correct option. */
  answer: number;
  /** Shown only after the reader answers. Short, plain, and says why. */
  explanation: string;
}

/**
 * The downloadable offered on this day. Ten of the thirty days carry one.
 * Each sheet exists on exactly one page, so a request identifies what that
 * reader actually cares about. That is the entire lead model: which sheet,
 * from which page. Nothing is tracked.
 */
export interface Sheet {
  /** 1 to 10, in page order. */
  slot: number;
  title: string;
  pitch: string;
  contents: string[];
  /** Analytics/lead tag, e.g. "sheet-hooks". */
  id: string;
}

/**
 * Day 1 only: the reader says whether the install worked before anything is
 * offered. If it failed they get help, never an email box. Asking for an
 * address straight after somebody has failed is the worst moment on the site.
 */
export interface SuccessGate {
  question: string;
  yesLabel: string;
  noLabel: string;
  failTag: string;
  failBody: string[];
}

/**
 * An interactive tool this day carries, beyond the standard blocks.
 *
 * A union of names rather than a component, because the day records are plain
 * data read by the sitemap and by scripts that have no business importing
 * React. The layout maps the name to a component in one place.
 *
 * `cost` is Day 6: what the repeated work costs, worked out from the reader's
 * own numbers. Deliberately not a plan price calculator, see `cost-tool.tsx`.
 */
export type DayTool = "cost";

export interface Day {
  day: number;
  /** URL segment. `day-1` through `day-30`, so a reader can type one. */
  slug: string;
  /** Plain-English heading. */
  title: string;
  /** The real term, shown in brackets after the title. Optional. */
  term?: string;
  phase: Phase;
  /** Honest minutes, measured with a beginner. Never rounded down. */
  minutes: number;
  app: AppRequirement;
  /** One line, what the reader has by the end. */
  promise: string;
  /** Short label for the day list, e.g. "One working guard". */
  outcome: string;
  /** Two short paragraphs. Why this is worth ten minutes. */
  why: string[];
  sections: TeachSection[];
  steps: Step[];
  win: Win;
  quiz: Question[];
  sheet?: Sheet;
  gate?: SuccessGate;
  /** Shown under the three sections, before "Do this now". */
  tool?: DayTool;
  /** Short path-specific guidance. Shared lesson content remains above it. */
  pathGuidance?: PathGuidance;
  /** Names the payoff of the next day, never just its number. */
  nextTeaser: string;
}

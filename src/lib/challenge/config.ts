/**
 * Phase definitions and every user-facing string that is not day content.
 *
 * Keeping the interface strings here means the French build is a second object
 * in this file, not a second set of components.
 */

import type { Phase } from "./types";

export interface PhaseMeta {
  id: Phase;
  label: string;
  title: string;
  /** Why a reader should keep going. Phase 2 and 3 each need their own promise,
   *  or nobody has a reason to continue past Day 10. */
  promise: string;
  range: [number, number];
}

export const PHASES: PhaseMeta[] = [
  {
    id: 1,
    label: "Phase 1",
    title: "Get it working",
    promise:
      "A complete, safe, working setup. Plenty of people stop here, and that is fine.",
    range: [1, 10],
  },
  {
    id: 2,
    label: "Phase 2",
    title: "Make it yours",
    promise:
      "Shaping it around your actual work. This is where a generic tool turns into your tool.",
    range: [11, 20],
  },
  {
    id: 3,
    label: "Phase 3",
    title: "Make it work without you",
    promise:
      "Work that happens while you are doing something else.",
    range: [21, 30],
  },
];

export const UI = {
  challengeName: "30 Days of Claude Code",
  tagline:
    "One short page a day. By the end you have Claude Code doing real work, on your real files, without you watching.",
  allDays: "All days",
  dayOf: (n: number) => `Day ${n} of 30`,
  minutes: (n: number) => `${n} min`,
  outcomePrefix: "You leave with:",
  needsApp: "Needs the app installed",
  needsAppHelp: "Claude Code must be installed on your own computer for this day.",
  whyLabel: "Why this matters",
  sectionsLabel: "Three things to understand",
  stepsLabel: "Do this now",
  winLabel: "What just changed",
  quizLabel: "Check yourself",
  quizCounter: (i: number, total: number) => `Question ${i} of ${total}`,
  sheetTag: "Free download",
  sheetEmailPlaceholder: "you@company.com",
  sheetButton: "Send it to me",
  sheetSending: "Sending",
  sheetDone: "On its way. Check your inbox.",
  sheetFineprint:
    "It also opens on this page straight away. The email is so you keep a copy.",
  sheetOpenNow: "Open it now",
  sheetNotReady:
    "This one is still being finished. It will land in your inbox as soon as it is ready.",
  sheetEmailLabel: "Your email address",
  sheetFailed: "That did not go through. Try again in a moment.",
  sheetBadEmail: "Please check your email address",
  sheetNoPrices:
    "No prices or plan details are printed on it. Those link back to our site, so it cannot go out of date in your inbox.",
  dayLabel: (n: number) => `Day ${n}`,
  beforeNextDay: (n: number) => `Before you go to Day ${n}`,
  thatIsAllThirty: "That is all thirty",
  allDaysCount: (n: number) => `All ${n} days`,
  prev: "Previous",
  next: "Next",
  verifiedPrefix: "Every command on this page was run before publishing. Checked against",
  ctaTitle: "Rolling this out to a team?",
  ctaBody:
    "AI Makers helps companies put Claude Code to work properly. No pitch, just a conversation.",
  ctaButton: "Talk to us",
  langLabel: "Language",

  /* ---------------------------------------------------------------- score */

  scoreTitle: "Your progress",
  scoreEmpty:
    "Answer the questions at the bottom of any day and your score starts here.",
  scorePoints: "Points",
  scoreDays: "Days done",
  scoreStreak: "Days in a row",
  scoreOf: (a: number, b: number) => `${a} of ${b}`,
  scoreLevelLabel: "Level",
  scoreToNext: (n: number, level: string) => `${n} more points to ${level}`,
  scoreTopLevel: "Top level reached.",
  /** Ahead, behind and level with a one-day-per-day pace. */
  scorePaceAhead: (n: number) =>
    n === 1 ? "One day ahead of a day a day." : `${n} days ahead of a day a day.`,
  scorePaceBehind: (n: number) =>
    n === 1 ? "One day behind a day a day." : `${n} days behind a day a day.`,
  scorePaceLevel: "Right on a day a day.",
  scoreFinished: "All thirty done.",
  scoreLocal:
    "Kept in this browser only. Nothing is sent to us, and clearing your browser clears it.",

  /* ------------------------------------------------- the two questions */

  profileTag: "Before you start",
  profileTitle: "Thirty days is a lot. Which of them do you need?",
  profileBody:
    "Two taps. Nothing is sent anywhere, and you can close this.",
  profileStepOf: (i: number, total: number) => `Question ${i} of ${total}`,
  profileDoneTitle: "Here is where to start",
  profileSkipStep: "Skip this question",
  profileSeeAllDays: "See the thirty days",
  profileLevelQuestion: "How much Claude Code have you used?",
  profileRoleQuestion: "Which part of the business are you in?",
  profileStartAt: (day: number) => `Start at Day ${day}.`,
  profileDayLabel: (day: number) => `Day ${day}`,
  profileAnsweredPrefix: "You were pointed at",
  profileDismissed: "You skipped the two questions. Any day is a fine place to start.",
  profileChange: "Change",
  profileSkip: "Close this",
  profileFineprint:
    "Answers stay in this browser. They only travel if you later ask for a sheet.",

  /* --------------------------------------------------------- earned sheet */

  earnedTag: "Earned",
  earnedTitle: "The Team Sheet",
  earnedPitch:
    "The one sheet that is not on any day page. It is how everything you have learned survives four colleagues doing it badly: what has to be committed, what a new joiner does in their first thirty minutes, and what breaks the moment a second person joins.",
  earnedWhy:
    "You did not rush this. That is the whole reason you have it.",
  earnedButton: "Send me the sheet",
  earnedFineprint:
    "Optional, as always. It opens on this page straight away and the email is only so you keep a copy.",
  /** Enough points, but the whole course was done in a handful of sittings. */
  earnedTooFast: (have: number, need: number) =>
    `You have the points. This one also asks for the days: ${have} so far, ${need} needed. Come back tomorrow and the day after.`,
  earnedLocked: (points: number) =>
    `${points} more points and one more thing unlocks. It is not on any day page.`,

  /** Level names and what holding one says about the reader. */
  levels: {
    starter: {
      name: "Starter",
      blurb: "You have started. That already puts you ahead of most people.",
    },
    builder: {
      name: "Builder",
      blurb: "You have a working setup and you are shaping it around your work.",
    },
    operator: {
      name: "Operator",
      blurb: "You can put Claude Code on real work and trust what comes back.",
    },
    champion: {
      name: "AI Champion",
      blurb: "You know enough to set this up for other people, not just yourself.",
    },
  },

  /* ------------------------------------------------------------ day state */

  dayDoneTag: "Day done",
  dayScoreLine: (right: number, total: number) =>
    `${right} of ${total} right.`,
  dayPartLine: (answered: number, total: number) =>
    `${answered} of ${total} answered. Finish them to complete this day.`,
  dayNotStarted: "Answer the questions above to complete this day.",
} as const;

/**
 * The shape of a language's string table, with the literals widened.
 *
 * `UI` is `as const`, so `typeof UI` says `challengeName` is the exact string
 * "30 Days of Claude Code" and nothing else. That is useful here and useless
 * for the French table, which would fail to be that exact string.
 *
 * This walks the object and turns every literal back into its plain type,
 * leaving functions and nesting alone. `config.fr.ts` is checked against it,
 * so adding an English string without a French one fails the build instead of
 * showing an English word on a French page three weeks later.
 */
type Widen<T> = T extends (...args: infer A) => infer R
  ? (...args: A) => R
  : T extends string
    ? string
    : T extends number
      ? number
      : T extends boolean
        ? boolean
        : { -readonly [K in keyof T]: Widen<T[K]> };

export type ChallengeUI = Widen<typeof UI>;





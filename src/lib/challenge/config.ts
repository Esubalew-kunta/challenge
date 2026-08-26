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
    /*
      This used to end "Plenty of people stop here, and that is fine."

      It was meant to take the pressure off. On the list of thirty, read by
      somebody still deciding whether to start, it does the opposite: it hands
      them permission to quit at day 10 before they have opened day 1, and it
      makes the two phases under it look optional. Owner's call, 21 August 2026.

      What replaces it says what they walk out of phase 1 holding, which is the
      thing that actually takes the pressure off.
    */
    promise:
      "Installed, working on your real files, with a guard that refuses to touch what you cannot lose.",
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
  challengeName: "Claude Code in 30 Days",
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
  /* ------------------------------------------------------------- badges */

  /*
    Tiers 1 and 2 are progress. Tier 3 is the only one that says completed.

    Nothing here says certified, qualified or passed, and it must stay that
    way. The score lives in the reader's own browser, so a claim about the
    person is one we cannot stand behind. A claim about a thing they did is
    one we can.
  */
  badgeName: (tier: number) =>
    tier === 3 ? "Course complete" : `Phase ${tier} complete`,
  badgeSub: (days: number) =>
    days === 30 ? "All 30 days" : `${days} days of 30`,
  /** Under the big number inside the emblem. One word, and it is read small. */
  badgeMarkUnit: "DAYS",
  /**
   * The always-open door to a badge already earned, under the score.
   *
   * Names the badge rather than saying "your badge", because a reader who has
   * two of them should be told which one this opens.
   */
  badgeOfferButton: (tier: number) =>
    tier === 3 ? "Get your completion badge" : `Get your phase ${tier} badge`,
  badgeCardTag: "You earned a badge",
  badgeCardTitle: (tier: number) =>
    tier === 3 ? "You finished all thirty" : `Phase ${tier} done`,
  badgeCardBody:
    "Your name goes on it, so we need to know what to write. Check what is here and add anything missing.",
  badgeCardCta: "Make my badge",
  badgeCardClose: "Not now",
  badgePrivacy: "We use this to send your badge and to contact you.",
  badgePrivacyLink: "Privacy policy",
  badgeReadyTitle: "Your badge is ready",
  badgeReadyBody: "Open it, then post it wherever you like.",
  badgeOpen: "Open my badge",

  /* the badge page itself */
  badgePageTitle: (tier: number) =>
    tier === 3 ? "Claude Code in 30 Days, completed" : `Phase ${tier} completed`,
  badgeShare: "Share on LinkedIn",
  badgeDownload: "Save the picture",
  badgeBackToCourse: "See the thirty days",
  badgeShareNote:
    "The picture saves as a square, which is the shape most social apps want.",
  badgeHonest:
    "This records a course finished, not an exam passed. Nobody marked it, and nothing was gated.",
  badgeBrokenTitle: "This badge link is incomplete",
  badgeBrokenBody:
    "A badge link carries a name and which badge it is. This one is missing one of them. Finish a phase on the course and you will get a fresh link.",

  /* ----------------------------------------------------- day 1, stuck */

  /*
    Shown under the help text on Day 1, and only after the reader says the
    install failed. It is a button, never a form: the help is given first and
    asks for nothing, and the form only exists for somebody who chose to ask
    for a person.
  */
  helpButton: "Get someone to help you",
  helpTitle: "Let us get you running",
  helpBody:
    "Tell us where to reach you and somebody here will help you get it installed. It is free, and there is no pitch at the end of it.",
  helpCta: "Ask for help",
  helpClose: "Close",
  helpDoneTitle: "Got it. We will be in touch.",
  helpDoneBody:
    "Somebody will contact you about your install. In the meantime, the steps above are worth one more try on a fresh terminal window.",
  helpPrivacy: "We use this only to contact you about your install.",
  helpPrivacyLink: "Privacy policy",

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
    "Three quick questions. Nothing is sent anywhere, and you can close this.",
  profileStepOf: (i: number, total: number) => `Question ${i} of ${total}`,
  profileDoneTitle: "Here is where to start",
  profileSkipStep: "Skip this question",
  profileSeeAllDays: "See the thirty days",
  profileLevelQuestion: "How much Claude Code have you used?",
  profileGoalQuestion: "What do you want to improve first?",
  profileRoleQuestion: "Which part of the business are you in?",
  profileStartAt: (day: number) => `Start at Day ${day}.`,
  profileDayLabel: (day: number) => `Day ${day}`,
  profileAnsweredPrefix: "You were pointed at",
  profileDismissed: "You skipped the two questions. Any day is a fine place to start.",
  profileChange: "Change",
  profileSkip: "Close this",
  profileFineprint:
    "Answers stay in this browser. They only travel if you later ask for a sheet.",
  pathGuidanceLabel: (path: "beginner" | "builder"): string =>
    path === "beginner" ? "Your Beginner path" : "Your Builder path",

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

  /* --------------------------------------------------------- celebration */

  celebrateLevelTag: "New level",
  celebrateLevelTitle: (name: string) => `You are ${name} now`,
  celebratePhaseTag: "Phase done",
  celebratePhaseTitle: (label: string) => `${label} finished`,
  celebrateFinishedTag: "All thirty",
  celebrateFinishedTitle: "You finished the thirty days",
  celebrateFinishedBody:
    "Every day answered. The only thing left is to keep using it on real work.",
  celebrateClose: "Nice",

  /* ------------------------------------------------------ the cost tool */

  costTag: "Work it out",
  costTitle: "What is this costing you now?",
  costBody:
    "Three taps and no typing. Tick what you do again and again, say roughly how often and how long, and the panel does the rest.",
  costPickJobs: "Tick the jobs that are yours",
  costPickHint: "As many as fit",
  costHowOften: "How often",
  costHowLong: "How long",
  costFrequency: {
    daily: "Every day",
    fewWeekly: "A few times a week",
    weekly: "Once a week",
    monthly: "Once or twice a month",
  },
  costDuration: {
    short: "Under 15 min",
    halfHour: "About 30 min",
    hour: "About an hour",
    halfDay: "Half a day",
  },
  costResultTag: "What that comes to",
  costEmpty: "Pick a job above and the numbers appear here.",
  costAMonth: "a month",
  costAYear: "a year",
  /*
    A caption, not a sentence.

    The result panel now leads with the number itself, set large, the way every
    figure on the AI Makers calculators is. A string that carried the number
    inside it would print it twice on the same line.
  */
  costWorkingDays: "working days a year",
  costWorkingDayNote:
    "Counting a working day as seven hours, and every answer rounded down. The real number is usually bigger.",
  /* Deliberately does not repeat the figure sitting directly above it. */
  costCtaLine: "Want those days back?",
  costCtaButton: "Talk to AI Makers",
  costCtaNote: "A free conversation. No pitch.",
  /*
    There is no fine print under this tool any more.

    It used to close with a paragraph explaining that we do not print plan
    prices, and another saying the answers stay in the browser. The first
    repeated the callout a few blocks above it on the same page, which already
    says exactly that under its own heading. The second is true of everything
    on this course and is already stated on the score card. Two paragraphs of
    small grey text under a result is where a reader stops reading.
  */
} as const;

/**
 * The shape of a language's string table, with the literals widened.
 *
 * `UI` is `as const`, so `typeof UI` says `challengeName` is the exact string
 * "Claude Code in 30 Days" and nothing else. That is useful here and useless
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





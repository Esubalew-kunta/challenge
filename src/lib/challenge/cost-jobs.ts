/**
 * The jobs the Day 6 tool offers, and what each answer is worth.
 *
 * Written as data for the same reason the days are: one list, in one place, in
 * two languages, with ids that never change.
 *
 * **The ids are shared across both languages on purpose.** A reader who picks
 * three jobs on the French page and then switches to English keeps their
 * selection, because what is stored is `weeklyUpdate`, not a French sentence.
 * The same rule the quiz answers follow.
 *
 * **The list is filtered by the resource category the reader already gave** in the
 * questions popup on the index. Nothing extra is asked. Somebody who skipped
 * that question, or who came straight to Day 6 from a search, gets the general
 * list, which is eight real jobs rather than a shrug.
 *
 * The numbers below are deliberately on the low side, and the tool says so
 * under the result. A figure a manager can argue down is worth nothing; a
 * figure that was already conservative survives the meeting. Same principle as
 * the AI Makers ROI calculator, which describes its own default as prudent.
 */

import type { ResourceCategory } from "./profile";
import type { ChallengeLocale } from "./types";
import { COST_JOBS_FR } from "./cost-jobs.fr";

export interface CostJob {
  /** Stable across languages. Never rename one that is already published. */
  id: string;
  label: string;
}

/** Stable content groups used by the calculator, independent of profile labels. */
export type CostJobGroup =
  | "general"
  | "sales"
  | "marketing"
  | "operations"
  | "technical";

const COST_GROUP_FOR_CATEGORY: Record<ResourceCategory, CostJobGroup> = {
  developer: "technical",
  consultant: "sales",
  operations: "operations",
  founder: "general",
  marketing: "marketing",
};

/* -------------------------------------------------------------- how often */

export const COST_FREQUENCIES = [
  { id: "daily", perMonth: 20 },
  { id: "fewWeekly", perMonth: 10 },
  { id: "weekly", perMonth: 4 },
  { id: "monthly", perMonth: 1.5 },
] as const;

export type CostFrequencyId = (typeof COST_FREQUENCIES)[number]["id"];

/* --------------------------------------------------------------- how long */

export const COST_DURATIONS = [
  { id: "short", minutes: 12 },
  { id: "halfHour", minutes: 30 },
  { id: "hour", minutes: 55 },
  { id: "halfDay", minutes: 200 },
] as const;

export type CostDurationId = (typeof COST_DURATIONS)[number]["id"];

/**
 * What the tool starts a newly picked job at.
 *
 * Weekly and half an hour, so the number moves the instant somebody taps a
 * job rather than waiting for two more taps before anything happens.
 */
export const COST_DEFAULT_FREQUENCY: CostFrequencyId = "weekly";
export const COST_DEFAULT_DURATION: CostDurationId = "halfHour";

/** Hours in a working day. Seven, not eight. Nobody does eight of these. */
export const HOURS_PER_WORKING_DAY = 7;

/* ------------------------------------------------------------------ jobs */

export const COST_JOBS: Record<CostJobGroup, CostJob[]> = {
  general: [
    { id: "weeklyUpdate", label: "The weekly update nobody enjoys writing" },
    { id: "explainAgain", label: "Explaining the same thing to a colleague again" },
    { id: "sameReport", label: "The same report, with new numbers" },
    { id: "newProject", label: "Setting up a new project from scratch" },
    { id: "findWhere", label: "Hunting through files to find where something is handled" },
    { id: "reviewWork", label: "Reviewing somebody else's work" },
    { id: "notesToDoc", label: "Turning messy notes into a clean document" },
    { id: "moveData", label: "Moving the same data from one place to another" },
  ],

  sales: [
    { id: "pipelineUpdate", label: "The weekly pipeline update" },
    { id: "followUp", label: "Writing the same follow up email again" },
    { id: "callPrep", label: "Digging through notes before a call" },
    { id: "proposal", label: "Building another proposal out of an old one" },
    { id: "callSummary", label: "Turning a call into a written summary" },
    { id: "crmTidy", label: "Tidying up the CRM after the fact" },
  ],

  marketing: [
    { id: "perfReport", label: "The weekly performance report" },
    { id: "rewriteChannel", label: "Rewriting the same copy for another channel" },
    { id: "longToShort", label: "Turning a long document into short posts" },
    { id: "chaseNumbers", label: "Chasing numbers across three different tools" },
    { id: "briefAgain", label: "Briefing the same thing to a freelancer again" },
    { id: "checkPage", label: "Checking a page before it goes live" },
  ],

  operations: [
    { id: "teamUpdate", label: "The weekly team update" },
    { id: "chaseStatus", label: "Chasing people for a status before a meeting" },
    { id: "monthlyReport", label: "The same monthly report, new numbers" },
    { id: "onboarding", label: "Walking somebody new through the same steps" },
    { id: "meetingToActions", label: "Turning a meeting into actions somebody can read" },
    { id: "checkProcess", label: "Checking a process was actually followed" },
  ],

  technical: [
    { id: "explainBug", label: "Explaining a bug to somebody else" },
    { id: "reviewChange", label: "Reviewing somebody else's change" },
    { id: "newProject", label: "Setting up a new project from scratch" },
    { id: "findWhere", label: "Hunting through files to find where something is handled" },
    { id: "sameTest", label: "Writing the same kind of test again" },
    { id: "ticketToPlan", label: "Turning a ticket into a plan before touching anything" },
  ],

};

/**
 * The list this reader should see.
 *
 * Falls back to the general list for anybody who never answered the question.
 * Never returns empty:
 * an empty tool looks broken, and the general jobs are true for everybody.
 */
export function costJobsFor(
  locale: ChallengeLocale,
  category: ResourceCategory | null,
): CostJob[] {
  const table = locale === "fr" ? COST_JOBS_FR : COST_JOBS;
  const picked = category ? table[COST_GROUP_FOR_CATEGORY[category]] : undefined;
  return picked && picked.length ? picked : table.general;
}

/** One job's id to its label, whichever list it came from. */
export function costJobLabel(
  locale: ChallengeLocale,
  id: string,
): string | undefined {
  const table = locale === "fr" ? COST_JOBS_FR : COST_JOBS;
  for (const group of Object.values(table)) {
    const found = group.find((j) => j.id === id);
    if (found) return found.label;
  }
  return undefined;
}

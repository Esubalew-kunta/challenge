/**
 * Public entry point for the 30 day challenge content.
 *
 * The index page, the day pages and the sitemap all read from here, so the
 * day list exists in exactly one place. Adding, removing or reordering a day
 * is a data edit, not a page edit.
 */

import { PHASE_1_DAYS } from "./days-phase-1";
import { PHASE_2_DAYS } from "./days-phase-2";
import { PHASE_3_DAYS } from "./days-phase-3";
import { PHASES, UI } from "./config";
import { CHALLENGE_ROUTES, VERIFIED_AGAINST } from "./registry";
import type { Day, Phase, Sheet } from "./types";
import type { AnswerKey } from "./progress";

export * from "./types";
export * from "./progress";
export { PHASES, UI } from "./config";
export {
  CHALLENGE_ROUTES,
  VERIFIED_AGAINST,
  LEAD_SOURCE,
  OWN_MACHINE_FROM_DAY,
} from "./registry";

/** All thirty days, in order. */
export const DAYS: Day[] = [
  ...PHASE_1_DAYS,
  ...PHASE_2_DAYS,
  ...PHASE_3_DAYS,
].sort((a, b) => a.day - b.day);

export const TOTAL_DAYS = DAYS.length;

/** Base path for the English challenge. French is added alongside later. */
export const BASE = CHALLENGE_ROUTES.en;

export function dayHref(day: Pick<Day, "slug">): string {
  return `${BASE}/${day.slug}`;
}

export function getDayBySlug(slug: string): Day | undefined {
  return DAYS.find((d) => d.slug === slug);
}

export function getDayByNumber(n: number): Day | undefined {
  return DAYS.find((d) => d.day === n);
}

export function daysInPhase(phase: Phase): Day[] {
  return DAYS.filter((d) => d.phase === phase);
}

export function getPhase(phase: Phase) {
  return PHASES.find((p) => p.id === phase)!;
}

/** Previous and next day, for the pager. Either can be undefined at the ends. */
export function neighbours(day: Day): { prev?: Day; next?: Day } {
  return {
    prev: getDayByNumber(day.day - 1),
    next: getDayByNumber(day.day + 1),
  };
}

/** The ten sheets, in page order. Used by the index and by the lead routing. */
export function allSheets(): Array<Sheet & { day: number; slug: string }> {
  return DAYS.filter((d) => d.sheet).map((d) => ({
    ...(d.sheet as Sheet),
    day: d.day,
    slug: d.slug,
  }));
}

/**
 * The correct option index for every question, keyed by day number.
 *
 * Built from the content, so the score's maximum follows the content instead of
 * being a number somebody has to remember to update. `progress.ts` stays free
 * of any import from here, which is what keeps the two files out of a cycle.
 */
export function answerKey(): AnswerKey {
  const key: AnswerKey = {};
  DAYS.forEach((d) => {
    key[d.day] = d.quiz.map((q) => q.answer);
  });
  return key;
}

/**
 * Guard rails, checked at module load in development so a content mistake is
 * caught while editing rather than after publishing. These enforce the rules
 * the curriculum was designed around.
 */
if (process.env.NODE_ENV !== "production") {
  const problems: string[] = [];

  if (DAYS.length !== 30) {
    problems.push(`Expected 30 days, found ${DAYS.length}`);
  }

  const numbers = DAYS.map((d) => d.day);
  numbers.forEach((n, i) => {
    if (n !== i + 1) problems.push(`Day numbers are not 1..30 in order (at ${n})`);
  });

  const slugs = new Set<string>();
  DAYS.forEach((d) => {
    if (slugs.has(d.slug)) problems.push(`Duplicate slug: ${d.slug}`);
    slugs.add(d.slug);
    // Every day is a short page. Anything over 18 minutes gets split in two,
    // rather than having its number quietly rounded down.
    if (d.minutes < 5 || d.minutes > 18) {
      problems.push(`Day ${d.day} is ${d.minutes} min, outside the 5 to 18 range`);
    }
    if (d.sections.length !== 3) {
      problems.push(`Day ${d.day} has ${d.sections.length} sections, expected 3`);
    }
    if (d.quiz.length !== 3) {
      problems.push(`Day ${d.day} has ${d.quiz.length} questions, expected 3`);
    }
    d.quiz.forEach((q, i) => {
      if (q.answer < 0 || q.answer >= q.options.length) {
        problems.push(`Day ${d.day} question ${i + 1} has an out of range answer`);
      }
    });
  });

  const slots = DAYS.filter((d) => d.sheet).map((d) => d.sheet!.slot);
  if (slots.length !== 10) {
    problems.push(`Expected 10 cheat sheets, found ${slots.length}`);
  }
  slots.forEach((s, i) => {
    if (s !== i + 1) problems.push(`Sheet slots are not 1..10 in order (at ${s})`);
  });

  if (problems.length) {
    console.warn(
      `[challenge] Content problems found:\n  ${problems.join("\n  ")}`,
    );
  }
}

export const CHALLENGE_META = {
  name: UI.challengeName,
  tagline: UI.tagline,
  totalDays: TOTAL_DAYS,
  sheets: 10,
  verified: VERIFIED_AGAINST,
} as const;

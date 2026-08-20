/**
 * The earned sheet, and the one rule that decides who gets it.
 *
 * There is exactly one sheet on this site that is not free on a day page. It
 * goes to somebody who did the course the way it was meant to be done, a day
 * at a time, and it is deliberately not a preview of days they have not read
 * yet. Handing over next week's sheets rewards a person who rushed exactly as
 * much as a person who did the work, which is the opposite of the point.
 *
 * Two tests, and both have to pass:
 *
 *   1. **Points.** They have to have reached Operator, which is about half the
 *      course done properly. Points already reward answering, and answering
 *      correctly, so this half of the test needs nothing new.
 *
 *   2. **Calendar days.** Somebody who clicked through fifteen days in one
 *      evening has a first answer and a last answer on the same date. Somebody
 *      who actually did it has weeks between them. That is the whole signal,
 *      and it is already stored, because the streak needs it.
 *
 * Said once and then dropped: this is honest, not provable. The blob lives in
 * the reader's own browser and anybody who opens developer tools can edit it.
 * That matches the rule the rest of this build follows, that a gate only ever
 * punishes the honest reader while a determined one walks straight through it.
 * Nobody is buying anything with this, so there is nothing to defend.
 *
 * Why the pace test is generous: real people do two days in one sitting on a
 * quiet Sunday. Asking for half as many calendar days as days completed lets
 * that through and still stops a single sitting run cold.
 */

import { LEVELS, daysBetween, localDate } from "./progress";
import type { LevelId, ProgressState } from "./progress";

/** The one sheet that is never offered on a day page. */
export const EARNED_SHEET_ID = "sheet-team";

/** Points level required before the pace test is even looked at. */
export const EARNED_AT_LEVEL: LevelId = "operator";

/**
 * The floor on calendar days, whatever the day count says.
 *
 * Without it, a reader on their third day would pass the ratio test on day two
 * and the reward would stop meaning anything.
 */
export const EARNED_MIN_CALENDAR_DAYS = 5;

export interface EarnedState {
  /** Both tests passed. The sheet is theirs. */
  unlocked: boolean;
  /** Enough points, but the work was not spread out. */
  tooFast: boolean;
  /** Calendar days from their first answer to their most recent one. */
  calendarDays: number;
  /** How many calendar days this reader needs. */
  calendarDaysNeeded: number;
  /** Points still missing, 0 once the level is held. */
  pointsToGo: number;
}

const REQUIRED_POINTS =
  LEVELS.find((band) => band.id === EARNED_AT_LEVEL)?.at ?? Number.MAX_SAFE_INTEGER;

/**
 * Calendar days the reader has been on the course.
 *
 * First answer to most recent answer, inclusive, so a single sitting is 1 and
 * never 0. Returns 0 only when they have never answered anything.
 */
export function calendarDaysOnCourse(
  state: ProgressState,
  now: Date = new Date(),
): number {
  if (!state.started) return 0;
  const last = state.lastActive ?? localDate(now);
  return Math.max(1, daysBetween(state.started, last) + 1);
}

/**
 * Where this reader stands against the earned sheet.
 *
 * Takes the two numbers rather than the whole summary so it stays pure and can
 * be tested without building an answer key.
 */
export function earnedState(
  state: ProgressState,
  points: number,
  daysDone: number,
  now: Date = new Date(),
): EarnedState {
  const calendarDays = calendarDaysOnCourse(state, now);
  const calendarDaysNeeded = Math.max(
    EARNED_MIN_CALENDAR_DAYS,
    Math.ceil(daysDone / 2),
  );

  const hasPoints = points >= REQUIRED_POINTS;
  const hasPace = calendarDays >= calendarDaysNeeded;

  return {
    unlocked: hasPoints && hasPace,
    tooFast: hasPoints && !hasPace,
    calendarDays,
    calendarDaysNeeded,
    pointsToGo: Math.max(0, REQUIRED_POINTS - points),
  };
}

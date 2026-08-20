/**
 * The content helpers, in whichever language the page is in.
 *
 * `locale.ts` handles the strings and stays content free so anything can
 * import it. This one is allowed to touch the day content, so it sits above
 * both indexes and nothing inside them may import it back.
 *
 *   index.ts      English content
 *   index.fr.ts   French content, imports index.ts for the parity check
 *   nav.ts        this file, imports both. Nothing imports it from below.
 *
 * Every component that renders a day takes a `locale` and calls these. There
 * is no second set of French components, so a change to a layout cannot land
 * in one language and be forgotten in the other.
 */

import { DAYS, TOTAL_DAYS, answerKey, dayHref, getDayByNumber } from "./index";
import { DAYS_FR, answerKeyFr, dayHrefFr, getDayByNumberFr } from "./index.fr";
import { phasesFor } from "./locale";
import type { AnswerKey } from "./progress";
import type { ChallengeLocale, Day, Phase } from "./types";

const isFr = (locale: ChallengeLocale) => locale === "fr";

/** Every day, in this language. */
export function daysFor(locale: ChallengeLocale): Day[] {
  return isFr(locale) ? DAYS_FR : DAYS;
}

/**
 * How many days the score is measured against.
 *
 * Deliberately the English total in both languages. The score is one number
 * shared across the two, so measuring French progress out of a different total
 * would make the same reader's percentage change when they switch language.
 */
export function totalDaysFor(): number {
  return TOTAL_DAYS;
}

export function dayHrefIn(locale: ChallengeLocale, day: Pick<Day, "slug">): string {
  return isFr(locale) ? dayHrefFr(day) : dayHref(day);
}

export function dayByNumberIn(
  locale: ChallengeLocale,
  n: number,
): Day | undefined {
  return isFr(locale) ? getDayByNumberFr(n) : getDayByNumber(n);
}

/** Previous and next day. Either can be undefined at the ends. */
export function neighboursIn(
  locale: ChallengeLocale,
  day: Day,
): { prev?: Day; next?: Day } {
  return {
    prev: dayByNumberIn(locale, day.day - 1),
    next: dayByNumberIn(locale, day.day + 1),
  };
}

export function daysInPhaseIn(locale: ChallengeLocale, phase: Phase): Day[] {
  return daysFor(locale).filter((d) => d.phase === phase);
}

export function phaseIn(locale: ChallengeLocale, phase: Phase) {
  return phasesFor(locale).find((p) => p.id === phase)!;
}

/**
 * The answer key for scoring.
 *
 * Also deliberately the English one in both languages, for the same reason as
 * the total: one score, one key. The parity check in `index.fr.ts` is what
 * makes that safe, since it proves the French answers sit at the same indexes.
 */
export function answerKeyFor(locale: ChallengeLocale): AnswerKey {
  return isFr(locale) ? answerKeyFr() : answerKey();
}

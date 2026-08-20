/**
 * One set of components, two languages.
 *
 * Every component that shows a string takes a `locale` and looks the strings up
 * here. That is deliberately not "pass the strings in as a prop": `UI` holds
 * functions like `scoreOf(a, b)`, and functions cannot cross the boundary from
 * a server component to a client one. A two letter string can. So the locale
 * travels and each component does its own lookup.
 *
 * The alternative, a second set of French components, was rejected for the
 * usual reason: the day a button changes, one of the two copies gets forgotten,
 * and nobody notices until a French reader reports it.
 *
 * Pure and content free, so it can be imported from anywhere, including from
 * files that `index.ts` itself imports.
 */

import { PHASES, UI } from "./config";
import { PHASES_FR, UI_FR } from "./config.fr";
import { CHALLENGE_ROUTES } from "./registry";
import type { ChallengeUI, PhaseMeta } from "./config";
import type { ChallengeLocale } from "./types";

/** The interface strings for a page in this language. */
export function uiFor(locale: ChallengeLocale): ChallengeUI {
  return locale === "fr" ? UI_FR : UI;
}

/** The three phases, named in this language. */
export function phasesFor(locale: ChallengeLocale): PhaseMeta[] {
  return locale === "fr" ? PHASES_FR : PHASES;
}

/** The route root, `/en/claude-code-challenge` or `/challenge-claude-code`. */
export function baseFor(locale: ChallengeLocale): string {
  return locale === "fr" ? CHALLENGE_ROUTES.fr : CHALLENGE_ROUTES.en;
}

/** `fr` for the French pages, `en` everywhere else. Used on `<html lang>`. */
export function htmlLangFor(locale: ChallengeLocale): string {
  return locale === "fr" ? "fr" : "en";
}


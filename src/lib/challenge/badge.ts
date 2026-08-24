/**
 * The shareable badge: three tiers, no database, no verification.
 *
 * Everything the badge needs travels in the web address. There is no row to
 * look up and nothing stored to make the page work, which is the owner's
 * decision of 24 August 2026 and follows from an earlier one: we do not police
 * whether somebody rushed the course, and we do not claim the badge is proof.
 *
 * That is why the wording matters more than any amount of engineering here.
 * The word is **completed**, never "certified" and never "qualified". A
 * completion badge is a statement about having done a thing. A certificate is
 * a claim about a person, and a claim is the thing we cannot stand behind
 * while the score lives in the reader's own browser.
 *
 * Anybody can type any name into the address. That was considered and
 * accepted: the person who would edit a URL to fake this has still found the
 * course, still wanted the badge, and is still about to post a link to us.
 *
 * What is NOT accepted is somebody putting a slur, a web address or a piece of
 * markup where a name goes and sharing it as an AI Makers badge. `cleanName`
 * is the guard for that, and it is a real one rather than a gesture: the name
 * is drawn into an image we sign with our own mark.
 *
 * Nothing in this file touches the browser or the network, so the rules stay
 * testable and this can be imported by a server route, a page and a client
 * component alike.
 */

import type { ChallengeLocale } from "./types";

export const BADGE_TIERS = [1, 2, 3] as const;
export type BadgeTier = (typeof BADGE_TIERS)[number];

/** How many days each tier is earned at. */
export const BADGE_DAYS: Record<BadgeTier, number> = { 1: 10, 2: 20, 3: 30 };

/**
 * Only the last one says completed.
 *
 * The first two are progress, and they exist because almost nobody reaches day
 * 30. A reward that only lands at the end rewards the people who needed it
 * least.
 */
export function isComplete(tier: BadgeTier): boolean {
  return tier === 3;
}

export function parseTier(raw: string | null | undefined): BadgeTier | null {
  const n = Number((raw ?? "").trim());
  return n === 1 || n === 2 || n === 3 ? n : null;
}

/** Long enough for "Jean-Baptiste de la Rochefoucauld", short enough to draw. */
export const MAX_BADGE_NAME = 40;

/**
 * The name, reduced to something we are willing to print next to our own mark.
 *
 * Allowed: letters in any alphabet, marks and accents, spaces, hyphens,
 * apostrophes and full stops. That covers every real name this course will
 * meet, in both languages, including "O'Brien" and "Sainte-Beuve".
 *
 * Removed: digits, punctuation, slashes, angle brackets and every control
 * character. Between them those are what a web address, a piece of markup and
 * most abuse are made of. Runs of whitespace collapse, because a name padded
 * out with fifty spaces is somebody probing the layout.
 *
 * Returns an empty string when nothing survives, and the page treats that as a
 * broken link rather than drawing a nameless badge.
 */
export function cleanName(raw: string | null | undefined): string {
  const out = (raw ?? "")
    .normalize("NFC")
    .replace(/[^\p{L}\p{M}\s'.-]/gu, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, MAX_BADGE_NAME)
    .trim();

  /*
    A web address with its slashes and digits stripped is still a web address.

    Found by trying it: `buy-cheap.example.com/now` survives the filter above
    as `buy-cheap.example.comnow`, which still reads as a domain and would sit
    on a badge next to the AI Makers mark. Letters, dots and hyphens are all a
    domain needs, and all three are things real names use.

    The rule that separates them: a **name has a space in it, a domain does
    not**. So a dot is allowed, but only in something that also contains a
    space. "J. R. Tolkien" passes. "Sainte-Beuve" passes, no dot. "JSmith"
    passes, no dot. "J.Smith" does not, and that is the price.
  */
  if (out.includes(".") && !out.includes(" ")) return "";

  return out;
}

/** The path of the badge page, per language. Query string added by the caller. */
export function badgeBasePath(locale: ChallengeLocale): string {
  return locale === "fr"
    ? "/challenge-claude-code/badge"
    : "/en/claude-code-challenge/badge";
}

/** `/en/claude-code-challenge/badge?n=Marie%20Dupont&p=3` */
export function badgePath(
  locale: ChallengeLocale,
  name: string,
  tier: BadgeTier,
): string {
  const params = new URLSearchParams({ n: name, p: String(tier) });
  return `${badgeBasePath(locale)}?${params.toString()}`;
}

/**
 * The picture itself, drawn on demand.
 *
 * A separate route rather than Next's `opengraph-image` file, and that is
 * forced rather than chosen: the file convention receives only the path
 * segments, never the query string, so it cannot see the name. `shape=square`
 * gives the 1080 by 1080 version a reader saves and posts by hand.
 */
export function badgeImagePath(
  locale: ChallengeLocale,
  name: string,
  tier: BadgeTier,
  opts: { square?: boolean; download?: boolean } = {},
): string {
  const params = new URLSearchParams({ n: name, p: String(tier), lang: locale });
  if (opts.square) params.set("shape", "square");
  if (opts.download) params.set("download", "1");
  return `/api/badge-image?${params.toString()}`;
}

/**
 * LinkedIn takes a link and nothing else.
 *
 * There is no way for any website to hand LinkedIn a picture. It fetches the
 * address it is given and shows whatever that page declares as its image,
 * which is the entire reason the badge needs a page of its own rather than
 * just a file to download.
 */
export function linkedInShareUrl(absoluteBadgeUrl: string): string {
  return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    absoluteBadgeUrl,
  )}`;
}

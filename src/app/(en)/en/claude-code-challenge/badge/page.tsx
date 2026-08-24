/**
 * A reader's badge page. English.
 *
 * The whole badge lives in the address: a name and a tier, and nothing else.
 * There is no row to look up, so there is no database, no lookup on view and
 * no stored record of a person that we would then have to be able to delete.
 * That is the owner's decision of 24 August 2026 and it follows from the
 * earlier one: the badge is not presented as proof, so it does not need to be
 * verifiable.
 *
 * **This page exists because LinkedIn cannot be handed a picture.** It takes a
 * link, fetches it, and shows whatever that page declares. Without a page per
 * reader there is no way for a badge with somebody's name on it to appear in a
 * feed at all.
 *
 * `robots: noindex`. These are one address per person, they carry a name, and
 * none of them is a page we want in a search result or in our sitemap. Google
 * indexing thousands of near identical pages with strangers' names on them is
 * the opposite of what this is for.
 *
 * Metadata is built by hand rather than through `constructMetadata`, which
 * would add a canonical and an hreflang pair. Neither makes sense here: there
 * is no French twin of one person's badge.
 */

import type { Metadata } from "next";
import { cleanName, badgeImagePath, parseTier } from "@/lib/challenge/badge";
import { challengePublicUrl } from "@/lib/challenge/public-url";
import { BadgeBroken, BadgeView } from "@/components/challenge/badge-view";
import { UI } from "@/lib/challenge/config";
import { siteConfig } from "@/lib/site-config";

const LOCALE = "en" as const;

type Search = Promise<{ [k: string]: string | string[] | undefined }>;

/** `?n=Marie` and `?n=Marie&n=Bob` both have to end up somewhere sensible. */
function first(v: string | string[] | undefined): string {
  return Array.isArray(v) ? (v[0] ?? "") : (v ?? "");
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Search;
}): Promise<Metadata> {
  const sp = await searchParams;
  const name = cleanName(first(sp.n));
  const tier = parseTier(first(sp.p));

  if (!name || !tier) {
    return { title: UI.badgeBrokenTitle, robots: { index: false, follow: false } };
  }

  const title = `${name}: ${UI.badgePageTitle(tier)}`;
  const description = UI.badgeHonest;
  // Absolute, because LinkedIn fetches it from its own servers and a relative
  // path means nothing to it.
  const image = `${challengePublicUrl()}${badgeImagePath(LOCALE, name, tier)}`;

  return {
    title,
    description,
    robots: { index: false, follow: false },
    openGraph: {
      title,
      description,
      siteName: siteConfig.name,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function BadgePage({
  searchParams,
}: {
  searchParams: Search;
}) {
  const sp = await searchParams;
  const name = cleanName(first(sp.n));
  const tier = parseTier(first(sp.p));

  if (!name || !tier) return <BadgeBroken locale={LOCALE} />;
  return <BadgeView locale={LOCALE} name={name} tier={tier} />;
}

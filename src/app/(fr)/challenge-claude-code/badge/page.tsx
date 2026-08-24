/**
 * La page de badge d'un lecteur. Français.
 *
 * Même structure que la version anglaise, et volontairement les mêmes
 * composants : la langue voyage en prop, pas en second jeu de composants.
 * Voir la version anglaise pour le raisonnement complet.
 */

import type { Metadata } from "next";
import { cleanName, badgeImagePath, parseTier } from "@/lib/challenge/badge";
import { challengePublicUrl } from "@/lib/challenge/public-url";
import { BadgeBroken, BadgeView } from "@/components/challenge/badge-view";
import { UI_FR } from "@/lib/challenge/config.fr";
import { siteConfig } from "@/lib/site-config";

const LOCALE = "fr" as const;

type Search = Promise<{ [k: string]: string | string[] | undefined }>;

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
    return {
      title: UI_FR.badgeBrokenTitle,
      robots: { index: false, follow: false },
    };
  }

  const title = `${name} : ${UI_FR.badgePageTitle(tier)}`;
  const description = UI_FR.badgeHonest;
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

export default async function PageBadge({
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

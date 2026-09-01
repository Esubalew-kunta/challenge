/**
 * La page de carte de score du Benchmark. Anglais.
 *
 * ── Pourquoi elle est arrivée après ─────────────────────────────────────────
 *
 * Elle manquait. `BADGE_PATH.en` annonce `/en/benchmark/badge` depuis le premier
 * jour, la carte de score anglaise offre un bouton « Post on LinkedIn » qui
 * pointe cette adresse, et `next.config.ts` lève même le `noindex` du domaine
 * dessus. La page, elle, n'existait pas : un joueur anglais partageait un lien
 * vers un 404. Découvert le 1er septembre, en retirant le lien de certification.
 *
 * Personne ne l'avait vu parce que la page anglaise du Benchmark est encore
 * gatée : elle n'a pas eu de vrai joueur.
 *
 * Le reste est le miroir exact de la page française, dont les commentaires
 * portent le raisonnement complet : indexable délibérément parce que LinkedIn
 * refuse l'aperçu d'une page `noindex`, pas de `canonical` parce que LinkedIn la
 * suivrait, et `og:url` obligatoire, construite sur `challengePublicUrl()` et
 * non sur `siteConfig.url`, le Benchmark ne vivant pas encore sur aimakers.fr.
 */

import type { Metadata } from "next";
import {
  badgeImagePath,
  badgePath,
  parseBadgeInput,
  BADGE_SIZE,
} from "@/lib/benchmark/badge";
import { challengePublicUrl } from "@/lib/challenge/public-url";
import { BadgeBroken, BadgeView } from "@/components/benchmark/badge-view";
import { MAX_SCORE } from "@/lib/benchmark/engine";
import { trackById } from "@/lib/benchmark/content";
import { s, sf } from "@/lib/benchmark/strings";
import { siteConfig } from "@/lib/site-config";

const LOCALE = "en" as const;

type Search = Promise<{ [k: string]: string | string[] | undefined }>;

/** Un paramètre répété arrive en tableau. On lit le premier plutôt que de
 *  laisser `String(tableau)` fabriquer un « a,b » que rien ne validerait. */
function reader(sp: Awaited<Search>) {
  return (key: string): string | null => {
    const v = sp[key];
    if (Array.isArray(v)) return v[0] ?? null;
    return v ?? null;
  };
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Search;
}): Promise<Metadata> {
  const input = parseBadgeInput(reader(await searchParams));

  if (!input) {
    return {
      title: s("badge.brokenTitle", LOCALE),
      robots: { index: false, follow: false },
    };
  }

  const track = trackById(input.trackId, LOCALE);
  const tierLabel = s(`tier.${input.tier}`, LOCALE);
  const title = sf("badge.pageTitle", { nom: input.name, niveau: tierLabel }, LOCALE);
  const description = sf(
    "badge.pageLead",
    { score: input.score, max: MAX_SCORE, track: track?.name ?? "" },
    LOCALE,
  );

  const base = challengePublicUrl();
  const image = `${base}${badgeImagePath(input, LOCALE)}`;
  const canonicalUrl = `${base}${badgePath(input, LOCALE)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: image,
          width: BADGE_SIZE.wide.width,
          height: BADGE_SIZE.wide.height,
          alt: title,
        },
      ],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default async function PageBenchmarkBadgeEn({
  searchParams,
}: {
  searchParams: Search;
}) {
  const input = parseBadgeInput(reader(await searchParams));
  if (!input) return <BadgeBroken locale={LOCALE} />;

  return <BadgeView locale={LOCALE} input={input} base={challengePublicUrl()} />;
}

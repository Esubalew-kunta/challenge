/**
 * La page de badge du Benchmark. Français.
 *
 * C'est cette adresse, et jamais l'image, qu'on donne à LinkedIn : LinkedIn va
 * chercher la page et affiche ce qu'elle déclare en `og:image`. La page existe
 * donc d'abord pour ses métadonnées, et ensuite pour ce qu'elle montre.
 *
 * **Indexable, et ce n'est pas un oubli.** La première version posait
 * `noindex`, par symétrie avec le Benchmark et parce que le contenu de la page
 * vient de son adresse. Ça ne marche pas : **LinkedIn refuse de fabriquer un
 * aperçu pour une page qui se déclare `noindex`**, et l'aperçu est la seule
 * raison d'être de cette page. Un badge sans aperçu est un lien nu dans un fil,
 * ce qu'a montré le premier partage réel, le 31 août.
 *
 * Ce que `noindex` protégeait était mince : la page n'est dans aucun sitemap,
 * rien n'y mène sauf des publications LinkedIn, qui sont en nofollow, et le nom
 * imprimé passe déjà par une liste blanche étroite. La perte, elle, était
 * totale.
 *
 * Pas de `canonical` vers `/benchmark` non plus, et c'est délibéré : LinkedIn
 * suit la canonique et afficherait alors l'aperçu de la page du Benchmark à la
 * place du badge, ce qui reviendrait au même problème par un autre chemin.
 *
 * L'en-tête `X-Robots-Tag` du domaine vercel.app portait le même refus, pour
 * tout le site : voir l'exception ajoutée dans `next.config.ts`.
 */

import type { Metadata } from "next";
import { badgeImagePath, parseBadgeInput, BADGE_SIZE } from "@/lib/benchmark/badge";
import { challengePublicUrl } from "@/lib/challenge/public-url";
import { BadgeBroken, BadgeView } from "@/components/benchmark/badge-view";
import { MAX_SCORE } from "@/lib/benchmark/engine";
import { trackById } from "@/lib/benchmark/content";
import { s, sf } from "@/lib/benchmark/strings";
import { siteConfig } from "@/lib/site-config";

const LOCALE = "fr" as const;

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

  /* Un lien cassé reste hors index : il n'y a rien à y prévisualiser, et une
     page d'erreur indexée ne sert personne. */
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

  /* Absolue, et construite depuis l'adresse publique plutôt que depuis la
     requête. LinkedIn va chercher cette image depuis ses propres serveurs : un
     chemin relatif ne lui dit rien, et une adresse prise sur une machine de
     développement est une adresse qu'il ne peut pas atteindre, donc l'image
     n'apparaîtrait simplement jamais. Ce défaut a déjà été livré une fois,
     dans les e-mails de fiches. */
  const image = `${challengePublicUrl()}${badgeImagePath(input, LOCALE)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
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

export default async function PageBenchmarkBadge({
  searchParams,
}: {
  searchParams: Search;
}) {
  const input = parseBadgeInput(reader(await searchParams));
  if (!input) return <BadgeBroken locale={LOCALE} />;

  /* La date d'obtention est calculée ici, une fois, puis descendue en argument.
     Un `new Date()` dans le composant rendrait la page différente d'un appel à
     l'autre et empêcherait tout rendu statique. */
  const now = new Date();

  return (
    <BadgeView
      locale={LOCALE}
      input={input}
      base={challengePublicUrl()}
      issued={{ year: now.getFullYear(), month: now.getMonth() + 1 }}
    />
  );
}

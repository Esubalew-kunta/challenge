import type { Metadata } from "next";
import { siteConfig } from "./site-config";
import { alternateFor, localeFromPath, OG_LOCALE } from "./i18n";

type MetadataArgs = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
};

export function constructMetadata({
  title,
  description,
  path,
  ogImage = "/og-default.png",
}: MetadataArgs): Metadata {
  const url = `${siteConfig.url}${path}`;
  const locale = localeFromPath(path);

  // hreflang : chaque page désigne son équivalent dans l'autre langue, plus
  // x-default sur le FR (marché principal). `alternateFor` renvoie null quand
  // la page n'existe que d'un côté — on omet alors le lien plutôt que d'en
  // fabriquer un qui 404, ce que Google traite comme une erreur.
  const other = alternateFor(path, locale === "fr" ? "en" : "fr");
  const languages: Record<string, string> = {};
  if (other) {
    languages[locale === "fr" ? "en" : "fr"] = `${siteConfig.url}${other}`;
    languages[locale] = url;
    languages["x-default"] =
      locale === "fr" ? url : `${siteConfig.url}${other}`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: url,
      ...(other ? { languages } : {}),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: OG_LOCALE[locale],
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

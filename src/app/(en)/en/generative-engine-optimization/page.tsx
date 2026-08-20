import { constructMetadata } from "@/lib/metadata";
import { SeoGeoPage } from "@/components/pages/seo-geo-page";
import { SEO_GEO } from "@/lib/offer-pages/seo-geo-locale";

/**
 * /en/generative-engine-optimization — équivalent anglais, NON INDEXÉ.
 *
 * Gate décidé par le propriétaire (`docs/EN-LAUNCH.md` §4). Lire l'en-tête de
 * `seo-geo.en.ts` : le master de cette page remet « +70% Sage » dans la
 * méta-description, chiffre que la page française a retiré et qui motive
 * précisément le gate. Cette version suit le français (447 prompts suivis).
 *
 * Le `robots` ci-dessous et l'appartenance à `EN_GATED` vont ENSEMBLE. Pour
 * publier : retirer le `robots` ET déplacer la route vers `EN_PUBLISHED`.
 */

export const metadata = {
  ...constructMetadata({
    title: SEO_GEO.en.meta.title,
    description: SEO_GEO.en.meta.description,
    path: "/en/generative-engine-optimization",
  }),
  robots: { index: false, follow: true },
};

export default function Page() {
  return <SeoGeoPage locale="en" />;
}

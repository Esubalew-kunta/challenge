import { constructMetadata } from "@/lib/metadata";
import { SeoGeoPage } from "@/components/pages/seo-geo-page";
import { SEO_GEO } from "@/lib/offer-pages/seo-geo-locale";

/**
 * /seo-geo — le gabarit vit dans `components/pages/seo-geo-page.tsx` et sert
 * les deux langues. La page FRANÇAISE reste indexable et au sitemap ; seule
 * l'anglaise est gatée.
 */

export const metadata = constructMetadata({
  title: SEO_GEO.fr.meta.title,
  description: SEO_GEO.fr.meta.description,
  path: "/seo-geo",
});

export default function Page() {
  return <SeoGeoPage locale="fr" />;
}

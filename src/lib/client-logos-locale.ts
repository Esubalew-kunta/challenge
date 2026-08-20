import { clientLogos } from "./site-config";
import { homepageContentEn } from "./homepage-content.en";
import type { Locale } from "./i18n";

/**
 * Mur de logos, par langue.
 *
 * `clientLogos` porte une citation client par logo (affichée au survol). Ces
 * citations sont écrites en français dans `site-config.ts` ; sans ce seam, la
 * home anglaise affichait des citations françaises au survol des logos.
 *
 * On ne duplique pas la copie : les mêmes citations sont déjà traduites dans
 * `homepage-content.en.ts` (bloc `testimonials`). On les rapproche par le nom
 * de l'auteur — une seule source de vérité par langue, et une citation non
 * traduite reste en français plutôt que de disparaître.
 */
type EnTestimonial = { quote: string; name: string; title: string };

const EN_BY_AUTHOR: Map<string, EnTestimonial> = new Map(
  homepageContentEn.testimonials.items.map((item) => [
    item.name as string,
    item as EnTestimonial,
  ]),
);

export function clientLogosFor(locale: Locale): typeof clientLogos {
  if (locale === "fr") return clientLogos;

  return clientLogos.map((logo) => {
    if (!("testimonial" in logo) || !logo.testimonial) return logo;
    const en = EN_BY_AUTHOR.get(logo.testimonial.author);
    if (!en) return logo;
    return {
      ...logo,
      testimonial: { ...logo.testimonial, quote: en.quote, role: en.title },
    };
  }) as typeof clientLogos;
}

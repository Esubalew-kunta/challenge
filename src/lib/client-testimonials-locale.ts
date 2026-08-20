import type { Locale } from "./i18n";
import { clientLogos } from "./site-config";
import { clientTestimonialsEn } from "./client-testimonials.en";

export type SelectedTestimonial = {
  readonly quote: string;
  readonly author: string;
  readonly role: string;
  readonly photo: string;
  readonly company: string;
};

/**
 * Témoignages de `clientLogos` sélectionnés par nom de client, dans la langue
 * de la page.
 *
 * Les pages qui s'en servent (secteurs, hub de formation) stockent des NOMS DE
 * CLIENT comme clé de jointure. Côté FR on lit `clientLogos` ; côté EN on lit
 * la table de traductions, qui est indexée par les mêmes noms.
 *
 * Un client absent de la table anglaise est OMIS côté EN plutôt que rendu en
 * français : afficher une citation française sous un gabarit anglais est le
 * défaut que ce module corrige. La table couvre aujourd'hui tous les clients
 * cités par les pages livrées ; en ajouter un nouveau aux données FR sans
 * l'ajouter ici fait donc disparaître sa carte côté EN — c'est volontairement
 * visible plutôt que silencieusement français.
 */
export function getClientTestimonials(
  locale: Locale,
  names: readonly string[],
): SelectedTestimonial[] {
  return names.flatMap((name) => {
    if (locale === "en") {
      const en = clientTestimonialsEn[name];
      return en ? [{ ...en, company: name }] : [];
    }
    const client = clientLogos.find((c) => c.name === name);
    return client?.testimonial
      ? [{ ...client.testimonial, company: name }]
      : [];
  });
}

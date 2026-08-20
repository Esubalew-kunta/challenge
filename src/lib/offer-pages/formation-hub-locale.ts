import type { Locale } from "../i18n";
import { withResolvedEnLinks } from "../en-links";
import {
  formationHubMeta,
  formationHubSchema,
  formationHubHero,
  formationHubStats,
  formationHubCatalogue,
  formationHubApproach,
  formationHubPedagogy,
  formationHubTrainers,
  formationHubTestimonials,
  formationHubTestimonialItems,
  formationHubCatalogueForm,
  formationHubChampions,
  formationHubGallery,
  formationHubFaq,
  formationHubRelated,
  formationHubCities,
  formationHubFinalCta,
} from "./formation-hub";
import {
  formationHubMetaEn,
  formationHubSchemaEn,
  formationHubHeroEn,
  formationHubStatsEn,
  formationHubCatalogueEn,
  formationHubApproachEn,
  formationHubPedagogyEn,
  formationHubTrainersEn,
  formationHubTestimonialsEn,
  formationHubTestimonialItemsEn,
  formationHubCatalogueFormEn,
  formationHubChampionsEn,
  formationHubGalleryEn,
  formationHubFaqEn,
  formationHubRelatedEn,
  formationHubCitiesEn,
  formationHubFinalCtaEn,
} from "./formation-hub.en";

/**
 * Sélection par langue du contenu du hub de formation.
 *
 * Type STRUCTUREL, pas dérivé du bloc français : les modules de contenu sont
 * figés en `as const`, donc un `typeof` du FR porterait les chaînes françaises
 * comme types littéraux et rejetterait l'anglais. Même raison que
 * `transformation-locale.ts`.
 *
 * Les deux blocs propres au marché français (`related`, `cities`) sont typés
 * `| null` : côté anglais ils valent `null` et le gabarit ne rend pas la
 * section. Voir les commentaires des deux modules de contenu.
 */
type Link = { readonly label: string; readonly href: string };

export type FormationHubContent = {
  readonly meta: { readonly title: string; readonly description: string };
  readonly schema: {
    readonly breadcrumbHome: string;
    readonly breadcrumbCurrent: string;
    readonly courseListName: string;
    readonly coursePrefix: string;
  };
  readonly hero: {
    readonly badge: string;
    readonly titleLead: string;
    readonly titleHighlight: string;
    readonly subtitle: string;
    readonly ctaCatalogue: string;
    readonly ctaCall: string;
    readonly imageAlt: string;
    readonly medallionAlt: string;
    readonly ratingLabel: string;
  };
  readonly stats: readonly {
    readonly value: string;
    readonly label: string;
  }[];
  readonly catalogue: {
    readonly kicker: string;
    readonly title: string;
    readonly intro: string;
    readonly audienceLabel: string;
    readonly cardCta: string;
  };
  readonly approach: {
    readonly kicker: string;
    readonly title: string;
    readonly points: readonly string[];
    readonly photoAlt: string;
  };
  readonly pedagogy: {
    readonly kicker: string;
    readonly title: string;
    readonly items: readonly {
      readonly title: string;
      readonly description: string;
    }[];
    readonly photoAlt: string;
    readonly pullQuote: string;
  };
  readonly trainers: { readonly kicker: string; readonly title: string };
  readonly testimonials: { readonly kicker: string; readonly title: string };
  readonly testimonialItems: readonly {
    readonly quote: string;
    readonly author: string;
    readonly role: string;
    readonly company: string;
    readonly photo: string;
  }[];
  readonly catalogueForm: {
    readonly kicker: string;
    readonly title: string;
    readonly text: string;
    readonly bullets: readonly string[];
  };
  readonly champions: {
    readonly kicker: string;
    readonly title: string;
    readonly text: string;
    readonly cta: Link;
  };
  readonly gallery: {
    readonly kicker: string;
    readonly title: string;
    readonly intro: string;
    readonly placeholder: string;
  };
  readonly faq: {
    readonly title: string;
    readonly items: readonly {
      readonly question: string;
      readonly answer: string;
    }[];
  };
  readonly related: {
    readonly title: string;
    readonly readMore: string;
    readonly items: readonly {
      readonly title: string;
      readonly href: string;
      readonly description: string;
    }[];
  } | null;
  readonly cities: {
    readonly label: string;
    readonly suffix: string;
    readonly items: readonly {
      readonly ville: string;
      readonly slug: string;
    }[];
  } | null;
  readonly finalCta: {
    readonly title: string;
    readonly subtitle: string;
    readonly primaryCta: Link;
    readonly secondaryCta: Link;
  };
};

const FR: FormationHubContent = {
  meta: formationHubMeta,
  schema: formationHubSchema,
  hero: formationHubHero,
  stats: formationHubStats,
  catalogue: formationHubCatalogue,
  approach: formationHubApproach,
  pedagogy: formationHubPedagogy,
  trainers: formationHubTrainers,
  testimonials: formationHubTestimonials,
  testimonialItems: formationHubTestimonialItems,
  catalogueForm: formationHubCatalogueForm,
  champions: formationHubChampions,
  gallery: formationHubGallery,
  faq: formationHubFaq,
  related: formationHubRelated,
  cities: formationHubCities,
  finalCta: formationHubFinalCta,
};

const EN: FormationHubContent = withResolvedEnLinks({
  meta: formationHubMetaEn,
  schema: formationHubSchemaEn,
  hero: formationHubHeroEn,
  stats: formationHubStatsEn,
  catalogue: formationHubCatalogueEn,
  approach: formationHubApproachEn,
  pedagogy: formationHubPedagogyEn,
  trainers: formationHubTrainersEn,
  testimonials: formationHubTestimonialsEn,
  testimonialItems: formationHubTestimonialItemsEn,
  catalogueForm: formationHubCatalogueFormEn,
  champions: formationHubChampionsEn,
  gallery: formationHubGalleryEn,
  faq: formationHubFaqEn,
  related: formationHubRelatedEn,
  cities: formationHubCitiesEn,
  finalCta: formationHubFinalCtaEn,
});

export const FORMATION_HUB_CONTENT: Record<Locale, FormationHubContent> = {
  fr: FR,
  en: EN,
};

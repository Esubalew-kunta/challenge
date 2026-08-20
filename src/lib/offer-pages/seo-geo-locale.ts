import type { Locale } from "../i18n";
import { withResolvedEnLinks } from "../en-links";
import {
  seoGeoMeta, seoGeoHero, seoGeoProof, seoGeoShift, seoGeoMethod,
  seoGeoTogether, seoGeoWhyUs, seoGeoCommitment, seoGeoFaq, seoGeoFinalCta,
  seoGeoChrome,
} from "./seo-geo";
import {
  seoGeoMetaEn, seoGeoHeroEn, seoGeoProofEn, seoGeoShiftEn, seoGeoMethodEn,
  seoGeoTogetherEn, seoGeoWhyUsEn, seoGeoCommitmentEn, seoGeoFaqEn,
  seoGeoFinalCtaEn, seoGeoChromeEn,
} from "./seo-geo.en";

/**
 * Sélection par langue de /seo-geo. `Widen` retire les types littéraux du bloc
 * français, qui rejetteraient l'anglais (même approche que `fde-locale.ts`).
 */
type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer U)[]
        ? readonly Widen<U>[]
        : { readonly [K in keyof T]: Widen<T[K]> };

type SeoGeoBundle = {
  meta: Widen<typeof seoGeoMeta>;
  hero: Widen<typeof seoGeoHero>;
  proof: Widen<typeof seoGeoProof>;
  shift: Widen<typeof seoGeoShift>;
  method: Widen<typeof seoGeoMethod>;
  together: Widen<typeof seoGeoTogether>;
  whyUs: Widen<typeof seoGeoWhyUs>;
  commitment: Widen<typeof seoGeoCommitment>;
  faq: Widen<typeof seoGeoFaq>;
  finalCta: Widen<typeof seoGeoFinalCta>;
  chrome: Widen<typeof seoGeoChrome>;
};

const FR: SeoGeoBundle = {
  meta: seoGeoMeta, hero: seoGeoHero, proof: seoGeoProof, shift: seoGeoShift,
  method: seoGeoMethod, together: seoGeoTogether, whyUs: seoGeoWhyUs,
  commitment: seoGeoCommitment, faq: seoGeoFaq, finalCta: seoGeoFinalCta,
  chrome: seoGeoChrome,
};

const EN: SeoGeoBundle = withResolvedEnLinks({
  meta: seoGeoMetaEn, hero: seoGeoHeroEn, proof: seoGeoProofEn,
  shift: seoGeoShiftEn, method: seoGeoMethodEn, together: seoGeoTogetherEn,
  whyUs: seoGeoWhyUsEn, commitment: seoGeoCommitmentEn, faq: seoGeoFaqEn,
  finalCta: seoGeoFinalCtaEn, chrome: seoGeoChromeEn,
});

export const SEO_GEO: Record<Locale, SeoGeoBundle> = { fr: FR, en: EN };

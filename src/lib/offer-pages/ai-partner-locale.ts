import type { Locale } from "../i18n";
import { withResolvedEnLinks } from "../en-links";
import { homepageContent } from "../site-config";
import { homepageContentEn } from "../homepage-content.en";
import {
  aiPartnerMeta,
  aiPartnerSchema,
  aiPartnerHero,
  aiPartnerPhases,
  aiPartnerFinalCta,
} from "./ai-partner";
import {
  aiPartnerMetaEn,
  aiPartnerSchemaEn,
  aiPartnerHeroEn,
  aiPartnerPhasesEn,
  aiPartnerOfferEn,
  aiPartnerFinalCtaEn,
} from "./ai-partner.en";

/**
 * Sélection par langue du contenu de la page d'offre.
 *
 * Type STRUCTUREL, pas dérivé du bloc français : les modules de contenu sont
 * figés en `as const`, donc un `typeof` du FR porterait les chaînes françaises
 * comme types littéraux et rejetterait l'anglais.
 *
 * Le bloc `offer` vient de deux endroits différents, et c'est voulu : côté FR
 * de `site-config.ts`, qui en est la source de vérité et le partage avec
 * d'autres pages ; côté EN de `ai-partner.en.ts`, parce que
 * `homepage-content.en.ts` ne porte pas ce bloc (il a `offers`, les cartes de
 * la home, ce qui n'est pas la même chose).
 */
type Link = { readonly label: string; readonly href: string };

type Phase = {
  readonly title: string;
  readonly subtitle: string;
  readonly summary: string;
  readonly items: readonly string[];
};

export type AiPartnerContent = {
  readonly meta: { readonly title: string; readonly description: string };
  readonly schema: {
    readonly breadcrumbHome: string;
    readonly breadcrumbCurrent: string;
  };
  readonly hero: {
    readonly badge: string;
    readonly titleLine1: string;
    readonly titleLine2: string;
    readonly intro: string;
    readonly cta: Link;
  };
  readonly phasesIntro: {
    readonly badge: string;
    readonly title: string;
    readonly intro: string;
  };
  readonly offer: {
    readonly badge: string;
    readonly title: string;
    readonly subtitle: string;
    readonly model: readonly {
      readonly number: string;
      readonly title: string;
      readonly description: string;
    }[];
    readonly phase1: Phase;
    readonly phase2: Phase;
    readonly phase3: Phase;
  };
  /** Bandeau de rareté — même source que la home, jamais réécrit ici. */
  readonly urgency: string;
  readonly finalCta: {
    readonly title: string;
    readonly subtitle: string;
    readonly primaryCta: Link;
  };
};

const FR: AiPartnerContent = {
  meta: aiPartnerMeta,
  schema: aiPartnerSchema,
  hero: aiPartnerHero,
  phasesIntro: aiPartnerPhases,
  offer: homepageContent.offer,
  urgency: homepageContent.finalCta.urgency,
  finalCta: aiPartnerFinalCta,
};

const EN: AiPartnerContent = withResolvedEnLinks({
  meta: aiPartnerMetaEn,
  schema: aiPartnerSchemaEn,
  hero: aiPartnerHeroEn,
  phasesIntro: aiPartnerPhasesEn,
  offer: aiPartnerOfferEn,
  // La version anglaise existe déjà dans `homepage-content.en.ts` et traduit
  // fidèlement le FR (« physically limited, not artificially » compris) : on la
  // réutilise plutôt que d'en écrire une seconde.
  urgency: homepageContentEn.finalCta.urgency,
  finalCta: aiPartnerFinalCtaEn,
});

export const AI_PARTNER: Record<Locale, AiPartnerContent> = { fr: FR, en: EN };

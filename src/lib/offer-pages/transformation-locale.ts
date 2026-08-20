import type { Locale } from "../i18n";
import { withResolvedEnLinks } from "../en-links";
import {
  transformationMeta,
  transformationHero,
  proofBar,
  transformationProblem,
  transformationMechanism,
  transformationHorizons,
  transformationPhases,
  transformationCaseStudy,
  transformationTestimonials,
  transformationFaq,
  transformationFinalCta,
  transformationSchema,
  transformationAudit,
  transformationGepromed,
  transformationMidCta,
  transformationComparison,
  transformationRelated,
} from "./transformation";
import {
  transformationMetaEn,
  transformationHeroEn,
  proofBarEn,
  transformationProblemEn,
  transformationMechanismEn,
  transformationHorizonsEn,
  transformationPhasesEn,
  transformationCaseStudyEn,
  transformationTestimonialsEn,
  transformationFaqEn,
  transformationFinalCtaEn,
  transformationSchemaEn,
  transformationAuditEn,
  transformationGepromedEn,
  transformationMidCtaEn,
  transformationComparisonEn,
  transformationRelatedEn,
} from "./transformation.en";

/**
 * Type STRUCTUREL, pas dérivé de `typeof` du bloc français.
 *
 * Les modules de contenu sont figés en `as const` : un type dérivé du FR porte
 * les chaînes françaises comme types littéraux et rejette l'anglais. C'est
 * exactement ce qui a cassé deux fois sur la home (`Testimonial`,
 * `ConnectionGroup`).
 */
type Link = { readonly label: string; readonly href: string };

export type TransformationContent = {
  readonly meta: { readonly title: string; readonly description: string };
  readonly hero: {
    readonly badge: string;
    readonly title: string;
    readonly subtitle: string;
    readonly manifesteLink: Link;
    readonly cta: Link;
    readonly statsLine: string;
  };
  readonly proofBar: {
    readonly kicker: string;
    readonly stat: {
      readonly value: string;
      readonly label: string;
      readonly detail: string;
      readonly link: Link;
    };
  };
  readonly problem: {
    readonly badge: string;
    readonly title: string;
    readonly intro: string;
    readonly pains: readonly {
      readonly number: string;
      readonly title: string;
      readonly description: string;
      readonly figure: string;
      readonly figureLabel: string;
    }[];
  };
  readonly mechanism: {
    readonly badge: string;
    readonly title: string;
    readonly paragraphs: readonly string[];
    readonly stat: { readonly value: string; readonly label: string };
    readonly systemsCaption: string;
  };
  readonly horizons: {
    readonly badge: string;
    readonly title: string;
    readonly intro: string;
    readonly buildLabel: string;
    readonly items: readonly {
      readonly period: string;
      readonly title: string;
      readonly description: string;
      readonly build: string;
      readonly phaseLabel: string;
    }[];
    readonly note: string;
  };
  readonly phases: {
    readonly badge: string;
    readonly title: string;
    readonly subtitle: string;
    readonly items: readonly {
      readonly number: string;
      readonly brand: string;
      readonly duration: string;
      readonly summary: string;
      readonly actions: readonly string[];
      readonly gain: string;
      readonly illustration: string;
    }[];
  };
  readonly caseStudy: {
    readonly badge: string;
    readonly title: string;
    readonly subtitle: string;
  };
  readonly testimonials: { readonly badge: string; readonly title: string };
  readonly faq: {
    readonly badge: string;
    readonly title: string;
    readonly items: readonly {
      readonly question: string;
      readonly answer: string;
    }[];
  };
  readonly finalCta: {
    readonly title: string;
    readonly subtitle: string;
    readonly cta: Link;
  };
  readonly schema: {
    readonly breadcrumbHome: string;
    readonly breadcrumbCurrent: string;
    readonly serviceName: string;
    readonly serviceType: string;
    readonly areaServed: readonly string[];
    readonly serviceDescription: string;
  };
  readonly audit: {
    readonly badge: string;
    readonly title: string;
    readonly intro: string;
    readonly stepsTitle: string;
    readonly steps: readonly {
      readonly number: string;
      readonly title: string;
      readonly description: string;
    }[];
    readonly deliverablesTitle: string;
    readonly deliverables: readonly string[];
  };
  readonly gepromed: {
    readonly title: string;
    readonly subtitle: string;
    readonly cover: string;
    readonly metric: string;
    readonly metricLabel: string;
    readonly before: string;
    readonly after: string;
    readonly how: string;
    readonly tags: readonly string[];
    readonly readMore: Link;
  };
  readonly midCta: { readonly question: string };
  readonly comparison: {
    readonly badge: string;
    readonly title: string;
    readonly subtitle: string;
  };
  readonly related: readonly {
    readonly title: string;
    readonly href: string;
    readonly description: string;
  }[];
};

const FR: TransformationContent = {
  meta: transformationMeta,
  hero: transformationHero,
  proofBar,
  problem: transformationProblem,
  mechanism: transformationMechanism,
  horizons: transformationHorizons,
  phases: transformationPhases,
  caseStudy: transformationCaseStudy,
  testimonials: transformationTestimonials,
  faq: transformationFaq,
  finalCta: transformationFinalCta,
  schema: transformationSchema,
  audit: transformationAudit,
  gepromed: transformationGepromed,
  midCta: transformationMidCta,
  comparison: transformationComparison,
  related: transformationRelated,
};

const EN: TransformationContent = withResolvedEnLinks({
  meta: transformationMetaEn,
  hero: transformationHeroEn,
  proofBar: proofBarEn,
  problem: transformationProblemEn,
  mechanism: transformationMechanismEn,
  horizons: transformationHorizonsEn,
  phases: transformationPhasesEn,
  caseStudy: transformationCaseStudyEn,
  testimonials: transformationTestimonialsEn,
  faq: transformationFaqEn,
  finalCta: transformationFinalCtaEn,
  schema: transformationSchemaEn,
  audit: transformationAuditEn,
  gepromed: transformationGepromedEn,
  midCta: transformationMidCtaEn,
  comparison: transformationComparisonEn,
  related: transformationRelatedEn,
});

export const TRANSFORMATION: Record<Locale, TransformationContent> = {
  fr: FR,
  en: EN,
};

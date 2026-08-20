import type { Locale } from "../i18n";
import { withResolvedEnLinks } from "../en-links";
import {
  dataPlatformMeta, dataPlatformSchema, dataPlatformHero, dataPlatformSilos,
  dataPlatformSteps, dataPlatformCase, dataPlatformDeliverables,
  dataPlatformNext, dataPlatformFaq, dataPlatformRelated, dataPlatformCta,
} from "./data-platform";
import {
  dataPlatformMetaEn, dataPlatformSchemaEn, dataPlatformHeroEn,
  dataPlatformSilosEn, dataPlatformStepsEn, dataPlatformCaseEn,
  dataPlatformDeliverablesEn, dataPlatformNextEn, dataPlatformFaqEn,
  dataPlatformRelatedEn, dataPlatformCtaEn,
} from "./data-platform.en";

/**
 * Sélection par langue du contenu de /plateforme-data-ia.
 * Type STRUCTUREL, pas dérivé du bloc français (cf. `transformation-locale.ts`).
 */
type Section = {
  readonly badge: string;
  readonly title: string;
  readonly description?: string;
};

export type DataPlatformContent = {
  readonly meta: { readonly title: string; readonly description: string };
  readonly schema: {
    readonly breadcrumbHome: string;
    readonly breadcrumbCurrent: string;
    readonly serviceName: string;
    readonly serviceType: string;
    readonly serviceDescription: string;
    readonly areaServed: readonly string[];
  };
  readonly hero: {
    readonly badge: string;
    readonly h1Lead: string;
    readonly h1Highlight: string;
    readonly intro: string;
    readonly stats: readonly {
      readonly target: number;
      readonly prefix?: string;
      readonly suffix?: string;
      readonly decimals?: number;
      readonly label: string;
    }[];
    readonly proofCaption: string;
  };
  readonly silos: Section;
  readonly steps: Section & {
    readonly items: readonly {
      readonly number: string;
      readonly title: string;
      readonly description: string;
    }[];
  };
  readonly caseStudy: Section & {
    readonly kicker: string;
    readonly headline: string;
    readonly body: string;
    readonly footnote: string;
  };
  readonly deliverables: Section & { readonly items: readonly string[] };
  readonly next: Section & {
    readonly paragraphs: readonly string[];
    readonly link: { readonly label: string; readonly href: string };
  };
  readonly faq: {
    readonly title: string;
    readonly items: readonly {
      readonly question: string;
      readonly answer: string;
    }[];
  };
  readonly related: readonly {
    readonly title: string;
    readonly href: string;
    readonly description: string;
  }[];
  readonly cta: {
    readonly title: string;
    readonly subtitle: string;
    readonly label: string;
  };
};

const FR: DataPlatformContent = {
  meta: dataPlatformMeta, schema: dataPlatformSchema, hero: dataPlatformHero,
  silos: dataPlatformSilos, steps: dataPlatformSteps,
  caseStudy: dataPlatformCase, deliverables: dataPlatformDeliverables,
  next: dataPlatformNext, faq: dataPlatformFaq, related: dataPlatformRelated,
  cta: dataPlatformCta,
};

const EN: DataPlatformContent = withResolvedEnLinks({
  meta: dataPlatformMetaEn, schema: dataPlatformSchemaEn,
  hero: dataPlatformHeroEn, silos: dataPlatformSilosEn,
  steps: dataPlatformStepsEn, caseStudy: dataPlatformCaseEn,
  deliverables: dataPlatformDeliverablesEn, next: dataPlatformNextEn,
  faq: dataPlatformFaqEn, related: dataPlatformRelatedEn,
  cta: dataPlatformCtaEn,
});

export const DATA_PLATFORM: Record<Locale, DataPlatformContent> = {
  fr: FR,
  en: EN,
};

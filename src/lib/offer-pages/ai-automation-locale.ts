import type { Locale } from "../i18n";
import { withResolvedEnLinks } from "../en-links";
import { homepageContent } from "../site-config";
import { aiPartnerComparisonEn } from "./ai-partner.en";
import {
  aiAutomationMeta, aiAutomationSchema, aiAutomationHero, aiAutomationWiring,
  aiAutomationProcesses, aiAutomationSteps, aiAutomationToolVsSystem,
  aiAutomationWithWithout, aiAutomationStack, aiAutomationFaq,
  aiAutomationRelated, aiAutomationCta,
} from "./ai-automation";
import {
  aiAutomationMetaEn, aiAutomationSchemaEn, aiAutomationHeroEn,
  aiAutomationWiringEn, aiAutomationProcessesEn, aiAutomationStepsEn,
  aiAutomationToolVsSystemEn, aiAutomationWithWithoutEn, aiAutomationStackEn,
  aiAutomationFaqEn, aiAutomationRelatedEn, aiAutomationCtaEn,
} from "./ai-automation.en";

/** Sélection par langue de /automatisation-ia-workflow. Type STRUCTUREL. */
type Section = {
  readonly badge: string;
  readonly title: string;
  readonly description?: string;
};

export type AiAutomationContent = {
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
    readonly proofPhoto: { readonly src: string; readonly alt: string };
    readonly proofCaption: string;
  };
  readonly wiring: Section;
  readonly processes: Section & {
    readonly items: readonly {
      readonly icon: string;
      readonly title: string;
      readonly description: string;
    }[];
  };
  readonly steps: Section & {
    readonly items: readonly {
      readonly number: string;
      readonly title: string;
      readonly description: string;
    }[];
  };
  readonly toolVsSystem: Section & {
    readonly emphasis: string;
    readonly paragraph1: string;
    readonly paragraph2Lead: string;
    readonly paragraph2Rest: string;
    readonly paragraph3: string;
  };
  readonly withWithout: Section & {
    readonly withUs: readonly string[];
    readonly without: readonly string[];
  };
  readonly stack: Section & {
    readonly items: readonly {
      readonly name: string;
      readonly description: string;
    }[];
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
  readonly cta: { readonly title: string; readonly subtitle: string };
};

const FR: AiAutomationContent = {
  meta: aiAutomationMeta, schema: aiAutomationSchema, hero: aiAutomationHero,
  wiring: aiAutomationWiring, processes: aiAutomationProcesses,
  steps: aiAutomationSteps, toolVsSystem: aiAutomationToolVsSystem,
  withWithout: {
    ...aiAutomationWithWithout,
    withUs: homepageContent.offer.comparison.withUs,
    without: homepageContent.offer.comparison.without,
  },
  stack: aiAutomationStack, faq: aiAutomationFaq,
  related: aiAutomationRelated, cta: aiAutomationCta,
};

const EN: AiAutomationContent = withResolvedEnLinks({
  meta: aiAutomationMetaEn, schema: aiAutomationSchemaEn,
  hero: aiAutomationHeroEn, wiring: aiAutomationWiringEn,
  processes: aiAutomationProcessesEn, steps: aiAutomationStepsEn,
  toolVsSystem: aiAutomationToolVsSystemEn,
  withWithout: {
    ...aiAutomationWithWithoutEn,
    withUs: aiPartnerComparisonEn.withUs,
    without: aiPartnerComparisonEn.without,
  },
  stack: aiAutomationStackEn, faq: aiAutomationFaqEn,
  related: aiAutomationRelatedEn, cta: aiAutomationCtaEn,
});

export const AI_AUTOMATION: Record<Locale, AiAutomationContent> = {
  fr: FR,
  en: EN,
};

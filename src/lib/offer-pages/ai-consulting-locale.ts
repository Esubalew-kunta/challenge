import type { Locale } from "../i18n";
import { withResolvedEnLinks } from "../en-links";
import {
  aiConsultingMeta, aiConsultingSchema, aiConsultingHero,
  aiConsultingComparison, aiConsultingBuilds, aiConsultingMethod,
  aiConsultingIcp, aiConsultingFaq, aiConsultingRelated, aiConsultingCta,
} from "./ai-consulting";
import {
  aiConsultingMetaEn, aiConsultingSchemaEn, aiConsultingHeroEn,
  aiConsultingComparisonEn, aiConsultingBuildsEn, aiConsultingMethodEn,
  aiConsultingIcpEn, aiConsultingFaqEn, aiConsultingRelatedEn,
  aiConsultingCtaEn,
} from "./ai-consulting.en";

/** Sélection par langue de /agence-ia. Type STRUCTUREL (cf. transformation-locale). */
type Section = {
  readonly badge: string;
  readonly title: string;
  readonly description: string;
};

export type AiConsultingContent = {
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
  readonly comparison: Section;
  readonly builds: Section & {
    readonly items: readonly {
      readonly icon: string;
      readonly title: string;
      readonly description: string;
    }[];
  };
  readonly method: Section & {
    readonly items: readonly {
      readonly number: string;
      readonly title: string;
      readonly description: string;
    }[];
    readonly link: { readonly label: string; readonly href: string };
  };
  readonly icp: Section & {
    readonly items: readonly {
      readonly title: string;
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

const FR: AiConsultingContent = {
  meta: aiConsultingMeta, schema: aiConsultingSchema, hero: aiConsultingHero,
  comparison: aiConsultingComparison, builds: aiConsultingBuilds,
  method: aiConsultingMethod, icp: aiConsultingIcp, faq: aiConsultingFaq,
  related: aiConsultingRelated, cta: aiConsultingCta,
};

const EN: AiConsultingContent = withResolvedEnLinks({
  meta: aiConsultingMetaEn, schema: aiConsultingSchemaEn,
  hero: aiConsultingHeroEn, comparison: aiConsultingComparisonEn,
  builds: aiConsultingBuildsEn, method: aiConsultingMethodEn,
  icp: aiConsultingIcpEn, faq: aiConsultingFaqEn,
  related: aiConsultingRelatedEn, cta: aiConsultingCtaEn,
});

export const AI_CONSULTING: Record<Locale, AiConsultingContent> = {
  fr: FR,
  en: EN,
};

import type { Locale } from "../i18n";
import { withResolvedEnLinks } from "../en-links";
import {
  aiOsMeta, aiOsSchema, aiOsHero, aiOsProblem, aiOsThesis, aiOsFleet,
  aiOsCaseStudy, aiOsInstall, aiOsDogfooding, aiOsFaq,
  aiOsRelated, aiOsFinalCta,
} from "./ai-os";
import {
  aiOsMetaEn, aiOsSchemaEn, aiOsHeroEn, aiOsProblemEn, aiOsThesisEn,
  aiOsFleetEn, aiOsCaseStudyEn, aiOsInstallEn, aiOsDogfoodingEn, aiOsFaqEn,
  aiOsRelatedEn, aiOsFinalCtaEn,
} from "./ai-os.en";

/**
 * Sélection par langue du contenu de /ai-operating-system.
 *
 * Type STRUCTUREL, pas dérivé du bloc français : les modules sont figés en
 * `as const`, donc un `typeof` du FR porterait les chaînes françaises comme
 * types littéraux et rejetterait l'anglais.
 */
type Link = { readonly label: string; readonly href: string };

export type AiOsContent = {
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
    readonly title: string;
    readonly subtitle: string;
    readonly cta: Link;
  };
  readonly problem: {
    readonly badge: string;
    readonly title: string;
    readonly intro: string;
    readonly pains: readonly {
      readonly number: string;
      readonly title: string;
      readonly description: string;
    }[];
  };
  readonly thesis: {
    readonly badge: string;
    readonly title: string;
    readonly paragraphs: readonly string[];
    readonly layersCaption: string;
    readonly layers: readonly {
      readonly number: string;
      readonly name: string;
      readonly detail: string;
    }[];
  };
  readonly fleet: {
    readonly badge: string;
    readonly title: string;
    readonly subtitle: string;
  };
  readonly caseStudy: {
    readonly badge: string;
    readonly title: string;
    readonly context: string;
    readonly company: string;
  };
  readonly install: {
    readonly badge: string;
    readonly title: string;
    readonly subtitle: string;
    readonly steps: readonly {
      readonly number: string;
      readonly phase: string;
      readonly duration: string;
      readonly title: string;
      readonly detail: string;
    }[];
  };
  readonly dogfooding: {
    readonly badge: string;
    readonly title: string;
    readonly text: string;
    readonly stats: readonly {
      readonly value: string;
      readonly label: string;
    }[];
  };
  readonly faq: {
    readonly badge: string;
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
  readonly finalCta: {
    readonly title: string;
    readonly subtitle: string;
    readonly cta: Link;
  };
};

const FR: AiOsContent = {
  meta: aiOsMeta, schema: aiOsSchema, hero: aiOsHero, problem: aiOsProblem,
  thesis: aiOsThesis, fleet: aiOsFleet, caseStudy: aiOsCaseStudy,
  install: aiOsInstall, dogfooding: aiOsDogfooding, faq: aiOsFaq,
  related: aiOsRelated, finalCta: aiOsFinalCta,
};

const EN: AiOsContent = withResolvedEnLinks({
  meta: aiOsMetaEn, schema: aiOsSchemaEn, hero: aiOsHeroEn,
  problem: aiOsProblemEn, thesis: aiOsThesisEn, fleet: aiOsFleetEn,
  caseStudy: aiOsCaseStudyEn, install: aiOsInstallEn,
  dogfooding: aiOsDogfoodingEn, faq: aiOsFaqEn,
  related: aiOsRelatedEn,
  finalCta: aiOsFinalCtaEn,
});

export const AI_OS: Record<Locale, AiOsContent> = { fr: FR, en: EN };

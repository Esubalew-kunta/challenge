import type { Locale } from "./i18n";
import { withResolvedEnLinks } from "./en-links";
import { whyWorkWithUs } from "./why-work-with-us";
import { whyWorkWithUsChrome } from "./why-work-with-us-chrome";
import { whyWorkWithUsEn, whyWorkWithUsChromeEn } from "./why-work-with-us.en";

/** Sélection par langue de /pourquoi-ai-makers. Type STRUCTUREL. */
export type WhyWorkContent = {
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly badge: string;
  readonly titre: string;
  readonly intro: string;
  readonly faits: readonly {
    readonly chiffre: string;
    readonly label: string;
  }[];
  readonly methode: readonly {
    readonly titre: string;
    readonly description: string;
  }[];
  readonly chrome: {
    readonly breadcrumbHome: string;
    readonly breadcrumbCurrent: string;
    readonly methodKicker: string;
    readonly methodTitle: string;
    readonly clientsKicker: string;
    readonly clientsTitle: string;
    readonly wordsKicker: string;
    readonly wordsTitle: string;
    readonly outroLead: string;
    readonly outroCaseStudies: string;
    readonly outroMiddle: string;
    readonly outroCareers: string;
    readonly outroEnd: string;
    readonly ctaTitle: string;
    readonly ctaSubtitle: string;
    readonly ctaPrimary: string;
    readonly ctaSecondary: string;
  };
};

const FR: WhyWorkContent = {
  metaTitle: whyWorkWithUs.metaTitle,
  metaDescription: whyWorkWithUs.metaDescription,
  badge: whyWorkWithUs.badge,
  titre: whyWorkWithUs.titre,
  intro: whyWorkWithUs.intro,
  faits: whyWorkWithUs.faits,
  methode: whyWorkWithUs.methode,
  chrome: whyWorkWithUsChrome,
};

const EN: WhyWorkContent = withResolvedEnLinks({
  metaTitle: whyWorkWithUsEn.metaTitle,
  metaDescription: whyWorkWithUsEn.metaDescription,
  badge: whyWorkWithUsEn.badge,
  titre: whyWorkWithUsEn.titre,
  intro: whyWorkWithUsEn.intro,
  faits: whyWorkWithUsEn.faits,
  methode: whyWorkWithUsEn.methode,
  chrome: whyWorkWithUsChromeEn,
});

export const WHY_WORK: Record<Locale, WhyWorkContent> = { fr: FR, en: EN };

/**
 * Clients cités, par NOM. Liste unique pour les deux langues : c'est une clé de
 * jointure, pas du contenu. Les citations traduites vivent dans
 * `client-testimonials.en.ts`, les logos dans `clientLogos`.
 */
export const WHY_WORK_CLIENTS = whyWorkWithUs.temoinClients;

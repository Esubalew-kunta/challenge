import type { Locale } from "./i18n";
import { withResolvedEnLinks } from "./en-links";
import {
  aboutMeta, aboutSchemaText, aboutHero, aboutFounder, aboutPrinciples,
  aboutTeam, aboutProof, aboutStats, aboutCta,
} from "./about";
import {
  aboutMetaEn, aboutSchemaTextEn, aboutHeroEn, aboutFounderEn,
  aboutPrinciplesEn, aboutTeamEn, aboutProofEn, aboutStatsEn, aboutCtaEn,
} from "./about.en";

/** Sélection par langue de /a-propos. Type STRUCTUREL. */
type Link = { readonly label: string; readonly href: string };
type TitledItem = { readonly title: string; readonly description: string };

export type AboutContent = {
  readonly meta: { readonly title: string; readonly description: string };
  readonly schema: {
    readonly breadcrumbHome: string;
    readonly breadcrumbCurrent: string;
    readonly orgDescription: string;
    readonly founderJobTitle: string;
    readonly numberOfEmployees: number;
  };
  readonly hero: {
    readonly badge: string;
    readonly title: string;
    readonly intro: string;
  };
  readonly founder: {
    readonly badge: string;
    readonly name: string;
    readonly photoAlt: string;
    readonly paragraphs: readonly string[];
    readonly storyLink: Link;
    readonly linkedinLabel: string;
  };
  readonly principles: {
    readonly badge: string;
    readonly title: string;
    readonly items: readonly TitledItem[];
  };
  readonly team: {
    readonly badge: string;
    readonly title: string;
    readonly intro: string;
    readonly roles: readonly TitledItem[];
  };
  readonly proof: {
    readonly badge: string;
    readonly title: string;
    readonly intro: string;
    readonly items: readonly {
      readonly system: string;
      readonly fact: string;
    }[];
    readonly closing: string;
    readonly ctaLabel: string;
    readonly headline: string;
    readonly headlineTail: string;
  };
  readonly stats: readonly {
    readonly value: string;
    readonly label: string;
  }[];
  readonly cta: {
    readonly title: string;
    readonly subtitle: string;
    readonly label: string;
  };
};

const FR: AboutContent = {
  meta: aboutMeta, schema: aboutSchemaText, hero: aboutHero,
  founder: aboutFounder, principles: aboutPrinciples, team: aboutTeam,
  proof: aboutProof, stats: aboutStats, cta: aboutCta,
};

const EN: AboutContent = withResolvedEnLinks({
  meta: aboutMetaEn, schema: aboutSchemaTextEn, hero: aboutHeroEn,
  founder: aboutFounderEn, principles: aboutPrinciplesEn, team: aboutTeamEn,
  proof: aboutProofEn, stats: aboutStatsEn, cta: aboutCtaEn,
});

export const ABOUT: Record<Locale, AboutContent> = { fr: FR, en: EN };

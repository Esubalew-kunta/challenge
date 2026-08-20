import type { Locale } from "./i18n";
import { withResolvedEnLinks } from "./en-links";
import {
  founderMeta, founderSchema, founderHero, founderChapters, founderProof,
  founderOutro, founderCta,
} from "./founder";
import {
  founderMetaEn, founderSchemaEn, founderHeroEn, founderChaptersEn,
  founderProofEn, founderOutroEn, founderCtaEn,
} from "./founder.en";

/** Sélection par langue de /fondateur. Type STRUCTUREL. */
type Link = { readonly label: string; readonly href: string };

export type FounderContent = {
  readonly meta: { readonly title: string; readonly description: string };
  readonly schema: {
    readonly breadcrumbHome: string;
    readonly breadcrumbCurrent: string;
    readonly jobTitle: string;
  };
  readonly hero: {
    readonly breadcrumbHome: string;
    readonly breadcrumbCurrent: string;
    readonly badge: string;
    readonly titleLead: string;
    readonly titleHighlight: string;
    readonly intro: string;
    readonly photoAlt: string;
  };
  readonly chapters: readonly {
    readonly kicker: string;
    readonly titre: string;
    readonly paragraphes: readonly string[];
  }[];
  readonly proof: readonly {
    readonly value: string;
    readonly label: string;
  }[];
  readonly outro: {
    readonly text: string;
    readonly linkFirm: Link;
    readonly linkLinkedin: Link;
  };
  readonly cta: {
    readonly title: string;
    readonly subtitle: string;
    readonly primary: Link;
    readonly secondary: Link;
  };
};

const FR: FounderContent = {
  meta: founderMeta, schema: founderSchema, hero: founderHero,
  chapters: founderChapters, proof: founderProof, outro: founderOutro,
  cta: founderCta,
};

const EN: FounderContent = withResolvedEnLinks({
  meta: founderMetaEn, schema: founderSchemaEn, hero: founderHeroEn,
  chapters: founderChaptersEn, proof: founderProofEn, outro: founderOutroEn,
  cta: founderCtaEn,
});

export const FOUNDER: Record<Locale, FounderContent> = { fr: FR, en: EN };

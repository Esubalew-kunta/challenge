import type { Locale } from "./i18n";
import { withResolvedEnLinks } from "./en-links";
import {
  glossaryMeta, glossaryCategories, glossaryChrome, type GlossaryCategory,
} from "./glossary";
import {
  glossaryMetaEn, glossaryCategoriesEn, glossaryChromeEn,
} from "./glossary.en";

/** Sélection par langue du glossaire. Type STRUCTUREL. */
type Link = { readonly label: string; readonly href: string };

export type GlossaryContent = {
  readonly meta: { readonly title: string; readonly description: string };
  readonly categories: readonly GlossaryCategory[];
  readonly chrome: {
    readonly breadcrumbHome: string;
    readonly breadcrumbCurrent: string;
    readonly badge: string;
    readonly h1: string;
    readonly intro: string;
    readonly tocAria: string;
    readonly htmlLang: string;
    readonly schemaName: string;
    readonly schemaDescription: string;
    readonly missingLead: string;
    readonly missingLink: Link;
    readonly missingTail: string;
    readonly dedicatedLead: string;
    readonly dedicatedFde: Link;
    readonly dedicatedMiddle: string;
    readonly dedicatedRole: Link;
    readonly dedicatedEnd: string;
    readonly offerSubtitle: string;
    readonly ctaTitle: string;
    readonly ctaSubtitle: string;
    readonly ctaLabel: string;
  };
};

const FR: GlossaryContent = {
  meta: glossaryMeta,
  categories: glossaryCategories,
  chrome: glossaryChrome,
};

const EN: GlossaryContent = withResolvedEnLinks({
  meta: glossaryMetaEn,
  categories: glossaryCategoriesEn,
  chrome: glossaryChromeEn,
});

export const GLOSSARY: Record<Locale, GlossaryContent> = { fr: FR, en: EN };

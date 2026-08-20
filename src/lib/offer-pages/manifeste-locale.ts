import type { Locale } from "../i18n";
import { withResolvedEnLinks } from "../en-links";
import {
  manifesteMeta, manifesteHero, manifesteBloc1, manifesteBloc2,
  manifesteRespiration1, manifesteBloc3, manifesteRespiration2,
  manifesteBloc4, manifesteBloc5, manifesteSources,
} from "./manifeste";
import {
  manifesteMetaEn, manifesteHeroEn, manifesteBloc1En, manifesteBloc2En,
  manifesteRespiration1En, manifesteBloc3En, manifesteRespiration2En,
  manifesteBloc4En, manifesteBloc5En, manifesteSourcesEn,
} from "./manifeste.en";

/**
 * Sélection par langue de /pourquoi-maintenant. Type STRUCTUREL.
 *
 * `htmlLang` alimente `inLanguage` du JSON-LD Article : il était écrit en dur
 * à « fr-FR », donc une page anglaise se serait déclarée française auprès des
 * moteurs (TICKET-JSONLD-INLANGUAGE du handover).
 */
type Link = { readonly label: string; readonly href: string };

type Stat = {
  readonly value: string;
  readonly label: string;
  readonly source: string;
};

export type ManifesteContent = {
  readonly meta: { readonly title: string; readonly description: string };
  readonly htmlLang: string;
  readonly hero: { readonly title: string; readonly subtitle: string };
  readonly bloc1: {
    readonly index: string;
    readonly title: string;
    readonly paragraphs: readonly string[];
    readonly stats: readonly Stat[];
  };
  readonly bloc2: {
    readonly index: string;
    readonly title: string;
    readonly paragraphs: readonly string[];
  };
  readonly respiration1: { readonly value: string; readonly label: string };
  readonly bloc3: {
    readonly index: string;
    readonly title: string;
    readonly paragraphs: readonly string[];
  };
  readonly respiration2: { readonly value: string; readonly label: string };
  readonly bloc4: {
    readonly index: string;
    readonly title: string;
    readonly paragraphs: readonly string[];
    readonly punchline: string;
  };
  readonly bloc5: {
    readonly title: string;
    readonly body: string;
    readonly ctaPrimary: Link;
    readonly ctaSecondary: Link;
  };
  readonly sources: {
    readonly title: string;
    readonly items: readonly { readonly label: string; readonly href: string }[];
  };
};

const FR: ManifesteContent = {
  meta: manifesteMeta,
  htmlLang: "fr-FR",
  hero: manifesteHero,
  bloc1: manifesteBloc1,
  bloc2: manifesteBloc2,
  respiration1: manifesteRespiration1,
  bloc3: manifesteBloc3,
  respiration2: manifesteRespiration2,
  bloc4: manifesteBloc4,
  bloc5: manifesteBloc5,
  sources: manifesteSources,
};

const EN: ManifesteContent = withResolvedEnLinks({
  meta: manifesteMetaEn,
  htmlLang: "en-US",
  hero: manifesteHeroEn,
  bloc1: manifesteBloc1En,
  bloc2: manifesteBloc2En,
  respiration1: manifesteRespiration1En,
  bloc3: manifesteBloc3En,
  respiration2: manifesteRespiration2En,
  bloc4: manifesteBloc4En,
  bloc5: manifesteBloc5En,
  sources: manifesteSourcesEn,
});

export const MANIFESTE: Record<Locale, ManifesteContent> = { fr: FR, en: EN };

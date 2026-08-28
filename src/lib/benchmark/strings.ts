/**
 * Le Benchmark des Makers, lecture des chaînes.
 *
 * Les tables vivent dans `strings.fr.ts` et `strings.en.ts`, qui ne contiennent
 * que des données recopiées du pack de contenu. Tout ce qui *lit* ces tables
 * est ici, écrit une fois pour les deux langues : les gardes-fous n'ont aucune
 * raison d'être moins stricts en anglais qu'en français.
 *
 * **La locale est un argument obligatoire.** Elle pourrait avoir une valeur par
 * défaut, et ce serait le seul vrai piège de ce fichier : un composant anglais
 * qui oublie de la passer rendrait du français, en production, sans qu'aucun
 * test ni aucune construction ne s'en plaigne. Un argument manquant, lui, ne
 * compile pas.
 */

import type { Locale } from "../i18n.ts";
import { STRINGS_FR, DRAFT_KEYS_FR } from "./strings.fr.ts";
import { STRINGS_EN, DRAFT_KEYS_EN } from "./strings.en.ts";

export type { Locale };

const TABLES: Record<Locale, Record<string, string>> = {
  fr: STRINGS_FR,
  en: STRINGS_EN,
};

const DRAFTS: Record<Locale, ReadonlySet<string>> = {
  fr: DRAFT_KEYS_FR,
  en: DRAFT_KEYS_EN,
};

/** Le français fait référence : c'est lui qui définit le jeu de clés attendu. */
export const REFERENCE_LOCALE: Locale = "fr";

export function isDraft(key: string, locale: Locale): boolean {
  return DRAFTS[locale].has(key);
}

const isProduction = process.env.NODE_ENV === "production";

/**
 * Les chaînes provisoires bloquaient la construction de production. C'était le
 * bon réglage tant que personne n'avait décidé de les mettre en ligne ; ce
 * n'est plus le cas depuis le 28 août, où la page part en démonstration avec
 * elles.
 *
 * Le refus est donc devenu volontaire : `BENCHMARK_STRICT_STRINGS=1` le
 * rallume, par exemple dans une vérification avant lancement public. Sans lui,
 * une chaîne provisoire passe et se signale dans le journal de construction.
 *
 * Ce qui n'a pas changé : une chaîne **vide** fait toujours échouer la
 * construction. Une provisoire est du texte non validé, une vide est un trou à
 * l'écran, et les deux ne coûtent pas la même chose.
 */
const strictDrafts = process.env.BENCHMARK_STRICT_STRINGS === "1";
const warnedDrafts = new Set<string>();

/**
 * Lit une chaîne. Une clé vide n'est jamais rendue telle quelle : en
 * développement elle s'affiche en évidence, en production elle lève, parce
 * qu'un écran à trou qui part en ligne coûte plus cher qu'une page qui refuse
 * de se construire.
 */
export function s(key: string, locale: Locale): string {
  const value = TABLES[locale][key];

  if (value === undefined) {
    throw new Error(`Benchmark : clé de chaîne inconnue « ${key} » (${locale})`);
  }

  if (value === "") {
    if (isProduction) {
      throw new Error(
        `Benchmark : la chaîne « ${key} » (${locale}) n'a pas encore été fournie par le pack de contenu`,
      );
    }
    return `⟦${key}⟧`;
  }

  if (isProduction && DRAFTS[locale].has(key)) {
    if (strictDrafts) {
      throw new Error(
        `Benchmark : la chaîne « ${key} » (${locale}) est provisoire et n'a été validée ni par Youssef ni par Othmane. ` +
          `Retirer BENCHMARK_STRICT_STRINGS pour la mettre en ligne quand même.`,
      );
    }
    const seen = `${locale}:${key}`;
    if (!warnedDrafts.has(seen)) {
      warnedDrafts.add(seen);
      console.warn(`[BENCHMARK] chaîne provisoire en ligne : ${key} (${locale})`);
    }
  }

  return value;
}

/** Remplace les {jetons} d'un gabarit. Les valeurs viennent du moteur. */
export function sf(
  key: string,
  values: Record<string, string | number>,
  locale: Locale,
): string {
  return s(key, locale).replace(/\{(\w+)\}/g, (whole, token: string) =>
    token in values ? String(values[token]) : whole,
  );
}

/** Les clés encore vides. Sert au rapport de complétude pendant le build. */
export function missingStringKeys(locale: Locale): string[] {
  const table = TABLES[locale];
  return Object.keys(table).filter((key) => table[key] === "");
}

/** Les clés provisoires encore en attente de validation. */
export function draftStringKeys(locale: Locale): string[] {
  return [...DRAFTS[locale]].filter((key) => TABLES[locale][key] !== "");
}

/**
 * Les clés que le français porte et que la locale demandée n'a pas — et
 * l'inverse. Une locale ne se contente pas d'être remplie : elle doit répondre
 * aux mêmes clés, sinon `s()` lève au premier écran qui demande la manquante,
 * chez le lecteur et pas au build.
 */
export function keyDriftAgainstReference(locale: Locale): {
  missing: string[];
  extra: string[];
} {
  const reference = Object.keys(TABLES[REFERENCE_LOCALE]);
  const theirs = new Set(Object.keys(TABLES[locale]));
  return {
    missing: reference.filter((key) => !theirs.has(key)),
    extra: [...theirs].filter((key) => !reference.includes(key)),
  };
}

/**
 * Une locale est-elle servable ?
 *
 * Sert à une seule décision, prise dans la route : tant que l'anglais n'est pas
 * traduit, `/en/benchmark` ne part pas en production. Sans cette porte, la
 * construction échouerait sur la première chaîne vide et emporterait tout le
 * site avec elle — une page inachevée ne doit coûter que sa propre absence.
 */
export function localeIsComplete(locale: Locale): boolean {
  const drift = keyDriftAgainstReference(locale);
  return (
    drift.missing.length === 0 &&
    drift.extra.length === 0 &&
    missingStringKeys(locale).length === 0
  );
}

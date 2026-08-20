import type { Locale } from "./i18n";
import { secteurs, type Secteur } from "./secteurs";
import { secteursEn } from "./secteurs.en";

/**
 * Sélection par langue des données sectorielles + du chrome du gabarit.
 *
 * Deux choses vivent ici, et pas ailleurs :
 *
 * 1. **Les données** (`getSecteurs`) — FR et EN sont deux tableaux distincts,
 *    pas une traduction à la volée.
 * 2. **Les URL** (`sectorHref`, `formationHref`) — les deux langues ne
 *    partagent ni préfixe ni slug, et un lien formation doit se rabattre sur le
 *    FR tant que la page EN n'existe pas.
 *
 * Le CHROME du gabarit (intitulés de section) ne vit PAS ici mais dans
 * `ui-strings.ts`, avec le reste des libellés partagés : un second dictionnaire
 * en parallèle finirait par diverger du premier.
 *
 * `Secteur` est un type ANNOTÉ (champs `string`), pas un `as const` : l'anglais
 * peut donc réutiliser le même type sans se faire rejeter par des types
 * littéraux français. C'est la panne qui a frappé deux fois la home ; elle ne
 * se reproduit pas ici.
 */
export function getSecteurs(locale: Locale): readonly Secteur[] {
  return locale === "en" ? secteursEn : secteurs;
}

export function getSecteurBySlug(
  locale: Locale,
  slug: string,
): Secteur | undefined {
  return getSecteurs(locale).find((s) => s.slug === slug);
}

/** Base de l'URL d'une page sectorielle. Les deux préfixes diffèrent : le hub
 *  EN est `/en/ai-by-industry` mais ses pages vivent sous `/en/industries/*`.
 *  C'est ce que disent les masters — à ne pas « corriger » ici. */
export const SECTOR_BASE: Record<Locale, string> = {
  fr: "/secteurs",
  en: "/en/industries",
};

export const SECTOR_HUB: Record<Locale, string> = {
  fr: "/secteurs",
  en: "/en/ai-by-industry",
};

export function sectorHref(locale: Locale, slug: string): string {
  return `${SECTOR_BASE[locale]}/${slug}`;
}

/** Ré-export : la traduction « slug FR de formation → URL » vit désormais dans
 *  `formations-locale.ts`, avec le reste des URL de cette collection. Une seule
 *  implémentation, appelée depuis les deux gabarits. */
export { formationHrefFromFrSlug as formationHref } from "./formations-locale";

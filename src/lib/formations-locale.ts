import type { Locale } from "./i18n";
import { ROUTE_MAP } from "./i18n";
import { resolveEnHref } from "./en-links";
import {
  formations,
  formationPhotos,
  type Formation,
  type FormationTool,
} from "./formations";
import { formationsEn, formationPhotosEn } from "./formations.en";

/**
 * Sélection par langue des programmes de formation + construction des URL.
 *
 * Même partage des rôles que pour les secteurs : les DONNÉES vivent ici, le
 * CHROME du gabarit vit dans `ui-strings.ts`.
 */
export function getFormations(locale: Locale): readonly Formation[] {
  return locale === "en" ? formationsEn : formations;
}

export function getFormationBySlug(
  locale: Locale,
  slug: string,
): Formation | undefined {
  return getFormations(locale).find((f) => f.slug === slug);
}

export function getOtherFormationsFor(
  locale: Locale,
  slug: string,
): readonly Formation[] {
  return getFormations(locale).filter((f) => f.slug !== slug);
}

/**
 * Photos de session dans la langue de la page.
 *
 * Seuls les `alt` changent ; les fichiers sont les mêmes. Passer par cet
 * accesseur évite qu'une page anglaise rende des `alt` français, ce qui était
 * le cas des six pages programme livrées.
 */
export function getFormationPhotos(locale: Locale): readonly FormationTool[] {
  return locale === "en" ? formationPhotosEn : formationPhotos;
}

/**
 * Programmes désignés par leurs slugs FRANÇAIS, rendus dans la langue de la
 * page.
 *
 * Les pages sectorielles joignent leurs formations par slug FR
 * (`secteur.formationsLiees`). Elles lisaient donc le tableau FRANÇAIS quelle
 * que soit la langue : les huit pages `/en/industries/*` livrées affichaient des
 * cartes de formation entièrement en français (noms, accroches, badges).
 *
 * Le slug de l'objet renvoyé est celui de SA langue : construire son URL passe
 * par `formationSlugHref(locale, f.slug)`, pas par `formationHrefFromFrSlug`.
 */
export function getFormationsByFrSlugs(
  locale: Locale,
  frSlugs: readonly string[],
): readonly Formation[] {
  if (locale === "fr") {
    return formations.filter((f) => frSlugs.includes(f.slug));
  }
  return frSlugs.flatMap((frSlug) => {
    const en = ROUTE_MAP[`/formation-ia-entreprise/${frSlug}`];
    const slug = en?.split("/").pop();
    const match = slug ? formationsEn.find((f) => f.slug === slug) : undefined;
    return match ? [match] : [];
  });
}

export const FORMATION_HUB: Record<Locale, string> = {
  fr: "/formation-ia-entreprise",
  en: "/en/ai-training-for-teams",
};

/**
 * URL d'une page programme dans la locale courante.
 *
 * Les slugs EN sont ceux de `formations.en.ts` (`ai-literacy`,
 * `claude-training`…), pas les slugs FR : le gabarit reçoit déjà l'entrée de la
 * bonne langue, donc `f.slug` est le bon segment des deux côtés.
 */
export function formationSlugHref(locale: Locale, slug: string): string {
  return `${FORMATION_HUB[locale]}/${slug}`;
}

/**
 * Traduit un slug FR de formation vers l'URL EN correspondante.
 *
 * Sert aux pages qui stockent des slugs FRANÇAIS comme clé de jointure — les
 * secteurs (`formationsLiees`) notamment. Passe par ROUTE_MAP, puis
 * `resolveEnHref` rabat sur le FR tant que la page EN n'est pas publiée.
 */
export function formationHrefFromFrSlug(locale: Locale, frSlug: string): string {
  const fr = `/formation-ia-entreprise/${frSlug}`;
  if (locale === "fr") return fr;
  const en = ROUTE_MAP[fr];
  return en ? resolveEnHref(en) : fr;
}

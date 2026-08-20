import { homepageContent } from "./site-config";
import { homepageContentEn } from "./homepage-content.en";
import { withResolvedEnLinks } from "./en-links";
import type { Locale } from "./i18n";

/**
 * Contenu de la page d'accueil, par langue.
 *
 * Les sections de la home lisaient `homepageContent` directement, en portée
 * module : elles étaient donc françaises par construction, et c'est ce qui
 * bloquait toute page d'accueil anglaise. Une seule table ici, et chaque
 * section prend un `locale` qui vaut « fr » par défaut — le rendu français ne
 * peut pas bouger, même si un appelant oublie la prop.
 */
export const HOMEPAGE = {
  fr: homepageContent,
  // Les CTA anglais visent les URL finales : on les rabat sur le FR tant que la
  // page EN n'est pas publiée, plutôt que de servir un 404.
  en: withResolvedEnLinks(homepageContentEn),
} as const;

export type HomepageLocale = Locale;

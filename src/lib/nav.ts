/**
 * Sélection du chrome de navigation par langue.
 *
 * Point d'entrée unique pour Header, Footer, MegaMenu et MobileNav : ces
 * composants importaient jusqu'ici les données FR directement, ce qui rendait
 * toute page EN à moitié française — c'est le blocage noté
 * TICKET-I18N-* dans les masters.
 *
 * Les types viennent des structures FR : le EN doit garder exactement la même
 * forme, sinon un champ oublié ne se voit qu'au rendu.
 */
import {
  navItems as navItemsFr,
  megaMenu as megaMenuFr,
  footerNav as footerNavFr,
} from "./site-config";
import {
  navItemsEn,
  megaMenuEn,
  footerNavEn,
} from "./site-config.en";
import { EN_PUBLISHED, type Locale } from "./i18n";
import { resolveEnHref as resolveHref } from "./en-links";

type NavItems = readonly { readonly label: string; readonly href: string }[];

// Signature volontairement structurelle : les données sont figées en `as const`,
// donc chaque groupe est un tuple de types littéraux distincts. Un générique s'y
// contraint au premier élément rencontré et rejette les suivants. Les champs
// annexes (description, etc.) survivent au spread, et l'objet complet est
// recasté au retour de chaque accesseur.
const mapItems = (items: readonly Record<string, unknown>[]) =>
  items.map((i) => ({ ...i, href: resolveHref(String(i.href)) }));

export function getNavItems(locale: Locale): NavItems {
  return locale === "en" ? (mapItems(navItemsEn) as unknown as NavItems) : navItemsFr;
}

export function getMegaMenu(locale: Locale) {
  if (locale !== "en") return megaMenuFr;
  return Object.fromEntries(
    Object.entries(megaMenuEn).map(([key, menu]) => [
      key,
      {
        ...menu,
        hubHref: menu.hubHref ? resolveHref(menu.hubHref) : menu.hubHref,
        groups: menu.groups.map((g) => ({ ...g, items: mapItems(g.items) })),
        featured: menu.featured
          ? { ...menu.featured, href: resolveHref(menu.featured.href) }
          : menu.featured,
      },
    ]),
  ) as unknown as typeof megaMenuFr;
}

export function getFooterNav(locale: Locale) {
  if (locale !== "en") return footerNavFr;
  return Object.fromEntries(
    Object.entries(footerNavEn).map(([k, items]) => [k, mapItems(items)]),
  ) as unknown as typeof footerNavFr;
}

/**
 * Racine de chaque arbre : cible du logo et des CTA « accueil ».
 *
 * Même rabattement que les liens de navigation : tant que la home anglaise
 * n'existe pas, le logo renvoie vers la home française plutôt que sur un 404.
 * C'est le lien le plus cliqué d'une page — il ne doit jamais être mort.
 */
export function homeHref(locale: Locale): string {
  if (locale !== "en") return "/";
  return EN_PUBLISHED.has("/en") ? "/en" : "/";
}

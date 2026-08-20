import { EN_EXISTS, ROUTE_MAP_EN_TO_FR } from "./i18n";

/**
 * Rabat un lien EN vers son équivalent FR tant que la page EN n'existe pas.
 *
 * « Existe » se lit dans `EN_EXISTS`, pas dans `EN_PUBLISHED` : une page livrée
 * mais non indexée (cf. `EN_GATED`) est une destination valable pour un lien
 * interne, même si elle reste hors sitemap et hors hreflang.
 *
 * Le contenu anglais est écrit avant les pages : il vise les bonnes URL finales
 * (`/en/ai-transformation`…), dont seule une poignée est livrée. Sans ce
 * rabattement, ces liens renvoient un 404.
 *
 * Envoyer vers la page française est le moindre mal : le visiteur trouve le
 * contenu, dans la mauvaise langue, au lieu de ne rien trouver. Chaque lien se
 * corrige tout seul dès que la page EN entre dans `EN_PUBLISHED`.
 *
 * Ce résolveur vivait dans `nav.ts` et ne couvrait que le chrome (nav, menu,
 * pied de page). Les CTA du CONTENU de la home anglaise ne passaient pas par
 * lui : six d'entre eux pointaient vers des 404 en production. Il est donc
 * remonté ici, partagé par les deux.
 */
export function resolveEnHref(href: string): string {
  if (!href.startsWith("/en")) return href;
  if (EN_EXISTS.has(href)) return href;
  // Les ancres (/en/x#y) : on résout la page, on garde l'ancre.
  const [path, hash] = href.split("#");
  if (EN_EXISTS.has(path)) return href;
  const fr = ROUTE_MAP_EN_TO_FR[path];
  return fr ? (hash ? `${fr}#${hash}` : fr) : "/";
}

/**
 * Applique `resolveEnHref` à toutes les chaînes `/en*` d'un arbre de contenu.
 *
 * Un seul point de passage, appliqué à la donnée anglaise au moment où elle est
 * exposée : il devient impossible d'oublier un CTA dans un composant.
 */
export function withResolvedEnLinks<T>(value: T): T {
  if (typeof value === "string") {
    return (value.startsWith("/en") ? resolveEnHref(value) : value) as T;
  }
  if (Array.isArray(value)) {
    return value.map((item) => withResolvedEnLinks(item)) as T;
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([k, v]) => [
        k,
        withResolvedEnLinks(v),
      ]),
    ) as T;
  }
  return value;
}

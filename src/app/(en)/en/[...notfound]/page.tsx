import { notFound } from "next/navigation";

/**
 * Attrape-tout de l'arbre anglais.
 *
 * `not-found.tsx` posé dans un groupe de routes ne sert que les `notFound()`
 * levés depuis un segment DÉJÀ apparié. Une URL inconnue sous /en n'appariait
 * aucun segment : elle remontait donc à la 404 racine, entièrement en français.
 *
 * Cette route apparie n'importe quel /en/<...> non servi par une vraie page,
 * puis lève `notFound()` — ce qui rend la 404 anglaise du groupe `(en)`, avec
 * le bon `<html lang>`.
 *
 * Elle est la DERNIÈRE candidate du routeur : une route statique ou dynamique
 * existante gagne toujours contre un attrape-tout, donc aucune page réelle
 * n'est masquée.
 */
export default function Page() {
  notFound();
}

/**
 * Les packs de ressources, un par track. Section 10.5 du PRD.
 *
 * **Le téléchargement n'est pas conditionné au score.** Finir suffit : quelqu'un
 * qui sort en débutant est précisément celui à qui le pack sert le plus.
 *
 * Aucun des quatre fichiers n'existe encore. Tant qu'une entrée vaut `null`, le
 * bouton ne s'affiche pas du tout : un bouton de téléchargement qui renvoie une
 * erreur coûte plus de confiance qu'un bouton absent. Le jour où un pack est
 * déposé, on écrit son chemin ici et le bouton apparaît sans toucher un
 * composant.
 *
 * Le chemin attendu est un fichier servi par le site, par exemple
 * `/ressources/benchmark/pack-growth.pdf` déposé dans `public/`.
 */

import type { TrackId } from "./types.ts";

export type Pack = {
  /** Chemin servi par le site. `null` tant que le fichier n'existe pas. */
  href: string | null;
  /** Nom du fichier proposé au téléchargement. */
  filename: string;
};

export const PACKS: Record<TrackId, Pack> = {
  growth: { href: null, filename: "pack-marketing-growth.pdf" },
  eng: { href: null, filename: "pack-engineering-tech.pdf" },
  ops: { href: null, filename: "pack-process-ops.pdf" },
  fin: { href: null, filename: "pack-finance-revops.pdf" },
};

export function packFor(track: TrackId): Pack | null {
  const pack = PACKS[track];
  return pack?.href ? pack : null;
}

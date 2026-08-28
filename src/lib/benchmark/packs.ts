/**
 * Les packs de ressources, un par track. Section 10.5 du PRD.
 *
 * **Le téléchargement n'est pas conditionné au score.** Finir suffit : quelqu'un
 * qui sort en débutant est précisément celui à qui le pack sert le plus.
 *
 * Les quatre fichiers de `public/benchmark/` sont pour l'instant des **fichiers
 * de remplacement**, une page qui dit qu'elle en est un. Ils existent pour que
 * le bouton soit branché, cliquable et testable avant que le contenu réel
 * arrive. Le vrai pack se dépose sous le même nom et rien d'autre ne bouge.
 *
 * Une entrée à `href: null` fait disparaître le bouton plutôt que de proposer un
 * téléchargement en erreur : c'est le comportement à garder si un track perd son
 * fichier.
 */

import type { TrackId } from "./types.ts";

export type Pack = {
  /** Chemin servi par le site. `null` fait disparaître le bouton. */
  href: string | null;
  /** Nom du fichier proposé au téléchargement, celui que le lecteur verra. */
  filename: string;
  /** Vrai tant que le fichier est un remplaçant et non le vrai pack. */
  placeholder: boolean;
};

export const PACKS: Record<TrackId, Pack> = {
  growth: {
    href: "/benchmark/growth.pdf",
    filename: "benchmark-pack-marketing-growth.pdf",
    placeholder: true,
  },
  eng: {
    href: "/benchmark/eng.pdf",
    filename: "benchmark-pack-engineering-tech.pdf",
    placeholder: true,
  },
  ops: {
    href: "/benchmark/ops.pdf",
    filename: "benchmark-pack-process-ops.pdf",
    placeholder: true,
  },
  fin: {
    href: "/benchmark/fin.pdf",
    filename: "benchmark-pack-finance-revops.pdf",
    placeholder: true,
  },
};

export function packFor(track: TrackId): Pack | null {
  const pack = PACKS[track];
  return pack?.href ? pack : null;
}

/** Les tracks dont le pack est encore un fichier de remplacement. Sert au
 *  rapport de complétude, pour que personne n'annonce une ressource qui n'en
 *  est pas une. */
export function placeholderPacks(): TrackId[] {
  return (Object.keys(PACKS) as TrackId[]).filter((id) => PACKS[id].placeholder);
}

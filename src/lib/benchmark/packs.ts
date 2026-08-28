/**
 * Les packs de ressources, un par track. Section 10.5 du PRD.
 *
 * **Le téléchargement n'est pas conditionné au score.** Finir suffit : quelqu'un
 * qui sort en débutant est précisément celui à qui le pack sert le plus.
 *
 * **Les fichiers ne sont pas dans le dépôt.** Ils vivent dans un bucket privé
 * Supabase, `benchmark-packs`, et la route `/api/benchmark-pack` en signe l'accès
 * pour quelques minutes. Trois raisons, dans cet ordre :
 *
 * 1. Ce sont des archives de plusieurs centaines de kilo-octets qui changeront à
 *    chaque skill ajoutée. Un dépôt Git n'oublie jamais une version binaire.
 * 2. Un bucket privé rend le lien inutilisable une fois expiré : le pack se
 *    donne à qui a terminé un parcours, pas à qui devine une URL.
 * 3. Mettre à jour un pack devient un envoi de fichier, pas un déploiement.
 *
 * Ce fichier ne décrit donc plus un chemin public mais un **objet de stockage**.
 * La route est seule à savoir le transformer en lien.
 */

import type { TrackId } from "./types.ts";

export type Pack = {
  /** Nom de l'objet dans le bucket `benchmark-packs`. */
  object: string;
  /** Nom du fichier proposé au téléchargement, celui que le lecteur verra. */
  filename: string;
  /** Vrai tant que le fichier est un remplaçant et non le vrai pack. */
  placeholder: boolean;
};

/**
 * Le bouton est-il actif ?
 *
 * Oui depuis le 28 août : les quatre archives sont en place, chacune avec ses
 * skills, son `INSTRUCTIONS.md` et sa liste de ressources en PDF. Ce drapeau
 * reste parce qu'il coûte une ligne et qu'il éteint le bouton proprement le jour
 * où le stockage est indisponible ou un pack retiré.
 */
export const PACKS_ENABLED = true;

/** Le bucket privé qui porte les archives. */
export const PACKS_BUCKET = "benchmark-packs";

/** Durée de validité d'un lien signé. Assez pour cliquer et télécharger, trop
 *  peu pour être partagé comme une adresse permanente. */
export const PACK_LINK_TTL_SECONDS = 300;

export const PACKS: Record<TrackId, Pack> = {
  growth: {
    object: "pack-growth.zip",
    filename: "benchmark-pack-marketing-growth.zip",
    placeholder: false,
  },
  eng: {
    object: "pack-eng.zip",
    filename: "benchmark-pack-engineering-tech.zip",
    placeholder: false,
  },
  ops: {
    object: "pack-ops.zip",
    filename: "benchmark-pack-process-ops.zip",
    placeholder: false,
  },
  fin: {
    object: "pack-fin.zip",
    filename: "benchmark-pack-finance-revops.zip",
    placeholder: false,
  },
};

export function packFor(track: TrackId): Pack | null {
  return PACKS[track] ?? null;
}

/** L'adresse du bouton. Le lien signé est fabriqué par la route, à la demande :
 *  un lien signé rendu dans la page aurait déjà commencé à expirer avant que le
 *  lecteur ne clique. */
export function packHref(track: TrackId, runCode: string): string {
  return `/api/benchmark-pack?track=${track}&run=${encodeURIComponent(runCode)}`;
}

/** Les tracks dont le pack est encore un fichier de remplacement. Sert au
 *  rapport de complétude, pour que personne n'annonce une ressource qui n'en
 *  est pas une. */
export function placeholderPacks(): TrackId[] {
  return (Object.keys(PACKS) as TrackId[]).filter((id) => PACKS[id].placeholder);
}

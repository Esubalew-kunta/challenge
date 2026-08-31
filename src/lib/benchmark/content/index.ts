/**
 * Le contenu du Benchmark, typé, dans les deux langues.
 *
 * `tracks.ts`, `roles.ts` et `labels.ts` à côté sont des **copies exactes** de
 * ce que fournit le pack de contenu. Elles ne sont jamais annotées, jamais
 * reformatées et jamais retouchées : la seule opération autorisée dessus est
 * la copie de fichier. C'est ce qui permet de les rediffer contre le pack sans
 * discussion. Les fichiers `.en.ts` suivent exactement la même règle.
 *
 * Les types s'appliquent donc ici, à la frontière, et pas dans les données.
 *
 * **Il n'y a pas d'export nu du contenu français.** Un composant qui importait
 * `TRACKS` obtenait du français quelle que soit la page qui le rendait : sur
 * /en/benchmark, ça passait la relecture et ça servait des questions
 * françaises. Tout passe maintenant par `contentFor(locale)`, qui ne compile
 * pas sans locale.
 */

import type { Locale } from "../../i18n.ts";
import type { Track, TrackId, TierKey } from "../types.ts";

import { TRACKS as RAW_TRACKS_FR } from "./tracks.ts";
import { ROLES as RAW_ROLES_FR } from "./roles.ts";
import {
  TIER_LABEL as RAW_TIER_LABEL_FR,
  HASHTAGS as RAW_HASHTAGS_FR,
  POST_LINKEDIN as POST_LINKEDIN_FR,
  DEFI_COLLEGUE as DEFI_COLLEGUE_FR,
} from "./labels.ts";

import { TRACKS as RAW_TRACKS_EN } from "./tracks.en.ts";
import { ROLES as RAW_ROLES_EN } from "./roles.en.ts";
import {
  TIER_LABEL as RAW_TIER_LABEL_EN,
  HASHTAGS as RAW_HASHTAGS_EN,
  POST_LINKEDIN as POST_LINKEDIN_EN,
  DEFI_COLLEGUE as DEFI_COLLEGUE_EN,
} from "./labels.en.ts";

/** Ce qu'une langue doit fournir pour que la page tourne. */
export type LocaleContent = {
  /** Les quatre tracks du PRD, 27 questions chacun, 108 en tout. Un cinquième
   *  s'ajouterait au fichier de contenu sans toucher une ligne de code. */
  TRACKS: Track[];
  ROLES: Record<TrackId, string[]>;
  TIER_LABEL: Record<TierKey, string>;
  HASHTAGS: Record<TrackId, string>;
  POST_LINKEDIN: string;
  DEFI_COLLEGUE: string;
};

const CONTENT: Record<Locale, LocaleContent> = {
  fr: {
    TRACKS: RAW_TRACKS_FR as Track[],
    ROLES: RAW_ROLES_FR as Record<TrackId, string[]>,
    TIER_LABEL: RAW_TIER_LABEL_FR as Record<TierKey, string>,
    HASHTAGS: RAW_HASHTAGS_FR as Record<TrackId, string>,
    POST_LINKEDIN: POST_LINKEDIN_FR,
    DEFI_COLLEGUE: DEFI_COLLEGUE_FR,
  },
  en: {
    TRACKS: RAW_TRACKS_EN as Track[],
    ROLES: RAW_ROLES_EN as Record<TrackId, string[]>,
    TIER_LABEL: RAW_TIER_LABEL_EN as Record<TierKey, string>,
    HASHTAGS: RAW_HASHTAGS_EN as Record<TrackId, string>,
    POST_LINKEDIN: POST_LINKEDIN_EN,
    DEFI_COLLEGUE: DEFI_COLLEGUE_EN,
  },
};

export function contentFor(locale: Locale): LocaleContent {
  return CONTENT[locale];
}

/** Le track demandé, ou `undefined` s'il n'a pas encore de banque. En anglais,
 *  aucun ne l'a tant que la traduction n'est pas livrée : l'onboarding le voit
 *  et refuse de démarrer, ce qui vaut mieux qu'un écran blanc. */
export function trackById(id: string, locale: Locale): Track | undefined {
  return CONTENT[locale].TRACKS.find((track) => track.id === id);
}

/**
 * La banque de cette langue est-elle livrée ?
 *
 * Ne juge pas la forme, seulement la présence : la forme est l'affaire de
 * `assertBankIsWellFormed` et du test de banque. Sert à la même décision que
 * `localeIsComplete` côté chaînes — ne pas construire une page vide.
 */
export function bankIsDelivered(locale: Locale): boolean {
  return CONTENT[locale].TRACKS.length > 0;
}

/* Le classement d'amorçage a été retiré le 31 août. Il remplissait le tableau
   pendant que personne n'avait joué, il a fait son travail, et il coûtait
   désormais plus qu'il ne rapportait : neuf des dix premières places étaient
   du décor, et un lecteur qui reconnaît une entreprise inventée cesse de croire
   au reste du tableau.

   Ces lignes n'ont jamais été écrites en base. Elles étaient fusionnées au
   rendu, dans `board.ts`, et il a suffi de ne plus les fusionner. Le tableau
   brut reste dans `labels.ts`, qui est une copie du pack de contenu et qu'on ne
   modifie pas, mais plus rien ne le lit. */

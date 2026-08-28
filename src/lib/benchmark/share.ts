/**
 * Le lien de défi, celui qu'on colle dans un message à un collègue.
 *
 * **Il était construit sur `window.location.origin`**, c'est-à-dire l'hôte du
 * navigateur qui a joué le parcours. Un parcours joué sur
 * `http://localhost:3000` produisait donc un lien vers localhost, envoyé à
 * quelqu'un pour qui cette adresse ne mène nulle part. Le même défaut sur une
 * URL de prévisualisation Vercel envoie un lien qui mourra avec le déploiement,
 * et la phrase du pack dit « aimakers.fr » juste au-dessus, ce qui rend
 * l'incohérence invisible à la relecture : le texte a l'air juste.
 *
 * L'origine est donc une donnée de configuration, pas une donnée d'exécution.
 * Elle est passée en argument plutôt que lue ici, pour deux raisons : la
 * fonction reste pure et testable, et `siteConfig` reste la seule source de
 * l'adresse canonique du site.
 */

import type { Locale } from "../i18n.ts";

/** Où vit la page, par langue. Un lien reçu doit ouvrir le Benchmark dans la
 *  langue où le parcours a été joué. */
export const BENCHMARK_PATH: Record<Locale, string> = {
  fr: "/benchmark",
  en: "/en/benchmark",
};

export type ChallengeLinkInput = {
  /** L'origine publique du site, sans barre finale. */
  base: string;
  locale: Locale;
  /** Le code de session, quatre caractères. Sert de garde-fou au destinataire :
   *  la page refuse un lien dont le code est mal formé. */
  runCode: string;
  name: string;
  score: number;
  /** Le libellé de niveau déjà traduit, tel qu'il s'affichera au destinataire. */
  tierLabel: string;
};

export function challengeLink({
  base,
  locale,
  runCode,
  name,
  score,
  tierLabel,
}: ChallengeLinkInput): string {
  // Les noms de paramètres restent français dans les deux langues : ce sont des
  // clés, et les traduire couperait en deux le format des liens déjà partagés.
  const params = new URLSearchParams({
    defi: runCode,
    nom: name.trim(),
    score: String(score),
    niveau: tierLabel,
  });

  return `${base.replace(/\/$/, "")}${BENCHMARK_PATH[locale]}?${params}`;
}

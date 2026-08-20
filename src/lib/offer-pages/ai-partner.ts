/**
 * Contenu de la page d'offre /offre (« AI PARTNER »).
 *
 * Extrait de la page, qui portait son copy en JSX inline. Les apostrophes sont
 * reprises À L'IDENTIQUE (`&apos;` = U+0027) : le rendu français ne bouge pas.
 *
 * Le bloc `offer` lui-même (badge, titre, les 4 principes du modèle, les 3
 * phases) n'est PAS recopié ici : il vit dans `site-config.ts`
 * (`homepageContent.offer`) et l'accesseur de langue va l'y chercher. Une seule
 * source de vérité pour des chiffres qui servent aussi ailleurs.
 */

export const aiPartnerMeta = {
  title: "AI PARTNER : votre département IA",
  description:
    "Une offre en 3 phases : audit des process, systèmes IA en production chaque mois, équipes autonomes à 6 mois. Un ingénieur référent, propriété totale de ce qui est construit.",
} as const;

export const aiPartnerSchema = {
  breadcrumbHome: "Accueil",
  breadcrumbCurrent: "Offre AI PARTNER",
} as const;

export const aiPartnerHero = {
  badge: "L'offre AI PARTNER",
  titleLine1: "Votre département IA.",
  titleLine2: "De l'audit au scale.",
  intro:
    "Un ingénieur dédié, des systèmes en production chaque mois, des équipes formées chaque semaine. Et à 6 mois, vous êtes autonomes.",
  cta: { label: "Réserver mon diagnostic gratuit", href: "/contact" },
} as const;

export const aiPartnerPhases = {
  badge: "Les 3 phases",
  title: "Une seule offre. Trois phases. Zéro risque.",
  intro:
    "Chaque phase produit des livrables concrets, pas des slides. Voici exactement ce que vous obtenez.",
} as const;

export const aiPartnerFinalCta = {
  title: "Prêt à cadrer votre transformation ?",
  subtitle:
    "30 minutes pour analyser vos workflows et repartir avec vos 3 premiers quick wins IA, que vous travailliez avec nous ou non.",
  primaryCta: { label: "Réserver mon diagnostic gratuit", href: "/contact" },
} as const;

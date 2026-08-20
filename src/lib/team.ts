/**
 * Contenu de la page /equipe.
 *
 * Les PERSONNES ne sont pas ici : elles viennent de `formations.ts:formateurs`
 * et de `offer-pages/fde.ts:team`, sources uniques déjà publiées. Cette page ne
 * porte que son propre habillage. Apostrophes reprises À L'IDENTIQUE
 * (`&apos;` = U+0027, `&rsquo;` = U+2019).
 */

export const teamMeta = {
  title: "L'équipe AI Makers : 10 personnes, la production d'une équipe de 60",
  description:
    "Direction, ingénieurs IA et experts associés : l'équipe AI Makers entre Paris et Casablanca. Un cabinet volontairement compact qui tourne sur ses propres systèmes. +50 entreprises accompagnées, +200 systèmes IA déployés, +10 000 professionnels formés.",
} as const;

export const teamSchema = {
  breadcrumbHome: "Accueil",
  breadcrumbCurrent: "L'équipe",
} as const;

export const teamHero = {
  badge: "L'équipe",
  title: "10 personnes. La production d'une équipe de 60.",
  intro:
    "Ce n'est pas un slogan, c'est notre preuve vivante : l'équipe tourne sur les systèmes qu'elle déploie chez ses clients. Et vous travaillez en direct avec les personnes qui construisent les vôtres.",
} as const;

export const teamLeadership = {
  badge: "Direction",
  title: "Ceux qui pilotent",
} as const;

export const teamEngineering = {
  badge: "Ingénierie",
  title: "Ceux qui construisent",
  linkLead: "Ce sont ",
  linkLabel: "les ingénieurs que nous déployons",
  linkHref: "/forward-deployed-engineer",
  linkTail: " dans les équipes de nos clients.",
  hiringTitle: "Votre futur collègue ?",
  hiringText:
    "On recrute les ingénieurs IA que nous déployons ensuite chez nos clients.",
  hiringCta: { label: "Voir les postes ouverts", href: "/carrieres" },
} as const;

export const teamExperts = {
  badge: "Experts et formateurs associés",
  title: "Ceux qui interviennent à nos côtés",
  intro:
    "Les experts que vous retrouvez sur nos formations et nos missions, chacun sur sa spécialité.",
  outroLead:
    "Une équipe compacte qui livre autant, c'est exactement le mécanisme qu'on installe chez vous. Envie de le voir de l'intérieur ? ",
  outroLink: { label: "Rejoignez l'équipe →", href: "/carrieres" },
} as const;

export const teamStats = [
  { value: "+200", label: "Systèmes IA déployés chez +50 entreprises" },
  { value: "+10 000", label: "Professionnels formés" },
  { value: "Paris · Casablanca", label: "Deux bureaux, une seule équipe" },
] as const;

export const teamBooking = {
  badge: "Diagnostic gratuit · 30 min",
  title: "Vous avez vu l’équipe. Parlez-lui.",
  intro:
    "Réservez 30 minutes avec les personnes qui construiront vos systèmes. On analyse vos process et vous repartez avec un plan clair, sans engagement.",
  benefits: [
    "Un diagnostic de vos process, pas un argumentaire de vente",
    "Vos 3 premiers cas d'usage IA à fort ROI, chiffrés",
    "Vous repartez avec un plan, que vous travailliez avec nous ou non",
  ],
  notReady: "Pas prêt à échanger ? ",
  gateTitle: "Réserver un diagnostic gratuit avec AI Makers",
  linkedinAria: "Profil LinkedIn de",
} as const;

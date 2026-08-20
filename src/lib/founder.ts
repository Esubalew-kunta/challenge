/**
 * Contenu de la page /fondateur.
 *
 * Récit à la première personne, en quatre chapitres. Copy validé mot pour mot :
 * ne pas le réécrire. Apostrophes reprises À L'IDENTIQUE.
 */

export const founderMeta = {
  title: "Othmane Halim, fondateur",
  description:
    "AI Makers racontée par son fondateur : le déclic en conférence, le pari du cabinet AI-native, et pourquoi l'IA devient un département de chaque entreprise.",
} as const;

export const founderSchema = {
  breadcrumbHome: "Accueil",
  breadcrumbCurrent: "Le fondateur",
  jobTitle: "Fondateur & CEO",
} as const;

export const founderHero = {
  breadcrumbHome: "Accueil",
  breadcrumbCurrent: "Le fondateur",
  badge: "Notre histoire",
  titleLead:
    "J'ai monté AI Makers parce que personne ne répondait à la seule question qui compte :",
  titleHighlight: "« concrètement, on fait comment ? »",
  intro:
    "Othmane Halim, fondateur d'AI Makers. Voici pourquoi ce cabinet existe, raconté sans le vernis habituel.",
  photoAlt: "Othmane Halim en conférence IA",
} as const;

export const founderChapters = [
  {
    kicker: "Chapitre 1",
    titre: "Le cerveau qui n'arrivait pas à finir",
    paragraphes: [
      "Je vais commencer par ce qu'on ne met jamais sur un site de cabinet : j'ai un TDAH. À l'école, ça s'appelait décrochage. Dans ma tête, ça ressemblait à cent idées lancées et aucune terminée.",
      "Pendant des années, j'ai cru que le problème c'était moi. Trop d'idées, pas assez d'exécution. Je démarrais tout, je ne finissais rien.",
      "Puis l'IA générative est arrivée. Et pour la première fois, la distance entre l'idée et la chose faite s'est effondrée. Ce que mon cerveau démarrait, la machine m'aidait à le terminer.",
      "L'IA n'a pas corrigé mon attention. Elle a rendu mon fonctionnement rentable.",
    ],
  },
  {
    kicker: "Chapitre 2",
    titre: "Le stand submergé",
    paragraphes: [
      "Avant AI Makers, je suis passé par la startup, puis par le grand groupe. J'ai vu les deux mondes : celui qui va vite sans structure, celui qui a la structure et n'avance pas.",
      "Le déclic arrive lors d'une conférence sur l'IA, aux côtés de Didier Gaultier, Head of AI d'Orange. À la fin, notre stand est submergé. Des dirigeants, des DRH, des directeurs financiers. Tous avec la même question.",
      "Pas « c'est quoi l'IA ? ». Ils avaient lu les articles. La question, c'était : « concrètement, on fait comment ? »",
      "Personne ne leur répondait. Les cabinets vendaient des slides. Les intégrateurs vendaient des jours-hommes. Entre la promesse et le système qui tourne, il n'y avait personne.",
      "AI Makers existe pour occuper exactement cette place.",
    ],
  },
  {
    kicker: "Chapitre 3",
    titre: "Le cabinet qui s'applique ce qu'il vend",
    paragraphes: [
      "Dès le départ, une règle : tout ce qu'on vend doit tourner chez nous d'abord. Notre CRM est piloté par des agents. Nos appels sont analysés automatiquement. Mon brief de décision est généré chaque matin avant que j'arrive au bureau.",
      "Résultat : une équipe de 10 personnes, augmentée par une flotte d'agents, qui produit ce qu'une structure classique ferait à 60.",
      "Ce n'est pas une vitrine. C'est notre outil de production. On ne vend jamais quelque chose qu'on n'a pas éprouvé sur nous-mêmes.",
    ],
  },
  {
    kicker: "Chapitre 4",
    titre: "Là où tout ça va",
    paragraphes: [
      "Ma conviction, je l'ai déjà écrite publiquement : dans quelques années, l'IA sera un département à part entière de chaque entreprise. Comme les sales. Comme le marketing. Comme les RH.",
      "Les entreprises qui gagnent ne recruteront pas ce département personne par personne. Elles le déploieront. C'est déjà ce que font les plus avancées avec nos ingénieurs.",
      "Et le jour où votre département IA existe, notre plus grande fierté, c'est que vous n'ayez plus besoin de nous.",
    ],
  },
] as const;

export const founderProof = [
  { value: "+200", label: "systèmes IA en production chez +50 entreprises" },
  { value: "+10 000", label: "professionnels formés en France et au Maroc" },
  { value: "10", label: "personnes, augmentées par une flotte d'agents" },
] as const;

export const founderOutro = {
  text: "La suite s'écrit avec les entreprises qui décident de passer de « on y réfléchit » à « ça tourne chez nous ».",
  linkFirm: { label: "Découvrir le cabinet", href: "/a-propos" },
  linkLinkedin: {
    label: "Suivre Othmane sur LinkedIn",
    href: "https://www.linkedin.com/in/othmanehalim/",
  },
} as const;

export const founderCta = {
  title: "Discutons de votre « concrètement, on fait comment ? »",
  subtitle:
    "30 minutes avec moi ou un de nos ingénieurs. On analyse vos workflows, vous repartez avec vos 3 premiers quick wins, que vous travailliez avec nous ou non.",
  primary: { label: "Réserver un diagnostic gratuit", href: "/contact" },
  secondary: { label: "Voir la méthode", href: "/#methode" },
} as const;

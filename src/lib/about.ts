/**
 * Contenu de la page /a-propos.
 *
 * Extrait de la page, qui portait tout son copy en JSX inline et en tableaux
 * locaux. Apostrophes reprises À L'IDENTIQUE.
 */

export const aboutMeta = {
  title: "À propos : AI Makers, le cabinet qui s'applique ce qu'il vend",
  description:
    "AI Makers est un cabinet de transformation IA en France et au Maroc, fondé par Othmane Halim (bureaux à Paris et Casablanca). 10 personnes, +50 entreprises accompagnées, +200 systèmes IA déployés, +10 000 professionnels formés. Un cabinet AI-native qui applique à lui-même ce qu'il vend à ses clients.",
} as const;

export const aboutSchemaText = {
  breadcrumbHome: "Accueil",
  breadcrumbCurrent: "À propos",
  orgDescription:
    "Cabinet de transformation IA en France et au Maroc, avec des bureaux à Paris et Casablanca. Audit, déploiement de systèmes IA en production et formation des équipes.",
  founderJobTitle: "CEO",
  /**
   * L'effectif du JSON-LD valait 6 alors que la page dit « 10 personnes »
   * partout (méta, section équipe, bande de preuve, et la page /fondateur).
   * C'était une valeur restée en arrière quand l'équipe est passée de 6 à 10 :
   * la donnée structurée annonçait donc 6 salariés à Google pendant que la page
   * en affichait 10.
   */
  numberOfEmployees: 10,
} as const;

export const aboutHero = {
  badge: "À propos",
  title: "Le cabinet qui s'applique ce qu'il vend.",
  intro:
    "AI Makers est un cabinet de transformation IA basé à Paris et Casablanca. Nos propres process tournent sur les systèmes qu'on déploie chez nos clients : c'est notre meilleure preuve.",
} as const;

export const aboutFounder = {
  badge: "Le fondateur",
  name: "Othmane Halim",
  photoAlt: "Othmane Halim, fondateur et CEO d'AI Makers",
  paragraphs: [
    "Avant AI Makers, Othmane est passé par la startup puis par le grand groupe. Deux environnements opposés, un même constat : entre ce qui se dit sur l'IA et ce qui s'exécute réellement dans les entreprises, l'écart est énorme.",
    "Le déclic arrive lors d'une conférence sur l'intelligence artificielle. Son stand est submergé de dirigeants qui posent tous la même question : « Concrètement, comment on fait ? » Les discours stratégiques ne manquaient pas. Les réponses opérationnelles, si.",
    "AI Makers est né pour combler cet écart : un cabinet qui ne s'arrête pas à la roadmap. Il met les systèmes en production, forme les équipes et mesure les résultats, jusqu'à ce que le client soit autonome.",
    "Le cabinet fonctionne lui-même en AI-native : chaque process interne qui peut être systématisé l'est. Ce qu'on vend, on le vit d'abord.",
  ],
  storyLink: { label: "Lire l'histoire complète →", href: "/fondateur" },
  linkedinLabel: "Suivre Othmane sur LinkedIn",
} as const;

export const aboutPrinciples = {
  badge: "Comment on travaille",
  title: "Trois principes, appliqués d'abord à nous-mêmes",
  items: [
    {
      title: "AI-native",
      description:
        "Nos propres process tournent sur nos systèmes. Prospection, delivery, reporting, formation : tout ce qu'on recommande à nos clients, on l'utilise en interne d'abord. Si un système ne tient pas chez nous, il ne sort pas de chez nous.",
    },
    {
      title: "Anti-hype",
      description:
        "Des KPIs, pas des slides. Chaque système déployé a un indicateur de référence mesuré avant et après. On ne parle pas de révolution, on parle d'heures récupérées, de délais réduits et de process qui tournent.",
    },
    {
      title: "Transmission",
      description:
        "L'objectif est votre autonomie. Documentation complète, formation hebdomadaire, AI Champions formés en interne : à la fin de la mission, les systèmes tournent sans nous. C'est écrit dans le contrat.",
    },
  ],
} as const;

export const aboutTeam = {
  badge: "L'équipe",
  title: "10 personnes entre Paris et Casablanca",
  intro:
    "Une équipe volontairement compacte, structurée autour de trois fonctions. Chaque client travaille en direct avec les personnes qui construisent ses systèmes.",
  roles: [
    {
      title: "Direction",
      description:
        "Le CEO, le COO et le Chief of Staff pilotent la stratégie, les missions et les opérations du cabinet entre Paris et Casablanca.",
    },
    {
      title: "Delivery",
      description:
        "Chaque mission client est portée par un ingénieur référent, avec un suivi d'avancement hebdomadaire et des livrables mesurés en production.",
    },
    {
      title: "Ingénierie",
      description:
        "Le CTO et les ingénieurs IA conçoivent et déploient les systèmes : agents, automatisations de workflows et outils métier, construits sur Claude, n8n et Notion.",
    },
  ],
} as const;

export const aboutProof = {
  badge: "La preuve vivante",
  title: "Ce cabinet tourne sur ses propres systèmes.",
  intro:
    "La meilleure démonstration de notre méthode, c'est notre propre fonctionnement. Quatre exemples concrets.",
  items: [
    {
      system: "Cockpit de pilotage quotidien",
      fact: "Le brief de décision du CEO est généré chaque matin par nos agents, avant l'arrivée au bureau.",
    },
    {
      system: "Intelligence d'appels",
      fact: "Chaque appel commercial est analysé automatiquement : objections, signaux, prochaine étape dans le CRM.",
    },
    {
      system: "Suivi de santé des missions",
      fact: "Chaque mission client est scorée chaque semaine par notre système de suivi de santé.",
    },
    {
      system: "Ce site",
      fact: "Ce site lui-même est produit avec nos outils IA : contenu, code et visuels passent par nos agents avant publication.",
    },
  ],
  closing:
    "On ne vous montre pas de captures d'écran arrangées. Réservez un diagnostic : on vous montre nos systèmes en direct, en train de tourner.",
  ctaLabel: "Voir les systèmes en live",
  headline: "10 personnes. La production d'une équipe de 60.",
  headlineTail: "C'est ce mécanisme qu'on installe chez vous.",
} as const;

export const aboutStats = [
  { value: "+200", label: "Systèmes IA déployés chez +50 entreprises" },
  { value: "+10 000", label: "Professionnels formés" },
  { value: "7h/sem", label: "Récupérées en moyenne par collaborateur" },
] as const;

export const aboutCta = {
  title: "Parlons de vos process.",
  subtitle:
    "30 minutes pour analyser vos workflows et repartir avec vos 3 premiers quick wins IA, que vous travailliez avec nous ou non.",
  label: "Réserver mon diagnostic gratuit",
} as const;

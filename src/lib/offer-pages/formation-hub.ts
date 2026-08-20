/**
 * Contenu du hub de formation /formation-ia-entreprise.
 *
 * Extrait tel quel de la page, qui portait tout son copy en JSX inline. Rien
 * n'est reformulé : le rendu français ne doit pas bouger d'un caractère.
 *
 * Piège des apostrophes — la page écrivait `&apos;` (U+0027, apostrophe
 * droite) et `&rsquo;` (U+2019, apostrophe courbe) selon les endroits. Les deux
 * sont reprises ici À L'IDENTIQUE, pas harmonisées : « corriger » la
 * typographie ferait bouger le FR, ce que la parité interdit.
 *
 * À ne pas confondre avec `formation.ts`, dans ce même dossier, qui n'est
 * importé par personne (voir son en-tête).
 */

import { getClientTestimonials } from "@/lib/client-testimonials-locale";

export const formationHubMeta = {
  title: "Formation IA en entreprise : 6 programmes",
  description:
    "Formation IA en entreprise, hands-on et sur vos cas d'usage réels. Six programmes, de l'acculturation au Vibe Coding. +10 000 professionnels formés.",
} as const;

export const formationHubSchema = {
  breadcrumbHome: "Accueil",
  breadcrumbCurrent: "Formation IA",
  courseListName: "Catalogue de formations IA AI Makers",
  /** Préfixe du `name` de chaque Course : `Formation ${course.name}`. */
  coursePrefix: "Formation",
} as const;

export const formationHubHero = {
  badge: "Formation IA",
  titleLead: "Formation IA pour entreprises,",
  titleHighlight: "sur vos cas d'usage réels",
  subtitle:
    "Six programmes hands-on, du débutant à l'avancé. Chaque formation part de vos tâches réelles, en présentiel, distanciel ou hybride, en France et au Maroc.",
  ctaCatalogue: "Recevoir le catalogue complet",
  ctaCall: "Réserver un appel",
  imageAlt: "Session de formation IA AI Makers en entreprise",
  medallionAlt: "Conférence IA AI Makers",
  ratingLabel: "de satisfaction",
} as const;

/** Bande de trois chiffres sous le hero. */
export const formationHubStats = [
  { value: "+10 000", label: "professionnels formés" },
  { value: "France & Maroc", label: "présentiel, distanciel ou hybride" },
  { value: "Sur-mesure", label: "chaque programme adapté à vos métiers" },
] as const;

export const formationHubCatalogue = {
  kicker: "/ Le catalogue",
  title: "Six formations, un seul critère : l'usage réel",
  intro:
    "Chaque programme vise un résultat opérationnel précis, pas une culture générale de l'IA. Cliquez pour voir le détail de chaque formation.",
  audienceLabel: "Pour qui : ",
  cardCta: "Découvrir la formation",
} as const;

export const formationHubApproach = {
  kicker: "/ Notre approche",
  title: "Pourquoi nos formations marchent",
  points: [
    "Sur vos cas réels et vos outils, pas des slides génériques : chaque session est préparée à partir de vos processus, vos documents et vos logiciels.",
    "Animées par les ingénieurs qui construisent vos systèmes : les formateurs sont ceux qui déploient l'IA en production chez nos clients, pas des formateurs professionnels qui récitent un support.",
    "Mesurées par la mise en pratique, pas par un quiz : le critère de réussite est ce que les équipes utilisent réellement dans leur travail les semaines suivantes.",
  ],
  photoAlt: "Othmane Halim en conférence IA devant un stand plein",
} as const;

export const formationHubPedagogy = {
  kicker: "/ La pédagogie",
  title: "On ne forme pas sur des slides",
  items: [
    {
      title: "Hands-on, pas théorique",
      description:
        "Chaque session se fait les mains sur les outils. Les participants repartent avec des workflows fonctionnels, pas des slides.",
    },
    {
      title: "Vos cas d'usage, pas des exemples inventés",
      description:
        "Nous préparons chaque session à partir de vos processus, vos documents, vos logiciels. La formation part de votre quotidien réel.",
    },
    {
      title: "Dans la durée, pas un one-shot",
      description:
        "Les compétences IA s'ancrent par la répétition sur des cas réels. Nous privilégions un rythme continu à un bootcamp intensif oublié en deux semaines.",
    },
  ],
  photoAlt:
    "Atelier hands-on : chaque participant travaille sur ses propres dossiers",
  pullQuote:
    "Pas de spectateurs. Chaque participant repart avec des workflows qui tournent sur ses propres dossiers.",
} as const;

export const formationHubTrainers = {
  kicker: "/ Nos formateurs",
  title: "Formés par ceux qui déploient l'IA en production",
} as const;

export const formationHubTestimonials = {
  kicker: "/ Ils l'ont vécu",
  title: "Ce que disent les équipes formées",
} as const;

/**
 * Témoignages formation : sélectionnés par NOM DE CLIENT, jamais recopiés.
 * L'accesseur lit `clientLogos` côté FR et la table de traductions côté EN.
 */
export const formationHubTestimonialItems = getClientTestimonials("fr", [
  "Amgen",
  "Délifrance",
  "Shem's Publicité",
]);

export const formationHubCatalogueForm = {
  kicker: "/ Le catalogue",
  title: "Recevez le catalogue complet des formations",
  text: "Le détail des 6 programmes, les modalités et des exemples de cas d'usage par métier. On revient vers vous pour cadrer le format adapté à vos équipes, que vous travailliez avec nous ou non.",
  bullets: [
    "Les 6 programmes détaillés (objectifs, modules, public)",
    "Les modalités : présentiel, distanciel ou hybride",
    "Des exemples de cas d'usage par métier",
  ],
} as const;

export const formationHubChampions = {
  kicker: "/ Aller plus loin",
  title: "AI Champions : rendre vos équipes autonomes",
  text: "La dernière phase de notre méthode : former des référents IA internes qui diffusent les usages et rendent l'entreprise autonome. Objectif : une entreprise qui n'a plus besoin de nous pour progresser à 6 mois.",
  cta: { label: "En parler avec nous", href: "/contact" },
} as const;

export const formationHubGallery = {
  kicker: "/ En salle",
  title: "Nos formations en images",
  intro:
    "Masterclass en amphithéâtre, ateliers en petit groupe, séminaires en entreprise : quelques sessions récentes, en France et au Maroc.",
  placeholder: "Votre équipe ici ?",
} as const;

export const formationHubFaq = {
  title: "Questions fréquentes sur la formation IA",
  items: [
    {
      question: "Comment se déroule une formation type ?",
      answer:
        "Trois temps. En amont : nous analysons vos processus, vos outils et vos documents pour préparer des exercices tirés de votre quotidien réel. Pendant la session : chaque participant travaille les mains sur les outils, sur ses propres dossiers, pas sur des exemples inventés. Après : les participants repartent avec des workflows fonctionnels et directement utilisables, et nous mesurons la mise en pratique dans les semaines qui suivent.",
    },
    {
      question: "Qu'est-ce que la formation AI Champions ?",
      answer:
        "La formation AI Champions est la première étape d'une transformation : faire comprendre à l'ensemble des équipes ce que l'IA sait faire, ce qu'elle ne sait pas faire, et comment l'utiliser dans leur métier. C'est l'objectif de notre masterclass Acculturation IA. L'acculturation seule ne suffit pas : sans cas d'usage concrets appliqués au travail réel, les acquis s'évaporent en quelques semaines.",
    },
    {
      question: "Proposez-vous un bootcamp IA ?",
      answer:
        "Nous préférons un format continu à un bootcamp intensif de quelques jours. La raison est simple : les compétences IA s'ancrent par la répétition sur des cas réels, pas par une immersion unique. Dans notre accompagnement AI PARTNER, la formation est intégrée à raison de 2 heures par semaine, directement sur les workflows de vos équipes. Des formats courts et intensifs restent possibles pour lancer une dynamique.",
    },
    {
      question: "La formation prompt engineering est-elle incluse ?",
      answer:
        "Oui. Le prompt engineering (savoir formuler des instructions fiables et reproductibles à une IA) est un socle transversal de toutes nos formations, en particulier la masterclass Acculturation IA. Nous ne le vendons pas comme une formation à part : un prompt n'a de valeur qu'appliqué à un cas d'usage métier précis.",
    },
    {
      question: "Les formations sont-elles adaptées aux non-techniciens ?",
      answer:
        "Oui, c'est même le cœur de notre approche. La majorité des +10 000 professionnels que nous avons formés ne sont pas des profils techniques : commerciaux, juristes, RH, équipes support, dirigeants. Les formations partent de leurs tâches quotidiennes (rédiger, analyser, synthétiser), pas de concepts techniques. Même Vibe Coding, notre programme le plus avancé, s'adresse à des profils métiers qui n'ont jamais codé.",
    },
    {
      question: "Combien de temps dure une formation IA en entreprise ?",
      answer:
        "Cela dépend du format. Une formation AI Champions se tient sur une demi-journée à une journée. Un programme complet par équipe s'étale sur plusieurs semaines. Dans le cadre de notre accompagnement AI PARTNER, la formation est continue : 2 heures par semaine, chaque semaine, appliquées aux cas d'usage réels de vos équipes, avec un objectif d'autonomie à 6 mois via le programme AI Champions.",
    },
  ],
} as const;

export const formationHubRelated = {
  title: "Pour aller plus loin",
  readMore: "Lire l’article",
  items: [
    {
      title: "Meilleures formations IA pour entreprises en 2026",
      href: "/blog/meilleures-formations-ia-entreprise",
      description:
        "Le comparatif des formations IA : catalogue générique ou sur-mesure sur vos cas d'usage.",
    },
    {
      title: "Meilleures formations Claude en entreprise",
      href: "/blog/meilleures-formations-claude-entreprise",
      description:
        "Où former vos équipes à Claude en français, sur vos process réels.",
    },
    {
      title: "Meilleures agences IA en France en 2026",
      href: "/blog/meilleures-agences-ia-france",
      description:
        "Le comparatif honnête des cabinets et agences IA, par taille d'entreprise.",
    },
  ],
} as const;

/**
 * Bande de SEO local. Propre au marché français : les 13 pages
 * `formation-ia/[ville]` n'ont pas d'équivalent anglais et n'en auront pas
 * (décision d'architecture, cf. `docs/EN-LAUNCH.md`). Le bloc est donc
 * `null` côté EN et la section ne se rend pas.
 */
export const formationHubCities = {
  label: "Formation IA près de chez vous :",
  suffix: "Et partout en France et au Maroc.",
  items: [
    { ville: "Paris", slug: "paris" },
    { ville: "Lyon", slug: "lyon" },
    { ville: "Toulouse", slug: "toulouse" },
    { ville: "Bordeaux", slug: "bordeaux" },
    { ville: "Lille", slug: "lille" },
    { ville: "Nantes", slug: "nantes" },
    { ville: "Marseille", slug: "marseille" },
    { ville: "Strasbourg", slug: "strasbourg" },
    { ville: "Nice", slug: "nice" },
    { ville: "Montpellier", slug: "montpellier" },
    { ville: "Casablanca", slug: "casablanca" },
  ],
} as const;

export const formationHubFinalCta = {
  title: "Quel programme pour vos équipes ?",
  subtitle:
    "30 minutes pour analyser vos besoins de formation et identifier le bon format, que vous travailliez avec nous ou non.",
  primaryCta: { label: "Réserver un appel", href: "/contact" },
  secondaryCta: { label: "Recevoir le catalogue", href: "#catalogue" },
} as const;

/**
 * ⚠️ MODULE ORPHELIN — aucune page ne l'importe. Vérifier avant de s'en servir :
 *
 *     grep -rn "offer-pages/formation\"" src/
 *
 * Il décrit une page qui n'a jamais été mise en ligne sous cette forme : hero
 * « Cinq formations », catalogue à 5 entrées sans Maîtriser Claude ni Création
 * publicité IA, sections « 3 défauts », mécanique et garantie que la page
 * française ne rend pas. Le hub RÉELLEMENT en ligne est
 * `(fr)/formation-ia-entreprise/page.tsx`, dont le copy vit dans
 * `formation-hub.ts` (ce dossier) et le catalogue dans `formations.ts`.
 *
 * Le master `[EN] website-content/formation-ia-entreprise/` mappe ses sections
 * sur CE fichier : sa carte des composants est donc fausse. La version anglaise
 * du hub a été construite à partir de la page live — voir l'en-tête de
 * `formation-hub.en.ts`.
 *
 * Conservé, pas supprimé : son copy peut servir si quelqu'un décide un jour de
 * refondre le hub. Mais il n'est la source de vérité de rien.
 *
 * ---
 *
 * Contenu de la page /ai-training ("Formation IA").
 *
 * Structure Hormozi : outcome (hero) + preuve massive (stats officielles
 * et témoignages formation) + problème (les formations classiques) +
 * catalogue reformaté en offres + mécanique + AI Champions
 * + FAQ + appel final.
 *
 * Tout le copy propre à la page vit ici. Les données partagées
 * (témoignages, stats de satisfaction) sont importées de
 * site-config en lecture seule, jamais dupliquées.
 */

import { bookingProof, homepageContent } from "@/lib/site-config";

export const formationMeta = {
  title: "Formation IA | AI Makers",
  description:
    "Formation IA en entreprise : vos équipes produisent avec l'IA dès la semaine suivante. Entraînement sur vos vrais cas d'usage, 9,6/10 de satisfaction moyenne, 100% de recommandations, +10 000 professionnels formés.",
} as const;

export const formationHero = {
  badge: "Formation IA",
  titleLine1: "Des équipes qui produisent avec l'IA",
  titleLine2: "dès la semaine suivante.",
  subtitle:
    "Pas un séminaire de plus. Un entraînement sur vos vrais cas d'usage, avec vos vrais outils, mesuré sur ce que vos équipes produisent après.",
  statsLine: "+10 000 professionnels formés en France et au Maroc",
  cta: { label: "Réserver mon diagnostic gratuit", href: "/contact" },
} as const;

/** Bandeau de preuve : chiffres officiels du bilan formation. */
export const formationProofStats = [
  {
    value: bookingProof.stats.rating,
    label: `de ${bookingProof.stats.ratingLabel}`,
  },
  { value: bookingProof.stats.reco, label: bookingProof.stats.recoLabel },
  { value: "+10 000", label: "professionnels formés" },
] as const;

export const formationProofSection = {
  badge: "La preuve",
  title: "Ce que disent les équipes qu'on a formées",
  subtitle:
    "Des dirigeants et des opérationnels, pas des logos anonymes. Chaque citation est signée.",
} as const;

/**
 * Témoignages formation, sélectionnés par nom dans site-config.
 * Les citations sont importées telles quelles, jamais réécrites.
 */
const FORMATION_TESTIMONIAL_NAMES = [
  "Hervé Landau",
  "Jennifer Vigouroux",
  "Hicham Boustit",
  "Lamia Ajana",
  "Mickaël Mina",
  "Marie-Pierre Picon",
] as const;

export const formationTestimonials = FORMATION_TESTIMONIAL_NAMES.flatMap(
  (name) => {
    const match = homepageContent.testimonials.items.find(
      (item) => item.name === name,
    );
    return match ? [match] : [];
  },
);

/** Témoignage dédié au programme AI Champions (citation exacte de la config). */
export const championsTestimonial = homepageContent.testimonials.items.find(
  (item) => item.name === "Brigitte Meyer",
);

export const formationProblem = {
  badge: "Le problème",
  title:
    "Vous avez déjà payé une formation IA. Combien de vos équipes l'utilisent encore ?",
  intro:
    "Ce n'est pas un problème de motivation. C'est le format classique qui ne survit pas au retour au poste de travail.",
  pains: [
    {
      number: "01",
      title: "Théorique",
      description:
        "Des slides, des concepts, une démo impressionnante. Trois semaines plus tard, personne n'a ouvert un outil IA. Ce qui n'a pas été pratiqué pendant la session ne sera jamais pratiqué après.",
    },
    {
      number: "02",
      title: "Générique",
      description:
        "Le même contenu pour une équipe finance, une équipe commerciale et une agence de création. Des exemples fictifs, loin des documents, des process et des outils que vos équipes manipulent vraiment.",
    },
    {
      number: "03",
      title: "Sans suivi",
      description:
        "La session se termine, le formateur part, et personne ne mesure ce que les équipes produisent ensuite. Sans référent interne ni pratique régulière, les acquis s'évaporent.",
    },
  ],
} as const;

/**
 * Catalogue reformaté en offres : pour qui, durée et format,
 * et ce que les équipes produisent en sortie.
 * Durées reprises de src/lib/formations.ts (source of truth catalogue).
 */
export const formationCatalogue = {
  badge: "Le catalogue",
  title: "Cinq formations. Un seul critère : ce que vos équipes produisent.",
  subtitle:
    "Le catalogue donne le cadre, votre réalité donne le contenu. Chaque session est construite sur vos cas d'usage.",
  items: [
    {
      name: "Formation AI Champions",
      pourQui: "Tous les collaborateurs, quel que soit le métier.",
      dureeFormat:
        "Format sur-mesure, de la demi-journée à la journée. Présentiel, distanciel ou hybride.",
      production:
        "Vos équipes repartent avec leurs propres prompts structurés et leurs tâches du quotidien traitées avec l'IA : rédaction, analyse, synthèse, premières automatisations.",
      href: "/formation-ia-entreprise/formation-ai-champions",
    },
    {
      name: "Vibe Coding",
      pourQui: "Profils métiers et opérationnels, sans prérequis technique.",
      dureeFormat:
        "Format sur-mesure, parcours en plusieurs sessions. Présentiel, distanciel ou hybride.",
      production:
        "Chaque participant construit son premier outil pendant la formation : un prototype ou une automatisation qui répond à un vrai besoin de son poste.",
      href: "/formation-ia-entreprise/vibe-coding",
    },
    {
      name: "GTM Sales IA",
      pourQui: "Équipes sales, marketing et growth.",
      dureeFormat:
        "Format sur-mesure, de la journée au parcours complet. Présentiel, distanciel ou hybride.",
      production:
        "Des séquences de prospection, des préparations de rendez-vous et des relances produites pendant la session, sur vos vrais comptes cibles.",
      href: "/formation-ia-entreprise/go-to-market-sales",
    },
    {
      name: "Microsoft Copilot",
      pourQui: "Organisations équipées de l'environnement Microsoft.",
      dureeFormat:
        "Format sur-mesure, de la demi-journée à la journée. Présentiel, distanciel ou hybride.",
      production:
        "Des usages Copilot installés dans les outils du quotidien : mails, documents, tableurs, réunions. La licence payée devient de l'usage réel.",
      href: "/formation-ia-entreprise/microsoft-copilot",
    },
    {
      name: "AI Champions",
      pourQui: "Collaborateurs moteurs, identifiés avec vous.",
      dureeFormat: "Programme continu, intégré à l'activité des équipes.",
      production:
        "Des référents internes opérationnels : ils accompagnent leurs collègues, identifient de nouveaux cas d'usage et font vivre les usages après notre départ.",
    },
  ],
  ctaCard: {
    title: "Quelle formation pour vos équipes ?",
    description:
      "En 30 minutes, on identifie les équipes à former en priorité et les cas d'usage à travailler.",
    cta: { label: "Réserver mon diagnostic gratuit", href: "/contact" },
  },
} as const;

/** Descriptions du catalogue pour le schema Course (dérivées des offres). */
export const formationCourseDescriptions: Record<string, string> = {
  "IA Généraliste":
    "Maîtriser les fondamentaux de l'IA générative et l'intégrer dans le travail quotidien : rédaction, analyse, synthèse, automatisation des tâches répétitives.",
  "Vibe Coding":
    "Construire des outils, prototypes et automatisations avec l'IA, sans être développeur. Vos équipes métiers créent elles-mêmes ce dont elles ont besoin.",
  "GTM Sales IA":
    "Équiper les équipes commerciales et marketing : prospection, préparation de rendez-vous, production de contenu, suivi et relances assistés par l'IA.",
  "Microsoft Copilot":
    "Exploiter Copilot dans les outils Microsoft du quotidien : mails, documents, tableurs, réunions. Passer de la licence payée à l'usage réel.",
  "AI Champions":
    "Former des référents internes qui portent la transformation IA dans la durée : diffusion des usages, accompagnement des collègues, identification de nouveaux cas d'usage.",
};

export const formationMechanics = {
  badge: "Pourquoi ça marche",
  title: "Pas un séminaire. Un entraînement.",
  items: [
    {
      icon: "target",
      title: "Sur vos vrais cas d'usage",
      description:
        "Chaque session part de vos documents, vos process, vos outils. Les participants pratiquent sur leur propre travail, pas sur des exemples fictifs.",
    },
    {
      icon: "repeat",
      title: "Sessions dédiées ou 2h par semaine, en continu",
      description:
        "Des sessions intensives sur une ou plusieurs journées, ou des sessions courtes et régulières intégrées à l'activité. Le second format est celui de nos accompagnements : les acquis sont appliqués entre deux sessions, pas oubliés après un séminaire.",
    },
    {
      icon: "map-pin",
      title: "Présentiel Paris et Casablanca",
      description:
        "Depuis nos deux bureaux ou directement dans vos locaux, en France et au Maroc.",
    },
    {
      icon: "laptop",
      title: "Ou en distanciel",
      description:
        "Le même format d'entraînement, à distance. Chaque participant pratique sur ses cas d'usage, en direct avec le formateur.",
    },
  ],
} as const;

export const formationChampions = {
  badge: "Le programme AI Champions",
  title: "Des référents internes qui portent la transformation",
  description:
    "Une formation ponctuelle s'oublie. Un référent interne reste. Le programme AI Champions forme, au sein de vos équipes, les personnes qui diffuseront les usages IA dans la durée : elles accompagnent leurs collègues, identifient de nouveaux cas d'usage et font vivre les systèmes après notre départ. C'est ce qui rend votre organisation autonome, sans dépendance à un prestataire.",
  bullets: [
    "Des référents identifiés et formés dans chaque équipe clé.",
    "Un impact mesuré pour chaque champion, pas une certification sur le papier.",
    "Un programme intégré à l'activité, pas une parenthèse hors du travail réel.",
  ],
} as const;

export const formationFaq = [
  {
    question: "Comment personnalisez-vous les formations ?",
    answer:
      "Avant chaque session, nous collectons vos cas d'usage : les tâches qui prennent du temps à vos équipes, les outils qu'elles utilisent, les documents qu'elles manipulent. Les exercices sont construits à partir de cette matière. Résultat : les participants ne découvrent pas l'IA sur des exemples abstraits, ils l'appliquent à leur propre travail pendant la formation.",
  },
  {
    question: "Combien de temps dure une formation ?",
    answer:
      "Le format s'adapte à votre organisation : sessions intensives sur une ou plusieurs journées, ou format continu de 2 heures par semaine intégré à l'activité des équipes. C'est ce second format que nous utilisons dans nos accompagnements, jusqu'à l'autonomie des équipes à 6 mois.",
  },
  {
    question: "Le contenu est-il adapté à notre entreprise ?",
    answer:
      "Systématiquement. Chaque session travaille sur vos cas d'usage réels : vos documents, vos process, vos outils. Pas de slides génériques : les participants repartent avec des usages directement applicables à leur poste dès le lendemain.",
  },
  {
    question: "Peut-on suivre les formations à distance ?",
    answer:
      "Oui. Les formations se déroulent en présentiel depuis nos bureaux de Paris et Casablanca, dans vos locaux, ou en distanciel. Le format d'entraînement est conservé dans tous les cas : chaque participant pratique sur ses propres cas d'usage.",
  },
] as const;

export const formationFinalCta = {
  title: "Prêt à former des équipes qui produisent ?",
  subtitle:
    "30 minutes pour identifier les équipes à former en priorité, les cas d'usage à travailler et le format adapté à votre organisation.",
  primaryCta: { label: "Réserver mon diagnostic gratuit", href: "/contact" },
} as const;

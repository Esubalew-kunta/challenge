/**
 * Contenu anglais de /en/ai-training-for-teams.
 *
 * SOURCE — et c'est le point important de ce fichier.
 *
 * Le master `[EN] website-content/formation-ia-entreprise/` décrit une page
 * qui n'existe pas : il mappe ses sections sur `offer-pages/formation.ts`, un
 * module que PLUS AUCUNE page n'importe (hero « Cinq formations », catalogue à
 * 5 entrées sans Claude ni Publicité IA). La page réellement en ligne est
 * `(fr)/formation-ia-entreprise/page.tsx`, qui porte son copy en JSX inline et
 * tire son catalogue de `formations.ts`.
 *
 * Règle appliquée, la même que `homepage-content.en.ts` :
 *   - la STRUCTURE et les FAITS viennent de la page française EN LIGNE ;
 *   - la FORMULATION anglaise vient du master partout où il couvre la section.
 * Aucune section décrite par le master mais absente de la page live n'est
 * inventée (bloc « 3 défauts », mécanique, garantie formation) — en
 * particulier la garantie, dont le retrait est une décision commerciale en
 * attente (cf. CLAUDE.md).
 *
 * Faits corrigés contre le master, qui est périmé sur les deux :
 *   - « 2,500+ professionals trained » → **10 000+**, chiffre canonique de
 *     `llms.txt` et de `site-config`, déjà publié en anglais sur la home ;
 *   - « on-site in Paris and Rabat » → **Casablanca**, seul second bureau réel.
 * Le même écart avait été relevé et corrigé dans `homepage-content.en.ts`.
 *
 * Les liens visent les URL EN finales ; `withResolvedEnLinks` les rabat sur le
 * FR tant que la page n'est pas publiée.
 */

import { getClientTestimonials } from "@/lib/client-testimonials-locale";

export const formationHubMetaEn = {
  // Le gabarit du layout ajoute « | AI Makers » : ne pas le réécrire ici.
  title: "AI training for teams, on your real work",
  description:
    "Hands-on AI training for employees, built on your real use cases. Six programmes, from AI fundamentals to Claude and Copilot. 10,000+ professionals trained.",
} as const;

export const formationHubSchemaEn = {
  breadcrumbHome: "Home",
  breadcrumbCurrent: "AI training",
  courseListName: "AI Makers AI training catalogue",
  coursePrefix: "Training",
} as const;

export const formationHubHeroEn = {
  badge: "AI training for teams",
  titleLead: "AI training for teams,",
  titleHighlight: "built on your real use cases",
  subtitle:
    "Six hands-on programmes, from beginner to advanced. Every session starts from your real tasks — on-site, remote or hybrid, across France and Morocco.",
  ctaCatalogue: "Get the full catalogue",
  ctaCall: "Book a call",
  imageAlt: "An AI Makers corporate AI training session",
  medallionAlt: "An AI Makers AI conference talk",
  ratingLabel: "satisfaction",
} as const;

export const formationHubStatsEn = [
  { value: "10,000+", label: "professionals trained" },
  { value: "France & Morocco", label: "on-site, remote or hybrid" },
  { value: "Tailored", label: "every programme adapted to your roles" },
] as const;

export const formationHubCatalogueEn = {
  kicker: "/ The catalogue",
  title: "Six programmes. One test: what your teams produce.",
  intro:
    "The catalogue sets the frame; your reality sets the content. Every session is built on your use cases.",
  audienceLabel: "Who it’s for: ",
  cardCta: "Explore the programme",
} as const;

export const formationHubApproachEn = {
  kicker: "/ Our approach",
  title: "Why our training works",
  points: [
    "On your real cases and your own tools, not generic slides: every session is prepared from your processes, your documents and your software.",
    "Run by the engineers who build your systems: the trainers are the people who ship AI to production at our clients, not professional trainers reciting a deck.",
    "Measured by what gets used, not by a quiz: the test of success is what teams actually use in their work in the weeks that follow.",
  ],
  photoAlt: "Othmane Halim speaking on AI in front of a packed stand",
} as const;

export const formationHubPedagogyEn = {
  kicker: "/ The method",
  title: "We do not train on slides",
  items: [
    {
      title: "Hands-on, not theoretical",
      description:
        "Every session is run with hands on the tools. Participants leave with working workflows, not slides.",
    },
    {
      title: "Your use cases, not invented examples",
      description:
        "We prepare each session from your processes, your documents, your software. The training starts from your real day-to-day.",
    },
    {
      title: "Over time, not a one-shot",
      description:
        "AI skills take hold through repetition on real cases. We favour a steady rhythm over an intensive bootcamp forgotten within two weeks.",
    },
  ],
  photoAlt: "Hands-on workshop: each participant works on their own files",
  pullQuote:
    "No spectators. Every participant leaves with workflows running on their own files.",
} as const;

export const formationHubTrainersEn = {
  kicker: "/ Our trainers",
  // Repris à l'identique de `ui-strings.ts` (formTrainersTitle), déjà en ligne
  // sur les six pages programme : deux formulations pour le même titre.
  title: "Trained by the people who ship AI in production",
} as const;

export const formationHubTestimonialsEn = {
  kicker: "/ They went through it",
  title: "What the teams we’ve trained say",
} as const;

/**
 * Témoignages formation, en anglais.
 *
 * Mêmes trois clients que le FR (la sélection reste du code, cf. le module
 * français) ; les traductions vivent dans `client-testimonials.en.ts`, partagé
 * avec les pages sectorielles, pour qu'une citation signée n'ait jamais deux
 * versions anglaises.
 */
export const formationHubTestimonialItemsEn = getClientTestimonials("en", [
  "Amgen",
  "Délifrance",
  "Shem's Publicité",
]);

export const formationHubCatalogueFormEn = {
  kicker: "/ The catalogue",
  title: "Get the full training catalogue",
  text: "The six programmes in detail, the formats, and real use-case examples by role. We come back to you to scope the right format for your teams, whether you work with us or not.",
  bullets: [
    "The 6 programmes in detail (objectives, modules, audience)",
    "The formats: on-site, remote or hybrid",
    "Real use-case examples by role",
  ],
} as const;

export const formationHubChampionsEn = {
  kicker: "/ Going further",
  title: "AI Champions: making your teams autonomous",
  text: "The last phase of our method: training internal AI referents who spread the practice and make the company autonomous. The goal is a company that no longer needs us to keep moving forward at six months.",
  cta: { label: "Talk to us about it", href: "/en/contact" },
} as const;

export const formationHubGalleryEn = {
  kicker: "/ In the room",
  title: "Our training sessions in pictures",
  intro:
    "Lecture-hall masterclasses, small-group workshops, in-company seminars: a few recent sessions, in France and Morocco.",
  placeholder: "Your team here?",
} as const;

/**
 * FAQ — les RÉPONSES sont la traduction fidèle de la FAQ française en ligne,
 * pas celles du master.
 *
 * Ce bloc alimente le JSON-LD FAQPage : une réponse anglaise qui promet autre
 * chose que la française n'est pas seulement affichée, elle est donnée à lire
 * aux moteurs de réponse. Les QUESTIONS reprennent la formulation du master là
 * où elle couvre la même question.
 *
 * Le master intitule la Q2 « What is AI acculturation ». Le programme a été
 * renommé « Formation AI Champions » depuis (ROUTE_MAP le note déjà) : on
 * garde le nom VIVANT, comme pour les slugs.
 */
export const formationHubFaqEn = {
  title: "Frequently asked questions about AI training",
  items: [
    {
      question: "What does a typical AI training session look like?",
      answer:
        "Three stages. Beforehand: we analyse your processes, your tools and your documents to build exercises drawn from your real day-to-day. During the session: each participant works hands-on with the tools, on their own files, not on invented examples. Afterwards: participants leave with working workflows they can use directly, and we measure what actually gets applied in the weeks that follow.",
    },
    {
      question: "What is the AI Champions training?",
      answer:
        "The AI Champions training is the first step of a transformation: getting every team to understand what AI can do, what it cannot do, and how to use it in their own role. That is the purpose of our AI fundamentals masterclass. Fundamentals alone are not enough: without concrete use cases applied to real work, what was learned evaporates within a few weeks.",
    },
    {
      question: "Do you run an AI bootcamp?",
      answer:
        "We prefer a continuous format to an intensive bootcamp over a few days. The reason is simple: AI skills take hold through repetition on real cases, not through a single immersion. In our AI PARTNER engagement, training is built in at two hours a week, directly on your teams’ workflows. Short, intensive formats remain possible to get momentum going.",
    },
    {
      question: "Is prompt engineering training included?",
      answer:
        "Yes. Prompt engineering — knowing how to write reliable, reproducible instructions for an AI — runs through all our programmes, and the AI fundamentals masterclass in particular. We do not sell it as a separate course: a prompt is only worth something applied to a specific business use case.",
    },
    {
      question: "Are the trainings suitable for non-technical people?",
      answer:
        "Yes, and that is the heart of our approach. Most of the 10,000+ professionals we have trained are not technical profiles: sales, legal, HR, support teams, executives. The programmes start from their everyday tasks (writing, analysing, summarising), not from technical concepts. Even Vibe Coding, our most advanced programme, is aimed at business profiles who have never written code.",
    },
    {
      question: "How long does corporate AI training take?",
      answer:
        "It depends on the format. An AI Champions training runs over half a day to a full day. A complete programme for a team spreads over several weeks. Within our AI PARTNER engagement, training is continuous: two hours a week, every week, applied to your teams’ real use cases, with the goal of team autonomy at six months through the AI Champions programme.",
    },
  ],
} as const;

/**
 * Bloc « Pour aller plus loin » : ABSENT côté anglais.
 *
 * Les trois cartes françaises pointent vers des articles de blog qui n'ont pas
 * de version anglaise et n'en auront pas tant que le blog EN n'est pas décidé
 * (handover §2). Aucun fichier `*.en.ts` du site ne lie vers `/blog/` : un
 * titre anglais qui ouvre un article français est un piège, pas un repli. La
 * section ne se rend donc pas, jusqu'à ce qu'il y ait des destinations
 * anglaises à proposer.
 */
export const formationHubRelatedEn = null;

/** Bande villes : marché français uniquement (cf. le module FR). */
export const formationHubCitiesEn = null;

export const formationHubFinalCtaEn = {
  title: "Which programme for your teams?",
  subtitle:
    "30 minutes to look at your training needs and pin down the right format, whether you work with us or not.",
  primaryCta: { label: "Book a call", href: "/en/contact" },
  secondaryCta: { label: "Get the catalogue", href: "#catalogue" },
} as const;

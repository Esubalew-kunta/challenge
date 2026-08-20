/**
 * Version anglaise des témoignages clients portés par `clientLogos`
 * (`site-config.ts`), indexée par nom de client.
 *
 * POURQUOI CE FICHIER — les pages sectorielles et le hub de formation
 * sélectionnent leurs témoignages par NOM DE CLIENT dans `clientLogos`, qui
 * n'existe qu'en français. Les huit pages `/en/industries/*` livrées affichaient
 * donc des citations FRANÇAISES sous un gabarit anglais.
 *
 * Ne pas confondre avec `bookingProofEn.testimonials` : c'est une AUTRE liste,
 * et pour Sage comme pour ThinkONE ce sont d'autres citations de la même
 * personne. Les deux sources coexistent, elles ne se remplacent pas. Seule la
 * citation Shem's Publicité est commune aux deux : la chaîne anglaise est donc
 * reprise de `site-config.en.ts` plutôt que retraduite, pour qu'une citation
 * signée n'ait jamais deux versions anglaises.
 *
 * RÈGLE — traduction fidèle d'une citation SIGNÉE : on ne réécrit pas, on ne
 * réattribue pas, on n'invente pas. Groupe Partouche est LOGO SEUL et n'a
 * aucune citation : une fausse citation Partouche avait été écrite dans un
 * brouillon puis retirée, ne pas la réintroduire.
 *
 * `[to validate]` — les intitulés de poste traduits ici n'ont pas de forme
 * anglaise confirmée par les intéressés (décision ouverte n°3 du handover). La
 * traduction reste littérale : aucune promotion, aucun titre inventé. Ceux qui
 * ont déjà une forme anglaise ailleurs la reprennent (« Directeur IA » →
 * « AI Director », « Président » → « President », « Directrice Générale » →
 * « Managing Director »).
 */

import { bookingProofEn } from "./site-config.en";
import { homepageContentEn } from "./homepage-content.en";

export type ClientTestimonialEn = {
  readonly quote: string;
  readonly author: string;
  readonly role: string;
  readonly photo: string;
};

const shems = bookingProofEn.testimonials.find(
  (t) => t.author === "Lamia Ajana",
);
/** Gepromed a déjà une traduction anglaise sur la home : ne pas en écrire une seconde. */
const gepromed = homepageContentEn.testimonials.items.find(
  (t) => t.company === "Gepromed",
);

export const clientTestimonialsEn: Record<string, ClientTestimonialEn> = {
  "Shem's Publicité": {
    quote:
      shems?.quote ??
      "An expert team that knows how to guide and train. The teams who went through the training are autonomous today, and AI is a copilot in their day-to-day work.",
    author: "Lamia Ajana",
    role: "Managing Director",
    photo: "/images/testimonials/lamia-ajana-shems.jpg",
  },
  ThinkONE: {
    quote:
      "The AI Makers team stood out for a human approach and genuine availability. The ideas they brought helped us move our strategic thinking forward and build pragmatic tools aimed squarely at impact.",
    author: "Mariem Lahlou",
    role: "Managing Partner",
    photo: "/images/testimonials/mariem-lahlou-thinkone.jpeg",
  },
  Sage: {
    quote:
      "AI Makers made GEO understandable and usable by our business teams. Their ability to grasp the business stakes quickly and turn technical subjects into actionable recommendations clearly made the difference.",
    author: "Mickaël Mina",
    role: "AI Director",
    photo: "/images/testimonials/mickael-mina-sage.png",
  },
  Amgen: {
    quote:
      "The training completely changed the way we work. Our teams are now autonomous with AI tools and save a considerable amount of time day to day.",
    author: "Marie-Pierre Picon",
    role: "Scientific Attaché",
    photo: "/images/testimonials/marie-pierre-picon-amgen.png",
  },
  Délifrance: {
    quote:
      "Before AI Makers, our challenge was to use AI intelligently and securely, getting the most out of it while keeping our autonomy. The training made the difference: examples applied to our own environment, very concrete uses demonstrated, and a clear view of the many ways AI fits our business.",
    author: "Hicham Boustit",
    role: "Head of Management Control",
    photo: "/images/testimonials/hicham-boustit-delifrance.jpg",
  },
  Gepromed: {
    quote:
      gepromed?.quote ??
      "AI Makers supports us well beyond training: an operating system to structure our business, custom AI agents for our go-to-market and our internal processes. Their strength: making AI applicable to our real business needs, with time saved, automations, and performance gains for the organisation.",
    author: "Nicole Neumann",
    role: "Head of Innovation",
    photo: "/images/testimonials/nicole-neumann-gepromed.jpg",
  },
  Empruntis: {
    quote:
      "Working with AI Makers let us automate processes that used to take hours. The return on investment was visible from the first month.",
    author: "Vanessa Braflan",
    role: "Director",
    photo: "/images/testimonials/vanessa-braflan-empruntis.png",
  },
  "ESN Engit": {
    quote:
      "At last, AI support that demystifies the subject and gives you the real keys to bringing it in effectively. A skilled team, good teachers, and good company. I am going to start using it daily — this is probably my last post written without AI.",
    author: "Éric Solal",
    role: "President",
    photo: "/images/testimonials/eric-solal-engit.png",
  },
  "Fondation Force": {
    quote:
      "AI Makers supports us with a pragmatic approach, suited to the demands of healthcare and research: concrete systems that save our teams time, and a real transfer of skills. A partner who is structuring our AI transformation.",
    author: "Lilla Merabet",
    role: "Managing Director",
    photo: "/images/testimonials/lilla-merabet-fondation-force.jpg",
  },
  Addictest: {
    quote:
      "AI Makers built our AI Operating System: repetitive tasks are automated, processes are structured, and our teams perform better day to day. Not one more tool: a system that runs the business.",
    author: "Ziyad El Mouniri",
    role: "CEO & Founder",
    photo: "/images/testimonials/ziyad-el-mouniri-addictest.jpg",
  },
};

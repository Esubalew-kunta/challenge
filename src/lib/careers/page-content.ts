import type { Locale } from "../i18n";
import { withResolvedEnLinks } from "../en-links";

/**
 * Copy des routes /carrieres et /carrieres/[slug].
 *
 * Elle vivait dans les pages ; les pages sont devenues des gabarits partagés
 * FR/EN. Le FR est copié caractère pour caractère, apostrophes typographiques
 * comprises.
 */
type Link = { readonly label: string; readonly href: string };

export type CareersContent = {
  readonly meta: { readonly title: string; readonly description: string };
  readonly breadcrumbHome: string;
  readonly breadcrumbCurrent: string;
  readonly spontaneousSubject: string;
  readonly badge: string;
  readonly h1: { readonly lead: string; readonly highlight: string };
  readonly intro: string;
  readonly remoteNote: string;
  readonly roleNote: {
    readonly prefix: string;
    readonly fdeLink: Link;
    readonly middle: string;
    readonly jobLink: Link;
    readonly middle2: string;
    readonly clientsLink: Link;
  };
  readonly ctaSpontaneous: string;
  readonly ctaSeeRoles: string;
  readonly how: {
    readonly kicker: string;
    readonly title: string;
    readonly intro: string;
    readonly principles: readonly {
      readonly icon: "bot" | "rocket" | "globe" | "trending";
      readonly title: string;
      readonly description: string;
    }[];
  };
  readonly openings: {
    readonly kicker: string;
    readonly title: string;
    readonly seeRole: string;
    readonly emptyTitle: string;
    readonly emptyBody: string;
  };
  readonly spontaneous: {
    readonly title: string;
    readonly body: string;
    readonly ctaPrefix: string;
    readonly subjectNote: string;
  };
  readonly detail: {
    readonly listMeta: { readonly title: string; readonly description: string };
    readonly titleSuffix: string;
    readonly reportsTo: string;
    readonly compensation: string;
    readonly fdeNote: { readonly question: string; readonly link: string };
    readonly dayToDayTitle: string;
    readonly first90Title: string;
    readonly adjacentTitle: string;
    readonly adjacentHeaders: readonly [string, string, string];
    readonly whereKicker: string;
    readonly fitTitle: string;
    readonly fitBody: string;
    readonly applyPrefix: string;
    readonly allRolesTitle: string;
    readonly allRolesDescription: string;
    readonly otherRoles: string;
    readonly whyTitle: string;
    readonly whyDescription: string;
  };
};

const FR: CareersContent = {
  meta: {
    title: "Carrières : rejoignez AI Makers",
    description:
      "AI Makers recrute des profils qui veulent livrer des systèmes IA en production, pas des slides. Équipe de 10 entre Paris et Casablanca, clients internationaux, stack de pointe. Candidature spontanée bienvenue.",
  },
  breadcrumbHome: "Accueil",
  breadcrumbCurrent: "Carrières",
  spontaneousSubject: "Candidature spontanée",
  badge: "Carrières",
  h1: {
    lead: "Construisez les systèmes",
    highlight: "que les autres regardent tourner.",
  },
  intro:
    "Chez AI Makers, on ne produit pas des slides. On livre des systèmes IA en production chez de vrais clients, en France, au Maroc et à l'international. Si vous voulez que votre travail serve à quelque chose dès le premier mois, vous êtes au bon endroit.",
  remoteNote:
    "Nos postes sont ouverts à distance, dans un fuseau horaire compatible avec nos bureaux de Paris et Casablanca, aucune obligation d'y résider, avec des temps de présence ponctuels sur place selon les rôles.",
  roleNote: {
    prefix: "Le poste s'appelle",
    fdeLink: {
      label: "Forward Deployed Engineer",
      href: "/forward-deployed-engineer",
    },
    middle: ". Si le métier vous est nouveau,",
    jobLink: {
      label: "la fiche métier ingénieur IA",
      href: "/metiers/ingenieur-ia",
    },
    middle2:
      "en détaille les compétences, les grilles et les parcours. Curieux de savoir qui on accompagne et comment ?",
    clientsLink: {
      label: "Voir nos clients et notre méthode",
      href: "/pourquoi-ai-makers",
    },
  },
  ctaSpontaneous: "Candidater spontanément",
  ctaSeeRoles: "Voir les postes ouverts",
  how: {
    kicker: "/ Comment on travaille",
    title: "Une équipe de 10 qui produit comme une équipe de 60",
    intro:
      "Ce n'est pas un slogan : c'est le résultat de systèmes internes qui absorbent le travail répétitif. Voici ce que ça change au quotidien.",
    principles: [
      {
        icon: "bot",
        title: "AI-native, pour de vrai",
        description:
          "Le cabinet tourne sur ses propres systèmes : cockpit quotidien, intelligence d'appels, suivi de missions. Ici, chacun orchestre ses agents au lieu d'empiler les tâches manuelles.",
      },
      {
        icon: "rocket",
        title: "Production réelle",
        description:
          "Ce que vous construisez tourne chez de vrais clients dès le premier mois, avec un KPI mesuré avant et après. Pas de POC qui dort dans un tiroir.",
      },
      {
        icon: "globe",
        title: "Petite équipe, gros terrain",
        description:
          "10 personnes entre Paris et Casablanca, des clients en France, au Maroc et à l'international. Vous voyez l'impact de votre travail en direct, sans couche de reporting entre vous et le client.",
      },
      {
        icon: "trending",
        title: "Progression rapide",
        description:
          "Mentorat direct du CTO, revues de code, et une stack de pointe utilisée tous les jours : Claude Code, n8n, LangChain. Vous montez en compétence sur ce qui compte vraiment.",
      },
    ],
  },
  openings: {
    kicker: "/ Postes ouverts",
    title: "On recrute",
    seeRole: "Voir le poste",
    emptyTitle: "Pas de poste ouvert affiché en ce moment.",
    emptyBody:
      "Les bons profils n'attendent pas les annonces : si vous pensez avoir votre place ici, écrivez-nous directement. On répond à toutes les candidatures sérieuses.",
  },
  spontaneous: {
    title: "Candidature spontanée",
    body: "Pas de lettre de motivation. Montrez-nous ce que vous avez construit : liens, repos, systèmes. C'est tout ce qui nous intéresse.",
    ctaPrefix: "Écrire à",
    subjectNote: "Objet pré-rempli : « Candidature spontanée »",
  },
  detail: {
    listMeta: {
      title: "Carrières",
      description: "Postes ouverts chez AI Makers.",
    },
    titleSuffix: "Carrières AI Makers",
    reportsTo: "Rattaché à",
    compensation: "Rémunération : compétitive, communiquée à l'entretien",
    fdeNote: {
      question: "Vous voulez comprendre le modèle FDE avant de postuler ?",
      link: "Voir ce qu'un Forward Deployed Engineer construit chez nos clients",
    },
    dayToDayTitle: "Ce que vous prenez en main",
    first90Title: "/ Vos 90 premiers jours",
    adjacentTitle: "Où il se distingue des rôles voisins",
    adjacentHeaders: ["Rôle", "Ce qu'il fait", "Qui porte le résultat"],
    whereKicker: "/ Où",
    fitTitle: "Ce poste vous correspond ?",
    fitBody:
      "Pas de lettre de motivation. Le formulaire prend cinq minutes et commence par montrer ce que vous avez construit.",
    applyPrefix: "Postuler pour",
    allRolesTitle: "Tous les postes ouverts",
    allRolesDescription: "Les 5 rôles ouverts en ce moment chez AI Makers.",
    otherRoles: "Autres postes ouverts :",
    whyTitle: "Pourquoi AI Makers",
    whyDescription:
      "Nos clients, notre méthode, ce qu'on construit, vu de l'extérieur.",
  },
};

const EN: CareersContent = withResolvedEnLinks({
  meta: {
    title: "Careers: join AI Makers",
    description:
      "AI Makers hires people who want to ship AI systems into production, not slides. A team of 10 between Paris and Casablanca, international clients, a leading-edge stack. Speculative applications welcome.",
  },
  breadcrumbHome: "Home",
  breadcrumbCurrent: "Careers",
  spontaneousSubject: "Speculative application",
  badge: "Careers",
  h1: {
    lead: "Build the systems",
    highlight: "everyone else watches run.",
  },
  intro:
    "At AI Makers we do not produce slides. We ship AI systems into production at real clients, in France, in Morocco and internationally. If you want your work to matter from the first month, you are in the right place.",
  remoteNote:
    "Our roles are remote, in a time zone compatible with our Paris and Casablanca offices, with no requirement to live in either, and occasional time on site depending on the role.",
  roleNote: {
    prefix: "The role is called",
    fdeLink: {
      label: "Forward Deployed Engineer",
      href: "/en/forward-deployed-engineer",
    },
    middle: ". If the job is new to you,",
    jobLink: {
      label: "the AI engineer role page",
      href: "/metiers/ingenieur-ia",
    },
    middle2:
      "sets out the skills, the salary ranges and the career paths. Curious about who we work with and how?",
    clientsLink: {
      label: "See our clients and our method",
      href: "/pourquoi-ai-makers",
    },
  },
  ctaSpontaneous: "Apply speculatively",
  ctaSeeRoles: "See open roles",
  how: {
    kicker: "/ How we work",
    title: "A team of 10 producing like a team of 60",
    intro:
      "That is not a slogan: it is the result of internal systems that absorb the repetitive work. Here is what it changes day to day.",
    principles: [
      {
        icon: "bot",
        title: "AI-native, for real",
        description:
          "The studio runs on its own systems: a daily cockpit, call intelligence, engagement tracking. Here, everyone orchestrates their agents instead of stacking up manual tasks.",
      },
      {
        icon: "rocket",
        title: "Real production",
        description:
          "What you build runs at real clients from the first month, with a KPI measured before and after. No POC gathering dust in a drawer.",
      },
      {
        icon: "globe",
        title: "Small team, big field",
        description:
          "10 people between Paris and Casablanca, clients in France, Morocco and internationally. You see the impact of your work directly, with no reporting layer between you and the client.",
      },
      {
        icon: "trending",
        title: "Fast progression",
        description:
          "Direct mentoring from the CTO, code reviews, and a leading-edge stack used every day: Claude Code, n8n, LangChain. You build skills on what actually matters.",
      },
    ],
  },
  openings: {
    kicker: "/ Open roles",
    title: "We are hiring",
    seeRole: "See the role",
    emptyTitle: "No open roles listed right now.",
    emptyBody:
      "Good people do not wait for job ads: if you think you belong here, write to us directly. We answer every serious application.",
  },
  spontaneous: {
    title: "Speculative application",
    body: "No cover letter. Show us what you have built: links, repos, systems. That is all we care about.",
    ctaPrefix: "Write to",
    subjectNote: "Pre-filled subject: “Speculative application”",
  },
  detail: {
    listMeta: {
      title: "Careers",
      description: "Open roles at AI Makers.",
    },
    titleSuffix: "AI Makers Careers",
    reportsTo: "Reports to",
    compensation: "Compensation: competitive, shared at interview",
    fdeNote: {
      question: "Want to understand the FDE model before applying?",
      link: "See what a Forward Deployed Engineer builds at our clients",
    },
    dayToDayTitle: "What you take on",
    first90Title: "/ Your first 90 days",
    adjacentTitle: "Where it differs from neighbouring roles",
    adjacentHeaders: ["Role", "What they do", "Who owns the outcome"],
    whereKicker: "/ Where",
    fitTitle: "Is this role for you?",
    fitBody:
      "No cover letter. The form takes five minutes and starts with showing what you have built.",
    applyPrefix: "Apply for",
    allRolesTitle: "All open roles",
    allRolesDescription: "The 5 roles open right now at AI Makers.",
    otherRoles: "Other open roles:",
    whyTitle: "Why AI Makers",
    whyDescription:
      "Our clients, our method, what we build, seen from the outside.",
  },
});

export const CAREERS: Record<Locale, CareersContent> = { fr: FR, en: EN };

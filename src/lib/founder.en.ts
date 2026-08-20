/**
 * Contenu anglais de /en/founder.
 *
 * Récit à la première personne : traduction fidèle, sans lissage. La
 * divulgation du TDAH, le nom cité (Didier Gaultier, Head of AI d'Orange) et la
 * chute (« vous n'ayez plus besoin de nous ») sont la voix de quelqu'un, pas du
 * copy marketing — on ne les arrange pas.
 *
 * TROIS CORRECTIONS DU MASTER, toutes dans le chapitre 3 et la bande de preuve :
 *
 * 1. **« a team of 6 … what a traditional structure would do with 40 »** — la
 *    page française dit **10** personnes et **60**. Mêmes chiffres que
 *    `ai-os.ts`, où le master se trompait déjà pareil.
 * 2. **« +2,500 professionals trained »** — le chiffre canonique est
 *    **+10 000** (llms.txt, site-config, et déjà publié en anglais sur la home).
 *    Troisième fois que ce master set publie 2 500.
 * 3. **« And that's why we can guarantee our results in writing »** — ajouté de
 *    toutes pièces au chapitre 3. La phrase française est « Ce n'est pas une
 *    vitrine. C'est notre outil de production. On ne vend jamais quelque chose
 *    qu'on n'a pas éprouvé sur nous-mêmes. » Sixième garantie que ce jeu de
 *    masters tente d'insérer ; il n'existe toujours ni route /garanties ni bloc
 *    `guarantees`.
 */

export const founderMetaEn = {
  // Le gabarit du layout ajoute « | AI Makers » : ne pas le réécrire ici.
  title: "Othmane Halim, founder",
  description:
    "AI Makers’ story told by its founder: the conference turning point, the bet on an AI-native firm, and why AI becomes a department of every company.",
} as const;

export const founderSchemaEn = {
  breadcrumbHome: "Home",
  breadcrumbCurrent: "The founder",
  jobTitle: "Founder & CEO",
} as const;

export const founderHeroEn = {
  breadcrumbHome: "Home",
  breadcrumbCurrent: "The founder",
  badge: "Our story",
  titleLead:
    "I built AI Makers because no one was answering the only question that matters:",
  titleHighlight: "“concretely, how do we do this?”",
  intro:
    "Othmane Halim, founder of AI Makers. Here’s why this firm exists, told without the usual gloss.",
  photoAlt: "Othmane Halim speaking at an AI conference",
} as const;

export const founderChaptersEn = [
  {
    kicker: "Chapter 1",
    titre: "The brain that couldn’t finish",
    paragraphes: [
      "I’ll start with what you never put on a firm’s website: I have ADHD. At school, it was called dropping out. In my head, it looked like a hundred ideas started and none finished.",
      "For years, I thought the problem was me. Too many ideas, not enough execution. I started everything, I finished nothing.",
      "Then generative AI arrived. And for the first time, the distance between the idea and the finished thing collapsed. What my brain started, the machine helped me finish.",
      "AI didn’t fix my attention. It made the way I work pay off.",
    ],
  },
  {
    kicker: "Chapter 2",
    titre: "The swamped stand",
    paragraphes: [
      "Before AI Makers, I went through the startup world, then the large corporation. I saw both: the one that moves fast without structure, the one that has structure and doesn’t move.",
      "The turning point came at a conference on AI, alongside Didier Gaultier, Head of AI at Orange. At the end, our stand was swamped. Executives, HR directors, CFOs. All with the same question.",
      "Not “what is AI?”. They’d read the articles. The question was: “concretely, how do we do this?”",
      "No one was answering them. The consulting firms sold slides. The integrators sold man-days. Between the promise and the system that runs, there was no one.",
      "AI Makers exists to occupy exactly that space.",
    ],
  },
  {
    kicker: "Chapter 3",
    titre: "The firm that runs on what it sells",
    paragraphes: [
      "From the start, one rule: everything we sell has to run at our own firm first. Our CRM is driven by agents. Our calls are analysed automatically. My decision brief is generated every morning before I reach the office.",
      // 10 et 60, comme la page française — le master dit 6 et 40.
      "The result: a team of 10, augmented by a fleet of agents, producing what a traditional structure would do with 60.",
      // Le master ajoute ici « And that's why we can guarantee our results in
      // writing » : retiré, le français ne promet rien de tel.
      "It’s not a showcase. It’s our production tool. We never sell something we haven’t tested on ourselves.",
    ],
  },
  {
    kicker: "Chapter 4",
    titre: "Where all of this is going",
    paragraphes: [
      "My conviction, I’ve already written it publicly: within a few years, AI will be a full department of every company. Like sales. Like marketing. Like HR.",
      "The companies that win won’t recruit that department person by person. They’ll deploy it. That’s already what the most advanced ones do with our engineers.",
      "And the day your AI department exists, our greatest pride is that you no longer need us.",
    ],
  },
] as const;

export const founderProofEn = [
  { value: "+200", label: "AI systems in production across +50 companies" },
  // +10 000, pas +2 500 : chiffre canonique de llms.txt.
  { value: "10,000+", label: "professionals trained in France and Morocco" },
  { value: "10", label: "people, augmented by a fleet of agents" },
] as const;

export const founderOutroEn = {
  text: "The rest is written with the companies that decide to move from “we’re thinking about it” to “it’s running here”.",
  linkFirm: { label: "Discover the firm", href: "/en/about" },
  linkLinkedin: {
    label: "Follow Othmane on LinkedIn",
    href: "https://www.linkedin.com/in/othmanehalim/",
  },
} as const;

export const founderCtaEn = {
  title: "Let’s talk about your “concretely, how do we do this?”",
  subtitle:
    "30 minutes with me or one of our engineers. We look at your workflows, and you leave with your first 3 quick wins, whether you work with us or not.",
  primary: { label: "Book a free diagnostic", href: "/en/contact" },
  secondary: { label: "See our method", href: "/en#methode" },
} as const;

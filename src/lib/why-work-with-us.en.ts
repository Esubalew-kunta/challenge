/**
 * Contenu anglais de /en/why-ai-makers.
 *
 * **Aucun master `[EN] website-content/` ne couvre cette page.** C'est une
 * traduction fidèle du français EN LIGNE, sans reformulation — ce qui, vu le
 * bilan des masters sur les six pages précédentes (six garanties inventées,
 * trois villes fausses, cinq chiffres périmés), n'est pas une perte.
 *
 * Les chiffres sont ceux de `llms.txt` : +50 entreprises, +200 systèmes,
 * +10 000 professionnels formés, 7h par semaine et par collaborateur.
 *
 * `temoinClients` reste la LISTE FRANÇAISE, en noms de clients : elle sert de
 * clé de jointure et les traductions vivent dans `client-testimonials.en.ts`.
 * « AS Monaco » en est volontairement absent — aucun accord confirmé pour
 * l'utiliser comme référence commerciale. Ne pas l'ajouter ici non plus.
 */

export const whyWorkWithUsEn = {
  // Le gabarit du layout ajoute « | AI Makers » : ne pas le réécrire ici.
  metaTitle: "Why AI Makers: clients, method, results",
  metaDescription:
    "AI Makers in plain terms: who we work with, how we work, and what our clients say. Gepromed, Sage, Fondation Force and others on their AI transformation.",
  badge: "Why AI Makers",
  titre: "What we build, and who for",
  intro:
    "AI Makers is an AI transformation studio in France and Morocco. We audit processes, ship AI systems to production, and train the teams until they are autonomous. Here is what that looks like, at real clients.",
  faits: [
    { chiffre: "+50", label: "companies supported" },
    { chiffre: "+200", label: "AI systems in production" },
    { chiffre: "10,000+", label: "professionals trained" },
    { chiffre: "7h", label: "recovered per week per employee, on average" },
  ],
  methode: [
    {
      titre: "Audit — AI Scan",
      description:
        "A map of your processes, interviews with your teams, a maturity score. You leave with a costed roadmap and at least 3 profitable use cases.",
    },
    {
      titre: "Build — AI Engine",
      description:
        "A dedicated engineer ships 1 to 2 systems a month, straight into your tools. Every system has a KPI measured before and after.",
    },
    {
      titre: "Scale — AI Champions",
      description:
        "Your teams become autonomous. Continuous training, optimisation of the systems in production, quarterly strategic review.",
    },
  ],
} as const;

export const whyWorkWithUsChromeEn = {
  breadcrumbHome: "Home",
  breadcrumbCurrent: "Why AI Makers",
  methodKicker: "/ How we work",
  methodTitle: "Three phases, one direction",
  clientsKicker: "/ They trust us",
  clientsTitle: "Our clients",
  wordsKicker: "/ In their words",
  wordsTitle: "What they say about it",
  outroLead: "The detail of every engagement, with figures, is in ",
  outroCaseStudies: "our case studies",
  outroMiddle: ". Want to join the team building all this? ",
  outroCareers: "See the open roles",
  outroEnd: ".",
  ctaTitle: "What would AI change in your business?",
  ctaSubtitle: "30 minutes to map your priority use cases.",
  ctaPrimary: "Book a free diagnostic",
  ctaSecondary: "See the case studies",
} as const;

/**
 * Contenu anglais de /en/team.
 *
 * TROIS CORRECTIONS DU MASTER, les mêmes que sur /en/about — ce master a été
 * écrit quand l'équipe comptait 6 personnes et n'a pas suivi :
 *
 * 1. **« 6 people. The output of a team of 40. »** — la page française dit
 *    **10 personnes** et **60**, comme /a-propos et /fondateur.
 * 2. **« Paris and Rabat »** — c'est **Casablanca**. Cinquième page.
 * 3. **« +2,500 professionals trained »** — le canonique est **+10 000**.
 *    Cinquième occurrence.
 *
 * Les PERSONNES ne sont pas traduites ici : les profils viennent de
 * `formateurs.en.ts` et de `FDE[locale].team`, déjà en anglais. Les noms sont
 * des faits, les intitulés de poste suivent la convention de `site-config.en`.
 */

export const teamMetaEn = {
  // Le gabarit du layout ajoute « | AI Makers » : ne pas le réécrire ici.
  title: "The AI Makers team: 10 people, the output of 60",
  description:
    "Leadership, AI engineers and associate experts: the AI Makers team across Paris and Casablanca. A deliberately compact firm that runs on its own systems.",
} as const;

export const teamSchemaEn = {
  breadcrumbHome: "Home",
  breadcrumbCurrent: "The team",
} as const;

export const teamHeroEn = {
  badge: "The team",
  title: "10 people. The output of a team of 60.",
  intro:
    "It isn’t a slogan, it’s our living proof: the team runs on the systems it deploys for its clients. And you work directly with the people building yours.",
} as const;

export const teamLeadershipEn = {
  badge: "Leadership",
  title: "The ones who steer",
} as const;

export const teamEngineeringEn = {
  badge: "Engineering",
  title: "The ones who build",
  linkLead: "These are ",
  linkLabel: "the engineers we deploy",
  linkHref: "/en/forward-deployed-engineer",
  linkTail: " inside our clients’ teams.",
  hiringTitle: "Your future colleague?",
  hiringText:
    "We hire the AI engineers we then deploy at our clients.",
  hiringCta: { label: "See the open roles", href: "/en/careers" },
} as const;

export const teamExpertsEn = {
  badge: "Associate experts and trainers",
  title: "The ones who work alongside us",
  intro:
    "The experts you meet on our training programmes and our engagements, each on their own speciality.",
  outroLead:
    "A compact team that delivers this much is exactly the mechanism we install at your company. Want to see it from the inside? ",
  outroLink: { label: "Join the team →", href: "/en/careers" },
} as const;

export const teamStatsEn = [
  { value: "+200", label: "AI systems deployed across +50 companies" },
  // +10 000, pas +2 500.
  { value: "10,000+", label: "Professionals trained" },
  // Casablanca, pas Rabat.
  { value: "Paris · Casablanca", label: "Two offices, one team" },
] as const;

export const teamBookingEn = {
  badge: "Free diagnostic · 30 min",
  title: "You’ve seen the team. Talk to them.",
  intro:
    "Book 30 minutes with the people who will build your systems. We look at your processes and you leave with a clear plan, no commitment.",
  benefits: [
    "A diagnostic of your processes, not a sales pitch",
    "Your first 3 high-ROI AI use cases, costed",
    "You leave with a plan, whether you work with us or not",
  ],
  notReady: "Not ready to talk? ",
  gateTitle: "Book a free diagnostic with AI Makers",
  linkedinAria: "LinkedIn profile of",
} as const;

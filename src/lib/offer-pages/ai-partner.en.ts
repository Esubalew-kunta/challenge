/**
 * Contenu anglais de /en/ai-partner.
 *
 * ⚠️ LA SECTION LA PLUS IMPORTANTE DU MASTER N'EST PAS REPRISE.
 *
 * `[EN] website-content/offre/offre.md` §4.3 décrit un bloc « Garanties » :
 * quatre garanties « written into the contract » (audit remboursé, 30 jours
 * offerts, impact champion, sortie propre). Rien de tout cela n'existe :
 *
 *   - il n'y a pas de route `/garanties` ;
 *   - `site-config.ts` n'a pas de bloc `guarantees` ;
 *   - la page française ne garde qu'un commentaire `{/* Garanties *​/}` vide ;
 *   - aucun composant de garanties n'existe dans le dépôt.
 *
 * Les garanties ont été RETIRÉES du site français. Les publier en anglais
 * inventerait quatre engagements CONTRACTUELS que l'entreprise ne prend plus.
 * `homepage-content.en.ts` a déjà attrapé exactement cette erreur sur la Q9 du
 * même jeu de masters — voir son commentaire, il dit « l'écart le plus grave de
 * tout ce fichier ».
 *
 * Même raison pour la META DESCRIPTION : celle du master annonce « four
 * contractual guarantees », donc dans les résultats de recherche. Elle est
 * remplacée par la promesse de la description FRANÇAISE en ligne (propriété
 * totale de ce qui est construit).
 *
 * Et pour les LIENS INTERNES du §6 : `/garanties` et `/audit-ia-entreprise`
 * n'ont pas de route française (cf. le handover), donc aucun lien vers eux.
 *
 * Le reste du master est fidèle au FR en ligne et est repris tel quel.
 */

export const aiPartnerMetaEn = {
  // Le gabarit du layout ajoute « | AI Makers » : ne pas le réécrire ici.
  title: "AI PARTNER: your AI department, audit to scale",
  description:
    // 156 caractères : le budget est 160, et une description trop longue est
    // tronquée avant sa fin (le défaut relevé sur /en/careers, 201 caractères).
    "One offer, three phases: audit your processes, AI systems in production every month, teams autonomous at six months. One dedicated engineer, full ownership.",
} as const;

export const aiPartnerSchemaEn = {
  breadcrumbHome: "Home",
  breadcrumbCurrent: "AI PARTNER offer",
} as const;

export const aiPartnerHeroEn = {
  badge: "The AI PARTNER offer",
  titleLine1: "Your AI department.",
  titleLine2: "From audit to scale.",
  intro:
    "One dedicated engineer, systems shipped to production every month, teams trained every week. And at six months, you’re autonomous.",
  cta: { label: "Book a free diagnostic", href: "/en/contact" },
} as const;

export const aiPartnerPhasesEn = {
  badge: "The 3 phases",
  title: "One offer. Three phases. Zero risk.",
  intro:
    "Every phase produces concrete deliverables you can use. Here’s exactly what you get.",
} as const;

/**
 * Équivalent anglais de `homepageContent.offer`.
 *
 * Côté français ce bloc vit dans `site-config.ts` ; il n'a pas d'équivalent
 * dans `homepage-content.en.ts`, qui porte le bloc `offers` (les trois cartes
 * de la home), pas `offer`. Il est donc écrit ici, en traduction fidèle : tous
 * les chiffres sont ceux du FR (1 à 2 systèmes/mois, 2h/semaine, /24 sur
 * 6 axes, minimum 3 cas d'usage, +1 500 automatisations, revue trimestrielle).
 */
export const aiPartnerOfferEn = {
  badge: "How we work",
  // Le FR dit « On ne vend pas des slides. On déploie. » Le master aplatit la
  // négation en règle de trois positive, décision de la réconciliation « slop ».
  title: "We audit. We build. We deploy.",
  subtitle:
    "We audit your workflows. We find where AI creates real value. We build, we implement, we train.",
  model: [
    {
      number: "01",
      title: "We audit your workflows",
      description:
        "Process mapping, team interviews, timing what costs you hours. No theory — we start from your operational reality.",
    },
    {
      number: "02",
      title: "We find where AI creates value",
      description:
        "Every opportunity is scored by its real impact on your P&L. You leave with a prioritised roadmap and at least 3 profitable use cases you can build, not a list of features.",
    },
    {
      number: "03",
      title: "We build and implement",
      description:
        "A dedicated engineer ships 1 to 2 systems a month, straight into your workflows. Every system has a KPI measured before and after. If it doesn’t run, we iterate until it does.",
    },
    {
      number: "04",
      title: "We train your teams to autonomy",
      description:
        "Two hours of hands-on training a week on your real cases. We train your AI Champions, we document everything, we hand it all over. At six months, the systems run without us.",
    },
  ],
  phase1: {
    title: "Phase 1: AUDIT",
    subtitle: "AI Scan · 1-2 weeks",
    summary:
      "Mapping, interviews, a maturity score out of 24. You leave with a costed roadmap and at least 3 high-ROI use cases.",
    items: [
      "Full map of your existing processes",
      "Interviews with decision-makers and operators",
      "AI maturity scored on 6 axes (proprietary grid)",
      "Costed 3/6/12-month roadmap with estimated ROI",
      "At least 3 use cases ready to build",
    ],
  },
  phase2: {
    title: "Phase 2: BUILD",
    subtitle: "AI Engine · 3-6 months",
    summary:
      "One dedicated AI engineer. 1 to 2 systems in production per month, 2 hours of training a week, full client ownership.",
    items: [
      "1 dedicated AI engineer, embedded in your team",
      "1 to 2 AI systems shipped to production per month",
      "2h of hands-on training a week for your teams",
      "Documented playbooks, full client ownership",
      "Same-day support + access to 1,500+ automations",
    ],
  },
  phase3: {
    title: "Phase 3: SCALE",
    subtitle: "AI Champions · Ongoing",
    summary:
      "Your teams become autonomous. Continuous optimisation, new use cases, quarterly executive-level review.",
    items: [
      "AI Champions programme: your teams become autonomous",
      "Continuous optimisation of the systems in production",
      "Ongoing identification of new use cases",
      "AI monitoring built directly into your systems",
      "Quarterly strategic review at executive-committee level",
    ],
  },
} as const;

/**
 * Lignes « avec / sans » du tableau comparatif, en anglais.
 *
 * Vit ici parce que c'est la version anglaise de `homepageContent.offer`, dont
 * ce fichier porte déjà le reste. Rendu par `/en/ai-automation`.
 *
 * Les MONTANTS restent en euros : le cabinet facture en euros, et convertir en
 * dollars changerait le prix cité. Le même jeu de masters avait déjà transformé
 * « 500 €/jour » en « $500/day » (cf. `homepage-content.en.ts`).
 */
export const aiPartnerComparisonEn = {
  withUs: [
    "One offer, the same run for every client",
    "A dedicated AI engineer, operational on day one",
    "ROI measured from the first month, KPI by KPI",
    "Full intellectual property, zero dependency",
  ],
  without: [
    "6 to 12 months to hire a senior AI expert",
    "Uncertain ROI on projects at \u20AC150,000+",
    "Total dependency on a single vendor",
    "\u20AC70,000+/year in fixed salary and employer costs",
  ],
} as const;

export const aiPartnerFinalCtaEn = {
  title: "Ready to frame your transformation?",
  subtitle:
    "30 minutes to go through your workflows and leave with your first 3 AI quick wins, whether you work with us or not.",
  primaryCta: { label: "Book a free diagnostic", href: "/en/contact" },
} as const;

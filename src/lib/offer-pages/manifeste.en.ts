/**
 * Contenu anglais de /en/why-now.
 *
 * Page d'opinion sourcée : toute sa valeur tient à ce que chaque chiffre porte
 * sa source. La traduction garde donc les chiffres, les sources et les liens
 * À L'IDENTIQUE. Seule la mise en forme des montants passe en anglais
 * (« 30 $ » → « $30 », « 12,88 $ » → « $12.88 ») — ce sont déjà des dollars,
 * il n'y a aucune conversion.
 *
 * DEUX POINTS À CONNAÎTRE :
 *
 * 1. **Garantie ajoutée par le master, retirée ici.** Le §4.8 du master termine
 *    le bloc 5 par « Guaranteed in the contract. » La page française ne le dit
 *    pas. C'est la cinquième fois que ce jeu de masters ajoute une garantie
 *    contractuelle absente du FR — et il n'existe ni route /garanties ni bloc
 *    `guarantees` dans le dépôt. Voir l'en-tête de `ai-partner.en.ts`.
 *
 * 2. **Le chiffre Bpifrance — TRANCHÉ.** La page annonçait « 55% des TPE-PME
 *    utilisent l'IA générative » alors que l'étude Bpifrance citée juste en
 *    dessous s'intitule « 31% des TPE et PME utilisent l'IA générative ». Le
 *    master avait relevé l'écart ; le propriétaire a tranché le 2026-08-13 :
 *    on retient **31%**, le chiffre de la source. Corrigé DANS LES DEUX
 *    LANGUES — le français publiait 55% en ligne.
 *    Le « 17% régulièrement » est conservé : sous-ensemble cohérent (17 < 31),
 *    mais toujours non vérifié, la source renvoyant 403.
 *
 * Le titre ne porte PAS « | AI Makers » : le gabarit du layout l'ajoute déjà.
 * (Le module français, lui, l'écrit en dur — voir le rapport.)
 */

export const manifesteMetaEn = {
  title: "Why now: the cost of intelligence collapsed",
  description:
    "The cost of intelligence fell 280× in two years. What that changes for your company — and why the window to act is this quarter, not in three years.",
} as const;

export const manifesteHeroEn = {
  title: "Why now.",
  subtitle:
    "The cost of intelligence is collapsing. This document explains what that changes for your company, with sourced figures.",
} as const;

export const manifesteBloc1En = {
  index: "01",
  title: "Intelligence costs 280 times less than it did two years ago.",
  paragraphs: [
    "In March 2023, GPT-4 cost $30 per million tokens. Sixteen months later, an equivalent model cost $0.15. The Stanford AI Index measures a 280× drop in inference cost over two years. a16z named it LLMflation: at equal performance, the price falls tenfold every year.",
  ],
  stats: [
    {
      value: "÷280",
      label: "inference cost over 2 years",
      source: "Stanford AI Index",
    },
    {
      value: "÷10 a year",
      label: "at equal performance",
      source: "a16z",
    },
    {
      value: "4% → 72%",
      label: "success on real engineering tasks in one year",
      source: "SWE-bench",
    },
  ],
} as const;

export const manifesteBloc2En = {
  index: "02",
  title: "When intelligence is nearly free, your processes become the variable.",
  paragraphs: [
    "Every process that rests on a human reading, deciding and re-keying can be redrawn. At today’s rates, analysing a ten-page document costs about three cents of API. An invoice processed by hand costs $12.88; automated, $2.78 (Ardent Partners).",
    "The question is no longer what AI costs. It’s what each month costs you while your processes stay manual.",
  ],
} as const;

export const manifesteRespiration1En = {
  value: "$12.88 → $2.78",
  label: "one invoice, processed by hand then automated (Ardent Partners)",
} as const;

export const manifesteBloc3En = {
  index: "03",
  title: "Nine companies in ten use AI. Fewer than four in ten see the effect.",
  paragraphs: [
    // 31% : chiffre de la source Bpifrance, aligné avec le français.
    "88% of organisations use AI. Only 39% measure an impact on their bottom line (McKinsey, 2025). In France, 31% of small and mid-sized firms use generative AI, 17% regularly (Bpifrance). And Gartner predicts more than 40% of agentic-AI projects will be cancelled by the end of 2027: cost, unclear value.",
    "The dividing line isn’t the technology, everyone has the same models. It’s execution. The winners redraw their processes and measure. The losers buy licences and wait.",
  ],
} as const;

export const manifesteRespiration2En = {
  value: "88% → 39%",
  label:
    "of organisations use AI; only 39% measure an impact on their bottom line (McKinsey, 2025)",
} as const;

export const manifesteBloc4En = {
  index: "04",
  title: "A lead compounds. So does a lag.",
  paragraphs: [
    "A system in production improves with every piece of data it handles: your playbooks sharpen, your teams level up, your data piles up where your competitors have none. Twelve months of lead can’t be bought back with the same tool — you would have to buy back the twelve months of learning too.",
  ],
  punchline: "Next year is the most expensive line in your strategic plan.",
} as const;

export const manifesteBloc5En = {
  title: "This quarter. Not in three years.",
  // Le master ajoute ici « Guaranteed in the contract. » : retiré, le FR ne le
  // promet pas et les garanties ont été supprimées du site.
  body: "You don’t need an 18-month plan to start. Two weeks of audit. At least three costed use cases. First systems in production within 30 days.",
  ctaPrimary: { label: "Book my free diagnostic", href: "/en/contact" },
  ctaSecondary: { label: "See our method", href: "/en#methode" },
} as const;

/**
 * Sources : les URL sont IDENTIQUES au français — ce sont les mêmes études.
 * Seuls les mois sont traduits.
 */
export const manifesteSourcesEn = {
  title: "Sources",
  items: [
    {
      label: "a16z, LLMflation (November 2024)",
      href: "https://a16z.com/llmflation-llm-inference-cost/",
    },
    {
      label: "Stanford AI Index 2025",
      href: "https://hai.stanford.edu/ai-index/2025-ai-index-report",
    },
    {
      label: "McKinsey, The State of AI (November 2025)",
      href: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
    },
    {
      label: "Bpifrance Le Lab (December 2025)",
      href: "https://lelab.bpifrance.fr/Etudes/31-des-tpe-et-pme-utilisent-l-ia-generative",
    },
    {
      label: "INSEE, ICT survey (2025)",
      href: "https://www.insee.fr/fr/statistiques/8616837",
    },
    {
      label: "Gartner (June 2025)",
      href: "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027",
    },
    {
      label: "Ardent Partners / Medius",
      href: "https://www.medius.com/resources/guides-reports/ardent-partners-accounts-payable-metrics-that-matter/",
    },
  ],
} as const;

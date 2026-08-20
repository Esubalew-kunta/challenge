/**
 * Contenu de la page manifeste /pourquoi-maintenant.
 *
 * Long-form éditorial : la thèse « le coût de l'intelligence s'effondre »,
 * déroulée en 5 blocs sourcés, avec des respirations chiffrées entre les
 * blocs. Le copy est validé mot pour mot : ne pas le réécrire, seule la
 * ponctuation d'assemblage (découpage en paragraphes) est ajustable.
 */

export const manifesteMeta = {
  // Pas de « | AI Makers » ici : le gabarit du layout ajoute déjà le suffixe
  // (`template: "%s | AI Makers"`), et la page rendait
  // « Pourquoi maintenant | AI Makers | AI Makers ». Seule page du site à
  // porter ce défaut ; l'autre occurrence est dans `formation.ts`, orphelin.
  title: "Pourquoi maintenant",
  description:
    "Le coût de l'intelligence s'effondre : divisé par 280 en deux ans. Ce que ça change pour votre entreprise, chiffres sourcés à l'appui.",
} as const;

export const manifesteHero = {
  title: "Pourquoi maintenant.",
  subtitle:
    "Le coût de l'intelligence s'effondre. Ce document explique ce que ça change pour votre entreprise, chiffres sourcés à l'appui.",
} as const;

export const manifesteBloc1 = {
  index: "01",
  title: "L'intelligence coûte 280 fois moins cher qu'il y a deux ans.",
  paragraphs: [
    "En mars 2023, GPT-4 coûtait 30 $ par million de tokens. Seize mois plus tard, un modèle équivalent en coûtait 0,15. Le Stanford AI Index mesure une division par 280 du coût d'inférence en deux ans. a16z l'a nommée LLMflation : à performance égale, le prix est divisé par dix chaque année.",
  ],
  stats: [
    {
      value: "÷280",
      label: "coût d'inférence en 2 ans",
      source: "Stanford AI Index",
    },
    {
      value: "÷10 par an",
      label: "à performance égale",
      source: "a16z",
    },
    {
      value: "4% → 72%",
      label: "réussite sur des tâches réelles d'ingénierie en un an",
      source: "SWE-bench",
    },
  ],
} as const;

export const manifesteBloc2 = {
  index: "02",
  title:
    "Quand l'intelligence ne coûte plus rien, vos process deviennent la variable.",
  paragraphs: [
    "Chaque process qui repose sur un humain qui lit, décide et recopie peut être redessiné. Aux tarifs actuels, analyser un document de dix pages coûte environ trois centimes d'API. Une facture traitée à la main coûte 12,88 $ ; automatisée, 2,78 $ (Ardent Partners).",
    "La question n'est plus combien coûte l'IA. C'est combien coûte chaque mois où vos process restent manuels.",
  ],
} as const;

/** Respiration chiffrée entre les blocs 2 et 3. */
export const manifesteRespiration1 = {
  value: "12,88 $ → 2,78 $",
  label: "une facture traitée à la main, puis automatisée (Ardent Partners)",
} as const;

export const manifesteBloc3 = {
  index: "03",
  title:
    "Neuf entreprises sur dix utilisent l'IA. Moins de quatre sur dix en voient l'effet.",
  paragraphs: [
    // 31%, pas 55% : la page annonçait 55% alors que l'étude Bpifrance citée
    // juste en dessous s'intitule « 31% des TPE et PME utilisent l'IA
    // générative ». Écart tranché par le propriétaire le 2026-08-13, on retient
    // le chiffre de la source. Le « 17% régulièrement » est conservé tel quel :
    // c'est un sous-ensemble cohérent (17 < 31), mais il n'a pas pu être
    // vérifié contre la source, qui renvoie 403.
    "88% des organisations utilisent l'IA. 39% seulement mesurent un impact sur leur résultat (McKinsey, 2025). En France, 31% des TPE-PME utilisent l'IA générative, 17% régulièrement (Bpifrance). Et Gartner prédit que plus de 40% des projets d'agents IA seront annulés d'ici fin 2027 : coûts, valeur floue.",
    "La ligne de partage n'est pas la technologie, tout le monde a les mêmes modèles. C'est l'exécution. Les gagnants redessinent leurs process et mesurent. Les perdants achètent des licences et attendent.",
  ],
} as const;

/** Respiration chiffrée entre les blocs 3 et 4. */
export const manifesteRespiration2 = {
  value: "88% → 39%",
  label:
    "des organisations utilisent l'IA ; 39% seulement mesurent un impact sur leur résultat (McKinsey, 2025)",
} as const;

export const manifesteBloc4 = {
  index: "04",
  title: "L'avance se compose. Le retard aussi.",
  paragraphs: [
    "Un système en production s'améliore avec chaque donnée traitée : vos playbooks s'affinent, vos équipes montent en compétence, vos données s'accumulent là où vos concurrents n'ont rien. Douze mois d'avance ne se rattrapent pas en achetant le même outil : il faudrait aussi racheter les douze mois d'apprentissage.",
  ],
  punchline:
    "L'année prochaine est la ligne la plus chère de votre plan stratégique.",
} as const;

export const manifesteBloc5 = {
  title: "Ce trimestre. Pas dans trois ans.",
  body: "Vous n'avez pas besoin d'un plan à 18 mois pour commencer. Deux semaines d'audit. Minimum trois cas d'usage chiffrés. Premiers systèmes en production sous 30 jours.",
  ctaPrimary: { label: "Réserver mon diagnostic gratuit", href: "/contact" },
  ctaSecondary: { label: "Voir notre méthode", href: "/#methode" },
} as const;

export const manifesteSources = {
  title: "Sources",
  items: [
    {
      label: "a16z, LLMflation (novembre 2024)",
      href: "https://a16z.com/llmflation-llm-inference-cost/",
    },
    {
      label: "Stanford AI Index 2025",
      href: "https://hai.stanford.edu/ai-index/2025-ai-index-report",
    },
    {
      label: "McKinsey, The State of AI (novembre 2025)",
      href: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
    },
    {
      label: "Bpifrance Le Lab (décembre 2025)",
      href: "https://lelab.bpifrance.fr/Etudes/31-des-tpe-et-pme-utilisent-l-ia-generative",
    },
    {
      label: "INSEE, enquête TIC (2025)",
      href: "https://www.insee.fr/fr/statistiques/8616837",
    },
    {
      label: "Gartner (juin 2025)",
      href: "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027",
    },
    {
      label: "Ardent Partners / Medius",
      href: "https://www.medius.com/resources/guides-reports/ardent-partners-accounts-payable-metrics-that-matter/",
    },
  ],
} as const;

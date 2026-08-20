/**
 * Contenu anglais de /en/generative-engine-optimization.
 *
 * ⚠️ PAGE GATÉE — livrée, non indexée, hors sitemap (`EN_GATED` dans
 * `i18n.ts`), conformément à `docs/EN-LAUNCH.md` §4.
 *
 * ⚠️ ET SURTOUT : LE MASTER RÉINTRODUIT EXACTEMENT CE QUI MOTIVE LA GATE.
 *
 * Le handover justifie le gate ainsi : « son ossature de preuve “+70% Sage”
 * n'est pas validée ». Or la page FRANÇAISE EN LIGNE ne contient plus aucun
 * « +70% » — elle a été réécrite autour d'une preuve vérifiable : **447 prompts
 * suivis en continu** pour Sage. Le master, lui, met « +70% for Sage » dans sa
 * méta-description ET dans son sous-titre de hero.
 *
 * Reprendre le master, c'est donc republier en anglais le chiffre invalidé que
 * le français a retiré — et l'annoncer dans les résultats de recherche.
 * Cette version suit la page française : 447 prompts, pas +70%.
 *
 * Les chiffres conservés sont sourcés : « 2-3 sources citées par réponse » et
 * « +40% » viennent de l'étude Princeton (Aggarwal et al., KDD 2024) nommée
 * dans le texte ; 447 est notre propre mesure sur le compte Sage.
 */

export const seoGeoMetaEn = {
  // Le gabarit du layout ajoute « | AI Makers » : ne pas le réécrire ici.
  // 54 caractères avec le suffixe de marque ; la version longue en faisait 70.
  title: "SEO & GEO: get cited by ChatGPT and Gemini",
  // Le master annonce ici « +70% for Sage » : retiré.
  description:
    "GEO (Generative Engine Optimization) makes your company the answer the AI engines cite. Visibility audit, citable content, monthly measurement.",
} as const;

export const seoGeoHeroEn = {
  badge: "SEO & GEO · the offer where we are furthest ahead",
  title:
    "Your future clients no longer search on Google. They ask ChatGPT.",
  // 447 prompts, comme le FR — pas le « +70% » du master.
  subtitle:
    "GEO means making your company the answer the AI engines cite. We do it for Sage: 447 prompts tracked continuously across ChatGPT, Gemini and Perplexity. Measured every month, with the evidence.",
  cta: { label: "Book my free diagnostic", href: "/en/contact" },
  secondaryCta: { label: "See the Sage case", href: "#preuve" },
} as const;

export const seoGeoProofEn = {
  id: "preuve",
  badge: "The proof, not the promise",
  title: "What we did for Sage, measured",
  subtitle:
    "An international software vendor, absent from AI engine answers at the start. Here is the before, the after and the method.",
  enginesCaption: "The engines we work on and measure:",
  engines: [
    { name: "ChatGPT", logo: "/images/stack/openai-color.svg" },
    { name: "Gemini", logo: "/images/stack/gemini-color.svg" },
    { name: "Claude", logo: "/images/stack/claude-color.svg" },
  ],
  enginesNote: "And Perplexity, tracked in the same monthly reports.",
} as const;

export const seoGeoShiftEn = {
  badge: "The shift",
  title: "Search is changing hands.",
  paragraphs: [
    "A growing share of searches no longer goes through a results page: it goes through a generated answer. The user asks ChatGPT, Gemini or Perplexity, reads the answer, and clicks only on the sources cited inside it. If they click at all.",
    "And an AI answer cites only a handful of sources. Where a Google page showed ten links and gave page two a chance, a generative engine decides: two or three references, and the rest does not exist. Cited or invisible — there is no longer an in-between.",
    "The good news: it can be optimised, and it can be measured. The term GEO comes from an academic study, “GEO: Generative Engine Optimization” (Aggarwal et al., Princeton, presented at KDD 2024), which measured up to +40% visibility in AI engine answers by reworking content: cited sources, quotations, statistics. It is not magic, it is method.",
  ],
  facts: [
    {
      value: "2-3 sources",
      label: "cited per answer, where Google showed ten links",
      detail:
        "A generative engine does not rank, it chooses. Either you are in the answer, or you do not exist for that question.",
    },
    {
      value: "+40%",
      label: "visibility measured by academic research",
      detail:
        "The Princeton study that introduced the term GEO (KDD 2024): optimising content for citation increases its visibility in AI answers by up to 40%.",
    },
    {
      value: "447",
      label: "AI prompts tracked continuously for Sage",
      detail:
        "Our field application of that research: AI Makers tracks 447 prompts for Sage across the AI engines, and reworks the content until it is cited, query by query.",
    },
  ],
  closing:
    "Your competitors have not noticed this traffic disappearing yet, because it evaporates one query at a time. The moment to take position is while the place is still free.",
} as const;

export const seoGeoMethodEn = {
  badge: "The method",
  title:
    "The AI Makers GEO method: from the baseline to the curve going up",
  subtitle:
    "No black-box package. Every stage has a deliverable, and you watch the measurement move month by month.",
  steps: [
    {
      number: "01",
      title: "AI visibility audit",
      description:
        "Where do you appear today in the answers of ChatGPT, Gemini and Perplexity? And above all: what do the AI engines say about you, your offers, your competitors? We cross Google Search Console, Ahrefs, Profound and Peec to establish the baseline, query by query.",
      deliverable:
        "A costed baseline: your citations, your competitors’, and what the engines say about your brand.",
    },
    {
      number: "02",
      title: "Citation strategy",
      description:
        "The queries that matter for your business, the ones your clients actually ask the AI engines. Then the formats the engines cite: comparisons, definitions, sourced data, answer pages. We prioritise by business impact, not by keyword volume.",
      deliverable:
        "A prioritised citation plan: which questions to target, with which content, in which order.",
    },
    {
      number: "03",
      title: "Citable content, on your site and beyond it",
      description:
        "Content reworked for citation: structured, sourced, factual. Pages that answer first and argue second. And because AI engines draw heavily on Reddit and forums, we build your presence there too: useful contributions where your clients ask their questions, not spam.",
      deliverable:
        "Content reworked and published on your site, plus a presence built on the channels the AI engines cite (Reddit, forums, comparison sites).",
    },
    {
      number: "04",
      title: "Continuous measurement",
      description:
        "Tooled tracking, month by month: Profound and Peec for your citations in AI answers, Google Search Console for traffic (including what comes from ChatGPT), Ahrefs for authority. What rises, we amplify. What stalls, we rework.",
      deliverable:
        "A monthly report: the visibility curve, your share of voice against competitors, and the next actions.",
    },
  ],
} as const;

export const seoGeoTogetherEn = {
  badge: "SEO + GEO",
  title: "SEO and GEO together: one piece of content, two channels",
  intro:
    "Google is still here, and will stay. Classic SEO remains the foundation: a technically clean site, content that answers real questions, authority that builds over time. GEO replaces none of it — it builds on it.",
  points: [
    {
      title: "SEO remains the foundation",
      description:
        "AI engines feed largely on the same sources as Google. Content that is well structured and well ranked starts ahead on both fronts.",
    },
    {
      title: "GEO captures the channel that is opening",
      description:
        "The same pages, reworked for citation: answer-first structure, sources, data. What you produce once works on Google and inside AI answers.",
    },
    {
      title: "AI Makers does both",
      description:
        "One provider, one content strategy, two curves tracked: your organic traffic and your visibility in AI answers.",
    },
  ],
} as const;

export const seoGeoWhyUsEn = {
  badge: "Why us",
  title: "A GEO agency that practises what it sells",
  intro:
    "The AI Makers site is itself GEO-optimised: structured data on every page, answer-first content, sourced figures. We recommend nothing we do not apply to our own site.",
  proofPoints: [
    {
      title: "This site is our testing ground",
      description:
        "Service, FAQ and Breadcrumb schemas, pages built to answer first: the techniques we deploy at our clients run here first.",
    },
    {
      title: "We do it on a demanding case",
      description:
        "Sage, an international software vendor, in a competitive vertical: 447 AI prompts tracked continuously, content reworked until it is cited, share of voice measured every month against competitors.",
    },
    {
      title: "We make the subject usable",
      description:
        "GEO is only useful if your business teams understand what to produce and why. We translate the technique into actionable recommendations, not jargon.",
    },
  ],
  testimonialAuthor: "Mickaël Mina",
} as const;

export const seoGeoCommitmentEn = {
  badge: "Our commitment",
  title: "GEO is measurable. So we measure it in front of you.",
  paragraphs: [
    "We do not promise you a position: nobody controls what a model decides to cite. What AI Makers commits to is making the work visible. Measurement is not a bonus at the end of the engagement: it is the contract from the start.",
    "You see what is rising, what is stalling, and what we are doing to correct it. If a piece of content produces no citations, we rework it.",
  ],
  points: [
    "AI visibility baseline established on day 1",
    "Monthly report: citations, share of voice, query-by-query movement",
    "Systematic comparison with your direct competitors",
    "Content reworked for as long as it produces no citations",
  ],
} as const;

export const seoGeoFaqEn = {
  badge: "FAQ",
  title: "The questions we get about GEO",
  items: [
    {
      question: "What is GEO (Generative Engine Optimization)?",
      answer:
        "GEO (Generative Engine Optimization) is the optimisation of a brand's visibility in the answers generated by AI engines: ChatGPT, Gemini, Perplexity, Claude. The term comes from an academic study out of Princeton presented at KDD 2024. Where SEO aims at a ranking of links, GEO aims at the citation: making your company one of the 2 or 3 sources the engine takes up in its answer.",
    },
    {
      question: "What is the difference between GEO and SEO?",
      answer:
        "SEO (Search Engine Optimization) aims to position your pages in Google's results: a ranking of links, where the user chooses. GEO aims to get your company cited in the answers the AI engines write, which keep only a few sources. Both rest on the same foundation of structured, sourced content, but GEO adds its own requirements: answer-first structure, citable data, structured data. At AI Makers, both are handled within a single content strategy.",
    },
    {
      question: "GEO or SEO: where do you start?",
      answer:
        "With both at once, because they share the same foundation: a technically clean site and content that answers real questions. Well-structured content works on Google and inside AI answers. At AI Makers, one content strategy feeds both channels: the trade-off is about which queries to target, not which channel.",
    },
    {
      question: "How do you appear in ChatGPT's answers?",
      answer:
        "ChatGPT cites the sources it judges reliable and easy to take up: content that answers the question directly, sourced figures, a clear structure, and domain authority. Concretely, AI Makers works two fronts: your site (answer-first pages, citable data, structured data) and the channels ChatGPT draws its answers from, Reddit and forums first among them, where we establish your brand with useful contributions. Then we measure, query by query, whether the brand is cited.",
    },
    {
      question: "How much does a GEO engagement cost?",
      answer:
        "It depends on the scope: the number of queries tracked, the volume of content to produce or rework, the number of engines measured. At AI Makers, SEO and GEO are handled within the same content engagement, billed monthly. The simplest route: the free 30-minute diagnostic gives you a first picture of your AI visibility and an order of magnitude on budget.",
    },
    {
      question: "How long before you see results?",
      answer:
        "The first citations generally arrive within a few weeks of publishing the optimised content, but the curve builds over months. AI engines re-evaluate their sources continuously: the visibility you gain consolidates with regularity and accumulated authority. That is why we establish the baseline on day 1 and show you the movement every month, rather than promising a precise timeline nobody can guarantee.",
    },
    {
      question: "What kind of company does GEO work for?",
      answer:
        "GEO is relevant as soon as your clients research before buying: B2B, services, software, healthcare, industry, or any activity where providers get compared. It pays off particularly well in verticals where the AI engines still cite few players: the first-reference slot is there to take. It is less relevant for impulse purchases with no research phase. The simplest route: the AI Makers visibility audit tells you within days whether your market is already asking the AI engines its questions, and who is being cited in your place.",
    },
    {
      question: "How do you measure visibility in AI answers?",
      answer:
        "AI Makers combines four tools: Profound and Peec query the engines (ChatGPT, Gemini, Perplexity) continuously across a panel of queries defined with you, Google Search Console measures the traffic arriving from the AI engines, and Ahrefs tracks your domain authority. For every query we record whether your brand is cited, in what position, with what wording, and who else is cited. That gives three indicators tracked month by month: your citation rate, your share of voice against competitors, and the tone of what the engines say about you.",
    },
  ],
} as const;

export const seoGeoFinalCtaEn = {
  title: "What are the AI engines saying about you right now, in your place?",
  subtitle:
    "30 minutes to find out: we query the engines on your key searches live, and you leave with your first picture of AI visibility, whether you work with us or not.",
  cta: { label: "Book my free diagnostic", href: "/en/contact" },
} as const;

export const seoGeoChromeEn = {
  breadcrumbHome: "Home",
  breadcrumbCurrent: "SEO & GEO",
  serviceName: "SEO & GEO: ranking inside the AI engines",
  serviceType: "Generative Engine Optimization (GEO) and SEO",
  serviceDescription:
    "Optimising visibility inside the answers of AI engines (ChatGPT, Gemini, Perplexity, Claude) and organic search: visibility audit, citation strategy, citable content, monthly measurement.",
  areaServed: ["France", "Morocco"],
  demoBadge: "The demonstration",
  demoTitle: "Your best prospects ask the AI. Not Google.",
  demoIntro:
    "And today, the AI answers without you. Every answer that cites a competitor is a client you will never see arrive. Here is what GEO changes, live.",
  stepBefore: "Before",
  stepAfter: "After",
  stepHow: "How",
  deliverableLabel: "The deliverable",
  closingTitle:
    "The AI is already answering your market’s questions. The only question is who it cites.",
  closingIntro:
    "The AI engines are learning right now who holds authority in your sector, and accumulated authority compounds with every citation. Those who establish themselves early start with the advantage of being cited first.",
  withoutTitle: "Doing nothing",
  withoutItems: [
    "· The AI cites your competitors in your place",
    "· Qualified prospects you never see",
    "· An authority that builds without you",
    "· A gap that gets more expensive to close",
  ],
  withTitle: "With AI Makers",
  withItems: [
    "Your brand present in the AI answers of your sector",
    "Visibility measured before and after, with figures",
    "Content that becomes the source the AI takes up",
    "A share of voice tracked every month against your competitors",
  ],
  closingCta: "Take my place in the AI answers",
  closingNote:
    "Free AI visibility diagnostic. We show you where you stand before talking about it.",
  /**
   * Trois cartes côté FR ; une seule survit en anglais.
   *
   * L'audit GEO gratuit (`/outils/audit-geo-gratuit`) et l'étude de cas Sage
   * n'ont pas de page anglaise — l'outil n'est pas encore traduit, et les
   * études de cas sont bloquées par le pipeline OS. L'article de blog n'a pas
   * de version anglaise non plus. Une carte titrée en anglais qui ouvre une
   * page française est un piège : elles sont retirées jusqu'à ce que leurs
   * destinations existent.
   */
  related: [] as readonly {
    readonly title: string;
    readonly href: string;
    readonly description: string;
  }[],
} as const;

/**
 * Contenu anglais de /en/ai-consulting.
 *
 * QUATRE CORRECTIONS DU MASTER — trois portent sur les garanties, une sur une
 * ville. Le master de cette page est le plus contaminé de la série :
 *
 * 1. **Méta-description** : « One dedicated engineer, four written
 *    guarantees. » Remplacé — la promesse annoncée dans les résultats de
 *    recherche devient celle de la description FRANÇAISE (systèmes déployés).
 * 2. **Intro du hero** : « under four guarantees written into the contract ».
 *    Retiré.
 * 3. **FAQ 1** : « and four written guarantees including full IP ownership ».
 *    La propriété intellectuelle totale est bien promise en français, les
 *    garanties non : on garde la première, on retire les secondes.
 * 4. **FAQ 5** : le master situe le second bureau à « Rabat (Agdal) ». Le
 *    français dit **Casablanca**, partout. Troisième fois que ce jeu de
 *    masters place le bureau à Rabat (cf. `homepage-content.en.ts`).
 *
 * Rappel de la raison : il n'existe ni route /garanties, ni bloc `guarantees`
 * dans `site-config.ts`, ni composant. Les garanties ont été retirées du site
 * français ; les publier en anglais engagerait l'entreprise sur ce qu'elle ne
 * promet plus. Voir l'en-tête de `ai-partner.en.ts`.
 *
 * ÉCART ASSUMÉ, celui-là éditorial : la FAQ 3 française répond « comment
 * automatiser un processus » en quatre étapes ; le master remplace la question
 * par « Can you both advise on AI and build it? » et renvoie le how-to à la
 * page /ai-automation, qui en est propriétaire côté EN. C'est une décision de
 * répartition SEO de la réconciliation, pas un changement de fait : suivie.
 */

export const aiConsultingMetaEn = {
  // Le gabarit du layout ajoute « | AI Makers » : ne pas le réécrire ici.
  title: "AI consulting services & automation",
  description:
    "Looking for an AI agency? AI Makers is an AI consultancy: we audit your processes, ship AI systems to production, and train your teams. 200+ systems deployed.",
} as const;

export const aiConsultingSchemaEn = {
  breadcrumbHome: "Home",
  breadcrumbCurrent: "AI consulting",
  serviceName: "AI transformation for companies",
  serviceType: "AI transformation consultancy",
  serviceDescription:
    "Process audit, AI agents and automations shipped to production, teams trained. One dedicated AI engineer, full ownership of everything built.",
  areaServed: ["France", "Morocco"],
} as const;

export const aiConsultingHeroEn = {
  badge: "AI transformation studio",
  h1Lead: "AI consulting that ships systems,",
  h1Highlight: "not slides.",
  intro:
    "AI Makers is an AI consultancy that audits your processes, builds AI systems in production, and trains your teams to run them without us. Where a typical AI agency ships a chatbot or a proof-of-concept and moves on, we embed one dedicated AI engineer who delivers one to two systems a month — agents, automations, department copilots — with full ownership of everything built. More than 200 systems deployed across 50+ companies.",
  stats: [
    { target: 50, prefix: "+", label: "companies supported" },
    { target: 200, prefix: "+", label: "systems in production" },
    { target: 9.6, decimals: 1, suffix: "/10", label: "satisfaction" },
  ],
  proofPhoto: {
    src: "/images/formations/atelier-hands-on.png",
    alt: "An AI Makers hands-on workshop with a client team",
  },
  proofCaption:
    "A hands-on workshop at a client, built on their own real use cases.",
} as const;

export const aiConsultingComparisonEn = {
  badge: "The comparison",
  title: "Consultancy, IT services firm, AI agency, licence, or AI Makers",
  // Le master ajoute ici « with the guarantees in writing » : retiré.
  description:
    "Five ways to bring AI into a company. Only one ships systems into production, configured for you.",
} as const;

export const aiConsultingBuildsEn = {
  badge: "What we build",
  title: "Systems in production, not demos",
  description:
    "Three families of AI systems, each delivered connected to your tools and documented.",
  items: [
    {
      icon: "bot",
      title: "Custom AI agents",
      description:
        "Systems that run whole tasks end to end: qualifying inbound requests, drafting documents, summarising meetings. Connected to your tools, shipped to production, and yours to keep.",
    },
    {
      icon: "workflow",
      title: "Workflow automation",
      description:
        "Reporting, data entry, follow-ups, invoicing: the repetitive work moves to automatic, built on n8n and Claude. Average measured gain: 7 hours per week per employee.",
    },
    {
      icon: "copilot",
      title: "Department copilots",
      description:
        "AI assistants trained on your data and your internal rules, built for one team: sales, legal, support, or finance.",
    },
  ],
} as const;

export const aiConsultingMethodEn = {
  badge: "The method",
  title: "Three phases, from audit to autonomy",
  description: "One offer structures every engagement: AI PARTNER.",
  items: [
    {
      number: "01",
      title: "Audit: AI Scan",
      description:
        "One to two weeks to map your processes, score your AI maturity out of 24, and deliver a roadmap with at least 3 high-ROI use cases.",
    },
    {
      number: "02",
      title: "Build: AI Engine",
      description:
        "A dedicated AI engineer ships 1 to 2 systems a month, in production. Two hours of team training every week.",
    },
    {
      number: "03",
      title: "Scale: AI Champions",
      description:
        "Internal champions trained to spread usage. The goal: a company that runs without us at six months.",
    },
  ],
  link: {
    label: "See the full AI PARTNER offer",
    href: "/en/ai-transformation",
  },
} as const;

export const aiConsultingIcpEn = {
  badge: "Who it works for",
  title: "The companies this works best for",
  description:
    "We take on at most 3 new clients a month. Worth spending them on the right fit.",
  items: [
    {
      title: "SMEs and mid-market, 50 to 500 people",
      description:
        "Enough volume that automation moves the margin, enough agility to deploy fast. The core of our work.",
    },
    {
      title: "Communication and creative agencies",
      description:
        "AI is redrawing the craft. The agencies that build it into production pull ahead of the ones still waiting.",
    },
    {
      title: "Biotech and healthcare",
      description:
        "Highly skilled teams, heavy on documentation and reporting: strong ground for AI, with the sector's demand for rigour.",
    },
  ],
} as const;

export const aiConsultingFaqEn = {
  title: "Frequently asked questions",
  items: [
    {
      question:
        "What’s the difference between an AI agency and an AI consultancy?",
      answer:
        "An AI agency usually ships a single project — a chatbot, a POC, an automation — then moves to the next client. An AI consultancy commits to an outcome over time: it audits the processes, builds the systems in production, trains the teams, and hands over the skill. At AI Makers that means one dedicated engineer, 1 to 2 systems shipped to production each month, two hours of training a week, and full ownership of everything built.",
    },
    {
      question: "What does an AI consultant do?",
      answer:
        "An AI consultant maps a company’s processes, spots the automatable tasks, recommends use cases, and supports their rollout. The limit of classic consulting is that the recommendation often stops at the report. The engineers who audit are the same ones who build the systems and then train the teams to run them.",
    },
    {
      question: "Can you both advise on AI and build it?",
      answer:
        "Yes — advising and building are the same engagement here, not two vendors. We map and prioritise use cases by return on investment, then a dedicated engineer builds the chosen systems on proven tools like n8n and Claude, connected to your data. Every system ships with a measure of usage and time saved.",
    },
    {
      question: "Do you build AI agents?",
      answer:
        "Yes. We design custom AI agents: systems that carry out full tasks — qualifying a request, preparing a document, synthesising exchanges — using your tools and your data. Each agent ships to production, documented, and its intellectual property is transferred to you in full.",
    },
    {
      question: "Where do you operate?",
      answer:
        "We have offices in Paris (75008) and Casablanca. We work across France and Morocco, on-site for the key moments — audit interviews, readouts, training — and remote for the rest. We deliberately cap capacity at 3 new clients a month so every account keeps its own dedicated engineer.",
    },
  ],
} as const;

/**
 * « Pour aller plus loin » : seule la carte qui a une page ANGLAISE survit.
 *
 * Les trois autres pointent vers des articles de blog qui n'ont pas de version
 * anglaise (handover §2). Aucun fichier `*.en.ts` du site ne lie vers /blog :
 * un titre anglais qui ouvre un article français est un piège, pas un repli.
 */
export const aiConsultingRelatedEn = [
  {
    title: "Forward Deployed Engineer",
    href: "/en/forward-deployed-engineer",
    description:
      "An engineer embedded in your team rather than an agency: the model, week by week.",
  },
] as const;

export const aiConsultingCtaEn = {
  title: "Compare us to your AI agency",
  subtitle:
    "30 minutes to review your workflows and leave with your first 3 AI quick wins, whether you work with us or not.",
} as const;

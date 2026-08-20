/**
 * Contenu anglais de /en/ai-automation.
 *
 * Le master de cette page est SAIN : ni garanties fantômes, ni Rabat, ni
 * chiffre périmé. Vérifié avant transcription — c'est le premier de la série
 * pour lequel c'est le cas, donc la note vaut d'être écrite.
 *
 * Le tableau « avec / sans » n'est pas ici : il est partagé avec la home et sa
 * version anglaise vit dans `ai-partner.en.ts` (`aiPartnerComparisonEn`), avec
 * les montants gardés en euros.
 *
 * Cette page est propriétaire, côté anglais, de deux questions que d'autres
 * pages renvoient vers elle : « comment automatiser un processus » (déléguée
 * par /en/ai-consulting) et la mesure du ROI (le calculateur y renvoie).
 */

export const aiAutomationMetaEn = {
  // Le gabarit du layout ajoute « | AI Makers » : ne pas le réécrire ici.
  title: "AI automation for business processes",
  description:
    "AI automation for your processes: reporting, data entry, follow-ups, summaries. Mapped, scored by ROI, built on n8n and Claude. Average gain: 7 hours a week.",
} as const;

export const aiAutomationSchemaEn = {
  breadcrumbHome: "Home",
  breadcrumbCurrent: "AI automation",
  serviceName: "AI automation of business processes",
  serviceType: "Workflow automation",
  serviceDescription:
    "Process mapping, prioritisation by ROI, automated workflows built with n8n and Claude, gains measured. Systems shipped to production.",
  areaServed: ["France", "Morocco"],
} as const;

export const aiAutomationHeroEn = {
  badge: "AI automation",
  h1Lead: "AI automation for",
  h1Highlight: "your business processes",
  intro:
    "AI automation means handing the repetitive parts of a workflow to intelligent systems: data entry, reporting, follow-ups, summaries. Average measured result across our clients: 7 hours saved per week per employee. AI Makers maps your processes, prioritises them by ROI, builds on n8n and Claude, then measures the gain — every system shipped to production and documented.",
  stats: [
    { target: 7, suffix: "h", label: "saved / week / person" },
    { target: 200, prefix: "+", label: "systems in production" },
    { target: 50, prefix: "+", label: "companies supported" },
  ],
  proofPhoto: {
    src: "/images/formations/atelier-hands-on.png",
    alt: "An AI automation workshop with a client team",
  },
  proofCaption:
    "Building an automated workflow, in a workshop with the client.",
} as const;

export const aiAutomationWiringEn = {
  badge: "At a glance",
  title: "What an automated workflow looks like",
  description:
    "A trigger, an agent that processes, outputs in seconds. Here’s a real case: a lead that arrives by email, qualified and routed without a single hand touching it.",
} as const;

export const aiAutomationProcessesEn = {
  badge: "The processes",
  title: "What actually gets automated",
  description:
    "Six families of process show up in almost every engagement. If your teams spend hours a week on them, there’s a system to build.",
  items: [
    {
      icon: "reporting",
      title: "Reporting",
      description:
        "Activity reports, dashboards, weekly consolidations generated automatically from your own data.",
    },
    {
      icon: "data",
      title: "Data entry and transfer",
      description:
        "Document extraction, CRM updates, tool-to-tool sync, with no manual re-keying.",
    },
    {
      icon: "followup",
      title: "Follow-ups",
      description:
        "Client, supplier, candidate or overdue-invoice reminders fired at the right moment, with the right context.",
    },
    {
      icon: "summary",
      title: "Summaries",
      description:
        "Meeting notes, long-document digests, condensed monitoring pushed to the right people.",
    },
    {
      icon: "onboarding",
      title: "Onboarding",
      description:
        "A new client or hire arrives: access, documents and checklists created with no manual step.",
    },
    {
      icon: "invoicing",
      title: "Invoicing",
      description:
        "Invoice generation, payment tracking, reconciliation, and alerts on late payers.",
    },
  ],
} as const;

export const aiAutomationStepsEn = {
  badge: "The method",
  title: "Four steps, no gamble",
  description:
    "We never start with the tool. We start with the process and its ROI.",
  items: [
    {
      number: "01",
      title: "Mapping",
      description:
        "We document your real workflows, task by task, with the people who run them. No assumptions.",
    },
    {
      number: "02",
      title: "ROI scoring",
      description:
        "Every process gets scored: time spent, frequency, complexity, potential gain. We only build what pays back.",
    },
    {
      number: "03",
      title: "Build",
      description:
        "The system is built on n8n and Claude, connected to your tools, tested with your teams, then shipped to production.",
    },
    {
      number: "04",
      title: "Measurement",
      description:
        "Every system has its KPIs: real usage, time saved, errors avoided. What isn’t measured gets dropped.",
    },
  ],
} as const;

export const aiAutomationToolVsSystemEn = {
  badge: "Tool vs system",
  title: "A tool is bought. A system is built.",
  emphasis: "system",
  paragraph1:
    "Buying a ChatGPT licence for the whole team isn’t automation. It’s a tool. And a tool with no process behind it sits unused after three weeks.",
  paragraph2Lead: "A ",
  paragraph2Rest:
    " is different: a workflow wired to your data that runs without anyone thinking about it, with tracking indicators and one person accountable for it. It survives departures, activity spikes and tool changes.",
  paragraph3:
    "That’s why we don’t sell licences or prototypes: we ship systems to production, documented, with the intellectual property transferred to you in full.",
} as const;

export const aiAutomationWithWithoutEn = {
  badge: "With or without",
  title: "Build these systems alone, or with us",
  description:
    "Hire a senior AI profile, or plug in a dedicated engineer focused on your processes. The maths is quick.",
} as const;

export const aiAutomationStackEn = {
  badge: "The stack",
  title: "Our tools, no spin",
  description:
    "We have no exclusivity with anyone. Here’s what we use and why.",
  items: [
    {
      name: "n8n",
      description:
        "Our main automation engine. Open source, self-hosted, advanced logic and a native connection to AI models. Most of our systems are built on n8n.",
    },
    {
      name: "Claude",
      description:
        "The AI model we use for reasoning tasks: document analysis, drafting, summarising, qualification. Wired into the workflows via API.",
    },
    {
      name: "Make",
      description:
        "A solid visual alternative for mid-complexity scenarios. We reach for it when the client’s ecosystem calls for it.",
    },
    {
      name: "Zapier",
      description:
        "The simplest way to connect two tools on a basic scenario. Its limits: cost at volume and restricted logic. Honestly, rarely our first pick for real business processes.",
    },
  ],
} as const;

export const aiAutomationFaqEn = {
  title: "Frequently asked questions about automation",
  items: [
    {
      question: "Which processes should you automate first?",
      answer:
        "The ones that combine three traits: high frequency, clear rules, low human value-add. In practice: recurring reporting, data entry and transfer between tools, client and supplier follow-ups, meeting and document summaries. That is exactly what our audit measures — each process gets an ROI score before any build decision.",
    },
    {
      question: "How long does it take to automate a workflow?",
      answer:
        "In our Build phase, a dedicated engineer ships 1 to 2 systems a month to production. A simple workflow (an automated reminder, a generated report) deploys in a few weeks. A deeper system, wired to several tools with human validation steps, takes a full cycle. The real delay is not technical: it is team adoption, which is why two hours of weekly training is built in.",
    },
    {
      question: "n8n or Zapier?",
      answer:
        "Zapier is simpler and fine for connecting two tools on a basic scenario. n8n is more powerful: advanced conditional logic, calls to AI models like Claude, self-hosting, and cost that does not explode with volume. For serious business processes we build on n8n. But the tool is secondary: a bad process automated is still a bad process.",
    },
    {
      question: "How do you measure the ROI of an automation?",
      answer:
        "Before the build, we baseline the starting point: time on the task, frequency, people involved, error rate. After go-live, we track the same indicators plus real system usage. ROI is counted in hours recovered and errors avoided. Across our clients the average measured gain is 7 hours per week per employee.",
    },
    {
      question: "Do you need technical skills in-house?",
      answer:
        "Not to start: our engineer builds, documents and ships to production. Yes to last: every engagement includes two hours of weekly training and the AI Champions programme, which trains internal referents. At six months your teams run the systems without us, and the intellectual property is entirely yours.",
    },
  ],
} as const;

/**
 * « Pour aller plus loin » : une seule carte sur trois survit.
 *
 * Ne sont gardées que les destinations réellement PUBLIÉES en anglais. Le
 * calculateur de ROI (`/outils/calculateur-roi-ia`) et le hub d'études de cas
 * n'ont pas encore de page anglaise : `withResolvedEnLinks` rabattrait leurs
 * liens sur le français, donc une carte au titre anglais ouvrirait une page
 * française. Les remettre quand les pages existent.
 */
export const aiAutomationRelatedEn = [
  {
    title: "AI Transformation",
    href: "/en/ai-transformation",
    description: "The full three-phase offer, from audit to autonomy.",
  },
] as const;

export const aiAutomationCtaEn = {
  title: "Which processes would you automate?",
  subtitle:
    "30 minutes to review your workflows and leave with your first 3 AI quick wins, whether you work with us or not.",
} as const;

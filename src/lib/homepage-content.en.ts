/**
 * Contenu de la page d'accueil anglaise.
 *
 * Fichier séparé de `site-config.en.ts` (qui ne porte que le chrome : nav,
 * mega-menu, pied de page) parce que le pendant français fait 1 133 lignes :
 * les mélanger rendrait les deux illisibles.
 *
 * Repris du master `[EN] website-content/homepage/homepage.md`, champ par
 * champ — À TROIS EXCEPTIONS PRÈS, où le master est PÉRIMÉ par rapport au FR
 * en ligne. Le master a été écrit avant plusieurs corrections du site, et le
 * recopier tel quel aurait publié des chiffres faux en anglais :
 *
 * • personnes formées : le master dit « +2,500 », le site dit **+10 000**
 *   partout (site-config, llms.txt, formations, villes). C'est +10 000.
 * • Playbook : le master dit « 48 pages », le site dit **54** partout. C'est 54.
 * • `ctaSecondary` : le master pointe `/ai-readiness-assessment`, une page
 *   ABSORBÉE par /ai-transformation et absente de ROUTE_MAP. Le FR pointe sur
 *   /diagnostic-ia, dont le jumeau EN est /en/ai-maturity-assessment.
 *
 * L'ORDRE DES OFFRES DIFFÈRE DU FR, volontairement. La recherche de mots-clés
 * (Organic Growth Hub, verrouillée le 22/06/2026) est explicite : la demande
 * anglaise est portée par l'automatisation et le conseil (`ai automation`
 * 12 000, `ai consulting` 8 400), tandis que l'intention « formation » en
 * anglais vient de chercheurs de MOOC et de certifications cloud — hors cible.
 * Le FR mène donc par la formation, l'EN mène par le build.
 *
 * Les liens pointent vers les routes EN de ROUTE_MAP. `alternateFor()` les
 * rabat sur le FR tant que la page EN n'est pas publiée : aucun 404 possible.
 */

export const homepageContentEn = {
  hero: {
    headline: "AI transformation,",
    headlineAccent: "shipped",
    subtitle: "Your AI department, live in 30 days.",
    description:
      "AI Makers is an AI transformation studio in France and Morocco. We target the highest-value use cases, build and run the systems in production inside your own tools, and train your teams until they no longer need us.",
    ctaPrimary: { label: "Shall we start?", href: "/en/contact" },
    ctaSecondary: {
      label: "Test your AI maturity in 2 min",
      href: "/en/ai-maturity-assessment",
    },
    newsletterFallback: {
      prefix: "Not ready to talk?",
      label: "Get the AI-First Playbook (54 pages)",
      href: "/en/ai-playbook",
    },
    stats: [
      { target: 50, prefix: "+", label: "companies supported" },
      { target: 10000, prefix: "+", label: "people trained" },
      {
        target: 9.6,
        decimals: 1,
        suffix: "/10",
        label: "average satisfaction",
      },
    ],
  },

  problem: {
    badge: "The problem",
    title:
      "You know AI can transform your company. But where do you start?",
    intro:
      "You've tried ChatGPT, maybe even trained a few people. In practice, nothing has changed in your processes.",
    points: [
      {
        title: "You don't know which processes to automate first",
        description:
          "Too many options, no ROI scoring. You spend on the use cases that sound fun, not the ones that move your P&L.",
      },
      {
        title: "Your teams lose whole days to work with no value",
        description:
          "Reporting, data entry, follow-ups, summaries: work AI absorbs 60-80% of. Your best people deserve better.",
      },
      {
        title: "You tested ChatGPT or Copilot. Nothing changed.",
        description:
          "A tool on its own changes nothing. What changes everything: a system configured for how you actually work, and teams trained to use it.",
      },
    ],
  },

  offers: {
    badge: "Our offers",
    title: "Three ways to work with us",
    subtitle:
      "One entry point per situation. The same proven method underneath each.",
    // Ordre EN : le programme de build d'abord, la formation en dernier.
    // C'est l'écart assumé avec le FR — voir l'en-tête du fichier.
    items: [
      {
        name: "AI Transformation",
        promise:
          "The full program: audit, systems in production, autonomous teams.",
        for: "For SMEs and mid-market companies that want to go AI-first, not just run a pilot.",
        href: "/en/ai-transformation",
        illustration: "/images/3d/roadmap-roi.png",
      },
      {
        name: "Forward Deployed Engineer",
        promise: "An AI engineer embedded in your team.",
        for: "Codes at your side, in your stack.",
        href: "/en/forward-deployed-engineer",
        illustration: "/images/3d/chip-process.png",
      },
      {
        name: "AI Training",
        promise:
          "Your teams trained on their real use cases, not on slides.",
        for: "On your own workflows and your own data, never on generic decks.",
        href: "/en/ai-training-for-teams",
        illustration: "/images/3d/chapeau-formation-logos.png",
      },
    ],
  },

  valueProp: {
    kicker: "Why AI Makers?",
    title: "Your AI transformation partner",
    manifestoParagraphs: [
      "We're a team of builders. Since 2022, the systems we sell have been running AI Makers, and everything new is tested in-house before it reaches you.",
      "That's what makes the approach pragmatic: everything starts from your problems, never from a catalogue. We identify the highest-value use cases, then build the automations and agents that answer them. Deployed one by one, until they're genuinely adopted. We also advise you on choosing your stack and setting it up. And your people build the skills, until they no longer need us.",
    ],
    manifestoSignature: "We sell our own cooking.",
    conversation: [
      {
        from: "dg",
        text: "We know we have to bring in AI. We just don't know where to start, or how.",
      },
      {
        from: "aim",
        text: "That's the sentence we hear most. The good news: it's a two-week fix.",
      },
      { from: "dg", text: "How?" },
      {
        from: "aim",
        text: "An audit of your workflows. We find where AI creates value for you and put a number on every opportunity. You leave with a roadmap: what to build first, and for what return.",
      },
      {
        from: "aim",
        text: "Then we build. One to two systems a month, measured before and after, against a KPI agreed before each deployment.",
      },
    ],
    conversationCta: {
      prefix: "Keep the conversation going. 30 minutes, for real.",
      label: "Book the slot",
      href: "/en/contact",
    },
    objectionsKicker: "The conversation continues",
    objectionsTitle: "What you're probably thinking",
    objections: [
      {
        icon: "presentation",
        quote: "Another consultancy about to sell me slides?",
        answer:
          "No: **systems in production**, with at least 3 profitable use cases identified in the audit itself.",
      },
      {
        icon: "users",
        quote: "My teams will never keep up.",
        answer:
          "70% of a transformation is people (BCG). **Two hours of training a week**, your **AI Champions** autonomous at 6 months.",
      },
      {
        icon: "chef",
        quote: "And you — do you actually use AI yourselves?",
        answer:
          "Since 2022, **the systems we sell have been running AI Makers**. Our own kitchen is further down this page.",
      },
      {
        icon: "key",
        quote: "And the day you walk away?",
        answer:
          "**Everything stays with you**: code, playbooks, trained teams. Your independence is a **deliverable**.",
      },
    ],
    optionsPunchline: {
      line1: "Not a consultancy. Not an agency. Not one more licence.",
      line2: "A team of engineers that builds inside your company. Compare.",
    },
    // Tableau comparatif : le master le désigne comme « canonical OWNER »
    // sans en fournir l'anglais. Traduction fidèle, aucune promesse ajoutée.
    optionsTable: {
      columns: [
        { key: "cabinet", label: "Consultancy", icon: "briefcase" },
        { key: "esn", label: "IT services firm", icon: "server" },
        { key: "freelance", label: "Agency / freelancer", icon: "user" },
        { key: "licence", label: "A ChatGPT or Copilot licence", icon: "logos" },
        { key: "aimakers", label: "AI Makers", icon: "aimakers" },
      ],
      rows: [
        {
          label: "What you get",
          cells: [
            { mark: "no", text: "A report and some slides" },
            { mark: "meh", text: "Developers billed by the day" },
            { mark: "meh", text: "A tool, then nobody" },
            { mark: "no", text: "A general-purpose chat" },
            { mark: "yes", text: "Systems in production, documented" },
          ],
        },
        {
          label: "Who builds",
          cells: [
            { mark: "no", text: "Nobody: you get recommendations" },
            { mark: "meh", text: "A team billed by the day" },
            { mark: "meh", text: "One person, when they're free" },
            { mark: "no", text: "You, on your own" },
            { mark: "yes", text: "A dedicated engineer, inside your infrastructure" },
          ],
        },
        {
          label: "Configured for you",
          cells: [
            { mark: "meh", text: "In theory" },
            { mark: "meh", text: "To the specification" },
            { mark: "meh", text: "To the brief" },
            { mark: "no", text: "Generic by design" },
            { mark: "yes", text: "On your processes and your data" },
          ],
        },
        {
          label: "Your teams at 6 months",
          cells: [
            { mark: "no", text: "Still dependent" },
            { mark: "no", text: "Dependent on the contractors" },
            { mark: "no", text: "Dependent on the supplier" },
            { mark: "meh", text: "Left to themselves" },
            { mark: "yes", text: "Autonomous: AI Champions trained" },
          ],
        },
        {
          label: "When it ends",
          cells: [
            { mark: "no", text: "The report sleeps as a PDF" },
            { mark: "no", text: "The contractors leave, the knowledge with them" },
            { mark: "no", text: "It all leaves with them" },
            { mark: "no", text: "The subscription lapses" },
            { mark: "yes", text: "Everything stays with you: code, workflows, docs" },
          ],
        },
      ],
      scarcity: "At most 3 new clients a month",
    },
    orbitCaption: "Our stack. Used every day, in-house.",
  },

  method: {
    badge: "How we work",
    title: "Your AI department, outsourced. From audit to autonomy.",
    subtitle:
      "Week by week, here's what exists inside your company: the deliverables, the systems in production, and what you gain at each step.",
    steps: [
      {
        number: "01",
        phase: "AI Scan",
        icon: "search",
        name: "Audit",
        duration: "Weeks 1-2",
        involvement: "Interviews with your teams",
        deliverable: "Full process map and at least 3 profitable use cases",
        deliverableShort: "Map + 3 costed cases",
        whatWeDo: [
          "Map of your real workflows",
          "Interviews with leaders and operators",
          "Maturity scoring on our /24 grid",
          "A number on every opportunity",
        ],
        gain:
          "You know where AI pays off for you: at least 3 costed use cases, ranked by ROI.",
        whyItMatters:
          "This is where most AI projects die: a use case picked on gut feel instead of impact. You only sign the next step if the numbers hold.",
        next: "The roadmap goes to review",
      },
      {
        number: "02",
        phase: "AI Scan",
        icon: "map",
        name: "Strategy",
        duration: "Week 2",
        involvement: "Review and trade-offs in committee",
        deliverable: "Costed, prioritised roadmap, validated together",
        deliverableShort: "ROI roadmap validated",
        whatWeDo: [
          "Prioritisation by impact on your P&L",
          "Integration architecture for your stack",
          "Milestones and owners",
          "Projected gains per system",
        ],
        gain:
          "A 3-, 6- and 12-month roadmap ranked by ROI. You decide on numbers, not hunches.",
        whyItMatters:
          "A roadmap signed off in committee gives you a direction and an internal sponsor. Without it, every decision gets renegotiated for six months.",
        next: "Development starts",
      },
      {
        number: "03",
        phase: "AI Engine",
        icon: "settings",
        name: "Development",
        duration: "Weeks 3-6",
        involvement: "Minimal: we build, you validate",
        deliverable: "Systems built, tested on your data",
        deliverableShort: "Systems tested on your data",
        whatWeDo: [
          "Building the workflows and agents",
          "Connection to your existing tools",
          "Testing and quality control",
          "Documentation of every system",
        ],
        gain: "Your first systems run in production from the first month.",
        whyItMatters:
          "Tested on your real data, not in a demo. That's the difference between a proof of concept that impresses and a tool your teams keep.",
        next: "Go live",
      },
      {
        number: "04",
        phase: "AI Engine",
        icon: "rocket",
        name: "Rollout",
        duration: "Ongoing",
        involvement: "Your field feedback every week",
        deliverable: "1 to 2 systems a month in production",
        deliverableShort: "System 1 in production",
        whatWeDo: [
          "Deployment into your real workflows",
          "KPI measured before and after",
          "Adjustments from usage feedback",
          "Same-day support",
        ],
        gain:
          "Wired into your existing tools. Your teams don't switch environments, they save time.",
        whyItMatters:
          // Le français dit « Un premier impact mesurable sous 30 jours : le
          // moment où le projet commence à se payer. » — sans garantie. La
          // version anglaise ajoutait « that's our written guarantee » :
          // septième garantie inventée par ce jeu de masters, et la seule qui
          // était déjà EN LIGNE. Les garanties ont été retirées du site.
          "A first measurable impact within 30 days: the moment the project starts paying for itself.",
        next: "Your teams take over",
      },
      {
        number: "05",
        phase: "AI Champions",
        icon: "graduation",
        name: "Training",
        duration: "2h a week",
        involvement: "Active participation from your teams",
        deliverable: "Autonomous teams, AI Champions identified and trained",
        deliverableShort: "Playbooks + AI Champions",
        whatWeDo: [
          "Hands-on sessions on your real cases",
          "Training your AI Champions",
          "Handover of the playbooks",
          "Gradual move to autonomy",
        ],
        gain:
          "Autonomous teams, able to run and improve the systems without us.",
        whyItMatters:
          "A tool with no trained team dies in three months. Trained on their real cases, your teams ask for more.",
        next: "Continuous improvement",
      },
      {
        number: "06",
        phase: "AI Champions",
        icon: "trending",
        name: "Iteration",
        duration: "Every quarter",
        involvement: "Strategic review with leadership",
        deliverable: "Fresh audit and new prioritised use cases",
        deliverableShort: "Quarterly review + new cases",
        whatWeDo: [
          "Measuring the gains realised",
          "Spotting new opportunities",
          "Optimising the live systems",
          "Monitoring built into your processes",
        ],
        gain:
          "Every quarter, new high-ROI use cases identified and prioritised.",
        whyItMatters:
          "AI changes every quarter. Your systems improve instead of ageing, and the roadmap keeps refilling.",
        next: "The cycle restarts, one level up",
      },
    ],
    cta: { label: "Book a free diagnostic", href: "/en/contact" },
  },

  connections: {
    badge: "Connection",
    title: "We replace nothing. We plug in.",
    subtitle:
      "Your tools stay. Our systems connect to them, and the work flows.",
    // Noms d'outils et logos identiques au FR : ce sont des marques et des
    // chemins d'images, pas de la copie à traduire.
    groups: [
      {
        number: "01",
        title: "Your sales and your customers",
        detail: "Where your pipeline lives",
        tools: [
          { name: "Salesforce", logo: "/images/stack/salesforce-color.svg" },
          { name: "HubSpot", logo: "/images/stack/hubspot-color.svg" },
          { name: "Stripe", logo: "/images/stack/stripe-color.svg" },
          { name: "LinkedIn", logo: "/images/stack/linkedin-color.svg" },
          { name: "Zendesk", logo: "/images/stack/zendesk-color.svg" },
        ],
      },
      {
        number: "02",
        title: "Your operations and your knowledge",
        detail: "Where the work gets organised",
        tools: [
          { name: "Jira", logo: "/images/stack/jira-color.svg" },
          { name: "SAP / your ERP", logo: "/images/stack/sap-color.svg" },
          { name: "Notion", logo: "/images/stack/notion-color.svg" },
          { name: "Google Drive", logo: "/images/stack/googledrive-color.svg" },
          {
            name: "Google Sheets",
            logo: "/images/stack/googlesheets-color.svg",
          },
        ],
      },
      {
        number: "03",
        title: "Your communications",
        detail: "Where your teams talk",
        tools: [
          { name: "Slack", logo: "/images/stack/slack-color.svg" },
          { name: "Gmail", logo: "/images/stack/gmail-color.svg" },
          {
            name: "Microsoft Teams",
            logo: "/images/stack/microsoftteams-color.svg",
          },
          { name: "WhatsApp", logo: "/images/stack/whatsapp-color.svg" },
        ],
      },
    ],
  },

  compliance: {
    badge: "Trust and compliance",
    title: "Your data. Your rules.",
    subtitle:
      "A real AI department handles compliance too. GDPR, the EU AI Act, an internal charter: we build them into every deployment, not after the fact.",
    pillars: [
      {
        icon: "shield",
        title: "GDPR and data protection",
        detail:
          "Legal basis, data minimisation and notice to individuals, for every deployment, alongside your DPO.",
      },
      {
        icon: "scale",
        title: "EU AI Act, anticipated",
        detail:
          "We map and classify your AI systems during the audit, with transparency built into the agents we ship by default.",
      },
      {
        icon: "file",
        title: "A tailored AI charter",
        detail:
          "Permitted uses, data that must never enter a prompt, human sign-off: the charter regulators recommend, built with you from the audit onwards.",
      },
      {
        icon: "book",
        title: "Register and training",
        detail:
          "Our training meets the AI-literacy requirement of Article 4, with a documented register of systems and training.",
      },
    ],
    // Jumeau EN de /gouvernance-ia, déjà publié.
    cta: { label: "Our approach to AI governance", href: "/en/security" },
  },

  results: {
    badge: "Measurable impact",
    // Compteurs alignés sur le FR EN LIGNE : 10 000 professionnels formés.
    // Le master dit « 2,500+ » — périmé, voir l'en-tête du fichier.
    counters: [
      { target: 200, suffix: "+", label: "AI systems deployed" },
      { target: 10000, suffix: "+", label: "Professionals trained" },
      { target: 7, suffix: "h/wk", label: "Recovered per employee" },
    ],
    benefits: [
      {
        title: "5 to 10 hours a week back per employee",
        description:
          "On the repetitive work: data entry, reporting, summaries, follow-ups. Hours that go back to what actually matters: client relationships and growth.",
      },
      {
        title: "ROI visible in month 1, not at year-end",
        description:
          "Every system deployed has a KPI attached. You measure the impact in real time. No buzzwords, no vague promises. Numbers.",
      },
      {
        title: "Teams that build skills every week",
        description:
          "Two hours of hands-on training a week, on your real use cases. Our programs (AI Essentials, Vibe Coding, AI for Sales, Copilot) build your AI Champions: the people who carry it forward.",
      },
      {
        title: "An edge measured in accumulated data",
        description:
          "Your systems improve with use. Competitors still \"thinking about it\" will start from zero in six months. You'll have six months of data.",
      },
    ],
  },

  booking: {
    badge: "Book your diagnostic",
    title: "30 minutes. A working session, not a demo.",
    subtitle:
      "We map your workflows live and you leave with your first 3 AI quick wins, whether you work with us or not.",
    benefits: [
      "Express map of your AI opportunities",
      "3 quick wins ranked by ROI",
      "A first actionable roadmap",
    ],
    host: {
      name: "Othmane Halim",
      role: "CEO, AI Makers",
      photo: "/images/photo-othmane-halim.jpeg",
      responseTime: "Usually replies within 1h",
    },
    emailFallback: {
      prefix: "Not in the mood for a call?",
      email: "othmane@aimakers.fr",
      emailHref:
        "https://mail.google.com/mail/?view=cm&fs=1&to=othmane@aimakers.fr",
    },
  },

  finalCta: {
    title: "30 minutes to pin down your first 3 AI quick wins",
    subtitle:
      "We map your workflows, find the high-ROI opportunities, and hand you a roadmap. Free, no strings, and useful even if you never work with us.",
    cta: { label: "Book my free diagnostic", href: "/en/contact" },
    urgency:
      "At most 3 new clients a month. Every client gets a dedicated AI engineer, onboarded two weeks before kick-off. Our capacity is physically limited, not artificially.",
  },

  // ATTENTION : la flotte du master est PÉRIMÉE. Il liste Copilot, Meta Ads et
  // les comptes rendus de réunion ; le FR en ligne a depuis remplacé ces trois
  // par la qualification de leads, la relance d'impayés et la réponse aux
  // appels d'offres. C'est la liste EN LIGNE qui est transcrite ici.
  fleet: {
    badge: "Our own kitchen",
    title: "An agent for every floor of your organisation",
    subtitle: "A look at what's already running, here and at our clients.",
    systems: [
      {
        name: "GEO audit and tracking",
        tag: "Marketing",
        detail:
          "Your visibility in AI answers tracked continuously: citations won, share of voice against competitors, SEO positions, prioritised actions",
        bricks: [
          "/images/stack/claude-color.svg",
          "/images/stack/profound-color.svg",
          "/images/stack/ahrefs-color.svg",
        ],
        internal: true,
      },
      {
        name: "Call intelligence",
        tag: "Sales",
        detail:
          "Every call analysed: objections, buying signals, next step pushed into the CRM",
        bricks: [
          "/images/stack/fireflies-color.png",
          "/images/stack/claude-color.svg",
          "/images/stack/salesforce-color.svg",
        ],
        internal: true,
      },
      {
        name: "Sales meeting preparation",
        tag: "Sales",
        detail:
          "The full brief ready before every meeting: context, recent news, history of exchanges and angles to play",
        bricks: [
          "/images/stack/claude-color.svg",
          "/images/stack/gmail-color.svg",
          "/images/stack/googlecalendar-color.svg",
        ],
        internal: true,
      },
      {
        name: "Supplier invoice processing",
        tag: "Finance",
        detail:
          "Every invoice read, matched and pre-booked, with only the exceptions coming to you",
        bricks: [
          "/images/stack/claude-color.svg",
          "/images/stack/sap-color.svg",
          "/images/stack/n8n-color.svg",
        ],
        internal: false,
      },
      {
        name: "Management dashboards",
        tag: "Leadership",
        detail:
          "Your KPIs current every morning, and your teams answer their own data questions",
        bricks: [
          "/images/stack/powerbi-color.svg",
          "/images/stack/powerautomate-color.svg",
          "/images/stack/microsoftteams-color.svg",
        ],
        internal: false,
      },
      {
        name: "Lead qualification and callback in 5 minutes",
        tag: "Sales",
        detail:
          "Every inbound lead qualified, enriched and called back within 5 minutes, day and night: a lead contacted in 5 minutes qualifies 21 times better than one contacted at 30",
        bricks: [
          "/images/stack/claude-color.svg",
          "/images/stack/hubspot-color.svg",
          "/images/stack/gmail-color.svg",
        ],
        internal: false,
      },
      {
        name: "Daily decision cockpit",
        tag: "Leadership",
        detail:
          "The morning decision brief, generated before you reach the office",
        bricks: [
          "/images/stack/claude-color.svg",
          "/images/stack/notion-color.svg",
          "/images/stack/n8n-color.svg",
        ],
        internal: true,
      },
      {
        name: "Engagement health tracking",
        tag: "Leadership",
        detail:
          "Every client engagement scored weekly, with weak signals caught before satisfaction dips",
        bricks: [
          "/images/stack/claude-color.svg",
          "/images/stack/notion-color.svg",
          "/images/stack/slack-color.svg",
        ],
        internal: true,
      },
      {
        name: "Overdue invoice chasing and collection",
        tag: "Finance",
        detail:
          "Every late invoice chased at the right moment, in the right tone, with automatic escalation: DSO melts, cash flow breathes",
        bricks: [
          "/images/stack/claude-color.svg",
          "/images/stack/stripe-color.svg",
          "/images/stack/gmail-color.svg",
        ],
        internal: false,
      },
      {
        name: "Customer support agent",
        tag: "Operations",
        detail:
          "First-line support handled on WhatsApp and Telegram, day and night",
        bricks: [
          "/images/stack/whatsapp-color.svg",
          "/images/stack/telegram-color.svg",
          "/images/stack/openai-color.svg",
        ],
        internal: false,
      },
      {
        name: "Tender and RFP responses",
        tag: "Sales",
        detail:
          "The response pack assembled in hours instead of days: specification analysed, answers pulled from your library, formatting ready to review",
        bricks: [
          "/images/stack/claude-color.svg",
          "/images/stack/googledrive-color.svg",
          "/images/stack/notion-color.svg",
        ],
        internal: false,
      },
    ],
    buildYours: {
      title: "Build your own",
      subtitle: "Describe the process, we build the system.",
      href: "#reserver",
    },
  },

  /**
   * 13 témoignages (le master en annonce 14 : périmé). Noms, entreprises et
   * photos inchangés — ce sont des faits.
   *
   * Les intitulés sont traduits LITTÉRALEMENT, pas promus : « Président »
   * devient « President », jamais « CEO ». Requalifier la fonction d'une
   * personne réelle pour qu'elle sonne mieux en anglais est une invention.
   *
   * Hervé Landau, Jennifer Vigouroux et Lamia Ajana donnent ici EXACTEMENT la
   * même citation que dans `bookingProofEn` : l'anglais y est repris mot pour
   * mot, sinon la même personne dirait deux choses différentes selon l'endroit
   * de la page. Mickaël Mina et Mariem Lahlou ont deux variantes distinctes en
   * français ; elles sont traduites séparément.
   */
  testimonials: {
    badge: "Testimonials",
    title: "What our clients say",
    items: [
      {
        quote:
          "At last, AI guidance that demystifies the subject and gives you the real keys to bringing it in effectively. A capable team, good teachers, and good company. I'm going to start using it daily — this is probably my last post created without AI.",
        name: "Éric Solal",
        title: "President",
        company: "ESN Engit",
        photo: "/images/testimonials/eric-solal-engit.png",
      },
      {
        quote:
          "Working with AI Makers let us automate processes that used to take hours. The ROI was visible from the first month.",
        name: "Vanessa Braflan",
        title: "Director",
        company: "Empruntis Montgeron",
        photo: "/images/testimonials/vanessa-braflan-empruntis.png",
      },
      {
        quote:
          "AI Makers made GEO understandable and usable by our business teams. Their ability to grasp the business stakes quickly and turn technical subjects into actionable recommendations clearly made the difference. A serious partner, and a good teacher.",
        name: "Mickaël Mina",
        title: "AI Director",
        company: "Sage",
        photo: "/images/testimonials/mickael-mina-sage.png",
      },
      {
        quote:
          "The AI Makers team stood out for a human approach and genuine availability. Their ability to put ideas on the table helped us move our strategic thinking forward and build pragmatic tools aimed squarely at impact.",
        name: "Mariem Lahlou",
        title: "Managing Partner",
        company: "ThinkONE",
        photo: "/images/testimonials/mariem-lahlou-thinkone.jpeg",
      },
      {
        quote:
          "Before AI Makers, our challenge was using AI intelligently and securely, getting the most out of it while keeping our autonomy. The training made the difference: examples applied to our own environment, very concrete uses demonstrated, and a clear view of the many ways AI fits our work.",
        name: "Hicham Boustit",
        title: "Head of Management Control",
        company: "Délifrance",
        photo: "/images/testimonials/hicham-boustit-delifrance.jpg",
      },
      {
        quote:
          "Enthusiasm is guaranteed, and so are the gains in productivity and creativity — with a return on investment you can measure quickly. We'd do it again!",
        name: "Hervé Landau",
        title: "President",
        company: "SAS Family Holdings",
        photo: "/images/testimonials/herve-landau-sas-family-holdings.jpg",
      },
      {
        quote:
          "Seeing AI as a powerful tool, provided it is used properly. The training introduced me to different tools for different needs and taught me to frame my requests better. The trainer's approach for newcomers is remarkable.",
        name: "Jennifer Vigouroux",
        title: "Bioproduction Innovation Lead",
        company: "BioValley France",
        photo: "/images/testimonials/jennifer-vigouroux-biovalley.jpg",
      },
      {
        quote:
          "An expert team that knows how to guide and train. The teams who went through the training are autonomous today, and AI is a copilot in their day-to-day work.",
        name: "Lamia Ajana",
        title: "Managing Director",
        company: "Shem's Publicité",
        photo: "/images/testimonials/lamia-ajana-shems.jpg",
      },
      {
        quote:
          "AI Makers supports us well beyond training: an operating system to structure our business, custom AI agents for our go-to-market and our internal processes. Their strength: making AI applicable to our real business needs, with time saved, automations, and performance gains for the organisation.",
        name: "Nicole Neumann",
        title: "Head of Innovation",
        company: "Gepromed",
        photo: "/images/testimonials/nicole-neumann-gepromed.jpg",
      },
      {
        quote:
          "AI Makers built our AI Operating System: repetitive tasks automated, processes structured, and our teams performing better day to day. Not one more tool: a system that runs the business.",
        name: "Ziyad El Mouniri",
        title: "CEO & Founder",
        company: "Addictest",
        photo: "/images/testimonials/ziyad-el-mouniri-addictest.jpg",
      },
      {
        quote:
          "AI Makers works with us pragmatically, in a way suited to the demands of healthcare and research: concrete systems that save our teams time, and a real transfer of skills. A partner that gives our AI transformation its structure.",
        name: "Lilla Merabet",
        title: "Managing Director",
        company: "Fondation Force",
        photo: "/images/testimonials/lilla-merabet-fondation-force.jpg",
      },
      {
        quote:
          "The training completely changed the way we work. Our teams are autonomous on AI tools now and save considerable time day to day.",
        name: "Marie-Pierre Picon",
        title: "Scientific Affairs Associate",
        company: "Amgen",
        photo: "/images/testimonials/marie-pierre-picon-amgen.png",
      },
      {
        quote:
          "Adopting AI across our teams was a real success thanks to the AI Champions program. The methodology is well-honed and effective.",
        name: "Brigitte Meyer",
        title: "Scientific Affairs Associate",
        company: "Amgen",
        photo: "/images/testimonials/brigitte-meyer-amgen.png",
      },
    ],
  },

  /**
   * FAQ — transcrite du FR EN LIGNE, PAS du master.
   *
   * L'écart le plus grave de tout ce fichier est ici. La Q9 du master annonce
   * « four guarantees, written into the contract » : audit remboursé, extension
   * gratuite, 30 jours offerts, PI cédée. La page française n'en promet
   * AUCUNE. Publier cette réponse aurait inventé quatre engagements
   * CONTRACTUELS en anglais que l'entreprise ne prend pas en français.
   *
   * Deux autres corrections : le master situe le second bureau à Rabat (le FR
   * dit Casablanca partout depuis la correction du site) et convertit
   * « 500 €/jour » en « $500/day », ce qui change le prix cité.
   *
   * Cette FAQ alimente le JSON-LD FAQPage : une réponse fausse ici n'est pas
   * seulement affichée, elle est donnée à lire aux moteurs de réponse.
   */
  faq: {
    badge: "Frequently asked questions",
    title: "The questions we actually get on discovery calls",
    items: [
      {
        question: "What is AI Makers?",
        answer:
          "AI Makers is an AI transformation studio in France and Morocco, founded by Othmane Halim, with offices in Paris (60 rue François 1er, 75008) and Casablanca. We help SMEs, mid-market companies and large groups put AI into operation through the AI-First Method, a proprietary three-phase framework: Audit (AI Scan), Build (AI Engine), Scale (AI Champions). To date, AI Makers has supported more than 50 companies, deployed more than 200 AI systems (several systems per client) and trained more than 10,000 professionals across France, Morocco and the wider francophone market.",
      },
      {
        question: "What kinds of companies do you work with?",
        answer:
          "AI Makers works mainly with three profiles: SMEs and mid-market firms (50 to 500 employees) that want to structure their AI strategy without hiring for it, communication agencies looking to bring AI into their creative production, and startups and scale-ups automating their operations to grow without growing headcount. The common denominator: leadership that is convinced, and a budget allocated to AI transformation.",
      },
      {
        question:
          "What's the difference between AI Makers and an IT services firm or a freelance AI consultant?",
        answer:
          "An IT services firm sells person-days and technical deliverables. A freelancer sells one-off expertise on a tool or a scope. AI Makers sells a complete transformation: workflow audit, AI systems deployed, teams trained and made autonomous. We don't leave before your teams can run it themselves. That's the difference between buying code and buying an outcome.",
      },
      {
        question: "Why not a freelance AI consultant at €500 a day?",
        answer:
          "A freelancer sells you days. We sell an outcome. When the freelancer leaves, their knowledge leaves with them. When we leave, your AI Champions stay, the documentation stays, and all the code belongs to you.",
      },
      {
        question: "How is the engagement structured, and what ROI should we expect?",
        answer:
          "The engagement runs monthly, with an initial commitment of 3 or 6 months depending on scope, then continues month to month with 30 days' notice. On average, our clients see a gain of 7 hours a week per employee involved, measured system by system against a baseline KPI set before each deployment. The precise scoping (scope, team, investment) happens during the free 30-minute diagnostic.",
      },
      {
        question: "How does AI Makers training work?",
        answer:
          "Hands-on, on your real use cases, never on generic slides. The formats: dedicated sessions (AI Essentials, Vibe Coding, GTM Sales AI, Microsoft Copilot) or 2 hours a week built into the engagement, on-site in Paris and Casablanca or remote. The goal is always the same: autonomous teams, not participants who have \"seen a demo\".",
      },
      {
        question: "How long does a typical engagement last?",
        answer:
          "The minimum commitment is 3 months. Weeks 1 and 2 go to the AI Scan audit and the costed roadmap. From the first month, the first systems go into production. The median length of a full engagement is 6 to 9 months to reach complete team autonomy.",
      },
      {
        question: "Where do you operate geographically?",
        answer:
          "AI Makers operates from two permanent offices: Paris (75008) and Casablanca, Morocco. We work on-site across mainland France and Morocco, and remotely across the francophone market (Belgium, Switzerland, Canada, North Africa). On-site audits can be run anywhere in France.",
      },
      {
        question: "What happens if the results aren't there?",
        answer:
          "Every system deployed is measured against a baseline KPI set before it goes into production: the impact is established with numbers in hand, not on an impression. And full intellectual property belongs to you: the day we leave, the systems, the playbooks and the documentation stay with you.",
      },
    ],
  },

  /**
   * Mini études de cas sous les compteurs. Chiffres CLIENTS : repris tels quels
   * du FR en ligne, jamais recalculés ni réinterprétés.
   *
   * À noter : le master (et docs/EN-LAUNCH.md) présentent Sage avec « +70% de
   * visibilité », un chiffre non validé par le client. Le FR EN LIGNE ne le dit
   * plus : il parle de 447 prompts suivis, ce qui est une mesure d'activité et
   * non une performance attribuée au client. C'est la version en ligne qui est
   * transcrite — publier le +70% en anglais aurait ressorti une donnée client
   * que le site français a lui-même cessé d'afficher.
   */
  proof: {
    badge: "Proven results",
    title: "Concrete results, not promises",
    subtitle:
      "Case studies of successful AI transformations, with verifiable metrics.",
    cases: [
      {
        title: "Qatar Tourism",
        subtitle: "WhatsApp AI chatbot",
        cover: "/images/case-studies/qatar-tourism-chatbot.png",
        metric: "$18,000/yr",
        metricLabel: "saved",
        secondMetric: "-40%",
        secondMetricLabel: "support load",
        before:
          "A support team overwhelmed on WhatsApp. Average response time: 4h+.",
        after:
          "80% of requests handled autonomously by the AI agent. 24/7, multilingual.",
        how: "WhatsApp AI chatbot integrated with the existing CRM",
        tags: ["Chatbot", "WhatsApp", "Customer support"],
      },
      {
        title: "Sage",
        subtitle: "AI search visibility (GEO)",
        cover: "/images/case-studies/geo-dashboard.png",
        metric: "447",
        metricLabel: "AI prompts tracked to steer their visibility",
        before:
          "Smaller competitors cited in their place by ChatGPT, Gemini and Perplexity on their key queries.",
        after:
          "We map where and how their brand surfaces in the LLMs, analyse the competitors being cited, and structure the content so their flagship offer gets cited.",
        how: "AI visibility audit and competitive analysis across the LLMs",
        tags: ["GEO", "SEO", "AI visibility"],
      },
      {
        title: "Shem's Publicité",
        subtitle: "AI marketing production",
        cover: "/images/case-studies/shems-workflows-n8n.png",
        metric: "10x",
        metricLabel: "efficiency per creative team",
        before:
          "A team of three shipped in 5 days. Deadlines systematically missed.",
        after: "Same team, same volume, delivered in under 24h.",
        how: "Automated creative pipeline: brief, generation, validation",
        tags: ["Automation", "Marketing", "Content"],
      },
    ],
    cta: { label: "See all case studies", href: "/en/ai-case-studies" },
    ctaIntermediate: { label: "Get the same results", href: "/en/contact" },
  },
} as const;

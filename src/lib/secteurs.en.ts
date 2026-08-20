import type { Secteur } from "./secteurs";

/**
 * Contenu anglais des pages sectorielles, transcrit champ par champ depuis les
 * masters `[EN] website-content/secteurs--*`.
 *
 * Aucune reformulation libre : les masters sont déjà réconciliés (audit SEO +
 * audit « slop »), et leurs sections « Reconciliation applied » disent
 * explicitement ce qui doit être PROTÉGÉ. Réécrire ici reviendrait à défaire un
 * arbitrage déjà rendu.
 *
 * Deux écarts assumés par rapport aux masters, et leur raison :
 *
 * 1. `slug` porte le segment ANGLAIS (`ai-for-marketing-agencies`), pas le slug
 *    français. C'est lui qui construit l'URL `/en/industries/<slug>`, et il doit
 *    correspondre à ROUTE_MAP — sinon hreflang, bascule de langue et sitemap
 *    désignent une page qui n'existe pas.
 * 2. `formationsLiees` garde les slugs FRANÇAIS. C'est une clé de jointure vers
 *    `formations.ts`, pas une URL : le gabarit traduit le lien par locale. Les
 *    masters disent « acculturation-ia », renommée depuis en
 *    `formation-ai-champions` — on utilise le slug VIVANT, comme i18n.ts.
 *
 * Les mentions `[to validate]` des masters sont conservées telles quelles : ce
 * sont des chiffres publiés côté FR mais absents de `llms.txt`, donc non
 * canoniques. Les retirer silencieusement ferait passer un chiffre non validé
 * pour un chiffre validé.
 */
export const secteursEn: readonly Secteur[] = [
  {
    slug: "ai-for-marketing-agencies",
    teaser:
      "Ship more creative work and more tender responses, without hiring.",
    nom: "Communication agencies",
    badge: "Agencies & creative",
    titre: "AI for communication agencies: more output, same creative standard",
    metaTitle: "AI for Marketing Agencies",
    metaDescription:
      "AI for communication and creative agencies: ship production faster, protect your margins, and train your teams without diluting the craft. Real agency case work.",
    intro:
      "Agencies are caught between two pressures: clients who want it faster and cheaper, and AI that already produces part of the work they bill for. The agencies pulling ahead build AI into production before their competitors — and before their own clients do it in-house. We help them keep the art direction human while the grunt work moves to automatic.",
    illustration: {
      src: "/images/3d/etoiles-ia.png",
      alt: "AI for communication and creative agencies",
    },
    douleurs: [
      "Clients are starting to do in-house with ChatGPT what they paid you for last year.",
      "Production deadlines eat your margin, brief after brief.",
      "Your creatives fear AI instead of using it as leverage.",
      "Pitches now expect an AI angle you're improvising on the spot.",
    ],
    casUsage: [
      {
        titre: "Faster creative production",
        description:
          "Generate, adapt and version campaign visuals per channel while your creatives keep the art direction. Production cycles cut, volume up, without a new hire.",
      },
      {
        titre: "Pitch and RFP response",
        description:
          "Build recommendations, moodboards and territories in days rather than weeks, with teams that drive the AI instead of being caught out by it.",
      },
      {
        titre: "Social and multi-format versioning",
        description:
          "Industrialise the multi-format, multi-platform declensions of one campaign, instead of rebuilding every asset by hand.",
      },
      {
        titre: "Consumer insight and watch",
        description:
          "Track trends, conversations and competitor campaigns continuously to feed strategy and planning.",
      },
    ],
    temoinClients: ["Shem's Publicité", "ThinkONE"],
    formationsLiees: [
      "creation-publicite-ia",
      "formation-ai-champions",
      "vibe-coding",
    ],
    ctaTitle: "Where do the non-billable hours go in your production?",
    ctaSubtitle:
      "30 minutes on your production chain — where the non-billable hours go, and the first workflows to automate. You leave with a plan whether you work with us or not.",
    faq: [
      {
        question: "Will AI replace our creatives?",
        answer:
          "No, but it changes their job. Art direction, the idea and the client relationship stay human. What changes is the time spent producing, versioning and adapting. Our training starts from your real campaigns so your creatives lead the AI, not the other way round.",
      },
      {
        question: "Where does an agency start?",
        answer:
          "With an audit of your production chain: where the non-billable hours go, which steps AI can speed up without touching quality. Then we train the teams on your own briefs and ship the first workflows into production.",
      },
      {
        question: "Have you worked with agencies before?",
        answer:
          "Yes — communication and advertising agencies in France and Morocco, on creative production, automation workflows and training creative teams. Their testimonials are on this page.",
      },
    ],
  },
  {
    slug: "ai-for-small-business",
    teaser:
      "The repetitive back-office, sales and reporting work moves to automatic.",
    nom: "Small & mid-sized businesses",
    badge: "SMEs in France",
    titre:
      "AI for small business: concrete gains, no IT team or enterprise budget",
    metaTitle: "AI for Small Business & SMEs",
    metaDescription:
      "AI for small and mid-sized businesses: automate the repetitive work, win hours back every week, and train your team — no IT department, no big-company budget.",
    intro:
      "A small or mid-sized business doesn't need a three-year AI plan — it needs visible gains this quarter. Writing, quotes, follow-ups, reporting, customer service: AI takes the repetitive load while your people keep the trade. No IT department, no new hire, no jargon. Across our clients the measured average is 7 hours a week won back per trained employee.",
    illustration: {
      src: "/images/3d/jauge-performance.png",
      alt: "AI for small and mid-sized businesses",
    },
    douleurs: [
      "You know AI could save you time, but you don't know where to start.",
      "Competitors already talk about AI and you feel the gap opening.",
      "No IT department, no tech team — every new tool turns into a project.",
      "Your people spend their days on work a machine would do better.",
    ],
    casUsage: [
      {
        titre: "Admin and back office",
        description:
          "Quotes, invoices, follow-ups, data entry: the repetitive tasks run automatically, with a human check where it counts.",
      },
      {
        titre: "Sales and customer relations",
        description:
          "Meeting prep, call notes, personalised follow-ups and pipeline tracking: your reps sell instead of typing.",
      },
      {
        titre: "Writing and communication",
        description:
          "Emails, proposals, web content and social posts produced faster, in your company's voice.",
      },
      {
        titre: "Reporting and steering",
        description:
          "Your numbers consolidated and readable every week, without losing your Sundays to it.",
      },
    ],
    temoinClients: ["Empruntis", "ESN Engit"],
    formationsLiees: [
      "formation-ai-champions",
      "microsoft-copilot",
      "go-to-market-sales",
    ],
    ctaTitle: "What would AI change in your business?",
    ctaSubtitle:
      "30 minutes to spot the tasks costing you the most hours, and the two or three quick wins to start with. You leave with a plan whether you work with us or not.",
    faq: [
      {
        question: "We're a team of 30 — is this for us?",
        answer:
          "Yes. Our SME clients run from 20 to 500 people. AI needs neither an IT department nor an enterprise budget: we start with the tasks costing the most hours, measure, then expand. The measured average is 7 hours a week per trained employee.",
      },
      {
        question: "How long before we see results?",
        answer:
          "First gains land in the first weeks — one training session is enough for teams to apply AI to daily tasks. For automations running in production, count on the first month.",
      },
      {
        question: "Is our data safe?",
        answer:
          "It's framed from the start: tool choice, privacy settings, written usage rules for your teams. We set up environments where your data is never used to train the models.",
      },
    ],
  },
  {
    slug: "ai-for-life-sciences",
    teaser:
      "Scientific watch, regulatory documents and first-line support, held to the sector's rigour.",
    nom: "Healthcare & life sciences",
    badge: "Healthcare & life sciences",
    titre: "AI for biotech and life sciences: scientific rigour, time given back",
    metaTitle: "AI for Biotech & Life Sciences",
    metaDescription:
      "AI for labs, biotechs and medtechs: scientific watch, regulatory documentation and team training, in a strict data-protection frame. Real references.",
    intro:
      "In life sciences, AI gives scientists and clinicians time back on the documentation work that eats the day. Literature watch, regulatory documentation, study synthesis, dossier preparation: the load compresses, and the rigour stays. We use it strictly as an assistant on administrative, documentation and reporting work — never for diagnosis or treatment decisions — inside a data-protection frame set before anything ships.",
    illustration: {
      src: "/images/3d/dossier-securite.png",
      alt: "AI for healthcare, biotech and medtech",
    },
    douleurs: [
      "Your scientists spend more time documenting than researching.",
      "Literature and competitive watch overflows — impossible to read it all.",
      "Regulatory dossiers tie up expert teams for weeks.",
      "Your teams want to use AI, but compliance stalls every attempt.",
    ],
    casUsage: [
      {
        titre: "Scientific and literature watch",
        description:
          "Study synthesis, publication tracking and clinical-trial monitoring in your field: a thorough watch that took days, delivered continuously. Sources kept traceable for expert review.",
      },
      {
        titre: "Regulatory documentation",
        description:
          "Preparing and aligning dossiers — submissions, reports, quality procedures — with systematic expert review before anything is used. Assistive drafting only; the sign-off stays human.",
      },
      {
        titre: "Medical and scientific communication",
        description:
          "Congress materials, internal publications and lay-summary content produced faster, validated by your experts.",
      },
      {
        titre: "Support-team efficiency",
        description:
          "Administrative, quality and medical-affairs functions equipped on daily tasks, under a strict confidentiality frame.",
      },
    ],
    temoinClients: ["Amgen", "Gepromed"],
    formationsLiees: [
      "formation-ai-champions",
      "maitriser-claude",
      "microsoft-copilot",
    ],
    ctaTitle: "Where would AI give your teams time back?",
    ctaSubtitle:
      "30 minutes on your documentation and watch workload — the highest-leverage, lowest-risk use cases first, inside your compliance frame. You leave with a plan whether you work with us or not.",
    faq: [
      {
        question: "Is AI compatible with our compliance requirements?",
        answer:
          "Yes, if it's framed: fit-for-purpose tools, health and personal data handled under GDPR, and certified health-data hosting (e.g. HDS) scoped case by case for the data that requires it [to validate]. Usage rules are written and validated by your quality/regulatory function before anything ships. This framing is the first step of every life-sciences engagement.",
      },
      {
        question: "Do you have references in life sciences?",
        answer:
          "Yes — pharmaceutical labs, biotechs, medtechs and practitioners in France and Morocco: training scientific teams, automated watch, documentation systems. The testimonials on this page come from that work (Amgen, Gepromed).",
      },
      {
        question: "Our teams aren't technical — is that a blocker?",
        answer:
          "No. Most of the life-sciences professionals we train aren't technical. Training starts from their real tasks: writing, synthesising, searching, documenting. No prerequisites.",
      },
    ],
  },
  {
    slug: "ai-for-it-services",
    teaser:
      "Produce more on delivery, and win differently on pre-sales.",
    nom: "IT services & software firms",
    badge: "IT services & software firms",
    titre: "AI for IT services firms: deliver more, staff smarter, sell differently",
    metaTitle: "AI for IT Services & Software Firms",
    metaDescription:
      "AI for IT services and software firms: faster pre-sales, tooled-up delivery, consultants trained on code assistants. Real references in the sector.",
    intro:
      "IT services firms live a paradox: they sell digital transformation and stay artisanal about their own process. Pre-sales, staffing, delivery notes, delivery itself — AI changes the economics of the day-rate model, and clients are starting to demand AI-augmented consultants. We install the internal systems and train your people, without pulling anyone off billable delivery.",
    illustration: {
      src: "/images/3d/chip-strategie.png",
      alt: "AI for IT services firms and software vendors",
    },
    douleurs: [
      "Your RFP responses tie up your best profiles for days, with no win guaranteed.",
      "Clients ask for AI-trained consultants and your bench can't keep up.",
      "The day-rate model is eroding: what you bill at 5 days, AI does in 1.",
      "Delivery notes, staffing, bench management — your internal functions run like it's 2015.",
    ],
    casUsage: [
      {
        titre: "Pre-sales and RFPs",
        description:
          "Technical proposals, structured responses and estimates prepared in hours rather than days, from your real references.",
      },
      {
        titre: "Augmented consultants",
        description:
          "Teams trained on code assistants (Claude Code, Cursor, Codex): a concrete commercial edge with clients who now require it.",
      },
      {
        titre: "Delivery and reporting",
        description:
          "Meeting notes, project documentation and client reporting drafted as you go — consultants correct a first draft instead of starting from a blank page after every meeting.",
      },
      {
        titre: "Staffing and bench",
        description:
          "Faster profile-to-mission matching, and bench time spent skilling up on AI rather than idle.",
      },
    ],
    temoinClients: ["ESN Engit", "Sage"],
    formationsLiees: [
      "vibe-coding",
      "formation-ai-champions",
      "go-to-market-sales",
    ],
    ctaTitle: "Where does the day-rate model leak in your firm?",
    ctaSubtitle:
      "30 minutes on pre-sales, delivery and staffing — where AI moves the day-rate maths, and which consultants to train first. You leave with a plan whether you work with us or not.",
    faq: [
      {
        question: "Why would an IT services firm hire an outside AI consultancy?",
        answer:
          "For the same reason your clients hire you: speed. Your people know how, but they're staffed at clients. We install the internal systems and train your consultants without pulling anyone off billable delivery.",
      },
      {
        question: "Do you train consultants on code assistants?",
        answer:
          "Yes — that's our Vibe Coding programme: Claude Code, Cursor and Codex applied to real projects. Consultants trained on AI sell better and deliver faster; the maths on a day rate is quick.",
      },
      {
        question: "Do you have references in IT services?",
        answer:
          "Yes, including the IT services firm Engit — its president's testimonial is on this page. We also work with software vendors such as Sage.",
      },
    ],
  },
  {
    slug: "ai-for-market-research",
    teaser:
      "Interviews, literature reviews and deliverables, analysed faster and in more depth.",
    nom: "Consulting & market research",
    badge: "Consulting & market research",
    titre: "AI for consulting and research: analyse faster, deliver deeper",
    metaTitle: "AI for Market Research & Consulting",
    metaDescription:
      "AI for consulting firms and research institutes: desk research, interview synthesis, faster deliverables. Real references in consulting and research.",
    intro:
      "Consulting and research turn information into a recommendation — exactly what generative AI accelerates best: desk research, interview synthesis, market reviews, deliverable production. The firms that tool up deliver deeper, faster, at the same margin. The consultant's judgement stays the value; AI clears the processing that gets in its way.",
    illustration: {
      src: "/images/3d/dossier-grille.png",
      alt: "AI for consulting and market research",
    },
    douleurs: [
      "Your consultants spend more time formatting than thinking.",
      "Transcription and interview synthesis eat your study budgets.",
      "Clients expect insight faster, at the same budget.",
      "Every deliverable starts from a blank page instead of building on the last.",
    ],
    casUsage: [
      {
        titre: "Interview synthesis and verbatims",
        description:
          "Qualitative interviews transcribed, coded and synthesised in hours: your researchers move from processing to analysis.",
      },
      {
        titre: "Desk research and watch",
        description:
          "Corpus analysis, competitive benchmarks and literature reviews sped up, with sources kept traceable.",
      },
      {
        titre: "Deliverable production",
        description:
          "Reports, decks and briefing notes structured in your formats, reviewed by consultants instead of written from scratch.",
      },
      {
        titre: "Knowledge capitalisation",
        description:
          "Your past studies become a searchable base: every new engagement starts with the firm's memory.",
      },
    ],
    temoinClients: ["ThinkONE"],
    formationsLiees: [
      "formation-ai-champions",
      "maitriser-claude",
      "microsoft-copilot",
    ],
    ctaTitle: "Where do your study hours actually go?",
    ctaSubtitle:
      "30 minutes on where the study hours go — transcription, desk research, deliverable build — and the first workflows to automate. You leave with a plan whether you work with us or not.",
    faq: [
      {
        question: "Can AI handle our confidential interviews?",
        answer:
          "Yes, with the right frame: interview transcripts and client deliverables kept in isolated environments, anonymisation where it's needed, and written usage rules that hold to your client NDAs. It's the first step of every engagement with a research firm.",
      },
      {
        question: "Is the analysis quality good enough?",
        answer:
          "AI doesn't replace the consultant's judgement — it removes the processing work that keeps them from analysing. Expert review stays systematic; it's what makes the deliverable worth its fee.",
      },
      {
        question: "Do you have references in consulting?",
        answer:
          "Yes, including ThinkONE, a research and consulting firm — its Managing Partner's testimonial is on this page.",
      },
    ],
  },
  {
    slug: "ai-for-medical-practices",
    teaser:
      "Notes, referral letters and case summaries handled, so clinicians get time back.",
    nom: "Doctors & medical practices",
    badge: "Doctors & practitioners",
    titre: "AI for doctors: less admin, more clinical time",
    metaTitle: "AI for Doctors & Medical Practices",
    metaDescription:
      "AI for doctors and medical practices: dictated notes, faster letters, smoother practice admin — assistive only, medical confidentiality protected.",
    intro:
      "Physicians spend a large share of the day on notes, letters and admin — up to two hours by common estimates [to validate]. AI gives that time back to care: assisted dictation, personalised template letters, record summaries. It works as an admin and documentation aid only; it never makes diagnostic or treatment decisions, and nothing ships without a medical-confidentiality frame in place first.",
    illustration: {
      src: "/images/3d/cible-audit-chips.png",
      alt: "AI for doctors and medical practices",
    },
    douleurs: [
      "Notes and letters piling up after every clinic — often a couple of hours a day [to validate].",
      "A growing patient list and shrinking clinical time.",
      "Closed practice tools that don't talk to each other.",
      "You want to use AI, but you're rightly wary about medical confidentiality.",
    ],
    casUsage: [
      {
        titre: "Notes and letters",
        description:
          "Dictation or brief notes turned into structured reports and referral letters in your style, reviewed before they go out.",
      },
      {
        titre: "Record summaries",
        description:
          "History, tests and prior letters summarised before the consultation, so you arrive prepared. A prompt for you, not a clinical decision.",
      },
      {
        titre: "Practice organisation",
        description:
          "Reminders, queues, answers to recurring requests: the front desk augmented, not replaced.",
      },
      {
        titre: "Watch and continuing education",
        description:
          "Summaries of the publications in your specialty, prepared on the schedule that suits you — as reading input, reviewed by you.",
      },
    ],
    temoinClients: ["Addictest"],
    formationsLiees: ["formation-ai-champions", "maitriser-claude"],
    ctaTitle: "Where would AI give you clinical time back?",
    ctaSubtitle:
      "30 minutes on your admin load — notes, letters, record prep — and how to set it up with medical confidentiality protected. You leave with a plan whether you work with us or not.",
    faq: [
      {
        question: "What about medical confidentiality?",
        answer:
          "It's the starting point of every healthcare engagement: patient records handled under GDPR, appropriate hosting, and certified health-data hosting (e.g. HDS) scoped case by case where it applies [to validate]. Usage rules are written before anything ships. Nothing ships without that frame.",
      },
      {
        question: "Do you work with practitioners?",
        answer:
          "Yes — private practitioners and healthcare organisations, in France and Morocco, from individual training to full system setup. Healthcare is one of our reference sectors (Amgen, Gepromed, e-health actors such as Addictest).",
      },
      {
        question: "Do I need to be comfortable with technology?",
        answer:
          "No. Training starts from your real tasks: dictating, writing, summarising. Most of the healthcare professionals we train had never used AI before the first session.",
      },
    ],
  },
  {
    slug: "ai-for-hospitality",
    teaser:
      "24/7 multilingual guest relations, at scale.",
    nom: "Hospitality, tourism & leisure",
    badge: "Hospitality / Tourism / Leisure",
    titre: "AI for hospitality and tourism: guest relations at scale",
    metaTitle: "AI for Hospitality & Tourism",
    metaDescription:
      "AI for hospitality, tourism and leisure: multilingual 24/7 guest relations, content and operations at scale. Real references in casinos and tourism.",
    intro:
      "In hospitality, tourism and leisure, every interaction counts and seasonality is unforgiving. AI takes the peak-season overflow: guest requests in every language 24/7, multilingual content, operations steered from a single view. We've deployed it from casinos to institutional tourism — including a WhatsApp chatbot reported to save around $18,000 a year [to validate].",
    illustration: {
      src: "/images/3d/roadmap-roi.png",
      alt: "AI for hospitality, tourism and leisure",
    },
    douleurs: [
      "Guest requests in ten languages, at all hours, that your teams struggle to absorb in peak season.",
      "Online reviews piling up without a personalised reply.",
      "Content — offers, listings, social — to version endlessly.",
      "Seasonal teams to train fast, who then leave with the know-how.",
    ],
    casUsage: [
      {
        titre: "24/7 multilingual guest relations",
        description:
          "WhatsApp and web chatbots that reply in the guest's language, wired into your booking systems. Our reference deployment reportedly handles 80% of requests autonomously and saves ~$18,000 a year [to validate].",
      },
      {
        titre: "Reviews and e-reputation",
        description:
          "Personalised replies to reviews in your house's tone, platform monitoring, and summaries for management.",
      },
      {
        titre: "Multilingual content and offers",
        description:
          "Listings, newsletters, social and seasonal offers versioned across languages, without an agency at every iteration.",
      },
      {
        titre: "Operations and reporting",
        description:
          "Activity forecasts, daily summaries and per-site steering: management sees everything, every morning.",
      },
    ],
    // Groupe Partouche est une entrée LOGO SEULE dans site-config (pas d'objet
    // `testimonial`) : le gabarit ne rend donc aucun témoignage ici. C'est
    // voulu — un verbatim Partouche a été FABRIQUÉ dans un brouillon puis
    // supprimé (cf. docs/EN-LAUNCH.md §4). Ne pas en réintroduire.
    temoinClients: ["Groupe Partouche"],
    formationsLiees: [
      "formation-ai-champions",
      "creation-publicite-ia",
      "microsoft-copilot",
    ],
    ctaTitle: "What's the first thing to automate before peak season?",
    ctaSubtitle:
      "30 minutes on your guest-request volume, reviews and multilingual content — and the first thing to automate before peak season. You leave with a plan whether you work with us or not.",
    faq: [
      {
        question: "Can an AI chatbot really handle our guests?",
        answer:
          "Yes, on the repetitive volume — hours, bookings, standard requests — with a handover to a human as soon as it's needed. Our reference tourism deployment reportedly handles around 80% of requests autonomously, 24/7 and in several languages [to validate].",
      },
      {
        question: "Do you have references in the sector?",
        answer:
          "Yes: Groupe Partouche in leisure and an international tourist office for which we deployed a multilingual WhatsApp chatbot.",
      },
      {
        question: "How do you handle seasonal staff turnover?",
        answer:
          "By documenting everything in systems that stay: the playbooks and agents don't leave at the end of the season. New teams are operational in days, not weeks.",
      },
    ],
  },
  {
    slug: "ai-for-financial-services",
    teaser:
      "Case files and follow-ups handled, with document compliance built in.",
    nom: "Banking, insurance & brokerage",
    badge: "Banking / Insurance / Brokerage",
    titre: "AI for banking, insurance and brokerage: compliance included",
    metaTitle: "AI for Banking, Insurance & Brokers",
    metaDescription:
      "AI for banking, insurance and brokerage: faster case files, augmented client relations, compliance built in from the start. Real references in the sector.",
    intro:
      "In banking, insurance and brokerage, time is lost in the case file: documents to collect, data to enter, follow-ups, compliance to record. AI absorbs that file work to give time back to advice, with compliance designed into every system from the first workflow. Human validation stays on every decision, and every system is documented for your compliance team.",
    illustration: {
      src: "/images/3d/jauge-numero1.png",
      alt: "AI for banking, insurance and brokerage",
    },
    douleurs: [
      "Your advisers spend more time on case files than in front of clients.",
      "Follow-ups and missing documents drag out every signature.",
      "Compliance documentation ties up whole teams.",
      "Digital-first competitors process in hours what takes you days.",
    ],
    casUsage: [
      {
        titre: "Case-file assembly and completeness",
        description:
          "Documents checked, information extracted and files pre-filled automatically: your teams review the file instead of keying it in. One brokerage client reported ROI within the first month [to validate].",
      },
      {
        titre: "Client relations and follow-ups",
        description:
          "Personalised follow-ups, answers to recurring requests and meeting prep: the adviser arrives informed, the client feels looked after.",
      },
      {
        titre: "Compliance documentation",
        description:
          "Consistency checks, audit trails and documentation generated as you go, validated by your compliance team.",
      },
      {
        titre: "Summaries and steering",
        description:
          "Production, portfolios and alerts summarised weekly for management, without manual exports.",
      },
    ],
    temoinClients: ["Empruntis"],
    formationsLiees: [
      "formation-ai-champions",
      "microsoft-copilot",
      "go-to-market-sales",
    ],
    ctaTitle: "Where does AI clear your compliance first?",
    ctaSubtitle:
      "30 minutes to map the high-gain, low-regulatory-risk use cases first — case-file assembly and internal summaries before client-facing work. Every step goes through your compliance. You leave with a plan whether you work with us or not.",
    faq: [
      {
        question: "Is AI compatible with our regulatory obligations?",
        answer:
          "Yes, if it's built in from the design stage: traceability of processing, human validation on decisions, siloed data. We document every system for your compliance team and DPO. Sector-specific rules (e.g. under GDPR and the EU AI Act) are scoped case by case [to validate].",
      },
      {
        question: "Do you have references in financial services?",
        answer:
          "Yes: Empruntis in credit brokerage (its director's testimonial is on this page) and international banking players such as Emirates NBD.",
      },
      {
        question: "Where do you start in a regulated business?",
        answer:
          "With an audit that maps the high-gain, low-regulatory-risk use cases: case-file assembly and internal summaries first, client-facing work next. Every step goes through your compliance.",
      },
    ],
  },
];

export function getSecteurEn(slug: string): Secteur | undefined {
  return secteursEn.find((s) => s.slug === slug);
}

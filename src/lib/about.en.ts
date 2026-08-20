/**
 * Contenu anglais de /en/about.
 *
 * ⚠️ LE MASTER DE CETTE PAGE EST LE PLUS FAUX DE LA SÉRIE. Cinq catégories
 * d'erreur, toutes corrigées ici contre la page française en ligne :
 *
 * 1. **« A six-person team » / « 6 people between Paris and Rabat »** — la page
 *    française dit **10 personnes**, partout : méta, section équipe, bande de
 *    preuve, et la page /fondateur. Le « six » du master correspond en fait à
 *    l'ancienne valeur restée dans le JSON-LD (`numberOfEmployees: 6`), que ce
 *    changement corrige aussi côté français : l'équipe est passée de 6 à 10 et
 *    la donnée structurée n'avait pas suivi.
 * 2. **« Rabat »** — le second bureau est **Casablanca**. Quatrième page où ce
 *    jeu de masters déplace le bureau.
 * 3. **« +2,500 trained »** — le chiffre canonique est **+10 000** (llms.txt).
 *    Quatrième occurrence.
 * 4. **Lien « our guarantees » → /garanties** — cette route n'existe pas, et
 *    les garanties ont été retirées du site. Non repris.
 * 5. **« The Founder and the COO steer the firm's strategy »** — la page
 *    française nomme TROIS fonctions de direction : le CEO, le COO et le Chief
 *    of Staff. Le master en supprime une.
 *
 * En revanche « C'est écrit dans le contrat », dans le principe Transmission,
 * est CONSERVÉ : celui-là est bien dans la page française en ligne. On traduit
 * ce qui est publié, on n'ajoute pas ce qui ne l'est pas.
 */

export const aboutMetaEn = {
  // Le gabarit du layout ajoute « | AI Makers » : ne pas le réécrire ici.
  title: "About: the firm that runs on what it sells",
  description:
    "AI Makers is an AI transformation firm in France and Morocco, founded by Othmane Halim. 10 people between Paris and Casablanca, +50 companies, +200 AI systems.",
} as const;

export const aboutSchemaTextEn = {
  breadcrumbHome: "Home",
  breadcrumbCurrent: "About",
  orgDescription:
    "AI transformation firm in France and Morocco, with offices in Paris and Casablanca. Audit, AI systems shipped to production, and team training.",
  founderJobTitle: "CEO",
  numberOfEmployees: 10,
} as const;

export const aboutHeroEn = {
  badge: "About",
  title: "The firm that runs on what it sells.",
  intro:
    "AI Makers is an AI transformation firm based in Paris and Casablanca. Our own processes run on the systems we deploy for our clients: that’s our best proof.",
} as const;

export const aboutFounderEn = {
  badge: "The founder",
  name: "Othmane Halim",
  photoAlt: "Othmane Halim, founder and CEO of AI Makers",
  paragraphs: [
    "Before AI Makers, Othmane went through the startup world and then the large corporation. Two opposite environments, one same observation: between what is said about AI and what actually runs inside companies, the gap is enormous.",
    "The turning point came at a conference on artificial intelligence. His stand was swamped with executives all asking the same question: “Concretely, how do we do this?” Strategic talk was not in short supply. Operational answers were.",
    "AI Makers was born to close that gap: a firm that doesn’t stop at the roadmap. It ships the systems to production, trains the teams and measures the results, until the client is autonomous.",
    "The firm itself runs AI-native: every internal process that can be systematised, is. What we sell, we live first.",
  ],
  storyLink: { label: "Read the full story →", href: "/en/founder" },
  linkedinLabel: "Follow Othmane on LinkedIn",
} as const;

export const aboutPrinciplesEn = {
  badge: "How we work",
  title: "Three principles, applied to ourselves first",
  items: [
    {
      title: "AI-native",
      description:
        "Our own processes run on our systems. Prospecting, delivery, reporting, training: everything we recommend to our clients, we use internally first. If a system doesn’t hold up here, it doesn’t leave here.",
    },
    {
      title: "Anti-hype",
      description:
        "KPIs, not slides. Every system we deploy has a baseline indicator measured before and after. We don’t talk about revolution, we talk about hours recovered, delays cut, and processes that run.",
    },
    {
      title: "Handover",
      description:
        "The goal is your autonomy. Full documentation, weekly training, AI Champions trained in-house: by the end of the engagement, the systems run without us. It’s written into the contract.",
    },
  ],
} as const;

export const aboutTeamEn = {
  badge: "The team",
  // 10, pas 6 — et Casablanca, pas Rabat.
  title: "10 people between Paris and Casablanca",
  intro:
    "A deliberately compact team, structured around three functions. Every client works directly with the people building their systems.",
  roles: [
    {
      title: "Leadership",
      // Trois fonctions, comme le français : le master en supprime une.
      description:
        "The CEO, the COO and the Chief of Staff steer the firm’s strategy, its engagements and its operations between Paris and Casablanca.",
    },
    {
      title: "Delivery",
      description:
        "Every client engagement is carried by a dedicated engineer, with weekly progress tracking and deliverables measured in production.",
    },
    {
      title: "Engineering",
      description:
        "The CTO and the AI engineers design and deploy the systems: agents, workflow automations and business tools, built on Claude, n8n and Notion.",
    },
  ],
} as const;

export const aboutProofEn = {
  badge: "Living proof",
  title: "This firm runs on its own systems.",
  intro:
    "The best demonstration of our method is the way we operate ourselves. Four concrete examples.",
  items: [
    {
      system: "Daily steering cockpit",
      fact: "The CEO’s decision brief is generated every morning by our agents, before anyone reaches the office.",
    },
    {
      system: "Call intelligence",
      fact: "Every sales call is analysed automatically: objections, signals, next step in the CRM.",
    },
    {
      system: "Engagement health tracking",
      fact: "Every client engagement is scored each week by our health-tracking system.",
    },
    {
      system: "This site",
      fact: "This site itself is produced with our AI tools: content, code and visuals go through our agents before publication.",
    },
  ],
  closing:
    "We don’t show you tidied-up screenshots. Book a diagnostic: we show you our systems live, running.",
  ctaLabel: "See the systems live",
  headline: "10 people. The output of a team of 60.",
  headlineTail: "That is the mechanism we install at your company.",
} as const;

export const aboutStatsEn = [
  { value: "+200", label: "AI systems deployed across +50 companies" },
  // +10 000, pas +2 500.
  { value: "10,000+", label: "Professionals trained" },
  { value: "7h/wk", label: "Recovered on average per employee" },
] as const;

export const aboutCtaEn = {
  title: "Let’s talk about your processes.",
  subtitle:
    "30 minutes to review your workflows and leave with your first 3 AI quick wins, whether you work with us or not.",
  label: "Book a free diagnostic",
} as const;

/**
 * Contenu anglais de /en/ai-playbook.
 *
 * ⚠️ PAGE GATÉE. Elle est construite mais NON INDEXÉE — voir `EN_GATED` dans
 * `i18n.ts`. Ses chiffres d'accroche (88%, 5%, 700 Mds $, 30%, 95%, 50/63%)
 * n'ont aucune source dans `playbook-config.ts`, et le master lui-même les
 * marque tous `[to validate]`. La décision du propriétaire est de livrer la
 * page hors sitemap et en `robots: index:false` en attendant la validation
 * (cf. `docs/EN-LAUNCH.md` §4). Les chiffres sont donc repris TELS QUELS du
 * français : ni corrigés, ni retirés, ni sourcés à la volée.
 *
 * QUATRE ÉCARTS DU MASTER, corrigés contre la page française en ligne — le
 * master décrit une édition antérieure du playbook :
 *
 * 1. **« 48 pages »** (trois fois) → le FR dit **54 pages**.
 * 2. **« 2,500+ professionals trained »** → **+10 000**. Sixième occurrence de
 *    ce chiffre périmé dans ce jeu de masters.
 * 3. **« 8 sectors covered »** → le FR dit **6 secteurs**.
 * 4. **« 10 questions, a score out of 20 »** pour le score de préparation → le
 *    FR dit **12 questions, score /24** (ce qui correspond au diagnostic réel).
 */

export const playbookContentEn = {
  hero: {
    badge: "> NEW: The AI-First Playbook 2026",
    title:
      "The guide 88% of executives wish they’d had before starting with AI.",
    subtitle:
      "54 pages. 8 hands-on exercises. 5 turnkey AI systems. The one guide that doesn’t sell you a dream — it hands you a plan.",
    ctaPrimary: {
      label: "Get the playbook (PDF)",
      href: "#recevoir-playbook",
    },
    ctaSecondary: {
      label: "Take my free AI diagnostic",
      href: "/en/ai-maturity-assessment",
    },
    socialProof: "Already used by 300+ executives",
  },

  stats: [
    {
      value: "88%",
      label: "of companies use AI",
      sublabel: "but only 5% get real value from it",
    },
    {
      value: "$700B",
      label: "invested in AI",
      sublabel: "impact on GDP: almost nil",
    },
    {
      value: "30%",
      label: "of AI projects abandoned",
      sublabel: "after the proof of concept",
    },
  ],

  problem: {
    badge: "The problem",
    title: "You’ve got ChatGPT. Now what?",
    points: [
      {
        title: "ChatGPT with no system = ghost AI",
        description:
          "Every employee tinkers in their own corner. Nothing compounds, nothing improves. It’s like handing everyone a phone without installing email.",
      },
      {
        title: "Automating a bad process = scaling mediocrity",
        description:
          "Bolting AI onto a workflow no one has rethought is paving dirt roads with asphalt. Leaders redesign first, automate second.",
      },
      {
        title: "Aiming at cost-cutting = 13 fewer points of success",
        description:
          "Companies that frame AI as cost savings succeed 50% of the time. Those aiming at growth: 63%. That gap turns slide decks into results.",
      },
    ],
  },

  preview: {
    badge: "What’s inside the Playbook",
    // 54, pas 48 : le master décrit une édition antérieure.
    title: "54 pages of substance, zero fluff.",
    items: [
      {
        number: "01",
        title: "The Wake-Up Call",
        description:
          "The numbers nobody shows you, and the 3 mistakes that sink 95% of AI projects.",
      },
      {
        number: "02",
        title: "The 9 Maturity Levels",
        description:
          "Where does your company stand? A pyramid to place yourself and see the path ahead.",
      },
      {
        number: "03",
        title: "The AI-Native Model",
        description:
          "What Y Combinator and the global leaders understood before everyone else.",
      },
      {
        number: "04",
        title: "The 5 AI Systems",
        description:
          "The 5 building blocks every competitive company needs, explained simply.",
      },
      {
        number: "05",
        title: "Privacy & Sovereignty",
        description:
          "AI Act, data, models: what your company needs to know and do.",
      },
      {
        number: "06",
        title: "Your Action Plan",
        description:
          "A readiness score out of 20, quick wins by department, a personalised 90-day roadmap.",
      },
    ],
  },

  exercises: {
    badge: "8 hands-on exercises included",
    title: "Not just a report: a working kit.",
    subtitle:
      "Each exercise is built to be done while you read. You finish with concrete actions, not theory.",
    items: [
      {
        name: "5-Min Express Audit",
        type: "Calculator",
        time: "5 min",
        description: "Work out what inaction is costing you per month",
      },
      {
        name: "AI Maturity Test",
        type: "Self-assessment",
        time: "2 min",
        description: "Place yourself on the 9-level pyramid",
      },
      {
        name: "Time/Value Matrix",
        type: "Exercise",
        time: "10 min",
        description: "Find your AI quick wins by sorting your tasks",
      },
      {
        name: "The Amodei Exercise",
        type: "Reflection",
        time: "5 min",
        description: "Break your role down into 5 AI components",
      },
      {
        name: "The 4 Tiers",
        type: "Framework",
        time: "Reading",
        description: "From ChatGPT to an integrated system, with a checklist",
      },
      {
        name: "Quick Wins by Department",
        type: "Actions",
        time: "Immediate",
        description: "One action you can do Monday, for each department",
      },
      {
        name: "Readiness Score",
        type: "Scoring",
        time: "2 min",
        // 12 questions et /24, comme le FR — le master dit 10 et /20.
        description: "12 questions, a score out of 24, a personalised diagnosis",
        featured: true,
      },
      {
        name: "The 30-60-90 Plan",
        type: "Roadmap",
        time: "Reading",
        description: "Your action plan for the next 90 days",
      },
    ],
  },

  socialProof: {
    title: "Built from 200+ field engagements.",
    stats: [
      { value: "+200", label: "AI engagements delivered" },
      // +10 000, pas 2 500.
      { value: "10,000+", label: "professionals trained" },
      // 6 secteurs, pas 8.
      { value: "6", label: "sectors covered" },
    ],
  },

  capture: {
    anchor: "recevoir-playbook",
    title: "Get the playbook by email",
    subtitle:
      "Enter your first name and work email. You’ll get the full playbook (54 pages) straight to your inbox.",
    ctaLabel: "Get the playbook",
    successTitle: "Done!",
    successMessage:
      "The playbook is on its way to your inbox. If it’s not there in a few minutes, check your spam folder.",
  },

  finalCta: {
    title: "The full plan is in the playbook.",
    subtitle:
      "54 pages to structure your AI transformation. And if you want to place your company, the diagnostic takes 2 minutes.",
    ctaPrimary: {
      label: "Get the playbook (PDF)",
      href: "#recevoir-playbook",
    },
    ctaSecondary: {
      label: "Take my free AI diagnostic",
      href: "/en/ai-maturity-assessment",
    },
    urgency: "March 2026 edition. Updated every quarter.",
  },
} as const;

export const playbookChromeEn = {
  metaTitle: "The AI-First Playbook — free 54-page guide",
  metaDescription:
    "54 pages, 8 hands-on exercises and 5 turnkey AI systems to structure your AI transformation. Free, no newsletter sign-up.",
  heroPills: "54 pages · 8 exercises · 5 systems",
  exerciseCta: "Do this exercise now",
} as const;

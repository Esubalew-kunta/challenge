// =============================================================================
// PLAYBOOK LANDING PAGE — Configuration du contenu
// =============================================================================

export const playbookContent = {
  hero: {
    badge: "> NOUVEAU : Le Playbook AI-First 2026",
    title:
      "Le guide que 88% des dirigeants auraient voulu avoir avant de commencer avec l'IA.",
    subtitle:
      "54 pages. 8 exercices pratiques. 5 systèmes IA clés en main. Le seul guide qui ne vous vend pas un rêve : il vous donne un plan.",
    ctaPrimary: {
      label: "Recevoir le playbook (PDF)",
      href: "#recevoir-playbook",
    },
    ctaSecondary: {
      label: "Faire mon diagnostic IA gratuit",
      href: "/diagnostic-ia",
    },
    socialProof: "Déjà utilisé par +300 dirigeants",
  },

  stats: [
    {
      value: "88%",
      label: "des entreprises utilisent l'IA",
      sublabel: "mais seulement 5% en tirent de la valeur",
    },
    {
      value: "$700 Mds",
      label: "investis en IA",
      sublabel: "impact PIB : presque zéro",
    },
    {
      value: "30%",
      label: "des projets IA abandonnés",
      sublabel: "après le proof of concept",
    },
  ],

  problem: {
    badge: "Le problème",
    title: "Vous avez ChatGPT. Et maintenant ?",
    points: [
      {
        title: "ChatGPT sans système = IA fantôme",
        description:
          "Chaque employé bidouille dans son coin. Rien ne se cumule, rien ne s'améliore. C'est comme donner un téléphone à chaque employé sans installer d'email.",
      },
      {
        title: "Automatiser un mauvais process = accélérer la médiocrité",
        description:
          "Ajouter l'IA à un workflow qui n'a pas été repensé, c'est paver des chemins de terre avec de l'asphalte. Les leaders redesignent d'abord, automatisent ensuite.",
      },
      {
        title: "Viser la réduction de coûts = 13 points de succès en moins",
        description:
          "Les entreprises qui cadrent l'IA en 'cost savings' réussissent 50% du temps. Celles qui visent la croissance : 63%. La différence transforme des PowerPoints en résultats.",
      },
    ],
  },

  preview: {
    badge: "Ce que contient le Playbook",
    title: "54 pages de concret, zéro bullshit.",
    items: [
      {
        number: "01",
        title: "Le Wake-Up Call",
        description:
          "Les chiffres que personne ne vous montre, et les 3 erreurs qui font échouer 95% des projets IA.",
      },
      {
        number: "02",
        title: "Les 9 Niveaux de Maturité",
        description:
          "Où en est votre entreprise ? Une pyramide pour vous situer et voir le chemin.",
      },
      {
        number: "03",
        title: "Le Modèle AI-Native",
        description:
          "Ce que Y Combinator et les leaders mondiaux ont compris avant tout le monde.",
      },
      {
        number: "04",
        title: "Les 5 Systèmes IA",
        description:
          "Les 5 briques que toute entreprise compétitive doit avoir, expliquées simplement.",
      },
      {
        number: "05",
        title: "Confidentialité & Souveraineté",
        description:
          "AI Act, données, modèles : ce que votre entreprise doit savoir et faire.",
      },
      {
        number: "06",
        title: "Votre Plan d'Action",
        description:
          "Score de préparation /20, quick wins par département, roadmap 90 jours personnalisée.",
      },
    ],
  },

  exercises: {
    badge: "8 exercices pratiques inclus",
    title: "Pas juste un rapport : un kit de travail.",
    subtitle:
      "Chaque exercice est conçu pour être fait pendant la lecture. Le lecteur repart avec des actions concrètes, pas des théories.",
    items: [
      {
        name: "Audit Express 5 min",
        type: "Calculateur",
        time: "5 min",
        description: "Calculez combien l'inaction vous coûte par mois",
      },
      {
        name: "Test de Maturité IA",
        type: "Auto-diagnostic",
        time: "2 min",
        description: "Positionnez-vous sur la pyramide des 9 niveaux",
      },
      {
        name: "Matrice Temps/Valeur",
        type: "Exercice",
        time: "10 min",
        description: "Identifiez vos quick wins IA en classant vos tâches",
      },
      {
        name: "Exercice Amodei",
        type: "Réflexion",
        time: "5 min",
        description: "Décomposez votre poste en 5 composantes IA",
      },
      {
        name: "Les 4 Paliers",
        type: "Framework",
        time: "Lecture",
        description: "De ChatGPT au système intégré, avec checklist",
      },
      {
        name: "Quick Wins par Département",
        type: "Actions",
        time: "Immédiat",
        description: "1 action faisable lundi pour chaque département",
      },
      {
        name: "Score de Préparation",
        type: "Scoring",
        time: "2 min",
        description: "12 questions, score /24, diagnostic personnalisé",
        featured: true,
      },
      {
        name: "Plan 30-60-90",
        type: "Roadmap",
        time: "Lecture",
        description: "Votre plan d'action pour les 90 prochains jours",
      },
    ],
  },

  socialProof: {
    title: "Construit à partir de +200 missions terrain.",
    stats: [
      { value: "+200", label: "missions IA réalisées" },
      { value: "+10 000", label: "professionnels formés" },
      { value: "6", label: "secteurs couverts" },
    ],
  },

  capture: {
    anchor: "recevoir-playbook",
    title: "Recevez le playbook par email",
    subtitle:
      "Indiquez votre prénom et votre email professionnel. Vous recevez le playbook complet (54 pages) directement dans votre boîte mail.",
    ctaLabel: "Recevoir le playbook",
    successTitle: "C'est noté !",
    successMessage:
      "Vous allez recevoir le playbook par email. Pensez à vérifier vos spams si vous ne voyez rien d'ici quelques minutes.",
  },

  finalCta: {
    title: "Le plan complet est dans le playbook.",
    subtitle:
      "54 pages pour structurer votre transformation IA. Et si vous voulez situer votre entreprise, le diagnostic prend 2 minutes.",
    ctaPrimary: {
      label: "Recevoir le playbook (PDF)",
      href: "#recevoir-playbook",
    },
    ctaSecondary: {
      label: "Faire mon diagnostic IA gratuit",
      href: "/diagnostic-ia",
    },
    urgency: "Édition mars 2026. Mise à jour chaque trimestre.",
  },
} as const;

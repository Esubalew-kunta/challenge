"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Props {
  level: string;
}

const plansByLevel: Record<string, { phase: string; items: string[] }[]> = {
  "pre-demarrage": [
    {
      phase: "Jours 1-30 : Comprendre",
      items: [
        "Faire l'exercice Amodei avec votre COMEX (d\u00e9composer chaque poste en 5 composantes IA)",
        "Identifier vos 3 t\u00e2ches les plus chronophages avec la matrice Temps/Valeur",
        "Nommer un r\u00e9f\u00e9rent IA dans l'entreprise cette semaine",
        "Lancer votre premier quick win IA (voir ci-dessus)",
      ],
    },
    {
      phase: "Jours 30-60 : Structurer",
      items: [
        "Former vos \u00e9quipes : un vrai atelier pratique sur VOS cas d'usage",
        "Standardiser UN outil IA pour toute l'entreprise",
        "Cr\u00e9er 10 prompts m\u00e9tier partag\u00e9s pour les t\u00e2ches r\u00e9currentes",
      ],
    },
    {
      phase: "Jours 60-90 : Activer",
      items: [
        "Automatiser votre premier workflow complet de bout en bout",
        "Mesurer : combien de temps gagn\u00e9 ? Quelle qualit\u00e9 ?",
        "Cr\u00e9er votre roadmap IA 6 mois bas\u00e9e sur les r\u00e9sultats",
      ],
    },
  ],
  experimentation: [
    {
      phase: "Jours 1-30 : Standardiser",
      items: [
        "Auditer tous les outils IA utilis\u00e9s dans l'entreprise",
        "Cr\u00e9er une biblioth\u00e8que de prompts m\u00e9tier partag\u00e9e (minimum 20 prompts)",
        "Connecter l'IA \u00e0 votre CRM ou base documentaire",
      ],
    },
    {
      phase: "Jours 30-60 : Automatiser",
      items: [
        "Automatiser 3 workflows m\u00e9tier complets de bout en bout",
        "Mettre en place des KPIs IA : temps lib\u00e9r\u00e9, marge, adoption",
        "Former les managers \u00e0 piloter leurs \u00e9quipes avec l'IA",
      ],
    },
    {
      phase: "Jours 60-90 : Scaler",
      items: [
        "D\u00e9ployer un Second Brain (base de connaissances interrogeable)",
        "Cr\u00e9er vos premiers agents IA autonomes",
        "D\u00e9cider : on continue seul ou on se fait accompagner ?",
      ],
    },
  ],
  structuration: [
    {
      phase: "Jours 1-30 : Connecter",
      items: [
        "Connecter vos syst\u00e8mes IA \u00e0 vos donn\u00e9es internes (CRM, ERP, docs)",
        "Passer des outils aux agents IA autonomes supervis\u00e9s",
        "Mettre en place un tableau de bord ROI IA",
      ],
    },
    {
      phase: "Jours 30-60 : Industrialiser",
      items: [
        "D\u00e9ployer un Operating System IA (pilotage centralis\u00e9 des workflows)",
        "Int\u00e9grer l'IA dans la cha\u00eene de valeur principale",
        "Cr\u00e9er votre roadmap IA 12 mois avec budget allou\u00e9",
      ],
    },
    {
      phase: "Jours 60-90 : Optimiser",
      items: [
        "Mesurer et optimiser le ROI de chaque syst\u00e8me IA",
        "Int\u00e9grer l'IA dans l'onboarding des nouveaux collaborateurs",
        "Explorer les agents IA pour les d\u00e9cisions op\u00e9rationnelles",
      ],
    },
  ],
  avance: [
    {
      phase: "Jours 1-30 : Optimiser",
      items: [
        "Auditer la performance de chaque agent/workflow IA",
        "Identifier 3 nouvelles opportunit\u00e9s d'automatisation \u00e0 fort ROI",
        "Benchmarker vos syst\u00e8mes contre les meilleures pratiques",
      ],
    },
    {
      phase: "Jours 30-60 : Innover",
      items: [
        "Explorer les mod\u00e8les IA de nouvelle g\u00e9n\u00e9ration",
        "Cr\u00e9er de nouveaux produits ou services bas\u00e9s sur l'IA",
        "Partager votre expertise (formation, conf\u00e9rences)",
      ],
    },
    {
      phase: "Jours 60-90 : P\u00e9renniser",
      items: [
        "Documenter et syst\u00e9matiser tous vos process IA (SOPs)",
        "Cr\u00e9er un programme de veille IA trimestriel",
        "\u00c9valuer le prochain palier : agents IA d\u00e9cisionnels autonomes",
      ],
    },
  ],
};

const phaseColors = [
  { text: "text-primary", border: "border-primary", bg: "bg-primary/5" },
  { text: "text-purple-600", border: "border-purple-500", bg: "bg-purple-50" },
  {
    text: "text-emerald-600",
    border: "border-emerald-500",
    bg: "bg-emerald-50",
  },
];

export function ActionPlan({ level }: Props) {
  const plans = plansByLevel[level] ?? plansByLevel["pre-demarrage"];

  return (
    <div className="space-y-4">
      {plans.map((plan, i) => {
        const colors = phaseColors[i] ?? phaseColors[0];
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.15 }}
            className={`glass-card rounded-xl border-l-4 p-5 ${colors.border}`}
          >
            <div
              className={`mb-3 text-xs font-bold uppercase tracking-wider ${colors.text}`}
            >
              {plan.phase}
            </div>
            <ul className="space-y-2">
              {plan.items.map((item, j) => (
                <li
                  key={j}
                  className="flex gap-2.5 text-sm text-muted-foreground"
                >
                  <CheckCircle2
                    className={`mt-0.5 h-4 w-4 flex-shrink-0 ${colors.text}`}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        );
      })}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

interface Props {
  costPerMonth: number;
  costPerYear: number;
  teamSize: string;
}

export function CostCalculator({ costPerMonth, costPerYear, teamSize }: Props) {
  const [displayCost, setDisplayCost] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 40;
    const stepDuration = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += costPerMonth / steps;
      if (current >= costPerMonth) {
        setDisplayCost(costPerMonth);
        clearInterval(timer);
      } else {
        setDisplayCost(Math.round(current));
      }
    }, stepDuration);
    return () => clearInterval(timer);
  }, [costPerMonth]);

  const formatEuro = (n: number) =>
    new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="overflow-hidden rounded-xl border border-destructive/20 bg-destructive/[0.04]"
    >
      <div className="border-b border-destructive/20 px-6 py-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-destructive">
          <AlertTriangle className="h-4 w-4" />
          Le co&ucirc;t de l&apos;inaction
        </div>
      </div>
      <div className="px-6 py-6">
        <p className="mb-4 text-sm text-muted-foreground">
          Avec une &eacute;quipe de taille <span className="font-semibold text-foreground">{teamSize}</span> personnes,
          le manque de syst&egrave;mes IA vous co&ucirc;te environ :
        </p>
        <div className="flex items-baseline gap-3">
          <div className="text-4xl font-black text-destructive">{formatEuro(displayCost)}</div>
          <div className="text-sm text-muted-foreground">/ mois</div>
        </div>
        <div className="mt-2 text-sm text-muted-foreground">
          Soit <span className="font-bold text-destructive">{formatEuro(costPerYear)}</span> par an
          en temps perdu, recherche d&apos;info, process manuels et opportunit&eacute;s manqu&eacute;es.
        </div>
        <div className="mt-4 rounded-lg bg-muted px-4 py-3 text-xs text-muted-foreground">
          Calcul bas&eacute; sur 7h/semaine/personne perdues en t&acirc;ches automatisables &times; co&ucirc;t horaire moyen de 35&euro;.
        </div>
      </div>
    </motion.div>
  );
}

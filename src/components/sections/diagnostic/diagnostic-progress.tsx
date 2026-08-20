"use client";

import { motion } from "framer-motion";
import type { DiagnosticQuestion } from "@/lib/diagnostic-config";

interface Props {
  current: number;
  total: number;
  currentQuestion?: DiagnosticQuestion;
  isCapture: boolean;
}

export function DiagnosticProgress({
  current,
  total,
  currentQuestion,
  isCapture,
}: Props) {
  const progress = ((current + 1) / total) * 100;

  const dimensionLabels: Record<string, string> = {
    vision: "Vision stratégique",
    usecases: "Cas d'usage",
    formation: "Formation",
    infrastructure: "Infrastructure",
    maturite: "Maturité opérationnelle",
  };

  const dimensionLabel = currentQuestion?.dimension
    ? dimensionLabels[currentQuestion.dimension]
    : currentQuestion?.type === "qualification"
      ? "Personnalisation"
      : "Finalisation";

  return (
    <div className="sticky top-14 z-20 border-b border-border bg-foreground/95 backdrop-blur-sm sm:top-20">
      {/* Terminal-style header */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-8">
        <div className="flex items-center gap-3">
          {/* Terminal dots */}
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-destructive/60" />
            <div className="h-3 w-3 rounded-full bg-amber-500/60" />
            <div className="h-3 w-3 rounded-full bg-emerald-500/60" />
          </div>
          <span className="font-mono text-xs text-white/40">diagnostic-ia</span>
        </div>

        <div className="font-mono text-xs text-green-400">
          {isCapture ? (
            <span>{">"} Dernière étape : recevez votre diagnostic</span>
          ) : (
            <span>
              {">"} {dimensionLabel}
            </span>
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1 w-full bg-white/10">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-primary/70"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

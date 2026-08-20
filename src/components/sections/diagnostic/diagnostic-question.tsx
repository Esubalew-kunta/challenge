"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { DiagnosticQuestion as QuestionType } from "@/lib/diagnostic-config";

interface Props {
  question: QuestionType;
  currentAnswer?: number | string;
  onAnswer: (value: number | string) => void;
}

export function DiagnosticQuestion({ question, currentAnswer, onAnswer }: Props) {
  const [selected, setSelected] = useState<number | string | null>(
    currentAnswer ?? null
  );

  const handleSelect = (value: number | string) => {
    setSelected(value);
    onAnswer(value);
  };

  // Color mapping for scoring questions (red=0, amber=1, green=2)
  const optionColors = [
    {
      bg: "bg-destructive/[0.06]",
      border: "border-destructive/20",
      text: "text-destructive",
      activeBg: "bg-destructive/10",
      activeBorder: "border-destructive",
    },
    {
      bg: "bg-amber-500/[0.06]",
      border: "border-amber-500/20",
      text: "text-amber-600",
      activeBg: "bg-amber-500/10",
      activeBorder: "border-amber-500",
    },
    {
      bg: "bg-emerald-500/[0.06]",
      border: "border-emerald-500/20",
      text: "text-emerald-600",
      activeBg: "bg-emerald-500/10",
      activeBorder: "border-emerald-500",
    },
  ];

  return (
    <div className="text-center">
      {/* Question text */}
      <h2 className="mb-3 text-2xl font-bold leading-tight text-foreground sm:text-3xl">
        {question.text}
      </h2>
      <p className="mb-10 text-sm text-muted-foreground">{question.helpText}</p>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, i) => {
          const isSelected = selected === option.value;
          const colors =
            question.type === "scoring"
              ? optionColors[i] ?? optionColors[2]
              : {
                  bg: "bg-primary/[0.06]",
                  border: "border-primary/20",
                  text: "text-primary",
                  activeBg: "bg-primary/10",
                  activeBorder: "border-primary",
                };

          return (
            <motion.button
              key={String(option.value)}
              type="button"
              onClick={() => handleSelect(option.value)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={cn(
                "glass-card glass-card-hover w-full !rounded-xl border-2 px-6 py-5 text-left transition-all duration-200",
                isSelected
                  ? `${colors.activeBg} ${colors.activeBorder}`
                  : `${colors.bg} ${colors.border}`
              )}
            >
              <div className="flex items-center gap-4">
                {/* Circle indicator */}
                <div
                  className={cn(
                    "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold transition-all",
                    isSelected
                      ? `${colors.activeBorder} ${colors.text}`
                      : `${colors.border} text-muted-foreground`
                  )}
                >
                  {question.type === "scoring"
                    ? option.value
                    : String.fromCharCode(65 + i)}
                </div>

                {/* Label + description */}
                <div>
                  <div
                    className={cn(
                      "text-base font-semibold transition-colors",
                      isSelected ? "text-foreground" : "text-foreground/80"
                    )}
                  >
                    {option.label}
                  </div>
                  {option.description && (
                    <div className="mt-0.5 text-sm text-muted-foreground">
                      {option.description}
                    </div>
                  )}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { diagnosticQuestions } from "@/lib/diagnostic-config";
import { computeDiagnosticResult } from "@/lib/diagnostic-scoring";
import type { DiagnosticAnswers } from "@/lib/diagnostic-scoring";
import { DiagnosticQuestion } from "./diagnostic-question";
import { DiagnosticProgress } from "./diagnostic-progress";
import { DiagnosticCapture } from "./diagnostic-capture";
import { getCapturedLead } from "@/lib/lead-capture-state";
import { firstNameOf } from "@/lib/schemas/identity";

export function DiagnosticWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<DiagnosticAnswers>({});
  const [direction, setDirection] = useState(1);

  const totalSteps = diagnosticQuestions.length;
  const isLastQuestion = currentStep === totalSteps;
  const currentQuestion = diagnosticQuestions[currentStep];

  // L'avance est différée de 300ms pour laisser jouer l'animation de sélection.
  // Sans verrou, un double-clic (ou un double-tap sur mobile) empile deux
  // timers : les deux incrémentent l'étape et la question suivante est sautée,
  // donc jamais répondue, ce qui fausse le score. Une ref et non un state : le
  // verrou doit être visible dès le clic suivant, pas au prochain rendu.
  const isAdvancing = useRef(false);
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (advanceTimer.current) clearTimeout(advanceTimer.current);
    };
  }, []);

  const handleAnswer = useCallback(
    (value: number | string) => {
      const questionId = currentQuestion?.id;
      if (!questionId) return;
      if (isAdvancing.current) return;
      isAdvancing.current = true;

      setAnswers((prev) => ({ ...prev, [questionId]: value }));

      advanceTimer.current = setTimeout(() => {
        setDirection(1);
        setCurrentStep((prev) => prev + 1);
        isAdvancing.current = false;
      }, 300);
    },
    [currentQuestion]
  );

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      // Un retour pendant l'animation annule l'avance en attente, sinon les
      // deux se cumulent et l'utilisateur ne bouge pas d'un cran.
      if (advanceTimer.current) clearTimeout(advanceTimer.current);
      isAdvancing.current = false;
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  /**
   * Ce que LeadGate envoie EN PLUS de l'identité, pour satisfaire
   * `diagnosticSubmissionSchema`. Le POST lui-même est fait par LeadGate :
   * c'est le même chemin validé que tous les autres formulaires du site.
   */
  const capturePayload = useMemo(() => {
    const result = computeDiagnosticResult(answers);
    return {
      answers,
      totalScore: result.totalScore,
      level: result.threshold.level,
      sector: result.sector,
      teamSize: result.teamSize,
      costPerMonth: result.costPerMonth,
      quickWins: result.quickWins.map((qw) => qw.department),
      source:
        typeof window !== "undefined"
          ? new URLSearchParams(window.location.search).get("utm_source") ??
            "direct"
          : "direct",
    };
  }, [answers]);

  /**
   * Appelé UNIQUEMENT après un 200 de /api/diagnostic (LeadGate ne signale la
   * capture qu'à ce moment-là). L'utilisateur ne voit donc jamais sa page de
   * résultat si le lead n'est pas arrivé.
   */
  const handleCaptured = useCallback(() => {
    const result = computeDiagnosticResult(answers);
    const known = getCapturedLead();

    sessionStorage.setItem(
      "diagnostic-result",
      JSON.stringify({
        ...result,
        email: known?.email ?? "",
        firstName: known?.name ? firstNameOf(known.name) : "",
        name: known?.name ?? "",
        timestamp: new Date().toISOString(),
      })
    );

    window.location.href = "/diagnostic-ia/resultat";
  }, [answers]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="relative min-h-[calc(100dvh-3.5rem)] bg-background bg-gradient-hero bg-dot-grid pt-14 sm:min-h-[calc(100dvh-5rem)] sm:pt-20">
      {/* Progress bar — sticky below site header */}
      <DiagnosticProgress
        current={currentStep}
        total={totalSteps + 1}
        currentQuestion={currentQuestion}
        isCapture={isLastQuestion}
      />

      {/* Back button */}
      {currentStep > 0 && (
        <div className="mx-auto max-w-6xl">
          <button
            onClick={handleBack}
            className="absolute left-4 top-[8.5rem] z-10 flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:left-8 sm:top-[10rem]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Retour</span>
          </button>
        </div>
      )}

      {/* Question area */}
      <div className="flex min-h-[calc(100dvh-14rem)] items-center justify-center px-4 sm:px-8">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait" custom={direction}>
            {!isLastQuestion && currentQuestion ? (
              <motion.div
                key={currentQuestion.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <DiagnosticQuestion
                  question={currentQuestion}
                  currentAnswer={answers[currentQuestion.id]}
                  onAnswer={handleAnswer}
                />
              </motion.div>
            ) : (
              <motion.div
                key="capture"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <DiagnosticCapture
                  payload={capturePayload}
                  onCaptured={handleCaptured}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Step counter */}
      <div className="pb-8 text-center text-sm text-muted-foreground">
        {!isLastQuestion
          ? `Question ${currentStep + 1} sur ${totalSteps}`
          : "Dernière étape"}
      </div>
    </div>
  );
}

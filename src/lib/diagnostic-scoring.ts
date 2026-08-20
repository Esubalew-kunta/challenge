// =============================================================================
// DIAGNOSTIC IA — Logique de calcul du score et des recommandations
// =============================================================================

import {
  diagnosticQuestions,
  scoreThresholds,
  radarDimensions,
  sectorQuickWins,
  costFormula,
  type ScoreThreshold,
  type QuickWin,
} from "./diagnostic-config";

export interface DiagnosticAnswers {
  [questionId: string]: number | string;
}

export interface RadarScore {
  dimension: string;
  label: string;
  score: number; // 0-4 (somme des 2 questions de la dimension)
  maxScore: number;
  percentage: number;
  description: string;
}

export interface DiagnosticResult {
  totalScore: number;
  maxScore: number;
  percentage: number;
  threshold: ScoreThreshold;
  radarScores: RadarScore[];
  quickWins: QuickWin[];
  costPerMonth: number;
  costPerYear: number;
  teamSize: string;
  sector: string;
  weakestDimensions: string[];
  strongestDimension: string;
}

/**
 * Calcule le score total à partir des réponses.
 * Seules les questions de type "scoring" comptent.
 */
export function calculateTotalScore(answers: DiagnosticAnswers): number {
  const scoringQuestions = diagnosticQuestions.filter((q) => q.type === "scoring");
  let total = 0;
  for (const q of scoringQuestions) {
    const answer = answers[q.id];
    if (typeof answer === "number") {
      total += answer;
    }
  }
  return total;
}

/**
 * Trouve le seuil correspondant au score.
 */
export function getThreshold(score: number): ScoreThreshold {
  return (
    scoreThresholds.find((t) => score >= t.min && score <= t.max) ??
    scoreThresholds[0]
  );
}

/**
 * Calcule les scores par dimension pour le radar chart.
 */
export function calculateRadarScores(answers: DiagnosticAnswers): RadarScore[] {
  return radarDimensions.map((dim) => {
    let score = 0;
    const maxScore = dim.questionIds.length * 2;
    for (const qId of dim.questionIds) {
      const answer = answers[qId];
      if (typeof answer === "number") {
        score += answer;
      }
    }
    return {
      dimension: dim.id,
      label: dim.label,
      score,
      maxScore,
      percentage: Math.round((score / maxScore) * 100),
      description: dim.description,
    };
  });
}

/**
 * Identifie les dimensions les plus faibles (pour personnaliser les recommandations).
 */
export function getWeakestDimensions(radarScores: RadarScore[]): string[] {
  return [...radarScores]
    .sort((a, b) => a.percentage - b.percentage)
    .slice(0, 2)
    .map((r) => r.label);
}

/**
 * Identifie la dimension la plus forte.
 */
export function getStrongestDimension(radarScores: RadarScore[]): string {
  return [...radarScores].sort((a, b) => b.percentage - a.percentage)[0]?.label ?? "";
}

/**
 * Sélectionne les quick wins adaptés au secteur.
 */
export function getQuickWins(sector: string): QuickWin[] {
  return sectorQuickWins[sector] ?? sectorQuickWins["autre"];
}

/**
 * Calcule le coût mensuel de l'inaction.
 */
export function calculateCost(teamSize: string): { perMonth: number; perYear: number } {
  const teamCount = costFormula.teamSizeMapping[teamSize] ?? 15;
  const perMonth = Math.round(
    teamCount *
      costFormula.hoursWastedPerPersonPerWeek *
      costFormula.weeksPerMonth *
      costFormula.averageCostPerHour
  );
  return {
    perMonth,
    perYear: perMonth * 12,
  };
}

/**
 * Calcule le résultat complet du diagnostic.
 */
export function computeDiagnosticResult(answers: DiagnosticAnswers): DiagnosticResult {
  const totalScore = calculateTotalScore(answers);
  const maxScore = diagnosticQuestions.filter((q) => q.type === "scoring").length * 2;
  const threshold = getThreshold(totalScore);
  const radarScores = calculateRadarScores(answers);
  const sector = (answers["q_sector"] as string) ?? "autre";
  const teamSize = (answers["q_team"] as string) ?? "3-10";
  const quickWins = getQuickWins(sector);
  const cost = calculateCost(teamSize);
  const weakestDimensions = getWeakestDimensions(radarScores);
  const strongestDimension = getStrongestDimension(radarScores);

  return {
    totalScore,
    maxScore,
    percentage: Math.round((totalScore / maxScore) * 100),
    threshold,
    radarScores,
    quickWins,
    costPerMonth: cost.perMonth,
    costPerYear: cost.perYear,
    teamSize,
    sector,
    weakestDimensions,
    strongestDimension,
  };
}

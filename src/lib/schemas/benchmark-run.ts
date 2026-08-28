/**
 * Ce que la page a le droit d'envoyer à la fin d'un parcours.
 *
 * Les bornes reprennent exactement les contraintes CHECK de `benchmark_runs`.
 * Une valeur refusée ici renvoie un 400 lisible plutôt qu'un 500 venu de
 * Postgres, et le lecteur voit quand même sa carte de score.
 *
 * Ce que ce schéma ne peut pas faire, et il faut le savoir : le test tourne
 * dans le navigateur, donc quelqu'un de déterminé peut poster un parcours
 * parfait sans avoir répondu à quoi que ce soit. Les bornes arrêtent les
 * valeurs absurdes, pas un mensonge plausible. Déplacer la correction côté
 * serveur est un autre chantier.
 */

import { z } from "zod";

export const benchmarkRunSchema = z.object({
  runCode: z.string().regex(/^[A-Z0-9]{4}$/),
  displayName: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(254),
  company: z.string().trim().min(1).max(160),
  trackId: z.enum(["growth", "eng", "ops", "fin"]),
  role: z.string().trim().min(1).max(120),
  finalTier: z.enum(["beginner", "intermediate", "expert"]),
  score: z.number().int().min(0).max(240),
  correctCount: z.number().int().min(0).max(9),
  durationSeconds: z.number().int().min(1).max(86400),
  roundResults: z
    .array(
      z.object({
        round: z.number().int().min(1).max(3),
        tier: z.enum(["beginner", "intermediate", "expert"]),
        palier: z.number().int().min(1).max(3),
        correct: z.number().int().min(0).max(3),
        points: z.number().int().min(0).max(90),
      }),
    )
    .length(3),
  locale: z.enum(["fr", "en"]).default("fr"),
});

export type BenchmarkRunSubmission = z.infer<typeof benchmarkRunSchema>;

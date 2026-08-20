import { z } from "zod";
import {
  companyEmail,
  fullName,
  phone,
  phoneCountry,
  isValidPhone,
  looksLikePhone,
} from "./identity.ts";
import { DEFAULT_PHONE_COUNTRY } from "../phone-countries.ts";

/**
 * Diagnostic de maturité IA — /api/diagnostic.
 *
 * Corrigé le 2026-08-03. Ce module portait sa PROPRE liste de domaines grand
 * public, inlinée dans `emailCaptureSchema` et déjà divergente (icloud.com
 * manquait). Pire, elle n'existait que côté client : `diagnosticSubmissionSchema`
 * — le schéma que le SERVEUR valide — était un `.email()` nu, donc la règle se
 * contournait en postant directement sur la route.
 *
 * Les deux schémas partagent désormais `companyEmail`. Il n'y a plus qu'une
 * liste de domaines dans le dépôt, et elle est appliquée des deux côtés.
 */
export const diagnosticSubmissionSchema = z.object({
  answers: z.record(z.string(), z.union([z.number(), z.string()])),
  totalScore: z.number().min(0).max(20),
  level: z.string(),
  sector: z.string(),
  teamSize: z.string(),
  costPerMonth: z.number(),
  quickWins: z.array(z.string()),
  email: companyEmail,
  name: fullName,
  phone,
  phoneCountry: phoneCountry.optional(),
  source: z.string().optional(),
}).superRefine((data, ctx) => {
  // Même contrôle que partout ailleurs : un numéro hors plan de numérotation
  // est refusé ici aussi, sinon cette route reste une porte d'entrée pour les
  // faux numéros que le formulaire refuse déjà.
  if (looksLikePhone(data.phone) && !isValidPhone(data.phone, data.phoneCountry ?? DEFAULT_PHONE_COUNTRY)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["phone"],
      message: "Numéro de téléphone invalide",
    });
  }
});

export type DiagnosticSubmission = z.infer<typeof diagnosticSubmissionSchema>;

/**
 * Capture d'identité de la dernière étape du wizard.
 *
 * Sous-ensemble strict de `diagnosticSubmissionSchema` : mêmes règles, mêmes
 * messages, parce que c'est le même serveur qui tranchera juste après.
 */
export const emailCaptureSchema = z.object({
  name: fullName,
  phone,
  phoneCountry: phoneCountry.optional(),
  email: companyEmail,
});

export type EmailCapture = z.infer<typeof emailCaptureSchema>;

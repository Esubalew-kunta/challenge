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
 * Capture « Recevoir le catalogue de formations » — /api/catalogue.
 *
 * Corrigé le 2026-08-03 : ce schéma était un `.email()` nu alors que son
 * message d'erreur annonçait « Email professionnel invalide ». Le formulaire de
 * formation le plus fréquenté du site acceptait donc les adresses gmail.com en
 * affirmant le contraire. Il passe désormais par `companyEmail`, comme tous les
 * autres.
 *
 * `firstName`/`lastName` ont fusionné en `name` : le socle d'identité est
 * commun à tout le site, et le prénom reste dérivé par `firstNameOf()` pour les
 * gabarits d'emails en aval.
 */
export const catalogueSubmissionSchema = z.object({
  name: fullName,
  phone,
  phoneCountry: phoneCountry.optional(),
  email: companyEmail,
  company: z
    .string()
    .trim()
    .min(2, "Nom d'entreprise trop court")
    .max(120, "Nom d'entreprise trop long")
    .optional(),
  /** Slug de la formation d'où vient la demande (optionnel). */
  formation: z.string().max(80).optional(),
  source: z.string().max(120).optional(),
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

export type CatalogueSubmission = z.infer<typeof catalogueSubmissionSchema>;

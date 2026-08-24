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
 * Capture de lead générique — /api/lead.
 *
 * Point d'entrée fourre-tout du site : playbook, brief, audit GEO, scanner,
 * challenge, newsletter, réservation, calculateur de ROI, blog, glossaire.
 * `formFromSource()` (lib/capture-lead.ts) redistribue ensuite chaque source
 * vers son vrai formulaire côté OS.
 *
 * L'identité (nom, téléphone, email professionnel) vient de `./identity`, seul
 * endroit du dépôt où vit la règle « email professionnel ». Ne pas ré-inliner de
 * liste de domaines ici : c'est exactement comme ça que le diagnostic s'est
 * retrouvé avec sa propre liste, plus courte d'une entrée.
 */

/** Ré-exports : les formulaires n'ont pas à connaître le module d'identité. */
export {
  FREE_EMAIL_PROVIDERS,
  isFreeEmailProvider,
  FREE_EMAIL_FALLBACK_HINT,
  FREE_EMAIL_MESSAGE,
  normalisePhone,
  firstNameOf,
} from "./identity.ts";

export const LEAD_SOURCES = [
  "playbook",
  "brief",
  "geo-audit",
  "scanner",
  "challenge",
  "newsletter",
  "booking",
  // Calculateur de ROI : les résultats sont révélés après capture.
  "roi",
  // Blog et glossaire — surfaces organiques, jusqu'ici sans aucune capture.
  "blog",
  "glossaire",
  // Claude Code in 30 Days : les dix fiches du challenge. La source est unique,
  // la fiche demandée voyage dans `sheetId` — c'est elle qui dit ce qui
  // intéresse le lecteur, et c'est le seul signal que ce challenge produit.
  "claude-code-challenge",
  // Jour 1 du challenge : le lecteur dit que l'installation a échoué et demande
  // qu'on l'aide. Source distincte de "claude-code-challenge", et c'est le
  // point : celle-ci n'est PAS un téléchargement, c'est quelqu'un de bloqué qui
  // attend un humain. Identité complète exigée, donc absente de
  // IDENTITY_OPTIONAL_SOURCES, et absente aussi de FORM_BY_SOURCE, où une
  // valeur inconnue côté base ferait échouer l'insertion. Elle retombe sur le
  // form générique "lead" et voyage verbatim dans la colonne `source`.
  "claude-code-help",
  // Le badge partageable, gagné aux jours 10, 20 et 30. Identité complète : le
  // nom est littéralement imprimé sur l'image, donc le demander n'a rien d'un
  // prétexte. Hors de FORM_BY_SOURCE pour la même raison que les autres : une
  // valeur inconnue côté base ferait échouer l'insertion et perdrait le lead.
  "claude-code-badge",
] as const;

export type LeadSource = (typeof LEAD_SOURCES)[number];

/**
 * Sources dispensées de l'identité complète.
 *
 * La newsletter du pied de page est présente sur les 43 pages du site. Y exiger
 * nom + téléphone + email professionnel coûterait l'essentiel des inscriptions,
 * pour un abonnement et non pour une demande. Elle capture donc l'email en
 * ligne, puis présente le formulaire complet à l'étape de confirmation — le
 * second envoi enrichit la même ligne côté OS, qui déduplique par email.
 */
const IDENTITY_OPTIONAL_SOURCES = new Set<LeadSource>([
  "newsletter",
  // Les fiches du challenge Claude Code : la page est gratuite et ouverte, et
  // l'email n'achète qu'un document à emporter, jamais une leçon. Exiger nom et
  // téléphone sur les dix seules pages qui capturent quoi que ce soit coûterait
  // l'essentiel des demandes, pour un téléchargement et non pour une demande.
  "claude-code-challenge",
]);

export const leadSubmissionSchema = z
  .object({
    // Optionnels au niveau de l'objet, requis par source dans le superRefine :
    // c'est la newsletter en deux temps qui impose cette forme.
    name: fullName.optional(),
    phone: phone.optional(),
    phoneCountry: phoneCountry.optional(),
    email: companyEmail,
    company: z
      .string()
      .trim()
      .min(2, "Nom d'entreprise trop court")
      .max(100, "Nom d'entreprise trop long")
      .optional(),
    website: z
      .string()
      .trim()
      .max(200, "URL trop longue")
      .refine(
        (value) =>
          value === "" ||
          /^(https?:\/\/)?[\w-]+(\.[\w-]+)+(\/\S*)?$/i.test(value),
        { message: "URL invalide" },
      )
      .optional(),
    source: z.enum(LEAD_SOURCES),
    /** Fiche demandée sur le challenge Claude Code (source "claude-code-challenge"). */
    sheetId: z.string().trim().max(60, "Identifiant de fiche trop long").optional(),
    // 0 est autorisé : la fiche méritée du challenge n'appartient à aucun jour.
    sheetDay: z.number().int().min(0).max(30).optional(),
    /** Réponses du scanner d'opportunités IA (source "scanner"). */
    sector: z.string().trim().max(100, "Secteur trop long").optional(),
    teamSize: z.string().trim().max(50, "Taille trop longue").optional(),
    pains: z
      .array(z.string().trim().max(100, "Irritant trop long"))
      .max(8, "Trop d'irritants sélectionnés")
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (!IDENTITY_OPTIONAL_SOURCES.has(data.source)) {
      if (!data.name?.trim()) {
        ctx.addIssue({ code: "custom", path: ["name"], message: "Nom requis" });
      }
      if (!data.phone?.trim()) {
        ctx.addIssue({
          code: "custom",
          path: ["phone"],
          message: "Téléphone requis",
        });
      } else if (
        // Le même contrôle qu'`identitySchema`, appliqué ici parce que cette
        // route accepte aussi des sources sans identité : le téléphone n'est
        // vérifié que lorsqu'il est effectivement exigé.
        //
        // `looksLikePhone` garde la porte : si la forme est déjà refusée par le
        // champ lui-même, il a posé son message, et en ajouter un second sur le
        // même chemin afficherait deux erreurs sous un seul champ.
        looksLikePhone(data.phone) &&
        !isValidPhone(data.phone, data.phoneCountry ?? DEFAULT_PHONE_COUNTRY)
      ) {
        ctx.addIssue({
          code: "custom",
          path: ["phone"],
          message: "Numéro de téléphone invalide",
        });
      }
    }
    // L'audit GEO et le challenge écrivent au nom d'une entreprise : sans elle,
    // l'audit n'a pas de sujet et la séquence email n'a pas de contexte.
    if (data.source === "geo-audit" || data.source === "challenge") {
      if (!data.company?.trim()) {
        ctx.addIssue({
          code: "custom",
          path: ["company"],
          message: "Nom de l'entreprise requis",
        });
      }
    }
  });

export type LeadSubmission = z.infer<typeof leadSubmissionSchema>;

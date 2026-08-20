import { z } from "zod";
import { fullName, looksLikePhone, isValidPhone, phoneCountry } from "./identity.ts";
import { DEFAULT_PHONE_COUNTRY } from "../phone-countries.ts";

/**
 * Candidature à un poste — /api/careers-apply.
 *
 * Distinct de `leadSubmissionSchema` (lead.ts) : un candidat n'est pas un
 * lead commercial. Deux différences qui comptent :
 *
 * - L'email est un email PLEIN, pas `companyEmail`. `companyEmail` rejette
 *   les fournisseurs grand public (Gmail, etc.) par construction pour les
 *   leads B2B — l'appliquer ici rejetterait silencieusement la plupart des
 *   candidats réels, qui postulent depuis une adresse personnelle.
 * - Le téléphone reste optionnel : une candidature n'a pas besoin du même
 *   niveau d'urgence de qualification qu'un lead commercial. Il porte en
 *   revanche un indicatif pays (`phoneCountry`), comme les formulaires de
 *   lead : les postes sont remote et internationaux, et un numéro sans
 *   indicatif n'est pas rappelable depuis un autre pays.
 *
 * Depuis le 2026-08-12, le formulaire de base ne pose plus AUCUNE question de
 * jugement : la question éliminatoire du poste et celle du français passent au
 * niveau suivant de la présélection. Ce qui reste est factuel et, à
 * l'exception du téléphone et du site perso, entièrement obligatoire.
 *
 * Les slugs de rôle DOIVENT rester synchronisés avec
 * `src/app/(fr)/carrieres/postes.ts`. Dupliqués ici plutôt qu'importés pour
 * ne pas faire dépendre `lib/` de `app/` — cinq postes, faible risque de
 * dérive, corrigé au même endroit que le README des annonces.
 */
export const ROLE_SLUGS = [
  "ai-engineer",
  "gtm-growth-manager",
  "data-engineer",
  "qa-engineer",
  "forward-deployed-engineer",
] as const;

export type RoleSlug = (typeof ROLE_SLUGS)[number];

const plainEmail = z
  .string()
  .trim()
  .min(1, "Email requis")
  .email("Email invalide");

const optionalPhone = z
  .string()
  .trim()
  .max(30, "Numéro trop long")
  .optional()
  .refine((v) => !v || looksLikePhone(v), "Numéro de téléphone invalide");

/** Forme d'URL acceptée, partagée par les liens obligatoires et facultatifs. */
const URL_SHAPE = /^(https?:\/\/)?[\w-]+(\.[\w-]+)+(\/\S*)?$/i;

/**
 * Un lien de profil facultatif — aujourd'hui le seul est le site perso.
 *
 * Validation volontairement permissive : pas d'enforcement par domaine, un
 * candidat peut coller n'importe quelle URL. Exiger `linkedin.com` ferait
 * échouer les URL régionales et les profils sur mesure.
 */
const optionalUrl = z
  .string()
  .trim()
  .max(300, "URL trop longue")
  .optional()
  .refine((value) => !value || URL_SHAPE.test(value), { message: "URL invalide" });

/**
 * Un lien de profil OBLIGATOIRE — LinkedIn et GitHub depuis le 2026-08-12.
 *
 * Le message nomme le champ concerné : « Lien requis » sous deux champs
 * voisins n'apprend pas lequel manque.
 */
const requiredUrl = (label: string) =>
  z
    .string({ error: `${label} requis` })
    .trim()
    .min(1, `${label} requis`)
    .max(300, "URL trop longue")
    .refine((value) => URL_SHAPE.test(value), { message: "URL invalide" });

export const applicationSubmissionSchema = z
  .object({
    name: fullName,
    email: plainEmail,
    phone: optionalPhone,
    role: z.enum(ROLE_SLUGS, { error: "Poste invalide" }),
    phoneCountry: phoneCountry.optional(),
    /**
     * LinkedIn et GitHub sont OBLIGATOIRES depuis le 2026-08-12. L'ancienne
     * règle « au moins un lien ou un CV » laissait passer des candidatures
     * qu'il fallait ensuite compléter à la main, un aller-retour par personne.
     */
    linkedinUrl: requiredUrl("Profil LinkedIn"),
    githubUrl: requiredUrl("Lien GitHub"),
    /** Le seul lien resté facultatif : tout le monde n'a pas de site. */
    websiteUrl: optionalUrl,
    /**
     * Référence renvoyée par /api/careers-apply/resume après upload — jamais
     * le fichier lui-même. OBLIGATOIRE depuis le 2026-08-12 : le CV n'est plus
     * une pièce parmi d'autres. Le nom, type et poids voyagent avec elle : le
     * client les connaît déjà (`File.name/type/size`) et l'OS en a besoin pour
     * la colonne `applicants.resume_*` sans avoir à les redemander.
     */
    resumeId: z.string({ error: "CV requis" }).trim().min(1, "CV requis").max(200),
    resumeFileName: z.string().trim().max(255).optional(),
    resumeMimeType: z.string().trim().max(100).optional(),
    resumeSizeBytes: z.coerce.number().min(0).max(20_000_000).optional(),
    /**
     * Lettre de motivation — SAISIE ou DÉPOSÉE, obligatoire dans les deux cas.
     *
     * Deux champs plutôt qu'un : le texte se lit directement dans l'OS, le
     * fichier demande une URL signée. Le superRefine exige l'un des deux, sans
     * imposer lequel — obliger à taper dans un textarea écarte ceux qui ont
     * déjà une lettre en PDF, et l'inverse écarte ceux qui écrivent d'un trait.
     *
     * La langue attendue (français ou anglais) est ANNONCÉE dans le
     * formulaire, jamais devinée : une détection automatique se trompe sur les
     * lettres courtes, mélangées ou très techniques, et refuser un candidat
     * pour une langue mal détectée est une erreur sans recours. Un humain lit
     * la lettre à la présélection de toute façon.
     */
    coverLetterText: z
      .string()
      .trim()
      .max(4000, "Lettre trop longue (4000 caractères maximum)")
      .optional(),
    coverLetterId: z.string().trim().max(200).optional(),
    coverLetterFileName: z.string().trim().max(255).optional(),
    coverLetterMimeType: z.string().trim().max(100).optional(),
    coverLetterSizeBytes: z.coerce.number().min(0).max(20_000_000).optional(),
    /** Réponse à la question générale d'expérience (années). Obligatoire. */
    yearsExperience: z.coerce
      .number({ error: "Nombre d'années requis" })
      .min(0, "Doit être positif ou nul")
      .max(60, "Valeur invalide"),
    /** D'où vient la candidature : le slug de la page qui a renvoyé ici. */
    source: z.string().trim().max(100).optional(),
  })
  .superRefine((data, ctx) => {
    // La lettre doit exister, sous l'une de ses deux formes. L'erreur est
    // attachée au textarea : c'est le champ visible par défaut, donc celui
    // sous lequel le candidat ira lire le message.
    const hasText = Boolean(data.coverLetterText && data.coverLetterText.length > 0);
    if (!hasText && !data.coverLetterId) {
      ctx.addIssue({
        code: "custom",
        path: ["coverLetterText"],
        message: "Ajoutez une lettre de motivation, en la saisissant ou en déposant un fichier",
      });
    }

    // Une lettre saisie trop courte n'est pas une lettre. Le seuil est bas
    // volontairement : on refuse « ok », pas une lettre brève et dense.
    if (hasText && !data.coverLetterId && (data.coverLetterText?.length ?? 0) < 120) {
      ctx.addIssue({
        code: "custom",
        path: ["coverLetterText"],
        message: "Lettre trop courte (120 caractères minimum)",
      });
    }

    // Le contrôle syntaxique du champ a déjà posé son message le cas échéant :
    // en ajouter un second sur le même chemin afficherait deux erreurs sous un
    // seul champ. Même garde que `identitySchema`.
    if (!data.phone) return;
    if (!looksLikePhone(data.phone)) return;
    if (!isValidPhone(data.phone, data.phoneCountry ?? DEFAULT_PHONE_COUNTRY)) {
      ctx.addIssue({
        code: "custom",
        path: ["phone"],
        message: "Numéro de téléphone invalide",
      });
    }
  });

export type ApplicationSubmission = z.infer<typeof applicationSubmissionSchema>;

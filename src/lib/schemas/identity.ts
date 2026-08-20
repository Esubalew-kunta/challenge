import { z } from "zod";
import {
  isValidPhoneNumber,
  parsePhoneNumberFromString,
  type CountryCode,
} from "libphonenumber-js/min";
import { PHONE_COUNTRY_ISOS, DEFAULT_PHONE_COUNTRY } from "../phone-countries.ts";

/**
 * Identité du lead — nom, téléphone, email professionnel.
 *
 * Socle commun à TOUS les formulaires du site, et point d'entrée unique de la
 * règle « email professionnel ». Un seul module, parce que la divergence a déjà
 * coûté deux fois :
 *
 * • `schemas/diagnostic.ts` portait sa propre liste de domaines grand public,
 *   plus courte d'une entrée (icloud.com manquait) — et seulement côté client,
 *   `diagnosticSubmissionSchema.email` étant un `.email()` nu.
 * • `schemas/catalogue.ts` n'en portait aucune tout en affichant « Email
 *   professionnel invalide » : le formulaire de formation le plus fréquenté du
 *   site acceptait les adresses gmail.com en disant le contraire.
 *
 * Rien ne doit ré-inliner une liste de domaines. Tout passe par `companyEmail`.
 */

/**
 * Domaines grand public. Un lead qui écrit depuis une de ces adresses n'est pas
 * refusé parce que l'adresse est mauvaise, mais parce qu'on ne peut pas en
 * déduire d'entreprise — c'est la qualification qui est en jeu, pas la validité.
 *
 * Voir `FREE_EMAIL_FALLBACK_HINT` : le refus doit toujours offrir une sortie.
 */
export const FREE_EMAIL_PROVIDERS = [
  // Liste d'origine (schemas/lead.ts, conservée telle quelle).
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "icloud.com",
  "orange.fr",
  "free.fr",
  "sfr.fr",
  "laposte.net",
  "wanadoo.fr",
  // Variantes rencontrées sur les leads réels : mêmes fournisseurs, autres TLD.
  "googlemail.com",
  "yahoo.fr",
  "ymail.com",
  "hotmail.fr",
  "outlook.fr",
  "live.fr",
  "msn.com",
  "aol.com",
  "gmx.com",
  "gmx.fr",
  "protonmail.com",
  "proton.me",
  "pm.me",
  "me.com",
  "mac.com",
  "yandex.com",
  "mail.com",
  "zoho.com",
  // FAI français encore très présents chez les TPE.
  "bbox.fr",
  "numericable.fr",
  "neuf.fr",
  "aliceadsl.fr",
  "voila.fr",
  "club-internet.fr",
  // Maroc — le bureau de Casablanca représente la moitié du cabinet.
  "menara.ma",
  "iam.net.ma",
] as const;

/**
 * Jetables. Distinguées des adresses grand public parce que le problème n'est
 * pas le même : une adresse gmail est réelle et joignable, une adresse
 * mailinator aura disparu avant la première relance. Le message de refus doit
 * donc différer — proposer d'écrire depuis une adresse perso n'aurait aucun
 * sens ici.
 */
export const DISPOSABLE_EMAIL_PROVIDERS = [
  "mailinator.com",
  "yopmail.com",
  "yopmail.fr",
  "guerrillamail.com",
  "10minutemail.com",
  "temp-mail.org",
  "tempmail.com",
  "throwawaymail.com",
  "trashmail.com",
  "getnada.com",
  "sharklasers.com",
  "dispostable.com",
  "maildrop.cc",
  "fakeinbox.com",
  "mailnesia.com",
  "spamgourmet.com",
  "mailsac.com",
  "moakt.com",
] as const;

function domainOf(email: string): string | undefined {
  return email.split("@")[1]?.toLowerCase().trim();
}

export function isFreeEmailProvider(email: string): boolean {
  const d = domainOf(email);
  return !d || (FREE_EMAIL_PROVIDERS as readonly string[]).includes(d);
}

export function isDisposableEmailProvider(email: string): boolean {
  const d = domainOf(email);
  return !!d && (DISPOSABLE_EMAIL_PROVIDERS as readonly string[]).includes(d);
}

/**
 * Sortie de secours affichée sous le refus « adresse personnelle ».
 *
 * Une part réelle des dirigeants de TPE/PME n'a QUE son adresse gmail ou
 * orange.fr — et /secteurs/tpe-pme est une page qu'on vend. Sans cette porte,
 * la règle transforme le prospect le plus qualifié du site en cul-de-sac sur
 * l'action la plus engageante. Le blocage reste ; c'est l'impasse qui saute.
 */
export const FREE_EMAIL_FALLBACK_HINT =
  "Pas d'adresse professionnelle ? Écrivez-nous directement à othmane@aimakers.fr.";

export const FREE_EMAIL_MESSAGE =
  "Adresse personnelle détectée. Merci d'utiliser votre email professionnel.";

export const DISPOSABLE_EMAIL_MESSAGE =
  "Adresse jetable détectée. Merci d'utiliser votre email professionnel.";

/**
 * Email professionnel.
 *
 * Le garde-fou en tête du superRefine est repris de l'implémentation d'origine
 * et doit le rester : un refine s'exécute même après un échec de format, donc
 * sans lui une adresse mal formée déclenche « Email invalide » ET « Adresse
 * personnelle » en même temps.
 */
export const companyEmail = z
  .string()
  .trim()
  .min(1, "Email requis")
  .email("Email invalide")
  .superRefine((email, ctx) => {
    if (!z.string().email().safeParse(email).success) return;
    if (isDisposableEmailProvider(email)) {
      ctx.addIssue({ code: "custom", message: DISPOSABLE_EMAIL_MESSAGE });
      return;
    }
    if (isFreeEmailProvider(email)) {
      ctx.addIssue({ code: "custom", message: FREE_EMAIL_MESSAGE });
    }
  });

/**
 * Téléphone — validé contre les vrais plans de numérotation.
 *
 * La règle précédente n'exigeait que 8 à 15 chiffres, donc « 000000000 »
 * passait, comme « 123456789 » ou n'importe quelle suite de la bonne longueur.
 * Un numéro de téléphone est la donnée la plus actionnable d'un lead : s'il est
 * faux, le lead ne vaut rien, et personne ne s'en aperçoit avant d'essayer
 * d'appeler.
 *
 * `libphonenumber-js` (le portage maintenu de la bibliothèque de Google) sait
 * qu'en France un mobile commence par 06 ou 07 et compte neuf chiffres après le
 * zéro, qu'au Maroc c'est 06 ou 07 également mais avec un autre plan, et que
 * « 000000000 » n'est attribuable dans aucun des deux. Écrire ces règles à la
 * main pour 245 pays est exactement le genre de tâche qu'on croit simple.
 *
 * Le format `min` des métadonnées suffit : il valide, il ne distingue pas
 * mobile et fixe — ce dont nous n'avons pas besoin, et ce qui coûterait trois
 * fois le poids.
 */
export const phoneCountry = z
  .string()
  .trim()
  .toUpperCase()
  .refine((v) => PHONE_COUNTRY_ISOS.includes(v), "Pays invalide");

/**
 * Valide un numéro, avec son pays quand il n'est pas au format international.
 *
 * Un numéro commençant par « + » se suffit à lui-même : l'indicatif désigne le
 * pays. Sinon il faut le pays du sélecteur pour lever l'ambiguïté — « 0612… »
 * est valide en France ET au Maroc, mais ce ne sont pas les mêmes abonnés.
 */
export function isValidPhone(value: string, country?: string): boolean {
  const v = (value ?? "").trim();
  if (!v) return false;
  try {
    if (v.startsWith("+") || v.startsWith("00")) {
      const intl = v.startsWith("00") ? `+${v.slice(2)}` : v;
      return isValidPhoneNumber(intl);
    }
    if (!country) return false;
    return isValidPhoneNumber(v, country as CountryCode);
  } catch {
    return false;
  }
}

/** Le contrôle syntaxique, isolé pour être partagé avec le contrôle de plan. */
export function looksLikePhone(v: string): boolean {
  if (!/^[+0-9][0-9\s.\-()]*$/.test(v)) return false;
  const digits = v.replace(/\D/g, "");
  return digits.length >= 8 && digits.length <= 15;
}

export const phone = z
  .string()
  .trim()
  .min(1, "Téléphone requis")
  .max(30, "Numéro trop long")
  // Contrôle SYNTAXIQUE, gardé au niveau du champ : caractères autorisés et
  // bornes E.164. La validité réelle (le numéro existe-t-il dans le plan de son
  // pays ?) est vérifiée au niveau de l'objet, parce qu'elle a besoin du pays.
  //
  // Les deux couches ont leur utilité : celle-ci rejette « pas un numéro » sans
  // rien savoir du pays, et garde ce schéma honnête s'il est réutilisé seul
  // ailleurs. Un seul refine pour les deux règles, sinon « abc » afficherait
  // deux fois le même message.
  .refine(looksLikePhone, "Numéro de téléphone invalide");

/**
 * Forme canonique E.164 (« +33611223344 »), la seule qui se compose depuis
 * n'importe où et se rapproche de façon fiable en base.
 *
 * Retourne la saisie nettoyée si le numéro n'est pas analysable : la validation
 * a déjà eu lieu en amont, et perdre la saisie de l'utilisateur au moment de
 * l'envoi serait pire que de stocker une forme imparfaite.
 */
export function normalisePhone(v: string, country?: string): string {
  const t = (v ?? "").trim();
  if (!t) return "";
  try {
    const parsed = t.startsWith("+") || t.startsWith("00")
      ? parsePhoneNumberFromString(t.startsWith("00") ? `+${t.slice(2)}` : t)
      : country
        ? parsePhoneNumberFromString(t, country as CountryCode)
        : undefined;
    if (parsed?.number) return parsed.number;
  } catch {
    /* on retombe sur la forme nettoyée */
  }
  const cleaned = t.replace(/[\s.\-()]/g, "");
  if (cleaned.startsWith("00")) return `+${cleaned.slice(2)}`;
  return cleaned;
}

/**
 * Nom complet.
 *
 * Deux mots exigés : le prénom seul ne suffit plus à personnaliser un email
 * sans que ça sonne automatique, et c'est ce que le CRM attend. Le serveur
 * dérive le prénom par `firstNameOf()` — rien en aval n'a besoin de changer.
 */
export const fullName = z
  .string()
  .trim()
  .min(2, "Nom requis")
  .max(80, "Nom trop long")
  .refine(
    (v) => v.split(/\s+/).filter(Boolean).length >= 2,
    "Merci d'indiquer votre prénom et votre nom",
  );

/**
 * Prénom extrait du nom complet, pour continuer d'alimenter `p_first_name`
 * côté OS et les gabarits d'emails n8n qui l'interpolent. Le passage de
 * `firstName` à `name` ne casse donc rien en aval.
 */
export function firstNameOf(name: string): string {
  return name.trim().split(/\s+/)[0] ?? "";
}

/**
 * Le socle : tout formulaire du site en hérite.
 *
 * Le contrôle du téléphone est posé au niveau de l'OBJET, pas du champ : la
 * validité dépend du couple (numéro, pays), et un `refine` sur la seule chaîne
 * n'a pas accès au second. C'est aussi ce qui permet d'attacher l'erreur au
 * champ `phone`, là où l'utilisateur la lira.
 *
 * Le même schéma sert au client et au serveur. Un numéro fabriqué à la main,
 * envoyé directement à l'API sans passer par le formulaire, est refusé de la
 * même façon — la validation côté navigateur est une commodité, jamais une
 * garantie.
 */
export const identitySchema = z.object({
  name: fullName,
  phone,
  phoneCountry: phoneCountry.optional(),
  email: companyEmail,
  company: z
    .string()
    .trim()
    .min(2, "Nom d'entreprise trop court")
    .max(100, "Nom d'entreprise trop long")
    .optional(),
}).superRefine((data, ctx) => {
  // Le champ a déjà son propre contrôle syntaxique. S'il a échoué, il a posé
  // son message : en ajouter un second sur le même chemin afficherait deux
  // erreurs sous un seul champ.
  if (!looksLikePhone(data.phone)) return;
  if (!isValidPhone(data.phone, data.phoneCountry ?? DEFAULT_PHONE_COUNTRY)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["phone"],
      message: "Numéro de téléphone invalide",
    });
  }
});

export type Identity = z.infer<typeof identitySchema>;

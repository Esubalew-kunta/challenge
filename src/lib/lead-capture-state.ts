"use client";

/**
 * Mémoire de capture, côté navigateur.
 *
 * Sert à ne pas redemander ses coordonnées à quelqu'un qui vient de les donner :
 * le calendrier s'ouvre directement, la pop-up ne se déclenche plus, les
 * formulaires se préremplissent.
 *
 * Vivait auparavant dans `components/shared/geo-audit-form.tsx`, pour des
 * raisons purement historiques — ces fonctions n'ont rien à voir avec l'audit
 * GEO, et six formulaires sur neuf ne les appelaient pas du tout.
 *
 * ── Ce que ce module N'EST PAS ────────────────────────────────────────────
 * Ce n'est pas un contrôle d'accès. C'est du localStorage : navigation privée,
 * cookies effacés ou autre navigateur, et le formulaire se represente. Le but
 * est de CAPTURER le lead, pas d'interdire l'accès au calendrier. Verrouiller
 * réellement la réservation se ferait dans Cal.com, pas ici.
 */

/**
 * v2 : nom + téléphone + email professionnel.
 *
 * La clé CHANGE de nom à chaque évolution du socle d'identité. Sans ça, tout
 * visiteur déjà capturé sous le schéma v1 (prénom + email) sauterait le nouveau
 * formulaire pour toujours et son téléphone ne serait JAMAIS demandé. Le coût
 * est de redemander une fois à des gens déjà connus ; le coût inverse est de ne
 * jamais collecter le champ qu'on vient d'ajouter.
 */
export const LEAD_CAPTURED_KEY = "aim_lead_captured_v2";

/** Clé v1, purgée au premier passage pour ne pas laisser traîner de données. */
const LEGACY_KEYS = ["aim_lead_captured"];

export type CapturedLead = {
  name: string;
  email: string;
  phone: string;
  /** ISO 8601. */
  at: string;
};

export function markLeadCaptured(lead: Omit<CapturedLead, "at">): void {
  try {
    const record: CapturedLead = { ...lead, at: new Date().toISOString() };
    window.localStorage.setItem(LEAD_CAPTURED_KEY, JSON.stringify(record));
    for (const k of LEGACY_KEYS) window.localStorage.removeItem(k);
  } catch {
    // localStorage indisponible (navigation privée stricte) : non bloquant.
    // Le lead est déjà parti au serveur — seule la mémoire locale manque.
  }
}

/**
 * Le lead capturé, ou null.
 *
 * Renvoie null sur un enregistrement illisible ou incomplet plutôt que de
 * rendre un objet à moitié vide : un préremplissage avec un `undefined` visible
 * est pire que pas de préremplissage du tout.
 */
export function getCapturedLead(): CapturedLead | null {
  try {
    const raw = window.localStorage.getItem(LEAD_CAPTURED_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<CapturedLead>;
    if (!parsed?.email || !parsed?.name || !parsed?.phone) return null;
    return parsed as CapturedLead;
  } catch {
    return null;
  }
}

export function hasLeadCaptured(): boolean {
  return getCapturedLead() !== null;
}

/**
 * Capture d'une candidature dans l'OS AI Makers — `capture_website_application`.
 *
 * Distinct de `captureLead()` (capture-lead.ts) : les candidatures vivent
 * dans une table dédiée `applicants`, pas dans `website_leads`, et portent
 * leur propre secret d'ingestion (`OS_APPLICATION_INGEST_SECRET`) — un
 * candidat n'est pas un lead commercial, et un secret séparé limite le
 * rayon d'exposition si l'un des deux fuite. Voir
 * docs/APPLICANTS-SCHEMA-SPEC.md pour le schéma complet et le contrat RPC.
 *
 * Cette route n'existe pas encore côté OS : tant que
 * `OS_APPLICATION_INGEST_SECRET` n'est pas configuré, ou que la RPC répond
 * 404 (fonction pas encore déployée), `captureApplication()` échoue
 * proprement — l'appelant (`/api/careers-apply`) retombe alors sur le
 * chemin `captureLead()` existant. Aucune candidature n'est perdue pendant
 * la transition.
 */

import { OS_URL, OS_ANON } from "./os-client";

const INGEST_SECRET = process.env.OS_APPLICATION_INGEST_SECRET;

export type ApplicationCaptureInput = {
  applicationId: string;
  roleSlug: string;
  roleTitle: string;
  name: string;
  email: string;
  phone?: string;
  locale?: "fr" | "en";
  source?: string;
  pagePath?: string;
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
    term?: string;
    content?: string;
  };
  linkedinUrl?: string;
  githubUrl?: string;
  websiteUrl?: string;
  resumeStoragePath?: string;
  resumeOriginalFilename?: string;
  resumeMimeType?: string;
  resumeSizeBytes?: number;
  coverLetterText?: string;
  coverLetterStoragePath?: string;
  coverLetterOriginalFilename?: string;
  coverLetterMimeType?: string;
  coverLetterSizeBytes?: number;
  yearsExperience: number;
  experienceQuestionText: string;
  experienceMinValue: number;
  /**
   * La question éliminatoire du poste et le français ont quitté le formulaire
   * de base pour le niveau 2 de la présélection : ils sont donc facultatifs
   * ici. La RPC les fusionne avec `coalesce`, donc une candidature qui les
   * omet n'efface pas une réponse déjà donnée au niveau 2.
   */
  roleQuestionText?: string;
  roleAnswer?: boolean;
  frenchRequired: boolean;
  frenchFluent?: boolean;
  autoScreenScore: number;
  autoScreenFlags: string[];
};

export async function captureApplication(
  input: ApplicationCaptureInput,
  timeoutMs = 5000,
): Promise<{ ok: boolean; id?: string; reason?: string }> {
  if (!INGEST_SECRET || !OS_ANON) return { ok: false, reason: "not_configured" };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(`${OS_URL}/rest/v1/rpc/capture_website_application`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: OS_ANON,
        Authorization: `Bearer ${OS_ANON}`,
      },
      body: JSON.stringify({
        p_secret: INGEST_SECRET,
        p_application_id: input.applicationId,
        p_role_slug: input.roleSlug,
        p_role_title: input.roleTitle,
        p_name: input.name,
        p_email: input.email,
        p_phone: input.phone ?? null,
        p_locale: input.locale ?? "fr",
        p_source: input.source ?? null,
        p_page_path: input.pagePath ?? null,
        p_utm_source: input.utm?.source ?? null,
        p_utm_medium: input.utm?.medium ?? null,
        p_utm_campaign: input.utm?.campaign ?? null,
        p_utm_term: input.utm?.term ?? null,
        p_utm_content: input.utm?.content ?? null,
        p_linkedin_url: input.linkedinUrl ?? null,
        p_github_url: input.githubUrl ?? null,
        p_website_url: input.websiteUrl ?? null,
        p_resume_storage_path: input.resumeStoragePath ?? null,
        p_resume_original_filename: input.resumeOriginalFilename ?? null,
        p_resume_mime_type: input.resumeMimeType ?? null,
        p_resume_size_bytes: input.resumeSizeBytes ?? null,
        p_cover_letter_text: input.coverLetterText ?? null,
        p_cover_letter_storage_path: input.coverLetterStoragePath ?? null,
        p_cover_letter_original_filename: input.coverLetterOriginalFilename ?? null,
        p_cover_letter_mime_type: input.coverLetterMimeType ?? null,
        p_cover_letter_size_bytes: input.coverLetterSizeBytes ?? null,
        p_years_experience: input.yearsExperience,
        p_experience_question_text: input.experienceQuestionText,
        p_experience_min_value: input.experienceMinValue,
        p_role_question_text: input.roleQuestionText ?? null,
        p_role_answer: input.roleAnswer ?? null,
        p_french_required: input.frenchRequired,
        p_french_fluent: input.frenchFluent ?? null,
        p_auto_screen_score: input.autoScreenScore,
        p_auto_screen_flags: input.autoScreenFlags,
      }),
      signal: controller.signal,
    });
    if (!res.ok) return { ok: false, reason: `status_${res.status}` };
    const id = (await res.text()).replace(/^"|"$/g, "").trim();
    return { ok: true, id };
  } catch (err) {
    return { ok: false, reason: err instanceof Error ? err.name : "fetch_error" };
  } finally {
    clearTimeout(timer);
  }
}

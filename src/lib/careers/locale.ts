import type { Locale } from "../i18n";
import { jobOpenings, type JobRole } from "./postes";
import { jobOpeningsEn } from "./postes.en";

/** Les offres par langue. Un slug identique des deux côtés : même poste. */
export const JOBS: Record<Locale, readonly JobRole[]> = {
  fr: jobOpenings,
  en: jobOpeningsEn,
};

export function getJobFor(slug: string, locale: Locale): JobRole | undefined {
  return JOBS[locale].find((job) => job.slug === slug);
}

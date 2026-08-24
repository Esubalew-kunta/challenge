import { z } from "zod";
import { companyEmail, fullName, phone, phoneCountry } from "./identity";

/**
 * The badge form, validated identically in the browser and on the server.
 *
 * A schema of its own rather than `leadSubmissionSchema`, for one reason that
 * matters: the badge carries the reader's score with it, and a zod object
 * quietly **drops** keys it does not declare. Posting through the shared lead
 * schema stripped `tier`, `points` and the rest before they ever left the
 * browser, so the row would have arrived with no idea which badge it was.
 *
 * The email rule is the site-wide one, imported rather than re-listed. That is
 * exactly how the diagnostic form ended up with its own copy of the free
 * provider list, one entry shorter than everybody else's.
 */
export const badgeSubmissionSchema = z.object({
  name: fullName,
  phone,
  phoneCountry,
  email: companyEmail,

  /** 1 is day 10, 2 is day 20, 3 is the whole course. */
  tier: z.union([z.literal(1), z.literal(2), z.literal(3)]),

  /** Their score at the moment they earned it. Says how engaged the lead is. */
  points: z.number().int().min(0).max(1000).optional(),
  daysDone: z.number().int().min(0).max(30).optional(),
  levelId: z.string().trim().max(40).optional(),

  /** The two answers from the first visit popup, if they gave them. */
  role: z.string().trim().max(80).optional(),
  claudeLevel: z.string().trim().max(40).optional(),

  locale: z.enum(["en", "fr"]).optional(),

  /**
   * Present because the shared form always sends it. Accepted and ignored, so
   * that a value the form adds later cannot fail the whole submission and cost
   * somebody the badge they just earned.
   */
  source: z.string().trim().max(60).optional(),
});

export type BadgeSubmission = z.infer<typeof badgeSubmissionSchema>;

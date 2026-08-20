"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { leadSubmissionSchema } from "@/lib/schemas/lead";
import { LeadGate } from "@/components/shared/lead-gate";
import { t } from "@/lib/ui-strings";
import type { Locale } from "@/lib/i18n";

const GENERIC_ERROR = "Une erreur est survenue. Réessayez dans un instant.";

/**
 * Capture newsletter compacte pour le footer. Poste sur /api/lead avec la
 * source "newsletter". États vivants : focus ring animé, spinner de
 * chargement, succès avec coche qui se trace (pathLength) et pulse vert
 * sobre. Respecte prefers-reduced-motion (états statiques).
 */
export function FooterNewsletter({ locale = "fr" }: { locale?: Locale }) {
  const s = t(locale);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "profile" | "error">(
    "idle",
  );
  const [focused, setFocused] = useState(false);
  // Message d'erreur affiché : la raison précise du refus quand on l'a
  // (adresse perso, email invalide), le message générique en dernier recours.
  const [errorMessage, setErrorMessage] = useState(GENERIC_ERROR);
  const prefersReducedMotion = useReducedMotion();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || status === "loading") return;

    // Validation client avant l'appel réseau : même schéma que les autres
    // formulaires, donc le lead sait immédiatement pourquoi c'est refusé.
    const parsed = leadSubmissionSchema.safeParse({
      email: email.trim(),
      source: "newsletter",
    });
    if (!parsed.success) {
      setErrorMessage(parsed.error.issues[0]?.message ?? GENERIC_ERROR);
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!res.ok) {
        // /api/lead renvoie la raison : soit `details.fieldErrors` (400 Zod),
        // soit `error` (502 relais n8n injoignable).
        const payload = await res.json().catch(() => null);
        const fieldError = payload?.details?.fieldErrors?.email?.[0];
        setErrorMessage(
          fieldError ??
            (typeof payload?.error === "string" ? payload.error : GENERIC_ERROR),
        );
        setStatus("error");
        return;
      }

      // Étape 2 plutôt que l'état final : l'email est acquis, on peut
      // maintenant demander le reste sans risquer l'inscription elle-même.
      setStatus("profile");
    } catch {
      setErrorMessage(GENERIC_ERROR);
      setStatus("error");
    }
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      {status === "done" ? (
        <motion.div
          key="done"
          initial={
            prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }
          }
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          role="status"
          className="flex items-center gap-3 rounded-xl border border-success/25 bg-success/[0.08] px-4 py-3 text-sm font-medium text-success"
        >
          <span className="relative flex size-6 shrink-0 items-center justify-center rounded-full bg-success/15">
            {!prefersReducedMotion && (
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-success/30"
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: 2.2, opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              />
            )}
            <svg viewBox="0 0 24 24" className="size-3.5" aria-hidden="true">
              <motion.path
                d="M4.5 12.5l5 5L19.5 7"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={prefersReducedMotion ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
              />
            </svg>
          </span>
          <span>
            {s.newsletterDone}
          </span>
        </motion.div>
      ) : status === "profile" ? (
        /*
         * Étape 2 — l'identité complète, APRÈS que l'email soit acquis.
         *
         * Le pied de page est sur les 43 pages du site : y exiger d'emblée nom
         * + téléphone + email professionnel coûterait l'essentiel des
         * inscriptions, pour un abonnement et non pour une demande. On prend
         * donc l'email en ligne, puis on propose le reste — le second envoi
         * enrichit la MÊME ligne côté OS, qui déduplique par email.
         *
         * Volontairement sautable : le lead est déjà acquis à ce stade.
         */
        <motion.div
          key="profile"
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <p className="mb-3 text-xs text-[#94A3B8]">{s.newsletterProfilePrompt}</p>
          <LeadGate
            source="newsletter"
            variant="bare"
            context="newsletter-footer"
            ctaLabel={s.newsletterProfileCta}
            prefillEmail={email}
            locale={locale}
            privacyNote=""
            successTitle={s.newsletterProfileDone}
            successMessage={s.newsletterProfileDoneMessage}
          />
          <button
            type="button"
            onClick={() => setStatus("done")}
            className="mt-2 text-xs text-[#94A3B8] underline underline-offset-2 hover:text-foreground"
          >
            {s.newsletterProfileSkip}
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          exit={
            prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -6 }
          }
          transition={{ duration: 0.25, ease: "easeOut" }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-2"
        >
          <div className="flex gap-2">
            <div className="relative min-w-0 flex-1">
              {/* Focus ring animé */}
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute -inset-[3px] rounded-[14px] border-2 border-primary/35"
                initial={false}
                animate={
                  prefersReducedMotion
                    ? { opacity: focused ? 1 : 0 }
                    : {
                        opacity: focused ? 1 : 0,
                        scale: focused ? 1 : 1.015,
                      }
                }
                transition={{ duration: 0.18, ease: "easeOut" }}
              />
              <label htmlFor="footer-newsletter" className="sr-only">
                {s.newsletterEmailLabel}
              </label>
              <input
                id="footer-newsletter"
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  // On efface l'erreur dès la correction : garder le message
                  // affiché pendant que le lead retape est inutilement punitif.
                  if (status === "error") setStatus("idle");
                }}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder={s.newsletterEmailLabel}
                className="relative w-full rounded-xl border border-[#E2E8F0] bg-white px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-[#94A3B8] focus:border-primary/40"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              aria-label={s.newsletterSubmitLabel}
              className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white transition-colors hover:bg-primary/90 disabled:opacity-60"
            >
              {status === "loading" ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <ArrowRight className="size-4" />
              )}
            </button>
          </div>
          {status === "error" ? (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              role="alert"
              className="text-xs text-destructive"
            >
              {errorMessage}
            </motion.p>
          ) : (
            <p className="text-xs text-[#94A3B8]">
              {s.newsletterFootnote}
            </p>
          )}
        </motion.form>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus, X } from "lucide-react";
import type { Formateur } from "@/lib/formations";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/ui-strings";

/** Initiales affichées quand la photo est absente ou ne charge pas. */
function initialesDe(nom: string): string {
  return nom
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

type PhotoFormateurProps = {
  formateur: Formateur;
  /** Classes de taille (ex. "size-12") appliquées au cercle. */
  sizeClass: string;
  /** Taille du texte des initiales de secours. */
  initialsClass: string;
};

/** Photo ronde avec fallback initiales obligatoire (photo manquante ou 404). */
function PhotoFormateur({
  formateur,
  sizeClass,
  initialsClass,
}: PhotoFormateurProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !formateur.photo) {
    return (
      <span
        aria-hidden="true"
        className={`flex shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary ${sizeClass} ${initialsClass}`}
      >
        {initialesDe(formateur.nom)}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={formateur.photo}
      alt={formateur.nom}
      loading="lazy"
      onError={() => setHasError(true)}
      className={`shrink-0 rounded-full object-cover ${sizeClass}`}
    />
  );
}

type FormateursGridProps = {
  formateurs: readonly Formateur[];
  /** Langue du chrome du panneau. Par défaut FR : le rendu français ne bouge pas. */
  locale?: Locale;
};

/**
 * Grille de formateurs interactive : chaque carte est un bouton qui ouvre
 * un panneau détail (photo plus grande, bio, logo entreprise, lien LinkedIn).
 * Fermeture : clic extérieur, Escape ou bouton. Rendu défensif : bio,
 * logo et bouton LinkedIn ne s'affichent que si les données existent.
 */
export function FormateursGrid({
  formateurs,
  locale = "fr",
}: FormateursGridProps) {
  const s = t(locale);
  const prefersReducedMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const panelRef = useRef<HTMLDivElement>(null);

  const selected = openIndex === null ? null : formateurs[openIndex];

  // Escape, focus trap léger, scroll lock et retour du focus au déclencheur.
  useEffect(() => {
    if (openIndex === null) return;

    const trigger = triggerRefs.current[openIndex];
    panelRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenIndex(null);
        return;
      }
      if (event.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const focusables = panel.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [openIndex]);

  const linkedinUrl = selected?.linkedin?.trim() ?? "";

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {formateurs.map((formateur, i) => (
          <button
            key={formateur.nom}
            type="button"
            ref={(el) => {
              triggerRefs.current[i] = el;
            }}
            onClick={() => setOpenIndex(i)}
            aria-haspopup="dialog"
            aria-expanded={openIndex === i}
            className="group flex cursor-pointer items-start gap-4 rounded-2xl border border-border bg-background p-6 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <PhotoFormateur
              formateur={formateur}
              sizeClass="size-12"
              initialsClass="text-sm"
            />
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-semibold text-foreground">
                {formateur.nom}
              </span>
              <span className="block text-xs font-medium text-primary">
                {formateur.role}
              </span>
              {formateur.bio && (
                <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                  {formateur.bio}
                </span>
              )}
            </span>
            <span
              aria-hidden="true"
              className="flex size-6 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary"
            >
              <Plus className="size-3.5" />
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center">
            {/* Fond : clic pour fermer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setOpenIndex(null)}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
            />

            <motion.div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="formateur-dialog-titre"
              tabIndex={-1}
              initial={{
                opacity: 0,
                y: prefersReducedMotion ? 0 : 20,
                scale: prefersReducedMotion ? 1 : 0.96,
              }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{
                opacity: 0,
                y: prefersReducedMotion ? 0 : 12,
                scale: prefersReducedMotion ? 1 : 0.98,
              }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="relative w-full max-w-md rounded-2xl border border-border bg-background p-8 shadow-2xl outline-none"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(null)}
                aria-label={s.formateurClose}
                className="absolute right-4 top-4 flex size-8 cursor-pointer items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-primary"
              >
                <X className="size-4" />
              </button>

              <div className="flex items-center gap-5">
                <PhotoFormateur
                  formateur={selected}
                  sizeClass="size-20"
                  initialsClass="text-xl"
                />
                <div className="min-w-0">
                  <h3
                    id="formateur-dialog-titre"
                    className="text-lg font-bold text-foreground"
                  >
                    {selected.nom}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {selected.role}
                  </p>
                </div>
              </div>

              {selected.bio && (
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {selected.bio}
                </p>
              )}

              {selected.companyLogo && (
                <div className="mt-5 flex items-center gap-3 border-t border-border pt-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selected.companyLogo}
                    alt={`Ancien employeur de ${selected.nom}`}
                    loading="lazy"
                    className="h-8 w-auto object-contain"
                  />
                </div>
              )}

              {linkedinUrl !== "" && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Voir le profil LinkedIn →
                </a>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

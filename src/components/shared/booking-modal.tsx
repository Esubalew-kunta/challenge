"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { bookingUrl } from "@/lib/site-config";
import { hasLeadCaptured } from "@/lib/lead-capture-state";
import { BookingGate } from "@/components/shared/booking-gate";
import type { Locale } from "@/lib/i18n";

const calLink = bookingUrl.replace(/^https:\/\/cal\.com\//, "");

interface BookingCtaButtonProps {
  label?: string;
  children?: React.ReactNode;
  className?: string;
  /** Les CTA de réservation sont rendus sur les pages EN aussi. */
  locale?: Locale;
}

/**
 * Déclencheur de réservation qui garde le lead avant Cal.com.
 *
 * Si le visiteur a déjà laissé ses coordonnées ailleurs sur le site
 * (hasLeadCaptured), le bouton renvoie directement vers Cal.com — pas
 * besoin de redemander. Sinon, il ouvre une modale avec BookingGate :
 * le calendrier ne s'affiche qu'après soumission du formulaire, sans
 * jamais faire quitter la page.
 */
export function BookingCtaButton({ label, children, className, locale = "fr" }: BookingCtaButtonProps) {
  const content = children ?? label;
  const [open, setOpen] = useState(false);
  const [alreadyCaptured, setAlreadyCaptured] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setAlreadyCaptured(hasLeadCaptured());
  }, []);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  useEffect(() => {
    if (!open) return;

    previousFocusRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      const firstField = dialogRef.current?.querySelector<HTMLElement>("input, button");
      firstField?.focus();
    }, 50);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusables = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (e.shiftKey && (active === first || active === dialogRef.current)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  if (alreadyCaptured) {
    return (
      <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <>
      <button type="button" onClick={openModal} className={className}>
        {content}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="booking-modal-title"
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 12 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeModal}
                aria-label="Fermer"
                className="absolute -right-2 -top-2 z-10 rounded-full bg-white p-1.5 text-muted-foreground shadow-md transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>

              <span id="booking-modal-title" className="sr-only">
                Réserver un diagnostic gratuit
              </span>

              <BookingGate
                calLink={calLink}
                title="Réserver un diagnostic gratuit avec Othmane Halim"
                calClassName="h-[560px] rounded-2xl border border-border bg-white shadow-xl"
                context="modal"
                locale={locale}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { bookingUrl } from "@/lib/site-config";
import { hasLeadCaptured } from "@/lib/lead-capture-state";
import { BookingGate } from "@/components/shared/booking-gate";
import type { Locale } from "@/lib/i18n";

const calLink = bookingUrl.replace(/^https:\/\/cal\.com\//, "");

/**
 * Faux sur le serveur, vrai dès l'hydratation.
 *
 * `useSyncExternalStore` plutôt qu'un effet et un setState : la règle
 * `react-hooks/set-state-in-effect` du projet refuse le second, et le premier
 * ne provoque pas de rendu en cascade.
 */
const NEVER_CHANGES = () => () => {};
const useIsClient = () =>
  useSyncExternalStore(
    NEVER_CHANGES,
    () => true,
    () => false,
  );

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
  const isClient = useIsClient();
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

  /*
    La modale est rendue dans `document.body`, pas là où le bouton se trouve.

    Sans ça, `position: fixed` ne se cale pas sur la fenêtre dès qu'un ancêtre
    porte un `transform`, un `filter` ou un `backdrop-filter` : la règle CSS dit
    qu'un tel élément devient le bloc conteneur des descendants fixes. C'est
    exactement ce qui est arrivé au jour 6 du challenge : l'outil est enveloppé
    dans un `ScrollReveal`, qui termine son animation sur `filter: blur(0px)`,
    et `blur(0px)` n'est pas `none`. La modale se retrouvait dessinée à 448 par
    428 pixels au milieu de la page au lieu de couvrir les 1280 par 900 de la
    fenêtre, et l'overlay ne masquait plus rien.

    Un portail règle le cas partout et pour toujours, plutôt que d'interdire aux
    pages de placer un bouton de réservation dans un conteneur animé. C'est
    aussi ce que fait toute bibliothèque de dialogues, pour cette raison.
  */
  const overlay = (
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
  );

  return (
    <>
      <button type="button" onClick={openModal} className={className}>
        {content}
      </button>

      {/*
        `AnimatePresence` reste dans le portail, pas autour : sinon l'animation
        de sortie n'aurait plus rien à jouer, l'arbre entier disparaissant d'un
        coup à la fermeture.
      */}
      {isClient ? createPortal(overlay, document.body) : null}
    </>
  );
}

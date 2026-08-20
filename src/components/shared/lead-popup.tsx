"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { track } from "@vercel/analytics";
import { GeoAuditForm } from "@/components/shared/geo-audit-form";
import { hasLeadCaptured } from "@/lib/lead-capture-state";

/** Clé localStorage : dernière apparition du popup (timestamp ms). */
const POPUP_SEEN_KEY = "aim_popup_seen";
/** Le popup ne réapparaît pas pendant 30 jours après une apparition. */
const SEEN_TTL_MS = 30 * 24 * 60 * 60 * 1000;
/** Desktop : l'intention de sortie n'est écoutée qu'après 8s de présence. */
const EXIT_INTENT_ARM_DELAY_MS = 8_000;
/** Mobile : apparition après 45s. */
const MOBILE_TIMER_MS = 45_000;
/** Mobile : ou après 50% de scroll (premier atteint). */
const MOBILE_SCROLL_RATIO = 0.5;

/** Pages où le popup ne doit jamais apparaître. */
const EXCLUDED_PATHS = [
  "/contact",
  "/diagnostic-ia",
  "/playbook-ia",
  "/outils/audit-geo-gratuit",
];

function isExcludedPath(pathname: string): boolean {
  return EXCLUDED_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );
}

function hasSeenRecently(): boolean {
  try {
    const raw = window.localStorage.getItem(POPUP_SEEN_KEY);
    if (!raw) return false;
    const seenAt = Number(raw);
    // Valeur illisible : on considère le popup comme vu (prudence).
    if (Number.isNaN(seenAt)) return true;
    return Date.now() - seenAt < SEEN_TTL_MS;
  } catch {
    return false;
  }
}

function markSeen(): void {
  try {
    window.localStorage.setItem(POPUP_SEEN_KEY, String(Date.now()));
  } catch {
    // localStorage indisponible : non bloquant.
  }
}

export function LeadPopup() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const pathnameRef = useRef(pathname);
  const triggeredRef = useRef(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  pathnameRef.current = pathname;

  const openPopup = useCallback(() => {
    if (triggeredRef.current) return;
    // Garde-fous revérifiés au moment du déclenchement (navigation, autre onglet).
    if (isExcludedPath(pathnameRef.current)) return;
    if (hasSeenRecently() || hasLeadCaptured()) return;
    triggeredRef.current = true;
    markSeen();
    track("popup_shown", { source: "geo-audit" });
    setOpen(true);
  }, []);

  const closePopup = useCallback(() => {
    setOpen(false);
  }, []);

  // Déclencheurs : exit intent (desktop) / 45s ou 50% de scroll (mobile).
  useEffect(() => {
    if (hasSeenRecently() || hasLeadCaptured()) return;

    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window;
    const cleanups: Array<() => void> = [];

    if (isTouch) {
      const timer = window.setTimeout(openPopup, MOBILE_TIMER_MS);
      cleanups.push(() => window.clearTimeout(timer));

      const onScroll = () => {
        const scrollable =
          document.documentElement.scrollHeight - window.innerHeight;
        if (scrollable <= 0) return;
        if (window.scrollY / scrollable >= MOBILE_SCROLL_RATIO) {
          openPopup();
        }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanups.push(() => window.removeEventListener("scroll", onScroll));
    } else {
      let armed = false;
      const armTimer = window.setTimeout(() => {
        armed = true;
      }, EXIT_INTENT_ARM_DELAY_MS);
      cleanups.push(() => window.clearTimeout(armTimer));

      const onMouseLeave = (e: MouseEvent) => {
        // Sortie par le haut du viewport uniquement (vers la barre d'URL / onglets).
        if (armed && e.clientY <= 0) {
          openPopup();
        }
      };
      document.documentElement.addEventListener("mouseleave", onMouseLeave);
      cleanups.push(() =>
        document.documentElement.removeEventListener(
          "mouseleave",
          onMouseLeave,
        ),
      );
    }

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [openPopup]);

  // Ouverture : mémoriser le focus, verrouiller le scroll, focus sur le dialog.
  useEffect(() => {
    if (!open) return;

    previousFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      const firstField =
        dialogRef.current?.querySelector<HTMLElement>("input, button");
      firstField?.focus();
    }, 50);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus();
    };
  }, [open]);

  // Escape + focus trap léger.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closePopup();
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
  }, [open, closePopup]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
          onClick={closePopup}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-popup-title"
            initial={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.95, y: 12 }
            }
            animate={
              prefersReducedMotion
                ? { opacity: 1 }
                : { opacity: 1, scale: 1, y: 0 }
            }
            exit={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.95, y: 12 }
            }
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closePopup}
              aria-label="Fermer"
              className="absolute right-4 top-4 rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Audit gratuit
            </span>

            <h2
              id="lead-popup-title"
              className="mt-4 text-2xl font-bold leading-tight text-foreground"
            >
              Que disent les IA de votre entreprise ?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              ChatGPT répond déjà aux questions de vos clients. Découvrez ce
              qu&apos;il dit de vous, et de vos concurrents.
            </p>

            <div className="mt-6">
              <GeoAuditForm context="popup" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

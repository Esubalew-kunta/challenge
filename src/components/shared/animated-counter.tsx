"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { useInView, useReducedMotion } from "framer-motion";

type AnimatedCounterProps = {
  target: number;
  suffix?: string;
  prefix?: string;
  /** Durée de l'animation en secondes. */
  duration?: number;
  /** Nombre de décimales affichées (ex. 1 pour "9,3"). */
  decimals?: number;
  label: string;
  darkMode?: boolean;
  /**
   * Locale de FORMATAGE du nombre. Le compteur formatait en `fr-FR` en dur,
   * donc les pages anglaises affichaient « 9,6 » au lieu de « 9.6 » et
   * « 10 000 » au lieu de « 10,000 » — virgule décimale et espace insécable
   * français sur tout le site EN.
   */
  locale?: Locale;
};

export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 0.7,
  decimals = 0,
  label,
  darkMode = false,
  locale = "fr",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();

  // SEO/GEO critique : le rendu initial (SSR + avant hydratation/intersection)
  // affiche LA VALEUR FINALE. Google et les moteurs IA lisent la vraie donnée,
  // jamais un zéro. L'animation, purement décorative, ne démarre qu'au moment
  // où le compteur entre dans le viewport.
  const [count, setCount] = useState(target);
  // Flou pendant le décompte : le chiffre défile flouté puis atterrit net
  // (jamais actif au rendu initial — le SSR reste toujours parfaitement net).
  const [isSettling, setIsSettling] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;

    // Reduced motion : on ne touche à rien, la valeur finale est déjà affichée.
    if (prefersReducedMotion) {
      hasAnimated.current = true;
      setCount(target);
      return;
    }

    hasAnimated.current = true;
    setIsSettling(true);

    const factor = Math.pow(10, decimals);
    let startTime: number | null = null;
    let animationFrame: number | undefined;

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
        // Dès le premier frame, on relâche le flou : la transition CSS le
        // dissipe sur toute la durée du décompte → le chiffre atterrit net
        // exactement au moment où la valeur finale se pose.
        setIsSettling(false);
      }
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      if (progress >= 1) {
        // Atterrissage : le dernier frame vaut EXACTEMENT la cible
        // (pas d'arrondi flottant → jamais 199 au lieu de 200).
        setCount(target);
        setIsSettling(false);
        return;
      }

      const eased = 1 - Math.pow(1 - progress, 3); // easeOut cubique
      setCount(Math.floor(eased * target * factor) / factor);
      animationFrame = requestAnimationFrame(animate);
    };

    // Démarrage immédiat à l'intersection : le premier frame repart de 0
    // et l'animation atterrit sur la cible en < 1 s — pas de flash figé.
    setCount(0);
    animationFrame = requestAnimationFrame(animate);

    // Filet de sécurité : si le rAF est coupé (onglet en arrière-plan,
    // throttling), la valeur finale est posée quoi qu'il arrive.
    const failSafe = setTimeout(() => {
      setCount(target);
      setIsSettling(false);
    }, duration * 1000 + 500);

    return () => {
      if (animationFrame !== undefined) cancelAnimationFrame(animationFrame);
      clearTimeout(failSafe);
    };
  }, [isInView, target, duration, decimals, prefersReducedMotion]);

  // Séparateurs de la langue : "9,3" et "10 000" en français, "9.3" et
  // "10,000" en anglais.
  const formatted = new Intl.NumberFormat(locale === "en" ? "en-US" : "fr-FR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(count);

  return (
    <div ref={ref} className="text-center">
      <p
        className={`text-4xl font-bold md:text-5xl ${darkMode ? "text-white" : "text-foreground"}`}
        style={{
          fontVariantNumeric: "tabular-nums",
          // Mécanisme "animate digits" : flou posé instantanément au départ
          // (transition none), puis dissipé progressivement pendant tout le
          // décompte — le chiffre défile flouté et atterrit parfaitement net.
          filter: isSettling ? "blur(5px)" : "blur(0px)",
          transition: isSettling ? "none" : `filter ${duration}s ease-out`,
        }}
        aria-live="polite"
      >
        <span className={darkMode ? "text-white" : "text-gradient-blue"}>
          {prefix}
          {formatted}
          {suffix}
        </span>
      </p>
      <p
        className={`mt-2 text-sm ${darkMode ? "text-white/50" : "text-muted-foreground"}`}
      >
        {label}
      </p>
    </div>
  );
}

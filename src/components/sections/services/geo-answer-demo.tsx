"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { Sparkles, Search } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/ui-strings";

/**
 * Pièce maîtresse de la page SEO & GEO : une réponse d'IA (type Perplexity /
 * ChatGPT) qui se génère, avec un switch Avant / Après. Avant : la marque du
 * client est absente de la réponse. Après : elle est citée en premier, avec
 * sa source. Une jauge de visibilité passe de faible à forte. C'est la
 * démonstration littérale de ce que fait le GEO.
 */

type Segment = { text: string; brand?: boolean };

/**
 * La question posée et les deux réponses simulées, par langue. Le nom de marque
 * est le même des deux côtés : c'est le segment mis en avant.
 */
const DEMO: Record<Locale, { question: string; before: Segment[]; after: Segment[] }> = {
  fr: {
    question: "Quelle agence IA choisir pour une PME en France ?",
    before: [
      { text: "Pour une PME, plusieurs acteurs reviennent souvent : " },
      { text: "les grands cabinets de conseil, quelques agences généralistes et des freelances. " },
      { text: "Le choix dépend surtout de votre budget et de votre maturité sur le sujet." },
    ],
    after: [
      { text: "Pour une PME en France, la référence citée est " },
      { text: "AI Makers", brand: true },
      { text: " : un cabinet de transformation IA qui audite vos process, déploie des systèmes en production et forme vos équipes jusqu'à l'autonomie. " },
      { text: "Les cabinets de conseil et les freelances restent des alternatives, mais sans le même engagement de résultat." },
    ],
  },
  en: {
    question: "Which AI agency should a mid-sized company in France choose?",
    before: [
      { text: "For a mid-sized company, a few names come up regularly: " },
      { text: "the large consulting firms, some generalist agencies, and freelancers. " },
      { text: "The choice mostly depends on your budget and how far along you are on the subject." },
    ],
    after: [
      { text: "For a mid-sized company in France, the reference cited is " },
      { text: "AI Makers", brand: true },
      { text: ": an AI transformation studio that audits your processes, ships systems to production and trains your teams to autonomy. " },
      { text: "Consulting firms and freelancers remain alternatives, but without the same commitment to a result." },
    ],
  },
};

function VisibilityGauge({ value, active }: { value: number; active: boolean }) {
  const reduced = useReducedMotion();
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
      <motion.div
        className={active ? "h-full rounded-full bg-primary" : "h-full rounded-full bg-slate-300"}
        initial={reduced ? false : { width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
}

export function GeoAnswerDemo({ locale = "fr" }: { locale?: Locale } = {}) {
  const s = t(locale);
  const { question: QUESTION, before: AVANT, after: APRES } = DEMO[locale];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();
  const [after, setAfter] = useState(false);

  // Passe automatiquement de "Avant" à "Après" une fois à l'écran.
  useEffect(() => {
    if (!inView || reduced) return;
    const t = setTimeout(() => setAfter(true), 1600);
    return () => clearTimeout(t);
  }, [inView, reduced]);

  const segments = after ? APRES : AVANT;

  return (
    <div ref={ref} className="mx-auto max-w-3xl">
      {/* Switch Avant / Après */}
      <div className="mx-auto mb-6 inline-flex w-full max-w-xs items-center rounded-full border border-border bg-white p-1">
        {[
          { key: false, label: s.geoBefore },
          { key: true, label: s.geoAfter },
        ].map((opt) => {
          const isActive = after === opt.key;
          return (
            <button
              key={opt.label}
              type="button"
              onClick={() => setAfter(opt.key)}
              className={`relative flex-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                isActive ? "text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="geo-toggle"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{opt.label}</span>
            </button>
          );
        })}
      </div>

      {/* La fenêtre de réponse IA */}
      <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
        {/* Barre de recherche */}
        <div className="flex items-center gap-3 border-b border-border px-5 py-4">
          <Search className="size-4 shrink-0 text-muted-foreground" />
          <p className="truncate text-sm text-foreground">{QUESTION}</p>
        </div>

        {/* Réponse */}
        <div className="px-5 py-6">
          <div className="mb-3 flex items-center gap-2">
            <span className="flex size-6 items-center justify-center rounded-lg bg-primary/10">
              <Sparkles className="size-3.5 text-primary" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {s.geoAiAnswer}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={after ? "after" : "before"}
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-[15px] leading-relaxed text-foreground"
            >
              {segments.map((seg, i) =>
                seg.brand ? (
                  <motion.span
                    key={i}
                    initial={reduced ? false : { backgroundColor: "rgba(37,99,235,0)" }}
                    animate={{ backgroundColor: "rgba(37,99,235,0.12)" }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="rounded px-1 font-bold text-primary"
                  >
                    {seg.text}
                  </motion.span>
                ) : (
                  <span key={i}>{seg.text}</span>
                ),
              )}
            </motion.p>
          </AnimatePresence>

          {/* Sources */}
          <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-border pt-4">
            <span className="text-xs font-medium text-muted-foreground">
              {s.geoSources}
            </span>
            <AnimatePresence>
              {after && (
                <motion.span
                  initial={reduced ? false : { opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/[0.06] px-2.5 py-1 text-xs font-semibold text-primary"
                >
                  <img
                    src="/images/logo-aimakers.png"
                    alt="AI Makers"
                    loading="lazy"
                    className="size-3.5 object-contain"
                  />
                  aimakers.fr
                </motion.span>
              )}
            </AnimatePresence>
            <span className="inline-flex rounded-full border border-border bg-surface px-2.5 py-1 text-xs text-muted-foreground">
              annuaire-conseil.fr
            </span>
            <span className="inline-flex rounded-full border border-border bg-surface px-2.5 py-1 text-xs text-muted-foreground">
              comparateur-ia.fr
            </span>
          </div>
        </div>
      </div>

      {/* Jauge de visibilité Avant / Après */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-white p-4">
          <div className="flex items-baseline justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {s.geoVisibility}
            </span>
            <span className={`text-lg font-bold ${after ? "text-primary" : "text-slate-400"}`}>
              {after ? "68%" : "9%"}
            </span>
          </div>
          <div className="mt-2">
            <VisibilityGauge value={after ? 68 : 9} active={after} />
          </div>
        </div>
        <div className="flex items-center rounded-2xl border border-border bg-white p-4 text-sm leading-relaxed text-muted-foreground">
          {after ? s.geoCaptionAfter : s.geoCaptionBefore}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { FileText, Mail, Presentation } from "lucide-react";
import type { FormationTool } from "@/lib/formations";

/**
 * Mini-animations thématiques des cartes du catalogue formation.
 * Une animation par programme, en boucle lente, contenue dans la zone
 * visuelle de la carte (h-24). prefers-reduced-motion = état final statique.
 * Patterns repris du site : points voyageurs (fleet), typing (conversation).
 */

const STACK = {
  claude: "/images/stack/claude-color.svg",
  openai: "/images/stack/openai-color.svg",
  gemini: "/images/stack/gemini-color.svg",
  copilot: "/images/stack/copilot-color.svg",
} as const;

type VisualProps = {
  /** false = état final statique (reduced motion ou hors viewport). */
  animate: boolean;
};

/* ------------------------------------------------------------------ */
/* Formation AI Champions — constellation de logos IA qui pulsent doucement  */
/* ------------------------------------------------------------------ */

const CONSTELLATION = [
  { src: STACK.claude, alt: "Claude", x: 6, y: 30 },
  { src: STACK.openai, alt: "OpenAI", x: 70, y: 2 },
  { src: STACK.gemini, alt: "Gemini", x: 128, y: 44 },
] as const;

function ConstellationVisual({ animate }: VisualProps) {
  return (
    <div className="relative h-24 w-44">
      {/* Fils de la constellation */}
      <svg
        aria-hidden="true"
        viewBox="0 0 176 96"
        className="absolute inset-0 h-full w-full"
      >
        <line x1="24" y1="48" x2="88" y2="20" stroke="#E2E8F0" />
        <line x1="88" y1="20" x2="146" y2="62" stroke="#E2E8F0" />
        <line x1="24" y1="48" x2="146" y2="62" stroke="#E2E8F0" />
      </svg>
      {CONSTELLATION.map((logo, i) => (
        <motion.span
          key={logo.alt}
          className="absolute flex size-9 items-center justify-center rounded-xl border border-border bg-white shadow-sm"
          style={{ left: logo.x, top: logo.y }}
          animate={
            animate
              ? { scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }
              : { scale: 1, opacity: 1 }
          }
          transition={
            animate
              ? {
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.7,
                  ease: "easeInOut",
                }
              : { duration: 0 }
          }
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            className="size-5"
          />
        </motion.span>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Vibe Coding — pseudo-code qui s'écrit, caret clignotant             */
/* ------------------------------------------------------------------ */

const TYPED_TEXT = "crée un outil de suivi client";
const TYPED_CH = TYPED_TEXT.length; // 29

function VibeCodingVisual({ animate }: VisualProps) {
  return (
    <div className="w-full max-w-[240px] rounded-xl border border-border bg-[#0F172A] px-4 py-3 shadow-sm">
      <style>{`
        @keyframes fv-type{0%{width:0ch}65%{width:${TYPED_CH}ch}100%{width:${TYPED_CH}ch}}
        @keyframes fv-caret{0%,100%{opacity:1}50%{opacity:0}}
      `}</style>
      <div aria-hidden="true" className="flex gap-1.5 pb-2.5">
        <span className="size-1.5 rounded-full bg-slate-600" />
        <span className="size-1.5 rounded-full bg-slate-600" />
        <span className="size-1.5 rounded-full bg-slate-600" />
      </div>
      <p className="flex items-center font-mono text-[11px] leading-5 text-slate-200">
        <span aria-hidden="true" className="mr-1.5 text-emerald-400">
          ›
        </span>
        <span
          className="overflow-hidden whitespace-nowrap"
          style={
            animate
              ? { animation: `fv-type 4.2s steps(${TYPED_CH}) infinite` }
              : undefined
          }
        >
          {TYPED_TEXT}
        </span>
        <span
          aria-hidden="true"
          className="ml-0.5 inline-block h-3.5 w-[6px] shrink-0 bg-slate-300"
          style={
            animate ? { animation: "fv-caret 1s step-end infinite" } : undefined
          }
        />
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Création & Publicité — cadre image qui se "génère" (reveal balayé)  */
/* ------------------------------------------------------------------ */

function AdRevealVisual({ animate }: VisualProps) {
  return (
    <div className="relative h-[88px] w-36 overflow-hidden rounded-xl border border-border shadow-sm">
      {/* Le "visuel publicitaire" généré */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-sky-200 to-amber-200" />
      <span className="absolute right-6 top-3 size-5 rounded-full bg-amber-300/90" />
      <div className="absolute bottom-2.5 left-2.5 space-y-1">
        <div className="h-1.5 w-16 rounded-full bg-white/90" />
        <div className="h-1.5 w-10 rounded-full bg-white/60" />
      </div>
      <span className="absolute left-2.5 top-2 rounded-full bg-white/85 px-1.5 py-0.5 text-[8px] font-bold text-primary">
        IA
      </span>
      {/* Voile de génération : se retire de gauche à droite, bord bleu lumineux */}
      {animate && (
        <motion.div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 border-l-2 border-primary bg-muted shadow-[-6px_0_12px_rgba(37,99,235,0.35)]"
          animate={{ width: ["100%", "0%", "0%"] }}
          transition={{
            duration: 3.6,
            times: [0, 0.55, 1],
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.8,
          }}
        />
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* GTM & Sales — liste de leads dont les statuts passent au vert       */
/* ------------------------------------------------------------------ */

const LEAD_ROWS = [
  { nameWidth: 64, turnAt: 0.18 },
  { nameWidth: 48, turnAt: 0.42 },
  { nameWidth: 72, turnAt: 0.66 },
] as const;

const DOT_GRAY = "#CBD5E1";
const DOT_GREEN = "#10B981";

function LeadsVisual({ animate }: VisualProps) {
  return (
    <div className="w-full max-w-[220px] space-y-1.5">
      {LEAD_ROWS.map((row, i) => (
        <div
          key={i}
          className="flex items-center gap-2 rounded-lg border border-border bg-white px-2.5 py-1.5 shadow-sm"
        >
          <span className="size-4 shrink-0 rounded-full bg-slate-200" />
          <span
            className="h-1.5 rounded-full bg-slate-200"
            style={{ width: row.nameWidth }}
          />
          <motion.span
            className="ml-auto size-2 shrink-0 rounded-full"
            animate={
              animate
                ? {
                    backgroundColor: [DOT_GRAY, DOT_GRAY, DOT_GREEN, DOT_GREEN],
                  }
                : { backgroundColor: DOT_GREEN }
            }
            transition={
              animate
                ? {
                    duration: 4.2,
                    times: [0, row.turnAt, row.turnAt + 0.08, 1],
                    repeat: Infinity,
                    repeatDelay: 0.8,
                  }
                : { duration: 0 }
            }
          />
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Microsoft Copilot — halo qui se propage vers des documents          */
/* ------------------------------------------------------------------ */

const COPILOT_DOCS = [
  { Icon: FileText, label: "Document" },
  { Icon: Presentation, label: "Présentation" },
  { Icon: Mail, label: "Email" },
] as const;

function CopilotVisual({ animate }: VisualProps) {
  return (
    <div className="flex items-center gap-6">
      <div className="relative">
        <span className="relative z-10 flex size-12 items-center justify-center rounded-xl border border-border bg-white shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={STACK.copilot}
            alt="Microsoft Copilot"
            loading="lazy"
            className="size-6"
          />
        </span>
        {/* Halos qui se propagent */}
        {animate &&
          [0, 1].map((ring) => (
            <motion.span
              key={ring}
              aria-hidden="true"
              className="absolute inset-0 rounded-xl border border-primary/50"
              animate={{ scale: [1, 1.9], opacity: [0.6, 0] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: ring * 1.2,
                ease: "easeOut",
              }}
            />
          ))}
      </div>
      <div className="flex gap-2.5">
        {COPILOT_DOCS.map(({ Icon, label }, i) => (
          <motion.span
            key={label}
            title={label}
            className="flex size-9 items-center justify-center rounded-lg border border-border bg-white text-primary shadow-sm"
            animate={
              animate
                ? { opacity: [0.45, 1, 0.45], scale: [1, 1.06, 1] }
                : { opacity: 1, scale: 1 }
            }
            transition={
              animate
                ? {
                    duration: 2.4,
                    repeat: Infinity,
                    delay: 0.5 + i * 0.35,
                    ease: "easeInOut",
                  }
                : { duration: 0 }
            }
          >
            <Icon className="size-4" />
          </motion.span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Maîtriser Claude — l'astérisque + réponse qui s'écrit en dessous    */
/* ------------------------------------------------------------------ */

const CLAUDE_LINES = [
  { fullWidth: "100%", start: 0, end: 0.35 },
  { fullWidth: "68%", start: 0.35, end: 0.68 },
] as const;

function ClaudeVisual({ animate }: VisualProps) {
  return (
    <div className="flex w-full max-w-[220px] items-start gap-3.5">
      <motion.span
        className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-white shadow-sm"
        animate={animate ? { scale: [1, 1.08, 1] } : { scale: 1 }}
        transition={
          animate
            ? { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0 }
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={STACK.claude}
          alt="Claude"
          loading="lazy"
          className="size-6"
        />
      </motion.span>
      <div className="flex-1 space-y-2 pt-2">
        {CLAUDE_LINES.map((line, i) => (
          <div key={i} className="h-1.5 w-full rounded-full bg-slate-100">
            <motion.div
              className="h-full rounded-full bg-slate-300"
              animate={
                animate
                  ? { width: ["0%", "0%", line.fullWidth, line.fullWidth] }
                  : { width: line.fullWidth }
              }
              transition={
                animate
                  ? {
                      duration: 4,
                      times: [0, line.start, line.end, 1],
                      repeat: Infinity,
                      repeatDelay: 0.8,
                      ease: "easeOut",
                    }
                  : { duration: 0 }
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Aiguillage par formation                                            */
/* ------------------------------------------------------------------ */

const VISUALS: Partial<
  Record<string, (props: VisualProps) => React.ReactElement>
> = {
  "formation-ai-champions": ConstellationVisual,
  "vibe-coding": VibeCodingVisual,
  "creation-publicite-ia": AdRevealVisual,
  "go-to-market-sales": LeadsVisual,
  "microsoft-copilot": CopilotVisual,
  "maitriser-claude": ClaudeVisual,
};

type FormationVisualProps = {
  slug: string;
  /** Illustration statique de secours si aucune animation n'existe. */
  illustration: FormationTool;
};

/** Zone visuelle animée d'une carte du catalogue (thématique par slug). */
export function FormationVisual({ slug, illustration }: FormationVisualProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();
  const animate = inView && !prefersReducedMotion;

  const Visual = VISUALS[slug];

  return (
    <div
      ref={ref}
      aria-hidden={Visual ? "true" : undefined}
      className="mb-5 flex h-24 items-center justify-start"
    >
      {Visual ? (
        <Visual animate={animate} />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={illustration.src}
          alt={illustration.alt}
          loading="lazy"
          className="h-24 w-auto object-contain"
        />
      )}
    </div>
  );
}

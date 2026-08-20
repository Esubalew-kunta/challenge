"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, Check, Minus, Server, UserRound, X } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { HOMEPAGE } from "@/lib/homepage-locale";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";


/**
 * Section comparatif : la punchline "Pas un cabinet. Pas une agence."
 * + le tableau des options (colonne AI Makers balayée de bleu) + la rareté.
 * Extraite de la section "Pourquoi AI Makers" pour être rendue en fin de page.
 */
export function ComparisonSection({ locale = "fr" }: { locale?: Locale } = {}) {
  const { valueProp } = HOMEPAGE[locale];
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl md:text-4xl">
              {valueProp.optionsPunchline.line1}
            </h3>
            <p className="mt-3 text-lg text-muted-foreground">
              {valueProp.optionsPunchline.line2}
            </p>
          </div>
        </ScrollReveal>

        <OptionsComparison />
      </div>
    </section>
  );
}

/**
 * Le tableau comparatif seul (mobile cards + desktop table), sans le wrapper
 * section ni la punchline. Réutilisable comme contenu de section signature
 * sur les pages services (ex. /agence-ia).
 */
export function OptionsComparison({
  locale = "fr",
}: { locale?: Locale } = {}) {
  return (
    <>
      {/* Mobile : une carte par critère, la ligne AI Makers surlignée */}
      <ScrollReveal delay={0.1}>
        <OptionsCards locale={locale} />
      </ScrollReveal>

      {/* Desktop : le tableau des options */}
      <ScrollReveal delay={0.1}>
        <OptionsTable locale={locale} />
      </ScrollReveal>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Le tableau des options : critères à gauche, alternatives grises,    */
/* colonne AI Makers balayée de bleu quand elle entre à l'écran.       */
/* ------------------------------------------------------------------ */

const GRID_COLS =
  "grid grid-cols-[140px_repeat(4,minmax(116px,1fr))_minmax(168px,1.2fr)]";

function CellMark({ mark }: { mark: "yes" | "no" | "meh" }) {
  if (mark === "yes")
    return (
      <span className="flex size-4.5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
        <Check className="size-3" />
      </span>
    );
  if (mark === "no")
    return (
      <span className="flex size-4.5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400">
        <X className="size-3" />
      </span>
    );
  return (
    <span className="flex size-4.5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400">
      <Minus className="size-3" />
    </span>
  );
}

function ColumnHead({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 px-3 py-4 text-center">
      {icon === "briefcase" && (
        <Briefcase className="size-5 text-muted-foreground/60" />
      )}
      {icon === "server" && (
        <Server className="size-5 text-muted-foreground/60" />
      )}
      {icon === "user" && (
        <UserRound className="size-5 text-muted-foreground/60" />
      )}
      {icon === "logos" && (
        <span className="flex items-center gap-1.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/stack/openai-color.svg"
            alt=""
            className="size-5 object-contain"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/stack/copilot-color.svg"
            alt=""
            className="size-5 object-contain"
          />
        </span>
      )}
      {icon === "aimakers" && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src="/images/logo-aimakers.png"
          alt="AI Makers"
          className="size-6 object-contain"
        />
      )}
      <p
        className={cn(
          "text-[12px] font-semibold leading-tight",
          icon === "aimakers" ? "text-primary" : "text-muted-foreground",
        )}
      >
        {label}
      </p>
    </div>
  );
}

/** Badge "Maximum 3 nouveaux clients par mois" (rareté réelle). */
function ScarcityBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-3 py-1.5 text-[11px] font-semibold text-primary">
      <span className="relative flex size-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/50" />
        <span className="relative inline-flex size-2 rounded-full bg-primary" />
      </span>
      {label}
    </span>
  );
}

/** Mobile : une carte empilée par critère (pattern de la page FDE). */
function OptionsCards({ locale }: { locale: Locale }) {
  const { columns, rows, scarcity } = HOMEPAGE[locale].valueProp.optionsTable;

  return (
    <div className="mx-auto mt-10 max-w-lg space-y-5 md:hidden">
      {rows.map((row) => (
        <div key={row.label} className="glass-card rounded-2xl p-5">
          <p className="text-sm font-semibold text-foreground">{row.label}</p>
          <dl className="mt-4 space-y-2.5">
            {row.cells.map((cell, j) => {
              const isAim = j === row.cells.length - 1;
              return (
                <div
                  key={j}
                  className={cn(
                    "rounded-lg px-4 py-3",
                    isAim
                      ? "border border-primary bg-primary/5"
                      : "border border-border bg-white/60",
                  )}
                >
                  <dt
                    className={cn(
                      "text-xs font-semibold uppercase tracking-wide",
                      isAim ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    {columns[j]?.label}
                  </dt>
                  <dd
                    className={cn(
                      "mt-1 flex items-start gap-2 text-sm leading-relaxed",
                      isAim
                        ? "font-medium text-foreground"
                        : "text-muted-foreground",
                    )}
                  >
                    <span className="mt-0.5">
                      <CellMark mark={cell.mark as "yes" | "no" | "meh"} />
                    </span>
                    {cell.text}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      ))}

      <div className="flex justify-center pt-1">
        <ScarcityBadge label={scarcity} />
      </div>
    </div>
  );
}

function OptionsTable({ locale }: { locale: Locale }) {
  const prefersReducedMotion = useReducedMotion();
  const { columns, rows, scarcity } = HOMEPAGE[locale].valueProp.optionsTable;

  return (
    <div className="mt-10 hidden overflow-x-auto pb-2 md:block">
      <div className="relative mx-auto min-w-[960px] max-w-5xl">
        {/* Le balayage bleu de la colonne AI Makers */}
        <div
          aria-hidden
          className={cn("pointer-events-none absolute inset-0", GRID_COLS)}
        >
          <div className="col-start-6">
            <motion.div
              initial={prefersReducedMotion ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.35 }}
              className="h-full origin-top rounded-2xl bg-primary/[0.05] ring-2 ring-primary/25"
            />
          </div>
        </div>

        {/* En-têtes */}
        <div className={cn(GRID_COLS, "items-end border-b border-border")}>
          <div />
          {columns.map((col) => (
            <ColumnHead key={col.key} icon={col.icon} label={col.label} />
          ))}
        </div>

        {/* Lignes */}
        {rows.map((row, i) => (
          <motion.div
            key={row.label}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
            className={cn(
              GRID_COLS,
              "items-center border-b border-border/60 last:border-b-0",
            )}
          >
            <p className="px-2 py-4 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground">
              {row.label}
            </p>
            {row.cells.map((cell, j) => {
              const isAim = j === row.cells.length - 1;
              return (
                <div key={j} className="flex items-start gap-2 px-3 py-4">
                  <CellMark mark={cell.mark as "yes" | "no" | "meh"} />
                  <p
                    className={cn(
                      "text-[13px] leading-snug",
                      isAim
                        ? "font-semibold text-foreground"
                        : "text-muted-foreground",
                    )}
                  >
                    {cell.text}
                  </p>
                </div>
              );
            })}
          </motion.div>
        ))}

        {/* Verdict : la rareté réelle, dans la colonne gagnante */}
        <div className={cn(GRID_COLS, "items-center")}>
          <div className="col-span-5" />
          <div className="px-3 py-4">
            <ScarcityBadge label={scarcity} />
          </div>
        </div>
      </div>
    </div>
  );
}

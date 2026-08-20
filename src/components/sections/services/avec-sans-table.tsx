"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Check, X } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/ui-strings";

/**
 * Tableau « Avec / Sans AI Makers » (retiré de la home, réutilisé ici).
 * La colonne Avec se remplit d'un balayage bleu ; les lignes arrivent en
 * cascade. Un seul geste fort, couleur = le bleu de marque sur la bonne colonne.
 */

type AvecSansTableProps = {
  withUs: readonly string[];
  without: readonly string[];
  locale?: Locale;
};

export function AvecSansTable({
  withUs,
  without,
  locale = "fr",
}: AvecSansTableProps) {
  const s = t(locale);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();
  const rows = Math.max(withUs.length, without.length);

  return (
    <div ref={ref} className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
      {/* Sans accompagnement */}
      <div className="rounded-3xl border border-border bg-white p-7">
        <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          {s.tableWithout}
        </p>
        <ul className="mt-6 space-y-4">
          {without.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -8 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: reduced ? 0 : 0.15 + i * 0.1 }}
              className="flex items-start gap-3"
            >
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-muted">
                <X className="size-3 text-muted-foreground" />
              </span>
              <span className="text-sm leading-relaxed text-muted-foreground">
                {item}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Avec AI Makers — balayage bleu */}
      <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-white p-7 ring-1 ring-primary/10">
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 origin-top bg-primary/[0.04]"
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: reduced ? 0 : 0.8, ease: "easeOut" }}
        />
        <div className="relative">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {s.tableWith}
          </p>
          <ul className="mt-6 space-y-4">
            {withUs.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -8 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: reduced ? 0 : 0.4 + i * 0.12 }}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="size-3 text-primary" />
                </span>
                <span className="text-sm font-medium leading-relaxed text-foreground">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <span className="sr-only">{rows} points de comparaison</span>
    </div>
  );
}

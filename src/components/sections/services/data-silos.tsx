"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Database, Factory, ShoppingCart, Bot } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/ui-strings";

/**
 * Animation signature de la page Plateforme Data & IA : « Les silos qui se
 * branchent ». Trois systèmes en silo dont les flux descendent et fusionnent
 * dans un socle qui s'empile couche par couche (Bronze, Silver, Gold), puis
 * des agents s'allument au-dessus et tirent depuis la couche Gold.
 */

/**
 * « Bronze / Silver / Gold » et « ERP » sont des termes d'architecture,
 * identiques dans les deux langues : seules les descriptions se traduisent.
 */
function silosFor(s: ReturnType<typeof t>) {
  return [
    { icon: Factory, label: s.dataSiloProduction },
    { icon: Database, label: "ERP" },
    { icon: ShoppingCart, label: s.dataSiloCommercial },
  ];
}

function layersFor(s: ReturnType<typeof t>) {
  return [
    { name: "Bronze", desc: s.dataBronzeDesc, color: "#B45309", bg: "#FEF3E2" },
    { name: "Silver", desc: s.dataSilverDesc, color: "#64748B", bg: "#F1F5F9" },
    { name: "Gold", desc: s.dataGoldDesc, color: "#B8860B", bg: "#FEF9E7" },
  ];
}

export function DataSilos({ locale = "fr" }: { locale?: Locale } = {}) {
  const s = t(locale);
  const silos = silosFor(s);
  const layers = layersFor(s);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();

  return (
    <div ref={ref} className="mx-auto max-w-3xl">
      {/* Silos */}
      <div className="grid grid-cols-3 gap-4">
        {silos.map((silo, i) => (
          <motion.div
            key={silo.label}
            initial={reduced ? false : { opacity: 0, y: -12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: reduced ? 0 : i * 0.12 }}
            className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-white p-4 shadow-sm"
          >
            <silo.icon className="size-6 text-primary" />
            <span className="text-xs font-semibold text-foreground">
              {silo.label}
            </span>
            <span className="text-[11px] text-muted-foreground">{s.dataSiloed}</span>
          </motion.div>
        ))}
      </div>

      {/* Flux qui descendent et fusionnent */}
      <div className="relative mx-auto h-12 w-full max-w-md">
        {[20, 50, 80].map((left, i) => (
          <div
            key={left}
            className="absolute top-0 h-full w-px bg-gradient-to-b from-primary/40 to-primary/10"
            style={{ left: `${left}%` }}
          >
            {!reduced && (
              <motion.span
                aria-hidden="true"
                className="absolute left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_8px_1px] shadow-primary/50"
                initial={{ top: "0%", opacity: 0 }}
                animate={inView ? { top: ["0%", "100%"], opacity: [0, 1, 1, 0] } : {}}
                transition={{
                  duration: 1.2,
                  delay: 0.4 + i * 0.15,
                  repeat: Infinity,
                  repeatDelay: 0.8,
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Le socle qui s'empile Bronze -> Silver -> Gold */}
      <div className="space-y-2">
        {layers.map((layer, i) => (
          <motion.div
            key={layer.name}
            initial={reduced ? false : { opacity: 0, scaleX: 0.85 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ delay: reduced ? 0 : 0.7 + i * 0.25, duration: 0.4 }}
            className="flex items-center gap-4 rounded-2xl border border-border px-5 py-4"
            style={{ backgroundColor: layer.bg }}
          >
            <span
              className="rounded-full px-3 py-1 text-xs font-bold"
              style={{ color: layer.color, backgroundColor: "#ffffffcc" }}
            >
              {layer.name}
            </span>
            <span className="text-sm font-medium text-foreground">
              {layer.desc}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Agents qui tirent depuis Gold */}
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: reduced ? 0 : 1.6 }}
        className="mt-4 flex items-center justify-center gap-3 rounded-2xl border border-primary/30 bg-primary/[0.03] px-5 py-4 ring-1 ring-primary/10"
      >
        <Bot className="size-5 text-primary" />
        <span className="text-sm font-medium text-foreground">
          {s.dataGoldCaption}
        </span>
        {!reduced && (
          <motion.span
            aria-hidden="true"
            className="size-2 shrink-0 rounded-full bg-emerald-500"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          />
        )}
      </motion.div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Clock, TrendingUp } from "lucide-react";
import type { QuickWin } from "@/lib/diagnostic-config";

interface Props {
  quickWins: QuickWin[];
}

export function QuickWinsCards({ quickWins }: Props) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {quickWins.map((qw, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.15 }}
          className="glass-card glass-card-hover cursor-pointer rounded-xl p-5"
        >
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-lg">
              {qw.icon}
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">
              {qw.department}
            </div>
          </div>
          <h3 className="mb-2 text-base font-bold text-foreground">{qw.title}</h3>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{qw.description}</p>
          <div className="flex items-center gap-4 border-t border-border pt-3">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              {qw.setupTime}
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
              <TrendingUp className="h-3.5 w-3.5" />
              {qw.estimatedGain}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

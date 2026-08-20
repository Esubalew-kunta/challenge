"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/ui-strings";

/**
 * Animation signature de la page Automatisation : un workflow qui se câble
 * tout seul. Déclencheur → agent → sorties, avec des points lumineux qui
 * circulent sur les fils et de vrais logos couleur. Un seul geste fort,
 * la couleur vient des logos réels (règle design maison).
 */

type Node = {
  logo: string;
  name: string;
  label: string;
};

function triggerFor(s: ReturnType<typeof t>): Node {
  return {
    logo: "/images/stack/gmail-color.svg",
    name: "Gmail",
    label: s.wfTriggerLabel,
  };
}

const agents: Node[] = [
  { logo: "/images/stack/claude-color.svg", name: "Claude", label: "" },
  { logo: "/images/stack/n8n-color.svg", name: "n8n", label: "" },
];

function outputsFor(s: ReturnType<typeof t>): Node[] {
  return [
    {
      logo: "/images/stack/hubspot-color.svg",
      name: "HubSpot",
      label: s.wfOutCrm,
    },
    {
      logo: "/images/stack/notion-color.svg",
      name: "Notion",
      label: s.wfOutTask,
    },
    {
      logo: "/images/stack/gmail-color.svg",
      name: "Gmail",
      label: s.wfOutReply,
    },
  ];
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

/** Fil animé + point lumineux qui circule (horizontal desktop, vertical mobile). */
function Wire({
  vertical = false,
  reduced,
  delay = 0,
}: {
  vertical?: boolean;
  reduced: boolean | null;
  delay?: number;
}) {
  const base = vertical
    ? "relative mx-auto h-8 w-px"
    : "relative h-px flex-1 self-center";

  return (
    <div className={base}>
      <div
        className={
          vertical
            ? "absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10"
            : "absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10"
        }
      />
      {!reduced && (
        <motion.span
          aria-hidden="true"
          className="absolute size-2 rounded-full bg-primary shadow-[0_0_10px_2px] shadow-primary/50"
          style={
            vertical
              ? { left: "50%", marginLeft: -4, top: 0 }
              : { top: "50%", marginTop: -4, left: 0 }
          }
          animate={
            vertical
              ? { top: ["0%", "100%"], opacity: [0, 1, 1, 0] }
              : { left: ["0%", "100%"], opacity: [0, 1, 1, 0] }
          }
          transition={{
            duration: 1.6,
            delay,
            repeat: Infinity,
            repeatDelay: 0.6,
            ease: "easeInOut",
          }}
        />
      )}
    </div>
  );
}

function NodeCard({
  node,
  featured = false,
}: {
  node: Node;
  featured?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border bg-white p-4 shadow-sm ${
        featured ? "border-primary/40 ring-1 ring-primary/15" : "border-border"
      }`}
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-surface">
        <img
          src={node.logo}
          alt={node.name}
          loading="lazy"
          className="max-h-6 max-w-6 object-contain"
        />
      </span>
      {node.label && (
        <span className="text-sm font-medium leading-snug text-foreground">
          {node.label}
        </span>
      )}
    </div>
  );
}

export function WorkflowWiring({
  locale = "fr",
}: { locale?: Locale } = {}) {
  const s = t(locale);
  const trigger = triggerFor(s);
  const outputs = outputsFor(s);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();

  return (
    <div ref={ref} className="mx-auto max-w-5xl">
      <motion.div
        variants={{ show: { transition: { staggerChildren: 0.18 } } }}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1.1fr)]"
      >
        {/* Déclencheur */}
        <motion.div variants={cardVariants}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {s.wfTrigger}
          </p>
          <NodeCard node={trigger} />
        </motion.div>

        {/* Fil 1 */}
        <motion.div variants={cardVariants} className="lg:w-16">
          <Wire reduced={reduced} vertical={false} />
          <div className="lg:hidden">
            <Wire reduced={reduced} vertical />
          </div>
        </motion.div>

        {/* Agent */}
        <motion.div variants={cardVariants}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
            L&rsquo;agent traite
          </p>
          <div className="flex items-center gap-3 rounded-2xl border border-primary/40 bg-white p-4 shadow-sm ring-1 ring-primary/15">
            <div className="flex items-center gap-2">
              {agents.map((a) => (
                <span
                  key={a.name}
                  className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-surface"
                >
                  <img
                    src={a.logo}
                    alt={a.name}
                    loading="lazy"
                    className="max-h-6 max-w-6 object-contain"
                  />
                </span>
              ))}
            </div>
            <span className="text-sm font-medium leading-snug text-foreground">
              {s.wfAgentStep}
            </span>
            {!reduced && (
              <motion.span
                aria-hidden="true"
                className="ml-auto size-2 shrink-0 rounded-full bg-emerald-500"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              />
            )}
          </div>
        </motion.div>

        {/* Fil 2 */}
        <motion.div variants={cardVariants} className="lg:w-16">
          <Wire reduced={reduced} vertical={false} delay={0.3} />
          <div className="lg:hidden">
            <Wire reduced={reduced} vertical delay={0.3} />
          </div>
        </motion.div>

        {/* Sorties */}
        <motion.div variants={cardVariants} className="space-y-3">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {s.wfOutputs}
          </p>
          {outputs.map((o) => (
            <NodeCard key={o.label} node={o} />
          ))}
        </motion.div>
      </motion.div>

      {/* Résultat mesuré */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        transition={{ delay: 0.9 }}
        className="mt-12 flex flex-col items-center justify-center gap-3 rounded-2xl border border-primary/15 bg-primary/[0.03] px-6 py-8 text-center sm:flex-row sm:gap-6"
      >
        <AnimatedCounter locale={locale} target={7} suffix="h" label={s.wfCounterLabel} />
        <span className="hidden h-10 w-px bg-border sm:block" />
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          {s.wfCaption}
        </p>
      </motion.div>
    </div>
  );
}

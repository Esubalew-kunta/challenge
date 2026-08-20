"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { cn } from "@/lib/utils";
import { homepageContent } from "@/lib/site-config";

const { process } = homepageContent;

export function ProcessSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            badge={process.badge}
            title={process.title}
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          {process.steps.map((step, i) => {
            const isHovered = hovered === i;
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  onHoverStart={() => setHovered(i)}
                  onHoverEnd={() => setHovered(null)}
                  animate={isHovered ? "hovered" : "idle"}
                  className="group relative cursor-default overflow-hidden rounded-2xl border transition-shadow duration-300"
                  style={{
                    borderColor: isHovered ? "transparent" : "#E2E8F0",
                    boxShadow: isHovered
                      ? "0 20px 60px -10px rgba(37,99,235,0.25)"
                      : "none",
                  }}
                >
                  {/* Dark background overlay */}
                  <motion.div
                    className="absolute inset-0 bg-[#0F172A]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />

                  {/* Beam on hover */}
                  <motion.div
                    className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative p-7">
                    {/* Timing badge */}
                    <div className="mb-5 flex items-center justify-between">
                      <motion.span
                        className="inline-flex items-center rounded-full px-3 py-1 font-mono text-[11px] font-medium"
                        animate={{
                          backgroundColor: isHovered
                            ? "rgba(96,165,250,0.18)"
                            : "rgba(15,23,42,0.06)",
                          color: isHovered ? "rgb(147,197,253)" : "rgb(100,116,139)",
                        }}
                        transition={{ duration: 0.25 }}
                      >
                        {step.timing}
                      </motion.span>

                      {/* Step number */}
                      <motion.span
                        className="text-[11px] font-bold uppercase tracking-widest"
                        animate={{
                          color: isHovered ? "rgba(255,255,255,0.2)" : "rgba(37,99,235,0.3)",
                        }}
                      >
                        {step.number}
                      </motion.span>
                    </div>

                    {/* Title */}
                    <motion.h3
                      className="text-lg font-bold"
                      animate={{ color: isHovered ? "#ffffff" : "hsl(var(--foreground))" }}
                      transition={{ duration: 0.25 }}
                    >
                      {step.title}
                    </motion.h3>

                    {/* Description — slides in on hover */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.p
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden text-sm leading-relaxed text-white/60"
                        >
                          {step.description}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    {/* Separator */}
                    <motion.div
                      className="my-5 h-px"
                      animate={{
                        backgroundColor: isHovered
                          ? "rgba(255,255,255,0.08)"
                          : "rgba(226,232,240,1)",
                      }}
                      transition={{ duration: 0.25 }}
                    />

                    {/* Deliverable */}
                    <div className="flex items-center gap-2">
                      <CheckCircle2
                        className={cn(
                          "size-4 shrink-0 transition-colors duration-300",
                          isHovered ? "text-green-400" : "text-primary/50"
                        )}
                      />
                      <motion.span
                        className="text-xs font-medium"
                        animate={{
                          color: isHovered ? "rgb(134,239,172)" : "rgb(37,99,235)",
                        }}
                        transition={{ duration: 0.25 }}
                      >
                        {step.deliverable}
                      </motion.span>
                    </div>
                  </div>

                  {/* Faded big number background */}
                  <div
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute right-4 bottom-2 select-none text-[96px] font-black leading-none transition-opacity duration-300",
                      isHovered ? "text-white/[0.03]" : "text-primary/[0.04]"
                    )}
                  >
                    {step.number}
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="btn-gradient group h-12 rounded-lg px-8 text-base font-semibold"
            >
              <Link href={process.cta.href}>
                {process.cta.label}
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

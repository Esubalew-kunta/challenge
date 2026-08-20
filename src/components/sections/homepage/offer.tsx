"use client";

import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { homepageContent } from "@/lib/site-config";

const { offer } = homepageContent;

/**
 * Section "Comment on fonctionne" — le modèle de travail, sans pricing.
 * 4 principes numérotés (éditorial, sans cartes) + comparatif avec/sans.
 */
export function OfferSection() {
  return (
    <section className="section-padding relative bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
              {offer.badge}
            </span>
            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {offer.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {offer.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Le modèle — 4 principes numérotés */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
          {offer.model.map((item, i) => (
            <ScrollReveal key={item.number} delay={i * 0.1}>
              <div className="border-t border-border pt-6">
                <span className="text-5xl font-bold leading-none text-primary/15 sm:text-6xl">
                  {item.number}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Comparatif avec / sans */}
        <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          <ScrollReveal>
            <div className="glass-card h-full p-7">
              <h3 className="text-sm font-semibold text-primary">
                Avec AI Makers
              </h3>
              <ul className="mt-5 space-y-3.5">
                {offer.comparison.withUs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="h-full rounded-3xl border border-border bg-surface p-7">
              <h3 className="text-sm font-semibold text-muted-foreground">
                Sans accompagnement
              </h3>
              <ul className="mt-5 space-y-3.5">
                {offer.comparison.without.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X className="mt-0.5 size-4 shrink-0 text-muted-foreground/50" />
                    <span className="text-sm text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.2}>
          <div className="mt-14 flex flex-col items-center gap-4">
            <Button
              asChild
              size="lg"
              className="btn-gradient group h-13 rounded-lg px-8 text-base font-semibold shadow-sm"
            >
              <Link href={offer.cta.href}>
                {offer.cta.label}
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Link
              href="/ai-transformation"
              className="cursor-pointer text-sm font-medium text-primary hover:underline"
            >
              Voir le détail complet de l&apos;offre →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

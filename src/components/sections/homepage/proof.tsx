import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { homepageContent } from "@/lib/site-config";

const { proof } = homepageContent;

export function ProofSection() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            badge={proof.badge}
            title={proof.title}
            subtitle={proof.subtitle}
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {proof.cases.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="glass-card group flex h-full flex-col overflow-hidden">
                {/* Cover — visuel dashboard réel */}
                <div className="aspect-[4/3] overflow-hidden rounded-t-[inherit]">
                  <img
                    src={item.cover}
                    alt={`${item.title} : ${item.subtitle}`}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-8">
                  {/* Client + category */}
                  <div className="mb-6">
                    <span className="text-sm font-medium text-muted-foreground">
                      {item.subtitle}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                  </div>

                  {/* Metrics */}
                  <div className="flex items-end gap-6 rounded-xl bg-primary/5 p-4">
                    <div>
                      <p className="text-3xl font-bold text-primary">
                        {item.metric}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.metricLabel}
                      </p>
                    </div>
                    {"secondMetric" in item && item.secondMetric && (
                      <div>
                        <p className="text-2xl font-bold text-foreground">
                          {item.secondMetric}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.secondMetricLabel}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Before / After / How */}
                  <div className="mt-6 flex flex-col gap-3 flex-1">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-1">
                        Avant
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.before}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-1">
                        Après
                      </p>
                      <p className="text-sm text-foreground font-medium">
                        {item.after}
                      </p>
                    </div>
                    <div className="mt-auto pt-4 border-t border-border">
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-1">
                        Comment
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.how}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Intermediate CTA */}
        <ScrollReveal delay={0.4}>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="btn-gradient group h-12 rounded-lg px-8 text-base font-semibold"
            >
              <Link href={proof.ctaIntermediate.href}>
                {proof.ctaIntermediate.label}
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="h-12 px-8 text-base font-medium text-muted-foreground hover:text-foreground"
            >
              <Link href={proof.cta.href}>{proof.cta.label}</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

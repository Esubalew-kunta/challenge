import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { PremiumCard } from "@/components/motion/premium-card";
import {
  ShieldLockIcon,
  ScaleIcon,
  FileCheckIcon,
  BookOpenIcon,
  type LivingIconProps,
} from "@/components/motion/living-icons";
import { HOMEPAGE } from "@/lib/homepage-locale";
import type { Locale } from "@/lib/i18n";


const pillarIcons: Record<string, React.ComponentType<LivingIconProps>> = {
  shield: ShieldLockIcon,
  scale: ScaleIcon,
  file: FileCheckIcon,
  book: BookOpenIcon,
};

/**
 * Section de réassurance conformité, sobre, sur fond blanc.
 * 4 piliers (RGPD, AI Act, charte, registre) + lien vers /gouvernance-ia.
 * Cartes PremiumCard (spotlight + beam + lift) avec living icons : l'icône
 * vit directement dans la carte et rejoue sa scène au survol de la carte.
 */
export function ComplianceSection({ locale = "fr" }: { locale?: Locale } = {}) {
  const { compliance } = HOMEPAGE[locale];
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
              <ShieldCheck className="size-3.5" />
              {compliance.badge}
            </span>
            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {compliance.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {compliance.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Piliers */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {compliance.pillars.map((pillar, i) => {
            const Icon = pillarIcons[pillar.icon] ?? ShieldLockIcon;
            return (
              <ScrollReveal key={pillar.title} delay={i * 0.08} className="h-full">
                <PremiumCard
                  data-icon-hover-scope
                  className="flex h-full flex-col p-6"
                >
                  <Icon size={36} />
                  <h3 className="mt-5 text-base font-semibold tracking-tight text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {pillar.detail}
                  </p>
                </PremiumCard>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Lien vers la page gouvernance */}
        <ScrollReveal delay={0.2}>
          <div className="mt-10 text-center">
            <Link
              href={compliance.cta.href}
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              {compliance.cta.label}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

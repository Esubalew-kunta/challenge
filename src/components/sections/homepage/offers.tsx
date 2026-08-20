import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { FdePlugVisual } from "@/components/sections/homepage/fde-plug-visual";
import { HOMEPAGE } from "@/lib/homepage-locale";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/ui-strings";


/** Carte dont le visuel statique est remplacé par la mini-animation FDE. */
const FDE_HREF = "/forward-deployed-engineer";

/**
 * Section "Nos offres" — 3 cartes cliquables (une par offre).
 * Chaque carte est un lien entier vers la page dédiée de l'offre.
 */
export function OffersSection({ locale = "fr" }: { locale?: Locale } = {}) {
  const { offers } = HOMEPAGE[locale];
  const ui = t(locale);
  return (
    <section id="offres" className="section-padding bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-badge inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              {offers.badge}
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[42px] md:leading-[1.15]">
              {offers.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {offers.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Cartes */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offers.items.map((item, i) => (
            <ScrollReveal key={item.name} delay={i * 0.12} className="h-full">
              <Link
                href={item.href}
                className="glass-card group flex h-full cursor-pointer flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_8px_30px_rgba(37,99,235,0.08),0_1px_3px_rgba(0,0,0,0.06)]"
              >
                {/* Visuel : mini-animation "il se branche dans votre équipe"
                    pour la carte FDE, illustration 3D pour les autres */}
                <div className="flex h-44 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-[#F1F5F9] to-white p-4">
                  {item.href === FDE_HREF ? (
                    <FdePlugVisual locale={locale} />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.illustration}
                      alt={`Illustration ${item.name}`}
                      loading="lazy"
                      className="max-h-36 max-w-full object-contain transition-transform duration-300 ease-out group-hover:-translate-y-1.5"
                    />
                  )}
                </div>

                {/* Contenu */}
                <h3 className="mt-6 text-xl font-bold text-foreground">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.promise}
                </p>
                <p className="mt-3 text-xs font-medium text-primary">
                  {item.for}
                </p>

                {/* CTA */}
                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-primary">
                  {ui.discover}
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

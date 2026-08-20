import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { homepageContent } from "@/lib/site-config";

const { stackTable } = homepageContent;

/**
 * Section "La stack, à découvert" — la globalité de la chaîne en un écran :
 * une rangée compacte par catégorie (nom + rôle à gauche, outils en chips
 * horizontales à droite). Le détail de chaque outil vit dans le tooltip
 * natif (title) — tout est visible d'un coup, aucune interaction requise.
 */
export function StackTableSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-badge inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              {stackTable.badge}
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[42px] md:leading-[1.15]">
              {stackTable.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {stackTable.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Une rangée compacte par catégorie */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-slate-200 bg-white/60">
          {stackTable.categories.map((category, i) => (
            <ScrollReveal key={category.name} delay={i * 0.06}>
              <div
                className={
                  "grid gap-3 px-5 py-5 sm:px-6 lg:grid-cols-[260px_1fr] lg:items-center lg:gap-8" +
                  (i > 0 ? " border-t border-slate-200" : "")
                }
              >
                {/* Catégorie : nom + rôle dans la chaîne */}
                <div>
                  <h3 className="text-base font-bold text-foreground">
                    {category.name}
                  </h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {category.badge}
                  </p>
                </div>

                {/* Outils en chips horizontales, détail au survol */}
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool) => (
                    <span
                      key={tool.name}
                      title={tool.detail}
                      className="inline-flex cursor-default items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-sm"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        loading="lazy"
                        className="size-4.5 object-contain"
                      />
                      <span className="text-[13px] font-medium text-foreground">
                        {tool.name}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

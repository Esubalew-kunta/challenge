import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { t } from "@/lib/ui-strings";
import type { Locale } from "@/lib/i18n";

export type RelatedLink = {
  title: string;
  href: string;
  description?: string;
};

type RelatedContentProps = {
  links: RelatedLink[];
  title?: string;
  eyebrow?: string;
  /** Fond de section, pour alterner avec la section précédente. */
  background?: string;
  /** Langue. Défaut "fr" : les appels existants ne changent pas. */
  locale?: Locale;
};

/**
 * Bloc « Pour aller plus loin » réutilisable : maillage interne + signal GEO.
 * Rendu côté serveur, liens contextuels vers pages piliers, articles, cas, outils.
 */
export function RelatedContent({
  links,
  title,
  eyebrow,
  background = "bg-muted/30",
  locale = "fr",
}: RelatedContentProps) {
  const s = t(locale);
  const titleLabel = title ?? s.relatedTitle;
  const eyebrowLabel = eyebrow ?? (locale === "en" ? "Resources" : "Ressources");
  if (links.length === 0) return null;

  return (
    <section className={`section-padding border-t border-border ${background}`}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
              {eyebrowLabel}
            </span>
            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              {titleLabel}
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-colors hover:border-primary/30"
              >
                <h3 className="text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                  {link.title}
                </h3>
                {link.description && (
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {link.description}
                  </p>
                )}
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  {s.discover}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

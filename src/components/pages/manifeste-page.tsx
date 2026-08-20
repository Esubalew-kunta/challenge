import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/shared/json-ld";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { PageHeroBackground } from "@/components/motion/page-hero-background";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { MANIFESTE } from "@/lib/offer-pages/manifeste-locale";
import type { Locale } from "@/lib/i18n";

/**
 * Gabarit partagé du manifeste, pour les deux langues.
 *
 * Extrait de `(fr)/pourquoi-maintenant/page.tsx`, qui ne portait aucun texte en
 * JSX inline : tout venait déjà de `offer-pages/manifeste.ts`. L'extraction n'a
 * eu qu'à rendre le JSON-LD dépendant de la langue — il déclarait `inLanguage:
 * "fr-FR"` en dur, donc la page anglaise se serait annoncée française.
 */

/** Colonne de lecture : tout le long-form vit dans cette largeur. */
function ReadingColumn({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">{children}</div>
  );
}

type BlocHeaderProps = {
  index: string;
  title: string;
  dark?: boolean;
};

/** Index numéroté + titre de bloc, en tête de chaque section de l'article. */
function BlocHeader({ index, title, dark = false }: BlocHeaderProps) {
  return (
    <>
      <p
        className={`font-mono text-sm font-medium tracking-[0.3em] ${
          dark ? "text-blue-400" : "text-primary"
        }`}
      >
        {index}
      </p>
      <h2
        className={`mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
    </>
  );
}

type RespirationProps = {
  value: string;
  label: string;
};

/** Gros chiffre isolé, en respiration entre deux blocs de l'article. */
function Respiration({ value, label }: RespirationProps) {
  return (
    <section className="bg-white py-20 md:py-28">
      <ReadingColumn>
        <ScrollReveal>
          <div className="text-center">
            <p className="whitespace-nowrap text-5xl font-bold tracking-tight text-primary sm:text-6xl md:text-8xl">
              {value}
            </p>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              {label}
            </p>
          </div>
        </ScrollReveal>
      </ReadingColumn>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */


export function ManifestePage({ locale }: { locale: Locale }) {
  const c = MANIFESTE[locale];
  const pageUrl = `${siteConfig.url}${locale === "en" ? "/en/why-now" : "/pourquoi-maintenant"}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.hero.title,
    description: c.meta.description,
    inLanguage: c.htmlLang,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <JsonLd data={articleSchema} />

      <article>
        {/* En-tête : la thèse */}
        <header className="hero-padding relative overflow-hidden bg-background">
          <PageHeroBackground intensity="normal" />
          <div className="relative z-10">
            <ReadingColumn>
              <ScrollReveal>
                <div className="text-center">
                  <h1 className="text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl">
                    {c.hero.title}
                  </h1>
                  <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                    {c.hero.subtitle}
                  </p>
                </div>
              </ScrollReveal>
            </ReadingColumn>
          </div>
        </header>

        {/* Bloc 1 : l'effondrement du coût */}
        <section className="bg-white py-20 md:py-28">
          <ReadingColumn>
            <ScrollReveal>
              <BlocHeader
                index={c.bloc1.index}
                title={c.bloc1.title}
              />
              {c.bloc1.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl"
                >
                  {paragraph}
                </p>
              ))}
            </ScrollReveal>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {c.bloc1.stats.map((stat, i) => (
                <ScrollReveal key={stat.value} delay={i * 0.1}>
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6">
                    <p className="text-3xl font-bold tracking-tight text-primary">
                      {stat.value}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {stat.source}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ReadingColumn>
        </section>

        {/* Bloc 2 : vos process deviennent la variable */}
        <section className="bg-background py-20 md:py-28">
          <ReadingColumn>
            <ScrollReveal>
              <BlocHeader
                index={c.bloc2.index}
                title={c.bloc2.title}
              />
              {c.bloc2.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl"
                >
                  {paragraph}
                </p>
              ))}
            </ScrollReveal>
          </ReadingColumn>
        </section>

        {/* Respiration : le coût d'une facture */}
        <Respiration
          value={c.respiration1.value}
          label={c.respiration1.label}
        />

        {/* Bloc 3 : l'écart entre usage et impact */}
        <section className="bg-background py-20 md:py-28">
          <ReadingColumn>
            <ScrollReveal>
              <BlocHeader
                index={c.bloc3.index}
                title={c.bloc3.title}
              />
              {c.bloc3.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl"
                >
                  {paragraph}
                </p>
              ))}
            </ScrollReveal>
          </ReadingColumn>
        </section>

        {/* Respiration : usage vs impact */}
        <Respiration
          value={c.respiration2.value}
          label={c.respiration2.label}
        />

        {/* Bloc 4 : la rupture dark, l'avance qui se compose */}
        <section className="relative overflow-hidden bg-[#0F172A] py-24 md:py-32">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(37,99,235,0.15) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10">
            <ReadingColumn>
              <ScrollReveal>
                <BlocHeader
                  index={c.bloc4.index}
                  title={c.bloc4.title}
                  dark
                />
                {c.bloc4.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-6 text-lg leading-relaxed text-slate-400 md:text-xl"
                  >
                    {paragraph}
                  </p>
                ))}
                <p className="mt-10 border-l-2 border-blue-400 pl-6 text-xl font-semibold leading-snug text-white md:text-2xl">
                  {c.bloc4.punchline}
                </p>
              </ScrollReveal>
            </ReadingColumn>
          </div>
        </section>

        {/* Bloc 5 : l'appel */}
        <section className="bg-white py-20 md:py-28">
          <ReadingColumn>
            <ScrollReveal>
              <div className="text-center">
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                  {c.bloc5.title}
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  {c.bloc5.body}
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="btn-gradient group h-13 cursor-pointer rounded-lg px-8 text-base font-semibold shadow-sm"
                  >
                    <Link href={c.bloc5.ctaPrimary.href}>
                      {c.bloc5.ctaPrimary.label}
                      <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Link
                    href={c.bloc5.ctaSecondary.href}
                    className="inline-flex h-13 cursor-pointer items-center justify-center rounded-lg border border-border bg-white px-8 text-base font-semibold text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    {c.bloc5.ctaSecondary.label}
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </ReadingColumn>
        </section>

        {/* Sources */}
        <footer className="bg-background py-14 md:py-16">
          <ReadingColumn>
            <div className="border-t border-border pt-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
                {c.sources.title}
              </p>
              <ul className="mt-5 space-y-2.5 text-sm">
                {c.sources.items.map((source) => (
                  <li key={source.href}>
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary/40"
                    >
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ReadingColumn>
        </footer>
      </article>
    </>
  );}

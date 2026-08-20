"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { HOMEPAGE } from "@/lib/homepage-locale";
import type { Locale } from "@/lib/i18n";
import { resolveEnHref } from "@/lib/en-links";
import { t } from "@/lib/ui-strings";


/**
 * Section "Pourquoi AI Makers ?" — épurée, façon fractional.ai.
 * Lecture d'abord : colonnes centrées verticalement (pas de vide sous le
 * titre), paragraphes courts, largeur de ligne limitée (~60ch), padding
 * vertical resserré. Le titre porte le dégradé bleu de la marque.
 */
export function ValuePropSection({ locale = "fr" }: { locale?: Locale } = {}) {
  const { valueProp } = HOMEPAGE[locale];
  return (
    <section className="bg-background py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          {/* Gauche : la question, dans le bleu de la marque */}
          <ScrollReveal>
            <h2 className="text-gradient-blue text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Pourquoi
              <br />
              AI Makers&nbsp;?
            </h2>
          </ScrollReveal>

          {/* Droite : accent + deux paragraphes courts, largeur de lecture ~60ch */}
          <div className="max-w-[60ch]">
            <ScrollReveal delay={0.1}>
              <p className="text-2xl font-semibold tracking-tight text-foreground sm:text-[26px]">
                {valueProp.title}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-5 space-y-4">
                {valueProp.manifestoParagraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-[17px] leading-[1.75] text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
                {/* Signature du manifeste — isolée du bloc, elle pèse plus. */}
                <p className="pt-1 text-xl font-semibold tracking-tight text-foreground">
                  {valueProp.manifestoSignature}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="mt-7 text-sm text-muted-foreground">
                {valueProp.conversationCta.prefix}{" "}
                <Link
                  href={valueProp.conversationCta.href}
                  className="cursor-pointer font-medium text-primary hover:underline"
                >
                  {valueProp.conversationCta.label} →
                </Link>
                <span className="mx-2 text-border">·</span>
                <Link
                  href={locale === "en" ? resolveEnHref("/en/team") : "/equipe"}
                  className="cursor-pointer font-medium text-primary hover:underline"
                >
                  {t(locale).hpTeamLink} →
                </Link>
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

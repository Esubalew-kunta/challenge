import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/shared/json-ld";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { RelatedContent } from "@/components/shared/related-content";
import { PageHeroBackground } from "@/components/motion/page-hero-background";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { FDE_CATEGORY } from "@/lib/offer-pages/fde-category";
import type { Locale } from "@/lib/i18n";

export function FdePage({ locale = "fr" }: { locale?: Locale } = {}) {
  const c = FDE_CATEGORY[locale];
  const url = `${siteConfig.url}${c.path}`;
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: c.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
  };
  const termSchema = { "@context": "https://schema.org", "@type": "DefinedTerm", name: "Forward Deployed Engineer", description: c.opening, url };

  return <>
    <JsonLd data={termSchema} /><JsonLd data={faqSchema} />
    <section className="hero-padding relative overflow-hidden bg-background">
      <PageHeroBackground intensity="normal" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><ScrollReveal>
        <p className="text-sm font-semibold text-primary">{c.badge}</p>
        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">{c.h1}</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">{c.opening}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {/* Page de catégorie : quand la page commerciale existe (FR), c'est elle
              le CTA principal ; le diagnostic passe en secondaire. L'EN n'a pas
              de contrepartie commerciale (`c.hire` vide) et garde le diagnostic
              en principal — ne pas inventer de route EN. */}
          {c.hire ? <>
            <Button asChild size="lg"><Link href="/metiers/ingenieur-ia">{c.hire}<ArrowRight className="ml-2 size-4" /></Link></Button>
            <Button asChild size="lg" variant="outline"><Link href={locale === "fr" ? "/contact" : "/en/contact"}>{c.diagnostic}</Link></Button>
          </> : <Button asChild size="lg"><Link href={locale === "fr" ? "/contact" : "/en/contact"}>{c.diagnostic}<ArrowRight className="ml-2 size-4" /></Link></Button>}
        </div>
      </ScrollReveal></div>
    </section>

    <section className="section-padding bg-surface"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><ScrollReveal>
      <h2 className="text-3xl font-bold sm:text-4xl">{c.operating.title}</h2>
      <div className="mt-6 grid gap-5 text-lg leading-relaxed text-muted-foreground md:grid-cols-2"><p>{c.operating.intro}</p><p>{c.operating.detail}</p></div>
    </ScrollReveal></div></section>

    <section className="section-padding bg-white"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <ScrollReveal><h2 className="text-3xl font-bold sm:text-4xl">{c.workflow.title}</h2><p className="mt-4 max-w-3xl text-lg text-muted-foreground">{c.workflow.intro}</p></ScrollReveal>
      <ol className="mt-10 grid gap-5 md:grid-cols-2">{c.workflow.items.map(([title, body], i) => <ScrollReveal key={title} delay={i * .04}><li className="h-full rounded-2xl border border-border p-6"><p className="text-sm font-semibold text-primary">{String(i + 1).padStart(2, "0")}</p><h3 className="mt-2 text-lg font-semibold">{title}</h3><p className="mt-2 leading-relaxed text-muted-foreground">{body}</p></li></ScrollReveal>)}</ol>
    </div></section>

    <section className="section-padding bg-background"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <ScrollReveal><h2 className="text-3xl font-bold sm:text-4xl">{c.roles.title}</h2></ScrollReveal>
      <div className="mt-8 overflow-x-auto"><table className="w-full min-w-[760px] text-left"><thead><tr className="border-b border-border">{c.roles.headers.map((header) => <th key={header} className="px-4 py-4 text-xs uppercase tracking-wider text-muted-foreground">{header}</th>)}</tr></thead><tbody>{c.roles.rows.map(([role, start, owner, limit]) => <tr key={role} className="border-b border-border"><th className="px-4 py-5 align-top">{role}</th><td className="px-4 py-5 align-top text-muted-foreground">{start}</td><td className="px-4 py-5 align-top text-muted-foreground">{owner}</td><td className="px-4 py-5 align-top text-muted-foreground">{limit}</td></tr>)}</tbody></table></div>
    </div></section>

    <section className="section-padding bg-white"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><ScrollReveal><h2 className="text-3xl font-bold sm:text-4xl">{c.fit.title}</h2></ScrollReveal>
      <div className="mt-9 grid gap-6 md:grid-cols-2"><div className="rounded-2xl border border-primary/25 bg-primary/[.04] p-7"><h3 className="text-xl font-semibold">{c.fit.goodTitle}</h3><ul className="mt-5 space-y-3">{c.fit.good.map((item) => <li key={item} className="border-l-2 border-primary pl-4 text-muted-foreground">{item}</li>)}</ul></div><div className="rounded-2xl border border-border bg-surface p-7"><h3 className="text-xl font-semibold">{c.fit.badTitle}</h3><ul className="mt-5 space-y-3">{c.fit.bad.map((item) => <li key={item} className="border-l-2 border-muted-foreground/30 pl-4 text-muted-foreground">{item}</li>)}</ul></div></div>
    </div></section>

    <section className="section-padding bg-surface"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><ScrollReveal><h2 className="text-3xl font-bold sm:text-4xl">{c.skills.title}</h2><p className="mt-4 max-w-3xl text-lg text-muted-foreground">{c.skills.intro}</p></ScrollReveal><div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{c.skills.items.map(([title, body]) => <div key={title} className="rounded-2xl border border-border bg-white p-6"><h3 className="font-semibold">{title}</h3><p className="mt-2 leading-relaxed text-muted-foreground">{body}</p></div>)}</div></div></section>

    <section className="section-padding bg-primary text-primary-foreground"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><ScrollReveal><p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">AI Makers</p><h2 className="mt-3 text-3xl font-bold sm:text-4xl">{c.proof.title}</h2><p className="mt-6 text-lg leading-relaxed text-primary-foreground/85">{c.proof.body}</p><p className="mt-4 leading-relaxed text-primary-foreground/75">{c.proof.caveat}</p>{c.proof.linkHref && <Link className="mt-5 inline-flex font-semibold text-primary-foreground underline underline-offset-4" href={c.proof.linkHref}>{c.proof.linkLabel}<ArrowRight className="ml-2 size-4" /></Link>}</ScrollReveal></div></section>

    <section className="section-padding bg-white"><div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"><ScrollReveal><h2 className="text-3xl font-bold">{c.bridge.title}</h2><p className="mt-5 leading-relaxed text-muted-foreground">{c.bridge.body}</p>{c.hire && <Link href="/metiers/ingenieur-ia" className="mt-5 inline-flex font-semibold text-primary hover:underline">{c.hire}<ArrowRight className="ml-2 size-4" /></Link>}</ScrollReveal></div></section>

    <section className="section-padding bg-background"><div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"><h2 className="text-3xl font-bold">{locale === "fr" ? "Questions fréquentes" : "Frequently asked questions"}</h2><div className="mt-8"><FAQAccordion items={[...c.faq]} /></div></div></section>
    <RelatedContent links={c.related.map(([title, href, description]) => ({ title, href, description }))} />
  </>;
}

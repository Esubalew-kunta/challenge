import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CTASection } from "@/components/shared/cta-section";
import { ContentOffer } from "@/components/shared/content-offer";
import { siteConfig } from "@/lib/site-config";
import { getAllPosts, formatPostDate } from "@/lib/blog";

export const metadata = constructMetadata({
  title: "Transformation IA : retours de terrain",
  description: "Retours de mission et analyses sur la transformation IA en entreprise : audit, automatisation, formation des équipes, visibilité dans les moteurs génératifs.",
  path: "/blog",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: `${siteConfig.url}/blog`,
    },
  ],
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="hero-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                Blog
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
                Ce qu&apos;on apprend sur le terrain
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Retours de mission, méthodes et analyses sur la transformation
                IA en entreprise. On publie quand on a quelque chose
                d&apos;utile à dire.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Liste des articles */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-8">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.05}>
                <article className="group rounded-2xl border border-border bg-background p-8 transition-colors hover:border-primary/30">
                  <p className="text-sm text-muted-foreground">
                    <time dateTime={post.date}>
                      {formatPostDate(post.date)}
                    </time>
                    {" · "}
                    {post.author}
                  </p>
                  <h2 className="mt-3 text-xl font-semibold text-foreground sm:text-2xl">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition-colors group-hover:text-primary"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {post.description}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    Lire l&apos;article
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </article>
              </ScrollReveal>
            ))}

            {posts.length === 0 && (
              <p className="text-center text-muted-foreground">
                Les premiers articles arrivent bientôt.
              </p>
            )}
          </div>
        </div>
      </section>

      <ContentOffer source="blog" context="hub" />

      {/* CTA final */}
      <CTASection
        title="Envie de passer de la lecture à l'exécution ?"
        subtitle="30 minutes pour analyser vos workflows et identifier vos 3 premiers quick wins IA. Gratuit, sans engagement."
        primaryCta={{
          label: "Réserver mon diagnostic gratuit",
          href: "/contact",
        }}
      />
    </>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { CTASection } from "@/components/shared/cta-section";
import { NewsletterButton } from "@/components/shared/newsletter-button";
import { ContentOffer } from "@/components/shared/content-offer";
import { siteConfig } from "@/lib/site-config";
import { getAllPosts, getPost, formatPostDate, extractFaq } from "@/lib/blog";
import { renderMarkdown, extractHeadings } from "@/lib/markdown";
import { ReadingProgress } from "@/components/motion/reading-progress";
import { ArticleToc } from "@/components/blog/article-toc";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return constructMetadata({
      title: "Article introuvable",
      description: "Cet article n'existe pas ou a été déplacé.",
      path: `/blog/${slug}`,
    });
  }
  // Le template du layout ajoute déjà « | AI Makers ». Le suffixe écrit ici
  // en empilait un second : les 21 articles sortaient à 94 caractères de
  // moyenne, jusqu'à 112, quand les résultats en affichent une soixantaine.
  return constructMetadata({
    title: post.seoTitle ?? post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    inLanguage: "fr-FR",
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo-aimakers.png`,
      },
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  const headings = extractHeadings(post.content);
  const hasToc = headings.length >= 2;

  const faqs = extractFaq(post.content);
  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteConfig.url}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${siteConfig.url}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <ReadingProgress />

      <article className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={
              hasToc
                ? "mx-auto max-w-3xl xl:grid xl:max-w-6xl xl:grid-cols-[minmax(0,1fr)_230px] xl:gap-16"
                : "mx-auto max-w-3xl"
            }
          >
            <div className="min-w-0 xl:mx-auto xl:w-full xl:max-w-3xl">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowLeft className="size-4" />
                Retour au blog
              </Link>

              <header className="mt-8">
                <p className="text-sm text-muted-foreground">
                  <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                  {" · "}
                  {post.author}
                </p>
                <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  {post.title}
                </h1>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  {post.description}
                </p>
              </header>

              <div className="mt-10 max-w-[70ch] border-t border-border pt-2">
                {renderMarkdown(post.content)}
              </div>
            </div>

            {hasToc && (
              <aside className="hidden xl:block">
                <div className="sticky top-32 max-h-[calc(100vh-10rem)] overflow-y-auto pr-1">
                  <ArticleToc headings={headings} />
                </div>
              </aside>
            )}
          </div>
        </div>
      </article>

      {/* Capture en ligne : l'article se lit jusqu'au bout, l'offre arrive là
          où l'intention est la plus haute — avant le CTA de réservation. */}
      <ContentOffer source="blog" context={post.slug} />

      {/* Secondaire, sous l'offre principale : qui veut seulement s'abonner
          n'a plus à descendre jusqu'au pied de page. */}
      <NewsletterButton context={post.slug} />

      <CTASection
        title="Un process à automatiser en tête ?"
        subtitle="30 minutes pour analyser vos workflows et identifier vos 3 premiers quick wins IA. Gratuit, sans engagement."
        primaryCta={{
          label: "Réserver mon diagnostic gratuit",
          href: "/contact",
        }}
      />
    </>
  );
}

import { SectionHeader } from "@/components/shared/section-header";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { HOMEPAGE } from "@/lib/homepage-locale";
import type { Locale } from "@/lib/i18n";


export function FAQSection({ locale = "fr" }: { locale?: Locale } = {}) {
  const { faq } = HOMEPAGE[locale];
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            badge={faq.badge}
            title={faq.title}
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-12">
            <FAQAccordion items={[...faq.items]} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

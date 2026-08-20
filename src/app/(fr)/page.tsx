import { constructMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { siteConfig, homepageContent } from "@/lib/site-config";

import { HeroSection } from "@/components/sections/homepage/hero";
import { ProblemSection } from "@/components/sections/homepage/problem";
import { ValuePropSection } from "@/components/sections/homepage/value-prop";
import { ConnectionsSection } from "@/components/sections/homepage/connections";
import { FinalCTASection } from "@/components/sections/homepage/final-cta";
import { OffersSection } from "@/components/sections/homepage/offers";
import { ComplianceSection } from "@/components/sections/homepage/compliance";
import { MethodSection } from "@/components/sections/homepage/method";
// OfferSection fusionnée dans MethodSection (comparatif + CTA), plus rendue ici.
// Comparatif "Pas un cabinet. Pas une agence." extrait de ValuePropSection,
// poussé en fin de page (avant les témoignages).
import { ComparisonSection } from "@/components/sections/homepage/comparison-section";
import { FleetSection } from "@/components/sections/homepage/fleet";
// ProofSection fusionnée dans ResultsSection (cf. results.tsx), plus rendue ici.
import { ResultsSection } from "@/components/sections/homepage/results";
import { TestimonialsSection } from "@/components/sections/homepage/testimonials";
import { BookingSection } from "@/components/sections/homepage/booking";
import { FAQSection } from "@/components/sections/homepage/faq";

export const metadata = constructMetadata({
  // La home est dans le MÊME segment que le layout qui définit le gabarit de
  // titre : Next n'applique « %s | AI Makers » qu'aux segments ENFANTS. Le
  // suffixe doit donc être écrit ici, sinon la page la plus importante du site
  // sort sans marque du tout.
  title: "AI Makers | Cabinet de transformation IA",
  description: "Cabinet de transformation IA anti-hype : audit des process, systèmes IA en production, équipes formées. +200 systèmes déployés chez +50 entreprises.",
  path: "/",
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo-aimakers.png`,
  description:
    "Cabinet de transformation IA : audit des process, systèmes IA en production, formation des équipes. Méthode en 3 phases (Audit, Build, Scale), propriété totale des systèmes.",
  foundingDate: "2022",
  founder: {
    "@type": "Person",
    name: "Othmane Halim",
    jobTitle: "CEO",
    sameAs: "https://www.linkedin.com/in/othmanehalim/",
  },
  sameAs: [
    "https://www.linkedin.com/in/othmanehalim/",
    "https://www.linkedin.com/company/aimakers1/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: siteConfig.email,
    contactType: "sales",
    availableLanguage: ["French", "English", "Arabic"],
  },
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addresses.paris.street,
      addressLocality: "Paris",
      postalCode: "75008",
      addressCountry: "FR",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Casablanca",
      addressCountry: "MA",
    },
  ],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: "fr-FR",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homepageContent.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={webSiteSchema} />
      <JsonLd data={faqSchema} />

      <HeroSection />
      <ProblemSection />
      <ValuePropSection />
      <OffersSection />
      <MethodSection />
      <ResultsSection />
      <TestimonialsSection />
      <FleetSection />
      <ConnectionsSection />
      <ComplianceSection />
      <BookingSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}

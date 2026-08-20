import { constructMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { siteConfig } from "@/lib/site-config";
import { homepageContentEn } from "@/lib/homepage-content.en";

import { HeroSection } from "@/components/sections/homepage/hero";
import { ProblemSection } from "@/components/sections/homepage/problem";
import { ValuePropSection } from "@/components/sections/homepage/value-prop";
import { OffersSection } from "@/components/sections/homepage/offers";
import { MethodSection } from "@/components/sections/homepage/method";
import { ResultsSection } from "@/components/sections/homepage/results";
import { TestimonialsSection } from "@/components/sections/homepage/testimonials";
import { FleetSection } from "@/components/sections/homepage/fleet";
import { ConnectionsSection } from "@/components/sections/homepage/connections";
import { ComplianceSection } from "@/components/sections/homepage/compliance";
import { BookingSection } from "@/components/sections/homepage/booking";
import { FAQSection } from "@/components/sections/homepage/faq";
import { FinalCTASection } from "@/components/sections/homepage/final-cta";

/**
 * /en — page d'accueil anglaise, racine de l'arbre EN.
 *
 * Même gabarit que la home française, section pour section : ce sont les mêmes
 * composants, appelés avec `locale="en"`. Rien n'est dupliqué — le contenu vit
 * dans `homepage-content.en.ts`, et l'ordre ci-dessous est celui du FR.
 *
 * Contrairement à la home FR, le titre n'écrit PAS la marque : `/en` est un
 * segment ENFANT du layout (en), donc le gabarit « %s | AI Makers » s'applique.
 * L'écrire à la main donnerait un double suffixe.
 */
export const metadata = constructMetadata({
  title: "AI Transformation Studio for Companies",
  description:
    "AI Makers is an AI transformation studio in Paris and Casablanca. We audit your processes, ship AI systems into production, and train your teams. 200+ systems deployed.",
  path: "/en",
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: `${siteConfig.url}/en`,
  logo: `${siteConfig.url}/images/logo-aimakers.png`,
  description:
    "AI transformation studio: process audit, AI systems in production, teams trained. A three-phase method (Audit, Build, Scale), with full ownership of the systems.",
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
  // Adresses identiques au FR : ce sont des faits, pas de la copie.
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
  url: `${siteConfig.url}/en`,
  // Bascule par langue : le FR déclare fr-FR. Une page anglaise qui se déclare
  // française est une erreur que les moteurs relèvent.
  inLanguage: "en",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homepageContentEn.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function HomePageEn() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={webSiteSchema} />
      <JsonLd data={faqSchema} />

      <HeroSection locale="en" />
      <ProblemSection locale="en" />
      <ValuePropSection locale="en" />
      <OffersSection locale="en" />
      <MethodSection locale="en" />
      <ResultsSection locale="en" />
      <TestimonialsSection locale="en" />
      <FleetSection locale="en" />
      <ConnectionsSection locale="en" />
      <ComplianceSection locale="en" />
      <BookingSection locale="en" />
      <FAQSection locale="en" />
      <FinalCTASection locale="en" />
    </>
  );
}

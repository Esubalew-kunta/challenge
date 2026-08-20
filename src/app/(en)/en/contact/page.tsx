import { MapPin, Mail } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { BookingGate } from "@/components/shared/booking-gate";
import { BookingProof } from "@/components/shared/booking-proof";
import { PageHeroBackground } from "@/components/motion/page-hero-background";
import { siteConfig, bookingUrl } from "@/lib/site-config";

/**
 * /en/contact — équivalent anglais de /contact.
 *
 * Contenu repris du master `[EN] website-content/contact/contact.md`, champ par
 * champ, sans reformulation libre. Le gabarit (structure, classes, animations)
 * est copié de la page FR : les deux doivent bouger ensemble, et un composant
 * partagé prenant le contenu en props reste à extraire une fois qu'assez de
 * pages EN existent pour savoir ce qui se factorise vraiment.
 *
 * La preuve sous le calendrier passe désormais `locale="en"` : sans ça, la page
 * promettait en anglais et citait en français juste en dessous.
 */

// Lien Cal.com sans l'origine, format attendu par l'API embed ("user/event").
const calLink = bookingUrl.replace(/^https:\/\/cal\.com\//, "");

export const metadata = constructMetadata({
  // Le gabarit du layout ajoute « | AI Makers » : ne pas le réécrire ici.
  title: "Contact — Book Your Free AI Diagnostic",
  description:
    "Contact AI Makers for a free AI diagnostic. 30 minutes to review your workflows and pin down your highest-ROI AI quick wins. No sales pitch.",
  path: "/en/contact",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/en` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: `${siteConfig.url}/en/contact`,
    },
  ],
};

const steps = [
  { label: "You book a 30-min slot" },
  { label: "We analyse your workflows live" },
  { label: "You leave with a concrete AI roadmap" },
];

export default function ContactPageEn() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <section className="hero-padding relative overflow-hidden bg-background">
        {/* Background */}
        <PageHeroBackground intensity="subtle" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
            {/* Left: info */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5">
                <span className="size-1.5 rounded-full bg-primary" />
                <span className="text-xs font-medium text-primary">
                  Free AI diagnostic · No commitment
                </span>
              </div>

              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
                30 minutes to know exactly{" "}
                <span className="text-primary">what AI can do</span> for you.
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                No sales pitch. We review your workflows, pin down your 3
                highest-ROI AI quick wins, and give you a first roadmap —
                whether you work with us or not.
              </p>

              {/* Steps */}
              <ol className="mt-10 space-y-4">
                {steps.map((step, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {step.label}
                    </span>
                  </li>
                ))}
              </ol>

              {/* Contact details. Adresse et email repris tels quels : ce sont
                  des faits, pas de la copie à traduire. Le master ne montre que
                  Paris ici, comme la page FR — Rabat vit sur /ia-maroc. */}
              <div className="mt-10 space-y-3 border-t border-[#E2E8F0] pt-8">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="size-4 shrink-0 text-primary/60" />
                  <span>60 rue François 1er, 75008 Paris</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="size-4 shrink-0 text-primary/60" />
                  <a
                    href={siteConfig.emailHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              {/* Preuve : témoignages, stats, logos défilants, badges */}
              <div className="mt-10 border-t border-[#E2E8F0] pt-8">
                <BookingProof locale="en" />
              </div>
            </div>

            {/* Right: Cal.com embed */}
            <div>
              <BookingGate
                calLink={calLink}
                title="Book a free diagnostic with Othmane Halim"
                calClassName="h-[620px] overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-xl shadow-black/5"
                context="inline"
                locale="en"
              />
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Not into a call?{" "}
                <a
                  href={siteConfig.emailHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer font-medium text-primary hover:underline"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

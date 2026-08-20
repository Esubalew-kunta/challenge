import { MapPin, Mail } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { BookingGate } from "@/components/shared/booking-gate";
import { BookingProof } from "@/components/shared/booking-proof";
import { PageHeroBackground } from "@/components/motion/page-hero-background";
import { siteConfig, bookingUrl } from "@/lib/site-config";

// Lien Cal.com sans l'origine, format attendu par l'API embed ("user/event").
const calLink = bookingUrl.replace(/^https:\/\/cal\.com\//, "");

export const metadata = constructMetadata({
  title: "Contact : réservez votre diagnostic IA gratuit",
  description: "Contactez AI Makers pour un diagnostic IA gratuit. 30 minutes pour analyser vos workflows et cerner vos quick-wins IA à plus fort ROI. Sans pitch commercial.",
  path: "/contact",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: `${siteConfig.url}/contact`,
    },
  ],
};

const steps = [
  { label: "Vous réservez un créneau de 30 min" },
  { label: "On analyse vos workflows en direct" },
  { label: "Vous repartez avec une roadmap IA concrète" },
];

export default function ContactPage() {
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
                  Diagnostic IA gratuit · Sans engagement
                </span>
              </div>

              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
                30 minutes pour savoir exactement{" "}
                <span className="text-primary">ce que l'IA peut faire</span>{" "}
                pour vous.
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Pas de pitch commercial. On analyse vos workflows, on identifie
                vos 3 quick-wins IA à plus fort ROI, et on vous donne une
                première roadmap, que vous travailliez avec nous ou non.
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

              {/* Contact details */}
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
                <BookingProof />
              </div>
            </div>

            {/* Right: Cal.com embed */}
            <div>
              <BookingGate
                calLink={calLink}
                title="Réserver un diagnostic gratuit avec Othmane Halim"
                calClassName="h-[620px] overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-xl shadow-black/5"
                context="inline"
              />
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Pas envie d'un call ?{" "}
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

import { CTASection } from "@/components/shared/cta-section";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { HOMEPAGE } from "@/lib/homepage-locale";
import type { Locale } from "@/lib/i18n";


/**
 * Badges partenaires officiels & certifications (mêmes assets que la page
 * FDE) : preuve institutionnelle en marquee défilant, pause au survol.
 */
const PARTNER_BADGES = [
  { name: "Partner network", issuer: "Anthropic", img: "/images/badges/anthropic-partner.svg" },
  { name: "Certified expert", issuer: "n8n", img: "/images/badges/certs/n8n-certified-expert.png" },
  { name: "Certified partner", issuer: "Make", img: "/images/badges/certs/make-certified-partner.png" },
  { name: "Stack d'ingénierie", issuer: "Cursor", img: "/images/stack/cursor-color.svg" },
  { name: "Plateforme IA", issuer: "Mistral AI", img: "/images/stack/mistral-color.svg" },
  { name: "Enterprise partner", issuer: "Clay", img: "/images/badges/certs/clay-enterprise-partner.png" },
  { name: "Google partner", issuer: "Google", img: "/images/badges/certs/google-partner.png" },
  { name: "AWS partner", issuer: "Amazon Web Services", img: "/images/badges/certs/aws-partner.png" },
  { name: "Azure partner", issuer: "Microsoft", img: "/images/badges/certs/azure-partner.png" },
  { name: "AI industry leader", issuer: "Microsoft", img: "/images/badges/certs/microsoft-ai-industry-leader.png" },
  { name: "Ambassadeur", issuer: "Osez l'IA", img: "/images/badges/osez-lia.png" },
];

function BadgeTile({ badge, hidden }: { badge: (typeof PARTNER_BADGES)[number]; hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="flex w-44 shrink-0 flex-col items-center text-center"
    >
      <div className="flex h-16 items-center justify-center">
        {badge.img.includes("/stack/") ? (
          <span className="flex size-14 items-center justify-center rounded-2xl border border-border bg-white shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={badge.img}
              alt={hidden ? "" : `Badge ${badge.name} (${badge.issuer})`}
              loading="lazy"
              className="h-8 w-8 object-contain"
            />
          </span>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={badge.img}
            alt={hidden ? "" : `Badge ${badge.name} (${badge.issuer})`}
            loading="lazy"
            className="max-h-16 w-auto object-contain"
          />
        )}
      </div>
      <p className="mt-3 text-[13px] font-semibold leading-tight text-foreground">
        {badge.name}
      </p>
      <p className="mt-0.5 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
        {badge.issuer}
      </p>
    </div>
  );
}

export function FinalCTASection({ locale = "fr" }: { locale?: Locale } = {}) {
  const { finalCta } = HOMEPAGE[locale];
  return (
    <>
      <section className="overflow-hidden bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Partenaires officiels
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal>
          <div className="fcta-marquee mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <style>{`
              .fcta-marquee-track { animation: marquee 45s linear infinite; }
              .fcta-marquee:hover .fcta-marquee-track { animation-play-state: paused; }
              @media (prefers-reduced-motion: reduce) {
                .fcta-marquee-track { animation: none; flex-wrap: wrap; justify-content: center; row-gap: 2rem; }
              }
            `}</style>
            <div className="fcta-marquee-track flex w-max items-start gap-10 pr-10">
              {PARTNER_BADGES.map((badge) => (
                <BadgeTile key={badge.img} badge={badge} />
              ))}
              {PARTNER_BADGES.map((badge) => (
                <BadgeTile key={`${badge.img}-dup`} badge={badge} hidden />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
      <ScrollReveal>
        <CTASection
          locale={locale}
          title={finalCta.title}
          subtitle={finalCta.subtitle}
          primaryCta={finalCta.cta}
          urgency={finalCta.urgency}
        />
      </ScrollReveal>
    </>
  );
}

"use client";

import { CheckCircle2, Mail } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { BookingProof } from "@/components/shared/booking-proof";
import { BookingGate } from "@/components/shared/booking-gate";
import { bookingUrl } from "@/lib/site-config";
import { HOMEPAGE } from "@/lib/homepage-locale";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/ui-strings";

// Lien Cal.com sans l'origine, format attendu par l'API embed ("user/event").
const calLink = bookingUrl.replace(/^https:\/\/cal\.com\//, "");

/**
 * Section réservation — le call devient un produit avec sa propre
 * page de vente : promesse + livrables + hôte identifié + Cal.com embarqué.
 * Remplace l'ancienne section "Comment ça marche" (redondante avec la méthode).
 */
export function BookingSection({ locale = "fr" }: { locale?: Locale } = {}) {
  const { booking } = HOMEPAGE[locale];
  const ui = t(locale);
  return (
    <section id="reserver" className="section-padding relative bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Colonne promesse */}
          <ScrollReveal>
            <div>
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {booking.badge}
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {booking.title}
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {booking.subtitle}
              </p>

              <ul className="mt-8 space-y-3">
                {booking.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle2 className="size-5 shrink-0 text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Hôte */}
              <div className="mt-10 flex items-center gap-4 border-t border-border pt-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={booking.host.photo}
                  alt={booking.host.name}
                  className="size-14 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {booking.host.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {booking.host.role}
                  </p>
                  <p className="mt-0.5 inline-flex items-center gap-1.5 text-xs font-medium text-success">
                    <span className="size-1.5 rounded-full bg-success" />
                    {booking.host.responseTime}
                  </p>
                </div>
              </div>

              <p className="mt-4 rounded-xl border border-primary/15 bg-primary/[0.04] px-4 py-3 text-[13px] leading-relaxed text-foreground">
                {ui.hpBookingSponsor}
              </p>

              <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="size-4 text-primary/60" />
                {booking.emailFallback.prefix}{" "}
                <a
                  href={booking.emailFallback.emailHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer font-medium text-primary hover:underline"
                >
                  {booking.emailFallback.email}
                </a>
              </p>

              {/* Preuve sociale : témoignages, stats, logos, badges */}
              <BookingProof
                className="mt-10 border-t border-border pt-8"
                locale={locale}
              />
            </div>
          </ScrollReveal>

          {/* Colonne Cal.com — la sortie du pipeline */}
          <ScrollReveal delay={0.15}>
            <div className="relative lg:sticky lg:top-24">
              <div className="mb-3 flex items-center justify-between px-1">
                <p className="text-sm font-semibold text-foreground">
                  {ui.hpBookingChoose}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/50 motion-reduce:hidden" />
                    <span className="relative inline-flex size-2 rounded-full bg-primary" />
                  </span>
                  {ui.hpBookingFree}
                </span>
              </div>
              <BookingGate
                calLink={calLink}
                title={ui.hpBookingIframeTitle}
                locale={locale}
                calClassName="h-[620px] overflow-hidden rounded-2xl border border-border bg-white shadow-xl shadow-black/[0.04]"
                context="inline"
              />
              <p className="mt-3 text-center text-xs text-muted-foreground">
                {ui.hpBookingNoCommit}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

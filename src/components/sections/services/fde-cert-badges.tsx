"use client";

import { useState } from "react";
import type { CertBadge } from "@/lib/offer-pages/fde";
import { FDE } from "@/lib/offer-pages/fde-locale";
import { t } from "@/lib/ui-strings";
import type { Locale } from "@/lib/i18n";

/**
 * Badges partenaires et certifications (pattern golden-offer) :
 * deux rangées de badges images, chacun avec nom + éditeur en dessous.
 * Rendu défensif : les fichiers /images/badges/certs/*.png sont en
 * cours de récupération, donc toute tuile dont l'image ne charge pas
 * est masquée (onError), même pattern que EngineerAvatar.
 */
function BadgeTile({
  badge,
  imgClass,
  altPrefix,
}: {
  badge: CertBadge;
  imgClass: string;
  altPrefix: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return null;
  }

  return (
    <div className="flex flex-col items-center text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={badge.img}
        alt={`${altPrefix} ${badge.name} (${badge.issuer})`}
        loading="lazy"
        className={`${imgClass} w-auto object-contain`}
        onError={() => setFailed(true)}
      />
      <p className="mt-4 text-sm font-semibold text-foreground">{badge.name}</p>
      <p className="mt-1 text-[11px] font-medium uppercase tracking-widest text-muted-foreground/70">
        {badge.issuer}
      </p>
    </div>
  );
}

export function CertBadgesSection({
  locale = "fr",
}: { locale?: Locale } = {}) {
  const { badges } = FDE[locale];
  const altPrefix = t(locale).fdeBadgeAlt;

  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
          {badges.partnersLabel}
        </p>
        <div className="mt-12 grid grid-cols-2 items-start gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
          {badges.partners.map((badge) => (
            <BadgeTile
              key={badge.img}
              badge={badge}
              imgClass="h-24"
              altPrefix={altPrefix}
            />
          ))}
        </div>

        <p className="mt-20 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
          {badges.certsLabel}
        </p>
        <div className="mx-auto mt-12 flex flex-wrap items-start justify-center gap-x-16 gap-y-12">
          {badges.certs.map((badge) => (
            <BadgeTile
              key={badge.img}
              badge={badge}
              imgClass="h-28"
              altPrefix={altPrefix}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

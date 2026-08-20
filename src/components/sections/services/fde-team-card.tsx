"use client";

import { useState } from "react";
import type { TeamMember } from "@/lib/offer-pages/fde";

/**
 * Avatar défensif : les photos /images/team/*.jpg ne sont pas encore
 * en ligne. Tant qu'elles manquent (ou si le chargement échoue), on
 * affiche un cercle avec les initiales, même pattern que
 * TestimonialAvatar dans booking-proof.tsx.
 */
function EngineerAvatar({ photo, name }: { photo?: string; name: string }) {
  const [failed, setFailed] = useState(false);

  if (!photo || failed) {
    const initials = name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 3)
      .toUpperCase();

    return (
      <div
        aria-hidden
        className="flex size-20 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary"
      >
        {initials}
      </div>
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={photo}
      alt={name}
      className="size-20 shrink-0 rounded-full object-cover"
      onError={() => setFailed(true)}
    />
  );
}

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="glass-card glass-card-hover flex h-full flex-col items-center rounded-2xl p-8 text-center">
      <EngineerAvatar photo={member.photo} name={member.firstName} />
      <p className="mt-5 text-xl font-semibold text-foreground">
        {member.firstName}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>

      <div className="mt-6 flex items-center gap-4 border-t border-border pt-5">
        {member.stack.map((tool) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={tool.name}
            src={tool.img}
            alt={tool.name}
            title={tool.name}
            loading="lazy"
            className="size-6"
          />
        ))}
      </div>
    </div>
  );
}

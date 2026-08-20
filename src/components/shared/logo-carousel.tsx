"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { t } from "@/lib/ui-strings";
import type { Locale } from "@/lib/i18n";

type Logo = {
  name: string;
  img: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    photo?: string;
  };
};

type LogoCarouselProps = {
  logos: readonly Logo[];
  className?: string;
};

// showTestimonials=false : les citations clients ne sont disponibles qu'en
// français. Les afficher telles quelles sur une page anglaise donnerait une
// citation non traduite ; on préfère le carrousel seul. Les traductions
// existent dans le master de la home et seront branchées avec ce portage.
export function LogoCarousel({
  logos,
  className,
  showTestimonials = true,
  locale = "fr",
}: LogoCarouselProps & { showTestimonials?: boolean; locale?: Locale }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const s = t(locale);

  return (
    <div aria-label={s.hpLogosAria} className={cn("py-4", className)}>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-11 md:gap-y-8">
        {logos.map((logo, i) => {
          const hasTestimonial = showTestimonials && !!logo.testimonial;
          const isActive = activeIndex === i;

          return (
            <div key={logo.name} className="relative">
              <button
                type="button"
                onMouseEnter={() => hasTestimonial && setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                onFocus={() => hasTestimonial && setActiveIndex(i)}
                onBlur={() => setActiveIndex(null)}
                className={cn(
                  "group relative flex h-10 w-24 items-center justify-center transition-opacity duration-200 md:h-12 md:w-28",
                  hasTestimonial ? "cursor-pointer" : "cursor-default",
                )}
                aria-label={
                  hasTestimonial
                    ? s.hpLogoAria.replace("{name}", logo.name)
                    : logo.name
                }
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.img}
                  alt={logo.name}
                  className={cn(
                    "max-h-full max-w-full object-contain opacity-90 transition-all duration-[250ms]",
                    "group-hover:scale-[1.03] group-hover:opacity-100",
                    "group-focus-visible:scale-[1.03] group-focus-visible:opacity-100",
                    isActive && "scale-[1.03] opacity-100",
                  )}
                />

                {/* Testimonial indicator dot */}
                {hasTestimonial && (
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute -right-0.5 -top-0.5 size-2 rounded-full bg-primary/70 ring-2 ring-white transition-all duration-200",
                      "group-hover:scale-125 group-hover:bg-primary",
                      "group-focus-visible:scale-125 group-focus-visible:bg-primary",
                      isActive && "scale-125 bg-primary",
                    )}
                  />
                )}
              </button>

              {/* Testimonial popup */}
              <AnimatePresence>
                {isActive && showTestimonials && logo.testimonial && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute bottom-full left-1/2 z-50 mb-4 w-72 -translate-x-1/2"
                    role="tooltip"
                  >
                    <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-xl shadow-black/10">
                      <div className="absolute -bottom-2 left-1/2 size-4 -translate-x-1/2 rotate-45 border-b border-r border-[#E2E8F0] bg-white" />
                      <Quote className="mb-3 size-5 text-primary/40" />
                      <p className="text-sm leading-relaxed text-foreground">
                        {logo.testimonial.quote}
                      </p>
                      <div className="mt-4 flex items-center gap-3 border-t border-[#F1F5F9] pt-3">
                        {logo.testimonial.photo ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            src={logo.testimonial.photo}
                            alt={logo.testimonial.author}
                            className="size-9 shrink-0 rounded-full object-cover"
                          />
                        ) : (
                          <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                            {logo.testimonial.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                        )}
                        <div>
                          <p className="text-xs font-semibold text-foreground">
                            {logo.testimonial.author}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {logo.testimonial.role} · {logo.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {logos.some((logo) => logo.testimonial) && (
        <p className="mt-6 hidden text-center text-xs text-muted-foreground/70 md:block">
          {s.hpLogoHint}
        </p>
      )}
    </div>
  );
}

import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";

type TestimonialCardProps = {
  quote: string;
  name: string;
  title: string;
  company: string;
  photo?: string;
  className?: string;
  /** Guillemets typographiques de la langue. FR par défaut : le rendu FR ne bouge pas. */
  locale?: Locale;
};

export function TestimonialCard({
  quote,
  name,
  title,
  company,
  photo,
  className,
  locale = "fr",
}: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className={cn("glass-card flex flex-col gap-5 p-6 md:p-8", className)}>
      {/* Quote */}
      <blockquote className="flex-1 text-base leading-relaxed text-foreground/90">
        {locale === "en"
          ? `\u201C${quote}\u201D`
          : `\u00AB\u00A0${quote}\u00A0\u00BB`}
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 border-t border-[#E2E8F0] pt-5">
        {photo ? (
          <img
            src={photo}
            alt={name}
            loading="lazy"
            className="size-10 shrink-0 rounded-full object-cover"
          />
        ) : (
          <div
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white"
            aria-hidden="true"
          >
            {initials}
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">
            {title} · <span className="font-medium">{company}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

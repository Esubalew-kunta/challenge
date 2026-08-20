import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        align === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <div className={cn("mb-5", align === "center" && "flex justify-center")}>
          <span className="section-badge inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.07] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed text-muted-foreground",
            align === "center" && "mx-auto max-w-2xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}

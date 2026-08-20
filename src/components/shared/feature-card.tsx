import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "glass-card glass-card-hover p-6 md:p-8",
        className
      )}
    >
      <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 shadow-sm">
        <Icon className="size-6 text-primary" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

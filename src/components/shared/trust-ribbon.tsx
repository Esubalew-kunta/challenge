import { cn } from "@/lib/utils";
import { t } from "@/lib/ui-strings";
import type { Locale } from "@/lib/i18n";
import {
  TargetIcon,
  KeyIcon,
} from "@/components/motion/living-icons";

/**
 * Le style verre premium du badge A1 du site (.section-badge), reproduit en
 * utilitaires : hairline dégradée (wrapper p-px en dégradé), fond blanc
 * translucide + blur, ombre bleue douce, reflet haut.
 */
const chipShellClass =
  "rounded-full bg-gradient-to-br from-primary/45 via-blue-300/25 to-primary/40 p-px shadow-[0_2px_14px_rgba(37,99,235,0.14),0_1px_2px_rgba(15,23,42,0.04)] transition-shadow duration-300";

const chipInnerClass =
  "flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]";

/**
 * Ruban de confiance : rareté réelle + propriété, en chips discrets.
 * Remplace les blocs pleine page : visible au moment de la décision,
 * sans coûter un écran. Chips verre premium (cohérents avec le badge A1)
 * + micro living icons qui rejouent leur scène au survol du chip.
 */
export function TrustRibbon({
  className,
  locale = "fr",
}: {
  className?: string;
  locale?: Locale;
}) {
  const s = t(locale);
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-2.5",
        className
      )}
    >
      <span data-icon-hover-scope className={chipShellClass}>
        <span className={chipInnerClass}>
          <TargetIcon size={15} strokeWidth={2} />
          {s.hpRibbonCapacity}
        </span>
      </span>
      <span data-icon-hover-scope className={chipShellClass}>
        <span className={chipInnerClass}>
          <KeyIcon size={15} strokeWidth={2} />
          {s.hpRibbonOwnership}
        </span>
      </span>
    </div>
  );
}

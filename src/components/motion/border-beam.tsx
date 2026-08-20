import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  /** Longueur du rayon lumineux (px). */
  size?: number;
  /** Durée d'un tour complet (s). */
  duration?: number;
  borderWidth?: number;
  anchor?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

/**
 * Rayon lumineux qui parcourt la bordure de son conteneur — mécanisme
 * BorderBeam (21st.dev, magicui) réhabillé AI Blue. Poser dans un parent
 * `relative` avec un border-radius : le rayon suit le rayon hérité.
 * Purement décoratif (pointer-events none, pas de contenu).
 */
export const BorderBeam = ({
  className,
  size = 180,
  duration = 9,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = "#60A5FA",
  colorTo = "#2563EB",
  delay = 0,
}: BorderBeamProps) => {
  return (
    <div
      aria-hidden="true"
      style={
        {
          "--size": size,
          "--duration": duration,
          "--anchor": anchor,
          "--border-width": borderWidth,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${delay}s`,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",
        "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
        "after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
        className,
      )}
    />
  );
};

import { cn } from "@/lib/utils";

export interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  /** Durée d'un tour complet (s). */
  duration?: number;
  /** Décalage de départ (s) — permet de répartir plusieurs satellites. */
  delay?: number;
  /** Rayon de l'orbite (px). */
  radius?: number;
  /** Affiche le cercle de trajectoire. */
  path?: boolean;
}

/**
 * Satellite qui orbite autour du centre de son conteneur — mécanisme
 * OrbitingCircles (21st.dev, magicui) adapté thème clair AI Makers.
 * Poser dans un parent `relative flex items-center justify-center`.
 */
export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 24,
  delay = 10,
  radius = 50,
  path = true,
}: OrbitingCirclesProps) {
  return (
    <>
      {path && (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-primary/15 stroke-1"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            strokeDasharray="4 4"
          />
        </svg>
      )}

      <div
        style={
          {
            "--duration": duration,
            "--radius": radius,
            "--delay": -delay,
          } as React.CSSProperties
        }
        className={cn(
          "absolute flex size-10 transform-gpu animate-orbit items-center justify-center rounded-full border border-border bg-white shadow-sm [animation-delay:calc(var(--delay)*1000ms)]",
          { "[animation-direction:reverse]": reverse },
          className,
        )}
      >
        {children}
      </div>
    </>
  );
}

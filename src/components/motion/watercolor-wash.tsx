/**
 * Wash aquarelle — texture décorative bleu clair, recréée en CSS/SVG génératif
 * (pas d'image bitmap : responsive, léger, à la couleur exacte de la charte).
 *
 * Reprend l'esprit de la référence : bords bleutés qui déteignent, centre clair.
 * Deux couches — dégradés radiaux doux (la lumière) + grain turbulence teinté
 * (le grain « peinture »). Toujours très subtil : c'est un détail, jamais un aplat.
 *
 * Purement décoratif : aria-hidden, pointer-events-none. Le parent doit clipper
 * (overflow-hidden) et poser le contenu au-dessus (relative z-10).
 *
 * - "bar"  : bords gauche/droite bleutés, centre transparent (barre de menu).
 * - "logo" : petit halo radial doux, centré (derrière le logo).
 */

type WatercolorVariant = "bar" | "logo";

const GRADIENTS: Record<WatercolorVariant, string> = {
  bar: [
    "radial-gradient(ellipse 38% 140% at 0% 50%, rgba(59,130,246,0.10) 0%, rgba(96,165,250,0.05) 40%, transparent 72%)",
    "radial-gradient(ellipse 42% 150% at 100% 45%, rgba(37,99,235,0.09) 0%, rgba(147,197,253,0.045) 42%, transparent 74%)",
    "radial-gradient(ellipse 60% 120% at 82% 120%, rgba(219,234,254,0.5) 0%, transparent 60%)",
  ].join(","),
  logo: [
    "radial-gradient(circle at 50% 55%, rgba(59,130,246,0.22) 0%, rgba(96,165,250,0.12) 38%, transparent 70%)",
  ].join(","),
};

/** Fréquence du grain : plus fin pour le logo (petite surface), plus large pour la barre. */
const GRAIN_FREQ: Record<WatercolorVariant, string> = {
  bar: "0.9 0.016",
  logo: "0.85 0.9",
};

type WatercolorWashProps = {
  variant?: WatercolorVariant;
  className?: string;
};

export function WatercolorWash({
  variant = "bar",
  className,
}: WatercolorWashProps) {
  const filterId = `wc-grain-${variant}`;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className ?? ""}`}
    >
      {/* Couche 1 — la lumière (dégradés radiaux doux) */}
      <div
        className="absolute inset-0"
        style={{ background: GRADIENTS[variant] }}
      />

      {/* Couche 2 — le grain « peinture » (turbulence teintée bleue, très faible) */}
      <svg
        className="absolute inset-0 h-full w-full"
        style={{
          mixBlendMode: "soft-light",
          opacity: variant === "logo" ? 0.5 : 0.35,
        }}
        preserveAspectRatio="none"
      >
        <defs>
          <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency={GRAIN_FREQ[variant]}
              numOctaves={3}
              seed={7}
              result="noise"
            />
            {/* Teinte le bruit en bleu et le rend translucide */}
            <feColorMatrix
              in="noise"
              type="matrix"
              values="0 0 0 0 0.23
                      0 0 0 0 0.45
                      0 0 0 0 0.90
                      0 0 0 0.9 0"
            />
          </filter>
          {/* Le grain s'estompe vers le centre pour garder le texte lisible */}
          <radialGradient
            id={`${filterId}-mask`}
            cx={variant === "logo" ? "50%" : "50%"}
            cy="50%"
            r={variant === "logo" ? "60%" : "75%"}
          >
            <stop
              offset="0%"
              stopColor="black"
              stopOpacity={variant === "logo" ? "0.15" : "0"}
            />
            <stop offset="100%" stopColor="black" stopOpacity="1" />
          </radialGradient>
          <mask id={`${filterId}-m`}>
            <rect width="100%" height="100%" fill={`url(#${filterId}-mask)`} />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          filter={`url(#${filterId})`}
          mask={`url(#${filterId}-m)`}
        />
      </svg>
    </div>
  );
}

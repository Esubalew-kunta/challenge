"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedGridPatternProps = {
  /** Taille d'une cellule de la grille (px). */
  width?: number;
  height?: number;
  /** Nombre de cellules illuminées simultanément. */
  numSquares?: number;
  /** Opacité maximale d'une cellule illuminée. */
  maxOpacity?: number;
  /** Durée d'un cycle allumage/extinction (s). */
  duration?: number;
  className?: string;
};

/**
 * Grille dont des cellules s'illuminent aléatoirement puis s'éteignent —
 * mécanisme adapté du composant "Animated Grid Pattern" (21st.dev,
 * dillionverma), réhabillé charte AI Makers : traits et cellules AI Blue,
 * pensé pour fond clair.
 *
 * SSR-safe : au rendu serveur, dimensions = 0 → toutes les cellules en [0,0],
 * aucun aléatoire divergent entre serveur et client. Les positions réelles ne
 * sont tirées qu'après montage, quand le conteneur est mesuré.
 */
export function AnimatedGridPattern({
  width = 44,
  height = 44,
  numSquares = 26,
  maxOpacity = 0.1,
  duration = 3.4,
  className,
}: AnimatedGridPatternProps) {
  const id = useId();
  const containerRef = useRef<SVGSVGElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const getPos = (dims: { width: number; height: number }) => [
    Math.floor((Math.random() * dims.width) / width),
    Math.floor((Math.random() * dims.height) / height),
  ];

  const generateSquares = (count: number, dims: { width: number; height: number }) =>
    Array.from({ length: count }, (_, i) => ({ id: i, pos: getPos(dims) }));

  const [squares, setSquares] = useState(() =>
    generateSquares(numSquares, { width: 0, height: 0 }),
  );

  // Une cellule éteinte est redistribuée ailleurs : la grille vit en continu
  // sans jamais montrer deux fois le même motif.
  const respawnSquare = (squareId: number) => {
    setSquares((current) =>
      current.map((sq) =>
        sq.id === squareId ? { ...sq, pos: getPos(dimensions) } : sq,
      ),
    );
  };

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(generateSquares(numSquares, dimensions));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dimensions, numSquares]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    resizeObserver.observe(node);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-primary stroke-primary",
        className,
      )}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={-1}
          y={-1}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeOpacity={0.09}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} stroke="none" />
      {!prefersReducedMotion && (
        <svg x={-1} y={-1} className="overflow-visible">
          {squares.map(({ pos: [posX, posY], id: squareId }, index) => (
            <motion.rect
              key={`${squareId}-${posX}-${posY}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: maxOpacity }}
              transition={{
                duration,
                repeat: 1,
                delay: index * 0.12,
                repeatType: "reverse",
              }}
              onAnimationComplete={() => respawnSquare(squareId)}
              width={width - 1}
              height={height - 1}
              x={posX * width + 1}
              y={posY * height + 1}
              strokeWidth="0"
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

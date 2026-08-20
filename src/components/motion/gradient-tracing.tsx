"use client";

import { useId } from "react";
import { motion } from "framer-motion";

interface GradientTracingProps {
  width: number;
  height: number;
  baseColor?: string;
  gradientColors?: [string, string, string];
  animationDuration?: number;
  strokeWidth?: number;
  /** Chemin SVG à tracer — par défaut, une ligne horizontale médiane. */
  path?: string;
}

/**
 * Ligne dont un pulse lumineux parcourt le tracé en boucle — mécanisme
 * GradientTracing (21st.dev, preetsuthar17) adapté AI Blue. L'id du dégradé
 * vient de useId (déterministe SSR — jamais de Math.random côté rendu).
 */
export const GradientTracing = ({
  width,
  height,
  baseColor = "rgba(37, 99, 235, 0.15)",
  gradientColors = ["#60A5FA", "#2563EB", "#1E40AF"],
  animationDuration = 2.4,
  strokeWidth = 2,
  path,
}: GradientTracingProps) => {
  const gradientId = useId();
  const d = path ?? `M0,${height / 2} L${width},${height / 2}`;

  return (
    <div aria-hidden="true" className="relative" style={{ width, height }}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
      >
        <path d={d} stroke={baseColor} strokeWidth={strokeWidth} />
        <path
          d={d}
          stroke={`url(#${gradientId})`}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
        <defs>
          <motion.linearGradient
            animate={{
              x1: [0, width * 2],
              x2: [0, width],
            }}
            transition={{
              duration: animationDuration,
              repeat: Infinity,
              ease: "linear",
            }}
            id={gradientId}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={gradientColors[0]} stopOpacity="0" />
            <stop stopColor={gradientColors[1]} />
            <stop offset="1" stopColor={gradientColors[2]} stopOpacity="0" />
          </motion.linearGradient>
        </defs>
      </svg>
    </div>
  );
};

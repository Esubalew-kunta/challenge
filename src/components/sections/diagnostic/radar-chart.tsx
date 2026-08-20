"use client";

import { motion } from "framer-motion";
import type { RadarScore } from "@/lib/diagnostic-scoring";

interface Props {
  scores: RadarScore[];
  color: string;
}

export function RadarChart({ scores, color }: Props) {
  const size = 280;
  const center = size / 2;
  const maxRadius = 110;
  const levels = 4;
  const count = scores.length;
  const angleStep = (2 * Math.PI) / count;

  const getPoint = (index: number, radius: number) => {
    const angle = angleStep * index - Math.PI / 2;
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    };
  };

  const gridLevels = Array.from({ length: levels }, (_, i) => ((i + 1) / levels) * maxRadius);

  const dataPoints = scores.map((s, i) => {
    const r = (s.percentage / 100) * maxRadius;
    return getPoint(i, r);
  });
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";

  const fullPolygon = (radius: number) =>
    Array.from({ length: count }, (_, i) => getPoint(i, radius))
      .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
      .join(" ") + " Z";

  return (
    <div className="flex flex-col items-center gap-6">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {gridLevels.map((r, i) => (
          <path key={i} d={fullPolygon(r)} fill="none" className="stroke-border" strokeWidth={1} />
        ))}
        {scores.map((_, i) => {
          const p = getPoint(i, maxRadius);
          return <line key={i} x1={center} y1={center} x2={p.x} y2={p.y} className="stroke-border" strokeWidth={1} />;
        })}
        <motion.path
          d={dataPath}
          fill={`${color}15`}
          stroke={color}
          strokeWidth={2.5}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ transformOrigin: `${center}px ${center}px` }}
        />
        {dataPoints.map((p, i) => (
          <motion.circle key={i} cx={p.x} cy={p.y} r={4} fill={color} className="stroke-background" strokeWidth={2}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 + i * 0.1 }} />
        ))}
        {scores.map((s, i) => {
          const p = getPoint(i, maxRadius + 30);
          return (
            <text key={i} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle"
              className="fill-muted-foreground text-[11px] font-medium">
              {s.label}
            </text>
          );
        })}
      </svg>
      <div className="flex flex-wrap justify-center gap-3">
        {scores.map((s) => (
          <div key={s.dimension} className="glass-card rounded-lg px-3 py-1.5 text-center">
            <div className="text-sm font-bold" style={{ color }}>{s.percentage}%</div>
            <div className="text-xs text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

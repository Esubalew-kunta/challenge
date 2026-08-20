"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  score: number;
  maxScore: number;
  color: string;
  label: string;
}

export function ScoreGauge({ score, maxScore, color, label }: Props) {
  const [displayScore, setDisplayScore] = useState(0);
  const percentage = (score / maxScore) * 100;

  useEffect(() => {
    const duration = 1500;
    const steps = 30;
    const stepDuration = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += score / steps;
      if (current >= score) {
        setDisplayScore(score);
        clearInterval(timer);
      } else {
        setDisplayScore(Math.round(current));
      }
    }, stepDuration);
    return () => clearInterval(timer);
  }, [score]);

  const size = 220;
  const strokeWidth = 16;
  const radius = (size - strokeWidth) / 2;
  const circumference = Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size / 2 + 40 }}>
        <svg width={size} height={size / 2 + 20} viewBox={`0 0 ${size} ${size / 2 + 20}`}>
          <path
            d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
            fill="none"
            className="stroke-border"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <motion.path
            d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
          <div className="text-5xl font-black text-foreground">
            {displayScore}
            <span className="text-2xl font-medium text-muted-foreground">/{maxScore}</span>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mt-2 rounded-full px-5 py-1.5 text-sm font-bold"
        style={{ backgroundColor: `${color}15`, color }}
      >
        {label}
      </motion.div>
    </div>
  );
}

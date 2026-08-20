"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { MarkdownHeading } from "@/lib/markdown";

/**
 * Sommaire sticky d'article (desktop xl+). Couche de navigation cliente
 * par-dessus un contenu 100% SSR : les ids d'ancre sont générés côté serveur
 * dans renderMarkdown, ce composant ne fait que lire le DOM.
 *
 * ADN visuel AI Makers : fil vertical + point lumineux. Le segment parcouru
 * s'illumine en AI Blue, le point glisse jusqu'à la section active.
 */

interface ArticleTocProps {
  headings: MarkdownHeading[];
}

/** Seuil (px depuis le haut de la fenêtre) sous lequel une section est considérée active. */
const SPY_OFFSET = 140;
/** Abscisse du fil dans le SVG. */
const RAIL_X = 3;
const RAIL_WIDTH = 12;

export function ArticleToc({ headings }: ArticleTocProps) {
  const prefersReducedMotion = useReducedMotion();
  const listRef = useRef<HTMLDivElement>(null);
  const [centers, setCenters] = useState<number[]>([]);
  const [railHeight, setRailHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const measure = useCallback(() => {
    const list = listRef.current;
    if (!list) return;
    const anchors = Array.from(
      list.querySelectorAll<HTMLAnchorElement>("a[data-toc-link]"),
    );
    setCenters(anchors.map((a) => a.offsetTop + a.offsetHeight / 2));
    setRailHeight(list.offsetHeight);
  }, []);

  useEffect(() => {
    measure();
    const list = listRef.current;
    if (!list || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(measure);
    observer.observe(list);
    return () => observer.disconnect();
  }, [measure, headings]);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        let index = 0;
        for (let i = 0; i < headings.length; i++) {
          const el = document.getElementById(headings[i].id);
          if (!el) continue;
          if (el.getBoundingClientRect().top <= SPY_OFFSET) index = i;
        }
        setActiveIndex(index);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [headings]);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, id: string, index: number) => {
      event.preventDefault();
      const el = document.getElementById(id);
      if (!el) return;
      setActiveIndex(index);
      el.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
      window.history.replaceState(null, "", `#${id}`);
    },
    [prefersReducedMotion],
  );

  if (headings.length === 0) return null;

  const firstCenter = centers[0] ?? 0;
  const lastCenter = centers[centers.length - 1] ?? 0;
  const activeCenter = centers[activeIndex] ?? firstCenter;
  const geometryTransition = prefersReducedMotion
    ? "none"
    : "height 300ms ease, cy 300ms ease";

  return (
    <nav aria-label="Sommaire de l'article">
      <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#94A3B8]">
        Sommaire
      </p>
      <div ref={listRef} className="relative">
        {centers.length > 0 && (
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 overflow-visible"
            width={RAIL_WIDTH}
            height={railHeight}
            viewBox={`0 0 ${RAIL_WIDTH} ${railHeight}`}
          >
            {/* Fil complet (piste) */}
            <rect
              x={RAIL_X - 0.75}
              y={firstCenter}
              width={1.5}
              height={Math.max(0, lastCenter - firstCenter)}
              rx={0.75}
              className="fill-[#E2E8F0]"
            />
            {/* Segment parcouru, illuminé */}
            <rect
              x={RAIL_X - 0.75}
              y={firstCenter}
              width={1.5}
              height={Math.max(0, activeCenter - firstCenter)}
              rx={0.75}
              className="fill-primary"
              style={{ transition: geometryTransition }}
            />
            {/* Halo du point lumineux */}
            <circle
              cx={RAIL_X}
              cy={activeCenter}
              r={6}
              className="fill-primary/15"
              style={{ transition: geometryTransition }}
            />
            {/* Point lumineux */}
            <circle
              cx={RAIL_X}
              cy={activeCenter}
              r={2.5}
              className="fill-primary"
              style={{ transition: geometryTransition }}
            />
          </svg>
        )}

        <div className="space-y-0.5">
          {headings.map((heading, index) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              data-toc-link
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={(event) => handleClick(event, heading.id, index)}
              className={cn(
                "block py-1.5 text-[0.8125rem] leading-5 transition-colors",
                heading.depth === 2 ? "pl-5" : "pl-8",
                index === activeIndex
                  ? "font-semibold text-primary"
                  : index < activeIndex
                    ? "text-foreground/70 hover:text-foreground"
                    : "text-[#94A3B8] hover:text-foreground",
              )}
            >
              {heading.text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

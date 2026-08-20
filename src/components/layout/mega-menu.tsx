"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown } from "lucide-react";
import { megaMenu } from "@/lib/site-config";
import { getMegaMenu } from "@/lib/nav";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type MenuKey = keyof typeof megaMenu;

const MENU_KEYS: readonly MenuKey[] = ["offres", "formations", "cabinet"];

/** Délai avant fermeture au survol — évite les fermetures accidentelles. */
const CLOSE_DELAY_MS = 160;

/**
 * Mega-menu de la barre principale (desktop).
 * Pattern AY Automate : groupes + carte featured. Hover avec intention,
 * navigation clavier (Entrée/Espace pour ouvrir, Échap pour fermer),
 * fermeture au clic extérieur et au changement de page.
 */
// locale par défaut "fr" : les appels existants restent valides et le FR ne
// change pas de comportement.
export function MegaMenu({ locale = "fr" }: { locale?: Locale }) {
  const megaMenuData = getMegaMenu(locale);
  const [openKey, setOpenKey] = useState<MenuKey | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenKey(null), CLOSE_DELAY_MS);
  }, [cancelClose]);

  // Fermer au changement de page
  useEffect(() => {
    setOpenKey(null);
  }, [pathname]);

  // Échap + clic extérieur
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenKey(null);
    };
    const onClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpenKey(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  return (
    <div ref={rootRef} className="contents">
      {MENU_KEYS.map((key) => {
        const menu = megaMenuData[key];
        const isOpen = openKey === key;
        return (
          <div
            key={key}
            className="relative"
            onMouseEnter={() => {
              cancelClose();
              setOpenKey(key);
            }}
            onMouseLeave={scheduleClose}
          >
            {menu.hubHref ? (
              // Entrée avec page hub : le clic navigue, le survol ouvre le
              // panneau, flèche bas au clavier pour ouvrir sans naviguer.
              <Link
                href={menu.hubHref}
                aria-expanded={isOpen}
                aria-haspopup="true"
                onClick={() => setOpenKey(null)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setOpenKey(key);
                  }
                }}
                className={cn(
                  "group relative flex cursor-pointer items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isOpen
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {menu.label}
                <ChevronDown
                  className={cn(
                    "size-3.5 transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                />
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary transition-transform duration-300",
                    isOpen
                      ? "scale-x-100"
                      : "origin-left scale-x-0 group-hover:scale-x-100"
                  )}
                />
              </Link>
            ) : (
              <button
                type="button"
                aria-expanded={isOpen}
                aria-haspopup="true"
                onClick={() => setOpenKey(isOpen ? null : key)}
                className={cn(
                  "group relative flex cursor-pointer items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isOpen
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {menu.label}
                <ChevronDown
                  className={cn(
                    "size-3.5 transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                />
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary transition-transform duration-300",
                    isOpen
                      ? "scale-x-100"
                      : "origin-left scale-x-0 group-hover:scale-x-100"
                  )}
                />
              </button>
            )}

            {/* Panneau */}
            {isOpen && (
              <div
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
                className={cn(
                  "absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3",
                  menu.featured
                    ? "w-[820px] max-w-[90vw]"
                    : "w-max max-w-[90vw]"
                )}
              >
                <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-xl shadow-black/[0.08]">
                  <div
                    className={cn(
                      "grid",
                      menu.featured
                        ? "grid-cols-[1fr_260px]"
                        : "grid-cols-1"
                    )}
                  >
                    {/* Groupes */}
                    <div
                      className={cn(
                        "grid gap-x-6 p-6",
                        menu.groups.length === 3
                          ? "grid-cols-3"
                          : menu.groups.length === 2
                            ? "grid-cols-[1.6fr_1fr]"
                            : "grid-cols-1"
                      )}
                    >
                      {menu.groups.map((group) => (
                        <div key={group.title}>
                          <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/70">
                            {group.title}
                          </p>
                          <ul className="mt-3 space-y-0.5">
                            {group.items.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  onClick={() => setOpenKey(null)}
                                  className="group/item block cursor-pointer rounded-lg px-2.5 py-2 transition-colors hover:bg-primary/[0.05]"
                                >
                                  <span className="block text-sm font-semibold text-foreground group-hover/item:text-primary">
                                    {item.label}
                                  </span>
                                  {item.description && (
                                    <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                                      {item.description}
                                    </span>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Carte featured */}
                    {menu.featured && (
                      <Link
                        href={menu.featured.href}
                        onClick={() => setOpenKey(null)}
                        className="group/feat flex cursor-pointer flex-col border-l border-border bg-muted/40 transition-colors hover:bg-muted/70"
                      >
                        <div className="h-32 overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={menu.featured.image}
                            alt=""
                            loading="lazy"
                            style={
                              "imagePosition" in menu.featured &&
                              menu.featured.imagePosition
                                ? { objectPosition: menu.featured.imagePosition }
                                : undefined
                            }
                            className="h-full w-full object-cover transition-transform duration-500 group-hover/feat:scale-[1.04]"
                          />
                        </div>
                        <div className="flex flex-1 flex-col p-5">
                          <p className="text-[11px] font-semibold uppercase tracking-widest text-primary">
                            {menu.featured.kicker}
                          </p>
                          <p className="mt-1.5 text-sm font-bold text-foreground">
                            {menu.featured.title}
                          </p>
                          <p className="mt-1 flex-1 text-xs leading-relaxed text-muted-foreground">
                            {menu.featured.description}
                          </p>
                          <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                            {menu.featured.ctaLabel}
                            <ArrowRight className="size-3 transition-transform group-hover/feat:translate-x-0.5" />
                          </span>
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getNavItems, homeHref } from "@/lib/nav";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/ui-strings";
import { LanguageSwitcher } from "./language-switcher";
import { Button } from "@/components/ui/button";
import { WatercolorWash } from "@/components/motion/watercolor-wash";
import { MobileNav } from "./mobile-nav";
import { MegaMenu } from "./mega-menu";

export function Header({ locale = "fr" }: { locale?: Locale }) {
  const navItems = getNavItems(locale);
  const s = t(locale);
  // Le CTA de l'en-tête suit le même rabattement que la navigation.
  // Recherche par route, jamais par position : la barre a déjà changé de forme
  // deux fois cette semaine, et un index en dur qui pointe dans le vide fait
  // tomber TOUTES les pages anglaises au prerender, sans alerte au typage.
  const contactHref =
    locale === "en"
      ? (navItems.find((i) => i.href.endsWith("/contact"))?.href ?? "/contact")
      : "/contact";
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  /**
   * L'ombre au défilement est posée sur le DOM, PAS via un état React.
   *
   * Elle passait par `useState`, donc franchir `scrollY > 10` re-rendait tout
   * l'en-tête — plusieurs fois par seconde en défilement normal. Ça marche
   * tant que le DOM n'appartient qu'à React ; ça casse dès qu'un traducteur
   * automatique (Chrome, Safari) est passé avant. Ces extensions REMPLACENT
   * les nœuds de texte du menu par les leurs, React garde des références vers
   * les anciens, et le premier re-rendu qui touche à ces nœuds jette un
   * `NotFoundError: Failed to execute 'removeChild' on 'Node'`. L'utilisateur
   * voit la frontière d'erreur après quelques défilements, « au hasard », sur
   * n'importe quelle page — l'en-tête est partout.
   *
   * Basculer une classe sur un ref ne re-rend rien : React ne redescend plus
   * dans les enfants traduits, et le défilement cesse de coûter un rendu.
   */
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const onScroll = () => {
      const scrolled = window.scrollY > 10;
      el.classList.toggle("bg-white/95", scrolled);
      el.classList.toggle("shadow-lg", scrolled);
      el.classList.toggle("shadow-black/[0.05]", scrolled);
      el.classList.toggle("backdrop-blur-xl", scrolled);
      el.classList.toggle("bg-white/90", !scrolled);
      el.classList.toggle("backdrop-blur-md", !scrolled);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md transition-all duration-300 sm:top-4 sm:left-4 sm:right-4 sm:rounded-2xl"
    >
      {/* Wash aquarelle — calque clippé propre, posé SOUS le contenu.
          Ne pas mettre overflow-hidden sur <header> : les panneaux du
          mega-menu débordent vers le bas et seraient coupés. */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden sm:rounded-2xl">
        <WatercolorWash variant="bar" />
      </div>

      <div className="relative z-10 mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
        {/* Logo */}
        <Link
          href={homeHref(locale)}
          aria-label={s.homeAriaLabel}
          className="flex cursor-pointer items-center gap-2"
        >
          {/* Icône + halo aquarelle centré derrière — le détail */}
          <span className="relative inline-flex shrink-0 items-center justify-center">
            <WatercolorWash variant="logo" className="-inset-2" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-aimakers.png"
              alt=""
              className="relative size-7"
            />
          </span>
          <span className="notranslate text-xl font-bold tracking-tight text-foreground">
            AI
          </span>
          <span className="notranslate text-xl font-bold tracking-tight text-primary">
            Makers
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-1 md:flex"
        >
          <MegaMenu locale={locale} />
          {navItems.map((item) => (
            <NavLink key={item.href} item={item} pathname={pathname} />
          ))}
        </nav>

        {/* CTA + Mobile */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <Button
            asChild
            className="hidden btn-gradient h-9 cursor-pointer rounded-lg px-5 text-sm font-semibold shadow-sm md:inline-flex"
          >
            <Link href={contactHref}>{s.headerCta}</Link>
          </Button>
          <MobileNav locale={locale} />
        </div>
      </div>
    </header>
  );
}

function NavLink({
  item,
  pathname,
}: {
  item: { label: string; href: string };
  pathname: string;
}) {
  const isActive = pathname === item.href;
  return (
    <Link
      href={item.href}
      className={`group relative cursor-pointer rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {item.label}
      <span
        className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary transition-transform duration-300 ${
          isActive
            ? "scale-x-100"
            : "origin-left scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </Link>
  );
}

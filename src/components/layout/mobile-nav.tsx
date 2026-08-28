"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Globe, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { t } from "@/lib/ui-strings";
import { alternateFor, navigationAlternateFor } from "@/lib/i18n";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getNavItems, getMegaMenu } from "@/lib/nav";
import type { Locale } from "@/lib/i18n";

export function MobileNav({ locale = "fr" }: { locale?: Locale }) {
  const navItems = getNavItems(locale);
  const megaMenuData = getMegaMenu(locale);
  const s = t(locale);
  // Même correction que dans l'en-tête : la cible vient de la table de routes,
  // jamais d'un "/contact" en dur — sur une page EN il renvoyait dans l'arbre
  // français, ce qui reperd la langue au premier appui sur le CTA.
  const contactHref = locale === "en" ? (alternateFor("/contact", "en") ?? "/contact") : "/contact";
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="cursor-pointer md:hidden"
          aria-expanded={open}
          aria-label="Ouvrir le menu"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] border-l border-[#E2E8F0] bg-white p-0"
      >
        <SheetHeader className="border-b border-[#E2E8F0] px-6 py-4">
          <SheetTitle className="flex items-center gap-0.5">
            <span className="text-lg font-bold tracking-tight text-foreground">
              AI
            </span>
            <span className="text-lg font-bold tracking-tight text-primary">
              Makers
            </span>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-2 px-6 py-6">
          <nav aria-label="Navigation mobile" className="flex flex-col gap-1">
            {(["offres", "formations", "cabinet"] as const).map((key) => (
              <details key={key} className="group rounded-lg">
                <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-[#F1F5F9] hover:text-foreground [&::-webkit-details-marker]:hidden">
                  {megaMenuData[key].label}
                  <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="space-y-3 pb-2 pl-4">
                  {megaMenuData[key].groups.map((g) => (
                    <div key={g.title}>
                      <p className="px-3 pt-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60">
                        {g.title}
                      </p>
                      {g.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="block cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-[#F1F5F9] hover:text-foreground"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </details>
            ))}
            {navItems.map((item) => (
              <MobileLink
                key={item.href}
                item={item}
                pathname={pathname}
                close={() => setOpen(false)}
              />
            ))}
          </nav>
          <div className="mt-4">
            <Button
              asChild
              className="w-full btn-gradient h-12 cursor-pointer rounded-lg text-base font-semibold shadow-sm"
            >
              <Link href={contactHref} onClick={() => setOpen(false)}>
                {s.headerCta}
              </Link>
            </Button>
          </div>
          <div className="mt-4 flex justify-center">
            <MobileLanguageLinks locale={locale} onNavigate={() => setOpen(false)} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function MobileLink({
  item,
  pathname,
  close,
}: {
  item: { label: string; href: string };
  pathname: string;
  close: () => void;
}) {
  const isActive = pathname === item.href;
  return (
    <Link
      href={item.href}
      onClick={close}
      className={`cursor-pointer rounded-lg px-3 py-3 text-base font-medium transition-colors ${
        isActive
          ? "border-l-2 border-primary bg-primary/5 pl-2.5 text-primary"
          : "text-muted-foreground hover:bg-[#F1F5F9] hover:text-foreground"
      }`}
    >
      {item.label}
    </Link>
  );
}

/**
 * Bascule de langue dans le tiroir mobile.
 *
 * Volontairement distincte de `LanguageSwitcher` (en-tête) : celle-ci doit
 * refermer le tiroir en partant, et se dessine en pleine largeur plutôt qu'en
 * pastille. Elle partage l'essentiel, `navigationAlternateFor()` — même règle :
 * pas de lien tant que la page n'est pas publiée dans l'autre langue.
 */
function MobileLanguageLinks({
  locale,
  onNavigate,
}: {
  locale: Locale;
  onNavigate: () => void;
}) {
  const pathname = usePathname();
  const other: Locale = locale === "fr" ? "en" : "fr";
  const target = navigationAlternateFor(pathname, other);
  const labels: Record<Locale, string> = { fr: "Français", en: "English" };

  return (
    <div
      className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm"
      role="group"
      aria-label={locale === "fr" ? "Choix de la langue" : "Language"}
    >
      <Globe className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
      <span aria-current="true" className="font-semibold text-primary">
        {labels[locale]}
      </span>
      <span className="text-muted-foreground/40" aria-hidden="true">
        ·
      </span>
      {target ? (
        <Link
          href={target}
          hrefLang={other}
          onClick={onNavigate}
          className="text-muted-foreground hover:text-foreground"
        >
          {labels[other]}
        </Link>
      ) : (
        <span
          aria-disabled="true"
          title={
            other === "en"
              ? "Cette page n'existe pas encore en anglais"
              : "This page is not available in French"
          }
          className="cursor-not-allowed text-muted-foreground/40"
        >
          {labels[other]}
        </span>
      )}
    </div>
  );
}

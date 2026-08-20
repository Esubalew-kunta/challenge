import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/ui-strings";

/**
 * Aperçu compact de l'équipe en tête de la page /equipe : la rangée de
 * visages réels + les compteurs, juste sous le hero. Donne le "6 = 40" en
 * un coup d'œil avant les cartes détaillées.
 */

const members = [
  { name: "Othmane Halim", role: "CEO", photo: "/images/formateurs/othmane-halim.jpg" },
  { name: "Maneesh Behera", role: "COO", photo: "/images/formateurs/maneesh-behera.jpg" },
  { name: "Walid Boulanouar", role: "CTO", photo: "/images/team/walid.jpg" },
  { name: "Edouard Willemsen", role: "trainer", photo: "/images/formateurs/edouard-willemsen.jpg" },
  { name: "Esubalew Kunta", role: "AI Engineer", photo: "/images/team/kunta.jpg" },
  { name: "Yosef Dejene", role: "AI Engineer", photo: "/images/team/yosef-dejene.jpg" },
  { name: "Meek Rand", role: "AI Engineer", photo: "/images/team/meek-rand.jpg" },
  { name: "Ismail Halim", role: "SEO/GEO Lead", photo: "/images/team/ismail-halim.jpg" },
  { name: "Youssef Benali", role: "AI Operator", photo: "/images/team/youssef-benali.jpg" },
];

export function TeamOverview({ locale = "fr" }: { locale?: Locale } = {}) {
  const s = t(locale);
  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <ScrollReveal delay={0.1}>
        <ul className="mx-auto flex max-w-4xl flex-wrap items-start justify-center gap-x-8 gap-y-8 sm:gap-x-12">
          {members.map((m) => (
            <li key={m.name} className="flex w-24 flex-col items-center text-center sm:w-28">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={m.photo}
                alt={m.name}
                loading="lazy"
                className="size-16 rounded-full object-cover shadow-sm sm:size-20"
              />
              <span className="mt-3 text-sm font-semibold text-foreground">
                {m.name}
              </span>
              <span className="text-xs text-muted-foreground">
                {m.role === "trainer" ? s.teamRoleTrainer : m.role}
              </span>
            </li>
          ))}
        </ul>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="mt-12 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-14">
          <AnimatedCounter locale={locale} target={50} prefix="+" label={s.teamStatCompanies} />
          <span className="hidden h-10 w-px bg-border sm:block" />
          <AnimatedCounter locale={locale} target={200} prefix="+" label={s.teamStatSystems} />
          <span className="hidden h-10 w-px bg-border sm:block" />
          <AnimatedCounter locale={locale} target={10000} prefix="+" label={s.teamStatTrained} />
        </div>
      </ScrollReveal>
    </div>
  );
}

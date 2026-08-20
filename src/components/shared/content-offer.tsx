import { LeadCapture } from "@/components/shared/lead-capture";
import type { LeadSource } from "@/lib/schemas/lead";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/ui-strings";

/**
 * Bloc d'offre pour les surfaces organiques — blog et glossaire.
 *
 * Ces pages étaient les seules du site sans aucune capture en ligne : 21
 * articles, le hub du blog et le glossaire n'avaient que la newsletter du pied
 * de page et la pop-up de sortie. C'est pourtant là qu'arrive le trafic de
 * recherche, et sur l'intention la plus haute (quelqu'un qui lit un article sur
 * l'audit IA jusqu'au bout).
 *
 * On propose le playbook, pas un abonnement : la newsletter est déjà dans le
 * pied de page de la même page, et deux demandes d'email concurrentes se
 * cannibalisent.
 */

type ContentOfferProps = {
  source: Extract<LeadSource, "blog" | "glossaire">;
  /** Distingue les instances — le slug de l'article, par exemple. */
  context: string;
  title?: string;
  subtitle?: string;
  locale?: Locale;
};

export function ContentOffer({
  source,
  context,
  title,
  subtitle,
  locale = "fr",
}: ContentOfferProps) {
  const s = t(locale);
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <LeadCapture
        source={source}
        context={`${source}-${context}`}
        locale={locale}
        title={title ?? s.offerTitle}
        subtitle={subtitle ?? s.offerSubtitle}
        ctaLabel={s.offerCta}
        successTitle={s.offerSuccessTitle}
        successMessage={s.offerSuccessMsg}
      />
    </section>
  );
}

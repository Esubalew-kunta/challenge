/**
 * Bandeau de fin de page offres : partenariats réels + stack maîtrisée.
 * Pattern inspiré de la section badges d'ayautomate (golden-offer) —
 * uniquement des partenariats vérifiés, pas de certifications inventées.
 */

import { t } from "@/lib/ui-strings";
import type { Locale } from "@/lib/i18n";

// Osez l'IA et Anthropic vivent dans le footer juste en dessous : pas de doublon ici.
const PARTNERS = [
  { img: "/images/partners/ayautomate.webp", label: "AY Automate", labelFr: "AY Automate · partenaire francophone" },
  { img: "/images/stack/claude-color.svg", label: "Claude Certified Architect" },
  { img: "/images/stack/n8n-color.svg", label: "n8n Certified Expert" },
] as const;

const STACK = [
  { img: "/images/stack/claude-color.svg", name: "Claude" },
  { img: "/images/stack/openai-color.svg", name: "OpenAI" },
  { img: "/images/stack/gemini-color.svg", name: "Gemini" },
  { img: "/images/stack/notion-color.svg", name: "Notion" },
  { img: "/images/stack/copilot-color.svg", name: "Microsoft Copilot" },
  { img: "/images/stack/langchain-color.svg", name: "LangChain" },
  { img: "/images/badges/make.svg", name: "Make" },
  { img: "/images/badges/google.svg", name: "Google" },
  { img: "/images/badges/aws.svg", name: "AWS" },
  { img: "/images/badges/azure.svg", name: "Azure" },
  { img: "/images/badges/clay.png", name: "Clay" },
] as const;

export function PartnerStrip({ locale = "fr" }: { locale?: Locale }) {
  const s = t(locale);
  return (
    <section className="border-t border-border bg-surface py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
          {s.partnerStripTitle}
        </p>

        {/* Partenariats officiels */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {PARTNERS.map((p) => (
            <span
              key={p.label}
              className="inline-flex items-center gap-2.5 rounded-full border border-border bg-white px-4 py-2"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.img}
                alt={p.label}
                className="h-5 w-auto max-w-24 object-contain"
              />
              <span className="text-xs font-medium text-muted-foreground">
                {locale === "fr" && "labelFr" in p ? p.labelFr : p.label}
              </span>
            </span>
          ))}
        </div>

        {/* Stack */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {STACK.map((tool) => (
            <span key={tool.name} className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tool.img}
                alt={tool.name}
                loading="lazy"
                className="size-5"
              />
              <span className="text-sm text-muted-foreground">
                {tool.name}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

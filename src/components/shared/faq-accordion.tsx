import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
  className?: string;
};

/**
 * Accordéon FAQ en <details>/<summary> natifs, rendu 100% serveur :
 * les réponses sont dans le HTML brut, donc lisibles par les crawlers
 * IA (GPTBot, ClaudeBot, PerplexityBot n'exécutent pas le JavaScript)
 * et conformes aux guidelines Google (le contenu du schema FAQPage
 * doit être visible sur la page). Zéro JS, accessible clavier natif.
 */
export function FAQAccordion({ items, className }: FAQAccordionProps) {
  return (
    <div className={cn("w-full", className)}>
      {items.map((item) => (
        <details key={item.question} className="group border-b border-border">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-medium text-foreground transition-colors hover:text-primary group-open:text-primary [&::-webkit-details-marker]:hidden">
            {item.question}
            <ChevronDown className="size-4 shrink-0 transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <p className="pb-5 text-[15px] leading-relaxed text-muted-foreground">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}

/**
 * Génère un schema FAQPage (JSON-LD) à partir d'une liste de questions/réponses.
 * Centralisé pour que toutes les pages avec une FAQ exposent le même signal
 * structuré aux moteurs génératifs (GEO). À passer à <JsonLd data={...} />.
 */
export type FaqSchemaItem = { question: string; answer: string };

export function faqPageSchema(
  items: readonly FaqSchemaItem[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

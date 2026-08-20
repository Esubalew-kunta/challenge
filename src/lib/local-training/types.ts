/**
 * Socle réutilisable des pages « Formation IA + ville » (V2).
 *
 * Objectif : un tronc commercial commun et un contenu local réellement
 * différencié, pour que Nice, Toulouse, Nantes… puissent migrer sans
 * transformer ces pages en doorway pages.
 *
 * Le contenu vit dans `src/lib/local-training/<ville>.ts`, le rendu dans
 * `src/components/pages/local-training-page.tsx`. Le type est STRUCTUREL :
 * une ville ne dérive pas ses types d'une autre.
 */

export type TrainingLink = {
  readonly label: string;
  readonly href: string;
};

export type TrainingBlock =
  /** Paragraphe simple. */
  | { readonly kind: "p"; readonly text: string }
  /** Liste à puces. */
  | { readonly kind: "ul"; readonly items: readonly string[] }
  /** Lien interne contextuel, rendu en fin de bloc. */
  | { readonly kind: "link"; readonly label: string; readonly href: string }
  /**
   * Source externe visible et cliquable. Porte la preuve locale : l'URL est
   * affichée telle quelle, pas masquée derrière un libellé marketing.
   */
  | { readonly kind: "source"; readonly href: string }
  /**
   * Témoignage rendu depuis `clientLogos` (source de vérité unique).
   * `note` sert à qualifier la portée de la preuve.
   */
  | {
      readonly kind: "testimonial";
      readonly client: string;
      readonly lead: string;
      readonly note: string;
    }
  /** Progression « a → b → c », rendue comme une suite d'étapes. */
  | { readonly kind: "flow"; readonly steps: readonly string[] }
  /** Appel à l'action intermédiaire. */
  | { readonly kind: "cta"; readonly label: string; readonly href: string };

export type TrainingSubsection = {
  readonly title: string;
  readonly blocks: readonly TrainingBlock[];
};

export type TrainingSection = {
  readonly title: string;
  readonly blocks?: readonly TrainingBlock[];
  readonly subs?: readonly TrainingSubsection[];
  /** Blocs rendus APRÈS les sous-sections. */
  readonly after?: readonly TrainingBlock[];
};

export type TrainingFaqItem = {
  readonly question: string;
  readonly answer: string;
};

export type LocalTrainingContent = {
  readonly slug: string;
  readonly city: string;
  readonly region: string;
  readonly meta: {
    /** Sans « | AI Makers » : le suffixe vient du template du layout FR. */
    readonly title: string;
    readonly description: string;
  };
  readonly breadcrumb: readonly TrainingLink[];
  readonly schema: {
    readonly serviceName: string;
    readonly serviceType: string;
    readonly serviceDescription: string;
  };
  readonly hero: {
    readonly h1: string;
    readonly intro: readonly string[];
    readonly cta: TrainingLink;
  };
  readonly sections: readonly TrainingSection[];
  readonly faq: {
    readonly title: string;
    readonly items: readonly TrainingFaqItem[];
  };
  readonly finalCta: {
    readonly title: string;
    readonly paragraphs: readonly string[];
    readonly primary: TrainingLink;
    readonly secondary: TrainingLink;
  };
};

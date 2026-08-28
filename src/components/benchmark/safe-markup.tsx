/**
 * Le seul balisage qu'une question ou une explication a le droit de porter.
 *
 * Le contenu est écrit par nous et vit dans le dépôt, donc ce n'est pas une
 * défense contre un attaquant : c'est une limite sur ce qu'un auteur peut
 * glisser dans une chaîne sans que personne le remarque. Tout est échappé, puis
 * trois balises sont rendues à la vie, celles que le PRD autorise en 8.7.
 */

const ALLOWED = ["code", "strong", "em"] as const;

export function sanitiseInline(raw: string): string {
  const escaped = raw
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return ALLOWED.reduce(
    (text, tag) =>
      text
        .replaceAll(`&lt;${tag}&gt;`, `<${tag}>`)
        .replaceAll(`&lt;/${tag}&gt;`, `</${tag}>`),
    escaped,
  );
}

type Props = {
  text: string;
  className?: string;
  as?: "p" | "span" | "div";
};

export function SafeMarkup({ text, className, as: Tag = "span" }: Props) {
  return (
    <Tag
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitiseInline(text) }}
    />
  );
}

/**
 * Body copy in the challenge is plain strings with one piece of markup:
 * `backticks` for inline code. Keeping it to one rule means the content files
 * stay readable and nobody has to think about markdown while writing a lesson.
 */

import { Fragment } from "react";

export function RichText({ text }: { text: string }) {
  const parts = text.split(/(`[^`]+`)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("`") && part.endsWith("`") && part.length > 2 ? (
          <code
            key={i}
            className="rounded-[6px] bg-secondary px-1.5 py-0.5 font-mono text-[0.875em] text-primary-dark"
          >
            {part.slice(1, -1)}
          </code>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

export function Paragraphs({
  items,
  className = "text-muted-foreground",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <>
      {items.map((line, i) => (
        <p key={i} className={className}>
          <RichText text={line} />
        </p>
      ))}
    </>
  );
}

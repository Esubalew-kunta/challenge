import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Renderer markdown minimal, sans dépendance externe.
 * Gère : ## H2, ### H3, listes "-", citations "> ", paragraphes, **gras**,
 * liens [texte](url).
 *
 * Les H2/H3 reçoivent un id stable généré côté serveur (slugify au rendu SSR),
 * ce qui alimente le sommaire scroll-spy sans toucher au contenu indexable.
 */

const INLINE_PATTERN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\))/g;

function renderInline(text: string): ReactNode[] {
  const parts = text.split(INLINE_PATTERN);

  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      const isExternal = href.startsWith("http");
      if (isExternal) {
        return (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            {label}
          </a>
        );
      }
      return (
        <Link key={i} href={href} className="font-medium text-primary hover:underline">
          {label}
        </Link>
      );
    }

    return part;
  });
}

type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "paragraph"; text: string };

function parseBlocks(markdown: string): Block[] {
  const blocks: Block[] = [];
  const chunks = markdown
    .split(/\r?\n\r?\n+/)
    .map((chunk) => chunk.trim())
    .filter(Boolean);

  for (const chunk of chunks) {
    const lines = chunk.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
    let listItems: string[] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        blocks.push({ type: "list", items: listItems });
        listItems = [];
      }
    };

    let paragraphLines: string[] = [];
    const flushParagraph = () => {
      if (paragraphLines.length > 0) {
        blocks.push({ type: "paragraph", text: paragraphLines.join(" ") });
        paragraphLines = [];
      }
    };

    let quoteLines: string[] = [];
    const flushQuote = () => {
      if (quoteLines.length > 0) {
        blocks.push({ type: "quote", text: quoteLines.join(" ") });
        quoteLines = [];
      }
    };

    for (const line of lines) {
      if (line.startsWith("### ")) {
        flushList();
        flushParagraph();
        flushQuote();
        blocks.push({ type: "h3", text: line.slice(4) });
      } else if (line.startsWith("## ")) {
        flushList();
        flushParagraph();
        flushQuote();
        blocks.push({ type: "h2", text: line.slice(3) });
      } else if (line.startsWith("- ")) {
        flushParagraph();
        flushQuote();
        listItems.push(line.slice(2));
      } else if (line.startsWith("> ") || line === ">") {
        flushList();
        flushParagraph();
        quoteLines.push(line.replace(/^>\s?/, ""));
      } else {
        flushList();
        flushQuote();
        paragraphLines.push(line);
      }
    }

    flushList();
    flushParagraph();
    flushQuote();
  }

  return blocks;
}

/** Retire la syntaxe inline (gras, liens) pour obtenir le texte brut d'un titre. */
function stripInline(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1")
    .trim();
}

/** Slug d'ancre : minuscules, sans accents, kebab-case. Calculé au rendu serveur. */
export function slugifyHeading(text: string): string {
  return stripInline(text)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export type MarkdownHeading = {
  id: string;
  text: string;
  depth: 2 | 3;
};

/**
 * Attribue un id unique à chaque bloc H2/H3 (suffixe -2, -3... en cas de
 * doublon). Logique partagée entre extractHeadings et renderMarkdown pour
 * garantir des ancres identiques côté sommaire et côté contenu.
 */
function assignHeadingIds(blocks: Block[]): (string | null)[] {
  const counts = new Map<string, number>();
  return blocks.map((block) => {
    if (block.type !== "h2" && block.type !== "h3") return null;
    const base = slugifyHeading(block.text) || "section";
    const seen = counts.get(base) ?? 0;
    counts.set(base, seen + 1);
    return seen === 0 ? base : `${base}-${seen + 1}`;
  });
}

/** Liste des H2/H3 d'un article avec leurs ids d'ancre (pour le sommaire). */
export function extractHeadings(markdown: string): MarkdownHeading[] {
  const blocks = parseBlocks(markdown);
  const ids = assignHeadingIds(blocks);
  const headings: MarkdownHeading[] = [];

  blocks.forEach((block, i) => {
    if (block.type !== "h2" && block.type !== "h3") return;
    const id = ids[i];
    if (!id) return;
    headings.push({
      id,
      text: stripInline(block.text),
      depth: block.type === "h2" ? 2 : 3,
    });
  });

  return headings;
}

export function renderMarkdown(markdown: string): ReactNode {
  const blocks = parseBlocks(markdown);
  const ids = assignHeadingIds(blocks);

  return blocks.map((block, i) => {
    switch (block.type) {
      case "h2":
        return (
          <h2
            key={i}
            id={ids[i] ?? undefined}
            className="mt-12 scroll-mt-28 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            {renderInline(block.text)}
          </h2>
        );
      case "h3":
        return (
          <h3
            key={i}
            id={ids[i] ?? undefined}
            className="mt-8 scroll-mt-28 text-xl font-semibold text-foreground"
          >
            {renderInline(block.text)}
          </h3>
        );
      case "list":
        return (
          <ul key={i} className="mt-5 list-disc space-y-2.5 pl-6">
            {block.items.map((item, j) => (
              <li
                key={j}
                className="text-base leading-[1.75] text-muted-foreground"
              >
                {renderInline(item)}
              </li>
            ))}
          </ul>
        );
      case "quote":
        return (
          <blockquote
            key={i}
            className="mt-6 rounded-r-xl border-l-2 border-primary/70 bg-primary/[0.04] py-3 pl-5 pr-4"
          >
            <p className="text-base italic leading-[1.75] text-foreground/80">
              {renderInline(block.text)}
            </p>
          </blockquote>
        );
      case "paragraph":
        return (
          <p
            key={i}
            className="mt-5 text-pretty text-base leading-[1.75] text-muted-foreground"
          >
            {renderInline(block.text)}
          </p>
        );
    }
  });
}

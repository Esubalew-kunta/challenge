import fs from "fs";
import path from "path";

export type BlogPost = {
  slug: string;
  /** Titre affiché en H1 de l'article. Écrit pour être lu, pas pour un SERP. */
  title: string;
  /**
   * Titre du résultat de recherche, sans le suffixe de marque : le template du
   * layout ajoute « | AI Makers ». À renseigner quand le titre d'article
   * dépasse la soixantaine de caractères affichés. Défaut : `title`.
   */
  seoTitle?: string;
  description: string;
  date: string;
  author: string;
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

type Frontmatter = Record<string, string>;

function parseFrontmatter(raw: string): {
  frontmatter: Frontmatter;
  content: string;
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) {
    return { frontmatter: {}, content: raw.trim() };
  }

  const frontmatter: Frontmatter = {};
  for (const line of match[1].split(/\r?\n/)) {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) continue;
    const key = line.slice(0, separatorIndex).trim();
    const value = line
      .slice(separatorIndex + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
    if (key) frontmatter[key] = value;
  }

  return { frontmatter, content: raw.slice(match[0].length).trim() };
}

function readPost(fileName: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, fileName);
  let raw: string;
  try {
    raw = fs.readFileSync(filePath, "utf-8");
  } catch {
    return null;
  }

  const { frontmatter, content } = parseFrontmatter(raw);
  if (!frontmatter.title || !frontmatter.date) {
    return null;
  }

  return {
    slug: fileName.replace(/\.md$/, ""),
    title: frontmatter.title,
    seoTitle: frontmatter.seoTitle || undefined,
    description: frontmatter.description ?? "",
    date: frontmatter.date,
    author: frontmatter.author ?? "AI Makers",
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  let files: string[];
  try {
    files = fs.readdirSync(BLOG_DIR);
  } catch {
    return [];
  }

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => readPost(file))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): BlogPost | null {
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return null;
  }
  return readPost(`${slug}.md`);
}

export type FaqItem = { question: string; answer: string };

/**
 * Extrait les questions/réponses d'un article pour générer un schema FAQPage.
 * Convention : une section "## FAQ" ou "## Questions fréquentes", puis chaque
 * question en "### ..." suivie de son paragraphe de réponse. Améliore la
 * citabilité de l'article dans les moteurs génératifs (GEO).
 */
export function extractFaq(content: string): FaqItem[] {
  const lines = content.split(/\r?\n/);
  const faqs: FaqItem[] = [];

  let inFaqSection = false;
  let currentQuestion: string | null = null;
  let answerLines: string[] = [];

  const flush = () => {
    if (currentQuestion && answerLines.length > 0) {
      faqs.push({
        question: currentQuestion,
        answer: answerLines.join(" ").replace(/\s+/g, " ").trim(),
      });
    }
    currentQuestion = null;
    answerLines = [];
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith("## ")) {
      flush();
      const heading = trimmed.slice(3).toLowerCase();
      inFaqSection = heading.includes("faq") || heading.includes("questions");
      continue;
    }

    if (!inFaqSection) continue;

    if (trimmed.startsWith("### ")) {
      flush();
      currentQuestion = trimmed.slice(4).trim();
    } else if (currentQuestion && trimmed) {
      answerLines.push(trimmed);
    }
  }

  flush();
  return faqs;
}

export function formatPostDate(date: string): string {
  const parsed = new Date(`${date}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) {
    return date;
  }
  return parsed.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

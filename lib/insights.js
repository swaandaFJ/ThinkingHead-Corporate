// Reads Markdown files from /content/insights at build time (server-side only).
// Add an insight = add a .md file. See content/insights/_template.md.

import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";

const DIR = path.join(process.cwd(), "content", "insights");

export const CATEGORIES = ["Research", "Frameworks", "Perspectives"];

// Splits a Markdown file into its "---" frontmatter block (parsed as YAML) and the body.
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  return { data: YAML.parse(match[1]) || {}, content: match[2] };
}

function readingTime(text) {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function parseFile(file) {
  const slug = file.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(DIR, file), "utf8");
  const { data, content } = parseFrontmatter(raw);
  return {
    slug,
    title: data.title || slug,
    date: data.date ? new Date(data.date).toISOString() : null,
    author: data.author || "ThinkingHead",
    category: data.category || "Perspectives",
    summary: data.summary || "",
    draft: Boolean(data.draft),
    minutes: readingTime(content),
    content,
  };
}

export function getAllInsights() {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    // files starting with "_" (like the template) are ignored; so are drafts
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map(parseFile)
    .filter((i) => !i.draft)
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""));
}

export function getInsight(slug) {
  return getAllInsights().find((i) => i.slug === slug) || null;
}

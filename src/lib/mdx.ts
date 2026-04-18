import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Article, ArticleMeta, Category } from '@/types';

const CONTENT_DIR = path.join(process.cwd(), 'content/blog');

export function getAllArticles(): ArticleMeta[] {
  const files = fs.readdirSync(CONTENT_DIR);

  return files
    .filter((f) => f.endsWith('.md'))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), 'utf-8');
      const { data } = matter(raw);
      return { ...(data as Omit<ArticleMeta, 'slug'>), slug };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticlesByCategory(category: Category): ArticleMeta[] {
  return getAllArticles().filter((a) => a.category === category);
}

export async function getArticleBySlug(slug: string): Promise<Article> {
  const fullPath = path.join(CONTENT_DIR, `${slug}.md`);
  const raw = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(raw);

  const processed = await remark().use(html, { sanitize: false }).process(content);

  return {
    ...(data as Omit<ArticleMeta, 'slug'>),
    slug,
    content: processed.toString(),
  };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

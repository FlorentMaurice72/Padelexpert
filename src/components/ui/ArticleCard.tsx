import Link from 'next/link';
import { ArticleMeta } from '@/types';

const categoryLabels: Record<string, string> = {
  blog: 'Blog',
  guide: 'Guide',
  comparatif: 'Comparatif',
  test: 'Test',
};

const categoryColors: Record<string, string> = {
  blog: 'text-blue-600',
  guide: 'text-emerald-600',
  comparatif: 'text-purple-600',
  test: 'text-orange-600',
};

interface Props {
  article: ArticleMeta;
}

export default function ArticleCard({ article }: Props) {
  return (
    <article className="group transition-transform duration-200 hover:-translate-y-0.5">
      <Link href={`/blog/${article.slug}`} className="block">
        <div className="bg-gray-200 aspect-[3/2] rounded-lg mb-4 overflow-hidden" />

        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span
              className={`text-xs font-semibold uppercase tracking-widest ${categoryColors[article.category] ?? 'text-gray-500'}`}
            >
              {categoryLabels[article.category] ?? article.category}
            </span>
            <time className="text-xs text-gray-400" dateTime={article.date}>
              {new Date(article.date).toLocaleDateString('fr-FR', {
                month: 'long',
                year: 'numeric',
              })}
            </time>
          </div>

          <h2 className="font-serif text-xl text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug">
            {article.title}
          </h2>

          <p className="text-sm text-gray-500 line-clamp-2">{article.description}</p>

          <span className="inline-block pt-1 text-xs font-medium text-emerald-600 group-hover:underline">
            Lire l&apos;article →
          </span>
        </div>
      </Link>
    </article>
  );
}

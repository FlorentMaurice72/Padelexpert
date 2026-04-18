import Link from 'next/link';
import { ArticleMeta } from '@/types';

const categoryLabels: Record<string, string> = {
  blog: 'Blog',
  guide: 'Guide',
  comparatif: 'Comparatif',
  test: 'Test',
};

const categoryColors: Record<string, string> = {
  blog: 'bg-blue-100 text-blue-700',
  guide: 'bg-emerald-100 text-emerald-700',
  comparatif: 'bg-purple-100 text-purple-700',
  test: 'bg-orange-100 text-orange-700',
};

interface Props {
  article: ArticleMeta;
}

export default function ArticleCard({ article }: Props) {
  return (
    <article className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <Link href={`/blog/${article.slug}`} className="block p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[article.category] ?? 'bg-gray-100 text-gray-600'}`}>
            {categoryLabels[article.category] ?? article.category}
          </span>
          <time className="text-xs text-gray-400" dateTime={article.date}>
            {new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </time>
        </div>

        <h2 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2 leading-snug">
          {article.title}
        </h2>

        <p className="text-sm text-gray-500 line-clamp-2">{article.description}</p>

        <span className="inline-block mt-4 text-sm font-medium text-emerald-600 group-hover:underline">
          Lire l&apos;article →
        </span>
      </Link>
    </article>
  );
}

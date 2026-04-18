import type { Metadata } from 'next';
import ArticleCard from '@/components/ui/ArticleCard';
import { getArticlesByCategory } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Tests Produits Padel',
  description:
    'Tests et avis détaillés sur les raquettes, chaussures et accessoires padel. Des retours terrain honnêtes pour guider votre achat.',
};

export default function TestsPage() {
  const tests = getArticlesByCategory('test');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Tests Produits Padel</h1>
        <p className="text-gray-500 max-w-xl">
          Des avis terrain honnêtes sur le matériel padel. On teste pour que vous choisissiez en confiance.
        </p>
      </header>

      {tests.length === 0 ? (
        <p className="text-gray-400">Aucun test pour l&apos;instant. Revenez bientôt !</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tests.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}

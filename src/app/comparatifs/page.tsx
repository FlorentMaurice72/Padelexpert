import type { Metadata } from 'next';
import ArticleCard from '@/components/ui/ArticleCard';
import { getArticlesByCategory } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Comparatifs Raquettes et Matériel Padel',
  description:
    'Comparatifs détaillés et honnêtes de raquettes, chaussures et accessoires padel pour vous aider à faire le meilleur choix.',
};

export default function ComparatifsPage() {
  const comparatifs = getArticlesByCategory('comparatif');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Comparatifs Matériel Padel</h1>
        <p className="text-gray-500 max-w-xl">
          Analyses objectives pour choisir la raquette, les chaussures ou les accessoires padel qui correspondent à votre niveau et votre budget.
        </p>
      </header>

      {comparatifs.length === 0 ? (
        <p className="text-gray-400">Aucun comparatif pour l&apos;instant. Revenez bientôt !</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparatifs.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}

import type { Metadata } from 'next';
import ArticleCard from '@/components/ui/ArticleCard';
import { getArticlesByCategory } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Guides Padel Débutants',
  description:
    'Tous nos guides pratiques pour débuter le padel : choix du matériel, règles du jeu, techniques de base et conseils pour progresser.',
};

export default function GuidesPage() {
  const guides = getArticlesByCategory('guide');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Guides Padel Débutants</h1>
        <p className="text-gray-500 max-w-xl">
          Tout ce qu&apos;il faut savoir pour bien démarrer : matériel, règles, technique et progression.
        </p>
      </header>

      {guides.length === 0 ? (
        <p className="text-gray-400">Aucun guide pour l&apos;instant. Revenez bientôt !</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}

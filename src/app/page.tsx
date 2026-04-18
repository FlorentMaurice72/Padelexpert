import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleCard from '@/components/ui/ArticleCard';
import CTAButton from '@/components/ui/CTAButton';
import { getAllArticles } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'PadelExpert — Guides et conseils pour débutants',
  description:
    'Guides, comparatifs et conseils pour les joueurs de padel débutants. Choisissez le bon matériel et progressez rapidement.',
  openGraph: {
    title: 'PadelExpert — Guides et conseils pour débutants',
    description: 'Tout ce qu\'il faut savoir pour débuter le padel : matériel, règles, conseils.',
    url: 'https://padelexpert.fr',
  },
};

const features = [
  { icon: '🎯', title: 'Guides pratiques', desc: 'Des conseils concrets pour progresser rapidement.' },
  { icon: '⚖️', title: 'Comparatifs honnêtes', desc: 'Analyses objectives pour faire les bons choix.' },
  { icon: '🛒', title: 'Meilleurs produits', desc: 'Sélection du matériel au meilleur rapport qualité/prix.' },
];

export default function HomePage() {
  const latestArticles = getAllArticles().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <span className="inline-block bg-white/20 text-white text-sm font-medium px-4 py-1 rounded-full mb-6">
            Le guide du padel pour débutants
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Devenez meilleur au padel,<br className="hidden md:block" /> plus vite.
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto mb-10">
            Comparatifs, guides et conseils pensés pour les débutants. Choisissez le bon matériel et progressez dès votre première semaine.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/guides" label="Voir les guides débutants" variant="secondary" />
            <Link
              href="/comparatifs"
              className="text-sm font-medium text-emerald-100 hover:text-white underline underline-offset-4"
            >
              Comparer les raquettes →
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center">
              <span className="text-3xl">{f.icon}</span>
              <h2 className="text-base font-bold mt-3 mb-1">{f.title}</h2>
              <p className="text-sm text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest articles */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Derniers articles</h2>
          <Link href="/blog" className="text-sm font-medium text-emerald-600 hover:underline">
            Voir tout →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-emerald-50 border-t border-emerald-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Pas encore équipé ?
          </h2>
          <p className="text-gray-600 mb-8">
            Notre guide complet vous aide à choisir la raquette et les chaussures idéales pour débuter, sans vous ruiner.
          </p>
          <CTAButton href="/blog/meilleure-raquette-padel-debutant" label="Voir notre sélection" />
        </div>
      </section>
    </>
  );
}

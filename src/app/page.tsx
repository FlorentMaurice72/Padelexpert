import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleCard from '@/components/ui/ArticleCard';
import { getAllArticles } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'PrePadel — Le hub de progression padel pour débutants',
  description:
    'Apprendre le padel, choisir son matériel, progresser rapidement. Guides pratiques, comparatifs honnêtes et conseils terrain pour débutants.',
  openGraph: {
    title: 'PrePadel — Le hub de progression padel pour débutants',
    description:
      'Apprendre le padel, choisir son matériel, progresser rapidement. Le hub de référence pour les débutants.',
    url: 'https://prepadel.fr',
  },
};

const pillars = [
  {
    number: '01',
    title: 'Apprendre',
    subtitle: 'Les bases solides pour débuter correctement',
    links: [
      { label: 'Règles du padel expliquées', href: '/blog/regles-padel-simples' },
      { label: 'Comment débuter le padel', href: '/blog/comment-jouer-padel-debutant' },
      { label: 'Les erreurs des débutants', href: '/blog/erreurs-debutant-padel' },
    ],
    cta: { label: 'Voir les guides', href: '/guides' },
  },
  {
    number: '02',
    title: 'Choisir son matériel',
    subtitle: 'La bonne raquette, les bonnes chaussures, le bon budget',
    links: [
      { label: 'Meilleure raquette débutant', href: '/blog/meilleure-raquette-padel-debutant' },
      { label: 'Comment choisir sa raquette', href: '/blog/comment-choisir-raquette-padel' },
      { label: 'Chaussures padel débutant', href: '/blog/chaussures-padel-debutant-guide' },
    ],
    cta: { label: 'Voir les comparatifs', href: '/comparatifs' },
  },
  {
    number: '03',
    title: 'Progresser',
    subtitle: 'Techniques, entraînement et stratégie de jeu',
    links: [
      { label: 'Positions au padel', href: '/blog/positions-padel-debutant' },
      { label: 'Tactique padel débutant', href: '/blog/tactique-padel-debutant' },
      { label: 'Comment progresser vite', href: '/blog/progresser-padel-rapidement' },
    ],
    cta: { label: 'Voir les articles', href: '/blog' },
  },
];

export default function HomePage() {
  const allArticles = getAllArticles();
  const featuredArticle = allArticles[0];
  const latestArticles = allArticles.slice(1, 4);

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#faf9f6] border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[1fr_380px] gap-12 items-center">
            {/* Left: editorial headline */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-5 block">
                Guide padel débutant
              </span>
              <h1 className="font-serif text-5xl md:text-6xl text-gray-900 leading-tight mb-6">
                Apprendre.<br />
                Choisir.<br />
                Progresser.
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                PrePadel est le guide de référence pour les joueurs débutants — guides pratiques,
                comparatifs honnêtes et conseils terrain pour bien démarrer et progresser vite.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/guides"
                  className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors text-sm"
                >
                  Commencer par les guides →
                </Link>
                <Link
                  href="/comparatifs"
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-white transition-colors text-sm"
                >
                  Comparer le matériel
                </Link>
              </div>
            </div>

            {/* Right: featured article card */}
            {featuredArticle && (
              <div className="hidden md:block">
                <Link href={`/blog/${featuredArticle.slug}`} className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-gray-300 transition-colors">
                  <div className="bg-gray-100 aspect-[16/9]" />
                  <div className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-3 block">
                      À la une
                    </span>
                    <h2 className="font-serif text-xl text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug mb-2">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-sm text-gray-500 line-clamp-2">{featuredArticle.description}</p>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Stats row */}
          <div className="mt-16 pt-8 border-t border-gray-200 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-serif text-3xl text-gray-900">27+</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Articles & guides</div>
            </div>
            <div>
              <div className="font-serif text-3xl text-gray-900">3</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Axes de progression</div>
            </div>
            <div>
              <div className="font-serif text-3xl text-gray-900">100%</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Conseils terrain</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 Piliers — grille à bordures ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-3">
            Tout ce qu&apos;il faut pour débuter le padel
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
            PrePadel couvre les trois étapes clés du parcours débutant — dans l&apos;ordre qui fait vraiment progresser.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-200 rounded-2xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="bg-[#faf9f6] p-8 flex flex-col">
              <span className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-5">
                {pillar.number}
              </span>
              <h3 className="font-serif text-2xl text-gray-900 mb-2">{pillar.title}</h3>
              <p className="text-sm text-gray-500 mb-6">{pillar.subtitle}</p>

              <ul className="space-y-3 flex-1 mb-7">
                {pillar.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-emerald-600 transition-colors flex items-center gap-2"
                    >
                      <span className="text-gray-300">→</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href={pillar.cta.href}
                className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                {pillar.cta.label} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Derniers articles ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="font-serif text-2xl md:text-3xl text-gray-900">Derniers articles</h2>
          <Link href="/blog" className="text-sm font-medium text-emerald-600 hover:underline">
            Voir tout →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {/* ── Bandeau CTA final ── */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Prêt à commencer le padel&nbsp;?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
            Commencez par notre guide complet : quelle raquette choisir, quelles chaussures,
            et comment progresser dès la première semaine.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/blog/meilleure-raquette-padel-debutant"
              className="inline-flex items-center px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors text-sm"
            >
              Choisir ma première raquette →
            </Link>
            <Link
              href="/guides"
              className="text-sm text-gray-400 hover:text-white underline underline-offset-4"
            >
              Voir tous les guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

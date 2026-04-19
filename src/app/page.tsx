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
    icon: '📖',
    title: 'Apprendre',
    subtitle: 'Les bases solides pour débuter correctement',
    links: [
      { label: 'Règles du padel expliquées', href: '/guides' },
      { label: 'Comment débuter le padel', href: '/guides' },
      { label: 'Tous les guides débutants', href: '/guides' },
    ],
    cta: { label: 'Voir les guides', href: '/guides' },
    color: 'from-blue-50 to-blue-100',
    border: 'border-blue-200',
    badge: 'bg-blue-100 text-blue-700',
    ctaClass: 'bg-blue-600 hover:bg-blue-700 text-white',
  },
  {
    number: '02',
    icon: '🎾',
    title: 'Choisir son matériel',
    subtitle: 'La bonne raquette, les bonnes chaussures, le bon budget',
    links: [
      { label: 'Meilleure raquette débutant', href: '/blog/meilleure-raquette-padel-debutant' },
      { label: 'Comment choisir sa raquette', href: '/blog/comment-choisir-raquette-padel' },
      { label: 'Chaussures padel débutant', href: '/blog/chaussures-padel-debutant-guide' },
    ],
    cta: { label: 'Voir les comparatifs', href: '/comparatifs' },
    color: 'from-emerald-50 to-emerald-100',
    border: 'border-emerald-200',
    badge: 'bg-emerald-100 text-emerald-700',
    ctaClass: 'bg-emerald-600 hover:bg-emerald-700 text-white',
  },
  {
    number: '03',
    icon: '📈',
    title: 'Progresser',
    subtitle: 'Techniques, entraînement et stratégie de jeu',
    links: [
      { label: 'Techniques de base au padel', href: '/guides' },
      { label: 'Erreurs fréquentes des débutants', href: '/blog' },
      { label: 'Tous les conseils terrain', href: '/blog' },
    ],
    cta: { label: 'Voir les articles', href: '/blog' },
    color: 'from-purple-50 to-purple-100',
    border: 'border-purple-200',
    badge: 'bg-purple-100 text-purple-700',
    ctaClass: 'bg-purple-600 hover:bg-purple-700 text-white',
  },
];

export default function HomePage() {
  const latestArticles = getAllArticles().slice(0, 3);

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
            Hub de progression padel
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            Apprendre. Choisir.<br className="hidden md:block" /> Progresser.
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto mb-10">
            PrePadel est le guide de référence pour les joueurs débutants. Guides pratiques, comparatifs honnêtes
            et conseils terrain — tout ce qu&apos;il faut pour bien démarrer et progresser vite.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-700 font-bold rounded-lg hover:bg-emerald-50 transition-colors text-sm"
            >
              Commencer par les guides →
            </Link>
            <Link
              href="/comparatifs"
              className="text-sm font-medium text-emerald-100 hover:text-white underline underline-offset-4"
            >
              Comparer le matériel
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3 Piliers stratégiques ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
            Tout ce qu&apos;il faut pour débuter le padel
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
            PrePadel couvre les trois étapes clés du parcours débutant — dans l&apos;ordre qui fait vraiment progresser.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className={`bg-gradient-to-b ${pillar.color} rounded-2xl border ${pillar.border} p-7 flex flex-col`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${pillar.badge}`}>
                  {pillar.number}
                </span>
                <span className="text-2xl">{pillar.icon}</span>
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-1">{pillar.title}</h3>
              <p className="text-sm text-gray-600 mb-5">{pillar.subtitle}</p>

              <ul className="space-y-2 mb-6 flex-1">
                {pillar.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-700 hover:text-gray-900 hover:underline flex items-center gap-1.5"
                    >
                      <span className="text-gray-400">›</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href={pillar.cta.href}
                className={`inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${pillar.ctaClass}`}
              >
                {pillar.cta.label}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Derniers articles ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
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

      {/* ── Bandeau CTA final ── */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            Prêt à commencer le padel ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Commencez par notre guide complet : quelle raquette choisir, quelles chaussures, et comment progresser dès la première semaine.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/blog/meilleure-raquette-padel-debutant"
              className="inline-flex items-center px-6 py-3 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-600 transition-colors text-sm"
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

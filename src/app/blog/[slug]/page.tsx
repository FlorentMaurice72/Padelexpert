import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllSlugs, getArticleBySlug, getAllArticles } from '@/lib/mdx';
import CTAButton from '@/components/ui/CTAButton';
import ArticleCard from '@/components/ui/ArticleCard';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug).catch(() => null);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.date,
      url: `https://padelexpert.fr/blog/${slug}`,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  let article;
  try {
    article = await getArticleBySlug(slug);
  } catch {
    notFound();
  }

  const related = getAllArticles()
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      {/* Article header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full capitalize">
            {article.category}
          </span>
          <time className="text-xs text-gray-400" dateTime={article.date}>
            {new Date(article.date).toLocaleDateString('fr-FR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          {article.title}
        </h1>
        <p className="text-lg text-gray-500">{article.description}</p>
      </header>

      {/* Article body */}
      <article
        className="prose prose-gray prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* Bottom CTA */}
      <div className="mt-12 p-6 bg-emerald-50 rounded-xl border border-emerald-100 text-center">
        <p className="font-semibold text-gray-900 mb-2">Prêt à passer à l&apos;action ?</p>
        <p className="text-sm text-gray-500 mb-4">Découvrez notre sélection de matériel padel au meilleur prix.</p>
        <CTAButton href="/comparatifs" label="Voir tous les comparatifs" />
      </div>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Articles similaires</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

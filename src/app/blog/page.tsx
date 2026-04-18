import type { Metadata } from 'next';
import BlogList from '@/components/blog/BlogList';
import { getAllArticles } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Blog & Guides Padel',
  description:
    'Tous nos articles, guides et comparatifs pour progresser rapidement au padel et bien choisir votre matériel.',
};

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Blog & Guides Padel</h1>
        <p className="text-gray-500 max-w-xl">
          Tous nos articles, guides et comparatifs pour progresser rapidement et bien choisir votre matériel de padel.
        </p>
      </header>

      <BlogList articles={articles} />
    </div>
  );
}

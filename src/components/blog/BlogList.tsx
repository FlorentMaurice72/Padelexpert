'use client';

import { useState } from 'react';
import ArticleCard from '@/components/ui/ArticleCard';
import CategoryFilter from '@/components/blog/CategoryFilter';
import { ArticleMeta, Category } from '@/types';

interface Props {
  articles: ArticleMeta[];
}

export default function BlogList({ articles }: Props) {
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');

  const filtered =
    activeCategory === 'all'
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      <div className="mb-8">
        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
      </div>

      {filtered.length === 0 ? (
        <p className="text-gray-400 text-sm">Aucun article dans cette catégorie pour l&apos;instant.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </>
  );
}

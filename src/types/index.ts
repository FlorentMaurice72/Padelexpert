export interface ArticleMeta {
  title: string;
  description: string;
  date: string;
  category: Category;
  slug: string;
  image?: string;
  tags?: string[];
}

export interface Article extends ArticleMeta {
  content: string;
}

export type Category = 'blog' | 'guide' | 'comparatif' | 'test';

export interface Product {
  name: string;
  description: string;
  price: string;
  affiliateUrl: string;
  image?: string;
  badge?: string;
}

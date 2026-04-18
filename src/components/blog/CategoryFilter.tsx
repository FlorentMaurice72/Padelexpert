'use client';

import { Category } from '@/types';

const filters: { value: Category | 'all'; label: string }[] = [
  { value: 'all', label: 'Tous' },
  { value: 'guide', label: 'Guides' },
  { value: 'comparatif', label: 'Comparatifs' },
  { value: 'test', label: 'Tests' },
  { value: 'blog', label: 'Blog' },
];

interface Props {
  active: Category | 'all';
  onChange: (cat: Category | 'all') => void;
}

export default function CategoryFilter({ active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => onChange(f.value)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
            active === f.value
              ? 'bg-emerald-600 text-white border-emerald-600'
              : 'bg-white text-gray-600 border-gray-200 hover:border-emerald-400'
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}

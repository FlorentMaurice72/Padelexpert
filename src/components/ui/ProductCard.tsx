import CTAButton from './CTAButton';
import { Product } from '@/types';

interface Props {
  product: Product;
  rank?: number;
}

export default function ProductCard({ product, rank }: Props) {
  return (
    <div className="relative bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col gap-4">
      {rank === 1 && (
        <span className="absolute -top-3 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          ⭐ Notre choix #1
        </span>
      )}

      {product.badge && rank !== 1 && (
        <span className="absolute -top-3 left-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          {product.badge}
        </span>
      )}

      <div>
        <h3 className="font-bold text-gray-900 text-base">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{product.description}</p>
      </div>

      <div className="flex items-center justify-between mt-auto">
        <span className="text-lg font-bold text-emerald-600">{product.price}</span>
        <CTAButton href={product.affiliateUrl} label="Voir le prix" />
      </div>
    </div>
  );
}

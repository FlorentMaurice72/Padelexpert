import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-white font-extrabold text-lg mb-2 tracking-tight">
              <span className="text-emerald-400">Pre</span>Padel
            </p>
            <p className="text-sm">
              Le hub de progression padel pour débutants. Guides pratiques, comparatifs honnêtes et conseils terrain.
            </p>
          </div>

          <div>
            <p className="text-white font-semibold mb-3">Contenu</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guides" className="hover:text-white transition-colors">Guides débutants</Link></li>
              <li><Link href="/comparatifs" className="hover:text-white transition-colors">Comparatifs matériel</Link></li>
              <li><Link href="/tests" className="hover:text-white transition-colors">Tests produits</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold mb-3">Site</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">À propos</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-xs text-center space-y-1">
          <p>© {new Date().getFullYear()} PrePadel. Tous droits réservés.</p>
          <p>
            Ce site contient des liens affiliés. En achetant via ces liens, vous nous aidez à maintenir le site
            sans frais supplémentaires pour vous.
          </p>
        </div>
      </div>
    </footer>
  );
}

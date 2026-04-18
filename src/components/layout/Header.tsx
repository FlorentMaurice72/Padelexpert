import Link from 'next/link';

const navLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/guides', label: 'Guides' },
  { href: '/comparatifs', label: 'Comparatifs' },
  { href: '/tests', label: 'Tests' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-emerald-600">Padel</span>
            <span className="text-xl font-bold text-gray-900">Expert</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/blog"
            className="hidden md:inline-flex items-center px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Commencer
          </Link>

          {/* Mobile nav toggle placeholder — extend with useState if needed */}
          <button className="md:hidden p-2 text-gray-600" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

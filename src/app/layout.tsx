import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://padelexpert.fr'),
  title: {
    default: 'PadelExpert — Guides et conseils pour débutants',
    template: '%s | PadelExpert',
  },
  description:
    'Guides, comparatifs et conseils pour les joueurs de padel débutants. Choisissez le bon matériel et progressez rapidement.',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'PadelExpert',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="bg-gray-50 text-gray-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

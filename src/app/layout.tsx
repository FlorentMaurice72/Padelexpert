import type { Metadata } from 'next';
import { DM_Serif_Display, DM_Sans } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-dm-serif',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://prepadel.fr'),
  title: {
    default: 'PrePadel — Le hub de progression padel pour débutants',
    template: '%s | PrePadel',
  },
  description:
    'Apprendre le padel, choisir son matériel, progresser rapidement. Guides, comparatifs et conseils honnêtes pour débutants.',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'PrePadel',
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
    <html lang="fr" className={`${dmSerifDisplay.variable} ${dmSans.variable}`}>
      <body className="bg-[#faf9f6] text-gray-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

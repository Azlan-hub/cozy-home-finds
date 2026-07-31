import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cozy Home Finds | Beautiful Spaces. Smarter Living.',
  description: 'Discover aesthetic home decor ideas, smart organization tips, and premium Amazon finds that make every room feel expensive.',
  metadataBase: new URL('https://cozyhomefinds.com'),
  openGraph: {
    title: 'Cozy Home Finds',
    description: 'Aesthetic home decor ideas and organization tips.',
    url: '/',
    siteName: 'Cozy Home Finds',
    images: [
      {
        url: '/hero-image.png',
        width: 1200,
        height: 630,
        alt: 'Cozy Home Finds Aesthetic Living Space',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cozy Home Finds',
    description: 'Aesthetic home decor ideas and organization tips.',
    images: ['/hero-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#FAF8F4] text-[#66645F]`} suppressHydrationWarning>
        <Navbar />
        <main className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from 'next';
import './globals.css';
import { site } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Nhà nghỉ & Cà phê`,
    template: `%s • ${site.name}`,
  },
  description: site.description,
  keywords: [
    'Hương Giang Coffee and Motel',
    'nhà nghỉ Núi Sập',
    'nhà nghỉ Thoại Sơn',
    'cafe An Giang',
    'cà phê thủ công',
    'motel An Giang',
    'guesthouse An Giang',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: site.url,
    title: `${site.name} — Nhà nghỉ & Cà phê`,
    description: site.description,
    siteName: site.name,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: `${site.name} — Nhà nghỉ & Cà phê`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Nhà nghỉ & Cà phê`,
    description: site.description,
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#3e2a1c',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="h-full">
      <body className="min-h-full bg-cream-50 font-sans text-coffee-900 antialiased">
        {children}
      </body>
    </html>
  );
}

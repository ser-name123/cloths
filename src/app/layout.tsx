import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KRAFTWEAR DUBAI | Premier Custom Apparel, Workwear & Corporate Gifting UAE',
  description:
    'Direct in-house manufacturer of custom t-shirts, hoodies, corporate polos, NFPA certified flame-resistant uniforms, and VIP corporate swag boxes across Dubai, Abu Dhabi, and GCC.',
  keywords: [
    'custom clothing Dubai',
    'uniform manufacturer UAE',
    'corporate gifts Dubai',
    'workwear Ajman',
    'print on demand UAE',
    'flame resistant coveralls',
    'embroidery Dubai',
    'the merchlist',
    'times clothing',
    'klothon',
  ],
  openGraph: {
    title: 'KRAFTWEAR DUBAI | Custom Apparel, Workwear & Gifting Hub',
    description: 'Direct factory apparel manufacturing and corporate merchandise in Dubai & GCC.',
    locale: 'en_AE',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}

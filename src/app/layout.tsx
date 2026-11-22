import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'KRAFTWEAR DUBAI | Custom Apparel, Uniforms & Corporate Merchandise UAE',
  description:
    'UAE’s premier integrated custom clothing manufacturer, industrial workwear specialist & corporate gifting house. Direct factory in Ajman and showroom in Dubai.',
  keywords: [
    'custom clothing Dubai',
    'uniform manufacturer UAE',
    'corporate gifts Dubai',
    'workwear Ajman',
    'print on demand UAE',
    'flame resistant coveralls',
    'the merchlist',
    'times clothing',
    'klothon',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-amber-100 selection:text-amber-900">
        {children}
      </body>
    </html>
  );
}

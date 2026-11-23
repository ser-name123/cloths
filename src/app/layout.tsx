import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'UNIFORM STUDIO 81 | EFZEE Fashion — Custom Uniforms, Workwear & Corporate Gifts UAE',
  description:
    'Every Thread Counts. With 35+ years of expertise and 30,000+ garments/month capacity, Uniform Studio 81 (EFZEE Fashion Tailoring LLC) delivers custom corporate wear, hospitality, healthcare, school uniforms, industrial workwear, and corporate gifts across UAE & GCC.',
  keywords: [
    'Uniform Studio 81',
    'EFZEE Fashion',
    'custom uniforms Dubai',
    'uniform supplier Ajman UAE',
    'corporate wear UAE',
    'hospitality uniforms Dubai',
    'school uniforms UAE',
    'industrial workwear',
    'sublimation printing Dubai',
    'corporate gifts UAE',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`} suppressHydrationWarning>
      <body 
        suppressHydrationWarning 
        className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-amber-100 selection:text-amber-900"
      >
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}

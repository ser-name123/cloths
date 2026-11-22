'use client';

import React, { useState } from 'react';
import { Currency } from '@/types';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ClientTrustMarquee from '@/components/ClientTrustMarquee';
import QuoteBuilder from '@/components/QuoteBuilder';
import ProductCatalog from '@/components/ProductCatalog';
import LiveCustomizer from '@/components/LiveCustomizer';
import ManufacturingCapabilities from '@/components/ManufacturingCapabilities';
import IndustrySolutions from '@/components/IndustrySolutions';
import CorporateGiftingSection from '@/components/CorporateGiftingSection';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';
import RFQModal from '@/components/RFQModal';

export default function Home() {
  const [currentCurrency, setCurrentCurrency] = useState<Currency>('AED');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState<string | undefined>();
  const [modalDetails, setModalDetails] = useState<any>(undefined);

  const handleOpenQuoteModal = (category?: string, details?: any) => {
    setModalCategory(category);
    setModalDetails(details);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setModalCategory(undefined);
    setModalDetails(undefined);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Global Navigation */}
      <Header
        currentCurrency={currentCurrency}
        onCurrencyChange={setCurrentCurrency}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero with Interactive Preview & Quick Switcher */}
        <Hero
          currentCurrency={currentCurrency}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 2. UAE & GCC Client Trust Marquee + Speed Guarantee */}
        <ClientTrustMarquee />

        {/* 3. Interactive Instant Quote Calculator (Klothon + Merchlist Model) */}
        <QuoteBuilder
          currentCurrency={currentCurrency}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 4. Filterable Wholesale & On-Demand Catalog */}
        <ProductCatalog
          currentCurrency={currentCurrency}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 5. 3D Live Customizer Studio (The Merchlist Inspired) */}
        <LiveCustomizer
          currentCurrency={currentCurrency}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 6. In-House Factory Tour & Machine Lineup (Times Clothing + EFZEE) */}
        <ManufacturingCapabilities />

        {/* 7. Industry & Sector Uniform Solutions (Klothon Inspired) */}
        <IndustrySolutions
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 8. VIP Corporate Gifting & Swag Hampers (Corporate Gifts Dubai & Baharnani) */}
        <CorporateGiftingSection
          currentCurrency={currentCurrency}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 9. Verified Procurement Reviews & Testimonials */}
        <Testimonials />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Help Trigger */}
      <WhatsAppFloatingButton />

      {/* Lead Capture RFQ Modal (Supabase Integrated) */}
      <RFQModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialCategory={modalCategory}
        initialDetails={modalDetails}
      />
    </div>
  );
}

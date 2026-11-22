'use client';

import React, { useState } from 'react';
import { Currency } from '@/types';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ClientTrustMarquee from '@/components/ClientTrustMarquee';
import CoreServices from '@/components/CoreServices';
import ReadyStockShop from '@/components/ReadyStockShop';
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
import CartDrawer from '@/components/CartDrawer';
import ScrollObserver from '@/components/ScrollObserver';
import ScrollProgressBar from '@/components/ScrollProgressBar';

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
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900 overflow-x-clip w-full">
        {/* Real-time Theme Scroll Progress Line */}
        <ScrollProgressBar />

        {/* Global Scroll Animation Observer */}
        <ScrollObserver />

        {/* Global Navigation */}
        <Header
          currentCurrency={currentCurrency}
          onCurrencyChange={setCurrentCurrency}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* Main Page Flow */}
        <main className="flex-1">
          {/* 1. Baharnani-Style Luxury Accordion Hero Showcase */}
          <Hero
            currentCurrency={currentCurrency}
            onOpenQuoteModal={handleOpenQuoteModal}
          />

          {/* 2. UAE & GCC Client Trust Marquee + Speed Guarantee */}
          <ClientTrustMarquee />

          {/* 2.5. Comprehensive In-House Manufacturing Services Breakdown */}
          <CoreServices onOpenQuoteModal={handleOpenQuoteModal} />

          {/* 3. Direct Ready-to-Ship Wholesale Inventory & Instant Sample E-Commerce Store */}
          <ReadyStockShop
            currentCurrency={currentCurrency}
            onOpenQuoteModal={handleOpenQuoteModal}
          />

          {/* 4. Interactive Instant Quote Calculator (Klothon + Merchlist Model) */}
          <QuoteBuilder
            currentCurrency={currentCurrency}
            onOpenQuoteModal={handleOpenQuoteModal}
          />

          {/* 5. Filterable Wholesale & On-Demand Catalog (with Direct Sample Buy) */}
          <ProductCatalog
            currentCurrency={currentCurrency}
            onOpenQuoteModal={handleOpenQuoteModal}
          />

          {/* 6. 3D Live Customizer Studio (The Merchlist Inspired) */}
          <LiveCustomizer
            currentCurrency={currentCurrency}
            onOpenQuoteModal={handleOpenQuoteModal}
          />

          {/* 7. In-House Factory Tour & Machine Lineup (Times Clothing + EFZEE) */}
          <ManufacturingCapabilities />

          {/* 8. Industry & Sector Uniform Solutions (Klothon Inspired) */}
          <IndustrySolutions
            onOpenQuoteModal={handleOpenQuoteModal}
          />

          {/* 9. VIP Corporate Gifting & Swag Hampers (Corporate Gifts Dubai & Baharnani) */}
          <CorporateGiftingSection
            currentCurrency={currentCurrency}
            onOpenQuoteModal={handleOpenQuoteModal}
          />

          {/* 10. Verified Procurement Reviews & Testimonials */}
          <Testimonials />
        </main>

        {/* Global Footer (with E-Commerce Gateways & Trust Sitemaps) */}
        <Footer onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Persistent Floating WhatsApp Help Trigger */}
        <WhatsAppFloatingButton />

        {/* Lead Capture RFQ Modal (Supabase Integrated) */}
        <RFQModal
          isOpen={isQuoteModalOpen}
          onClose={handleCloseQuoteModal}
          initialCategory={modalCategory}
          initialDetails={modalDetails}
        />

        {/* Slide-over E-Commerce Wholesale & Sample Cart Drawer */}
        <CartDrawer
          currentCurrency={currentCurrency}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      </div>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Currency } from '@/types';
import { 
  Phone, 
  MessageSquare, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  ChevronDown, 
  Menu, 
  X, 
  Calculator,
  Search
} from 'lucide-react';

interface HeaderProps {
  currentCurrency: Currency;
  onCurrencyChange: (c: Currency) => void;
  onOpenQuoteModal: (category?: string) => void;
}

export default function Header({ currentCurrency, onCurrencyChange, onOpenQuoteModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  const currencies: Currency[] = ['AED', 'SAR', 'USD', 'EUR'];

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* --- TOP UTILITY TICKER BAR --- */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Status & Certifications */}
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Ajman Factory Active & Taking Orders
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              ISO 9001:2015 & NFPA 2112 Certified
            </span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              Express GCC Shipping: 48-72h Delivery
            </span>
          </div>

          {/* Quick Contacts & Currency Selector */}
          <div className="flex items-center gap-4 ml-auto">
            <a
              href="https://wa.me/971501234567?text=Hello%20Kraftwear%20UAE,%20I%20need%20a%20quotation%20for%20custom%20apparel/uniforms."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp: +971 50 123 4567</span>
            </a>

            <span className="text-slate-700">|</span>

            {/* Currency Switcher */}
            <div className="flex items-center gap-1">
              <span className="text-slate-400 font-mono">Currency:</span>
              <div className="inline-flex bg-slate-900 rounded p-0.5 border border-slate-700">
                {currencies.map((curr) => (
                  <button
                    key={curr}
                    onClick={() => onCurrencyChange(curr)}
                    className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-all ${
                      currentCurrency === curr
                        ? 'bg-amber-400 text-slate-950 shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MAIN NAVIGATION BAR --- */}
      <nav className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <span className="text-slate-950 font-black text-2xl tracking-tighter">KW</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  KRAFTWEAR
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-bold bg-amber-400/10 text-amber-400 border border-amber-400/30 rounded uppercase tracking-wider">
                  Dubai
                </span>
              </div>
              <span className="text-[11px] text-slate-400 uppercase tracking-widest font-medium">
                Apparel • Uniforms • Merch
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            <a href="#catalog" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">
              Product Catalog
            </a>
            <a href="#customizer" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1">
              <span>3D Studio</span>
              <span className="px-1.5 py-0.2 text-[9px] font-bold bg-sky-500/20 text-sky-400 border border-sky-500/30 rounded">NEW</span>
            </a>
            <a href="#quote-builder" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">
              Instant Quote
            </a>
            <a href="#manufacturing" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">
              In-House Factory
            </a>
            <a href="#industries" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">
              Industries
            </a>
            <a href="#gifting" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">
              Corporate Gifting
            </a>
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-4 py-2.5 rounded-lg border border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-sm font-semibold text-slate-200 transition-all flex items-center gap-2 hover:border-amber-400/50"
            >
              <Calculator className="w-4 h-4 text-amber-400" />
              <span>Request Quote</span>
            </button>

            <a
              href="https://wa.me/971501234567?text=Hi%20Kraftwear,%20I%20would%20like%20to%20discuss%20a%20bulk%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-bold text-sm shadow-md shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Talk to Specialist</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="p-2 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-6 py-6 space-y-4">
            <div className="space-y-3">
              <a
                href="#catalog"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-semibold text-slate-200 hover:text-amber-400"
              >
                Product Catalog
              </a>
              <a
                href="#customizer"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-semibold text-slate-200 hover:text-amber-400"
              >
                Interactive 3D Studio
              </a>
              <a
                href="#quote-builder"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-semibold text-slate-200 hover:text-amber-400"
              >
                Instant Price Calculator
              </a>
              <a
                href="#manufacturing"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-semibold text-slate-200 hover:text-amber-400"
              >
                Ajman & Dubai Factory Tour
              </a>
              <a
                href="#industries"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-semibold text-slate-200 hover:text-amber-400"
              >
                Enterprise Industry Solutions
              </a>
              <a
                href="#gifting"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-semibold text-slate-200 hover:text-amber-400"
              >
                VIP Corporate Swag Boxes
              </a>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-sm shadow-md"
              >
                Instant RFQ Quotation
              </button>
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}


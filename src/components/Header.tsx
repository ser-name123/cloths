'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Currency } from '@/types';
import { 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  Menu, 
  X, 
  Calculator,
  ChevronDown,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface HeaderProps {
  currentCurrency: Currency;
  onCurrencyChange: (c: Currency) => void;
  onOpenQuoteModal: (category?: string) => void;
}

export default function Header({ currentCurrency, onCurrencyChange, onOpenQuoteModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200/80 shadow-xs">
      {/* --- SLIM LUXURY ANNOUNCEMENT TICKER --- */}
      <div className="bg-slate-900 text-slate-300 text-[11px] py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-[1560px] mx-auto flex items-center justify-between gap-4">
          
          {/* Left: Production Status & Trust */}
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5 font-medium text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Ajman Factory Active
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              ISO 9001:2015 & NFPA 2112 Certified
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              Express GCC Delivery in 48-72h
            </span>
          </div>

          {/* Right: Contact Hotline */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/971501234567?text=Hi%20Kraftwear%20Dubai,%20I%20would%20like%20to%20inquire%20about%20custom%20apparel."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium text-[11px]"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp: +971 50 123 4567</span>
            </a>
          </div>

        </div>
      </div>

      {/* --- MAIN NAVIGATION --- */}
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center text-white font-extrabold text-lg tracking-tight shadow-md group-hover:bg-amber-600 transition-colors">
              KW
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-extrabold tracking-tight text-slate-900 group-hover:text-amber-600 transition-colors">
                  KRAFTWEAR
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                  DUBAI
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">
                Apparel • Uniforms • Swag
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#catalog" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Products
            </a>
            <a href="#customizer" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1.5">
              <span>3D Studio</span>
              <span className="text-[9px] font-bold px-1.5 py-0.2 bg-amber-50 text-amber-700 border border-amber-200 rounded-full">
                Interactive
              </span>
            </a>
            <a href="#quote-builder" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Cost Calculator
            </a>
            <a href="#manufacturing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              In-House Factory
            </a>
            <a href="#industries" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Workwear Sectors
            </a>
            <a href="#gifting" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Corporate Gifts
            </a>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-4 py-2 rounded-full border border-slate-300 hover:border-slate-400 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors flex items-center gap-1.5 bg-white shadow-2xs"
            >
              <Calculator className="w-3.5 h-3.5 text-slate-500" />
              <span>Instant RFQ</span>
            </button>

            <a
              href="https://wa.me/971501234567?text=Hi%20Kraftwear%20UAE,%20I%20would%20like%20to%20discuss%20a%20bulk%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-all shadow-sm hover:shadow flex items-center gap-2 group"
            >
              <span>Talk to Specialist</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
          <nav className="space-y-3">
            <a
              href="#catalog"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-800 hover:text-amber-600"
            >
              Products Catalog
            </a>
            <a
              href="#customizer"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-800 hover:text-amber-600"
            >
              Interactive 3D Studio
            </a>
            <a
              href="#quote-builder"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-800 hover:text-amber-600"
            >
              Instant Cost Calculator
            </a>
            <a
              href="#manufacturing"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-800 hover:text-amber-600"
            >
              Ajman Factory Capabilities
            </a>
            <a
              href="#industries"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-800 hover:text-amber-600"
            >
              Sector Workwear Solutions
            </a>
            <a
              href="#gifting"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-800 hover:text-amber-600"
            >
              Corporate Gifting & VIP Kits
            </a>
          </nav>

          <div className="pt-4 border-t border-slate-200 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-2.5 rounded-full bg-slate-900 text-white font-semibold text-xs shadow"
            >
              Request Custom Quotation
            </button>
            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

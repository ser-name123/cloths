'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { Currency } from '@/types';
import { useCart } from '@/context/CartContext';
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
  ArrowRight,
  ChevronRight,
  Flame,
  HeartPulse,
  UtensilsCrossed,
  Building2,
  Gift,
  Layers,
  Scissors,
  CheckCircle2,
  Tag,
  Download,
  Eye,
  FileSpreadsheet,
  Palette,
  Check,
  Award,
  ShoppingBag,
  Zap,
  Truck,
  Box,
  Cpu,
  FileText
} from 'lucide-react';

interface HeaderProps {
  currentCurrency?: Currency;
  onCurrencyChange?: (c: Currency) => void;
  onOpenQuoteModal: (category?: string, details?: any) => void;
}

export default function Header({ currentCurrency = 'AED', onCurrencyChange, onOpenQuoteModal }: HeaderProps) {
  const { totalItems, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMegaMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled
        ? 'bg-white/98 backdrop-blur-xl border-b border-slate-200/95 shadow-md shadow-slate-900/5'
        : 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs'
    }`}>
      
      {/* ============================================================== */}
      {/* 1. TOP ANNOUNCEMENT TICKER (High-End Luxury Micro Bar)          */}
      {/* ============================================================== */}
      <div className="w-full bg-amber-50/90 text-slate-700 text-[11px] py-2 border-b border-amber-200/70">
        <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Left: Live Factory Status & Standards */}
          <div className="flex items-center gap-4 sm:gap-6 overflow-hidden">
            <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-700 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Ajman Showroom &amp; Production Active
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-700 font-medium shrink-0">
              <Truck className="w-3.5 h-3.5 text-amber-600" />
              30,000+ Garments Monthly Capacity
            </span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-500 shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              35+ Years of Uniform Excellence
            </span>
          </div>

          {/* Right: Direct UAE Hotline */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/971522954810?text=Hi%20Uniform%20Studio%2081%20(EFZEE%20Fashion),%20I%20would%20like%20to%20inquire%20about%20custom%20uniforms."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 transition-colors font-semibold text-[11px]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp: +971 52 295 4810</span>
            </a>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <span className="text-slate-600 font-mono text-[10px] hidden sm:inline">Showroom #1, Fashion Mart, Ajman • HO: CBD Building, Dubai</span>
          </div>

        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. MAIN NAVBAR & NAVIGATION (Sleek, Uncluttered, No-Wrap)       */}
      {/* ============================================================== */}
      <div className="w-full">
        <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[66px]">
            
            {/* Left Zone: Brand Logo */}
            <div className="shrink-0 flex items-center min-w-[150px] xl:min-w-[180px]">
              <Logo variant="light" size="md" />
            </div>

            {/* Center Zone: Desktop Navigation (Compact, Tightly Spaced) */}
            <nav className="hidden lg:flex items-center justify-center gap-0 xl:gap-0.5 h-full">
              
              {/* Mega Menu 1: Custom Apparel */}
              <div 
                className="relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter('apparel')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  type="button"
                  className={`px-1.5 xl:px-2 py-1 rounded-md text-[11.5px] xl:text-xs font-semibold transition-colors flex items-center gap-0.5 whitespace-nowrap ${
                    activeMegaMenu === 'apparel' 
                      ? 'text-amber-600 bg-amber-50/80 shadow-2xs' 
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/70'
                  }`}
                >
                  <span>Custom Apparel</span>
                  <ChevronDown className={`w-2.5 h-2.5 transition-transform duration-200 shrink-0 ${activeMegaMenu === 'apparel' ? 'rotate-180 text-amber-600' : 'text-slate-400'}`} />
                </button>
              </div>

              {/* Mega Menu 2: Workwear & Safety */}
              <div 
                className="relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter('workwear')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  type="button"
                  className={`px-1.5 xl:px-2 py-1 rounded-md text-[11.5px] xl:text-xs font-semibold transition-colors flex items-center gap-0.5 whitespace-nowrap ${
                    activeMegaMenu === 'workwear' 
                      ? 'text-amber-600 bg-amber-50/80 shadow-2xs' 
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/70'
                  }`}
                >
                  <span>Workwear & Safety</span>
                  <span className="text-[8px] font-bold px-0.5 py-0.2 rounded bg-amber-100 text-amber-800 border border-amber-200/80 shrink-0">
                    NFPA
                  </span>
                  <ChevronDown className={`w-2.5 h-2.5 transition-transform duration-200 shrink-0 ${activeMegaMenu === 'workwear' ? 'rotate-180 text-amber-600' : 'text-slate-400'}`} />
                </button>
              </div>

              {/* Mega Menu 3: Corporate Gifts */}
              <div 
                className="relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter('gifting')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  type="button"
                  className={`px-1.5 xl:px-2 py-1 rounded-md text-[11.5px] xl:text-xs font-semibold transition-colors flex items-center gap-0.5 whitespace-nowrap ${
                    activeMegaMenu === 'gifting' 
                      ? 'text-amber-600 bg-amber-50/80 shadow-2xs' 
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/70'
                  }`}
                >
                  <span>Corporate Gifts</span>
                  <span className="text-[8px] font-bold px-0.5 py-0.2 rounded bg-amber-100 text-amber-800 border border-amber-200/80 shrink-0">
                    VIP
                  </span>
                  <ChevronDown className={`w-2.5 h-2.5 transition-transform duration-200 shrink-0 ${activeMegaMenu === 'gifting' ? 'rotate-180 text-amber-600' : 'text-slate-400'}`} />
                </button>
              </div>

              {/* Submenu 4: In-House Factory & Machines */}
              <div 
                className="relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter('factory')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  type="button"
                  className={`px-1.5 xl:px-2 py-1 rounded-md text-[11.5px] xl:text-xs font-semibold transition-colors flex items-center gap-0.5 whitespace-nowrap ${
                    activeMegaMenu === 'factory' 
                      ? 'text-amber-600 bg-amber-50/80 shadow-2xs' 
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/70'
                  }`}
                >
                  <span>In-House Factory</span>
                  <ChevronDown className={`w-2.5 h-2.5 transition-transform duration-200 shrink-0 ${activeMegaMenu === 'factory' ? 'rotate-180 text-amber-600' : 'text-slate-400'}`} />
                </button>
              </div>

              {/* Direct Link 5: 3D Studio & Pricing */}
              <a 
                href="#customizer" 
                className="px-1.5 xl:px-2 py-1 rounded-md text-[11.5px] xl:text-xs font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100/70 transition-colors flex items-center gap-0.5 whitespace-nowrap"
              >
                <Eye className="w-3 h-3 text-slate-500 shrink-0" />
                <span>3D Studio</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              </a>

              {/* Direct Link 6: Ready Stock Store */}
              <a 
                href="#ready-stock" 
                className="px-1.5 xl:px-2 py-1 rounded-md text-[11.5px] xl:text-xs font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100/70 transition-colors flex items-center gap-0.5 whitespace-nowrap"
              >
                <Zap className="w-3 h-3 text-amber-500 fill-amber-500 shrink-0" />
                <span>Ready Stock</span>
                <span className="text-[8px] font-bold px-0.5 py-0.2 rounded bg-emerald-100 text-emerald-800 border border-emerald-200/80 shrink-0">
                  24h
                </span>
              </a>

              {/* Direct Link 7: Cost Calculator */}
              <a 
                href="#quote-builder" 
                className="px-1.5 xl:px-2 py-1 rounded-md text-[11.5px] xl:text-xs font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100/70 transition-colors whitespace-nowrap"
              >
                Cost Estimator
              </a>

            </nav>

            {/* Right Zone: Cart Button, Primary Desktop CTA & Mobile Menu */}
            <div className="flex items-center justify-end gap-2 sm:gap-2.5 shrink-0 min-w-[150px] xl:min-w-[180px]">
              
              {/* E-Commerce Shopping Cart Quick Button */}
              <button
                type="button"
                onClick={openCart}
                className="relative p-2 rounded-full hover:bg-slate-100 text-slate-700 hover:text-slate-950 transition-all duration-200 hover:scale-110 active:scale-95 flex items-center justify-center shrink-0 cursor-pointer"
                aria-label="View Shopping Cart"
                title="View Wholesale Cart"
              >
                <ShoppingBag className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-slate-800" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 rounded-full bg-amber-500 text-slate-950 font-bold text-[10px] flex items-center justify-center shadow-xs">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Primary Instant RFQ Button */}
              <button
                onClick={() => onOpenQuoteModal()}
                className="btn-luxury-dark hidden lg:flex px-4.5 py-2.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm hover:shadow items-center gap-2 group/rfq whitespace-nowrap cursor-pointer"
              >
                <Calculator className="w-3.5 h-3.5 text-amber-400 shrink-0 icon-hover-bounce" />
                <span>Instant RFQ</span>
                <ArrowRight className="w-3.5 h-3.5 hover-arrow group-hover/rfq:translate-x-1 transition-transform shrink-0" />
              </button>

              {/* Mobile Actions */}
              <div className="lg:hidden flex items-center gap-1.5">
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="btn-luxury-dark px-3 py-1.5 rounded-full bg-slate-950 text-white text-xs font-bold shadow-xs whitespace-nowrap cursor-pointer"
                >
                  RFQ
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 3. LUXURY FLOATING MEGA MENU DROPDOWNS (Glassmorphic & Visual)   */}
      {/* ============================================================== */}
      
      {/* --- MEGA MENU 1: CUSTOM APPAREL --- */}
      {activeMegaMenu === 'apparel' && (
        <div 
          className="absolute top-full left-1/2 -translate-x-1/2 w-[96vw] max-w-[1360px] bg-white/98 backdrop-blur-2xl rounded-3xl border border-slate-200/90 shadow-2xl p-6 lg:p-7 mt-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50 before:content-[''] before:absolute before:-top-3 before:left-0 before:w-full before:h-3"
          onMouseEnter={() => handleMouseEnter('apparel')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Col 1: Custom Knits & Streetwear (4 cols) */}
            <div className="md:col-span-4 space-y-3.5">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-amber-500/10 text-amber-700 font-mono font-bold text-[11px] flex items-center justify-center">
                    01
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Heavyweight Knits & Streetwear
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">Pure Cotton</span>
              </div>

              <div className="space-y-1">
                <a 
                  href="#catalog" 
                  onClick={() => setActiveMegaMenu(null)}
                  className="group flex items-center gap-3.5 p-2.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200/70 transition-all duration-150"
                >
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                    <img 
                      src="/images/efzee/sportswear-1.png" 
                      alt="Heavyweight 280 GSM Tee" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-900 group-hover:text-amber-600 transition-colors truncate">
                        Heavyweight 280 GSM Tees
                      </span>
                      <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 shrink-0">
                        AED 38
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                      100% Combed French Terry Cotton, Drop Shoulder Cut.
                    </p>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>

                <a 
                  href="#catalog" 
                  onClick={() => setActiveMegaMenu(null)}
                  className="group flex items-center gap-3.5 p-2.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200/70 transition-all duration-150"
                >
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                    <img 
                      src="/images/efzee/sublimation-1.png" 
                      alt="380 GSM Brushed Fleece Hoodie" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-900 group-hover:text-amber-600 transition-colors truncate">
                        Brushed Fleece Hoodies (380 GSM)
                      </span>
                      <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 shrink-0">
                        AED 78
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                      Double-layer hood, thick metal aglets & zero shrink.
                    </p>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>

                <a 
                  href="#catalog" 
                  onClick={() => setActiveMegaMenu(null)}
                  className="group flex items-center gap-3.5 p-2.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200/70 transition-all duration-150"
                >
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                    <img 
                      src="/images/efzee/sportswear-1.png" 
                      alt="Activewear & DriFit Performance" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-900 group-hover:text-amber-600 transition-colors truncate">
                        Activewear & DriFit Performance
                      </span>
                      <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 shrink-0">
                        AED 32
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                      Breathable poly-spandex with UV 50+ moisture wicking.
                    </p>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>
              </div>
            </div>

            {/* Col 2: Corporate Attire & Outerwear (4 cols) */}
            <div className="md:col-span-4 space-y-3.5">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-amber-500/10 text-amber-700 font-mono font-bold text-[11px] flex items-center justify-center">
                    02
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Corporate Attire & Outerwear
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">Executive</span>
              </div>

              <div className="space-y-1">
                <a 
                  href="#catalog" 
                  onClick={() => setActiveMegaMenu(null)}
                  className="group flex items-center gap-3.5 p-2.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200/70 transition-all duration-150"
                >
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                    <img 
                      src="/images/efzee/hero-4.jpg" 
                      alt="Executive Pique Corporate Polos" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-900 group-hover:text-amber-600 transition-colors truncate">
                        Executive Pique Corporate Polos
                      </span>
                      <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 shrink-0">
                        AED 44
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                      240 GSM double-lacoste cotton with anti-curl collars.
                    </p>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>

                <a 
                  href="#catalog" 
                  onClick={() => setActiveMegaMenu(null)}
                  className="group flex items-center gap-3.5 p-2.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200/70 transition-all duration-150"
                >
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                    <img 
                      src="/images/efzee/feature-1.png" 
                      alt="Varsity Bomber & Quilted Jackets" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-900 group-hover:text-amber-600 transition-colors truncate">
                        Varsity Bomber & Quilted Jackets
                      </span>
                      <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 shrink-0">
                        AED 145
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                      Wool-blend body with diamond satin quilted lining.
                    </p>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>

                <a 
                  href="#catalog" 
                  onClick={() => setActiveMegaMenu(null)}
                  className="group flex items-center gap-3.5 p-2.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200/70 transition-all duration-150"
                >
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                    <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-600">
                      <Tag className="w-5 h-5 text-amber-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-900 group-hover:text-amber-600 transition-colors truncate">
                        Custom Woven Labels & Hangtags
                      </span>
                      <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 shrink-0">
                        Custom
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                      Tearaway neck tags, soft damask labels & retail polybags.
                    </p>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>
              </div>
            </div>

            {/* Col 3: Visual Specimen Spotlight (4 cols) */}
            <div className="md:col-span-4 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white rounded-2xl p-5 flex flex-col justify-between border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-amber-400 text-slate-950 uppercase tracking-wider">
                    Streetwear Specimen 01
                  </span>
                  <span className="text-xs font-mono font-semibold text-amber-400">from AED 38</span>
                </div>

                <div className="relative h-36 w-full rounded-xl overflow-hidden bg-slate-800 mb-3 border border-slate-700/60 shadow-inner group">
                  <img
                    src="/images/efzee/sportswear-1.png"
                    alt="Heavyweight Streetwear Tee"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-sm text-[10px] text-white font-mono flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    280 GSM French Terry
                  </div>
                  <div className="absolute top-2 right-2 flex items-center gap-1 bg-slate-950/70 backdrop-blur-xs px-2 py-0.5 rounded-md text-[9px] font-mono text-slate-300">
                    No MOQ
                  </div>
                </div>

                <h4 className="text-xs font-semibold text-white">
                  Engineered for 3D Puff Embroidery & Silkscreen
                </h4>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                  UAE pre-shrunk reactive cotton. Direct factory production with zero minimums on pre-production proof samples.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center gap-2 mt-3">
                <a
                  href="#customizer"
                  onClick={() => setActiveMegaMenu(null)}
                  className="flex-1 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Customize in 3D</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => {
                    setActiveMegaMenu(null);
                    onOpenQuoteModal('apparel-swatch');
                  }}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors border border-slate-700"
                >
                  Swatch Kit
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Trust & Quick Utilities Bar */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-medium">
              <span className="inline-flex items-center gap-1.5 text-slate-700">
                <Clock className="w-3.5 h-3.5 text-amber-500" />
                48h Pre-Production Sample
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-700">
                <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                15-Needle Tajima Embroidery
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-700">
                <Palette className="w-3.5 h-3.5 text-sky-500" />
                Pantone Precision Dye Matching
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                Zero MOQ on Sample Orders
              </span>
            </div>
            <a 
              href="#catalog"
              onClick={() => setActiveMegaMenu(null)}
              className="inline-flex items-center gap-1 font-semibold text-slate-900 hover:text-amber-600 transition-colors"
            >
              <span>View All 50+ Custom Apparel Styles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      )}

      {/* --- MEGA MENU 2: WORKWEAR & SAFETY --- */}
      {activeMegaMenu === 'workwear' && (
        <div 
          className="absolute top-full left-1/2 -translate-x-1/2 w-[96vw] max-w-[1360px] bg-white/98 backdrop-blur-2xl rounded-3xl border border-slate-200/90 shadow-2xl p-6 lg:p-7 mt-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50 before:content-[''] before:absolute before:-top-3 before:left-0 before:w-full before:h-3"
          onMouseEnter={() => handleMouseEnter('workwear')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Col 1: Oil & Gas / Heavy Industrial (4 cols) */}
            <div className="md:col-span-4 space-y-3.5">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-orange-500/10 text-orange-600 font-mono font-bold text-[11px] flex items-center justify-center">
                    <Flame className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Oil, Gas & Heavy Industry (FR)
                  </span>
                </div>
                <span className="text-[10px] font-mono text-orange-600 font-semibold">Certified</span>
              </div>

              <div className="space-y-1">
                <a 
                  href="#industries" 
                  onClick={() => setActiveMegaMenu(null)}
                  className="group flex items-center gap-3.5 p-2.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200/70 transition-all duration-150"
                >
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                    <img 
                      src="/images/efzee/industrial-1.png" 
                      alt="NFPA 2112 Cotton FR Coverall" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-900 group-hover:text-amber-600 transition-colors truncate">
                        NFPA 2112 Cotton FR Coveralls
                      </span>
                      <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-orange-50 text-orange-700 shrink-0">
                        AED 89
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                      240/300 GSM heavy twill with 3M Scotchlite FR reflective.
                    </p>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>

                <a 
                  href="#industries" 
                  onClick={() => setActiveMegaMenu(null)}
                  className="group flex items-center gap-3.5 p-2.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200/70 transition-all duration-150"
                >
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                    <img 
                      src="/images/efzee/industrial-2.png" 
                      alt="High-Vis Class 2 Safety Vests" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-900 group-hover:text-amber-600 transition-colors truncate">
                        High-Vis Class 2 Vests & Cargo
                      </span>
                      <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-lime-50 text-lime-800 shrink-0">
                        AED 26
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                      ANSI 107 fluorescent mesh with radio loops & ID pocket.
                    </p>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>

                <a 
                  href="#industries" 
                  onClick={() => setActiveMegaMenu(null)}
                  className="group flex items-center gap-3.5 p-2.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200/70 transition-all duration-150"
                >
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                    <div className="w-full h-full bg-purple-50 flex items-center justify-center text-purple-700 font-bold text-xs">
                      40 CAL
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-900 group-hover:text-amber-600 transition-colors truncate">
                        Arc Flash 40 Cal Switchgear Suits
                      </span>
                      <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-purple-50 text-purple-700 shrink-0">
                        Utility
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                      High-voltage safety hoods & overalls for utility substations.
                    </p>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>
              </div>
            </div>

            {/* Col 2: Healthcare & Hospitality (4 cols) */}
            <div className="md:col-span-4 space-y-3.5">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-600 font-mono font-bold text-[11px] flex items-center justify-center">
                    <HeartPulse className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Healthcare & Hospitality
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-600 font-semibold">Medical</span>
              </div>

              <div className="space-y-1">
                <a 
                  href="#industries" 
                  onClick={() => setActiveMegaMenu(null)}
                  className="group flex items-center gap-3.5 p-2.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200/70 transition-all duration-150"
                >
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                    <img 
                      src="/images/efzee/health-1.png" 
                      alt="Antimicrobial 4-Way Stretch Scrubs" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-900 group-hover:text-amber-600 transition-colors truncate">
                        Antimicrobial 4-Way Stretch Scrubs
                      </span>
                      <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 shrink-0">
                        AED 62
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                      Silver-ion fluid barrier designed for 14-hour hospital shifts.
                    </p>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>

                <a 
                  href="#industries" 
                  onClick={() => setActiveMegaMenu(null)}
                  className="group flex items-center gap-3.5 p-2.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200/70 transition-all duration-150"
                >
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                    <div className="w-full h-full bg-amber-50 flex items-center justify-center text-amber-700">
                      <UtensilsCrossed className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-900 group-hover:text-amber-600 transition-colors truncate">
                        5-Star Chef Coats & Canvas Aprons
                      </span>
                      <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 shrink-0">
                        AED 54
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                      Breathable underarm mesh with brass hardware & aglets.
                    </p>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>

                <a 
                  href="#industries" 
                  onClick={() => setActiveMegaMenu(null)}
                  className="group flex items-center gap-3.5 p-2.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200/70 transition-all duration-150"
                >
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                    <img 
                      src="/images/efzee/hero-1.jpg" 
                      alt="Executive Corporate Suits" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-900 group-hover:text-amber-600 transition-colors truncate">
                        Tropical Poly-Viscose Uniform Suits
                      </span>
                      <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 shrink-0">
                        AED 195
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                      Wrinkle-free tropical weave for front desk & concierge teams.
                    </p>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>
              </div>
            </div>

            {/* Col 3: Visual Specimen Spotlight (4 cols) */}
            <div className="md:col-span-4 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white rounded-2xl p-5 flex flex-col justify-between border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-amber-400 text-slate-950 uppercase tracking-wider">
                    NFPA 2112 & EN ISO 11612
                  </span>
                  <span className="text-xs font-mono font-semibold text-amber-400">from AED 89</span>
                </div>

                <div className="relative h-36 w-full rounded-xl overflow-hidden bg-slate-800 mb-3 border border-slate-700/60 shadow-inner group">
                  <img
                    src="/images/efzee/industrial-1.png"
                    alt="NFPA 2112 FR Coverall"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-sm text-[10px] text-slate-300 font-mono flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3 text-amber-400" />
                    2-Inch 3M Scotchlite Reflective
                  </div>
                </div>

                <h4 className="text-xs font-semibold text-white">
                  Government, ADNOC & EPC Contractor Compliant
                </h4>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                  Supplied directly with full third-party laboratory test certificates, batch traceability, and FTA tax invoices.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center gap-2 mt-3">
                <button
                  onClick={() => {
                    setActiveMegaMenu(null);
                    onOpenQuoteModal('tender-bid');
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Submit Tender Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Trust & Quick Utilities Bar */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-medium">
              <span className="inline-flex items-center gap-1.5 text-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                ISO 9001:2015 & NFPA 2112 Certified
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                Batch Laboratory Test Reports Included
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-700">
                <Building2 className="w-3.5 h-3.5 text-sky-500" />
                Direct UAE FTA Tax Invoices
              </span>
            </div>
            <a 
              href="#industries"
              onClick={() => setActiveMegaMenu(null)}
              className="inline-flex items-center gap-1 font-semibold text-slate-900 hover:text-amber-600 transition-colors"
            >
              <span>Explore All Industrial Workwear</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      )}

      {/* --- MEGA MENU 3: CORPORATE GIFTS & SWAG --- */}
      {activeMegaMenu === 'gifting' && (
        <div 
          className="absolute top-full left-1/2 -translate-x-1/2 w-[96vw] max-w-[1360px] bg-white/98 backdrop-blur-2xl rounded-3xl border border-slate-200/90 shadow-2xl p-6 lg:p-7 mt-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50 before:content-[''] before:absolute before:-top-3 before:left-0 before:w-full before:h-3"
          onMouseEnter={() => handleMouseEnter('gifting')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Col 1: VIP Onboarding Boxes (4 cols) */}
            <div className="md:col-span-4 space-y-3.5">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-amber-500/10 text-amber-700 font-mono font-bold text-[11px] flex items-center justify-center">
                    <Gift className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Curated VIP Onboarding Boxes
                  </span>
                </div>
                <span className="text-[10px] font-mono text-amber-600 font-semibold">VIP Packaging</span>
              </div>

              <div className="space-y-1">
                <a 
                  href="#gifting" 
                  onClick={() => setActiveMegaMenu(null)}
                  className="group flex items-center gap-3.5 p-2.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200/70 transition-all duration-150"
                >
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                    <img 
                      src="/images/efzee/hero-2.jpg" 
                      alt="The Dubai Elite Executive Box" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-900 group-hover:text-amber-600 transition-colors truncate">
                        The "Dubai Elite" Executive Box
                      </span>
                      <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 shrink-0">
                        AED 135
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                      Rigid magnetic box with EVA foam, tumbler, diary & power bank.
                    </p>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>

                <a 
                  href="#gifting" 
                  onClick={() => setActiveMegaMenu(null)}
                  className="group flex items-center gap-3.5 p-2.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200/70 transition-all duration-150"
                >
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                    <img 
                      src="/images/efzee/feature-2.png" 
                      alt="Sustainable Eco ESG Welcome Kit" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-900 group-hover:text-amber-600 transition-colors truncate">
                        Sustainable Eco-Forward ESG Kit
                      </span>
                      <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 shrink-0">
                        AED 85
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                      Wheat straw tech, organic canvas bag & plantable seed paper.
                    </p>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>

                <a 
                  href="#gifting" 
                  onClick={() => setActiveMegaMenu(null)}
                  className="group flex items-center gap-3.5 p-2.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200/70 transition-all duration-150"
                >
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                    <img 
                      src="/images/efzee/hero-3.jpg" 
                      alt="GITEX & Conference Swag Bundles" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-900 group-hover:text-amber-600 transition-colors truncate">
                        GITEX & Conference Swag Bundles
                      </span>
                      <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-sky-50 text-sky-800 shrink-0">
                        48h Express
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                      High-volume branded tees, matte bottles & satin safety lanyards.
                    </p>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>
              </div>
            </div>

            {/* Col 2: Individual Drinkware & Tech (4 cols) */}
            <div className="md:col-span-4 space-y-3.5">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-sky-500/10 text-sky-700 font-mono font-bold text-[11px] flex items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Executive Drinkware & Tech Gifts
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">Laser Etched</span>
              </div>

              <div className="space-y-1">
                <a 
                  href="#gifting" 
                  onClick={() => setActiveMegaMenu(null)}
                  className="group flex items-center gap-3.5 p-2.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200/70 transition-all duration-150"
                >
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                    <img 
                      src="/images/efzee/hero-3.jpg" 
                      alt="Smart LED Temperature Tumbler" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-900 group-hover:text-amber-600 transition-colors truncate">
                        Smart LED Temperature Tumblers
                      </span>
                      <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 shrink-0">
                        AED 29
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                      Food-grade 304 steel with touch LCD display and 24h cold insulation.
                    </p>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>

                <a 
                  href="#gifting" 
                  onClick={() => setActiveMegaMenu(null)}
                  className="group flex items-center gap-3.5 p-2.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200/70 transition-all duration-150"
                >
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                    <img 
                      src="/images/efzee/hospitality-1.png" 
                      alt="10,000mAh MagSafe Power Bank" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-900 group-hover:text-amber-600 transition-colors truncate">
                        10,000mAh MagSafe Power Banks
                      </span>
                      <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 shrink-0">
                        AED 68
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                      Anodized aluminum finish with 360Â° laser rotary engraving.
                    </p>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>

                <a 
                  href="#gifting" 
                  onClick={() => setActiveMegaMenu(null)}
                  className="group flex items-center gap-3.5 p-2.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200/70 transition-all duration-150"
                >
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                    <img 
                      src="/images/efzee/feature-2.png" 
                      alt="14oz Organic Canvas Exhibition Tote" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-900 group-hover:text-amber-600 transition-colors truncate">
                        14oz Organic Canvas Exhibition Totes
                      </span>
                      <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 shrink-0">
                        AED 14
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                      Reinforced cross-stitch handles with inner mobile zipper pocket.
                    </p>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>
              </div>
            </div>

            {/* Col 3: Visual Specimen Spotlight (4 cols) */}
            <div className="md:col-span-4 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white rounded-2xl p-5 flex flex-col justify-between border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-amber-400 text-slate-950 uppercase tracking-wider">
                    VIP Executive Box Studio
                  </span>
                  <span className="text-xs font-mono font-semibold text-amber-400">from AED 135</span>
                </div>

                <div className="relative h-36 w-full rounded-xl overflow-hidden bg-slate-800 mb-3 border border-slate-700/60 shadow-inner group">
                  <img
                    src="/images/efzee/hero-2.jpg"
                    alt="VIP Swag Box"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-sm text-[10px] text-white font-mono flex items-center gap-1.5">
                    <Box className="w-3 h-3 text-amber-400" />
                    Custom Soft-Touch Magnetic Box
                  </div>
                </div>

                <h4 className="text-xs font-semibold text-white">
                  Build a Custom Swag Box with Your Logo
                </h4>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                  Choose any 4 products and our studio will generate a 3D digital mockup within 2 hours.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center gap-2 mt-3">
                <button
                  onClick={() => {
                    setActiveMegaMenu(null);
                    onOpenQuoteModal('custom-gift-box');
                  }}
                  className="w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Gift className="w-3.5 h-3.5" />
                  <span>Request Custom Box Sample</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Trust & Quick Utilities Bar */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-medium">
              <span className="inline-flex items-center gap-1.5 text-slate-700">
                <Clock className="w-3.5 h-3.5 text-amber-500" />
                2h Fast 3D Digital Proofing
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-700">
                <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                Fiber Laser Engraving & Gold Foil
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-700">
                <Truck className="w-3.5 h-3.5 text-emerald-500" />
                Express GCC Courier Dispatch
              </span>
            </div>
            <a 
              href="#gifting"
              onClick={() => setActiveMegaMenu(null)}
              className="inline-flex items-center gap-1 font-semibold text-slate-900 hover:text-amber-600 transition-colors"
            >
              <span>Explore All 300+ Corporate Swag Items</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      )}

      {/* --- SUBMENU 4: IN-HOUSE FACTORY & MACHINES --- */}
      {activeMegaMenu === 'factory' && (
        <div 
          className="absolute top-full left-1/2 -translate-x-1/2 w-[96vw] max-w-[1360px] bg-white/98 backdrop-blur-2xl rounded-3xl border border-slate-200/90 shadow-2xl p-6 lg:p-7 mt-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50 before:content-[''] before:absolute before:-top-3 before:left-0 before:w-full before:h-3"
          onMouseEnter={() => handleMouseEnter('factory')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Col 1: Industrial Machinery */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <span className="w-6 h-6 rounded-lg bg-amber-500/10 text-amber-700 font-mono font-bold text-[11px] flex items-center justify-center">
                  <Scissors className="w-3.5 h-3.5" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Industrial Machinery
                </span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">15-Needle Tajima Embroidery</span>
                    <span className="text-[11px] text-slate-500">Japanese multi-head high speed embroidery</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">M&R 12-Color Oval Screen</span>
                    <span className="text-[11px] text-slate-500">Automated discharge & plastisol print runs</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Gerber CAD Fabric Cutting</span>
                    <span className="text-[11px] text-slate-500">Computerized precision nesting system</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">360Â° Rotary Laser Fiber Etching</span>
                    <span className="text-[11px] text-slate-500">Direct metal drinkware & tech personalization</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Col 2: Fabric Mills & Yarns */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <span className="w-6 h-6 rounded-lg bg-sky-500/10 text-sky-700 font-mono font-bold text-[11px] flex items-center justify-center">
                  <Layers className="w-3.5 h-3.5" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Fabric Mills & Yarns
                </span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">100% GOTS Organic Cotton</span>
                    <span className="text-[11px] text-slate-500">Milled combed compact cotton yarn</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Heavyweight French Terry (280-450 GSM)</span>
                    <span className="text-[11px] text-slate-500">Bio-washed pre-shrunk luxury knitwear</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">NFPA 2112 Certified FR Twill</span>
                    <span className="text-[11px] text-slate-500">Inherent flame-resistant oil & gas textiles</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Pantone Color Precision Lab</span>
                    <span className="text-[11px] text-slate-500">Exact digital spectro dye matching</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Col 3: Certifications & QA */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <span className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-700 font-mono font-bold text-[11px] flex items-center justify-center">
                  <Award className="w-3.5 h-3.5" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Certifications & QA
                </span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">ISO 9001:2015 Management</span>
                    <span className="text-[11px] text-slate-500">Audited quality management plant standards</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">EN ISO 11612 & ANSI/ISEA 107</span>
                    <span className="text-[11px] text-slate-500">Certified industrial safety standards</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">4-Stage Inline QA Wash Lab</span>
                    <span className="text-[11px] text-slate-500">Shrinkage, pilling & colorfastness stress tests</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">UAE FTA Tax Compliance</span>
                    <span className="text-[11px] text-slate-500">Official VAT tax invoices for enterprise accounting</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Col 4: Tour & Showroom Spotlight */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white rounded-2xl p-5 flex flex-col justify-between border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-amber-400 text-slate-950 uppercase tracking-wider">
                    30,000+ Garments/Mo
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Ajman Showroom Open
                  </span>
                </div>

                <h4 className="text-xs font-semibold text-white">
                  Visit Showroom #1, Fashion Mart Ajman
                </h4>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                  Hands-on uniform development in Industrial Area 1, Ajman. Meet our consultants, review fabric swatches, and finalize fits.
                </p>

                <div className="mt-3 p-2 rounded-xl bg-slate-800/80 border border-slate-700/80 text-[11px] text-slate-300 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-3 h-3 text-amber-400 shrink-0" />
                    <span>HO: CBD Building, Dubai, UAE</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center gap-2 mt-3">
                <a
                  href="https://wa.me/971522954810?text=Hi%20Uniform%20Studio%2081%20(EFZEE%20Fashion),%20I%20would%20like%20to%20schedule%20a%20showroom%20visit%20at%20Fashion%20Mart%20Ajman."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Schedule Tour via WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Trust & Quick Utilities Bar */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-medium">
              <span className="inline-flex items-center gap-1.5 text-slate-700">
                <Building2 className="w-3.5 h-3.5 text-amber-500" />
                Ajman Industrial Area 1 Plant (In-House Production)
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-700">
                <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                Zero Intermediaries â€¢ Wholesale Mill Direct
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                Pre-Production Physical Proof Sign-off
              </span>
            </div>
            <a 
              href="#factory"
              onClick={() => setActiveMegaMenu(null)}
              className="inline-flex items-center gap-1 font-semibold text-slate-900 hover:text-amber-600 transition-colors"
            >
              <span>Explore Factory Specifications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      )}

      {/* ============================================================== */}
      {/* 4. MOBILE ACCORDION DRAWER MENU                                */}
      {/* ============================================================== */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl max-h-[85vh] overflow-y-auto">
          
          <div className="space-y-2">
            
            {/* Mobile Category 1 */}
            <div className="border-b border-slate-100 pb-2">
              <button
                type="button"
                onClick={() => setMobileSubmenu(mobileSubmenu === 'apparel' ? null : 'apparel')}
                className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-900"
              >
                <span>Custom Apparel & Knits</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'apparel' ? 'rotate-180 text-amber-600' : 'text-slate-400'}`} />
              </button>
              {mobileSubmenu === 'apparel' && (
                <div className="pl-3 py-2 space-y-2 text-xs text-slate-600">
                  <a href="#catalog" onClick={() => setMobileMenuOpen(false)} className="block py-1">Heavyweight 280 GSM T-Shirts</a>
                  <a href="#catalog" onClick={() => setMobileMenuOpen(false)} className="block py-1">Brushed Fleece Hoodies (380 GSM)</a>
                  <a href="#catalog" onClick={() => setMobileMenuOpen(false)} className="block py-1">Executive Pique Corporate Polos</a>
                  <a href="#catalog" onClick={() => setMobileMenuOpen(false)} className="block py-1">Varsity Bomber Jackets</a>
                </div>
              )}
            </div>

            {/* Mobile Category 2 */}
            <div className="border-b border-slate-100 pb-2">
              <button
                type="button"
                onClick={() => setMobileSubmenu(mobileSubmenu === 'workwear' ? null : 'workwear')}
                className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-900"
              >
                <span>Workwear & Safety Gear</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'workwear' ? 'rotate-180 text-amber-600' : 'text-slate-400'}`} />
              </button>
              {mobileSubmenu === 'workwear' && (
                <div className="pl-3 py-2 space-y-2 text-xs text-slate-600">
                  <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="block py-1">NFPA 2112 FR Cotton Coveralls</a>
                  <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="block py-1">High-Visibility Safety Vests & Pants</a>
                  <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="block py-1">Antimicrobial Clinical Scrubs</a>
                  <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="block py-1">5-Star Chef Coats & Hospitality Aprons</a>
                </div>
              )}
            </div>

            {/* Mobile Category 3 */}
            <div className="border-b border-slate-100 pb-2">
              <button
                type="button"
                onClick={() => setMobileSubmenu(mobileSubmenu === 'gifting' ? null : 'gifting')}
                className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-900"
              >
                <span>Corporate Gifts & Swag</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'gifting' ? 'rotate-180 text-amber-600' : 'text-slate-400'}`} />
              </button>
              {mobileSubmenu === 'gifting' && (
                <div className="pl-3 py-2 space-y-2 text-xs text-slate-600">
                  <a href="#gifting" onClick={() => setMobileMenuOpen(false)} className="block py-1">Executive Onboarding Swag Boxes</a>
                  <a href="#gifting" onClick={() => setMobileMenuOpen(false)} className="block py-1">Smart LED Vacuum Tumblers</a>
                  <a href="#gifting" onClick={() => setMobileMenuOpen(false)} className="block py-1">Ultra-Slim MagSafe Power Banks</a>
                  <a href="#gifting" onClick={() => setMobileMenuOpen(false)} className="block py-1">Eco Sustainable ESG Kits</a>
                </div>
              )}
            </div>

            {/* Mobile Category: Services Breakdown */}
            <div className="border-b border-slate-100 pb-2">
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-900"
              >
                <span>Manufacturing Services</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700">6 Services</span>
              </a>
            </div>

            {/* Mobile Category 4 */}
            <div className="border-b border-slate-100 pb-2">
              <a 
                href="#customizer" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-900"
              >
                <span>3D Styling Studio</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">Interactive</span>
              </a>
            </div>

            <div className="border-b border-slate-100 pb-2">
              <a 
                href="#quote-builder" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-900"
              >
                <span>Instant Cost Calculator</span>
              </a>
            </div>

          </div>

          {/* Mobile Direct Action Buttons */}
          <div className="pt-4 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 rounded-full bg-slate-950 text-white text-xs font-bold text-center flex items-center justify-center gap-2 shadow"
            >
              <Calculator className="w-3.5 h-3.5 text-amber-400" />
              <span>Launch Instant RFQ Builder</span>
            </button>

            <a
              href="https://wa.me/971522954810?text=Hi%20Uniform%20Studio%2081%20(EFZEE%20Fashion),%20I%20would%20like%20to%20discuss%20a%20bulk%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full bg-[#25D366] text-slate-950 text-xs font-bold text-center flex items-center justify-center gap-2 shadow"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-slate-950" />
              <span>Talk to Specialist on WhatsApp</span>
            </a>
          </div>

        </div>
      )}

    </header>
  );
}


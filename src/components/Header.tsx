'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';
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
  Award
} from 'lucide-react';

interface HeaderProps {
  currentCurrency?: Currency;
  onCurrencyChange?: (c: Currency) => void;
  onOpenQuoteModal: (category?: string, details?: any) => void;
}

export default function Header({ currentCurrency = 'AED', onCurrencyChange, onOpenQuoteModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      
      {/* ============================================================== */}
      {/* 1. TOP ANNOUNCEMENT TICKER (High-End Luxury Micro Bar)          */}
      {/* ============================================================== */}
      <div className="w-full bg-slate-950 text-slate-300 text-[11px] py-2 border-b border-slate-800/80">
        <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Left: Live Factory Status & Standards */}
          <div className="flex items-center gap-4 sm:gap-6 overflow-hidden">
            <span className="inline-flex items-center gap-1.5 font-medium text-emerald-400 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Ajman Factory Active
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-400 shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              ISO 9001:2015 & NFPA 2112 Certified
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400 shrink-0">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              Express GCC Shipping: 48–72h Delivery
            </span>
          </div>

          {/* Right: Direct UAE Hotline */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/971501234567?text=Hi%20Kraftwear%20Dubai,%20I%20would%20like%20to%20inquire%20about%20custom%20apparel."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium text-[11px]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp: +971 50 123 4567</span>
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <span className="text-slate-400 font-mono text-[10px] hidden sm:inline">Showroom: Dubai d3</span>
          </div>

        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. MAIN NAVBAR & NAVIGATION (Sleek, Uncluttered, No-Wrap)       */}
      {/* ============================================================== */}
      <div className="w-full">
        <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[66px] gap-4">
            
            {/* Brand Logo (Always protected with shrink-0) */}
            <div className="shrink-0">
              <Logo variant="light" size="md" />
            </div>

            {/* Desktop Navigation (5 Perfectly Spaced Categories) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 h-full">
              
              {/* Mega Menu 1: Custom Apparel */}
              <div 
                className="relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter('apparel')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  type="button"
                  className={`px-3 py-2 rounded-xl text-[13px] font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                    activeMegaMenu === 'apparel' 
                      ? 'text-amber-600 bg-amber-50/80 shadow-2xs' 
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/70'
                  }`}
                >
                  <span>Custom Apparel</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${activeMegaMenu === 'apparel' ? 'rotate-180 text-amber-600' : 'text-slate-400'}`} />
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
                  className={`px-3 py-2 rounded-xl text-[13px] font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                    activeMegaMenu === 'workwear' 
                      ? 'text-amber-600 bg-amber-50/80 shadow-2xs' 
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/70'
                  }`}
                >
                  <span>Workwear & Safety</span>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200/80 shrink-0">
                    NFPA
                  </span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${activeMegaMenu === 'workwear' ? 'rotate-180 text-amber-600' : 'text-slate-400'}`} />
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
                  className={`px-3 py-2 rounded-xl text-[13px] font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                    activeMegaMenu === 'gifting' 
                      ? 'text-amber-600 bg-amber-50/80 shadow-2xs' 
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/70'
                  }`}
                >
                  <span>Corporate Gifts</span>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-sky-100 text-sky-800 border border-sky-200/80 shrink-0">
                    VIP
                  </span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${activeMegaMenu === 'gifting' ? 'rotate-180 text-amber-600' : 'text-slate-400'}`} />
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
                  className={`px-3 py-2 rounded-xl text-[13px] font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                    activeMegaMenu === 'factory' 
                      ? 'text-amber-600 bg-amber-50/80 shadow-2xs' 
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/70'
                  }`}
                >
                  <span>In-House Factory</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${activeMegaMenu === 'factory' ? 'rotate-180 text-amber-600' : 'text-slate-400'}`} />
                </button>
              </div>

              {/* Direct Link 5: 3D Studio & Pricing */}
              <a 
                href="#customizer" 
                className="px-3 py-2 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100/70 transition-all flex items-center gap-1.5 whitespace-nowrap"
              >
                <Eye className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>3D Studio</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              </a>

              {/* Direct Link 6: Cost Calculator */}
              <a 
                href="#quote-builder" 
                className="px-3 py-2 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100/70 transition-all whitespace-nowrap"
              >
                Cost Estimator
              </a>

            </nav>

            {/* Desktop Right CTAs (Compact, Elegant, No Overflow) */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              <a
                href="https://wa.me/971501234567?text=Hi%20Kraftwear%20UAE,%20I%20would%20like%20to%20discuss%20a%20bulk%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 text-xs font-bold hover:bg-emerald-100 transition-colors whitespace-nowrap shadow-2xs"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={() => onOpenQuoteModal()}
                className="px-4.5 py-2.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm hover:shadow flex items-center gap-2 group whitespace-nowrap"
              >
                <Calculator className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Instant RFQ</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform shrink-0" />
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="lg:hidden flex items-center gap-2 shrink-0">
              <button
                onClick={() => onOpenQuoteModal()}
                className="px-3.5 py-1.5 rounded-full bg-slate-950 text-white text-xs font-bold shadow-xs whitespace-nowrap"
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

      {/* ============================================================== */}
      {/* 3. LUXURY FLOATING MEGA MENU DROPDOWNS (Glassmorphic & Visual)   */}
      {/* ============================================================== */}
      
      {/* --- MEGA MENU 1: CUSTOM APPAREL --- */}
      {activeMegaMenu === 'apparel' && (
        <div 
          className="absolute top-full left-1/2 -translate-x-1/2 w-[95vw] max-w-[1360px] bg-white/98 backdrop-blur-2xl rounded-3xl border border-slate-200/90 shadow-2xl p-6 lg:p-8 mt-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50"
          onMouseEnter={() => handleMouseEnter('apparel')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            
            {/* Col 1: Custom Knits (4 cols) */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-xs">
                  01
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Heavyweight Knits & Streetwear
                </span>
              </div>

              <div className="space-y-1.5">
                <a href="#catalog" className="group flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-amber-100 group-hover:text-amber-800 transition-colors">
                    👕
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors">Heavyweight 280 GSM Tees</span>
                      <span className="text-[10px] font-mono text-slate-400">Bio-Washed</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">100% Combed French Terry Cotton, Drop Shoulder Cut.</p>
                  </div>
                </a>

                <a href="#catalog" className="group flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-amber-100 group-hover:text-amber-800 transition-colors">
                    🧥
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors">Brushed Fleece Hoodies (380 GSM)</span>
                      <span className="text-[10px] font-mono text-slate-400">Zero Shrink</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">Double-layer hood, thick metal aglets & cross-grain.</p>
                  </div>
                </a>

                <a href="#catalog" className="group flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-amber-100 group-hover:text-amber-800 transition-colors">
                    🏃
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors">Activewear & DriFit Performance</span>
                      <span className="text-[10px] font-mono text-slate-400">UV 50+</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">Breathable poly-spandex blends for gym & sport teams.</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Col 2: Corporate & Outerwear (4 cols) */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-xs">
                  02
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Corporate Attire & Outerwear
                </span>
              </div>

              <div className="space-y-1.5">
                <a href="#catalog" className="group flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-amber-100 group-hover:text-amber-800 transition-colors">
                    👔
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors">Executive Pique Corporate Polos</span>
                      <span className="text-[10px] font-mono text-slate-400">240 GSM</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">Double-lacoste combed cotton with anti-curl collars.</p>
                  </div>
                </a>

                <a href="#catalog" className="group flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-amber-100 group-hover:text-amber-800 transition-colors">
                    🧥
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors">Varsity Bomber & Quilted Jackets</span>
                      <span className="text-[10px] font-mono text-slate-400">Chenille</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">Wool-blend body with diamond satin interior quilting.</p>
                  </div>
                </a>

                <a href="#catalog" className="group flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-amber-100 group-hover:text-amber-800 transition-colors">
                    🏷️
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors">Custom Woven Labels & Hangtags</span>
                      <span className="text-[10px] font-mono text-slate-400">Damask</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">Tearaway neck tags, soft damask labels & retail polybags.</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Col 3: Visual Specimen Spotlight (4 cols) */}
            <div className="md:col-span-4 bg-gradient-to-b from-slate-50 to-slate-100/60 border border-slate-200/90 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-amber-500 text-slate-950 uppercase tracking-wider">
                    Streetwear Bestseller
                  </span>
                  <span className="text-xs font-bold font-mono text-slate-900">from AED 38</span>
                </div>

                <div className="relative h-36 w-full rounded-xl overflow-hidden bg-slate-200 mb-3 shadow-inner">
                  <img
                    src="/images/products/heavy-tee.jpg"
                    alt="Heavyweight Streetwear Tee"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-sm text-[10px] text-white font-mono">
                    280 GSM French Terry
                  </div>
                </div>

                <h4 className="text-xs font-bold text-slate-900">
                  Ready for 3D Puff Embroidery & Silkscreen
                </h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  Engineered for UAE climate. Zero minimum order for samples; volume tiers up to 50,000 units.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center gap-2">
                <a
                  href="#customizer"
                  onClick={() => setActiveMegaMenu(null)}
                  className="flex-1 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Customize in 3D</span>
                  <ArrowRight className="w-3 h-3" />
                </a>

                <button
                  onClick={() => {
                    setActiveMegaMenu(null);
                    onOpenQuoteModal('apparel-swatch');
                  }}
                  className="px-3 py-2 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-800 text-xs font-bold transition-colors"
                >
                  Swatch Kit
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* --- MEGA MENU 2: WORKWEAR & SAFETY --- */}
      {activeMegaMenu === 'workwear' && (
        <div 
          className="absolute top-full left-1/2 -translate-x-1/2 w-[95vw] max-w-[1360px] bg-white/98 backdrop-blur-2xl rounded-3xl border border-slate-200/90 shadow-2xl p-6 lg:p-8 mt-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50"
          onMouseEnter={() => handleMouseEnter('workwear')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            
            {/* Col 1: Oil & Gas / Heavy Industrial (4 cols) */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <Flame className="w-4 h-4 text-orange-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Oil, Gas & Heavy Industry (FR)
                </span>
              </div>

              <div className="space-y-1.5">
                <a href="#industries" className="group flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    FR
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors">NFPA 2112 Cotton FR Coverall</span>
                      <span className="text-[10px] font-mono text-orange-600">Certified</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">240/300 GSM heavy twill with 3M Scotchlite FR reflective.</p>
                  </div>
                </a>

                <a href="#industries" className="group flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-lime-50 text-lime-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    VIS
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors">High-Vis Class 2 Safety Vests & Pants</span>
                      <span className="text-[10px] font-mono text-slate-400">ANSI 107</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">Fluorescent breathable mesh with radio clips & ID pocket.</p>
                  </div>
                </a>

                <a href="#industries" className="group flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ARC
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors">Arc Flash Electrical Suits</span>
                      <span className="text-[10px] font-mono text-purple-600">40 Cal</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">Complete hooded switchgear suits for high-voltage utilities.</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Col 2: Healthcare & Hospitality (4 cols) */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <HeartPulse className="w-4 h-4 text-emerald-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Healthcare & Hospitality
                </span>
              </div>

              <div className="space-y-1.5">
                <a href="#industries" className="group flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    MED
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors">Antimicrobial 4-Way Stretch Scrubs</span>
                      <span className="text-[10px] font-mono text-emerald-600">Fluid Barrier</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">Silver-ion infused fabrics designed for 14-hour hospital shifts.</p>
                  </div>
                </a>

                <a href="#industries" className="group flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    CHEF
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors">5-Star Chef Coats & Canvas Aprons</span>
                      <span className="text-[10px] font-mono text-slate-400">Luxury F&B</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">Breathable underarm mesh with real brass rivets and aglets.</p>
                  </div>
                </a>

                <a href="#industries" className="group flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    SUIT
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors">Corporate Tropical Poly-Viscose Suits</span>
                      <span className="text-[10px] font-mono text-slate-400">GCC Climate</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">Wrinkle-free tropical weave for front desk & concierge teams.</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Col 3: Visual Specimen Spotlight (4 cols) */}
            <div className="md:col-span-4 bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-2xl p-5 flex flex-col justify-between border border-slate-800">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-amber-400 text-slate-950 uppercase tracking-wider">
                    NFPA 2112 Certified
                  </span>
                  <span className="text-xs font-bold font-mono text-amber-400">from AED 89</span>
                </div>

                <div className="relative h-36 w-full rounded-xl overflow-hidden bg-slate-800 mb-3 border border-slate-700/60 shadow-inner">
                  <img
                    src="/images/products/fr-coverall.jpg"
                    alt="NFPA 2112 FR Coverall"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-sm text-[10px] text-slate-300 font-mono">
                    2-Inch 3M Scotchlite Reflective
                  </div>
                </div>

                <h4 className="text-xs font-bold text-white">
                  Government & Energy Contractor Compliant
                </h4>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                  Supplied directly with full third-party laboratory test certificates, batch traceability, and FTA tax invoices.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center gap-2">
                <button
                  onClick={() => {
                    setActiveMegaMenu(null);
                    onOpenQuoteModal('tender-bid');
                  }}
                  className="flex-1 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Submit Tender Specs</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* --- MEGA MENU 3: CORPORATE GIFTS & SWAG --- */}
      {activeMegaMenu === 'gifting' && (
        <div 
          className="absolute top-full left-1/2 -translate-x-1/2 w-[95vw] max-w-[1360px] bg-white/98 backdrop-blur-2xl rounded-3xl border border-slate-200/90 shadow-2xl p-6 lg:p-8 mt-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50"
          onMouseEnter={() => handleMouseEnter('gifting')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            
            {/* Col 1: VIP Onboarding Boxes (4 cols) */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <Gift className="w-4 h-4 text-amber-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Curated VIP Onboarding Boxes
                </span>
              </div>

              <div className="space-y-1.5">
                <a href="#gifting" className="group flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    🎁
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors">The "Dubai Elite" Executive Box</span>
                      <span className="text-[10px] font-mono text-amber-600">VIP Box</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">Rigid magnetic box with EVA foam, tumbler, diary & power bank.</p>
                  </div>
                </a>

                <a href="#gifting" className="group flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    🌱
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors">Sustainable Eco-Forward ESG Kit</span>
                      <span className="text-[10px] font-mono text-emerald-600">Zero Plastic</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">Wheat straw tech, organic canvas bag & plantable seed paper.</p>
                  </div>
                </a>

                <a href="#gifting" className="group flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    🚀
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors">GITEX & Conference Swag Bundles</span>
                      <span className="text-[10px] font-mono text-slate-400">48h Express</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">High-volume branded tees, matte bottles & satin safety lanyards.</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Col 2: Individual Drinkware & Tech (4 cols) */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <Sparkles className="w-4 h-4 text-sky-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Executive Drinkware & Tech Gifts
                </span>
              </div>

              <div className="space-y-1.5">
                <a href="#gifting" className="group flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    🌡️
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors">Smart LED Temperature Tumbler</span>
                      <span className="text-[10px] font-mono text-slate-400">500ml</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">Food-grade 304 steel with touch LCD display and 24h cold insulation.</p>
                  </div>
                </a>

                <a href="#gifting" className="group flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    🔋
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors">10,000mAh MagSafe Power Bank</span>
                      <span className="text-[10px] font-mono text-slate-400">15W Fast</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">Anodized aluminum finish with 360° laser rotary engraving.</p>
                  </div>
                </a>

                <a href="#gifting" className="group flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    👜
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors">14oz Organic Canvas Exhibition Tote</span>
                      <span className="text-[10px] font-mono text-slate-400">GOTS</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">Reinforced cross-stitch handles with inner mobile zipper pocket.</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Col 3: Visual Specimen Spotlight (4 cols) */}
            <div className="md:col-span-4 bg-gradient-to-b from-slate-50 to-slate-100/60 border border-slate-200/90 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-amber-500 text-slate-950 uppercase tracking-wider">
                    VIP Executive Box
                  </span>
                  <span className="text-xs font-bold font-mono text-slate-900">from AED 135</span>
                </div>

                <div className="relative h-36 w-full rounded-xl overflow-hidden bg-slate-200 mb-3 shadow-inner">
                  <img
                    src="/images/products/vip-swag-box.jpg"
                    alt="VIP Swag Box"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-sm text-[10px] text-white font-mono">
                    Custom Magnetic Rigid Box
                  </div>
                </div>

                <h4 className="text-xs font-bold text-slate-900">
                  Build a Custom Swag Box with Your Logo
                </h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  Choose any 4 products and our studio will generate a 3D digital mockup within 2 hours.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center gap-2">
                <button
                  onClick={() => {
                    setActiveMegaMenu(null);
                    onOpenQuoteModal('custom-gift-box');
                  }}
                  className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Request Custom Box Sample</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* --- SUBMENU 4: IN-HOUSE FACTORY & MACHINES --- */}
      {activeMegaMenu === 'factory' && (
        <div 
          className="absolute top-full left-1/2 -translate-x-1/2 w-[95vw] max-w-[1360px] bg-white/98 backdrop-blur-2xl rounded-3xl border border-slate-200/90 shadow-2xl p-6 lg:p-8 mt-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50"
          onMouseEnter={() => handleMouseEnter('factory')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block pb-1 border-b border-slate-100 flex items-center gap-1.5">
                <Scissors className="w-4 h-4 text-amber-600" />
                <span>01 / Industrial Machinery</span>
              </span>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="font-semibold text-slate-900">15-Needle Tajima Industrial Embroidery</li>
                <li>M&R Oval Automatic 12-Color Silkscreen</li>
                <li>Mimaki Japanese Full-Garment Sublimation</li>
                <li>360° Rotary Laser Fiber Etching</li>
                <li>Gerber CAD Precision Fabric Nesting</li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block pb-1 border-b border-slate-100 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-sky-600" />
                <span>02 / Fabric Mills & Yarns</span>
              </span>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="font-semibold text-slate-900">100% GOTS Certified Organic Cotton</li>
                <li>Heavy French Terry, Pique & Winter Fleece</li>
                <li>Certified NFPA 2112 Flame-Resistant Twill</li>
                <li>High-Vis Breathable ANSI Fluorescent Meshes</li>
                <li>Exact Digital Pantone Color Matching</li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block pb-1 border-b border-slate-100 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>03 / Certifications & QA</span>
              </span>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="font-semibold text-slate-900">ISO 9001:2015 Quality Management</li>
                <li>ISO 14001 Environmental Standard</li>
                <li>OEKO-TEX Standard 100 Non-Toxic Weaves</li>
                <li>UAE FTA Tax Compliant VAT Invoicing</li>
                <li>4-Stage Inline Tensile & Wash Lab Tests</li>
              </ul>
            </div>

            <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-2xl p-5 flex flex-col justify-between border border-slate-800">
              <div>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-400 text-slate-950 uppercase tracking-wider">
                  50,000 Sq Ft Plant
                </span>
                <h4 className="text-xs font-bold text-white mt-2">
                  Book an In-Person Factory Tour
                </h4>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                  Tour our production lines in Ajman Industrial Area 1. Meet master pattern makers and see Tajima embroidery heads in action.
                </p>
              </div>
              <a
                href="https://wa.me/971501234567?text=Hi%20Kraftwear%20Dubai,%20I%20would%20like%20to%20schedule%20an%20Ajman%20factory%20tour."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Schedule Tour via WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

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
              href="https://wa.me/971501234567?text=Hi%20Kraftwear%20Dubai,%20I%20would%20like%20to%20discuss%20a%20bulk%20order."
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

'use client';

import React, { useState, useRef, useEffect } from 'react';
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
  FileSpreadsheet
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

  const handleMouseEnter = (menuKey: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMegaMenu(menuKey);
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
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200/80 shadow-xs">
      
      {/* ============================================================== */}
      {/* 1. TOP ANNOUNCEMENT TICKER                                      */}
      {/* ============================================================== */}
      <div className="w-full bg-slate-950 text-slate-300 text-[11px] py-2.5 border-b border-slate-800">
        <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between gap-4">
          
          {/* Left: Live Factory Status & Standards */}
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5 font-medium text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Ajman Factory Active & Producing
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              ISO 9001:2015 & NFPA 2112 Certified
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              Express GCC Shipping: 48–72h Doorstep Delivery
            </span>
          </div>

          {/* Right: Direct UAE Hotline */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/971501234567?text=Hi%20Kraftwear%20Dubai,%20I%20would%20like%20to%20inquire%20about%20custom%20apparel."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium text-[11px]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp: +971 50 123 4567</span>
            </a>
            <span className="text-slate-700">|</span>
            <span className="text-slate-400 font-mono text-[10px]">Showroom: Dubai d3</span>
          </div>

        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. MAIN NAVBAR & MEGA MENU TRIGGERS                             */}
      {/* ============================================================== */}
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-slate-950 flex items-center justify-center text-white font-extrabold text-lg tracking-tight shadow-md group-hover:bg-amber-600 transition-colors">
              KW
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-amber-600 transition-colors">
                  KRAFTWEAR
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                  DUBAI
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">
                Apparel • Uniforms • Merch
              </span>
            </div>
          </Link>

          {/* Desktop Nav with Mega Menu Triggers */}
          <nav className="hidden lg:flex items-center gap-1 h-full">
            
            {/* Mega Menu 1: Custom Apparel */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('apparel')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                type="button"
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                  activeMegaMenu === 'apparel' ? 'text-amber-600 bg-slate-50' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                <span>Custom Apparel</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === 'apparel' ? 'rotate-180 text-amber-600' : 'text-slate-400'}`} />
              </button>
            </div>

            {/* Mega Menu 2: Industrial Workwear & Safety */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('workwear')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                type="button"
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                  activeMegaMenu === 'workwear' ? 'text-amber-600 bg-slate-50' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                <span>Workwear & Safety</span>
                <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                  NFPA
                </span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === 'workwear' ? 'rotate-180 text-amber-600' : 'text-slate-400'}`} />
              </button>
            </div>

            {/* Mega Menu 3: Corporate Gifting & Swag */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('gifting')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                type="button"
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                  activeMegaMenu === 'gifting' ? 'text-amber-600 bg-slate-50' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                <span>Corporate Gifting</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === 'gifting' ? 'rotate-180 text-amber-600' : 'text-slate-400'}`} />
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
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                  activeMegaMenu === 'factory' ? 'text-amber-600 bg-slate-50' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                <span>In-House Factory</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === 'factory' ? 'rotate-180 text-amber-600' : 'text-slate-400'}`} />
              </button>
            </div>

            {/* Direct Tool Links */}
            <a 
              href="#customizer" 
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors flex items-center gap-1.5"
            >
              <span>3D Studio</span>
              <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                Live
              </span>
            </a>

            <a 
              href="#quote-builder" 
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
            >
              Cost Calculator
            </a>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-4 py-2.5 rounded-full border border-slate-300 hover:border-slate-400 text-xs font-bold text-slate-800 transition-colors flex items-center gap-1.5 bg-white shadow-2xs"
            >
              <Calculator className="w-3.5 h-3.5 text-slate-500" />
              <span>Instant RFQ</span>
            </button>

            <a
              href="https://wa.me/971501234567?text=Hi%20Kraftwear%20UAE,%20I%20would%20like%20to%20discuss%20a%20bulk%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm hover:shadow flex items-center gap-2 group"
            >
              <span>Talk to Specialist</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* ============================================================== */}
      {/* 3. INTERACTIVE MEGA MENU DROPDOWN PANELS                         */}
      {/* ============================================================== */}
      
      {/* --- MEGA MENU 1: CUSTOM APPAREL (Times Clothing + Merchlist) --- */}
      {activeMegaMenu === 'apparel' && (
        <div 
          className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-2xl py-8 animate-in fade-in slide-in-from-top-2 duration-150"
          onMouseEnter={() => handleMouseEnter('apparel')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Col 1: Custom Knits & Streetwear */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block font-mono">
                01 / Custom Knits & Streetwear
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#catalog" className="font-semibold text-slate-800 hover:text-amber-700 flex items-center justify-between group">
                    <span>Heavyweight 280 GSM T-Shirts</span>
                    <span className="text-[10px] text-slate-400 group-hover:text-amber-600">Bio-Washed →</span>
                  </a>
                  <p className="text-[11px] text-slate-500">100% Combed French Terry with drop shoulder cut.</p>
                </li>
                <li>
                  <a href="#catalog" className="font-semibold text-slate-800 hover:text-amber-700 flex items-center justify-between group">
                    <span>Brushed Fleece Hoodies (380 GSM)</span>
                    <span className="text-[10px] text-slate-400 group-hover:text-amber-600">Cross-Grain →</span>
                  </a>
                  <p className="text-[11px] text-slate-500">Zero shrink guarantee with double-layer hood.</p>
                </li>
                <li>
                  <a href="#catalog" className="font-semibold text-slate-800 hover:text-amber-700 flex items-center justify-between group">
                    <span>Activewear & DryFit Performance</span>
                    <span className="text-[10px] text-slate-400 group-hover:text-amber-600">Moisture-Wicking →</span>
                  </a>
                  <p className="text-[11px] text-slate-500">Sublimated poly-spandex with UV protection.</p>
                </li>
              </ul>
            </div>

            {/* Col 2: Corporate & Tailored Wear */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block font-mono">
                02 / Corporate Attire & Polos
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#catalog" className="font-semibold text-slate-800 hover:text-amber-700 flex items-center justify-between group">
                    <span>Executive Pique Corporate Polos</span>
                    <span className="text-[10px] text-slate-400 group-hover:text-amber-600">240 GSM →</span>
                  </a>
                  <p className="text-[11px] text-slate-500">Double-lacoste with anti-curl reinforced collars.</p>
                </li>
                <li>
                  <a href="#catalog" className="font-semibold text-slate-800 hover:text-amber-700 flex items-center justify-between group">
                    <span>Non-Iron Oxford Business Shirts</span>
                    <span className="text-[10px] text-slate-400 group-hover:text-amber-600">Tailored →</span>
                  </a>
                  <p className="text-[11px] text-slate-500">100% Egyptian Giza cotton for executive teams.</p>
                </li>
                <li>
                  <a href="#catalog" className="font-semibold text-slate-800 hover:text-amber-700 flex items-center justify-between group">
                    <span>Bespoke Corporate Blazers</span>
                    <span className="text-[10px] text-slate-400 group-hover:text-amber-600">GCC Tropical →</span>
                  </a>
                  <p className="text-[11px] text-slate-500">Poly-viscose breathable tropical weave.</p>
                </li>
              </ul>
            </div>

            {/* Col 3: Outerwear & Accessories */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block font-mono">
                03 / Outerwear & Accessories
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#catalog" className="font-semibold text-slate-800 hover:text-amber-700 flex items-center justify-between group">
                    <span>Varsity Bomber & Quilted Jackets</span>
                    <span className="text-[10px] text-slate-400 group-hover:text-amber-600">Chenille →</span>
                  </a>
                  <p className="text-[11px] text-slate-500">Wool-blend body with diamond satin lining.</p>
                </li>
                <li>
                  <a href="#catalog" className="font-semibold text-slate-800 hover:text-amber-700 flex items-center justify-between group">
                    <span>Custom Structured Caps & Beanies</span>
                    <span className="text-[10px] text-slate-400 group-hover:text-amber-600">Snapback →</span>
                  </a>
                  <p className="text-[11px] text-slate-500">6-panel twill with 3D puff front embroidery.</p>
                </li>
                <li>
                  <a href="#catalog" className="font-semibold text-slate-800 hover:text-amber-700 flex items-center justify-between group">
                    <span>14oz Organic Exhibition Totes</span>
                    <span className="text-[10px] text-slate-400 group-hover:text-amber-600">GOTS →</span>
                  </a>
                  <p className="text-[11px] text-slate-500">Heavyweight cross-stitched natural canvas.</p>
                </li>
              </ul>
            </div>

            {/* Col 4: Featured Promo Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-100 text-amber-800 uppercase tracking-wider">
                  2026 Lookbook Available
                </span>
                <h4 className="text-sm font-bold text-slate-900 mt-2">
                  Wholesale Fabric Swatches & Pantone Matching
                </h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  Request our curated textile kit with pre-dyed French terry, pique, and fleece swatches sent to your Dubai office.
                </p>
              </div>
              <button
                onClick={() => {
                  setActiveMegaMenu(null);
                  onOpenQuoteModal('fabric-swatch-kit');
                }}
                className="mt-4 w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5"
              >
                <span>Request Free Swatch Kit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* --- MEGA MENU 2: WORKWEAR & SAFETY (Klothon Inspired) --- */}
      {activeMegaMenu === 'workwear' && (
        <div 
          className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-2xl py-8 animate-in fade-in slide-in-from-top-2 duration-150"
          onMouseEnter={() => handleMouseEnter('workwear')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Col 1: Oil & Gas / Heavy Industrial */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block font-mono flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-600" />
                <span>Oil, Gas & Energy (Certified FR)</span>
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#industries" className="font-semibold text-slate-800 hover:text-amber-700 flex items-center justify-between group">
                    <span>NFPA 2112 Cotton FR Coveralls</span>
                    <span className="text-[10px] text-amber-600 font-mono">240/300 GSM</span>
                  </a>
                  <p className="text-[11px] text-slate-500">EN ISO 11612 compliant with 3M Scotchlite FR tape.</p>
                </li>
                <li>
                  <a href="#industries" className="font-semibold text-slate-800 hover:text-amber-700 flex items-center justify-between group">
                    <span>High-Visibility Safety Cargo Trousers</span>
                    <span className="text-[10px] text-slate-400">Class 2</span>
                  </a>
                  <p className="text-[11px] text-slate-500">6-pocket reinforced tactical knees and utility loops.</p>
                </li>
                <li>
                  <a href="#industries" className="font-semibold text-slate-800 hover:text-amber-700 flex items-center justify-between group">
                    <span>Electrical Arc Flash Protection Suits</span>
                    <span className="text-[10px] text-slate-400">CAT 4</span>
                  </a>
                  <p className="text-[11px] text-slate-500">40 cal/cm² rated complete hooded systems.</p>
                </li>
              </ul>
            </div>

            {/* Col 2: Hospitality & Healthcare */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block font-mono flex items-center gap-1.5">
                <HeartPulse className="w-3.5 h-3.5 text-emerald-600" />
                <span>Healthcare & Hospitality</span>
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#industries" className="font-semibold text-slate-800 hover:text-amber-700 flex items-center justify-between group">
                    <span>4-Way Stretch Antimicrobial Scrubs</span>
                    <span className="text-[10px] text-emerald-600 font-mono">Fluid Barrier</span>
                  </a>
                  <p className="text-[11px] text-slate-500">Silver-ion infused fabric for 14-hour hospital shifts.</p>
                </li>
                <li>
                  <a href="#industries" className="font-semibold text-slate-800 hover:text-amber-700 flex items-center justify-between group">
                    <span>5-Star Chef Coats & Canvas Aprons</span>
                    <span className="text-[10px] text-slate-400">Cross-Back</span>
                  </a>
                  <p className="text-[11px] text-slate-500">Heat-resistant underarm mesh with brass hardware.</p>
                </li>
                <li>
                  <a href="#industries" className="font-semibold text-slate-800 hover:text-amber-700 flex items-center justify-between group">
                    <span>Housekeeping & Spa Uniforms</span>
                    <span className="text-[10px] text-slate-400">Tunics</span>
                  </a>
                  <p className="text-[11px] text-slate-500">Stain-resistant poly-cotton with colorfast piping.</p>
                </li>
              </ul>
            </div>

            {/* Col 3: Aviation, Security & Schools */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block font-mono flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-sky-600" />
                <span>Aviation, Security & Education</span>
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#industries" className="font-semibold text-slate-800 hover:text-amber-700 flex items-center justify-between group">
                    <span>Security Officer Tactical Uniforms</span>
                    <span className="text-[10px] text-slate-400">Ripstop</span>
                  </a>
                  <p className="text-[11px] text-slate-500">Heavy-duty epaulets, badge tabs & utility pockets.</p>
                </li>
                <li>
                  <a href="#industries" className="font-semibold text-slate-800 hover:text-amber-700 flex items-center justify-between group">
                    <span>Aviation Ground Handling Uniforms</span>
                    <span className="text-[10px] text-slate-400">Tarmac</span>
                  </a>
                  <p className="text-[11px] text-slate-500">Weatherproof high-visibility reflective parkas.</p>
                </li>
                <li>
                  <a href="#industries" className="font-semibold text-slate-800 hover:text-amber-700 flex items-center justify-between group">
                    <span>K-12 School Uniforms & PE Kits</span>
                    <span className="text-[10px] text-slate-400">Year-Round</span>
                  </a>
                  <p className="text-[11px] text-slate-500">Exact Pantone consistency across academic terms.</p>
                </li>
              </ul>
            </div>

            {/* Col 4: Enterprise Tender RFQ */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-400 text-slate-950 uppercase tracking-wider">
                  Enterprise Tender Desk
                </span>
                <h4 className="text-sm font-bold text-white mt-2">
                  Large Scale Corporate & Government Tenders
                </h4>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                  Supplying Samsung, Talabat, and ADNOC contractors with full lab test reports, CE certificates, and FTA tax invoices.
                </p>
              </div>
              <button
                onClick={() => {
                  setActiveMegaMenu(null);
                  onOpenQuoteModal('enterprise-tender');
                }}
                className="mt-4 w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
              >
                <span>Submit Tender Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* --- MEGA MENU 3: CORPORATE GIFTING & SWAG (Corporate Gifts Dubai + Baharnani) --- */}
      {activeMegaMenu === 'gifting' && (
        <div 
          className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-2xl py-8 animate-in fade-in slide-in-from-top-2 duration-150"
          onMouseEnter={() => handleMouseEnter('gifting')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Col 1: VIP Onboarding Boxes */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block font-mono">
                01 / Curated Onboarding Boxes
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#gifting" className="font-semibold text-slate-800 hover:text-amber-700 flex items-center justify-between group">
                    <span>The "Dubai Elite" Executive Box</span>
                    <span className="text-[10px] text-amber-600 font-mono">Bestseller</span>
                  </a>
                  <p className="text-[11px] text-slate-500">Rigid magnetic box, tumbler, leather diary & MagSafe bank.</p>
                </li>
                <li>
                  <a href="#gifting" className="font-semibold text-slate-800 hover:text-amber-700 flex items-center justify-between group">
                    <span>Eco-Forward Sustainable ESG Kit</span>
                    <span className="text-[10px] text-emerald-600 font-mono">Zero Plastic</span>
                  </a>
                  <p className="text-[11px] text-slate-500">Wheat straw Bluetooth speaker, canvas tote & seed paper.</p>
                </li>
                <li>
                  <a href="#gifting" className="font-semibold text-slate-800 hover:text-amber-700 flex items-center justify-between group">
                    <span>Tech Founder Welcome Hamper</span>
                    <span className="text-[10px] text-slate-400">DIFC Choice</span>
                  </a>
                  <p className="text-[11px] text-slate-500">Anodized aluminum accessories & laser engraved gear.</p>
                </li>
              </ul>
            </div>

            {/* Col 2: Drinkware & Electronics */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block font-mono">
                02 / Drinkware & Smart Tech
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#gifting" className="font-semibold text-slate-800 hover:text-amber-700 flex items-center justify-between group">
                    <span>Smart LED Temperature Tumbler</span>
                    <span className="text-[10px] text-slate-400">500ml</span>
                  </a>
                  <p className="text-[11px] text-slate-500">Touch LCD lid with 24-hour icy cold insulation.</p>
                </li>
                <li>
                  <a href="#gifting" className="font-semibold text-slate-800 hover:text-amber-700 flex items-center justify-between group">
                    <span>Ultra-Slim 10,000mAh MagSafe Bank</span>
                    <span className="text-[10px] text-slate-400">15W Fast</span>
                  </a>
                  <p className="text-[11px] text-slate-500">Aircraft-grade aluminum with permanent laser monogram.</p>
                </li>
                <li>
                  <a href="#gifting" className="font-semibold text-slate-800 hover:text-amber-700 flex items-center justify-between group">
                    <span>Leather RFID Travel Portfolios</span>
                    <span className="text-[10px] text-slate-400">Executive</span>
                  </a>
                  <p className="text-[11px] text-slate-500">Embossed corporate branding with metal accents.</p>
                </li>
              </ul>
            </div>

            {/* Col 3: Trade Shows & Events */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block font-mono">
                03 / GITEX & Event Activations
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#gifting" className="font-semibold text-slate-800 hover:text-amber-700 flex items-center justify-between group">
                    <span>GITEX High-Volume Swag Bundles</span>
                    <span className="text-[10px] text-slate-400">Express 48h</span>
                  </a>
                  <p className="text-[11px] text-slate-500">Branded tees, water bottles, lanyards & drawstrings.</p>
                </li>
                <li>
                  <a href="#gifting" className="font-semibold text-slate-800 hover:text-amber-700 flex items-center justify-between group">
                    <span>Custom Satin Lanyards & Badges</span>
                    <span className="text-[10px] text-slate-400">Safety Buckle</span>
                  </a>
                  <p className="text-[11px] text-slate-500">Sublimated dual-sided photo quality conference lanyards.</p>
                </li>
                <li>
                  <a href="#gifting" className="font-semibold text-slate-800 hover:text-amber-700 flex items-center justify-between group">
                    <span>Ramadan & UAE National Day Gifts</span>
                    <span className="text-[10px] text-amber-600 font-mono">Festive</span>
                  </a>
                  <p className="text-[11px] text-slate-500">Custom brass Dallah flasks & luxury date boxes.</p>
                </li>
              </ul>
            </div>

            {/* Col 4: Prototype Swag Box CTA */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-slate-900 text-white uppercase tracking-wider">
                  Custom Prototype
                </span>
                <h4 className="text-sm font-bold text-slate-900 mt-2">
                  Build a Custom Swag Box with Your Logo
                </h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  Pick any 4 items and our design studio will build a 3D digital mockup and physical unboxing sample for your board.
                </p>
              </div>
              <button
                onClick={() => {
                  setActiveMegaMenu(null);
                  onOpenQuoteModal('custom-gift-box');
                }}
                className="mt-4 w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5"
              >
                <span>Customize Swag Box</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* --- SUBMENU 4: IN-HOUSE FACTORY & MACHINES (Times Clothing + EFZEE) --- */}
      {activeMegaMenu === 'factory' && (
        <div 
          className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-2xl py-8 animate-in fade-in slide-in-from-top-2 duration-150"
          onMouseEnter={() => handleMouseEnter('factory')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 font-mono">
                01 / Machine Fleet
              </span>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="font-semibold text-slate-800">15-Needle Tajima Industrial Embroidery</li>
                <li className="text-[11px] text-slate-500">M&R Oval Automatic 12-Color Silkscreen</li>
                <li className="text-[11px] text-slate-500">Mimaki Japanese Full-Garment Sublimation</li>
                <li className="text-[11px] text-slate-500">360° Rotary Laser Fiber Etching</li>
              </ul>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 font-mono">
                02 / Fabric & Mill Partnerships
              </span>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="font-semibold text-slate-800">100% GOTS Organic Cotton</li>
                <li className="text-[11px] text-slate-500">French Terry, Heavyweight Fleece & Pique</li>
                <li className="text-[11px] text-slate-500">NFPA 2112 Flame-Resistant Twill</li>
                <li className="text-[11px] text-slate-500">Digital Pantone Color Archive</li>
              </ul>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 font-mono">
                03 / Certifications & QA
              </span>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="font-semibold text-slate-800">ISO 9001:2015 Quality Management</li>
                <li className="text-[11px] text-slate-500">ISO 14001 Environmental Standard</li>
                <li className="text-[11px] text-slate-500">OEKO-TEX Standard 100 Non-Toxic Dyes</li>
                <li className="text-[11px] text-slate-500">4-Stage Inline Tensile & Wash Inspection</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Book a Factory Tour
                </h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  Tour our 50,000 sq ft production plant in Ajman Industrial Area 1. Meet pattern makers and inspect physical machinery.
                </p>
              </div>
              <a
                href="https://wa.me/971501234567?text=Hi%20Kraftwear%20Dubai,%20I%20would%20like%20to%20schedule%20an%20Ajman%20factory%20tour."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full py-2 rounded-xl bg-slate-900 text-white text-xs font-bold text-center hover:bg-slate-800"
              >
                Schedule via WhatsApp
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
                <span>Workwear & FR Safety (Klothon)</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'workwear' ? 'rotate-180 text-amber-600' : 'text-slate-400'}`} />
              </button>
              {mobileSubmenu === 'workwear' && (
                <div className="pl-3 py-2 space-y-2 text-xs text-slate-600">
                  <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="block py-1">NFPA 2112 Certified FR Coveralls</a>
                  <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="block py-1">High-Visibility 3M Reflective Vests</a>
                  <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="block py-1">Hospital Antimicrobial Scrubs</a>
                  <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="block py-1">Hospitality Chef Coats & Aprons</a>
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
                <span>Corporate Gifting & VIP Kits</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'gifting' ? 'rotate-180 text-amber-600' : 'text-slate-400'}`} />
              </button>
              {mobileSubmenu === 'gifting' && (
                <div className="pl-3 py-2 space-y-2 text-xs text-slate-600">
                  <a href="#gifting" onClick={() => setMobileMenuOpen(false)} className="block py-1">The "Dubai Elite" Welcome Box</a>
                  <a href="#gifting" onClick={() => setMobileMenuOpen(false)} className="block py-1">Smart LED Temperature Tumblers</a>
                  <a href="#gifting" onClick={() => setMobileMenuOpen(false)} className="block py-1">MagSafe Wireless Power Banks</a>
                  <a href="#gifting" onClick={() => setMobileMenuOpen(false)} className="block py-1">GITEX Event Merchandise Packs</a>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <a
              href="#customizer"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-900"
            >
              Interactive 3D Studio
            </a>
            <a
              href="#quote-builder"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-900"
            >
              Cost Calculator & Volume Tiers
            </a>
            <a
              href="#manufacturing"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-900"
            >
              Ajman Factory Capabilities
            </a>
          </div>

          <div className="pt-4 border-t border-slate-200 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs shadow"
            >
              Request Custom Quotation
            </button>
            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2"
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

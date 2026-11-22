'use client';

import React, { useState } from 'react';
import { Currency } from '@/types';
import { CURRENCY_RATES } from '@/data/mockData';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Flame, 
  Award, 
  CheckCircle2, 
  Layers, 
  Palette, 
  DownloadCloud,
  FileSpreadsheet
} from 'lucide-react';

interface HeroProps {
  currentCurrency: Currency;
  onOpenQuoteModal: (category?: string) => void;
}

export default function Hero({ currentCurrency, onOpenQuoteModal }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'apparel' | 'workwear' | 'gifting'>('apparel');
  const [previewColor, setPreviewColor] = useState('#0f172a');
  const [previewBranding, setPreviewBranding] = useState<'embroidery' | 'puff' | 'screen'>('embroidery');

  const curr = CURRENCY_RATES[currentCurrency];
  const formatPrice = (aed: number) => {
    const val = (aed * curr.rate).toFixed(0);
    return `${curr.symbol} ${val}`;
  };

  const heroTabs = [
    { id: 'apparel', label: 'Custom Apparel & Streetwear', tag: 'No MOQ / Bulk' },
    { id: 'workwear', label: 'Industrial Safety & Workwear', tag: 'ISO & NFPA' },
    { id: 'gifting', label: 'Corporate Gifting & VIP Swag', tag: 'Custom Kits' },
  ] as const;

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Industry Pill / Tagline */}
        <div className="flex items-center justify-center lg:justify-start">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900 border border-amber-400/30 text-xs font-semibold text-amber-300 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            <span>UAE & GCC #1 Direct Apparel, Workwear & Swag Manufacturer</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 font-normal">Dubai • Ajman • Riyadh</span>
          </div>
        </div>

        {/* Main Grid: Left Pitch, Right Interactive Live Showcase */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bold Headline & Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              Engineered Apparel & Workwear,{' '}
              <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                Crafted in Dubai.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
              Combining end-to-end textile manufacturing, certified flame-resistant industrial uniforms, and luxury corporate gifting under one roof. Zero middlemen, retail-grade finishes, and fast GCC fulfillment.
            </p>

            {/* Interactive Tab Switcher */}
            <div className="p-1.5 bg-slate-900/90 border border-slate-800 rounded-2xl flex flex-wrap gap-1 max-w-xl mx-auto lg:mx-0">
              {heroTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex flex-col sm:flex-row items-center justify-center gap-1.5 ${
                    activeTab === tab.id
                      ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                    activeTab === tab.id ? 'bg-slate-950/15 text-slate-950' : 'bg-slate-800 text-amber-400'
                  }`}>
                    {tab.tag}
                  </span>
                </button>
              ))}
            </div>

            {/* Context highlights based on selected tab */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left">
              {activeTab === 'apparel' && (
                <>
                  <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800">
                    <p className="text-xs font-bold text-amber-400">280–380 GSM Knits</p>
                    <p className="text-[12px] text-slate-400">French Terry, Bio-washed combed cotton & DriFit.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800">
                    <p className="text-xs font-bold text-amber-400">No MOQ & Bulk Tiers</p>
                    <p className="text-[12px] text-slate-400">Order from 1 sample to 50,000+ units for brands.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800">
                    <p className="text-xs font-bold text-amber-400">Puff & Tajima Stitch</p>
                    <p className="text-[12px] text-slate-400">3D raised embroidery and screen printing.</p>
                  </div>
                </>
              )}

              {activeTab === 'workwear' && (
                <>
                  <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800">
                    <p className="text-xs font-bold text-amber-400">NFPA 2112 & EN ISO</p>
                    <p className="text-[12px] text-slate-400">Oil & Gas heavy duty flame resistant twill.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800">
                    <p className="text-xs font-bold text-amber-400">3M Scotchlite High-Vis</p>
                    <p className="text-[12px] text-slate-400">Certified reflective strips for 24/7 site safety.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800">
                    <p className="text-xs font-bold text-amber-400">Tailored Fit Guarantee</p>
                    <p className="text-[12px] text-slate-400">Bespoke sizing for hospitals, aviation & security.</p>
                  </div>
                </>
              )}

              {activeTab === 'gifting' && (
                <>
                  <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800">
                    <p className="text-xs font-bold text-amber-400">Rigid Magnetic Boxes</p>
                    <p className="text-[12px] text-slate-400">Custom EVA foam inserts & velvet interior.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800">
                    <p className="text-xs font-bold text-amber-400">Laser & Rotary Engrave</p>
                    <p className="text-[12px] text-slate-400">Vacuum tumblers, MagSafe banks & diaries.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800">
                    <p className="text-xs font-bold text-amber-400">VIP Onboarding Kits</p>
                    <p className="text-[12px] text-slate-400">Pre-curated luxury sets for trade shows & teams.</p>
                  </div>
                </>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
              <button
                onClick={() => onOpenQuoteModal(activeTab)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 text-slate-950 font-extrabold text-base shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                <span>Launch Instant Quote Builder</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#catalog"
                className="w-full sm:w-auto px-6 py-4 rounded-xl border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold text-base transition-all flex items-center justify-center gap-2 hover:border-amber-400/50"
              >
                <span>Browse 1,000+ Products</span>
              </a>
            </div>

            {/* Micro guarantees */}
            <div className="flex items-center gap-6 pt-2 text-xs text-slate-400 justify-center lg:justify-start flex-wrap">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Free Digital Mockups in 2 Hours
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Physical Pre-Production Samples
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Pantone Match Guarantee
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Live Mockup Preview Widget */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 shadow-2xl shadow-black/80">
              
              {/* Badge strip */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                    Live 3D Specimen Preview
                  </span>
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20">
                  {activeTab === 'apparel' ? 'Heavyweight 280 GSM' : activeTab === 'workwear' ? 'NFPA 2112 Twill' : 'VIP Rigid Box'}
                </span>
              </div>

              {/* Visual Mockup Display */}
              <div 
                className="relative my-4 h-64 rounded-2xl flex items-center justify-center overflow-hidden transition-colors duration-500 border border-slate-800/80"
                style={{ backgroundColor: previewColor }}
              >
                {/* Visual Garment Silhouette & Simulated Branding */}
                <div className="relative flex flex-col items-center justify-center text-center p-6 select-none">
                  
                  {/* Visual Silhouette representation */}
                  {activeTab === 'apparel' && (
                    <div className="w-44 h-48 rounded-t-3xl border-2 border-white/20 bg-white/5 relative flex flex-col items-center justify-center shadow-inner">
                      {/* Collar */}
                      <div className="w-16 h-8 rounded-b-full border-b-2 border-white/30 bg-black/20 absolute -top-1"></div>
                      {/* Branding preview */}
                      <div className="p-3 rounded-lg border border-white/30 bg-black/30 backdrop-blur-sm mt-3 flex flex-col items-center">
                        <span className="text-[10px] tracking-widest text-amber-300 font-black uppercase">
                          DUBAI TECH CO.
                        </span>
                        <span className="text-[8px] text-white/70 font-mono">
                          {previewBranding === 'embroidery' ? '🧵 Tajima Embroidered' : previewBranding === 'puff' ? '💨 3D High Puff' : '🎨 6-Color Screen'}
                        </span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'workwear' && (
                    <div className="w-44 h-48 rounded-xl border-2 border-white/20 bg-white/5 relative flex flex-col items-center justify-center">
                      {/* High-Vis Reflective Strip */}
                      <div className="w-full h-5 bg-yellow-400/90 border-y border-black/40 flex items-center justify-center my-2 shadow">
                        <span className="text-[7px] text-slate-950 font-bold tracking-widest">3M SCOTCHLITE REFLECTIVE</span>
                      </div>
                      <div className="p-2 rounded bg-black/40 border border-white/20 flex flex-col items-center">
                        <Flame className="w-4 h-4 text-amber-400 mb-0.5" />
                        <span className="text-[9px] text-white font-bold">FR CERTIFIED - EN 11612</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'gifting' && (
                    <div className="w-48 h-40 rounded-2xl border-2 border-amber-400/40 bg-gradient-to-tr from-slate-900 to-black p-4 flex flex-col justify-between shadow-2xl">
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] font-mono text-amber-400 font-bold">ELITE ONBOARDING</span>
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      </div>
                      <div className="text-center">
                        <p className="text-xs font-bold text-white tracking-wide">LASER ETCHED LOGO</p>
                        <p className="text-[8px] text-slate-400">Gold Hot Foil Stamped</p>
                      </div>
                      <div className="h-1.5 w-full bg-amber-400/30 rounded-full"></div>
                    </div>
                  )}
                </div>

                {/* Corner price indicator */}
                <div className="absolute bottom-3 right-3 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-right">
                  <p className="text-[10px] text-slate-400 uppercase font-mono">Starting From</p>
                  <p className="text-sm font-black text-amber-400">
                    {activeTab === 'apparel' && formatPrice(38)}
                    {activeTab === 'workwear' && formatPrice(89)}
                    {activeTab === 'gifting' && formatPrice(135)}
                    <span className="text-[10px] text-slate-400 font-normal"> / unit</span>
                  </p>
                </div>
              </div>

              {/* Customizer Controls: Fabric Color */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Palette className="w-3.5 h-3.5 text-amber-400" />
                    <span>Fabric Palette:</span>
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    Pantone Matched
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  {[
                    { hex: '#0f172a', name: 'Onyx Black' },
                    { hex: '#1e3a8a', name: 'Gulf Navy' },
                    { hex: '#78350f', name: 'Desert Camel' },
                    { hex: '#064e3b', name: 'Emirates Green' },
                    { hex: '#7f1d1d', name: 'Crimson' },
                    { hex: '#f8fafc', name: 'Pearl White' },
                  ].map((color) => (
                    <button
                      key={color.hex}
                      onClick={() => setPreviewColor(color.hex)}
                      title={color.name}
                      style={{ backgroundColor: color.hex }}
                      className={`w-7 h-7 rounded-full border-2 transition-transform ${
                        previewColor === color.hex ? 'border-amber-400 scale-125 shadow-lg' : 'border-slate-700 hover:scale-110'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Branding Selector */}
              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
                <div className="flex gap-1.5">
                  {(['embroidery', 'puff', 'screen'] as const).map((method) => (
                    <button
                      key={method}
                      onClick={() => setPreviewBranding(method)}
                      className={`px-2.5 py-1 rounded text-[11px] font-semibold capitalize transition-all ${
                        previewBranding === method
                          ? 'bg-amber-400 text-slate-950 font-bold'
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => onOpenQuoteModal(activeTab)}
                  className="text-xs text-amber-400 hover:text-amber-300 font-bold underline flex items-center gap-1"
                >
                  Configure Full Order →
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* --- BOTTOM STATS STRIP --- */}
        <div className="mt-16 pt-10 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <p className="text-3xl lg:text-4xl font-black text-amber-400">10M+</p>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Garments Produced in UAE</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl lg:text-4xl font-black text-white">450+</p>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Enterprise & Government Clients</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl lg:text-4xl font-black text-amber-400">48-72h</p>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Express Turnaround Time</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl lg:text-4xl font-black text-white">ISO 9001</p>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Quality & Safety Certified</p>
          </div>
        </div>

      </div>
    </section>
  );
}


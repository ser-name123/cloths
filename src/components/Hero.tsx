'use client';

import React, { useState } from 'react';
import { Currency } from '@/types';
import { CURRENCY_RATES } from '@/data/mockData';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  Palette, 
  Flame, 
  Award, 
  Clock,
  ChevronRight
} from 'lucide-react';

interface HeroProps {
  currentCurrency: Currency;
  onOpenQuoteModal: (category?: string) => void;
}

export default function Hero({ currentCurrency, onOpenQuoteModal }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'apparel' | 'workwear' | 'gifting'>('apparel');
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const curr = CURRENCY_RATES[currentCurrency];
  const formatPrice = (aed: number) => {
    const val = (aed * curr.rate).toFixed(0);
    return `${curr.symbol} ${val}`;
  };

  const specimenData = {
    apparel: {
      name: 'Heavyweight Streetwear Tee (280 GSM)',
      badge: 'Streetwear & Corporate',
      basePrice: 38,
      leadTime: '3-5 Business Days',
      fabric: '100% Combed Compact Cotton, Bio-Washed',
      colors: [
        { name: 'Onyx Black', hex: '#0f172a', img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80' },
        { name: 'Pure White', hex: '#f8fafc', img: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80' },
        { name: 'Desert Camel', hex: '#78350f', img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80' },
        { name: 'Gulf Navy', hex: '#1e3a8a', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80' },
      ],
      features: ['Drop Shoulder Cut', 'Tearaway Neck Tag', 'Puff & Screen Ready'],
    },
    workwear: {
      name: 'Flame Resistant (FR) Coverall',
      badge: 'NFPA 2112 Certified',
      basePrice: 89,
      leadTime: '4-7 Business Days',
      fabric: '240 GSM Heavy Twill with 3M Scotchlite Reflective',
      colors: [
        { name: 'Safety Orange', hex: '#ea580c', img: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80' },
        { name: 'Industrial Navy', hex: '#1d4ed8', img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80' },
        { name: 'Petrol Blue', hex: '#0e7490', img: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80' },
      ],
      features: ['YKK 2-Way Brass Zipper', 'Gas Detector Loop', 'Double Stitched Stress Points'],
    },
    gifting: {
      name: 'The "Dubai Elite" Executive Swag Box',
      badge: 'VIP Onboarding Kit',
      basePrice: 135,
      leadTime: '2-4 Business Days',
      fabric: 'Custom Rigid Magnetic Box with Velvet EVA Foam',
      colors: [
        { name: 'Matte Obsidian', hex: '#09090b', img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80' },
        { name: 'Midnight Blue', hex: '#1e293b', img: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80' },
        { name: 'Eco Kraft', hex: '#78350f', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80' },
      ],
      features: ['Smart LED Tumbler', 'A5 Leather Journal', '10,000mAh MagSafe Power Bank'],
    },
  };

  const currentSpecimen = specimenData[activeTab];
  const currentColor = currentSpecimen.colors[selectedColorIndex] || currentSpecimen.colors[0];

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/60 border-b border-slate-200/80 pt-4 pb-10 lg:pt-6 lg:pb-10 overflow-hidden">
      
      {/* Background ambient subtle blurs */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-slate-100 rounded-full blur-3xl pointer-events-none translate-y-1/3"></div>

      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top Tagline Pill */}
        <div className="flex items-center justify-center lg:justify-start">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-semibold text-slate-700 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span>Direct In-House Apparel & Uniform Manufacturer in UAE</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500 font-normal">Dubai • Ajman Factory</span>
          </div>
        </div>

        {/* Hero Grid: Left Content, Right Photorealistic Card */}
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Elegant Heading with Balanced Scale */}
            <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-slate-900 tracking-[-0.02em] leading-[1.3]">
              Bespoke Apparel, Certified Workwear & Corporate Swag,{' '}
              <span className="text-amber-600 font-bold">Engineered in Dubai.</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Combining end-to-end textile cutting & stitching, certified flame-resistant industrial uniforms, and luxury corporate merchandise. Direct factory wholesale with Tajima embroidery and 48-hour UAE fulfillment.
            </p>

            {/* Segmented Category Filter */}
            <div className="inline-flex p-1 bg-slate-100/90 rounded-2xl border border-slate-200/80 max-w-full overflow-x-auto no-scrollbar">
              {[
                { id: 'apparel', label: 'Custom Apparel', tag: 'No MOQ / Bulk' },
                { id: 'workwear', label: 'Safety & Workwear', tag: 'ISO & NFPA' },
                { id: 'gifting', label: 'VIP Corporate Gifts', tag: 'Custom Boxes' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as any);
                    setSelectedColorIndex(0);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                    activeTab === tab.id ? 'bg-amber-50 text-amber-700' : 'text-slate-400'
                  }`}>
                    {tab.tag}
                  </span>
                </button>
              ))}
            </div>

            {/* Spec Highlights Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-left">
              {activeTab === 'apparel' && (
                <>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <p className="text-xs font-bold text-slate-900">280–380 GSM Knits</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">Combed French Terry, bio-washed & pre-shrunk.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <p className="text-xs font-bold text-slate-900">No MOQ & Volume Tiers</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">Order 1 sample or scale to 50,000+ units.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <p className="text-xs font-bold text-slate-900">3D Puff & Tajima Stitch</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">German Madeira colorfast industrial threads.</p>
                  </div>
                </>
              )}

              {activeTab === 'workwear' && (
                <>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <p className="text-xs font-bold text-slate-900">NFPA 2112 & EN ISO</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">Oil, Gas & Energy flame resistant cotton twill.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <p className="text-xs font-bold text-slate-900">3M Scotchlite High-Vis</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">Certified reflective bands for 24/7 site safety.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <p className="text-xs font-bold text-slate-900">Bespoke Fit Programs</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">Tailored cuts for hospitals, aviation & security.</p>
                  </div>
                </>
              )}

              {activeTab === 'gifting' && (
                <>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <p className="text-xs font-bold text-slate-900">Rigid Magnetic Boxes</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">Custom velvet foam inserts & gold hot foil stamping.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <p className="text-xs font-bold text-slate-900">Laser Rotary Etch</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">Permanent engraving on tumblers & power banks.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <p className="text-xs font-bold text-slate-900">VIP Onboarding Kits</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">Curated swag packs for new hires & trade shows.</p>
                  </div>
                </>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-3 justify-center lg:justify-start">
              <button
                onClick={() => onOpenQuoteModal(activeTab)}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-md shadow-slate-900/15 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Launch Instant Quote Builder</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href="#catalog"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-slate-300 hover:border-slate-400 bg-white text-slate-800 font-semibold text-sm transition-all shadow-2xs flex items-center justify-center gap-1.5"
              >
                <span>Explore 1,000+ Products</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Micro Guarantees */}
            <div className="flex items-center gap-5 pt-2 text-xs text-slate-500 justify-center lg:justify-start flex-wrap">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Free Digital Mockups in 2h
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Pre-Production Proof Samples
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Pantone Match Guarantee
              </span>
            </div>

          </div>

          {/* Right Column: High-End Photorealistic Specimen Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xl shadow-slate-200/60">
              
              {/* Card Header Strip */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="text-xs font-semibold text-slate-800">
                    Live Specimen Preview
                  </span>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  {currentSpecimen.badge}
                </span>
              </div>

              {/* Real Product Image Showcase */}
              <div className="relative my-4 h-72 sm:h-80 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/60 group">
                <img
                  src={currentColor.img}
                  alt={currentSpecimen.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Production Tag */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-xs flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                  <span className="text-[11px] font-bold text-slate-800">
                    {currentColor.name}
                  </span>
                </div>

                {/* Floating Price Pill */}
                <div className="absolute bottom-3 right-3 bg-slate-900/95 backdrop-blur-md px-3.5 py-2 rounded-xl text-right shadow-lg text-white">
                  <span className="text-[10px] text-slate-400 block font-mono">Wholesale from</span>
                  <span className="text-base font-bold text-amber-400 font-mono">
                    {formatPrice(currentSpecimen.basePrice)}
                  </span>
                  <span className="text-[10px] text-slate-300"> / unit</span>
                </div>
              </div>

              {/* Fabric Color Swatches & Details */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                    <Palette className="w-3.5 h-3.5 text-slate-500" />
                    <span>Select Colorway:</span>
                  </span>
                  <span className="text-[11px] font-medium text-slate-500">
                    {currentColor.name}
                  </span>
                </div>

                {/* Color Buttons */}
                <div className="flex items-center gap-2">
                  {currentSpecimen.colors.map((c, idx) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColorIndex(idx)}
                      title={c.name}
                      style={{ backgroundColor: c.hex }}
                      className={`w-7 h-7 rounded-full border-2 transition-all ${
                        selectedColorIndex === idx
                          ? 'border-slate-900 scale-125 shadow'
                          : 'border-slate-300 hover:scale-110'
                      }`}
                    />
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Fast GCC Turnaround:</span>
                  <span className="font-semibold text-slate-800 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    {currentSpecimen.leadTime}
                  </span>
                </div>
              </div>

              {/* Action Button inside Specimen Card */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                <button
                  onClick={() => onOpenQuoteModal(activeTab, { product: currentSpecimen.name, color: currentColor.name })}
                  className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-800 text-xs font-bold transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Request Sample in this Color</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-white transition-colors" />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* --- BOTTOM STATS BAR --- */}
        <div className="mt-10 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <p className="text-xl sm:text-2xl font-bold text-slate-900">10M+</p>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Garments Produced in UAE</p>
          </div>
          <div className="space-y-1">
            <p className="text-xl sm:text-2xl font-bold text-slate-900">450+</p>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">GCC Enterprise Clients</p>
          </div>
          <div className="space-y-1">
            <p className="text-xl sm:text-2xl font-bold text-slate-900">48-72h</p>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Express Delivery Speed</p>
          </div>
          <div className="space-y-1">
            <p className="text-xl sm:text-2xl font-bold text-slate-900">ISO 9001</p>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Certified Quality Standard</p>
          </div>
        </div>

      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import { Currency } from '@/types';
import { CURRENCY_RATES } from '@/data/mockData';
import { 
  Eye, 
  Sparkles, 
  Palette, 
  Layers, 
  Check, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

interface LiveCustomizerProps {
  currentCurrency: Currency;
  onOpenQuoteModal: (category?: string, details?: any) => void;
}

export default function LiveCustomizer({ currentCurrency, onOpenQuoteModal }: LiveCustomizerProps) {
  const [selectedGarment, setSelectedGarment] = useState<'tee' | 'hoodie' | 'polo' | 'coverall' | 'tumbler'>('tee');
  const [selectedColor, setSelectedColor] = useState('#0f172a');
  const [logoPosition, setLogoPosition] = useState<'chest' | 'center' | 'back'>('chest');
  const [technique, setTechnique] = useState<'embroidery' | 'puff' | 'screen' | 'laser'>('embroidery');
  const [brandText, setBrandText] = useState('YOUR LOGO HERE');

  const curr = CURRENCY_RATES[currentCurrency];

  const garments = [
    { id: 'tee', name: 'Oversized Streetwear Tee (280 GSM)', basePrice: 38, image: '/images/products/heavy-tee.jpg' },
    { id: 'hoodie', name: 'Heavyweight Fleece Hoodie (380 GSM)', basePrice: 78, image: '/images/products/fleece-hoodie.jpg' },
    { id: 'polo', name: 'Executive Pique Polo', basePrice: 44, image: '/images/products/executive-polo.jpg' },
    { id: 'coverall', name: 'FR Industrial Safety Coverall', basePrice: 89, image: '/images/products/fr-coverall.jpg' },
    { id: 'tumbler', name: 'Smart Temperature Tumbler', basePrice: 29, image: '/images/products/smart-tumbler.jpg' },
  ] as const;

  const currentItem = garments.find(g => g.id === selectedGarment) || garments[0];

  const colors = [
    { hex: '#0f172a', name: 'Phantom Black' },
    { hex: '#f8fafc', name: 'Pure White' },
    { hex: '#1e3a8a', name: 'Deep Royal' },
    { hex: '#78350f', name: 'Desert Camel' },
    { hex: '#064e3b', name: 'Emirates Green' },
    { hex: '#7f1d1d', name: 'Bordeaux Red' },
  ];

  return (
    <section id="customizer" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
            <Eye className="w-3.5 h-3.5 text-slate-500" />
            <span>THE MERCHLIST-INSPIRED STUDIO</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-slate-900 tracking-tight">
            Interactive 3D Styling Studio
          </h2>
          <p className="text-slate-600 text-sm">
            Visualize your brand logo and select embroidery vs printing before placing a bulk production order.
          </p>
        </div>

        {/* Studio Box */}
        <div className="mt-12 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Canvas (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-md h-80 sm:h-96 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center shadow-inner group">
                <img
                  src={currentItem.image}
                  alt={currentItem.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/images/products/fr-coverall.jpg';
                  }}
                />
                
                {/* Visual Stamp Simulation */}
                <div className={`absolute p-3 rounded-lg bg-white/90 backdrop-blur-md border border-slate-300 shadow-lg text-center transition-all ${
                  logoPosition === 'chest' ? 'top-12 left-10' : logoPosition === 'center' ? 'top-20' : 'top-8 scale-110'
                }`}>
                  <p className="text-xs font-bold text-slate-900 tracking-wider uppercase">
                    {brandText || 'YOUR LOGO'}
                  </p>
                  <p className="text-[9px] font-mono text-slate-500 uppercase mt-0.5">
                    {technique === 'embroidery' ? '🧵 Tajima Embroidery' : technique === 'puff' ? '💨 3D High Puff' : '🎨 Silkscreen Print'}
                  </p>
                </div>

                {/* Corner Status Pill */}
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200 text-[10px] font-semibold text-slate-700 shadow-2xs">
                  Active Specimen: {currentItem.name}
                </div>
              </div>
            </div>

            {/* Controls (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              
              {/* Garment Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  1. Choose Garment
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {garments.map((g) => (
                    <button
                      key={g.id}
                      onClick={() => setSelectedGarment(g.id)}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all text-left ${
                        selectedGarment === g.id
                          ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <p className="truncate">{g.name}</p>
                      <p className={`text-[10px] font-mono mt-0.5 ${selectedGarment === g.id ? 'text-amber-400' : 'text-slate-500'}`}>
                        from {curr.symbol} {(g.basePrice * curr.rate).toFixed(0)}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  2. Garment Colorway
                </label>
                <div className="flex items-center gap-2">
                  {colors.map((c) => (
                    <button
                      key={c.hex}
                      onClick={() => setSelectedColor(c.hex)}
                      title={c.name}
                      style={{ backgroundColor: c.hex }}
                      className={`w-7 h-7 rounded-full border-2 transition-all ${
                        selectedColor === c.hex ? 'border-slate-900 scale-125 shadow-sm' : 'border-slate-300 hover:scale-110'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Brand Text Input */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  3. Brand Name / Monogram
                </label>
                <input
                  type="text"
                  maxLength={24}
                  value={brandText}
                  onChange={(e) => setBrandText(e.target.value)}
                  placeholder="Type company name..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-400"
                />
              </div>

              {/* Technique & Placement */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    Placement
                  </label>
                  <div className="flex flex-col gap-1">
                    {(['chest', 'center', 'back'] as const).map((pos) => (
                      <button
                        key={pos}
                        onClick={() => setLogoPosition(pos)}
                        className={`px-2.5 py-1.5 rounded-lg text-xs font-medium capitalize text-left transition-all ${
                          logoPosition === pos ? 'bg-slate-900 text-white font-semibold' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {pos}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    Technique
                  </label>
                  <div className="flex flex-col gap-1">
                    {(['embroidery', 'puff', 'screen'] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setTechnique(t)}
                        className={`px-2.5 py-1.5 rounded-lg text-xs font-medium capitalize text-left transition-all ${
                          technique === t ? 'bg-slate-900 text-white font-semibold' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => onOpenQuoteModal('studio-sample', { garment: currentItem.name, color: selectedColor, technique })}
                className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Request Physical Pre-Production Sample</span>
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import { Currency } from '@/types';
import { CURRENCY_RATES } from '@/data/mockData';
import { 
  Sparkles, 
  Layers, 
  Palette, 
  Upload, 
  Eye, 
  RotateCw, 
  ShieldCheck, 
  CheckCircle,
  HelpCircle
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
  const [demoBrandName, setDemoBrandName] = useState('YOUR LOGO HERE');

  const curr = CURRENCY_RATES[currentCurrency];

  const garments = [
    { id: 'tee', name: 'Oversized Tee 280 GSM', basePrice: 38 },
    { id: 'hoodie', name: 'Heritage Hoodie 380 GSM', basePrice: 78 },
    { id: 'polo', name: 'Executive Pique Polo', basePrice: 44 },
    { id: 'coverall', name: 'FR Safety Coverall', basePrice: 89 },
    { id: 'tumbler', name: 'Smart Vacuum Tumbler', basePrice: 29 },
  ] as const;

  const currentGarmentData = garments.find(g => g.id === selectedGarment) || garments[0];

  const colors = [
    { hex: '#0f172a', name: 'Phantom Black' },
    { hex: '#f8fafc', name: 'Pure White' },
    { hex: '#1e3a8a', name: 'Deep Royal' },
    { hex: '#78350f', name: 'Desert Camel' },
    { hex: '#064e3b', name: 'Emirates Green' },
    { hex: '#7f1d1d', name: 'Bordeaux Red' },
  ];

  return (
    <section id="customizer" className="py-24 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold">
            <Eye className="w-3.5 h-3.5" />
            <span>THE MERCHLIST-INSPIRED LIVE STUDIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Design & Visualize{' '}
            <span className="text-amber-400">Before You Commit.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Interact with our virtual styling canvas. Test fabrics, placements, and embellishments with live photorealistic simulation.
          </p>
        </div>

        {/* Studio Workspace */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          {/* Left Canvas (Interactive Visual Display) - 7 cols */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            <div 
              className="relative w-full max-w-lg h-96 sm:h-[420px] rounded-2xl flex items-center justify-center transition-colors duration-500 border border-slate-800 shadow-2xl overflow-hidden"
              style={{ backgroundColor: selectedColor }}
            >
              {/* Grid texture overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

              {/* Garment Mockup SVG Representation */}
              <div className="relative z-10 w-64 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
                
                {selectedGarment === 'tee' && (
                  <div className="relative w-full h-full flex flex-col items-center justify-center">
                    {/* Visual Tee Shape */}
                    <div className="w-64 h-72 rounded-t-[50px] border-2 border-white/30 bg-white/5 relative flex flex-col items-center justify-center shadow-2xl backdrop-blur-[2px]">
                      {/* Collar */}
                      <div className="w-24 h-10 rounded-b-full border-b-2 border-white/40 bg-black/30 absolute -top-1"></div>
                      {/* Sleeves */}
                      <div className="absolute -left-8 top-6 w-12 h-24 bg-white/5 border-l-2 border-y-2 border-white/20 rounded-l-2xl -rotate-12"></div>
                      <div className="absolute -right-8 top-6 w-12 h-24 bg-white/5 border-r-2 border-y-2 border-white/20 rounded-r-2xl rotate-12"></div>
                      
                      {/* Interactive Logo Stamp */}
                      <div className={`absolute p-3 rounded-lg border border-amber-400/40 bg-black/40 backdrop-blur-md shadow-lg transition-all ${
                        logoPosition === 'chest' ? 'top-16 left-12' : logoPosition === 'center' ? 'top-24' : 'top-12 scale-125'
                      }`}>
                        <p className="text-xs font-black tracking-widest text-amber-400 uppercase text-center">
                          {demoBrandName || 'BRAND LOGO'}
                        </p>
                        <p className="text-[8px] font-mono text-slate-300 text-center uppercase mt-0.5">
                          {technique}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selectedGarment === 'hoodie' && (
                  <div className="relative w-full h-full flex flex-col items-center justify-center">
                    <div className="w-64 h-72 rounded-t-[40px] border-2 border-white/30 bg-white/5 relative flex flex-col items-center justify-center shadow-2xl">
                      {/* Big Hood */}
                      <div className="w-32 h-14 rounded-full border-2 border-white/40 bg-black/40 absolute -top-6"></div>
                      {/* Kangaroo Pouch */}
                      <div className="w-40 h-16 rounded-t-xl border-t-2 border-x-2 border-white/20 bg-black/20 absolute bottom-3"></div>
                      
                      {/* Logo Stamp */}
                      <div className={`absolute p-3 rounded-lg border border-amber-400/40 bg-black/50 backdrop-blur-md shadow-lg transition-all ${
                        logoPosition === 'chest' ? 'top-16 left-12' : logoPosition === 'center' ? 'top-20' : 'top-12 scale-125'
                      }`}>
                        <p className="text-xs font-black tracking-widest text-amber-400 uppercase text-center">
                          {demoBrandName || 'HOODIE LOGO'}
                        </p>
                        <p className="text-[8px] font-mono text-slate-300 text-center uppercase mt-0.5">
                          {technique}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selectedGarment === 'polo' && (
                  <div className="relative w-full h-full flex flex-col items-center justify-center">
                    <div className="w-64 h-72 rounded-t-[40px] border-2 border-white/30 bg-white/5 relative flex flex-col items-center justify-center shadow-2xl">
                      {/* Polo Collar & Placket */}
                      <div className="w-20 h-10 border-b-2 border-white/40 bg-black/30 absolute -top-1"></div>
                      <div className="w-6 h-14 border-x border-b border-white/30 bg-black/20 absolute top-7 flex flex-col items-center justify-around py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/80"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-white/80"></span>
                      </div>
                      
                      {/* Chest Embroidered Emblem */}
                      <div className="absolute top-16 left-12 p-2 rounded border border-amber-400/50 bg-black/50 backdrop-blur-md">
                        <span className="text-[9px] font-bold text-amber-400 tracking-wider">
                          {demoBrandName}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {selectedGarment === 'coverall' && (
                  <div className="relative w-full h-full flex flex-col items-center justify-center">
                    <div className="w-60 h-72 rounded-xl border-2 border-white/30 bg-white/5 relative flex flex-col items-center justify-center shadow-2xl p-4">
                      {/* High-Vis reflective strip */}
                      <div className="w-full h-6 bg-yellow-400 border-y border-black flex items-center justify-center my-2 shadow">
                        <span className="text-[8px] text-black font-mono font-black">3M FR REFLECTIVE</span>
                      </div>
                      <div className="p-2 bg-black/50 border border-white/20 rounded mt-4">
                        <span className="text-[10px] text-white font-bold tracking-wider">
                          {demoBrandName}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {selectedGarment === 'tumbler' && (
                  <div className="relative w-full h-full flex flex-col items-center justify-center">
                    <div className="w-32 h-64 rounded-2xl border-2 border-white/30 bg-gradient-to-b from-white/10 to-black/60 relative flex flex-col items-center justify-between p-4 shadow-2xl">
                      <div className="w-20 h-4 bg-slate-800 rounded-full border border-white/30 flex items-center justify-center">
                        <span className="text-[6px] text-emerald-400 font-mono">24°C</span>
                      </div>
                      <div className="p-2 bg-black/50 border border-amber-400/40 rounded text-center">
                        <span className="text-[9px] font-mono text-amber-400 font-bold block">
                          LASER ETCHED
                        </span>
                        <span className="text-[8px] text-white font-semibold">
                          {demoBrandName}
                        </span>
                      </div>
                      <div className="w-24 h-2 bg-slate-800 rounded-full"></div>
                    </div>
                  </div>
                )}

              </div>

              {/* Status pill on canvas */}
              <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-slate-700 px-3 py-1.5 rounded-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[10px] font-mono font-bold text-slate-300 uppercase">
                  Real-time Render Engine
                </span>
              </div>
            </div>
          </div>

          {/* Right Controls Panel - 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 1. Pick Garment */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                1. Select Specimen
              </label>
              <div className="grid grid-cols-2 gap-2">
                {garments.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setSelectedGarment(g.id)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all text-left ${
                      selectedGarment === g.id
                        ? 'border-amber-400 bg-amber-400/10 text-white'
                        : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >
                    <p className="font-bold">{g.name}</p>
                    <p className="text-[10px] text-amber-400 font-mono mt-0.5">from {curr.symbol} {(g.basePrice * curr.rate).toFixed(0)}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Fabric Palette */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
                <span>2. Fabric Color</span>
                <span className="text-[10px] text-amber-400 font-mono">Reactive Wash</span>
              </label>
              <div className="flex items-center gap-2">
                {colors.map((c) => (
                  <button
                    key={c.hex}
                    onClick={() => setSelectedColor(c.hex)}
                    title={c.name}
                    style={{ backgroundColor: c.hex }}
                    className={`w-8 h-8 rounded-full border-2 transition-transform ${
                      selectedColor === c.hex ? 'border-amber-400 scale-125 shadow-lg' : 'border-slate-700 hover:scale-110'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* 3. Custom Text / Brand Logo Input */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                3. Brand / Monogram Text
              </label>
              <input
                type="text"
                maxLength={24}
                value={demoBrandName}
                onChange={(e) => setDemoBrandName(e.target.value)}
                placeholder="Type your company name..."
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* 4. Placement & Technique */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Placement
                </label>
                <div className="flex flex-col gap-1">
                  {(['chest', 'center', 'back'] as const).map((pos) => (
                    <button
                      key={pos}
                      onClick={() => setLogoPosition(pos)}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-medium capitalize text-left transition-all ${
                        logoPosition === pos ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-slate-900 text-slate-400'
                      }`}
                    >
                      {pos} Placement
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Technique
                </label>
                <div className="flex flex-col gap-1">
                  {(['embroidery', 'puff', 'screen', 'laser'] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTechnique(t)}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-medium capitalize text-left transition-all ${
                        technique === t ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-slate-900 text-slate-400'
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
              onClick={() => onOpenQuoteModal('studio-customizer', {
                garment: currentGarmentData.name,
                color: selectedColor,
                technique: technique,
                logo: demoBrandName,
              })}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Request Physical Sample of this Specimen</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}


'use client';

import React from 'react';
import { MANUFACTURING_STEPS } from '@/data/mockData';
import { 
  Factory, 
  Layers, 
  Scissors, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  CheckCircle2,
  Clock,
  Award
} from 'lucide-react';

export default function ManufacturingCapabilities() {
  const iconMap: Record<string, React.ReactNode> = {
    Layers: <Layers className="w-6 h-6 text-amber-400" />,
    Scissors: <Scissors className="w-6 h-6 text-amber-400" />,
    Sparkles: <Sparkles className="w-6 h-6 text-amber-400" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-amber-400" />,
    Truck: <Truck className="w-6 h-6 text-amber-400" />,
  };

  return (
    <section id="manufacturing" className="py-24 bg-slate-950 text-white relative border-b border-slate-800 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-800">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold">
              <Factory className="w-3.5 h-3.5" />
              <span>IN-HOUSE MANUFACTURING (AJMAN INDUSTRIAL HUB)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Direct from Factory.{' '}
              <span className="text-amber-400">Zero Middlemen.</span>
            </h2>
            <p className="text-slate-400 text-base">
              Unlike ordinary trading brokers, Times & Klothon-level infrastructure allows us to control the entire manufacturing pipeline: from raw fiber spinning to Tajima embroidery and 4-point inspection.
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center min-w-[120px]">
              <span className="block text-2xl font-black text-amber-400 font-mono">50,000+</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Weekly Units</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center min-w-[120px]">
              <span className="block text-2xl font-black text-emerald-400 font-mono">100%</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">In-House QA</span>
            </div>
          </div>
        </div>

        {/* 5-Step Process Pipeline */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {MANUFACTURING_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 relative flex flex-col justify-between hover:border-amber-400/40 hover:bg-slate-900 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between pb-4">
                  <div className="p-3 rounded-xl bg-slate-800/80 group-hover:bg-amber-400/10 transition-colors">
                    {iconMap[step.icon]}
                  </div>
                  <span className="text-3xl font-black text-slate-800 group-hover:text-amber-400/20 font-mono transition-colors">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors pt-2">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center gap-1 text-[11px] text-amber-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Audited Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Capabilities Matrix */}
        <div className="mt-16 bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
            <h3 className="text-2xl font-bold text-white">Advanced Industrial Embellishment</h3>
            <p className="text-xs text-slate-400">Our heavy-duty machinery lineup engineered for high output and extreme wash cycles.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-amber-400 font-mono text-xs font-bold block">01 / TAJIMA EMBROIDERY</span>
              <p className="text-sm font-bold text-white">15-Color High Density</p>
              <p className="text-xs text-slate-400">German Madeira colorfast threads resistant to industrial bleach and 90°C hospital washing.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-amber-400 font-mono text-xs font-bold block">02 / AUTOMATIC SILKSCREEN</span>
              <p className="text-sm font-bold text-white">M&R Oval 12-Color Stations</p>
              <p className="text-xs text-slate-400">Eco-friendly water-based, plastisol, reflective, high-density 3D puff, and foil stamping.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-amber-400 font-mono text-xs font-bold block">03 / DIGITAL SUBLIMATION</span>
              <p className="text-sm font-bold text-white">Mimaki Japanese Printers</p>
              <p className="text-xs text-slate-400">Full garment photo-realistic prints with zero color fading, ideal for jerseys and activewear.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-amber-400 font-mono text-xs font-bold block">04 / FIBER LASER ETCHING</span>
              <p className="text-sm font-bold text-white">360° Rotary Engraving</p>
              <p className="text-xs text-slate-400">Micron-level laser marking on stainless steel tumblers, power banks, leather, and wood.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


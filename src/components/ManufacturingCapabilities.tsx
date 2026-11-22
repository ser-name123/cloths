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
  CheckCircle2 
} from 'lucide-react';

export default function ManufacturingCapabilities() {
  const iconMap: Record<string, React.ReactNode> = {
    Layers: <Layers className="w-5 h-5 text-amber-700" />,
    Scissors: <Scissors className="w-5 h-5 text-amber-700" />,
    Sparkles: <Sparkles className="w-5 h-5 text-amber-700" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-amber-700" />,
    Truck: <Truck className="w-5 h-5 text-amber-700" />,
  };

  return (
    <section id="manufacturing" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200/80">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-700">
              <Factory className="w-3.5 h-3.5 text-slate-500" />
              <span>AJMAN INDUSTRIAL HUB FACILITY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Direct In-House Manufacturing Capabilities
            </h2>
            <p className="text-slate-600 text-sm">
              We own and operate our production lines — eliminating third-party trading middlemen and ensuring strict quality control from raw yarn to final packaging.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center min-w-[120px]">
              <span className="block text-2xl font-extrabold text-slate-900 font-mono">50,000+</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Weekly Units</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center min-w-[120px]">
              <span className="block text-2xl font-extrabold text-emerald-600 font-mono">100%</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">QA Pass Rate</span>
            </div>
          </div>
        </div>

        {/* 5-Step Pipeline */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {MANUFACTURING_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 relative flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-3">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    {iconMap[step.icon]}
                  </div>
                  <span className="text-2xl font-black text-slate-300 font-mono">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 pt-1">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-200 flex items-center gap-1 text-[11px] text-emerald-700 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Audited Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Fleet Grid */}
        <div className="mt-14 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
          <div className="max-w-xl space-y-1 mb-6">
            <h3 className="text-lg font-bold text-slate-900">Advanced Industrial Machinery Fleet</h3>
            <p className="text-xs text-slate-500">Heavy-duty Japanese & German machinery engineered for extreme UAE wash cycles.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-2xs">
              <span className="text-slate-500 font-mono text-[10px] font-bold block uppercase">01 / Tajima Embroidery</span>
              <p className="text-xs font-bold text-slate-900">15-Needle Multi-Head Units</p>
              <p className="text-[11px] text-slate-500">German Madeira colorfast threads resistant to 90°C industrial laundry.</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-2xs">
              <span className="text-slate-500 font-mono text-[10px] font-bold block uppercase">02 / Automatic Silkscreen</span>
              <p className="text-xs font-bold text-slate-900">M&R Oval 12-Color Stations</p>
              <p className="text-[11px] text-slate-500">Eco water-based inks, high-density puff print, and metallic foils.</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-2xs">
              <span className="text-slate-500 font-mono text-[10px] font-bold block uppercase">03 / Digital Sublimation</span>
              <p className="text-xs font-bold text-slate-900">Mimaki Japanese Printers</p>
              <p className="text-[11px] text-slate-500">Full garment zero-fade printing ideal for activewear, sportswear & PE kits.</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-2xs">
              <span className="text-slate-500 font-mono text-[10px] font-bold block uppercase">04 / Rotary Fiber Laser</span>
              <p className="text-xs font-bold text-slate-900">360° Seamless Etching</p>
              <p className="text-[11px] text-slate-500">Permanent micron-level marking on stainless steel tumblers & electronics.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

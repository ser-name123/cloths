'use client';

import React from 'react';
import { CLIENT_LOGOS } from '@/data/mockData';
import { ShieldCheck, Truck, Clock } from 'lucide-react';

export default function ClientTrustMarquee() {
  // Multiply logos to create an unbroken seamless infinite loop
  const duplicatedLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="pt-10 pb-12 bg-[#fafbfc] border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 mb-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[11px] font-semibold text-amber-900 tracking-wider uppercase mb-2">
          <span>GCC Enterprise Client Portfolio</span>
        </div>
        <p className="text-xs font-medium text-slate-500 max-w-xl mx-auto">
          Trusted by 450+ UAE enterprises, hospitality groups, aviation caterers & energy contractors.
        </p>
      </div>

      {/* Seamless Infinite Auto-Scrolling Marquee Track */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className="animate-marquee gap-4 py-1">
          {/* Track 1 */}
          <div className="flex gap-4 shrink-0">
            {duplicatedLogos.map((logo, idx) => (
              <div
                key={`track1-${idx}`}
                className="px-5 py-2.5 rounded-full bg-white border border-slate-200/90 flex items-center gap-2.5 shadow-2xs chip-hover select-none"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span className="text-xs font-semibold text-slate-900 whitespace-nowrap">{logo.name}</span>
                <span className="text-[10px] text-slate-400 font-mono">({logo.category})</span>
              </div>
            ))}
          </div>

          {/* Track 2 (Duplicate for continuous loop) */}
          <div className="flex gap-4 shrink-0" aria-hidden="true">
            {duplicatedLogos.map((logo, idx) => (
              <div
                key={`track2-${idx}`}
                className="px-5 py-2.5 rounded-full bg-white border border-slate-200/90 flex items-center gap-2.5 shadow-2xs chip-hover select-none"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span className="text-xs font-semibold text-slate-900 whitespace-nowrap">{logo.name}</span>
                <span className="text-[10px] text-slate-400 font-mono">({logo.category})</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Express Shipping Strip */}
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="reveal-on-scroll stagger-1 interactive-card spotlight-card card-tilt p-4.5 rounded-2xl bg-white border border-slate-200/90 flex items-center gap-3.5 shadow-2xs hover:border-amber-400/80 transition-all">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900">Express UAE Delivery (48h)</p>
            <p className="text-[11px] text-slate-500">Doorstep delivery to Dubai, Abu Dhabi, Sharjah & all Emirates.</p>
          </div>
        </div>

        <div className="reveal-on-scroll stagger-2 interactive-card spotlight-card card-tilt p-4.5 rounded-2xl bg-white border border-slate-200/90 flex items-center gap-3.5 shadow-2xs hover:border-amber-400/80 transition-all">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900">GCC Road & Air Freight</p>
            <p className="text-[11px] text-slate-500">Daily cargo dispatch to Riyadh, Jeddah, Doha & Muscat.</p>
          </div>
        </div>

        <div className="reveal-on-scroll stagger-3 interactive-card spotlight-card card-tilt p-4.5 rounded-2xl bg-white border border-slate-200/90 flex items-center gap-3.5 shadow-2xs hover:border-emerald-400/80 transition-all">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900">FTA Tax & Customs Invoicing</p>
            <p className="text-[11px] text-slate-500">UAE FTA Compliant VAT tax invoices & GCC Certificates of Origin.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

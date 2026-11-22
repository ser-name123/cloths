'use client';

import React from 'react';
import { CLIENT_LOGOS } from '@/data/mockData';
import { ShieldCheck, Truck, Clock, Sparkles } from 'lucide-react';

export default function ClientTrustMarquee() {
  return (
    <section className="py-16 bg-slate-900 text-white border-b border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
          Trusted by 450+ GCC Enterprises, Global Brands & Government Entities
        </p>
      </div>

      {/* Infinite scrolling ticker */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
        <div className="flex gap-8 w-max animate-pulse">
          {/* Repeat logos for full marquee width */}
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
            <div
              key={idx}
              className="px-6 py-3 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex items-center gap-3 backdrop-blur-sm"
            >
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              <div>
                <p className="text-sm font-bold text-slate-200 whitespace-nowrap">{logo.name}</p>
                <p className="text-[10px] text-slate-500 font-mono">{logo.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Express Shipping Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3">
          <Truck className="w-7 h-7 text-amber-400 shrink-0" />
          <div>
            <p className="text-xs font-bold text-white">Express UAE Delivery (48h)</p>
            <p className="text-[11px] text-slate-400">Doorstep delivery to Dubai, Abu Dhabi, Sharjah & all Emirates.</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3">
          <Clock className="w-7 h-7 text-sky-400 shrink-0" />
          <div>
            <p className="text-xs font-bold text-white">GCC Road & Air Freight</p>
            <p className="text-[11px] text-slate-400">Daily cross-border cargo dispatch to Riyadh, Jeddah, Doha & Muscat.</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3">
          <ShieldCheck className="w-7 h-7 text-emerald-400 shrink-0" />
          <div>
            <p className="text-xs font-bold text-white">Full Customs & Tax Invoicing</p>
            <p className="text-[11px] text-slate-400">UAE FTA Compliant VAT tax invoices & GCC Certificates of Origin.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


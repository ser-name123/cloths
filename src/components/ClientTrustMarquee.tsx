'use client';

import React from 'react';
import { CLIENT_LOGOS } from '@/data/mockData';
import { ShieldCheck, Truck, Clock } from 'lucide-react';

export default function ClientTrustMarquee() {
  return (
    <section className="py-14 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          Trusted by 450+ GCC Enterprises, Global Brands & Government Contractors
        </p>
      </div>

      {/* Infinite scrolling ticker */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
        <div className="flex gap-4 w-max">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
            <div
              key={idx}
              className="px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200/70 flex items-center gap-2.5 shadow-2xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
              <span className="text-xs font-bold text-slate-800 whitespace-nowrap">{logo.name}</span>
              <span className="text-[10px] text-slate-400 font-mono">({logo.category})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Express Shipping Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
          <Truck className="w-6 h-6 text-amber-600 shrink-0" />
          <div>
            <p className="text-xs font-bold text-slate-900">Express UAE Delivery (48h)</p>
            <p className="text-[11px] text-slate-500">Doorstep delivery to Dubai, Abu Dhabi, Sharjah & all Emirates.</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
          <Clock className="w-6 h-6 text-slate-700 shrink-0" />
          <div>
            <p className="text-xs font-bold text-slate-900">GCC Road & Air Freight</p>
            <p className="text-[11px] text-slate-500">Daily cargo dispatch to Riyadh, Jeddah, Doha & Muscat.</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
          <div>
            <p className="text-xs font-bold text-slate-900">FTA Tax & Customs Invoicing</p>
            <p className="text-[11px] text-slate-500">UAE FTA Compliant VAT tax invoices & GCC Certificates of Origin.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

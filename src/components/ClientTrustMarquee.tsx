'use client';

import React from 'react';
import { CLIENT_LOGOS } from '@/data/mockData';
import { ShieldCheck, Truck, Clock } from 'lucide-react';

export default function ClientTrustMarquee() {
  // Multiply logos to create an unbroken seamless infinite loop
  const duplicatedLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="pt-10 pb-12 bg-[#fafbfc] border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 mb-6 text-center space-y-1.5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[11px] font-semibold text-amber-900 tracking-wider uppercase">
          <span>Our Clientele</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight">
          Trusted by Leading Enterprises Across UAE, Kuwait &amp; Qatar
        </h2>
        <p className="text-xs font-medium text-slate-500 max-w-xl mx-auto">
          35+ years of trusted uniform &amp; workwear partnerships across security, power, hospitality, healthcare &amp; education.
        </p>
      </div>

      {/* Seamless Infinite Auto-Scrolling Marquee Track */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]">
        <div className="animate-marquee gap-5 py-2">
          {/* Track 1 */}
          <div className="flex gap-5 shrink-0">
            {duplicatedLogos.map((logo, idx) => (
              <div
                key={`track1-${idx}`}
                className="w-40 h-20 px-4 py-2.5 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center shadow-2xs hover:border-amber-400/80 hover:shadow-md transition-all select-none shrink-0"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="max-h-12 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Track 2 (Duplicate for continuous loop) */}
          <div className="flex gap-5 shrink-0" aria-hidden="true">
            {duplicatedLogos.map((logo, idx) => (
              <div
                key={`track2-${idx}`}
                className="w-40 h-20 px-4 py-2.5 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center shadow-2xs hover:border-amber-400/80 hover:shadow-md transition-all select-none shrink-0"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="max-h-12 w-auto object-contain"
                  loading="lazy"
                />
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

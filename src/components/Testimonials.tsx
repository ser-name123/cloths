'use client';

import React from 'react';
import { TESTIMONIALS } from '@/data/mockData';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#f8f9fb] border-b border-slate-200/80">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="reveal-on-scroll text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-900 tracking-wider shadow-2xs">
            <Quote className="w-3.5 h-3.5 text-amber-600" />
            <span>TESTIMONIALS</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-slate-900 tracking-tight">
            Our Clients Love Us
          </h2>
          <p className="text-slate-600 text-sm">
            Verified feedback from security, power, facilities, and corporate leaders across UAE, Kuwait, and Qatar.
          </p>
        </div>

        {/* 3-Column Reviews (All 6 EFZEE / Uniform Studio 81 Testimonials) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-amber-400/80 hover:shadow-xl transition-all duration-300 shadow-2xs interactive-card spotlight-card card-tilt reveal-on-scroll stagger-${(idx % 3) + 1}`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80">
                    Rated 5 out of 5
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <span>{item.author}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </h4>
                <p className="text-[11px] text-amber-700 font-medium">{item.role}</p>
                <p className="text-[10px] text-slate-400 font-mono">{item.company}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

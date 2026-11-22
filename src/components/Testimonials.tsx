'use client';

import React from 'react';
import { TESTIMONIALS } from '@/data/mockData';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold">
            <Quote className="w-3.5 h-3.5" />
            <span>VERIFIED PROCUREMENT FEEDBACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Trusted by Procurement Leaders{' '}
            <span className="text-amber-400">Across the UAE.</span>
          </h2>
          <p className="text-slate-400 text-base">
            Real experiences from enterprise operations, brand directors, and facility management teams.
          </p>
        </div>

        {/* 3-Column Reviews */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-950 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-amber-400/40 transition-all duration-300 shadow-xl relative"
            >
              <div className="space-y-4">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Org */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{item.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </h4>
                  <p className="text-[11px] text-amber-400 font-medium">{item.role}</p>
                  <p className="text-[10px] text-slate-500 font-mono mt-0.5">{item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


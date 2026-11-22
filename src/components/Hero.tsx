'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Currency } from '@/types';
import { 
  ArrowUpRight, 
  ArrowRight,
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Flame, 
  Scissors, 
  Gift, 
  Shirt, 
  Clock, 
  ChevronRight,
  Pause,
  Play
} from 'lucide-react';

interface HeroProps {
  currentCurrency: Currency;
  onOpenQuoteModal: (category?: string, details?: any) => void;
}

interface SlideItem {
  id: string;
  number: string;
  category: string;
  verticalTitle: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  tint: string;
  categoryKey: string;
  highlights: string[];
  link: string;
}

export default function Hero({ currentCurrency, onOpenQuoteModal }: HeroProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);

  const slides: SlideItem[] = [
    {
      id: 'apparel',
      number: '01',
      category: 'CUSTOM APPAREL',
      verticalTitle: 'Custom Apparel',
      title: 'Bespoke Knits, Executive Polos & Luxury Streetwear',
      subtitle: 'Direct In-House UAE Mill',
      description: '100% Combed French Terry Cotton (280–380 GSM), brushed fleece hoodies, executive pique polos, and varsity bombers with Tajima embroidery and 48-hour UAE fulfillment.',
      image: '/images/products/heavy-tee.jpg',
      badge: 'No MOQ / Bulk Tiers',
      tint: 'bg-[#121620]/80',
      categoryKey: 'apparel',
      highlights: ['280–380 GSM Knits', 'Bio-Washed & Pre-Shrunk', '3D Puff & Screen Ready'],
      link: '#catalog',
    },
    {
      id: 'workwear',
      number: '02',
      category: 'SAFETY & INDUSTRIAL',
      verticalTitle: 'Safety & Workwear',
      title: 'NFPA 2112 & EN ISO Certified Flame-Resistant Workwear',
      subtitle: 'Engineered for Heavy GCC Industry',
      description: 'Certified 240/300 GSM heavy twill FR coveralls, anti-static high-vis vests, arc-flash protection, and clinical scrubs engineered specifically for ADNOC contractors and heavy industrial sites.',
      image: '/images/sectors/oil-gas.jpg',
      badge: 'ISO 9001 & NFPA 2112',
      tint: 'bg-[#2b170c]/80',
      categoryKey: 'workwear',
      highlights: ['NFPA 2112 Compliant', '3M Scotchlite Reflective', '4-Way Stretch Scrubs'],
      link: '#industries',
    },
    {
      id: 'factory',
      number: '03',
      category: 'IN-HOUSE FACTORY',
      verticalTitle: 'In-House Factory',
      title: 'Ajman 50,000 Sq Ft Precision Manufacturing Plant',
      subtitle: 'Zero Trading Middlemen',
      description: 'Integrated textile cutting and stitching with 15-needle Tajima embroidery machines, computerized Gerber CAD fabric nesting, M&R screen printing, and in-line QA wash-testing labs.',
      image: '/images/products/fr-coverall.jpg',
      badge: '50,000 Sq Ft Facility',
      tint: 'bg-[#10221c]/80',
      categoryKey: 'factory',
      highlights: ['15-Needle Tajima Heads', 'Gerber CAD Fabric Cutting', '48-72h Doorstep Dispatch'],
      link: '#factory',
    },
    {
      id: 'gifting',
      number: '04',
      category: 'CORPORATE GIFTS',
      verticalTitle: 'Corporate Gifts',
      title: 'Curated Executive Swag Boxes & VIP Client Hampers',
      subtitle: 'VIP Unboxing Experience',
      description: 'Smart LED temperature tumblers, MagSafe power banks, luxury rigid magnetic boxes, and zero-plastic sustainable ESG kits with bespoke monogramming and express GCC freight dispatch.',
      image: '/images/products/vip-swag-box.jpg',
      badge: 'VIP Onboarding Sets',
      tint: 'bg-[#1f1622]/80',
      categoryKey: 'gifting',
      highlights: ['Rigid Magnetic Boxes', 'Smart LED Tumblers', 'Precision Laser Etching'],
      link: '#gifting',
    },
  ];

  // Auto-advance slider every 5.5s, pause cleanly when hovered
  useEffect(() => {
    if (isPaused) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      return;
    }

    autoPlayRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, slides.length]);

  // Clean hover-intent activation (prevents accordion flicker/oscillation)
  const handleSlideEnter = (idx: number) => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    if (activeSlide === idx) return;

    hoverTimerRef.current = setTimeout(() => {
      setActiveSlide(idx);
    }, 75);
  };

  const handleSlideLeave = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  };

  const handleSlideClick = (idx: number) => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    setActiveSlide(idx);
  };

  // Cleanup hover timer on unmount
  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    };
  }, []);

  const current = slides[activeSlide];

  return (
    <section className="relative bg-[#0d0f14] text-white border-b border-slate-800/90 pt-4 pb-10 lg:pt-6 lg:pb-12 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none animate-float-slow" style={{ animationDelay: '-6s' }} />

      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ============================================================== */}
        {/* BAHARNANI-STYLE EXPANDING HORIZONTAL ACCORDION SLIDER           */}
        {/* ============================================================== */}
        <div 
          className="relative w-full h-[480px] sm:h-[560px] lg:h-[620px] flex gap-1.5 sm:gap-3.5 lg:gap-4 select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            handleSlideLeave();
          }}
        >
          {slides.map((slide, idx) => {
            const isActive = activeSlide === idx;

            return (
              <div
                key={slide.id}
                onMouseEnter={() => handleSlideEnter(idx)}
                onMouseLeave={handleSlideLeave}
                onClick={() => handleSlideClick(idx)}
                className={`relative rounded-2xl sm:rounded-3xl overflow-hidden transition-[flex,width,max-width] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  isActive
                    ? 'flex-[4] sm:flex-[4] lg:flex-[5] shadow-2xl ring-1 ring-white/10'
                    : 'w-10 sm:w-16 md:w-20 lg:w-28 flex-shrink-0 cursor-pointer hover:brightness-110 border border-white/5 shadow-md'
                }`}
              >
                {/* Background Image */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 pointer-events-none ${
                    isActive 
                      ? 'scale-105 filter brightness-90' 
                      : 'filter brightness-[0.4] grayscale-[0.2]'
                  }`}
                  loading="eager"
                />

                {/* Inactive State: Semi-transparent Colored Tint + Vertical Title + Outline Number */}
                <div 
                  className={`absolute inset-0 ${slide.tint} backdrop-blur-[1px] flex flex-col justify-between items-center py-4 sm:py-6 px-0.5 sm:px-1 transition-opacity duration-300 pointer-events-none ${
                    isActive ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  {/* Top Accent Dot */}
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/40" />

                  {/* Centered Rotated Vertical Title */}
                  <div className="flex-1 flex items-center justify-center my-auto">
                    <span className="writing-mode-vertical text-white/95 font-semibold text-[10px] sm:text-xs md:text-sm lg:text-[15px] tracking-wider sm:tracking-[0.2em] uppercase whitespace-nowrap drop-shadow-sm">
                      {slide.verticalTitle}
                    </span>
                  </div>

                  {/* Bottom Hollow Outline Number (Baharnani Stencil Style) */}
                  <div className="select-none pointer-events-none">
                    <span className="stroke-number text-lg sm:text-2xl md:text-3xl lg:text-4xl tracking-tighter">
                      {slide.number}
                    </span>
                  </div>
                </div>

                {/* Active State: Rich Content, Gradient, Tags, Title, Description, Round Arrow Button (Smooth Continuous Cross-fade) */}
                <div 
                  className={`absolute inset-0 w-full h-full bg-gradient-to-t from-black/95 via-black/55 to-black/15 p-4 sm:p-6 lg:p-12 flex flex-col justify-between transition-all duration-400 ease-out ${
                    isActive 
                      ? 'opacity-100 pointer-events-auto scale-100 z-10' 
                      : 'opacity-0 pointer-events-none scale-[0.98] z-0'
                  }`}
                >
                  {/* Top Row: Category Badge & Slide Progress Controls (Overlaid on Image) */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="inline-flex items-center gap-1 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-semibold text-white shadow-xs">
                      <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
                      <span className="truncate max-w-[85px] sm:max-w-none">{slide.badge}</span>
                    </div>

                    {/* Integrated Slide Progress Controls Overlaid directly on Image */}
                    <div className="flex items-center gap-1.5 sm:gap-2.5 bg-black/40 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-white/15 shadow-sm">
                      <div className="flex items-center gap-1 sm:gap-1.5">
                        {slides.map((s, sIdx) => (
                          <button
                            key={s.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSlideClick(sIdx);
                            }}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              activeSlide === sIdx 
                                ? 'w-4 sm:w-6 bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]' 
                                : 'w-1.5 sm:w-2 bg-white/40 hover:bg-white/80'
                            }`}
                            aria-label={`Go to slide ${s.number}`}
                          />
                        ))}
                      </div>

                      <span className="text-[9px] sm:text-[10px] font-mono text-white/80 font-bold ml-0.5">
                        {slide.number} / 04
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsPaused(!isPaused);
                        }}
                        title={isPaused ? 'Resume auto-play' : 'Pause auto-play'}
                        className="p-0.5 sm:p-1 rounded-full text-white/80 hover:text-white transition-colors"
                      >
                        {isPaused ? <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> : <Pause className="w-2.5 h-2.5 sm:w-3 sm:h-3" />}
                      </button>
                    </div>
                  </div>

                  {/* Bottom Content Area */}
                  <div className="space-y-2 sm:space-y-3.5 max-w-2xl">
                    
                    {/* Category Tag with Amber Accent Line */}
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-amber-400">
                      <span className="w-5 sm:w-7 h-[2px] bg-amber-400 shrink-0" />
                      <span>{slide.category}</span>
                    </div>

                    {/* Main Title (Consistent with Global Typography) */}
                    <h2 className="text-base sm:text-2xl lg:text-4xl font-semibold text-white tracking-tight leading-snug sm:leading-tight line-clamp-2 sm:line-clamp-none">
                      {slide.title}
                    </h2>

                    {/* Descriptive Summary */}
                    <p className="text-[11px] sm:text-xs lg:text-sm text-slate-300 leading-relaxed font-normal line-clamp-2 sm:line-clamp-none">
                      {slide.description}
                    </p>

                    {/* Feature Highlights Pills */}
                    <div className="hidden sm:flex items-center gap-2 pt-1 flex-wrap">
                      {slide.highlights.map((item, hIdx) => (
                        <div 
                          key={hIdx}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-medium text-slate-200 chip-hover"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Triggers (Baharnani Circle Arrow Button + Quote Trigger) */}
                    <div className="pt-1.5 sm:pt-3 flex items-center gap-2 sm:gap-4">
                      
                      {/* Circular Arrow Button (Exact Baharnani Feature) */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenQuoteModal(slide.categoryKey, { title: slide.title });
                        }}
                        aria-label={`Inquire about ${slide.title}`}
                        className="btn-luxury w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border border-white/40 hover:border-amber-400 bg-white/5 hover:bg-white text-white hover:text-slate-950 flex items-center justify-center transition-all duration-300 shadow-xl group/btn shrink-0 cursor-pointer"
                      >
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>

                      {/* Primary RFQ CTA Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenQuoteModal(slide.categoryKey, { title: slide.title });
                        }}
                        className="btn-shimmer btn-luxury flex-1 sm:flex-initial px-3.5 sm:px-5 lg:px-6 py-2.5 sm:py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 text-[11px] sm:text-xs lg:text-sm font-bold transition-all shadow-lg flex items-center justify-center gap-1.5 sm:gap-2 group/cta cursor-pointer"
                      >
                        <span>Request Quote</span>
                        <ArrowRight className="w-3.5 h-3.5 hover-arrow group-hover/cta:translate-x-1 transition-transform" />
                      </button>

                      {/* Secondary Anchor Link */}
                      <a
                        href={slide.link}
                        onClick={(e) => e.stopPropagation()}
                        className="hidden md:inline-flex items-center gap-1 text-xs text-slate-300 hover:text-white transition-colors py-2 px-3 rounded-full hover:bg-white/10 link-glide"
                      >
                        <span>Explore Specs</span>
                        <ChevronRight className="w-3.5 h-3.5 hover-arrow" />
                      </a>

                    </div>

                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* ============================================================== */}
        {/* BOTTOM STATS MATRIX (Clean, High-Contrast Trust Anchors)        */}
        {/* ============================================================== */}
        <div className="mt-8 pt-7 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-1">
            <p className="text-xl sm:text-2xl font-bold text-white font-mono">10M+</p>
            <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Garments Produced in UAE</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-1">
            <p className="text-xl sm:text-2xl font-bold text-white font-mono">450+</p>
            <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">GCC Enterprise Clients</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-1">
            <p className="text-xl sm:text-2xl font-bold text-amber-400 font-mono">48-72h</p>
            <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Express Delivery Speed</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-1">
            <p className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono">ISO 9001</p>
            <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Certified Quality Standard</p>
          </div>
        </div>

      </div>
    </section>
  );
}

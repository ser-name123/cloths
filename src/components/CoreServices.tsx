'use client';

import React, { useState } from 'react';
import { 
  Scissors, 
  Sparkles, 
  Palette, 
  ShieldCheck, 
  Gift, 
  Tag, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Layers, 
  Factory, 
  Zap, 
  Check, 
  ChevronRight,
  Flame,
  Award,
  ArrowUpRight
} from 'lucide-react';

interface CoreServicesProps {
  onOpenQuoteModal: (category?: string, details?: any) => void;
}

interface ServiceItem {
  id: string;
  categoryKey: string;
  number: string;
  tabCategory: 'all' | 'apparel' | 'branding' | 'safety' | 'gifting';
  badge: string;
  title: string;
  tagline: string;
  description: string;
  turnaround: string;
  moq: string;
  image: string;
  icon: React.ElementType;
  specs: string[];
  idealFor: string;
  highlightPills: string[];
}

export default function CoreServices({ onOpenQuoteModal }: CoreServicesProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'apparel' | 'branding' | 'safety' | 'gifting'>('all');

  const services: ServiceItem[] = [
    {
      id: 'cut-and-sew',
      categoryKey: 'apparel',
      number: '01',
      tabCategory: 'apparel',
      badge: 'Corporate & Custom Wear',
      title: 'Custom Corporate Wear & Personalized Polos',
      tagline: 'Tailored Fit • Brand-Aligned Fabrics • 30,000+ Garments/Month',
      description: 'EFZEE Fashion designs and manufactures custom corporate uniforms, tailored blazers, oxford shirts, and personalized polos that reflect your brand identity while supporting daily operational comfort.',
      turnaround: 'Fast Turnaround • Bulk Tiers',
      moq: 'Flexible Corporate MOQ',
      image: '/images/efzee/hero-1.jpg',
      icon: Scissors,
      specs: [
        'Custom design, fabric selection & consistent sizing',
        'Personalized polos, blazers, and executive shirts',
        '3D print, rubberized print, embroidery & DTF options',
        'Consistent re-order matching across departments'
      ],
      idealFor: 'Corporate offices, retail teams, security & facility management, executive staff',
      highlightPills: ['35+ Years Experience', 'Corporate Wear', 'Personalized Polos', 'Consistent Fit'],
    },
    {
      id: 'tajima-embroidery',
      categoryKey: 'factory',
      number: '02',
      tabCategory: 'branding',
      badge: '3D, Rubberized & Embroidery',
      title: 'Precision Embroidery, 3D & Rubberized Print',
      tagline: 'High-Density 3D Print • Rubberized Print • Colorfast Embroidery',
      description: 'Extensive personalization options using the latest branding techniques including 3D print, rubberized print, and high-precision embroidery built to withstand commercial laundering without fading.',
      turnaround: '24-48h Sample Proof',
      moq: 'Flexible / Bulk Tiers',
      image: '/images/efzee/feature-2.png',
      icon: Sparkles,
      specs: [
        'Multi-head computerized embroidery for crests & logos',
        'High-density 3D & raised rubberized branding',
        'Colorfast threads & durable wash-resistant finishes',
        'Hands-on fabric & branding review at Ajman showroom'
      ],
      idealFor: 'Corporate blazer crests, hospitality aprons, security patches, winter jackets',
      highlightPills: ['Embroidery', '3D Print', 'Rubberized Print', 'Wash Resistant'],
    },
    {
      id: 'printing-decoration',
      categoryKey: 'factory',
      number: '03',
      tabCategory: 'branding',
      badge: 'Sublimation, DTF & Screen',
      title: 'Sublimation, DTF & Screen Printing',
      tagline: 'Full-Color Sublimation • High-Res DTF • Screen Printing',
      description: 'Vibrant t-shirt prints, full-garment sublimation sportswear, and long-lasting screen printing engineered for bright, crisp branding across corporate events, delivery fleets, and sports teams.',
      turnaround: 'Fast Turnaround • Express Run',
      moq: 'Low MOQ / Bulk',
      image: '/images/efzee/sublimation-1.png',
      icon: Palette,
      specs: [
        'All-over sublimation printing for sportswear & PE kits',
        'High-definition Direct-to-Film (DTF) transfers',
        'Durable screen printing for promotional & event tees',
        'Eco-friendly inks & recycled fabric options available'
      ],
      idealFor: 'Sportswear, delivery & F&B uniforms, school PE kits, promotional merchandise',
      highlightPills: ['Sublimation', 'DTF Print', 'Screen Printing', 'Eco-Friendly'],
    },
    {
      id: 'certified-workwear',
      categoryKey: 'workwear',
      number: '04',
      tabCategory: 'safety',
      badge: 'Industrial, Health & Hospitality',
      title: 'Industrial Workwear, Hospitality & Healthcare',
      tagline: 'Logistics • Delivery & F&B • Healthcare • Industrial Safety',
      description: 'Functional, durable uniforms built for demanding work environments — including industrial coveralls, hi-vis workwear, antimicrobial healthcare scrubs, hospitality chef wear, and school uniforms.',
      turnaround: '30,000 Garments/Month',
      moq: 'Enterprise & Tender Ready',
      image: '/images/efzee/industrial-1.png',
      icon: ShieldCheck,
      specs: [
        'Industrial workwear & high-visibility safety gear',
        'Healthcare scrubs, lab coats & clinical uniforms',
        'Hospitality, delivery & F&B front/back-of-house wear',
        'School uniforms & recycled eco-friendly fabric lines'
      ],
      idealFor: 'Logistics & delivery fleets, hospitals, hotels & restaurants, schools, industrial plants',
      highlightPills: ['Industrial', 'Healthcare', 'Hospitality', 'School Uniforms', 'Eco Options'],
    },
    {
      id: 'corporate-gifting',
      categoryKey: 'gifting',
      number: '05',
      tabCategory: 'gifting',
      badge: 'New Collection & Gifting',
      title: 'Premium Winter Jackets & Corporate Gifts',
      tagline: 'Fleece, Bomber & Waterproof Jackets • Promotional Gifts',
      description: 'Exclusive winter jackets designed for dynamic professionals in Dubai (fleece, bomber, and waterproof styles) alongside custom promotional gifts and curated corporate merchandise.',
      turnaround: 'Express UAE & GCC Dispatch',
      moq: 'Custom Bulk Tiers',
      image: '/images/efzee/feature-1.png',
      icon: Gift,
      specs: [
        'Fleece, bomber & waterproof winter jackets with logo',
        'Custom promotional gifts & corporate welcome kits',
        'Weather-resistant, breathable professional materials',
        'Ideal for corporate settings, outdoor events & commutes'
      ],
      idealFor: 'Corporate winter outerwear, outdoor event teams, client gifting, promotional campaigns',
      highlightPills: ['Winter Jackets', 'Fleece & Bomber', 'Corporate Gifts', 'Logo Branded'],
    },
    {
      id: 'private-labeling',
      categoryKey: 'apparel',
      number: '06',
      tabCategory: 'apparel',
      badge: 'Showroom & Consultation',
      title: 'Hands-On Showroom Development & Sizing',
      tagline: 'Showroom #1 Fashion Mart Ajman • HO CBD Building Dubai',
      description: 'Visit our centrally located showroom for hands-on uniform development — meet our consultants, review fabric swatches, finalize fits, and align designs with your brand and operational requirements.',
      turnaround: 'Direct Consultation',
      moq: 'End-to-End Partnership',
      image: '/images/efzee/showroom-team.jpg',
      icon: Tag,
      specs: [
        'Dedicated uniform consultants & fabric swatch review',
        'Custom fit trials & department-wise size grading',
        'Consistent multi-year re-order stock management',
        'Serving UAE, Kuwait, Qatar & GCC enterprises'
      ],
      idealFor: 'Multi-branch corporates, schools, hospitality groups, government & security contractors',
      highlightPills: ['Ajman Showroom #1', 'Dubai HO', 'Fit Trials', 'GCC Delivery'],
    },
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.tabCategory === activeTab);

  return (
    <section id="services" className="relative bg-[#f8f9fb] py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden">
      
      {/* Subtle Background Accent Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ============================================================== */}
        {/* SECTION HEADER & VALUE PROPOSITION                             */}
        {/* ============================================================== */}
        <div className="max-w-4xl mx-auto text-center mb-10 lg:mb-14 reveal-on-scroll">
          
          {/* Micro-badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-900 text-xs font-bold tracking-wide uppercase mb-4 shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-amber-600" />
            <span>Essay Group (Est. 1989) • Uniform Studio 81</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            35+ Years of Uniform Craft. <br className="hidden sm:inline" />
            <span className="animate-text-shine">
              Every Thread Counts.
            </span>
          </h2>

          {/* Subheading */}
          <div className="mt-5 space-y-3 text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
            <p>
              Uniform Studio 81 is a leading uniform and workwear manufacturer serving corporate and industrial clients across the GCC. We specialize in uniform development, manufacturing, and large-scale supply for organizations operating across diverse sectors.
            </p>
            <p>
              As part of the <strong className="text-slate-900 font-semibold">Essay Group, established in 1989</strong>, we bring decades of group expertise combined with a focused, execution-driven approach to uniform production — supporting major corporations across the GCC with high-quality, reliable workwear solutions tailored to industry needs.
            </p>
          </div>

          {/* Service Category Filter Pills (Touch-scrollable on mobile) */}
          <div className="mt-6 sm:mt-8 flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pb-2 px-1">
            {[
              { key: 'all', label: 'All Services (6)' },
              { key: 'apparel', label: 'Bespoke Cut & Sew' },
              { key: 'branding', label: 'Embroidery & Print' },
              { key: 'safety', label: 'Safety & Workwear' },
              { key: 'gifting', label: 'VIP Swag & Gifting' },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 chip-hover ${
                  activeTab === tab.key
                    ? 'bg-slate-950 text-white shadow-md border border-slate-900'
                    : 'bg-white text-slate-600 hover:text-slate-950 hover:bg-slate-100 border border-slate-200/80 shadow-2xs'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>

        {/* ============================================================== */}
        {/* 6 VISUAL CORE SERVICES GRID (With Rich Photography & Badges)   */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service, idx) => {
            const Icon = service.icon;
            
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl border border-slate-200/90 hover:border-amber-400/90 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden interactive-card spotlight-card card-tilt reveal-on-scroll"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                {/* 1. Rich Photographic Visual Stage */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-900 img-zoom-stage">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] filter brightness-95"
                    loading="lazy"
                  />

                  {/* Dark Contrast Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-black/20 pointer-events-none" />

                  {/* Top Bar on Image: Number & Floating Service Icon */}
                  <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-10">
                    <span className="font-mono text-xs font-black px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-amber-400 shadow-sm">
                      {service.number}
                    </span>

                    <div className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Strip on Image: Badge & SLA Pill */}
                  <div className="absolute bottom-3 inset-x-3.5 flex items-center justify-between gap-2 z-10">
                    <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 text-[10.5px] font-bold text-white tracking-wide uppercase flex items-center gap-1.5 shadow-sm">
                      <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>{service.badge}</span>
                    </span>

                    <span className="px-2.5 py-1 rounded-lg bg-amber-500/90 text-slate-950 text-[10px] font-bold font-mono tracking-tight shadow-sm whitespace-nowrap">
                      {service.moq}
                    </span>
                  </div>
                </div>

                {/* 2. Structured Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3.5">
                  <div>
                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-snug">
                      {service.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-[11.5px] font-semibold text-amber-700/90 mt-1 mb-2.5">
                      {service.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed font-normal mb-3.5 line-clamp-2">
                      {service.description}
                    </p>

                    {/* Key Technical Spec Chips (Interactive Modern Badges) */}
                    <div className="flex flex-wrap gap-1.5 pt-1 mb-3.5">
                      {service.highlightPills.map((pill, pIdx) => (
                        <span 
                          key={pIdx}
                          className="px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200/70 text-[10.5px] font-medium text-slate-700 chip-hover"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>

                    {/* Ideal For Snippet */}
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60 text-[11px] text-slate-600 leading-normal hover:border-amber-400/50 hover:bg-amber-50/20 transition-all duration-200">
                      <span className="font-semibold text-slate-800">Ideal for: </span>
                      <span>{service.idealFor}</span>
                    </div>
                  </div>

                  {/* 3. Bottom Zone: SLA & Action Button */}
                  <div className="border-t border-slate-100 pt-3.5 mt-auto space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span className="flex items-center gap-1 font-medium">
                        <Clock className="w-3 h-3 text-amber-600" />
                        <span>{service.turnaround}</span>
                      </span>
                      <span className="text-emerald-700 font-semibold flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        <span>Direct Mill</span>
                      </span>
                    </div>

                    <button
                      onClick={() => onOpenQuoteModal(service.categoryKey, { service: service.title })}
                      className="btn-shimmer btn-luxury w-full py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-amber-500 text-white hover:text-slate-950 text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 group/btn shadow-xs cursor-pointer"
                    >
                      <span>Request Service Quote</span>
                      <ArrowRight className="w-3.5 h-3.5 hover-arrow group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* ============================================================== */}
        {/* BOTTOM FACTORY TRUST & RELIABILITY STRIP                      */}
        {/* ============================================================== */}
        <div className="mt-12 sm:mt-16 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs reveal-on-scroll">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            
            <div className="flex items-center gap-3.5 sm:px-4 pt-3 sm:pt-0">
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0">
                <Factory className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">EFZEE Fashion Ajman</h4>
                <p className="text-[11px] text-slate-500 leading-tight">30,000+ garments monthly capacity</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 sm:px-4 pt-3 sm:pt-0">
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">100% Quality Pass</h4>
                <p className="text-[11px] text-slate-500 leading-tight">4-point in-line QA wash-tested</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 sm:px-4 pt-3 sm:pt-0">
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">48-72h GCC Shipping</h4>
                <p className="text-[11px] text-slate-500 leading-tight">Express doorstep UAE, KSA, Qatar</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 sm:px-4 pt-3 sm:pt-0">
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Free Physical Sample</h4>
                <p className="text-[11px] text-slate-500 leading-tight">On confirmed orders over 200 units</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

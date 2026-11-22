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
      badge: 'Bespoke Production',
      title: 'Bespoke Cut & Sew Apparel Manufacturing',
      tagline: 'Custom Patterns • 180–450 GSM French Terry • Drop Shoulder Fits',
      description: 'Full custom garment manufacturing from raw fabric yarn to finished apparel. We draft bespoke patterns, dye-match exact Pantone formulas, and produce luxury streetwear, heavyweight hoodies, oversized tees, and executive pique polos.',
      turnaround: '48h Sampling • 7-10d Bulk',
      moq: 'Min 50 pcs per style',
      image: '/images/products/fleece-hoodie.jpg',
      icon: Scissors,
      specs: [
        'Custom GSM (180 to 450 GSM heavyweight)',
        '100% Combed & Supima Cotton / French Terry',
        'Pantone TPX/TCX exact dye formula matching',
        'Bio-washed, silicon-softened & pre-shrunk'
      ],
      idealFor: 'Luxury D2C streetwear brands, tech company merch, gym & fitness lines, executive polos',
      highlightPills: ['180–450 GSM', 'Pantone Dye Match', 'Bio-Washed', 'Pre-Shrunk', 'Drop Shoulder'],
    },
    {
      id: 'tajima-embroidery',
      categoryKey: 'factory',
      number: '02',
      tabCategory: 'branding',
      badge: 'Precision Tajima Tech',
      title: '15-Needle Industrial Tajima Embroidery',
      tagline: '3D High-Puff • Madeira Colorfast Threads • 1,000 RPM Heads',
      description: 'Japanese 15-needle computerized Tajima multi-head machines deliver ultra-dense micro-monograms, 3D puff embroidery, and heavy chenille varsity patches with zero fraying or color loss over 100+ commercial wash cycles.',
      turnaround: '24-48h Sample Swatch',
      moq: 'Flexible / Bulk Tiers',
      image: '/images/products/corporate-blazer.jpg',
      icon: Sparkles,
      specs: [
        '15-Needle automated Japanese Tajima heads',
        'Madeira Polyneon colorfast non-fade threads',
        '3D high-density foam puff embroidery',
        'Metallic gold/silver & reflective neon threads'
      ],
      idealFor: 'Executive blazer crests, snapback & dad caps, hoodie chest logos, varsity jackets',
      highlightPills: ['15-Needle Heads', '3D Puff Foam', 'Madeira Thread', 'Micro-Monogram', '100+ Washes'],
    },
    {
      id: 'printing-decoration',
      categoryKey: 'factory',
      number: '03',
      tabCategory: 'branding',
      badge: 'High-Definition Inks',
      title: 'Screen, DTF, Puff & Rotary Printing',
      tagline: '12-Color M&R Carousel • High-Res DTF • Zero-Feel Discharge',
      description: 'Our printing facility operates automated M&R 12-color carousels alongside high-resolution Direct-to-Film (DTF) transfer printers. We deliver ultra-fine gradient artwork, soft-hand waterbased discharge inks, and high-density 3D silicone puff prints.',
      turnaround: 'Same-Day Proof • Express Run',
      moq: 'Low MOQ / Flexible',
      image: '/images/products/heavy-tee.jpg',
      icon: Palette,
      specs: [
        'M&R automated 12-color precision carousels',
        'High-density Direct-to-Film (DTF) transfers',
        'Water-based discharge ink for zero hand-feel',
        '50+ industrial washes crack-resistant guarantee'
      ],
      idealFor: 'Complex multi-color graphic tees, event uniforms, corporate promotional merchandise',
      highlightPills: ['12-Color Carousel', 'High-Res DTF', 'Zero-Feel Discharge', '3D Silicone Puff'],
    },
    {
      id: 'certified-workwear',
      categoryKey: 'workwear',
      number: '04',
      tabCategory: 'safety',
      badge: 'ISO & NFPA Certified',
      title: 'Certified Safety Workwear & Technical Uniforms',
      tagline: 'NFPA 2112 • EN ISO 11612 • 3M Scotchlite Reflective',
      description: 'Direct manufacturing of certified flame-retardant (FR) coveralls, anti-static workwear, heavy twill boiler suits, high-visibility Class 2/3 garments, and 4-way stretch antimicrobial clinical scrubs for healthcare facilities.',
      turnaround: 'Tender-Ready • 48-72h UAE',
      moq: '100 pcs / Government Tenders',
      image: '/images/products/fr-coverall.jpg',
      icon: ShieldCheck,
      specs: [
        'NFPA 2112, EN ISO 11612 & ANSI Class 2/3 certified',
        'Heavy-duty 240–350 GSM twill with Kevlar seams',
        'Genuine 3M Scotchlite 8910 reflective tape',
        'Lab-tested arc-flash & chemical splash resistance'
      ],
      idealFor: 'Oil & gas contractors (ADNOC compliant), MEP construction, clinical hospitals, industrial sites',
      highlightPills: ['NFPA 2112 FR', '3M Scotchlite', 'Arc-Flash 40 Cal', 'Kevlar Seams', 'ADNOC Approved'],
    },
    {
      id: 'corporate-gifting',
      categoryKey: 'gifting',
      number: '05',
      tabCategory: 'gifting',
      badge: 'VIP Executive Swag',
      title: 'Curated Corporate Gifting & Luxury Swag Hampers',
      tagline: 'Rigid Magnetic Boxes • Velvet Laser EVA • Rotary Laser Etching',
      description: 'Elevate your brand presence with turnkey VIP corporate gifting sets. Custom rigid gift boxes with magnetic closures, precision laser-cut high-density EVA velvet inserts, smart LED temperature bottles, and eco-certified bamboo desk sets.',
      turnaround: 'Express 48-72h Assembly',
      moq: 'From 25 sets',
      image: '/images/products/vip-swag-box.jpg',
      icon: Gift,
      specs: [
        'Bespoke rigid magnetic-closure luxury boxes',
        'Precision laser-cut high-density velvet EVA foam',
        '360° rotary laser etching & UV color printing',
        'Custom corporate greeting cards & wax seals'
      ],
      idealFor: 'C-Suite onboarding boxes, VIP client hampers, exhibition giveaways, UAE National Day & Ramadan gifts',
      highlightPills: ['Rigid Magnetic Box', 'Velvet EVA Foam', 'Smart LED Tumbler', 'Rotary Laser', 'GCC Freight'],
    },
    {
      id: 'private-labeling',
      categoryKey: 'apparel',
      number: '06',
      tabCategory: 'apparel',
      badge: 'Retail Ready',
      title: 'Private Labeling & Turnkey Retail Packaging',
      tagline: 'Woven Damask Neck Labels • FSC Hangtags • SKU Barcoding',
      description: 'Complete white-label rebranding that transforms custom manufactured garments into retail-ready merchandise. We produce high-definition damask woven neck labels, soft satin care tags, matte FSC hangtags with metal eyelets, and individual barcode polybagging.',
      turnaround: 'Integrated with Bulk Run',
      moq: 'Included with Cut & Sew',
      image: '/images/products/executive-polo.jpg',
      icon: Tag,
      specs: [
        'High-density woven damask & satin care labels',
        'Tear-away neck tags & heat-transfer neck prints',
        'Heavyweight 400 GSM FSC hangtags with wax cords',
        'Individual eco polybags with Amazon/retail SKU barcodes'
      ],
      idealFor: 'E-commerce fashion brands, retail clothing boutiques, corporate employee webstores',
      highlightPills: ['Damask Woven', 'Satin Care Labels', 'FSC Hangtags', 'SKU Barcoding', 'Retail Bags'],
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
        <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-14 reveal-on-scroll">
          
          {/* Micro-badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-900 text-xs font-bold tracking-wide uppercase mb-4 shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-amber-600" />
            <span>End-to-End In-House Capabilities</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Everything Under One Roof. <br className="hidden sm:inline" />
            <span className="animate-text-shine">
              Zero Trading Middlemen.
            </span>
          </h2>

          {/* Subheading */}
          <p className="mt-4 text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
            From raw yarn spinning and bespoke pattern drafting in our Ajman plant to 15-needle Tajima embroidery, high-definition screen printing, and VIP gift packaging — explore our full manufacturing service spectrum.
          </p>

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
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Ajman In-House Mill</h4>
                <p className="text-[11px] text-slate-500 leading-tight">50,000 sq ft zero-middlemen facility</p>
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

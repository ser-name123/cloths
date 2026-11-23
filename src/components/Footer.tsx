'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { 
  Building2, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  MessageSquare, 
  ShieldCheck, 
  Download, 
  Award, 
  ArrowUp, 
  CheckCircle2, 
  ChevronRight, 
  FileText, 
  Send, 
  Sparkles, 
  Globe, 
  Truck, 
  Flame, 
  Scissors,
  Check,
  CreditCard,
  Layers,
  ArrowRight
} from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal?: (category?: string, details?: any) => void;
}

export default function Footer({ onOpenQuoteModal }: FooterProps) {
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setEmailSubscribed(true);
      setTimeout(() => {
        setEmailInput('');
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 text-slate-900 border-t border-slate-200 relative overflow-hidden">
      
      {/* Ambient background glow accents */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-slate-200/40 rounded-full blur-3xl pointer-events-none" />

      {/* ============================================================== */}
      {/* 1. VIP SHOWROOM, TOUR & NEWSLETTER ACTION BANNER               */}
      {/* ============================================================== */}
      <div className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50 py-10 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-[1560px] mx-auto">
          <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
            
            {/* Top Amber Shimmer Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Physical Facility Invitations (7 cols) */}
              <div className="lg:col-span-7 space-y-3.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-800 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span>EFZEE FASHION TAILORING LLC • UNIFORM STUDIO 81</span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                  Hands-On Uniform Development. <br className="hidden sm:inline" />
                  Visit Our Ajman Showroom &amp; Dubai Office.
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                  Our showroom at Fashion Mart, Industrial Area 1, Ajman is designed for hands-on uniform development. Meet our consultants, review fabric options, finalize fits, and align designs with your brand and operational requirements — all in one place.
                </p>

                {/* 3 Facility Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
                  <div className="flex items-center gap-2 text-slate-700 bg-slate-50 px-3.5 py-2.5 rounded-xl border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Free Physical Swatch Ring</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 bg-slate-50 px-3.5 py-2.5 rounded-xl border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>2h Fast Digital Proofing</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 bg-slate-50 px-3.5 py-2.5 rounded-xl border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>48h Doorstep Courier</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Instant WhatsApp Booking & Spec Lookbook (5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
                <a
                  href="https://wa.me/971522954810?text=Hi%20Uniform%20Studio%2081%20(EFZEE%20Fashion),%20I%20would%20like%20to%20book%20a%20showroom%20visit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shimmer btn-luxury px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-md shadow-emerald-500/20 transition-all cursor-pointer group/wa"
                >
                  <MessageSquare className="w-4 h-4 fill-slate-950 hover-arrow" />
                  <span>Schedule Showroom Visit via WhatsApp</span>
                </a>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2.5">
                  <button
                    onClick={() => onOpenQuoteModal ? onOpenQuoteModal('swatch-kit') : null}
                    className="btn-luxury flex-1 px-4 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 icon-hover-bounce" />
                    <span>Request Swatch Kit</span>
                  </button>

                  <a
                    href="#catalog"
                    className="btn-luxury flex-1 px-4 py-2.5 rounded-full border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-slate-500 hover-arrow" />
                    <span>2026 Lookbook (PDF)</span>
                  </a>
                </div>

                {/* Newsletter Micro-Form */}
                <form onSubmit={handleSubscribe} className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  {emailSubscribed ? (
                    <div className="w-full flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium">
                      <Check className="w-3.5 h-3.5" />
                      <span>Thank you! Your 2026 Textile Catalog has been dispatched.</span>
                    </div>
                  ) : (
                    <>
                      <input
                        type="email"
                        required
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        placeholder="Corporate email for wholesale price sheets..."
                        className="flex-1 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                      <button
                        type="submit"
                        className="btn-luxury px-4 py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shrink-0 shadow cursor-pointer flex items-center gap-1 group/btn"
                      >
                        <span>Subscribe</span>
                        <Send className="w-3 h-3 hover-arrow group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </>
                  )}
                </form>

              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. COMPREHENSIVE 12-COLUMN DIRECTORY SITEMAP                   */}
      {/* ============================================================== */}
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-8">
          
          {/* Brand Info & Regional Operations (Span 4 on lg) */}
          <div className="sm:col-span-2 md:col-span-4 lg:col-span-4 space-y-4 pr-0 lg:pr-6">
            <div className="pb-1">
              <Logo variant="light" size="md" />
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              EFZEE Fashion Tailoring LLC (Uniform Studio 81) — 35+ years of expertise supplying custom corporate, hospitality, healthcare, school, and industrial uniforms with 30,000+ garments/month production capacity across UAE &amp; GCC.
            </p>

            {/* Quick Contact Specs */}
            <div className="space-y-2 pt-2 text-xs text-slate-600">
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Contacts: <strong className="text-slate-900">+971 52 295 4810</strong> / <strong className="text-slate-900">+971 6 741 1456</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Email: <strong className="text-slate-900">admin@efzeefashion.com</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Mon – Sat: 8:00 AM – 7:30 PM GST</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Building2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Showroom #1, Fashion Mart, Industrial Area 1, Ajman • HO: CBD Building, Dubai, UAE</span>
              </div>
            </div>

            {/* Live Factory Status indicator */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] text-slate-700 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Ajman Showroom Active: <strong className="text-emerald-700">30,000+ Garments/Month</strong></span>
              </div>
            </div>
          </div>

          {/* Col 1: Custom Apparel & Knits (Span 2 on lg) */}
          <div className="space-y-3.5 lg:col-span-2">
            <div className="flex items-center gap-1.5 pb-1 border-b border-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-amber-700">
                Custom Apparel
              </h4>
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><a href="#catalog" className="link-glide hover:text-amber-700 block py-0.5">Personalized Corporate Polos</a></li>
              <li><a href="#catalog" className="link-glide hover:text-amber-700 block py-0.5">Premium Winter Jackets</a></li>
              <li><a href="#catalog" className="link-glide hover:text-amber-700 block py-0.5">Sublimation Sportswear</a></li>
              <li><a href="#catalog" className="link-glide hover:text-amber-700 block py-0.5">Tailored Corporate Blazers</a></li>
              <li><a href="#catalog" className="link-glide hover:text-amber-700 block py-0.5">School Uniforms &amp; PE Kits</a></li>
              <li><a href="#catalog" className="link-glide hover:text-amber-700 block py-0.5">3D &amp; Rubberized Prints</a></li>
            </ul>
          </div>

          {/* Col 2: Safety & Technical Uniforms (Span 2 on lg) */}
          <div className="space-y-3.5 lg:col-span-2">
            <div className="flex items-center gap-1.5 pb-1 border-b border-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-amber-700">
                Workwear &amp; Sectors
              </h4>
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><a href="#industries" className="link-glide hover:text-amber-700 block py-0.5">Industrial Workwear &amp; Coveralls</a></li>
              <li><a href="#industries" className="link-glide hover:text-amber-700 block py-0.5">Logistics &amp; Delivery Uniforms</a></li>
              <li><a href="#industries" className="link-glide hover:text-amber-700 block py-0.5">Healthcare &amp; Medical Scrubs</a></li>
              <li><a href="#industries" className="link-glide hover:text-amber-700 block py-0.5">Hospitality &amp; F&amp;B Uniforms</a></li>
              <li><a href="#industries" className="link-glide hover:text-amber-700 block py-0.5">Security &amp; Facility Uniforms</a></li>
              <li><a href="#industries" className="link-glide hover:text-amber-700 block py-0.5">Eco-Friendly Recycled Options</a></li>
            </ul>
          </div>

          {/* Col 3: Corporate Gifts & VIP Swag (Span 2 on lg) */}
          <div className="space-y-3.5 lg:col-span-2">
            <div className="flex items-center gap-1.5 pb-1 border-b border-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-amber-700">
                Corporate Gifts
              </h4>
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><a href="#gifting" className="link-glide hover:text-amber-700 block py-0.5">Executive Onboarding Boxes</a></li>
              <li><a href="#gifting" className="link-glide hover:text-amber-700 block py-0.5">Promotional Merchandise</a></li>
              <li><a href="#gifting" className="link-glide hover:text-amber-700 block py-0.5">Eco-Friendly ESG Kits</a></li>
              <li><a href="#gifting" className="link-glide hover:text-amber-700 block py-0.5">Corporate Event Swag</a></li>
              <li><a href="#gifting" className="link-glide hover:text-amber-700 block py-0.5">Recycled Cotton Tote Bags</a></li>
            </ul>
          </div>

          {/* Col 4: Factory Capabilities & Ready Stock (Span 2 on lg) */}
          <div className="space-y-3.5 lg:col-span-2">
            <div className="flex items-center gap-1.5 pb-1 border-b border-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-amber-700">
                Branding &amp; Store
              </h4>
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><a href="#factory" className="link-glide hover:text-amber-700 block py-0.5">Precision Embroidery</a></li>
              <li><a href="#factory" className="link-glide hover:text-amber-700 block py-0.5">3D &amp; Rubberized Printing</a></li>
              <li><a href="#factory" className="link-glide hover:text-amber-700 block py-0.5">Sublimation &amp; Screen Printing</a></li>
              <li><a href="#factory" className="link-glide hover:text-amber-700 block py-0.5">Direct-To-Film (DTF)</a></li>
              <li><a href="#ready-stock" className="link-glide hover:text-amber-700 block py-0.5 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />Ready Stock Samples</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* ============================================================== */}
      {/* 3. COMBINED PAYMENT GATEWAYS & SECURITY ACCREDITATIONS         */}
      {/* ============================================================== */}
      <div className="border-t border-b border-slate-200 bg-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1560px] mx-auto space-y-4">
          
          {/* Row 1: Supported Payment Gateways */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <CreditCard className="w-4 h-4 text-amber-600 shrink-0" />
              <span className="font-semibold text-slate-900">Supported UAE &amp; GCC Payment Gateways:</span>
            </div>

            <div className="flex items-center gap-2 flex-wrap justify-center text-xs">
              <span className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 font-bold text-slate-900 shadow-2xs">Apple Pay</span>
              <span className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 font-bold text-slate-900 shadow-2xs">VISA</span>
              <span className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 font-bold text-slate-900 shadow-2xs">Mastercard</span>
              <span className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 font-bold text-slate-900 shadow-2xs">AMEX</span>
              <span className="px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 font-bold text-emerald-700 shadow-2xs">tabby (4 Payments)</span>
              <span className="px-3 py-1 rounded-lg bg-amber-50 border border-amber-200 font-bold text-amber-700 shadow-2xs">tamara (Split 4)</span>
              <span className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 font-medium text-slate-700 shadow-2xs">B2B Wire / PO</span>
            </div>
          </div>

          {/* Row 2: Certified Accreditations & Standards */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-3 border-t border-slate-100">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Award className="w-4 h-4 text-amber-600 shrink-0" />
              <span className="font-semibold text-slate-900">Certified B2B Compliance &amp; Standards:</span>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>ISO 9001:2015 Quality</span>
              </span>
              <span className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Eco-Friendly &amp; Recycled</span>
              </span>
              <span className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
                <Flame className="w-4 h-4 text-orange-600 shrink-0" />
                <span>NFPA 2112 &amp; EN ISO 11612</span>
              </span>
              <span className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>UAE FTA Tax Compliant VAT</span>
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* ============================================================== */}
      {/* 4. BOTTOM LEGAL, REGION & BACK TO TOP BAR                      */}
      {/* ============================================================== */}
      <div className="py-6 px-4 sm:px-6 lg:px-8 bg-slate-100 text-slate-600 text-xs border-t border-slate-200">
        <div className="max-w-[1560px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="text-center md:text-left space-y-1">
            <p className="text-slate-700 font-medium">Copyright © 2026 UNIFORM STUDIO 81 (EFZEE Fashion Tailoring LLC). All Rights Reserved.</p>
            <p className="text-[11px] text-slate-500">
              Showroom #1, Fashion Mart, Industrial Area 1, Ajman, UAE • HO: CBD Building, Dubai, UAE
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-600 flex-wrap justify-center">
            <span className="text-slate-500">Region: 🇦🇪 UAE • 🇸🇦 KSA • 🇶🇦 Qatar • 🇰🇼 Kuwait</span>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <a href="#" className="hover:text-amber-700 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-700 transition-colors">Wholesale Supply Terms</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Tender Submissions</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Ethical Labor Policy</a>
            
            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              title="Back to Top"
              className="ml-2 w-8 h-8 rounded-full bg-slate-800 hover:bg-amber-500 text-slate-300 hover:text-slate-950 flex items-center justify-center transition-colors cursor-pointer shadow-xs"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
}

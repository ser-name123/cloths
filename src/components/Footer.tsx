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
    <footer className="bg-[#090d16] text-white border-t border-slate-800/80 relative overflow-hidden">
      
      {/* Ambient background glow accents */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-slate-800/20 rounded-full blur-3xl pointer-events-none" />

      {/* ============================================================== */}
      {/* 1. VIP SHOWROOM, TOUR & NEWSLETTER ACTION BANNER               */}
      {/* ============================================================== */}
      <div className="border-b border-slate-800/80 bg-gradient-to-b from-[#0e1320] to-[#090d16] py-10 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-[1560px] mx-auto">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden">
            
            {/* Top Amber Shimmer Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Physical Facility Invitations (7 cols) */}
              <div className="lg:col-span-7 space-y-3.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span>DIRECT UAE TEXTILE MILL & TAJIMA EMBROIDERY PLANT</span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug">
                  Inspect The Fabrics Before You Order. <br className="hidden sm:inline" />
                  Visit Our Dubai & Ajman Facilities.
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                  Touch 180–450 GSM pure combed cotton knits, NFPA-certified flame-resistant twills, and Tajima embroidery sample rings with our textile engineers before confirming production runs.
                </p>

                {/* 3 Facility Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
                  <div className="flex items-center gap-2 text-slate-200 bg-slate-950/60 px-3.5 py-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Free Physical Swatch Ring</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200 bg-slate-950/60 px-3.5 py-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>2h Fast Digital Proofing</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200 bg-slate-950/60 px-3.5 py-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>48h Doorstep Courier</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Instant WhatsApp Booking & Spec Lookbook (5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
                <a
                  href="https://wa.me/971501234567?text=Hi%20Kraftwear%20UAE,%20I%20would%20like%20to%20book%20a%20showroom%20or%20factory%20visit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shimmer btn-luxury px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-950/40 transition-all cursor-pointer group/wa"
                >
                  <MessageSquare className="w-4 h-4 fill-slate-950 hover-arrow" />
                  <span>Schedule Showroom Visit via WhatsApp</span>
                </a>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2.5">
                  <button
                    onClick={() => onOpenQuoteModal ? onOpenQuoteModal('swatch-kit') : null}
                    className="btn-luxury flex-1 px-4 py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-600 icon-hover-bounce" />
                    <span>Request Swatch Kit</span>
                  </button>

                  <a
                    href="#catalog"
                    className="btn-luxury flex-1 px-4 py-2.5 rounded-full border border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-slate-200 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-slate-400 hover-arrow" />
                    <span>2026 Lookbook (PDF)</span>
                  </a>
                </div>

                {/* Newsletter Micro-Form */}
                <form onSubmit={handleSubscribe} className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  {emailSubscribed ? (
                    <div className="w-full flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
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
                        className="flex-1 px-4 py-2 rounded-full bg-slate-950 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
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
              <Logo variant="dark" size="md" />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Integrated textile manufacturer and certified uniform specialist operating from our 50,000 sq ft Ajman industrial plant and Dubai Design District (d3) showroom. Supplying premier enterprise and government entities across UAE, Saudi Arabia, and GCC.
            </p>

            {/* Quick Contact Specs */}
            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Hotline: <strong className="text-white">+971 50 123 4567</strong> / <strong className="text-white">+971 4 800 KRAFT</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Procurement: <strong className="text-white">procurement@kraftwear.ae</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Mon – Sat: 8:00 AM – 7:30 PM GST</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Building2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Dubai d3 Showroom (Bldg 4) • Ajman Industrial 1 Plant</span>
              </div>
            </div>

            {/* Live Factory Status indicator */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-slate-300 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Ajman Factory Active: <strong className="text-emerald-400">48-72h Doorstep Turnaround</strong></span>
              </div>
            </div>
          </div>

          {/* Col 1: Custom Apparel & Knits (Span 2 on lg) */}
          <div className="space-y-3.5 lg:col-span-2">
            <div className="flex items-center gap-1.5 pb-1 border-b border-slate-800/80">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider text-amber-400">
                Custom Apparel
              </h4>
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#catalog" className="link-glide hover:text-amber-400 block py-0.5">Heavyweight Luxury Tees (280 GSM)</a></li>
              <li><a href="#catalog" className="link-glide hover:text-amber-400 block py-0.5">Executive Pique Polos (240 GSM)</a></li>
              <li><a href="#catalog" className="link-glide hover:text-amber-400 block py-0.5">Brushed Fleece Hoodies (380 GSM)</a></li>
              <li><a href="#catalog" className="link-glide hover:text-amber-400 block py-0.5">Varsity & Bomber Jackets</a></li>
              <li><a href="#catalog" className="link-glide hover:text-amber-400 block py-0.5">DriFit Activewear & PE Kits</a></li>
              <li><a href="#catalog" className="link-glide hover:text-amber-400 block py-0.5">Oversized Acid-Wash Streetwear</a></li>
              <li><a href="#catalog" className="link-glide hover:text-amber-400 block py-0.5">Custom Damask Woven Labels</a></li>
            </ul>
          </div>

          {/* Col 2: Safety & Technical Uniforms (Span 2 on lg) */}
          <div className="space-y-3.5 lg:col-span-2">
            <div className="flex items-center gap-1.5 pb-1 border-b border-slate-800/80">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider text-amber-400">
                Workwear & Safety
              </h4>
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#industries" className="link-glide hover:text-amber-400 block py-0.5">NFPA 2112 Certified FR Coveralls</a></li>
              <li><a href="#industries" className="link-glide hover:text-amber-400 block py-0.5">ANSI Class 2 Safety Vests</a></li>
              <li><a href="#industries" className="link-glide hover:text-amber-400 block py-0.5">Antimicrobial Clinic Scrubs</a></li>
              <li><a href="#industries" className="link-glide hover:text-amber-400 block py-0.5">5-Star Chef Coats & Heavy Aprons</a></li>
              <li><a href="#industries" className="link-glide hover:text-amber-400 block py-0.5">Corporate Poly-Viscose Suits</a></li>
              <li><a href="#industries" className="link-glide hover:text-amber-400 block py-0.5">Arc Flash Electrical Suits (40 Cal)</a></li>
              <li><a href="#industries" className="link-glide hover:text-amber-400 block py-0.5">Heavy-Duty Multi-Pocket Cargos</a></li>
            </ul>
          </div>

          {/* Col 3: Corporate Gifts & VIP Swag (Span 2 on lg) */}
          <div className="space-y-3.5 lg:col-span-2">
            <div className="flex items-center gap-1.5 pb-1 border-b border-slate-800/80">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider text-amber-400">
                Corporate Gifts
              </h4>
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#gifting" className="link-glide hover:text-amber-400 block py-0.5">Executive Onboarding Boxes</a></li>
              <li><a href="#gifting" className="link-glide hover:text-amber-400 block py-0.5">Smart LED Temperature Tumblers</a></li>
              <li><a href="#gifting" className="link-glide hover:text-amber-400 block py-0.5">10,000mAh MagSafe Power Banks</a></li>
              <li><a href="#gifting" className="link-glide hover:text-amber-400 block py-0.5">14oz Organic GOTS Tote Bags</a></li>
              <li><a href="#gifting" className="link-glide hover:text-amber-400 block py-0.5">Laser-Engraved Metal Rollerballs</a></li>
              <li><a href="#gifting" className="link-glide hover:text-amber-400 block py-0.5">Zero-Plastic Sustainable ESG Kits</a></li>
              <li><a href="#gifting" className="link-glide hover:text-amber-400 block py-0.5">Custom Velvet Rigid Gift Boxes</a></li>
            </ul>
          </div>

          {/* Col 4: Factory Capabilities & Ready Stock (Span 2 on lg) */}
          <div className="space-y-3.5 lg:col-span-2">
            <div className="flex items-center gap-1.5 pb-1 border-b border-slate-800/80">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider text-amber-400">
                Factory & Store
              </h4>
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#factory" className="link-glide hover:text-amber-400 block py-0.5">Gerber CAD Pattern Nesting</a></li>
              <li><a href="#factory" className="link-glide hover:text-amber-400 block py-0.5">15-Needle Tajima Embroidery</a></li>
              <li><a href="#factory" className="link-glide hover:text-amber-400 block py-0.5">M&R Automatic Screen Carousels</a></li>
              <li><a href="#factory" className="link-glide hover:text-amber-400 block py-0.5">Direct-To-Film (DTF) Printing</a></li>
              <li><a href="#ready-stock" className="link-glide hover:text-amber-400 block py-0.5 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />Ready Stock Inventory (24h)</a></li>
              <li><a href="#services" className="link-glide hover:text-amber-400 block py-0.5">Request Physical Swatch Ring</a></li>
              <li><a href="#quote-builder" className="link-glide hover:text-amber-400 block py-0.5">UAE FTA Official VAT Invoices</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* ============================================================== */}
      {/* 3. COMBINED PAYMENT GATEWAYS & SECURITY ACCREDITATIONS         */}
      {/* ============================================================== */}
      <div className="border-t border-b border-slate-800/80 bg-slate-900/40 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1560px] mx-auto space-y-4">
          
          {/* Row 1: Supported Payment Gateways */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <CreditCard className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-semibold text-slate-200">Supported UAE & GCC Payment Gateways:</span>
            </div>

            <div className="flex items-center gap-2 flex-wrap justify-center text-xs">
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700/80 font-bold text-white shadow-2xs">Apple Pay</span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700/80 font-bold text-white shadow-2xs">VISA</span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700/80 font-bold text-white shadow-2xs">Mastercard</span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700/80 font-bold text-white shadow-2xs">AMEX</span>
              <span className="px-3 py-1 rounded-lg bg-emerald-950/80 border border-emerald-500/40 font-bold text-emerald-400 shadow-2xs">tabby (4 Payments)</span>
              <span className="px-3 py-1 rounded-lg bg-amber-950/80 border border-amber-500/40 font-bold text-amber-400 shadow-2xs">tamara (Split 4)</span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700/80 font-medium text-slate-300 shadow-2xs">B2B Wire / PO</span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700/80 font-medium text-slate-300 shadow-2xs">UAE COD</span>
            </div>
          </div>

          {/* Row 2: Certified Accreditations & Standards */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-3 border-t border-slate-800/60">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-semibold text-slate-200">Certified B2B Compliance & Standards:</span>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ISO 9001:2015 Quality</span>
              </span>
              <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ISO 14001 Environmental</span>
              </span>
              <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Flame className="w-4 h-4 text-orange-400 shrink-0" />
                <span>NFPA 2112 & EN ISO 11612</span>
              </span>
              <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Globe className="w-4 h-4 text-sky-400 shrink-0" />
                <span>OEKO-TEX Standard 100</span>
              </span>
              <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>UAE FTA Tax Compliant VAT</span>
              </span>
              <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Truck className="w-4 h-4 text-purple-400 shrink-0" />
                <span>GCC Arab League Origin</span>
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* ============================================================== */}
      {/* 4. BOTTOM LEGAL, REGION & BACK TO TOP BAR                      */}
      {/* ============================================================== */}
      <div className="py-6 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-500 text-xs">
        <div className="max-w-[1560px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="text-center md:text-left space-y-1">
            <p className="text-slate-400 font-medium">© 2026 Kraftwear Apparel & Merch L.L.C. All Rights Reserved.</p>
            <p className="text-[11px] text-slate-500">
              Dubai DED License No. 982142 • Ajman Chamber of Commerce Factory Reg. No. 41029 • TRN: 100492817200003
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400 flex-wrap justify-center">
            <span className="text-slate-500">Region: 🇦🇪 UAE • 🇸🇦 KSA • 🇶🇦 Qatar • 🇰🇼 Kuwait</span>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Wholesale Supply Terms</a>
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

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
  Check
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
    <footer className="bg-slate-950 text-white border-t border-slate-800/80 relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-slate-800/20 rounded-full blur-3xl pointer-events-none" />

      {/* ============================================================== */}
      {/* 1. TOP VIP SHOWROOM & FACTORY TOUR PRE-FOOTER BANNER           */}
      {/* ============================================================== */}
      <div className="border-b border-slate-800/90 bg-gradient-to-b from-slate-900/90 to-slate-950 py-12 px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-[1560px] mx-auto">
          <div className="bg-gradient-to-r from-slate-900 via-slate-800/60 to-slate-900 border border-slate-700/60 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            
            {/* Subtle glow accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Heading and Value Proposition */}
              <div className="lg:col-span-7 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span>DIRECT UAE TEXTILE MILL & TAJIMA EMBROIDERY PLANT</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                  Touch The Fabrics Before You Order. Inspect In Dubai & Ajman.
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                  Inspect 180–450 GSM pure combed cotton knits, NFPA-certified flame-resistant twills, and high-definition Tajima embroidery swatches with our senior textile engineers before approving bulk runs.
                </p>

                {/* 3 Value Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-200 bg-slate-950/60 px-3.5 py-2 rounded-xl border border-slate-700/40">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Free Physical Swatch Ring</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200 bg-slate-950/60 px-3.5 py-2 rounded-xl border border-slate-700/40">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>2h Fast Digital Proofing</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200 bg-slate-950/60 px-3.5 py-2 rounded-xl border border-slate-700/40">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>48h Express GCC Courier</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive CTAs */}
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <a
                  href="https://wa.me/971501234567?text=Hi%20Kraftwear%20UAE,%20I%20would%20like%20to%20book%20a%20showroom%20or%20factory%20visit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-950/40 transition-all hover:scale-[1.02]"
                >
                  <MessageSquare className="w-4 h-4 fill-slate-950" />
                  <span>Book Showroom Visit via WhatsApp</span>
                </a>

                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => onOpenQuoteModal ? onOpenQuoteModal('swatch-kit') : null}
                    className="flex-1 px-5 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>Request Swatch Kit</span>
                  </button>

                  <a
                    href="#catalog"
                    className="flex-1 px-5 py-3 rounded-full border border-slate-700 bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5 text-slate-400" />
                    <span>2026 Lookbook (PDF)</span>
                  </a>
                </div>

                <div className="text-center lg:text-left text-[11px] text-slate-400 pt-1">
                  <span>⚡ Average response time: <strong>&lt; 5 minutes</strong> during business hours.</span>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. PHYSICAL SHOWROOM & FACTORY LOCATION CARDS                  */}
      {/* ============================================================== */}
      <div className="border-b border-slate-800/80 py-10 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-[1560px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: Dubai Showroom */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Dubai Design District (d3) Showroom</h4>
                    <p className="text-[11px] text-slate-400 font-mono">Building 4, Core A, d3 Design Quarter, UAE</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Open Today
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Featuring our complete 1,000+ item swatch archive, luxury apparel sizing racks, corporate gift sample gallery, and dedicated VIP consultation rooms.
              </p>
              <div className="flex items-center justify-between text-xs text-slate-300 pt-2 border-t border-slate-800/80">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-amber-400" /> Mon – Sat: 9:00 AM – 7:30 PM
                </span>
                <a
                  href="tel:+971501234567"
                  className="font-semibold text-amber-400 hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" /> +971 4 800 KRAFT
                </a>
              </div>
            </div>

            {/* Card 2: Ajman Production Plant */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center border border-sky-500/20">
                    <Scissors className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Ajman In-House Manufacturing Plant</h4>
                    <p className="text-[11px] text-slate-400 font-mono">Industrial Area 1, Main Logistics Zone, Ajman</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  50,000 Sq Ft
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Fully equipped with 15-needle Tajima embroidery machines, computerized Gerber CAD fabric cutting systems, M&R screen printing, and QA wash-testing labs.
              </p>
              <div className="flex items-center justify-between text-xs text-slate-300 pt-2 border-t border-slate-800/80">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-sky-400" /> Mon – Fri: 8:00 AM – 6:30 PM
                </span>
                <a
                  href="mailto:factory@kraftwear.ae"
                  className="font-semibold text-sky-400 hover:underline flex items-center gap-1"
                >
                  <Mail className="w-3 h-3" /> factory@kraftwear.ae
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 3. VIP VIP NEWSLETTER & SPEC SHEET SUBSCRIBER BAR               */}
      {/* ============================================================== */}
      <div className="border-b border-slate-800/80 py-8 px-4 sm:px-8 lg:px-12 bg-slate-900/40">
        <div className="max-w-[1560px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <h4 className="text-base font-bold text-white flex items-center justify-center lg:justify-start gap-2">
              <FileText className="w-4 h-4 text-amber-400" />
              <span>GCC Corporate Procurement Quarterly Digest</span>
            </h4>
            <p className="text-xs text-slate-400">
              Join 1,200+ GCC procurement directors receiving fabric pricing forecasts, seasonal corporate gift guides, and volume tier updates.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-2">
            {emailSubscribed ? (
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <Check className="w-4 h-4" />
                <span>Thank you! Your 2026 Textile Catalog has been dispatched.</span>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter corporate email (e.g. name@company.ae)"
                  className="w-full sm:w-80 px-4 py-2.5 rounded-full bg-slate-900 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shrink-0 shadow"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 4. COMPREHENSIVE 5-COLUMN DIRECTORY SITEMAP                     */}
      {/* ============================================================== */}
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          
          {/* Brand Info & Fast Contacts (Span 2 on lg) */}
          <div className="col-span-2 space-y-4">
            <Logo variant="dark" size="md" />

            <p className="text-xs text-slate-400 leading-relaxed pr-4">
              Integrated textile manufacturer and certified workwear specialist operating directly from Ajman Industrial Area with showroom facilities in Dubai Design District (d3). Supplying enterprise clients across UAE, Saudi Arabia, and GCC.
            </p>

            {/* Quick Contacts */}
            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Hotline: <strong className="text-white">+971 50 123 4567</strong> / <strong className="text-white">+971 4 800 KRAFT</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Procurement: <strong className="text-white">procurement@kraftwear.ae</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Mon – Sat: 8:00 AM – 7:30 PM GST</span>
              </div>
            </div>

            {/* Live Factory Status indicator */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Ajman Factory Active: <strong className="text-emerald-400">48-72h Express Turnaround</strong></span>
              </div>
            </div>
          </div>

          {/* Col 1: Custom Apparel */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider text-amber-400">
              Custom Apparel
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#catalog" className="hover:text-white transition-colors">Heavyweight Luxury Tees (280 GSM)</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Executive Pique Polos (240 GSM)</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Brushed Fleece Hoodies (380 GSM)</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Varsity & Bomber Jackets</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">DriFit Activewear & PE Kits</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Oversized Acid-Wash Streetwear</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Custom Woven Labels & Hangtags</a></li>
            </ul>
          </div>

          {/* Col 2: Safety & Workwear */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider text-amber-400">
              Safety & Workwear
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#industries" className="hover:text-white transition-colors">NFPA 2112 Certified FR Coveralls</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">ANSI Class 2 Safety Vests</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Antimicrobial Clinic Scrubs</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">5-Star Chef Coats & Heavy Aprons</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Corporate Tropical Poly-Viscose Suits</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Arc Flash Electrical Suits (40 Cal)</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Heavy-Duty Multi-Pocket Cargos</a></li>
            </ul>
          </div>

          {/* Col 3: Corporate Gifts & Swag */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider text-amber-400">
              Corporate Gifts
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#gifting" className="hover:text-white transition-colors">Executive Onboarding Boxes</a></li>
              <li><a href="#gifting" className="hover:text-white transition-colors">Smart LED Temperature Tumblers</a></li>
              <li><a href="#gifting" className="hover:text-white transition-colors">10,000mAh MagSafe Power Banks</a></li>
              <li><a href="#gifting" className="hover:text-white transition-colors">14oz Organic GOTS Tote Bags</a></li>
              <li><a href="#gifting" className="hover:text-white transition-colors">Laser-Engraved Metal Rollerballs</a></li>
              <li><a href="#gifting" className="hover:text-white transition-colors">Zero-Plastic Sustainable ESG Kits</a></li>
              <li><a href="#gifting" className="hover:text-white transition-colors">Custom Velvet Rigid Gift Boxes</a></li>
            </ul>
          </div>

          {/* Col 4: Factory & Production Tech */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider text-amber-400">
              Factory & Tech
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#factory" className="hover:text-white transition-colors">Gerber CAD Pattern Nesting</a></li>
              <li><a href="#factory" className="hover:text-white transition-colors">15-Needle Tajima Embroidery</a></li>
              <li><a href="#factory" className="hover:text-white transition-colors">M&R Automatic Screen Carousels</a></li>
              <li><a href="#factory" className="hover:text-white transition-colors">Direct-To-Film (DTF) Printing</a></li>
              <li><a href="#factory" className="hover:text-white transition-colors">3D High-Density Puff & Foils</a></li>
              <li><a href="#factory" className="hover:text-white transition-colors">Reactive Dyeing & Bio-Washes</a></li>
              <li><a href="#factory" className="hover:text-white transition-colors">4-Stage Inline ISO Quality Lab</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* ============================================================== */}
      {/* 5. OFFICIAL ACCREDITATION & CERTIFICATIONS BANNER              */}
      {/* ============================================================== */}
      <div className="border-t border-b border-slate-800/80 bg-slate-900/60 py-6 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1560px] mx-auto flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Certified B2B Compliance & Standards:
            </span>
          </div>

          <div className="flex items-center gap-6 flex-wrap text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>ISO 9001:2015 Quality</span>
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>ISO 14001 Environmental</span>
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Flame className="w-4 h-4 text-orange-400" />
              <span>NFPA 2112 & EN ISO 11612</span>
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Globe className="w-4 h-4 text-sky-400" />
              <span>OEKO-TEX Standard 100</span>
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>UAE FTA Tax Compliant VAT</span>
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Truck className="w-4 h-4 text-purple-400" />
              <span>GCC Arab League Origin</span>
            </span>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 6. BOTTOM LEGAL, CURRENCY & BACK TO TOP BAR                    */}
      {/* ============================================================== */}
      <div className="py-8 px-4 sm:px-8 lg:px-12 bg-slate-950 text-slate-500 text-xs">
        <div className="max-w-[1560px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="text-center md:text-left space-y-1">
            <p>© 2026 Kraftwear Apparel & Merch L.L.C. All Rights Reserved.</p>
            <p className="text-[11px] text-slate-600">
              Dubai DED License No. 982142 • Ajman Chamber of Commerce Factory Reg. No. 41029 • TRN: 100492817200003
            </p>
          </div>

          <div className="flex items-center gap-5 text-xs text-slate-400 flex-wrap justify-center">
            <span className="text-slate-500">Region: 🇦🇪 UAE • 🇸🇦 KSA • 🇶🇦 Qatar • 🇰🇼 Kuwait</span>
            <span className="text-slate-700">|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Wholesale Supply Terms</a>
            <a href="#" className="hover:text-white transition-colors">Tender Submissions</a>
            <a href="#" className="hover:text-white transition-colors">Ethical Labor Policy</a>
            
            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              title="Back to Top"
              className="ml-2 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  ArrowUpRight,
  Download,
  FileText
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      
      {/* Top CTA Banner */}
      <div className="border-b border-slate-800/80 bg-slate-900/60 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-widest">
              Ready to Upgrade Your Corporate Uniforms or Swag?
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Schedule a Factory Tour in Ajman or Showroom Visit in Dubai
            </h3>
            <p className="text-xs text-slate-400">
              Inspect physical fabric swatches, testing lab dips, Tajima embroidery samples, and finished uniforms in person.
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a
              href="https://wa.me/971501234567?text=Hi%20Kraftwear%20UAE,%20I%20would%20like%20to%20schedule%20a%20showroom/factory%20visit."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Book Appointment via WhatsApp</span>
            </a>

            <a
              href="#catalog"
              className="px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-800 text-white font-bold text-sm hover:border-amber-400 transition-all"
            >
              Explore Products
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center font-black text-slate-950 text-xl">
                KW
              </div>
              <div>
                <span className="font-extrabold text-xl text-white">KRAFTWEAR DUBAI</span>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest">
                  Apparel • Uniforms • Merch
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              The United Arab Emirates' premier integrated custom apparel manufacturer, certified workwear specialist, and corporate gifting house. Powered by full in-house production in Ajman Industrial Area and client showrooms in Dubai.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Dubai Showroom:</strong> Business Bay / Dubai Design District (d3), UAE
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Manufacturing Hub:</strong> Industrial Area 1, Ajman, UAE
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Mon – Sat: 8:00 AM – 7:30 PM (GST)</span>
              </div>
            </div>
          </div>

          {/* Column 1: Custom Apparel */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-amber-400 font-mono uppercase tracking-wider">
              Custom Apparel
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#catalog" className="hover:text-white transition-colors">Heavyweight 280 GSM T-Shirts</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Executive Corporate Polos</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Heritage Fleece Hoodies (380 GSM)</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Custom Varsity & Bomber Jackets</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Drifit Activewear & PE Kits</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Tote Bags & Headwear</a></li>
            </ul>
          </div>

          {/* Column 2: Workwear & Safety */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-amber-400 font-mono uppercase tracking-wider">
              Industrial & Uniforms
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#industries" className="hover:text-white transition-colors">NFPA 2112 Certified FR Coveralls</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">High-Visibility 3M Reflective Vests</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Hospital Antimicrobial Scrubs</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Hospitality Chef Coats & Aprons</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Security Guard Uniforms</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Corporate Suits & Blazers</a></li>
            </ul>
          </div>

          {/* Column 3: Corporate Gifting & Downloads */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-amber-400 font-mono uppercase tracking-wider">
              Catalogs & Gifting
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#gifting" className="hover:text-white transition-colors">VIP Employee Onboarding Boxes</a></li>
              <li><a href="#gifting" className="hover:text-white transition-colors">Smart Temperature Tumblers</a></li>
              <li><a href="#gifting" className="hover:text-white transition-colors">MagSafe Wireless Power Banks</a></li>
              <li><a href="#gifting" className="hover:text-white transition-colors">Eco-Friendly ESG Merchandise</a></li>
              <li><a href="#gifting" className="hover:text-white transition-colors">Ramadan & National Day Hampers</a></li>
            </ul>

            <div className="pt-3">
              <a
                href="#catalog"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download 2026 PDF Catalog</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Kraftwear Apparel & Merch Manufacturing LLC. Registered in Dubai & Ajman, UAE. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              ISO 9001:2015 & ISO 14001
            </span>
            <span>Privacy Policy</span>
            <span>Terms of Wholesale</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


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
  Download
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      
      {/* Top CTA Strip */}
      <div className="border-b border-slate-800 bg-slate-950 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <span className="text-amber-400 font-mono text-[10px] font-bold uppercase tracking-widest">
              SCHEDULE A FACTORY OR SHOWROOM VISIT
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Inspect Physical Swatches & Pre-Production Proofs in Person
            </h3>
            <p className="text-xs text-slate-400">
              Visit our Dubai Design District showroom or tour our 50,000 sq ft production plant in Ajman.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a
              href="https://wa.me/971501234567?text=Hi%20Kraftwear%20UAE,%20I%20would%20like%20to%20book%20a%20showroom%20visit."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Book Appointment via WhatsApp</span>
            </a>

            <a
              href="#catalog"
              className="px-5 py-2.5 rounded-full border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs"
            >
              Browse Catalog
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white text-slate-900 flex items-center justify-center font-extrabold text-base">
                KW
              </div>
              <div>
                <span className="font-extrabold text-lg text-white">KRAFTWEAR DUBAI</span>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest">
                  Apparel • Uniforms • Swag
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              UAE’s premier integrated custom clothing manufacturer, industrial workwear specialist, and corporate gifting house. Direct in-house production in Ajman Industrial Area.
            </p>

            <div className="space-y-1.5 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Dubai Showroom:</strong> Business Bay / d3 Design District, UAE</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Factory:</strong> Industrial Area 1, Ajman, UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Mon – Sat: 8:00 AM – 7:30 PM (GST)</span>
              </div>
            </div>
          </div>

          {/* Col 1 */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider">
              Custom Apparel
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><a href="#catalog" className="hover:text-white transition-colors">Heavyweight 280 GSM T-Shirts</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Executive Corporate Polos</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Fleece Hoodies (380 GSM)</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Varsity Bomber Jackets</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">DriFit Activewear & PE Kits</a></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider">
              Safety & Workwear
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><a href="#industries" className="hover:text-white transition-colors">NFPA 2112 FR Coveralls</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">High-Vis Reflective Vests</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Hospital Antimicrobial Scrubs</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Chef Coats & Hospitality Aprons</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Corporate Suits & Blazers</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider">
              Corporate Gifts
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><a href="#gifting" className="hover:text-white transition-colors">Executive Onboarding Boxes</a></li>
              <li><a href="#gifting" className="hover:text-white transition-colors">Smart Vacuum Tumblers</a></li>
              <li><a href="#gifting" className="hover:text-white transition-colors">MagSafe Power Banks</a></li>
              <li><a href="#gifting" className="hover:text-white transition-colors">Eco-Friendly ESG Swag</a></li>
            </ul>

            <div className="pt-2">
              <a
                href="#catalog"
                className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300"
              >
                <Download className="w-3.5 h-3.5" />
                <span>2026 PDF Lookbook</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-[11px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Kraftwear Apparel & Merch LLC. Registered in Dubai & Ajman, UAE. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              ISO 9001:2015 & ISO 14001
            </span>
            <span>Privacy</span>
            <span>Wholesale Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

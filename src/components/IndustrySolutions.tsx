'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  Flame, 
  HeartPulse, 
  UtensilsCrossed, 
  Plane, 
  GraduationCap, 
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';

interface IndustrySolutionsProps {
  onOpenQuoteModal: (category?: string, details?: any) => void;
}

export default function IndustrySolutions({ onOpenQuoteModal }: IndustrySolutionsProps) {
  const [activeSector, setActiveSector] = useState(0);

  const sectors = [
    {
      id: 'oil-gas',
      name: 'Oil & Gas / Heavy Industrial',
      icon: <Flame className="w-5 h-5" />,
      tagline: 'NFPA 2112 & EN ISO 11612 Certified Flame-Resistant Workwear',
      description: 'Engineered specifically for ADNOC contractors, petrochemical rigs, and heavy construction sites across UAE & Saudi Arabia.',
      keyProducts: ['FR Cotton Coveralls 240/300 GSM', 'Anti-Static High-Vis Jackets', 'Electrical Arc Flash Suits', 'Safety Steel Toe Boots'],
      clients: '30+ Certified Energy Contractors',
      image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'hospitality',
      name: 'Hospitality & Luxury Dining',
      icon: <UtensilsCrossed className="w-5 h-5" />,
      tagline: 'High-Performance Front & Back of House Uniform Collections',
      description: 'Supplying 5-star Dubai hotels and restaurant chains with breathable chef jackets, aprons, housekeeping tunics, and concierge suits.',
      keyProducts: ['Breathable Mesh Chef Coats', 'Heavy Canvas Cross-Back Aprons', 'F&B Server Waistcoats', 'Housekeeping Tunics'],
      clients: '75+ Luxury UAE Resorts & F&B Groups',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Clinical Teams',
      icon: <HeartPulse className="w-5 h-5" />,
      tagline: 'Antimicrobial & Fluid-Repellent Medical Scrubs & Lab Coats',
      description: '4-way spandex stretch scrubs tailored for physicians, nurses, and dental clinics requiring comfort during long emergency shifts.',
      keyProducts: ['Antimicrobial 4-Way Stretch Scrubs', 'Doctor Embroidered Lab Coats', 'Patient Gowns', 'Surgical Scrub Caps'],
      clients: '120+ Hospitals & Private Clinics in UAE',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'corporate-tech',
      name: 'Corporate Offices & Tech Hubs',
      icon: <Building2 className="w-5 h-5" />,
      tagline: 'Smart-Casual Polos, Oxford Shirts & Modern Tech Swag',
      description: 'Complete wardrobe programs for DIFC, Dubai Internet City, and multinational headquarters with year-round re-order consistency.',
      keyProducts: ['Pique Corporate Polos', 'Non-Iron Oxford Business Shirts', 'Tailored Blazers', 'Custom Tech Fleece Jackets'],
      clients: '200+ Enterprise Corporates',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'education',
      name: 'Schools & Academic Uniforms',
      icon: <GraduationCap className="w-5 h-5" />,
      tagline: 'Durable, Kid-Friendly Fabric Programs for Year-Round Supply',
      description: 'Complete uniform programs with exact pantone matching across terms. Moisture-wicking PE kits, blazers, and ties.',
      keyProducts: ['Cotton Rich School Shirts', 'DriFit Sport PE Kits', 'School Crest Blazers', 'Winter Pullover Knits'],
      clients: '40+ International Schools in Dubai & Sharjah',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const current = sectors[activeSector];

  return (
    <section id="industries" className="py-24 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            <span>KLOTHON-STYLE SECTOR SPECIALIZATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Tailored Industry Solutions{' '}
            <span className="text-amber-400">for Every GCC Sector.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            From oilfield safety standards to five-star hospitality finishes, we build specialized uniform programs with strict regulatory compliance.
          </p>
        </div>

        {/* Sector Tabs Bar */}
        <div className="mt-12 flex items-center justify-start lg:justify-center gap-2 overflow-x-auto no-scrollbar pb-4">
          {sectors.map((sec, idx) => (
            <button
              key={sec.id}
              onClick={() => setActiveSector(idx)}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                activeSector === idx
                  ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20'
                  : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <span>{sec.icon}</span>
              <span>{sec.name}</span>
            </button>
          ))}
        </div>

        {/* Featured Sector Showcase Card */}
        <div className="mt-8 bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
          
          {/* Details (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-400/10 text-amber-400 border border-amber-400/30">
                {current.clients}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {current.tagline}
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {current.description}
              </p>

              {/* Core products */}
              <div className="space-y-2 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Sector Uniform Specifications:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {current.keyProducts.map((prod, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{prod}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onOpenQuoteModal('industry-' + current.id, { sector: current.name })}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Request {current.name} Lookbook</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:text-emerald-400 font-medium transition-colors"
              >
                Have custom tender specs? WhatsApp direct →
              </a>
            </div>
          </div>

          {/* Image Showcase (5 cols) */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
            <img
              src={current.image}
              alt={current.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950 via-transparent to-transparent"></div>
          </div>

        </div>

      </div>
    </section>
  );
}


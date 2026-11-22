'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  Flame, 
  HeartPulse, 
  UtensilsCrossed, 
  GraduationCap, 
  ArrowRight,
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
      name: 'Oil & Gas / Heavy Industry',
      icon: <Flame className="w-4 h-4" />,
      tagline: 'NFPA 2112 & EN ISO Certified Flame-Resistant Workwear',
      description: 'Engineered specifically for ADNOC contractors, petrochemical rigs, and heavy construction sites across UAE & Saudi Arabia.',
      keyProducts: ['FR Cotton Coveralls 240/300 GSM', 'Anti-Static High-Vis Jackets', 'Electrical Arc Flash Suits', 'Safety Steel Toe Boots'],
      clients: '30+ Certified Energy Contractors',
      image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'hospitality',
      name: 'Hospitality & Luxury Dining',
      icon: <UtensilsCrossed className="w-4 h-4" />,
      tagline: 'High-Performance Front & Back of House Uniform Collections',
      description: 'Supplying 5-star Dubai hotels and restaurant chains with breathable chef jackets, aprons, housekeeping tunics, and concierge suits.',
      keyProducts: ['Breathable Mesh Chef Coats', 'Heavy Canvas Cross-Back Aprons', 'F&B Server Waistcoats', 'Housekeeping Tunics'],
      clients: '75+ Luxury UAE Resorts & F&B Groups',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Clinical Teams',
      icon: <HeartPulse className="w-4 h-4" />,
      tagline: 'Antimicrobial & Fluid-Repellent Medical Scrubs & Lab Coats',
      description: '4-way spandex stretch scrubs tailored for physicians, nurses, and dental clinics requiring comfort during long emergency shifts.',
      keyProducts: ['Antimicrobial 4-Way Stretch Scrubs', 'Doctor Embroidered Lab Coats', 'Patient Gowns', 'Surgical Scrub Caps'],
      clients: '120+ Hospitals & Private Clinics in UAE',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'corporate-tech',
      name: 'Corporate Offices & Tech Hubs',
      icon: <Building2 className="w-4 h-4" />,
      tagline: 'Smart-Casual Polos, Oxford Shirts & Modern Tech Swag',
      description: 'Complete wardrobe programs for DIFC, Dubai Internet City, and multinational headquarters with year-round re-order consistency.',
      keyProducts: ['Pique Corporate Polos', 'Non-Iron Oxford Business Shirts', 'Tailored Blazers', 'Custom Tech Fleece Jackets'],
      clients: '200+ Enterprise Corporates',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'education',
      name: 'Schools & Academic Uniforms',
      icon: <GraduationCap className="w-4 h-4" />,
      tagline: 'Durable, Kid-Friendly Fabric Programs for Year-Round Supply',
      description: 'Complete uniform programs with exact pantone matching across terms. Moisture-wicking PE kits, blazers, and ties.',
      keyProducts: ['Cotton Rich School Shirts', 'DriFit Sport PE Kits', 'School Crest Blazers', 'Winter Pullover Knits'],
      clients: '40+ International Schools in Dubai & Sharjah',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const current = sectors[activeSector];

  return (
    <section id="industries" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
            <Building2 className="w-3.5 h-3.5 text-slate-500" />
            <span>KLOTHON-STYLE SECTOR SPECIALIZATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tailored Industry Workwear Programs
          </h2>
          <p className="text-slate-600 text-sm">
            Regulatory compliant uniforms engineered for hazardous environments, luxury hotels, and hospitals.
          </p>
        </div>

        {/* Sector Tabs */}
        <div className="mt-10 flex items-center justify-start lg:justify-center gap-2 overflow-x-auto no-scrollbar pb-3">
          {sectors.map((sec, idx) => (
            <button
              key={sec.id}
              onClick={() => setActiveSector(idx)}
              className={`px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeSector === idx
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>{sec.icon}</span>
              <span>{sec.name}</span>
            </button>
          ))}
        </div>

        {/* Featured Card */}
        <div className="mt-6 bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 grid grid-cols-1 lg:grid-cols-12">
          
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-100 text-slate-800 border border-slate-200">
                {current.clients}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {current.tagline}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {current.description}
              </p>

              <div className="space-y-2 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Sector Uniform Specifications:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {current.keyProducts.map((prod, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{prod}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onOpenQuoteModal('industry-' + current.id, { sector: current.name })}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs shadow transition-all flex items-center justify-center gap-2"
              >
                <span>Request {current.name} Lookbook</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-500 hover:text-emerald-600 font-medium transition-colors"
              >
                Have tender requirements? WhatsApp us →
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full bg-slate-100">
            <img
              src={current.image}
              alt={current.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

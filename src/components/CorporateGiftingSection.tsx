'use client';

import React from 'react';
import { Currency } from '@/types';
import { CURRENCY_RATES } from '@/data/mockData';
import { 
  Gift, 
  Sparkles, 
  Box, 
  Check, 
  ArrowRight, 
  Zap, 
  Coffee, 
  Laptop, 
  Leaf 
} from 'lucide-react';

interface CorporateGiftingProps {
  currentCurrency: Currency;
  onOpenQuoteModal: (category?: string, details?: any) => void;
}

export default function CorporateGiftingSection({ currentCurrency, onOpenQuoteModal }: CorporateGiftingProps) {
  const curr = CURRENCY_RATES[currentCurrency];
  const formatPrice = (aed: number) => {
    return `${curr.symbol} ${(aed * curr.rate).toFixed(0)}`;
  };

  const giftPacks = [
    {
      title: 'The Executive Onboarding Hamper',
      subtitle: 'VIP Welcome Box for Senior Hires & Clients',
      priceAED: 135,
      moq: 10,
      badge: 'Bestseller',
      items: [
        'Custom Rigid Magnetic Gift Box (Matte Soft Touch)',
        '500ml Smart LED Temperature Vacuum Tumbler',
        'A5 Hardbound Executive Notebook with Pen Loop',
        'Heavy Metal Rollerball Pen with Laser Monogram',
        '10,000mAh Ultra-Slim MagSafe Power Bank',
      ],
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Eco-Forward Sustainable ESG Kit',
      subtitle: '100% Recycled & Biodegradable Materials',
      priceAED: 85,
      moq: 20,
      badge: 'Zero Plastic',
      items: [
        '14oz Heavy Organic Cotton Exhibition Tote Bag',
        'Wheat Straw Bluetooth 5.0 Speaker & Desk Clock',
        'Bamboo & Double-Wall Glass Tea Infuser Tumbler',
        'Seed Paper Plantable Notebook & Recycled Pens',
        'Kraft Corrugated Custom Branded Mailer Box',
      ],
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'The GITEX & Trade Show Activation Swag',
      subtitle: 'High-Volume Conference & Booth Giveaways',
      priceAED: 39,
      moq: 50,
      badge: 'Express 48h',
      items: [
        'Combed Cotton 180 GSM Custom Branded T-Shirt',
        'Matte Aluminum Sport Water Bottle (750ml)',
        'Heavy Lanyard with Detachable Safety Buckle',
        'Soft Enamel Custom 3D Metal Lapel Pin',
        'Custom Drawstring Ripstop Bag with Reflective Trim',
      ],
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="gifting" className="py-24 bg-slate-950 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-800">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold">
              <Gift className="w-3.5 h-3.5" />
              <span>CORPORATE GIFTS DUBAI & BAHARNANI EXPERTISE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Curated Swag Boxes &{' '}
              <span className="text-amber-400">VIP Client Hampers.</span>
            </h2>
            <p className="text-slate-400 text-base">
              Turn merchandise into an unforgettable unboxing experience. Fully customized rigid packaging, foil stamping, laser engraving, and doorstep delivery across Dubai & GCC.
            </p>
          </div>

          <button
            onClick={() => onOpenQuoteModal('custom-gift-box')}
            className="px-6 py-3 rounded-xl border border-amber-400/40 bg-amber-400/10 hover:bg-amber-400 hover:text-slate-950 text-amber-400 font-bold text-sm transition-all whitespace-nowrap"
          >
            Build Bespoke Swag Box →
          </button>
        </div>

        {/* Gift Packs 3-Column Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {giftPacks.map((pack, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl hover:shadow-amber-500/10"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                  <img
                    src={pack.image}
                    alt={pack.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-black bg-amber-400 text-slate-950 uppercase tracking-wider shadow">
                    {pack.badge}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {pack.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 font-mono">
                      {pack.subtitle}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                      Kit Inclusions:
                    </p>
                    <ul className="space-y-1.5">
                      {pack.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-800/80 mt-4">
                <div className="flex items-baseline justify-between py-4">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-mono">Starting At</span>
                    <span className="text-2xl font-black text-amber-400">
                      {formatPrice(pack.priceAED)}
                    </span>
                    <span className="text-xs text-slate-400"> / complete set</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block font-mono">Low MOQ</span>
                    <span className="text-xs font-bold text-slate-300">{pack.moq} boxes</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenQuoteModal('gifting-box', { kit: pack.title, price: pack.priceAED })}
                  className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Prototype Box</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Seasonal / Event Callout */}
        <div className="mt-16 bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border border-amber-400/30 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
              GCC FESTIVE & EVENT SEASONS
            </span>
            <h4 className="text-xl font-bold text-white">
              Ramadan Kareem, Eid & UAE National Day Gift Collections
            </h4>
            <p className="text-xs text-slate-400 max-w-xl">
              Pre-order luxury dates boxes, custom Arabic coffee flasks (Dallah), and premium brass-engraved desk sets with tailored corporate greetings.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal('festive-catalogue')}
            className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs whitespace-nowrap border border-slate-700"
          >
            Download Festive Lookbook
          </button>
        </div>

      </div>
    </section>
  );
}


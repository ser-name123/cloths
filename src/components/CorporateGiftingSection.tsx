'use client';

import React from 'react';
import { Currency } from '@/types';
import { CURRENCY_RATES } from '@/data/mockData';
import { 
  Gift, 
  Check, 
  ArrowRight 
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
      image: '/images/gifting/onboarding-box.jpg',
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
      image: '/images/gifting/eco-kit.jpg',
    },
    {
      title: 'The GITEX & Conference Activation Swag',
      subtitle: 'High-Volume Exhibition & Booth Giveaways',
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
      image: '/images/gifting/activation-swag.jpg',
    },
  ];

  return (
    <section id="gifting" className="scroll-mt-24 sm:scroll-mt-28 py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="reveal-on-scroll flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200/80">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-900 tracking-wider shadow-2xs">
              <Gift className="w-3.5 h-3.5 text-amber-600" />
              <span>CORPORATE GIFTS DUBAI & BAHARNANI EXPERTISE</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-slate-900 tracking-tight">
              Curated Swag Boxes & VIP Client Hampers
            </h2>
            <p className="text-slate-600 text-sm">
              Turn merchandise into an unforgettable unboxing experience with custom rigid boxes, EVA foam cutouts, and precision laser engraving.
            </p>
          </div>

          <button
            onClick={() => onOpenQuoteModal('custom-gift-box')}
            className="btn-shimmer btn-luxury w-full sm:w-auto px-5 py-2.5 rounded-full border border-slate-300 hover:border-amber-400 bg-white hover:bg-slate-50 text-slate-900 font-semibold text-xs transition-colors shadow-2xs whitespace-nowrap cursor-pointer text-center group/btn"
          >
            <span>Build Bespoke Swag Box</span>
            <span className="hover-arrow inline-block ml-1 group-hover/btn:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {/* 3-Column Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {giftPacks.map((pack, idx) => (
            <div
              key={idx}
              className={`group bg-[#fcfcfd] border border-slate-200/90 rounded-3xl overflow-hidden hover:border-amber-400/80 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between interactive-card spotlight-card card-tilt reveal-on-scroll stagger-${idx + 1}`}
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-slate-100 img-zoom-stage">
                  <img
                    src={pack.image}
                    alt={pack.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-650 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 px-3 py-0.5 rounded-full text-[10px] font-bold bg-white/95 text-slate-900 shadow-2xs badge-interactive">
                    {pack.badge}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                      {pack.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">
                      {pack.subtitle}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Kit Inclusions:
                    </p>
                    <ul className="space-y-1">
                      {pack.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs text-slate-600 hover:text-slate-900 transition-colors">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100 mt-2">
                <div className="flex items-baseline justify-between py-3">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-mono">Starting At</span>
                    <span className="text-base font-bold text-slate-900 font-mono">
                      {formatPrice(pack.priceAED)}
                    </span>
                    <span className="text-xs text-slate-500"> / set</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block font-mono">Low MOQ</span>
                    <span className="text-xs font-semibold text-slate-700">{pack.moq} boxes</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenQuoteModal('gifting-box', { kit: pack.title, price: pack.priceAED })}
                  className="btn-luxury-dark w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs shadow transition-all flex items-center justify-center gap-1.5 group/btn"
                >
                  <span>Request Prototype Box</span>
                  <ArrowRight className="w-3.5 h-3.5 hover-arrow group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

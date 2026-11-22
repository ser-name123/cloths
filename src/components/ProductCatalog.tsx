'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Currency, ProductItem } from '@/types';
import { PRODUCTS_CATALOG, CURRENCY_RATES } from '@/data/mockData';
import { 
  Sparkles, 
  Check, 
  ArrowRight, 
  SlidersHorizontal, 
  Tag, 
  ShieldCheck,
  Send
} from 'lucide-react';

interface ProductCatalogProps {
  currentCurrency: Currency;
  onOpenQuoteModal: (category?: string, details?: any) => void;
}

export default function ProductCatalog({ currentCurrency, onOpenQuoteModal }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const curr = CURRENCY_RATES[currentCurrency];
  const formatPrice = (aed: number) => {
    return `${curr.symbol} ${(aed * curr.rate).toFixed(0)}`;
  };

  const categories = [
    { id: 'all', label: 'All Products (150+)' },
    { id: 'apparel', label: 'Custom Apparel & Streetwear' },
    { id: 'workwear', label: 'Workwear & FR Safety' },
    { id: 'kits', label: 'VIP Swag & Onboarding Kits' },
    { id: 'drinkware', label: 'Tech & Drinkware Gifts' },
  ];

  const filteredProducts = PRODUCTS_CATALOG.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="catalog" className="py-24 bg-slate-950 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-800">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold">
              <Tag className="w-3.5 h-3.5" />
              <span>WHOLESALE & ON-DEMAND CATALOG</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Curated for <span className="text-amber-400">Excellence & Durability.</span>
            </h2>
            <p className="text-slate-400 text-base">
              Every garment is manufactured or customized in our Ajman production facility under strict ISO quality standards.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72">
            <input
              type="text"
              placeholder="Search hoodies, polo, coveralls..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 py-6 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="group bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-400/60 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-amber-500/10"
            >
              <div>
                {/* Image Container with Badges */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                    {prod.badge && (
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 shadow-md">
                        {prod.badge}
                      </span>
                    )}
                    {prod.isNoMoq && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-sky-500/90 text-white backdrop-blur-md">
                        No Minimum Order
                      </span>
                    )}
                  </div>

                  {/* Color Swatches */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 p-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800">
                    {prod.colors.slice(0, 4).map((c, i) => (
                      <span
                        key={i}
                        className="w-3.5 h-3.5 rounded-full border border-white/30"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                    {prod.colors.length > 4 && (
                      <span className="text-[9px] font-mono text-slate-400 px-1">
                        +{prod.colors.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Details Content */}
                <div className="p-5 space-y-3">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400">
                      {prod.categoryLabel}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                      {prod.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {prod.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-1 pt-1 border-t border-slate-800/80">
                    {prod.features.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                        <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Price & Action Footer */}
              <div className="p-5 pt-0 border-t border-slate-800/60 mt-2">
                <div className="flex items-baseline justify-between py-3">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-mono">Wholesale from</span>
                    <span className="text-xl font-black text-amber-400">
                      {formatPrice(prod.basePriceAED)}
                    </span>
                    <span className="text-[10px] text-slate-500"> / unit</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block font-mono">Standard MOQ</span>
                    <span className="text-xs font-bold text-slate-300">
                      {prod.moq} pcs
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => onOpenQuoteModal(prod.category, { product: prod.title, price: prod.basePriceAED })}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-amber-400 hover:text-slate-950 text-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-2 group-hover:bg-amber-400 group-hover:text-slate-950"
                >
                  <span>Request Custom Sample</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/40 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Need custom tech packs, specialized dyeing or custom GSM?
            </h3>
            <p className="text-sm text-slate-400 max-w-xl">
              Our Ajman textile laboratory develops bespoke knitwear blends, custom pantone lab dips, and private label trims.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal('custom-tech-pack')}
            className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-lg whitespace-nowrap transition-transform hover:scale-105"
          >
            Submit Tech Pack / Specs
          </button>
        </div>

      </div>
    </section>
  );
}


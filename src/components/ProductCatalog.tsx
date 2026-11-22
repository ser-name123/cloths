'use client';

import React, { useState } from 'react';
import { Currency } from '@/types';
import { PRODUCTS_CATALOG, CURRENCY_RATES } from '@/data/mockData';
import { 
  Tag, 
  Check, 
  ArrowRight, 
  Search, 
  SlidersHorizontal 
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
    { id: 'apparel', label: 'Custom Apparel' },
    { id: 'workwear', label: 'Workwear & FR Safety' },
    { id: 'kits', label: 'VIP Swag Boxes' },
    { id: 'drinkware', label: 'Tech & Drinkware' },
  ];

  const filteredProducts = PRODUCTS_CATALOG.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="catalog" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200/80">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-700">
              <Tag className="w-3.5 h-3.5 text-slate-500" />
              <span>WHOLESALE & ON-DEMAND CATALOG</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-slate-900 tracking-tight">
              Curated for Durability & Brand Distinction
            </h2>
            <p className="text-slate-600 text-sm">
              Direct factory production in Ajman adhering to ISO 9001 and international safety standards.
            </p>
          </div>

          {/* Search Input */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search apparel, coveralls..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-full pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 py-6 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="group bg-white border border-slate-200/90 rounded-2xl overflow-hidden hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
                    {prod.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/95 text-slate-900 shadow-2xs">
                        {prod.badge}
                      </span>
                    )}
                    {prod.isNoMoq && (
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-sky-600 text-white shadow-2xs">
                        No Minimum Order
                      </span>
                    )}
                  </div>

                  {/* Color dots */}
                  <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1 p-1 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 shadow-2xs">
                    {prod.colors.slice(0, 4).map((c, i) => (
                      <span
                        key={i}
                        className="w-3 h-3 rounded-full border border-slate-300"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 block">
                    {prod.categoryLabel}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors line-clamp-1">
                    {prod.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {prod.description}
                  </p>

                  <ul className="space-y-1 pt-2 border-t border-slate-100">
                    {prod.features.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                        <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 pt-0 border-t border-slate-100 mt-2">
                <div className="flex items-baseline justify-between py-3">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-mono">Wholesale from</span>
                    <span className="text-base font-bold text-slate-900 font-mono">
                      {formatPrice(prod.basePriceAED)}
                    </span>
                    <span className="text-[10px] text-slate-500"> / unit</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block font-mono">Standard MOQ</span>
                    <span className="text-xs font-semibold text-slate-700">
                      {prod.moq} pcs
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenQuoteModal(prod.category, { product: prod.title, price: prod.basePriceAED })}
                  className="w-full py-2 rounded-xl bg-slate-50 hover:bg-slate-900 hover:text-white text-slate-700 text-xs font-semibold border border-slate-200 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

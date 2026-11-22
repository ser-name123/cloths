'use client';

import React, { useState } from 'react';
import { Currency } from '@/types';
import { CURRENCY_RATES } from '@/data/mockData';
import { 
  Calculator, 
  Send, 
  TrendingDown, 
  Info, 
  Check, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface QuoteBuilderProps {
  currentCurrency: Currency;
  onOpenQuoteModal: (category?: string, details?: any) => void;
}

export default function QuoteBuilder({ currentCurrency, onOpenQuoteModal }: QuoteBuilderProps) {
  const [selectedProduct, setSelectedProduct] = useState('Heavyweight 280 GSM Tee');
  const [basePrice, setBasePrice] = useState(38);
  const [quantity, setQuantity] = useState(100);
  const [brandingMethod, setBrandingMethod] = useState<'screen' | 'embroidery' | 'puff' | 'sublimation'>('embroidery');
  const [printPositions, setPrintPositions] = useState<string[]>(['Front Left Chest']);

  const curr = CURRENCY_RATES[currentCurrency];

  const productOptions = [
    { name: 'Heavyweight 280 GSM Tee', price: 38, category: 'Apparel' },
    { name: 'Executive Pique Polo (240 GSM)', price: 44, category: 'Corporate' },
    { name: 'Heritage Fleece Hoodie (380 GSM)', price: 78, category: 'Apparel' },
    { name: 'Flame Resistant (FR) Coverall', price: 89, category: 'Workwear' },
    { name: 'High-Vis Safety Cargo Uniform', price: 65, category: 'Workwear' },
    { name: 'Executive Onboarding Swag Box', price: 135, category: 'VIP Gifts' },
    { name: 'Smart Vacuum Tumbler (500ml)', price: 29, category: 'Gifting' },
  ];

  const getDiscountPercentage = (qty: number) => {
    if (qty >= 1000) return 40;
    if (qty >= 500) return 30;
    if (qty >= 250) return 20;
    if (qty >= 100) return 15;
    if (qty >= 50) return 10;
    return 0;
  };

  const brandingSurcharges: Record<string, number> = {
    screen: 4,
    embroidery: 7,
    puff: 9,
    sublimation: 6,
  };

  const discount = getDiscountPercentage(quantity);
  const rawUnitPrice = basePrice + (brandingSurcharges[brandingMethod] || 0) + (printPositions.length > 1 ? (printPositions.length - 1) * 3 : 0);
  const discountedUnitPrice = rawUnitPrice * (1 - discount / 100);
  const totalCostAED = discountedUnitPrice * quantity;

  const formatPrice = (aed: number) => {
    return `${curr.symbol} ${(aed * curr.rate).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 1 })}`;
  };

  const togglePosition = (pos: string) => {
    if (printPositions.includes(pos)) {
      if (printPositions.length > 1) {
        setPrintPositions(printPositions.filter(p => p !== pos));
      }
    } else {
      setPrintPositions([...printPositions, pos]);
    }
  };

  const handleWhatsAppInstant = () => {
    const text = encodeURIComponent(
      `Hello Kraftwear Dubai!\nI used your Online Cost Calculator:\n- Product: ${selectedProduct}\n- Quantity: ${quantity} pcs\n- Branding: ${brandingMethod} (${printPositions.join(', ')})\n- Estimated Unit Price: ${formatPrice(discountedUnitPrice)}\n- Total Est: ${formatPrice(totalCostAED)}\n\nPlease provide official proforma invoice and sample lead time.`
    );
    window.open(`https://wa.me/971501234567?text=${text}`, '_blank');
  };

  return (
    <section id="quote-builder" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
            <Calculator className="w-3.5 h-3.5 text-slate-500" />
            <span>TRANSPARENT B2B PRICING</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-slate-900 tracking-tight">
            Instant Cost Calculator & Volume Tiers
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Configure your order specs, scale your quantity, and unlock wholesale volume tier discounts in real-time.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="mt-12 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Steps (7 cols) */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Step 1: Product Selection */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center justify-between">
                  <span>1. Select Core Product or Uniform</span>
                  <span className="text-[11px] text-amber-700 font-mono">150+ options available</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {productOptions.map((opt) => (
                    <button
                      key={opt.name}
                      type="button"
                      onClick={() => {
                        setSelectedProduct(opt.name);
                        setBasePrice(opt.price);
                      }}
                      className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                        selectedProduct === opt.name
                          ? 'border-slate-900 bg-slate-900 text-white shadow-sm'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <p className="text-xs font-bold leading-tight">{opt.name}</p>
                        <p className={`text-[10px] mt-0.5 ${selectedProduct === opt.name ? 'text-slate-300' : 'text-slate-400'}`}>
                          {opt.category}
                        </p>
                      </div>
                      <span className={`text-xs font-bold font-mono ${selectedProduct === opt.name ? 'text-amber-400' : 'text-slate-900'}`}>
                        {formatPrice(opt.price)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Quantity Slider */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    2. Order Quantity: <span className="text-slate-900 font-mono text-sm">{quantity} units</span>
                  </label>
                  {discount > 0 && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
                      <TrendingDown className="w-3.5 h-3.5" />
                      {discount}% Bulk Discount Applied!
                    </span>
                  )}
                </div>

                <input
                  type="range"
                  min="10"
                  max="2000"
                  step="10"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                />

                <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                  {[25, 50, 100, 250, 500, 1000].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setQuantity(preset)}
                      className={`px-2 py-0.5 rounded-md font-mono transition-all ${
                        quantity === preset ? 'bg-slate-900 text-white font-bold' : 'hover:bg-slate-100'
                      }`}
                    >
                      {preset} pcs
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Branding Technique */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  3. In-House Branding Technique
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'embroidery', label: 'Tajima Embroidery', sub: 'German Thread' },
                    { id: 'screen', label: 'Silkscreen Print', sub: 'Water / Plastisol' },
                    { id: 'puff', label: '3D High Puff', sub: 'Raised Cut' },
                    { id: 'sublimation', label: 'Sublimation / DTF', sub: 'Full Color' },
                  ].map((tech) => (
                    <button
                      key={tech.id}
                      type="button"
                      onClick={() => setBrandingMethod(tech.id as any)}
                      className={`p-2.5 rounded-xl border text-center transition-all ${
                        brandingMethod === tech.id
                          ? 'border-slate-900 bg-slate-900 text-white'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <p className="text-xs font-bold">{tech.label}</p>
                      <p className={`text-[10px] mt-0.5 ${brandingMethod === tech.id ? 'text-slate-300' : 'text-slate-400'}`}>
                        {tech.sub}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Artwork Placement */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  4. Placement Positions
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Front Left Chest', 'Center Chest', 'Large Back Print', 'Sleeve Badge', 'Custom Neck Tag'].map((pos) => {
                    const active = printPositions.includes(pos);
                    return (
                      <button
                        key={pos}
                        type="button"
                        onClick={() => togglePosition(pos)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all flex items-center gap-1.5 ${
                          active
                            ? 'bg-slate-900 border-slate-900 text-white font-semibold'
                            : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        {active && <Check className="w-3.5 h-3.5 text-amber-400" />}
                        <span>{pos}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Summary Card (5 cols) */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-7 space-y-5 shadow-lg">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono uppercase text-slate-400">Order Estimate</span>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">
                  ESTIMATE READY
                </span>
              </div>

              {/* Specs List */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Product:</span>
                  <span className="font-semibold text-white text-right">{selectedProduct}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Volume:</span>
                  <span className="font-semibold text-white">{quantity} units</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Technique:</span>
                  <span className="font-semibold text-amber-400 capitalize">{brandingMethod}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Positions:</span>
                  <span className="font-semibold text-white">{printPositions.join(', ')}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-400 font-semibold pt-1 border-t border-slate-800">
                    <span>Volume Discount:</span>
                    <span>-{discount}% ({formatPrice(rawUnitPrice * (discount / 100) * quantity)})</span>
                  </div>
                )}
              </div>

              {/* Pricing Callout */}
              <div className="pt-3 border-t border-slate-800 space-y-1">
                <p className="text-[11px] text-slate-400">Unit Price:</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-amber-400 font-mono">
                    {formatPrice(discountedUnitPrice)}
                  </span>
                  {discount > 0 && (
                    <span className="text-xs line-through text-slate-500 font-mono">
                      {formatPrice(rawUnitPrice)}
                    </span>
                  )}
                  <span className="text-xs text-slate-400">/ pc</span>
                </div>

                <div className="pt-2">
                  <p className="text-[11px] text-slate-400">Total Order ({currentCurrency}):</p>
                  <p className="text-lg font-bold text-white font-mono">
                    {formatPrice(totalCostAED)}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={handleWhatsAppInstant}
                  className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-2 shadow"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Estimate to WhatsApp</span>
                </button>

                <button
                  onClick={() => onOpenQuoteModal('calculator', {
                    product: selectedProduct,
                    qty: quantity,
                    method: brandingMethod,
                    unitPrice: discountedUnitPrice,
                    total: totalCostAED,
                  })}
                  className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Formal RFQ (Supabase)</span>
                </button>
              </div>

              <div className="flex items-start gap-1.5 pt-1 text-[11px] text-slate-400">
                <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-slate-400" />
                <span>Includes free digital CAD proof and pre-production sample. Turnaround 3–5 days.</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

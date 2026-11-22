'use client';

import React, { useState } from 'react';
import { Currency } from '@/types';
import { CURRENCY_RATES } from '@/data/mockData';
import { 
  Calculator, 
  Sparkles, 
  Layers, 
  Check, 
  Send, 
  ArrowRight,
  TrendingDown,
  Info
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
  const [printPositions, setPrintPositions] = useState<string[]>(['Front Chest']);

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

  // Dynamic Volume Discount Calculation (Merchlist / Klothon model)
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
      `Hello Kraftwear Dubai!\nI used your Online Quote Calculator:\n- Product: ${selectedProduct}\n- Quantity: ${quantity} pcs\n- Branding: ${brandingMethod} (${printPositions.join(', ')})\n- Estimated Unit Price: ${formatPrice(discountedUnitPrice)}\n- Total Est: ${formatPrice(totalCostAED)}\n\nPlease provide official proforma invoice and sample lead time.`
    );
    window.open(`https://wa.me/971501234567?text=${text}`, '_blank');
  };

  return (
    <section id="quote-builder" className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      
      {/* Decorative gradient blur */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>INSTANT B2B COST CALCULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Transparent Pricing.{' '}
            <span className="text-amber-400">Zero Hidden Surcharges.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Configure your order specs, scale your quantity, and unlock wholesale volume tier discounts in real-time.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="mt-12 bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Steps (8 Columns) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Step 1: Product Selection */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-200 flex items-center justify-between">
                  <span>1. Select Core Product or Workwear</span>
                  <span className="text-xs text-amber-400 font-mono">150+ options available</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
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
                          ? 'border-amber-400 bg-amber-400/10 text-white shadow'
                          : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div>
                        <p className="text-xs font-bold leading-tight">{opt.name}</p>
                        <p className="text-[10px] text-slate-400 font-mono mt-0.5">{opt.category}</p>
                      </div>
                      <span className="text-xs font-bold font-mono text-amber-400">
                        {formatPrice(opt.price)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Quantity Slider & Bulk Tier */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-slate-200">
                    2. Order Quantity: <span className="text-amber-400 font-mono text-base">{quantity} units</span>
                  </label>
                  {discount > 0 && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
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
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />

                {/* Quick preset buttons */}
                <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                  {[25, 50, 100, 250, 500, 1000].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setQuantity(preset)}
                      className={`px-2.5 py-1 rounded-md font-mono transition-all ${
                        quantity === preset ? 'bg-amber-400 text-slate-950 font-bold' : 'hover:bg-slate-800'
                      }`}
                    >
                      {preset} pcs
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Branding & Embellishment */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-200">
                  3. In-House Branding Technique
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: 'embroidery', label: 'Tajima Embroidery', sub: 'German Thread', tag: '+7' },
                    { id: 'screen', label: 'Silkscreen Print', sub: 'Plastisol / Water', tag: '+4' },
                    { id: 'puff', label: '3D High Puff', sub: 'Raised Streetwear', tag: '+9' },
                    { id: 'sublimation', label: 'Sublimation / DTF', sub: 'Full Color Photo', tag: '+6' },
                  ].map((tech) => (
                    <button
                      key={tech.id}
                      type="button"
                      onClick={() => setBrandingMethod(tech.id as any)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        brandingMethod === tech.id
                          ? 'border-amber-400 bg-amber-400/10 text-white'
                          : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <p className="text-xs font-bold">{tech.label}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">{tech.sub}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Placement Positions */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-200">
                  4. Artwork Placement
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Front Left Chest', 'Center Chest', 'Large Back Print', 'Sleeve Emblem', 'Custom Neck Tag'].map((pos) => {
                    const active = printPositions.includes(pos);
                    return (
                      <button
                        key={pos}
                        type="button"
                        onClick={() => togglePosition(pos)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all flex items-center gap-1.5 ${
                          active
                            ? 'bg-slate-800 border-amber-400 text-amber-400 font-bold'
                            : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white'
                        }`}
                      >
                        {active && <Check className="w-3.5 h-3.5" />}
                        <span>{pos}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Summary Card (5 Columns) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono uppercase text-slate-400">Live Quote Summary</span>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">
                  ESTIMATE READY
                </span>
              </div>

              {/* Specs overview */}
              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Item:</span>
                  <span className="font-bold text-white text-right">{selectedProduct}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Volume:</span>
                  <span className="font-bold text-white">{quantity} units</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Technique:</span>
                  <span className="font-bold text-amber-400 capitalize">{brandingMethod}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Placements:</span>
                  <span className="font-bold text-white">{printPositions.join(', ')}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-400 font-semibold">
                    <span>Volume Tier Saving:</span>
                    <span>-{discount}% ({formatPrice(rawUnitPrice * (discount / 100) * quantity)})</span>
                  </div>
                )}
              </div>

              {/* Price Callout */}
              <div className="pt-4 border-t border-slate-800 space-y-1">
                <p className="text-xs text-slate-400">Estimated Unit Price:</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-amber-400">
                    {formatPrice(discountedUnitPrice)}
                  </span>
                  {discount > 0 && (
                    <span className="text-sm line-through text-slate-500 font-mono">
                      {formatPrice(rawUnitPrice)}
                    </span>
                  )}
                  <span className="text-xs text-slate-400">/ pc</span>
                </div>

                <div className="pt-3">
                  <p className="text-xs text-slate-400">Total Order Estimate ({currentCurrency}):</p>
                  <p className="text-2xl font-black text-white">
                    {formatPrice(totalCostAED)}
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleWhatsAppInstant}
                  className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
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
                  className="w-full py-3.5 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-white font-bold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Formal RFQ (Supabase)</span>
                </button>
              </div>

              {/* Notice */}
              <div className="flex items-start gap-2 pt-2 text-[11px] text-slate-500">
                <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>
                  Final proforma includes free digital CAD mockup & pre-production proof sample. Turnaround time: 3–6 business days in Dubai.
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}


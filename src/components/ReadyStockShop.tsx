'use client';

import React, { useState } from 'react';
import { Currency } from '@/types';
import { CURRENCY_RATES } from '@/data/mockData';
import { useCart } from '@/context/CartContext';
import { 
  ShoppingBag, 
  Check, 
  Star, 
  Zap, 
  Truck, 
  ShieldCheck, 
  CreditCard, 
  FileText, 
  Layers, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface ReadyStockShopProps {
  currentCurrency: Currency;
  onOpenQuoteModal: (category?: string, details?: any) => void;
}

interface EcomProduct {
  id: string;
  title: string;
  category: 'apparel' | 'workwear' | 'gifting' | 'kits';
  sku: string;
  samplePriceAED: number;
  wholesalePriceAED: number;
  stockCount: number;
  rating: number;
  reviewCount: number;
  image: string;
  fabric: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
  badge: string;
}

export default function ReadyStockShop({ currentCurrency, onOpenQuoteModal }: ReadyStockShopProps) {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'apparel' | 'workwear' | 'gifting' | 'kits'>('all');
  const [addedItemMap, setAddedItemMap] = useState<Record<string, boolean>>({});

  // Active selections per product
  const [selectedColorMap, setSelectedColorMap] = useState<Record<string, string>>({});
  const [selectedSizeMap, setSelectedSizeMap] = useState<Record<string, string>>({});

  const curr = CURRENCY_RATES[currentCurrency];
  const formatPrice = (aed: number) => {
    return `${curr.symbol} ${(aed * curr.rate).toFixed(0)}`;
  };

  const ecomProducts: EcomProduct[] = [
    {
      id: 'ecom-tee-280',
      title: 'Heavyweight Luxury Oversized Tee (280 GSM)',
      category: 'apparel',
      sku: 'KW-TEE-280-BLK',
      samplePriceAED: 38,
      wholesalePriceAED: 26,
      stockCount: 4250,
      rating: 4.9,
      reviewCount: 164,
      image: '/images/products/heavy-tee.jpg',
      fabric: '100% Combed Compact Cotton, Bio-Washed',
      colors: [
        { name: 'Onyx Black', hex: '#0f172a' },
        { name: 'Pure White', hex: '#f8fafc' },
        { name: 'Desert Camel', hex: '#78350f' },
        { name: 'Gulf Navy', hex: '#1e3a8a' },
      ],
      sizes: ['S', 'M', 'L', 'XL', '2XL'],
      badge: 'Bestseller • In Stock',
    },
    {
      id: 'ecom-polo-240',
      title: 'Executive Pique Corporate Polo (240 GSM)',
      category: 'apparel',
      sku: 'KW-POLO-240-NVY',
      samplePriceAED: 44,
      wholesalePriceAED: 32,
      stockCount: 2800,
      rating: 4.8,
      reviewCount: 92,
      image: '/images/products/executive-polo.jpg',
      fabric: 'Double-Lacoste Combed Pique with Anti-Curl Collar',
      colors: [
        { name: 'Midnight Navy', hex: '#1e293b' },
        { name: 'Crisp White', hex: '#ffffff' },
        { name: 'Slate Grey', hex: '#64748b' },
      ],
      sizes: ['S', 'M', 'L', 'XL', '2XL'],
      badge: 'Corporate Choice',
    },
    {
      id: 'ecom-hoodie-380',
      title: 'Brushed Heavyweight Fleece Hoodie (380 GSM)',
      category: 'apparel',
      sku: 'KW-HOD-380-BLK',
      samplePriceAED: 78,
      wholesalePriceAED: 58,
      stockCount: 1400,
      rating: 5.0,
      reviewCount: 118,
      image: '/images/products/fleece-hoodie.jpg',
      fabric: '380 GSM Cross-Grain Fleece, Double Aglet Hood',
      colors: [
        { name: 'Charcoal Black', hex: '#18181b' },
        { name: 'Heather Grey', hex: '#94a3b8' },
        { name: 'Earth Sand', hex: '#a8a29e' },
      ],
      sizes: ['M', 'L', 'XL', '2XL'],
      badge: 'Heavyweight Winter',
    },
    {
      id: 'ecom-fr-coverall',
      title: 'NFPA 2112 Certified FR Heavy Cotton Coverall',
      category: 'workwear',
      sku: 'KW-FR-240-ORG',
      samplePriceAED: 89,
      wholesalePriceAED: 69,
      stockCount: 3100,
      rating: 4.9,
      reviewCount: 88,
      image: '/images/products/fr-coverall.jpg',
      fabric: '240 GSM Flame-Resistant Twill with 3M Reflective',
      colors: [
        { name: 'High-Vis Orange', hex: '#ea580c' },
        { name: 'Industrial Navy', hex: '#1d4ed8' },
        { name: 'Petroleum Blue', hex: '#0e7490' },
      ],
      sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
      badge: 'NFPA & EN Certified',
    },
    {
      id: 'ecom-vip-swag',
      title: 'The "Dubai Elite" Executive VIP Onboarding Hamper',
      category: 'gifting',
      sku: 'KW-GIFT-VIP-01',
      samplePriceAED: 135,
      wholesalePriceAED: 105,
      stockCount: 850,
      rating: 5.0,
      reviewCount: 76,
      image: '/images/products/vip-swag-box.jpg',
      fabric: 'Rigid Velvet Box, Smart Tumbler, MagSafe & Journal',
      colors: [
        { name: 'Matte Obsidian', hex: '#09090b' },
        { name: 'Deep Royal', hex: '#1e3a8a' },
      ],
      sizes: ['Standard Kit'],
      badge: 'Ready to Gift',
    },
    {
      id: 'ecom-smart-tumbler',
      title: 'Smart LED LCD Temperature Vacuum Tumbler (500ml)',
      category: 'gifting',
      sku: 'KW-TUMB-500-BLK',
      samplePriceAED: 29,
      wholesalePriceAED: 18,
      stockCount: 5200,
      rating: 4.8,
      reviewCount: 204,
      image: '/images/products/smart-tumbler.jpg',
      fabric: 'Double-Wall Food-Grade 304 Stainless Steel (24h Cold)',
      colors: [
        { name: 'Matte Black', hex: '#18181b' },
        { name: 'Arctic White', hex: '#ffffff' },
        { name: 'Emirates Green', hex: '#064e3b' },
      ],
      sizes: ['500ml'],
      badge: '24h Cold • Smart Lid',
    },
    {
      id: 'ecom-powerbank',
      title: '10,000mAh Ultra-Slim Wireless MagSafe Power Bank',
      category: 'gifting',
      sku: 'KW-TECH-PB10K',
      samplePriceAED: 68,
      wholesalePriceAED: 49,
      stockCount: 1900,
      rating: 4.9,
      reviewCount: 65,
      image: '/images/products/wireless-powerbank.jpg',
      fabric: 'Anodized Aluminum with Magnetic 15W + 20W PD Type-C',
      colors: [
        { name: 'Space Titanium', hex: '#334155' },
        { name: 'Midnight', hex: '#0f172a' },
      ],
      sizes: ['10,000mAh'],
      badge: 'GITEX Tech Hit',
    },
    {
      id: 'ecom-swatch-ring',
      title: 'Master Fabric Swatch Ring & Panton Stitch Kit',
      category: 'kits',
      sku: 'KW-SWATCH-2026',
      samplePriceAED: 25,
      wholesalePriceAED: 15,
      stockCount: 650,
      rating: 5.0,
      reviewCount: 94,
      image: '/images/sectors/hospitality.jpg',
      fabric: 'Includes 45 Real Cut Swatches, FR Twills, Madeira Threads',
      colors: [
        { name: 'Full Archive', hex: '#f59e0b' },
      ],
      sizes: ['Complete 45-Piece Ring'],
      badge: 'Procurement Tool',
    },
  ];

  const filtered = ecomProducts.filter(
    p => selectedCategory === 'all' || p.category === selectedCategory
  );

  const handleAddToCart = (product: EcomProduct) => {
    const color = selectedColorMap[product.id] || product.colors[0].name;
    const size = selectedSizeMap[product.id] || product.sizes[0];

    addToCart({
      productId: product.id,
      title: product.title,
      category: product.category,
      priceAED: product.samplePriceAED,
      quantity: 1,
      color,
      size,
      image: product.image,
      isSample: true,
    });

    // Provide instant visual confirmation feedback
    setAddedItemMap(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItemMap(prev => ({ ...prev, [product.id]: false }));
    }, 2500);
  };

  return (
    <section id="ready-stock" className="scroll-mt-24 sm:scroll-mt-28 py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="reveal-on-scroll flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200/80">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-900 tracking-wider">
              <Zap className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
              <span>DIRECT IN-STOCK WHOLESALE & SAMPLE STORE</span>
              <span className="text-amber-300">|</span>
              <span className="font-mono text-[11px] text-amber-800">Dispatches in 24h</span>
            </div>
            
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-slate-900 tracking-tight">
              Ready-to-Ship Wholesale Inventory & Instant Samples
            </h2>
            
            <p className="text-slate-600 text-sm">
              Order physical pre-production test samples with next-day UAE delivery or unlock immediate bulk tier wholesale pricing directly from our Dubai & Ajman warehouses.
            </p>
          </div>

          {/* Quick Filter Categories (Touch-scrollable on mobile) */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 max-w-full">
            {[
              { id: 'all', label: 'All Ready Stock' },
              { id: 'apparel', label: 'Apparel Knits' },
              { id: 'workwear', label: 'Safety & FR' },
              { id: 'gifting', label: 'Swag & Tech' },
              { id: 'kits', label: 'Sample Rings' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap shrink-0 cursor-pointer chip-hover ${
                  selectedCategory === cat.id
                    ? 'bg-slate-950 text-white shadow-xs border border-slate-950'
                    : 'bg-slate-100/80 text-slate-700 hover:bg-slate-200/80 border border-slate-200/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* E-Commerce Product Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product, idx) => {
            const activeColor = selectedColorMap[product.id] || product.colors[0].name;
            const activeSize = selectedSizeMap[product.id] || product.sizes[0];
            const isAdded = addedItemMap[product.id];
            const staggerClass = `stagger-${(idx % 4) + 1}`;

            return (
              <div
                key={product.id}
                className={`group bg-[#fcfcfd] rounded-3xl border border-slate-200/90 hover:border-amber-400/80 hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between interactive-card spotlight-card card-tilt reveal-on-scroll ${staggerClass}`}
              >
                {/* Product Image Stage with Advanced Zoom & Hover Vignette */}
                <div className="relative h-64 w-full bg-slate-100 overflow-hidden img-zoom-stage">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    loading="lazy"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/95 backdrop-blur text-slate-900 border border-slate-200 shadow-2xs">
                      {product.badge}
                    </span>

                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500 text-white shadow-xs">
                      <Truck className="w-3 h-3" />
                      <span>24h Dispatch</span>
                    </span>
                  </div>

                  {/* Stock Quantity Ribbon */}
                  <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] text-white font-mono flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{product.stockCount.toLocaleString()} units in UAE warehouse</span>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  
                  {/* Reviews & Title */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star className="w-3.5 h-3.5 fill-amber-500" />
                        <span className="font-bold text-slate-800 text-[11px]">{product.rating}</span>
                        <span className="text-[10px] text-slate-400">({product.reviewCount} orders)</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase">
                        SKU: {product.sku}
                      </span>
                    </div>

                    <h3 className="text-sm font-semibold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-2 leading-snug">
                      {product.title}
                    </h3>

                    <p className="text-[11px] text-slate-500 line-clamp-1">
                      {product.fabric}
                    </p>
                  </div>

                  {/* Colorway Switcher */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-500 font-medium">Color:</span>
                      <span className="font-bold text-slate-800">{activeColor}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {product.colors.map(col => (
                        <button
                          key={col.name}
                          type="button"
                          onClick={() => setSelectedColorMap(prev => ({ ...prev, [product.id]: col.name }))}
                          title={col.name}
                          style={{ backgroundColor: col.hex }}
                          className={`w-5 h-5 rounded-full border transition-all ${
                            activeColor === col.name 
                              ? 'border-slate-900 scale-125 shadow-xs' 
                              : 'border-slate-300 hover:scale-110'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Size Selector */}
                  {product.sizes.length > 1 && (
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-500 font-medium">Size:</span>
                        <span className="font-bold text-slate-800">{activeSize}</span>
                      </div>

                      <div className="flex items-center gap-1 flex-wrap">
                        {product.sizes.map(sz => (
                          <button
                            key={sz}
                            type="button"
                            onClick={() => setSelectedSizeMap(prev => ({ ...prev, [product.id]: sz }))}
                            className={`px-2 py-0.5 rounded text-[10px] font-bold transition-colors ${
                              activeSize === sz
                                ? 'bg-slate-900 text-white'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                          >
                            {sz}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Dual E-commerce Pricing (Sample vs Bulk Tier) */}
                  <div className="pt-2 border-t border-slate-100 flex items-end justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-medium">Sample Unit</span>
                      <span className="text-base font-bold font-mono text-slate-900">
                        {formatPrice(product.samplePriceAED)}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] text-emerald-700 block uppercase font-bold">Wholesale (50+ pcs)</span>
                      <span className="text-xs font-bold font-mono text-emerald-600">
                        {formatPrice(product.wholesalePriceAED)}/pc
                      </span>
                    </div>
                  </div>

                  {/* E-Commerce Actions (Add Sample to Bag vs Bulk Quote) */}
                  <div className="pt-2 space-y-2">
                    <button
                      type="button"
                      onClick={() => handleAddToCart(product)}
                      className={`btn-luxury-dark w-full py-2.5 rounded-full text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'btn-shimmer bg-slate-950 hover:bg-slate-800 text-white'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added to Cart</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5 text-amber-400 icon-hover-bounce" />
                          <span>Order Sample ({formatPrice(product.samplePriceAED)})</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => onOpenQuoteModal(product.category, { product: product.title, color: activeColor })}
                      className="btn-luxury w-full py-1.5 rounded-full text-[11px] font-semibold text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-colors flex items-center justify-center gap-1 group/btn"
                    >
                      <span>Scale Bulk Order (50–50k pcs)</span>
                      <ArrowRight className="w-3 h-3 hover-arrow group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* E-Commerce Trust Badges Strip */}
        <div className="reveal-on-scroll mt-14 p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200 shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Same-Day UAE Dispatch</p>
              <p className="text-[11px] text-slate-500">Orders before 1:00 PM GST ship same day from Dubai.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200 shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Tabby & Tamara 0% EMI</p>
              <p className="text-[11px] text-slate-500">Split sample & order bills into 4 interest-free payments.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-200 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">100% Fit & Fabric Guarantee</p>
              <p className="text-[11px] text-slate-500">Hassle-free sample replacement on any sizing mismatch.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-200 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">FTA Tax Invoice Compliant</p>
              <p className="text-[11px] text-slate-500">Instant VAT tax invoice issued for corporate accounting.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

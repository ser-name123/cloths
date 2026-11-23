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
      title: 'Personalized Corporate & Event Polo (240 GSM)',
      category: 'apparel',
      sku: 'US81-POLO-240',
      samplePriceAED: 44,
      wholesalePriceAED: 32,
      stockCount: 4250,
      rating: 4.9,
      reviewCount: 164,
      image: '/images/efzee/hero-1.jpg',
      fabric: 'Combed Cotton Pique â€¢ Embroidery, 3D & DTF Ready',
      colors: [
        { name: 'Onyx Black', hex: '#0f172a' },
        { name: 'Pure White', hex: '#f8fafc' },
        { name: 'Desert Camel', hex: '#78350f' },
        { name: 'Gulf Navy', hex: '#1e3a8a' },
      ],
      sizes: ['S', 'M', 'L', 'XL', '2XL'],
      badge: 'Bestseller â€¢ In Stock',
    },
    {
      id: 'ecom-polo-240',
      title: 'Hospitality & F&B Service Uniform Set',
      category: 'apparel',
      sku: 'US81-HOSP-101',
      samplePriceAED: 65,
      wholesalePriceAED: 48,
      stockCount: 2800,
      rating: 4.8,
      reviewCount: 92,
      image: '/images/efzee/hospitality-1.png',
      fabric: 'Breathable Stain-Resistant Poly-Cotton Twill',
      colors: [
        { name: 'Midnight Navy', hex: '#1e293b' },
        { name: 'Crisp White', hex: '#ffffff' },
        { name: 'Slate Grey', hex: '#64748b' },
      ],
      sizes: ['S', 'M', 'L', 'XL', '2XL'],
      badge: 'Hospitality Choice',
    },
    {
      id: 'ecom-hoodie-380',
      title: 'Premium Winter Jacket (Fleece, Bomber & Waterproof)',
      category: 'apparel',
      sku: 'US81-WINT-380',
      samplePriceAED: 125,
      wholesalePriceAED: 89,
      stockCount: 1400,
      rating: 5.0,
      reviewCount: 118,
      image: '/images/efzee/feature-1.png',
      fabric: 'Weather-Resistant Shell & Warm Fleece Lining',
      colors: [
        { name: 'Desert Camel', hex: '#78350f' },
        { name: 'Charcoal Black', hex: '#18181b' },
        { name: 'Deep Navy', hex: '#1e3a8a' },
      ],
      sizes: ['M', 'L', 'XL', '2XL'],
      badge: 'New Collection',
    },
    {
      id: 'ecom-fr-coverall',
      title: 'Industrial Workwear & Safety Coverall',
      category: 'workwear',
      sku: 'US81-IND-240',
      samplePriceAED: 89,
      wholesalePriceAED: 69,
      stockCount: 3100,
      rating: 4.9,
      reviewCount: 88,
      image: '/images/efzee/industrial-1.png',
      fabric: 'Heavy-Duty Industrial Twill with High-Vis Reflective Tape',
      colors: [
        { name: 'High-Vis Orange', hex: '#ea580c' },
        { name: 'Industrial Navy', hex: '#1d4ed8' },
        { name: 'Petroleum Blue', hex: '#0e7490' },
      ],
      sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
      badge: 'Industrial Grade',
    },
    {
      id: 'ecom-vip-swag',
      title: 'Healthcare Antimicrobial Medical Scrubs & Lab Coat',
      category: 'workwear',
      sku: 'US81-HLTH-202',
      samplePriceAED: 62,
      wholesalePriceAED: 46,
      stockCount: 1850,
      rating: 5.0,
      reviewCount: 76,
      image: '/images/efzee/health-1.png',
      fabric: 'Breathable 4-Way Stretch Clinical Fabric',
      colors: [
        { name: 'Medical Teal', hex: '#0d9488' },
        { name: 'Royal Navy', hex: '#1e3a8a' },
      ],
      sizes: ['S', 'M', 'L', 'XL', '2XL'],
      badge: 'Healthcare Ready',
    },
    {
      id: 'ecom-smart-tumbler',
      title: 'Sublimation Sportswear & Team Jersey',
      category: 'apparel',
      sku: 'US81-SUB-500',
      samplePriceAED: 49,
      wholesalePriceAED: 34,
      stockCount: 5200,
      rating: 4.8,
      reviewCount: 204,
      image: '/images/efzee/sportswear-1.png',
      fabric: 'Moisture-Wicking DryFit with Full-Color Sublimation',
      colors: [
        { name: 'Custom Team Color', hex: '#18181b' },
        { name: 'Arctic White', hex: '#ffffff' },
        { name: 'Emirates Green', hex: '#064e3b' },
      ],
      sizes: ['S', 'M', 'L', 'XL', '2XL'],
      badge: 'Full Sublimation',
    },
    {
      id: 'ecom-powerbank',
      title: 'Complete School Uniform & PE Kit Program',
      category: 'kits',
      sku: 'US81-SCH-100',
      samplePriceAED: 75,
      wholesalePriceAED: 52,
      stockCount: 2900,
      rating: 4.9,
      reviewCount: 65,
      image: '/images/efzee/school-uniforms.jpg',
      fabric: 'Durable Cotton-Rich Shirting & Embroidered Crests',
      colors: [
        { name: 'Academy Navy', hex: '#1e3a8a' },
        { name: 'Crisp White', hex: '#f8fafc' },
      ],
      sizes: ['Junior', 'Senior', 'Custom'],
      badge: 'School Program',
    },
    {
      id: 'ecom-swatch-ring',
      title: 'Eco-Friendly Recycled Uniform Fabric Swatch Kit',
      category: 'kits',
      sku: 'US81-ECO-2026',
      samplePriceAED: 25,
      wholesalePriceAED: 15,
      stockCount: 650,
      rating: 5.0,
      reviewCount: 94,
      image: '/images/efzee/feature-2.png',
      fabric: 'Includes Recycled Fabrics, Twills, Pique & Embroidery Samples',
      colors: [
        { name: 'Full Archive', hex: '#E2B027' },
      ],
      sizes: ['Complete Swatch Kit'],
      badge: 'Eco-Friendly Options',
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
              <span>UNIFORM STUDIO 81 â€¢ READY STOCK &amp; SAMPLES</span>
              <span className="text-amber-300">|</span>
              <span className="font-mono text-[11px] text-amber-800">30,000+ Garments/Month</span>
            </div>
            
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-slate-900 tracking-tight">
              Ready-to-Ship Uniforms &amp; Instant Sample Store
            </h2>
            
            <p className="text-slate-600 text-sm">
              Order physical test samples or bulk corporate, hospitality, healthcare, industrial, and school uniforms directly from our Fashion Mart, Ajman showroom.
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
                      <span>Scale Bulk Order (50â€“50k pcs)</span>
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


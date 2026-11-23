'use client';

import React, { useState, useRef } from 'react';
import { Currency } from '@/types';
import { CURRENCY_RATES } from '@/data/mockData';
import GarmentMockup, {
  FabricFinish,
  FontStyleKey,
  GarmentShape,
  PlacementKey,
  SleeveLength,
  TechniqueKey,
  ViewSide,
} from './GarmentMockup';
import {
  Eye,
  Sparkles,
  Upload,
  UploadCloud,
  FileText,
  Trash2,
  Check,
  Leaf,
  SlidersHorizontal,
  MessageSquare,
  Layers,
  ShieldCheck,
  RotateCw,
  RotateCcw,
  Move,
} from 'lucide-react';

interface LiveCustomizerProps {
  currentCurrency: Currency;
  onOpenQuoteModal: (category?: string, details?: any) => void;
}

type SectorKey = 'corporate' | 'winter' | 'hospitality' | 'health' | 'industrial' | 'school';

interface StudioGarment {
  id: string;
  sector: SectorKey;
  shape: GarmentShape;
  name: string;
  fabricSpec: string;
  basePrice: number;
  moq: string;
  image: string;
}

export default function LiveCustomizer({ currentCurrency, onOpenQuoteModal }: LiveCustomizerProps) {
  const [selectedSector, setSelectedSector] = useState<SectorKey>('corporate');
  const [selectedGarmentId, setSelectedGarmentId] = useState<string>('corp-polo');
  const [viewSide, setViewSide] = useState<ViewSide>('front');
  const [selectedColor, setSelectedColor] = useState('#1e3a8a');
  const [accentColor, setAccentColor] = useState('#E2B027');
  const [sleeveLength, setSleeveLength] = useState<SleeveLength>('short');
  const [hasPocket, setHasPocket] = useState<boolean>(false);
  const [fabricFinish, setFabricFinish] = useState<FabricFinish>('pique');
  const [logoPosition, setLogoPosition] = useState<PlacementKey>('chest');
  const [technique, setTechnique] = useState<TechniqueKey>('embroidery');
  const [brandText, setBrandText] = useState('UNIFORM STUDIO');
  const [textColor, setTextColor] = useState('#ffffff');
  const [fontStyle, setFontStyle] = useState<FontStyleKey>('bold');
  const [uploadedLogo, setUploadedLogo] = useState<string | null>(null);
  const [logoFileName, setLogoFileName] = useState<string>('');
  const [brandingMode, setBrandingMode] = useState<'upload' | 'text'>('text');
  const [logoScale, setLogoScale] = useState<number>(100);
  const [logoBackdrop, setLogoBackdrop] = useState<'patch' | 'transparent'>('transparent');
  const [ecoFabric, setEcoFabric] = useState<boolean>(false);
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [quantityTier, setQuantityTier] = useState<number>(50);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const curr = CURRENCY_RATES[currentCurrency];

  const sectors: { id: SectorKey; label: string }[] = [
    { id: 'corporate', label: 'Corporate & Polos' },
    { id: 'winter', label: 'Winter Jackets' },
    { id: 'hospitality', label: 'Hospitality & F&B' },
    { id: 'health', label: 'Healthcare' },
    { id: 'industrial', label: 'Industrial' },
    { id: 'school', label: 'School & Sports' },
  ];

  const garments: StudioGarment[] = [
    {
      id: 'corp-polo',
      sector: 'corporate',
      shape: 'polo',
      name: 'Personalized Corporate Polo (240 GSM)',
      fabricSpec: 'Combed Cotton Pique • Anti-Curl Collar',
      basePrice: 44,
      moq: '20+ pcs',
      image: '/images/efzee/hero-1.jpg',
    },
    {
      id: 'corp-blazer',
      sector: 'corporate',
      shape: 'blazer',
      name: 'Executive Tailored Corporate Blazer',
      fabricSpec: 'Tropical Poly-Viscose • Breathable Lining',
      basePrice: 195,
      moq: '15+ pcs',
      image: '/images/efzee/hero-3.jpg',
    },
    {
      id: 'winter-jacket',
      sector: 'winter',
      shape: 'jacket',
      name: 'Premium Winter Jacket (Fleece / Bomber)',
      fabricSpec: 'Weather-Resistant Shell • Warm Fleece Lining',
      basePrice: 125,
      moq: '25+ pcs',
      image: '/images/efzee/feature-1.png',
    },
    {
      id: 'hosp-set',
      sector: 'hospitality',
      shape: 'hospitality',
      name: 'Hospitality, Delivery & F&B Uniform Set',
      fabricSpec: 'Stain-Resistant Poly-Cotton Twill',
      basePrice: 65,
      moq: '20+ pcs',
      image: '/images/efzee/hospitality-1.png',
    },
    {
      id: 'health-scrub',
      sector: 'health',
      shape: 'scrub',
      name: 'Healthcare Antimicrobial Scrub & Lab Coat',
      fabricSpec: '4-Way Stretch Clinical Antimicrobial Fabric',
      basePrice: 62,
      moq: '20+ pcs',
      image: '/images/efzee/health-1.png',
    },
    {
      id: 'ind-coverall',
      sector: 'industrial',
      shape: 'coverall',
      name: 'Industrial Workwear & Safety Coverall',
      fabricSpec: 'Heavy-Duty Twill • High-Vis Reflective Tape',
      basePrice: 89,
      moq: '30+ pcs',
      image: '/images/efzee/industrial-1.png',
    },
    {
      id: 'sch-sublimation',
      sector: 'school',
      shape: 'jersey',
      name: 'Sublimation Sportswear & School PE Kit',
      fabricSpec: 'Moisture-Wicking DryFit • Full Sublimation',
      basePrice: 49,
      moq: '20+ pcs',
      image: '/images/efzee/sportswear-1.png',
    },
    {
      id: 'sch-uniform',
      sector: 'school',
      shape: 'polo',
      name: 'Complete School Uniform Program',
      fabricSpec: 'Durable Cotton-Rich Shirting & Crests',
      basePrice: 75,
      moq: '50+ pcs',
      image: '/images/efzee/school-uniforms.jpg',
    },
  ];

  const sectorGarments = garments.filter((g) => g.sector === selectedSector);
  const currentItem = garments.find((g) => g.id === selectedGarmentId) || sectorGarments[0] || garments[0];

  const handleSectorChange = (sector: SectorKey) => {
    setSelectedSector(sector);
    const first = garments.find((g) => g.sector === sector);
    if (first) setSelectedGarmentId(first.id);
  };

  const handlePlacementChange = (pos: PlacementKey) => {
    setLogoPosition(pos);
    setDragOffset({ x: 0, y: 0 });
    setViewSide(pos === 'back' ? 'back' : 'front');
  };

  const handleResetStudio = () => {
    setSelectedColor('#1e3a8a');
    setAccentColor('#E2B027');
    setSleeveLength('short');
    setHasPocket(false);
    setFabricFinish('pique');
    setLogoPosition('chest');
    setViewSide('front');
    setTechnique('embroidery');
    setTextColor('#ffffff');
    setFontStyle('bold');
    setLogoScale(100);
    setLogoBackdrop('transparent');
    setEcoFabric(false);
    setDragOffset({ x: 0, y: 0 });
    setQuantityTier(50);
  };

  const colors = [
    { hex: '#1e3a8a', name: 'Corporate Navy' },
    { hex: '#0f172a', name: 'Midnight Black' },
    { hex: '#f8fafc', name: 'Crisp White' },
    { hex: '#78350f', name: 'Desert Camel' },
    { hex: '#064e3b', name: 'Emirates Green' },
    { hex: '#7f1d1d', name: 'Burgundy' },
    { hex: '#E2B027', name: 'Studio Gold' },
  ];

  const trimColors = [
    { hex: '#E2B027', name: 'Studio Gold' },
    { hex: '#f8fafc', name: 'Crisp White' },
    { hex: '#0f172a', name: 'Jet Black' },
    { hex: '#1e3a8a', name: 'Navy Trim' },
    { hex: '#991b1b', name: 'Crimson Trim' },
  ];

  const threadColors = [
    { hex: '#ffffff', name: 'White Thread' },
    { hex: '#E2B027', name: 'Gold Thread' },
    { hex: '#0f172a', name: 'Black Thread' },
    { hex: '#ef4444', name: 'Red Thread' },
    { hex: '#38bdf8', name: 'Sky Thread' },
  ];

  const techniques: { id: TechniqueKey; label: string; tag: string }[] = [
    { id: 'embroidery', label: 'Embroidery', tag: 'Colorfast Stitch' },
    { id: '3d-print', label: '3D Print', tag: 'Raised Relief' },
    { id: 'rubberized', label: 'Rubberized Print', tag: 'Matte Tactile' },
    { id: 'dtf', label: 'DTF Print', tag: 'Full Detail' },
    { id: 'sublimation', label: 'Sublimation', tag: 'All-Over Zero Fade' },
  ];

  const quantityTiers = [
    { qty: 20, discount: 0 },
    { qty: 50, discount: 0.08 },
    { qty: 100, discount: 0.15 },
    { qty: 250, discount: 0.22 },
    { qty: 500, discount: 0.28 },
  ];

  const activeTier = quantityTiers.find((t) => t.qty === quantityTier) || quantityTiers[1];
  const activeTech = techniques.find((t) => t.id === technique) || techniques[0];

  const rawUnitAED = currentItem.basePrice + (ecoFabric ? 6 : 0) + (sleeveLength === 'full' ? 8 : 0) + (hasPocket ? 3 : 0);
  const discountedUnitAED = rawUnitAED * (1 - activeTier.discount);
  const estimatedUnitPrice = Math.round(discountedUnitAED * curr.rate);
  const estimatedTotalPrice = Math.round(discountedUnitAED * quantityTier * curr.rate);

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (PNG, SVG, JPG, WEBP).');
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      setUploadedLogo(event.target?.result as string);
      setLogoFileName(file.name);
      setBrandingMode('upload');
    };
    reader.readAsDataURL(file);
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleWhatsAppShare = () => {
    const colorName = colors.find((c) => c.hex === selectedColor)?.name || selectedColor;
    const trimName = trimColors.find((c) => c.hex === accentColor)?.name || accentColor;
    const text = encodeURIComponent(
      `Hello Uniform Studio 81 (EFZEE Fashion)!\nI configured a custom uniform in your Studio:\n- Garment: ${currentItem.name}\n- Sleeve: ${sleeveLength} | Pocket: ${hasPocket ? 'Yes' : 'No'} | Finish: ${fabricFinish}\n- Body Color: ${colorName} | Trim: ${trimName}\n- Technique: ${activeTech.label}\n- Placement: ${logoPosition.toUpperCase()} (${viewSide} view)\n- Eco-Friendly: ${ecoFabric ? 'Yes' : 'No'}\n- Quantity: ${quantityTier} pcs (Est. ${curr.symbol} ${estimatedUnitPrice}/pc)\n- Brand Text/File: ${uploadedLogo ? logoFileName : brandText}\n\nPlease share sample & bulk quotation.`
    );
    window.open(`https://wa.me/971522954810?text=${text}`, '_blank');
  };

  return (
    <section
      id="customizer"
      className="scroll-mt-24 sm:scroll-mt-32 pt-16 pb-20 sm:pt-24 sm:pb-28 bg-[#f8f9fb] border-b border-slate-200/80"
    >
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-900 tracking-wider shadow-2xs">
            <Eye className="w-3.5 h-3.5 text-amber-600" />
            <span>UNIFORM STUDIO 81 • ADVANCED DRESS CONFIGURATOR</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Interactive Uniform &amp; Branding Studio
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Customize sleeves, pockets, fabric weave, body &amp; collar colors, drag your logo onto Front/Back views, and calculate instant bulk pricing.
          </p>
        </div>

        {/* Studio Box */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/50 space-y-6">

          {/* Top Bar: Sector Tabs + Reset */}
          <div className="flex items-center justify-between flex-wrap gap-3 pb-5 border-b border-slate-100">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 w-full lg:w-auto">
              {sectors.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => handleSectorChange(s.id)}
                  className={`px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedSector === s.id
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>30,000+ Garments/Month • Essay Group (Est. 1989)</span>
              </div>
              <button
                type="button"
                onClick={handleResetStudio}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-semibold transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Studio</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* Left Column: Interactive Garment Stage & Live Spec Sheet (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div
                className="relative w-full h-[420px] sm:h-[520px] rounded-2xl overflow-hidden border border-slate-200 flex items-center justify-center shadow-inner"
                style={{
                  backgroundColor: '#f8fafc',
                  backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              >
                {/* Top Left: Front / Back Switcher */}
                <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-1 bg-white/95 backdrop-blur p-1 rounded-full border border-slate-200 shadow-sm">
                  <button
                    type="button"
                    onClick={() => {
                      setViewSide('front');
                      if (logoPosition === 'back') handlePlacementChange('chest');
                    }}
                    className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                      viewSide === 'front' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Front View
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setViewSide('back');
                      handlePlacementChange('back');
                    }}
                    className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all flex items-center gap-1 cursor-pointer ${
                      viewSide === 'back' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <RotateCw className="w-3 h-3" />
                    <span>Back View</span>
                  </button>
                </div>

                {/* Top Right: Live Technique, Drag Hint & Eco Badges */}
                <div className="absolute top-3.5 right-3.5 flex items-center gap-2 z-20 flex-wrap justify-end">
                  <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 text-slate-600 border border-slate-200 text-[10px] font-medium shadow-2xs">
                    <Move className="w-3 h-3 text-amber-600" />
                    <span>Drag logo on garment</span>
                  </span>
                  {ecoFabric && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-bold shadow">
                      <Leaf className="w-3 h-3" />
                      <span>Eco Recycled</span>
                    </span>
                  )}
                  <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur text-slate-900 border border-slate-200 text-[10px] font-bold shadow-sm">
                    {activeTech.label} • {activeTech.tag}
                  </span>
                </div>

                {/* Real-time Interactive Garment Mockup */}
                <GarmentMockup
                  shape={currentItem.shape}
                  view={viewSide}
                  bodyColor={selectedColor}
                  accentColor={accentColor}
                  sleeveLength={sleeveLength}
                  hasPocket={hasPocket}
                  fabricFinish={fabricFinish}
                  placement={logoPosition}
                  technique={technique}
                  logoScale={logoScale}
                  logoBackdrop={logoBackdrop}
                  uploadedLogo={uploadedLogo}
                  brandText={brandText}
                  textColor={textColor}
                  fontStyle={fontStyle}
                  dragOffset={dragOffset}
                  onDragOffsetChange={setDragOffset}
                />

                {/* Bottom Left: Real Reference Thumbnail */}
                <div className="absolute bottom-3.5 left-3.5 z-20 hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur p-1.5 pr-3 rounded-2xl border border-slate-200 shadow-sm">
                  <img
                    src={currentItem.image}
                    alt={currentItem.name}
                    className="w-9 h-9 rounded-xl object-cover border border-slate-200"
                  />
                  <div className="text-left">
                    <p className="text-[9px] font-mono uppercase text-slate-400 leading-none">Real Reference</p>
                    <p className="text-[11px] font-bold text-slate-900 truncate max-w-[170px] mt-0.5">{currentItem.name}</p>
                  </div>
                </div>

                {/* Bottom Right: Price & Bulk Tier Pill */}
                <div className="absolute bottom-3.5 right-3.5 z-20 bg-slate-900/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold text-amber-400 shadow-sm">
                  {curr.symbol} {estimatedUnitPrice}/pc • Total {curr.symbol} {estimatedTotalPrice.toLocaleString()} ({quantityTier} pcs)
                </div>
              </div>

              {/* Live Spec Summary Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs">
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Garment Style</span>
                  <span className="font-semibold text-slate-800 capitalize">
                    {sleeveLength} Sleeve {hasPocket ? '+ Pocket' : ''}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Fabric Finish</span>
                  <span className="font-semibold text-slate-800 capitalize">
                    {ecoFabric ? 'Eco Recycled ' : ''}{fabricFinish}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Branding</span>
                  <span className="font-semibold text-slate-800">{activeTech.label}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Bulk Tier</span>
                  <span className="font-semibold text-emerald-700">
                    {quantityTier} pcs {activeTier.discount > 0 ? `(-${Math.round(activeTier.discount * 100)}%)` : '(Base)'}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Controls (5 cols) */}
            <div className="lg:col-span-5 space-y-4">

              {/* 1. Garment Selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-amber-600" />
                  <span>1. Choose Uniform / Garment</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {sectorGarments.map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => setSelectedGarmentId(g.id)}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all text-left cursor-pointer ${
                        currentItem.id === g.id
                          ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <p className="truncate">{g.name}</p>
                      <p className={`text-[10px] font-mono mt-0.5 ${currentItem.id === g.id ? 'text-amber-400' : 'text-slate-500'}`}>
                        from {curr.symbol} {(g.basePrice * curr.rate).toFixed(0)} • {g.moq}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Dress Tailoring: Sleeves, Pocket & Fabric Finish */}
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-bold uppercase text-slate-600">Sleeves:</span>
                    <div className="flex rounded-lg bg-white border border-slate-200 p-0.5 text-[11px] font-semibold">
                      <button
                        type="button"
                        onClick={() => setSleeveLength('short')}
                        className={`px-2.5 py-1 rounded-md cursor-pointer ${sleeveLength === 'short' ? 'bg-slate-900 text-white' : 'text-slate-600'}`}
                      >
                        Short
                      </button>
                      <button
                        type="button"
                        onClick={() => setSleeveLength('full')}
                        className={`px-2.5 py-1 rounded-md cursor-pointer ${sleeveLength === 'full' ? 'bg-slate-900 text-white' : 'text-slate-600'}`}
                      >
                        Full
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setHasPocket(!hasPocket)}
                    className={`px-2.5 py-1.5 rounded-lg border text-[11px] font-semibold cursor-pointer transition-all ${
                      hasPocket ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200'
                    }`}
                  >
                    {hasPocket ? '✓ Chest Pocket' : '+ Add Pocket'}
                  </button>
                </div>

                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[11px] font-bold uppercase text-slate-600">Fabric:</span>
                    {(['cotton', 'pique', 'twill', 'dryfit'] as const).map((f) => (
                      <button
                        key={f}
                        type="button"
                        onClick={() => setFabricFinish(f)}
                        className={`px-2 py-1 rounded-md text-[10.5px] font-semibold capitalize cursor-pointer ${
                          fabricFinish === f ? 'bg-amber-500 text-slate-950' : 'bg-white border border-slate-200 text-slate-600'
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setEcoFabric(!ecoFabric)}
                    className={`px-2.5 py-1 rounded-lg border text-[10.5px] font-semibold flex items-center gap-1 cursor-pointer ${
                      ecoFabric ? 'bg-emerald-50 border-emerald-400 text-emerald-800' : 'bg-white border-slate-200 text-slate-600'
                    }`}
                  >
                    <Leaf className={`w-3 h-3 ${ecoFabric ? 'text-emerald-600' : 'text-slate-400'}`} />
                    <span>Eco</span>
                  </button>
                </div>
              </div>

              {/* 3. Body & Collar/Trim Colors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block">
                    2. Dress Body Color
                  </label>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {colors.map((c) => (
                      <button
                        key={c.hex}
                        type="button"
                        onClick={() => setSelectedColor(c.hex)}
                        title={c.name}
                        style={{ backgroundColor: c.hex }}
                        className={`w-6 h-6 rounded-full border-2 transition-all cursor-pointer ${
                          selectedColor === c.hex ? 'border-slate-900 scale-120 shadow-sm' : 'border-slate-300 hover:scale-110'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block">
                    Collar / Trim Accent
                  </label>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {trimColors.map((tc) => (
                      <button
                        key={tc.hex}
                        type="button"
                        onClick={() => setAccentColor(tc.hex)}
                        title={tc.name}
                        style={{ backgroundColor: tc.hex }}
                        className={`w-6 h-6 rounded-full border-2 transition-all cursor-pointer ${
                          accentColor === tc.hex ? 'border-slate-900 scale-120 shadow-sm' : 'border-slate-300 hover:scale-110'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* 4. Brand Logo Upload / Monogram + Font & Thread Color */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    3. Logo / Monogram
                  </label>
                  {uploadedLogo && (
                    <button
                      type="button"
                      onClick={() => {
                        setUploadedLogo(null);
                        setLogoFileName('');
                      }}
                      className="text-[11px] text-red-500 hover:text-red-700 font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Remove</span>
                    </button>
                  )}
                </div>

                <div className="flex rounded-xl bg-slate-100 p-1 gap-1">
                  <button
                    type="button"
                    onClick={() => setBrandingMode('upload')}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      brandingMode === 'upload' ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Upload className="w-3.5 h-3.5 text-amber-600" />
                    <span>Upload Logo</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setBrandingMode('text')}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      brandingMode === 'text' ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5 text-slate-500" />
                    <span>Type Monogram</span>
                  </button>
                </div>

                {brandingMode === 'upload' ? (
                  <div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/png, image/jpeg, image/svg+xml, image/webp"
                      onChange={handleLogoUpload}
                      className="hidden"
                    />
                    {uploadedLogo ? (
                      <div className="p-2 rounded-xl border border-emerald-300 bg-emerald-50/40 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <img src={uploadedLogo} alt="Logo preview" className="w-8 h-8 rounded-lg bg-white border border-slate-200 p-1 object-contain" />
                          <p className="text-xs font-bold text-slate-900 truncate max-w-[160px] flex items-center gap-1">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{logoFileName || 'Brand Logo'}</span>
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-bold text-slate-700 cursor-pointer"
                        >
                          Change
                        </button>
                      </div>
                    ) : (
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={handleDrop}
                        className="border-2 border-dashed border-slate-300 hover:border-amber-500 bg-slate-50/70 hover:bg-amber-50/20 rounded-xl p-2.5 text-center transition-all cursor-pointer group"
                      >
                        <UploadCloud className="w-4 h-4 text-amber-600 mx-auto mb-0.5 group-hover:scale-110 transition-transform" />
                        <p className="text-[11px] font-bold text-slate-800">Click or drag &amp; drop PNG / SVG / JPG</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-2">
                    <input
                      type="text"
                      maxLength={28}
                      value={brandText}
                      onChange={(e) => setBrandText(e.target.value)}
                      placeholder="Type company name or monogram..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-400"
                    />
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-1">
                        {threadColors.map((tc) => (
                          <button
                            key={tc.hex}
                            type="button"
                            onClick={() => setTextColor(tc.hex)}
                            title={tc.name}
                            style={{ backgroundColor: tc.hex }}
                            className={`w-5 h-5 rounded-full border-2 cursor-pointer ${
                              textColor === tc.hex ? 'border-slate-900 scale-115' : 'border-slate-300'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="flex rounded-lg bg-slate-100 p-0.5 text-[10px] font-bold">
                        {(['bold', 'sans', 'serif', 'mono'] as const).map((fs) => (
                          <button
                            key={fs}
                            type="button"
                            onClick={() => setFontStyle(fs)}
                            className={`px-2 py-0.5 rounded-md capitalize cursor-pointer ${
                              fontStyle === fs ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500'
                            }`}
                          >
                            {fs}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Logo Size & Style Controls */}
                <div className="flex items-center justify-between gap-3 pt-0.5">
                  <div className="flex-1 flex items-center gap-2">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <input
                      type="range"
                      min={70}
                      max={135}
                      value={logoScale}
                      onChange={(e) => setLogoScale(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                      aria-label="Logo size"
                    />
                    <span className="text-[10px] font-mono text-slate-500 w-9 text-right">{logoScale}%</span>
                  </div>
                  <div className="flex rounded-lg bg-slate-100 p-0.5 text-[10px] font-bold">
                    <button
                      type="button"
                      onClick={() => setLogoBackdrop('transparent')}
                      className={`px-2 py-1 rounded-md cursor-pointer ${logoBackdrop === 'transparent' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500'}`}
                    >
                      Direct
                    </button>
                    <button
                      type="button"
                      onClick={() => setLogoBackdrop('patch')}
                      className={`px-2 py-1 rounded-md cursor-pointer ${logoBackdrop === 'patch' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500'}`}
                    >
                      Badge
                    </button>
                  </div>
                </div>
              </div>

              {/* 5. Branding Technique & Placement */}
              <div className="space-y-2">
                <div className="flex flex-wrap gap-1.5">
                  {techniques.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTechnique(t.id)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                        technique === t.id ? 'bg-slate-900 text-white shadow-2xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-4 gap-1.5">
                  {([
                    { id: 'chest', label: 'Left Chest' },
                    { id: 'center', label: 'Center' },
                    { id: 'sleeve', label: 'Sleeve' },
                    { id: 'back', label: 'Full Back' },
                  ] as const).map((pos) => (
                    <button
                      key={pos.id}
                      type="button"
                      onClick={() => handlePlacementChange(pos.id)}
                      className={`px-2 py-1.5 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                        logoPosition === pos.id ? 'bg-amber-500 text-slate-950 shadow-2xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {pos.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 6. Bulk Quantity Tier */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 flex items-center justify-between">
                  <span>4. Quantity Tier</span>
                  <span className="text-emerald-700 font-mono">
                    {activeTier.discount > 0 ? `${Math.round(activeTier.discount * 100)}% Bulk Savings` : 'Standard Tier'}
                  </span>
                </label>
                <div className="grid grid-cols-5 gap-1.5">
                  {quantityTiers.map((t) => (
                    <button
                      key={t.qty}
                      type="button"
                      onClick={() => setQuantityTier(t.qty)}
                      className={`py-1.5 rounded-lg text-[11px] font-bold font-mono cursor-pointer transition-all ${
                        quantityTier === t.qty
                          ? 'bg-slate-900 text-amber-400 shadow-2xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {t.qty}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={() =>
                    onOpenQuoteModal('studio-sample', {
                      garment: currentItem.name,
                      sector: selectedSector,
                      sleeveLength,
                      hasPocket,
                      fabricFinish,
                      color: selectedColor,
                      trimColor: accentColor,
                      technique: activeTech.label,
                      placement: logoPosition,
                      ecoFabric,
                      quantity: quantityTier,
                      logoUploaded: !!uploadedLogo,
                      logoFileName,
                      brandText,
                    })
                  }
                  className="btn-luxury-dark py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Request Sample Quote</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppShare}
                  className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-slate-950" />
                  <span>WhatsApp This Spec</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

'use client';

import React, { useState, useRef } from 'react';
import { Currency } from '@/types';
import { CURRENCY_RATES } from '@/data/mockData';
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
} from 'lucide-react';

interface LiveCustomizerProps {
  currentCurrency: Currency;
  onOpenQuoteModal: (category?: string, details?: any) => void;
}

type SectorKey = 'corporate' | 'winter' | 'hospitality' | 'health' | 'industrial' | 'school';
type TechniqueKey = 'embroidery' | '3d-print' | 'rubberized' | 'dtf' | 'sublimation';
type PlacementKey = 'chest' | 'center' | 'sleeve' | 'back';

interface StudioGarment {
  id: string;
  sector: SectorKey;
  name: string;
  fabricSpec: string;
  basePrice: number;
  moq: string;
  image: string;
}

export default function LiveCustomizer({ currentCurrency, onOpenQuoteModal }: LiveCustomizerProps) {
  const [selectedSector, setSelectedSector] = useState<SectorKey>('corporate');
  const [selectedGarmentId, setSelectedGarmentId] = useState<string>('corp-polo');
  const [selectedColor, setSelectedColor] = useState('#0f172a');
  const [logoPosition, setLogoPosition] = useState<PlacementKey>('chest');
  const [technique, setTechnique] = useState<TechniqueKey>('embroidery');
  const [brandText, setBrandText] = useState('YOUR LOGO HERE');
  const [uploadedLogo, setUploadedLogo] = useState<string | null>(null);
  const [logoFileName, setLogoFileName] = useState<string>('');
  const [brandingMode, setBrandingMode] = useState<'upload' | 'text'>('upload');
  const [logoScale, setLogoScale] = useState<number>(100);
  const [logoBackdrop, setLogoBackdrop] = useState<'patch' | 'transparent'>('patch');
  const [ecoFabric, setEcoFabric] = useState<boolean>(false);

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
      name: 'Personalized Corporate Polo (240 GSM)',
      fabricSpec: 'Combed Cotton Pique • Anti-Curl Collar',
      basePrice: 44,
      moq: '20+ pcs',
      image: '/images/efzee/hero-1.jpg',
    },
    {
      id: 'corp-blazer',
      sector: 'corporate',
      name: 'Executive Tailored Corporate Blazer',
      fabricSpec: 'Tropical Poly-Viscose • Breathable Lining',
      basePrice: 195,
      moq: '15+ pcs',
      image: '/images/efzee/hero-3.jpg',
    },
    {
      id: 'winter-jacket',
      sector: 'winter',
      name: 'Premium Winter Jacket (Fleece / Bomber)',
      fabricSpec: 'Weather-Resistant Shell • Warm Fleece Lining',
      basePrice: 125,
      moq: '25+ pcs',
      image: '/images/efzee/feature-1.png',
    },
    {
      id: 'hosp-set',
      sector: 'hospitality',
      name: 'Hospitality, Delivery & F&B Uniform Set',
      fabricSpec: 'Stain-Resistant Poly-Cotton Twill',
      basePrice: 65,
      moq: '20+ pcs',
      image: '/images/efzee/hospitality-1.png',
    },
    {
      id: 'health-scrub',
      sector: 'health',
      name: 'Healthcare Antimicrobial Scrub & Lab Coat',
      fabricSpec: '4-Way Stretch Clinical Antimicrobial Fabric',
      basePrice: 62,
      moq: '20+ pcs',
      image: '/images/efzee/health-1.png',
    },
    {
      id: 'ind-coverall',
      sector: 'industrial',
      name: 'Industrial Workwear & Safety Coverall',
      fabricSpec: 'Heavy-Duty Twill • High-Vis Reflective Tape',
      basePrice: 89,
      moq: '30+ pcs',
      image: '/images/efzee/industrial-1.png',
    },
    {
      id: 'sch-sublimation',
      sector: 'school',
      name: 'Sublimation Sportswear & School PE Kit',
      fabricSpec: 'Moisture-Wicking DryFit • Full Sublimation',
      basePrice: 49,
      moq: '20+ pcs',
      image: '/images/efzee/sportswear-1.png',
    },
    {
      id: 'sch-uniform',
      sector: 'school',
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

  const colors = [
    { hex: '#0f172a', name: 'Midnight Black' },
    { hex: '#f8fafc', name: 'Crisp White' },
    { hex: '#1e3a8a', name: 'Corporate Navy' },
    { hex: '#78350f', name: 'Desert Camel' },
    { hex: '#064e3b', name: 'Emirates Green' },
    { hex: '#7f1d1d', name: 'Burgundy' },
    { hex: '#E2B027', name: 'Studio Gold' },
  ];

  const techniques: { id: TechniqueKey; label: string; tag: string }[] = [
    { id: 'embroidery', label: 'Embroidery', tag: 'Colorfast Stitch' },
    { id: '3d-print', label: '3D Print', tag: 'Raised Relief' },
    { id: 'rubberized', label: 'Rubberized Print', tag: 'Matte Tactile' },
    { id: 'dtf', label: 'DTF Print', tag: 'Full Detail' },
    { id: 'sublimation', label: 'Sublimation', tag: 'All-Over Zero Fade' },
  ];

  const activeTech = techniques.find((t) => t.id === technique) || techniques[0];

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

  const estimatedUnitPrice = Math.round((currentItem.basePrice + (ecoFabric ? 6 : 0)) * curr.rate);

  const handleWhatsAppShare = () => {
    const colorName = colors.find((c) => c.hex === selectedColor)?.name || selectedColor;
    const text = encodeURIComponent(
      `Hello Uniform Studio 81 (EFZEE Fashion)!\nI configured a custom uniform in your Studio:\n- Garment: ${currentItem.name}\n- Colorway: ${colorName}\n- Technique: ${activeTech.label}\n- Placement: ${logoPosition.toUpperCase()}\n- Fabric: ${ecoFabric ? 'Eco-Friendly Recycled' : 'Standard Performance'}\n- Brand Text/File: ${uploadedLogo ? logoFileName : brandText}\n\nPlease share sample & bulk quotation.`
    );
    window.open(`https://wa.me/971522954810?text=${text}`, '_blank');
  };

  const placementPositionClass =
    logoPosition === 'chest'
      ? 'top-16 left-10 sm:top-20 sm:left-16'
      : logoPosition === 'center'
        ? 'top-28 sm:top-36 left-1/2 -translate-x-1/2'
        : logoPosition === 'sleeve'
          ? 'top-36 right-8 sm:top-44 sm:right-14'
          : 'top-14 sm:top-20 left-1/2 -translate-x-1/2';

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
            <span>UNIFORM STUDIO 81 • ADVANCED BRANDING STUDIO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Interactive Uniform &amp; Branding Studio
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Test your logo across corporate wear, winter jackets, hospitality, healthcare, industrial, and school uniforms using 3D print, rubberized print, embroidery, DTF, and sublimation.
          </p>
        </div>

        {/* Studio Box */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/50 space-y-7">

          {/* Top Bar: Sector Tabs */}
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

            <div className="hidden sm:flex items-center gap-2 text-[11px] font-medium text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>30,000+ Garments/Month • Essay Group (Est. 1989)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* Left Column: Interactive Visual Canvas & Live Spec Sheet (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative w-full h-[360px] sm:h-[460px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center shadow-inner group">
                <img
                  src={currentItem.image}
                  alt={currentItem.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = '/images/efzee/hero-1.jpg';
                  }}
                />

                {/* Subtle garment color tint layer */}
                <div
                  className="absolute inset-0 mix-blend-color opacity-25 pointer-events-none transition-colors duration-500"
                  style={{ backgroundColor: selectedColor }}
                />

                {/* Top Right Live Technique & Eco Badges */}
                <div className="absolute top-3.5 right-3.5 flex items-center gap-2 z-10">
                  {ecoFabric && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-bold shadow">
                      <Leaf className="w-3 h-3" />
                      <span>Eco Recycled</span>
                    </span>
                  )}
                  <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur text-slate-900 border border-slate-200 text-[10px] font-bold shadow">
                    {activeTech.label} • {activeTech.tag}
                  </span>
                </div>

                {/* Live Logo / Monogram Simulation */}
                <div
                  className={`absolute transition-all duration-300 z-10 ${placementPositionClass}`}
                  style={{ transform: `scale(${logoScale / 100})` }}
                >
                  {uploadedLogo ? (
                    <div
                      className={`relative p-2.5 sm:p-3 rounded-2xl flex flex-col items-center max-w-[150px] sm:max-w-[190px] transition-all ${
                        logoBackdrop === 'patch'
                          ? 'bg-white/95 backdrop-blur-md border border-slate-300 shadow-2xl'
                          : 'bg-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)]'
                      }`}
                    >
                      <img
                        src={uploadedLogo}
                        alt="Uploaded Brand Logo"
                        className="max-h-14 sm:max-h-18 w-auto object-contain"
                      />
                      {logoBackdrop === 'patch' && (
                        <span className="text-[8.5px] font-mono font-bold text-slate-700 uppercase mt-1 px-1.5 py-0.5 rounded bg-slate-100 tracking-wider">
                          {activeTech.label}
                        </span>
                      )}
                    </div>
                  ) : (
                    <div
                      className={`p-3 sm:p-3.5 rounded-xl text-center max-w-[160px] sm:max-w-[190px] transition-all ${
                        logoBackdrop === 'patch'
                          ? 'bg-white/95 backdrop-blur-md border border-slate-300 shadow-xl text-slate-900'
                          : 'bg-slate-900/50 backdrop-blur-xs border border-white/30 text-white shadow-lg'
                      }`}
                    >
                      <p className="text-xs sm:text-sm font-bold tracking-wider uppercase truncate">
                        {brandText || 'YOUR LOGO'}
                      </p>
                      <p className={`text-[9px] font-mono uppercase mt-0.5 ${logoBackdrop === 'patch' ? 'text-slate-500' : 'text-amber-300'}`}>
                        {activeTech.label}
                      </p>
                    </div>
                  )}
                </div>

                {/* Bottom Status Bar */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 flex-wrap">
                  <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 text-[10.5px] font-semibold text-slate-900 shadow-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{currentItem.name}</span>
                  </div>
                  <div className="bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10.5px] font-mono font-bold text-amber-400 shadow-sm">
                    Est. {curr.symbol} {estimatedUnitPrice} / pc • MOQ {currentItem.moq}
                  </div>
                </div>
              </div>

              {/* Live Spec Summary Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs">
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Fabric Spec</span>
                  <span className="font-semibold text-slate-800 line-clamp-1">
                    {ecoFabric ? 'Eco-Friendly Recycled' : currentItem.fabricSpec}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Branding</span>
                  <span className="font-semibold text-slate-800">{activeTech.label}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Placement</span>
                  <span className="font-semibold text-slate-800 capitalize">{logoPosition} ({logoScale}%)</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Showroom</span>
                  <span className="font-semibold text-slate-800">Fashion Mart, Ajman</span>
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

              {/* 2. Colorway + Eco-Friendly Toggle */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                    2. Colorway
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
                          selectedColor === c.hex ? 'border-slate-900 scale-125 shadow-sm' : 'border-slate-300 hover:scale-110'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setEcoFabric(!ecoFabric)}
                  className={`px-3 py-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shrink-0 ${
                    ecoFabric
                      ? 'bg-emerald-50 border-emerald-400 text-emerald-800 shadow-2xs'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <Leaf className={`w-3.5 h-3.5 ${ecoFabric ? 'text-emerald-600' : 'text-slate-400'}`} />
                  <span>Eco-Friendly Fabric</span>
                </button>
              </div>

              {/* 3. Brand Logo Upload / Monogram */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <span>3. Logo / Artwork</span>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      PNG / SVG / JPG
                    </span>
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
                      <div className="p-2.5 rounded-xl border border-emerald-300 bg-emerald-50/40 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <img src={uploadedLogo} alt="Logo preview" className="w-9 h-9 rounded-lg bg-white border border-slate-200 p-1 object-contain" />
                          <div className="text-xs">
                            <p className="font-bold text-slate-900 truncate max-w-[160px] flex items-center gap-1">
                              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span>{logoFileName || 'Brand Logo'}</span>
                            </p>
                          </div>
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
                        className="border-2 border-dashed border-slate-300 hover:border-amber-500 bg-slate-50/70 hover:bg-amber-50/20 rounded-xl p-3.5 text-center transition-all cursor-pointer group"
                      >
                        <UploadCloud className="w-5 h-5 text-amber-600 mx-auto mb-1 group-hover:scale-110 transition-transform" />
                        <p className="text-xs font-bold text-slate-800">Click or drag &amp; drop logo</p>
                        <p className="text-[10px] text-slate-400">PNG, SVG, or JPG (max 10MB)</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <input
                    type="text"
                    maxLength={28}
                    value={brandText}
                    onChange={(e) => setBrandText(e.target.value)}
                    placeholder="Type company name or monogram..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-400"
                  />
                )}

                {/* Logo Size & Style Controls */}
                <div className="flex items-center justify-between gap-3 pt-1">
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
                      onClick={() => setLogoBackdrop('patch')}
                      className={`px-2 py-1 rounded-md cursor-pointer ${logoBackdrop === 'patch' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500'}`}
                    >
                      Badge
                    </button>
                    <button
                      type="button"
                      onClick={() => setLogoBackdrop('transparent')}
                      className={`px-2 py-1 rounded-md cursor-pointer ${logoBackdrop === 'transparent' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500'}`}
                    >
                      Direct
                    </button>
                  </div>
                </div>
              </div>

              {/* 4. Branding Technique (All 5 EFZEE Techniques) */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                  4. Branding Technique
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {techniques.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTechnique(t.id)}
                      className={`px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                        technique === t.id
                          ? 'bg-slate-900 text-white shadow-2xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 5. Placement */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                  5. Logo Placement
                </label>
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
                      onClick={() => setLogoPosition(pos.id)}
                      className={`px-2 py-1.5 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                        logoPosition === pos.id
                          ? 'bg-amber-500 text-slate-950 shadow-2xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {pos.label}
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
                      color: selectedColor,
                      technique: activeTech.label,
                      placement: logoPosition,
                      ecoFabric,
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

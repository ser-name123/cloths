'use client';

import React, { useState, useRef } from 'react';
import { Currency } from '@/types';
import { CURRENCY_RATES } from '@/data/mockData';
import { 
  Eye, 
  Sparkles, 
  Palette, 
  Layers, 
  Check, 
  ShieldCheck,
  ArrowRight,
  Upload,
  UploadCloud,
  FileText,
  Trash2,
  Image as ImageIcon
} from 'lucide-react';

interface LiveCustomizerProps {
  currentCurrency: Currency;
  onOpenQuoteModal: (category?: string, details?: any) => void;
}

export default function LiveCustomizer({ currentCurrency, onOpenQuoteModal }: LiveCustomizerProps) {
  const [selectedGarment, setSelectedGarment] = useState<'tee' | 'hoodie' | 'polo' | 'coverall' | 'tumbler'>('tee');
  const [selectedColor, setSelectedColor] = useState('#0f172a');
  const [logoPosition, setLogoPosition] = useState<'chest' | 'center' | 'back'>('chest');
  const [technique, setTechnique] = useState<'embroidery' | 'puff' | 'screen' | 'laser'>('embroidery');
  const [brandText, setBrandText] = useState('YOUR LOGO HERE');
  const [uploadedLogo, setUploadedLogo] = useState<string | null>(null);
  const [logoFileName, setLogoFileName] = useState<string>('');
  const [brandingMode, setBrandingMode] = useState<'upload' | 'text'>('upload');

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const curr = CURRENCY_RATES[currentCurrency];

  const garments = [
    { id: 'tee', name: 'Oversized Streetwear Tee (280 GSM)', basePrice: 38, image: '/images/products/heavy-tee.jpg' },
    { id: 'hoodie', name: 'Heavyweight Fleece Hoodie (380 GSM)', basePrice: 78, image: '/images/products/fleece-hoodie.jpg' },
    { id: 'polo', name: 'Executive Pique Polo', basePrice: 44, image: '/images/products/executive-polo.jpg' },
    { id: 'coverall', name: 'FR Industrial Safety Coverall', basePrice: 89, image: '/images/products/fr-coverall.jpg' },
    { id: 'tumbler', name: 'Smart Temperature Tumbler', basePrice: 29, image: '/images/products/smart-tumbler.jpg' },
  ] as const;

  const currentItem = garments.find(g => g.id === selectedGarment) || garments[0];

  const colors = [
    { hex: '#0f172a', name: 'Phantom Black' },
    { hex: '#f8fafc', name: 'Pure White' },
    { hex: '#1e3a8a', name: 'Deep Royal' },
    { hex: '#78350f', name: 'Desert Camel' },
    { hex: '#064e3b', name: 'Emirates Green' },
    { hex: '#7f1d1d', name: 'Bordeaux Red' },
  ];

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

  return (
    <section 
      id="customizer" 
      className="scroll-mt-24 sm:scroll-mt-32 pt-20 pb-20 sm:pt-28 sm:pb-28 lg:pt-36 lg:pb-32 bg-[#f8f9fb] border-b border-slate-200/80"
    >
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header with Generous Breathing Space */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-900 tracking-wider shadow-2xs">
            <Eye className="w-3.5 h-3.5 text-amber-600" />
            <span>THE MERCHLIST-INSPIRED STUDIO</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-900 tracking-tight">
            Interactive 3D Styling Studio
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Upload your vector or PNG brand logo, test garment colorways, and visualize embroidery vs high-definition printing before confirming bulk production.
          </p>
        </div>

        {/* Studio Box */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl shadow-slate-200/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual Canvas (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-lg h-84 sm:h-[420px] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 flex items-center justify-center shadow-inner group">
                <img
                  src={currentItem.image}
                  alt={currentItem.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = '/images/products/fr-coverall.jpg';
                  }}
                />

                {/* Subtle garment color tint layer */}
                <div 
                  className="absolute inset-0 mix-blend-color opacity-30 pointer-events-none transition-colors duration-500" 
                  style={{ backgroundColor: selectedColor }} 
                />
                
                {/* Visual Stamp / Logo Simulation */}
                <div className={`absolute transition-all duration-300 z-10 ${
                  logoPosition === 'chest' 
                    ? 'top-14 left-10 sm:top-18 sm:left-14' 
                    : logoPosition === 'center' 
                    ? 'top-24 sm:top-32 left-1/2 -translate-x-1/2' 
                    : 'top-12 sm:top-16 left-1/2 -translate-x-1/2 scale-110'
                }`}>
                  {uploadedLogo ? (
                    <div className="relative p-2.5 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-300 shadow-2xl flex flex-col items-center max-w-[140px] sm:max-w-[180px] group/stamp transition-all hover:scale-105">
                      <img 
                        src={uploadedLogo} 
                        alt="Uploaded Brand Logo" 
                        className="max-h-12 sm:max-h-16 w-auto object-contain drop-shadow" 
                      />
                      <span className="text-[8.5px] font-mono font-bold text-slate-700 uppercase mt-1 px-1.5 py-0.5 rounded bg-slate-100 tracking-wider">
                        {technique === 'embroidery' ? '🧵 Tajima Embroidery' : technique === 'puff' ? '💨 3D Puff' : '🎨 High-Res Print'}
                      </span>
                    </div>
                  ) : (
                    <div className="p-3 sm:p-3.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-300 shadow-xl text-center max-w-[150px] sm:max-w-[180px]">
                      <p className="text-xs sm:text-sm font-bold text-slate-900 tracking-wider uppercase truncate">
                        {brandText || 'YOUR LOGO'}
                      </p>
                      <p className="text-[9px] font-mono text-slate-500 uppercase mt-0.5">
                        {technique === 'embroidery' ? '🧵 Tajima Embroidery' : technique === 'puff' ? '💨 3D High Puff' : '🎨 Silkscreen Print'}
                      </p>
                    </div>
                  )}
                </div>

                {/* Corner Status Pill */}
                <div className="absolute bottom-3.5 left-3.5 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-[10.5px] font-semibold text-white shadow-2xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Specimen: {currentItem.name}</span>
                </div>
              </div>
            </div>

            {/* Controls (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              
              {/* 1. Garment Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  1. Choose Garment
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {garments.map((g) => (
                    <button
                      key={g.id}
                      onClick={() => setSelectedGarment(g.id)}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all text-left preset-box-hover cursor-pointer ${
                        selectedGarment === g.id
                          ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                      }`}
                    >
                      <p className="truncate">{g.name}</p>
                      <p className={`text-[10px] font-mono mt-0.5 ${selectedGarment === g.id ? 'text-amber-400' : 'text-slate-500'}`}>
                        from {curr.symbol} {(g.basePrice * curr.rate).toFixed(0)}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Color Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  2. Garment Colorway
                </label>
                <div className="flex items-center gap-2">
                  {colors.map((c) => (
                    <button
                      key={c.hex}
                      onClick={() => setSelectedColor(c.hex)}
                      title={c.name}
                      style={{ backgroundColor: c.hex }}
                      className={`w-7 h-7 rounded-full border-2 transition-all cursor-pointer ${
                        selectedColor === c.hex ? 'border-slate-900 scale-125 shadow-sm' : 'border-slate-300 hover:scale-115'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* 3. Brand Logo Upload / Monogram */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <span>3. Brand Logo / Artwork</span>
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
                      className="text-[11px] text-red-500 hover:text-red-700 font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Remove</span>
                    </button>
                  )}
                </div>

                {/* Mode Selector Tabs */}
                <div className="flex rounded-xl bg-slate-100 p-1 gap-1">
                  <button
                    type="button"
                    onClick={() => setBrandingMode('upload')}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      brandingMode === 'upload'
                        ? 'bg-white text-slate-950 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Upload className="w-3.5 h-3.5 text-amber-600" />
                    <span>Upload Logo File</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setBrandingMode('text')}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      brandingMode === 'text'
                        ? 'bg-white text-slate-950 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5 text-slate-500" />
                    <span>Type Text / Monogram</span>
                  </button>
                </div>

                {brandingMode === 'upload' ? (
                  <div>
                    {/* Hidden file input */}
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/png, image/jpeg, image/svg+xml, image/webp"
                      onChange={handleLogoUpload}
                      className="hidden"
                    />

                    {uploadedLogo ? (
                      /* Uploaded State Card */
                      <div className="p-3 rounded-2xl border-2 border-emerald-500/40 bg-emerald-50/40 flex items-center justify-between gap-3 shadow-2xs">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 p-1 flex items-center justify-center shadow-xs overflow-hidden shrink-0">
                            <img src={uploadedLogo} alt="Logo preview" className="max-w-full max-h-full object-contain" />
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <p className="text-xs font-bold text-slate-900 truncate max-w-[170px] sm:max-w-[220px]">
                                {logoFileName || 'Custom Brand Logo'}
                              </p>
                            </div>
                            <p className="text-[10px] text-emerald-700 font-medium">
                              Simulating live on {currentItem.name}
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-[11px] font-bold text-slate-700 transition-colors cursor-pointer shrink-0"
                        >
                          Change
                        </button>
                      </div>
                    ) : (
                      /* Drag & Drop File Upload Box */
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={handleDrop}
                        className="border-2 border-dashed border-slate-300 hover:border-amber-500 bg-slate-50/70 hover:bg-amber-50/20 rounded-2xl p-4 sm:p-5 text-center transition-all cursor-pointer group"
                      >
                        <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                          <UploadCloud className="w-5 h-5" />
                        </div>
                        <p className="text-xs font-bold text-slate-800">
                          Click to upload logo or drag and drop
                        </p>
                        <p className="text-[10px] text-slate-400 mt-0.5">
                          PNG (transparent background), SVG, or JPG (max 10MB)
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  /* Text Input Mode */
                  <div>
                    <input
                      type="text"
                      maxLength={28}
                      value={brandText}
                      onChange={(e) => setBrandText(e.target.value)}
                      placeholder="Type company name or monogram..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                )}
              </div>

              {/* 4. Technique & Placement */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    Placement
                  </label>
                  <div className="flex flex-col gap-1">
                    {(['chest', 'center', 'back'] as const).map((pos) => (
                      <button
                        key={pos}
                        onClick={() => setLogoPosition(pos)}
                        className={`px-2.5 py-1.5 rounded-lg text-xs font-medium capitalize text-left transition-all chip-hover cursor-pointer ${
                          logoPosition === pos ? 'bg-slate-900 text-white font-semibold' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {pos === 'chest' ? 'Chest Pocket (Left)' : pos === 'center' ? 'Center Chest' : 'Full Back'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    Technique
                  </label>
                  <div className="flex flex-col gap-1">
                    {(['embroidery', 'puff', 'screen'] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setTechnique(t)}
                        className={`px-2.5 py-1.5 rounded-lg text-xs font-medium capitalize text-left transition-all chip-hover cursor-pointer ${
                          technique === t ? 'bg-slate-900 text-white font-semibold' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {t === 'embroidery' ? '🧵 Tajima Embroidery' : t === 'puff' ? '💨 3D High Puff' : '🎨 Silkscreen / DTF'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => onOpenQuoteModal('studio-sample', { 
                  garment: currentItem.name, 
                  color: selectedColor, 
                  technique,
                  logoUploaded: !!uploadedLogo,
                  logoFileName,
                  brandText
                })}
                className="btn-luxury-dark w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400 icon-hover-bounce" />
                <span>Request Physical Pre-Production Sample</span>
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

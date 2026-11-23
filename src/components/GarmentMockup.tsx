'use client';

import React from 'react';

export type GarmentShape = 'polo' | 'blazer' | 'jacket' | 'hospitality' | 'scrub' | 'coverall' | 'jersey';
export type ViewSide = 'front' | 'back';
export type PlacementKey = 'chest' | 'center' | 'sleeve' | 'back';
export type TechniqueKey = 'embroidery' | '3d-print' | 'rubberized' | 'dtf' | 'sublimation';

interface GarmentMockupProps {
  shape: GarmentShape;
  view: ViewSide;
  bodyColor: string;
  accentColor: string;
  placement: PlacementKey;
  technique: TechniqueKey;
  logoScale: number;
  logoBackdrop: 'patch' | 'transparent';
  uploadedLogo: string | null;
  brandText: string;
}

/** Lightens or darkens a hex color by a signed percentage (-100 to 100) for realistic fabric shading. */
function shadeColor(hex: string, percent: number): string {
  const clean = hex.replace('#', '');
  if (clean.length !== 6) return hex;
  const num = parseInt(clean, 16);
  const clamp = (v: number) => Math.max(0, Math.min(255, v));
  const r = clamp(((num >> 16) & 0xff) + Math.round(2.55 * percent));
  const g = clamp(((num >> 8) & 0xff) + Math.round(2.55 * percent));
  const b = clamp((num & 0xff) + Math.round(2.55 * percent));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

/** Returns true if the hex color is light enough to require dark contrast ink. */
function isLightColor(hex: string): boolean {
  const clean = hex.replace('#', '');
  if (clean.length !== 6) return false;
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 165;
}

export default function GarmentMockup({
  shape,
  view,
  bodyColor,
  accentColor,
  placement,
  technique,
  logoScale,
  logoBackdrop,
  uploadedLogo,
  brandText,
}: GarmentMockupProps) {
  const darkShade = shadeColor(bodyColor, -18);
  const seamColor = isLightColor(bodyColor) ? 'rgba(15,23,42,0.18)' : 'rgba(255,255,255,0.2)';
  const lightTextOnGarment = !isLightColor(bodyColor);

  // Position of the customization print zone in % over the 400x440 SVG viewBox
  const zoneStyle: React.CSSProperties =
    view === 'back' || placement === 'back'
      ? { top: '28%', left: '50%', transform: `translate(-50%, -50%) scale(${logoScale / 100})` }
      : placement === 'chest'
        ? { top: '31%', left: '61%', transform: `translate(-50%, -50%) scale(${logoScale / 100})` }
        : placement === 'sleeve'
          ? { top: '34%', left: '20%', transform: `translate(-50%, -50%) scale(${(logoScale * 0.72) / 100})` }
          : { top: '38%', left: '50%', transform: `translate(-50%, -50%) scale(${logoScale / 100})` };

  const techniqueVisualClass =
    technique === '3d-print'
      ? 'drop-shadow-[0_3px_0_rgba(15,23,42,0.55)]'
      : technique === 'embroidery'
        ? 'drop-shadow-[0_1px_1px_rgba(0,0,0,0.45)]'
        : technique === 'rubberized'
          ? 'drop-shadow-[0_2px_2px_rgba(0,0,0,0.35)]'
          : '';

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      {/* Subtle studio floor shadow */}
      <div className="absolute bottom-6 w-56 h-6 bg-slate-900/15 blur-xl rounded-full pointer-events-none" />

      {/* Interactive Garment SVG */}
      <svg
        viewBox="0 0 400 440"
        className="w-full max-w-[340px] sm:max-w-[390px] h-auto drop-shadow-[0_18px_32px_rgba(15,23,42,0.16)] transition-all duration-300"
        aria-label={`${shape} ${view} garment preview`}
      >
        <defs>
          <linearGradient id="fabricSheen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.16" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.18" />
          </linearGradient>

          {/* Subtle Sublimation Diagonal Pattern */}
          <pattern id="sublimationPattern" width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
            <rect width="12" height="24" fill={accentColor} fillOpacity="0.14" />
          </pattern>
        </defs>

        {/* Main Garment Silhouette */}
        <path
          d={
            shape === 'coverall'
              ? 'M125 58 L72 95 L42 185 L88 198 L108 135 L108 405 L192 405 L196 290 L204 290 L208 405 L292 405 L292 135 L312 198 L358 185 L328 95 L275 58 Q200 78 125 58 Z'
              : 'M125 60 L66 98 L36 196 L88 212 L110 142 L110 392 Q200 402 290 392 L290 142 L312 212 L364 196 L334 98 L275 60 Q200 84 125 60 Z'
          }
          fill={bodyColor}
          stroke={darkShade}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Fabric Lighting & Folds Overlay */}
        <path
          d={
            shape === 'coverall'
              ? 'M125 58 L72 95 L42 185 L88 198 L108 135 L108 405 L192 405 L196 290 L204 290 L208 405 L292 405 L292 135 L312 198 L358 185 L328 95 L275 58 Q200 78 125 58 Z'
              : 'M125 60 L66 98 L36 196 L88 212 L110 142 L110 392 Q200 402 290 392 L290 142 L312 212 L364 196 L334 98 L275 60 Q200 84 125 60 Z'
          }
          fill={technique === 'sublimation' ? 'url(#sublimationPattern)' : 'url(#fabricSheen)'}
          pointerEvents="none"
        />

        {/* Sleeve & Side Seam Lines */}
        <path
          d="M110 142 Q122 108 125 60 M290 142 Q278 108 275 60"
          fill="none"
          stroke={seamColor}
          strokeWidth="1.8"
          strokeDasharray="4 3"
        />

        {/* Accent Sleeve Cuffs */}
        {shape !== 'coverall' && (
          <>
            <path d="M38 190 L90 206 L86 216 L34 200 Z" fill={accentColor} opacity="0.9" />
            <path d="M362 190 L310 206 L314 216 L366 200 Z" fill={accentColor} opacity="0.9" />
          </>
        )}

        {/* Collar & Neckline */}
        {view === 'front' ? (
          shape === 'polo' || shape === 'coverall' || shape === 'hospitality' ? (
            <g>
              {/* Folded Collar */}
              <path
                d="M125 60 L160 52 L200 88 L158 106 Z"
                fill={accentColor}
                stroke={darkShade}
                strokeWidth="1.5"
              />
              <path
                d="M275 60 L240 52 L200 88 L242 106 Z"
                fill={accentColor}
                stroke={darkShade}
                strokeWidth="1.5"
              />
              {/* Placket / Zip */}
              <rect x="193" y="88" width="14" height="68" rx="3" fill={darkShade} opacity="0.85" />
              <circle cx="200" cy="108" r="2.8" fill={accentColor} />
              <circle cx="200" cy="132" r="2.8" fill={accentColor} />
            </g>
          ) : shape === 'blazer' ? (
            <g>
              {/* Tailored Notched Lapels */}
              <path d="M135 60 L175 60 L200 185 L165 135 Z" fill={darkShade} stroke={seamColor} strokeWidth="1.5" />
              <path d="M265 60 L225 60 L200 185 L235 135 Z" fill={darkShade} stroke={seamColor} strokeWidth="1.5" />
              {/* Inner Shirt V */}
              <path d="M175 60 L225 60 L200 175 Z" fill="#f8fafc" />
              <circle cx="200" cy="215" r="4" fill={accentColor} />
              <circle cx="200" cy="255" r="4" fill={accentColor} />
            </g>
          ) : shape === 'jacket' ? (
            <g>
              {/* Stand Collar & Full Front Zipper */}
              <path d="M132 62 Q200 86 268 62 L262 44 Q200 64 138 44 Z" fill={accentColor} stroke={darkShade} strokeWidth="1.5" />
              <line x1="200" y1="68" x2="200" y2="394" stroke={accentColor} strokeWidth="3.5" />
              {/* Side Zip Pockets */}
              <line x1="132" y1="255" x2="148" y2="315" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
              <line x1="268" y1="255" x2="252" y2="315" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
            </g>
          ) : (
            /* Scrub / Jersey V-Neck or Crew Neck */
            <path
              d={shape === 'scrub' ? 'M140 60 L200 112 L260 60 L246 56 L200 96 L154 56 Z' : 'M135 60 Q200 105 265 60 L256 52 Q200 90 144 52 Z'}
              fill={accentColor}
            />
          )
        ) : (
          /* Back View Neckline */
          <path d="M135 60 Q200 78 265 60 L258 50 Q200 66 142 50 Z" fill={accentColor} />
        )}

        {/* Industrial Coverall Reflective Stripes */}
        {shape === 'coverall' && (
          <g opacity="0.92">
            <rect x="108" y="218" width="184" height="12" fill="#e2e8f0" />
            <rect x="108" y="222" width="184" height="4" fill="#E2B027" />
            <rect x="108" y="345" width="84" height="10" fill="#e2e8f0" />
            <rect x="208" y="345" width="84" height="10" fill="#e2e8f0" />
          </g>
        )}

        {/* Hospitality Apron Bib */}
        {shape === 'hospitality' && view === 'front' && (
          <g>
            <path d="M142 180 L258 180 L268 388 Q200 396 132 388 Z" fill={accentColor} fillOpacity="0.22" stroke={accentColor} strokeWidth="1.5" />
            <line x1="110" y1="230" x2="290" y2="230" stroke={accentColor} strokeWidth="3" />
          </g>
        )}

        {/* Subtle Print-Safe Guide Box */}
        <rect
          x={view === 'back' || placement === 'back' ? 140 : placement === 'chest' ? 215 : placement === 'sleeve' ? 54 : 145}
          y={view === 'back' || placement === 'back' ? 105 : placement === 'chest' ? 115 : placement === 'sleeve' ? 132 : 135}
          width={placement === 'sleeve' ? 52 : view === 'back' || placement === 'back' ? 120 : placement === 'chest' ? 62 : 110}
          height={placement === 'sleeve' ? 36 : view === 'back' || placement === 'back' ? 76 : placement === 'chest' ? 42 : 66}
          rx="8"
          fill="none"
          stroke={seamColor}
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
      </svg>

      {/* Live Custom Logo / Text Overlay Directly on Fabric */}
      <div
        className={`absolute transition-all duration-300 z-10 pointer-events-none ${techniqueVisualClass}`}
        style={zoneStyle}
      >
        {uploadedLogo ? (
          <div
            className={`flex flex-col items-center justify-center transition-all ${
              logoBackdrop === 'patch'
                ? 'px-2.5 py-2 rounded-xl bg-white/95 border border-slate-300 shadow-lg'
                : 'bg-transparent'
            }`}
          >
            <img
              src={uploadedLogo}
              alt="Custom Logo Preview"
              className="max-h-12 sm:max-h-14 max-w-[96px] w-auto object-contain"
            />
          </div>
        ) : (
          <div
            className={`px-2.5 py-1.5 rounded-lg text-center max-w-[130px] transition-all ${
              logoBackdrop === 'patch'
                ? 'bg-white/95 border border-slate-300 shadow-md text-slate-900'
                : lightTextOnGarment
                  ? 'text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.75)]'
                  : 'text-slate-900 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]'
            }`}
          >
            <p className="text-[10px] sm:text-xs font-extrabold tracking-wider uppercase truncate">
              {brandText || 'YOUR LOGO'}
            </p>
            {logoBackdrop === 'patch' && (
              <p className="text-[7.5px] font-mono uppercase text-slate-500 mt-0.5">
                {technique.replace('-', ' ')}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

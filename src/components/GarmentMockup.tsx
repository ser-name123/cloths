'use client';

import React, { useRef } from 'react';

export type GarmentShape = 'polo' | 'blazer' | 'jacket' | 'hospitality' | 'scrub' | 'coverall' | 'jersey';
export type ViewSide = 'front' | 'back';
export type PlacementKey = 'chest' | 'center' | 'sleeve' | 'back';
export type TechniqueKey = 'embroidery' | '3d-print' | 'rubberized' | 'dtf' | 'sublimation';
export type SleeveLength = 'short' | 'full';
export type FabricFinish = 'cotton' | 'pique' | 'twill' | 'dryfit';
export type FontStyleKey = 'sans' | 'bold' | 'serif' | 'mono';

interface GarmentMockupProps {
  shape: GarmentShape;
  view: ViewSide;
  bodyColor: string;
  accentColor: string;
  sleeveLength: SleeveLength;
  hasPocket: boolean;
  fabricFinish: FabricFinish;
  placement: PlacementKey;
  technique: TechniqueKey;
  logoScale: number;
  logoBackdrop: 'patch' | 'transparent';
  uploadedLogo: string | null;
  brandText: string;
  textColor: string;
  fontStyle: FontStyleKey;
  dragOffset: { x: number; y: number };
  onDragOffsetChange: (offset: { x: number; y: number }) => void;
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

/** Returns true if the hex color is light enough to require dark contrast lines. */
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
  sleeveLength,
  hasPocket,
  fabricFinish,
  placement,
  technique,
  logoScale,
  logoBackdrop,
  uploadedLogo,
  brandText,
  textColor,
  fontStyle,
  dragOffset,
  onDragOffsetChange,
}: GarmentMockupProps) {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef<{ startX: number; startY: number; origX: number; origY: number } | null>(null);

  const darkShade = shadeColor(bodyColor, -18);
  const seamColor = isLightColor(bodyColor) ? 'rgba(15,23,42,0.2)' : 'rgba(255,255,255,0.22)';

  const isFullSleeve = sleeveLength === 'full' || shape === 'jacket' || shape === 'blazer' || shape === 'coverall';

  const bodyPath =
    shape === 'coverall'
      ? 'M125 58 L72 95 L22 252 L62 266 L108 140 L108 405 L192 405 L196 290 L204 290 L208 405 L292 405 L292 140 L338 266 L378 252 L328 95 L275 58 Q200 78 125 58 Z'
      : isFullSleeve
        ? 'M125 60 L66 96 L18 258 L60 272 L110 146 L110 392 Q200 402 290 392 L290 146 L340 272 L382 258 L334 96 L275 60 Q200 84 125 60 Z'
        : 'M125 60 L66 98 L36 196 L88 212 L110 142 L110 392 Q200 402 290 392 L290 142 L312 212 L364 196 L334 98 L275 60 Q200 84 125 60 Z';

  // Base anchor for logo zone
  const basePos =
    view === 'back' || placement === 'back'
      ? { top: 28, left: 50 }
      : placement === 'chest'
        ? { top: 31, left: 61 }
        : placement === 'sleeve'
          ? { top: 34, left: 20 }
          : { top: 38, left: 50 };

  const zoneStyle: React.CSSProperties = {
    top: `calc(${basePos.top}% + ${dragOffset.y}px)`,
    left: `calc(${basePos.left}% + ${dragOffset.x}px)`,
    transform: `translate(-50%, -50%) scale(${(placement === 'sleeve' ? logoScale * 0.72 : logoScale) / 100})`,
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    draggingRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      origX: dragOffset.x,
      origY: dragOffset.y,
    };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const dx = Math.max(-75, Math.min(75, draggingRef.current.origX + (e.clientX - draggingRef.current.startX)));
    const dy = Math.max(-75, Math.min(75, draggingRef.current.origY + (e.clientY - draggingRef.current.startY)));
    onDragOffsetChange({ x: dx, y: dy });
  };

  const handlePointerUp = () => {
    draggingRef.current = null;
  };

  const techniqueVisualClass =
    technique === '3d-print'
      ? 'drop-shadow-[0_3px_0_rgba(15,23,42,0.6)]'
      : technique === 'embroidery'
        ? 'drop-shadow-[0_1px_1px_rgba(0,0,0,0.45)]'
        : technique === 'rubberized'
          ? 'drop-shadow-[0_2px_2px_rgba(0,0,0,0.35)]'
          : '';

  const fontClass =
    fontStyle === 'serif'
      ? 'font-serif tracking-wide'
      : fontStyle === 'mono'
        ? 'font-mono tracking-widest'
        : fontStyle === 'bold'
          ? 'font-black tracking-tight'
          : 'font-bold tracking-wider';

  return (
    <div ref={stageRef} className="relative w-full h-full flex items-center justify-center select-none">
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

          <pattern id="piqueMesh" width="6" height="6" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.8" fill="#000000" fillOpacity="0.08" />
            <circle cx="5" cy="5" r="0.8" fill="#ffffff" fillOpacity="0.08" />
          </pattern>

          <pattern id="twillWeave" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke="#000000" strokeOpacity="0.08" strokeWidth="2" />
          </pattern>

          <pattern id="sublimationPattern" width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
            <rect width="12" height="24" fill={accentColor} fillOpacity="0.14" />
          </pattern>
        </defs>

        {/* Main Garment Silhouette */}
        <path
          d={bodyPath}
          fill={bodyColor}
          stroke={darkShade}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Fabric Texture & Lighting Overlay */}
        <path
          d={bodyPath}
          fill={
            technique === 'sublimation'
              ? 'url(#sublimationPattern)'
              : fabricFinish === 'pique'
                ? 'url(#piqueMesh)'
                : fabricFinish === 'twill'
                  ? 'url(#twillWeave)'
                  : 'url(#fabricSheen)'
          }
          pointerEvents="none"
        />
        {(technique === 'sublimation' || fabricFinish !== 'cotton') && (
          <path d={bodyPath} fill="url(#fabricSheen)" pointerEvents="none" />
        )}

        {/* Sleeve & Side Seam Lines */}
        <path
          d="M110 142 Q122 108 125 60 M290 142 Q278 108 275 60"
          fill="none"
          stroke={seamColor}
          strokeWidth="1.8"
          strokeDasharray="4 3"
        />

        {/* Accent Sleeve Cuffs */}
        {isFullSleeve ? (
          <>
            <path d="M20 250 L62 264 L59 274 L17 260 Z" fill={accentColor} opacity="0.92" />
            <path d="M380 250 L338 264 L341 274 L383 260 Z" fill={accentColor} opacity="0.92" />
          </>
        ) : (
          <>
            <path d="M38 190 L90 206 L86 216 L34 200 Z" fill={accentColor} opacity="0.92" />
            <path d="M362 190 L310 206 L314 216 L366 200 Z" fill={accentColor} opacity="0.92" />
          </>
        )}

        {/* Optional Chest Pocket (Left Chest) */}
        {hasPocket && view === 'front' && (
          <g>
            <path
              d="M222 126 L268 126 L268 168 Q245 178 222 168 Z"
              fill={darkShade}
              fillOpacity="0.35"
              stroke={seamColor}
              strokeWidth="1.5"
            />
            <line x1="222" y1="132" x2="268" y2="132" stroke={accentColor} strokeWidth="2.2" />
          </g>
        )}

        {/* Collar & Neckline */}
        {view === 'front' ? (
          shape === 'polo' || shape === 'coverall' || shape === 'hospitality' ? (
            <g>
              <path d="M125 60 L160 52 L200 88 L158 106 Z" fill={accentColor} stroke={darkShade} strokeWidth="1.5" />
              <path d="M275 60 L240 52 L200 88 L242 106 Z" fill={accentColor} stroke={darkShade} strokeWidth="1.5" />
              <rect x="193" y="88" width="14" height="68" rx="3" fill={darkShade} opacity="0.85" />
              <circle cx="200" cy="108" r="2.8" fill={accentColor} />
              <circle cx="200" cy="132" r="2.8" fill={accentColor} />
            </g>
          ) : shape === 'blazer' ? (
            <g>
              <path d="M135 60 L175 60 L200 185 L165 135 Z" fill={darkShade} stroke={seamColor} strokeWidth="1.5" />
              <path d="M265 60 L225 60 L200 185 L235 135 Z" fill={darkShade} stroke={seamColor} strokeWidth="1.5" />
              <path d="M175 60 L225 60 L200 175 Z" fill="#f8fafc" />
              <circle cx="200" cy="215" r="4" fill={accentColor} />
              <circle cx="200" cy="255" r="4" fill={accentColor} />
            </g>
          ) : shape === 'jacket' ? (
            <g>
              <path d="M132 62 Q200 86 268 62 L262 44 Q200 64 138 44 Z" fill={accentColor} stroke={darkShade} strokeWidth="1.5" />
              <line x1="200" y1="68" x2="200" y2="394" stroke={accentColor} strokeWidth="3.5" />
              <line x1="132" y1="255" x2="148" y2="315" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
              <line x1="268" y1="255" x2="252" y2="315" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
            </g>
          ) : (
            <path
              d={shape === 'scrub' ? 'M140 60 L200 112 L260 60 L246 56 L200 96 L154 56 Z' : 'M135 60 Q200 105 265 60 L256 52 Q200 90 144 52 Z'}
              fill={accentColor}
            />
          )
        ) : (
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

      {/* Draggable Live Custom Logo / Text Overlay Directly on Fabric */}
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        title="Drag to fine-tune logo position"
        className={`absolute transition-shadow duration-200 z-10 cursor-grab active:cursor-grabbing ${techniqueVisualClass}`}
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
              className="max-h-12 sm:max-h-14 max-w-[96px] w-auto object-contain pointer-events-none"
            />
          </div>
        ) : (
          <div
            className={`px-2.5 py-1.5 rounded-lg text-center max-w-[140px] transition-all ${
              logoBackdrop === 'patch'
                ? 'bg-white/95 border border-slate-300 shadow-md'
                : 'drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]'
            }`}
            style={{ color: logoBackdrop === 'patch' ? '#0f172a' : textColor }}
          >
            <p className={`text-[10px] sm:text-xs uppercase truncate ${fontClass}`}>
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

'use client';

import React, { useRef } from 'react';

export type GarmentShape = 'polo' | 'blazer' | 'jacket' | 'hospitality' | 'scrub' | 'coverall' | 'jersey';
export type ViewSide = 'front' | 'back';
export type PlacementKey = 'chest' | 'center' | 'sleeve' | 'back';
export type TechniqueKey = 'embroidery' | '3d-print' | 'rubberized' | 'dtf' | 'sublimation';
export type SleeveLength = 'short' | 'full';
export type FabricFinish = 'cotton' | 'pique' | 'twill' | 'dryfit';
export type FontStyleKey = 'sans' | 'bold' | 'serif' | 'mono';
export type PatternStyleKey = 'solid' | 'chest-stripe' | 'side-panels' | 'two-tone';

interface GarmentMockupProps {
  shape: GarmentShape;
  view: ViewSide;
  bodyColor: string;
  sleeveColor: string;
  accentColor: string;
  patternStyle: PatternStyleKey;
  sleeveLength: SleeveLength;
  hasPocket: boolean;
  fabricFinish: FabricFinish;
  placement: PlacementKey;
  technique: TechniqueKey;
  logoScale: number;
  logoRotation: number;
  logoBackdrop: 'patch' | 'transparent';
  uploadedLogo: string | null;
  brandText: string;
  textColor: string;
  fontStyle: FontStyleKey;
  zoomed: boolean;
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
  sleeveColor,
  accentColor,
  patternStyle,
  sleeveLength,
  hasPocket,
  fabricFinish,
  placement,
  technique,
  logoScale,
  logoRotation,
  logoBackdrop,
  uploadedLogo,
  brandText,
  textColor,
  fontStyle,
  zoomed,
  dragOffset,
  onDragOffsetChange,
}: GarmentMockupProps) {
  const draggingRef = useRef<{ startX: number; startY: number; origX: number; origY: number } | null>(null);

  const darkShade = shadeColor(bodyColor, -22);
  const lightShade = shadeColor(bodyColor, 14);
  const sleeveDark = shadeColor(sleeveColor, -20);
  const seamColor = isLightColor(bodyColor) ? 'rgba(15,23,42,0.16)' : 'rgba(255,255,255,0.22)';

  const isFullSleeve = sleeveLength === 'full' || shape === 'jacket' || shape === 'blazer' || shape === 'coverall';

  // Sculpted torso path with natural shoulder slope & tapered waist
  const torsoPath =
    shape === 'coverall'
      ? 'M132 58 Q200 72 268 58 L286 78 Q290 125 288 165 L288 408 L206 408 L202 288 L198 288 L194 408 L112 408 L112 165 Q110 125 114 78 Z'
      : 'M132 60 Q200 76 268 60 L292 84 Q288 135 284 185 L286 386 Q200 398 114 386 L116 185 Q112 135 108 84 Z';

  // Left & Right Sleeve paths (anatomical angle + smooth shoulder cap)
  const leftSleevePath = isFullSleeve
    ? 'M132 60 L108 84 Q88 110 74 150 L22 254 L60 270 L104 162 Q112 130 116 144 Z'
    : 'M132 60 L108 84 Q84 114 66 154 L42 192 L88 212 L114 152 Q118 132 116 144 Z';

  const rightSleevePath = isFullSleeve
    ? 'M268 60 L292 84 Q312 110 326 150 L378 254 L340 270 L296 162 Q288 130 284 144 Z'
    : 'M268 60 L292 84 Q316 114 334 154 L358 192 L312 212 L286 152 Q282 132 284 144 Z';

  // Base anchor for logo zone
  const basePos =
    view === 'back' || placement === 'back'
      ? { top: 29, left: 50 }
      : placement === 'chest'
        ? { top: 32, left: 60 }
        : placement === 'sleeve'
          ? { top: 33, left: 21 }
          : { top: 39, left: 50 };

  const zoneStyle: React.CSSProperties = {
    top: `calc(${basePos.top}% + ${dragOffset.y}px)`,
    left: `calc(${basePos.left}% + ${dragOffset.x}px)`,
    transform: `translate(-50%, -50%) scale(${(placement === 'sleeve' ? logoScale * 0.68 : logoScale) / 100}) rotate(${logoRotation}deg)`,
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
      ? 'drop-shadow-[0_3px_0_rgba(15,23,42,0.65)]'
      : technique === 'embroidery'
        ? 'drop-shadow-[0_1.5px_1px_rgba(0,0,0,0.5)]'
        : technique === 'rubberized'
          ? 'drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]'
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
    <div
      className={`relative w-full h-full flex items-center justify-center select-none transition-transform duration-500 ease-out ${
        zoomed ? 'scale-125 translate-y-6' : 'scale-100'
      }`}
    >
      {/* Subtle studio floor shadow */}
      <div className="absolute bottom-6 w-56 h-7 bg-slate-900/18 blur-xl rounded-full pointer-events-none" />

      {/* Interactive Garment SVG */}
      <svg
        id="us81-garment-svg"
        viewBox="0 0 400 440"
        className="w-full max-w-[350px] sm:max-w-[400px] h-auto drop-shadow-[0_20px_34px_rgba(15,23,42,0.18)] transition-all duration-300"
        aria-label={`${shape} ${view} garment preview`}
      >
        <defs>
          {/* 3D Torso Cylindrical Lighting */}
          <linearGradient id="torso3D" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.22" />
            <stop offset="18%" stopColor="#ffffff" stopOpacity="0.06" />
            <stop offset="48%" stopColor="#ffffff" stopOpacity="0.16" />
            <stop offset="82%" stopColor="#000000" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.24" />
          </linearGradient>

          {/* Vertical Drape & Under-Collar Shadow */}
          <linearGradient id="verticalDrape" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.16" />
            <stop offset="16%" stopColor="#ffffff" stopOpacity="0.08" />
            <stop offset="75%" stopColor="#000000" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.18" />
          </linearGradient>

          <pattern id="piqueMesh" width="5" height="5" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="0.7" fill="#000000" fillOpacity="0.09" />
            <circle cx="4" cy="4" r="0.7" fill="#ffffff" fillOpacity="0.09" />
          </pattern>

          <pattern id="twillWeave" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="7" stroke="#000000" strokeOpacity="0.08" strokeWidth="1.8" />
          </pattern>

          <pattern id="sublimationPattern" width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
            <rect width="12" height="24" fill={accentColor} fillOpacity="0.16" />
          </pattern>

          <clipPath id="torsoClip">
            <path d={torsoPath} />
          </clipPath>
        </defs>

        {/* Left & Right Sleeves */}
        <path d={leftSleevePath} fill={sleeveColor} stroke={sleeveDark} strokeWidth="1.4" strokeLinejoin="round" />
        <path d={rightSleevePath} fill={sleeveColor} stroke={sleeveDark} strokeWidth="1.4" strokeLinejoin="round" />
        <path d={leftSleevePath} fill="url(#verticalDrape)" pointerEvents="none" />
        <path d={rightSleevePath} fill="url(#verticalDrape)" pointerEvents="none" />

        {/* Main Torso */}
        <path d={torsoPath} fill={bodyColor} stroke={darkShade} strokeWidth="1.5" strokeLinejoin="round" />

        {/* Uniform Cut-and-Sew Pattern Overlays (Clipped to Torso) */}
        <g clipPath="url(#torsoClip)" pointerEvents="none">
          {patternStyle === 'chest-stripe' && (
            <g>
              <rect x="105" y="156" width="190" height="24" fill={accentColor} opacity="0.92" />
              <rect x="105" y="184" width="190" height="5" fill={lightShade} opacity="0.65" />
            </g>
          )}
          {patternStyle === 'side-panels' && (
            <g>
              <path d="M108 140 L138 140 L134 395 L108 395 Z" fill={accentColor} opacity="0.88" />
              <path d="M292 140 L262 140 L266 395 L292 395 Z" fill={accentColor} opacity="0.88" />
            </g>
          )}
          {patternStyle === 'two-tone' && (
            <rect x="105" y="248" width="190" height="165" fill={darkShade} opacity="0.72" />
          )}

          {/* Subtle Fabric Texture */}
          {technique === 'sublimation' ? (
            <rect x="100" y="50" width="200" height="370" fill="url(#sublimationPattern)" />
          ) : fabricFinish === 'pique' ? (
            <rect x="100" y="50" width="200" height="370" fill="url(#piqueMesh)" />
          ) : fabricFinish === 'twill' ? (
            <rect x="100" y="50" width="200" height="370" fill="url(#twillWeave)" />
          ) : null}

          {/* 3D Cylindrical Lighting & Drape Folds */}
          <rect x="100" y="50" width="200" height="370" fill="url(#torso3D)" />
          <rect x="100" y="50" width="200" height="370" fill="url(#verticalDrape)" />

          {/* Natural Vertical Drape Fold Lines */}
          <path d="M142 180 Q138 280 144 385" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="3" />
          <path d="M258 180 Q262 280 256 385" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="3" />

          {/* Bottom Ribbed Hem */}
          {shape !== 'coverall' && (
            <line x1="112" y1="378" x2="288" y2="378" stroke={seamColor} strokeWidth="1.4" strokeDasharray="3 2" />
          )}
        </g>

        {/* Armhole Raglan Stitch Seams */}
        <path
          d="M114 146 Q124 106 132 60 M286 146 Q276 106 268 60"
          fill="none"
          stroke={seamColor}
          strokeWidth="1.4"
          strokeDasharray="3.5 2.5"
        />

        {/* Accent Sleeve Cuffs */}
        {isFullSleeve ? (
          <>
            <path d="M24 248 L62 263 L59 272 L20 256 Z" fill={accentColor} opacity="0.95" />
            <path d="M376 248 L338 263 L341 272 L380 256 Z" fill={accentColor} opacity="0.95" />
          </>
        ) : (
          <>
            <path d="M44 186 L90 206 L86 214 L40 194 Z" fill={accentColor} opacity="0.95" />
            <path d="M356 186 L310 206 L314 214 L360 194 Z" fill={accentColor} opacity="0.95" />
          </>
        )}

        {/* Optional Chest Pocket (Left Chest) */}
        {hasPocket && view === 'front' && (
          <g>
            <path
              d="M218 128 L266 128 L266 172 Q242 182 218 172 Z"
              fill={darkShade}
              fillOpacity="0.38"
              stroke={seamColor}
              strokeWidth="1.4"
            />
            <line x1="218" y1="134" x2="266" y2="134" stroke={accentColor} strokeWidth="2.4" />
          </g>
        )}

        {/* Collar & Neckline */}
        {view === 'front' ? (
          shape === 'polo' || shape === 'coverall' || shape === 'hospitality' ? (
            <g>
              {/* Inner Neck Shadow */}
              <path d="M148 60 Q200 84 252 60 Q200 72 148 60 Z" fill={darkShade} />
              {/* Folded Collar */}
              <path d="M132 60 L164 52 L200 88 L158 106 Z" fill={accentColor} stroke={darkShade} strokeWidth="1.2" />
              <path d="M268 60 L236 52 L200 88 L242 106 Z" fill={accentColor} stroke={darkShade} strokeWidth="1.2" />
              {/* Placket */}
              <rect x="193" y="88" width="14" height="66" rx="3" fill={darkShade} opacity="0.9" />
              <circle cx="200" cy="108" r="2.6" fill={accentColor} />
              <circle cx="200" cy="132" r="2.6" fill={accentColor} />
            </g>
          ) : shape === 'blazer' ? (
            <g>
              <path d="M138 60 L175 60 L200 185 L164 135 Z" fill={darkShade} stroke={seamColor} strokeWidth="1.2" />
              <path d="M262 60 L225 60 L200 185 L236 135 Z" fill={darkShade} stroke={seamColor} strokeWidth="1.2" />
              <path d="M175 60 L225 60 L200 175 Z" fill="#f8fafc" />
              <circle cx="200" cy="215" r="4" fill={accentColor} />
              <circle cx="200" cy="255" r="4" fill={accentColor} />
            </g>
          ) : shape === 'jacket' ? (
            <g>
              <path d="M134 62 Q200 86 266 62 L260 44 Q200 64 140 44 Z" fill={accentColor} stroke={darkShade} strokeWidth="1.2" />
              <line x1="200" y1="68" x2="200" y2="388" stroke={accentColor} strokeWidth="3.2" />
              <line x1="134" y1="255" x2="150" y2="315" stroke={accentColor} strokeWidth="2.8" strokeLinecap="round" />
              <line x1="266" y1="255" x2="250" y2="315" stroke={accentColor} strokeWidth="2.8" strokeLinecap="round" />
            </g>
          ) : (
            <path
              d={shape === 'scrub' ? 'M140 60 L200 112 L260 60 L246 56 L200 96 L154 56 Z' : 'M135 60 Q200 102 265 60 L256 52 Q200 88 144 52 Z'}
              fill={accentColor}
            />
          )
        ) : (
          <path d="M135 60 Q200 78 265 60 L258 50 Q200 66 142 50 Z" fill={accentColor} />
        )}

        {/* Industrial Coverall Reflective Stripes */}
        {shape === 'coverall' && (
          <g opacity="0.92">
            <rect x="112" y="218" width="176" height="12" fill="#e2e8f0" />
            <rect x="112" y="222" width="176" height="4" fill="#E2B027" />
            <rect x="112" y="345" width="82" height="10" fill="#e2e8f0" />
            <rect x="206" y="345" width="82" height="10" fill="#e2e8f0" />
          </g>
        )}

        {/* Hospitality Apron Bib */}
        {shape === 'hospitality' && view === 'front' && (
          <g>
            <path d="M142 180 L258 180 L268 384 Q200 392 132 384 Z" fill={accentColor} fillOpacity="0.2" stroke={accentColor} strokeWidth="1.4" />
            <line x1="114" y1="230" x2="286" y2="230" stroke={accentColor} strokeWidth="2.8" />
          </g>
        )}

        {/* Subtle Print-Safe Guide Box */}
        <rect
          x={view === 'back' || placement === 'back' ? 140 : placement === 'chest' ? 212 : placement === 'sleeve' ? 56 : 145}
          y={view === 'back' || placement === 'back' ? 105 : placement === 'chest' ? 116 : placement === 'sleeve' ? 132 : 138}
          width={placement === 'sleeve' ? 50 : view === 'back' || placement === 'back' ? 120 : placement === 'chest' ? 62 : 110}
          height={placement === 'sleeve' ? 36 : view === 'back' || placement === 'back' ? 76 : placement === 'chest' ? 42 : 66}
          rx="8"
          fill="none"
          stroke={seamColor}
          strokeWidth="1.1"
          strokeDasharray="3.5 3.5"
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
            className={`px-2 py-1 rounded-lg text-center max-w-[105px] sm:max-w-[120px] transition-all ${
              logoBackdrop === 'patch'
                ? 'bg-white/95 border border-slate-300 shadow-md'
                : 'drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]'
            }`}
            style={{ color: logoBackdrop === 'patch' ? '#0f172a' : textColor }}
          >
            <p className={`text-[9px] sm:text-[10.5px] leading-tight uppercase break-words ${fontClass}`}>
              {brandText || 'YOUR LOGO'}
            </p>
            {logoBackdrop === 'patch' && (
              <p className="text-[7px] font-mono uppercase text-slate-500 mt-0.5">
                {technique.replace('-', ' ')}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

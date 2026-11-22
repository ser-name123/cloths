'use client';

import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export default function Logo({ 
  variant = 'light', 
  size = 'md', 
  showSubtitle = true,
  className = '' 
}: LogoProps) {
  const isDark = variant === 'dark';

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 sm:gap-3 group select-none shrink-0 whitespace-nowrap ${className}`}>
      {/* Precision Geometric Textile Emblem SVG */}
      <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg 
          viewBox="0 0 44 44" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className={size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10'}
        >
          <defs>
            <linearGradient id={isDark ? "kw-bg-dark" : "kw-bg-light"} x1="0%" y1="0%" x2="100%" y2="100%">
              {isDark ? (
                <>
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#f1f5f9" />
                </>
              ) : (
                <>
                  <stop offset="0%" stopColor="#090d16" />
                  <stop offset="100%" stopColor="#0f172a" />
                </>
              )}
            </linearGradient>

            <linearGradient id="kw-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
            
            <linearGradient id="kw-accent-shine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Squircle Base with Precision Shadow */}
          <rect 
            width="44" 
            height="44" 
            rx="12" 
            fill={`url(#${isDark ? "kw-bg-dark" : "kw-bg-light"})`} 
          />
          
          {/* Subtle Outer Border */}
          <rect 
            x="0.75" 
            y="0.75" 
            width="42.5" 
            height="42.5" 
            rx="11.25" 
            stroke={isDark ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.12)"} 
            strokeWidth="1.5" 
          />

          {/* Dynamic Geometric Weave K Emblem */}
          {/* Vertical Needle / Loom Column */}
          <path 
            d="M13 11C13 10.4477 13.4477 10 14 10H18C18.5523 10 19 10.4477 19 11V33C19 33.5523 18.5523 34 18 34H14C13.4477 34 13 33.5523 13 33V11Z" 
            fill={isDark ? "#090d16" : "#ffffff"} 
          />

          {/* Upper Fabric Ribbon Fold (Amber Gold Gradient) */}
          <path 
            d="M19 21.5L27.2 11.2C27.6 10.7 28.2 10.4 28.8 10.4H33C33.6 10.4 33.9 11.1 33.5 11.6L22.8 24.2L19 21.5Z" 
            fill="url(#kw-gold)" 
          />

          {/* Lower Structural Twill Weave (Contrast Pillar) */}
          <path 
            d="M21 21L33.3 32.8C33.8 33.3 33.5 34 32.8 34H28.2C27.6 34 27.1 33.7 26.7 33.3L17.5 23.5L21 21Z" 
            fill={isDark ? "#1e293b" : "#f1f5f9"} 
          />

          {/* Tajima Stitch Precision Accent Point */}
          <circle 
            cx="30.5" 
            cy="13.5" 
            r="1.75" 
            fill="#fbbf24" 
          />
        </svg>

        {/* Ambient Glow behind mark on hover */}
        <div className="absolute inset-0 rounded-xl bg-amber-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>

      {/* Brand Typography & Lockup */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5">
          <span className={`text-[19px] font-black tracking-tight leading-none ${
            isDark ? 'text-white' : 'text-slate-950'
          }`}>
            KRAFT<span className="text-amber-500 font-extrabold">WEAR</span>
          </span>
          
          {/* Dubai Gold Pill */}
          <span className={`text-[9px] font-black tracking-wider uppercase px-1.5 py-0.5 rounded-[4px] leading-tight ${
            isDark 
              ? 'bg-amber-400 text-slate-950 font-bold' 
              : 'bg-slate-900 text-amber-400 font-bold border border-slate-800'
          }`}>
            DUBAI
          </span>
        </div>

        {showSubtitle && (
          <span className={`text-[9px] font-semibold tracking-[0.2em] uppercase mt-1 leading-none ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}>
            Apparel • Uniforms • Swag
          </span>
        )}
      </div>
    </Link>
  );
}


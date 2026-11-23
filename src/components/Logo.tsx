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
  className = '' 
}: LogoProps) {
  const isDark = variant === 'dark';
  const heightClass = size === 'sm' ? 'h-8' : size === 'lg' ? 'h-12' : 'h-10';

  return (
    <Link
      href="/"
      className={`inline-flex items-center group select-none shrink-0 ${
        isDark ? 'bg-white/95 px-3 py-1.5 rounded-xl shadow-sm' : ''
      } ${className}`}
    >
      <img
        src="/images/efzee-logo.png"
        alt="Uniform Studio 81"
        className={`${heightClass} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
      />
    </Link>
  );
}


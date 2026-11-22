'use client';

import React from 'react';
import { MessageSquare, PhoneCall } from 'lucide-react';

export default function WhatsAppFloatingButton() {
  const whatsappUrl = "https://wa.me/971501234567?text=Hi%20Kraftwear%20Dubai!%20I%20want%20to%20inquire%20about%20custom%20clothing/uniforms%20manufacturing.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
      {/* Tooltip prompt */}
      <div className="hidden md:flex items-center gap-2 bg-slate-900/95 text-white text-xs px-3 py-1.5 rounded-full shadow-2xl border border-slate-700 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        <span className="font-medium">Need immediate quote? Chat with our UAE team</span>
      </div>

      {/* Main button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Kraftwear on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-500/50 transition-all duration-300 transform group-hover:scale-110 active:scale-95"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400/30 animate-ping -z-10"></span>
        <MessageSquare className="w-7 h-7 fill-white text-white" />
      </a>
    </div>
  );
}


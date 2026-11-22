'use client';

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { RFQFormPayload } from '@/types';
import { submitRFQToSupabase } from '@/lib/supabase';
import { 
  X, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  AlertCircle 
} from 'lucide-react';

interface RFQModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
  initialDetails?: any;
}

export default function RFQModal({ isOpen, onClose, initialCategory, initialDetails }: RFQModalProps) {
  const [formData, setFormData] = useState<RFQFormPayload>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    category: initialCategory || 'apparel',
    productTitle: initialDetails?.product || '',
    estimatedQuantity: initialDetails?.qty || 50,
    customizationType: initialDetails?.method || 'Embroidery',
    notes: '',
    targetDate: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    if (initialCategory) {
      setFormData(prev => ({
        ...prev,
        category: initialCategory,
        productTitle: initialDetails?.product || prev.productTitle,
        estimatedQuantity: initialDetails?.qty || prev.estimatedQuantity,
      }));
    }
  }, [initialCategory, initialDetails]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    try {
      const res = await submitRFQToSupabase(formData);
      setLoading(false);
      setSubmitted(true);
      setStatusMessage(res.message);

      // Trigger Confetti Celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#10b981', '#38bdf8', '#fbbf24'],
      });
    } catch (err: any) {
      setLoading(false);
      setStatusMessage('Submission error. You can also message us directly on WhatsApp.');
    }
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Kraftwear Dubai!\nI would like a fast quotation:\n- Name: ${formData.fullName}\n- Company: ${formData.companyName}\n- Product/Category: ${formData.productTitle || formData.category}\n- Est. Quantity: ${formData.estimatedQuantity} pcs\n- Customization: ${formData.customizationType}\n- Notes: ${formData.notes || 'None'}\n\nPlease share official pricing and sample schedule.`
    );
    window.open(`https://wa.me/971501234567?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl text-white my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="space-y-2 pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>OFFICIAL RFQ & SAMPLE REQUEST</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black">
                Request a Custom <span className="text-amber-400">Wholesale Quotation.</span>
              </h2>
              <p className="text-xs text-slate-400">
                Direct in-house pricing, free digital mockups, and pre-production proof samples within 24 hours.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Tariq Al-Mansoor"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Business Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. procurement@company.ae"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">UAE / GCC Phone or WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 000 0000"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Company / Organization *</label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Dubai Logistics Group"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Product / Category</label>
                  <input
                    type="text"
                    value={formData.productTitle || formData.category}
                    onChange={(e) => setFormData({ ...formData, productTitle: e.target.value })}
                    placeholder="e.g. Heavyweight 280 GSM Tee"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Estimated Quantity (Units)</label>
                  <input
                    type="number"
                    min="1"
                    value={formData.estimatedQuantity}
                    onChange={(e) => setFormData({ ...formData, estimatedQuantity: Number(e.target.value) })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>

              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Preferred Embellishment / Branding</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Tajima Embroidery', 'Silkscreen Print', '3D Puff Print', 'Laser Engraving'].map((meth) => (
                    <button
                      key={meth}
                      type="button"
                      onClick={() => setFormData({ ...formData, customizationType: meth })}
                      className={`p-2 rounded-xl text-[11px] font-semibold border transition-all ${
                        formData.customizationType === meth
                          ? 'border-amber-400 bg-amber-400/10 text-white'
                          : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white'
                      }`}
                    >
                      {meth}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Specific Requirements or Target Delivery Date</label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Mention color preferences, sizes, GSM, or event deadlines (e.g. GITEX or Ramadan)..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:flex-1 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Submitting to Supabase...' : 'Submit Official RFQ'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 pt-2 text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  NDA & Privacy Protected
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  Avg Response: Under 2 Hours
                </span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-10 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-white">
              Quotation Request Received!
            </h3>

            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              {statusMessage || 'Your inquiry has been logged in our central database. Our Dubai apparel & workwear specialist will review your specs and email your official proforma within 2 hours.'}
            </p>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 max-w-sm mx-auto text-left text-xs space-y-1">
              <p className="text-slate-400">Order Specs Logged:</p>
              <p className="font-bold text-white">{formData.productTitle || formData.category} ({formData.estimatedQuantity} pcs)</p>
              <p className="text-amber-400">{formData.customizationType} • {formData.companyName}</p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleWhatsAppDirect}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Expedite on WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs hover:text-white"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}


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
  Clock 
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

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0f172a', '#10b981', '#f59e0b', '#0284c7'],
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-900 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="space-y-1.5 pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>OFFICIAL RFQ & SAMPLE REQUEST</span>
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                Request a Custom Wholesale Quote
              </h2>
              <p className="text-xs text-slate-500">
                Direct in-house pricing, free digital mockups, and pre-production proof samples within 24 hours.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Tariq Al-Mansoor"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Business Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="procurement@company.ae"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">UAE / GCC Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 000 0000"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Company Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Dubai Logistics Group"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Product / Category</label>
                  <input
                    type="text"
                    value={formData.productTitle || formData.category}
                    onChange={(e) => setFormData({ ...formData, productTitle: e.target.value })}
                    placeholder="e.g. Heavyweight Tee"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Estimated Quantity (Units)</label>
                  <input
                    type="number"
                    min="1"
                    value={formData.estimatedQuantity}
                    onChange={(e) => setFormData({ ...formData, estimatedQuantity: Number(e.target.value) })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 font-mono focus:outline-none focus:border-slate-400"
                  />
                </div>

              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Branding Technique</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                  {['Tajima Embroidery', 'Silkscreen Print', '3D Puff Print', 'Laser Engraving'].map((meth) => (
                    <button
                      key={meth}
                      type="button"
                      onClick={() => setFormData({ ...formData, customizationType: meth })}
                      className={`p-2 rounded-xl text-xs font-medium border transition-all ${
                        formData.customizationType === meth
                          ? 'border-slate-900 bg-slate-900 text-white font-semibold'
                          : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {meth}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Specific Requirements or Deadline</label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Mention color preferences, sizes, GSM, or event deadlines (e.g. GITEX or Ramadan)..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-400"
                ></textarea>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:flex-1 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{loading ? 'Submitting to Supabase...' : 'Submit Official RFQ'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send to WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-3 pt-1 text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Confidential RFQ
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-500" />
                  Avg Response: Under 2 Hours
                </span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Quotation Request Received!
            </h3>

            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              {statusMessage || 'Your RFQ has been logged into our central database. Our team will email your proforma invoice within 2 hours.'}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
              <button
                onClick={handleWhatsAppDirect}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Expedite on WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs hover:bg-slate-200"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

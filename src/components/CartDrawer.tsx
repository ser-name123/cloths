'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { Currency } from '@/types';
import { CURRENCY_RATES } from '@/data/mockData';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Truck, 
  ShieldCheck, 
  Lock, 
  ArrowRight,
  Sparkles,
  CreditCard,
  FileText
} from 'lucide-react';

interface CartDrawerProps {
  currentCurrency: Currency;
  onOpenQuoteModal?: (category?: string, details?: any) => void;
}

export default function CartDrawer({ currentCurrency, onOpenQuoteModal }: CartDrawerProps) {
  const { cart, isCartOpen, closeCart, updateQuantity, removeFromCart, totalItems, subtotalAED } = useCart();

  const curr = CURRENCY_RATES[currentCurrency];
  const formatPrice = (aed: number) => {
    return `${curr.symbol} ${(aed * curr.rate).toFixed(0)}`;
  };

  const freeShippingThreshold = 250;
  const progressPercent = Math.min(100, Math.round((subtotalAED / freeShippingThreshold) * 100));
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotalAED);

  const vatAED = Math.round(subtotalAED * 0.05);
  const shippingAED = subtotalAED >= freeShippingThreshold || subtotalAED === 0 ? 0 : 20;
  const totalAED = subtotalAED + vatAED + shippingAED;
  const tabbyInstallment = (totalAED / 4).toFixed(0);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={closeCart}
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in"
      />

      {/* Drawer Container */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-4 sm:pl-10">
        <div className="w-screen max-w-md bg-white text-slate-900 shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300 border-l border-slate-200">
          
          {/* 1. Header */}
          <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50/70">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 leading-tight">Wholesale & Sample Cart</h3>
                <p className="text-[11px] text-slate-500 font-medium">
                  {totalItems} {totalItems === 1 ? 'item' : 'items'} in your order
                </p>
              </div>
            </div>

            <button
              onClick={closeCart}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* 2. Free Shipping Threshold Bar */}
          <div className="px-5 py-3 bg-amber-50/70 border-b border-amber-200/60">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                {amountToFreeShipping === 0 ? (
                  <span className="text-emerald-700 font-bold">🎉 Free UAE Express Delivery Unlocked!</span>
                ) : (
                  <span>
                    Add <strong>{formatPrice(amountToFreeShipping)}</strong> more for <strong>Free UAE Express Delivery</strong>
                  </span>
                )}
              </span>
              <span className="font-mono text-[10px] text-slate-500 font-bold">{progressPercent}%</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-amber-200/70 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* 3. Items List / Empty State */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-slate-100">
            {cart.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <h4 className="text-sm font-semibold text-slate-800">Your wholesale cart is empty</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Explore our ready stock products, order physical fabric sample packs, or request bulk wholesale units.
                </p>
                <button
                  onClick={closeCart}
                  className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors shadow-xs"
                >
                  Explore Ready Stock
                </button>
              </div>
            ) : (
              <div className="space-y-4 pt-1">
                {cart.map((item) => (
                  <div key={item.id} className="pt-4 first:pt-0 flex gap-3.5 items-start">
                    {/* Item Image */}
                    <div className="w-16 h-16 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden shrink-0 relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      {item.isSample && (
                        <span className="absolute bottom-0 inset-x-0 bg-slate-900/90 text-[8.5px] font-bold text-amber-400 text-center py-0.5 uppercase tracking-wider">
                          Sample
                        </span>
                      )}
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-xs font-bold text-slate-900 leading-snug truncate max-w-[210px]">
                            {item.title}
                          </h4>
                          <p className="text-[10px] text-slate-500 mt-0.5">
                            {item.color} {item.size ? `• Size: ${item.size}` : ''}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-slate-400 hover:text-red-600 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Price & Quantity Controls */}
                      <div className="flex items-center justify-between mt-2.5">
                        <div className="flex items-center gap-1 border border-slate-200 rounded-lg p-0.5 bg-slate-50">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-5 h-5 rounded flex items-center justify-center text-slate-500 hover:bg-white hover:text-slate-900 transition-colors"
                          >
                            <Minus className="w-2.5 h-2.5" />
                          </button>
                          <span className="w-7 text-center text-xs font-bold text-slate-800 font-mono">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-5 h-5 rounded flex items-center justify-center text-slate-500 hover:bg-white hover:text-slate-900 transition-colors"
                          >
                            <Plus className="w-2.5 h-2.5" />
                          </button>
                        </div>

                        <span className="text-xs font-bold font-mono text-slate-900">
                          {formatPrice(item.priceAED * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 4. Footer & Express Checkout */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-slate-200 bg-slate-50/70 space-y-3">
              {/* Summary Rows */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-mono font-medium text-slate-900">{formatPrice(subtotalAED)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>UAE VAT (5%)</span>
                  <span className="font-mono font-medium text-slate-900">{formatPrice(vatAED)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Express Courier Delivery</span>
                  <span className="font-mono font-medium text-slate-900">
                    {shippingAED === 0 ? <strong className="text-emerald-600 font-bold uppercase">Free</strong> : formatPrice(shippingAED)}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-slate-900 pt-2 border-t border-slate-200">
                  <span>Estimated Total</span>
                  <span className="font-mono text-base text-amber-600">{formatPrice(totalAED)}</span>
                </div>
              </div>

              {/* Tabby Installments Badge */}
              <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 flex items-center justify-between text-[11px] text-slate-700">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Pay in 4 interest-free payments of <strong>AED {tabbyInstallment}</strong></span>
                </div>
                <span className="font-bold text-[10px] tracking-wider uppercase px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  Tabby
                </span>
              </div>

              {/* Checkout Button */}
              <div className="space-y-2">
                <button
                  onClick={() => {
                    alert(`Direct E-Commerce Gateway: Order of ${totalItems} items (${formatPrice(totalAED)}) initialized. Connecting to UAE Payment Gateway (Visa/Mastercard/Apple Pay/Tabby)...`);
                  }}
                  className="btn-luxury-dark w-full py-3.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Secure UAE Checkout</span>
                  <ArrowRight className="w-3.5 h-3.5 hover-arrow group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => {
                    closeCart();
                    if (onOpenQuoteModal) onOpenQuoteModal('bulk-cart', { items: cart });
                  }}
                  className="btn-luxury w-full py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  <span>Convert to B2B Proforma Quote</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 pt-1">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                <span>256-Bit SSL Encrypted • UAE FTA Registered Tax Invoice</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

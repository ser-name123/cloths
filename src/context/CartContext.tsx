'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem } from '@/types';

interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (item: Omit<CartItem, 'id'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotalAED: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 'cart-init-1',
      productId: 'prod-heavy-tee',
      title: 'Heavyweight Luxury Oversized Tee (280 GSM)',
      category: 'Custom Apparel',
      priceAED: 38,
      quantity: 1,
      color: 'Onyx Black',
      size: 'L',
      image: '/images/products/heavy-tee.jpg',
      isSample: true,
    },
    {
      id: 'cart-init-2',
      productId: 'prod-smart-tumbler',
      title: 'Smart LED Temperature Vacuum Tumbler (500ml)',
      category: 'Corporate Gifts',
      priceAED: 29,
      quantity: 2,
      color: 'Matte Obsidian',
      size: '500ml',
      image: '/images/products/smart-tumbler.jpg',
      isSample: true,
    },
  ]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (item: Omit<CartItem, 'id'>) => {
    setCart((prev) => {
      const existing = prev.find(
        (i) => i.productId === item.productId && i.color === item.color && i.size === item.size
      );
      if (existing) {
        return prev.map((i) =>
          i.id === existing.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prev, { ...item, id: `cart-${Date.now()}-${Math.random().toString(36).substring(2, 7)}` }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotalAED = cart.reduce((sum, item) => sum + item.priceAED * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        openCart,
        closeCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotalAED,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    return {
      cart: [],
      isCartOpen: false,
      openCart: () => {},
      closeCart: () => {},
      addToCart: () => {},
      removeFromCart: () => {},
      updateQuantity: () => {},
      clearCart: () => {},
      totalItems: 0,
      subtotalAED: 0,
    };
  }
  return context;
}

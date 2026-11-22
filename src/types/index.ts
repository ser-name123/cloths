export type Currency = 'AED' | 'SAR' | 'USD' | 'EUR';

export interface CurrencyRate {
  symbol: string;
  rate: number; // relative to AED
}

export interface ProductItem {
  id: string;
  title: string;
  category: 'apparel' | 'workwear' | 'gifting' | 'kits' | 'drinkware';
  categoryLabel: string;
  description: string;
  basePriceAED: number;
  moq: number;
  isNoMoq?: boolean;
  badge?: string;
  features: string[];
  colors: string[];
  popularPrints: string[];
  image: string;
}

export interface RFQFormPayload {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  category: string;
  productTitle?: string;
  estimatedQuantity: number;
  customizationType: string;
  notes: string;
  targetDate?: string;
}


import { supabase } from './supabase';

interface HotmartProduct {
  id: string;
  name: string;
  price: number;
  currency: string;
}

const HOTMART_PRODUCTS: Record<string, HotmartProduct> = {
  basic: {
    id: 'BASIC123',
    name: 'Basic IPTV Plan',
    price: 9.99,
    currency: 'USD'
  },
  premium: {
    id: 'PREMIUM456',
    name: 'Premium IPTV Plan',
    price: 19.99,
    currency: 'USD'
  },
  family: {
    id: 'FAMILY789',
    name: 'Family IPTV Plan',
    price: 29.99,
    currency: 'USD'
  }
};

export const createHotmartCheckout = (planId: string, userId: string) => {
  const product = HOTMART_PRODUCTS[planId];
  if (!product) throw new Error('Invalid plan');

  // Replace with your actual Hotmart checkout URL
  const checkoutUrl = `https://pay.hotmart.com/${product.id}`;
  
  // Add query parameters
  const params = new URLSearchParams({
    checkoutMode: 'modal',
    productId: product.id,
    userId: userId,
    price: product.price.toString(),
    currency: product.currency,
    off: 'true', // Disable Hotmart upsell
    src: 'iptv_platform'
  });

  return `${checkoutUrl}?${params.toString()}`;
};
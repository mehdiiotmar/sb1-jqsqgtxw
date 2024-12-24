import { supabase } from '../supabase';
import { PAYMENT_CONFIG } from './config';

export async function handleSubscription(productKey: string, userId: string) {
  try {
    // 1. Create pending subscription
    const { error: subError } = await supabase
      .from('subscriptions')
      .insert({
        user_id: userId,
        plan_id: productKey,
        status: 'pending',
        current_period_end: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
      });

    if (subError) throw subError;

    // 2. Get product configuration
    const product = PAYMENT_CONFIG.PRODUCTS[productKey as keyof typeof PAYMENT_CONFIG.PRODUCTS];
    if (!product) throw new Error('Invalid product');

    // 3. Create Hotmart checkout URL with callback
    const params = new URLSearchParams({
      checkoutMode: 'modal',
      productId: product.productId,
      price: product.price.toString(),
      name: product.name,
      off: 'true',
      src: 'digital_store',
      userId: userId,
      successUrl: `${window.location.origin}/payment/success`,
      cancelUrl: `${window.location.origin}/payment/cancel`
    });

    return `${PAYMENT_CONFIG.HOTMART_BASE_URL}/${product.productId}?${params.toString()}`;
  } catch (error) {
    console.error('Payment handling error:', error);
    throw error;
  }
}
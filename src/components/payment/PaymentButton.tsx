import React, { useState } from 'react';
import { ShoppingCart, Loader2 } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { handleSubscription } from '../../lib/payment/paymentHandler';
import { PAYMENT_CONFIG } from '../../lib/payment/config';

interface PaymentButtonProps {
  productKey: keyof typeof PAYMENT_CONFIG.PRODUCTS;
  onSuccess?: () => void;
}

export function PaymentButton({ productKey, onSuccess }: PaymentButtonProps) {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const product = PAYMENT_CONFIG.PRODUCTS[productKey];

  const handlePayment = async () => {
    if (!user) {
      window.location.href = '/auth';
      return;
    }

    try {
      setLoading(true);
      const checkoutUrl = await handleSubscription(productKey, user.id);
      window.open(checkoutUrl, '_blank');
      onSuccess?.();
    } catch (error) {
      console.error('Payment error:', error);
      alert('There was an error processing your payment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>Processing...</span>
        </>
      ) : (
        <>
          <ShoppingCart className="h-5 w-5" />
          <span>Buy Now - ${product.price}</span>
        </>
      )}
    </button>
  );
}
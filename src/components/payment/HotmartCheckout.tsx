import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { createHotmartCheckout } from '../../lib/hotmart';

interface HotmartCheckoutProps {
  planId: string;
  onSuccess?: () => void;
}

export function HotmartCheckout({ planId, onSuccess }: HotmartCheckoutProps) {
  const { user } = useAuth();

  const handleCheckout = () => {
    if (!user) return;
    
    try {
      const checkoutUrl = createHotmartCheckout(planId, user.id);
      // Open Hotmart checkout in a new window
      window.open(checkoutUrl, '_blank');
    } catch (error) {
      console.error('Hotmart checkout error:', error);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="w-full px-4 py-2 text-sm font-medium text-white bg-[#F04E23] hover:bg-[#D43D12] rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F04E23]"
    >
      Pay with Hotmart
    </button>
  );
}
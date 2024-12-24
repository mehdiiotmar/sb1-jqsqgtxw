import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import type { SubscriptionPlan } from '../../lib/payment/types';

interface SubscribeButtonProps {
  plan: SubscriptionPlan;
}

export function SubscribeButton({ plan }: SubscribeButtonProps) {
  const navigate = useNavigate();

  const handleSubscribe = () => {
    navigate(`/checkout/${plan.id}`);
  };

  return (
    <button
      onClick={handleSubscribe}
      className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105"
    >
      <ShoppingCart className="h-5 w-5" />
      <span>Subscribe Now - ${plan.price}/month</span>
    </button>
  );
}
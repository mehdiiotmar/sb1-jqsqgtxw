import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import { createPaymentIntent } from '../../lib/stripe';

interface PaymentFormProps {
  amount: number;
  planId: string;
  onSuccess?: () => void;
}

export function PaymentForm({ amount, planId, onSuccess }: PaymentFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { user } = useAuth();

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Create payment intent
      const paymentIntent = await createPaymentIntent(amount);

      // Record transaction
      const { error: dbError } = await supabase
        .from('payment_transactions')
        .insert({
          user_id: user?.id,
          amount,
          status: 'pending',
          payment_intent_id: paymentIntent.id
        });

      if (dbError) throw dbError;

      // Update subscription
      const { error: subError } = await supabase
        .from('subscriptions')
        .insert({
          user_id: user?.id,
          plan_id: planId,
          status: 'active',
          current_period_end: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days from now
        });

      if (subError) throw subError;

      onSuccess?.();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handlePayment} className="space-y-4">
      {/* Add Stripe Elements here */}
      {error && (
        <div className="p-4 bg-red-50 text-red-700 rounded-md">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
}
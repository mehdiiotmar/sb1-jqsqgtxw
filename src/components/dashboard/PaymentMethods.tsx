import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import { PaymentMethod } from '../../types';
import { CreditCard, Trash2 } from 'lucide-react';

export function PaymentMethods() {
  const { user } = useAuth();
  const [paymentMethods, setPaymentMethods] = React.useState<PaymentMethod[]>([]);

  React.useEffect(() => {
    if (user) {
      fetchPaymentMethods();
    }
  }, [user]);

  const fetchPaymentMethods = async () => {
    const { data, error } = await supabase
      .from('payment_methods')
      .select('*')
      .eq('user_id', user?.id);

    if (!error && data) {
      setPaymentMethods(data);
    }
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from('payment_methods')
      .delete()
      .eq('id', id);

    if (!error) {
      setPaymentMethods(paymentMethods.filter(pm => pm.id !== id));
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900">Payment Methods</h2>
      <div className="mt-6 space-y-4">
        {paymentMethods.map((method) => (
          <div key={method.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center">
              <CreditCard className="h-6 w-6 text-gray-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">
                  •••• {method.last4}
                </p>
                <p className="text-sm text-gray-600">
                  Expires {method.exp_month}/{method.exp_year}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleDelete(method.id)}
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        ))}
        {paymentMethods.length === 0 && (
          <p className="text-gray-600">No payment methods added yet.</p>
        )}
      </div>
    </div>
  );
}
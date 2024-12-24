import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StaticCheckout } from '../components/payment/StaticCheckout';
import { PAYMENT_CONFIG } from '../lib/payment/config';

export function CheckoutPage() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  
  const product = productId && PAYMENT_CONFIG.PRODUCTS[productId as keyof typeof PAYMENT_CONFIG.PRODUCTS];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Product Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500"
          >
            <span>Return to Home</span>
          </button>
        </div>
      </div>
    );
  }

  const handleSuccess = () => {
    navigate('/payment/success');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Complete Your Purchase</h1>
          <p className="mt-2 text-gray-600">Secure checkout process</p>
        </div>
        
        <StaticCheckout
          productName={product.name}
          price={product.price}
          onSuccess={handleSuccess}
        />
      </div>
    </div>
  );
}
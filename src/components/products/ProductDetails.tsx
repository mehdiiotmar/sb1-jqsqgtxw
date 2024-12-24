import React from 'react';
import { Star, Shield, Clock, Check } from 'lucide-react';
import { PaymentButton } from '../payment/PaymentButton';
import type { PaymentConfig } from '../../lib/payment/types';

interface ProductDetailsProps {
  productKey: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  rating: number;
  reviews: number;
}

export function ProductDetails({
  productKey,
  title,
  description,
  features,
  image,
  rating,
  reviews
}: ProductDetailsProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative h-96">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          
          <div className="flex items-center mt-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600">({reviews} reviews)</span>
          </div>

          <p className="mt-6 text-gray-600">{description}</p>

          <div className="mt-8">
            <h3 className="font-semibold text-gray-900">Features:</h3>
            <ul className="mt-4 space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Shield className="h-5 w-5 text-indigo-600" />
              <span>Secure payment guaranteed</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Clock className="h-5 w-5 text-indigo-600" />
              <span>Instant delivery after payment</span>
            </div>
          </div>

          <div className="mt-8">
            <PaymentButton productKey={productKey as keyof typeof PAYMENT_CONFIG.PRODUCTS} />
          </div>
        </div>
      </div>
    </div>
  );
}
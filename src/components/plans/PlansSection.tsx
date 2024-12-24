import React from 'react';
import { PlanCard } from './PlanCard';
import { PAYMENT_CONFIG } from '../../lib/payment/config';

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    price: 9.99,
    duration: 'month',
    quality: 'HD',
    connections: 1,
    features: [
      'Over 1000+ Channels',
      'Movies & TV Shows',
      'HD Quality',
      '24/7 Support',
      '1 Device Connection'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 19.99,
    duration: 'month',
    quality: '4K',
    connections: 2,
    features: [
      'Over 2000+ Channels',
      'Movies & TV Shows',
      '4K Quality',
      '24/7 Priority Support',
      '2 Device Connections',
      'Video on Demand'
    ]
  },
  {
    id: 'family',
    name: 'Family',
    price: 29.99,
    duration: 'month',
    quality: '4K',
    connections: 4,
    features: [
      'Over 3000+ Channels',
      'Movies & TV Shows',
      '4K Quality',
      '24/7 Priority Support',
      '4 Device Connections',
      'Video on Demand',
      'PPV Events Included'
    ]
  }
];

export function PlansSection() {
  return (
    <section id="plans" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Select the perfect plan for your entertainment needs
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <PlanCard 
              key={plan.id} 
              plan={plan} 
              isPopular={index === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
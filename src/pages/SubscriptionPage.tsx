import React from 'react';
import { IPTVSubscriptionForm } from '../components/payment/IPTVSubscriptionForm';

export function SubscriptionPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Choose Your IPTV Plan
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Get access to thousands of channels with our premium IPTV service
        </p>
      </div>
      
      <IPTVSubscriptionForm />
    </div>
  );
}
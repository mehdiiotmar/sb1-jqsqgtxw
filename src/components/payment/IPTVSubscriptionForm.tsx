import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import { CreditCard, Loader2, Check } from 'lucide-react';
import { HotmartCheckout } from './HotmartCheckout';

interface IPTVCredentials {
  username: string;
  password: string;
  server_url: string;
  expiry_date: string;
}

export function IPTVSubscriptionForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [credentials, setCredentials] = useState<IPTVCredentials | null>(null);
  const [currentSubscription, setCurrentSubscription] = useState<any>(null);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      checkExistingSubscription();
    }
  }, [user]);

  const checkExistingSubscription = async () => {
    try {
      const { data, error } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', user?.id)
        .eq('status', 'active')
        .single();

      if (error) throw error;
      if (data) {
        setCurrentSubscription(data);
        setCredentials(data.iptv_credentials);
      }
    } catch (err) {
      console.error('Error checking subscription:', err);
    }
  };

  const handleSubscribe = async (planId: string) => {
    if (!user) {
      setError('Please sign in to subscribe');
      return;
    }

    try {
      setLoading(true);
      setError('');

      // Create pending subscription
      const { error: subError } = await supabase
        .from('subscriptions')
        .insert({
          user_id: user.id,
          plan_id: planId,
          status: 'pending',
          current_period_end: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
        });

      if (subError) throw subError;

      // Proceed with Hotmart payment
      const checkoutUrl = `${window.location.origin}/checkout/${planId}`;
      window.location.href = checkoutUrl;

    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (currentSubscription) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center space-x-2 text-green-600 mb-4">
          <Check className="h-5 w-5" />
          <span className="font-medium">Active Subscription</span>
        </div>
        
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Your IPTV Credentials
        </h3>
        
        <div className="bg-gray-50 p-4 rounded-md">
          <div className="grid gap-3">
            <div>
              <span className="font-medium">Username:</span> {credentials?.username}
            </div>
            <div>
              <span className="font-medium">Password:</span> {credentials?.password}
            </div>
            <div>
              <span className="font-medium">Server URL:</span> {credentials?.server_url}
            </div>
            <div>
              <span className="font-medium">Valid until:</span>{' '}
              {new Date(currentSubscription.current_period_end).toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        {/* Basic Plan */}
        <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Basic</h3>
          <p className="mt-2 text-3xl font-bold">$9.99</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center text-sm text-gray-600">
              <Check className="h-4 w-4 mr-2 text-green-500" />
              1000+ Channels
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <Check className="h-4 w-4 mr-2 text-green-500" />
              HD Quality
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <Check className="h-4 w-4 mr-2 text-green-500" />
              1 Device
            </li>
          </ul>
          <button
            onClick={() => handleSubscribe('basic')}
            disabled={loading}
            className="mt-6 w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="animate-spin h-5 w-5 mx-auto" />
            ) : (
              'Subscribe Now'
            )}
          </button>
        </div>

        {/* Premium Plan */}
        <div className="p-6 bg-white rounded-lg shadow-sm border-2 border-indigo-500 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm">
              Most Popular
            </span>
          </div>
          <h3 className="text-lg font-medium text-gray-900">Premium</h3>
          <p className="mt-2 text-3xl font-bold">$19.99</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center text-sm text-gray-600">
              <Check className="h-4 w-4 mr-2 text-green-500" />
              2000+ Channels
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <Check className="h-4 w-4 mr-2 text-green-500" />
              4K Quality
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <Check className="h-4 w-4 mr-2 text-green-500" />
              2 Devices
            </li>
          </ul>
          <button
            onClick={() => handleSubscribe('premium')}
            disabled={loading}
            className="mt-6 w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="animate-spin h-5 w-5 mx-auto" />
            ) : (
              'Subscribe Now'
            )}
          </button>
        </div>

        {/* Family Plan */}
        <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Family</h3>
          <p className="mt-2 text-3xl font-bold">$29.99</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center text-sm text-gray-600">
              <Check className="h-4 w-4 mr-2 text-green-500" />
              3000+ Channels
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <Check className="h-4 w-4 mr-2 text-green-500" />
              4K Quality
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <Check className="h-4 w-4 mr-2 text-green-500" />
              4 Devices
            </li>
          </ul>
          <button
            onClick={() => handleSubscribe('family')}
            disabled={loading}
            className="mt-6 w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="animate-spin h-5 w-5 mx-auto" />
            ) : (
              'Subscribe Now'
            )}
          </button>
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-50 text-red-700 rounded-md">
          {error}
        </div>
      )}
    </div>
  );
}
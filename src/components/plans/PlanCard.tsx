import React from 'react';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Plan } from '../../types';

interface PlanCardProps {
  plan: Plan;
  isPopular?: boolean;
}

export function PlanCard({ plan, isPopular }: PlanCardProps) {
  const navigate = useNavigate();

  const handleSubscribe = () => {
    navigate(`/checkout/${plan.id}`);
  };

  return (
    <div className={`relative p-6 bg-white rounded-2xl shadow-lg ${isPopular ? 'border-2 border-indigo-500 scale-105' : ''}`}>
      {isPopular && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-md">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
        <div className="mt-4 flex items-baseline justify-center">
          <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            ${plan.price}
          </span>
          <span className="ml-1 text-xl text-gray-500">/{plan.duration}</span>
        </div>
        <p className="mt-2 text-sm text-gray-500">Up to {plan.quality} quality</p>
        <p className="text-sm text-gray-500">{plan.connections} connections</p>
      </div>
      <ul className="mt-6 space-y-4">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-indigo-500 shrink-0" />
            <span className="ml-3 text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={handleSubscribe}
        className="mt-8 w-full py-3 px-4 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Subscribe Now
      </button>
    </div>
  );
}
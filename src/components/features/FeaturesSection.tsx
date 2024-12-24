import React from 'react';
import { Tv, Wifi, Smartphone, Globe, Clock, Headphones } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    title: 'HD & 4K Content',
    description: 'Experience crystal clear picture quality with our HD and 4K streams.',
    Icon: Tv
  },
  {
    title: 'Multi-device Support',
    description: 'Watch on your TV, computer, tablet, or smartphone.',
    Icon: Smartphone
  },
  {
    title: 'Global Coverage',
    description: 'Access channels from around the world with our international coverage.',
    Icon: Globe
  },
  {
    title: 'Reliable Connection',
    description: 'Enjoy stable streaming with our optimized servers.',
    Icon: Wifi
  },
  {
    title: '24/7 Support',
    description: 'Our support team is always ready to help you.',
    Icon: Headphones
  },
  {
    title: 'Instant Access',
    description: 'Start watching immediately after subscription.',
    Icon: Clock
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Our IPTV Service?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Experience the best in streaming entertainment
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
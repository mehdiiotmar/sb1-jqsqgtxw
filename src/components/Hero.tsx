import React from 'react';
import { ShoppingBag, Shield, Globe, Zap } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557264305-7e2764da873b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1980&q=80')] mix-blend-overlay opacity-20 animate-pulse"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="pt-20 pb-24 lg:pt-32 lg:pb-36">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 animate-fade-in">
              Premium Digital Products
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mt-2">
                Instant Delivery, Lifetime Access
              </span>
            </h1>
            <p className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto">
              Get instant access to premium digital products. From software licenses to digital services, everything you need is just one click away.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <a
                href="#featured-products"
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg"
              >
                View Products
              </a>
              <a
                href="#categories"
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/20 transition-all"
              >
                Browse Categories
              </a>
            </div>
          </div>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl transform hover:scale-105 transition-all">
              <Zap className="h-12 w-12 text-pink-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Instant Delivery</h3>
              <p className="text-indigo-200">Automatic delivery within seconds</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl transform hover:scale-105 transition-all">
              <Shield className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Secure Payment</h3>
              <p className="text-indigo-200">100% secure transaction</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl transform hover:scale-105 transition-all">
              <Globe className="h-12 w-12 text-pink-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-indigo-200">Always here to help you</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl transform hover:scale-105 transition-all">
              <ShoppingBag className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Money Back</h3>
              <p className="text-indigo-200">30-day guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  rating: number;
  category: string;
  onBuyNow: () => void;
}

export function ProductCard({ title, price, image, rating, category, onBuyNow }: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-100">
      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="object-cover w-full h-48 transform transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-indigo-800 text-xs font-medium rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-indigo-600">${price.toFixed(2)}</span>
          <button 
            onClick={onBuyNow}
            className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Buy Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
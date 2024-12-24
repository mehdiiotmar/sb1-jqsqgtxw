import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 pt-32">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl">
          <div className="p-4 border-b">
            <div className="relative">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 text-lg border-none focus:ring-2 focus:ring-indigo-500 rounded-xl"
                autoFocus
              />
              <Search className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
              <button
                onClick={onClose}
                className="absolute right-3 top-4 text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="p-4">
            <div className="space-y-4">
              {/* Quick suggestions */}
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Popular Searches</h3>
                <div className="flex flex-wrap gap-2">
                  {['IPTV', 'VPN', 'Cloud Storage', 'Software'].map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
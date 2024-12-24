import React from 'react';
import { Menu, X, ShoppingBag, User, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="bg-white/95 backdrop-blur-md fixed w-full z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">DigitalStore</span>
            </Link>
            
            <div className="hidden md:flex items-center ml-8 space-x-8">
              <Link to="/products" className="text-gray-600 hover:text-gray-900">Products</Link>
              <Link to="/categories" className="text-gray-600 hover:text-gray-900">Categories</Link>
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#support" className="text-gray-600 hover:text-gray-900">Support</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <input
                type="search"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>

            {user ? (
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => navigate('/dashboard')}
                  className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
                >
                  <User className="h-5 w-5" />
                  <span>Account</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => navigate('/auth')}
                className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors"
              >
                Sign In
              </button>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/products" className="text-gray-600 hover:text-gray-900">Products</Link>
              <Link to="/categories" className="text-gray-600 hover:text-gray-900">Categories</Link>
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#support" className="text-gray-600 hover:text-gray-900">Support</a>
              {user ? (
                <button
                  onClick={() => navigate('/dashboard')}
                  className="w-full text-left px-4 py-2 bg-indigo-600 text-white rounded-full"
                >
                  Dashboard
                </button>
              ) : (
                <button
                  onClick={() => navigate('/auth')}
                  className="w-full text-left px-4 py-2 bg-indigo-600 text-white rounded-full"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
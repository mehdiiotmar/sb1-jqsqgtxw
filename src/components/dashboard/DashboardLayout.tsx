import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Tv, CreditCard, Settings, LogOut } from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { signOut } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Tv className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">IPTV Pro</span>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => signOut()}
                className="ml-4 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md flex items-center"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            {/* Sidebar */}
            <div className="w-64 mr-8">
              <nav className="space-y-1">
                <a
                  href="/dashboard"
                  className="group flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-50"
                >
                  <Tv className="h-5 w-5 mr-3 text-gray-500" />
                  My Subscription
                </a>
                <a
                  href="/dashboard/billing"
                  className="group flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-50"
                >
                  <CreditCard className="h-5 w-5 mr-3 text-gray-500" />
                  Billing
                </a>
                <a
                  href="/dashboard/settings"
                  className="group flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-50"
                >
                  <Settings className="h-5 w-5 mr-3 text-gray-500" />
                  Settings
                </a>
              </nav>
            </div>

            {/* Main content */}
            <div className="flex-1">
              <div className="bg-white shadow rounded-lg">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
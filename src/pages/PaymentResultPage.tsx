import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle, ArrowLeft } from 'lucide-react';

interface PaymentResultPageProps {
  success?: boolean;
}

export function PaymentResultPage({ success = true }: PaymentResultPageProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl">
        <div className="text-center">
          {success ? (
            <>
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
                <CheckCircle className="h-10 w-10 text-green-500" />
              </div>
              <h1 className="mt-4 text-2xl font-bold text-gray-900">Payment Successful!</h1>
              <p className="mt-2 text-gray-600">
                Thank you for your purchase. Your order has been processed successfully.
              </p>
            </>
          ) : (
            <>
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100">
                <XCircle className="h-10 w-10 text-red-500" />
              </div>
              <h1 className="mt-4 text-2xl font-bold text-gray-900">Payment Failed</h1>
              <p className="mt-2 text-gray-600">
                There was an issue processing your payment. Please try again.
              </p>
            </>
          )}
          
          <div className="mt-8 space-y-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              Go to Dashboard
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Return to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
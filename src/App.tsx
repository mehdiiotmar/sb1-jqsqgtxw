import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturesSection } from './components/features/FeaturesSection';
import { PlansSection } from './components/plans/PlansSection';
import { TutorialsSection } from './components/tutorials/TutorialsSection';
import { FAQSection } from './components/faq/FAQSection';
import { DashboardLayout } from './components/dashboard/DashboardLayout';
import { SubscriptionInfo } from './components/dashboard/SubscriptionInfo';
import { PaymentMethods } from './components/dashboard/PaymentMethods';
import { AuthPage } from './pages/AuthPage';
import { PaymentResultPage } from './pages/PaymentResultPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { PrivateRoute } from './components/auth/PrivateRoute';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <FeaturesSection />
      <PlansSection />
      <TutorialsSection />
      <FAQSection />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/checkout/:productId" element={<CheckoutPage />} />
          <Route path="/payment/success" element={<PaymentResultPage success={true} />} />
          <Route path="/payment/cancel" element={<PaymentResultPage success={false} />} />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <DashboardLayout>
                <SubscriptionInfo />
              </DashboardLayout>
            </PrivateRoute>
          } />
          <Route path="/dashboard/billing" element={
            <PrivateRoute>
              <DashboardLayout>
                <PaymentMethods />
              </DashboardLayout>
            </PrivateRoute>
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
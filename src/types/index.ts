export interface Plan {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
  quality: string;
  connections: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  deviceType: string;
  videoUrl?: string;
  steps: string[];
}

export interface User {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  current_plan?: string;
  subscription_status?: 'active' | 'canceled' | 'expired';
  subscription_end_date?: string;
  created_at: string;
}

export interface Subscription {
  id: string;
  user_id: string;
  plan_id: string;
  status: 'active' | 'canceled' | 'expired';
  current_period_end: string;
  created_at: string;
}

export interface PaymentMethod {
  id: string;
  user_id: string;
  type: 'card';
  last4: string;
  exp_month: number;
  exp_year: number;
  is_default: boolean;
}
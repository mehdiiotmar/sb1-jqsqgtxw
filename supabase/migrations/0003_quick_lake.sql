/*
  # Email and Payment Setup

  1. New Tables
    - `payment_transactions`
      - Stores payment history and transaction details
    - `email_verification`
      - Stores email verification tokens

  2. Security
    - Enable RLS on new tables
    - Add policies for secure access
*/

-- Create payment transactions table
CREATE TABLE IF NOT EXISTS payment_transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  amount decimal(10,2) NOT NULL,
  currency text DEFAULT 'USD',
  status text CHECK (status IN ('pending', 'completed', 'failed')) NOT NULL,
  payment_method_id uuid REFERENCES payment_methods(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE payment_transactions ENABLE ROW LEVEL SECURITY;

-- Add RLS policies
CREATE POLICY "Users can view own transactions"
  ON payment_transactions FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own transactions"
  ON payment_transactions FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);
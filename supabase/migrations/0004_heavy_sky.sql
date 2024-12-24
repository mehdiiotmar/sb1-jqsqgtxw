/*
  # IPTV Subscription Setup

  1. Updates
    - Add IPTV credentials to subscriptions table
    - Add new columns for subscription management
*/

-- Add IPTV credentials to subscriptions
ALTER TABLE subscriptions 
ADD COLUMN IF NOT EXISTS iptv_credentials jsonb,
ADD COLUMN IF NOT EXISTS auto_renewal boolean DEFAULT true,
ADD COLUMN IF NOT EXISTS next_billing_date timestamptz;
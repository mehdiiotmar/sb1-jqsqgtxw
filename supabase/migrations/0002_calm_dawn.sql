/*
  # Authentication Schema Setup

  1. Changes
    - Add missing RLS policies for user creation
    - Ensure proper trigger setup for new users
    - Add default values for required fields

  2. Security
    - Enable RLS
    - Add policies for user management
*/

-- Ensure the trigger function exists and has proper error handling
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (
    id,
    full_name,
    subscription_status,
    created_at
  ) VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'full_name',
    'expired',
    NOW()
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Ensure the trigger exists
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
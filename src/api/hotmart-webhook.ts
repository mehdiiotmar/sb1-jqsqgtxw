import { supabase } from '../lib/supabase';

export interface HotmartWebhookPayload {
  event: string;
  data: {
    purchase: {
      transaction: string;
      status: string;
      product: {
        id: string;
      };
      buyer: {
        email: string;
      };
    };
  };
}

export const handleHotmartWebhook = async (payload: HotmartWebhookPayload) => {
  const { event, data } = payload;

  if (event === 'PURCHASE_COMPLETE') {
    const { purchase } = data;
    
    // Find user by email
    const { data: userData, error: userError } = await supabase
      .from('profiles')
      .select('id')
      .eq('email', purchase.buyer.email)
      .single();

    if (userError) throw userError;

    // Update subscription status
    const { error: subError } = await supabase
      .from('subscriptions')
      .update({ status: 'active' })
      .eq('user_id', userData.id)
      .eq('status', 'pending');

    if (subError) throw subError;
  }
};
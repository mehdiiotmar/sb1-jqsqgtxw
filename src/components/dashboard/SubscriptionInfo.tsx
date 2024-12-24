import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import { User } from '../../types';

export function SubscriptionInfo() {
  const { user } = useAuth();
  const [profile, setProfile] = React.useState<User | null>(null);

  React.useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user?.id)
      .single();

    if (!error && data) {
      setProfile(data);
    }
  };

  if (!profile) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900">My Subscription</h2>
      <div className="mt-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900">Current Plan</h3>
          <p className="mt-2 text-sm text-gray-600">
            {profile.current_plan || 'No active plan'}
          </p>
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              Status: <span className="font-medium">{profile.subscription_status}</span>
            </p>
            {profile.subscription_end_date && (
              <p className="text-sm text-gray-600">
                Renews on: <span className="font-medium">
                  {new Date(profile.subscription_end_date).toLocaleDateString()}
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
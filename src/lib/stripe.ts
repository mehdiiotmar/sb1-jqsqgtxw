import Stripe from 'stripe';

const STRIPE_SECRET_KEY = import.meta.env.VITE_STRIPE_SECRET_KEY;
const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

export const createPaymentIntent = async (amount: number, currency: string = 'USD') => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency,
    });
    return paymentIntent;
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw error;
  }
};
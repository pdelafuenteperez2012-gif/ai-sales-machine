const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const PLANS = {
  starter: {
    name: 'Starter',
    price: 29900,
    currency: 'usd',
    interval: 'month',
    features: ['100 emails/day', '5 ad copies', '1 user']
  },
  pro: {
    name: 'Pro',
    price: 69900,
    currency: 'usd',
    interval: 'month',
    features: ['500 emails/day', '20 ad copies', '5 users', 'Priority support']
  },
  enterprise: {
    name: 'Enterprise',
    price: 129900,
    currency: 'usd',
    interval: 'month',
    features: ['Unlimited emails', 'Unlimited copies', 'Unlimited users', '24/7 support', 'Custom API']
  }
};

async function createCheckoutSession(planKey, customerEmail) {
  try {
    const plan = PLANS[planKey];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: customerEmail,
      line_items: [
        {
          price_data: {
            currency: plan.currency,
            product_data: {
              name: `AI Sales Machine - ${plan.name} Plan`,
              description: plan.features.join(', ')
            },
            recurring: {
              interval: plan.interval
            },
            unit_amount: plan.price
          },
          quantity: 1
        }
      ],
      mode: 'subscription',
      success_url: `${process.env.APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.APP_URL}/cancel`,
      subscription_data: {
        metadata: {
          plan: planKey
        }
      }
    });

    return session;
  } catch (error) {
    console.error('Stripe error:', error);
    throw error;
  }
}

async function getSubscriptionStatus(customerId) {
  try {
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      limit: 1
    });

    if (subscriptions.data.length > 0) {
      return subscriptions.data[0];
    }
    return null;
  } catch (error) {
    console.error('Error fetching subscription:', error);
    throw error;
  }
}

module.exports = {
  createCheckoutSession,
  getSubscriptionStatus,
  PLANS
};

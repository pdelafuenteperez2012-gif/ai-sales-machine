const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { generateColdEmails, generateAdCopy } = require('./claude-service');
const { createCheckoutSession, getSubscriptionStatus } = require('./stripe-service');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.post('/api/generate-emails', async (req, res) => {
  try {
    const { product, audience, competitor, count = 10 } = req.body;

    if (!product || !audience) {
      return res.status(400).json({ error: 'Product and audience required' });
    }

    const result = await generateColdEmails(product, audience, competitor, count);

    res.json({
      success: true,
      generated_at: new Date().toISOString(),
      data: result
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/generate-copy', async (req, res) => {
  try {
    const { product, audience, platform } = req.body;

    if (!product || !audience || !platform) {
      return res.status(400).json({ error: 'Product, audience, platform required' });
    }

    const result = await generateAdCopy(product, audience, platform);

    res.json({
      success: true,
      generated_at: new Date().toISOString(),
      platform: platform,
      data: result
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/checkout', async (req, res) => {
  try {
    const { plan, email } = req.body;

    if (!plan || !email) {
      return res.status(400).json({ error: 'Plan and email required' });
    }

    const session = await createCheckoutSession(plan, email);

    res.json({
      success: true,
      checkout_url: session.url
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

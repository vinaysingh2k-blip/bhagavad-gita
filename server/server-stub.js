/**
 * ============================================================================
 *  OPTIONAL BACKEND STUB — Razorpay Order Creation + Webhook Verification
 * ============================================================================
 *
 *  This file is NOT required for the simple "Payment Link" flow used by
 *  default in script.js (CONFIG.RAZORPAY_PAYMENT_LINK). It is only needed
 *  if you want the advanced inline Checkout.js modal
 *  (CONFIG.USE_INLINE_CHECKOUT = true).
 *
 *  Why a backend is required for the advanced flow:
 *    - Razorpay Key SECRET must never be exposed in frontend code.
 *    - Orders must be created server-side via the Razorpay Orders API.
 *    - Payment signatures must be verified server-side before you treat
 *      an order as "paid" (never trust the browser redirect alone).
 *    - Webhooks let Razorpay notify your server directly, independent of
 *      whether the customer's browser stays open.
 *
 *  Setup:
 *    1. cd server
 *    2. npm init -y && npm install express razorpay dotenv cors
 *    3. Copy ../.env.example to ../.env and fill in your real keys
 *    4. node server-stub.js
 *
 *  Deploy this on any Node host (Render, Railway, Vercel serverless,
 *  AWS/GCP, etc.) — do NOT deploy it as a static file, it must run as a
 *  live Node process so environment variables stay server-side only.
 * ============================================================================
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const Razorpay = require('razorpay');

const app = express();
app.use(cors());

// Webhook route needs the RAW body for signature verification, so it is
// registered BEFORE the generic json() body parser.
app.post('/api/razorpay-webhook', express.raw({ type: 'application/json' }), (req, res) => {
  try {
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
    const signature = req.headers['x-razorpay-signature'];

    const expectedSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(req.body) // raw buffer
      .digest('hex');

    if (expectedSignature !== signature) {
      console.warn('[webhook] Invalid signature — request rejected.');
      return res.status(400).json({ status: 'invalid_signature' });
    }

    const event = JSON.parse(req.body.toString());
    console.log('[webhook] Verified event:', event.event);

    // TODO: handle event.event cases, e.g. 'payment.captured', 'order.paid'
    // Update your database / trigger the digital-delivery email here.

    res.status(200).json({ status: 'ok' });
  } catch (err) {
    console.error('[webhook] Error:', err.message);
    res.status(500).json({ status: 'error' });
  }
});

app.use(express.json());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

/**
 * POST /api/create-order
 * Body: { amount: 299, lead: { name, email, mobile, city, state, message } }
 * Returns: { order_id, amount, currency }
 */
app.post('/api/create-order', async (req, res) => {
  try {
    const amountInRupees = Number(req.body.amount) || 299;
    const amountInPaise = Math.round(amountInRupees * 100);

    const order = await razorpay.orders.create({
      amount: amountInPaise,
      currency: 'INR',
      receipt: 'gita_' + Date.now(),
      notes: req.body.lead || {}
    });

    // TODO: persist the lead + order.id in your database here.

    res.json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency
    });
  } catch (err) {
    console.error('[create-order] Error:', err.message);
    res.status(500).json({ error: 'Unable to create order' });
  }
});

/**
 * POST /api/verify-payment
 * Body: { razorpay_order_id, razorpay_payment_id, razorpay_signature }
 * Call this from your success handler if you want an extra server-side
 * verification step in addition to (or instead of) webhooks.
 */
app.post('/api/verify-payment', (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const body = razorpay_order_id + '|' + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest('hex');

  const isValid = expectedSignature === razorpay_signature;

  if (isValid) {
    // TODO: mark order as paid in your database, trigger delivery email.
    return res.json({ verified: true });
  }
  res.status(400).json({ verified: false });
});

/**
 * POST /api/enquiry
 * Simple lead-capture endpoint used by the enquiry form even when no
 * payment has happened yet (script.js calls this as fire-and-forget).
 */
app.post('/api/enquiry', (req, res) => {
  console.log('[enquiry] New lead:', req.body);
  // TODO: save to your CRM / database / Google Sheet / email yourself.
  res.json({ received: true });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Razorpay backend stub running on http://localhost:${PORT}`);
});

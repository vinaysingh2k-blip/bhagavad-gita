/* ==========================================================================
   Page-specific configuration — Landing Page 14: "Gita for Steadiness Over Anxiety"
   Loaded BEFORE ../assets/main.js. Replace placeholders before launch.
   ========================================================================== */
window.PAGE_CONFIG = {
  PRODUCT_NAME: 'Gita for Steadiness Over Anxiety — 12-Chapter Original Commentary',
  DOWNLOAD_FILE: '../assets/downloads/gita-for-steadiness-over-anxiety.pdf',
  BRAND_NAME: 'Krishna Vani',
  AMOUNT_INR: 199,
  PAY_BUTTON_LABEL: 'Pay ₹199 & Get Instant Access →',

  // Option A (simplest): a hosted Razorpay Payment Link. Replace this with
  // your real link — until then, the button shows a graceful fallback.
  RAZORPAY_PAYMENT_LINK: 'https://rzp.io/rzp/NeIQWge6',

  // Option B (advanced): inline Checkout.js modal. See /server/server-stub.js.
  USE_INLINE_CHECKOUT: false,
  RAZORPAY_KEY_ID: 'rzp_test_PLACEHOLDER_KEY_ID',
  CREATE_ORDER_ENDPOINT: '/api/create-order',

  SUCCESS_PAGE: '../assets/success.html',
  FAILURE_PAGE: '../assets/failure.html',
  ENQUIRY_ENDPOINT: '/api/enquiry'
};

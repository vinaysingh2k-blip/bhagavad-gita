/* ==========================================================================
   Page-specific configuration — Landing Page 4: "The Divine Song of God"
   Loaded BEFORE ../assets/main.js. Replace placeholders before launch.
   ========================================================================== */
window.PAGE_CONFIG = {
  PRODUCT_NAME: 'Bhagavad Gita: The Divine Song of God — Illustrated Edition',
  DOWNLOAD_FILE: '../assets/downloads/divine-song-of-god.pdf',
  BRAND_NAME: 'Krishna Vani',
  AMOUNT_INR: 299,
  PAY_BUTTON_LABEL: 'Pay ₹299 & Get Instant Access →',

  RAZORPAY_PAYMENT_LINK: 'https://rzp.io/rzp/IHJMa3Q5',

  USE_INLINE_CHECKOUT: false,
  RAZORPAY_KEY_ID: 'rzp_test_PLACEHOLDER_KEY_ID',
  CREATE_ORDER_ENDPOINT: '/api/create-order',

  SUCCESS_PAGE: '../assets/success.html',
  FAILURE_PAGE: '../assets/failure.html',
  ENQUIRY_ENDPOINT: '/api/enquiry'
};

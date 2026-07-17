/* ==========================================================================
   Bhagavad Gita Landing Page — script.js
   Handles: form validation, Razorpay checkout (placeholder-ready),
            sticky CTA visibility, scroll reveals.
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------
   * CONFIG — replace these placeholders with real values before launch.
   * ------------------------------------------------------------------ */
  var CONFIG = {
    // Option A (simplest): a hosted Razorpay Payment Link, e.g. "https://rzp.io/l/abc123XY"
    // Leave as-is until you provide the real link; the button will show a
    // friendly "coming soon" message instead of breaking.
    RAZORPAY_PAYMENT_LINK: 'https://rzp.io/l/PLACEHOLDER-PAYMENT-LINK',

    // Option B (advanced): inline Checkout.js modal using a Key ID + a
    // server-generated order_id. Only used if USE_INLINE_CHECKOUT = true
    // and a real key has been set. See /server/server-stub.js + README.md.
    USE_INLINE_CHECKOUT: false,
    RAZORPAY_KEY_ID: 'rzp_test_PLACEHOLDER_KEY_ID',
    CREATE_ORDER_ENDPOINT: '/api/create-order', // your backend endpoint
    AMOUNT_INR: 299,

    PRODUCT_NAME: 'Bhagavad Gita — Illustrated Edition',
    SUCCESS_PAGE: 'success.html',
    FAILURE_PAGE: 'failure.html',
    ENQUIRY_ENDPOINT: '/api/enquiry' // optional backend endpoint to store leads
  };

  document.addEventListener('DOMContentLoaded', function () {
    initFormValidation();
    initStickyCta();
    initScrollReveal();
  });

  /* ------------------------------------------------------------------
   * FORM VALIDATION + CHECKOUT TRIGGER
   * ------------------------------------------------------------------ */
  function initFormValidation() {
    var form = document.getElementById('checkout-form');
    if (!form) return;

    var fields = {
      name: { el: document.getElementById('name'), err: document.getElementById('err-name') },
      email: { el: document.getElementById('email'), err: document.getElementById('err-email') },
      mobile: { el: document.getElementById('mobile'), err: document.getElementById('err-mobile') },
      city: { el: document.getElementById('city'), err: document.getElementById('err-city') },
      state: { el: document.getElementById('state'), err: document.getElementById('err-state') }
    };

    var successMsg = document.getElementById('form-success');
    var genericErr = document.getElementById('form-generic-error');
    var payBtn = document.getElementById('pay-btn');

    // Real-time clear-on-input
    Object.keys(fields).forEach(function (key) {
      fields[key].el.addEventListener('input', function () {
        clearFieldError(fields[key]);
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      genericErr.hidden = true;
      successMsg.hidden = true;

      var isValid = true;

      if (!fields.name.el.value.trim() || fields.name.el.value.trim().length < 2) {
        setFieldError(fields.name, 'Please enter your full name.');
        isValid = false;
      }

      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(fields.email.el.value.trim())) {
        setFieldError(fields.email, 'Please enter a valid email address.');
        isValid = false;
      }

      var mobilePattern = /^[6-9]\d{9}$/;
      if (!mobilePattern.test(fields.mobile.el.value.trim())) {
        setFieldError(fields.mobile, 'Enter a valid 10-digit mobile number.');
        isValid = false;
      }

      if (!fields.city.el.value.trim()) {
        setFieldError(fields.city, 'Please enter your city.');
        isValid = false;
      }

      if (!fields.state.el.value.trim()) {
        setFieldError(fields.state, 'Please enter your state.');
        isValid = false;
      }

      if (!isValid) {
        genericErr.hidden = false;
        var firstInvalid = form.querySelector('.invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      var leadData = {
        name: fields.name.el.value.trim(),
        email: fields.email.el.value.trim(),
        mobile: fields.mobile.el.value.trim(),
        city: fields.city.el.value.trim(),
        state: fields.state.el.value.trim(),
        message: document.getElementById('message').value.trim(),
        product: CONFIG.PRODUCT_NAME,
        amount: CONFIG.AMOUNT_INR
      };

      // Fire-and-forget lead capture (safe no-op if endpoint doesn't exist yet)
      submitLead(leadData);

      successMsg.hidden = false;
      payBtn.disabled = true;
      payBtn.textContent = 'Redirecting to secure payment…';

      setTimeout(function () {
        startCheckout(leadData);
        payBtn.disabled = false;
        payBtn.textContent = 'Pay ₹299 & Get Instant Access →';
      }, 700);
    });
  }

  function setFieldError(field, message) {
    field.el.classList.add('invalid');
    field.err.textContent = message;
  }

  function clearFieldError(field) {
    field.el.classList.remove('invalid');
    field.err.textContent = '';
  }

  function submitLead(leadData) {
    if (!CONFIG.ENQUIRY_ENDPOINT) return;
    try {
      fetch(CONFIG.ENQUIRY_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData)
      }).catch(function () {
        /* Backend not deployed yet — safe to ignore in placeholder mode. */
      });
    } catch (err) {
      /* no-op */
    }
  }

  /* ------------------------------------------------------------------
   * RAZORPAY CHECKOUT (placeholder-ready)
   * ------------------------------------------------------------------ */
  function startCheckout(leadData) {
    if (CONFIG.USE_INLINE_CHECKOUT && CONFIG.RAZORPAY_KEY_ID.indexOf('PLACEHOLDER') === -1) {
      startInlineRazorpayCheckout(leadData);
      return;
    }

    if (CONFIG.RAZORPAY_PAYMENT_LINK.indexOf('PLACEHOLDER') === -1) {
      // Real payment link has been configured — redirect straight to it.
      window.location.href = CONFIG.RAZORPAY_PAYMENT_LINK;
      return;
    }

    // No real payment method configured yet — friendly fallback for launch prep.
    alert(
      'Payment gateway is being finalized. Your details have been noted — ' +
      'our team will reach out on WhatsApp/email shortly to complete your order.\n\n' +
      '(Site owner: replace CONFIG.RAZORPAY_PAYMENT_LINK in script.js with your real Razorpay link to enable instant checkout.)'
    );
  }

  /**
   * Advanced flow: uses Razorpay Checkout.js with a server-created order.
   * Requires a backend endpoint (see /server/server-stub.js) that returns
   * { order_id, amount, currency } from Razorpay Orders API.
   */
  function startInlineRazorpayCheckout(leadData) {
    fetch(CONFIG.CREATE_ORDER_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: CONFIG.AMOUNT_INR, lead: leadData })
    })
      .then(function (res) { return res.json(); })
      .then(function (order) {
        var options = {
          key: CONFIG.RAZORPAY_KEY_ID,
          amount: order.amount,
          currency: order.currency || 'INR',
          name: 'Krishna Vani',
          description: CONFIG.PRODUCT_NAME,
          order_id: order.order_id,
          prefill: {
            name: leadData.name,
            email: leadData.email,
            contact: leadData.mobile
          },
          theme: { color: '#E08A1E' },
          handler: function (response) {
            // Verify response.razorpay_payment_id / order_id / signature on
            // your backend before redirecting to success.
            window.location.href = CONFIG.SUCCESS_PAGE +
              '?payment_id=' + encodeURIComponent(response.razorpay_payment_id || '');
          },
          modal: {
            ondismiss: function () {
              window.location.href = CONFIG.FAILURE_PAGE;
            }
          }
        };
        var rzp = new window.Razorpay(options);
        rzp.on('payment.failed', function () {
          window.location.href = CONFIG.FAILURE_PAGE;
        });
        rzp.open();
      })
      .catch(function () {
        alert('Unable to start payment right now. Please try again in a moment.');
      });
  }

  /* ------------------------------------------------------------------
   * STICKY MOBILE CTA — hide once the pricing section is in view
   * ------------------------------------------------------------------ */
  function initStickyCta() {
    var sticky = document.getElementById('sticky-cta');
    var buySection = document.getElementById('buy');
    if (!sticky || !buySection || !('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        sticky.style.display = entry.isIntersecting ? 'none' : '';
      });
    }, { threshold: 0.15 });

    observer.observe(buySection);
  }

  /* ------------------------------------------------------------------
   * SCROLL REVEAL — light fade-up for section headings/cards
   * ------------------------------------------------------------------ */
  function initScrollReveal() {
    if (!('IntersectionObserver' in window)) return;
    var targets = document.querySelectorAll(
      '.problem-card, .teaching-card, .testimonial-card, .chapter-item, .value-item'
    );
    targets.forEach(function (el) { el.classList.add('reveal'); });

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    targets.forEach(function (el) { observer.observe(el); });
  }
})();

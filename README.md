# Krishna Vani — 4 Bhagavad Gita Landing Pages

Four independent, production-ready landing pages — one per real source PDF
in `Downloads/Bhagwad Gita/` — built in the style of krishnavani.org's
landing pages, with Razorpay payment placeholders ready to activate and
real cover art extracted from each source PDF.

| Page | Folder | Product | Chapters | Price |
|---|---|---|---|---|
| 1 | `landing-page-1/` | Gita for Harmony | 18 (complete) | ₹299 |
| 2 | `landing-page-2/` | Gita for Career Success | 12 (companion) | ₹199 |
| 3 | `landing-page-3/` | Gita for Harmony & Balance | 12 (companion) | ₹199 |
| 4 | `landing-page-4/` | The Divine Song of God | 18 (complete) | ₹299 |

These are four genuinely different products (verified against their source
PDFs), not one product re-skinned four ways: pages 2 and 3 distill the same
12 core chapters with different reflection text (career vs. everyday
balance); pages 1 and 4 are both complete 18-chapter editions, with page 4
additionally including a dedication, preface, and Four Paths section.

## Project structure

```
ebook/
├── index.html                 Hub page — 4 product cards (cover, title, price, "Get it →")
├── assets/
│   ├── styles.css               Shared design system (used by all pages)
│   ├── main.js                  Shared behavior: form validation, Razorpay
│   │                             checkout, sticky CTA, scroll reveals —
│   │                             reads window.PAGE_CONFIG per page
│   ├── success.html              Shared post-payment success page
│   ├── failure.html              Shared post-payment failure/retry page
│   └── covers/                   Real cover art cropped from each source PDF (JPEG, ~100-250KB each)
│       ├── gita-for-harmony.jpg
│       ├── gita-for-career-success.jpg
│       ├── gita-for-harmony-balance.jpg
│       └── divine-song-of-god.jpg
├── landing-page-1/
│   ├── index.html                 "Gita for Harmony" page content
│   └── config.js                   Page-specific CONFIG (price, product name, Razorpay link)
├── landing-page-2/                 "Gita for Career Success" (same structure)
├── landing-page-3/                 "Gita for Harmony & Balance" (same structure)
├── landing-page-4/                 "The Divine Song of God" (same structure)
├── robots.txt                     Search engine crawl rules (all 4 URLs)
├── sitemap.xml                     XML sitemap (hub + 4 landing pages)
├── google-ads-assets.md             Full Google Ads copy for all 4 pages
├── .env.example                     Environment variable template (backend only)
├── server/
│   ├── server-stub.js                Optional shared Node/Express backend for Razorpay
│   └── package.json                   Backend dependencies
└── README.md                          This file
```

**Why shared `/assets`?** Each landing page has its own HTML content and its
own `config.js` (so it is independently deployable/trackable, per the "each
page has its own URL structure" requirement), but CSS/JS/success-failure
pages are shared via relative paths (`../assets/...`) to stay DRY and keep
brand consistency across all four — exactly what the "Modular... Reusable"
code standard calls for. If you ever need a page to diverge visually, copy
`assets/styles.css` into that page's own folder and link it locally instead.

## 1. Quick start (view the site locally)

No build step needed — it's plain HTML/CSS/JS.

```bash
# from the ebook/ folder
npx serve .
# or
python -m http.server 5500
```

Then visit `http://localhost:5500` for the hub, or
`http://localhost:5500/landing-page-1/` etc. directly.

## 2. Deploying

Any static host works — no server required for the base sites:

- **Netlify / Vercel:** drag-and-drop the `ebook/` folder (excluding `server/`), or connect a Git repo.
- **GitHub Pages:** push this folder to a repo and enable Pages — each landing page is reachable at `yoursite.com/landing-page-1/` etc. automatically.
- **Shared hosting / cPanel:** upload everything except `server/` to `public_html`.

Before going live, for **each** landing page and the hub, update:
- `<link rel="canonical">`, Open Graph `og:url`/`og:image`, and JSON-LD `url` fields — replace `https://www.yourdomain.com/` with your real domain.
- `robots.txt` and `sitemap.xml` — same domain replacement (one edit covers all 4 pages since they're listed together).
- Footer email address and WhatsApp number (`wa.me/910000000000` in each page's floating button — replace with your real WhatsApp Business number).

## 3. Connecting Razorpay (same setup for all 4 pages)

Each landing page loads its own `config.js` before the shared `assets/main.js`.
All four `config.js` files use the same two options:

### Option A — Razorpay Payment Link (simplest, no backend needed)

1. In the Razorpay Dashboard (account: `synapsedigitalsolutions.dm@gmail.com`) → **Payment Links** → create one link per price point: **₹199** (for pages 2 and 3) and **₹299** (for pages 1 and 4). Four separate links, one per page, is recommended so Razorpay reporting shows revenue per product.
2. Open **each** `landing-page-N/config.js`, find:
   ```js
   RAZORPAY_PAYMENT_LINK: 'https://rzp.io/l/PLACEHOLDER-PAYMENT-LINK',
   ```
3. Replace the placeholder with your real link (you can use the same link across all 4 pages, or a different one per page if you want per-page revenue tracking in Razorpay).

Until you do this, every "Pay & Get Instant Access" button shows a friendly
"payment being finalized" message instead of erroring out.

### Option B — Inline Checkout (advanced, needs a backend)

One shared backend (`/server/server-stub.js`) can serve all 4 pages, since
the order amount and product name are passed dynamically from each page's
`config.js`.

1. Get your **Key ID** and **Key Secret** from Razorpay Dashboard → Settings → API Keys.
2. Deploy `/server/server-stub.js` (Node/Express) to any Node host:
   ```bash
   cd server
   npm install
   cp ../.env.example ../.env   # fill in real RAZORPAY_KEY_ID / SECRET / WEBHOOK_SECRET
   npm start
   ```
3. In **each** `landing-page-N/config.js`, set:
   ```js
   USE_INLINE_CHECKOUT: true,
   RAZORPAY_KEY_ID: 'rzp_live_xxxxxxxxxxxx',   // public key — safe to expose in frontend
   CREATE_ORDER_ENDPOINT: 'https://your-backend.example.com/api/create-order',
   ```
   **Never** put `RAZORPAY_KEY_SECRET` in any frontend file — it stays in `.env` on the server only.
4. In Razorpay Dashboard → Settings → Webhooks, point to `https://your-backend.example.com/api/razorpay-webhook`, subscribe to `payment.captured` and `order.paid`, and copy the **Webhook Secret** into `.env`.
5. Test with Razorpay's test-mode cards before switching to live keys.

### Test → Production checklist

- [ ] Start with `rzp_test_...` keys, confirm a full test payment end-to-end on **one** page first.
- [ ] Repeat the smoke test on the other 3 pages (same backend, different `config.js`).
- [ ] Swap to `rzp_live_...` keys only after testing.
- [ ] Confirm webhook signature verification works (check server logs).
- [ ] Set up an email/WhatsApp automation triggered by the webhook to deliver the digital file.

## 4. Forms

Each landing page's enquiry/checkout form (`#checkout-form`) validates:
Name, Email, Mobile (10-digit Indian format), City, State, optional Message
— client-side, via the shared `assets/main.js`, with inline error messages
and a success state. It also fires a non-blocking `POST` to each page's
`ENQUIRY_ENDPOINT` (`/api/enquiry`, stubbed in `server-stub.js`) so you
capture leads even before Razorpay is fully wired up.

## 5. SEO

- Each landing page has its own title, meta description, Open Graph tags, and JSON-LD (`Product`, `FAQPage`, `BreadcrumbList`) tailored to its angle and keywords.
- Update `priceValidUntil`, `aggregateRating`, and `sku` in each page's Product schema to real, accurate values before launch.
- **Replace the sample testimonials** (clearly marked with an HTML comment in each page) with real, verifiable customer reviews before publishing.
- The hub `index.html` carries a `CollectionPage` schema linking to all 4 landing pages.

## 6. Google Ads

Complete, page-specific copy — headlines, descriptions, sitelinks, callouts,
structured snippets, keyword lists (with match types), and negative
keywords for **all 4 pages** — is in [`google-ads-assets.md`](./google-ads-assets.md).
Run each landing page as its own campaign/ad group; don't mix headlines
across pages, since Quality Score depends on tight message-to-landing-page relevance.

## 7. Performance & accessibility notes

- Cover images (`assets/covers/*.jpg`) are real cover art cropped from each source PDF, resized to 900px wide and compressed to ~100-250KB each — small enough to keep every page fast. Each landing page's hero cover loads eagerly (it's the likely LCP element, above the fold); the hub page lazy-loads its 2nd-4th cards (`loading="lazy"`) since only the 1st is guaranteed above the fold on most screens.
- All `<img>` tags carry explicit `width`/`height` to prevent layout shift (a Core Web Vitals / CLS factor).
- To further optimize: convert the JPEGs to WebP/AVIF with a `<picture>` fallback.
- Fonts load via `<link>` with `preconnect` for faster first paint.
- All interactive elements (`<details>` FAQ, form fields, buttons) are keyboard-accessible by default.

## 8. Customizing a page or adding a 5th

- To edit one page's price/copy: change `landing-page-N/index.html` and `landing-page-N/config.js` — no impact on the other 3 pages.
- To change the shared look everywhere: edit `assets/styles.css`.
- To add a 5th landing page: copy an existing `landing-page-N/` folder, update its `config.js` and content, then add it to `index.html`'s hub grid and to `sitemap.xml`/`robots.txt`.

# Krishna Vani — 15 Bhagavad Gita Landing Pages

Fifteen independent, production-ready landing pages — one per real source PDF
in `Downloads/Bhagwad Gita/` — built in the style of krishnavani.org's
landing pages, with Razorpay payment placeholders ready to activate and
real cover art extracted from each source PDF.

## Catalog

### Complete illustrated editions (₹299, full 18-chapter translation)
| Page | Folder | Product |
|---|---|---|
| 1 | `landing-page-1/` | Gita for Harmony |
| 4 | `landing-page-4/` | The Divine Song of God |

### Focused companions (₹199, 12 core chapters, full translation)
| Page | Folder | Product |
|---|---|---|
| 2 | `landing-page-2/` | Gita for Career Success |
| 3 | `landing-page-3/` | Gita for Harmony & Balance |

### The Practical Guide Series (₹199, 12 chapters, **original commentary — not a translation**)
| Page | Folder | Product |
|---|---|---|
| 5 | `landing-page-5/` | Gita for Productivity |
| 6 | `landing-page-6/` | Gita for Energy & Health |
| 7 | `landing-page-7/` | Gita for Building Discipline |
| 8 | `landing-page-8/` | Gita for Earned Confidence |
| 9 | `landing-page-9/` | Gita for Finding Your Purpose |
| 10 | `landing-page-10/` | Gita for Money & Abundance |
| 11 | `landing-page-11/` | Gita for Deeper Relationships |
| 12 | `landing-page-12/` | Gita for Calm, Steady Leadership |
| 13 | `landing-page-13/` | Gita for Grounded Parenting |
| 14 | `landing-page-14/` | Gita for Steadiness Over Anxiety |

### Other sacred texts (₹99)
| Page | Folder | Product |
|---|---|---|
| 15 | `landing-page-15/` | Hanuman Chalisa |

**Important distinction, verified against each source PDF:** pages 1–4
present the actual Bhagavad Gita text (Sanskrit shloka, Hindi translation,
English meaning) and page 15 presents the actual traditional Hanuman
Chalisa the same way. Pages 5–14 are different: each source PDF states
verbatim *"This book offers an original, contemporary commentary inspired
by the themes of the Bhagavad Gita. It is not a translation of the Gita and
does not reproduce any copyrighted translation of the source text."* Their
landing pages are written accordingly — citing one verse per chapter by
reference (e.g. "Bhagavad Gita 2.47") alongside original commentary, a
practical exercise, and reflection questions, but never claiming to be a
Sanskrit/Hindi/English translation. Keep this distinction if you edit copy
on pages 5–14 — claiming translation content there would misrepresent the
product.

## Project structure

```
ebook/
├── index.html                 Hub page — all 15 product cards, grouped into
│                                4 sections (Complete Editions, Focused
│                                Companions, Practical Guide Series, Other
│                                Sacred Texts), each card: cover, title,
│                                price, "Get it →"
├── assets/
│   ├── styles.css               Shared design system (used by all pages)
│   ├── main.js                  Shared behavior: form validation, Razorpay
│   │                             checkout, sticky CTA, scroll reveals —
│   │                             reads window.PAGE_CONFIG per page
│   ├── success.html              Shared post-payment success page
│   ├── failure.html              Shared post-payment failure/retry page
│   └── covers/                   Real cover art extracted from each source
│                                   PDF's own page 1 (JPEG, full ~100-250KB,
│                                   square 800x800 ~100-160KB). Every product
│                                   has <slug>.jpg (hero, full cover) and
│                                   <slug>-square.jpg (hub card, letterboxed
│                                   to a square so no title text is cropped).
├── landing-page-1/ … landing-page-15/
│   ├── index.html                 Page content (see catalog above)
│   └── config.js                   Page-specific CONFIG (price, product
│                                     name, Razorpay link) — AMOUNT_INR is
│                                     199 for most pages, 99 for page 15,
│                                     299 for pages 1 and 4.
├── robots.txt                     Search engine crawl rules
├── sitemap.xml                     XML sitemap (hub + all 15 landing pages)
├── google-ads-assets.md             Google Ads copy — currently complete
│                                     for pages 1-4; add campaigns for 5-15
│                                     using the same per-page format before
│                                     running ads on those products.
├── .env.example                     Environment variable template (backend only)
├── server/
│   ├── server-stub.js                Optional shared Node/Express backend for Razorpay
│   └── package.json                   Backend dependencies
└── README.md                          This file
```

**Why shared `/assets`?** Each landing page has its own HTML content and its
own `config.js` (so it is independently deployable/trackable, per the "each
page has its own URL structure" requirement), but CSS/JS/success-failure
pages and cover images are shared via relative paths (`../assets/...`) to
stay DRY and keep brand consistency across all fifteen — exactly what the
"Modular... Reusable" code standard calls for. If you ever need a page to
diverge visually, copy `assets/styles.css` into that page's own folder and
link it locally instead.

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
- `robots.txt` and `sitemap.xml` — same domain replacement (one edit covers all 15 pages since they're listed together).
- Footer email address and WhatsApp number (`wa.me/910000000000` in each page's floating button — replace with your real WhatsApp Business number).

## 3. Connecting Razorpay (same setup for all 15 pages)

Each landing page loads its own `config.js` before the shared `assets/main.js`.
All fifteen `config.js` files use the same two options:

### Option A — Razorpay Payment Link (simplest, no backend needed)

1. In the Razorpay Dashboard (account: `synapsedigitalsolutions.dm@gmail.com`) → **Payment Links** → create one link per price point: **₹99** (page 15), **₹199** (pages 2, 3, 5–14), and **₹299** (pages 1, 4). A separate link per page is recommended so Razorpay reporting shows revenue per product, even where the price is shared.
2. Open **each** `landing-page-N/config.js`, find:
   ```js
   RAZORPAY_PAYMENT_LINK: 'https://rzp.io/l/PLACEHOLDER-PAYMENT-LINK',
   ```
3. Replace the placeholder with your real link.

Until you do this, every "Pay & Get Instant Access" button shows a friendly
"payment being finalized" message instead of erroring out.

### Option B — Inline Checkout (advanced, needs a backend)

One shared backend (`/server/server-stub.js`) can serve all 15 pages, since
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
- [ ] Repeat the smoke test on a page from each price tier (₹99, ₹199, ₹299) — same backend, different `config.js`.
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
- The hub `index.html` carries a `CollectionPage` schema linking to all 15 landing pages.

## 6. Google Ads

Page-specific copy — headlines, descriptions, sitelinks, callouts, structured
snippets, keyword lists (with match types), and negative keywords — is in
[`google-ads-assets.md`](./google-ads-assets.md). **Currently complete for
pages 1-4 only** (the original catalog); pages 5-15 were added afterward and
need equivalent campaign copy written in the same format before you run ads
on them. Run each landing page as its own campaign/ad group; don't mix
headlines across pages, since Quality Score depends on tight
message-to-landing-page relevance.

## 7. Performance & accessibility notes

- Cover images (`assets/covers/*.jpg`) are real cover art extracted from each source PDF's own first page, resized to 900px wide and compressed to ~100-250KB (full) / ~100-160KB (square) each — small enough to keep every page fast. Each landing page's hero cover loads eagerly (it's the likely LCP element, above the fold); the hub page lazy-loads all but its first card since only that one is guaranteed above the fold on most screens.
- All `<img>` tags carry explicit `width`/`height` matching the actual file dimensions, to prevent layout shift (a Core Web Vitals / CLS factor). If you replace any cover image with a different aspect ratio, update the matching `width`/`height` attributes in that page's hero **and** in the hub card.
- To further optimize: convert the JPEGs to WebP/AVIF with a `<picture>` fallback.
- Fonts load via `<link>` with `preconnect` for faster first paint.
- All interactive elements (`<details>` FAQ, form fields, buttons) are keyboard-accessible by default.

## 8. Customizing a page or adding another

- To edit one page's price/copy: change `landing-page-N/index.html` and `landing-page-N/config.js` — no impact on other pages.
- To change the shared look everywhere: edit `assets/styles.css`.
- To add a 16th landing page: copy an existing `landing-page-N/` folder that matches the new product's content type (translation-style like `landing-page-2`, or commentary-style like `landing-page-5`), update its `config.js` and content, extract/add its cover art to `assets/covers/`, then add it to `index.html`'s hub grid and to `sitemap.xml`/`robots.txt`.

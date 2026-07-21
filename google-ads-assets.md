# Google Ads Assets — Krishna Vani

> **Coverage note:** the site now has 15 landing pages total (see the
> catalog table in `README.md`), but the per-page campaigns below have
> complete copy for **only pages 1-4** (the original catalog). Pages 5-15
> (the Practical Guide Series + Hanuman Chalisa) still need equivalent
> headline/description/keyword sections written in the same format before
> running ads on them. **The Home Page Master Campaign below is separate
> from these and is ready to run today.**

---

# 🏠 Home Page Master Campaign (Recommended starting campaign)

**Goal:** capture broad "Bhagavad Gita" and "Hanuman Chalisa" search intent
and send it to the home page, where visitors can browse and pick from all
15 editions — rather than betting the whole budget on one product page.

## Campaign settings

| Setting | Value |
|---|---|
| Campaign name | **krishnavani max leads conversion** |
| Campaign type | Search Network only (turn off Display/Search Partners to protect a small budget) |
| Daily budget | **₹80/day** (~₹2,400/month) |
| Bidding | **Start on "Maximize Clicks"** — see note below on why, despite the campaign name |
| Locations | **India only** (all states/UTs — Pan India, no other countries) |
| Languages | English + Hindi |
| Final URL (all ads) | `https://krishnavani-bhagwad-gita.vercel.app/index.html` |
| Ad rotation | Optimize: prefer best performing ads |

**On the campaign name vs. bidding strategy:** "Maximize Conversions" bidding
needs conversion history to actually work — pointed at a brand-new account
with zero recorded conversions, it has nothing to optimize against and
often overspends on the wrong clicks in week one. The name
"krishnavani max leads conversion" describes the *goal*; the *bid strategy*
should still start on **Maximize Clicks** for the first ~2-3 weeks (long
enough to gather 15-20 real conversions), then switch to **Maximize
Conversions** (or **Target CPA** once you know a realistic cost-per-sale).
Google Ads → this campaign → Settings → Bidding — that's the one setting to
revisit later; everything else here is ready as-is.

**Conversion tracking — required for "max leads conversion" to mean anything:**
Set up a Google Ads conversion action (or import from GA4) that fires on
`assets/success.html`, not on `index.html`. That page only loads after a
real Razorpay payment completes, so a hit there is a genuine sale, not just
a page view. Without this, Google Ads has no way to know which clicks
actually converted, and "Maximize Conversions" can never be switched on
meaningfully.

**Budget reality check:** ₹80/day is tight — realistically **8-25 clicks/day**
depending on actual CPC in this niche. At this budget, use **Phrase Match**
and **Exact Match only** (skip Broad Match entirely), and keep the keyword
list short and specific rather than broad. Broad single-word terms like
"bhagavad gita" alone will burn the whole daily budget on 2-3 clicks from
extremely high-competition, often irrelevant traffic (people searching for
temples, movies, general info — not to buy an ebook). The long-tail,
purchase-intent phrases below are deliberately favored for this reason.

Structure this as **one campaign with two ad groups** below — same budget
pool, same final URL, but each ad group's headlines/keywords stay tightly
themed to its own search intent (this is what actually protects Quality
Score and keeps CPC down, more than the budget setting itself).

---

## Ad Group 1: "Bhagavad Gita Ebook"

### Headlines (15, ≤30 characters)
| # | Headline | Chars |
|---|---|---|
| 1 | Bhagavad Gita PDF Book | 23 |
| 2 | Illustrated Gita Online | 24 |
| 3 | Gita eBook – From ₹199 | 22 |
| 4 | Sanskrit, Hindi & English | 26 |
| 5 | Shrimad Bhagavad Gita | 22 |
| 6 | Complete Gita, 18 Chapters | 27 |
| 7 | Gita for Modern Life | 21 |
| 8 | Instant Digital Delivery | 25 |
| 9 | Read the Gita Today | 20 |
| 10 | Timeless Wisdom, ₹199 | 21 |
| 11 | Illustrated Every Chapter | 26 |
| 12 | Gita Book for Beginners | 24 |
| 13 | Shop Gita Editions Online | 26 |
| 14 | Ancient Wisdom, Modern Life | 28 |
| 15 | 7-Day Money-Back Guarantee | 27 |

### Descriptions (4, ≤90 characters)
1. Illustrated Bhagavad Gita eBooks — Sanskrit, Hindi & English. Instant download. (81)
2. Multiple editions: complete text or focused life-guides. From ₹199 only. (75)
3. Secure checkout. 7-day money-back guarantee. Read your copy tonight. (70)
4. 1,000+ readers across India. Choose the edition built for your life. (71)

### Keywords
- **Primary:** bhagavad gita pdf, bhagavad gita ebook, bhagavad gita book online
- **Secondary:** shrimad bhagavad gita pdf, illustrated bhagavad gita, gita book in english, gita book in hindi
- **Long-tail:** bhagavad gita book with hindi and english translation, buy bhagavad gita ebook online india, complete bhagavad gita pdf with meaning
- **Phrase Match:** "bhagavad gita pdf", "bhagavad gita ebook", "buy bhagavad gita online"
- **Exact Match:** [bhagavad gita pdf], [bhagavad gita ebook], [bhagavad gita book online]

---

## Ad Group 2: "Hanuman Chalisa Ebook"

### Headlines (15, ≤30 characters)
| # | Headline | Chars |
|---|---|---|
| 1 | Hanuman Chalisa PDF | 20 |
| 2 | Chalisa with Meaning | 21 |
| 3 | Hanuman Chalisa – ₹99 | 22 |
| 4 | Sanskrit, Hindi & English | 26 |
| 5 | Complete 40 Chaupais | 21 |
| 6 | Traditional Text, Translated | 29 |
| 7 | Hanuman Chalisa eBook | 22 |
| 8 | Instant Digital Delivery | 25 |
| 9 | Recite With Understanding | 26 |
| 10 | Chalisa for Daily Path | 23 |
| 11 | With Roman Transliteration | 27 |
| 12 | Hanuman Chalisa Explained | 26 |
| 13 | Shop Now – Just ₹99 | 20 |
| 14 | Ancient Hymn, Modern Guide | 27 |
| 15 | 7-Day Money-Back Guarantee | 27 |

### Descriptions (4, ≤90 characters)
1. Complete Hanuman Chalisa — Sanskrit/Awadhi, Hindi meaning, English. Just ₹99. (79)
2. All 40 chaupais plus opening & closing dohas, organized into 8 sections. (75)
3. Secure checkout. 7-day money-back guarantee. Instant digital delivery. (73)
4. Recite with real understanding — finally know what every line means. (71)

### Keywords
- **Primary:** hanuman chalisa pdf, hanuman chalisa ebook, hanuman chalisa with meaning
- **Secondary:** hanuman chalisa in hindi pdf, hanuman chalisa english translation, hanuman chalisa lyrics pdf
- **Long-tail:** hanuman chalisa pdf with hindi and english meaning, complete hanuman chalisa book online india, hanuman chalisa with transliteration pdf
- **Phrase Match:** "hanuman chalisa pdf", "hanuman chalisa with meaning", "hanuman chalisa ebook"
- **Exact Match:** [hanuman chalisa pdf], [hanuman chalisa with meaning], [hanuman chalisa ebook]

---

## Shared assets (both ad groups)

### Sitelinks — all 15 product pages (their real folder/file names)

Google Ads lets you add up to 20 sitelinks per campaign (it auto-rotates
the best-performing 2-6 under each ad, based on device and ad rank) — so
listing every product here is normal, not excessive. Add all 15 plus the
2 utility links at the bottom (17 total). Format per sitelink: **Link
text**, Description line 1, Description line 2, → final URL (folder name
= the actual page on your site).

| # | Link Text | Description Line 1 | Description Line 2 | Final URL |
|---|---|---|---|---|
| 1 | Gita for Harmony | Complete 18-chapter illustrated Gita | Sanskrit, Hindi & English · ₹299 | `/Gita_for_Harmony/` |
| 2 | The Divine Song of God | Complete Gita with preface & Four Paths | Sanskrit, Hindi & English · ₹299 | `/The_Divine_Song_of_God/` |
| 3 | Gita for Career Success | 12-chapter companion for professionals | Duty, focus, steady action · ₹199 | `/Gita_for_Career_Success/` |
| 4 | Gita for Harmony & Balance | 12-chapter companion for daily calm | Sanskrit, Hindi & English · ₹199 | `/Gita_for_Harmony_and_Balance/` |
| 5 | Gita for Productivity | Beat distraction, focus better | Verse + practice per chapter · ₹199 | `/Gita_for_Productivity/` |
| 6 | Gita for Energy & Health | Steady energy, body finally cared for | Verse + practice per chapter · ₹199 | `/Gita_for_Energy_and_Health/` |
| 7 | Gita for Building Discipline | Discipline that outlasts motivation | Verse + practice per chapter · ₹199 | `/Gita_for_Building_Discipline/` |
| 8 | Gita for Earned Confidence | Confidence built on action, not approval | Verse + practice per chapter · ₹199 | `/Gita_for_Earned_Confidence/` |
| 9 | Gita for Finding Your Purpose | Find the work that is truly yours | Verse + practice per chapter · ₹199 | `/Gita_for_Finding_Your_Purpose/` |
| 10 | Gita for Money & Abundance | Hold wealth without being held by it | Verse + practice per chapter · ₹199 | `/Gita_for_Money_and_Abundance/` |
| 11 | Gita for Deeper Relationships | Steadier, more honest connection | Verse + practice per chapter · ₹199 | `/Gita_for_Deeper_Relationships/` |
| 12 | Gita for Calm Steady Leadership | Lead others without losing your center | Verse + practice per chapter · ₹199 | `/Gita_for_Calm_Steady_Leadership/` |
| 13 | Gita for Grounded Parenting | Parent from steadiness, not reaction | Verse + practice per chapter · ₹199 | `/Gita_for_Grounded_Parenting/` |
| 14 | Gita for Steadiness Over Anxiety | Calm mind, strong heart, balanced life | Verse + practice per chapter · ₹199 | `/Gita_for_Steadiness_Over_Anxiety/` |
| 15 | Hanuman Chalisa | Complete traditional 40-chaupai hymn | Sanskrit, Hindi & English · ₹99 | `/Hanuman_Chalisa/` |
| 16 | Why Krishna Vani | The Four Pillars of our editions | Career, purpose, peace & growth | `/#why` |
| 17 | About Us | Who we are, what we publish | — | `/about.html` |

**Note on URLs:** these are relative paths — prefix each with
`https://krishnavani-bhagwad-gita.vercel.app` when entering into Google
Ads (e.g. row 1 becomes `https://krishnavani-bhagwad-gita.vercel.app/Gita_for_Harmony/`).

### Callouts (10)
Instant Digital Delivery · 7-Day Money-Back Guarantee · Secure Razorpay Checkout · Sanskrit, Hindi & English · 15 Editions to Choose From · Trusted Pan-India · From ₹99 · No Subscription, One-Time Price · Illustrated Editions Available · Read on Any Device

### Structured Snippets
- **Types:** Illustrated Edition, Digital Edition, Complete Text, Practical Guide
- **Brands:** Krishna Vani

### Display Paths
`/gita-hanuman-chalisa` / `/pdf-ebooks`

### Negative Keywords (apply at campaign level)
free, torrent, pdf download free, audiobook free, movie, serial, tv show, temple, aarti timing, job, course, used books, rent, library, wallpaper, image, photo, ringtone, app download, whatsapp status, quotes only, summary only

## Setup notes specific to this campaign
- Conversion tracking setup is covered above (under Campaign settings) — do this before spending a single rupee, or you'll have no way to judge if the ₹80/day is working.
- Review Search Terms report **daily for the first 2 weeks** given the small budget — add anything irrelevant straight to negative keywords so ₹80/day isn't wasted on mismatched clicks.
- Watch which sitelinks actually get clicked (Google Ads → Assets → sitelink-level stats) — that tells you which of the 15 books people search for most, useful signal for where to focus future content/ads.
- Once you see which of the two ad groups (Gita vs. Hanuman Chalisa) converts better, consider shifting more of the ₹80 budget toward it via ad group-level bid adjustments, or splitting into two separate ₹40/day campaigns for cleaner budget control.

---

# Per-Product Landing Page Campaigns

Four distinct products, each with its own landing page. Run each as its own
Google Ads campaign or ad group so headlines/keywords stay tightly relevant
to the landing page they point to (this also protects Quality Score).

| Page | Product | Chapters | Price |
|---|---|---|---|
| `Gita_for_Harmony/` | Gita for Harmony | 18 (complete) | ₹299 |
| `Gita_for_Career_Success/` | Gita for Career Success | 12 (companion) | ₹199 |
| `Gita_for_Harmony_and_Balance/` | Gita for Harmony & Balance | 12 (companion) | ₹199 |
| `The_Divine_Song_of_God/` | The Divine Song of God | 18 (complete) | ₹299 |

---

# Landing Page 1 — Gita for Harmony (₹299, 18 chapters)
Final URL: `https://krishnavani-bhagwad-gita.vercel.app/Gita_for_Harmony/`

## Headlines (15, ≤30 characters)
| # | Headline | Chars |
|---|---|---|
| 1 | Find Calm in the Chaos | 23 |
| 2 | Gita for Inner Peace | 21 |
| 3 | Illustrated Gita – ₹299 | 24 |
| 4 | Sanskrit, Hindi & English | 26 |
| 5 | A Steadier Mind, Daily | 23 |
| 6 | Timeless Wisdom, Today | 23 |
| 7 | All 18 Chapters Explained | 26 |
| 8 | Calm Your Restless Mind | 24 |
| 9 | Read 15 Min a Day | 18 |
| 10 | 70% Off – Launch Price | 23 |
| 11 | Complete Illustrated Gita | 26 |
| 12 | Peace Beyond the Noise | 23 |
| 13 | Shop the Gita – ₹299 Only | 26 |
| 14 | Ancient Calm, Modern Life | 26 |
| 15 | 7-Day Money-Back Guarantee | 27 |

## Descriptions (4, ≤90 characters)
1. Sanskrit shlokas, Hindi & English meaning for all 18 chapters. Instant delivery. (82)
2. A calm-mind reflection for every teaching. Illustrated edition. Just ₹299. (76)
3. Secure Razorpay checkout. 7-day money-back guarantee. Read tonight. (69)
4. Loved by 860+ readers. Find steadiness for work, family & daily stress. (74)

## Sitelinks (4)
1. **What's Inside** — See all 18 chapters covered / Sanskrit, Hindi & English included
2. **Reader Reviews** — Read what our readers say / 4.8/5 average rating
3. **FAQs** — Delivery, guarantee & payment info / Answers before you buy
4. **Buy Now — ₹299** — Instant digital delivery / Secure Razorpay checkout

## Callouts (10)
Instant Digital Delivery · 7-Day Money-Back Guarantee · Secure Razorpay Checkout · Sanskrit, Hindi & English · 18 Chapters, Complete · 860+ Happy Readers · No Prior Knowledge Needed · Chapter-by-Chapter Reflections · One-Time Payment · Trusted Nationwide

## Structured Snippets
- **Types:** Illustrated Edition, Digital Edition, Complete Edition, Reflection Companion
- **Service catalog:** Sanskrit Shlokas, Hindi Translation, English Meaning, Chapter Summaries, Modern Reflections

## Display Paths
`/gita-for-harmony` / `/complete-edition`

## Keywords
- **Primary:** gita for harmony, bhagavad gita inner peace, complete bhagavad gita
- **Secondary:** illustrated bhagavad gita, gita english hindi, gita for beginners, 18 chapter gita
- **Long-tail:** complete illustrated bhagavad gita 18 chapters sanskrit hindi english, gita for inner peace india
- **Phrase Match:** "gita for harmony", "bhagavad gita inner peace", "complete bhagavad gita"
- **Exact Match:** [gita for harmony], [bhagavad gita inner peace], [illustrated bhagavad gita]

## Negative Keywords
free, torrent, pdf download free, audiobook free, summary only, app, game, job, course, used books, rent, library

---

# Landing Page 2 — Gita for Career Success (₹199, 12 chapters)
Final URL: `https://krishnavani-bhagwad-gita.vercel.app/Gita_for_Career_Success/`

## Headlines (15, ≤30 characters)
| # | Headline | Chars |
|---|---|---|
| 1 | Gita for Career Success | 24 |
| 2 | Clarity for Big Decisions | 26 |
| 3 | 12-Chapter Gita – ₹199 | 23 |
| 4 | Lead Without Burning Out | 25 |
| 5 | Ancient Wisdom for Work | 24 |
| 6 | Sanskrit, Hindi & English | 26 |
| 7 | 12 Chapters for Leaders | 24 |
| 8 | Decide With a Clear Head | 25 |
| 9 | Ambition, Sustainably | 22 |
| 10 | 60% Off – Launch Price | 23 |
| 11 | Illustrated Career Gita | 24 |
| 12 | Duty Over Anxiety | 18 |
| 13 | Shop the Gita – ₹199 Only | 26 |
| 14 | Wisdom for Professionals | 25 |
| 15 | 7-Day Money-Back Guarantee | 27 |

## Descriptions (4, ≤90 characters)
1. Sanskrit shlokas, Hindi & English meaning for 12 core chapters. Instant delivery. (83)
2. A career reflection for every chapter. Illustrated companion. Just ₹199. (75)
3. Secure Razorpay checkout. 7-day money-back guarantee. Read before your next call. (83)
4. Loved by 610+ professionals. Lead, decide, and grow without losing yourself. (78)

## Sitelinks (4)
1. **What's Inside** — See all 12 chapters covered / Sanskrit, Hindi & English included
2. **Leadership Lessons** — 4 principles for professionals / Backed by original verses
3. **FAQs** — Delivery, guarantee & payment info / Answers before you buy
4. **Buy Now — ₹199** — Instant digital delivery / Secure Razorpay checkout

## Callouts (10)
Instant Digital Delivery · 7-Day Money-Back Guarantee · Secure Razorpay Checkout · Sanskrit, Hindi & English · 12 Core Chapters · 610+ Professionals Reading · Leadership Principles Inside · Career Reflections Per Chapter · One-Time Payment ₹199 · Trusted Nationwide

## Structured Snippets
- **Types:** Illustrated Companion, Digital Edition, Chapter-wise Guide, Leadership Companion
- **Service catalog:** Sanskrit Shlokas, Hindi Translation, English Meaning, Chapter Summaries, Career Reflections

## Display Paths
`/gita-career` / `/leadership`

## Keywords
- **Primary:** gita for career success, bhagavad gita for professionals, bhagavad gita leadership
- **Secondary:** gita for decision making, illustrated bhagavad gita, karma yoga career, gita for ambition
- **Long-tail:** 12 chapter bhagavad gita for career decisions and leadership, gita wisdom for professionals india
- **Phrase Match:** "gita for career success", "bhagavad gita leadership", "gita for decision making"
- **Exact Match:** [gita for career success], [bhagavad gita for professionals], [illustrated bhagavad gita]

## Negative Keywords
free, torrent, pdf download free, audiobook free, summary only, app, game, mba course, recruitment, job vacancy, resume, cv template

---

# Landing Page 3 — Gita for Harmony & Balance (₹199, 12 chapters)
Final URL: `https://krishnavani-bhagwad-gita.vercel.app/Gita_for_Harmony_and_Balance/`

## Headlines (15, ≤30 characters)
| # | Headline | Chars |
|---|---|---|
| 1 | Gita for Harmony & Balance | 27 |
| 2 | Find Calm in the Chaos | 23 |
| 3 | 12-Chapter Gita – ₹199 | 23 |
| 4 | A Steadier, Balanced Mind | 26 |
| 5 | Wisdom for Daily Balance | 25 |
| 6 | Sanskrit, Hindi & English | 26 |
| 7 | 12 Chapters, Fast Read | 23 |
| 8 | Calm Your Restless Mind | 24 |
| 9 | Read 15 Min a Day | 18 |
| 10 | 60% Off – Launch Price | 23 |
| 11 | Illustrated Balance Gita | 25 |
| 12 | Peace Beyond the Noise | 23 |
| 13 | Shop the Gita – ₹199 Only | 26 |
| 14 | Ancient Calm, Modern Life | 26 |
| 15 | 7-Day Money-Back Guarantee | 27 |

## Descriptions (4, ≤90 characters)
1. Sanskrit shlokas, Hindi & English meaning for 12 core chapters. Instant delivery. (83)
2. A reflection for everyday balance, every chapter. Illustrated. Just ₹199. (75)
3. Secure Razorpay checkout. 7-day money-back guarantee. Read this week. (71)
4. Loved by 540+ readers. Find steadiness for work, family & daily stress. (74)

## Sitelinks (4)
1. **What's Inside** — See all 12 chapters covered / Sanskrit, Hindi & English included
2. **Four Pillars** — Clarity, Balance, Purpose, Peace / Backed by original verses
3. **FAQs** — Delivery, guarantee & payment info / Answers before you buy
4. **Buy Now — ₹199** — Instant digital delivery / Secure Razorpay checkout

## Callouts (10)
Instant Digital Delivery · 7-Day Money-Back Guarantee · Secure Razorpay Checkout · Sanskrit, Hindi & English · 12 Core Chapters · 540+ Readers Finding Balance · Four Pillars of Harmony · Reflections Per Chapter · One-Time Payment ₹199 · Trusted Nationwide

## Structured Snippets
- **Types:** Illustrated Companion, Digital Edition, Chapter-wise Guide, Balance Companion
- **Service catalog:** Sanskrit Shlokas, Hindi Translation, English Meaning, Chapter Summaries, Balance Reflections

## Display Paths
`/gita-harmony-balance` / `/inner-peace`

## Keywords
- **Primary:** gita for harmony and balance, bhagavad gita for balance, bhagavad gita for stress
- **Secondary:** illustrated bhagavad gita, gita english hindi, gita for beginners, calm mind gita
- **Long-tail:** 12 chapter bhagavad gita for stress and daily balance, illustrated gita for inner peace india
- **Phrase Match:** "gita for harmony and balance", "bhagavad gita for balance", "gita for stress relief"
- **Exact Match:** [gita for harmony and balance], [bhagavad gita for balance], [illustrated bhagavad gita]

## Negative Keywords
free, torrent, pdf download free, audiobook free, summary only, app, game, job, course, used books, rent, library

---

# Landing Page 4 — The Divine Song of God (₹299, 18 chapters)
Final URL: `https://krishnavani-bhagwad-gita.vercel.app/The_Divine_Song_of_God/`

## Headlines (15, ≤30 characters)
| # | Headline | Chars |
|---|---|---|
| 1 | The Divine Song of God | 23 |
| 2 | Complete Bhagavad Gita | 23 |
| 3 | Illustrated Gita – ₹299 | 24 |
| 4 | Sanskrit, Hindi & English | 26 |
| 5 | All 18 Chapters, In Full | 25 |
| 6 | Preface + Four Paths | 21 |
| 7 | Timeless Wisdom, Complete | 26 |
| 8 | Krishna's Complete Song | 24 |
| 9 | Read the Full Gita Today | 25 |
| 10 | 70% Off – Launch Price | 23 |
| 11 | Most Complete Edition | 22 |
| 12 | Devotion, Duty, Wisdom | 23 |
| 13 | Shop the Gita – ₹299 Only | 26 |
| 14 | Ancient Text, Modern Read | 26 |
| 15 | 7-Day Money-Back Guarantee | 27 |

## Descriptions (4, ≤90 characters)
1. Sanskrit shlokas, Hindi & English meaning for all 18 chapters. Instant delivery. (82)
2. Dedication, preface, the Four Paths & every chapter. Illustrated. Just ₹299. (78)
3. Secure Razorpay checkout. 7-day money-back guarantee. Read tonight. (69)
4. Loved by 1,240+ readers. Our most complete, traditional Gita edition. (71)

## Sitelinks (4)
1. **What's Inside** — All 18 chapters + preface / Sanskrit, Hindi & English included
2. **The Four Paths** — Karma, Bhakti, Jnana, Dhyana / Backed by original verses
3. **FAQs** — Delivery, guarantee & payment info / Answers before you buy
4. **Buy Now — ₹299** — Instant digital delivery / Secure Razorpay checkout

## Callouts (10)
Instant Digital Delivery · 7-Day Money-Back Guarantee · Secure Razorpay Checkout · Sanskrit, Hindi & English · Complete 18-Chapter Edition · 1,240+ Happy Readers · Dedication, Preface & Four Paths · Chapter-by-Chapter Reflections · One-Time Payment · Trusted Nationwide

## Structured Snippets
- **Types:** Illustrated Edition, Digital Edition, Complete Edition, Traditional Retelling
- **Service catalog:** Sanskrit Shlokas, Hindi Translation, English Meaning, Chapter Summaries, Four Paths Guide

## Display Paths
`/divine-song-of-god` / `/complete-gita`

## Keywords
- **Primary:** bhagavad gita divine song of god, complete bhagavad gita, illustrated bhagavad gita
- **Secondary:** shrimad bhagavad gita, bhagavad gita english hindi sanskrit, four paths of yoga, gita for beginners
- **Long-tail:** complete illustrated bhagavad gita with preface and four paths, full bhagavad gita 18 chapters india
- **Phrase Match:** "divine song of god", "complete bhagavad gita", "illustrated bhagavad gita"
- **Exact Match:** [bhagavad gita divine song of god], [complete bhagavad gita], [illustrated bhagavad gita]

## Negative Keywords
free, torrent, pdf download free, audiobook free, summary only, app, game, job, course, used books, rent, library

---

## Campaign Setup Notes (All 4 Pages)

- Run each landing page as a **separate campaign or ad group** with its own final URL — do not mix headlines across pages, this dilutes relevance and hurts Quality Score.
- Pages 2 and 3 (₹199, 12-chapter companions) and pages 1 and 4 (₹299, 18-chapter complete editions) can share a broader campaign structure if budget is limited, but keep ad groups and headlines page-specific.
- Use **Manual CPC or Maximize Conversions** bidding once each campaign has 15+ conversions of history.
- Set **location targeting** to India (or specific states/cities you serve) for lower CPC and higher relevance.
- Enable **Enhanced Conversions** and tag `assets/success.html` with a conversion event once Razorpay is live (all 4 pages share this success page).
- Consider a **Performance Max or Display remarketing** campaign pointing hub-page visitors (`/index.html`) back to whichever landing page matches their on-site behavior.
- Track scroll depth + `#buy` section clicks in GA4 per landing page for Quality Score insight ahead of full conversion tracking.

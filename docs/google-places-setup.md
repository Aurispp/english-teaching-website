# Live Google Reviews — setup runbook

Goal: show your real Google Business reviews on the site, auto-updating, without
exposing your API key in the frontend.

Architecture:
`browser → /.netlify/functions/google-reviews → Google Places API`. The
function caches results so we don't hit the API on every visit.

---

## What you do (≈ 20 minutes)

### 1. Get your Place ID

1. Open <https://developers.google.com/maps/documentation/places/web-service/place-id>.
2. In the "Place ID Finder" map, search **English with Auris** (or your business
   address in Castelldefels).
3. Click your business — a popup shows the **Place ID** (starts with `ChIJ…`).
4. Copy it. For this site, the current Place ID is:
   `ChIJZVelFN8UvY4RnXmuix7pudg`.

### 2. Enable the Places API and get a key

1. Go to <https://console.cloud.google.com/>. Sign in with your Google account
   (the one that owns the Business Profile is cleanest, but any Google account
   works — the API key only reads public review data).
2. Top bar → **Select a project** → **New project**. Name: `english-with-auris`.
   Create.
3. Left menu → **APIs & Services** → **Library**.
4. Search for **Places API (New)** → **Enable**. (If you only see the legacy
   "Places API", enable that instead — our code handles both.)
5. Left menu → **APIs & Services** → **Credentials** → **+ Create credentials**
   → **API key**. Copy the key.
6. Click the new key to edit restrictions:
   - **Application restrictions:** None (we'll call it from a Netlify function,
     not from a browser — so HTTP-referer restriction would break it). If you
     want belt-and-braces, use **IP addresses** and add Netlify's build IPs
     later; optional.
   - **API restrictions:** Restrict key → select **Places API (New)** (and/or
     legacy Places API if you enabled it).
   - Save.

### 3. Set up billing (required, but free in practice)

Google requires a billing account on the project even for the free tier. Places
API gives **$200 / month free credit**, which covers tens of thousands of
review fetches. With the caching we'll add (1 fetch / 6 hours), you'll use
**about $0.01 / month**.

1. Left menu → **Billing** → **Link a billing account** → add your card.
2. Set a **budget alert** at €5/month so you're notified if anything spikes:
   **Billing** → **Budgets & alerts** → **Create budget**.

### 4. Add the Netlify environment variables

In Netlify, go to **Project configuration → Environment variables → Add a
variable**.

Add:

- `GOOGLE_MAPS_API_KEY`: your Google API key
- `GOOGLE_PLACE_ID`: `ChIJZVelFN8UvY4RnXmuix7pudg`

Make sure the variable scope includes **Functions**. If Netlify offers **All
scopes**, that is fine.

Do not put the API key in `netlify.toml`. Netlify's docs note that variables
declared there are not available to functions.

### 5. Redeploy the site

After the redeploy, the site will call `/.netlify/functions/google-reviews` and
render the public Google reviews returned by the API.

---

## Pricing sanity check

- Places API "Place Details — Reviews" field: **$17 per 1 000 requests**.
- With 6-hour cache: 4 requests/day × 30 days = **120 requests/month = $0.002**.
- You stay well inside the $200 free tier.

## If you'd rather skip all this

A no-code alternative I mentioned earlier: **Trustindex.io** — free plan, iframe
embed, 10-minute setup, auto-syncs reviews. The downside is an "Powered by
Trustindex" footer on the free tier. If you prefer that route, say the word and
I'll swap the approach.

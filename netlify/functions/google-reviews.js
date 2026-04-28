const DEFAULT_PLACE_ID = 'ChIJZVelFN8UvY4RnXmuix7pudg';
const DEFAULT_GOOGLE_REVIEWS_URL = `https://search.google.com/local/reviews?placeid=${DEFAULT_PLACE_ID}`;

const jsonHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'public, max-age=3600, s-maxage=21600, stale-while-revalidate=86400',
};

const errorHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store',
};

const getApiKey = () =>
  process.env.GOOGLE_MAPS_API_KEY || process.env.GOOGLE_PLACES_API_KEY;

const normalizeNewReview = (review) => ({
  authorName: review.authorAttribution?.displayName || 'Google user',
  authorUrl: review.authorAttribution?.uri || null,
  profilePhotoUrl: review.authorAttribution?.photoUri || null,
  rating: review.rating || 0,
  relativeTimeDescription: review.relativePublishTimeDescription || '',
  text: review.originalText?.text || review.text?.text || '',
  languageCode: review.originalText?.languageCode || review.text?.languageCode || null,
  publishTime: review.publishTime || null,
  googleMapsUri: review.googleMapsUri || null,
});

const normalizeLegacyReview = (review) => ({
  authorName: review.author_name || 'Google user',
  authorUrl: review.author_url || null,
  profilePhotoUrl: review.profile_photo_url || null,
  rating: review.rating || 0,
  relativeTimeDescription: review.relative_time_description || '',
  text: review.text || '',
  languageCode: review.language || null,
  publishTime: review.time ? new Date(review.time * 1000).toISOString() : null,
  googleMapsUri: review.author_url || null,
});

const fetchPlacesNew = async ({ apiKey, placeId, language }) => {
  const url = new URL(`https://places.googleapis.com/v1/places/${placeId}`);
  url.searchParams.set('languageCode', language);

  const response = await fetch(url, {
    headers: {
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': 'id,displayName,rating,userRatingCount,reviews,googleMapsUri',
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Places API (New) failed: ${response.status} ${errorText}`);
  }

  const place = await response.json();

  return {
    source: 'places-new',
    placeId: place.id || placeId,
    name: place.displayName?.text || 'English with Auris',
    rating: place.rating || null,
    reviewCount: place.userRatingCount || null,
    googleReviewsUrl: place.googleMapsUri || DEFAULT_GOOGLE_REVIEWS_URL,
    reviews: (place.reviews || [])
      .map(normalizeNewReview)
      .filter((review) => review.text.trim().length > 0),
  };
};

const fetchPlacesLegacy = async ({ apiKey, placeId, language }) => {
  const url = new URL('https://maps.googleapis.com/maps/api/place/details/json');
  url.searchParams.set('place_id', placeId);
  url.searchParams.set('fields', 'name,rating,user_ratings_total,reviews,url');
  url.searchParams.set('reviews_sort', 'newest');
  url.searchParams.set('reviews_no_translations', 'true');
  url.searchParams.set('language', language);
  url.searchParams.set('key', apiKey);

  const response = await fetch(url);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Places API (Legacy) failed: ${response.status} ${errorText}`);
  }

  const payload = await response.json();

  if (payload.status !== 'OK') {
    throw new Error(`Places API (Legacy) returned ${payload.status}: ${payload.error_message || 'No error message'}`);
  }

  const place = payload.result || {};

  return {
    source: 'places-legacy',
    placeId,
    name: place.name || 'English with Auris',
    rating: place.rating || null,
    reviewCount: place.user_ratings_total || null,
    googleReviewsUrl: place.url || DEFAULT_GOOGLE_REVIEWS_URL,
    reviews: (place.reviews || [])
      .map(normalizeLegacyReview)
      .filter((review) => review.text.trim().length > 0),
  };
};

export const handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: jsonHeaders };
  }

  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers: errorHeaders,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  const apiKey = getApiKey();
  const placeId = process.env.GOOGLE_PLACE_ID || DEFAULT_PLACE_ID;
  const language = event.queryStringParameters?.language === 'es' ? 'es' : 'en';

  if (!apiKey) {
    return {
      statusCode: 503,
      headers: errorHeaders,
      body: JSON.stringify({
        error: 'Missing GOOGLE_MAPS_API_KEY',
        placeId,
        googleReviewsUrl: DEFAULT_GOOGLE_REVIEWS_URL,
      }),
    };
  }

  try {
    const data = await fetchPlacesNew({ apiKey, placeId, language });

    return {
      statusCode: 200,
      headers: jsonHeaders,
      body: JSON.stringify(data),
    };
  } catch (newApiError) {
    try {
      const data = await fetchPlacesLegacy({ apiKey, placeId, language });

      return {
        statusCode: 200,
        headers: jsonHeaders,
        body: JSON.stringify(data),
      };
    } catch (legacyApiError) {
      return {
        statusCode: 502,
        headers: errorHeaders,
        body: JSON.stringify({
          error: 'Could not load Google reviews',
          details: {
            placesNew: newApiError.message,
            placesLegacy: legacyApiError.message,
          },
          placeId,
          googleReviewsUrl: DEFAULT_GOOGLE_REVIEWS_URL,
        }),
      };
    }
  }
};

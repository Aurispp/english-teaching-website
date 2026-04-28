import React, { useEffect, useState } from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FALLBACK_REVIEWS_URL = 'https://search.google.com/local/reviews?placeid=ChIJZVelFN8UvY4RnXmuix7pudg';

const copy = {
  en: {
    title: 'Google Reviews',
    subtitle: 'Real reviews from my Google Business Profile',
    basedOn: 'Based on',
    reviews: 'reviews',
    viewOnGoogle: 'See all reviews on Google',
    fallbackTitle: 'Read my Google reviews',
    fallbackText: 'The live Google review feed is not connected yet, but you can still open the reviews directly on Google.',
    sourceLabel: 'Google Business Profile',
  },
  es: {
    title: 'Reseñas de Google',
    subtitle: 'Reseñas reales de mi Perfil de Empresa de Google',
    basedOn: 'Basado en',
    reviews: 'reseñas',
    viewOnGoogle: 'Ver todas las reseñas en Google',
    fallbackTitle: 'Lee mis reseñas en Google',
    fallbackText: 'La conexión automática con Google todavía no está configurada, pero puedes abrir las reseñas directamente en Google.',
    sourceLabel: 'Perfil de Empresa de Google',
  },
};

const renderStars = (rating, sizeClass = 'w-4 h-4') => (
  <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        className={`${sizeClass} ${
          star <= Math.round(rating || 0)
            ? 'fill-yellow-400 text-yellow-400'
            : 'fill-gray-200 text-gray-200'
        }`}
      />
    ))}
  </div>
);

const GoogleLogo = ({ className = 'w-8 h-8' }) => (
  <img
    src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
    alt="Google"
    className={className}
  />
);

const GoogleReviewsFallback = ({ t }) => (
  <div className="w-full max-w-4xl mx-auto mb-12">
    <a
      href={FALLBACK_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col sm:flex-row sm:items-center gap-4 bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-lg hover:border-primary-200 transition-all duration-300"
    >
      <GoogleLogo className="w-10 h-10 flex-shrink-0" />
      <div className="flex-1 text-left">
        <h3 className="font-semibold text-gray-900">{t.fallbackTitle}</h3>
        <p className="text-sm text-gray-500 mt-1">{t.fallbackText}</p>
      </div>
      <span className="inline-flex items-center gap-2 text-primary-600 group-hover:text-primary-700 text-sm font-medium">
        {t.viewOnGoogle}
        <ExternalLink className="w-4 h-4" />
      </span>
    </a>
  </div>
);

const GoogleReviewsSection = () => {
  const { language } = useLanguage();
  const t = copy[language] || copy.en;
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    const controller = new AbortController();

    const loadReviews = async () => {
      try {
        const response = await fetch(`/.netlify/functions/google-reviews?language=${language}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Google reviews endpoint returned ${response.status}`);
        }

        const data = await response.json();
        setState({ loading: false, error: null, data });
      } catch (error) {
        if (error.name === 'AbortError') return;
        setState({ loading: false, error, data: null });
      }
    };

    loadReviews();

    return () => controller.abort();
  }, [language]);

  if (state.loading) {
    return (
      <div className="w-full max-w-5xl mx-auto mb-12">
        <div className="flex items-center gap-3 mb-6 animate-pulse">
          <div className="w-10 h-10 rounded-full bg-gray-200" />
          <div>
            <div className="h-5 w-36 bg-gray-200 rounded mb-2" />
            <div className="h-3 w-56 bg-gray-100 rounded" />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 animate-pulse">
          {[1, 2, 3].map((item) => (
            <div key={item} className="h-36 rounded-xl bg-gray-100" />
          ))}
        </div>
      </div>
    );
  }

  if (state.error || !state.data) {
    return <GoogleReviewsFallback t={t} />;
  }

  const { rating, reviewCount, reviews = [], googleReviewsUrl = FALLBACK_REVIEWS_URL } = state.data;

  if (!reviews.length) {
    return <GoogleReviewsFallback t={t} />;
  }

  return (
    <div className="w-full max-w-5xl mx-auto mb-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-6">
        <div className="flex items-center gap-4">
          <GoogleLogo className="w-10 h-10 flex-shrink-0" />
          <div className="text-left">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary-600">
              {t.sourceLabel}
            </p>
            <h3 className="text-2xl font-display font-light text-gray-900">
              {t.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{t.subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 md:flex-col md:items-end">
          {rating && (
            <div className="flex items-center gap-2">
              <span className="text-3xl font-semibold text-gray-900">
                {Number(rating).toFixed(1)}
              </span>
              {renderStars(rating, 'w-5 h-5')}
            </div>
          )}
          {reviewCount && (
            <p className="text-sm text-gray-500">
              {t.basedOn} {reviewCount} {t.reviews}
            </p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {reviews.slice(0, 3).map((review, index) => (
          <article
            key={`${review.authorName}-${review.publishTime || index}`}
            className="rounded-xl bg-white p-5 text-left border border-gray-100 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              {review.profilePhotoUrl ? (
                <img
                  src={review.profilePhotoUrl}
                  alt={review.authorName}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-medium flex-shrink-0">
                  {review.authorName.charAt(0)}
                </div>
              )}
              <div className="min-w-0">
                {review.authorUrl ? (
                  <a
                    href={review.authorUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-gray-900 hover:text-primary-600 truncate block"
                  >
                    {review.authorName}
                  </a>
                ) : (
                  <p className="font-medium text-gray-900 truncate">{review.authorName}</p>
                )}
                <p className="text-xs text-gray-400">{review.relativeTimeDescription}</p>
              </div>
            </div>
            <div className="mb-3">{renderStars(review.rating)}</div>
            <p className="text-sm text-gray-600 leading-relaxed line-clamp-6">
              {review.text}
            </p>
          </article>
        ))}
      </div>

      <a
        href={googleReviewsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm mt-5"
      >
        {t.viewOnGoogle}
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
};

export default GoogleReviewsSection;

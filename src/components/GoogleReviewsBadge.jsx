import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

/**
 * A simple Google Reviews badge that displays rating info and links to Google reviews.
 *
 * Update these values when you get more reviews:
 * - rating: Your current Google rating
 * - reviewCount: Total number of Google reviews
 */
const GoogleReviewsBadge = ({
    rating = 5.0,
    reviewCount = 14
}) => {
    const { language } = useLanguage();

    const translations = {
        en: {
            googleReviews: 'Google Reviews',
            basedOn: 'Based on',
            reviews: 'reviews',
            viewOnGoogle: 'View on Google'
        },
        es: {
            googleReviews: 'Reseñas de Google',
            basedOn: 'Basado en',
            reviews: 'reseñas',
            viewOnGoogle: 'Ver en Google'
        }
    };

    const t = translations[language] || translations.en;

    // Direct link to Google Reviews
    const googleReviewsUrl = "https://share.google/gX6TzI7wC086lrlnO";

    const renderStars = (rating) => {
        return (
            <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        className={`w-5 h-5 ${
                            star <= Math.floor(rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : star - 0.5 <= rating
                                ? 'fill-yellow-400/50 text-yellow-400'
                                : 'fill-gray-200 text-gray-200'
                        }`}
                    />
                ))}
            </div>
        );
    };

    return (
        <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-5 border border-gray-100 hover:border-primary-200"
        >
            {/* Google Logo */}
            <div className="flex-shrink-0">
                <img
                    src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                    alt="Google"
                    className="w-10 h-10"
                />
            </div>

            {/* Rating Info */}
            <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl font-bold text-gray-900">
                        {rating.toFixed(1)}
                    </span>
                    {renderStars(rating)}
                </div>
                <p className="text-sm text-gray-500">
                    {t.basedOn} {reviewCount} {t.reviews}
                </p>
            </div>

            {/* View link */}
            <div className="ml-auto flex items-center gap-1 text-primary-600 group-hover:text-primary-700 text-sm font-medium">
                <span className="hidden sm:inline">{t.viewOnGoogle}</span>
                <ExternalLink className="w-4 h-4" />
            </div>
        </a>
    );
};

export default GoogleReviewsBadge;

import React, { useState, useEffect, useRef } from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const GoogleReviewsWidget = ({ placeId, maxReviews = 5 }) => {
    const { language } = useLanguage();
    const [reviews, setReviews] = useState([]);
    const [businessInfo, setBusinessInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const mapRef = useRef(null);

    const translations = {
        en: {
            title: 'Google Reviews',
            basedOn: 'Based on',
            reviews: 'reviews',
            seeAll: 'See all reviews on Google',
            loadError: 'Unable to load reviews',
            noReviews: 'No reviews yet'
        },
        es: {
            title: 'Reseñas de Google',
            basedOn: 'Basado en',
            reviews: 'reseñas',
            seeAll: 'Ver todas las reseñas en Google',
            loadError: 'No se pudieron cargar las reseñas',
            noReviews: 'Aún no hay reseñas'
        }
    };

    const t = translations[language] || translations.en;

    useEffect(() => {
        if (!placeId) {
            setError('Missing Place ID');
            setLoading(false);
            return;
        }

        // Check if Google Maps API is loaded
        const initPlaces = () => {
            if (!window.google || !window.google.maps || !window.google.maps.places) {
                setError('Google Maps API not loaded');
                setLoading(false);
                return;
            }

            // Create a hidden div for the PlacesService (it requires a map or div)
            const service = new window.google.maps.places.PlacesService(mapRef.current);

            service.getDetails(
                {
                    placeId: placeId,
                    fields: ['name', 'rating', 'user_ratings_total', 'reviews', 'url']
                },
                (place, status) => {
                    if (status === window.google.maps.places.PlacesServiceStatus.OK && place) {
                        setBusinessInfo({
                            name: place.name,
                            rating: place.rating,
                            totalReviews: place.user_ratings_total,
                            url: place.url
                        });
                        // Sort reviews by time (most recent first) and filter for ones with text
                        const sortedReviews = (place.reviews || [])
                            .filter(r => r.text && r.text.trim().length > 0)
                            .sort((a, b) => b.time - a.time);
                        setReviews(sortedReviews);
                    } else {
                        setError('Could not load place details');
                    }
                    setLoading(false);
                }
            );
        };

        // Wait for Google Maps to load
        if (window.google && window.google.maps && window.google.maps.places) {
            initPlaces();
        } else {
            // Poll for Google Maps API to be ready
            const checkGoogleMaps = setInterval(() => {
                if (window.google && window.google.maps && window.google.maps.places) {
                    clearInterval(checkGoogleMaps);
                    initPlaces();
                }
            }, 100);

            // Timeout after 10 seconds
            setTimeout(() => {
                clearInterval(checkGoogleMaps);
                if (!businessInfo && loading) {
                    setError('Google Maps API timeout');
                    setLoading(false);
                }
            }, 10000);
        }
    }, [placeId]);

    const renderStars = (rating) => {
        return (
            <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        className={`w-4 h-4 ${
                            star <= rating
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

    if (loading) {
        return (
            <div className="bg-white rounded-2xl shadow-sm p-6 animate-pulse">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <div className="h-6 w-32 bg-gray-200 rounded"></div>
                </div>
                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-24 bg-gray-100 rounded-lg"></div>
                    ))}
                </div>
                {/* Hidden div for PlacesService */}
                <div ref={mapRef} style={{ display: 'none' }}></div>
            </div>
        );
    }

    if (error) {
        // Graceful fallback - show a badge linking to Google reviews
        return (
            <a
                href={`https://search.google.com/local/reviews?placeid=${placeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow"
            >
                <img
                    src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                    alt="Google"
                    className="w-8 h-8"
                />
                <div>
                    <div className="font-medium text-gray-900">{t.title}</div>
                    <div className="text-sm text-primary-600 flex items-center gap-1">
                        {t.seeAll}
                        <ExternalLink className="w-3 h-3" />
                    </div>
                </div>
                {/* Hidden div for PlacesService */}
                <div ref={mapRef} style={{ display: 'none' }}></div>
            </a>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Hidden div for PlacesService */}
            <div ref={mapRef} style={{ display: 'none' }}></div>

            {/* Header with overall rating */}
            <div className="bg-gradient-to-r from-primary-50 to-white p-6 border-b border-gray-100">
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                        <img
                            src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                            alt="Google"
                            className="w-8 h-8"
                        />
                        <div>
                            <h3 className="font-semibold text-gray-900">{t.title}</h3>
                            {businessInfo && (
                                <p className="text-sm text-gray-500">
                                    {t.basedOn} {businessInfo.totalReviews} {t.reviews}
                                </p>
                            )}
                        </div>
                    </div>
                    {businessInfo && (
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-gray-900">
                                {businessInfo.rating?.toFixed(1)}
                            </span>
                            {renderStars(Math.round(businessInfo.rating || 0))}
                        </div>
                    )}
                </div>
            </div>

            {/* Reviews list */}
            <div className="p-6 space-y-4 max-h-[500px] overflow-y-auto">
                {reviews.length === 0 ? (
                    <p className="text-center text-gray-500 py-4">{t.noReviews}</p>
                ) : (
                    reviews.slice(0, maxReviews).map((review, index) => (
                        <div
                            key={index}
                            className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                        >
                            <div className="flex items-start gap-3">
                                <img
                                    src={review.profile_photo_url}
                                    alt={review.author_name}
                                    className="w-10 h-10 rounded-full flex-shrink-0"
                                    onError={(e) => {
                                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(review.author_name)}&background=FF914D&color=fff`;
                                    }}
                                />
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                                        <a
                                            href={review.author_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-medium text-gray-900 hover:text-primary-600 truncate"
                                        >
                                            {review.author_name}
                                        </a>
                                        <span className="text-xs text-gray-400 whitespace-nowrap">
                                            {review.relative_time_description}
                                        </span>
                                    </div>
                                    <div className="mb-2">{renderStars(review.rating)}</div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {review.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Footer with link to all reviews */}
            {businessInfo?.url && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                    <a
                        href={businessInfo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm"
                    >
                        {t.seeAll}
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            )}
        </div>
    );
};

export default GoogleReviewsWidget;

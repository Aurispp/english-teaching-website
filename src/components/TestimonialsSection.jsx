import React from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import GoogleReviewsSection from './GoogleReviewsSection';

const TestimonialsSection = () => {
    const { t } = useLanguage();

    return (
        <section id="stories" className="py-16 sm:py-32 relative bg-gradient-to-b from-white to-primary-50/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col items-center">
                    <div className="inline-flex items-center justify-center p-2 bg-primary-100 rounded-full mb-4">
                        <Quote className="w-6 h-6 text-primary-500" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-display font-light text-center mb-4">
                        {t('stories.title')}
                    </h2>
                    <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
                        {t('stories.subtitle')}
                    </p>

                    <GoogleReviewsSection />
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;

import React from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import GoogleReviewsBadge from './GoogleReviewsBadge';

const TestimonialsSection = () => {
    const { t } = useLanguage();
    const testimonials = t('stories.testimonials');

    return (
        <section id="stories" className="py-16 sm:py-32 relative bg-gradient-to-b from-white to-primary-50/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col items-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center justify-center p-2 bg-primary-100 rounded-full mb-4">
                        <Quote className="w-6 h-6 text-primary-500" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-display font-light text-center mb-4">
                        {t('stories.title')}
                    </h2>
                    <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
                        {t('stories.subtitle')}
                    </p>

                    {/* Google Reviews Badge */}
                    <GoogleReviewsBadge rating={5.0} reviewCount={14} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-white to-primary-50/30 rounded-2xl shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:scale-[1.03] group-hover:-translate-y-1"></div>
                            <div className="relative p-6 sm:p-8 flex flex-col h-full">
                                <div className="flex items-start mb-6">
                                    <Quote className="w-6 h-6 text-primary-500 flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                                    <span className="text-sm font-medium text-primary-600 ml-2 group-hover:text-primary-700 transition-colors">{testimonial.highlight}</span>
                                </div>
                                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{testimonial.text}</p>
                                <div className="border-t border-primary-100 pt-4 group-hover:border-primary-200 transition-colors">
                                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;

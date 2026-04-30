import React from 'react';
import GoogleReviewsSection from './GoogleReviewsSection';

const TestimonialsSection = () => {
    return (
        <section id="stories" className="py-12 sm:py-20 relative bg-gradient-to-b from-white to-primary-50/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col items-center">
                    <GoogleReviewsSection />
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;

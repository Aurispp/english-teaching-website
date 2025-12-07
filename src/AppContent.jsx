import React from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';
import ContactSection from './components/ContactSection';
import HeroSection from './components/HeroSection';
import TeachingPillars from './components/TeachingPillars';
import English2Logo from './English-2.png';

const AppContent = () => {
  const { t } = useLanguage();
  const testimonials = t('stories.testimonials');

  return (
    <div className="bg-gradient-to-b from-amber-50/70 to-white">
      <div className="max-w-[1400px] mx-auto">
        <HeroSection />
        <TeachingPillars />

        {/* Stories Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-primary-100 rounded-full mb-4">
              <Quote className="w-6 h-6 text-primary-500" />
            </div>
            <h2 className="text-4xl font-display font-light mb-6">
              {t('stories.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('stories.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-start mb-6">
                  <Quote className="w-6 h-6 text-primary-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-primary-600 ml-2">
                    {testimonial.highlight}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{testimonial.text}</p>
                <div className="border-t border-primary-100 pt-4">
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <ContactSection />

        {/* Footer */}
        <footer className="px-4 sm:px-6 lg:px-8 py-8 text-center border-t border-primary-100">
          <div className="flex items-center justify-center mb-4">
            <img 
              src={English2Logo} 
              alt="English with Auris" 
              className="w-5 h-5 mr-2"
            />
            <span className="text-primary-600 font-medium">{t('nav.brand')}</span>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} {t('footer.rights')}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default AppContent;

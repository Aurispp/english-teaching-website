import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import aurisPhoto from '../auris2.jpeg';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center bg-amber-50/70">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Content */}
          <div className="flex-1 animate-fade-up md:max-w-[640px] lg:max-w-[800px]">
            <div className="flex items-center mb-6 md:mb-8">
              <Sparkles className="w-5 h-5 text-primary-500 mr-2" />
              <span className="text-primary-600 font-medium">Your English Journey Starts Here</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-light text-gray-900 mb-6 md:mb-8 leading-[1.15]">
              {t('hero.title')}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-4 md:mb-6 font-light max-w-[90%] md:max-w-full">
              {t('hero.subtitle')}
            </p>
            <p className="text-base sm:text-lg text-primary-600 mb-8 md:mb-12 font-medium">
              {t('hero.tagline')}
            </p>
            <a 
              href="#contact" 
              className="group inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
            >
              <span className="text-sm font-medium mr-2">{t('hero.cta')}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Image */}
          <div className="flex-shrink-0 w-full md:w-[420px] lg:w-[480px]">
            <div className="relative">
              <img 
                src={aurisPhoto}
                alt="Auris teaching English" 
                className="w-full h-[400px] md:h-[480px] lg:h-[520px] object-cover object-center rounded-3xl shadow-lg transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl"
              />
              {/* Decorative elements */}
              <div className="absolute -z-10 top-4 right-4 w-full h-full bg-primary-100 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
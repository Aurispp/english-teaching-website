import React, { useState } from 'react';
import { Sparkles, ArrowRight, Globe, Users, LogIn } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import aurisPhoto from '../auris-hero-2026.webp';

const Badge = ({ icon: Icon, text }) => (
  <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full shadow-sm ring-1 ring-primary-100 hover:shadow-md transition-all">
    <div className="bg-[#FF914D] bg-opacity-10 p-1 rounded-full mr-1.5 sm:mr-2">
      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF914D]" />
    </div>
    <span className="text-xs sm:text-sm text-gray-700 font-medium">{text}</span>
  </div>
);

const HeroSection = () => {
  const { t } = useLanguage();
  const [imageLoaded, setImageLoaded] = useState(false);

  const heroImage = (
    <div className="relative">
      {/* Offset brand block behind the photo */}
      <div className="absolute -z-10 top-3 left-3 h-full w-full rounded-[2rem] bg-primary-100/70 sm:top-4 sm:left-4" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-[2rem] bg-amber-50/60 shadow-xl ring-1 ring-black/5">
        <div
          className={`absolute inset-0 bg-gradient-to-br from-primary-100 via-amber-50 to-white transition-opacity duration-500 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}
          aria-hidden="true"
        />
        <img
          src={aurisPhoto}
          alt={t('images.teacher')}
          width={1185}
          height={1008}
          fetchpriority="high"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
          className={`relative block aspect-[1185/1008] h-auto w-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    </div>
  );

  return (
    <section className="relative flex min-h-[calc(100svh-7rem)] items-center bg-amber-50/70 py-10 sm:py-12">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-12 lg:gap-16">
          {/* Content */}
          <div className="order-1 w-full animate-fade-up md:flex-1 md:max-w-[600px]">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-light text-gray-900 mb-6 md:mb-8 leading-[1.15]">
              {t('hero.title')}
            </h1>

            <div className="mb-8 md:hidden">
              {heroImage}
            </div>

            <p className="text-lg sm:text-xl text-gray-600 mb-4 md:mb-6 font-light max-w-[90%] md:max-w-full">
              {t('hero.subtitle')}
            </p>

            {/* Custom Badges */}
            <div className="flex flex-wrap gap-2.5 mb-8 sm:mb-10">
              <Badge
                icon={Globe}
                text={t('hero.badges.online')}
              />
              <Badge
                icon={Users}
                text={t('hero.badges.groups') || 'Individual & Small Groups'}
              />
              <Badge
                icon={Sparkles}
                text={t('hero.badges.trial')}
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span className="text-sm font-medium mr-2">{t('hero.cta')}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-1.5 text-sm text-gray-600">
                <span>{t('hero.alreadyStudent')}</span>
                <a
                  href="https://english-with-auris-portal.netlify.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 font-medium text-primary-600 hover:text-primary-700 underline underline-offset-4 decoration-primary-300 hover:decoration-primary-600 transition-colors"
                >
                  {t('hero.loginLink')}
                  <LogIn className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>

          {/* Image */}
          <div className="hidden flex-shrink-0 w-full md:block md:w-[420px] lg:w-[480px] order-2">
            {heroImage}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

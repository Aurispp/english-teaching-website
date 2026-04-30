import React, { useState } from 'react';
import { Sparkles, ArrowRight, Globe, Users, LogIn } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import aurisPhoto from '../auris-hero-2026.jpg';

const Badge = ({ icon: Icon, text }) => (
  <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-primary-100 hover:shadow-md transition-all">
    <div className="bg-[#FF914D] bg-opacity-10 p-1.5 rounded-full mr-2">
      <Icon className="w-4 h-4 text-[#FF914D]" />
    </div>
    <span className="text-gray-700 font-medium">{text}</span>
  </div>
);

const HeroSection = () => {
  const { t } = useLanguage();
  const [imageLoaded, setImageLoaded] = useState(false);

  const heroImage = (
    <div className="relative group">
      {/* Blur placeholder - shows while image loads */}
      <div
        className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary-200 via-primary-100 to-amber-50 transition-opacity duration-500 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}
      />
      <div className="overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-black/5 bg-amber-50/50 relative z-10">
        <img
          src={aurisPhoto}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[72%_20%] blur-2xl scale-110 opacity-50 saturate-125 md:hidden"
        />
        <div className="absolute inset-0 bg-amber-50/25 md:hidden" />
        <img
          src={aurisPhoto}
          alt={t('images.teacher')}
          fetchPriority="high"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
          className={`relative z-10 w-full aspect-[1185/1008] md:aspect-auto md:h-[460px] lg:h-[520px] object-cover object-center md:object-[72%_center] transform transition-transform duration-700 group-hover:scale-[1.02] ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
      {/* Decorative elements */}
      <div className="absolute -z-10 top-3 right-3 sm:top-4 sm:right-4 w-full h-full bg-primary-50 rounded-[2rem] transition-transform duration-700 group-hover:translate-x-1 group-hover:translate-y-1"></div>
    </div>
  );

  return (
    <section className="relative flex min-h-[calc(100svh-7rem)] items-center bg-amber-50/70 py-10 sm:py-12">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-14">
          {/* Content */}
          <div className="flex-1 animate-fade-up md:max-w-[640px] lg:max-w-[800px] order-1">
            <div className="flex items-center mb-6 md:mb-8">
              <Sparkles className="w-5 h-5 text-primary-500 mr-2" />
              <span className="text-primary-600 font-medium">
                {t('hero.journey') || 'Your English Journey Starts Here'}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-light text-gray-900 mb-6 md:mb-8 leading-[1.15]">
              {t('hero.title')}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-4 md:mb-6 font-light max-w-[90%] md:max-w-full">
              {t('hero.subtitle')}
            </p>

            <div className="mb-6 md:hidden">
              {heroImage}
            </div>

            {/* Custom Badges */}
            <div className="flex flex-wrap gap-3 mb-8 md:mb-12">
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

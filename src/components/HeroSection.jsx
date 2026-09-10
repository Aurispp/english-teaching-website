import React, { useState } from 'react';
import { Sparkles, ArrowRight, Globe, Users, LogIn } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import aurisPhoto from '../auris-hero-2026.webp';

const Badge = ({ icon: Icon, text }) => (
  <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm text-gray-700 ring-1 ring-primary-100">
    <Icon className="h-4 w-4 text-primary-500" strokeWidth={1.75} aria-hidden="true" />
    <span>{text}</span>
  </div>
);

const HeroSection = () => {
  const { t } = useLanguage();
  const [imageLoaded, setImageLoaded] = useState(false);

  const heroImage = (
    <div className="relative">
      <div className="relative overflow-hidden rounded-[2rem] bg-amber-50/60 shadow-md ring-1 ring-black/5">
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

            <p className="mb-6 max-w-[46ch] text-lg text-gray-600 sm:text-xl">
              {t('hero.subtitle')}
            </p>

            {/* Custom Badges */}
            <div className="mb-8 flex flex-wrap gap-2">
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
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-600"
              >
                <span>{t('hero.cta')}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <div className="flex items-center gap-1.5 text-sm text-gray-600">
                <span>{t('hero.alreadyStudent')}</span>
                <a
                  href="https://english-with-auris-portal.netlify.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-primary-700 underline decoration-primary-200 underline-offset-4 transition-colors hover:text-primary-800 hover:decoration-primary-500"
                >
                  {t('hero.loginLink')}
                  <LogIn className="h-3.5 w-3.5" aria-hidden="true" />
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

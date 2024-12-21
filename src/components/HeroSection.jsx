import React from 'react';
import { Sparkles, ArrowRight, Globe, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import aurisPhoto from '../auris2.jpeg';

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

  return (
    <section className="relative min-h-[90vh] flex items-center bg-amber-50/70">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Content */}
          <div className="flex-1 animate-fade-up md:max-w-[640px] lg:max-w-[800px]">
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

            <a 
              href="#contact" 
              className="group inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
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
                alt={t('images.teacher')} 
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
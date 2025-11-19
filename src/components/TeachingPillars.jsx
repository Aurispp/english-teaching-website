import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, TrendingUp } from 'lucide-react';
import claudeIcon from '../claude.png';
import ankiIcon from '../anki.png';
import recIcon from '../rec.png';
import zoomIcon from '../zoom.png';

const TeachingPillars = () => {
  const { t } = useLanguage();

  const techIcons = [
    {
      src: ankiIcon,
      alt: 'Anki',
      tooltip: 'Spaced repetition flashcards for vocabulary retention'
    },
    {
      src: claudeIcon,
      alt: 'Claude',
      className: 'rounded-lg',
      tooltip: 'AI-powered personalized learning and instant feedback'
    },
    {
      src: recIcon,
      alt: 'Recording',
      tooltip: 'Class recordings to review and track your progress'
    },
    {
      src: zoomIcon,
      alt: 'Zoom',
      tooltip: 'Interactive online classes from anywhere'
    }
  ];

  const pillars = [
    {
      icon: <MessageCircle className="w-12 h-12 text-primary-500" />,
      title: t('pillars.learnBySpeaking.title'),
      description: t('pillars.learnBySpeaking.description'),
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary-500" />,
      title: t('pillars.makeFastProgress.title'),
      description: t('pillars.makeFastProgress.description'),
    },
    {
      title: t('pillars.modernApproach.title'),
      description: t('pillars.modernApproach.description'),
      customIcons: true
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-display font-light text-center mb-12 sm:mb-16">
          {t('pillars.title')}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col items-center hover:-translate-y-2 hover:scale-[1.02] border border-transparent hover:border-primary-100"
            >
              <div className="flex flex-col items-center mb-6">
                {pillar.customIcons ? (
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-2 max-w-full">
                    {techIcons.map((icon, i) => (
                      <div
                        key={i}
                        className="relative"
                      >
                        <div className="peer flex items-center justify-center bg-[#FF914D]/10 rounded-full p-2 sm:p-2.5 md:p-3 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 hover:bg-[#FF914D]/20 hover:scale-110 transition-all duration-300 cursor-pointer">
                          <img
                            src={icon.src}
                            alt={icon.alt}
                            className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 object-contain ${icon.className || ''}`}
                          />
                        </div>
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 peer-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                          {icon.tooltip}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center bg-primary-50 rounded-lg p-4 w-20 h-20 mb-2 group-hover:bg-primary-100 group-hover:scale-110 transition-all duration-300">
                    {pillar.icon}
                  </div>
                )}
                <h3 className="text-xl font-semibold mt-4 text-center group-hover:text-primary-600 transition-colors">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-center group-hover:text-gray-700 transition-colors">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachingPillars;
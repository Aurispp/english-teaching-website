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
    { src: ankiIcon, alt: 'Anki' },
    { 
      src: claudeIcon, 
      alt: 'Claude',
      className: 'rounded-lg' // Add rounded corners specifically for Claude
    },
    { src: recIcon, alt: 'Recording' },
    { src: zoomIcon, alt: 'Zoom' }
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
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('pillars.title')}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center"
            >
              <div className="flex flex-col items-center mb-6">
                {pillar.customIcons ? (
                  <div className="flex justify-center space-x-6 mb-2">
                    {techIcons.map((icon, i) => (
                      <div 
                        key={i} 
                        className="flex items-center justify-center bg-[#FF914D]/10 rounded-full p-3 w-16 h-16 hover:bg-[#FF914D]/20 transition-colors"
                      >
                        <img 
                          src={icon.src} 
                          alt={icon.alt} 
                          className={`w-10 h-10 object-contain ${icon.className || ''}`}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center bg-primary-50 rounded-lg p-4 w-20 h-20 mb-2">
                    {pillar.icon}
                  </div>
                )}
                <h3 className="text-xl font-semibold mt-4 text-center">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-center">
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
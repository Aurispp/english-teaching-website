// components/ToolsSection.jsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ankiIcon from '../anki.png';
import claudeIcon from '../claude.png';
import zoomIcon from '../zoom.png';
import docsIcon from '../docs.png';
import recIcon from '../rec.png';

const TOOLS = [
  { name: "Anki", icon: ankiIcon },
  { name: "Claude", icon: claudeIcon },
  { name: "Zoom", icon: zoomIcon },
  { name: "Google Docs", icon: docsIcon },
  { name: "Recording", icon: recIcon }
];

const ToolsSection = () => {
  const { t } = useLanguage();

  const getIconClass = (toolName) => {
    let classes = "w-28 h-28 object-contain transition-transform";
    if (toolName === "Claude") classes += " rounded-2xl";
    if (toolName === "Google Docs") {
      classes += " scale-[1.75] hover:scale-[1.9]";
    } else {
      classes += " hover:scale-110";
    }
    return classes;
  };

  return (
    <section className="py-16 px-4 relative overflow-hidden bg-gradient-to-b from-primary-50/30 to-white">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">{t('toolsSection.title')}</h2>
          
          {/* Main features grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {t('toolsSection.features').slice(0, 2).map((feature, index) => (
              <div 
                key={index}
                className="bg-primary-500 text-white rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform h-full"
              >
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-lg opacity-90">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Commitment section */}
          <div className="bg-gradient-to-br from-primary-600 via-primary-500 to-primary-600 text-white rounded-2xl p-10 shadow-lg my-12 transform hover:scale-[1.02] transition-all">
            <h3 className="text-2xl font-bold mb-4">{t('toolsSection.features.2.title')}</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">{t('toolsSection.features.2.description')}</p>
          </div>

          {/* Tech tools section */}
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('toolsSection.features.3.title')}</h3>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">{t('toolsSection.features.3.description')}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center justify-items-center max-w-5xl mx-auto">
              {TOOLS.map(({ name, icon }) => (
                <div key={name} className="flex items-center justify-center">
                  <img 
                    src={icon}
                    alt={name}
                    className={getIconClass(name)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
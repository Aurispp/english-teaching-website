import React, { Suspense, lazy, useRef } from 'react';
import { Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LiquidGlassLens from './LiquidGlassLens';
import claudeIcon from '../claude.webp';
import meetsIcon from '../meets.png';
import docsIcon from '../docs.webp';

const ParticleBackground = lazy(() => import('./ParticleBackground'));

const TOOLS = [
  { type: 'lucide', Icon: Layers, name: 'Flashcards' },
  { type: 'image', icon: claudeIcon, name: 'Claude' },
  { type: 'image', icon: meetsIcon, name: 'Google Meet' },
  { type: 'image', icon: docsIcon, name: 'Google Docs' },
];

const ToolsSection = () => {
  const { t } = useLanguage();
  const gridRef = useRef(null);

  const getIconClass = (toolName) => {
    let classes = 'w-28 h-28 object-contain transition-transform';
    if (toolName === 'Claude') classes += ' rounded-2xl';
    if (toolName === 'Google Docs') {
      classes += ' scale-[1.75]';
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
          <div className="relative overflow-hidden rounded-2xl p-12 shadow-lg bg-gradient-to-br from-white via-amber-50/40 to-primary-50/40 border border-primary-100/50">
            <Suspense fallback={null}>
              <ParticleBackground
                colors={['#FF914D', '#FDBA74', '#FCD9B6']}
                density={160}
                particlesScale={0.75}
                alpha={0.7}
                breathe
                ringDisplacement={0.16}
              />
            </Suspense>

            <div className="relative z-10">
              <div className="max-w-3xl mx-auto mb-12 rounded-2xl bg-white/55 backdrop-blur-md border border-white/60 shadow-sm px-6 sm:px-10 py-6 sm:py-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('toolsSection.features.3.title')}</h3>
                <p className="text-lg text-gray-700">{t('toolsSection.features.3.description')}</p>
              </div>

              <div ref={gridRef} className="relative grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center max-w-4xl mx-auto">
                <LiquidGlassLens targetRef={gridRef} colors={['#FF914D', '#FDBA74', '#FCD9B6']} />
                {TOOLS.map((tool) => (
                  <div 
                    key={tool.name} 
                    className="flex items-center justify-center tool-wrapper"
                    style={{ transition: 'transform 0.2s ease-out, filter 0.2s ease-out', willChange: 'transform, filter' }}
                    title={tool.name}
                  >
                    {tool.type === 'lucide' ? (
                      <div className="w-28 h-28 rounded-2xl bg-primary-100 flex items-center justify-center transition-transform">
                        <tool.Icon className="w-14 h-14 text-primary-600" aria-label={tool.name} />
                      </div>
                    ) : (
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        loading="lazy"
                        decoding="async"
                        className={getIconClass(tool.name)}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;

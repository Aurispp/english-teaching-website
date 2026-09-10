import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, TrendingUp, Layers } from 'lucide-react';
import claudeIcon from '../claude.webp';
import meetsIcon from '../meets.png';

const tools = [
  { type: 'lucide', Icon: Layers, label: 'Flashcards in the student portal I built' },
  { type: 'image', src: claudeIcon, label: 'AI support for tailored materials when useful', rounded: true },
  { type: 'image', src: meetsIcon, label: 'Interactive online classes from anywhere' },
];

const TeachingPillars = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      key: 'learnBySpeaking',
      icon: <MessageCircle className="h-7 w-7 text-primary-500" strokeWidth={1.5} aria-hidden="true" />,
    },
    {
      key: 'steadyProgress',
      icon: <TrendingUp className="h-7 w-7 text-primary-500" strokeWidth={1.5} aria-hidden="true" />,
    },
    {
      key: 'modernApproach',
      icon: (
        <ul className="flex items-center gap-3" aria-label="Tools used in class">
          {tools.map((tool) => (
            <li key={tool.label} title={tool.label} className="flex h-7 w-7 items-center justify-center">
              {tool.type === 'lucide' ? (
                <tool.Icon className="h-7 w-7 text-primary-500" strokeWidth={1.5} aria-hidden="true" />
              ) : (
                <img
                  src={tool.src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className={`h-6 w-6 object-contain ${tool.rounded ? 'rounded-md' : ''}`}
                />
              )}
              <span className="sr-only">{tool.label}</span>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center font-display text-3xl font-light sm:mb-16 sm:text-4xl">
          {t('pillars.title')}
        </h2>

        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.key} className="rounded-2xl bg-white p-7 ring-1 ring-primary-100/60 shadow-sm sm:p-8">
              <div className="flex h-7 items-center">{pillar.icon}</div>
              <h3 className="mt-5 text-xl font-semibold text-gray-900">{t(`pillars.${pillar.key}.title`)}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">{t(`pillars.${pillar.key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachingPillars;

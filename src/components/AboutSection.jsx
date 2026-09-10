import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import teacherPhoto from '../profile2.webp';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center font-display text-3xl font-light sm:mb-16 sm:text-4xl">
          {t('about.title')}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-stretch md:gap-12">
          <div className="flex flex-col justify-center rounded-2xl bg-white p-6 shadow-sm ring-1 ring-primary-100/60 sm:p-8">
            <div className="space-y-5 leading-relaxed text-gray-700 sm:text-[17px]">
              {['intro', 'method', 'approach'].map((key) => (
                <p key={key}>{t(`about.${key}`)}</p>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-amber-50/60 shadow-sm ring-1 ring-black/5">
            <img
              src={teacherPhoto}
              alt={t('images.teacher')}
              width={800}
              height={800}
              loading="lazy"
              decoding="async"
              className="block aspect-square h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

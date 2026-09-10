import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import teacherPhoto from '../profile2.webp';

const AboutSection = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-16 sm:py-32 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50/80 to-transparent transform skew-x-12"></div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                <h2 className="text-3xl sm:text-4xl font-display font-light text-center mb-12 sm:mb-20">
                    {t('about.title')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 md:items-stretch">
                    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-primary-100/60 sm:p-8 md:h-full md:flex md:flex-col md:justify-center">
                        <div className="space-y-5 text-gray-700 leading-relaxed sm:text-[17px]">
                            {['intro', 'method', 'approach'].map((key) => (
                                <p key={key}>{t(`about.${key}`)}</p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-200 to-primary-300/70 rounded-2xl transform rotate-3 group-hover:rotate-2 transition-transform duration-500"></div>
                            <img
                                src={teacherPhoto}
                                alt={t('images.teacher')}
                                loading="lazy"
                                decoding="async"
                                className="relative rounded-2xl shadow-lg w-full h-auto transform transition-all duration-500 hover:rotate-[-2deg] hover:shadow-xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-start">
                    <div className="space-y-6 sm:space-y-8">
                        {['intro', 'method', 'approach'].map((key) => (
                            <div
                                key={key}
                                className="group bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:translate-y-[-4px] hover:scale-[1.01] border border-transparent hover:border-primary-100"
                            >
                                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">{t(`about.${key}`)}</p>
                            </div>
                        ))}
                    </div>
                    <div className="md:sticky md:top-32">
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

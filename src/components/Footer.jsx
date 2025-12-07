import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="py-8 sm:py-12 text-center bg-gradient-to-b from-white to-primary-50/30 border-t border-primary-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-center mb-4 sm:mb-5">
                    <span className="text-primary-600 font-medium">{t('nav.brand')}</span>
                </div>

                {/* Student Portal Link */}
                <div className="mb-5 sm:mb-6">
                    <a
                        href="https://english-with-auris-portal.netlify.app/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        {t('footer.studentPortal')}
                        <svg className="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>

                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} {t('footer.rights')}
                </p>
            </div>
        </footer>
    );
};

export default Footer;

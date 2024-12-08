import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="text-gray-600 hover:text-amber-600 transition-colors font-medium"
    >
      {language === 'en' ? 'ES' : 'EN'}
    </button>
  );
};

export default LanguageSwitcher;
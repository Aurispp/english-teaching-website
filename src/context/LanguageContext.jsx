import React, { createContext, useState, useContext } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

const getInitialLanguage = () => {
  if (typeof window === 'undefined') return 'en';

  const languageParam = new URLSearchParams(window.location.search).get('lang');
  if (languageParam === 'en' || languageParam === 'es') return languageParam;

  const spanishFirstPaths = [
    '/clases-ingles-castelldefels',
    '/ingles-empresas-castelldefels',
  ];
  const pathname = window.location.pathname.replace(/\/$/, '');
  if (spanishFirstPaths.includes(pathname)) return 'es';

  return 'en';
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage);
  
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      if (!value || !value[k]) return key;
      value = value[k];
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

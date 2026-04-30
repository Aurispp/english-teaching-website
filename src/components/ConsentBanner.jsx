import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const STORAGE_KEY = 'ewa_consent';

const COPY = {
  en: {
    message: 'This site uses cookies to understand how visitors use it. No ads, no tracking you across the web.',
    accept: 'Accept',
    decline: 'Decline',
  },
  es: {
    message: 'Este sitio usa cookies para entender cómo se utiliza. Sin anuncios, sin seguimiento entre webs.',
    accept: 'Aceptar',
    decline: 'Rechazar',
  },
};

const ConsentBanner = () => {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch (e) {
      // localStorage blocked — don't show banner, don't consent
    }
  }, []);

  const decide = (choice) => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch (e) {}
    if (choice === 'granted' && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', { analytics_storage: 'granted' });
    }
    setVisible(false);
  };

  if (!visible) return null;
  const copy = COPY[language] || COPY.en;

  return (
    <div className="fixed bottom-3 left-3 right-3 z-50 rounded-xl border border-gray-200 bg-white p-3 text-xs text-gray-700 shadow-lg sm:bottom-4 sm:left-4 sm:right-4 sm:p-4 sm:text-sm md:right-auto md:max-w-md">
      <p className="mb-2 leading-relaxed sm:mb-3">{copy.message}</p>
      <div className="flex gap-2 justify-end">
        <button
          onClick={() => decide('denied')}
          className="px-2.5 py-1.5 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors sm:px-3"
        >
          {copy.decline}
        </button>
        <button
          onClick={() => decide('granted')}
          className="px-3 py-1.5 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors sm:px-4"
        >
          {copy.accept}
        </button>
      </div>
    </div>
  );
};

export default ConsentBanner;

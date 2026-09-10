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
    <div className="fixed bottom-3 left-3 right-3 z-50 rounded-2xl bg-white p-4 text-sm text-gray-700 shadow-md ring-1 ring-gray-200 sm:bottom-4 sm:left-4 sm:right-4 md:right-auto md:max-w-sm">
      <p className="mb-2 leading-relaxed sm:mb-3">{copy.message}</p>
      <div className="flex gap-2 justify-end">
        <button
          onClick={() => decide('denied')}
          className="rounded-full px-3 py-1.5 text-gray-600 transition-colors hover:text-gray-900"
        >
          {copy.decline}
        </button>
        <button
          onClick={() => decide('granted')}
          className="rounded-full bg-primary-500 px-4 py-1.5 font-medium text-white transition-colors hover:bg-primary-600"
        >
          {copy.accept}
        </button>
      </div>
    </div>
  );
};

export default ConsentBanner;

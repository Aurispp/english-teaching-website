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
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 bg-white border border-gray-200 shadow-lg rounded-xl p-4 text-sm text-gray-700">
      <p className="mb-3 leading-relaxed">{copy.message}</p>
      <div className="flex gap-2 justify-end">
        <button
          onClick={() => decide('denied')}
          className="px-3 py-1.5 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
        >
          {copy.decline}
        </button>
        <button
          onClick={() => decide('granted')}
          className="px-4 py-1.5 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors"
        >
          {copy.accept}
        </button>
      </div>
    </div>
  );
};

export default ConsentBanner;

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from './context/LanguageContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TeachingPillars from './components/TeachingPillars';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import ToolsSection from './components/ToolsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TalkTheTalk from './components/TalkTheTalk';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-3 bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-600 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

function App() {
  const { t } = useLanguage();
  const [isTalkTheTalkOpen, setIsTalkTheTalkOpen] = useState(() => {
    // Check if URL is /talkthetalk on initial load
    return window.location.pathname === '/talkthetalk';
  });

  // Sync URL with Talk the Talk state
  useEffect(() => {
    const handlePopState = () => {
      setIsTalkTheTalkOpen(window.location.pathname === '/talkthetalk');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const openTalkTheTalk = () => {
    setIsTalkTheTalkOpen(true);
    window.history.pushState({}, '', '/talkthetalk');
  };

  const closeTalkTheTalk = () => {
    setIsTalkTheTalkOpen(false);
    window.history.pushState({}, '', '/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/70 to-white flex flex-col">
      <Helmet>
        {isTalkTheTalkOpen ? (
          <>
            <title>Talk the Talk - Free English Speaking Practice | English with Auris</title>
            <meta name="description" content="Free English speaking practice tool. Choose a topic, set a timer, and practice speaking out loud. Improve your English fluency with daily speaking exercises." />
          </>
        ) : (
          <>
            <title>{t('nav.brand')} - {t('hero.journey')}</title>
            <meta name="description" content={t('hero.subtitle')} />
          </>
        )}
        <meta name="theme-color" content="#ED8936" />
      </Helmet>

      <Navbar onTalkTheTalkClick={openTalkTheTalk} />
      <TalkTheTalk isOpen={isTalkTheTalkOpen} onClose={closeTalkTheTalk} />

      <main className="flex-1">
        <HeroSection />
        <TeachingPillars />
        <TestimonialsSection />
        <AboutSection />
        <ToolsSection />
        <FAQSection />
      </main>

      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

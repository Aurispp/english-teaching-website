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
  const [isTalkTheTalkOpen, setIsTalkTheTalkOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/70 to-white flex flex-col">
      <Helmet>
        <title>{t('nav.brand')} - {t('hero.journey')}</title>
        <meta name="description" content={t('hero.subtitle')} />
        <meta name="theme-color" content="#ED8936" />
      </Helmet>

      <Navbar onTalkTheTalkClick={() => setIsTalkTheTalkOpen(true)} />
      <TalkTheTalk isOpen={isTalkTheTalkOpen} onClose={() => setIsTalkTheTalkOpen(false)} />

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

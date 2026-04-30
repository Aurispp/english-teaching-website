import React, { Suspense, lazy, useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from './context/LanguageContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ClassMomentsSection from './components/ClassMomentsSection';
import TeachingPillars from './components/TeachingPillars';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import ToolsSection from './components/ToolsSection';
import PlatformShowcase from './components/PlatformShowcase';
import FAQSection from './components/FAQSection';
import SeoLandingPage from './components/SeoLandingPage';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CalendlyBadge from './components/CalendlyBadge';
import ConsentBanner from './components/ConsentBanner';
import { trackEvent } from './utils/analytics';

const TalkTheTalk = lazy(() => import('./components/TalkTheTalk'));

const TalkTheTalkFallback = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-orange-50">
    <div className="h-10 w-10 rounded-full border-4 border-primary-100 border-t-primary-500 animate-spin" />
  </div>
);

const normalizePath = (pathname = window.location.pathname) => pathname.replace(/\/$/, '') || '/';
const isTalkTheTalkPath = (pathname = window.location.pathname) => normalizePath(pathname) === '/talkthetalk';
const getLandingPageType = (pathname = window.location.pathname) => {
  switch (normalizePath(pathname)) {
    case '/clases-ingles-castelldefels':
      return 'local';
    case '/ingles-empresas-castelldefels':
      return 'business';
    default:
      return null;
  }
};

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
      className="fixed bottom-24 right-8 z-50 p-3 bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-600 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

function App() {
  const { t } = useLanguage();
  const [pathname, setPathname] = useState(() => normalizePath());
  const [isTalkTheTalkOpen, setIsTalkTheTalkOpen] = useState(() => {
    // Check if URL is /talkthetalk on initial load
    return isTalkTheTalkPath(pathname);
  });
  const landingPageType = !isTalkTheTalkOpen ? getLandingPageType(pathname) : null;

  // Sync URL with Talk the Talk state
  useEffect(() => {
    const handlePopState = () => {
      const nextPathname = normalizePath();
      setPathname(nextPathname);
      setIsTalkTheTalkOpen(isTalkTheTalkPath(nextPathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Fire GA4 page_view whenever the SPA route (/ vs /talkthetalk) changes
  useEffect(() => {
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', 'page_view', {
      page_path: pathname,
      page_location: window.location.href,
      page_title: isTalkTheTalkOpen
        ? 'Free English Speaking Practice Tool | Talk the Talk'
        : landingPageType === 'local'
          ? 'Clases de Inglés Online y Presenciales en Castelldefels, Gavà y Viladecans'
          : landingPageType === 'business'
            ? 'Inglés para Empresas y Profesionales en Castelldefels'
            : document.title,
    });
  }, [isTalkTheTalkOpen, landingPageType, pathname]);

  // Calendly conversion tracking — fires when a visitor completes a booking
  useEffect(() => {
    const onMessage = (e) => {
      if (e?.data?.event === 'calendly.event_scheduled' && typeof window.gtag === 'function') {
        trackEvent('trial_booked', {
          event_category: 'conversion',
          event_label: 'Calendly',
          value: 30,
        });
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  const openTalkTheTalk = () => {
    trackEvent('talk_opened', {
      event_category: 'engagement',
      location: 'site_navigation',
    });
    setIsTalkTheTalkOpen(true);
    setPathname('/talkthetalk');
    window.history.pushState({}, '', '/talkthetalk');
  };

  const closeTalkTheTalk = () => {
    trackEvent('talk_closed', {
      event_category: 'engagement',
    });
    setIsTalkTheTalkOpen(false);
    setPathname('/');
    window.history.pushState({}, '', '/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/70 to-white flex flex-col">
      <Helmet>
        {isTalkTheTalkOpen ? (
          <>
            <title>Free English Speaking Practice Tool | Talk the Talk</title>
            <meta name="description" content="Practise speaking English out loud with random conversation prompts, timers, role plays, interview questions, and fluency challenges." />
          </>
        ) : landingPageType === 'local' ? (
          <>
            <title>Clases de Inglés Online y Presenciales en Castelldefels, Gavà y Viladecans</title>
            <meta name="description" content="Clases de inglés online con opción presencial en Castelldefels, Gavà, Viladecans y alrededores. Conversación, confianza, preparación Cambridge e inglés para el trabajo con Auris." />
            <link rel="canonical" href="https://englishwithauris.com/clases-ingles-castelldefels" />
          </>
        ) : landingPageType === 'business' ? (
          <>
            <title>Inglés para Empresas y Profesionales en Castelldefels | English with Auris</title>
            <meta name="description" content="Clases de inglés para empresas, equipos y profesionales. Formación online o local en Castelldefels, Gavà y Viladecans, con factura con NIF disponible." />
            <link rel="canonical" href="https://englishwithauris.com/ingles-empresas-castelldefels" />
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
      {isTalkTheTalkOpen && (
        <Suspense fallback={<TalkTheTalkFallback />}>
          <TalkTheTalk isOpen={isTalkTheTalkOpen} onClose={closeTalkTheTalk} />
        </Suspense>
      )}

      <main className="flex-1">
        {landingPageType ? (
          <SeoLandingPage type={landingPageType} />
        ) : (
          <>
            <HeroSection />
            <ClassMomentsSection />
            <TeachingPillars />
            <PricingSection />
            <TestimonialsSection />
            <AboutSection />
            <ToolsSection />
            <PlatformShowcase />
            <FAQSection />
          </>
        )}
      </main>

      <ContactSection />
      <Footer />
      <ScrollToTop />
      {!isTalkTheTalkOpen && <CalendlyBadge />}
      <ConsentBanner />
    </div>
  );
}

export default App;

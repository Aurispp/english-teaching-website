import React, { Suspense, lazy, useState, useEffect, useMemo } from 'react';
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

const getPageSeo = ({ isTalkTheTalkOpen, landingPageType, language }) => {
  if (isTalkTheTalkOpen) {
    return {
      title: 'Free English Speaking Practice Tool | Talk the Talk',
      description: 'Practise speaking English out loud with random conversation prompts, timers, role plays, interview questions, and fluency challenges.',
      canonical: 'https://englishwithauris.com/talkthetalk',
    };
  }

  if (landingPageType === 'local') {
    return {
      title: 'Clases de Inglés Online y Presenciales en Castelldefels, Gavà y Viladecans',
      description: 'Clases de inglés online con opción presencial en Castelldefels, Gavà y Viladecans. Conversación, confianza, preparación Cambridge e inglés para el trabajo con Auris.',
      canonical: 'https://englishwithauris.com/clases-ingles-castelldefels',
    };
  }

  if (landingPageType === 'business') {
    return {
      title: 'Inglés para Empresas y Profesionales en Castelldefels | English with Auris',
      description: 'Clases prácticas de inglés para empresas, equipos y profesionales. Formación online o local cerca de Castelldefels, con factura con NIF disponible.',
      canonical: 'https://englishwithauris.com/ingles-empresas-castelldefels',
    };
  }

  return language === 'es'
    ? {
        title: 'Clases de Inglés Online y en Castelldefels | English with Auris',
        description: 'Clases de inglés online centradas en conversación real, confianza y mejora constante. Presenciales por Castelldefels cuando encaja.',
        canonical: 'https://englishwithauris.com/',
      }
    : {
        title: 'English Classes Online & in Castelldefels | English with Auris',
        description: 'Online English classes focused on real conversation, confidence and steady progress. In-person available around Castelldefels when it fits.',
        canonical: 'https://englishwithauris.com/',
      };
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
      className="fixed bottom-24 right-8 z-50 hidden p-3 bg-primary-500 text-white rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-primary-600 md:block animate-fade-in-up"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

function App() {
  const { language } = useLanguage();
  const [pathname, setPathname] = useState(() => normalizePath());
  const [isTalkTheTalkOpen, setIsTalkTheTalkOpen] = useState(() => {
    // Check if URL is /talkthetalk on initial load
    return isTalkTheTalkPath(pathname);
  });
  const landingPageType = !isTalkTheTalkOpen ? getLandingPageType(pathname) : null;
  const pageSeo = useMemo(
    () => getPageSeo({ isTalkTheTalkOpen, landingPageType, language }),
    [isTalkTheTalkOpen, landingPageType, language],
  );

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
      page_title: pageSeo.title,
    });
  }, [pageSeo.title, pathname]);

  useEffect(() => {
    document.documentElement.lang = isTalkTheTalkOpen ? 'en' : language;
  }, [isTalkTheTalkOpen, language]);

  useEffect(() => {
    document.title = pageSeo.title;

    const descriptions = Array.from(document.head.querySelectorAll('meta[name="description"]'));
    const description = descriptions[0] || document.createElement('meta');
    description.setAttribute('name', 'description');
    description.setAttribute('content', pageSeo.description);
    if (!description.parentNode) document.head.appendChild(description);
    descriptions.slice(1).forEach((node) => node.remove());

    const canonicals = Array.from(document.head.querySelectorAll('link[rel="canonical"]'));
    const canonical = canonicals[0] || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', pageSeo.canonical);
    if (!canonical.parentNode) document.head.appendChild(canonical);
    canonicals.slice(1).forEach((node) => node.remove());
  }, [pageSeo]);

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
        <title>{pageSeo.title}</title>
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

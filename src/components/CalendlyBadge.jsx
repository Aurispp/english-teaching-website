import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { trackEvent } from '../utils/analytics';

const CALENDLY_URL =
  import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/aurienglish/trial-class';

const WIDGET_CSS = 'https://assets.calendly.com/assets/external/widget.css';
const WIDGET_JS = 'https://assets.calendly.com/assets/external/widget.js';

const BRAND_COLOR = '#FF914D';
const BADGE_TEXT = {
  en: 'Book your free trial class',
  es: 'Reserva tu prueba gratis',
};

const CalendlyBadge = () => {
  const { language } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [blockedBySection, setBlockedBySection] = useState(false);

  // Show the badge only after the user scrolls past the hero's own CTA.
  // Avoids a duplicate "Book your free trial class" button at the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // On phones the floating Calendly badge can cover pricing cards or the
  // booking form itself. Hide it while those conversion sections are visible.
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const blockedSelectors = ['#pricing', '#contact'];

    const updateBlockedState = () => {
      if (!mediaQuery.matches) {
        setBlockedBySection(false);
        return;
      }

      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const isBlocked = blockedSelectors.some((selector) => {
        const section = document.querySelector(selector);
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top < viewportHeight - 80 && rect.bottom > 120;
      });

      setBlockedBySection(isBlocked);
    };

    updateBlockedState();
    window.addEventListener('scroll', updateBlockedState, { passive: true });
    window.addEventListener('resize', updateBlockedState);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateBlockedState);
    } else {
      mediaQuery.addListener(updateBlockedState);
    }

    return () => {
      window.removeEventListener('scroll', updateBlockedState);
      window.removeEventListener('resize', updateBlockedState);
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', updateBlockedState);
      } else {
        mediaQuery.removeListener(updateBlockedState);
      }
    };
  }, []);

  useEffect(() => {
    const apply = () => {
      const badge = document.querySelector('.calendly-badge-widget');
      if (!badge) return false;
      badge.style.display = scrolled && !blockedBySection ? '' : 'none';
      return true;
    };
    if (apply()) return;
    const id = window.setInterval(() => {
      if (apply()) window.clearInterval(id);
    }, 200);
    const stop = window.setTimeout(() => window.clearInterval(id), 5000);
    return () => {
      window.clearInterval(id);
      window.clearTimeout(stop);
    };
  }, [blockedBySection, scrolled]);

  useEffect(() => {
    let detach = null;
    const attach = () => {
      const badge = document.querySelector('.calendly-badge-widget');
      if (!badge) return false;

      const onClick = () => trackEvent('calendly_badge_click', {
        event_category: 'lead',
        location: 'floating_badge',
      });

      badge.addEventListener('click', onClick);
      detach = () => badge.removeEventListener('click', onClick);
      return true;
    };

    if (attach()) return () => detach?.();

    const id = window.setInterval(() => {
      if (attach()) {
        window.clearInterval(id);
      }
    }, 200);
    const stop = window.setTimeout(() => window.clearInterval(id), 5000);

    return () => {
      window.clearInterval(id);
      window.clearTimeout(stop);
      detach?.();
    };
  }, []);

  // Mount the badge exactly once. Re-initialising on every language change
  // tripped Calendly's internal destroy (removeChild on a detached node)
  // and crashed the whole tree. Text updates happen in a separate effect.
  useEffect(() => {
    if (!document.querySelector(`link[href="${WIDGET_CSS}"]`)) {
      const link = document.createElement('link');
      link.href = WIDGET_CSS;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }

    const init = () => {
      if (!window.Calendly) return;
      if (document.querySelector('.calendly-badge-widget')) return;
      window.Calendly.initBadgeWidget({
        url: CALENDLY_URL,
        text: BADGE_TEXT[language] || BADGE_TEXT.en,
        color: BRAND_COLOR,
        textColor: '#ffffff',
        branding: true,
      });
    };

    const existing = document.querySelector(`script[src="${WIDGET_JS}"]`);
    if (existing && window.Calendly) {
      init();
    } else if (existing) {
      existing.addEventListener('load', init, { once: true });
    } else {
      const script = document.createElement('script');
      script.src = WIDGET_JS;
      script.async = true;
      script.addEventListener('load', init, { once: true });
      document.body.appendChild(script);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update the badge text in place when language changes — no re-init.
  useEffect(() => {
    const apply = () => {
      const node = document.querySelector('.calendly-badge-content');
      if (!node) return false;
      const text = BADGE_TEXT[language] || BADGE_TEXT.en;
      const textNode = Array.from(node.childNodes).find(
        (n) => n.nodeType === Node.TEXT_NODE,
      );
      if (textNode) textNode.textContent = text;
      else node.textContent = text;
      return true;
    };
    if (apply()) return;
    // Badge may not have rendered yet on first mount — retry briefly.
    const id = window.setInterval(() => {
      if (apply()) window.clearInterval(id);
    }, 200);
    const stop = window.setTimeout(() => window.clearInterval(id), 5000);
    return () => {
      window.clearInterval(id);
      window.clearTimeout(stop);
    };
  }, [language]);

  return null;
};

export default CalendlyBadge;

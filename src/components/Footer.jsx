import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { language, t } = useLanguage();
  const footerLinks = [
    { href: '/', label: language === 'es' ? 'Inicio' : 'Home' },
    { href: '/clases-ingles-castelldefels', label: language === 'es' ? 'Clases particulares' : 'Private classes' },
    { href: '/ingles-empresas-castelldefels', label: language === 'es' ? 'Empresas y profesionales' : 'Business English' },
    { href: '/talkthetalk', label: 'Talk the Talk' },
    { href: '#contact', label: language === 'es' ? 'Contacto' : 'Contact' },
    { href: 'https://english-with-auris-portal.netlify.app/login', label: t('footer.studentPortal'), external: true },
  ];

  return (
    <footer className="border-t border-primary-100 bg-amber-50/70 py-10 text-center">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-medium text-gray-900">{t('nav.brand')}</p>
        <nav aria-label="Footer navigation" className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-gray-600">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="transition-colors hover:text-gray-900"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

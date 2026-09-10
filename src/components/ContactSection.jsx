import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { trackEvent } from '../utils/analytics';

const ContactSection = () => {
  const { t, language } = useLanguage();

  const whatsappMessage = language === 'es'
    ? 'Hola Auris, me interesan las clases de inglés. Mi objetivo es...'
    : "Hi Auris, I'm interested in English classes. My goal is...";

  const contactOptions = [
    {
      key: 'whatsapp',
      href: `https://wa.me/34684082221?text=${encodeURIComponent(whatsappMessage)}`,
      title: t('contact.whatsapp.title'),
      meta: '+34 684 082 221',
      Icon: MessageCircle,
      iconClassName: 'text-[#25D366]',
      external: true,
    },
    {
      key: 'email',
      href: 'mailto:aurienglish@gmail.com',
      title: t('contact.email.title'),
      meta: 'aurienglish@gmail.com',
      Icon: Mail,
      iconClassName: 'text-primary-500',
      external: false,
    },
  ];

  return (
    <section id="contact" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="font-display text-3xl font-light sm:text-4xl">{t('contact.title')}</h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-gray-600">{t('contact.subtitle')}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {contactOptions.map(({ key, href, title, meta, Icon, iconClassName, external }) => (
            <a
              key={key}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              onClick={() => trackEvent('contact_click', {
                event_category: 'lead',
                contact_method: key,
                location: 'contact_section',
              })}
              className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-primary-100/60 transition-colors hover:bg-primary-50/40 sm:flex-col sm:items-start sm:gap-0 sm:p-7"
            >
              <Icon className={`h-6 w-6 flex-shrink-0 sm:mb-5 ${iconClassName}`} strokeWidth={1.75} aria-hidden="true" />
              <span className="flex min-w-0 flex-col">
                <span className="text-base font-semibold text-gray-900">{title}</span>
                <span className="mt-1 truncate text-sm text-gray-600">{meta}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

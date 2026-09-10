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
      className: 'hover:border-[#25D366]/40 hover:bg-[#25D366]/5',
      iconClassName: 'bg-[#25D366]/10 text-[#25D366]',
      external: true,
    },
    {
      key: 'email',
      href: 'mailto:aurienglish@gmail.com',
      title: t('contact.email.title'),
      meta: 'aurienglish@gmail.com',
      Icon: Mail,
      className: 'hover:border-primary-200 hover:bg-primary-50/40',
      iconClassName: 'bg-primary-50 text-primary-600',
      external: false,
    },
  ];

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-t from-primary-50 to-white" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col items-center sm:mb-14">
          <h2 className="mb-3 text-center font-display text-3xl font-light sm:text-4xl">
            {t('contact.title')}
          </h2>
          <p className="max-w-xl text-center text-[15px] leading-relaxed text-gray-600 sm:text-base">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-lg ring-1 ring-gray-100 sm:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            {contactOptions.map(({ key, href, title, meta, Icon, className, iconClassName, external }) => (
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
                className={`group flex items-center gap-4 rounded-2xl border border-gray-100 p-5 text-left transition-all hover:-translate-y-0.5 hover:shadow-md sm:flex-col sm:items-start sm:gap-0 sm:p-6 ${className}`}
              >
                <span className={`inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mb-5 ${iconClassName}`}>
                  <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="text-base font-semibold text-gray-900">{title}</span>
                  <span className="mt-1 truncate text-sm text-gray-600">{meta}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

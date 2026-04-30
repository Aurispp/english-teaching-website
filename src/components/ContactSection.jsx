import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Calendar, Mail, MessageCircle, UserCircle, Users } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../context/LanguageContext';
import { trackEvent } from '../utils/analytics';

const CALENDLY_TRIAL_URL =
  import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/aurienglish/trial-class';
const CALENDLY_GROUP_URL =
  import.meta.env.VITE_CALENDLY_GROUP_URL ||
  'https://calendly.com/aurienglish/30min-meeting-for-group-placement';

const ContactSection = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('calendly');
  const [bookingType, setBookingType] = useState('trial');
  const [calendlyReady, setCalendlyReady] = useState(() => typeof window !== 'undefined' && !!window.Calendly);
  const calendlyRef = useRef(null);
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  // Deep-link support: #book-group opens the group placement flow.
  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash;
      if (hash === '#book-group') {
        setActiveTab('calendly');
        setBookingType('group');
        setTimeout(() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      } else if (hash === '#book-trial') {
        setActiveTab('calendly');
        setBookingType('trial');
      }
    };
    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  // Lazy-load the Calendly widget script the first time the booking tab is shown,
  // then (re)mount the inline widget whenever the booking type changes. Manual
  // init lets us swap URLs without reloading the page.
  useEffect(() => {
    if (activeTab !== 'calendly') return;
    const SRC = 'https://assets.calendly.com/assets/external/widget.js';

    const mount = () => {
      if (!window.Calendly || !calendlyRef.current) return;
      calendlyRef.current.innerHTML = '';
      window.Calendly.initInlineWidget({
        url: bookingType === 'group' ? CALENDLY_GROUP_URL : CALENDLY_TRIAL_URL,
        parentElement: calendlyRef.current,
      });
    };

    if (window.Calendly) {
      mount();
      return;
    }

    let script = document.querySelector(`script[src="${SRC}"]`);
    if (!script) {
      script = document.createElement('script');
      script.src = SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    const onLoad = () => {
      setCalendlyReady(true);
      mount();
    };
    script.addEventListener('load', onLoad);
    return () => script.removeEventListener('load', onLoad);
  }, [activeTab, bookingType]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    trackEvent('contact_form_submit', {
      event_category: 'lead',
    });
    setFormStatus({ submitting: true, submitted: false, error: null });

    const formData = {
      from_name: e.target.from_name.value,
      to_name: 'Auris',
      message: e.target.message.value,
      reply_to: e.target.reply_to.value,
    };

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log('Success:', result.text);
      trackEvent('contact_form_submit_success', {
        event_category: 'lead',
      });
      setFormStatus({
        submitting: false,
        submitted: true,
        error: null
      });

      e.target.reset();
      setTimeout(() => {
        setFormStatus({
          submitting: false,
          submitted: false,
          error: null
        });
      }, 5000);

    } catch (error) {
      console.error('Email error:', error);
      trackEvent('contact_form_submit_error', {
        event_category: 'lead',
      });
      setFormStatus({
        submitting: false,
        submitted: false,
        error: `${t('contact.form.errorMessage')}${error.text || t('contact.form.tryAgain')}`
      });
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary-50 to-white"></div>
      <div className="max-w-2xl mx-auto px-6 relative">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-display font-light text-center mb-4">{t('contact.title')}</h2>
          <p className="text-gray-600 text-center">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex border-b border-gray-100">
            <button
              className={`flex-1 px-4 sm:px-6 py-4 text-sm font-medium transition-colors inline-flex items-center justify-center gap-2 ${activeTab === 'calendly'
                ? 'text-primary-600 border-b-2 border-primary-500'
                : 'text-gray-600 hover:text-primary-600'
                }`}
              onClick={() => {
                trackEvent('contact_tab_selected', {
                  event_category: 'lead',
                  contact_tab: 'calendly',
                });
                setActiveTab('calendly');
              }}
            >
              <Calendar className="w-4 h-4" />
              {t('contact.bookTrial')}
            </button>
            <button
              className={`flex-1 px-4 sm:px-6 py-4 text-sm font-medium transition-colors ${activeTab === 'direct'
                ? 'text-primary-600 border-b-2 border-primary-500'
                : 'text-gray-600 hover:text-primary-600'
                }`}
              onClick={() => {
                trackEvent('contact_tab_selected', {
                  event_category: 'lead',
                  contact_tab: 'direct',
                });
                setActiveTab('direct');
              }}
            >
              {t('contact.directContact')}
            </button>
            <button
              className={`flex-1 px-4 sm:px-6 py-4 text-sm font-medium transition-colors ${activeTab === 'form'
                ? 'text-primary-600 border-b-2 border-primary-500'
                : 'text-gray-600 hover:text-primary-600'
                }`}
              onClick={() => {
                trackEvent('contact_tab_selected', {
                  event_category: 'lead',
                  contact_tab: 'form',
                });
                setActiveTab('form');
              }}
            >
              {t('contact.sendMessage')}
            </button>
          </div>

          <div className="p-8">
            {activeTab === 'calendly' ? (
              <div>
                <div className="flex justify-center mb-6">
                  <div
                    className="inline-flex p-1 rounded-full bg-gray-100 gap-1"
                    role="tablist"
                    aria-label="Booking type"
                  >
                    <button
                      role="tab"
                      aria-selected={bookingType === 'trial'}
                      onClick={() => {
                        trackEvent('booking_type_selected', {
                          event_category: 'lead',
                          booking_type: 'trial',
                        });
                        setBookingType('trial');
                      }}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        bookingType === 'trial'
                          ? 'bg-white text-primary-600 shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <UserCircle className="w-4 h-4" />
                      {t('contact.booking.trial')}
                    </button>
                    <button
                      role="tab"
                      aria-selected={bookingType === 'group'}
                      onClick={() => {
                        trackEvent('booking_type_selected', {
                          event_category: 'lead',
                          booking_type: 'group',
                        });
                        setBookingType('group');
                      }}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        bookingType === 'group'
                          ? 'bg-white text-primary-600 shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <Users className="w-4 h-4" />
                      {t('contact.booking.group')}
                    </button>
                  </div>
                </div>

                <div key={bookingType} className="text-center mb-6 animate-fade-in-up">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {bookingType === 'group'
                      ? t('contact.bookGroupHeading')
                      : t('contact.bookTrialHeading')}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {bookingType === 'group'
                      ? t('contact.bookGroupSub')
                      : t('contact.bookTrialSub')}
                  </p>
                </div>

                <div
                  ref={calendlyRef}
                  className="rounded-xl overflow-hidden"
                  style={{ minWidth: '280px', height: '680px' }}
                />
                {!calendlyReady && (
                  <div className="text-center text-xs text-gray-400 mt-3">
                    Loading booking calendar…
                  </div>
                )}
              </div>
            ) : activeTab === 'direct' ? (
              <div className="space-y-6">
                <a
                  href="mailto:aurienglish@gmail.com"
                  onClick={() => trackEvent('contact_click', {
                    event_category: 'lead',
                    contact_method: 'email',
                    location: 'contact_section',
                  })}
                  className="flex items-center justify-center space-x-3 text-gray-600 hover:text-primary-600 transition-colors py-4 px-6 rounded-lg hover:bg-primary-50 group"
                >
                  <Mail className="w-5 h-5 text-primary-500 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">aurienglish@gmail.com</span>
                </a>
                <a
                  href="https://wa.me/34684082221"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('contact_click', {
                    event_category: 'lead',
                    contact_method: 'whatsapp',
                    location: 'contact_section',
                  })}
                  className="flex items-center justify-center space-x-3 text-gray-600 hover:text-[#25D366] transition-colors py-4 px-6 rounded-lg hover:bg-[#25D366]/10 group"
                >
                  <div className="relative">
                    <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform" fill="currentColor" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="font-medium">WhatsApp</span>
                    <span className="text-sm text-gray-500">+34 684 082 221</span>
                  </div>
                </a>
                <button
                  onClick={() => {
                    trackEvent('contact_tab_selected', {
                      event_category: 'lead',
                      contact_tab: 'form',
                      location: 'direct_contact_panel',
                    });
                    setActiveTab('form');
                  }}
                  className="w-full text-primary-600 hover:text-primary-700 text-sm mt-4"
                >
                  {t('contact.switchToForm')}
                </button>
              </div>
            ) : (
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="from_name"
                      name="from_name"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 outline-none"
                      placeholder={t('contact.form.namePlaceholder')}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="reply_to" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="reply_to"
                      name="reply_to"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 outline-none"
                      placeholder={t('contact.form.emailPlaceholder')}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 outline-none resize-none"
                      placeholder={t('contact.form.messagePlaceholder')}
                      required
                    />
                  </div>

                  {formStatus.submitted && (
                    <div className="p-4 bg-green-50 text-green-700 rounded-lg animate-fade-in-up">
                      {t('contact.form.successMessage')}
                    </div>
                  )}

                  {formStatus.error && (
                    <div className="p-4 bg-red-50 text-red-700 rounded-lg animate-fade-in-up">
                      {formStatus.error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus.submitting}
                    className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 px-6 rounded-full hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg group inline-flex items-center justify-center disabled:opacity-70"
                  >
                    <span className="text-sm font-medium mr-2">
                      {formStatus.submitting ? t('contact.form.sending') : t('contact.form.send')}
                    </span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
                <button
                  onClick={() => {
                    trackEvent('contact_tab_selected', {
                      event_category: 'lead',
                      contact_tab: 'direct',
                      location: 'contact_form_panel',
                    });
                    setActiveTab('direct');
                  }}
                  className="w-full text-primary-600 hover:text-primary-700 text-sm mt-6"
                >
                  {t('contact.switchToDirect')}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

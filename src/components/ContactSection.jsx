import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../context/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('direct');
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      <div className="max-w-xl mx-auto px-6 relative">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-display font-light text-center mb-4">{t('contact.title')}</h2>
          <p className="text-gray-600 text-center">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex border-b border-gray-100">
            <button
              className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${activeTab === 'direct'
                ? 'text-primary-600 border-b-2 border-primary-500'
                : 'text-gray-600 hover:text-primary-600'
                }`}
              onClick={() => setActiveTab('direct')}
            >
              {t('contact.directContact')}
            </button>
            <button
              className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${activeTab === 'form'
                ? 'text-primary-600 border-b-2 border-primary-500'
                : 'text-gray-600 hover:text-primary-600'
                }`}
              onClick={() => setActiveTab('form')}
            >
              {t('contact.sendMessage')}
            </button>
          </div>

          <div className="p-8">
            {activeTab === 'direct' ? (
              <div className="space-y-6">
                <a
                  href="mailto:aurienglish@gmail.com"
                  className="flex items-center justify-center space-x-3 text-gray-600 hover:text-primary-600 transition-colors py-4 px-6 rounded-lg hover:bg-primary-50 group"
                >
                  <Mail className="w-5 h-5 text-primary-500 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">aurienglish@gmail.com</span>
                </a>
                <a
                  href="https://wa.me/34684082221"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  onClick={() => setActiveTab('form')}
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
                  onClick={() => setActiveTab('direct')}
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
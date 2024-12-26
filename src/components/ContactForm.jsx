import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';

const ContactForm = ({ type }) => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredTime: '',
    experience: '',
    goals: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-gradient-to-b from-amber-50/70 to-white min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          {t('contact.backHome')}
        </button>

        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h1 className="text-3xl font-display font-light mb-2">
            {t(`contact.${type}.title`)}
          </h1>
          <p className="text-gray-600 mb-8">
            {t(`contact.${type}.subtitle`)}
          </p>

          {type === 'group' && (
            <div className="bg-primary-50 p-4 rounded-xl mb-8">
              <p className="text-primary-800 text-sm">
                {t('contact.group.waitingListNotice')}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder={t('contact.form.namePlaceholder')}
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder={t('contact.form.emailPlaceholder')}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder={t('contact.form.phonePlaceholder')}
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.preferredTime')}
                </label>
                <input
                  type="text"
                  id="preferredTime"
                  name="preferredTime"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder={t('contact.form.preferredTimePlaceholder')}
                  value={formData.preferredTime}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.form.experience')}
              </label>
              <select
                id="experience"
                name="experience"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                value={formData.experience}
                onChange={handleChange}
              >
                <option value="">{t('contact.form.selectLevel')}</option>
                <option value="beginner">{t('contact.form.levels.beginner')}</option>
                <option value="intermediate">{t('contact.form.levels.intermediate')}</option>
                <option value="advanced">{t('contact.form.levels.advanced')}</option>
              </select>
            </div>

            <div>
              <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.form.goals')}
              </label>
              <textarea
                id="goals"
                name="goals"
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                placeholder={t('contact.form.goalsPlaceholder')}
                value={formData.goals}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                placeholder={t('contact.form.messagePlaceholder')}
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary-500 text-white py-3 px-6 rounded-xl hover:bg-primary-600 transition-colors duration-200"
            >
              {t('contact.form.submit')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
import React, { useState } from 'react';
import { Globe2, Clock, MessageCircle, CheckCircle2, Quote, ArrowRight, GraduationCap, Target, Sparkles, Menu, X } from 'lucide-react';
import { Card, CardContent } from './components/ui/card';
import teacherPhoto from './1687023565448.jpeg';
import LanguageSwitcher from './components/LanguageSwitcher';
import { useLanguage } from './context/LanguageContext';
import ContactSection from './components/ContactSection';
import HeroSection from './components/HeroSection';






function App() {
  const { t } = useLanguage();
  const testimonials = t('stories.testimonials');
  const challenges = t('challenges.items');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/70 to-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-primary-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl sm:text-2xl font-display font-light text-primary-600 hover:text-primary-700 cursor-pointer transition-all duration-300 flex items-center">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-primary-500" />
              English with Auris
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-primary-600 hover:text-primary-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              {['challenges', 'about', 'stories', 'contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`} 
                  className="font-medium text-gray-600 hover:text-primary-600 transition-all duration-300 relative group py-2"
                >
                  {t(`nav.${item}`)}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
              ))}
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
            <div className="flex flex-col space-y-4">
              {['challenges', 'about', 'stories', 'contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`} 
                  className="font-medium text-gray-600 hover:text-primary-600 transition-all duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(`nav.${item}`)}
                </a>
              ))}
              <div className="py-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <HeroSection />

      {/* Challenges Section */}
      <section id="challenges" className="py-16 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-primary-50/30"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="flex flex-col items-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-primary-100 rounded-full mb-4">
              <Target className="w-6 h-6 text-primary-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-light text-center mb-4">{t('challenges.title')}</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">Overcome common obstacles with personalized guidance</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-white rounded-2xl shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:scale-[1.02]"></div>
                <div className="relative p-6 sm:p-8">
                  <h3 className="text-xl font-display text-primary-600 group-hover:text-primary-700 transition-colors mb-4">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{challenge.description}</p>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="text-sm text-gray-600">{challenge.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50/80 to-transparent transform skew-x-12"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <h2 className="text-3xl sm:text-4xl font-display font-light text-center mb-12 sm:mb-20">{t('about.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-start">
            <div className="space-y-6 sm:space-y-8">
              {['intro', 'method', 'approach'].map((key) => (
                <div 
                  key={key}
                  className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:translate-y-[-2px]"
                >
                  <p className="text-gray-600 leading-relaxed">{t(`about.${key}`)}</p>
                </div>
              ))}
            </div>
            <div className="md:sticky md:top-32">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-200 to-primary-300/70 rounded-2xl transform rotate-3 group-hover:rotate-2 transition-transform duration-500"></div>
                <img 
                  src={teacherPhoto} 
                  alt="Auris teaching English" 
                  className="relative rounded-2xl shadow-lg w-full h-auto transform transition-all duration-500 hover:rotate-[-2deg] hover:shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="stories" className="py-16 sm:py-32 relative bg-gradient-to-b from-white to-primary-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-primary-100 rounded-full mb-4">
              <Quote className="w-6 h-6 text-primary-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-light text-center mb-4">{t('stories.title')}</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              {t('stories.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-white rounded-2xl shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:scale-[1.02]"></div>
                <div className="relative p-6 sm:p-8 flex flex-col h-full">
                  <div className="flex items-start mb-6">
                    <Quote className="w-6 h-6 text-primary-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-primary-600 ml-2">{testimonial.highlight}</span>
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">{testimonial.text}</p>
                  <div className="border-t border-primary-100 pt-4">
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section id="method" className="py-16 sm:py-32 bg-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.07] bg-[length:50px_50px]"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50/80 to-transparent transform skew-x-12"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <h2 className="text-3xl sm:text-4xl font-display font-light text-center mb-4 sm:mb-6">{t('method.title')}</h2>
          <p className="text-gray-600 text-center mb-12 sm:mb-20 max-w-2xl mx-auto">
            {t('method.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Progress Tracking */}
            <div className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 group overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary-500/5 rounded-bl-[100px] transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
              
              <h3 className="relative text-lg sm:text-xl font-display font-light mb-4 text-primary-600 group-hover:text-primary-700 transition-colors">
                <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">
                  {t('method.tracking.title')}
                </span>
              </h3>
              <p className="relative text-gray-600 leading-relaxed tracking-wide">
                {t('method.tracking.description')}
              </p>
            </div>

            {/* Spaced Repetition */}
            <div className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 group overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary-500/5 rounded-bl-[100px] transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
              
              <h3 className="relative text-lg sm:text-xl font-display font-light mb-4 text-primary-600 group-hover:text-primary-700 transition-colors">
                <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">
                  {t('method.spaced.title')}
                </span>
              </h3>
              <p className="relative text-gray-600 leading-relaxed tracking-wide">
                {t('method.spaced.description')}
              </p>
            </div>

            {/* Interactive Learning */}
            <div className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 group overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary-500/5 rounded-bl-[100px] transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
              
              <h3 className="relative text-lg sm:text-xl font-display font-light mb-4 text-primary-600 group-hover:text-primary-700 transition-colors">
                <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">
                  {t('method.interactive.title')}
                </span>
              </h3>
              <p className="relative text-gray-600 leading-relaxed tracking-wide">
                {t('method.interactive.description')}
              </p>
            </div>

            {/* Consistent Improvement */}
            <div className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 group overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary-500/5 rounded-bl-[100px] transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
              
              <h3 className="relative text-lg sm:text-xl font-display font-light mb-4 text-primary-600 group-hover:text-primary-700 transition-colors">
                <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">
                  {t('method.consistent.title')}
                </span>
              </h3>
              <p className="relative text-gray-600 leading-relaxed tracking-wide">
                {t('method.consistent.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-6 sm:py-8 text-center bg-gradient-to-b from-white to-primary-50/30 border-t border-primary-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <GraduationCap className="w-5 h-5 text-primary-500 mr-2" />
            <span className="text-primary-600 font-medium">English with Auris</span>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
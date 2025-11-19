import React, { useState } from 'react';
import { Globe2, Clock, MessageCircle, CheckCircle2, Quote, ArrowRight, GraduationCap, Target, Sparkles, Menu, X } from 'lucide-react';
import { Card, CardContent } from './components/ui/card';
import teacherPhoto from './1687023565448.jpeg';
import LanguageSwitcher from './components/LanguageSwitcher';
import { useLanguage } from './context/LanguageContext';
import ContactSection from './components/ContactSection';
import HeroSection from './components/HeroSection';
import TeachingPillars from './components/TeachingPillars';
import English2Logo from './English-2.png'
import Navbar from './components/Navbar';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import ToolsSection from './components/ToolsSection';


const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

function App() {
  const { t } = useLanguage();
  const testimonials = t('stories.testimonials');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['scenarios', 'about', 'stories', 'contact'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/70 to-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TeachingPillars />
        {/* Stories Section */}
        <section id="stories" className="py-16 sm:py-32 relative bg-gradient-to-b from-white to-primary-50/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center mb-12 sm:mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-primary-100 rounded-full mb-4">
                <Quote className="w-6 h-6 text-primary-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-light text-center mb-4">
                {t('stories.title')}
              </h2>
              <p className="text-gray-600 text-center max-w-2xl mx-auto">
                {t('stories.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-primary-50/30 rounded-2xl shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:scale-[1.03] group-hover:-translate-y-1"></div>
                  <div className="relative p-6 sm:p-8 flex flex-col h-full">
                    <div className="flex items-start mb-6">
                      <Quote className="w-6 h-6 text-primary-500 flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                      <span className="text-sm font-medium text-primary-600 ml-2 group-hover:text-primary-700 transition-colors">{testimonial.highlight}</span>
                    </div>
                    <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{testimonial.text}</p>
                    <div className="border-t border-primary-100 pt-4 group-hover:border-primary-200 transition-colors">
                      <p className="font-medium text-gray-900">{testimonial.author}</p>
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
            <h2 className="text-3xl sm:text-4xl font-display font-light text-center mb-12 sm:mb-20">
              {t('about.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-start">
              <div className="space-y-6 sm:space-y-8">
                {['intro', 'method', 'approach'].map((key) => (
                  <div
                    key={key}
                    className="group bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:translate-y-[-4px] hover:scale-[1.01] border border-transparent hover:border-primary-100"
                  >
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">{t(`about.${key}`)}</p>
                  </div>
                ))}
              </div>
              <div className="md:sticky md:top-32">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-200 to-primary-300/70 rounded-2xl transform rotate-3 group-hover:rotate-2 transition-transform duration-500"></div>
                  <img
                    src={teacherPhoto}
                    alt={t('images.teacher')}
                    className="relative rounded-2xl shadow-lg w-full h-auto transform transition-all duration-500 hover:rotate-[-2deg] hover:shadow-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <ToolsSection />

        {/* Pricing Section */}
        <PricingSection />

        {/* FAQ Section */}
        <FAQSection />

      </main>


      <ContactSection />

      {/* Footer */}
      <footer className="py-6 sm:py-8 text-center bg-gradient-to-b from-white to-primary-50/30 border-t border-primary-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center mb-3 sm:mb-4">

            <span className="text-primary-600 font-medium">{t('nav.brand')}</span>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} {t('footer.rights')}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import { Globe2, Clock, MessageCircle, CheckCircle2, Quote, ArrowRight, GraduationCap, Target, Sparkles, Menu, X } from 'lucide-react';
import { Card, CardContent } from './components/ui/card';
import teacherPhoto from './1687023565448.jpeg';
import LanguageSwitcher from './components/LanguageSwitcher';
import { useLanguage } from './context/LanguageContext';
import ContactSection from './components/ContactSection';
import HeroSection from './components/HeroSection';
import PlateauGraph from './components/PlateauGraph';
import barcaImage from './barca.png';



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

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/70 to-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-primary-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div 
              onClick={scrollToTop}
              className="text-xl sm:text-2xl font-display font-light text-primary-600 hover:text-primary-700 cursor-pointer transition-all duration-300 flex items-center"
            >
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-primary-500" />
              English with Auris
            </div>
            
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <button 
                className="md:hidden p-2 text-primary-600 hover:text-primary-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              <div className="hidden md:flex items-center space-x-12">
                {['scenarios', 'about', 'stories', 'contact'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item}`} 
                    className="font-medium text-gray-600 hover:text-primary-600 transition-all duration-300 relative group py-2"
                  >
                    {t(`nav.${item}`)}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
            <div className="flex flex-col space-y-4">
              {['scenarios', 'about', 'stories', 'contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`} 
                  className="font-medium text-gray-600 hover:text-primary-600 transition-all duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(`nav.${item}`)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <HeroSection />

      {/* Scenarios Section */}
      <section id="scenarios" className="w-full">
        {/* First Scenario */}
        <div className="bg-slate-50">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h2 className="text-3xl sm:text-4xl font-display text-slate-800 font-light">
          Breaking Through in English
        </h2>
        
        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
          <p>
            You've reached that point in your English journey where you can generally express yourself, 
            but not with the confidence and fluency you desire. During important moments—like that 
            client presentation or job interview you really need to nail—you might find yourself 
            freezing up or stuck in the habit of mental translation.
          </p>
          
          <p>
            You can communicate, but perhaps 
            you're settling for less challenging roles because you're not yet confident enough to 
            pursue opportunities where English plays a bigger part. Those team meetings, international 
            calls, or crucial presentations might be causing more stress than they should, holding 
            you back from showing your true professional value.
          </p>
        </div>
      </div>
      
      <div className="relative bg-white p-8 rounded-lg shadow-lg">
        <PlateauGraph />
      </div>
    </div>
  </div>
</div>

        {/* Second Scenario */}
        <div className="bg-indigo-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2 space-y-6">
                <h2 className="text-3xl sm:text-4xl font-display text-slate-800 font-light">
                Finding your path with English
                </h2>
                
                <div className="space-y-6 text-slate-600 text-lg leading-relaxed">

  <p>
    Learning English has been difficult. Perhaps the way they taught you at school 
    didn't work for you, and your busy life has led to neglecting it. But now 
    you're thinking about all the opportunities that speaking English could open up: 
    more work possibilities, life experiences, and connections that would otherwise 
    be impossible.
  </p>
  
  <p>
    It might be difficult to imagine yourself speaking fluently. And I won't lie: 
    it's a journey. But I've seen many students go through this transformation and 
    move forward with this invaluable skill.
  </p>

  <p>
    My own life changed completely after learning Spanish and moving to Barcelona 
    in 2014 at 22. It has enriched my life both personally and professionally. 
    In fact, learning Spanish is sparked my passion for teaching. It made me dive deep 
    into language learning and constantly refine my teaching methods, which I continue 
    to do today.
  </p>
</div>
                
              </div>
              
              <div className="lg:order-1 relative bg-white p-8 rounded-lg shadow-lg overflow-hidden">
              <img 
  src={barcaImage} 
  alt="Barcelona" 
  className="w-full h-auto object-cover rounded-lg filter saturate-75"
/>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-32 bg-white relative overflow-hidden">
        {/* Keep your existing About section */}
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

      {/* Stories Section */}
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
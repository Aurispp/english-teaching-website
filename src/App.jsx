import React from 'react';
import { Globe2, Clock, MessageCircle, CheckCircle2, Quote, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './components/ui/card';
import teacherPhoto from './1687023565448.jpeg';
import LanguageSwitcher from './components/LanguageSwitcher';
import { useLanguage } from './context/LanguageContext';

function App() {
  const { t } = useLanguage();
  const testimonials = t('stories.testimonials');

  const challenges = t('challenges.items');


  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="bg-white sticky top-0 z-50 border-b border-amber-100">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-light text-amber-600 hover:text-amber-700 cursor-pointer transition-colors">
              English with Auris
            </div>
            <div className="flex items-center space-x-12">
              {['challenges', 'about', 'stories', 'contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`} 
                  className="text-gray-600 hover:text-amber-600 transition-colors relative group"
                >
                  {t(`nav.${item}`)}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
              ))}
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative py-40 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-64 h-64 bg-amber-100 rounded-full opacity-20 transform -translate-x-1/2"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-200 rounded-full opacity-10"></div>
        </div>
        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-light text-gray-900 mb-8 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-6 font-light">
              {t('hero.subtitle')}
            </p>
            <p className="text-lg text-amber-600 mb-12">
              {t('hero.tagline')}
            </p>
            <a 
              href="#contact" 
              className="group inline-flex items-center bg-amber-500 text-white px-8 py-4 rounded-full hover:bg-amber-600 transition-colors"
            >
              <span className="text-sm mr-2">{t('hero.cta')}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Challenges Section */}
      <section id="challenges" className="py-32">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-light text-center mb-20">{t('challenges.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <Card key={index} className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8">
                  <h3 className="text-xl font-light mb-4 text-amber-600">{challenge.title}</h3>
                  <p className="text-gray-600 mb-6">{challenge.description}</p>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-600">{challenge.solution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-50 transform skew-x-12"></div>
        <div className="max-w-5xl mx-auto px-6 relative">
          <h2 className="text-4xl font-light text-center mb-20">{t('about.title')}</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
              <p className="bg-white p-6 rounded-lg shadow-sm">
                {t('about.intro')}
              </p>
              <p className="bg-white p-6 rounded-lg shadow-sm">
                {t('about.method')}
              </p>
              <p className="bg-white p-6 rounded-lg shadow-sm">
                {t('about.approach')}
              </p>
            </div>
            <div className="md:sticky md:top-32">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-200 rounded-lg transform rotate-3"></div>
                <img 
                  src={teacherPhoto} 
                  alt="Auris teaching English" 
                  className="relative rounded-lg shadow-lg w-full transform transition-transform duration-300 hover:-rotate-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="method" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-50 transform skew-x-12"></div>
        <div className="max-w-5xl mx-auto px-6 relative">
          <h2 className="text-4xl font-light text-center mb-6">{t('method.title')}</h2>
          <p className="text-gray-600 text-center mb-20 max-w-2xl mx-auto">
            {t('method.subtitle')}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-light mb-4 text-amber-600">{t('method.tracking.title')}</h3>
              <p className="text-gray-600">{t('method.tracking.description')}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-light mb-4 text-amber-600">{t('method.spaced.title')}</h3>
              <p className="text-gray-600">{t('method.spaced.description')}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-light mb-4 text-amber-600">{t('method.interactive.title')}</h3>
              <p className="text-gray-600">{t('method.interactive.description')}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-light mb-4 text-amber-600">{t('method.consistent.title')}</h3>
              <p className="text-gray-600">{t('method.consistent.description')}</p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                <CardContent className="p-8 flex flex-col flex-grow">
                  <div className="flex items-start mb-6">
                    <Quote className="w-6 h-6 text-amber-500 flex-shrink-0" />
                    <span className="text-xs font-medium text-amber-600 ml-2">{testimonial.highlight}</span>
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">{testimonial.text}</p>
                  <div className="border-t border-gray-100 pt-4 mt-auto">
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-light text-center mb-20">{t('services.title')}</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {t('services.items').map((service, index) => (
              <div key={index} className="text-center group hover:-translate-y-1 transition-transform duration-300">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {index === 0 && <Globe2 className="w-8 h-8 text-amber-500 mx-auto" />}
                  {index === 1 && <Clock className="w-8 h-8 text-amber-500 mx-auto" />}
                  {index === 2 && <MessageCircle className="w-8 h-8 text-amber-500 mx-auto" />}
                </div>
                <h3 className="text-xl font-light mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-50 to-white"></div>
        <div className="max-w-xl mx-auto px-6 relative">
          <h2 className="text-4xl font-light text-center mb-6">{t('contact.title')}</h2>
          <p className="text-gray-600 text-center mb-16">
            {t('contact.subtitle')}
          </p>
          <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="space-y-4 mb-8">
                <a 
                  href="mailto:aurienglish@gmail.com" 
                  className="block text-gray-600 hover:text-amber-600 transition-colors text-center"
                >
                  aurienglish@gmail.com
                </a>
                <a 
                  href="tel:+34684082221" 
                  className="block text-gray-600 hover:text-amber-600 transition-colors text-center"
                >
                  +34 684 082 221
                </a>
              </div>
              <button className="w-full bg-amber-500 text-white py-4 rounded-full hover:bg-amber-600 transition-colors group inline-flex items-center justify-center">
                <span className="text-sm mr-2">{t('contact.cta')}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          © {new Date().getFullYear()} English with Auris
        </div>
      </footer>
    </div>
  );
}


export default App;
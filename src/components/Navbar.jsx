import React from 'react';
import { Phone, Mail, GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import whatsappIcon from '../whatsapp.png';

const Navbar = () => {
  const { language, setLanguage } = useLanguage();

  const contactLinks = [
    {
      icon: <Phone className="w-5 h-5" />,
      href: "tel:+34684082221",
      label: "Call"
    },
    {
      icon: <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5 object-contain" />,
      href: "https://wa.me/34684082221",
      label: "WhatsApp"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:aurienglish@gmail.com",
      label: "Email"
    }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-primary-100">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-16 gap-2">
          {/* Logo and Language Selection */}
          <div className="flex items-center gap-2 sm:gap-8">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <div className="bg-[#FF914D] px-3 sm:px-4 py-2 rounded-lg flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-black" />
                <span className="text-black flex items-center text-sm sm:text-base">
                  <span className="font-bold">English</span>
                  <span className="mx-1 text-xs sm:text-sm font-normal">with</span>
                  <span className="font-bold">Auris</span>
                </span>
              </div>
            </a>
            
            {/* Language Toggle */}
            <div className="flex items-center gap-1 sm:gap-2 text-sm">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 sm:px-3 py-1 rounded-full transition-colors ${
                  language === 'en' 
                    ? 'bg-[#FF914D] text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-2 sm:px-3 py-1 rounded-full transition-colors ${
                  language === 'es' 
                    ? 'bg-[#FF914D] text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                ES
              </button>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="flex items-center gap-1 sm:gap-3">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label={link.label}
              >
                {link.icon}
                <span className="hidden sm:inline">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { language, setLanguage } = useLanguage();

  const contactLinks = [
    {
      icon: <Phone className="w-5 h-5" />,
      href: "tel:+34684082221",
      label: "Call"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Language Selection */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <div className="bg-[#FF914D] px-4 py-2 rounded-lg">
                <span className="text-white font-semibold flex items-center gap-1">
                  English with Auris
                </span>
              </div>
            </a>
            
            {/* Language Toggle */}
            <div className="flex items-center gap-2 text-sm">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full transition-colors ${
                  language === 'en' 
                    ? 'bg-[#FF914D] text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 rounded-full transition-colors ${
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
          <div className="flex items-center gap-3">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="inline-flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
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
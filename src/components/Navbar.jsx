import React, { useState, useRef, useEffect } from 'react';
import { Phone, Mail, GraduationCap, LogIn, MessageCircle, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import whatsappIcon from '../whatsapp.webp';

const Navbar = ({ onTalkTheTalkClick }) => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-primary-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-16 gap-2">
          {/* Logo and Language Selection */}
          <div className="flex items-center gap-2 sm:gap-8">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <div className="bg-[#FF914D] px-3 sm:px-4 py-2 rounded-lg flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-black" />
                <span className="text-black flex items-center text-base sm:text-lg font-['Cabinet_Grotesk']">
                  <span className="font-bold">English</span>
                  <span className="mx-1 text-sm sm:text-base font-normal">with</span>
                  <span className="font-bold">Auris</span>
                </span>
              </div>
            </a>

            {/* Language Toggle */}
            <div className="flex items-center gap-1 sm:gap-2 text-sm">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 sm:px-3 py-1 rounded-full transition-colors ${language === 'en'
                  ? 'bg-[#FF914D] text-white'
                  : 'text-gray-600 hover:bg-gray-100'
                  }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-2 sm:px-3 py-1 rounded-full transition-colors ${language === 'es'
                  ? 'bg-[#FF914D] text-white'
                  : 'text-gray-600 hover:bg-gray-100'
                  }`}
              >
                ES
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Talk the Talk - Free Practice Tool */}
            <button
              onClick={onTalkTheTalkClick}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-orange-500 via-rose-500 to-purple-500 text-white rounded-lg transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-100"
              aria-label="Talk the Talk - Free Speaking Practice"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Talk the Talk</span>
            </button>

            <div className="w-px h-6 bg-gray-200" />

            {/* Student Login */}
            <a
              href="https://english-with-auris-portal.netlify.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:text-[#FF914D] hover:bg-orange-50 rounded-lg transition-colors"
              aria-label={t('studentLogin')}
            >
              <LogIn className="w-4 h-4" />
              <span className="hidden md:inline">{t('studentLogin')}</span>
            </a>

            <div className="w-px h-6 bg-gray-200" />

            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="inline-flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label={link.label}
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Student Login - with text on mobile */}
            <a
              href="https://english-with-auris-portal.netlify.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2 py-2 text-sm text-gray-600 hover:text-[#FF914D] hover:bg-orange-50 rounded-lg transition-colors"
              aria-label={t('studentLogin')}
            >
              <LogIn className="w-4 h-4" />
              <span className="text-xs">{t('studentLogin')}</span>
            </a>

            {/* Mobile Menu Button */}
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center w-9 h-9 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

              {/* Mobile Dropdown Menu */}
              {mobileMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  {/* Talk the Talk */}
                  <button
                    onClick={() => {
                      onTalkTheTalkClick();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-orange-50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-500 via-rose-500 to-purple-500 flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Talk the Talk</div>
                      <div className="text-xs text-gray-500">Free speaking practice</div>
                    </div>
                  </button>

                  <div className="my-2 border-t border-gray-100" />

                  {/* Contact Links */}
                  {contactLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : '_self'}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                        {link.icon}
                      </div>
                      <span className="font-medium">{link.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

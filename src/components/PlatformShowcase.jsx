import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import dashboardImg from '../portal/dashboard.webp';
import flashcardsImg from '../portal/flashcards.webp';
import storyImg from '../portal/story.webp';
import examImg from '../portal/exam.webp';
import scenarioImg from '../portal/scenario.webp';
import kiwiImg from '../portal/kiwi.webp';

const FEATURES = [
  { id: 'dashboard', img: dashboardImg },
  { id: 'flashcards', img: flashcardsImg },
  { id: 'story', img: storyImg },
  { id: 'exam', img: examImg },
  { id: 'scenario', img: scenarioImg },
  { id: 'kiwi', img: kiwiImg },
];

const PlatformShowcase = ({ autoAdvance = true, autoAdvanceInterval = 6000 }) => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  
  const activeFeature = FEATURES[activeIndex];

  const handleNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % FEATURES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((current) => (current - 1 + FEATURES.length) % FEATURES.length);
  }, []);

  // Auto-advance
  useEffect(() => {
    if (!autoAdvance || isPaused) return;
    const timer = setInterval(handleNext, autoAdvanceInterval);
    return () => clearInterval(timer);
  }, [autoAdvance, autoAdvanceInterval, isPaused, handleNext]);

  // Touch handlers for mobile swipe gestures
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current === null) return;
    const touchCurrentX = e.touches[0].clientX;
    const diff = touchStartX.current - touchCurrentX;
    
    // Sensitivity threshold for swipe
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      touchStartX.current = null; // Prevent multi-trigger
    }
  };

  const handleTouchEnd = () => {
    touchStartX.current = null;
    setIsPaused(false);
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrev();
  };

  return (
    <section className="flex flex-col justify-center py-12 md:py-16 px-4 bg-gradient-to-b from-white via-amber-50/40 to-primary-50/30 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto flex flex-col">
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">{t('showcase.title')}</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">{t('showcase.subtitle')}</p>
        </div>

        {/* Mobile: single pill showing the current feature */}
        <div className="md:hidden flex justify-center mb-4">
          <div
            key={activeFeature.id}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-500 text-white text-sm font-semibold shadow-lg shadow-primary-500/30 animate-fade-in-up"
            aria-live="polite"
          >
            <span className="text-xs font-medium opacity-80">
              {activeIndex + 1} / {FEATURES.length}
            </span>
            <span className="w-px h-3 bg-white/40" />
            <span>{t(`showcase.${activeFeature.id}.title`)}</span>
          </div>
        </div>

        {/* Desktop: full tab chips */}
        <div
          className="hidden md:flex justify-center gap-2 mb-6"
          role="tablist"
          aria-label="Platform features"
        >
          {FEATURES.map((f, index) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={activeIndex === index}
              aria-controls={`panel-${f.id}`}
              onClick={() => setActiveIndex(index)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ${
                activeIndex === index
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30 scale-105'
                  : 'bg-white text-gray-700 hover:bg-primary-50 active:bg-primary-100 border border-gray-200 hover:border-primary-200'
              }`}
            >
              {t(`showcase.${f.id}.title`)}
            </button>
          ))}
        </div>

        {/* Carousel Frame Container */}
        <div 
          className="relative max-w-5xl w-full mx-auto focus:outline-none"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          aria-label="Feature showcase carousel - use left and right arrows to navigate"
        >
          {/* Ambient Glow */}
          <div className="absolute inset-x-2 md:inset-x-8 -inset-y-4 bg-primary-500/20 blur-[40px] md:blur-[60px] rounded-[3rem] opacity-70 pointer-events-none transition-all duration-1000" />
          
          <div className="relative rounded-xl md:rounded-3xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] border border-gray-200/60 bg-white ring-1 ring-black/5 z-10 transition-transform duration-300">
            
            {/* macOS Chrome Header - Subtle gradient for a premium look */}
            <div className="flex items-center gap-2 px-4 py-2.5 md:py-3.5 bg-gradient-to-b from-gray-50 to-gray-200/50 border-b border-gray-200/80 backdrop-blur-md relative z-20">
              <span className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-[#FF5F56] shadow-sm shadow-red-400/20" />
              <span className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-[#FFBD2E] shadow-sm shadow-yellow-400/20" />
              <span className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-[#27C93F] shadow-sm shadow-green-400/20" />
            </div>

            {/* Slider track area */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] overflow-hidden bg-gray-50/50 group">
              
              {/* Left Arrow Button */}
              <div className="absolute left-2 md:left-5 top-1/2 -translate-y-1/2 z-30">
                <button 
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/95 backdrop-blur shadow-lg text-gray-700 hover:text-primary-600 hover:-translate-y-1 hover:shadow-xl active:translate-y-[1px] active:shadow-md transition-all duration-200 border border-gray-100/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                  aria-label="Previous screenshot"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                </button>
              </div>

              {/* Right Arrow Button */}
              <div className="absolute right-2 md:right-5 top-1/2 -translate-y-1/2 z-30">
                <button 
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/95 backdrop-blur shadow-lg text-gray-700 hover:text-primary-600 hover:-translate-y-1 hover:shadow-xl active:translate-y-[1px] active:shadow-md transition-all duration-200 border border-gray-100/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                  aria-label="Next screenshot"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>

              {/* Images track */}
              <div 
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] h-full"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {FEATURES.map((f, i) => (
                  <div key={f.id} className="w-full flex-shrink-0 h-full relative" aria-hidden={activeIndex !== i}>
                    <img 
                      src={f.img} 
                      alt={t(`showcase.${f.id}.title`)}
                      className={`w-full h-full object-cover object-top transition-all duration-700 ${activeIndex === i ? 'opacity-100 scale-100' : 'opacity-40 scale-[0.98]'}`}
                      loading={i === 0 ? "eager" : "lazy"}
                      decoding="async"
                      draggable="false"
                    />
                  </div>
                ))}
              </div>

              {/* Slide indicator dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30 px-3 py-2 rounded-full bg-gray-900/40 backdrop-blur-md shadow-inner border border-white/10">
                {FEATURES.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={activeIndex === i ? 'true' : 'false'}
                    onClick={(e) => { e.stopPropagation(); setActiveIndex(i); }}
                    className={`h-1.5 md:h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                      activeIndex === i ? 'bg-white w-5 md:w-8 shadow-sm' : 'bg-white/50 hover:bg-white/80 w-1.5 md:w-2'
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>

          {/* Description below the frame */}
          <div
            key={activeFeature.id}
            id={`panel-${activeFeature.id}`}
            role="tabpanel"
            className="mt-5 md:mt-6 text-center max-w-3xl mx-auto animate-fade-in-up"
          >
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {t(`showcase.${activeFeature.id}.description`)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformShowcase;

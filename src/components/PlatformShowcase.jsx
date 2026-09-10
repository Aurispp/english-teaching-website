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
    <section className="overflow-hidden bg-white px-4 py-16 sm:py-24">
      <div className="w-full max-w-6xl mx-auto flex flex-col">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <h2 className="font-display text-3xl font-light text-gray-900 sm:text-4xl">{t('showcase.title')}</h2>
          <p className="mt-4 leading-relaxed text-gray-600">{t('showcase.subtitle')}</p>
        </div>

        {/* Mobile: single pill showing the current feature */}
        <div className="mb-5 flex justify-center md:hidden">
          <div
            key={activeFeature.id}
            className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-5 py-2 text-sm font-medium text-white animate-fade-in-up"
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
          className="mb-8 hidden flex-wrap justify-center gap-2 md:flex"
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
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ${
                activeIndex === index
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-primary-50'
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
          {/* Browser window: the screenshots are all 1600x1005, so the viewport keeps that exact ratio */}
          <div className="relative z-10 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-black/10 md:rounded-2xl">
            <div className="relative z-20 flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-4 py-2.5 md:py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56] md:h-3 md:w-3" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E] md:h-3 md:w-3" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F] md:h-3 md:w-3" />
            </div>

            <div className="group relative w-full overflow-hidden bg-gray-50" style={{ aspectRatio: '1600 / 1005' }}>
              <div className="absolute left-2 top-1/2 z-30 -translate-y-1/2 md:left-4">
                <button
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-gray-700 shadow-md ring-1 ring-black/5 transition-colors hover:text-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 md:h-11 md:w-11"
                  aria-label="Previous screenshot"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                </button>
              </div>
              <div className="absolute right-2 top-1/2 z-30 -translate-y-1/2 md:right-4">
                <button
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-gray-700 shadow-md ring-1 ring-black/5 transition-colors hover:text-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 md:h-11 md:w-11"
                  aria-label="Next screenshot"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>

              <div
                className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {FEATURES.map((f, i) => (
                  <div key={f.id} className="relative h-full w-full flex-shrink-0" aria-hidden={activeIndex !== i}>
                    <img
                      src={f.img}
                      alt={t(`showcase.${f.id}.title`)}
                      width={1600}
                      height={1005}
                      className={`block h-full w-full object-cover transition-opacity duration-700 ${activeIndex === i ? 'opacity-100' : 'opacity-40'}`}
                      loading={i === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      draggable="false"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Slide indicator dots, kept outside the window so nothing covers the screenshot */}
          <div className="relative z-10 mt-4 flex items-center justify-center gap-2">
            {FEATURES.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={activeIndex === i ? 'true' : 'false'}
                onClick={(e) => { e.stopPropagation(); setActiveIndex(i); }}
                className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                  activeIndex === i ? 'w-6 bg-primary-500' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Description below the frame */}
          <div
            key={activeFeature.id}
            id={`panel-${activeFeature.id}`}
            role="tabpanel"
            className="mx-auto mt-5 max-w-[60ch] text-center animate-fade-in-up"
          >
            <p className="leading-relaxed text-gray-600">
              {t(`showcase.${activeFeature.id}.description`)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformShowcase;

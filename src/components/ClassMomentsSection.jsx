import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import { GOOGLE_REVIEWS_URL } from '../constants';
import { useGoogleReviews } from '../hooks/useGoogleReviews';
import classMomentInPerson from '../class-moment-inperson.webp';
import classMomentInPersonRoom from '../class-moment-inperson-room.webp';
import classMomentOnlineGroup from '../class-moment-online-group.webp';
import classMomentOnlineLesson from '../class-moment-online-lesson.webp';
import classMomentOnlineTeam from '../class-moment-online-team.webp';
import { useLanguage } from '../context/LanguageContext';

// Fallback pool: verbatim excerpts from real Google reviews (checked 2026-06-12),
// shown only when the live reviews feed is unavailable.
const fallbackReviews = {
  es: [
    {
      text: 'He aprendido muchísimo, pero lo que más valoro es la confianza que me ha dado para hablar.',
      authorName: 'Raquel Castillo',
    },
    {
      text: 'El profesor es muy próximo, se hace fácil soltarse y hablar con él. La metodología y los temas son útiles y cotidianos. Aprendes sin darte cuenta!',
      authorName: 'Margot Clariana',
    },
    {
      text: 'Tiene mucha paciencia y se adapta al ritmo de mi hijo, que ha ido progresando desde que está con él... lento pero sin pausa.',
      authorName: 'Montse Martin',
    },
    {
      text: 'Las clases de inglés en la empresa han sido una agradable sorpresa. Auris se adapta rápido a tu nivel y utiliza recursos muy variados.',
      authorName: 'Joan Ferrer Pagès',
    },
  ],
  en: [
    {
      text: "I've learned a huge amount, but what I value most is the confidence he has given me to speak.",
      authorName: 'Raquel Castillo',
    },
    {
      text: 'The teacher is very approachable — it feels easy to open up and speak with him. The methodology and topics are useful and everyday. You learn without realising it!',
      authorName: 'Margot Clariana',
    },
    {
      text: 'He is very patient and adapts to the pace of my son, who has kept progressing since starting with him... slowly but surely.',
      authorName: 'Montse Martin',
    },
    {
      text: 'The English classes at our company have been a pleasant surprise. Auris adapts quickly to your level and uses a wide variety of resources.',
      authorName: 'Joan Ferrer Pagès',
    },
  ],
};

const copy = {
  en: {
    sectionLabel: 'Student reviews and class moments',
    reviewSource: 'Google review',
    readFull: 'Read the full review',
    localLink: 'See classes in Castelldefels, Gavà and Viladecans',
  },
  es: {
    sectionLabel: 'Reseñas de estudiantes y momentos de clase',
    reviewSource: 'Reseña de Google',
    readFull: 'Leer la reseña completa',
    localLink: 'Ver clases en Castelldefels, Gavà y Viladecans',
  },
};

// Every photo is shown at its own proportions: a 3:4 portrait, a 4:3 room shot,
// and a wide slot that rotates through the online-class screenshots (all ~2.1:1).
const portraitMoment = {
  src: classMomentInPerson,
  alt: 'Small in-person English class with students and Auris',
  ratio: '900/1200',
};

const roomMoment = {
  src: classMomentInPersonRoom,
  alt: 'In-person English class in Castelldefels with Auris',
  ratio: '1400/1050',
};

const onlineMoments = [
  { src: classMomentOnlineLesson, alt: 'Online English class with Auris and a student' },
  { src: classMomentOnlineTeam, alt: 'Online English class with adult students' },
  { src: classMomentOnlineGroup, alt: 'Online English group class with teenage students' },
];

const ROTATION_INTERVAL_MS = 5200;
const REVIEW_ROTATION_MS = 8500;

const Frame = ({ ratio, className = '', children }) => (
  <div
    className={`relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-primary-100/60 ${className}`}
    style={{ aspectRatio: ratio }}
  >
    {children}
  </div>
);

const StillMoment = ({ moment, className = '' }) => (
  <Frame ratio={moment.ratio} className={className}>
    <img
      src={moment.src}
      alt={moment.alt}
      loading="lazy"
      decoding="async"
      draggable="false"
      className="block h-full w-full object-cover"
    />
  </Frame>
);

const RotatingMoment = ({ moments, activeIndex, className = '' }) => (
  <Frame ratio="2.1 / 1" className={`bg-gray-900 ${className}`}>
    {moments.map((moment, index) => {
      const active = index === activeIndex;
      return (
        <img
          key={moment.alt}
          src={moment.src}
          alt={active ? moment.alt : ''}
          aria-hidden={!active}
          loading="lazy"
          decoding="async"
          draggable="false"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${active ? 'opacity-100' : 'opacity-0'}`}
        />
      );
    })}
  </Frame>
);

const ReviewAvatar = ({ review }) => (
  review.profilePhotoUrl ? (
    <img
      src={review.profilePhotoUrl}
      alt=""
      loading="lazy"
      referrerPolicy="no-referrer"
      className="h-11 w-11 flex-shrink-0 rounded-full object-cover ring-2 ring-white"
    />
  ) : (
    <div
      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-base font-semibold text-primary-700 ring-2 ring-white"
      aria-hidden="true"
    >
      {review.authorName.charAt(0)}
    </div>
  )
);

const renderStars = () => (
  <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ))}
  </div>
);

// Bigger type for short quotes, tighter for long ones, so the card reads as full either way.
const quoteSizeClass = (text) => {
  const length = text.length;
  if (length < 260) return 'text-[21px] leading-[1.4] lg:text-[24px] lg:leading-[1.4]';
  if (length < 420) return 'text-[18px] leading-[1.5] lg:text-[20px] lg:leading-[1.45]';
  return 'text-[17px] leading-[1.55] lg:text-[18px] lg:leading-[1.5]';
};

// On large screens the card is stretched to the mosaic's height; clamp the quote to the
// whole lines that fit. On smaller screens the card is as tall as its content, so cap it.
const useFittedLineClamp = (wrapperRef, deps) => {
  const [lines, setLines] = useState(null);
  const [overflows, setOverflows] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return undefined;

    const measure = () => {
      const quote = wrapper.firstElementChild;
      if (!quote) return;
      const stretched = window.matchMedia('(min-width: 1024px)').matches;
      const lineHeight = parseFloat(window.getComputedStyle(quote).lineHeight);
      if (!lineHeight) return;
      // Leave room for the 'read full review' link beneath the clamped quote.
      const LINK_ALLOWANCE = 40;
      const next = stretched ? Math.max(3, Math.floor((wrapper.clientHeight - LINK_ALLOWANCE) / lineHeight)) : 10;
      setLines(next);
      // Measure after the clamp applies.
      window.requestAnimationFrame(() => {
        setOverflows(quote.scrollHeight > quote.clientHeight + 1);
      });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(wrapper);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { lines, overflows };
};

const ClassMomentsSection = () => {
  const { language } = useLanguage();
  const sectionCopy = copy[language] || copy.en;
  const { data } = useGoogleReviews(language);
  const sectionRef = useRef(null);
  const [onlineIndex, setOnlineIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const quoteWrapperRef = useRef(null);

  const liveReviews = (data?.reviews || []).filter((review) => review.text && review.rating >= 5);
  const reviewPool = liveReviews.length
    ? liveReviews
    : (fallbackReviews[language] || fallbackReviews.es);
  const review = reviewPool[reviewIndex % reviewPool.length];
  const { lines: quoteLines, overflows: quoteOverflows } = useFittedLineClamp(quoteWrapperRef, [review.text]);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const section = sectionRef.current;

    if (prefersReducedMotion || !section) return undefined;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.35 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return undefined;

    const rotation = window.setInterval(() => {
      setOnlineIndex((value) => (value + 1) % onlineMoments.length);
    }, ROTATION_INTERVAL_MS);

    return () => window.clearInterval(rotation);
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible || reviewPool.length < 2) return undefined;

    const rotation = window.setInterval(() => {
      setReviewIndex((value) => value + 1);
    }, REVIEW_ROTATION_MS);

    return () => window.clearInterval(rotation);
  }, [isVisible, reviewPool.length]);

  return (
    <section
      ref={sectionRef}
      aria-label={sectionCopy.sectionLabel}
      className="bg-amber-50/70 pb-16 sm:pb-24 pt-0 sm:pt-4"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] lg:items-stretch">
          {/* Review: a single quote that rotates through the live Google reviews */}
          <figure
            key={`${review.authorName}-${reviewIndex}`}
            className="flex flex-col justify-between rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-primary-100/60 motion-safe:animate-fade-up sm:p-8"
          >
            <div ref={quoteWrapperRef} className="min-h-0 flex-1">
              <blockquote
                className={`text-gray-800 ${quoteSizeClass(review.text)}`}
                style={quoteLines ? {
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: quoteLines,
                  overflow: 'hidden',
                } : undefined}
              >
                “{review.text}”
              </blockquote>
              {quoteOverflows && (
                <a
                  href={review.googleMapsUri || GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex text-sm font-medium text-primary-700 underline decoration-primary-200 underline-offset-4 transition-colors hover:text-primary-800 hover:decoration-primary-500"
                >
                  {sectionCopy.readFull}
                </a>
              )}
            </div>
            <div className="mt-6 border-t border-primary-100/70 pt-5">
              <div className="flex items-center gap-3">
                <ReviewAvatar review={review} />
                <figcaption className="min-w-0">
                  <p className="truncate text-[15px] font-semibold text-gray-900">
                    {review.authorName}
                  </p>
                  <div className="mt-0.5 flex items-center gap-2">
                    {renderStars()}
                    <a
                      href={GOOGLE_REVIEWS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-500 underline decoration-gray-300 underline-offset-2 transition-colors hover:text-gray-700 hover:decoration-gray-500"
                    >
                      {sectionCopy.reviewSource}
                    </a>
                  </div>
                </figcaption>
              </div>
              <a
                href="/clases-ingles-castelldefels"
                className="mt-5 inline-flex text-sm font-medium text-primary-700 underline decoration-primary-200 underline-offset-4 transition-colors hover:text-primary-800 hover:decoration-primary-500"
              >
                {sectionCopy.localLink}
              </a>
            </div>
          </figure>

          {/* Photo mosaic. Phones: portrait beside the room shot (9:16 widths give equal heights),
              online call full width below. Desktop: portrait spans both rows on the left; column
              widths (0.92 / 1) make the stacked room shot + call match the portrait's height. */}
          <div
            className="grid grid-cols-[9fr_16fr] gap-4 [grid-template-areas:'portrait_room'_'wide_wide'] sm:gap-5 lg:grid-cols-[0.92fr_1fr] lg:grid-rows-[auto_auto] lg:[grid-template-areas:'portrait_room'_'portrait_wide']"
          >
            <StillMoment moment={portraitMoment} className="[grid-area:portrait] lg:h-full lg:[aspect-ratio:auto]" />
            <StillMoment moment={roomMoment} className="[grid-area:room]" />
            <RotatingMoment moments={onlineMoments} activeIndex={onlineIndex} className="[grid-area:wide]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassMomentsSection;

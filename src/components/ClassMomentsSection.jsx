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
    localLink: 'See classes in Castelldefels, Gavà and Viladecans',
  },
  es: {
    sectionLabel: 'Reseñas de estudiantes y momentos de clase',
    reviewSource: 'Reseña de Google',
    localLink: 'Ver clases en Castelldefels, Gavà y Viladecans',
  },
};

// Slots rotate so the two visible photos never share an age range.
const adultMoments = [
  {
    src: classMomentInPersonRoom,
    alt: 'In-person English class in Castelldefels with Auris',
    objectPosition: '50% 44%',
  },
  {
    src: classMomentOnlineLesson,
    alt: 'Online English class with Auris and a student',
    contain: true,
  },
  {
    src: classMomentOnlineTeam,
    alt: 'Online English class with adult students',
    contain: true,
  },
];

const teenMoments = [
  {
    src: classMomentInPerson,
    alt: 'Small in-person English class with students and Auris',
    objectPosition: '50% 62%',
  },
  {
    src: classMomentOnlineGroup,
    alt: 'Online English group class with teenage students',
    contain: true,
  },
];

const ROTATION_INTERVAL_MS = 5200;
const REVIEW_ROTATION_MS = 8500;

const MomentImage = ({ moment, active }) => (
  <div
    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${active ? 'opacity-100' : 'opacity-0'}`}
    aria-hidden={!active}
  >
    {moment.contain ? (
      <>
        <div className="absolute inset-0 overflow-hidden bg-amber-50/50">
          <img
            src={moment.src}
            alt=""
            className="w-full h-full object-cover blur-2xl scale-[1.2] opacity-50 saturate-150"
            aria-hidden="true"
          />
        </div>
        <img
          src={moment.src}
          alt={active ? moment.alt : ''}
          loading="lazy"
          decoding="async"
          draggable="false"
          className="relative w-full h-full object-contain"
        />
      </>
    ) : (
      <img
        src={moment.src}
        alt={active ? moment.alt : ''}
        loading="lazy"
        decoding="async"
        draggable="false"
        className="w-full h-full object-cover"
        style={{ objectPosition: moment.objectPosition }}
      />
    )}
  </div>
);

const MomentSlot = ({ moments, activeIndex }) => (
  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#FDFBF7] shadow-sm ring-1 ring-primary-100/60">
    {moments.map((moment, index) => (
      <MomentImage key={moment.alt} moment={moment} active={index === activeIndex} />
    ))}
  </div>
);

const renderStars = () => (
  <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ))}
  </div>
);

const ClassMomentsSection = () => {
  const { language } = useLanguage();
  const sectionCopy = copy[language] || copy.en;
  const { data } = useGoogleReviews(language);
  const sectionRef = useRef(null);
  const [tick, setTick] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const liveReviews = (data?.reviews || []).filter((review) => review.text && review.rating >= 5);
  const reviewPool = liveReviews.length
    ? liveReviews
    : (fallbackReviews[language] || fallbackReviews.es);
  const review = reviewPool[reviewIndex % reviewPool.length];

  // Alternate which slot advances so only one photo changes at a time.
  const adultIndex = Math.floor((tick + 1) / 2) % adultMoments.length;
  const teenIndex = Math.floor(tick / 2) % teenMoments.length;

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
      setTick((value) => value + 1);
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
        <div className="grid gap-5 sm:gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="max-w-md">
            <figure
              key={`${review.authorName}-${reviewIndex}`}
              className="rounded-2xl bg-white/80 p-5 shadow-sm ring-1 ring-primary-100/60 motion-safe:animate-fade-up"
            >
              {renderStars()}
              <blockquote className="mt-3 text-sm leading-relaxed text-gray-700 line-clamp-6">
                “{review.text}”
              </blockquote>
              <figcaption className="mt-3 text-xs text-gray-500">
                <span className="font-medium text-gray-700">
                  {review.authorName}
                </span>
                {' · '}
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-gray-300 underline-offset-2 transition-colors hover:text-gray-700 hover:decoration-gray-500"
                >
                  {sectionCopy.reviewSource}
                </a>
              </figcaption>
            </figure>
            <a
              href="/clases-ingles-castelldefels"
              className="mt-4 inline-flex text-sm font-medium text-primary-700 underline decoration-primary-200 underline-offset-4 transition-colors hover:text-primary-800 hover:decoration-primary-500"
            >
              {sectionCopy.localLink}
            </a>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
            <MomentSlot moments={adultMoments} activeIndex={adultIndex} />
            <MomentSlot moments={teenMoments} activeIndex={teenIndex} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassMomentsSection;

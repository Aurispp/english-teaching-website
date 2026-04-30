import React, { useEffect, useRef, useState } from 'react';
import classMomentInPerson from '../class-moment-inperson.webp';
import classMomentInPersonRoom from '../class-moment-inperson-room.webp';
import classMomentOnlineGroup from '../class-moment-online-group.webp';
import classMomentOnlineLesson from '../class-moment-online-lesson.webp';
import classMomentOnlineTeam from '../class-moment-online-team.webp';
import { useLanguage } from '../context/LanguageContext';

const copy = {
  en: {
    title: 'Online and in-person classes',
    description: 'Focused online lessons and in-person classes in Castelldefels and nearby areas.',
  },
  es: {
    title: 'Clases online y presenciales',
    description: 'Clases online y presenciales en Castelldefels y zonas cercanas.',
  },
};

const moments = [
  {
    src: classMomentInPersonRoom,
    alt: 'In-person English class in Castelldefels with Auris',
    className: 'col-span-12 md:col-span-7',
    imageClassName: 'aspect-[16/9] md:aspect-[16/11]',
    objectPosition: '50% 44%',
  },
  {
    src: classMomentOnlineLesson,
    alt: 'Online English class with Auris and a student',
    className: 'col-span-12 md:col-span-5',
    imageClassName: 'aspect-[16/9] md:aspect-[4/3]',
    contain: true,
    containImageClassName: 'scale-[1.12] group-hover:scale-[1.15]',
  },
  {
    src: classMomentInPerson,
    alt: 'Small in-person English class with students and Auris',
    className: 'hidden md:block md:col-span-4',
    imageClassName: 'aspect-[4/3]',
    objectPosition: '50% 62%',
  },
  {
    src: classMomentOnlineGroup,
    alt: 'Online English group class with teenage students',
    className: 'hidden md:block md:col-span-4',
    imageClassName: 'aspect-[4/3]',
    contain: true,
  },
  {
    src: classMomentOnlineTeam,
    alt: 'Online English class with adult students',
    className: 'hidden md:block md:col-span-4',
    imageClassName: 'aspect-[4/3]',
    contain: true,
  },
];

const ROTATION_INTERVAL_MS = 4800;

const MomentCard = ({ moment, layoutClassName, animate = false }) => (
  <div
    className={`relative group overflow-hidden rounded-2xl bg-[#FDFBF7] shadow-sm ring-1 ring-primary-100/60 ${layoutClassName ?? moment.className} ${animate ? 'motion-safe:animate-fade-up' : ''}`}
  >
    {moment.contain ? (
      <>
        <div className="absolute inset-0 z-0 overflow-hidden bg-amber-50/50">
          <img
            src={moment.src}
            alt=""
            className="w-full h-full object-cover blur-2xl scale-[1.2] opacity-50 saturate-150"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-50/40 to-amber-50/10 mix-blend-overlay"></div>
        </div>
        <img
          src={moment.src}
          alt={moment.alt}
          loading="lazy"
          decoding="async"
          draggable="false"
          className={`relative z-10 w-full h-full object-contain transition-transform duration-700 ${moment.containImageClassName || 'group-hover:scale-[1.02]'} ${moment.imageClassName}`}
        />
      </>
    ) : (
      <img
        src={moment.src}
        alt={moment.alt}
        loading="lazy"
        decoding="async"
        draggable="false"
        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02] ${moment.imageClassName}`}
        style={{ objectPosition: moment.objectPosition }}
      />
    )}
  </div>
);

const ClassMomentsSection = () => {
  const { language } = useLanguage();
  const sectionCopy = copy[language] || copy.en;
  const mobileGalleryRef = useRef(null);
  const [mobileMomentIndex, setMobileMomentIndex] = useState(0);
  const [shouldRotateMobileMoments, setShouldRotateMobileMoments] = useState(false);
  const visibleMobileMoments = moments.length > 1
    ? [
        moments[mobileMomentIndex % moments.length],
        moments[(mobileMomentIndex + 1) % moments.length],
      ]
    : moments;

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const gallery = mobileGalleryRef.current;

    if (!isMobile || prefersReducedMotion || !gallery) return undefined;

    if (!('IntersectionObserver' in window)) {
      setShouldRotateMobileMoments(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setShouldRotateMobileMoments(entry.isIntersecting),
      { threshold: 0.45 }
    );

    observer.observe(gallery);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldRotateMobileMoments || moments.length < 2) return undefined;

    const rotation = window.setInterval(() => {
      setMobileMomentIndex((index) => (index + 1) % moments.length);
    }, ROTATION_INTERVAL_MS);

    return () => window.clearInterval(rotation);
  }, [shouldRotateMobileMoments]);

  return (
    <section aria-labelledby="class-moments-heading" className="bg-amber-50/70 pb-10 pt-4 sm:pb-16 sm:pt-8">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-center">
          <div className="max-w-md">
            <h2
              id="class-moments-heading"
              className="font-display text-2xl font-light leading-tight text-gray-900 sm:text-4xl"
            >
              {sectionCopy.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-gray-600 sm:mt-4 sm:text-lg">
              {sectionCopy.description}
            </p>
          </div>

          <div ref={mobileGalleryRef} className="grid grid-cols-12 gap-3 md:hidden">
            {visibleMobileMoments.map((moment, index) => (
              <MomentCard
                key={`${moment.alt}-${index}`}
                moment={moment}
                layoutClassName="col-span-12"
                animate
              />
            ))}
          </div>

          <div className="hidden grid-cols-12 gap-3 sm:gap-4 lg:gap-5 md:grid">
            {moments.map((moment) => (
              <MomentCard key={moment.alt} moment={moment} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassMomentsSection;

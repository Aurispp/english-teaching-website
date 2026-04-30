import React from 'react';
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
    imageClassName: 'aspect-[16/9] sm:aspect-[16/10]',
    objectPosition: '50% 44%',
  },
  {
    src: classMomentOnlineLesson,
    alt: 'Online English class with Auris and a student',
    className: 'col-span-12 md:col-span-5',
    imageClassName: 'aspect-[1200/585] md:aspect-[16/10]',
    objectPosition: '50% 50%',
  },
  {
    src: classMomentInPerson,
    alt: 'Small in-person English class with students and Auris',
    className: 'hidden md:block md:col-span-3',
    imageClassName: 'aspect-[4/3]',
    objectPosition: '50% 62%',
  },
  {
    src: classMomentOnlineGroup,
    alt: 'Online English group class with teenage students',
    className: 'hidden md:block md:col-span-3',
    imageClassName: 'aspect-[4/3]',
    objectPosition: '50% 50%',
  },
  {
    src: classMomentOnlineTeam,
    alt: 'Online English class with adult students',
    className: 'hidden md:block md:col-span-6',
    imageClassName: 'aspect-[16/9] md:aspect-[2/1]',
    objectPosition: '50% 48%',
  },
];

const ClassMomentsSection = () => {
  const { language } = useLanguage();
  const sectionCopy = copy[language] || copy.en;

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

          <div className="grid grid-cols-12 gap-3 md:gap-4">
            {moments.map((moment) => (
              <div
                key={moment.alt}
                className={`group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-primary-100/80 ${moment.className}`}
              >
                <img
                  src={moment.src}
                  alt={moment.alt}
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] ${moment.imageClassName}`}
                  style={{ objectPosition: moment.objectPosition }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassMomentsSection;

import React from 'react';
import classMomentInPerson from '../class-moment-inperson.webp';
import classMomentOnlineGroup from '../class-moment-online-group.webp';
import classMomentOnlineTeam from '../class-moment-online-team.webp';

const moments = [
  {
    src: classMomentOnlineGroup,
    alt: 'Online English group class with Auris',
    className: 'sm:col-span-2 lg:col-span-5',
    imageClassName: 'aspect-[16/9] sm:aspect-[16/10]',
    objectPosition: '50% 50%',
  },
  {
    src: classMomentInPerson,
    alt: 'In-person English class with students and Auris',
    className: 'lg:col-span-3',
    imageClassName: 'aspect-[16/9] sm:aspect-[16/10]',
    objectPosition: '50% 70%',
  },
  {
    src: classMomentOnlineTeam,
    alt: 'Online English class with adult students',
    className: 'lg:col-span-4',
    imageClassName: 'aspect-[16/9] sm:aspect-[16/10]',
    objectPosition: '50% 48%',
  },
];

const ClassMomentsSection = () => (
  <section aria-label="Class moments" className="bg-amber-50/70 pb-12 sm:pb-16">
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-12">
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
  </section>
);

export default ClassMomentsSection;

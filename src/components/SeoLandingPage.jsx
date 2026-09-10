import React from 'react';
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Check,
  FileText,
  Globe,
  MapPin,
  MessageCircle,
  Sparkles,
  Users,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import GoogleReviewsSection from './GoogleReviewsSection';
import classMomentInPerson from '../class-moment-inperson.webp';
import classMomentInPersonRoom from '../class-moment-inperson-room.webp';
import classMomentOnlineLesson from '../class-moment-online-lesson.webp';
import classMomentOnlineTeam from '../class-moment-online-team.webp';

const landingCopy = {
  local: {
    en: {
      eyebrow: '',
      title: 'Private English classes online and around Castelldefels',
      intro:
        'I grew up in Ireland, I am bilingual, and I have been teaching English in Barcelona for over a decade. I help students and professionals feel more comfortable using English in real situations, mainly online and sometimes in person around Castelldefels, Gavà and Viladecans.',
      primaryCta: 'Send me a message',
      secondaryCta: 'Try Talk the Talk',
      badges: ['Online classes', 'Castelldefels area', 'Private and small groups'],
      proofTitle: 'Real classes, real progress',
      proofText:
        'Practical, personal classes with useful review between lessons.',
      sections: [
        {
          icon: Globe,
          title: 'Mainly online',
          text: 'Online classes make it easier to stay consistent and keep a clear rhythm from week to week.',
        },
        {
          icon: MapPin,
          title: 'Local in-person option',
          text: 'I am based in Castelldefels and can sometimes offer in-person classes nearby when it makes sense.',
        },
        {
          icon: MessageCircle,
          title: 'Speaking at the centre',
          text: 'We work on fluency, pronunciation, useful vocabulary and the habits that often block Spanish speakers.',
        },
      ],
      workTitle: 'What we can work on',
      workItems: [
        'Conversation and confidence',
        'Pronunciation and natural rhythm',
        'Practical grammar without overthinking',
        'Cambridge exam or interview preparation',
        'English for work, meetings and presentations',
        'Personalised review in the student portal I built',
      ],
      localTitle: 'Local areas',
      localText:
        'The idea is not to give a generic class, but to understand what you need and find a way to move forward that feels useful and realistic.',
      finalTitle: 'Start with a first conversation',
      finalText:
        'Send me a message with your goals and timing. If I can help, we can arrange a first class or keep it in mind for a future slot.',
    },
    es: {
      eyebrow: '',
      title: 'Clases particulares de inglés online y en Castelldefels',
      intro:
        'Me crié en Irlanda, soy bilingüe y llevo más de una década enseñando inglés en Barcelona. Ayudo a estudiantes y profesionales a ganar soltura y claridad al usar el inglés en situaciones reales, principalmente online y a veces presencial en Castelldefels, Gavà y Viladecans.',
      primaryCta: 'Escríbeme',
      secondaryCta: 'Prueba Talk the Talk',
      badges: ['Clases online', 'Zona Castelldefels', 'Individuales y grupos pequeños'],
      proofTitle: 'Clases reales, progreso real',
      proofText:
        'Clases prácticas y personales, con repaso útil entre clases.',
      sections: [
        {
          icon: Globe,
          title: 'Principalmente online',
          text: 'Las clases online ayudan a mantener constancia y encontrar horarios sin depender tanto del desplazamiento.',
        },
        {
          icon: MapPin,
          title: 'Opción presencial local',
          text: 'Vivo en Castelldefels y puedo dar clases presenciales por la zona cuando el horario y la ubicación encajan.',
        },
        {
          icon: MessageCircle,
          title: 'La conversación en el centro',
          text: 'Trabajamos fluidez, pronunciación, vocabulario útil y los hábitos que suelen bloquear a los hispanohablantes.',
        },
      ],
      workTitle: 'Qué podemos trabajar',
      workItems: [
        'Conversación y confianza',
        'Pronunciación y ritmo natural',
        'Gramática práctica sin darle mil vueltas',
        'Preparación Cambridge o entrevistas',
        'Inglés para trabajo, reuniones y presentaciones',
        'Repaso personalizado en el portal que he creado',
      ],
      localTitle: 'Zonas cercanas',
      localText:
        'La idea no es dar una clase genérica, sino entender qué necesitas tú y encontrar una forma de avanzar que sea clara, útil y realista.',
      finalTitle: 'Empieza con una primera conversación',
      finalText:
        'Escríbeme con tus objetivos y disponibilidad. Si puedo ayudarte, organizamos una primera clase o lo dejamos encaminado para una plaza futura.',
    },
  },
  business: {
    en: {
      eyebrow: '',
      title: 'Business English classes for companies and professionals',
      intro:
        'Practical English classes with a bilingual teacher for professionals, teams and freelancers who need to use English more clearly in meetings, presentations, interviews and day-to-day work.',
      primaryCta: 'Message me about classes',
      secondaryCta: 'Ask about company classes',
      badges: ['Invoice with NIF', 'Online or local', 'Teams and professionals'],
      proofTitle: 'Online and in-person classes',
      proofText:
        'Online, or in person near Castelldefels.',
      sections: [
        {
          icon: Briefcase,
          title: 'Business communication',
          text: 'Meetings, presentations, client calls, interviews and the work situations where English has to feel clear.',
        },
        {
          icon: FileText,
          title: 'Factura con NIF',
          text: 'For companies, teams and freelancers, I can issue proper invoices for English training.',
        },
        {
          icon: BarChart3,
          title: 'Progress between classes',
          text: 'The student portal I built keeps vocabulary, materials and review work organised between classes.',
        },
      ],
      workTitle: 'Useful for',
      workItems: [
        'Professionals who need English at work',
        'Small teams that want practical speaking training',
        'Presentations, meetings and client communication',
        'Interview preparation and career moves',
        'Companies that need invoices with NIF',
        'Online training or local sessions near Castelldefels',
      ],
      localTitle: 'Online or in the Barcelona south coast area',
      localText:
        'Classes can be online or local near Castelldefels when the format makes sense. The important thing is that the work feels relevant to your real needs.',
      finalTitle: 'Start with a practical first conversation',
      finalText:
        'Tell me what you or your team need, and we can decide whether I can help.',
    },
    es: {
      eyebrow: '',
      title: 'Inglés para empresas y profesionales',
      intro:
        'Clases prácticas con un profesor bilingüe para profesionales, equipos y autónomos que necesitan usar el inglés con más claridad en reuniones, presentaciones, entrevistas y situaciones reales de trabajo.',
      primaryCta: 'Escríbeme',
      secondaryCta: 'Consulta clases para empresa',
      badges: ['Factura con NIF', 'Online o presencial', 'Equipos y profesionales'],
      proofTitle: 'Clases online y presenciales',
      proofText:
        'Online o presencial cerca de Castelldefels.',
      sections: [
        {
          icon: Briefcase,
          title: 'Comunicación profesional',
          text: 'Reuniones, presentaciones, llamadas, entrevistas y situaciones donde necesitas expresarte con claridad.',
        },
        {
          icon: FileText,
          title: 'Factura con NIF',
          text: 'Si eres empresa, profesional o necesitas clases para tu equipo, puedo emitir factura con NIF.',
        },
        {
          icon: BarChart3,
          title: 'Seguimiento entre clases',
          text: 'El portal que he creado mantiene vocabulario, materiales y repaso organizados para seguir avanzando entre clases.',
        },
      ],
      workTitle: 'Útil para',
      workItems: [
        'Profesionales que necesitan inglés en el trabajo',
        'Equipos pequeños que quieren practicar speaking',
        'Presentaciones, reuniones y comunicación con clientes',
        'Preparación de entrevistas y cambios profesionales',
        'Empresas que necesitan factura con NIF',
        'Formación online o sesiones locales cerca de Castelldefels',
      ],
      localTitle: 'Online o en la zona del Baix Llobregat / costa sur de Barcelona',
      localText:
        'Podemos trabajar online o de forma presencial cerca de Castelldefels cuando el formato tenga sentido. Lo importante es que las clases encajen con una necesidad real.',
      finalTitle: 'Empieza con una primera conversación práctica',
      finalText:
        'Cuéntame qué necesitas tú o tu equipo y vemos si puedo ayudarte.',
    },
  },
};

const pageMeta = {
  local: {
    talkHref: '/talkthetalk?utm_source=local_landing&utm_medium=site&utm_campaign=local_classes',
    contactHash: '#contact',
    // Mosaic: portrait on the left, room shot and online call stacked on the right.
    mosaic: {
      portrait: { src: classMomentInPerson, alt: 'Small in-person English class with students and Auris', ratio: '900 / 1200' },
      landscape: { src: classMomentInPersonRoom, alt: 'In-person English class in Castelldefels', ratio: '1400 / 1050' },
      wide: { src: classMomentOnlineLesson, alt: 'Online English class with Auris and a student', ratio: '1200 / 585' },
    },
  },
  business: {
    talkHref: 'https://wa.me/34684082221?text=Hola%20Auris%2C%20queria%20consultar%20clases%20de%20ingles%20para%20empresa%20o%20profesionales.',
    contactHash: '#contact',
    // Stack: meeting-room class above an online team call, each at its own ratio.
    stack: [
      { src: classMomentInPersonRoom, alt: 'Professional English class with Auris in a meeting room', ratio: '1400 / 1050' },
      { src: classMomentOnlineTeam, alt: 'Online English class with professionals', ratio: '1200 / 551' },
    ],
  },
};

const LandingBadge = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm text-gray-700 ring-1 ring-primary-100">
    <Check className="h-4 w-4 text-primary-500" strokeWidth={2} aria-hidden="true" />
    {children}
  </span>
);

const FeatureCard = ({ icon: Icon, title, text }) => (
  <article className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-primary-100/60">
    <Icon className="h-7 w-7 text-primary-500" strokeWidth={1.5} aria-hidden="true" />
    <h2 className="mt-5 text-lg font-semibold text-gray-900">{title}</h2>
    <p className="mt-3 leading-relaxed text-gray-600">{text}</p>
  </article>
);

const Photo = ({ image, className = '' }) => (
  <div
    className={`overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 ${className}`}
    style={{ aspectRatio: image.ratio }}
  >
    <img
      src={image.src}
      alt={image.alt}
      loading="eager"
      decoding="async"
      className="block h-full w-full object-cover"
    />
  </div>
);

const HeroVisual = ({ meta, content, className = '' }) => (
  <div className={className}>
    {meta.mosaic ? (
      // Column widths chosen so both columns end at the same height:
      // portrait 3:4 on the left; 4:3 over 2.05:1 on the right.
      <div className="grid grid-cols-[0.93fr_1fr] gap-3 sm:gap-4">
        <Photo image={meta.mosaic.portrait} />
        <div className="grid gap-3 sm:gap-4">
          <Photo image={meta.mosaic.landscape} />
          <Photo image={meta.mosaic.wide} />
        </div>
      </div>
    ) : (
      <div className="grid gap-3 sm:gap-4">
        {meta.stack.map((image) => (
          <Photo key={image.src} image={image} />
        ))}
      </div>
    )}
    <p className="mt-4 text-sm text-gray-600">
      <span className="font-semibold text-gray-900">{content.proofTitle}</span>
      <span className="text-gray-400"> — </span>
      {content.proofText}
    </p>
  </div>
);

const SeoLandingPage = ({ type = 'local' }) => {
  const { language } = useLanguage();
  const content = landingCopy[type]?.[language] || landingCopy[type]?.es || landingCopy.local.es;
  const meta = pageMeta[type] || pageMeta.local;

  return (
    <>
      <section className="bg-amber-50/70 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div>
            {content.eyebrow && (
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary-100/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary-800">
                <Sparkles className="h-3 w-3" />
                {content.eyebrow}
              </div>
            )}
            <h1 className="font-display text-[2.5rem] font-light leading-[1.1] text-gray-900 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.12]">
              {content.title}
            </h1>
            <HeroVisual meta={meta} content={content} className="mt-8 mb-2 lg:hidden" />
            <p className="mt-5 sm:mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
              {content.intro}
            </p>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-2.5">
              {content.badges.map((badge) => (
                <LandingBadge key={badge}>{badge}</LandingBadge>
              ))}
            </div>
            <div className="mt-8 sm:mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={meta.contactHash}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-600"
              >
                {content.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={meta.talkHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-gray-900 ring-1 ring-gray-200 transition-colors hover:bg-gray-50 hover:ring-gray-300"
              >
                {type === 'business' ? <Users className="h-4 w-4" /> : <MessageCircle className="h-4 w-4" />}
                {content.secondaryCta}
              </a>
            </div>
          </div>

          <HeroVisual meta={meta} content={content} className="hidden lg:block" />
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {content.sections.map((section) => (
            <FeatureCard key={section.title} {...section} />
          ))}
        </div>
      </section>

      <section className="bg-amber-50/70 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="font-display text-3xl font-light text-gray-900 sm:text-4xl">
              {content.workTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-600">
              {content.localText}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {content.workItems.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-primary-100/60">
                <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary-500" strokeWidth={2.25} aria-hidden="true" />
                <p className="text-sm leading-relaxed text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <GoogleReviewsSection />
        </div>
      </section>

    </>
  );
};

export default SeoLandingPage;

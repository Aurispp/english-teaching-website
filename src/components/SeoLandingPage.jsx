import React from 'react';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Briefcase,
  Building2,
  Calendar,
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
import classMomentInPersonRoom from '../class-moment-inperson-room.webp';
import classMomentOnlineLesson from '../class-moment-online-lesson.webp';
import classMomentInPerson from '../class-moment-inperson.webp';
import portalDashboard from '../portal/dashboard.webp';

const landingCopy = {
  local: {
    en: {
      eyebrow: 'Online first, local when it fits',
      title: 'Online and in-person English classes in Castelldefels, Gavà and Viladecans',
      intro:
        'I teach conversation-focused English classes online, with in-person lessons available around Castelldefels, Gavà, Viladecans and nearby areas when the schedule and location work.',
      primaryCta: 'Book your free trial class',
      secondaryCta: 'Try Talk the Talk',
      badges: ['Online classes', 'Castelldefels area', 'Private and small groups'],
      proofTitle: 'Real classes, real progress',
      proofText:
        'Lessons are practical and personal: we speak a lot, correct the mistakes that hold you back, and keep track of what you need to review between classes.',
      sections: [
        {
          icon: Globe,
          title: 'Mainly online',
          text: 'Online classes make scheduling easier and let us keep a consistent rhythm from anywhere in Spain or beyond.',
        },
        {
          icon: MapPin,
          title: 'Local in-person option',
          text: 'I am based in Castelldefels and can offer in-person classes in Castelldefels, Gavà, Viladecans and nearby areas when feasible.',
        },
        {
          icon: MessageCircle,
          title: 'Speaking at the centre',
          text: 'We work on fluency, pronunciation, useful vocabulary and the habits that often make Spanish speakers feel blocked.',
        },
      ],
      workTitle: 'What we can work on',
      workItems: [
        'Conversation and confidence',
        'Pronunciation and natural rhythm',
        'Practical grammar without overthinking',
        'Cambridge exam or interview preparation',
        'English for work, meetings and presentations',
        'Personalised review through your student portal',
      ],
      localTitle: 'Local areas',
      localText:
        'If you prefer in-person classes, tell me where you are and what schedule you have in mind. Online is usually the easiest option, but local classes can work well around Castelldefels and nearby towns.',
      finalTitle: 'Start with a free first class',
      finalText:
        'We can meet, check your level, talk about your goals and decide whether my classes are a good fit for you.',
    },
    es: {
      eyebrow: 'Online primero, presencial cuando encaja',
      title: 'Clases de inglés online y presenciales en Castelldefels, Gavà y Viladecans',
      intro:
        'Doy clases de inglés centradas en conversación y progreso real. Trabajo principalmente online, y también puedo dar clases presenciales en Castelldefels, Gavà, Viladecans y zonas cercanas cuando el horario y la ubicación encajan.',
      primaryCta: 'Reserva tu prueba gratis',
      secondaryCta: 'Prueba Talk the Talk',
      badges: ['Clases online', 'Zona Castelldefels', 'Individuales y grupos pequeños'],
      proofTitle: 'Clases reales, progreso real',
      proofText:
        'Las clases son prácticas y personales: hablamos mucho, corregimos los errores que te frenan y hacemos seguimiento de lo que conviene repasar entre clases.',
      sections: [
        {
          icon: Globe,
          title: 'Principalmente online',
          text: 'Las clases online facilitan mantener constancia y encontrar horarios sin depender tanto del desplazamiento.',
        },
        {
          icon: MapPin,
          title: 'Opción presencial local',
          text: 'Vivo en Castelldefels y puedo dar clases presenciales en Castelldefels, Gavà, Viladecans y zonas cercanas cuando sea viable.',
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
        'Repaso personalizado con tu portal de estudiante',
      ],
      localTitle: 'Zonas cercanas',
      localText:
        'Si prefieres clases presenciales, dime dónde estás y qué horario tienes en mente. Online suele ser la opción más cómoda, pero las clases locales pueden funcionar bien por Castelldefels y alrededores.',
      finalTitle: 'Empieza con una primera clase gratuita',
      finalText:
        'Nos sirve para conocernos, ver tu nivel, hablar de tus objetivos y decidir si mis clases encajan con lo que necesitas.',
    },
  },
  business: {
    en: {
      eyebrow: 'Professional English with invoice available',
      title: 'Business English classes for companies and professionals',
      intro:
        'Practical English training for professionals, teams and freelancers who need to speak more clearly in meetings, presentations, interviews and international work situations.',
      primaryCta: 'Book a first call',
      secondaryCta: 'Ask about company classes',
      badges: ['Invoice with NIF', 'Online or local', 'Teams and professionals'],
      proofTitle: 'Professional, practical and trackable',
      proofText:
        'I work as a registered autónomo in Spain, so I can invoice companies and professionals. Classes are built around real communication tasks, not generic textbook units.',
      sections: [
        {
          icon: Briefcase,
          title: 'Business communication',
          text: 'Meetings, presentations, client calls, negotiation, interviews and the situations where English has to work under pressure.',
        },
        {
          icon: FileText,
          title: 'Factura con NIF',
          text: 'I can issue invoices for companies, teams and freelancers who need professional English training documented properly.',
        },
        {
          icon: BarChart3,
          title: 'Progress between classes',
          text: 'Your student portal keeps vocabulary, materials and review work organised so training does not disappear after the class ends.',
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
        'Most company training is easiest online, but local sessions can be arranged around Castelldefels, Gavà, Viladecans and nearby areas when the format makes sense.',
      finalTitle: 'Start with a practical first conversation',
      finalText:
        'Tell me what your team or professional situation requires and I can suggest a realistic class format.',
    },
    es: {
      eyebrow: 'Inglés profesional con factura disponible',
      title: 'Inglés para empresas y profesionales',
      intro:
        'Formación práctica de inglés para profesionales, equipos y autónomos que necesitan comunicarse mejor en reuniones, presentaciones, entrevistas y situaciones de trabajo internacional.',
      primaryCta: 'Reserva una primera llamada',
      secondaryCta: 'Consulta clases para empresa',
      badges: ['Factura con NIF', 'Online o presencial', 'Equipos y profesionales'],
      proofTitle: 'Profesional, práctico y con seguimiento',
      proofText:
        'Trabajo como autónomo dado de alta en España, así que puedo emitir factura a empresas y profesionales. Las clases se centran en comunicación real, no en unidades genéricas de libro.',
      sections: [
        {
          icon: Briefcase,
          title: 'Comunicación profesional',
          text: 'Reuniones, presentaciones, llamadas con clientes, negociación, entrevistas y situaciones donde el inglés tiene que funcionar bajo presión.',
        },
        {
          icon: FileText,
          title: 'Factura con NIF',
          text: 'Puedo emitir factura para empresas, equipos y autónomos que necesitan formación de inglés documentada correctamente.',
        },
        {
          icon: BarChart3,
          title: 'Seguimiento entre clases',
          text: 'El portal de estudiante mantiene vocabulario, materiales y repaso organizados para que la formación no se quede solo en la clase.',
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
        'La formación para empresas suele funcionar muy bien online, pero también se pueden organizar sesiones locales por Castelldefels, Gavà, Viladecans y zonas cercanas cuando el formato tenga sentido.',
      finalTitle: 'Empieza con una primera conversación práctica',
      finalText:
        'Cuéntame qué necesita tu equipo o tu situación profesional y te propongo un formato realista.',
    },
  },
};

const pageMeta = {
  local: {
    talkHref: '/talkthetalk?utm_source=local_landing&utm_medium=site&utm_campaign=local_classes',
    contactHash: '#contact',
    visual: classMomentInPersonRoom,
    visualAlt: 'In-person English class in Castelldefels',
    supportVisual: classMomentOnlineLesson,
    supportAlt: 'Online English class with Auris',
    finalIcon: Calendar,
  },
  business: {
    talkHref: '#contact',
    contactHash: '#contact',
    visual: classMomentInPersonRoom,
    visualAlt: 'Professional English class with Auris in a meeting room',
    supportVisual: portalDashboard,
    supportAlt: 'English with Auris student portal dashboard',
    finalIcon: Building2,
  },
};

const LandingBadge = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-primary-100">
    <Check className="h-4 w-4 text-primary-600" />
    {children}
  </span>
);

const FeatureCard = ({ icon: Icon, title, text }) => (
  <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
    <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
      <Icon className="h-5 w-5" />
    </span>
    <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
    <p className="mt-3 text-sm leading-relaxed text-gray-600">{text}</p>
  </article>
);

const SeoLandingPage = ({ type = 'local' }) => {
  const { language } = useLanguage();
  const content = landingCopy[type]?.[language] || landingCopy[type]?.es || landingCopy.local.es;
  const meta = pageMeta[type] || pageMeta.local;
  const FinalIcon = meta.finalIcon;

  return (
    <>
      <section className="bg-amber-50/70 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary-700">
              <Sparkles className="h-3.5 w-3.5" />
              {content.eyebrow}
            </div>
            <h1 className="font-display text-4xl font-light leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {content.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
              {content.intro}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {content.badges.map((badge) => (
                <LandingBadge key={badge}>{badge}</LandingBadge>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={meta.contactHash}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/20 transition hover:-translate-y-0.5 hover:from-primary-600 hover:to-primary-700"
              >
                {content.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={meta.talkHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:text-primary-700 hover:ring-primary-200"
              >
                {type === 'business' ? <Users className="h-4 w-4" /> : <MessageCircle className="h-4 w-4" />}
                {content.secondaryCta}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-primary-100">
              <img
                src={meta.visual}
                alt={meta.visualAlt}
                className="aspect-[4/3] w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 overflow-hidden rounded-2xl bg-white/95 p-3 shadow-xl ring-1 ring-primary-100 backdrop-blur">
              <div className="grid grid-cols-[88px_1fr] items-center gap-4">
                <img
                  src={meta.supportVisual}
                  alt={meta.supportAlt}
                  className="h-20 w-full rounded-xl object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{content.proofTitle}</p>
                  <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-gray-500">{content.proofText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {content.sections.map((section) => (
            <FeatureCard key={section.title} {...section} />
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-amber-50/50 to-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
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
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                  <BadgeCheck className="h-4 w-4" />
                </span>
                <p className="text-sm leading-relaxed text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <GoogleReviewsSection />
        </div>
      </section>

      <section className="bg-amber-50/70 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-7 text-center shadow-sm ring-1 ring-primary-100 sm:p-10">
          <span className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
            <FinalIcon className="h-6 w-6" />
          </span>
          <h2 className="font-display text-3xl font-light text-gray-900 sm:text-4xl">
            {content.finalTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
            {content.finalText}
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/20 transition hover:-translate-y-0.5 hover:from-primary-600 hover:to-primary-700"
          >
            {content.primaryCta}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
};

export default SeoLandingPage;

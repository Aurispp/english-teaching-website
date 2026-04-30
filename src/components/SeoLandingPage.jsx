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
import portalDashboard from '../portal/dashboard.webp';

const landingCopy = {
  local: {
    en: {
      eyebrow: 'Online first, local when it fits',
      title: 'Online and in-person English classes in Castelldefels, Gavà and Viladecans',
      intro:
        'I grew up in Ireland, I am bilingual, and I have been teaching English in Barcelona for 11 years. I help students and professionals feel more comfortable using English in real situations, mainly online and sometimes in person around Castelldefels, Gavà and Viladecans.',
      primaryCta: 'Book your free trial class',
      secondaryCta: 'Try Talk the Talk',
      badges: ['Online classes', 'Castelldefels area', 'Private and small groups'],
      proofTitle: 'Real classes, real progress',
      proofText:
        'Classes are practical and personal: we speak a lot, correct what needs attention, and use simple materials to keep progress going between lessons.',
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
        'Personalised review through your student portal',
      ],
      localTitle: 'Local areas',
      localText:
        'The idea is not to give a generic class, but to understand what you need and find a way to move forward that feels useful and realistic.',
      finalTitle: 'Start with a free first class',
      finalText:
        'It gives us time to meet, check your level, talk about your goals and decide whether I can help.',
    },
    es: {
      eyebrow: 'Online primero, presencial cuando encaja',
      title: 'Clases de inglés online y presenciales en Castelldefels, Gavà y Viladecans',
      intro:
        'Me crié en Irlanda, soy bilingüe y llevo 11 años enseñando inglés en Barcelona. Ayudo a estudiantes y profesionales a ganar soltura y claridad al usar el inglés en situaciones reales, principalmente online y a veces presencial en Castelldefels, Gavà y Viladecans.',
      primaryCta: 'Reserva tu prueba gratis',
      secondaryCta: 'Prueba Talk the Talk',
      badges: ['Clases online', 'Zona Castelldefels', 'Individuales y grupos pequeños'],
      proofTitle: 'Clases reales, progreso real',
      proofText:
        'Las clases son prácticas y personales: hablamos mucho, corregimos lo que haga falta y usamos materiales pensados para que puedas repasar entre clases.',
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
        'Repaso personalizado con tu portal de estudiante',
      ],
      localTitle: 'Zonas cercanas',
      localText:
        'La idea no es dar una clase genérica, sino entender qué necesitas tú y encontrar una forma de avanzar que sea clara, útil y realista.',
      finalTitle: 'Empieza con una primera clase gratuita',
      finalText:
        'Nos sirve para conocernos, ver tu nivel, hablar de tus objetivos y decidir si puedo ayudarte.',
    },
  },
  business: {
    en: {
      eyebrow: '',
      title: 'Business English classes for companies and professionals',
      intro:
        'Practical English classes with a bilingual teacher for professionals, teams and freelancers who need to use English more clearly in meetings, presentations, interviews and day-to-day work.',
      primaryCta: 'Book a first call',
      secondaryCta: 'Ask about company classes',
      badges: ['Invoice with NIF', 'Online or local', 'Teams and professionals'],
      proofTitle: 'Professional, practical and trackable',
      proofText:
        'I work professionally as a registered autónomo in Spain, so I can issue invoices with NIF. The classes stay focused on real communication.',
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
          text: 'Your student portal keeps vocabulary, materials and review work organised between classes.',
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
      primaryCta: 'Reserva una primera llamada',
      secondaryCta: 'Consulta clases para empresa',
      badges: ['Factura con NIF', 'Online o presencial', 'Equipos y profesionales'],
      proofTitle: 'Profesional, práctico y con seguimiento',
      proofText:
        'Trabajo de forma profesional como autónomo, así que puedo emitir factura con NIF. Las clases se centran en comunicación real.',
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
          text: 'El portal mantiene vocabulario, materiales y repaso organizados para seguir avanzando entre clases.',
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
    visual: classMomentInPersonRoom,
    visualAlt: 'In-person English class in Castelldefels',
    supportVisual: classMomentOnlineLesson,
    supportAlt: 'Online English class with Auris',
    finalIcon: Calendar,
  },
  business: {
    talkHref: 'https://wa.me/34684082221?text=Hola%20Auris%2C%20queria%20consultar%20clases%20de%20ingles%20para%20empresa%20o%20profesionales.',
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
            {content.eyebrow && (
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary-700">
                <Sparkles className="h-3.5 w-3.5" />
                {content.eyebrow}
              </div>
            )}
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

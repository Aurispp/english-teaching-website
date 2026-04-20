import React from 'react';
import { Check, Sparkles, UserCircle, Users, BookOpen, BarChart3, Mic, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FeatureItem = ({ text }) => (
  <li className="flex items-start gap-3">
    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
      <Check className="w-3 h-3" strokeWidth={3} />
    </span>
    <span className="text-gray-700">{text}</span>
  </li>
);

const PriceCard = ({
  icon: Icon,
  title,
  description,
  price,
  perHour,
  features,
  ctaLabel,
  ctaHref,
  popular,
  popularLabel,
}) => (
  <div
    className={`relative rounded-3xl bg-white transition-all duration-300 hover:-translate-y-1 ${
      popular
        ? 'shadow-2xl ring-2 ring-primary-500 md:scale-[1.02]'
        : 'shadow-md hover:shadow-xl ring-1 ring-gray-100'
    }`}
  >
    {popular && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <span className="inline-flex items-center gap-1 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          <Sparkles className="w-3 h-3" />
          {popularLabel}
        </span>
      </div>
    )}

    <div className="p-8 sm:p-10">
      <div className="flex items-center gap-3 mb-2">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary-50 text-primary-600">
          <Icon className="w-5 h-5" />
        </span>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-sm text-gray-500 mb-6">{description}</p>

      <div className="flex items-baseline gap-1 mb-8">
        <span className="text-5xl font-display font-light text-gray-900">{price}</span>
        <span className="text-gray-500 text-sm">/ {perHour}</span>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((f, i) => (
          <FeatureItem key={i} text={f} />
        ))}
      </ul>

      <a
        href={ctaHref}
        className={`group inline-flex w-full items-center justify-center px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
          popular
            ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 hover:shadow-lg'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {ctaLabel}
      </a>
    </div>
  </div>
);

const PricingSection = () => {
  const { t } = useLanguage();

  const includedIcons = [Layers, BookOpen, Mic, BarChart3];
  const includedItems = t('pricing.included.items');

  return (
    <section
      id="pricing"
      className="relative py-20 sm:py-28 px-4 overflow-hidden bg-gradient-to-b from-white via-amber-50/30 to-white"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-40" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            {t('pricing.trialClass')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-light mb-3">
            {t('pricing.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PriceCard
            icon={UserCircle}
            title={t('pricing.private.title')}
            description={t('pricing.private.description')}
            price={t('pricing.private.price')}
            perHour={t('pricing.perHour')}
            features={t('pricing.private.features')}
            ctaLabel={t('pricing.trialCta')}
            ctaHref="#contact"
            popular
            popularLabel={t('pricing.mostPopular')}
          />
          <PriceCard
            icon={Users}
            title={t('pricing.group.title')}
            description={t('pricing.group.description')}
            price={t('pricing.group.price')}
            perHour={t('pricing.perHour')}
            features={t('pricing.group.features')}
            ctaLabel={t('pricing.group.waitlist')}
            ctaHref="#book-group"
          />
        </div>

        {/* Included-with-every-class strip */}
        <div className="mt-14 max-w-4xl mx-auto rounded-2xl bg-white ring-1 ring-gray-100 shadow-sm p-6 sm:p-8">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-5">
            {t('pricing.included.title')}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {includedItems.map((item, i) => {
              const Icon = includedIcons[i] || Check;
              return (
                <div key={i} className="flex flex-col items-center text-center gap-2">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-50 text-primary-600">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="text-sm text-gray-700 leading-snug">{item}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FeatureItem = ({ text }) => (
  <li className="flex items-start gap-3">
    <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary-500" strokeWidth={2.25} aria-hidden="true" />
    <span className="text-gray-700">{text}</span>
  </li>
);

const PriceCard = ({
  title,
  description,
  price,
  perHour,
  features,
  ctaLabel,
  ctaHref,
}) => (
  <div className="rounded-2xl bg-white shadow-sm ring-1 ring-primary-100/60">
    <div className="p-8 sm:p-10">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 mb-6 text-sm text-gray-500">{description}</p>

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
        className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-gray-900 ring-1 ring-gray-200 transition-colors hover:bg-gray-50 hover:ring-gray-300"
      >
        {ctaLabel}
      </a>
    </div>
  </div>
);

const PricingSection = () => {
  const { t, language } = useLanguage();

  const businessLinkLabel = language === 'es'
    ? 'Ver inglés para empresas y profesionales'
    : 'See English for companies and professionals';

  return (
    <section id="pricing" className="bg-amber-50/70 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <h2 className="font-display text-3xl font-light sm:text-4xl">
            {t('pricing.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-gray-600">
            {t('pricing.availability.note')}
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
          <PriceCard
            title={t('pricing.private.title')}
            description={t('pricing.private.description')}
            price={t('pricing.private.price')}
            perHour={t('pricing.perHour')}
            features={t('pricing.private.features')}
            ctaLabel={t('pricing.trialCta')}
            ctaHref="#contact"
          />
          <PriceCard
            title={t('pricing.group.title')}
            description={t('pricing.group.description')}
            price={t('pricing.group.price')}
            perHour={t('pricing.perHour')}
            features={t('pricing.group.features')}
            ctaLabel={t('pricing.group.waitlist')}
            ctaHref="#contact"
          />
        </div>

        <div className="mx-auto mt-14 max-w-[56ch] border-t border-primary-100 pt-8 text-center">
          <p className="text-sm font-semibold text-gray-900">{t('pricing.billing.title')}</p>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">{t('pricing.billing.description')}</p>
          <a
            href="/ingles-empresas-castelldefels"
            className="mt-3 inline-flex text-sm font-medium text-primary-700 underline decoration-primary-200 underline-offset-4 transition-colors hover:text-primary-800 hover:decoration-primary-500"
          >
            {businessLinkLabel}
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

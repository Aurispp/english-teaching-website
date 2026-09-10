import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div>
    <button
      onClick={onClick}
      aria-expanded={isOpen}
      className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-primary-50/40 sm:px-8"
    >
      <span className="font-medium text-gray-900">{question}</span>
      <ChevronDown
        className={`h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        strokeWidth={1.75}
        aria-hidden="true"
      />
    </button>
    <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
      <div className="overflow-hidden">
        <p className="max-w-[64ch] px-6 pb-6 leading-relaxed text-gray-600 sm:px-8">{answer}</p>
      </div>
    </div>
  </div>
);

const FAQSection = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);
  const faqData = t('faq');

  return (
    <section id="faq" className="bg-amber-50/70 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="mb-12 text-center font-display text-3xl font-light sm:mb-16 sm:text-4xl">
          {faqData.title}
        </h2>
        <div className="divide-y divide-primary-100/70 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-primary-100/60">
          {faqData.questions.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

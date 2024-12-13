import React from 'react';
import { useLanguage } from './context/LanguageContext';

const ScenariosSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="w-full">
      {/* First Scenario */}
      <div className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-display text-slate-800 font-light">
                Looking to break through your English plateau?
              </h2>
              
              <div className="space-y-4 text-slate-600">
                <p>
                  You've been learning English for a while, and can handle basic conversations, 
                  but something's still holding you back. Maybe you're translating in your head, 
                  or freezing up during important moments at work.
                </p>
                
                <p>
                  It's OK - you can communicate, but you're not yet at the level of confidence 
                  and fluency you need for your career. All too often this leads to missed 
                  opportunities, stress before important meetings, or settling for roles below 
                  your true potential.
                </p>
                
                <p>
                  You want to finally break free from these limitations and speak English as 
                  confidently as you do Spanish.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                <p className="text-slate-700 italic">
                  "My student Oscar went from avoiding English calls to confidently leading 
                  international meetings. Ana, who struggled with pronunciation, now comfortably 
                  gives presentations to English-speaking clients."
                </p>
              </div>
              
              <button className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300">
                Let's break through your plateau
              </button>
            </div>
            
            <div className="relative">
              <img 
                src="/api/placeholder/600/400"
                alt="Professional speaking confidently"
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Scenario */}
      <div className="bg-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-display text-slate-800 font-light">
                Starting fresh with English?
              </h2>
              
              <div className="space-y-4 text-slate-600">
                <p>
                  Or perhaps you're at the beginning of your English journey. You've got 
                  motivation, but you're not sure how to avoid the common pitfalls that make 
                  so many people give up.
                </p>
                
                <p>
                  You might have had discouraging experiences at school, or feel overwhelmed 
                  by traditional teaching methods that focus on grammar rules instead of real 
                  communication.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                <p className="text-slate-700 italic">
                  "My student José Antonio started from zero and now confidently handles any 
                  conversation. What made the difference? We focused on practical communication 
                  from day one, not just textbook exercises."
                </p>
              </div>

              <p className="text-slate-600">
                I've helped hundreds of students transform their relationship with English, 
                using methods that actually work in real-life situations.
              </p>
              
              <button className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                Start your English journey
              </button>
            </div>
            
            <div className="lg:order-1 relative">
              <img 
                src="/api/placeholder/600/400"
                alt="Student learning English naturally"
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScenariosSection;
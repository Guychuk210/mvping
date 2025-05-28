"use client";

import { motion } from 'framer-motion';

/**
 * Interface for process step props
 */
interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

/**
 * Process step component
 */
const ProcessStep = ({ number, title, description, icon, delay = 0 }: ProcessStepProps) => {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Number indicator */}
      <div className="absolute right-0 -top-2 md:right-8 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg z-10">
        {number}
      </div>
      
      {/* Content */}
      <div className="bg-white rounded-xl shadow-md p-6 pr-16 md:pr-24">
        <div className="text-blue-600 mb-4 text-3xl">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      
      {/* Connector line - visible only on medium screens and up */}
      {number < 4 && (
        <div className="hidden md:block absolute h-12 w-0.5 bg-blue-200 bottom-0 right-12 translate-y-full z-0"></div>
      )}
    </motion.div>
  );
};

/**
 * Process section showing the development steps
 */
const Process = () => {
  // Icons for process steps
  const ideaIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
  
  const designIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  );
  
  const developIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
  
  const launchIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  );

  return (
    <section id="process" className="py-20 px-4 sm:px-8 md:px-16 bg-gray-50">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            <span className="text-blue-600">התהליך</span> שלנו
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            תהליך פיתוח יעיל וברור המאפשר להעביר את הרעיון שלך מקונספט לאפליקציה עובדת
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto space-y-12">
          <ProcessStep 
            number={1}
            title="שלב הרעיון"
            description="שיחת טלפון קצרה לוודא שאנחנו משדרים על אותו הגל, ויש עם מי לעבוד.
            נדבר על שלבים להמש, דרך עבודה משותפת ותמחור. 
            פגישת התנעה להבנת החזון שלך וניתוח הצרכים - מה הבעיה שאנחנו פותרים ולמי?"
            icon={ideaIcon}
            delay={0.1}
          />
          
          <ProcessStep 
            number={2}
            title="פגישת התנעה"
            description="ניפגש ונדבר על המסכים לאפליקציה, השימוש בה, המאפיינים שלהם והצרכים הסופיים (הקפה עלי). לא נשאיר שום קצוות פתוחים."
            icon={designIcon}
            delay={0.2}
          />
          
          <ProcessStep 
            number={3}
            title="פיתוח MVP"
            description="בניית האפליקציה תוך עדכונים שוטפים, פגישות סטטוס ומשוב מתמיד לאורך התהליך"
            icon={developIcon}
            delay={0.3}
          />
          
          <ProcessStep 
            number={4}
            title="השקה לחנויות"
            description="העלאת האפליקציה לחנויות האפליקציות, כולל הכנת חומרים משפטיים ותמיכה בתהליך האישור"
            icon={launchIcon}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default Process; 
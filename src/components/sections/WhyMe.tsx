"use client";

import { motion } from 'framer-motion';

/**
 * Interface for advantage item props
 */
interface AdvantageItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

/**
 * Advantage item component
 */
const AdvantageItem = ({ icon, title, description, delay = 0 }: AdvantageItemProps) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="text-blue-600 mb-4 text-4xl">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

/**
 * Why Me section highlighting unique advantages
 */
const WhyMe = () => {
  return (
    <section id="why-me" className="py-20 px-4 sm:px-8 md:px-16 bg-gray-50">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            למה <span className="text-blue-600">אני</span>?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            כשאתה יזם צעיר, אתה צריך פיתוח שבאמת מבין אותך - מהיר, שקוף ובתקציב שמתאים למי שרק מתחיל
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AdvantageItem 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>}
            title="מחירים נגישים"
            description="תמחור גמיש ותחרותי שמתאים במיוחד ליזמים צעירים וסטארטאפים בתחילת דרכם"
            delay={0.1}
          />
          
          <AdvantageItem 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>}
            title="זמנים קצרים"
            description="תהליך עבודה יעיל ומהיר המאפשר לך להשיק את המוצר שלך במהירות וללא עיכובים מיותרים"
            delay={0.2}
          />
          
          <AdvantageItem 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>}
            title="תקשורת בגובה העיניים"
            description="שיחות ברורות ומובנות, פגישות קבועות ועדכונים שוטפים לאורך כל תהליך הפיתוח"
            delay={0.3}
          />
        </div>
        
        {/* Second row of perks */}
        <div className="mt-12 bg-blue-600 rounded-2xl shadow-xl p-8 text-white">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6">שפה משותפת</h3>
            <p className="text-lg max-w-2xl mx-auto">
              אני מדבר בשפה שלך, מבין את האתגרים שלך כיזם צעיר ומלווה אותך צעד אחר צעד בתהליך המאתגר של הפיכת רעיון למוצר אמיתי.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe; 
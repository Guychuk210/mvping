"use client";

import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';

/**
 * Hero section with animated search/chat input
 */
const Hero = () => {
  // Array of app ideas to cycle through
  const appIdeas = [
    "אפליקציית דייטינג עם טוויסט",
    "פלטפורמה להזמנת שירותים הביתה",
    "רשת חברתית למוזיקאים",
    "משחק נייד מבוסס AI"
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 relative bg-white">
      {/* Background gradient and design elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10"></div>
      
      {/* Animated circles */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-100 opacity-20 -z-5"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-purple-100 opacity-20 -z-5"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="container mx-auto text-center z-10">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          אפליקציית MVP <br className="md:hidden" />
          <span className="text-blue-600">בקצב שלך</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          הפוך את הרעיון שלך למציאות - פיתוח מהיר, תקשורתי, ובתקציב לסטארטאפים ויזמים צעירים
        </motion.p>
        
        {/* Animated chat/search bar */}
        <motion.div 
          className="relative max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            <div className="bg-white rounded-lg shadow-lg p-4 flex items-center border-2 border-gray-200 hover:border-blue-400 transition-all">
              <div className="flex-1 text-right">
                <ReactTyped
                  strings={appIdeas}
                  typeSpeed={40}
                  backSpeed={30}
                  backDelay={2000}
                  loop
                  className="text-gray-500 focus:outline-none w-full text-lg"
                  placeholder="מה אתה רוצה לבנות?"
                />
              </div>
              <div className="text-blue-500 ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* CTA Button */}
        <motion.button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl shadow-lg transform transition-all hover:scale-105 active:scale-100"
          onClick={scrollToContact}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          בוא נבנה את זה
        </motion.button>
      </div>
    </section>
  );
};

export default Hero; 
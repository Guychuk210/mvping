"use client";

import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { useState } from 'react';
import { useAppContext } from '@/contexts/AppContext';

/**
 * Hero section with animated search/chat input and video background
 */
const Hero = () => {
  // App context for sharing data with contact form
  const { setHeroSearchText } = useAppContext();
  
  // Local state for the search input
  const [searchValue, setSearchValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  // Array of app ideas to cycle through
  const appIdeas = [
    "אפליקציית דייטינג עם טוויסט",
    "פלטפורמה להזמנת שירותים הביתה",
    "רשת חברתית למוזיקאים",
    "משחק נייד מבוסס AI"
  ];

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    setIsTyping(value.length > 0);
    setShowPlaceholder(value.length === 0);
  };

  // Handle input focus
  const handleInputFocus = () => {
    setShowPlaceholder(false);
  };

  // Handle input blur
  const handleInputBlur = () => {
    if (searchValue.length === 0) {
      setShowPlaceholder(true);
    }
  };

  const scrollToContact = () => {
    // Set the search text in context before scrolling
    setHeroSearchText(searchValue);
    
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full -z-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Video overlay for tinting and shadowing */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-blue-50/60 to-white/80 -z-10"></div>
      <div className="absolute inset-0 bg-black/10 -z-10"></div>
      
      {/* Animated circles - now with more contrast */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-200/30 backdrop-blur-sm -z-5"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-purple-200/30 backdrop-blur-sm -z-5"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="container mx-auto text-center z-10 relative">
        <motion.h1 
          className="text-3xl sm:text-5xl md:text-3xl font-bold mb-6 text-gray-900 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          הרעיון שלך, ב- App Store <br className="md:hidden" />
          <span className="text-blue-700 drop-shadow-md">תוך 7 ימי עבודה</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-800 mb-12 max-w-2xl mx-auto drop-shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          הפוך את הרעיון שלך למציאות - פיתוח מהיר, תקשורתי, ובתקציב ליזמים צעירים
        </motion.p>
        
        {/* Animated chat/search bar */}
        <motion.div 
          className="relative max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative text-md text-gray-700 drop-shadow-sm">
            ספר לי על הרעיון שלך במשפט:
            <br></br><br></br>
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-4 flex items-center border-2 border-gray-200/50 hover:border-blue-400/70 transition-all hover:bg-white/98">
              <div className="flex-1 text-right relative">
                {/* Actual input field */}
                <input
                  type="text"
                  value={searchValue}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  className="w-full text-lg text-gray-800 bg-transparent focus:outline-none placeholder-transparent"
                  placeholder=""
                  dir="rtl"
                />
                
                {/* Animated placeholder when not typing */}
                {showPlaceholder && !isTyping && (
                  <div className="absolute inset-0 pointer-events-none">
                    <ReactTyped
                      strings={appIdeas}
                      typeSpeed={40}
                      backSpeed={30}
                      backDelay={2000}
                      loop
                      className="text-gray-500 text-lg"
                    />
                  </div>
                )}
              </div>
              <div className="text-blue-600 ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* CTA Button */}
        <motion.button
          className="bg-blue-600/95 hover:bg-blue-700/95 text-white font-bold py-4 px-8 rounded-lg text-xl shadow-xl backdrop-blur-sm transform transition-all hover:scale-105 active:scale-100 border border-blue-500/20"
          onClick={scrollToContact}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          בוא נדבר על זה
        </motion.button>
      </div>
    </section>
  );
};

export default Hero; 
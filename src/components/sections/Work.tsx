"use client";

import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

// CSS-based arrow components
const ChevronLeftIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

/**
 * Interface for swipeable gallery props
 */
interface SwipeableGalleryProps {
  images: string[];
  alt: string;
}

/**
 * Swipeable gallery component for app screenshots - shows 3 images side by side
 */
const SwipeableGallery = ({ images, alt }: SwipeableGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Show 3 images at a time
  const imagesPerView = 3;
  const maxIndex = Math.max(0, images.length - imagesPerView);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    const newIndex = currentIndex + newDirection;
    if (newIndex >= 0 && newIndex <= maxIndex) {
      setCurrentIndex(newIndex);
    }
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  return (
    <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-xl overflow-hidden">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          custom={currentIndex}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
        >
          <div className="flex h-full gap-1.5 p-2">
            {images.slice(currentIndex, currentIndex + imagesPerView).map((image, index) => (
              <div key={currentIndex + index} className="flex-1 relative">
                <Image
                  src={image}
                  alt={`${alt} - screenshot ${currentIndex + index + 1}`}
                  fill
                  className="object-contain rounded-md"
                  priority={currentIndex === 0 && index === 0}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      {currentIndex > 0 && (
        <button
          onClick={() => paginate(-1)}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-1.5 shadow-md hover:bg-white transition-all duration-200 z-10"
        >
          <ChevronLeftIcon className="w-4 h-4 text-gray-700" />
        </button>
      )}

      {currentIndex < maxIndex && (
        <button
          onClick={() => paginate(1)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-1.5 shadow-md hover:bg-white transition-all duration-200 z-10"
        >
          <ChevronRightIcon className="w-4 h-4 text-gray-700" />
        </button>
      )}

      {/* Dots indicator */}
      {maxIndex > 0 && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 z-10">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-blue-600 w-4'
                  : 'bg-white/60 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      )}

      {/* Images counter */}
      <div className="absolute top-2 right-2 bg-black/20 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
        {currentIndex + 1}-{Math.min(currentIndex + imagesPerView, images.length)}/{images.length}
      </div>
    </div>
  );
};

/**
 * Interface for project item props
 */
interface ProjectItemProps {
  name: string;
  description: string;
  images: string[];
  delay?: number;
  appStoreUrl?: string;
  features?: string[];
}

/**
 * Project item component with swipeable gallery
 */
const ProjectItem = ({ name, description, images, delay = 0, appStoreUrl, features = [] }: ProjectItemProps) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <SwipeableGallery images={images} alt={name} />
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-800">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {/* Features */}
        {features.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">תכונות עיקריות:</h4>
            <div className="flex flex-wrap gap-2">
              {features.map((feature, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">
              באפסטור
            </div>
            <div className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">
              משתמשים פעילים
            </div>
          </div>
          
          {appStoreUrl && (
            <motion.button
              onClick={() => window.open(appStoreUrl, '_blank')}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              צפה באפליקציה →
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

/**
 * Work section showcasing completed projects
 */
const Work = () => {
  // Dairy app images
  const dairyImages = [
    '/dairy/0x0ss.png',
    '/dairy/0x0ss (1).png',
    '/dairy/0x0ss (2).png',
    '/dairy/0x0ss (3).png',
    '/dairy/0x0ss (4).png'
  ];

  // Numah app images  
  const numahImages = [
    '/numah/image3.png',
    '/numah/image6.png',
    '/numah/image7.png',
    '/numah/image12.png',
    '/numah/image13.png'
  ];

  return (
    <section id="work" className="py-20 px-4 sm:px-8 md:px-16 bg-white">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            <span className="text-blue-600">העבודה</span> שלי
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            מפתח אפליקציות שלא רק נמצאות בסטור, אלא מתפקדות עם משתמשים אמיתיים
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <ProjectItem 
            name="Dairy AI"
            description="אפליקציה לניהול וטיפוח של צמחים ביתיים עם התראות השקיה מותאמות אישית ומערכת זיהוי מחלות באמצעות AI"
            images={dairyImages}
            features={['זיהוי מחלות בצמחים', 'התראות השקיה חכמות', 'מעקב צמיחה', 'קהילת גננים']}
            delay={0.1}
          />
          
          <ProjectItem 
            name="Numah"
            description="פלטפורמה המחברת בין שפים ביתיים לבין אנשים המחפשים אוכל ביתי, כולל מערכת הזמנות, תשלומים ודירוגים"
            images={numahImages}
            features={['התאמה בין שפים ולקוחות', 'מערכת תשלומים מאובטחת', 'דירוגים וחוות דעת', 'ניהול הזמנות']}
            delay={0.2}
          />
        </div>
        
        {/* Additional highlight */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 max-w-4xl mx-auto text-center border border-blue-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800">רוצה להיות הבא?</h3>
          <p className="text-gray-700 text-lg mb-6">
            הרעיון שלך יכול להפוך למציאות. בוא נדבר על איך להעלות אותו לחנויות האפליקציות.
          </p>
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg shadow-md"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            דבר איתי
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Work; 
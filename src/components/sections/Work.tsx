"use client";

import { motion } from 'framer-motion';

/**
 * Interface for project item props
 */
interface ProjectItemProps {
  name: string;
  description: string;
  imageUrl?: string;
  delay?: number;
}

/**
 * Project item component
 */
const ProjectItem = ({ name, description, imageUrl, delay = 0 }: ProjectItemProps) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="h-full w-full object-cover" />
        ) : (
          <div className="text-white text-4xl font-bold">{name.charAt(0)}</div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{name}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="mt-4 flex items-center">
          <div className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">
            באפסטור
          </div>
          <div className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium mr-2">
            משתמשים פעילים
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/**
 * Work section showcasing completed projects
 */
const Work = () => {
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ProjectItem 
            name="EcoTrack"
            description="אפליקציה לניהול וטיפוח של צמחים ביתיים עם התראות השקיה מותאמות אישית ומערכת זיהוי מחלות באמצעות AI"
            delay={0.1}
          />
          
          <ProjectItem 
            name="LocalEats"
            description="פלטפורמה המחברת בין שפים ביתיים לבין אנשים המחפשים אוכל ביתי, כולל מערכת הזמנות, תשלומים ודירוגים"
            delay={0.2}
          />
        </div>
        
        {/* Additional highlight */}
        <motion.div 
          className="mt-16 bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800">רוצה להיות הבא?</h3>
          <p className="text-gray-700 text-lg">
            הרעיון שלך יכול להפוך למציאות. בוא נדבר על איך להעלות אותו לחנויות האפליקציות.
          </p>
          <motion.button
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
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
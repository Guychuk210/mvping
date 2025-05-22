"use client";

import { motion } from 'framer-motion';

/**
 * About section showcasing personal journey and expertise
 */
const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-8 md:px-16 bg-white">
      <div className="container mx-auto">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            מי <span className="text-blue-600">אני</span>?
          </h2>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* Profile image placeholder */}
            <motion.div 
              className="md:w-1/3 relative"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-64 h-64 md:w-full md:h-auto aspect-square rounded-full md:rounded-lg overflow-hidden shadow-lg bg-gray-200 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </motion.div>
            
            {/* About text */}
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center md:text-right">גיא לוי, 27</h3>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  בוגר מדעי המחשב ויזמות באוניברסיטה בישראל עם תואר מצטיין - 3 שנים ברשימת הדיקן.
                </p>
                <p>
                  התחלתי את דרכי המקצועית בגיל 21 כמנהל מוצר בחברת פינטק, שם למדתי להבין את הצד העסקי של המוצר ואת החיבור החיוני בין צרכי המשתמש לטכנולוגיה.
                </p>
                <p>
                  כיום אני מפתח פולסטאק, יזם בעצמי שפיתח והעלה 2 אפליקציות לאפסטור – עם משתמשים אמיתיים.
                </p>
                <p>
                  <strong className="text-blue-700">אני מבין בדיוק את הפער בין רעיון לביצוע</strong> – זה בדיוק מה שאני פותר עבור יזמים צעירים ואפתניסטים כמוך.
                </p>
                <p>
                  הגישה שלי: <strong className="text-blue-700">מהיר, מקצועי, תקשורתי</strong> – בדיוק כמו שאתה היית רוצה בעצמך.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 
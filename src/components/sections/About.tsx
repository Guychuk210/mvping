"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

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
            {/* Profile image */}
            <motion.div 
              className="md:w-1/3 relative"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-64 h-64 md:w-full md:h-auto aspect-square rounded-full md:rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/profile.JPG"
                  alt="גיא לוי - מפתח פולסטאק ויזם"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </motion.div>
            
            {/* About text */}
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center md:text-right">גיא, 27</h3>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  התחלתי את דרכי המקצועית בגיל 21 כמנהל מוצר בעולמות פינטק, שם למדתי להבין את הצד העסקי של מוצר ואת החיבור החיוני בין צרכי המשתמש לטכנולוגיה.
                </p>
                <p>
                  בוגר מדעי המחשב ויזמות באוניברסיטת רייכמן, ומצטיין דיקן בכל שנות הלימודים.
                </p>
                <p>
                  כיום אני יזם טכנולוגי ומפתח תוכנה במקצועי. פיתחתי והעליתי מספר אפליקציות לאפסטור – &nbsp;&nbsp; עם משתמשים אמיתיים.
                </p>
                <p>
                  <strong className="text-blue-700">אני מבין בדיוק את הפער בין רעיון לביצוע</strong> – &nbsp;&nbsp; אני הפתרון הטכנולוגי שלך. זה בדיוק מה שאני פותר עבור יזמים צעירים ושאפתנים כמוך.
                </p>
                <p>
                  הגישה שלי: <strong className="text-blue-700">מהיר, מקצועי, תקשורתי</strong> – <br></br> חבר בגובה העיניים שמטפל בכל אתגר טכנולוגי.
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
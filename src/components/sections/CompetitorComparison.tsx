"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

/**
 * Interface for competitor item props
 */
interface CompetitorItemProps {
  name: string;
  logo: string;
  issue: string;
  description: string;
  delay?: number;
}

/**
 * Competitor item component with floating animation
 */
const CompetitorItem = ({ name, logo, issue, description, delay = 0 }: CompetitorItemProps) => {
  return (
    <motion.div 
      className="bg-red-50 border border-red-200 rounded-xl p-6 text-center relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Animated logo */}
      <motion.div 
        className="w-16 h-16 mx-auto mb-4 relative"
        animate={{
          y: [-5, 5, -5],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay * 0.5
        }}
      >
        <Image
          src={`/competitors/${logo}`}
          alt={`${name} logo`}
          fill
          className="object-contain rounded-lg"
        />
      </motion.div>
      
      <h4 className="font-bold text-red-700 mb-2 text-lg">{name}</h4>
      <h5 className="font-semibold text-red-600 mb-3 text-sm">{issue}</h5>
      <p className="text-red-600 text-sm">{description}</p>
      
      {/* Falling effect overlay */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 0.1, 0] }}
        transition={{ duration: 2, delay: delay + 1 }}
      >
        <div className="w-full h-full bg-gradient-to-b from-transparent via-red-100 to-transparent"></div>
      </motion.div>
    </motion.div>
  );
};

/**
 * Competitor Comparison section addressing "why do I need you?"
 */
const CompetitorComparison = () => {
  return (
    <section id="competitor-comparison" className="py-20 px-4 sm:px-8 md:px-16 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="container mx-auto relative z-10">
        {/* Title with throwing animation */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-red-500">רגע</span>,  מה אני צרי-  🤔
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-700 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
          כולנו מכירים את לובאבל, בולט, בייס והחברים... <br />
            <strong className="text-red-600">אבל האמת? הם לא פותרים את הבעיה שלך! 🎯</strong>
          </motion.p>
        </motion.div>

        {/* Throwing logos animation */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex justify-center items-center space-x-8 mb-8">
            {/* Logos being "thrown" */}
            <motion.div 
              className="w-20 h-20 relative"
              initial={{ y: 150, rotate: 0, scale: 0.2, opacity: 0 }}
              whileInView={{ 
                y: [-300, -500, 0], 
                rotate: [0, 1440, 2160],
                scale: [0.2, 1.5, 1],
                opacity: [0, 1, 1]
              }}
              transition={{ 
                duration: 3, 
                ease: ["easeOut", "easeOut", "easeIn"],
                times: [0, 0.3, 1],
                delay: 0.2
              }}
              viewport={{ once: true }}
            >
              <Image
                src="/competitors/bolt.jpg"
                alt="Bolt"
                fill
                className="object-contain rounded-lg"
              />
            </motion.div>
            
            <motion.div 
              className="w-20 h-20 relative"
              initial={{ y: 180, rotate: 0, scale: 0.1, opacity: 0 }}
              whileInView={{ 
                y: [-350, -600, 0], 
                rotate: [0, -1800, -2520],
                scale: [0.1, 1.8, 1],
                opacity: [0, 1, 1]
              }}
              transition={{ 
                duration: 3.5, 
                ease: ["easeOut", "easeOut", "easeIn"],
                times: [0, 0.25, 1],
                delay: 0.4
              }}
              viewport={{ once: true }}
            >
              <Image
                src="/competitors/lovable.png"
                alt="Lovable"
                fill
                className="object-contain rounded-lg"
              />
            </motion.div>
            
            <motion.div 
              className="w-20 h-20 relative"
              initial={{ y: 120, rotate: 0, scale: 0.3, opacity: 0 }}
              whileInView={{ 
                y: [-250, -450, 0], 
                rotate: [0, 2160, 3240],
                scale: [0.3, 1.6, 1],
                opacity: [0, 1, 1]
              }}
              transition={{ 
                duration: 2.8, 
                ease: ["easeOut", "easeOut", "easeIn"],
                times: [0, 0.35, 1],
                delay: 0.6
              }}
              viewport={{ once: true }}
            >
              <Image
                src="/competitors/base44.webp"
                alt="Base44"
                fill
                className="object-contain rounded-lg"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Combined Problems Section */}
        <motion.div 
          className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-xl p-8 text-white mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">🚫 הבעיות עם הכלים האלה</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div 
                className="bg-white/10 rounded-lg p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <strong className="block mb-2 text-lg">🎭 תבניות גנריות</strong>
                <p className="text-sm">
                  קוד שנראה זהה לכולם, בלי התאמה אישית לעסק שלך או לקהל היעד הספציפי
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 rounded-lg p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ transitionDelay: '0.3s' }}
              >
                <strong className="block mb-2 text-lg">🎯 חסר הבנה עסקית</strong>
                <p className="text-sm">
                  AI יכול לכתוב קוד, אבל לא יעזור לך להבין איך למכור את המוצר, מי הלקוחות שלך ואיך להרוויח
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 rounded-lg p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ transitionDelay: '0.4s' }}
              >
                <strong className="block mb-2 text-lg">🔧 קוד שביר</strong>
                <p className="text-sm">
                  נראה טוב בהתחלה, אבל מתמוטט ברגע שצריך לשנות או להוסיף תכונות. ואז אתה נתקע לבד!
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 rounded-lg p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ transitionDelay: '0.5s' }}
              >
                <strong className="block mb-2 text-lg">💬 אפס תקשורת</strong>
                <p className="text-sm">
                  אי אפשר לשאול שאלות, לקבל עצות או להתייעץ על כיוון המוצר. בוט זה בוט 🤷‍♂️
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Human Solution - Clickable CTA */}
        <motion.button
          onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white text-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">👨‍💻 הפתרון: בן אדם אמיתי!</h3>
          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-6">
            אני לא רק מפתח קוד - <strong>אני שותף עסקי שמבין את החלום שלך</strong>. <br />
            מדבר בשפה שלך, מבין את האתגרים שלך כיזם צעיר ומלווה אותך צעד אחר צעד בתהליך המאתגר של הפיכת רעיון למוצר אמיתי <strong>שמכניס כסף</strong>! 💰
          </p>
          
          <div className="inline-flex items-center space-x-4 bg-white/20 rounded-full px-8 py-4 border-2 border-white/30 hover:bg-white/30 transition-all duration-300">
            <span className="text-2xl">🚀</span>
            <span className="font-bold text-md">מרעיון למוצר בשבוע</span>
          </div>
        </motion.button>
      </div>
    </section>
  );
};

export default CompetitorComparison; 
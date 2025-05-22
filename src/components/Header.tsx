"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Navigation header component
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Update header appearance on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };
  
  // Nav items
  const navItems = [
    { name: 'בית', id: 'hero' },
    { name: 'עליי', id: 'about' },
    { name: 'למה אני', id: 'why-me' },
    { name: 'העבודה שלי', id: 'work' },
    { name: 'התהליך', id: 'process' },
    { name: 'צור קשר', id: 'contact' },
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 px-4 w-full ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className={`text-xl font-bold ${isScrolled ? 'text-blue-600' : 'text-blue-600'}`}>
            גיא לוי
          </span>
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              className={`px-2 py-2 mr-6 font-medium hover:text-blue-600 ${
                isScrolled ? 'text-gray-700' : 'text-gray-800'
              }`}
              onClick={() => scrollToSection(item.id)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              {item.name}
            </motion.button>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto py-4 px-6 flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  className="py-2 text-right font-medium text-gray-700 hover:text-blue-600"
                  onClick={() => scrollToSection(item.id)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 
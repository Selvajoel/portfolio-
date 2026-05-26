import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-black font-outfit tracking-tighter"
          >
            <span className="text-gradient">SELVAJOEL S.</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 glass px-8 py-3 rounded-full border-white/5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <motion.a whileHover={{ y: -2 }} href="https://github.com/Selvajoel" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white"><FaGithub size={20} /></motion.a>
            <motion.a whileHover={{ y: -2 }} href="https://www.linkedin.com/in/selvajoel-s-320770344" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white"><FaLinkedin size={20} /></motion.a>
            <a href="/Selvajoel_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary py-2 px-6 text-sm inline-block">Resume</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/80 hover:text-white"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent origin-left w-full"
          style={{ scaleX }}
        />
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 md:hidden bg-dark/95 backdrop-blur-2xl flex flex-col items-center justify-center space-y-12"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-bold font-outfit text-white hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-8 pt-8 border-t border-white/10 w-48 justify-center">
              <a href="https://github.com/Selvajoel" target="_blank" rel="noopener noreferrer"><FaGithub size={24} className="text-white/60 hover:text-white" /></a>
              <a href="https://www.linkedin.com/in/selvajoel-s-320770344" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} className="text-white/60 hover:text-white" /></a>
              <a href="https://www.instagram.com/j0elllllll?igsh=MXIwYTYxbXl2YmZlbw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} className="text-white/60 hover:text-white" /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

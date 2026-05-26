import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import AnimatedCursor from './components/AnimatedCursor';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-dark overflow-hidden font-inter text-white selection:bg-primary selection:text-white">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="bg-mesh bg-grid fixed inset-0 z-[-1]" />
            <AnimatedCursor />
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Certifications />
              <Contact />
            </main>
            <footer className="py-12 glass border-t-0 rounded-none text-center text-white/40 text-sm">
              <p>© {new Date().getFullYear()} Selvajoel S. Crafted with ❤️ and React.</p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, MousePointer2 } from 'lucide-react';
import ThreeBackground from './ThreeBackground';

const Hero = () => {
  const [skillText, setSkillText] = useState('');
  const skills = ["Excel", "Power BI", "SQL", "Python", "Tableau", "Data Visualization"];
  const [skillIndex, setSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const current = skills[skillIndex];
      if (isDeleting) {
        setSkillText(current.substring(0, skillText.length - 1));
      } else {
        setSkillText(current.substring(0, skillText.length + 1));
      }

      if (!isDeleting && skillText === current) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && skillText === '') {
        setIsDeleting(false);
        setSkillIndex((prev) => (prev + 1) % skills.length);
      }
    };

    const timer = setTimeout(type, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [skillText, isDeleting, skillIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <ThreeBackground />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>AVAILABLE FOR NEW OPPORTUNITIES</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-outfit mb-6 leading-[1.1]">
            Hi, I'm <span className="text-gradient whitespace-nowrap">Selvajoel S</span>
          </h1>

          <div className="min-h-[120px] lg:min-h-[96px] mb-8 group">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-outfit text-white/80 leading-[1.3]">
              Aspiring <span className="text-white">Data Analyst</span> & IT Professional <br />
              Expertise in <span className="text-primary tracking-wider">{skillText}</span>
              <span className="inline-block w-1 h-6 md:h-8 bg-primary ml-1 animate-pulse align-middle"></span>
            </h2>
          </div>

          <p className="text-lg text-white/50 max-w-lg mb-10 leading-relaxed font-light">
            Aspiring Data Analyst passionate about transforming data into meaningful insights and creating clean user-focused digital experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center"
            >
              View Projects
              <ArrowRight className="ml-2" size={18} />
            </motion.a>
            <motion.a
              href="/Selvajoel_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline flex items-center space-x-2"
            >
              <Download size={18} />
              <span>Resume</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group mt-12 lg:mt-0 flex justify-center lg:block"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-30 group-hover:opacity-60 blur-2xl transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-dark via-gray-900 to-primary/20 flex items-center justify-center">
              <img
                src="/profile_new.jpg"
                alt="Selvajoel S"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.target.src = "/profile.jpg";
                }}
              />
              <div className="hidden w-full h-full text-8xl font-black font-outfit items-center justify-center text-white/10">
                SS
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-30"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest">Scroll Down</span>
        <div className="h-10 w-[1px] bg-white"></div>
      </motion.div>
    </section>
  );
};

export default Hero;

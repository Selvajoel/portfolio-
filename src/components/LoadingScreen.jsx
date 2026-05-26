import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark"
    >
      <div className="relative">
        <motion.div
          className="w-24 h-24 border-2 border-primary/20 rounded-full"
          animate={{
            rotate: 360,
            transition: { duration: 2, repeat: Infinity, ease: "linear" }
          }}
        />
        <motion.div
          className="absolute inset-0 w-24 h-24 border-t-2 border-primary rounded-full"
          animate={{
            rotate: 360,
            transition: { duration: 1, repeat: Infinity, ease: "linear" }
          }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xl font-bold text-primary font-outfit">J</span>
        </motion.div>
      </div>
      <motion.div
        className="mt-8 text-white/50 text-sm tracking-[0.2em] font-outfit uppercase"
        animate={{
          opacity: [0.5, 1, 0.5],
          transition: { duration: 2, repeat: Infinity }
        }}
      >
        Initializing Excellence
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Maximize2 } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose, resumeUrl }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-dark/90 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-5xl h-full bg-gray-900 rounded-3xl overflow-hidden glass border border-white/10 flex flex-col shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5">
            <h3 className="text-xl font-bold font-outfit">Resume Preview</h3>
            <div className="flex items-center space-x-4">
              <a 
                href={resumeUrl} 
                download 
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white"
                title="Download Resume"
              >
                <Download size={20} />
              </a>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-red-500/20 hover:text-red-500 rounded-full transition-all text-white/60"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Image Preview */}
          <div className="flex-1 overflow-y-auto bg-white custom-scrollbar p-4 md:p-8 flex justify-center">
            <img 
              src="/resume_image.jpg" 
              alt="Selvajoel S Resume" 
              className="w-full max-w-4xl shadow-lg border border-gray-200"
            />
          </div>

          {/* Footer Overlay for Mobile */}
          <div className="md:hidden p-4 bg-dark/80 backdrop-blur-md border-t border-white/10 text-center">
            <p className="text-xs text-white/40">If the preview doesn't load, use the download icon above.</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResumeModal;

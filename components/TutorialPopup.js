import React from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

const TutorialPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg p-8 shadow-lg text-center max-w-lg mx-auto relative"
      >
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
          <XMarkIcon className="h-6 w-6" />
        </button>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-4 text-black"
        >
          How to Play <span className="text-yellow-500">QUOPT</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 text-lg text-black"
        >
          <strong>Swap letters</strong> to unscramble each word in the quote.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center items-center mb-4"
        >
          <div className="w-10 h-10 bg-gray-300 border border-gray-500 rounded-lg mx-1 flex items-center justify-center" style={{ fontFamily: 'Helvetica', textTransform: 'uppercase' }}>
            A
          </div>
          <div className="w-10 h-10 bg-blue-400 border border-gray-500 rounded-lg mx-1 flex items-center justify-center" style={{ fontFamily: 'Helvetica', textTransform: 'uppercase' }}>
            B
          </div>
          <div className="w-10 h-10 bg-green-400 border border-gray-500 rounded-lg mx-1 flex items-center justify-center" style={{ fontFamily: 'Helvetica', textTransform: 'uppercase' }}>
            C
          </div>
          <div className="w-10 h-10 bg-yellow-400 border border-gray-500 rounded-lg mx-1 flex items-center justify-center" style={{ fontFamily: 'Helvetica', textTransform: 'uppercase' }}>
            D
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-2 text-lg"
        >
          <span className="font-bold text-blue-500">Blue</span>: Selected letter
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-2 text-lg"
        >
          <span className="font-bold text-green-500">Green</span>: Correct position
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-2 text-lg"
        >
          <span className="font-bold text-yellow-500">Yellow</span>: One position away from the correct position
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-4 text-lg text-black"
        >
          <span className="font-bold">Gray</span>: Incorrect position
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Got it!
        </motion.button>
      </motion.div>
    </div>
  );
};

export default TutorialPopup;

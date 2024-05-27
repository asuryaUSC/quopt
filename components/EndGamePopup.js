import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const EndGamePopup = ({ isOpen, onClose, optimalMoves, userMoves, quote, author }) => {
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          <CountUp end={userMoves} duration={2} /> moves
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mb-4 text-xl"
        >
          You were <CountUp end={userMoves - optimalMoves} duration={2} /> away from the optimal solution.
        </motion.p>
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="italic mb-4"
        >
          "{quote}"
        </motion.blockquote>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="mb-4"
        >
          ~ {author}
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          onClick={() => window.location.reload()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Play Again
        </motion.button>
      </motion.div>
    </div>
  );
};

export default EndGamePopup;

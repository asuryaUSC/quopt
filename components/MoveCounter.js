import React from 'react';
import { motion } from 'framer-motion';

const MoveCounter = ({ moves }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-lg p-4 border border-gray-300 shadow-lg text-center mt-4 bg-white w-32 sm:w-48"
    >
      <h2 className="text-lg font-bold">Moves</h2>
      <p className="text-2xl font-bold text-black">{moves}</p>
    </motion.div>
  );
};

export default MoveCounter;
